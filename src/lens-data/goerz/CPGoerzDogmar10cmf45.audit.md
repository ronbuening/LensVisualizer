# Dogmar qualified pre-integration audit

Earlier status (closed): one hidden representative triad. The coordinator subsequently made the lens visible; no exact factory identity was established.

Original USPTO full patent visually checked; independent source review confirms eight radii, seven intervals and four index/dispersion pairs. nG′ values are archived but not fitted. Source nD is represented with the engine d-reference approximation. Positive C–F values are interpreted as dispersion magnitude nF−nC; derived V values are not a literal patent V table.

No source optics modified. Common cap 11.5 mm derives from the default .9 geometry bounds on a half-mm grid; it is not a measured aperture or ray-fit result. Midpoint iris 2.7/2.7 is a disclosed hypothesis within source 5.4 mm gap. Independent geometry review verifies positive full-cap clearance on both sides. No allowance override, spacers or rim exceptions.

Corrected-pilot to final metadata changes only key/name. Final native construction and isolated strict TypeScript are rerun. Sparse nominal-frame diagnostic is limited to 12.207278 degrees, 26 OK at five fields, not full pupil or MTF. Calculated infinity plane, no near-focus or separable-component reconstruction. Final independent review accompanies the triad.

Recovered main 4caca439fdd7186caf6cf458b1c56e6e114b752b has no Dogmar/1108307 lexical match. Additional 1114 data-file four-distinctive-radius string screen found none. This is bounded, not complete live/historical/scale-invariant numeric dedup or a novelty claim. Full corpus/app/lint/format/build/browser/MTF are deferred to integration under the agreed split.

Commercial Dogmar is established by primary maker advertising; the patent-name association is secondary Smith attribution. This is enough for the authorized qualified representative, not proof of a specific commercial 100 mm version. Preserve all caveats in integration.

## 2026-11-13 — Deployment validation

The independent validator re-read the patent page images and found no transcription mismatches in eight radii, seven axial intervals, four nD values and four C–F dispersion magnitudes. Codex independently re-read all three local patent page images, checking those table entries, the sole f = 100, 1:4.5 example, the diaphragm within d4 = 5.4, the inventor and assignee, and the filing and grant dates. The stop split, clear rims and back focus are not printed dimensions.

Verdict: valid with notes, with a strong Dogmar association and qualified production identity. The validator cites the Camera Work 47 (1914) maker advertisement and W. J. Smith, Modern Lens Design, Fig. 13.22, naming this patent as the Dogmar; its American-catalog component ratios of 1.92×/1.52× compare with the computed 1.924×/1.582×, supporting correlation without proving an exact factory prescription.

Changes made:

- Data file form: two line comments and the incorrect ../LensVisualizer/src/types/lensDataV2.js import → the ../../types/lensDataV2.js type import, one source JSDoc, const LENS_DATA satisfying LensDataV2Input, and export default LENS_DATA. The JSDoc records source/example, scale factor 1, lengths represented in millimetres without numeric conversion, derived νD, and the inferred stop, rims and back focus.
- All four elements: indexReference "d" → "D", retaining the printed sodium nD coordinates. The validator estimates nd − nD at about 1.0–1.2 × 10⁻⁴, above the five-decimal print precision. The analysis's d-line approximation explanation → the retained sodium-D explanation. No radius, thickness, gap, index, dispersion value or rim changed.
- source.patentNumber: "US 1108307" → "US 1,108,307 A"; source.example: absent → { "label": "Sole example", "id": null }. The assignee already reads "Optische Anstalt C. P. Goerz Aktiengesellschaft" and was retained.
- catalog.lensMounts: absent → ["large-format-lens-board"]; catalog.imageFormat: absent → "6x9", as assigned. These identify the catalog format; they do not turn modeled coverage into a patent-stated field guarantee.
- focus.description: the former internal status marker → "Only the infinity prescription is modeled because the patent provides no finite-focus data."
- Analysis: the optdesign.narod.ru Smith PDF link and Modern Optical Engineering attribution → the plain book citation W. J. Smith, Modern Lens Design, Fig. 13.22; removed the 36 × 24 mm, 26-ray diagnostic passage. Existing audit text above is preserved as the earlier record; its d-reference and nominal-frame statements are superseded by this section.

