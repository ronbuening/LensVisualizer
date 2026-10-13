/** Stable small/complex prescriptions and work sizes for the MTF benchmark. */
export const MTF_BENCHMARK_CASES = [
  "canon/CanonSerenar50mmf18.data.ts",
  "sony/SonyFE2470mmf28GMII.data.ts",
  // Retrofocus pupil growth: the off-axis beam outgrows the axial entrance pupil.
  "sony/SonyFE1224mmf28GM.data.ts",
  // Last authored surface on the image plane.
  "sony/SonyFE2870mmf2GM.data.ts",
] as const;
export const MTF_BENCHMARK_GRIDS = [32, 64, 128, 256] as const;
export const MTF_FINITE_BENCHMARK_CASE = "fujifilm/FujifilmGF80mmf17R.data.ts";
