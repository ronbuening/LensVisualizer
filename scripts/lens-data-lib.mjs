import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { combineFreshnessEntries, getFirstGitFileFreshness } from "./build-metadata-lib.mjs";

/* Keep in sync with src/utils/lensMetadata.ts MAKER_PREFIXES */
const MAKER_PREFIXES = [
  { prefix: "CANON", slug: "canon" },
  { prefix: "CARL ZEISS", slug: "carl-zeiss" },
  { prefix: "FUJIFILM", slug: "fujifilm" },
  { prefix: "FUJINON", slug: "fujifilm" },
  { prefix: "LEICA", slug: "leica" },
  { prefix: "VOIGTLÄNDER", slug: "voigtlander" },
  { prefix: "NIKON", slug: "nikon" },
  { prefix: "OLYMPUS", slug: "olympus" },
  { prefix: "RICOH", slug: "ricoh" },
  { prefix: "VIVITAR", slug: "vivitar" },
];

/** Derive a URL-safe maker slug from a maker field or lens display name. */
function deriveMakerSlug(nameOrMaker) {
  const upper = nameOrMaker.toUpperCase();
  for (const { prefix, slug } of MAKER_PREFIXES) {
    if (upper.startsWith(prefix)) return slug;
  }
  return nameOrMaker.split(/\s+/)[0].toLowerCase();
}

/** Extract the `key`/`name`/`maker` tuple from a lens data file using regexes. */
function extractLensIdentityContent(content) {
  const keyMatch = content.match(/key:\s*"([^"]+)"/);
  const nameMatch = content.match(/name:\s*"([^"]+)"/);
  const makerMatch = content.match(/maker:\s*"([^"]+)"/);

  return {
    key: keyMatch ? keyMatch[1] : null,
    name: nameMatch ? nameMatch[1] : null,
    maker: makerMatch ? makerMatch[1] : null,
  };
}

/** Extract the key/name/maker tuple from a lens data file on disk. */
function extractLensIdentity(filePath, { readFile = readFileSync } = {}) {
  return extractLensIdentityContent(readFile(filePath, "utf-8"));
}

/** Convert a relative `*.data.ts` path to the matching `*.analysis.md` path. */
function analysisRelativePathForDataPath(relativeDataPath) {
  return relativeDataPath.replace(/\.data\.ts$/, ".analysis.md");
}

/** Rewrite the LensDataInput import to match a file's location under src/lens-data. */
function rewriteLensDataTypesImport(filePath, { readFile = readFileSync, writeFile = writeFileSync } = {}) {
  const content = readFile(filePath, "utf-8");
  const relativeDepth = filePath.split("/src/lens-data/")[1]?.split("/").length ?? 1;
  const expectedImport = relativeDepth > 1 ? "../../types/optics.js" : "../types/optics.js";
  const updatedContent = content.replace(/from "\.\.\/(?:\.\.\/)?types\/optics\.js";/, `from "${expectedImport}";`);

  if (updatedContent !== content) {
    writeFile(filePath, updatedContent, "utf-8");
  }
}

/**
 * Index tracked lens data + analysis paths by lens key from HEAD so working-tree
 * moves can preserve original git-derived freshness before the rename commit exists.
 */
