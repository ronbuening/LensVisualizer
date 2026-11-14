/** Type contract for the opt-in signature comparator used by the tooling suite. */
interface Signature {
  schemaVersion: number;
  inputHashes: { engineSha256: string; lensDataSha256: Record<string, string> };
  cases: {
    id: string;
    lensDataFile: string;
    fields: { fieldFraction: number; [key: string]: unknown }[];
    [key: string]: unknown;
  }[];
}

interface Change {
  case?: string;
  field?: string | number;
  quantity: string;
  old: unknown;
  new: unknown;
  delta: number | null;
  exceedsTolerance: boolean;
  nondeterminism?: boolean;
}

export const REPEATABILITY_TOLERANCE: number;
export function roundSignature<T>(value: T): T;
export function compareSignatures(
  before: Signature,
  after: Signature,
): { changes: Change[]; hashes: Change[]; failed: boolean };
export function main(argv: readonly string[]): Promise<number>;
