import type { ConversionOptions, ConversionResult } from "./convert.mjs";

export const USAGE: string;

export function parseConversionArgs(argv: readonly string[]): {
  input: string;
  toVersion: 1 | 2;
  mode: "dry-run" | "check" | "write";
  output: string | undefined;
};

export interface TypeCheckResult {
  byFile: Map<string, string[]>;
  other: string[];
}

export interface ConversionRun {
  argv: readonly string[];
  cwd?: string;
  stdout: { write(text: string): unknown };
  stderr: { write(text: string): unknown };
  fs?: object;
  signals?: {
    on(signal: string, handler: (signal: string) => void): unknown;
    off(signal: string, handler: (signal: string) => void): unknown;
  };
  pid?: number;
  convert?: (content: string, options: ConversionOptions) => Promise<ConversionResult>;
  typeCheck?: (files: { path: string; text: string }[]) => TypeCheckResult;
  normalizeSource?: (source: string, path: string) => string;
  loadConversion?: () => Promise<object>;
  loadBuildLens?: () => Promise<{ default: (data: never) => object }>;
}

export function runConversion(run: ConversionRun): Promise<0 | 1 | 2>;
