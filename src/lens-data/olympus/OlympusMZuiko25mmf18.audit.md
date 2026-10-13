# Olympus M.Zuiko Digital 25mm F1.8: source-first Stage 4 audit

## Job and reference versions

The original job fixes JP2015075501A, Numerical Example 1, and output stem OlympusMZuiko25mmf18. The original 29-page PDF and four-field card are included unchanged. Their SHA-256 identities are d24f3fa3cd334f52661f69512f111185f9fd312228a3fba549f6f973305b756f and d00c03f5951ecd351fe79a6163bedff981a666b3eb6538fe046d88b19de624b7.

The controlling workflow is CHAT-1.0, dated 11 September 2026. Project references are pinned to 3f00f21094afdbee2e1b8551b96d2734b7f0d0f1. All 151 reference files were independently hash-checked against reference-manifest SHA-256 248fb6bfb3fad7f19beaca5486513cafe7a718bd6c97f7c13219378fbf40b705. The current rearPlates, actual-rim-slope, shared-band gap, taxonomy and optical-trace contracts govern the final model.

## Extraction and conventions

The independent reviewer visually read the original equation, selected prescription, variable gaps, group table, condition values and Figure 1 before opening the candidate. PDF p1 is the English PAJ cover; printed Japanese pages are one less than the PDF page number. Principal locations are PDF pp12,15-17,23-24; paragraphs 0076,0080-0084,0117-0124,0130.

Native coordinates are d-line indices at 587.56 nm and d-line Abbe numbers. Lengths are millimetres. The axis runs toward the image, with positive radius centres on the image side. No geometric scaling applies. The standard conic uses 1+K; every tabulated K is zero. The printed general equation stops at A10, whereas Example 1 explicitly lists nonzero A12 terms. All tabulated terms are retained as a disclosed A12 extension, with no refit.

The source has nine lens elements, seven air-separated groups, three aspheric faces on two lenses, stop surface 8, and a separate camera-side filter. G1 is surfaces 1-7, G2 is 9-13, G3 is 14-17. Cemented surfaces 6 and 10 carry the downstream medium and element ID. The two endpoint gap pairs preserve d8+d13=9.6395 mm and translate only G2 objectward by 2.9383 mm. The source's 250 mm shooting-distance reference plane is not expressly defined; calculations support the image-plane interpretation.

## Model transformations

Surface 8 is labeled STO; aspheres are 5A,12A,13A. The physical 4.0000 mm filter, nd=1.51680 and νd=64.20, is retained in rearPlates. The last lens-to-filter gap stays 12.2630 mm and the final filter-to-image gap stays 1.0000 mm. The corresponding air-equivalent propagation is 15.900130802 mm, while physical last-lens-to-image spacing is 17.2630 mm. The source's BF=1.0000 mm is measured from the filter rear, not the last lens vertex.

Stop position is published; its diameter is inferred. The final 6.041072948 mm physical stop radius follows the current exact axial marginal-ray calibration to rounded f/1.82. The frozen paraxial calibration gives 6.019091179 mm. Neither result establishes a measured diaphragm. All lens semi-diameters remain model estimates. Intermediate focus gaps are linear interpolation of published endpoints, not an invented motor or object-distance law.

Stage 4 corrects two inferred optical-cap SDs: surface 7 from 11.00 to 7.80 mm and surface 9 from 8.75 to 6.30 mm. No source radius, thickness, index, Abbe number, asphere, stop, endpoint spacing or other semi-diameter changed.

## Glass review

Before candidate access, the reviewer freshly downloaded the official HOYA July 2026 obsolete-inclusive AGF and OHARA July 2026 catalog, scanned their complete coordinate lists, and saved all nearby matches without starting from author labels. HOYA matches include E-F1, TAFD33, NBFD13, E-F5, E-FD15, M-LAC130, E-FD13, TAFD5F and BSC7. Alternative molded/polished families and OHARA S-/L-prefixes remain distinct.

After the freeze, the official June 2026 HOYA spreadsheet was independently downloaded. Its relevant rows exactly confirm the implemented nd, νd and rounded nC/nF/ng values. The independent AGF polynomial path confirms those spectral values within their 0.000005 rounding intervals, with a 0.0000001 numerical allowance. TAFD5F and TAFD5G share the retained coordinate/line-index values. Catalog labels and spectra are coordinate-compatible proxies, not patent supplier, composition or melt identifications.

