import { execSync } from "node:child_process";

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
export function getGitFileFreshness(filePath, { cwd, fallbackDate, exec = execSync } = {}) {
  try {
    const raw = exec(`git log --follow --format=%aI -- "${filePath}"`, {
      cwd,
      encoding: "utf-8",
    }).trim();
    return parseGitLogDates(raw) ?? (fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null);
  } catch {
    return fallbackDate ? { publishedOn: fallbackDate, lastModified: fallbackDate } : null;
  }
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

/**
 * Build route freshness for every prerendered path from the collected content.
 */
export function buildRouteFreshness({ lenses, articles, makerSlugs, makerDetailsFreshness, fallbackDate }) {
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
  routeFreshness["/lenses"] = combineFreshnessEntries(allLensFreshness, fallbackDate);
  routeFreshness["/makers"] = combineFreshnessEntries([...allLensFreshness, makerDetailsFreshness], fallbackDate);
  routeFreshness["/articles"] = combineFreshnessEntries(allArticleFreshness, fallbackDate);

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

  return routeFreshness;
}
