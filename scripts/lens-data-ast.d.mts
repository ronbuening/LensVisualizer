import type { SourceFile } from "typescript";
import type { LensIdentity } from "./lens-data-lib.mjs";

export function parseLensDataSource(content: string, fileName?: string): SourceFile;
export function evaluateLensDataSource(content: string, fileName?: string): unknown;
export function readLensIdentity(data: unknown): LensIdentity;