The author's broader HIKARI, SCHOTT, Sumita and limited CDGM evidence is retained as author provenance. Stage 4 does not falsely claim to have freshly downloaded all those catalogs. The official cross-reference tables were rechecked and explicitly warn that similar coordinates do not establish identical composition. No APO or anomalous-dispersion performance claim is made.

## Numerical and geometry results

The frozen source-only sequential and separately assembled ABCD paths reproduce infinity EFL 24.530103702 mm, unplated last-lens BFD 15.900395560 mm, physical focus distance 17.263264755 mm behind that vertex with the plate, first-to-last lens span 43.4869 mm and source-image track 60.7499 mm. G1/G2/G3 focal lengths are +88.665550937/+23.208741590/-444.634711104 mm. The Petzval sum is +0.005648287171 mm^-1, assembled surface by surface.

The near prescription gives EFL 23.578515978 mm, magnification -0.124126179, object-to-first-vertex distance 189.266845332 mm and object-to-image distance 250.016745332 mm. A distinct vector-Snell implementation, solving longitudinal intersections rather than the author's height equation, reproduces stop radius 6.041072947820 mm and near image-space 1/(2NA)=1.868945798534. Figure 3 prints 1.87. Calibration and independent source measurements remain distinguished.

The final dense geometry pass uses 4,097 radial samples per material/gap band and nine focus positions. Minimum material thickness is 0.523986110 mm, maximum actual rim angle 56.170018197 degrees, maximum shared-band gap-intrusion fraction 0.403324408, and minimum conic radicand 0.309948714. The default limits remain unchanged: rim angle 64.158067 degrees and gap fraction 0.90. Analytic asphere slopes agree with centred finite differences within 1.21e-10. Paired aperture ratios remain below 3; the corrected L4 ratio is 11/7.8=1.410256 and L5 ratio is 8.75/6.3=1.388889. Sampling is not a continuum proof.

Asphere departures at the unchanged modeled rims are -0.096510887 mm at 5A/11 mm, -0.147066231 mm at 12A/9.75 mm and +0.203330768 mm at 13A/9.75 mm. The physical track/EFL ratio is 2.476545 and unplated BFD/EFL is 0.648199; neither telephoto nor retrofocus classification follows.

### Optical caps and cemented-interface diagnosis

The original candidate's 5,200-ray native grid yielded 5,121 clear rays and 79 clips: 66 at cemented interface 10, eight at exit 11, two at entrance 12A and three at exit 13A. The 66 interface clips are retained as a failed containment observation. They were not accepted merely by relabeling them vignetting.

Figure 1 was rendered from PDF p24 at four pixels per PDF point, using page crop [60,78,280,218] points. First and last lens vertices are approximately crop x=91 and x=644; the tabulated 43.4869 mm span therefore gives 0.078638 mm/pixel. The optical axis is near y=323.5. Surface 9's curved cap ends near y=248 and y=399, giving SD approximately 5.94 mm. Its larger flange extends near y=221 and y=426, giving approximately 8.06 mm. Pixel selection, line width and drawing scale imply about ±0.15 mm measurement uncertainty, apart from unquantified patent-drawing idealization. The table supplies no clear-aperture dimension.

The former uniform 8.75 mm doublet SD conflated that narrower curved entrance cap with the larger flange/junction. Rays admitted at surface 9 at roughly 6.4-7.9 mm could expand to 12.821285 mm at surface 10. They would encounter an external body boundary before reaching that joint, which the original surface-only aperture model represented inadequately.

Surface 9 is now 6.30 mm, approximately 0.36 mm or 6% beyond the independently measured cap estimate. The shared cemented surface and rear boundary remain 8.75 mm. This uses source-figure shape evidence and containment, rather than changing source optical parameters. The 6.4 mm trial retained four interior clips on the denser grid; 6.2 mm cleared them but unnecessarily removed more exterior rays. The chosen 6.3 mm passes the dense joint-containment test and the original mandatory ray bundle. No geometric allowance was weakened.

