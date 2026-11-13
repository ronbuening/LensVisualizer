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

Earlier cleanup queue (closed for wording and metadata): the coordinator set names and keys; the cleanup section below resolves subtitle/specification wording, element types, glass labels and the f/36 endpoint. Open: inferred 11.5 mm rims versus the figure's approximately 11.8 mm, the 2.7/2.7 mm stop split versus approximately 3.0/2.4 mm, and the rear element's 0.44 mm edge remain unchanged. Full application checks, browser rendering and MTF were outside this validation.

## 2026-11-13 — Cleanup and wording pass

Re-read the validator and integration reports, the existing patent-table image, the Camera Work advertisement and Smith Fig. 13.22 (p. 464). The eight radii, seven source intervals, four sodium-D indices and four C–F magnitudes remain unchanged. The patent's source f = 100 is retained at scale factor 1. No rim, stop, optical spacing or dispersion coordinate changed; the coordinator's deployment section above is retained.

Added subtitle "US 1,108,307 A, sole example — Goerz Dogmar f/4.5" and catalogue specs "4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "f/4.5". The four element labels remain "Element N"; types now follow the radius signs: Biconvex Positive / Biconcave Negative / Biconcave Negative / Biconvex Positive. Roles describe their positions in the two cells. All four elements are air-separated: no cemented tags or doublets entries apply, and no APD tags were added.

Replaced all four obsolete "Source nD; positive C-F dispersion magnitude; d-reference engine approximation" labels with Unmatched labels: L1/L4, "Unmatched (nD 1.61412 / V 56.3412844)"; L2, "Unmatched (nD 1.56890 / V 42.6142322)"; L3, "Unmatched (nD 1.54820 / V 46.1447811)". The V values are derived from the printed C–F magnitudes, not a printed Abbe table. Each stored ΔnD = 0 and ΔνD = 0 before/after. No catalogue glass was assigned, so catalogue-match deltas do not apply. trylabel.mjs confirms that all four labels remain unresolved by design; sodium-D references remain unchanged. No copied nC/nF/ng fields were present.

The close-focus placeholder is numerically unchanged at 1e15; focus wording now reads "Infinity focus only; the patent supplies no finite-focus spacings." The fStops endpoint and maxFNumber change from 22 to 36, with 32 as an intermediate control value. The source is the Science Museum Group's [Tenax Press Camera, 1990-5036/2116](https://collection.sciencemuseumgroup.org.uk/objects/co8205487/tenax-press-camera), explicitly fitted with a 10 cm f/4.5–36 Dogmar. This sources the endpoint, not a particular engraved stop sequence. Existing mount, image format, focal-length and aperture ratings remain unchanged; no minimum-focus metadata was added.

The header and analysis remove process vocabulary and obsolete hidden/test passages. The analysis retains the patent identification, asymmetric cell architecture, inferred clear apertures and iris clearance, sodium-D dispersion limitations and computed back focus. It now cites the Science Museum 10 cm Dogmar records, Smith's book rather than a hosted copy, and the Goerz American catalogue's approximately 1.92×/1.52× cell ratios against the model's 1.924×/1.582×. The former Verification Summary is now Model Scope and Limitations.

Before → after, identical: EFL 99.996511939962 → 99.996511939962 mm; FOPEN 4.5 → 4.5; halfField 36.95759244145292° → 36.95759244145292°; stop radius 9.550146968476541 → 9.550146968476541 mm; paraxial BFD 88.7089 → 88.7089 mm; track 20.0000 → 20.0000 mm; total first-surface-to-image distance 108.708856474 → 108.708856474 mm. Both focus-keyframe probe lines are identical. The sole built-summary change is the intentionally sourced maxFstop 22 → 36 control limit.

Surface audit: OK, no validation errors. Aperture audit: one lens/station within 3% of the stated f-number, zero rim/trace/iris limits and zero failures. Field-coverage audit with --all: one lens/station at ≥99%, zero unsolved and zero skipped. The browser screenshot helper returned thermal-observer and DNS-watch startup errors without producing an image, so rendered-page review could not be completed. No sandbox or approval denial occurred. Full application gates were excluded by this cleanup assignment.

Open: inferred 11.5 mm rims versus the patent figure's approximately 11.8 mm; midpoint 2.7/2.7 mm stop split versus approximately 3.0/2.4 mm in the figure; L4's approximately 0.44 mm edge thickness. These remain for the separate geometry review. The exact production prescription/glass melts, complete nG′ dispersion fit, finite-focus spacings/minimum distance, separate-cell configurations and rendered-page review remain unestablished. The f/36 endpoint is resolved by the cited museum specimen.
