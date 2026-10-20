/**
 * The dependencies a base worktree is given, and its removal when it cannot be given them.
 *
 * Git and npm are stand-ins here, so no worktree is registered in this repository and nothing is installed. The
 * stand-in for git answers the lockfile question as the test says, and makes and removes a plain directory where
 * git would add and remove a worktree.
 */

import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  addBaseWorktree,
  prepareHistoricalSeam,
  provideBaseDependencies,
  type BaseWorktreeCommands,
} from "../../scripts/base-worktree.mjs";

const COMMIT = "b".repeat(40);
const made: string[] = [];

/** A new empty directory that the test removes when it ends. */
function tempDir(name: string): string {
  const dir = realpathSync(mkdtempSync(join(tmpdir(), `base-worktree-test-${name}-`)));
  made.push(dir);
  return dir;
}

/** A checkout that has a node_modules folder, and stand-ins for git and npm that record what they are asked. */
function fixture({ lockfileDiffers, installFails = false }: { lockfileDiffers: boolean; installFails?: boolean }) {
  const root = tempDir("root");
  mkdirSync(join(root, "node_modules"));
  const gitCalls: string[] = [];
  const installs: string[] = [];
  const commands: BaseWorktreeCommands = {
    git(_root, args) {
      gitCalls.push(args.join(" "));
      /* `git diff --quiet` exits with a failure when the file differs. */
      if (args[0] === "diff" && lockfileDiffers) throw new Error("git diff --quiet: exit 1");
      const [, action, , worktree] = args;
      if (args[0] === "worktree" && action === "add") mkdirSync(worktree);
      if (args[0] === "worktree" && action === "remove") rmSync(worktree, { recursive: true, force: true });
      return "";
    },
    npmCi(tree) {
      installs.push(tree);
      if (installFails) throw Object.assign(new Error("Command failed: npm ci"), { status: 1 });
    },
  };
  return { root, commands, gitCalls, installs };
}

afterEach(() => {
  vi.restoreAllMocks();
  for (const dir of made.splice(0)) rmSync(dir, { recursive: true, force: true });
});

describe("historical seam preparation", () => {
  it("re-exports only the historical sources present in the base tree", () => {
    const root = tempDir("historical-seam");
    mkdirSync(join(root, "src/optics/analysis"), { recursive: true });
    writeFileSync(join(root, "src/optics/analysis/analysisQuality.ts"), "export const sampling = {};");

    prepareHistoricalSeam(root);

    expect(readFileSync(join(root, "src/benchmarks/engineDiff/historicalSeam.ts"), "utf8")).toBe(
      'export * from "../../optics/analysis/analysisQuality.ts";\n',
    );
  });

  it("leaves a tree with the public perspective barrel alone", () => {
    const root = tempDir("public-seam");
    mkdirSync(join(root, "src/optics"), { recursive: true });
    writeFileSync(join(root, "src/optics/perspective.ts"), "export {};");

    prepareHistoricalSeam(root);

    expect(existsSync(join(root, "src/benchmarks"))).toBe(false);
  });
});

describe("the dependencies of a base worktree", () => {
  it("links this checkout's node_modules while the lockfile is the same, and installs nothing", () => {
    const { root, commands, gitCalls, installs } = fixture({ lockfileDiffers: false });
    const worktree = tempDir("tree");

    expect(provideBaseDependencies({ root, worktree, commit: COMMIT, label: "benchmark", commands })).toBe("linked");
    expect(gitCalls).toEqual([`diff --quiet ${COMMIT} -- package-lock.json`]);
    expect(realpathSync(join(worktree, "node_modules"))).toBe(join(root, "node_modules"));
    expect(installs).toEqual([]);
  });

  it("installs the base's own when the lockfile differs, and links nothing", () => {
    const { root, commands, installs } = fixture({ lockfileDiffers: true });
    const worktree = tempDir("tree");
    const notice = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(provideBaseDependencies({ root, worktree, commit: COMMIT, label: "benchmark", commands })).toBe("installed");
    expect(installs).toEqual([worktree]);
    /* The stand-in installs nothing, so a node_modules here could only be a link to this checkout's. */
    expect(existsSync(join(worktree, "node_modules"))).toBe(false);
    expect(notice).toHaveBeenCalledWith(expect.stringContaining(`running npm ci in ${worktree}`));
  });

  it("stops with a message when the install fails, and the worktree is still removed", () => {
    const { root, commands, gitCalls, installs } = fixture({ lockfileDiffers: true, installFails: true });
    vi.spyOn(console, "error").mockImplementation(() => {});
    let worktree = "";
    const add = () =>
      addBaseWorktree({
        root,
        commit: COMMIT,
        label: "benchmark",
        prefix: "base-worktree-test-base-",
        prepare: (tree) => {
          worktree = tree;
          provideBaseDependencies({ root, worktree: tree, commit: COMMIT, label: "benchmark", commands });
        },
        commands,
      });

    expect(add).toThrow(
      "benchmark: npm ci failed in the base worktree (exit 1). The base's package-lock.json differs from the " +
        "working tree's, so the base cannot be built without dependencies of its own.",
    );
    expect(installs).toEqual([worktree]);
    expect(gitCalls).toEqual([
      `worktree add --detach ${worktree} ${COMMIT}`,
      `diff --quiet ${COMMIT} -- package-lock.json`,
      `worktree remove --force ${worktree}`,
    ]);
    /* The worktree and the temp directory it was made in are both gone. */
    expect(existsSync(worktree)).toBe(false);
    expect(existsSync(join(worktree, ".."))).toBe(false);
  });
});
