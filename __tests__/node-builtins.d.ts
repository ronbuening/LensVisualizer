declare module "node:child_process" {
  export function spawnSync(
    file: string,
    args: readonly string[],
    options: { encoding: "utf8"; timeout?: number },
  ): { status: number | null; stdout: string; stderr: string };
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
  export function copyFileSync(source: string, destination: string): void;
  export function cpSync(source: string, destination: string, options?: { recursive?: boolean }): void;
  export function existsSync(path: string): boolean;
  export function linkSync(existingPath: string, newPath: string): void;
  export function mkdirSync(path: string, options?: { recursive?: boolean }): string | undefined;
  export function mkdtempSync(prefix: string): string;
  export function openSync(path: string, flags: string): number;
  export function readFileSync(path: string | URL): Uint8Array;
  export function readFileSync(path: string, encoding: string): string;
  export function readdirSync(path: string): string[];
  export function readdirSync(
    path: string,
    options: { withFileTypes: true },
  ): { name: string; isFile(): boolean; isDirectory(): boolean }[];
  export function realpathSync(path: string): string;
  export function renameSync(oldPath: string, newPath: string): void;
  export function rmSync(path: string, options?: { recursive?: boolean; force?: boolean }): void;
  export function statSync(path: string): { isDirectory(): boolean; mode: number };
  export function symlinkSync(target: string, path: string): void;
  export function unlinkSync(path: string): void;
  export function writeFileSync(
    path: string | number,
    data: string | Uint8Array,
    options?: string | { encoding?: string; flag?: string },
  ): void;
  export function writeSync(descriptor: number, data: string | Uint8Array): number;
}

declare module "node:os" {
  export function tmpdir(): string;
}

declare module "node:path" {
  export function basename(path: string): string;
  export function dirname(path: string): string;
  export function join(...paths: string[]): string;
  export function relative(from: string, to: string): string;
  export function resolve(...paths: string[]): string;
}

declare module "node:stream" {
  export class Writable {
    constructor(options: { write(chunk: unknown, encoding: string, callback: (error?: Error | null) => void): void });
    write(chunk: string): boolean;
    on(event: string, listener: (...args: unknown[]) => void): this;
  }
}

declare module "node:process" {
  export const argv: string[];
  export const env: Record<string, string | undefined>;
}

declare module "node:url" {
  export function fileURLToPath(url: string | URL): string;
}
