export type EngineStopRadius =
  | { kind: "prime" | "held" | "perStation" | "schedule"; radii: number[] }
  | { error: string };

export interface StopRadiusEntry {
  from: string;
  authored: string;
  engine: EngineStopRadius;
  comments: { line: number; text: string; flagged: boolean }[];
  elsewhere: { line: number; text: string }[];
}

export interface ConversionReport {
  file: string;
  moved: { from: string; to: string; line: number; text: string }[];
  stops: StopRadiusEntry[];
  zeroTerms: { entry: string; terms: string[] }[];
  dropped: { from: string; value: unknown; kind: string }[];
  /** Going to V1: each medium name V1 cannot hold. */
  mediumNames?: { from: string; name: string }[];
  /** Going to V1: the stop radius written for V1's type. */
  stopWritten?: { at: string; value: number; stop: "prime" | "held" | "perStation" | "schedule" };
}

export function stopRadiusEntry(
  stop: { from: string; text: string; value: number; engine: EngineStopRadius },
  comments: readonly object[],
  parentPath: (path: string) => string | undefined,
): StopRadiusEntry;

export function formatConversionReport(reports: readonly ConversionReport[]): string;
