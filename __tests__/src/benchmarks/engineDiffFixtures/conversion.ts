/** Archived harness fixtures convert explicitly before they reach the V2-only head engine. */
import * as capture from "../../../../src/benchmarks/engineDiff/captureEntry.js";
import { decodeValue, encodeValue } from "../../../../src/benchmarks/engineDiff/payload.js";
import {
  ingestLens,
  ingestTeleconverter,
  lensDataVersion,
  toLensDataV2Input,
  toTeleconverterDataV2Input,
} from "../../../../src/optics/lensDataConversion.js";

export * from "../../../../src/benchmarks/engineDiff/captureEntry.js";

function fileV2(file: object, kind: "lens" | "teleconverter"): object {
  if (lensDataVersion(file) !== 1) return file;
  try {
    return kind === "lens"
      ? toLensDataV2Input(ingestLens(file as Parameters<typeof ingestLens>[0]))
      : toTeleconverterDataV2Input(ingestTeleconverter(file as Parameters<typeof ingestTeleconverter>[0]));
  } catch {
    // Deliberately unreadable fixtures still exercise the head's refusal and fingerprint fallback.
    return file;
  }
}

function catalogV2<T extends Pick<capture.SerializedCatalog, "lenses" | "teleconverters">>(catalog: T): T {
  const entries = (kind: "lens" | "teleconverter") =>
    (kind === "lens" ? catalog.lenses : catalog.teleconverters).map((entry) => {
      const encoded = entry.prescription;
      if (encoded && typeof encoded === "object" && !Array.isArray(encoded) && encoded.schema === 2) return entry;
      return { ...entry, prescription: encodeValue(fileV2(decodeValue(encoded) as object, kind)) };
    });
  return { ...catalog, lenses: entries("lens"), teleconverters: entries("teleconverter") };
}

export const captureRecords: typeof capture.captureRecords = (catalog, ...args) =>
  capture.captureRecords(catalogV2(catalog), ...args);
export const fingerprintCatalog: typeof capture.fingerprintCatalog = (catalog) =>
  capture.fingerprintCatalog(catalogV2(catalog));
export const requestCatalog: typeof capture.requestCatalog = (catalog) => capture.requestCatalog(catalogV2(catalog));
export const permittedPairs: typeof capture.permittedPairs = (catalog) => capture.permittedPairs(catalogV2(catalog));
export const unbuiltPairs: typeof capture.unbuiltPairs = (catalog, ...args) =>
  capture.unbuiltPairs(catalogV2(catalog), ...args);
export const catalogLensData: typeof capture.catalogLensData = (file) =>
  capture.catalogLensData(fileV2(file, "lens") as Parameters<typeof capture.catalogLensData>[0]);
export const catalogTeleconverterData: typeof capture.catalogTeleconverterData = (file) =>
  capture.catalogTeleconverterData(
    fileV2(file, "teleconverter") as Parameters<typeof capture.catalogTeleconverterData>[0],
  );