After these changes, built.mjs reports EFL 99.996511939962 mm, full aperture f/4.5, stop radius 9.550146968476541 mm, total first-surface-to-image distance 108.708856474 mm, entrance-pupil position −0.4938137533699809 mm relative to the stop, exit-pupil position −9.068770146068788 mm relative to the last surface, and exit-pupil radius 10.86418073552678 mm. EFL remains approximately 99.9965 mm, as the validator reported; its computed back focus is 88.709 mm and optical track is 20.000 mm.

Audit results:

- audit:surface: OK — no validation errors.
- audit:aperture: one lens, one station, within 3% of the stated f-number; zero rim limits, trace limits, iris limits or failures.
- audit:image-circle: one lens checked, zero undersized surfaces and zero skipped, against the 6x9 format's 101 mm diagonal.
- audit:field-coverage --below=1.01 initially skipped the hidden file. On an otherwise identical scratch copy with visible: true, it reports 100% coverage: modeled 26.8° → 50.50 mm of 50.50 mm; corner 26.8°, clear; one station at ≥99%, zero unsolved and zero skipped. The image-circle audit also passes on that scratch copy. Earlier hidden status closed: the coordinator subsequently made the assigned lens visible.

Coverage here describes chief-ray reach, not uniform illumination or image quality. The validator reports vignetting values of 81% at 20.8°, 73% at 23.8° and 63% at 26.8°; no new throughput or MTF claim is made.

Earlier cleanup queue (closed for wording and metadata): the coordinator set names and keys; the cleanup section below resolves subtitle/specification wording, element types, glass labels and the f/36 endpoint. Rim and rear-edge review is closed by the semi-diameter section below, retaining the original dimensions; the inferred stop split remains a coordinator decision. Full application checks, browser rendering and MTF were outside this validation.

## 2026-11-13 — Cleanup and wording pass

Re-read the validator and integration reports, the existing patent-table image, the Camera Work advertisement and Smith Fig. 13.22 (p. 464). The eight radii, seven source intervals, four sodium-D indices and four C–F magnitudes remain unchanged. The patent's source f = 100 is retained at scale factor 1. No rim, stop, optical spacing or dispersion coordinate changed; the coordinator's deployment section above is retained.

Added subtitle "US 1,108,307 A, sole example — Goerz Dogmar f/4.5" and catalogue specs "4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "f/4.5". The four element labels remain "Element N"; types now follow the radius signs: Biconvex Positive / Biconcave Negative / Biconcave Negative / Biconvex Positive. Roles describe their positions in the two cells. All four elements are air-separated: no cemented tags or doublets entries apply, and no APD tags were added.

Replaced all four obsolete "Source nD; positive C-F dispersion magnitude; d-reference engine approximation" labels with Unmatched labels: L1/L4, "Unmatched (nD 1.61412 / V 56.3412844)"; L2, "Unmatched (nD 1.56890 / V 42.6142322)"; L3, "Unmatched (nD 1.54820 / V 46.1447811)". The V values are derived from the printed C–F magnitudes, not a printed Abbe table. Each stored ΔnD = 0 and ΔνD = 0 before/after. No catalogue glass was assigned, so catalogue-match deltas do not apply. trylabel.mjs confirms that all four labels remain unresolved by design; sodium-D references remain unchanged. No copied nC/nF/ng fields were present.

The close-focus placeholder is numerically unchanged at 1e15; focus wording now reads "Infinity focus only; the patent supplies no finite-focus spacings." The fStops endpoint and maxFNumber change from 22 to 36, with 32 as an intermediate control value. The source is the Science Museum Group's [Tenax Press Camera, 1990-5036/2116](https://collection.sciencemuseumgroup.org.uk/objects/co8205487/tenax-press-camera), explicitly fitted with a 10 cm f/4.5–36 Dogmar. This sources the endpoint, not a particular engraved stop sequence. Existing mount, image format, focal-length and aperture ratings remain unchanged; no minimum-focus metadata was added.

The header and analysis remove process vocabulary and obsolete hidden/test passages. The analysis retains the patent identification, asymmetric cell architecture, inferred clear apertures and iris clearance, sodium-D dispersion limitations and computed back focus. It now cites the Science Museum 10 cm Dogmar records, Smith's book rather than a hosted copy, and the Goerz American catalogue's approximately 1.92×/1.52× cell ratios against the model's 1.924×/1.582×. The former Verification Summary is now Model Scope and Limitations.

