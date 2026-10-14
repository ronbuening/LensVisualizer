# Audit Log — Nikon Ai AF Zoom-Nikkor 24–85mm f/2.8–4D IF candidate

Patent: JP2000321497A, Example 1 / Table 1; production embodiment unverified.

## 2026-10-14 — Original application, three-example comparison and candidate authoring

### Source identity and selection

The original J-PlatPat application PDF was transferred through the connected private Drive and verified locally:
17 pages, 149589 bytes, SHA256 `564c45c71f308921e05b21bf5c385db018722aa01d7193b3231748f41cc2687c`.
The original numeric tables and coefficient images, not Google translations, govern this transcription.
The grant JP4374652B2 is the same Japanese application 1999-133083. Its original gazette was initially unavailable;
the later original-grant reconciliation is recorded below. No source coefficient was replaced from translated OCR.

The Nikon story HTML is 57244 bytes, SHA256
`e2f3356fb36525623e2a7d7d1750c48abdbe28f0744e01bc1d5661f6837d4367`.
The production diagram is 144610 bytes, SHA256
`5c89fb902a5910d5129673117135318689bab9786b2af2a7282c1cc46164849f`.
Both materialized locally and their actual content/pixels were inspected.

Tale 99 supports Sato's authorship, February 1999 final design, May 1999 prototyping, September 5, 2000 Japanese
launch, four positive/negative/positive/positive moving groups, G2 focus, 1:2 macro, and conic/odd-order aspheres.
These establish a strong patent association. The five internal design reports have no supported mapping to the
three examples. No exact production numerical prescription is claimed.

| Original source comparison | Example 1 | Example 2 | Example 3 |
|---|---:|---:|---:|
| R/d/nd/νd numeric surface rows checked | 28 | 28 | 28 |
| Infinity EFL, mm | 24.692230 / 50.000310 / 82.500805 | 24.692086 / 49.999721 / 82.499468 | 24.692198 / 50.000168 / 82.500426 |
| Maximum absolute infinity BF residual, mm | 0.000940 | 0.000492 | 0.000554 |
| Diagram vertex RMS, px | 1.2794 | 2.3377 | 2.1149 |
| Maximum vertex residual, px | 2.4652 | 6.4223 | 6.1669 |
| Table f-number range | 2.8–4.1 | 2.8–4.1 | 2.9–4.1 |
| Figures' precise f-number legends | 2.79 / 3.62 / 4.12 | 2.72 / 3.58 / 4.09 | 2.88 / 3.60 / 4.09 |

Twenty-three near-axis vertices were measured above and below the diagram's y=326 axis. A single global axial
scale and translation registers each unchanged wide/infinity prescription; merged subpixel interfaces use their
mean z. Example 1's best scale is 9.484091 pixels/mm. Its G3 thicknesses and G4 stations fit better than Examples
2/3. Surface-curvature overlays were also visually inspected. Residual differences and schematic precision limit
identification. Example 1 is therefore a review candidate, retained with `visible: false`, not a production match.
The application's Figure 1 is explicitly common to all three examples. The original grant later supplies separate
example-specific figures, as recorded below.

### Phase 1 — Glass disposition

All sixteen refractive bodies retain the original d-line index and Abbe number, including the 0.0600 mm resin
layer. All commercial identities remain `Unmatched`; no catalog property, line index or anomalous dispersion was
invented. There are fifteen glass elements and eleven air-separated groups, with the resin counted separately
only in the model's material-body array.

### Phase 2 — Retained information and geometry

| Item | Disposition | Evidence |
|---|---|---|
| Example 1 source R/d/nd/νd | Unchanged | Table 1, PDF pages 7–9; all 28 rows compared with original PDF text and table images |
| All six asphere blocks | Compared before selection | PDF pages 8, 10 and 11; C3/C5/C7 retained where printed |
| 6A conic | Source κ=100.0000 becomes engine K=99.0000 | ¶0046 has κ directly in the square root; no `(1+κ)` factor |
| 24A conic | Source κ=−16.7909 becomes K=−17.7909 | Same printed convention |
| Example 1 6A C10 | −3.18950 × 10⁻¹⁴ | Original p. 8 confirms the digits; English web translation corrupts them |
| Example 1 24A C8 | −3.84540 × 10⁻¹⁰ | Original p. 8 confirms the digits; English web translation corrupts them |
| Example 2 surface 27 R | +17.1576 mm | Original p. 9; English web transcription loses most of the radius |
| Example 3 C3a | −0.12919 × 10⁻⁴ retained in comparison | Original p. 11 coefficient block; p. 12 condition summary differs by a factor of ten |
| Stop | Printed surface 16, 1.0000 mm ahead of 17 | Original Table 1 |
| Source focus stations | All eleven retained | Three infinity, three β=−0.03333, three ordinary near, two β=−0.5 rows |
| Rear plates | None authored | No source-listed camera-side plate in Table 1 |

