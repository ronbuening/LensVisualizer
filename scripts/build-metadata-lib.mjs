import { execFile, execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
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
      // UTC calendar date, not the committer-local date embedded in %cI:
      // site cards, JSON-LD, and RSS pubDate must all agree on one day.
      on: timestamp.toISOString().slice(0, 10),
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
 *
 * Always execFile, so file paths are passed as arguments rather than
 * interpolated into a shell command.
 */
export function getGitFileFreshness(filePath, { cwd, fallbackDate, execFileImpl = execFileSync } = {}) {
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
export function getFirstGitFileFreshness(filePaths, { cwd, fallbackDate, execFileImpl = execFileSync } = {}) {
  for (const filePath of filePaths) {
    const freshness = getGitFileFreshness(filePath, { cwd, execFileImpl });
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
 * Sort publishable entries newest-first. Entries from the same commit retain
 * alphabetical display-name order, with a stable id as the final tie-break.
 * An entry without Git history represents newly added local content, so it
 * leads committed entries from the same fallback date until it is committed.
 */
export function comparePublicationEntries(a, b) {
  if (a.publishedOn === b.publishedOn) {
    const aUsesFallback = a.publishedCommit === null;
    const bUsesFallback = b.publishedCommit === null;
    if (aUsesFallback !== bUsesFallback) return aUsesFallback ? -1 : 1;
  }

  const aTimestamp = a.publishedAt ?? a.publishedOn;
  const bTimestamp = b.publishedAt ?? b.publishedOn;
  if (aTimestamp < bTimestamp) return 1;
  if (aTimestamp > bTimestamp) return -1;

  const aCommit = a.publishedCommit ?? "";
  const bCommit = b.publishedCommit ?? "";
  if (aCommit !== bCommit) return bCommit.localeCompare(aCommit);

  const aLabel = a.name ?? a.title ?? a.key ?? a.slug ?? "";
  const bLabel = b.name ?? b.title ?? b.key ?? b.slug ?? "";
  return (
    aLabel.localeCompare(bLabel) ||
    String(a.key ?? a.slug ?? "").localeCompare(String(b.key ?? b.slug ?? "")) ||
    /* RSS feed items carry title/url but no key/slug — url is their stable id */
    String(a.url ?? "").localeCompare(String(b.url ?? ""))
  );
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

/* ── Article frontmatter and collection ───────────────────────────────── */

/**
 * Folder documentation written by scripts/generate-src-readmes.mjs. It lives
 * next to article markdown under src/content/ but is never publishable, so it
 * is the one legitimate reason for a content file to carry no frontmatter.
 */
const GENERATED_DOC_NAMES = new Set(["readme.md", "improvementsuggestions.md"]);

/** Parse simple YAML frontmatter from markdown content. */
export function parseFrontmatterContent(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const meta = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) {
      let value = m[2].trim();
      // Strip surrounding quotes if present (e.g., "value" → value)
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      meta[m[1]] = value;
    }
  }
  return meta;
}

/** Reason a content file cannot publish, or `null` when its frontmatter is usable. */
export function articleFrontmatterError(meta) {
  if (!meta) return "no YAML frontmatter block";
  const missing = ["slug", "title"].filter((field) => !meta[field]);
  if (missing.length > 0) {
    return `missing frontmatter ${missing.join(" and ")} (fields must start at column 1)`;
  }
  return null;
}

/** True for the generated per-folder documentation that is intentionally not an article. */
export function isGeneratedContentDoc(file) {
  return GENERATED_DOC_NAMES.has(file.slice(file.lastIndexOf("/") + 1).toLowerCase());
}

/**
 * Fail the build for content files that are neither generated folder docs nor
 * publishable articles. Such a file used to vanish from the site, feeds, and
 * sitemap with no signal at all.
 */
function assertArticleFrontmatter(invalid) {
  if (invalid.length === 0) return;

  throw new Error(
    `Build metadata found ${invalid.length} markdown file(s) under src/content/ that cannot publish:\n` +
      invalid.map((entry) => `  - ${entry.file}: ${entry.reason}`).join("\n") +
      "\nEvery article needs `slug` and `title` frontmatter. Generated folder documentation is exempt only when " +
      `named ${[...GENERATED_DOC_NAMES].join(" or ")}.`,
  );
}

/**
 * Index tracked article paths by slug from HEAD so working-tree moves can
 * preserve their original git-derived publication dates before the rename is
 * committed.
 */
function collectTrackedArticlePathsBySlug({ cwd, contentRepoPath, execFileImpl = execFileSync }) {
  try {
    const trackedFilesRaw = execFileImpl("git", ["ls-tree", "-r", "--name-only", "HEAD", "--", contentRepoPath], {
      cwd,
      encoding: "utf-8",
    }).trim();

    if (!trackedFilesRaw) return {};

    const bySlug = {};
    for (const repoPath of trackedFilesRaw
      .split("\n")
      .map((file) => file.trim())
      .filter((file) => file.endsWith(".md"))) {
      const content = execFileImpl("git", ["show", `HEAD:${repoPath}`], {
        cwd,
        encoding: "utf-8",
      });
      const meta = parseFrontmatterContent(content);
      if (!meta?.slug || bySlug[meta.slug]) continue;
      bySlug[meta.slug] = join(cwd, repoPath);
    }

    return bySlug;
  } catch {
    return {};
  }
}

/**
 * Collect publishable article metadata from a content directory, throwing when
 * a non-generated markdown file cannot publish.
 */
export async function collectArticles({
  contentDir,
  cwd,
  fallbackDate,
  contentRepoPath = "src/content",
  concurrency = 8,
  execFileImpl = execFileSync,
}) {
  const mdFiles = readdirSync(contentDir, { recursive: true })
    .filter((f) => typeof f === "string" && f.endsWith(".md"))
    .map((f) => f.replace(/\\/g, "/"));

  const parsed = [];
  const invalid = [];
  for (const file of mdFiles) {
    const meta = parseFrontmatterContent(readFileSync(join(contentDir, file), "utf-8"));
    const reason = articleFrontmatterError(meta);
    if (!reason) {
      parsed.push({ file, meta });
    } else if (!isGeneratedContentDoc(file)) {
      invalid.push({ file, reason });
    }
  }
  assertArticleFrontmatter(invalid);

  const trackedArticlePathsBySlug = collectTrackedArticlePathsBySlug({ cwd, contentRepoPath, execFileImpl });

  const articles = await mapLimit(parsed, concurrency, async ({ file, meta }) => {
    const filePath = join(contentDir, file);
    const trackedPath = trackedArticlePathsBySlug[meta.slug];
    const freshness = await getFirstGitFileFreshnessAsync(
      trackedPath && trackedPath !== filePath ? [filePath, trackedPath] : [filePath],
      { cwd, fallbackDate },
    );
    const seriesOrder = meta.seriesOrder !== undefined ? Number.parseInt(meta.seriesOrder, 10) : undefined;
    return {
      slug: meta.slug,
      title: meta.title,
      summary: meta.summary || "",
      tag: meta.tag || undefined,
      series: meta.series || undefined,
      seriesOrder: Number.isFinite(seriesOrder) ? seriesOrder : undefined,
      toc: meta.toc === "true" || undefined,
      publishedOn: freshness.publishedOn,
      publishedAt: freshness.publishedAt,
      publishedCommit: freshness.publishedCommit,
      lastModified: freshness.lastModified,
      lastModifiedAt: freshness.lastModifiedAt,
      lastModifiedCommit: freshness.lastModifiedCommit,
      file,
    };
  });

  return articles
    .sort(comparePublicationEntries)
    .map((article, publicationOrder) => ({ ...article, publicationOrder }));
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
  assigneeCorporateHistoryFreshness,
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
  routeFreshness["/relationships/universal"] = combineFreshnessEntries(
    assigneeCorporateHistoryFreshness ? [...allLensFreshness, assigneeCorporateHistoryFreshness] : allLensFreshness,
    fallbackDate,
  );

  for (const article of articles) {
    routeFreshness[`/articles/${article.slug}`] = articleFreshness(article);
  }

  for (const lens of lenses) {
    routeFreshness[`/lens/${lens.key}`] = lens.freshness;
  }

  for (const slug of makerSlugs) {
    const makerLensFreshness = lenses
      .filter((lens) => (lens.makerSlugs ?? [lens.makerSlug]).includes(slug))
      .map((lens) => lens.freshness);

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