Before → after, identical: EFL 99.996511939962 → 99.996511939962 mm; FOPEN 4.5 → 4.5; halfField 36.95759244145292° → 36.95759244145292°; stop radius 9.550146968476541 → 9.550146968476541 mm; paraxial BFD 88.7089 → 88.7089 mm; track 20.0000 → 20.0000 mm; total first-surface-to-image distance 108.708856474 → 108.708856474 mm. Both focus-keyframe probe lines are identical. The sole built-summary change is the intentionally sourced maxFstop 22 → 36 control limit.

Surface audit: OK, no validation errors. Aperture audit: one lens/station within 3% of the stated f-number, zero rim/trace/iris limits and zero failures. Field-coverage audit with --all: one lens/station at ≥99%, zero unsolved and zero skipped. The browser screenshot helper returned thermal-observer and DNS-watch startup errors without producing an image, so rendered-page review could not be completed. No sandbox or approval denial occurred. Full application gates were excluded by this cleanup assignment.

Rim and L4-edge review is closed by the semi-diameter section below, without geometry changes. Open: midpoint 2.7/2.7 mm stop split versus approximately 3.0/2.4 mm in the figure; this remains a coordinator decision. The exact production prescription/glass melts, complete nG′ dispersion fit, finite-focus spacings/minimum distance and separate-cell configurations remain unestablished. Rendered-page review is closed by the second-review section below. The f/36 endpoint is resolved by the cited museum specimen.

## 2026-11-13 — Semi-diameter pass against the patent figure

Source: local US1108307A.pdf, PDF page 1, sole cross-section; numerical example and bibliography visually checked on PDF page 2. The addendum's normalized f = 1, ×100 convention and the file's native f = 100, ×1 convention describe the same 100 mm model. The actual local table prints focal length 100; no numeric conversion was applied.

The native scan is 2320 × 3408 pixels at the PDF's 72 dpi, so enlarging it does not add source detail. At the local axis y ≈ 1643, surface vertices are approximately x = 974, 1037, 1065, 1093, 1178, 1204, 1230 and 1287. The overall 313 px / 20 mm span gives 15.65 px/mm. Independent front-cell and rear-cell spans give approximately 119 / 7.6 = 15.66 and 109 / 7 = 15.57 px/mm. Fits to the isolated outer spherical arcs give about 430.3 / 27.701 = 15.53 and 553.5 / 35.690 = 15.51 px/mm, corroborating transverse scale within about 1% of the long axial fit.

Individual dimensions are less faithful: L1 is approximately 63 / 15.65 = 4.03 mm versus 4.2 mm, L2 approximately 28 / 15.65 = 1.79 mm versus 1.6 mm, and the rear air gap approximately 26 / 15.65 = 1.66 mm versus 1.8 mm. L2 differs by about 12%; thick ink adds uncertainty to the shorter spans. Accordingly this is a proportional reading, not a calibrated clear-diameter measurement. Optical edges are about 187–192 px from the local axis after excluding labels, diagonal leaders and the iris ticks: roughly 12.0–12.4 mm, conservatively about 12.1 ± 0.3 mm. This refines the earlier approximately 11.8 mm reading without establishing a significant rim mismatch.

| Surfaces | Stored before → after (mm) | Figure estimate (mm) | Decision |
| --- | --- | --- | --- |
| 1, 2 (L1) | 11.5 → 11.5 each | approximately 12.1 ± 0.3 | Equal square-cut faces retained; within schematic uncertainty |
| 3, 4 (L2) | 11.5 → 11.5 each | approximately 12.1 ± 0.3 | Equal square-cut faces retained; no supported step |
| 5, 6 (L3) | 11.5 → 11.5 each | approximately 12.1 ± 0.3 | Equal square-cut faces retained; no supported step |
| 7, 8 (L4) | 11.5 → 11.5 each | approximately 12.2 ± 0.3 | Equal faces retained; positive thin edge agrees qualitatively |

