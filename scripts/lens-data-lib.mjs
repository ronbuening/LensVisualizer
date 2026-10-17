import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  combineFreshnessEntries,
  getFirstGitFileFreshness,
  getFirstGitFileFreshnessAsync,
  mapLimit,
} from "./build-metadata-lib.mjs";
import { evaluateLensDataSource, readLensIdentity } from "./lens-data-ast.mjs";
import { runConversion } from "./lens-data-convert/cli.mjs";
import { loadLensDataConversion } from "./lens-summaries.mjs";
import { MAKER_PREFIXES } from "./maker-prefixes.mjs";

/** Derive a URL-safe maker slug from a maker field or lens display name. */
function deriveMakerSlug(nameOrMaker, makerField) {
  if (makerField === null) return "unattributed";
  nameOrMaker = makerField || nameOrMaker;
  const upper = nameOrMaker.toUpperCase();
  for (const { prefix, slug } of MAKER_PREFIXES) {
    if (upper.startsWith(prefix)) return slug;
  }
  return nameOrMaker.split(/\s+/)[0].toLowerCase();
}

/**
 * Read the identity fields of a lens data file of either version from its source, without running it.
 *
 * @param {string} content - the file's text
 * @param {string} [fileName] - its path, for messages
 * @returns the identity fields; every one empty when the file exports nothing by default
 * @throws when the file's default export uses a form outside the lens-data literal subset
 */
function extractLensIdentityContent(content, fileName) {
  return readLensIdentity(evaluateLensDataSource(content, fileName));
}

/** Explicit publication timestamps distinguish replacement models from inherited file history. */
function applyPublicationDate(freshness, publishedAt) {
  if (!publishedAt) return freshness;
  const date = new Date(publishedAt);
  if (
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(publishedAt) ||
    Number.isNaN(date.valueOf()) ||
    date.toISOString().replace(".000Z", "Z") !== publishedAt.replace(".000Z", "Z")
  ) {
    throw new Error(`Invalid lens publishedAt: ${publishedAt}; expected a UTC ISO timestamp`);
  }
  const result = { ...freshness, publishedOn: date.toISOString().slice(0, 10), publishedAt: date.toISOString() };
  // The original addition commit no longer describes this publication event.
  delete result.publishedCommit;
  if ((result.lastModifiedAt ?? `${result.lastModified}T00:00:00.000Z`) < result.publishedAt) {
    result.lastModified = result.publishedOn;
    result.lastModifiedAt = result.publishedAt;
    delete result.lastModifiedCommit;
  }
  return result;
}

/** Read the identity fields of a lens data file on disk. */
function extractLensIdentity(filePath, { readFile = readFileSync } = {}) {
  return extractLensIdentityContent(readFile(filePath, "utf-8"), filePath);
}

/** Convert a relative `*.data.ts` path to the matching `*.analysis.md` path. */
function analysisRelativePathForDataPath(relativeDataPath) {
  return relativeDataPath.replace(/\.data\.ts$/, ".analysis.md");
}

/**
 * Rewrite a lens file's type imports to match its location under src/lens-data: `types/optics.js` for a V1 file,
 * `types/lensDataV2.js` for a V2 one.
 */
function normalizeLensDataTypesImport(content, filePath) {
  const relativeDepth = filePath.split("/src/lens-data/")[1]?.split("/").length ?? 1;
  const typesDir = relativeDepth > 1 ? "../../types" : "../types";
  return content.replace(
    /from "\.\.\/(?:\.\.\/)?types\/(optics|lensDataV2)\.js";/g,
    (_match, module) => `from "${typesDir}/${module}.js";`,
  );
}

/** Apply the same import normalization after filing an accepted conversion in its destination folder. */
function rewriteLensDataTypesImport(filePath, { readFile = readFileSync, writeFile = writeFileSync } = {}) {
  const content = readFile(filePath, "utf-8");
  const updatedContent = normalizeLensDataTypesImport(content, filePath);

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
      let key;
      try {
        ({ key } = extractLensIdentityContent(content, repoPath));
      } catch {
        /* A committed file the reader cannot evaluate has no key to carry dates for. */
        continue;
      }
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
    const { key, name, maker, lensMountIds, imageFormatId, visible, publishedAt } = extractLensIdentity(dataPath);
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
      visible,
      makerSlug: deriveMakerSlug(name || key, maker),
      lensMountIds,
      imageFormatId,
      freshness: applyPublicationDate(combineFreshness([dataFreshness, analysisFreshness], fallbackDate), publishedAt),
    });
  }

  return lenses;
}