The final silhouette review identified the analogous curved-cap/flange distinction at surface 7. Its curved rear cap ends near crop y=233 and y=414, giving SD approximately 7.12 mm using the same axial scale and ±0.15 mm measurement uncertainty. The original 11 mm value overstated that cap by about 55% and extended the spherical rim 1.077077 mm past the published stop plane. The final inferred SD is 7.80 mm, about 9.6% larger than the figure estimate, leaving the rim 1.217815 mm before the stop plane. The dense grid's largest height at this surface is 7.021986 mm. This correction preserves the ray counts and avoids using the larger flange as an optical aperture. Other cap extents were inspected and did not establish an additional >25% discrepancy requiring correction.

The final 114,444-ray native grid covers nine focus positions; eleven fields from 0 to the published 24.05-degree half-field, including an infinity diagram-field probe; the focus-dependent public bundle is also tested separately; four apertures (1.82,4,8,22); and 289 pupil samples per bundle (centre plus nine rings with 32 azimuths). It records 112,275 clear rays and 2,169 exterior losses: 2,103 at entrance 9, 17 at entrance 12A, eight at exit 11 and 41 at exit 13A. No cemented-interface clipping remains. Every aiming solve converges. All sampled on-axis pupils and chief rays pass. The actual public five-ray bundle passes at nine focus positions and four apertures, and production render diagnostics require zero hidden trim.

Those remaining clip labels are external lens entrance/exit boundaries, not internal cemented joints. The model does not promise unvignetted full-field pupil transmission or measured retail-lens peripheral illumination. Final evidence retains original failures, diagnostic trials and final losses separately.

## Correction and discrepancy register

| Item | Before / raw observation | Final treatment and effect |
|---|---|---|
| Surface 7 inferred aperture | SD 11.00 mm; curved rim extends 1.077077 mm beyond stop plane | SD 7.80 mm, based on a 7.12 mm curved-cap estimate plus 9.6% modeled clearance. Final rim is 1.217815 mm before stop; dense ray counts unchanged. |
| Surface 9 inferred aperture | SD 8.75 mm; 66 original-grid joint clips | SD 6.30 mm, justified by curved-cap/flange distinction; dense joint containment passes, exterior losses remain. Source prescription unchanged. |
| General asphere equation | Formula through A10; table has A12 | All tabulated A12 terms retained with explicit extension. No fitted surface. |
| G1/fsa rounded focal length | Computed 88.665551 mm; printed 88.66 mm | Raw FAIL retained under strict ±0.005 mm comparison. Independent half-last-digit input perturbations reach the printed rounding interval; for example, surface-6 index minus0.000005 gives88.662514 mm. No source input is changed. |
| Weak G3 focal length | Computed -444.634711 mm; printed -444.61 mm | Raw FAIL preserved. 1,024 half-last-digit source-parameter corners span -444.761540 to -444.507954 mm, supporting precision sensitivity. No source value altered. |
| Paraxial exit-pupil ratio | 1.314326498 versus printed 1.32 | Raw FAIL preserved. Rounded f-number interval overlaps printed ratio interval; final finite-ray stop yields first-order ratio 1.319126. Calibration is disclosed. |
| Near-distance interpretation | First-vertex distance 189.266845 versus 250 mm | Raw FAIL preserved. Image-plane interpretation gives 250.016745 mm. Analysis now explicitly calls this an inferred reference convention. |
| Source citation | Hosted-copy citation | Original included filename and exact PDF/printed pages identify the unchanged source. |
| Data header | Compressed units and words | Readability cleanup; parsed object changed only at surface-7 and surface-9 SDs. |
| Historical construction trials | G2 SD 8/9.25 mm initially clipped core bundles | Author enlarged them before Stage 3. Stage 4 independently reconsidered the optical front cap and corrected it as above. No old approval transferred to final bytes. |

The author's corrected preliminary catalog exponent reader and native stop-index/entrance-pupil API mistakes are implementation history, not patent corrections. The fresh review also corrected a JSON integer-key/string-key comparison in its replay harness; numerical baseline contents were unchanged. No successful scientific result depends on suppressing these errors.

## Independent review

