declare module "node:child_process" {
  export function execFileSync(
    file: string,
    args: readonly string[],
    options: {
      cwd?: string;
      encoding: "utf8";
      env?: Record<string, string | undefined>;
      stdio?: readonly ["ignore", "pipe", "pipe"];
    },
  ): string;
}

declare module "node:fs" {
  export function chmodSync(path: string, mode: number): void;
  export function existsSync(path: string): boolean;
  export function mkdirSync(path: string, options?: { recursive?: boolean }): string | undefined;
  export function mkdtempSync(prefix: string): string;
  export function readFileSync(path: string | URL): Uint8Array;
  export function readFileSync(path: string, encoding: string): string;
  export function readdirSync(path: string): string[];
  export function realpathSync(path: string): string;
  export function rmSync(path: string, options?: { recursive?: boolean; force?: boolean }): void;
  export function statSync(path: string): { isDirectory(): boolean };
  export function writeFileSync(
    path: string,
    data: string | Uint8Array,
    options?: string | { encoding?: string; flag?: string },
  ): void;
}

declare module "node:os" {
  export function tmpdir(): string;
}

declare module "node:path" {
  export function basename(path: string): string;
  export function dirname(path: string): string;
  export function join(...paths: string[]): string;
  export function relative(from: string, to: string): string;
}

declare module "node:process" {
  export const argv: string[];
  export const env: Record<string, string | undefined>;
}

declare module "node:url" {
  export function fileURLToPath(url: string | URL): string;
}
