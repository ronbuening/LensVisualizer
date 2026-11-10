# LEICA SUMMAREX 85mm f/1.5: source and geometry audit

Whole source and scale: DE L12741 MAZ, 85.
No optical row is retuned. Stop split is preserved as documented in the companion analysis.

Provisional surface caps (mm): [30, 30, 17, 17, 17, 16, 16, 16, 20, 20, 21, 21] (superseded by the final rims in the data file: 30, 30, 26, 23, 18.5, 18, 16.9, 18.42, 20, 20, 21, 21). No source clear diameters exist.
Dense static samples include axis and rim; all adjacent optical faces are positively separated. The selected allowance and all native margins are reported below; the earlier 80% criterion applied only to the initial clipped draft.

The traced f/1.5 iris beam requires surface-7 height 16.874206 mm and surface-8 height 18.410457 mm. Minimally rounded engineered rims of 16.9 and 18.42 mm are used. The surface-7 rim angle is 66.686547°, above the default 64.158067°; its separate model-specific bound is 67°. The rim remains 1.5025 mm inside the spherical domain and the neighboring glass edge separation is 1.216061 mm. The small R8–R9 air gap remains physically open by 0.0238486 mm. Its required sag intrusion fraction is 0.964484659: native staged 0.90, 0.95 and 0.964 bounds fail, while 0.965 passes. This is below the hard 0.97 ceiling. Smaller nonoverride rim alternatives clip the nominal beam and fail the standard aperture target. All other required engine checks still run; the exceptions do not disable checks. Native iris clearances are 1.909915 and 2.250735 mm, with zero trim and iris-limited f/1.5. Narrow positive margins are geometric evidence, not factory tolerances.

Reference-wavelength geometric and diffraction MTF were evaluated at maker-angle hypotheses 0°, 7.0° and 14°, plus the independently solved actual full-frame corner 14.277483278°. Neither patent gives a numerical field. Exact maker angles use chief-height mapping; the temporary 100 mm image-circle normalization exists only in the diagnostic request, not the authored model. Grid-128 nonconvergence is preserved. The supported adaptive cap of 256 converges through sampled 40 lp/mm at all maker angles. A requested 512 grid was rejected by the support guard and is not used. The derived-plane and best-axial results are separate: best-axial shift -0.337107403249 mm is diagnostic only and never authored.

At the actual full-frame corner, unchanged-plane geometric MTF converges only through 30 lp/mm: its 40-lp/mm delta 0.0104253 exceeds the 0.01 criterion at the supported 256 cap. The other corner modes converge through sampled 40 lp/mm. This limit is retained without weakening convergence criteria. The unchanged derived-plane axial geometric MTF is low (approximately 0.166 at 10 lp/mm); convergence does not mean good performance or factory agreement. Broadband accuracy, finite focus, manufactured rim sizes and exact factory performance are not established.

The final JSON interval zero is a computational endpoint, not a source BFL. The last authored gap is the independently calculated collimated BFL. The image plane is not optimized.

Original source notes travelled with the package and are not in the repo. All source identity and archival limitations are retained.

## Deployment validation (2026-11-10)

The source is the Leitz application L 12741 IXa/42h (inventor Max Berek, Ernst Leitz GmbH), an addition to L 753, laid
open for opposition on 6 August 1953 (DEPATISnet DE000L0012741MAZ); no later grant was found. Independent check of its p. 5
table: 12 R, 12 thicknesses/gaps (including the stop split) and 7 n/ν pairs equal the f = 1 example ×85; no mismatches.
EFL 84.998, f/1.5. Leitz's 7/5 construction, f/1.5, 1.5 m close focus and the published section drawings agree; the parent
L 753 (filed 1936) matches the 1936 dating of Berek's Summarex design.

Applied: `source` block (`DE L 12741`, sole example, 1953, Max Berek, Ernst Leitz GmbH) so the lens page cites the
application; the PDFs are filed as `DEL12741.pdf` / `DEL753.pdf`.

Open: no document names the Summarex, so the attribution is circumstantial (strong); the header does not state the ×85
scale; `focalLengthMm.design` holds the traced value; the analysis calls the 59.8 mm front-barrel size a "flange diameter";
public wording and package-process prose need a cleanup pass. (All but the attribution closed in the cleanup pass below.)

