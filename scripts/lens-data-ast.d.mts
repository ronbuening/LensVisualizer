import type { ExportAssignment, Expression, Node, SourceFile, VariableStatement } from "typescript";
import type { LensIdentity } from "./lens-data-lib.mjs";

export function parseLensDataSource(content: string, fileName?: string): SourceFile;
export function evaluateLensDataSource(content: string, fileName?: string): unknown;
export function readLensIdentity(data: unknown): LensIdentity;
export function walkLensDataSource(
  content: string,
  fileName: string,
  visit: (keys: (string | number)[], syntax: Node, expression: Expression, bound: boolean) => void,
): {
  sourceFile: SourceFile;
  value: unknown;
  exported: ExportAssignment | undefined;
  declaration: VariableStatement | undefined;
};