Pass A opened only original PDF/card, shared workflow/current references and fresh vendor sources. No candidate data, analysis, prior audit/results or author glass label was opened until the baseline checkpoint. The frozen fingerprint is 47e904674ae64b8d5291b66709f1182c19e344d34e0567b7271b1ef77e54d2a0. It hashes the sorted filename-to-SHA256 map using compact UTF-8 JSON; it documents content and chronology, not a cryptographic proof of blindness.

The fresh transcription, conventions, exposure note and results are preserved in evidence.independentPass.baseline and results.independentBaseline.sourceOnly. The verifier retains the independent source-only code under an ind_ namespace. That branch never reads the candidate as its numerical input. The official pre-candidate catalog scan remains separately identifiable. Later reconciliation, vector tracing, geometric checks and the SD correction are explicitly post-freeze work. The corrected SD was selected by this reviewer, so its validation is not falsely described as a second blind review of the correction.

Original candidate archive SHA-256: aa44b78ae5ccb94d6094f52645ee9423301acfae67587405be8639a954d40ef6. Original data SHA-256: 22c562c7bcf884d98fe8134f39d99f087b9182aa48a3ff5dfc15a673bd5570e1. Original analysis SHA-256: 445c757c42a4cf2204e7c175c6d0be0ef280324df86928ba1491449ade930878. Final identities are in the manifest.

### Quantitative-claim map and interpretive review

| Analysis claim | Governing evidence / executed result |
|---|---|
| Patent metadata, dates, Sigma applicant and inventor | Original PAJ cover; final structured patent fields |
| 25 mm/f1.8,9/7,2 aspheric elements,47 degrees,0.25 m,0.12x,MSC and 2014 timing | Independently reread Olympus 29 January 2014 primary announcement |
| Product/patent correlation and its uncertainty | Source/model structure plus manufacturer facts; no maker confirmation invented |
| EFL, BFD, physical track and reference planes | Frozen source-only results and final implementedModel.fullOpticalRecomputation |
| G1/G2/G3, cemented G1c and nine isolated lens powers | Independent source-only groups/elements; actual parsed final element fl fields |
| Surface Petzval | Both source and implemented surface-by-surface power/(n*nPrime) calculations |
| Glass coordinates and C/F/g proxies | Fresh official AGF scan and post-freeze spreadsheet rows; independent polynomial replay |
| Focus travel, conserved gaps, near EFL and magnification | Original endpoint table, frozen calculations and parsed final var arrays |
| Near 1.868946 aperture | Independent vector-Snell result and Figure 3's rounded 1.87 |
| K=0, A4-A12 and rim departures | Rendered equation/table; parsed asph; independently checked profile derivative/rim calculations |
| Eight conditional ranges and values | Raw source definitions; final implemented physical stop used for condition 1 |
| Source discrepancies | Raw comparison failures plus explicitly separated precision/reference resolutions |
| Modeled 7.80/6.30 mm caps, 8.75 mm joint, stop clearance and inferred apertures | Figure measurement, correction trial record and final actual data |
| Core clearance, joint clearance, exterior losses and zero trim | Final exact native outputs, independent dense geometry and portable checks |

Manual prose review verified third-person technical wording, required section order, source citations, standalone-versus-installed power distinctions and disclosure of inference. Element roles follow the patent paragraphs without inventing an isolated aberration budget. Polynomial signs describe geometric departure, not an automatic wavefront-aberration assignment. No production glass supplier, licensing arrangement, asphere manufacturing method or APO performance is asserted.

## Gate disposition

All mandatory portable source, model, geometry, glass, analysis and independent-review checks pass on the final bytes. Native buildLens/validateLensData, exact vector/skew tracing, actual public off-axis helper and production render diagnostics were rerun on the identified current source modules. Original and final raw scientific observations remain visible. Group-table comparisons use the strict printed ±0.005 mm interval; rounded-input sensitivity is a separate resolution rather than an enlarged acceptance tolerance. Final package integrity and separate clean-extraction replay are recorded in the manifest.

READY_FOR_BATCH. integrationStatus: INTEGRATION_PENDING. This is a pre-integration dossier approval, not application-wide acceptance.

## Pending integration

Full TypeScript type checking, actual Prettier validation, full-corpus policy tests, production build and browser UI review remain NOT_RUN at integration scope. The source-only runtime snapshot supports targeted native execution but does not provide the complete installed application/toolchain. Native TypeScript stripping is not a compiler/typecheck, and numerical/render diagnostics are not a browser screenshot.

