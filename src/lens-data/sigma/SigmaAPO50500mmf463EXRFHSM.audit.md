# Audit Log — Sigma APO 50-500mm f/4-6.3 EX RF HSM

Patent: JP 2001-108902 A, Numerical Example 1 / Figure 1.

## 2026-10-20–21 — Source and reconstruction review

Independent re-reading of the complete 11-page patent and the 2004.9 Sigma catalog supported a qualified association
with the original RF/RF-HSM product. Example 1 has 20 elements, 16 air-separated groups, seven functional groups and
four cemented interfaces; Examples 2 and 3 have 20/15 and 19/15 construction. The maker diagram marks four SLD
positions corresponding to L2, L3, L8 and L9. The catalog edition date is not an introduction date. HSM applies to
the SA/Nikon F/Canon EF variants listed here; the Minolta/Pentax variants are distinguished by the maker.

All 37 numbered prescription rows, 36 spherical refracting faces, source d-line coordinates, stop row 20 and its
following 4.4600 mm interval were confirmed without scaling or source-cell repairs. Independent first-order methods
agreed at all three infinity stations. Functional-group EFLs were +205.149862, −39.832220, +83.450391, +171.364073,
−57.119810, +39.166287 and −50.767561 mm. All five claim inequalities passed. The literal stop-to-image Lt/Lw ratio
was 1.260803632, rather than printed 1.2610; an earlier interpretation as total track was corrected. Figure 4's wide
F/6.39 conflicts with the design table's F/4.15. An initial Figure 5 reading of 6.00 was corrected by magnifying the
original to 6.09; Figure 6 reads 6.39. Neither correction altered a prescription cell.

Historical glass identity remains unresolved. Coordinate searches used |Δnd| ≤ 0.003 and |Δνd| ≤ 2, not source-rounding
limits. The four 1.49700/79.3 positions had no match within that joint window: the closest K-PFK80 Abbe residual was
+2.0504, exceeding the bound by 0.0504. Other candidate similarities did not establish a supplier or melt. Rows 22
and 32 retained distinct Abbe numbers despite equal indices. Complete partial dispersion and photopic performance
were unavailable.

The original 513-node cam interpolated G1–G6 relative to the image and solved G7 as a Gaussian compensator, with one
positive-gap physical root at every node. Independent roots differed by at most 5.54 × 10⁻¹² mm. A rejected G2-only
solution switched branches near telephoto and caused multi-millimetre errors. The dense cam's sampled maximum
printed-plane error was 0.000758359 mm and Gaussian-target error 0.000794063 mm; neither established a factory cam.
Qualitative G7 imageward focus and the maker's unpaired 1–3 m film-plane distance did not supply numerical finite
spacings, so both focus columns remained at infinity.

Clear radii and iris size were inferred. L4's adopted 22/19.5 mm taper improved wide-field transmission substantially;
a 24 mm front gave little further improvement. Analytic complete-solid checks found minimum common-cap glass
thickness 0.341993257 mm, minimum air clearance 0.2 mm and maximum gap-sag fraction 0.891654460 below the unchanged
0.9 allowance. L4's straight rim join is 23.96001566° to the axis; 37.04267093° is a spherical edge slope. Relative
translations are affine between cam nodes. Sampled transmitted paths and examined failed prefixes had no
wrong-material traversal. Exterior misses were distinguished from successful rays. Physically admitted chiefs
reached the stop within 8.83 × 10⁻¹⁰ mm; uniqueness was not established.

Exactly calibrated nominal axial beams passed; the larger pupil-based launch clipped the physical iris. The
source-anchor inferred iris radii were 10.496817030 / 10.511540739 / 10.498609038 mm. The similarity did not establish
a constant factory iris law. Reference MTF converged through at least 40 lp/mm on the reviewed format/source-angle
samples; optional 80 lp/mm values were not universally converged. The wide 23.5° and tele 2.5° source angles fell just
outside the normal format domain. Complete photopic and finite-conjugate MTF remained unavailable. These were
sampled reconstruction results, not measured production performance.