No optical rim, land, cut, geometry allowance, stop or prescription coordinate changed. Approximate figure/stored ratios are 1.05–1.06, inside the 5–8% noise allowance. L4's edge thickness is 0.438439 mm; L1/L2/L3 edges are 1.056680 / 4.635883 / 4.591618 mm. The patent shows a thin rear edge but supplies no edge-thickness dimension, so it does not justify making L4 knife-edged.

At infinity, both clear-aperture solvers give axial marginal heights 11.11 / 10.90 / 10.43 / 9.90 / 9.71 / 9.78 / 10.05 / 10.10 mm on surfaces 1–8 and corner-chief heights 5.02 / 3.65 / 2.32 / 1.68 / 1.69 / 2.33 / 3.69 / 4.82 mm. Minimum axial rim clearance is approximately 0.39 mm at surface 1; neither solver flags an axial or chief-ray clip. Both report no solution for the extreme unvignetted upper/lower bundle rays at the corner; those columns therefore do not measure an unvignetted full-field aperture. The independent engine aperture audit passes, and full-pupil vignetting below measures the intended off-axis loss.

Before → after: surface audit OK with no errors; aperture audit one station within 3% of f/4.5 with no rim/trace/iris limits or failures; image-circle audit zero undersized and zero skipped; field coverage 100% at 26.8°, 50.50 / 50.50 mm with clear corner chief ray. Built half-field 36.957592° → 36.957592°, f/4.5 → f/4.5, EFL 99.996512 → 99.996512 mm and iris radius 9.550147 → 9.550147 mm. The engine half-field is distinct from the format-corner angle. The rim-cost comparison against base1124sd, including element-restoration checks, has zero loss at every sampled field: corner geometric transmission 63.4% → 63.4%, with 81.4% → 81.4% at 20.8° and 73.4% → 73.4% at 23.8°. Only infinity is supplied by the source.

Stop recommendation, not applied: the tick near x = 1140 implies approximately (1140 − 1093) / 15.65 = 3.0 mm from surface 4 and (1178 − 1140) / 15.65 = 2.4 mm to surface 5. A coordinator may move the midpoint 0.3 mm imageward while retaining the source's 5.4 mm gap and recalculating the f/4.5 iris radius. This is optional figure inference, not a printed spacing or a clearance repair. Current iris-plane clearance at the full rim is 0.905003 mm ahead and 1.646454 mm behind; no iris-radius change is independently justified.

The matched-scale side-by-side was rendered and inspected at scratchpad/sd/dogmar/overlay.png; model.svg/model.png compare the current black outlines with the coincident blue baseline. Four separate groups, equal square-cut heights and the thin L4 edge match the patent's proportions. The supplied maker cutaway in v-dogmar/cat00276/cut-06.png also shows four air-separated elements in two cells; its barrel-obscured, tapered presentation is not a calibrated rim source. There are no aspheres or marked special-glass positions in that image; the patent text places baryta crown in L1/L4. Live browser review remains with the coordinator under this assignment.

Bibliography: Walther Zschokke, assignor to Optische Anstalt C. P. Goerz Aktiengesellschaft, US 1,108,307, filed 17 January 1913 and patented 25 August 1914. No new name/metadata discrepancy was found; exact commercial-variant identity remains qualified. A preliminary overview render accidentally targeted the read-only main-checkout directory and failed with “Could not write image to patent-overview-1.png”; that output was abandoned and no main-checkout file was changed. No tool call or authorized lens-file edit was refused. All retained artifacts are in the assigned scratch directory.


## 2026-11-13 — Glass proxies and catalog metadata

Compared the pre-relabel base1124glass prescription with the current data file. The only data differences are the three glass labels below. Catalog deltas use catalog nd minus source nD and catalog νd minus source-derived νD; the catalog index is helium-d, while all four elements retain indexReference "D" and the printed sodium-D index.

