import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MEYER OPTIK GÖRLITZ ORESTEGOR 500mm f/5.6                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: DE 1 980 417, Example 1 / Zahlenbeispiel (VEB Feinoptisches      ║
 * ║ Werk Görlitz). The patent works at f' = 100 mm; all prescription lengths  ║
 * ║ are uniformly scaled ×5 for the production-correlation model.             ║
 * ║ Computed design EFL is 497.7868 mm; 500 mm remains the marketed value.    ║
 * ║                                                                            ║
 * ║ Four air-separated spherical elements / four groups.                      ║
 * ║ Focus: NO_INTERNAL_RECONSTRUCTION. The 6.0 m value is the manufacturer    ║
 * ║ closest-focus specification; no unpublished internal focus law is added.  ║
 * ║                                                                            ║
 * ║ STO: the patent gives f/5.6 but no diaphragm location or diameter. A      ║
 * ║ historical schematic shows the iris in the long L2-L3 gap, so this model  ║
 * ║ places STO at the gap midpoint. The stop radius is derived from the       ║
 * ║ design f-number, f/5.6; its diameter is a modeling value, not an          ║
 * ║ independently measured one.                                               ║
 * ║                                                                            ║
 * ║ Semi-diameters: not patent-published. Conservative modeled values were    ║
 * ║ derived from exact meridional ray envelopes and checked for edge thickness,║
 * ║ rim slope, shared-gap intrusion, and full-pupil containment through ±3°.   ║
 * ║ The 6×6-corner diagnostic clips four extreme-pupil samples; no production ║
 * ║ render-trim or unvignetted-corner claim is made.                            ║
 * ║                                                                            ║
 * ║ Patent metadata follows the supplied DE record itself. It prints            ║
 * ║ “Nr. 1 980 417” / “Gbm” but no modern kind-code suffix, so the structured  ║
 * ║ identifier does not add one. Page 2 says an inventor designation was       ║
 * ║ attached, but that attachment is absent from the supplied nine-page scan;  ║
 * ║ patentAuthors is therefore empty rather than populated from later sources. ║
 * ║                                                                            ║
 * ║ Production literature lists interchangeable Exakta, Praktica/Pentacon,    ║
 * ║ Praktina, and Praktisix adapters. The current taxonomy lacks a Praktisix/  ║
 * ║ Pentacon-Six id, so only supported verified mount ids are authored here.  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "meyer-optik-gorlitz-orestegor-500mm-f56",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ ORESTEGOR 500mm f/5.6",
  subtitle: "DE 1 980 417, Example 1 — 5× scaled production correlation; modeled stop and semi-diameters",

  catalog: {
    lensMounts: ["exakta", "m42", "praktina"],
    imageFormat: "6x6",
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "f = 497.79 mm DESIGN / 500 mm MARKETED",
      "f/5.6",
      "6×6 / 10° PUBLISHED",
      "ALL-SPHERICAL",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 500, design: 497.786802362408 },
    fNumber: { marketing: 5.6, design: 5.6 },
  },

  source: {
    patentNumber: "DE 1 980 417",
    patentYear: 1968,
    authors: [],
    assignees: ["VEB Feinoptisches Werk Görlitz"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.50977,
      vd: 61.9,
      indexReference: "d",
      focalLengthMm: 231.710841087374,
      glass: "Unmatched (510619 crown-class coordinate; supplier unresolved)",
      apd: false,
      role: "Front positive collector of the converging main part.",
      diagramLabel: "L I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      focalLengthMm: -472.638101208451,
      glass: "740282 - dense-flint class (supplier unresolved)",
      apd: false,
      role: "Negative meniscus completing the converging front main part; concave side faces the object.",
      diagramLabel: "L II",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex",
      nd: 1.61659,
      vd: 36.6,
      indexReference: "d",
      focalLengthMm: 178.400557907199,
      glass: "617366 - F3/F4/PBM4 class (supplier unresolved)",
      apd: false,
      role: "Positive front element of the diverging rear main part; curved side faces the object.",
      diagramLabel: "L III",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.65844,
      vd: 50.8,
      indexReference: "d",
      focalLengthMm: -115.084381300245,
      glass: "658509 — dense crown; N-SSK5 compatible spectral proxy (historical supplier/melt unresolved)",
      apd: false,
      role: "Negative rear element completing the diverging rear main part.",
      diagramLabel: "L IV",
    },
  ],

  surfaces: [
    { label: "1", R: 195, d: 18.5, sd: 64, medium: 1 },
    { label: "2", R: -290, d: 6.5, sd: 64 },
    { label: "3", R: -265, d: 6.5, sd: 62, medium: 2 },
    { label: "4", R: -1105, d: 151.25, sd: 62 },
    { label: "STO", R: "flat", d: 151.25 },
    { label: "5", R: 110, d: 8, sd: 29.0, medium: 3 },
    { label: "6", R: "flat", d: 6, sd: 29.0 },
    { label: "7", R: -185, d: 6, sd: 29.0, medium: 4 },
    { label: "8", R: 130, d: 90, sd: 29.0 },
  ],

  focus: {
    closeFocusM: 6,
    description:
      "Focus travel is not modeled. The patent provides one fixed prescription; 6.0 m is the marketed closest-focus distance, but no internal focus spacing law is modeled.",
  },

  aperture: { nominalFNumber: 5.6, fStops: [5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT MAIN", fromSurface: "1", toSurface: "4" },
    { text: "REAR MAIN", fromSurface: "5", toSurface: "8" },
  ],
  doublets: [],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
