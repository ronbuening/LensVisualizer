# Canon 50mm f/0.95 source and construction audit

## Source and earlier construction findings

The sole example of JP S39-10178 B supplies twelve spherical refracting boundaries, seven d-line glass pairs, f/0.95 and a 45° full field. All source radii and internal lengths were scaled uniformly by 50. Scalar and reduced-angle matrix calculations agree; the small focal-length rounding residual was retained. The unprinted final image-space distance was calculated from Gaussian focus. Canon's section supports a probable seven-element/five-group Canon 7 association, not exact factory prescription identity. The asymmetric rear-element cutout is omitted from the circular model.

Source re-reads found three distinct discrepancies: P7 prints −0.4247 although the prescription gives −1.424716415; printed Petzval rows sum to 1.2944 versus the 0.2943 printed total and 0.294264866 calculated sum; the last Seidel column sums to 2.0255 versus its 0.0255 printed total. The introduction and plots give 46° full field, versus 45° in the table. No radius, interval or glass coordinate was adjusted to resolve these differences. The inventor's Jiro Mukai romanization was corroborated by US 2,926,564, page 2, solely as name evidence.

Printed group outside diameters were treated as physical bounds rather than clear radii for every powered face. The 21.5 mm third-group outside radius exceeds the 15.1 mm radius of r7, requiring a smaller active cap. A midpoint iris preceded the outer axial r7 intersection and was rejected. The adopted iris split is 7.25 + 4.05 mm within unchanged source S3. Earlier bounded cap/stop comparisons selected 12.35 mm central caps with no hidden drawing trim under the default 0.90 gap-sag allowance. That earlier model admitted approximately f/1.002168 at infinity and intentionally disclosed its full-speed clipping. Focus was initially fixed at infinity because the patent provides no finite-focus row.

Earlier independent material checks found no surviving glass-segment containment violations within their sampled domain. Some off-axis failures after r2 missed the next complete finite solid, rather than constituting successful transmission. Chief-ray solutions were found at the checked source fields but not at 25°. Strong vignetting and incomplete broader-corner MTF convergence were retained as limitations. Earlier d-line and approximate photopic MTF results apply to the smaller central caps only. Catalog comparisons did not identify historical melts; supplier-neutral source coordinates were retained. These earlier field/material/MTF results do not certify the changed rims or the new finite-focus endpoint.

## 2026-10-22 — Deployment validation and fix-up pass

### Source and first-order comparison

Re-read all twelve R rows, seven glass thicknesses, four internal air gaps and seven nd/νd pairs on local `patents/JPS3910178B1.pdf`, pages 1–2. All match after ×50 scaling; there are no aspheric coefficients. Source S3 = 0.226 remains 11.3 mm, split 7.25 + 4.05 mm around the inferred iris. No prescription-cell mismatch was found. The printed P7, Petzval-total, Seidel-total and 45°/46° disagreements remain documented above.

The patent's nominal 50 mm / f/0.95 example produces EFL 50.037203396027415 mm, infinity BFD 19.74288585406172 mm and 53 mm first-to-last vertex span. Before → after: EFL, infinity BFD, 72.74288585406171 mm infinity total track, 12.827526822455413 mm iris radius, 0.005885297329667093 mm⁻¹ Petzval sum, 22.557821058143652° computed half-field, pupil geometry and standalone element/group focal lengths are unchanged. The nominal aperture remains f/0.95; admitted axial aperture improves from approximately f/1.002168 to f/0.953336429340, now limited by r10.

Unit-focus calculation uses the first-to-last vertex matrix [A B; C D] = [0.3945641345661052, 46.34263823992748; −0.019985129706097695, 0.187133997704791], determinant 1. With g the final gap, solve −(B + Dg)/(A + Cg) + 53 + g = 1000 mm. The close gap is 22.47872248042836 mm, extension 2.73583662636664 mm, first-vertex object distance 924.521277519572 mm and total lens-to-film track 75.47872248042836 mm. The endpoint probe reproduces 1000.00 mm object-to-film distance and magnification approximately −0.0547. No internal spacing changes, finite-focus source row or measured helicoid curve is asserted.