- L1: "Unmatched (nD 1.61412 / V 56.3412844)" → "BACD6 (spectral proxy; patent nD 1.61412 / V 56.3412844; supplier and melt unspecified)". Hoya BACD6 catalog nd = 1.613753, νd = 56.377856; Δn = −0.000367, Δν = +0.036572.
- L2: "Unmatched (nD 1.56890 / V 42.6142322)" → "S-TIL26 (spectral proxy; patent nD 1.56890 / V 42.6142322; supplier and melt unspecified)". Ohara S-TIL26 catalog nd = 1.567322, νd = 42.817076; Δn = −0.001578, Δν = +0.202844 (about 0.20).
- L4: "Unmatched (nD 1.61412 / V 56.3412844)" → "BACD6 (spectral proxy; patent nD 1.61412 / V 56.3412844; supplier and melt unspecified)". Hoya BACD6 catalog nd = 1.613753, νd = 56.377856; Δn = −0.000367, Δν = +0.036572.
- L3 stays "Unmatched (nD 1.54820 / V 46.1447811)"; no catalog row lies within the approximately 0.25 Abbe window. Its Abbe approximation remains in use.

The proxies borrow only catalog wavelength dependence and anchor each curve at the printed nD. Stored nD and derived νD values stay unchanged. The repository proxy rule permits approximately |Δν| ≤ 0.25 and |Δn| ≤ 0.002; it establishes neither an exact glass match nor a historical supplier or melt. The earlier all-Unmatched record describes the pre-relabel state. The patent nG′ values remain unfitted.

Paraxial chan.mjs output, pre-relabel → current, at infinity. R/G/B/V correspond here to C/sodium-D/F/g: G is D at 589.3 nm because indexReference is "D", rather than the usual helium-d channel. Focus shifts are BFD offsets relative to G, not measured longitudinal chromatic aberration.

| Channel / line | EFL before → after (mm) | BFD before → after (mm) | BFD shift vs G before → after (µm) |
| --- | --- | --- | --- |
| R / C | 100.1214 → 100.1295 | 88.8337 → 88.8419 | +124.8 → +133.1 |
| G / D | 99.9965 → 99.9965 | 88.7089 → 88.7089 | 0.0 → 0.0 |
| B / F | 99.8373 → 99.8221 | 88.5482 → 88.5322 | −160.7 → −176.7 |
| V / g | 99.8461 → 99.8391 | 88.5544 → 88.5458 | −154.4 → −163.0 |
| REF / authored D | 99.9965 → 99.9965 | 88.7089 → 88.7089 | 0.0 → 0.0 |

No name, mount, format, field or other catalog metadata changes are assigned or present in the baseline comparison. The analysis describes the three proxies and L3's remaining limitation; the data file is not edited. The existing Open stop-split item remains unresolved because this assignment changes only glass text. Both Markdown companions are formatted with Prettier and checked with --check; full application gates are excluded by the text addendum.

## 2026-11-13 — Second review: diagram, labels and movement

Independently inspected the supplied 1400 × 900 live page and all four element inspectors, then re-read the local US1108307A.pdf: sole figure on PDF page 1, complete prescription, bibliography and explanatory text on page 2, and concluding claim on page 3. The actual source prints focal length 100, so the file's ×1 convention preserves the same 100 mm prescription as a normalized f = 1, ×100 description. No source coordinate changed.

### Figure and rims

Measured the native 2320 × 3408 scan again, excluding diagonal radius/thickness leaders, element-label leaders and stop ticks. At the local axis y ≈ 1643, the eight vertex centers are approximately x = 973.5, 1036.5, 1065.0, 1092.5, 1178.0, 1203.5, 1229.5 and 1287.0. The complete span gives 313.5 / 20 = 15.675 px/mm; the independent front and rear cell spans give 119 / 7.6 = 15.658 and 109 / 7 = 15.571 px/mm. Front thickness is approximately 4.02 versus 4.2 mm, the first negative thickness 1.75 versus 1.6 mm, and the rear air gap 1.66 versus 1.8 mm. Thick ink and these short-span differences limit absolute precision.

As a transverse scale check, at y ≈ 1540, 103 px above the axis, the outer front and rear arcs lie near x = 985.5 and 1277.0. Their chord-sag radii relative to the vertices are roughly 448 and 535 px; divided by the printed radii 27.701 and 35.690 mm, these give approximately 16.2 and 15.0 px/mm. This coarse independent reading supports the long-span scale but does not establish precision for a small rim adjustment. Clean upper edges are about 187–190 px from the axis, approximately 11.9–12.1 mm. As before, treat the drawing as a proportional guide with roughly 0.3 mm reading uncertainty, not a clear-aperture specification.

