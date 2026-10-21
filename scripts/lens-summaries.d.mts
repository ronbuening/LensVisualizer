type Prescription = Record<string, unknown>;

export const SUMMARY_FIELDS: readonly string[];
export const TELECONVERTER_SUMMARY_FIELDS: readonly string[];

export function loadPrescriptionIngest(): Promise<
  Pick<typeof import("../src/optics/buildLens.js"), "ingestLens" | "ingestTeleconverter" | "lensDataVersion">
>;

export function canonicalPrescription(
  file: object,
  kind: "lens" | "teleconverter",
  path?: string,
  loadIngest?: () => Promise<
    Pick<Awaited<ReturnType<typeof loadPrescriptionIngest>>, "ingestLens" | "ingestTeleconverter">
  >,
): Promise<Prescription>;

export function lensSummary(data: object): Prescription;

export function teleconverterSummary(
  data: object,
  visibleLenses: readonly object[],
  teleconverterCompatibility: (host: never, converter: never) => { ok: boolean },
): Prescription & { compatibleLensKeys: string[] };
