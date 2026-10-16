type Prescription = Record<string, unknown>;

export interface PrescriptionViews {
  ingestLens: (file: never) => unknown;
  ingestTeleconverter: (file: never) => unknown;
  toLensDataInput: (ingested: never) => object;
  toTeleconverterData: (ingested: never) => object;
}

export const SUMMARY_FIELDS: readonly string[];
export const TELECONVERTER_SUMMARY_FIELDS: readonly string[];

export function loadLensDataConversion(): Promise<PrescriptionViews>;

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