### Diagram and physical-clearance comparison

Compared Figure 1 on patent page 3 with the supplied Canon Museum construction GIF. Both show two front menisci, the positive/negative and negative/positive cemented pairs, and a rear positive singlet: seven elements in five groups. The central r7 and r8 edges taper, so the larger adjoining faces are retained. The r9/r10 positive element is square-cut and remains 14/14 mm. The Canon diagram supports the ordered architecture, not a numerical factory prescription; its rear cutout remains outside the model.

Exact f/0.95 axial marginal heights are r7 = 12.844194828244891 mm and r8 = 12.793310563365969 mm. Only those assigned clipping rims are raised. The shared-band cavity gap remains 0.355152647576 mm; r7's own rim remains 0.089562910771 mm ahead of the iris. Minimum sampled glass edge thickness remains 0.527003114940 mm, maximum rim angle changes 54.873212° → 58.277961746°. There is no physical crossing. Shared-band cavity sag fraction is 0.968570562161; 0.97 is the smallest two-decimal allowance without hidden SVG trimming, while 0.96 trims r7 and r8. The current surface validator alone does not diagnose this across the intervening stop, so the allowance was also checked with native render diagnostics.

### Fields changed

| Field | Old → new |
|---|---|
| Name | `CANON 50mm f/0.95` → unchanged; matches Canon rangefinder naming style |
| Subtitle | `JP S39-10178 B1 sole embodiment / Figure 1; probable Canon 7 product association` → `JP S39-10178 B, Sole Example — probable Canon 7 production correlation` |
| Specs | `7 ELEMENTS / 5 GROUPS; SOURCE f/0.95; TABLE 45° / PROSE AND PLOT 46°` → `7 ELEMENTS / 5 GROUPS; DESIGN f = 50.04 mm; DESIGN F/0.95; ALL SPHERICAL` |
| Visibility | `false` → `true` |
| Patent number | `JP S39-10178 B1` → `JP S39-10178 B` |
| Assignees | `["Canon Camera Co."]` → `["Canon Camera Co., Inc."]`, matching Canon Serenar 28mm f/3.5 and Canon 50mm f/2.8 |
| Aperture blades | absent → `10` |
| r7 / r8 semi-diameters | `12.35 / 12.35` → `12.844194828244891 / 12.793310563365969` mm |
| Gap-sag allowance | default `0.90` → explicit `0.97` |
| Final gap | fixed r12 distance `19.74288585406172` → gap `12`, label `BF`, values `[[19.74288585406172, 22.47872248042836]]`; fixed distance removed from the surface |
| Focus description | fixed infinity / product-metadata-only language → whole-lens helicoid focus with a calculated 1 m endpoint; `closeFocusM` stays `1` |
| Element names and labels | `L1`…`L7` / `Element 1`…`Element 7` → unchanged, matching neighboring Canon files |
| Seven glass descriptions | long unidentified-melt/source-coordinate disclaimers → `Unidentified historical glass`; nd/νd and d-line references unchanged, no catalog glass assigned |
| Seven roles | identical glass-provenance boilerplate → short element-specific descriptions of the menisci, cemented-pair members and rear singlet |
| Field erratum wording | “validation targets” → “field targets”; numerical discrepancy unchanged |
| Header | private construction and fixed-focus/clipping narrative → source/scale, inferred rims/iris, exact unit-focus calculation, retained errata and current aperture limitation |
| Public analysis | construction/replay narrative and private links → technical source identification, current rims/focus/geometry, qualified historical field/MTF scope and public source citations; ray/segment tallies removed |
| Audit | lengthy external replay/receipt record → substantive source re-reads, rejected constructions, optical limitations and this dated change record |

The mount-metadata omission is closed by the glass classification and metadata pass below: `canon-7-bayonet` identifies the Canon 7 outer bayonet. Catalog design focal length and the corrected `DESIGN f = 50.00 mm` spec both use the source’s nominal f = 1 × 50; calculated EFL remains 50.037203396 mm.

### Checks and remaining scope