## 2026-10-22 — Deployment validation and fix-up pass

Re-read the local patent's Example 1 on PDF pages 4–5 and Figure 1 / Figures 4–6 on pages 9–10. An independently
entered comparison found no mismatch in the 37 radii/stop rows, fixed thicknesses, 20 nd/νd pairs or the 21 variable
gap/BF anchor values. There are no aspheric coefficients. The source table remains literal, including d20 = 4.4600 mm.
The Figure 4 aperture conflict and Lt/Lw discrepancy above remain unresolved source errata.

| Quantity (mm) | Patent, wide / middle / tele | Model before → after |
|---|---|---|
| EFL | 50.1620 / 200.3408 / 483.7741 | 50.161965595 / 200.340798202 / 483.774076512 → identical |
| Gaussian BFD | Printed Bf 41.1805 / 67.8069 / 80.8774 | 41.180532450 / 67.806936169 / 80.877364156 → identical |
| Printed image gap | 41.1805 / 67.8069 / 80.8774 | Literal values → identical |

With defocus defined as image gap minus Gaussian BFD, source-anchor residuals remain −0.000032450 / −0.000036169 /
+0.000035844 mm. Default engine EFL 50.161965595 mm, stop radius 10.4968170305 mm, f-number 4.15, half-field
21.375913622° and total-track summary 347.0313 mm are unchanged. Every exported numeric scalar and every retained
station's derived numeric table value agrees exactly before/after. The total-track summary spans the cam; wide
first-surface-to-image track is 258.9505 mm, not 347.0313 mm.

Maker comparison: the local 2004.9 catalog's construction/prose page 7, specification page 12 and dated page 13 were
viewed. Its 20/16 section and four blue SLD positions agree structurally with Example 1 and the model. It describes
rear focus and gives 100–300 cm minimum distance measured from the film plane, without pairing distances to zoom
stations. Its 46.8–5° full-frame field differs from the patent's 47–5°. It supplies no clear radii, numerical focus
travel or cam coordinates; the production correlation remains qualified.

Cam reduction: 513 → 65 stations, selected exclusively from existing rows. Source rows 0/256/512 are retained
exactly at new rows 0/34/64; the other 62 remain explicitly unpublished. Approximately log-EFL selection was
redistributed toward telephoto after its initial worst midpoint defocus was 0.061916911 mm. The largest remaining
adjacent log-EFL span is 0.073647799. No group was re-solved. Contrary to the brief's corpus maximum, two other current
lenses have 81 stations (Olympus M.Zuiko 75–300 and Sigma 70–300 DG OS); the requested 65-station target was retained.

An independent scalar paraxial script uses the engine's actual layout and linearly interpolated gap values at
station-index coordinates, then compares its output with the engine's paraxial tracer. All 64 retained-interval
midpoints give maximum absolute defocus 0.044276222 mm (signed −0.044276222 mm at zoom 0.8671875, EFL 412.820353 mm),
versus 0.000758359 mm over the original 512 midpoints. A further 128 interior samples per retained interval give
0.044280028 mm at zoom 0.867248062, EFL 412.876360 mm. Agreement with the native paraxial ray is within
1.89 × 10⁻¹⁵ in height/slope. EFL remains monotonic. This is the intended interpolation-accuracy change from thinning;
the published geometry and first-order results do not change. Retained f-numbers are unchanged, strictly monotonic
through 4.15 / 6.09 / 6.39, and need no replacement interpolation law.

Fields changed:

- `name`: "SIGMA APO 50-500mm f/4-6.3 EX RF HSM" → "Sigma APO 50-500mm f/4-6.3 EX RF HSM".
- `subtitle`: "JP2001108902A Example1;20/16, seven groups, continuous reconstructed cam" →
  "JP 2001-108902 A, Example 1 — qualified production correlation".
