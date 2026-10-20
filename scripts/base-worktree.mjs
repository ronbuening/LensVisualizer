/**
 * Base worktrees for the tools that set a base ref beside the working tree.
 *
 * `scripts/engine-diff.mjs` and the two benchmark runners each compare what a base ref does with what the working
 * tree does. Each checks the base out as a detached git worktree in the system temp directory, puts what it needs
 * from the working tree into it, and removes it when the run ends or is told to stop. That lifecycle lives here, so
 * the tools share one way of adding a worktree and one way of leaving none behind. How a base worktree is given
 * the packages its tree is bundled with lives here too. A tool passes its own name, which prefixes every message,
 * and its own temp-directory prefix, which marks the worktrees that are its own.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import os from "node:os";
import { join } from "node:path";

/**
 * Run git in a checkout.
 *
 * @param {string} root - the checkout to run in
 * @param {readonly string[]} args - git's arguments
 * @returns {string} what git printed, trimmed
 * @throws when git exits with a failure
 */
export function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

/**
 * Install a tree's dependencies as its own package-lock.json names them.
 *
 * @param {string} tree - the tree to install into
 * @throws when npm exits with a failure
 */
export function npmCi(tree) {
  /* Everything npm prints goes to stderr, its report as well as its errors: a tool's stdout is its result. */
  execFileSync("npm", ["ci", "--no-audit", "--no-fund"], { cwd: tree, stdio: ["ignore", 2, 2] });
}

/* The git and npm calls of this module. A test passes stand-ins in their place. */
const COMMANDS = { git, npmCi };

/**
 * Publish the few historical exports that A8/S2 never exposed through their public barrels.
 * Only temporary bases preceding the public perspective barrel need this module. Re-exporting their own bindings
 * preserves function identity without keeping eager internal-module globs in the head's adapters.
 *
 * @param {string} worktree - the base tree after copying the working tree's harness
 */
export function prepareHistoricalSeam(worktree) {
  if (existsSync(join(worktree, "src/optics/perspective.ts"))) return;
  const sources = ["perspective/index.ts", "analysis/analysisQuality.ts", "analysis/analysisJobs.ts"].filter((file) =>
    existsSync(join(worktree, "src/optics", file)),
  );
  const directory = join(worktree, "src/benchmarks/engineDiff");
  mkdirSync(directory, { recursive: true });
  writeFileSync(
    join(directory, "historicalSeam.ts"),
    sources.map((file) => `export * from "../../optics/${file}";\n`).join(""),
  );
}

/**
 * Resolve the base to a commit: the ref as given, then the same name on origin (a CI checkout has no local main).
 *
 * @param {string} root - the checkout whose refs are read
 * @param {string} ref - a commit, branch or tag name
 * @param {string} label - the tool's name, for the message
 * @returns {string} the full commit id
 * @throws when neither name is a commit
 */
export function resolveBaseCommit(root, ref, label) {
  for (const candidate of [ref, `origin/${ref}`]) {
    try {
      return git(root, ["rev-parse", "--verify", "--quiet", "--end-of-options", `${candidate}^{commit}`]);
    } catch {
      /* Not a commit under this name; try the next. */
    }
  }
  throw new Error(`${label}: cannot resolve the base ref "${ref}" (tried ${ref} and origin/${ref}).`);
}

/**
 * Whether the working tree's lockfile is the one the commit has, so this checkout's node_modules serve both.
 *
 * @param {string} root - the checkout
 * @param {string} commit - the base commit
 * @param {typeof git} [run] - the git call
 * @returns {boolean} true when package-lock.json is unchanged since the commit
 */
export function lockfileUnchangedSince(root, commit, run = git) {
  try {
    run(root, ["diff", "--quiet", commit, "--", "package-lock.json"]);
    return true;
  } catch {
    return false;
  }
}

/**
 * Give a new base worktree the packages its tree is bundled with.
 *
 * While the base's package-lock.json is the working tree's, this checkout's node_modules are what the base would
 * install, so they are linked in and nothing is installed. A base with another lockfile needs other packages, and
 * gets its own by `npm ci` in the worktree. A comparison against an older base therefore still runs after a
 * dependency of the working tree is bumped; its two sides then differ by their packages as well as by their source,
 * which is why the caller is told which it was.
 *
 * @param {object} options
 * @param {string} options.root - this checkout
 * @param {string} options.worktree - the new base worktree
 * @param {string} options.commit - the base commit
 * @param {string} options.label - the tool's name, for messages
 * @param {typeof COMMANDS} [options.commands] - the git and npm calls
 * @returns {"linked" | "installed"} whose packages the base has: this checkout's, or its own
 * @throws when this checkout has no node_modules to link, or when the install fails
 */