Translation errors are not printed-source errata, so the selected file needs no `sourceErrata` correction.
Example 3's internal condition-summary discrepancy does not alter Example 1. None of its printed coefficients
were optimized to remove a focal, magnification or image-shape residual.
The Example 3 50 mm second near row also calculates to paraxial β=−0.1157194 versus the printed −0.11557;
its source spacings are retained in the comparison. This larger residual is not silently corrected or treated
as proof of a particular replacement value.

Semi-diameters are source-figure estimates, not printed clear radii. Initial manual estimates were bounded by
actual edge/gap checks: L22 uses 10.5 mm and the final doublet 11.5 mm. Source R/d/index values stayed fixed.
At an initial 8.5 mm Lasp rim, the source beam clipped surface 24A. The on-axis census requires about 9.4 mm at
24A and 8.7 mm at 25 for Example 1. Figure 1 and Nikon's outline draw a square rim, so both faces were retained
at 9.4 mm rather than introducing an unsupported bevel.

The square rim has 1.8755866 mm shared-band sag intrusion into the original 2.0000 mm 25→26 gap, leaving
0.1244134 mm physical clearance. `gapSagFrac: 0.95` allows this with a 5% rendering margin rather than the
default 10%; it does not change a physical spacing or global engine threshold. This is a disclosed model choice.
The same square-rim floor cannot simply be copied to Example 2: its original 1.8000 mm gap is smaller than the
1.8466666 mm intrusion at 9.3 mm. That alternative requires a separate aperture/rim investigation.

The selected prescription passes its stated axial beam at all three infinity stations. The format-corner chief
rays reach the source 21.60 mm image height at approximately 42.4° / 22.8° / 14.2° half-field. This does not
certify full-pupil corner illumination. All eleven source configurations also pass an on-axis marginal ray
aimed at the retained iris; finite launches use the calculated original-row conjugates. Intersection residuals
stay below 1 × 10⁻¹² mm and render diagnostics show no material trim at those configurations.
The retained odd/conic functions have sag-slope reversals near 8 mm on
6A and near 7.5 mm on 24A; generic turnover warnings were inspected against the source, not used to discard
coefficients. Actual domain, rim-slope, edge and cross-gap checks pass.

### Phase 3 — Spectral, focus and attribution

Structured attribution names JP2000321497A, Haruo Sato, Nikon Corporation and publication year 2000.
Nikon F / 135 full-frame metadata identifies the associated product family; 43.2 mm image circle comes from
the source's 21.60 mm image height. No fixed-iris mechanism is inferred from the f-number legends.

Focus coordinates are calculated from each original row's paraxial object-to-image conjugate. A shared seven-
position union preserves source rows at each zoom, with interpolated rows explicitly unpublished. The ordinary
near rows calculate to about 0.499 m. Macro endpoints calculate to 0.180754 / 0.209332 m at 50 / 82.5 mm,
with β=−0.499988 / −0.499989. No printed object-distance certification is asserted by `finiteConjugates`.
Intermediate slider labels remain estimates, particularly across the ordinary/macro focus transition.
The production 35 mm macro-enable boundary is not reconstructed: there is no corresponding source station or
published switching cam, and interpolated endpoints are not asserted as production behavior.

### Phase 4 — Analysis and catalog status

The companion analysis distinguishes original-source facts, calculations and modeling choices; it covers all
material bodies, exact coefficients, focus rows, source discrepancies and selection uncertainty. The selected
candidate remains hidden. Tale 99 is indexed and the tale count is 99, but its catalog cell remains empty until
a qualified visible representation is approved. No changelog entry describes the candidate as shipped.
(Superseded: the lens is now visible; see the later sections.)

### Remaining decision (closed — visible inclusion recorded below)

Review whether to promote the explicitly labeled Example 1 patent representation as a catalog illustration.
An exact production-match label requires stronger numerical identification than the schematic fit supplies.
The original grant reconciliation below preserves this application transcription and does not resolve production
identity. Earlier JPH0894933A/US5734508A and JPH10197794A/US5930051A are prior-art relationships, not
equivalent sources for this numerical prescription.

## 2026-10-14 — Original grant reconciliation

The original JP4374652B2 gazette was transferred through the connected private Drive and verified locally:
24 pages, 242204 bytes, SHA256 `695d060ca4a145a96e81c5b48c8a71c25a7fc6149827b3aea15d28b73983ae95`.
Its raster numerical tables were inspected as printed images; OCR assisted navigation only. The application
remains the authored prescription source. No optical value changed during reconciliation.

