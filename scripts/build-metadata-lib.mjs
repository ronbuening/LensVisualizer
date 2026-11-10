import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { isAbsolute, join, relative, resolve, sep } from "node:path";
import { FORMAT_ONLY_COMMITS } from "./format-only-commits.mjs";

/* `git log` fields of one commit: committer date, id and subject. */
const GIT_LOG_FIELDS = "%cI%x09%H%x09%s";

/*
 * The whole history in one pass: a record separator and the fields of each commit, then every path it touched, with
 * renames paired. -l0 keeps rename detection exhaustive however many files one commit moves. The rest pins output
 * that user config could otherwise change (paths relative to a subfolder, colour, signature lines); the config
 * override rather than --no-relative, which needs git 2.28, keeps older build images working.
 */
const GIT_HISTORY_ARGS = [
  "-c",
  "diff.relative=false",
  "log",
  "-M",
  "-l0",
  "--name-status",
  "-z",
  "--no-color",
  "--no-show-signature",
  `--format=%x1e${GIT_LOG_FIELDS}`,
  "HEAD",
];

/* The whole history of a large repository is several megabytes of output. */
const GIT_HISTORY_MAX_BUFFER = 1 << 30;

/**
 * The subject of a format-only lens-data conversion commit begins with a conversion step's ID and a space
 * (see agent_docs/decisions.md, page freshness). A squash merge keeps the PR title, which begins with the step ID, and
 * appends ` (#NNN)`; every commit on such a PR's branch begins with the ID too.
 */
const FORMAT_ONLY_SUBJECT = /^(?:S2\.P5\.T[1-9]|S2\.P6\.T1) /;

/**
 * Whether a commit changes only how lens data is written, so a page's modified date skips it: its subject begins
 * with a conversion step's ID, or its id is listed in format-only-commits.mjs.
 *
 * @param {{ commit: string | null, subject?: string | null }} entry - the commit
 * @param {ReadonlySet<string>} [listed] - commit ids to skip besides those the subject names
 * @returns {boolean}
 */
