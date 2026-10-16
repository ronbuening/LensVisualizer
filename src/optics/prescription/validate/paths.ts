/** Diagnostic paths belong to the authored format, never to generated rear-plate records. */
import type { CanonicalLens, IngestedPrescription } from "../canonical.js";
import { LENS_SCHEMA_DEFAULTS } from "../defaults.js";

/** V1 messages are unchanged; V2 diagnostics name the nested fields which supplied the canonical facts. */
export function authoredMessages(
  errors: string[],
  { prescription, provenance }: IngestedPrescription<CanonicalLens>,
): string[] {
  if (provenance.format === 1) return errors;
  const names: Record<string, string> = {
    zoomPositions: "zoom.stations[].focalLengthMm",
    zoomLabels: "zoom.stations[].label",
    zoomCloseFocusM: "zoom.stations[].closeFocusM",
    zoomStopSemiDiameters: "zoom.stations[].stopSemiDiameter",
    finiteConjugates: "focus.conjugates",
    var: "gaps",
    closeFocusM: "focus.closeFocusM",
    fstopSeries: "aperture.fStops",
    lensMounts: "catalog.lensMounts",
    imageFormat: "catalog.imageFormat",
    imageCircleMm: "catalog.imageCircleMm",
    acceptsTeleconverters: "catalog.acceptsTeleconverters",
    opticalConfiguration: "catalog.opticalConfiguration",
    sourceErrata: "source.errata",
  };
  for (const row of LENS_SCHEMA_DEFAULTS) {
    if (!row.spread) names[row.v1Field] = row.path;
  }
  return errors.map((error) => {
    let message = error.replace(
      /(^|field: )"([a-zA-Z]+)(\[\d+\])?"/g,
      (original, prefix: string, field: string, index: string = "") => {
        if (field === "nominalFno") {
          if (index && prescription.zoom) return `${prefix}"zoom.stations${index}.nominalFNumber"`;
          return `${prefix}"aperture.nominalFNumber"`;
        }
        return names[field] ? `${prefix}"${names[field]}${index}"` : original;
      },
    );
    message = message.replace(/^zoomStopSemiDiameters\b/, names.zoomStopSemiDiameters);
    /* Station-indexed forms: '"publishedStations.focus"[n] …' and '… zoom station n, which "publishedStations.zoom"
     * omits'. A V2 zoom holds both facts on its station record. */
    const indexed = message.match(/^"publishedStations\.focus"\[(\d+)\]/);
    if (indexed && prescription.zoom) {
      message = message.replace(indexed[0], `"zoom.stations[${indexed[1]}].publishedFocus"`);
    }
    if (message.includes('"publishedStations.zoom"')) {
      const station = indexed?.[1] ?? message.match(/zoom station (\d+)/)?.[1] ?? "";
      message = message.replace('"publishedStations.zoom"', `"zoom.stations[${station}].published"`);
    }
    if (message.startsWith('"publishedStations.focus"')) {
      const station = message.match(/at zoom station (\d+)/)?.[1];
      const path = prescription.zoom ? `zoom.stations[${station ?? ""}].publishedFocus` : "focus.published";
      message = message.replace('"publishedStations.focus"', `"${path}"`).replace('"var"', '"gaps"');
    }
    message = message.replace(/asph key "([^"]+)"/g, (original, label: string) => {
      const index = prescription.surfaces.findIndex((surface) => surface.label === label);
      return index < 0 ? original : `surfaces[${index}].asphere`;
    });
    message = message.replace(
      /(aberrationControl\.)?var\["([^"]+)"\]((?:\[\d+\])*)/g,
      (_original, ring: string | undefined, label: string, indices: string) =>
        `${ring ?? ""}gaps["${label}"].values${!ring && !prescription.zoom && indices ? "[0]" : ""}${indices}`,
    );
    const elementIndex = prescription.elements.findIndex((element) =>
      message.startsWith(`Element ${element.id} ("${element.name}"):`),
    );
    if (elementIndex >= 0) {
      message = message
        .replace(/\bfromSurface(?= ")/g, `elements[${elementIndex}].span[0]`)
        .replace(/\btoSurface(?= ")/g, `elements[${elementIndex}].span[1]`);
    }
    return message;
  });
}
