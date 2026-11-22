import type { LensSummary } from "./lensSummaries.js";

// Lens analyses document a different retail construction, uncertain production, or a match without marketed specs.
const PRODUCTION_MATCH_BY_KEY: Readonly<Partial<Record<string, boolean>>> = {
  "busch-pantoskop-1865-von-rohr-1899": true, // Von Rohr identifies the introduced Busch lens.
  "canon-ef-70-200f28l-is-usm": false, // 21 elements in 19 groups versus the retail 23 in 18.
  "canon-ef-s-18-135mm-f35-56-is-stm": false, // 11 optical groups in the model versus 12 in production.
  "canon-rf-14mm-f14-l-vcm": false, // Canon describes a concave focus-group asphere where the model has a biconvex lens.
  "canon-rf-85f12l": true, // Matching groups and special optics; counting the bonded Lp2 layer explains the apparent extra element.
  "canon-tse-50f28l-macro": false, // The selected patent example omits the production aspheres.
  "carl-zeiss-jena-cardinar-100mm-f4": true, // Factory prescription for the published Werra lens.
  "carl-zeiss-jena-pi-flektogon-30mm-f28-printed-1975-eline": false,
  "dallmeyer-rapid-landscape-1865-von-rohr-1899": true, // Von Rohr ties the modeled form to the 1865 release.
  "fujifilm-gf-23mm-f4": false, // The production optical section adds an element and a group.
  "fujifilm-gf-45-100mm-f4-patent-example-1": false, // The example has 17 elements and the shipping lens has 16.
  "kodak-ektar-52f15": true,
  "leica-super-vario-elmar-sl-16-35mm-f35-45-asph": false, // Cemented pair versus single-element focus.
  "meyer-optik-gorlitz-kino-plasmat-100-f2": true,
  "nikkor-85f14d": false, // Patent candidate has an additional element and group.
  "nikkor-af-s-58f14g": false, // Production separates the post-stop pair and moves an asphere.
  "nikkor-afs-16-35f4-vr": false, // The patent has 11 air-separated groups versus Nikon's 12.
  "nikon-af-s-fisheye-nikkor-8-15mm-f35-45e-ed": false, // 18 elements versus 15, with different aspheres.
  "nikon-af-s-dx-micro-nikkor-40mm-f28g": false, // A confirmed group-count difference and different focus travel.
  "nikon-af-s-nikkor-24-85mm-f35-45g-ed-vr": false, // The example is f/5.8 at telephoto versus f/4.5.
  "nikon-nikkor-20mm-f4": false, // The patent splits a positive production element into two.
  "nikon-uv-nikkor-55mm-f4": false, // Catalog production status is unestablished.
  "nikon-zoom-nikkor-56-168-f27-48-coolpix-sq": false, // Nikon describes G1 focus, while the model moves G3.
  "olympus-mzuiko-12mm-f2": false, // The patent air-spaces a pair and has nine groups versus eight in production.
  "olympus-zuiko-auto-fisheye-8mm-f28": false, // The patented ancestor has 10 elements versus 11.
  "pentax-hd-d-fa-star-70-200mm-f28-ed-dc-aw": false, // Four cemented doublets yield 15 groups versus Ricoh's 16.
  "rodenstock-apo-sironar-w-150f56-a1-reconstruction": false, // Archived 8-element model of a 7-element lens.
  "ross-doublet-1864-von-rohr-1899": true, // Von Rohr identifies the form put on the market in 1864.
  "schneider-variogon-45-100-f28": false, // 10 air-spaced groups versus 11 in the product brochure.
  "sony-fe-400-800-f63-8-g-oss": false, // 17 optical groups versus 19 in Sony's specifications.
  "sony-fe-600mm-f4-gm-oss": false, // The example is all-spherical and lacks the production XA element.
  "steinheil-periskop-1865-von-rohr-1899": true, // Von Rohr identifies the 1865 marketed form.
  "voigtlander-macro-apo-lanthar-125-f25": false, // 10 elements versus 11 in the retail lens.
  "voigtlander-petzval-portrait-1840-von-rohr-1899": true, // Published reconstruction of the portrait form released in 1840.
  "voigtlander-portrait-1878-von-rohr-1899": true, // Published reduction of the form Voigtländer introduced in 1878.
};

export function hasProductionMatch(summary: LensSummary): boolean {
  if (summary.key.startsWith("reference-")) return false;
  const override = Object.hasOwn(PRODUCTION_MATCH_BY_KEY, summary.key)
    ? PRODUCTION_MATCH_BY_KEY[summary.key]
    : undefined;
  return override ?? (summary.focalLengthMarketing !== undefined || summary.apertureMarketing !== undefined);
}
