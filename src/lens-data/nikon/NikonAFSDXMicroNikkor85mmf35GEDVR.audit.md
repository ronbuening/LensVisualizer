# Nikon AF-S DX MICRO-NIKKOR 85mm f/3.5G ED VR Patent Audit

Patent: US 2009/0190220 A1, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US20090190220A1.pdf`; Figure 2 on PDF page 3 is the controlling optical section.
- The original SD ladder made L11 the largest front element, whereas the patent shows the L13/L14 cemented pair as the tallest part of G1. It also understated the diameter of the G4 vibration-reduction pair.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 1 / 2 / 3 / 4 | 15.5 / 15.0 / 14.6 / 13.5 | 14.0 / 13.8 / 13.0 / 13.0 |
| 5 / 6 / 7 | 13.25 / 13.0 / 12.7 | 15.0 / 15.0 / 15.0 |
| 19 / 20 / 21 | 8.6 / 8.6 / 8.5 | 10.5 / 10.5 / 10.3 |

- Replaced class-only annotations with the compatible catalog entries already selected by the resolver; no new catalog row was required.
- Normalized the display name to `NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5G ED VR`.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAFSDXMicroNikkor85mmf35GEDVR.data.ts`
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFSDXMicroNikkor85mmf35GEDVR.data.ts`
- Full repository checks are recorded in the integrating commit.

## 2026-08-18 — Screenshot follow-up

- Compared the supplied rendering directly with Figure 2. The revised G1 and VR-pair heights align with the source silhouette; no further SD change was justified.
- Confirmed published dual-focus travel: G2 moves `+15.2850mm` imageward, G3 moves `−12.9922mm` objectward, and G1/G4/G5 remain axially fixed.
- Marked L33 as the single inferred ED position, matching the production one-ED count, while leaving G4's transverse VR behavior separate from axial focus motion.

## 2026-08-18 — Cemented-pair proportion correction

- Re-inspected a 600 dpi render of Figure 2 after the site screenshot exposed that the earlier silhouette assessment had over-read leader-line and flange ink. This supersedes the SD conclusion in the preceding screenshot follow-up.
- The optical outlines put D1 below L11 and near L12 in height. They put D4 modestly above G3 but below the rear G5 elements; the enlarged site rendering violated both orderings.

| Cemented pair | Surfaces | Before (mm) | After (mm) | Figure-supported ordering |
|---|---|---:|---:|---|
| L13 / L14 (D1) | 5 / 6 / 7 | 15.0 / 15.0 / 15.0 | 13.25 / 13.0 / 12.7 | L11 > D1 ≈ L12 |
| L41 / L42 (D4) | 19 / 20 / 21 | 10.5 / 10.5 / 10.3 | 9.5 / 9.5 / 9.4 | G5 > D4 ≈ G3 |

- The image-circle audit reports no undersized surfaces, and the real validator accepts all six reduced SDs without edge-thickness, rim-slope, cross-gap, or SD-ratio errors. Restoring the smaller D1 rim also makes the earlier lens-specific `gapSagFrac = 0.94` allowance unnecessary, so the lens now uses the default `0.90` policy with +0.139453 mm clearance at the shared 13.0 mm material rim.

### Verification

- `npm run audit:patent-figure -- src/lens-data/nikon/NikonAFSDXMicroNikkor85mmf35GEDVR.data.ts patents/US20090190220A1.pdf 3 0.075,0.36,0.63,0.78 --rot90 --axis=0.622 --dpi=600`
- `npm run audit:surface -- src/lens-data/nikon/NikonAFSDXMicroNikkor85mmf35GEDVR.data.ts --sd 5=13.25 6=13.0 7=12.7 19=9.5 20=9.5 21=9.4`
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFSDXMicroNikkor85mmf35GEDVR.data.ts`