Portable reproduction: python OlympusMZuiko25mmf18.verify.py --package-dir <extracted-dossier> --output <external-results.json>.

Native reproduction, with the separately identified reference source tree: node OlympusMZuiko25mmf18.native.mjs <verified-source-root> <external-native-results.json>.

## 2026-10-06 — Semi-diameter pass against the patent figure

Source: the local JP2015075501A PDF, page 24, 【図1】 (Figure 1, Numerical Example 1 at infinity). The sheet is a clean 1-bit line drawing (embedded raster 1274 × 806 px at 400 ppi) with the optical axis horizontal, no ray bundles, group brackets above the glass and a focus bracket below G2. It was measured on a 400 dpi page render, which is the native resolution.

Scale: the vertex crossings of surface 1 (x = 460 px) and surface 17 (x = 1227 px) span 43.4869 mm, giving 17.637 px/mm (0.05670 mm/px). The span from surface 1 to the image plane (x = 1530 px, 60.7499 mm) gives 17.613 px/mm, 0.14 % apart, and all fourteen intermediate lens vertices fall within 1.5 px of the prescription and both filter faces within 2 px. The figure is therefore drawn to the prescription's own scale at the infinity state. The axis is row y = 882; readings above and below it differ by at most 2 px (0.11 mm) and are averaged. Stage 4's 0.078638 mm/px at 288 dpi is the same scale.

Method: the outermost ink on each side gives the height of each element's drawn edge; vertical ink runs locate the flat lands, whose inner end is where a concave surface's curve stops. Each land was cross-checked by converting its axial position into a height through the surface sag. The automatic figure screen agrees on every outer edge (figure/data 0.92–1.03, median 0.98); it does not see the lands.

| Surface | Before | Figure (mm) | After | Decision |
|---|---:|---|---:|---|
| 1 | 14.5 | 14.83 edge (262 / 261 px) | 14.5 | 2 %; retained |
| 2 | 14.5 | curve ends 12.02 (211 / 213 px; 12.0 from the land position); land out to 14.83 | 12.0 | 21 % over-size; changed. Floors are 6.69 mm axial, 5.60 mm corner chief and the 11.69 mm unvignetted full-field envelope |
| 3, 4 | 13.5 | 13.15 edge | 13.5 | 3 %; retained |
| 5A, 6 | 11 | 11.11 edge (197 / 195 px) | 11 | Retained; no aspheric semi-diameter changed |
| 7 | 7.8 | curve ends 7.09 (124 / 126 px; 7.12 from the land position); land to 11.11 | 7.8 | 10 % over; retained, see below |
| STO | 6.0411 | tick inner ends 6.07 (106 / 108 px) | 6.0411 | Not edited; the drawn iris agrees to 0.5 % |
| 9 | 6.3 | curve ends 5.95 (104 / 106 px; 5.98 from the land position); land to 8.0 | 6.3 | 6 %; retained |
| 10, 11 | 8.75 | 8.02 edge (141 / 142 px) | 8.75 | 9 % over; retained, see below |
| 12A, 13A | 9.75 | 9.21 edge (162 / 163 px) | 9.75 | 6 %; retained; aspheric |
| 14 | 10.25 | 9.98 edge (175 / 177 px) | 10.25 | 3 %; retained |
| 15 | 10.25 | curve ends 8.90 (156 / 158 px; 9.0 from the land position); land to 9.98 | 9.4 | 15 % over-size; changed, but held 0.5 mm above the drawing, see below |
| 16 | 10.5 | 10.7 edge (189 px on the lower side; the upper side touches the G3b bracket) | 10.5 | 2 %; retained |
| 17 | 10.5 | curve ends 9.64 (169 / 171 px; 9.61 from the land position); land to 10.7 | 10.5 | 9 % over; retained, because this rim and surface 16 set the engine half-field |

Two surfaces changed: 2 (14.5 → 12.0) and 15 (10.25 → 9.4). The lands are read as the drawing's own clear apertures rather than as arbitrary flanges, because the drawn curve ends sit just outside traced ray heights: 12.02 mm at surface 2 against an 11.69 mm unvignetted full-field envelope, 7.09 mm at surface 7 against 7.07 mm, 5.95 mm at surface 9 against the 5.90 mm axial marginal ray of the 250 mm state, and the iris ticks at the calibrated stop radius. They remain drawing measurements, not published values.