export function isFormatOnlyCommit({ commit, subject }, listed = FORMAT_ONLY_COMMITS) {
  return FORMAT_ONLY_SUBJECT.test(subject ?? "") || (commit !== null && listed.has(commit));
}

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
        execFileImpl("git", ["fetch", "--unshallow", "--quiet"], {
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
 * Parse `git log --format=%cI%x09%H%x09%s` output into publication metadata.
 *
 * `git log` returns newest-first, so the first line is the most recent
 * commit and the last line is the oldest reachable commit for the file.
 * The published date is the oldest commit's. The modified date is the newest
 * commit's that is not format-only: converting a file changes nothing a
 * reader sees. A file whose every commit is format-only keeps its oldest
 * commit's date.
 */
export function parseGitLogDates(raw, { isFormatOnly = isFormatOnlyCommit } = {}) {
  const lines = raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;

  const parseLine = (line) => {
    const [committedAt, commit = null, ...subject] = line.split("\t");
    const timestamp = new Date(committedAt);
    if (Number.isNaN(timestamp.valueOf())) return null;
    return {
      // UTC calendar date, not the committer-local date embedded in %cI:
      // site cards, JSON-LD, and RSS pubDate must all agree on one day.
      on: timestamp.toISOString().slice(0, 10),
      at: timestamp.toISOString(),
      commit: commit || null,
      subject: subject.length > 0 ? subject.join("\t") : null,
    };
  };
  const entries = lines.map(parseLine).filter(Boolean);
  if (entries.length === 0) return null;

  const earliest = entries[entries.length - 1];
  const latest = entries.find((entry) => !isFormatOnly(entry)) ?? earliest;

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
 * Read the committed text of every file under a repository folder whose name ends with `suffix`, in one
 * `git cat-file --batch` rather than a `git show` per file.
 *
 * @param {{ cwd: string, repoDir: string, suffix: string, execFileImpl?: Function }} options - the top-level
 *   directory, the folder to list, the file-name ending to keep and the `execFileSync`-compatible runner
 * @returns {{ path: string, content: string }[]} each file's repository path and UTF-8 text, in `ls-tree` order
 * @throws when git fails, as `git show` did; callers treat that as no tracked files
 */
export function readTrackedFiles({ cwd, repoDir, suffix, execFileImpl = execFileSync }) {
  const options = { cwd, maxBuffer: GIT_HISTORY_MAX_BUFFER };
  const listing = execFileImpl("git", ["ls-tree", "-r", "-z", "HEAD", "--", repoDir], {
    ...options,
    encoding: "utf-8",
  });
  const blobs = [];
  for (const entry of listing.split("\0")) {
    const tab = entry.indexOf("\t");
    if (tab < 0) continue;
    const [, type, oid] = entry.slice(0, tab).split(" ");
    const path = entry.slice(tab + 1);
    if (type === "blob" && path.endsWith(suffix)) blobs.push({ oid, path });
  }
  if (blobs.length === 0) return [];

  const batch = execFileImpl("git", ["cat-file", "--batch"], {
    ...options,
    input: blobs.map(({ oid }) => oid).join("\n") + "\n",
  });
  /*
   * Each object is an "<oid> blob <size>" line, its content and a newline. Sizes count bytes, so slice the bytes.
   * A byte-order mark stays in the text, as it did when `git show` output was decoded.
   */
  const decoder = new TextDecoder("utf-8", { ignoreBOM: true });
  const files = [];
  let offset = 0;
  for (const { path } of blobs) {
    const headerEnd = batch.indexOf(0x0a, offset);
    if (headerEnd < 0) break;
    const size = Number(decoder.decode(batch.subarray(offset, headerEnd)).split(" ")[2]);
    offset = headerEnd + 1;
    /* A missing object prints only its header line. */
    if (!Number.isInteger(size)) continue;
    files.push({ path, content: decoder.decode(batch.subarray(offset, offset + size)) });
    offset += size + 1;
  }
  return files;
}

/**
 * Index `git log` history output by path. Each path lists the commits that touched it, newest first, and an entry
 * where a rename created the path names the path it came from.
 */
function indexGitHistory(raw) {
  const commits = [];
  const touches = new Map();
  const touch = (path, entry) => {
    const entries = touches.get(path);
    if (entries) entries.push(entry);
    else touches.set(path, [entry]);
  };

  /* With -z, NUL ends every field; a commit's first path also carries the newline that ends its header. */
  const tokens = raw.split("\0");
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].startsWith("\n") ? tokens[i].slice(1) : tokens[i];
    if (token.startsWith("\x1e")) {
      commits.push(token.slice(1));
      continue;
    }
    if (token === "" || commits.length === 0) continue;
    const commit = commits.length - 1;
    if (token[0] === "R") {
      touch(tokens[i + 1], { commit });
      touch(tokens[i + 2], { commit, renamedFrom: tokens[i + 1] });
      i += 2;
    } else if (token[0] === "C") {
      /* -M never reports copies; should one appear, its source is unchanged and its destination starts anew. */
      touch(tokens[i + 2], { commit });
      i += 2;
    } else {
      touch(tokens[i + 1], { commit });
      i += 1;
    }
  }
  return { commits, touches };
}

/**
 * Read the repository's history once, on the first lookup, and date files from it.
 *
 * One `git log` over every commit replaces a `git log --follow` per file, which walked the whole history again for
 * each file and ran copy detection against every file in the tree at its addition. A lookup lists the same commits
 * that `--follow` printed for a file, newest first, with the history before a rename continuing under the old path.
 * It does not follow copies: a new file that resembles an existing one starts its own history, where `--follow` gave
 * it the other file's (see agent_docs/decisions.md, page freshness).
 *
 * A directory that is not a repository, or a git failure, leaves the history empty, so every file falls back.
 *
 * @param {{ cwd?: string, execFileImpl?: Function }} [options] - the directory file paths resolve against, inside the
 *   repository, and the `execFileSync`-compatible runner
 * @returns {{
 *   log: (filePath: string) => string,
 *   fileFreshness: (filePath: string, options?: { fallbackDate?: string }) => object | null,
 *   firstFileFreshness: (filePaths: string[], options?: { fallbackDate?: string }) => object | null,
 * }} `log` gives the `%cI%x09%H%x09%s` lines `parseGitLogDates` reads; the freshness lookups are those dates, or the
 *   fallback date's when no path has history
 */
export function gitHistory({ cwd = process.cwd(), execFileImpl = execFileSync } = {}) {
  let index;
  const read = () => {
    try {
      const run = (args) => execFileImpl("git", args, { cwd, encoding: "utf-8", maxBuffer: GIT_HISTORY_MAX_BUFFER });
      /* Logged paths are relative to the top level; this is where `cwd` sits below it. */
      const prefix = run(["rev-parse", "--show-prefix"]).trim();
      return { prefix, ...indexGitHistory(run(GIT_HISTORY_ARGS)) };
    } catch {
      return { prefix: "", commits: [], touches: new Map() };
    }
  };

  const repoPath = (filePath, prefix) => {
    const fromCwd = relative(cwd, resolve(cwd, filePath));
    if (fromCwd === ".." || fromCwd.startsWith(`..${sep}`) || isAbsolute(fromCwd)) return null;
    return prefix + fromCwd.split(sep).join("/");
  };

  const log = (filePath) => {
    index ??= read();
    const { prefix, commits, touches } = index;
    const lines = [];
    let path = repoPath(filePath, prefix);
    /* Walk order is newest first, so the history before a rename is the old path's commits after the renaming one. */
    let after = -1;
    while (path !== null) {
      const entries = touches.get(path) ?? [];
      path = null;
      for (const { commit, renamedFrom } of entries) {
        if (commit <= after) continue;
        lines.push(commits[commit]);
        if (renamedFrom !== undefined) {
          path = renamedFrom;
          after = commit;
          break;
        }
      }
    }
    return lines.join("\n");
  };

  const fileFreshness = (filePath, { fallbackDate } = {}) =>
    parseGitLogDates(log(filePath)) ?? fallbackFreshness(fallbackDate);

  /*
   * The first path with history wins. A file moved in the working tree but not yet committed has none at its new path,
   * so its old tracked path still carries the original publication date.
   */
  const firstFileFreshness = (filePaths, { fallbackDate } = {}) => {
    for (const filePath of filePaths) {
      const freshness = parseGitLogDates(log(filePath));
      if (freshness) return freshness;
    }
    return fallbackFreshness(fallbackDate);
  };

  return { log, fileFreshness, firstFileFreshness };
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
    const bySlug = {};
    for (const { path: repoPath, content } of readTrackedFiles({
      cwd,
      repoDir: contentRepoPath,
      suffix: ".md",
      execFileImpl,
    })) {
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
 * a non-generated markdown file cannot publish. `getFreshness` lets a caller
 * share one `gitHistory` across collectors; by default the collector reads its own.
 */
export async function collectArticles({
  contentDir,
  cwd,
  fallbackDate,
  contentRepoPath = "src/content",
  concurrency = 8,
  execFileImpl = execFileSync,
  getFreshness = gitHistory({ cwd, execFileImpl }).firstFileFreshness,
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
    const freshness = await getFreshness(
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
  teleconverters = [],
  changelog = [],
  updateMonths = [],
  makerDetailsFreshness,
  assigneeCorporateHistoryFreshness,
  fallbackDate,
}) {
  const routeFreshness = {};
  const allLensFreshness = lenses.map((lens) => lens.freshness);
  /* A changelog entry is dated, not committed: its date is its freshness, capped at today so an entry scheduled for
     a later day never gives a page a future modified date. */
  const changelogFreshness = (entry) => {
    const day = fallbackDate && entry.date > fallbackDate ? fallbackDate : entry.date;
    const at = `${day}T00:00:00.000Z`;
    return { publishedOn: day, publishedAt: at, lastModified: day, lastModifiedAt: at };
  };
  /* Archive pages list a lens by name, so only its publication dates it; later prescription edits do not. */
  const lensPublicationFreshness = (lens) => ({
    publishedOn: lens.freshness.publishedOn,
    ...(lens.freshness.publishedAt ? { publishedAt: lens.freshness.publishedAt } : {}),
    lastModified: lens.freshness.publishedOn,
    ...(lens.freshness.publishedAt ? { lastModifiedAt: lens.freshness.publishedAt } : {}),
  });
  const allChangelogFreshness = changelog.map(changelogFreshness);
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
  /* No published converter means no /teleconverters section, so no route to date. */
  if (teleconverters.length > 0) {
    routeFreshness["/teleconverters"] = combineFreshnessEntries(
      teleconverters.map((teleconverter) => teleconverter.freshness),
      fallbackDate,
    );
  }
  routeFreshness["/articles"] = combineFreshnessEntries(allArticleFreshness, fallbackDate);
  routeFreshness["/updates"] = combineFreshnessEntries([...allLensFreshness, ...allChangelogFreshness], fallbackDate);
  for (const { month } of updateMonths) {
    routeFreshness[`/updates/${month}`] = combineFreshnessEntries(
      [
        ...lenses.filter((lens) => lens.freshness?.publishedOn?.startsWith(`${month}-`)).map(lensPublicationFreshness),
        ...changelog.filter((entry) => entry.date.startsWith(`${month}-`)).map(changelogFreshness),
      ],
      fallbackDate,
    );
  }
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

  /* A teleconverter page lists its host lenses, so a newly compatible host refreshes the page too. */
  for (const teleconverter of teleconverters) {
    const hostKeys = new Set(teleconverter.compatibleLensKeys);
    const hostFreshness = lenses.filter((lens) => hostKeys.has(lens.key)).map((lens) => lens.freshness);
    routeFreshness[`/teleconverters/${teleconverter.key}`] = combineFreshnessEntries(
      [teleconverter.freshness, ...hostFreshness],
      fallbackDate,
    );
  }

  for (const author of authors) {
    const authorLensKeys = new Set(author.lensKeys);
    const authorLensFreshness = lenses.filter((lens) => authorLensKeys.has(lens.key)).map((lens) => lens.freshness);
    routeFreshness[`/authors/${author.slug}`] = combineFreshnessEntries(authorLensFreshness, fallbackDate);
  }

  return routeFreshness;
}

/** Project public display metadata without shipping Git identity or build-only route inventories. */
export function projectClientMetadata(metadata) {
  const publicFreshness = ({ publishedOn, lastModified }) => ({ publishedOn, lastModified });
  const articleFields = [
    "slug",
    "title",
    "summary",
    "tag",
    "series",
    "seriesOrder",
    "toc",
    "publishedOn",
    "lastModified",
    "file",
  ];
  return {
    lensFreshness: Object.fromEntries(
      Object.entries(metadata.lensFreshness).map(([key, value]) => [
        key,
        { ...publicFreshness(value), publicationOrder: value.publicationOrder },
      ]),
    ),
    routeFreshness: Object.fromEntries(
      Object.entries(metadata.routeFreshness).map(([route, value]) => [route, publicFreshness(value)]),
    ),
    articles: metadata.articles.map((article) =>
      Object.fromEntries(
        articleFields.filter((field) => article[field] !== undefined).map((field) => [field, article[field]]),
      ),
    ),
    makerSlugs: metadata.makerSlugs,
    authors: metadata.authors,
    assignees: metadata.assignees,
  };
}
