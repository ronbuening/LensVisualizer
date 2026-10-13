# Audit Log - Sony DT 16-50mm F2.8 SSM

Patent: US 2012/0307129 A1, Example 1

## 2026-08-13 - Initial patent-figure, identity, and glass audit

- Reviewed ignored local `patents/US20120307129A1.pdf`, especially Figure 2, against the new data and analysis sidecar.
- The stored semi-diameters reproduce the patent section's front-to-rear taper within the figure-measurement threshold, so no SD was changed.
- Confirmed the SAL1650 display name as `SONY DT 16-50mm f/2.8 SSM` and retained the unscaled Example 1 correlation.
- Reclassified G1 from an unresolved `847237` coordinate to the existing HIKARI J-SF03 catalog-equivalent curve. The patent rounds its Abbe value to 23.7; J-SF03 is 1.84666/23.78. This is an optical-equivalent assignment, not a production-supplier claim.
- The two patent-specified compound-asphere layers remain unmatched because their material identities are unpublished.

## 2026-08-13 - Screenshot-led diagram and catalog-completeness review

- Compared the supplied site screenshot with the rendered patent Figure 2 and retained all SDs: the front taper, compact GR2/GR3 region, and expanding rear group already match the source without violating ray or rim constraints.
- Replaced optical-media indexes 1-18 with Figure 2's G1-G16 identifiers plus explicit G4r/G13r compound-layer labels. The display name remains the verified `SONY DT 16-50mm f/2.8 SSM`.
- Extended the prior G1 catalog assignment across every physical glass using resolver-selected equivalents from HIKARI, SCHOTT, SUMITA, OHARA, HOYA, and CDGM. Coverage is 16/18 modeled media: all 16 physical glass pieces have trusted curves, while the two unpublished compound layers remain intentionally unmatched.
- Correlated Sony's three-ED production count to the repeated 1.49700/81.6 positions G10, G12, and G15 with `apd: "inferred"`; no patent partial-dispersion values were added.
- Added no catalog glass because every source-identifiable physical medium is already covered and assigning a glass to either proprietary compound layer would be speculative.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 prints 2ω = 85.5° / 54.3° / 33.0° (Table 3, PDF p. 17), and the aberration plots of Figs. 3–5 run to
Y = 14.40 mm at all three stations, just past the APS-C corner (14.175 mm), so the design covers the format. The rims,
estimated for a 0.60 field, clipped the real chief ray (solved through the stop centre) early: surface 6A from 37.4° at
wide (84% of the corner) and surface 1 from 24.1° at 28.3 mm and 15.5° at tele (89% and 96%). The traced chief ray to
the patent's Y = 14.40 mm (42.43° / 26.95° / 16.38°) needs surface 1 ≥ 27.12, 2 ≥ 25.19 and 6A ≥ 12.59 and 7 ≥ 12.23
(wide), and 3 ≥ 24.44 and 5 ≥ 20.29 (28.3 mm); the corner alone needs 26.46 / 24.70 / 23.95 / 12.39 / 12.04 and leaves
surface 5 unclipped. Values are the Y = 14.40 floors + ~0.5 mm, rounded up. Surface 4 is scaled with surface 5 (G3,
×1.035); the cemented G1/G2 surfaces and the G4 compound asphere take their own floors. Fig. 2 draws G1/G2 to about
32.4 mm, and Sony's 72 mm filter allows up to 36 mm, so every new value stays inside the drawn and mechanical envelope.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 22.6 | 27.7 | wide chief ray to Y = 14.40 mm 27.12 mm + clearance (corner 26.46) |
| 2 | 22.5 | 25.7 | wide chief ray to Y 25.19 mm + clearance (corner 24.70); cemented G1/G2 junction |
| 3 | 21.7 | 25.0 | 28.3 mm chief ray to Y 24.44 mm + clearance (corner 23.95) |
| 4 | 21.7 | 22.5 | G3 scaled with surface 5 (×1.035); does not clip |
| 5 | 20.1 | 20.8 | 28.3 mm chief ray to Y 20.29 mm + clearance |
| 6A | 10.4 | 13.1 | wide chief ray to Y 12.59 mm + clearance (corner 12.39) |
| 7 | 10.3 | 12.8 | wide chief ray to Y 12.23 mm + clearance (corner 12.04) |

The validator accepts the new values, all three stations reach 100% of the corner with every rim clear, and the
image-circle floor reports nothing undersized. The new 6A rim departure is +0.602884 mm; the G4 resin layer's edge
thins to 0.421 mm at 12.8 mm, still above G16's 0.395 mm, so the analysis's quoted minimum edge thickness, largest rim
angle (S8) and tightest cross-gap margin (S27A–S28) are unchanged.
