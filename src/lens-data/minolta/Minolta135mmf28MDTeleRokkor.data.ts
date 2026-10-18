import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP S51-62037 A, Example 1 (Minolta Camera Kabushiki Kaisha / Tamikazu Yamaguchi).
 * Four air-spaced spherical singlets; selected correlation to the four-element MD Tele Rokkor 135mm f/2.8,
 * not manufacturer-confirmed patent attribution. Source f=100 is scaled uniformly by 1.35;
 * the computed design EFL retains the source rounding residual. Last d is computed Gaussian infinity BFD.
 * No source-listed plates or active planes omitted. Native d-line indices and Abbe numbers unchanged.
 * Stop: no published physical position or diameter. Iris is inferred halfway in the L3-L4 airspace;
 * radius is exact on-axis entrance-pupil calibration to f/2.8, not a measured diaphragm.
 * SDs are inferred from the source silhouette and finite exact ray/geometry checks, not published apertures.
 * NO_INTERNAL_RECONSTRUCTION: no moving gaps; the 1.5 m production MFD is metadata only.
 * No catalog supplier identity or unsupported line indices are asserted.
 */

const LENS_DATA = {
  schema: 2,
  publishedAt: "2026-10-17T00:00:00Z", // Requested catalog publication date, independent of commit timezone.
  key: "minolta-md-tele-rokkor-135mm-f28",
  maker: "Minolta",
  name: "MINOLTA MD TELE ROKKOR 135mm f/2.8",
  subtitle: "JP S51-62037 A Example 1; selected four-element production correlation",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 4 GROUPS", "Computed f = 134.969 mm", "F/2.8", "PATENT FULL FIELD 18.2°", "ALL SPHERICAL"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 135, design: 134.9691287033389 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "JP S51-62037 A",
    patentYear: 1976,
    authors: ["Tamikazu Yamaguchi"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6583,
      vd: 58.5,
      indexReference: "d",
      focalLengthMm: 108.10225382868758,
      glass: "K-LaK11 spectral proxy (Sumita; lanthanum crown; patent vd 58.5 retained versus catalog 57.3; supplier unconfirmed)",
      role: "Front positive collector",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6583,
      vd: 58.5,
      indexReference: "d",
      focalLengthMm: 106.8858983553165,
      glass: "K-LaK11 spectral proxy (Sumita; lanthanum crown; patent vd 58.5 retained versus catalog 57.3; supplier unconfirmed)",
      role: "Second positive element",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.4,
      indexReference: "d",
      focalLengthMm: -46.0927956436511,
      glass: "SF1 spectral proxy (Schott; dense flint; production supplier unconfirmed)",
      role: "Negative third element",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.733,
      vd: 28.2,
      indexReference: "d",
      focalLengthMm: 182.55513172443693,
      glass: "Unmatched (patent nd=1.73300, νd=28.2)",
      role: "Rear positive element",
    },
  ],

  surfaces: [
    { label: "1", R: 58.59, d: 10.13175, sd: 26.5, medium: 1 },
    { label: "2", R: 308.8395, d: 1.57545, sd: 26.5 },
    { label: "3", R: 43.58745, d: 7.1712, sd: 24.5, medium: 2 },
    { label: "4", R: 107.06175, d: 3.1725, sd: 24.5 },
    { label: "5", R: 217.62, d: 12.3525, sd: 23.5, medium: 3 },
    { label: "6", R: 28.0233, d: 16.23375, sd: 23.5 },
    { label: "STO", R: "flat", d: 16.23375 },
    { label: "7", R: 122.05485, d: 7.8597, sd: 11.4, medium: 4 },
    { label: "8", R: 1351.215, d: 56.296047964208505, sd: 11.4 },
  ],

  focus: {
    closeFocusM: 1.5,
    description:
      "Single infinity prescription. The 1.5 m minimum focus distance is production metadata; the patent provides no focus spacings, so no finite-focus travel is modeled.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [],
  doublets: [],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