- `visible`: false → true.
- `catalog.specs`: "EX RF HSM, NOT LATER DG/OS"; "FOUR MAKER SLD POSITIONS; NO NAMED MELT";
  "RECONSTRUCTED CONTINUOUS CAM"; "INFINITY ONLY; MAKER1–3m NOT PAIRED TO ZOOM" →
  "20 ELEMENTS / 16 GROUPS"; "DESIGN f = 50.16–483.77 mm"; "DESIGN F/4.15–6.39"; "ALL SPHERICAL"; "4 SLD ELEMENTS".
- Header comment: compact 513-node/history wording → source/example, physical 1:1 scale, 65 sampled stations,
  inferred iris/rims, unchanged printed residual, rejected G2 branch switch, zoom-only gaps, identical focus columns
  and Figure 4 discrepancy in plain prose.
- `source.errata[0].note`: run-together "Figure4", "Fno6.39", "Example1", "states4.15" wording → spaced Figure 4,
  F/6.39, Example 1 and F/4.15 wording; both apertures remain retained.
- All 20 `elements[].glass` strings: "Unidentified historical melt (nd …, νd …; catalog substitutes not adopted)" →
  "Unmatched (nd …, vd …; historical identity unresolved)". Optical coordinates and glass-resolution status remain unchanged.
- All 20 `elements[].role` strings: repeated source/unknown-spectrum boilerplate (plus SLD note on L2/L3/L8/L9) →
  concise true element/group roles. L1: negative front meniscus; L2/L3: positive G1 SLD members; L4/L5/L7: negative
  G2 members; L6: positive G2 member; L8: positive SLD G3; L9/L10: positive SLD/negative G4 pair; L11/L12:
  negative/positive G5 pair; L13/L14: positive G6 singlets; L15/L16: positive/negative G6 pair; L17/L18:
  positive/negative G7 pair; L19/L20: negative/positive G7 singlets. Existing L-number names and Element-number labels fit neighbouring Sigma files and remain unchanged.
- Seven `gaps` value arrays (6, 14, 16, 19, 23, 30, 37): 513 → 65 rows each, preserving both values of every retained
  row exactly. Gap labels, surfaces, radii, thicknesses, indices, Abbe numbers and semi-diameters remain unchanged.
- `zoom.stations`: 513 → 65 existing entries with unchanged focal lengths, nominal f-numbers and publication flags.
  Endpoint labels "Wide: source50.1620mm" / "Tele: source483.7741mm" → "Wide 50.16 mm" / "Tele 483.77 mm".
- `focus.description`: internal reconstruction/required-endpoint wording → explicit infinity-only explanation,
  unpublished rear-group travel and the maker's 1–3 m range with inactive 3 m metadata. `closeFocusM` remains 3.
  The schema requires at least two keyframes, so [0, 1] and their identical columns remain.
- Analysis: construction/element discussion and primary citations retained; glass summary added; cam/focus/aperture
  wording updated; old dense-cam results identified as historical; internal headings, archive/hash/check narrative,
  code identifiers, run-together words and ray/segment tallies removed. Scientific source discrepancies and limitations remain explicit.
- Audit: pipeline receipts, seals, absolute external paths and replay mechanics → condensed substantive source,
  errata, geometry, glass, cam, aperture and focus history plus this dated section.

The before/after engine summary and paraxial probe load successfully. The final surface audit reports no validation
errors. The aperture audit reports 65/65 stations within its 3% f-number tolerance, zero rim/trace/iris failures and
zero failed stations (baseline 513/513, also zero failures). This tolerance pass does not contradict the previously
identified exact full-pupil marginal iris clipping. No broader test suite, generators, build, formatter or server was run.

Open: inferred cam, rims and iris are not factory dimensions; 0.044280028 mm is a sampled interpolation bound, not
a proof over every zoom or a repeated off-axis/MTF study. Finite focus travel and complete historical spectral data
remain unavailable. Figure 4 F/6.39 versus wide F/4.15, Lt/Lw 1.2610 versus 1.260803632, and pupil-based marginal iris
clipping remain explicit limitations. No additional optical changes were made.