| Original-edition comparison | Application PDF pages | Grant PDF pages | Result |
|---|---|---|---|
| Table 1 / Example 1 | 7–9 | 11–13 | All 28 R/d/nd/νd rows, both aspheres and all 11 configurations agree |
| Table 2 / Example 2 | 9–10 | 14–16 | All 28 R/d/nd/νd rows, both aspheres and all 11 configurations agree |
| Table 3 / Example 3 | 10–12 | 17–19 | All 28 R/d/nd/νd rows, both aspheres and all 11 configurations agree |
| ¶0046 asphere equation | 7 | 10 | κ directly in the root; odd powers use absolute radial height; K=κ−1 unchanged |
| Hybrid layer, all examples | Tables 1–3 | Tables 1–3 | 0.0600 mm resin, nd=1.495210 / νd=56.34, before the nd=1.834810 glass substrate |
| Example diagrams | Common Figure 1, p. 13 | Figure 1, p. 21; Figures 11/12, p. 23 | Grant illustrates Examples 1/2/3 separately; no numerical change |

The grant confirms Example 1 6A C10=−3.18950 × 10⁻¹⁴ and 24A C8=−3.84540 × 10⁻¹⁰, and Example 2
R27=+17.1576 mm. The translation errors identified above therefore do not represent edition changes.
Example 3 still prints C3a=−0.12919 × 10⁻⁴ in the coefficient block and |C3a|=0.12919 × 10⁻⁵ in its condition
summary. Its near-50 mm spacing/magnification residual also remains. Both discrepancies are preserved; the
coefficient block and original spacings govern the comparison. The grant adds no mapping from Nikon's five
internal reports to these three embodiments and no certification of an exact production prescription.

## 2026-10-14 — Local browser review

Playwright controlled the installed Chromium 151 on a loopback preview of the production build. All eleven
source-tabulated zoom/focus positions rendered finite SVG paths and rays, and displayed d5/d15/d21/BF agreed
with the original rows to the UI's 0.01 mm rounding. The source-position share URL restored the same frame.
Continuous zoom/focus sliders, aperture control and off-axis toggle responded without JavaScript page errors.
Desktop and 390-pixel mobile screenshots were inspected; mobile had no horizontal document overflow.

The macro MTF panel retained the finite-conjugate guard, and its photopic warning disclosed the missing
partial-dispersion data. The hidden candidate route returned `noindex,nofollow`. The Tale 99 index displayed
99 tales, the correct Nikon story link, and an empty catalog cell. The viewer derives its subtitle from patent
metadata, so a visible `PRODUCTION EMBODIMENT UNVERIFIED` specification was added beside the candidate label.
No global viewer flag, route visibility, source optical dimension or engine behavior changed. This was local
browser QA only; no deployed-site verification or publication occurred.


## 2026-10-14 — Approved catalog inclusion

Ron approved visible catalog inclusion after the reconstruction and macro limitations were disclosed.
The qualified Example 1 representation now sets `visible: true`; Tale 99 links to its catalog route with
an explicit patent-illustration qualifier. The official Nikon Tale 99 URL remains unchanged. Earlier hidden
status and browser results above describe the completed review before this approval.

No optical prescription, coefficient, material, aperture, rim, focus coordinate, source configuration or
qualification was reinterpreted. All eleven selected source stations remain. Exact production identity,
the production macro-switch cam and certified finite-distance MTF remain unverified; `finiteConjugates`
remains omitted. Catalog visibility does not certify those unresolved properties.

The revision on base `a6980a47` passes typecheck, formatting, lint, all 287 test files / 3119 tests,
and the production build (1655 prerendered pages). Local Chromium verifies the normal visible catalog,
the qualified Tale 99 link opening the correct viewer in a new tab, all eleven source stations, share-URL
reload, continuous controls, the finite-MTF guard and desktop/mobile layout without JavaScript page errors.
The production-identity specification warning and missing partial-dispersion warning remain visible.
An initial one-off browser assertion expected a slashless internal href; the existing article renderer
canonicalizes it with a trailing slash. The assertion was corrected and the complete browser check passed;
no application change was needed. Screenshots, full logs and optical-data equality evidence accompany
the private package. Direct Nikon navigation was proxy-blocked; official Tale 99 content was returned
through site-restricted search retrieval, and its existing href was verified in the rendered article.
No public publication, push, merge or deployment was performed.

## 2026-10-14 — Deployment validation and wording pass

Source re-read: Example 1 of JP 2000-321497 A (Table 1, pages 7–9; text layer checked against a 200 dpi page
render) — 28 surface rows (R, d, nd, νd), stop position, 5 cemented/bonded interfaces, 2 conics and 15 asphere
coefficients including odd C3/C5 (K = κ − 1), and 4 variable gaps at all 11 tabulated states. No mismatches.
The grant JP 4374652 B2 Example 1 tables (pages 11–13, image-only) print identical values. Front page: Nikon
Corporation, inventor Haruo Sato, filed 1999-05-13, published 2000-11-24; the file agrees.

