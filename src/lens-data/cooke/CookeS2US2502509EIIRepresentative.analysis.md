# Cooke Speed Panchro Series II 75mm f/2

## Patent reference and design identification

**Patent:** US 2,502,509 A

**Inventor:** Gordon Henry Cook

**Assignee:** Taylor, Taylor & Hobson Limited

**Filed:** 27 December 1948

**Priority:** 29 November 1948 (Great Britain)

**Granted:** 4 April 1950

**Example details:** Example II, normalized f = 1 and relative aperture f/1.86; dimensions converted to millimetres at ×75. Other examples are not merged into it.

The six-element, four-group Example II is strongly associated with the Taylor-Hobson Cooke Speed Panchro Series II 75 mm f/2. The contemporary [Motion Picture Leaflet LEN. 45](https://www.pacificrimcamera.com/rl/02112/02112.pdf) specifies six elements in four groups, 75.00 ±0.75 mm focal length, f/2, and optical back focus 42.60 ±0.75 mm. It places the rear node 32.50 mm in front of the rear glass and the front node 17.00 mm behind the front surface. Example II at ×75 gives 42.72 mm back focus and node positions 32.28 / 17.32 mm, as the independent validator reports.

The leaflet's front/rear clear glass diameters are 38.10 / 22.40 mm; the validator's f/2 beam diameters are 37.5 / 22.6 mm. These agreements support the 75 mm association, without establishing that the patent is the unrounded production prescription. The displayed f/2 is the marketed aperture; the model retains the patent's f/1.86 design aperture. The leaflet does not identify a mount, so none is assigned. The field angles, iris coordinate and clear rims remain inferred.

## Optical architecture and element analysis
Four actual bodies are L1 singlet, L2/L3 cemented pair, L4 singlet, and L5/L6 cemented pair. Both cemented interfaces and all source air separations are retained. L1 is a positive meniscus with nD1.6909/V54.9. L2 has the same nD/V, while its cemented L3 uses1.6227/36. L4 is the negative singlet with1.6535/33.5. Rear cemented L5/L6 use1.6909/54.9 and1.5890/61.4 respectively. These are literal source data, not named modern glass replacements.

High-resolution reinspection confirms both EI and EII print V61.4 for nD1.5890. An earlier research report misread EI as51.4; that claim is superseded, not a genuine source discrepancy. EII's numerical model was already61.4 and did not change. Matching nD/V does not prove an identical historical glass melt. The patent explicitly defines D-line index and Abbe V. Every element now retains the patent's D-line index reference; no measured full spectral curve, exact historical melt or manufacturing tolerance is claimed.

## Focus and scaling
The literal normalized EFL is .999934012431, giving 74.9950509324 mm after ×75 scaling, a −.00659876% residual against nominal 75 mm. All authored optical lengths were multiplied by three from the delivered model using a script, with every ratio checked within six-decimal millimetre rounding. No radii or source glass/air separations are tuned. Terminal image distance is calculated BFL .569548769886 normalized, stored as 42.716158 mm, not a printed BFL. Total track is 93.641158 mm. This is an infinity representative. No factory focusing travel, close-focus motion, mount or near-focus coverage is reconstructed.

## Inferred iris and clear apertures
The patent supplies no numerical iris coordinate or clear diameters. The delivered model placed it at the midpoint of the largest internal airspace S3=.1190, entirely an engineering hypothesis. At ×75, the gap totals 8.925 mm. Clearing the raised L4 rim moves the inferred iris back 0.316914 mm: the 4.4625 / 4.4625 mm split becomes 4.779414 / 4.145586 mm, preserving the total. It is not a source-derived stop.

The first trial imposed one common cap across the two separate central air bodies, yielding10/26 successful sampled on-axis rays. It is preserved as failed. Independent review identified the actual four air-spaced bodies, and applied the same precommitted half-millimeter geometry-grid rule independently to each before the corrected ray trial. Current semi-diameters are 30 / 22.5 / 14.3 / 15 mm across the four bodies, common at all surfaces of each cemented body. The script first scaled L4 from 4.5 to 13.5 mm; the aperture audit then required 14.3 mm on both its faces. Default.9 rim/gap limits and positive stop-plane clearance remain. Independent checks cover the unequal adjacent air-body rims and both cemented interfaces; this is not an unsupported unequal cemented rim or ray-fitted aperture.

Native iris radius 12.7509673021 mm is a model result, not a measured hole. The aperture range throughf/22 is authored convenience, not a verified retail specification.

## Validation and limitations
Independent scoped source-parity, geometry, native construction and isolated strict TypeScript checks pass. Sparse diagnostics use an explicitly assumed20° half-field because no numeric patent field is supplied. The original sparse ray counts are superseded by the rescale audits below. Chief-ray format coverage does not establish full-pupil transmission or factory performance.

These are optical-surface exits, not tested image-plane landing, full pupil integration, throughput percentages or MTF. Significant peripheral clipping remains. No20° coverage or factory performance claim is made. Full current-corpus integration, app tests, lint/format, build, browser and MTF are deferred, not passed. This hidden representative is undelivered and undeployed until batched handoff; it is not a release.

## Sources
- Original patent, complete six pages: https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/2502509
- Taylor-Hobson Motion Picture Leaflet LEN. 45, Series II 75 mm column: https://www.pacificrimcamera.com/rl/02112/02112.pdf

## 2026-11-13 — Rescale and rename

The independent validator re-read the patent page images, checking all ten radii, nine thickness/air-space values and six nD/Abbe pairs in Example II and its claim-16 copy; no transcription mismatch was found. This integration independently rechecked the rendered Example II table on PDF page 3, including nD, V6 = 61.4, the cemented interfaces and S3 = .1190, and read the leaflet image. Verdict: the 75 mm Series II association is strong. The leaflet's six elements/four groups and 42.60 ±0.75 mm back focus, with rear/front nodes 32.50 / 17.00 mm, match the validator's ×75 Example II values 42.72 / 32.28 / 17.32 mm. The delivered 25 mm identification is contradicted by the leaflet's nine-element/seven-group specification for that lens. [Source: Taylor-Hobson LEN. 45](https://www.pacificrimcamera.com/rl/02112/02112.pdf).

- Scale: ×3 from the delivered ×25 prescription to ×75 of normalized f = 1. A script parsed and multiplied every authored R, d (including both stop gaps and the terminal image distance) and sd: 31 optical lengths, each verified within 0.000000501 mm rounding. There were no authored element focal lengths, projection/field lengths, image-circle diameter or explicit stop radius to scale. Indices, Abbe numbers and degree fields are unchanged. The pure-scale derived stop radius is exactly ×3. The only later geometric exceptions are the authorized L4 rims and stop-gap redistribution below.
- First-order results from built.mjs/probe.mjs: EFL 24.9983503108 → 74.9950509324 mm (ratio exactly 3); BFD 14.2387192472 → 42.7161577415 mm; TL 31.2137192472 → 93.641158 mm (rounded stored terminal distance). Glass-only track 16.975 → 50.925 mm. Design f-number 1.860 → 1.860, unchanged in both pure-scale and final models; built iris radius 12.7509673021 mm after the stop move. Infinity image defocus rounds to 0.0000 mm.
- L4 surfaces 6/7: delivered sd 4.5 → scaled 13.5 → final 14.3 mm. The rerun of audit:aperture --raise at ×75 proposes 14.3 mm, the least change at its authored precision (rather than scaling the validator's rounded 4.8 mm proposal to 14.4 mm). The raised rear rim has sag 4.7794132442 mm and would cross the midpoint iris by 0.3169132442 mm. Moving the iris back 0.316914 mm changes the scaled S7/STO split 4.4625 / 4.4625 → 4.779414 / 4.145586 mm, the least positive clearance at six decimals. Clearance is 0.0000007558 mm; total gap remains 8.925 mm. This is an inferred clearance, not a manufacturing tolerance.
- Name: Cooke S2 25mm-scaled f/1.86 (patent EII representative) → COOKE SPEED PANCHRO SERIES II 75mm f/2. Catalog focal length marketing/design 25/25 → 75/75 (traced EFL rounded to two decimals); f-number marketing/design 1.8/1.86 → 2/1.86. imageFormat absent → 35mm-cinema. No mount is asserted: the leaflet names none.
- source.patentNumber: US 2502509 → US 2,502,509 A. Assignees: Taylor, Taylor and Hobson → Taylor, Taylor & Hobson Limited, matching the Aviar. Example absent → { label: "Example II", id: "2" }. All six indexReference values d → D because the patent prints nD and the validator found a d/D separation of 0.00009–0.00017, above print precision. Numerical n/V values remain unchanged.
- Cementing: absent → D1 on L2/L3 and D2 on L5/L6, with doublets annotations spanning surfaces 3–5 and 8–10. File form: corrected relative type import, one source/scaling/inference JSDoc, const LENS_DATA with satisfies, and default export; no object comments. File names, key and visible: false are retained.
- Analysis: replaced the identification with the 75 mm leaflet evidence, updated scale-dependent dimensions and the D-line statement, removed the private Drive link and the unsupported successful on-axis ray claim. Remaining wording is reserved for cleanup. Every existing audit-log line is retained; this section supersedes its old identification, scale and validation claims.
- Audits: audit:surface OK, no validation errors. audit:aperture: one lens/one station within 3% of the stated f-number; zero rim, trace or failed stations. audit:image-circle: one checked, zero undersized, zero skipped. audit:field-coverage --below=1.01 skips the hidden original; the otherwise identical visible scratch copy gives 100% chief-ray coverage, 13.60 / 13.60 mm at about 10.3°, corner clear, zero skipped. This does not measure full-pupil throughput, MTF or production performance.

Open: mount identity remains unverified. The coordinator retains responsibility for file/key renaming; the cleanup pass still has element type labels, inherited Chance/historical-D glass wording, focus.description and analysis voice, and comparison of inferred rims with the patent figure. The assumed 20° half-field is not a printed specification. No full application tests, typecheck, lint, build, metadata generation or server were run, as instructed; the lens remains hidden.