| Surfaces | Baseline / before → final sd (mm) | Independent figure reading (mm) | Verdict |
| --- | --- | --- | --- |
| 1–2, L1 | 11.5 / 11.5 → 11.5 each | approximately 12.0 | Retain equal square-cut rims; no significant mismatch |
| 3–4, L2 | 11.5 / 11.5 → 11.5 each | approximately 12.0 | Retain equal square-cut rims and common height |
| 5–6, L3 | 11.5 / 11.5 → 11.5 each | approximately 12.0–12.1 | Retain equal square-cut rims and common height |
| 7–8, L4 | 11.5 / 11.5 → 11.5 each | approximately 12.1 | Retain thin positive edge, 0.438439 mm |

No cut, land, rim extension, rim-cut depth or policy override is present; none was added. Full-pupil rimcost comparison with base1124sd, including leave-one-element-out checks, gives worst loss 0.0 percentage points across ten field samples. Corner geometric pupil transmission remains 63.4% → 63.4% at 26.8°; at 20.8° and 23.8° it remains 81.4% and 73.4%. These are clipping fractions, not total illumination. The meridional curve alone was not used to infer full-pupil equality.

### Inspector fields, labels and movement

The four supplied inspectors showed FL = −. Filled only their missing focalLengthMm fields from probe.mjs --elements, using isolated thick elements in air at the authored sodium-D index, rounded to two decimals:

| Element | Before → after focalLengthMm | Evidence |
| --- | --- | --- |
| L1 | absent → +35.99 mm | Isolated positive thick element |
| L2 | absent → −38.77 mm | Isolated negative thick element |
| L3 | absent → −40.94 mm | Isolated negative thick element |
| L4 | absent → +35.32 mm | Isolated positive thick element |

All four names L1–L4 follow the patent's element designations. The two positive biconvex and two negative biconcave type strings agree with the signs of the eight radii; L2's stronger curve and L3's weaker curve face the diaphragm. Roles are correct. Four singlets form four air-separated components; there are no cemented components requiring brackets, no aspheres requiring A markers and no APD tags. The patent's baryta-crown description of L1/L4 does not designate anomalous dispersion. The earlier maker-cutaway record in the semi-diameter section reports four air-separated elements in two cells, no aspheric or special-glass markings and an uncalibrated barrel-obscured outline; that record was consulted, without newly viewing or downloading a maker image.

Movement verdict for each of L1, L2, L3 and L4: fixed, displacement 0 mm. This is an infinity-only prime, with no zoom stations, focus keyframes or variable gaps. The source gives no finite-focus prescription or optical-group travel direction; page 2 discusses bellows-camera and separate-cell use without a numerical focus table. The focus description is accurate and does not invent a focusing mechanism. Probe's t = 0 and t = 1 diagnostics have identical 20.0000 mm optical track and 88.7089 mm back focus; its generic second line does not establish a finite-focus state. The live focus = 1 shot remains identical to infinity, with the far-end label stating Not modeled. Zoom/focus motion overlays have no authored motion to display.

### Glass, colour and assignee

Glasscheck and trylabel resolve BACD6 on L1/L4 and S-TIL26 on L2. Enumerating all evaluated site rows finds no exact match under |Δn| ≤ 0.0001 and |Δν| ≤ 0.15 for any element. BACD6 remains the only qualifying site row for L1/L4 under the site's proxy tolerance (Δn = −0.000366531, Δν = +0.0365712). S-TIL26 remains the closest qualifying L2 row in Abbe number (Δn = −0.001578123, Δν = +0.2028436); E-FL6 is farther at +0.2275516. No label changed. All four sodium-D references remain deliberate; stored source indices and derived dispersions are unchanged.

L3's closest evaluated site rows remain E-FEL1 (approximately 1.54814/45.82), S-TIL1 (1.54814/45.78) and Schott LLF1 (1.54814/45.75); none lies within the site's proxy tolerance. The patent's sole example gives nD = 1.54820, C–F magnitude 0.01188 and nG′ = 1.56364 for L3 on page 2, but no glass name or supplier. There is no second example in which its pair can recur. L1 and L4 do repeat the same source glass coordinates.

