# Audit Log - Sony FE 70-200mm F4 G OSS

Patent: US 2015/0226945 A1, Numerical Example 1

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US20150226945A1.pdf` against `SonyFE70200mmf4G.data.ts` and the companion analysis sidecar.
- Patent Table 1 confirms the stored R/d/nd/vd zoom prescription for Example 1, and Tables 2-3 confirm the variable gap and asphere rows already used by the data file.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates, matching the file header note.
- Updated L12, L13, and L412 from untagged APD to `apd: "inferred"` because the patent nd/vd values map to ED/Super-ED fluorophosphate catalog classes; no patent dPgF or theta-gF values are assigned.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-09-25 - MTF census: source track / paraxial focus contradiction

Source: local `patents/US20150226945A1.pdf`, Numerical Example 1 Tables
1-3, PDF pages 20-21 (printed pages 6-7), paragraphs 0107-0108. No scaling.
Checked all 37 surface R/d/nd rows, all 21 element vd values, and every
K/A4/A6/A8/A10 coefficient on S18, S28, S29. All match; higher terms are
absent/zero. Table 3 infinity wide/mid/tele gaps d5/d12/d17/d25/d28 match
every column. The existing inferred close-focus spacings are not source
infinity values and were not used in this check.

Table 1 labels the final gap BF without a number; Table 3's total track
190.0000 mm fixes it to 190 - 147.0727 = 42.9273 mm at wide infinity.
No plate is listed after S37. Independent ABCD gives EFL 72.160241 mm
versus stated 72.0974 mm and BFL 42.115294 mm versus that 42.9273 mm
image distance. The inferred BF correctly preserves the printed total track;
it is the source constraints that do not reproduce paraxial infinity focus.
No single source-supported misprint resolves this. Preserve the published
track, indices, and radii; do not tune BF or invent a plate.

Offset before/after: -0.812006 -> -0.812006 mm. Header and analysis now
disclose the source contradiction; Section E row deleted while the numerical
census flag remains. Existing glass/spectral annotations are unchanged.
No user-visible data correction or changelog entry.