Before editing, engine summary and endpoint probes loaded successfully; surface checks reported no errors, and the aperture audit found r7-limited f/1.00 versus nominal f/0.95. After the changes, the same probes load successfully, surface checks report no errors, and native render diagnostics show zero hidden trim. The normal aperture audit reports within its 3% tolerance, but the stricter audit identifies r10 as the remaining limiter at f/0.953336429340. A tolerance pass is not full marginal-ray clearance.

The supplied legacy `clearap.mjs` cannot continue its Newton-seeded axial ray at r7 and produces an undefined iris radius even before the edits. An independent exact sphere-intersection/Snell calculation in the canon095 scratch directory continues the nominal ray through all refracting boundaries and agrees with native exact-engine hit heights. It confirms central-rim clearance and a 0.064801959101 mm excess over r10's retained 14 mm clear radius. Native hit continuation alone is not treated as transmission past that rim.

A fully clear f/0.95 beam would also need r10 ≥ 14.064801959101 mm, and the square-cut r9/r10 element would then rise above the patent's printed 28 mm fourth-group outside diameter (14 mm radius). r9/r10 therefore stay at 14 mm: the printed physical bound wins over a 0.065 mm ray-height deficit, and the admitted beam is about f/0.953. Open: changed-rim field and MTF behavior and finite-focus performance remain unestablished.

## 2026-10-22 — Semi-diameter pass against the patent figure

Source: `patents/JPS3910178B1.pdf`, page 3, Figure 1 (第1図), the sole example; measured from the native 300 dpi CCITT scan with the axis at page row 1512–1513. The drawing is hand-drawn, so local axial spacing varies by about ±10 %. The scale comes from the r1→r12 vertex crossings (530 px for the 53 mm span, 10.0 px/mm), checked on r1→r8 (389 px for 37.85 mm, 10.3 px/mm); 10.1 px/mm was used. Element heights were read on both sides of the axis and averaged; leader lines were excluded by eye.

| Surfaces | Stored sd | Figure sd | Figure / stored | Floor (exact trace) | Decision |
|---|---|---|---|---|---|
| r1 / r2 (L1) | 30 / 30 | 27.3 | 0.91 | axial 26.34 / 25.98; chief at Y = 21.63 mm 28.19 / 27.56 | keep |
| r3 / r4 (L2) | 25 / 25 | 23.0 | 0.92 | axial 24.57 / 23.95 | keep (floor above figure) |
| r5 / r6 (L3) | 21.2 / 21.2 | 19.6 | 0.92 | axial 21.08 / 20.54 | keep (floor above figure) |
| r7 (L4 rear) | 12.844 | about 12.3 | 0.96 | axial 12.844 | keep (exact floor) |
| r8 (L5 front) | 12.793 | about 12.4 | 0.97 | axial 12.793 | keep (exact floor) |
| r9 / r10 (L5/L6) | 14 / 14 | 13.5 | 0.97 | axial 13.79 / 14.06 | keep (28 mm printed group diameter) |
| r11 / r12 (L7) | 17 / 17 | 16.1 | 0.95 | axial 13.33 / 12.75 | keep |

The figure reads a nearly uniform 0.91–0.97 of the stored values and 0.90–0.97 of the printed group outside radii, so it is either drawn at a slightly smaller transverse scale or shows clear apertures a little inside the mounts. The shape agrees: element heights relative to L1 are 0.84 / 0.72 / 0.49 / 0.59 in the figure against 0.83 / 0.71 / 0.47 / 0.57 stored. L2 and L3 cannot follow the figure down because their f/0.95 marginal rays need more, and L1 cannot drop below the 28.2 mm chief-ray height at the printed image height, so its largest possible reduction (about 6 %) is within measurement noise and would distort the L1/L2 proportion. The tapered r7 and r8 edges drawn in the figure end close to their exact marginal-ray heights. No semi-diameter was changed; only the header note records the figure check.

Clearance: the surface validator reports no errors, the image-circle check reports nothing undersized, and traced field coverage is 99 % (23.7° reaches 21.44 mm of the 21.65 mm corner, the 23.9° corner chief meeting r1 at 30.64 mm). Engine half-field stays 22.56°, the nominal f-number f/0.95, and the vignetting curve is unchanged (78.9 % at 11.8°, 40.0 % at 20.7°, 6.3 % at 23.7°).