Surfaces 7 and 9 were re-measured independently at 7.09 and 5.95 mm, matching Stage 4's 7.12 and 5.94 mm. Their modeled 7.8 and 6.3 mm caps and the 8.75 mm cemented junction are kept as one set. With the 6.3 mm cap, passing rays reach 8.30 mm at surface 10 and 8.59 mm at surface 11, so an 8.0 mm junction would reintroduce the interior clipping that Stage 4 removed. A trial with every surface at its figure value passes 89.8 % of a five-position fan against 93.3 %, lowers the full-field fraction at infinity from 74 to 65 %, and still records three first clips at cemented surface 10. Reducing surface 7 to 7.1 mm would affect no traced ray inside the format; it is left alone because the difference is at the change threshold and barely alters the bevelled rim.

Surface 15 at the drawn 8.9 mm would lower the engine's chief-ray-limited half-field from 28.25° to 27.24° and the full-field meridional fraction at infinity from 74 to 65 %; 9.3 mm gives 28.20°. The chosen 9.4 mm is the smallest 0.1 mm step that leaves the half-field at 28.248° (the chief ray at that angle crosses surface 15 at 9.30 mm), and it removes most of the excess rear rim.

Clearance after the change, by exact meridional real-ray trace including the 4 mm rear plate: nine focus positions, eleven image heights to 10.8 mm and 201 rays across the stop diameter (19,899 rays). At infinity the 10.8 mm chief enters at 24.06° (patent 24.05°); at the 250 mm state the object lies 189.27 mm ahead of surface 1 and the corner object height is 89.3 mm. Largest axial marginal / corner chief heights are 6.69 / 5.60 mm at surface 2 and 5.17 / 7.63 mm at surface 15. No surface clips the axial bundle or blocks the corner chief at any position. Passing rays move from 18,567 to 18,542: the 25 added losses are all first clips at surface 15 in the outermost field sample, so the full-field fraction moves 74 → 73 % at infinity and 86 → 84 % at 250 mm and every inner field is unchanged. Surface 2 loses no ray. First clips are 1,085 at surface 9, 30 at 11, 42 at 12A, 59 at 13A and 25 at 15; none at cemented surfaces 6 or 10, where the largest passing height is 8.30 mm against 8.75 mm. A further 116 stop samples at the outer fields have no real ray in either set.

Engine comparison before → after: wide-open f-number 1.82 → 1.82, half-field 28.248° → 28.248°, traced corner coverage 10.80 mm of 10.80 mm at 24.1° in both, image-circle floor clear in both. The surface validator reports no errors and the render diagnostics report no trimmed element at the infinity layout. The steepest rim is now surface 2 at 43.4° (it was the same surface at 56.17° with 14.5 mm). Paired aperture ratios are 1.21 for L1 and 1.09 for L8. The asphere departure table is unchanged.

Rendered comparison with Figure 1 at infinity and at the 250 mm endpoint: L1 no longer wraps around the rim of L2, and the L8 rear rim stops short of L9 as drawn. The renderer joins unequal front and rear rims with a straight edge, so L1 and L8 show a bevel where the drawing shows a squared land, as L4 and L5 already did.

Open limitations: flat lands cannot be drawn; surface 15 is 0.5 mm and surface 17 0.9 mm above the drawn curve ends; the G2 rims (8.75 and 9.75 mm) remain 6–9 % larger than drawn; and the engine half-field of 28.25° exceeds the published 24.05° because those rear rims are generous. The Stage 4 statistics earlier in this log (56.17° maximum rim angle, the 114,444-ray skew grid) describe the semi-diameters before this pass and were not recomputed on that grid.

## 2026-10-06 — Glass tracing path and metadata

