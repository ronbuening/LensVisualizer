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
 * Parse `git log --format=%cI%x09%H` output into publication metadata.
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

  const parseLine = (line) => {
    const [committedAt, commit = null] = line.split("\t");
    const timestamp = new Date(committedAt);
    if (Number.isNaN(timestamp.valueOf())) return null;
    return {
      on: committedAt.slice(0, 10),
      at: timestamp.toISOString(),
      commit: commit || null,
    };
  };
  const entries = lines.map(parseLine).filter(Boolean);
  if (entries.length === 0) return null;

  const latest = entries[0];
  const earliest = entries[entries.length - 1];

  return {
    publishedOn: earliest.on,
    publishedAt: earliest.at,
    publishedCommit: earliest.commit,
    lastModified: latest.on,
    lastModifiedAt: latest.at,
    lastModifiedCommit: latest.commit,
  };
}

function fallbackFreshness(fallbackDate) {
  if (!fallbackDate) return null;
  const fallbackAt = new Date(`${fallbackDate}T00:00:00Z`).toISOString();
  return {
    publishedOn: fallbackDate,
    publishedAt: fallbackAt,
    publishedCommit: null,
    lastModified: fallbackDate,
    lastModifiedAt: fallbackAt,
    lastModifiedCommit: null,
  };
}

/**
 * Read published + modified dates for a file from git history.
 */
export function getGitFileFreshness(filePath, { cwd, fallbackDate, exec, execFileImpl = execFileSync } = {}) {
  try {
    const raw = exec
      ? exec(`git log --follow --format=%cI%x09%H -- "${filePath}"`, { cwd, encoding: "utf-8" }).trim()
      : execFileImpl("git", ["log", "--follow", "--format=%cI%x09%H", "--", filePath], {
          cwd,
          encoding: "utf-8",
        }).trim();
    return parseGitLogDates(raw) ?? fallbackFreshness(fallbackDate);
  } catch {
    return fallbackFreshness(fallbackDate);
  }
}

/**
 * Read published + modified dates with execFile so file paths are passed as
 * arguments rather than interpolated into a shell command.
 */
export function getGitFileFreshnessSafe(filePath, { cwd, fallbackDate, execFileImpl = execFileSync } = {}) {
  try {
    const raw = execFileImpl("git", ["log", "--follow", "--format=%cI%x09%H", "--", filePath], {
      cwd,
      encoding: "utf-8",
    }).trim();
    return parseGitLogDates(raw) ?? fallbackFreshness(fallbackDate);
  } catch {
    return fallbackFreshness(fallbackDate);
  }
}

export async function getGitFileFreshnessAsync(filePath, { cwd, fallbackDate } = {}) {
  try {
    const { stdout } = await execFileAsync("git", ["log", "--follow", "--format=%cI%x09%H", "--", filePath], {
      cwd,
      encoding: "utf-8",
    });
    return parseGitLogDates(stdout.trim()) ?? fallbackFreshness(fallbackDate);
  } catch {
    return fallbackFreshness(fallbackDate);
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

  return fallbackFreshness(fallbackDate);
}

export async function getFirstGitFileFreshnessAsync(filePaths, { cwd, fallbackDate } = {}) {
  for (const filePath of filePaths) {
    const freshness = await getGitFileFreshnessAsync(filePath, { cwd });
    if (freshness) return freshness;
  }

  return fallbackFreshness(fallbackDate);
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
    return fallbackFreshness(fallbackDate);
  }

  const earliest = valid.reduce((candidate, entry) => {
    const candidateAt = candidate.publishedAt ?? candidate.publishedOn;
    const entryAt = entry.publishedAt ?? entry.publishedOn;
    return entryAt < candidateAt ? entry : candidate;
  }, valid[0]);
  const latest = valid.reduce((candidate, entry) => {
    const candidateAt = candidate.lastModifiedAt ?? candidate.lastModified;
    const entryAt = entry.lastModifiedAt ?? entry.lastModified;
    return entryAt > candidateAt ? entry : candidate;
  }, valid[0]);
  const combined = {
    publishedOn: earliest.publishedOn,
    lastModified: latest.lastModified,
  };

  if (earliest.publishedAt) combined.publishedAt = earliest.publishedAt;
  if ("publishedCommit" in earliest) combined.publishedCommit = earliest.publishedCommit;
  if (latest.lastModifiedAt) combined.lastModifiedAt = latest.lastModifiedAt;
  if ("lastModifiedCommit" in latest) combined.lastModifiedCommit = latest.lastModifiedCommit;
  return combined;
}

/**
 * Sort publishable entries by newest calendar date, then by same-day commit
 * time from earliest to latest. Entries from the same commit retain
 * alphabetical display-name order, with a stable id as the final tie-break.
 */
export function comparePublicationEntries(a, b) {
  const byDate = b.publishedOn.localeCompare(a.publishedOn);
  if (byDate) return byDate;

  const aTimestamp = a.publishedAt ?? a.publishedOn;
  const bTimestamp = b.publishedAt ?? b.publishedOn;
  if (aTimestamp < bTimestamp) return -1;
  if (aTimestamp > bTimestamp) return 1;

  const aCommit = a.publishedCommit ?? "";
  const bCommit = b.publishedCommit ?? "";
  if (aCommit !== bCommit) return aCommit.localeCompare(bCommit);

  const aLabel = a.name ?? a.title ?? a.key ?? a.slug ?? "";
  const bLabel = b.name ?? b.title ?? b.key ?? b.slug ?? "";
  return aLabel.localeCompare(bLabel) || String(a.key ?? a.slug ?? "").localeCompare(String(b.key ?? b.slug ?? ""));
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
  const articleFreshness = (article) => ({
    publishedOn: article.publishedOn,
    ...(article.publishedAt ? { publishedAt: article.publishedAt } : {}),
    ...(Object.hasOwn(article, "publishedCommit") ? { publishedCommit: article.publishedCommit } : {}),
    lastModified: article.lastModified,
    ...(article.lastModifiedAt ? { lastModifiedAt: article.lastModifiedAt } : {}),
    ...(Object.hasOwn(article, "lastModifiedCommit") ? { lastModifiedCommit: article.lastModifiedCommit } : {}),
  });
  const allArticleFreshness = articles.map(articleFreshness);

  routeFreshness["/"] = combineFreshnessEntries(
    [...allLensFreshness, ...allArticleFreshness, makerDetailsFreshness],
    fallbackDate,
  );
  routeFreshness["/search"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/lenses"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/makers"] = combineFreshnessEntries([...allLensFreshness, makerDetailsFreshness], fallbackDate);
  routeFreshness["/authors"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/patents"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/mounts"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/formats"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/articles"] = combineFreshnessEntries(allArticleFreshness, fallbackDate);
  routeFreshness["/updates"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/relationships"] = combineFreshnessEntries(allLensFreshness, fallbackDate);

  for (const article of articles) {
    routeFreshness[`/articles/${article.slug}`] = articleFreshness(article);
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