Open limitation at 1 m: an independent exact trace of the axial ray through the fixed 12.8275 mm iris edge at the 1 m endpoint (object 924.52 mm ahead of r1) gives r7 12.839, r8 12.806, r9 14.064 and r10 14.393 mm. r10 therefore clips the near-focus f/0.95 beam by 0.39 mm and r9 by 0.06 mm, both under the retained 28 mm group-diameter bound; r8 is short by 0.013 mm, which r10 already overrides. Raising r8 to 12.81 mm would need a 0.98 gap-sag allowance (shared-band intrusion 0.9713), so it was not done. Canon's construction GIF agrees on seven elements in five groups and shows the L5/L6 group somewhat larger relative to L1 (about 0.53 against 0.47 modeled), which the printed 28 mm diameter does not permit; it marks no special-glass or aspherical elements.

## 2026-10-22 — Glass classification and metadata pass

All seven elements now use named catalog coordinate equivalents for dispersion. Printed nd/νd and the d-line reference remain unchanged; neither historical production supplier nor melt is confirmed. Residuals below are catalog minus printed, using catalog values returned by `hasglass.mjs`.

| Element | Glass label old → new | Printed nd/νd | Catalog row nd/νd | Δnd / Δνd |
|---|---|---|---|---|
| L1 | `Unidentified historical glass` → `S-LAH52 (OHARA coordinate equivalent; supplier unconfirmed)` | 1.79952 / 42.3 | OHARA S-LAH52: 1.799516 / 42.225007 | −0.000004 / −0.074993 |
| L2 | `Unidentified historical glass` → `BAF10 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.67003 / 47.2 | HOYA BAF10: 1.67003 / 47.19 | 0 / −0.010000 |
| L3 | `Unidentified historical glass` → `LAC13 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.69350 / 53.4 | HOYA LAC13: 1.6935 / 53.34 | 0 / −0.060000 |
| L4 | `Unidentified historical glass` → `E-FD4 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.75520 / 27.5 | HOYA E-FD4: 1.7552 / 27.53 | 0 / +0.030000 |
| L5 | `Unidentified historical glass` → `FF5 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.59270 / 35.4 | HOYA FF5: 1.5927 / 35.45 | 0 / +0.050000 |
| L6 | `Unidentified historical glass` → `S-LAH51 (OHARA coordinate equivalent; supplier unconfirmed)` | 1.78590 / 44.3 | OHARA S-LAH51: 1.785896 / 44.202637 | −0.000004 / −0.097363 |
| L7 | `Unidentified historical glass` → `S-LAH51 (OHARA coordinate equivalent; supplier unconfirmed)` | 1.78590 / 44.3 | OHARA S-LAH51: 1.785896 / 44.202637 | −0.000004 / −0.097363 |

All seven elements are matched; there are no unmatched pairs or associated rejected nearest rows. These catalog curves supply qualified spectral proxies, including secondary-spectrum estimates, without establishing historical glass identity. Earlier photopic MTF estimates based only on nd/νd do not assess these catalog curves; the existing field, aperture and finite-focus limitations remain open.

Mount metadata changes from absent to `catalog.lensMounts: ["canon-7-bayonet"]`, using the new canonical name **Canon 7 bayonet**. Canon Camera Museum describes the clip-on three-lug bayonet around the S screw mount; the bayonet is the lens’s optical attachment. The earlier missing-mount statement is closed in place above.

The spec changes from `DESIGN f = 50.04 mm` to `DESIGN f = 50.00 mm`, reflecting the patent’s nominal f = 1 × 50. The calculated EFL remains 50.037203396 mm. All seven per-element glass descriptions and the glass-reference section now state the adopted equivalents and unconfirmed production melts.

Element `focalLengthMm` values were added in this pass: thick-lens focal lengths in air computed from each element's printed radii, thickness and nd (the same standalone values the analysis quotes), so the element inspector shows them.