- Catalog-copied spectral fields removed. All nine elements and the rear filter carried `nC`, `nF` and `ng` values
  transcribed from the HOYA catalog rows, not from the patent, which publishes only nd and νd. Complete authored
  line indices bypass the project glass catalog, so the lens traced on five-decimal rounded catalog values while
  counting as measured line-index data. The fields were removed; each label (E-F1, TAFD33, NBFD13, E-F5, E-FD15,
  M-LAC130, E-FD13, TAFD5F, and BSC7 for the filter) resolves to its HOYA catalog row with nd within 5×10⁻⁶ and νd
  within 0.01 of the patent pair, and the lens now traces on those full dispersion curves. Stored nd and νd are
  unchanged; the header and the analysis paragraph on line indices were restated.
- `specs` added (9 elements / 7 groups, design f = 24.53 mm, design F/1.82, 2ω = 48.10° from the published 24.05°
  half-field, three aspherical surfaces on two elements); the file had none.
- Display name, mount (Micro Four Thirds), format id (`four-thirds`, as on the other Micro Four Thirds models) and
  the 21.6 mm image circle were reviewed and left as authored.

## 2026-10-07 — Second review: diagram, labels and movement

Compared: the local page at infinity and at the 250 mm endpoint, the focus-movement overlay at both ends and the element inspectors of L1, L3, L5, L7, L8 and L9, against 【図1】 (PDF p.24), the construction text ¶0080–0084 (PDF p.12), claim 1, and the surface, asphere and variable-spacing tables of Numerical Example 1 (PDF pp.16–17).

The figure was re-measured independently on a 400 dpi render. The axis is row 882 and the seventeen lens vertices run from x = 460 px (surface 1) to x = 1227 px (surface 17), 17.637 px/mm; the filter faces and image plane fall at 1442, 1512 and 1530 px. Readings below / above the axis: L1 outer edge 262 px (14.86 mm), D1 197 / 195 px (11.11 mm), D2 142 / 141 px (8.02 mm), L7 163 / 162 px (9.21 mm), L8 177 / 175 px (9.98 mm) with its flat top from x = 1155 to 1193 px, and L9 189 / 187 px (10.66 mm) with its flat top from x = 1228 to 1245 px. The rear lands convert, through the surface sag at their axial position, to curve ends of 9.0 mm on surface 15 and 9.6 mm on surface 17, and 7.15 mm on surface 7. Every value agrees with the first pass within 0.1 mm. The automatic figure screen now reads figure/data 1.03, 0.98, 1.01, 1.02, 0.92, 0.92, 0.95, 1.00 and 1.02 for L1–L9.

Visible differences between the page and the figure before this review: L1, L4, L5 and L8 were bevelled where the figure draws squared blocks with a flat land; D2 and L7 stand 9 % and 6 % taller than drawn; the order of heights (D2 < L7 < L8 < L9 < D1 < L2 < L1) was already as drawn.

| Item | Before | After | Evidence |
|---|---|---|---|
| Surface 14 semi-diameter | 10.25 | 10.0 | Drawn outer rim of L8 is 9.98 mm |
| Surface 15 semi-diameter | 9.4 | 10.0 | L8 is drawn as a squared block; at 10.0 mm the rear rim stays 0.90 mm clear of L9, inside L9's taller rim, as drawn |
| Group labels | G1 FIXED (1–7), G2 FOCUS (9–13A), G3 FIXED (14–17) | G1a (1–2), G1b (3–4), G1c (5A–7), G2 FOCUS (9–13A), G3a (14–15), G3b (16–17) | Figure 1 brackets and ¶0081, ¶0083 |
| Element `role` | none | one sentence per element | ¶0080–0083 and the signs of R |
| `focusDescription` | "PUBLISHED: G2 (L5-L7, surfaces9-13) translates …" | "PUBLISHED inner focus: G2 (L5-L7, surfaces 9-13) moves …"; names the fixed sub-groups and the stop | ¶0080, variable-spacing table |

L8 squared. The renderer joins unequal front and rear rims with a straight edge, so 10.25 / 9.4 drew a slanted top where the figure has a flat one. Both faces at the drawn 10.0 mm give the flat top. The trial set passed the surface validator and the real-ray clearance trace before it was applied. On the nine-position, eleven-field, 201-ray fan (19,899 rays, rear plate included) passing rays move from 18,542 to 18,567: the 25 rays the first pass lost at surface 15 in the corner sample return, so the corner fraction is 74 % at infinity and 86 % at 250 mm, and no ray is clipped at surface 14 or 15 (largest passing heights 9.70 and 9.45 mm). First clips are 1,085 at surface 9, 30 at 11, 42 at 12A and 59 at 13A, none at the cemented surfaces.

