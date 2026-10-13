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
}

export function stopRadiusEntry(
  stop: { from: string; text: string; value: number; engine: EngineStopRadius },
  comments: readonly object[],
  parentPath: (path: string) => string | undefined,
): StopRadiusEntry;

export function formatConversionReport(reports: readonly ConversionReport[]): string;
