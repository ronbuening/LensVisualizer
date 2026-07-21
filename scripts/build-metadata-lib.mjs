import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

/**
 * Metadata dates depend on complete file history. A shallow checkout makes
 * every tracked file look newly published at the shallow boundary.
 */
export function assertFullGitHistory({ cwd, execFileImpl = execFileSync, allowFetch = true } = {}) {
  try {
    let isShallow = execFileImpl("git", ["rev-parse", "--is-shallow-repository"], {
      cwd,
      encoding: "utf-8",
    }).trim();

    if (isShallow === "true" && allowFetch) {
      try {
        execFileImpl("git", ["fetch", "--unshallow"], {
          cwd,
          encoding: "utf-8",
        });
        isShallow = execFileImpl("git", ["rev-parse", "--is-shallow-repository"], {
          cwd,
          encoding: "utf-8",
        }).trim();
      } catch {
        throw new Error(
          "Build metadata requires full git history, but this checkout is shallow and git fetch --unshallow failed. " +
            "Configure the build provider to clone full history, or run git fetch --unshallow before generating metadata.",
        );
      }
    }

    if (isShallow === "true") {
      throw new Error(
        "Build metadata requires full git history, but this checkout is shallow. " +
          "Use actions/checkout with fetch-depth: 0, or run git fetch --unshallow before generating metadata.",
      );
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("checkout is shallow")) throw error;
  }
}

/**
 * Parse `git log --format=%aI` output into published + modified dates.
 *
 * `git log` returns newest-first, so the first line is the most recent
 * commit and the last line is the oldest reachable commit for the file.
 */
export function parseGitLogDates(raw) {
  const lines = raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;

  return {
    publishedOn: lines[lines.length - 1].slice(0, 10),
    lastModified: lines[0].slice(0, 10),
  };
}

/**
 * Read published + modified dates for a file from git history.
 */
export function getGitFileFreshness(filePath, { cwd, fallbackDate, exec, execFileImpl = execFileSync } = {}) {
  try {
    const raw = exec
      ? exec(`git log --follow --format=%aI -- "${filePath}"`, { cwd, encoding: "utf-8" }).trim()
      : execFileImpl("git", ["log", "--follow", "--format=%aI", "--", filePath], { cwd, encoding: "utf-8" }).trim();
    return parseGitLogDates(raw) ?? (fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null);
  } catch {
    return fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null;
  }
}

/**
 * Read published + modified dates with execFile so file paths are passed as
 * arguments rather than interpolated into a shell command.
 */
export function getGitFileFreshnessSafe(filePath, { cwd, fallbackDate, execFileImpl = execFileSync } = {}) {
  try {
    const raw = execFileImpl("git", ["log", "--follow", "--format=%aI", "--", filePath], {
      cwd,
      encoding: "utf-8",
    }).trim();
    return parseGitLogDates(raw) ?? (fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null);
  } catch {
    return fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null;
  }
}

export async function getGitFileFreshnessAsync(filePath, { cwd, fallbackDate } = {}) {
  try {
    const { stdout } = await execFileAsync("git", ["log", "--follow", "--format=%aI", "--", filePath], {
      cwd,
      encoding: "utf-8",
    });
    return (
      parseGitLogDates(stdout.trim()) ??
      (fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null)
    );
  } catch {
    return fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null;
  }
}

/**
 * Return the first git-backed freshness entry from a list of candidate paths.
 *
 * This is useful when content has been moved in the working tree but the rename
 * has not been committed yet: the new path has no git history, while the old
 * tracked path still carries the original publication date.
 */
export function getFirstGitFileFreshness(filePaths, { cwd, fallbackDate, exec, execFileImpl = execFileSync } = {}) {
  for (const filePath of filePaths) {
    const freshness = getGitFileFreshness(filePath, { cwd, exec, execFileImpl });
    if (freshness) return freshness;
  }

  return fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null;
}

export async function getFirstGitFileFreshnessAsync(filePaths, { cwd, fallbackDate } = {}) {
  for (const filePath of filePaths) {
    const freshness = await getGitFileFreshnessAsync(filePath, { cwd });
    if (freshness) return freshness;
  }

  return fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null;
}

export async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(Math.max(limit, 1), items.length) }, () => worker()));
  return results;
}

/**
 * Combine multiple freshness entries into a single envelope.
 */