L1, L4 and L5 keep their bevels. Squaring them would put surface 2 at 14.5 mm (rim 3.0 mm further toward L2 than the drawn land and a 56° rim), surface 7 at 11 mm (rim past the stop plane) and surface 9 at 8.75 mm (the interface clipping Stage 4 removed). The measured curve ends stay.

Rims 16 and 17 stay at 10.5 mm. They are 1.5 % below the drawn outer rim and already render L9 squared as drawn. The engine half-field of 28.25° is the angle at which the real chief ray first clips, here at surface 16 (10.48 mm at 28.25°); it is not the format field. At the published 24.05° the chief ray needs only 8.29 mm at surfaces 16 and 17. Taking surface 17 to its drawn curve end of 9.6 mm would lower the engine value only to about 26.8° (chief 9.19 mm at 26°, 9.70 mm at 27°), would bevel L9, and would cost 93 corner rays (corner fraction 74 → 69 % at infinity, 86 → 80 % at 250 mm). No rim consistent with the drawing brings the engine value to 24.05°.

G2 rims stay at 8.75 and 9.75 mm. A trial with surfaces 10 and 11 at the drawn 8.0 mm puts 198 first clips on cemented surface 10 and 301 on surface 11 and lowers the 0.5–0.9 field fractions at infinity by 1–5 points; adding surface 9 at 6.0 mm clears the interface but clips fields 0.2–0.4, because the 250 mm axial marginal ray already stands at 5.90 mm. The first pass's retention is confirmed.

Labels. The patent names no individual lens element; it names G1a (one negative meniscus), G1b (one biconvex lens), G1c (the cemented biconvex–biconcave pair), G2, G3a (negative meniscus) and G3b (positive meniscus). The group row now carries those six names, each under its own element or pair, in place of the three top-level names; G1 and G3 are implied by the names and stated in `focusDescription` and the element roles. Nesting both tiers was rejected because it puts eight rows in the movement overlay and a second label row under the lens. The overlay now lists six units, five of them fixed. Doublet labels D1 (5A–7) and D2 (9–11) are unchanged; D1 coincides with G1c. Element names stay L1–L9 with numeric diagram labels.

Checked and found correct: element types against the signs of R (L1, L8 negative menisci convex to the object; L2, L3, L6, L7 biconvex; L4, L5 biconcave; L9 positive meniscus convex to the object); aspheric markers 5A, 12A and 13A against the table's starred surfaces 5, 12 and 13, with one aspheric face on L3 and two on L7; the stop at surface 8 between L4 and L5; no anomalous-dispersion tags, since the patent text names no low-dispersion, anomalous-dispersion or fluorite material and the Olympus construction cited in the analysis lists two aspherical elements; gap labels D8 and D13; patent number, inventor, applicant and year against the front page.

Focus movement. The table gives d8 = 8.0395 → 5.1012 mm and d13 = 1.6000 → 4.5383 mm from INF to 250 mm; both `var` arrays hold infinity first. The sum stays 9.6395 mm, so G2 moves 2.9383 mm toward the object, as ¶0080 states and as the arrow under the G2 bracket in Figure 1 points. On the page the overlay moves the G2 centre from 28.7 to 31.7 mm ahead of the focal plane with 2.94 mm maximum travel, the five fixed units do not move, the far end of the slider reads 25 cm, and the readout there shows D8 5.10, D13 4.54 and EFL 23.58 mm. There is no zoom.

Engine comparison before → after: wide-open f-number 1.82 → 1.82, half-field 28.248° → 28.248°, corner coverage 10.80 of 10.80 mm at 24.1° in both, image-circle floor clear, surface validator without errors, no axial clip and no blocked corner chief at either focus end. No aspheric semi-diameter changed, so the departure table stands.

Open limitations: flat lands cannot be drawn, so L1, L4 and L5 remain bevelled; the L8 rear rim sits 0.65 mm nearer L9 than the drawn land; D2 and L7 remain 9 % and 6 % taller than drawn; the movement overlay counts six annotated units for a three-group lens.
