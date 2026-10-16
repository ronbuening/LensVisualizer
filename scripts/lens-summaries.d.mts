type Prescription = Record<string, unknown>;

export interface PrescriptionViews {
  ingestLens: (file: never) => unknown;
  ingestTeleconverter: (file: never) => unknown;
  toLensDataInput: (ingested: never, options?: { stopRadius?: number }) => object;
  toTeleconverterData: (ingested: never) => object;
}

/** Every export of the lens-data conversion seam, `src/optics/lensDataConversion.ts`. */
export interface LensDataConversion extends PrescriptionViews {
  ingestLens: (file: never, request?: { sources?: boolean }) => unknown;
  ingestTeleconverter: (file: never, request?: { sources?: boolean }) => unknown;
  lensDataVersion: (file: object) => 1 | 2 | undefined;
  V1_FLAT_RADIUS: number;
  V1_PRINT_ORDER: { readonly lens: readonly string[]; readonly teleconverter: readonly string[] };
  V1_GROUP_STARTS: { readonly lens: readonly string[]; readonly teleconverter: readonly string[] };
  V1_ROW_LISTS: readonly string[];
  v1SourceMap: (ingested: never, kind: "lens" | "teleconverter", data: never) => object;
  v1StopRadius: (prescription: never) => { index: number; stop: string } | undefined;
  toLensDataV2Input: (ingested: never, writes?: never) => object;
  toTeleconverterDataV2Input: (ingested: never, writes?: never) => object;
  v2Writes: () => {
    from: Record<string, string>;
    subtrees: string[];
    order: Record<string, string[]>;
    restored: string[];
  };
  v2SourceMap: (ingested: never, writes: never) => object;
  V2_GROUP_STARTS: readonly string[];
  V2_ROW_LISTS: readonly string[];
  prescriptionDifference: (a: unknown, b: unknown) => string | undefined;
  childPath: (base: string, key: string | number) => string;
  parentPath: (path: string) => string | undefined;
}

export const SUMMARY_FIELDS: readonly string[];
export const TELECONVERTER_SUMMARY_FIELDS: readonly string[];

export function loadLensDataConversion(): Promise<LensDataConversion>;

export function isV1LensData(file: object): boolean;

export function v1Prescription(
  file: object,
  kind: "lens" | "teleconverter",
  loadViews?: () => Promise<PrescriptionViews>,
): Promise<Prescription>;

export function lensSummary(data: object): Prescription;

export function teleconverterSummary(
  data: object,
  visibleLenses: readonly object[],
  teleconverterCompatibility: (host: never, converter: never) => { ok: boolean },
): Prescription & { compatibleLensKeys: string[] };
