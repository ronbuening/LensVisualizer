import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Yoshiyuki Shimizu's sole example in JP S51-43920 A gives the radii and spacings
 * in millimetres, the d-line glass data and a 240.2 mm back focus at infinity.
 * The front and rear clear radii are measured from Nikon's dimensioned section of
 * the lens, scaled by its 709.0 mm vertex span. They cover the 35 mm frame corner
 * but not the outer part of the patent's 5° field.
 * The lens head carries its own iris. Its position halfway across the 659 mm air
 * space is an estimate, and its radius follows from the printed f/11 aperture.
 */
const LENS_DATA = {
  schema: 2,
  key: "nikon-nikkor-1200mm-f11-ed",
  maker: "Nikon",
  visible: true,
  name: "NIKON NIKKOR 1200mm f/11 ED",
  subtitle: "JP S51-43920 A, sole example — Nippon Kogaku / Shimizu",
  source: {
    patentNumber: "JP S51-43920 A",
    patentYear: 1976,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Yoshiyuki Shimizu"],
    assignees: ["Nippon Kogaku K.K."],
    sdSource: "figure-measured",
  },
  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 1200,
      design: 1199.7,
    },
    fNumber: {
      marketing: 11,
      design: 11,
    },
    closeFocusM: { marketing: 50 },
    specs: ["5 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "1 ED ELEMENT"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Biconvex Positive",
      nd: 1.50032,
      vd: 81.9,
      indexReference: "d",
      focalLengthMm: 425.23,
      glass: "Unmatched (nd 1.50032 / νd 81.9; partial dispersions fitted to Fig. 2A)",
      apd: "inferred",
      apdNote:
        "Nikon states that the lens uses ED glass, and this element's Abbe number of 81.9 is the only ED-class value in the prescription. Its partial dispersions, P g,F 0.5436 and P C,d 0.2986, are fitted to the C- and g-line curves of the patent's Fig. 2A, not printed; they lie near fluorite's.",
      role: "Positive front element and likely ED glass, with the lowest dispersion of the five glasses.",
      nC: 1.498496,
      nF: 1.504605,
      ng: 1.507926,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      focalLengthMm: -283.24,
      glass: "LAF2 (HOYA)",
      role: "Balances the two positive front elements with negative power and stronger dispersion.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Biconvex Positive",
      nd: 1.62374,
      vd: 47.0,
      indexReference: "d",
      focalLengthMm: 438.76,
      glass: "E-BAF8 (HIKARI)",
      role: "Converges the beam before the long air space leading to the rear doublet.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      diagramLabel: "L4a",
      type: "Biconcave Negative",
      nd: 1.51632,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: -261.27,
      glass: "S-BSL7 (OHARA)",
      role: "Supplies the negative power of the rear doublet.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      diagramLabel: "L4b",
      type: "Biconvex Positive",
      nd: 1.66854,
      vd: 39.2,
      indexReference: "d",
      focalLengthMm: 446.75,
      glass: "S-BAH32 (spectral proxy; patent nd 1.66854 / νd 39.2; supplier and melt unspecified)",
      role: "Pairs a more dispersive positive glass with the negative member of the rear doublet.",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 412.0,
      d: 13.0,
      sd: 56.8,
      medium: 1,
    },
    {
      label: "2",
      R: -435.3,
      d: 8.0,
      sd: 56.8,
    },
    {
      label: "3",
      R: -403.2,
      d: 8.0,
      sd: 56.8,
      medium: 2,
    },
    {
      label: "4",
      R: 445.2,
      d: 2.0,
      sd: 56.8,
    },
    {
      label: "5",
      R: 396.7,
      d: 10.0,
      sd: 56.8,
      medium: 3,
    },
    {
      label: "6",
      R: -873.9,
      d: 329.5,
      sd: 56.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 329.5,
    },
    {
      label: "7",
      R: -195.0,
      d: 2.0,
      sd: 24.4,
      medium: 4,
    },
    {
      label: "8",
      R: 439.2,
      d: 7.0,
      sd: 24.4,
      medium: 5,
    },
    {
      label: "9",
      R: -927.5,
      d: 240.2,
      sd: 24.4,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "The lens head screws into a Nikon focusing unit, which moves it as a whole. The patent gives the spacings at infinity only, so the model stays at infinity. Nikon's closest distance is 50 m from the film, at a 1:38.8 reproduction ratio.",
  },
  aperture: {
    nominalFNumber: 11,
    fStops: [11, 16, 22, 32, 45, 64],
    maxFNumber: 64,
  },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "C1", fromSurface: "7", toSurface: "9" }],
  layout: {
    yScFill: 0.65,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