## 2026-11-10 — Cleanup and wording pass

Data file: the header comment is rewritten. It states the ×85 scale of the f = 1 table, the Leitz application L 12741 as
source, the A2/A3 stop placement, the d-line tracing reading, the inferred rims and the two check overrides; the
staging wording and the MAZ kind-code note are gone. `subtitle` "DE L12741 MAZ — PROBABLE FAMILY, WHOLE SOURCE EXAMPLE"
became "DE L 12741 (Leitz application, laid open 1953), sole example — inferred Summarex correlation; not
manufacturer-confirmed". `specs` are now 7 ELEMENTS / 5 GROUPS, DESIGN f = 85 mm, DESIGN F/1.5, ALL SPHERICAL.
`focalLengthMm.design` 84.99753170523812 became 85, the scaled stated f = 1; it equals the traced EFL rounded to
0.01 mm, and the Leica folder uses both conventions (`LeitzNoctilux50mmf12` carries the scaled stated f).
`focus.closeFocusM` 1e9 became the 1e15 placeholder with a plain description. Every element gained a `role`, the
`indexReferenceNote` is reworded, and the glass labels now state the printed n/ν.

Glass: L3, L4 and L5 reproduce SF5 (Δnd 0, Δνd +0.01), N-SK5 (Δnd +3e-5, Δνd −0.13) and LLF6 (Δnd +2e-5,
Δνd −0.03) at the d line; at the D line those glasses read 1.6725, 1.5890 and 1.5316, so the indices fit d. L1/L6
(nearest N-PSK3, Δνd +0.16) and L2/L7 (nearest N-SK16, Δnd +2.1e-4) have no exact row. Three of five pairs falls
short of the 80 % coordinate test LENS_DATA_SPEC sets for historical tables with no printed line, so all seven labels
stay Unmatched (naming the coordinate match where one exists), `indexReferenceNote` stays, and no catalog curve is
used.

Engine numbers before and after (built.mjs, probe.mjs) are identical: EFL 84.9975317052381 mm, FOPEN 1.5, halfField
22.92437630719023°, stop radius 17.496935573937897 mm, BFD 46.5460 mm, TL 110.8995 mm; only the reported
closeFocusM changed with the placeholder. The surface audit prints OK; the aperture audit puts f/1.5 within 3 % with no
rim, trace or iris limit.

Analysis: identification block rewritten (application type, both filing dates, publication, parent L 753, numbered
evidence with the Lee / Xenon caveat); the 59.8 mm figure corrected to the filter (front-barrel) size; the parent
claim's design rule added (r7, about 57° marginal incidence at f/1.5); per-element boilerplate replaced; glass section
states the d-line test; the all-spherical "Aspherical Surfaces" section dropped; "Model Qualifications and Validation"
became "Model Scope and Limitations" without the MTF-grid, census, staging and integration text; sources cite the
DEPATISnet ids, the 1953 brochure, US 2,019,985 and two secondary references.

Open: surfaces 1 and 2 (sd 30, 60 mm diameter) are wider than the 59.8 mm slip-on front barrel and 58 mm filter
allow, while the f/1.5 axial beam needs 28.1 mm at surface 1; compare with the brochure section drawing in the rim
pass (done in the rim pass below: kept at 30 for corner light). Surfaces 7 and 8 sit 0.03 and 0.01 mm outside the f/1.5 axial beam, so any rim cut there clips f/1.5. The
Summarex attribution stays circumstantial. `catalog.closeFocusM.marketing` keeps 1.524 m (5 ft, US directory); a
metric Leitz figure was not checked.

## 2026-11-10 — Semi-diameter pass against the patent figure

Sources. DE L 12741 (`DEL12741.pdf`) has no drawing (its cover lists "Z. —"). Two shape references were used:

- Parent DE L 753 (`DEL753.pdf`), p. 9, "Lichtstarkes Objektiv", a 300 dpi scan. Its vertex crossings on the axis row
  fit the parent's claim-5 prescription at 1650 px per f to within 2 % from s1 to s12 (1163 px for 0.704), so the
  drawing is to scale: 19.41 px/mm at ×85. It shows the parent example, not this one (A3 0.066 against 0.109, r5 0.218
  against 0.2579, r9 −12.3 against ∞), and draws L7 out to its knife edge.
- The Summarex section in the 1953 Leitz brochure (No. 1356-D, printed p. 11; staged `Leitz1953-p12.png`), which
  shows the production lens. Its first-to-last vertex span gives 2.48 px/mm (158.5 px for 64.35 mm), but the axial
  spacing is schematic (L1 is drawn about 20 % too thick), so its rims are compared as ratios to L1. The other staged
  pages (`Leitz1953-p16.png`, a usage table; `p81.png`, the 1956 lens data table) carry no drawing.

Readings (half heights). Parent drawing at ×85: L1 26.7; front doublet flat top 21.3, bevelled to 15.8 at r5; r6 16.1;
rear doublet flat top 18.5; L6 18.8; L7 25.8. Brochure as a ratio to L1, in mm with L1 = 30: front doublet 0.81 (24.4),
r5 0.67 (20.1), r6 0.63 (18.9), rear doublet 0.75 (22.5), L6 0.68–0.71 (20.4–21.2), L7 0.69 (20.6). Both drawings draw
the front doublet with a flat top shared by L2 and L3 and a bevel down to r5.

| Surface | Before | After | Evidence |
| --- | --- | --- | --- |
| 1, 2 | 30 | 30 | Kept. Brochure 28.2 (absolute scale), parent 26.7 and the 59.8 mm front barrel point to ≈28.2–29, but 29.0 already costs 3.1–3.6 points at 9.5–14.3° and 28.2 costs 6.4 at the corner. f/1.5 floor 28.13 / 27.77. |
| 3 | 26 | 24.4 | Flat-topped front doublet in both drawings, so L2 takes one height; brochure ratio 0.81 × L1 = 24.4; f/1.5 floor 24.10. |
| 4 | 23 | 24.4 | Same square L2 rim. |
| 5 | 18.5 | 18.5 | Brochure 20.1, parent 15.8 (with a steeper r5); the readings conflict, so the value is kept. |
| 6 | 18 | 18 | Brochure 18.9, parent 16.1; f/1.5 floor 16.69. |
| 7 | 16.9 | 16.9 | f/1.5 floor 16.87. R = −18.40 and the 67° rim-angle limit cap it, so the cemented surface cannot reach the drawn flat top. |
| 8 | 18.42 | 18.42 | f/1.5 floor 18.41. Above about 18.77 mm its sag crosses L6's plane front across the 0.6715 mm gap; the larger drawn flat top is mount. |
| 9, 10 | 20 | 20 | Brochure 20.4–21.2, parent 18.8: within noise. |
| 11, 12 | 21 | 21 | Brochure 20.6 agrees; the parent's 25.8 is its own L7's knife-edge outline. |

Clearance and light. The surface audit prints OK; the aperture audit puts f/1.5 within 3 % with no rim limit; the
image-circle audit finds nothing undersized; field coverage stays 100 % with the 14.3° corner clear. The real-ray
trace at the engine stop shows no clip; surface 3 clears the f/1.5 marginal ray by 0.30 mm. Engine numbers are
unchanged (EFL 84.9975 mm, FOPEN 1.5, halfField 22.924°, stop radius 17.497 mm). Geometric illumination, baseline to
final: 2.4° 97.3 to 97.6, 4.8° 93.4 to 93.7, 7.1° 89.3 to 89.5, 9.5° 83.0 to 83.1, 11.9° 76.2 to 76.2, corner 14.3°
67.9 to 67.9. Surfaces 7–9 are unchanged, so `gapSagFrac` 0.965 and `maxRimAngleDeg` 67 are still the smallest values
the file needs.

Open: L1 stays wider than both drawings and the 59.8 mm barrel allow; narrowing it to about 28.2–29 mm costs 3.6–6.4
corner points, so it needs a decision on the light rule. The rear doublet's drawn flat top (18.5–22.5 mm) cannot be
modelled without a land on the cemented junction.