async function collectLensDataAsync({
  rootDir,
  lensDataDir = join(rootDir, "src", "lens-data"),
  fallbackDate,
  trackedLensRecordsByKey = collectTrackedLensRecordsByKey({ rootDir, lensDataDir }),
  readdir = readdirSync,
  exists = existsSync,
  getFreshness = getFirstGitFileFreshnessAsync,
  combineFreshness = combineFreshnessEntries,
  concurrency = 8,
} = {}) {
  const dataFiles = readdir(lensDataDir, { recursive: true })
    .filter((file) => typeof file === "string" && file.endsWith(".data.ts"))
    .map((file) => file.replace(/\\/g, "/"))
    .sort();

  const lenses = await mapLimit(dataFiles, concurrency, async (relativeDataPath) => {
    const dataPath = join(lensDataDir, relativeDataPath);
    const { key, name, maker, lensMountIds, imageFormatId, visible, publishedAt } = extractLensIdentity(dataPath);
    if (!key) return null;

    const analysisPath = join(lensDataDir, analysisRelativePathForDataPath(relativeDataPath));
    const trackedRecord = trackedLensRecordsByKey[key];
    const dataFreshness = await getFreshness(
      trackedRecord?.dataPath && trackedRecord.dataPath !== dataPath ? [dataPath, trackedRecord.dataPath] : [dataPath],
      { cwd: rootDir, fallbackDate },
    );
    const analysisFreshness = exists(analysisPath)
      ? await getFreshness(
          trackedRecord?.analysisPath && trackedRecord.analysisPath !== analysisPath
            ? [analysisPath, trackedRecord.analysisPath]
            : [analysisPath],
          { cwd: rootDir, fallbackDate },
        )
      : null;

    return {
      key,
      name,
      visible,
      makerSlug: deriveMakerSlug(name || key, maker),
      lensMountIds,
      imageFormatId,
      freshness: applyPublicationDate(combineFreshness([dataFreshness, analysisFreshness], fallbackDate), publishedAt),
    };
  });

  return lenses.filter(Boolean);
}

/** Reject an unconverted catalog before metadata creates or writes any output. */
async function assertV2Catalog(lensDataDir) {
  const { lensDataVersion } = await loadLensDataConversion();
  const files = readdirSync(lensDataDir, { recursive: true })
    .filter((file) => typeof file === "string" && /\.(data|teleconverter)\.ts$/.test(file))
    .sort();
  for (const file of files) {
    const path = join(lensDataDir, file);
    const version = lensDataVersion(evaluateLensDataSource(readFileSync(path, "utf-8"), path));
    if (version !== 2) {
      throw new Error(
        `Catalog file ${path} is ${version === 1 ? "V1" : "an unsupported schema"}; run npm run organize:lens-data and review the conversion report.`,
      );
    }
  }
}

/** Build the planned move set for any root-level lens data files that still need maker folders. */
function collectRootLensMovePlan(lensDataDir, { exists = existsSync, readdir = readdirSync } = {}) {
  const rootFiles = readdir(lensDataDir)
    .filter((file) => typeof file === "string" && /\.(data|teleconverter)\.ts$/.test(file))
    .sort();

  return rootFiles.map((dataFile) => {
    const fromDataPath = join(lensDataDir, dataFile);
    const { key, name, maker } = extractLensIdentity(fromDataPath);
    const makerSlug = deriveMakerSlug(name || key || dataFile, maker);
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
      analysis:
        dataFile.endsWith(".data.ts") && exists(fromAnalysisPath)
          ? {
              from: fromAnalysisPath,
              to: join(targetDir, analysisFile),
            }
          : null,
    };
  });
}

/** Convert archived V1 files before moving root-level lenses and converters into their maker folders. */
async function organizeRootLensFiles(
  lensDataDir,
  {
    exists = existsSync,
    mkdir = mkdirSync,
    rename = renameSync,
    log = console.log,
    rewriteImport = rewriteLensDataTypesImport,
    stdout = process.stdout,
    stderr = process.stderr,
  } = {},
) {
  const movePlan = collectRootLensMovePlan(lensDataDir, { exists });

  for (const plannedMove of movePlan) {
    if (exists(plannedMove.data.to)) {
      throw new Error(`Lens-data organizer collision: destination already exists: ${plannedMove.data.to}`);
    }
    if (plannedMove.analysis && exists(plannedMove.analysis.to)) {
      throw new Error(`Lens-data organizer collision: destination already exists: ${plannedMove.analysis.to}`);
    }
  }

  const code = await runConversion({
    argv: ["--input", lensDataDir, "--write"],
    stdout,
    stderr,
    // Archived maker-folder imports must resolve at the arrival location before conversion can be accepted.
    normalizeSource: normalizeLensDataTypesImport,
  });
  if (code !== 0) throw new Error("Lens-data organizer: conversion refused; see the converter diagnostics above.");

  if (movePlan.length === 0) {
    log("Lens-data organizer: no root-level lens files to move.");
    return { movePlan, movedLensCount: 0, movedFileCount: 0 };
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
  assertV2Catalog,
  analysisRelativePathForDataPath,
  collectLensData,
  collectLensDataAsync,
  collectRootLensMovePlan,
  collectTrackedLensRecordsByKey,
  deriveMakerSlug,
  extractLensIdentity,
  extractLensIdentityContent,
  organizeRootLensFiles,
  rewriteLensDataTypesImport,
};
