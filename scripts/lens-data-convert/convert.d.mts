import type { ConversionReport } from "./report.mjs";

export interface ConversionOptions {
  file: string;
  kind: "lens" | "teleconverter";
  toVersion?: 1 | 2;
  typesDirectory?: string;
  loadConversion?: () => Promise<object>;
  loadBuildLens?: () => Promise<{ default: (data: never) => object }>;
  format?: (text: string) => Promise<string>;
}

export interface ConversionResult {
  text: string | undefined;
  refusal: string | undefined;
  report: ConversionReport;
}

export function convertLensDataSource(content: string, options: ConversionOptions): Promise<ConversionResult>;

export function formatWithPrettier(text: string): Promise<string>;