The full local vendor-AGF scan also finds no row inside the exact window. A borderline missing-row proposal for L3 is Sumita LLF1, tmp/pdfs/sumita-2025-11-07-all.agf, NM line 11675: nominal nd = 1.548140, νd = 45.900000, code 548459, formula 1, status 2. Its printed-header deltas are −0.000060 / −0.2447811. However, evaluating the CD polynomial on line 11677 at the engine's d/F/C wavelengths gives nd = 1.548140283 and νd = 45.8902224, hence Δν = −0.2545588, just outside the nominal 0.25 bound. This is a qualified proposal for catalog review, not an assigned match. Its coefficients are 2.349489, −0.007902707, 0.01649759, 0.0001810817, 0.00002788882, −0.00000009931414. A vendor-qualified name would be necessary: the current bare LLF1 resolves to Schott, not Sumita. Other missing archived rows inside the header proxy window are Ohara BSM6 for L1/L4 (1.613749/56.365919) and Sumita LF6 for L2 (1.567320/42.800000); these are proposals only, with no exact historical identification or reason to displace a working label before catalog review.

No constant-index/nd-only element exists: all four elements supply dispersion. The patent additionally prints nG′ = 1.62803 on L1/L4 and 1.58637 on L2, as well as 1.56364 on L3; these remain unfitted. G′ is not the mercury-g line represented by ng, so it must not be copied into that field. The source gives C–F differences rather than separate C/F indices, and prints no dPgF, aberration plots, distortion plots or astigmatism plots. Therefore no patent C/d/F/g focus-curve comparison is available. Recomputed paraxial BFD offsets relative to sodium D are C +133.1 µm, F −176.7 µm and g −163.0 µm, unchanged; these are model results, not agreement with published aberration curves. The analysis now includes the isolated-element focal lengths and uses the site's proxy tolerance wording, while restricting the L3 no-match statement to the site's catalog.

The page-2 heading names Walther Zschokke, assignor to Optische Anstalt C. P. Goerz Aktiengesellschaft, and gives filing 17 January 1913 and grant 25 August 1914. The assigned assignee matches that spelling. A worktree-wide search finds this as the only Goerz assignee occurrence, with no variant to consolidate here; assignee fields were not edited.

### Final checks and live page

Before → after, EFL 99.996511940 → 99.996511940 mm, built half-field 36.957592441° → 36.957592441°, f/4.5 → f/4.5 and stop radius 9.550146968 → 9.550146968 mm. The format-corner field remains 26.8°, distinct from the engine half-field. Surface audit reports OK with no validation errors; aperture audit reports no rim, trace or iris limit; image-circle audit finds zero undersized surfaces; field coverage is 100%, 50.50 / 50.50 mm, corner chief ray clear. Built.mjs does not throw. The nominal axial marginal surface heights range from 9.71 to 11.11 mm; minimum stored-rim margin is about 0.39 mm at surface 1. Clearap finds no axial or chief-ray clip, but cannot find the extreme unvignetted corner bundle, consistent with genuine off-axis clipping. The LSA diagnostic at normalized pupil radii 1 / 0.85 / 0.7 / 0.5 is +0.081 / −0.531 / −0.622 / −0.430 mm; no rim was raised to alter it.

After the focal-length edits, inspected queued live shots rv-page.png, rv-el-1.png through rv-el-4.png and rv-focus1.png under scratchpad/sd/dogmar/. All four FL values render correctly, type/glass/role text is readable, four square-rim singlets retain their common height and thin rear edge, and the stop remains between L2/L3. The current matched-scale side-by-side is scratchpad/sd/dogmar/rv-overlay.png (current red dashed, coincident baseline blue). Both Markdown companions pass Prettier check. No changelog entry was added. No tool call or edit was refused by the sandbox.

Open: the figure's stop ticks suggest about 3.0/2.4 mm rather than the stored 2.7/2.7 split; any optional 0.3 mm imageward shift and f/4.5 iris-radius recalculation remain report-only. Current full-rim iris clearances remain 0.905003 / 1.646454 mm, so this is not a spacing repair.

Open: L3 has no qualifying site-catalog proxy; Sumita LLF1 is a borderline catalog proposal whose evaluated Abbe number needs an explicit decision. The source G′ indices remain unfitted, exact production glass/retail-variant identity remains unestablished, and finite-focus/separate-cell configurations are outside this model.