export function combineFreshnessEntries(entries, fallbackDate) {
  const valid = entries.filter(Boolean);
  if (valid.length === 0) {
    return { publishedOn: fallbackDate, lastModified: fallbackDate };
  }

  return {
    publishedOn: valid.reduce(
      (earliest, entry) => (entry.publishedOn < earliest ? entry.publishedOn : earliest),
      valid[0].publishedOn,
    ),
    lastModified: valid.reduce(
      (latest, entry) => (entry.lastModified > latest ? entry.lastModified : latest),
      valid[0].lastModified,
    ),
  };
}

function assertPublishedDateDiversity(label, entries, { minimumEntries, minimumDistinctDates }) {
  if (entries.length < minimumEntries) return;

  const publishedDates = new Set(entries.map((entry) => entry.publishedOn));
  if (publishedDates.size >= minimumDistinctDates) return;

  const onlyDate = [...publishedDates][0] ?? "none";
  throw new Error(
    `Build metadata generated ${entries.length} ${label} with only ${publishedDates.size} publication date (${onlyDate}). ` +
      "This usually means git history is unavailable, shallow, or the content was moved without preserving history. " +
      "Check the checkout depth and rerun metadata generation before deploying.",
  );
}

export function assertFreshnessDiversity({
  lenses,
  articles,
  minimumLensEntries = 10,
  minimumArticleEntries = 5,
  minimumDistinctPublishedDates = 2,
}) {
  assertPublishedDateDiversity(
    "lenses",
    lenses.map((lens) => lens.freshness),
    {
      minimumEntries: minimumLensEntries,
      minimumDistinctDates: minimumDistinctPublishedDates,
    },
  );
  assertPublishedDateDiversity("articles", articles, {
    minimumEntries: minimumArticleEntries,
    minimumDistinctDates: minimumDistinctPublishedDates,
  });
}

/**
 * Build route freshness for every prerendered path from the collected content.
 */
export function buildRouteFreshness({
  lenses,
  articles,
  makerSlugs,
  mountIds = [],
  formatIds = [],
  authors = [],
  makerDetailsFreshness,
  fallbackDate,
}) {
  const routeFreshness = {};
  const allLensFreshness = lenses.map((lens) => lens.freshness);
  const allArticleFreshness = articles.map((article) => ({
    publishedOn: article.publishedOn,
    lastModified: article.lastModified,
  }));

  routeFreshness["/"] = combineFreshnessEntries(
    [...allLensFreshness, ...allArticleFreshness, makerDetailsFreshness],
    fallbackDate,
  );
  routeFreshness["/search"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/lenses"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/makers"] = combineFreshnessEntries([...allLensFreshness, makerDetailsFreshness], fallbackDate);
  routeFreshness["/authors"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/mounts"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/formats"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/articles"] = combineFreshnessEntries(allArticleFreshness, fallbackDate);
  routeFreshness["/updates"] = combineFreshnessEntries(allLensFreshness, fallbackDate);

  for (const article of articles) {
    routeFreshness[`/articles/${article.slug}`] = {
      publishedOn: article.publishedOn,
      lastModified: article.lastModified,
    };
  }

  for (const lens of lenses) {
    routeFreshness[`/lens/${lens.key}`] = lens.freshness;
  }

  for (const slug of makerSlugs) {
    const makerLensFreshness = lenses.filter((lens) => lens.makerSlug === slug).map((lens) => lens.freshness);

    routeFreshness[`/makers/${slug}`] = combineFreshnessEntries(
      [...makerLensFreshness, makerDetailsFreshness],
      fallbackDate,
    );
  }

  for (const mountId of mountIds) {
    const mountLensFreshness = lenses
      .filter((lens) => (lens.lensMountIds ?? []).includes(mountId))
      .map((lens) => lens.freshness);
    routeFreshness[`/mounts/${mountId}`] = combineFreshnessEntries(mountLensFreshness, fallbackDate);
  }

  for (const formatId of formatIds) {
    const formatLensFreshness = lenses.filter((lens) => lens.imageFormatId === formatId).map((lens) => lens.freshness);
    routeFreshness[`/formats/${formatId}`] = combineFreshnessEntries(formatLensFreshness, fallbackDate);
  }

  for (const author of authors) {
    const authorLensKeys = new Set(author.lensKeys);
    const authorLensFreshness = lenses.filter((lens) => authorLensKeys.has(lens.key)).map((lens) => lens.freshness);
    routeFreshness[`/authors/${author.slug}`] = combineFreshnessEntries(authorLensFreshness, fallbackDate);
  }

  return routeFreshness;
}