function collectTrackedLensRecordsByKey({
  rootDir,
  lensDataDir = join(rootDir, "src", "lens-data"),
  execFile = execFileSync,
} = {}) {
  try {
    const trackedFilesRaw = execFile("git", ["ls-tree", "-r", "--name-only", "HEAD", "--", "src/lens-data"], {
      cwd: rootDir,
      encoding: "utf-8",
    }).trim();

    if (!trackedFilesRaw) return {};

    const byKey = {};
    for (const repoPath of trackedFilesRaw
      .split("\n")
      .map((file) => file.trim())
      .filter((file) => file.endsWith(".data.ts"))) {
      const content = execFile("git", ["show", `HEAD:${repoPath}`], {
        cwd: rootDir,
        encoding: "utf-8",
      });
      const { key } = extractLensIdentityContent(content);
      if (!key || byKey[key]) continue;

      const relativeDataPath = repoPath.replace(/^src\/lens-data\//, "");
      byKey[key] = {
        dataPath: join(rootDir, repoPath),
        analysisPath: join(lensDataDir, analysisRelativePathForDataPath(relativeDataPath)),
      };
    }

    return byKey;
  } catch {
    return {};
  }
}

/**
 * Scan all lens data files and return freshness metadata keyed off their stable lens keys.
 * When a lens has moved in the working tree, we fall back to the tracked HEAD paths so
 * published dates remain anchored to the original addition rather than the reorganization.
 */
function collectLensData({
  rootDir,
  lensDataDir = join(rootDir, "src", "lens-data"),
  fallbackDate,
  trackedLensRecordsByKey = collectTrackedLensRecordsByKey({ rootDir, lensDataDir }),
  readdir = readdirSync,
  exists = existsSync,
  getFreshness = getFirstGitFileFreshness,
  combineFreshness = combineFreshnessEntries,
} = {}) {
  const dataFiles = readdir(lensDataDir, { recursive: true })
    .filter((file) => typeof file === "string" && file.endsWith(".data.ts"))
    .map((file) => file.replace(/\\/g, "/"))
    .sort();
  const lenses = [];

  for (const relativeDataPath of dataFiles) {
    const dataPath = join(lensDataDir, relativeDataPath);
    const { key, name, maker } = extractLensIdentity(dataPath);
    if (!key) continue;

    const analysisPath = join(lensDataDir, analysisRelativePathForDataPath(relativeDataPath));
    const trackedRecord = trackedLensRecordsByKey[key];
    const dataFreshness = getFreshness(
      trackedRecord?.dataPath && trackedRecord.dataPath !== dataPath ? [dataPath, trackedRecord.dataPath] : [dataPath],
      { cwd: rootDir, fallbackDate },
    );
    const analysisFreshness = exists(analysisPath)
      ? getFreshness(
          trackedRecord?.analysisPath && trackedRecord.analysisPath !== analysisPath
            ? [analysisPath, trackedRecord.analysisPath]
            : [analysisPath],
          { cwd: rootDir, fallbackDate },
        )
      : null;

    lenses.push({
      key,
      name,
      makerSlug: deriveMakerSlug(maker || name || key),
      freshness: combineFreshness([dataFreshness, analysisFreshness], fallbackDate),
    });
  }

  return lenses;
}

/** Build the planned move set for any root-level lens data files that still need maker folders. */
function collectRootLensMovePlan(lensDataDir, { exists = existsSync, readdir = readdirSync } = {}) {
  const rootFiles = readdir(lensDataDir)
    .filter((file) => typeof file === "string" && file.endsWith(".data.ts"))
    .sort();

  return rootFiles.map((dataFile) => {
    const fromDataPath = join(lensDataDir, dataFile);
    const { key, name, maker } = extractLensIdentity(fromDataPath);
    const makerSlug = deriveMakerSlug(maker || name || key || dataFile);
    const targetDir = join(lensDataDir, makerSlug);
    const analysisFile = analysisRelativePathForDataPath(dataFile);
    const fromAnalysisPath = join(lensDataDir, analysisFile);

    return {
      key,
      makerSlug,
      targetDir,
      data: {
        from: fromDataPath,
        to: join(targetDir, dataFile),
      },
      analysis: exists(fromAnalysisPath)
        ? {
            from: fromAnalysisPath,
            to: join(targetDir, analysisFile),
          }
        : null,
    };
  });
}

/** Move any root-level lens files into their maker folders. */
function organizeRootLensFiles(
  lensDataDir,
  {
    exists = existsSync,
    mkdir = mkdirSync,
    rename = renameSync,
    log = console.log,
    rewriteImport = rewriteLensDataTypesImport,
  } = {},
) {
  const movePlan = collectRootLensMovePlan(lensDataDir, { exists });

  if (movePlan.length === 0) {
    log("Lens-data organizer: no root-level lens files to move.");
    return { movePlan, movedLensCount: 0, movedFileCount: 0 };
  }

  for (const plannedMove of movePlan) {
    if (exists(plannedMove.data.to)) {
      throw new Error(`Lens-data organizer collision: destination already exists: ${plannedMove.data.to}`);
    }
    if (plannedMove.analysis && exists(plannedMove.analysis.to)) {
      throw new Error(`Lens-data organizer collision: destination already exists: ${plannedMove.analysis.to}`);
    }
  }

  let movedFileCount = 0;
  for (const plannedMove of movePlan) {
    mkdir(plannedMove.targetDir, { recursive: true });
    rename(plannedMove.data.from, plannedMove.data.to);
    rewriteImport(plannedMove.data.to);
    movedFileCount += 1;
    log(`Lens-data organizer: moved ${plannedMove.data.from} -> ${plannedMove.data.to}`);

    if (plannedMove.analysis) {
      rename(plannedMove.analysis.from, plannedMove.analysis.to);
      movedFileCount += 1;
      log(`Lens-data organizer: moved ${plannedMove.analysis.from} -> ${plannedMove.analysis.to}`);
    }
  }

  return { movePlan, movedLensCount: movePlan.length, movedFileCount };
}

export {
  MAKER_PREFIXES,
  analysisRelativePathForDataPath,
  collectLensData,
  collectRootLensMovePlan,
  collectTrackedLensRecordsByKey,
  deriveMakerSlug,
  extractLensIdentity,
  extractLensIdentityContent,
  organizeRootLensFiles,
  rewriteLensDataTypesImport,
};