export function provideBaseDependencies({ root, worktree, commit, label, commands = COMMANDS }) {
  if (lockfileUnchangedSince(root, commit, commands.git)) {
    const nodeModules = join(root, "node_modules");
    if (!existsSync(nodeModules)) throw new Error(`${label}: this checkout has no node_modules; run npm install.`);
    symlinkSync(realpathSync(nodeModules), join(worktree, "node_modules"), "dir");
    return "linked";
  }
  console.error(
    `${label}: package-lock.json differs between the base and the working tree, so the base gets its own ` +
      `dependencies: running npm ci in ${worktree}.`,
  );
  try {
    commands.npmCi(worktree);
  } catch (error) {
    const detail = typeof error?.status === "number" ? `exit ${error.status}` : String(error?.message ?? error);
    throw new Error(
      `${label}: npm ci failed in the base worktree (${detail}). The base's package-lock.json differs from the ` +
        `working tree's, so the base cannot be built without dependencies of its own.`,
      { cause: error },
    );
  }
  return "installed";
}

/**
 * Base worktrees of other runs that git still has registered: left behind by a run that was killed outright, or in
 * use by a run going on now. A run only reports them. Which of the two one is, only a person can tell.
 *
 * @param {string} root - the checkout
 * @param {string} prefix - the tool's temp-directory prefix
 * @returns {string[]} their paths
 */
export function otherBaseWorktrees(root, prefix) {
  const marker = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const ownTree = new RegExp(`[\\\\/]${marker}[^\\\\/]+[\\\\/]tree$`);
  return git(root, ["worktree", "list", "--porcelain"])
    .split("\n")
    .filter((line) => line.startsWith("worktree "))
    .map((line) => line.slice("worktree ".length))
    .filter((path) => ownTree.test(path));
}

/**
 * Check the base out as a detached worktree outside the repository, where no linter, test run or `git status`
 * of this checkout sees it, and let the tool put what it needs in it.
 *
 * @param {object} options
 * @param {string} options.root - the checkout the worktree is added to
 * @param {string} options.commit - the base commit
 * @param {string} options.label - the tool's name, for messages
 * @param {string} options.prefix - the tool's temp-directory prefix
 * @param {(worktree: string) => void} options.prepare - fills the new worktree; when it throws, the worktree is
 *   removed and the error passed on
 * @param {Pick<typeof COMMANDS, "git">} [options.commands] - the git call
 * @returns {{ worktree: string, remove: () => void }} the worktree's path and its cleanup
 */
export function addBaseWorktree({ root, commit, label, prefix, prepare, commands = COMMANDS }) {
  /* Resolved, because the temp directory is a symlink on macOS and git records the real path. */
  const parent = realpathSync(mkdtempSync(join(os.tmpdir(), prefix)));
  const worktree = join(parent, "tree");
  try {
    commands.git(root, ["worktree", "add", "--detach", worktree, commit]);
  } catch (error) {
    rmSync(parent, { recursive: true, force: true });
    const detail = String(error?.stderr ?? error?.message ?? error).trim();
    throw new Error(`${label}: git worktree add failed: ${detail}`, { cause: error });
  }
  const remove = () => {
    try {
      /* --force, because what the tool copied in is untracked there. Only this worktree: never prune the others. */
      commands.git(root, ["worktree", "remove", "--force", worktree]);
    } catch (error) {
      console.error(`${label}: could not remove the worktree ${worktree}: ${error?.message ?? error}`);
    }
    rmSync(parent, { recursive: true, force: true });
  };
  try {
    prepare(worktree);
  } catch (error) {
    remove();
    throw error;
  }
  return { worktree, remove };
}

/**
 * Clean up when the process is told to stop, as a run cleans up when it ends.
 *
 * A handler runs between turns of the event loop, so a run that works in long synchronous stretches must yield a
 * turn now and then for a signal to be acted on.
 *
 * @param {string} label - the tool's name, for the message
 * @param {() => void} cleanUp - removes what the run made outside its output directory
 * @returns {() => void} takes the handlers off again
 */
export function cleanUpOnSignal(label, cleanUp) {
  const handlers = ["SIGINT", "SIGTERM"].map((signal) => {
    const handler = () => {
      console.error(`${label}: ${signal} received, removing the base worktree and temporary directories.`);
      cleanUp();
      /* The status a shell reports for a process a signal ended: 128 plus the signal's number. */
      process.exit(128 + os.constants.signals[signal]);
    };
    process.once(signal, handler);
    return [signal, handler];
  });
  return () => {
    for (const [signal, handler] of handlers) process.removeListener(signal, handler);
  };
}