Patent vs model at infinity: EFL 24.7 / 50 / 82.5 vs 24.692 / 50.000 / 82.501 mm; BF 37.98862 / 56.38741 /
66.73943 vs paraxial 37.989 / 56.388 / 66.740 mm; full-field coverage 42.4° / 22.8° / 14.2° half-field at
21.60 mm. Every tabulated β is reproduced at its focus index; ordinary near rows calculate to 0.499 m and the
macro rows to 0.181 m (50 mm) and 0.209 m (82.5 mm) at β = −0.500, against Nikon's 0.5 m minimum focus and
−1/2× at 85 mm / 0.21 m.

Maker diagram: Nikon's Tale 99 drawing shows 15 elements / 11 groups. Its 1.8 mm front element matches
Example 1 (Example 2 prints 2.4 mm); Example 3 is F/2.9–4.1. Patent Figure 1 is common to Examples 1–3.

Zoom stations: all three examples and the grant print only 24.7 / 50 / 82.5 mm. Linear interpolation between
them defocused the infinity image by up to 1.87 mm near 35 mm (0.097 mm in the long half). Nine solved stations
at 27, 30, 33, 36, 40, 45, 57, 66 and 75 mm reduce that to 0.048 mm: d5, d15 and d21 are quadratics in ln f
through the printed rows, the parameter is solved for the target EFL and BF is the paraxial infinity image
distance. Their G2 focus offsets are interpolated in ln f from the neighbouring printed stations,
`zoomCloseFocusM` is the calculated focusT = 1 distance (0.332 m at 27 mm to 0.187 m at 45 mm), and
`nominalFno` (2.89–4.05) keeps the iris radius interpolated between the printed stations (9.605–9.677 mm).
The printed stations are now zoom indices 0 / 7 / 11 with unchanged values and engine results.

Fields changed: `patentNumber` "JP2000321497A" → "JP 2000-321497 A"; subtitle → "JP 2000-321497 A, Example 1
— production correlation"; specs → 15 ELEMENTS / 11 GROUPS, DESIGN f = 24.7-82.5 mm, DESIGN F/2.8-4.1,
2 ASPHERICAL SURFACES / 2 ELEMENTS, G2 INTERNAL FOCUS / 1:2 MACRO; element labels numbered with roles added;
focusDescription rewritten; header and analysis cleared of review-process wording; `var`, `zoomPositions`,
`publishedStations`, `zoomCloseFocusM` and `nominalFno` extended for the solved stations. Surface audit OK;
image-circle and field-coverage audits pass at all 12 stations; no axial clipping or chief-ray blocking.

Open: `closeFocusM` stays 0.181 m (the patent's 50 mm macro row), shorter than the marketed 0.21 m macro distance.


## 2026-10-14 — Patent-rim, dispersion and metadata audit

Source: Figure 1, PDF page 13; Example 1, Table 1.

| Field | Before | After | Evidence |
|---|---|---|---|
| Fifteen glass bodies | Unmatched | Coordinate-compatible catalog proxies | Patent nd/νd are retained; supplier and melt remain unconfirmed. |
| Lasp | Unmatched | N-LAF35 approximate spectral proxy | nd residual −0.001129 and Abbe residual about −0.12, inside existing coordinate limits; no production identity claim. |
| L21r resin | Unmatched | Retained | No defensible catalog curve for 1.495210 / 56.34. |

The 600 dpi wide and clean middle panels were compared against their corresponding printed infinity spacings. Some automated L22/Lasp readings sample a neighbouring rim because of their sag and thin gaps; these are rejected after optical-outline inspection. The square 9.4 mm Lasp rim remains bounded by its unchanged gap to surface 26. No SD change is justified. The existing Ai AF / Zoom-Nikkor / D IF name, Nikon F/full-frame metadata, attribution and published finite/macro state qualifications are retained.


## 2026-10-14 — Local-viewer review

The local midpoint and endpoint diagrams were compared with JP2000321497A Figure 1 (PDF page 13). Generic component type strings now describe the actual meniscus/biconvex/biconcave shapes, with the Lasp asphere identified. The hybrid L21 rims (6A/7/8) increase from 13.5 to 14.2 mm toward the figure outline, with no drawing trim. A 15.7 mm rear-face candidate gives about 78° slope and is rejected. Lasp stays at 9.4 mm because an 11.2 mm candidate produces about 2.68 mm intrusion into its unchanged 2.00 mm air gap.

G2 alone moves objectward for close focus; all four groups move objectward overall during zoom. The printed near/macro states and their interpolated finite conjugates are correctly ordered. The 50 mm patent macro distance remains closer than the marketed macro specification, as disclosed. All 15 glass bodies have compatible spectral proxies; the hybrid resin remains unresolved because no trade name, line indices or dispersion coefficients are published. Nikon Corporation is already canonical.
