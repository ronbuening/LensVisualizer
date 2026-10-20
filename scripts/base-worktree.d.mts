/** The git and npm calls of the base-worktree helpers; a test passes stand-ins. */
export interface BaseWorktreeCommands {
  git(root: string, args: readonly string[]): string;
  npmCi(tree: string): void;
}

export function prepareHistoricalSeam(worktree: string): void;

export function provideBaseDependencies(options: {
  root: string;
  worktree: string;
  commit: string;
  label: string;
  commands?: BaseWorktreeCommands;
}): "linked" | "installed";

export function addBaseWorktree(options: {
  root: string;
  commit: string;
  label: string;
  prefix: string;
  prepare: (worktree: string) => void;
  commands?: Pick<BaseWorktreeCommands, "git">;
}): { worktree: string; remove: () => void };
