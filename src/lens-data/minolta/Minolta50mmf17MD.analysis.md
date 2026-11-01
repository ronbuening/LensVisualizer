# Minolta MD 50mm f/1.7 correlated photographic master — private row1090

## Patent Reference and Design Identification

**Patent:** JP S60-111215 A (JPS60111215A), *Rear conversion lens system*.
**Filed:** 21 November 1983.
**Published:** 17 June 1985.
**Inventor:** Sho Fukushima (福島 省).
**Applicant:** Minolta Camera Kabushiki Kaisha; normalized in the model as Minolta Camera Co., Ltd.
**Example details:** The unnumbered photographic master lens (撮影レンズ例), PDF page4; Figure2 on PDF page6. The numbered Examples1–4 describe converters. Figure4 shows combined-system aberrations and provides no independent standalone-master validation.
**Status:** PRIVATE_QUALIFIED_NATIVE_BUILD; no catalog publication, PR, merge or deployment.

The production correlation rests on a manufacturer-authored system guide listing the Minolta 50mm f/1.7 MD as six elements in five groups, plus the photographic-master prescription's approximate focal length and aperture. Exact factory revision and prescription pairing remain unproven. The guide lists a47° full field,0.45m minimum focus distance,49mm filter and f/1.7–16 range. The prescription instead prints f/1.73 and45.6° full field; these source-design values control the native runs. A filter thread does not establish any optical clear aperture.

This builder received the source worker's completed visual table and Figure2 audit through an exact readable handoff. Its8085 bytes and SHA256 were verified locally. The returned raw-source ZIP host denied transfer with CONNECT403. Neither the patent PDF pixels nor the manufacturer's PDF pixels were inspected locally by this builder. The preserved originals and source audit remain linked in Sources. Their inherited inspection must not be represented as a new local visual audit.

All11 radii,10 published gaps and6 glass coordinates are retained in literal millimetres. R11 is−43.293mm. The old−143.293mm value was a transcription error and is not an alternate prescription. Nothing is scaled to the marketed50mm focal length. The final image gap is independently derived; it is not printed in the master table.

## Optical Architecture

The master is a modified double-Gauss arrangement: three separate front elements, a cemented negative/positive rear pair, and one final positive element. It contains six glass elements, five groups and eleven refracting surfaces. All surfaces are spherical; no plate or asphere is published. The source powered track is34.18mm. The central stop lies in d6 between S6 at z12.31mm and S7 at z23.93mm.

The Figure2 audit places opposed iris glyphs approximately52.1% across that gap. The private baseline uses z18.4mm, bracketed by17.9 and18.9mm;18.12mm is a separately labeled exact-midpoint control. The source d6 stays11.62mm in every case. No broad stop optimization was performed.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd=1.72000, νd=50.31. Glass: Unmatched literal patent coordinate. f=+62.184mm` (standalone in air).

S1–S2 form the first positive collector. Its inferred front/rear clear radii are16.4/15.6mm. The strong object-side curvature and weak rear curvature give its positive paraxial power. This is a structural interpretation, not an independent aberration decomposition.

### L2 — Positive Meniscus

`nd=1.69350, νd=53.39. Glass: Unmatched literal patent coordinate. f=+66.517mm` (standalone in air).

S3–S4 form the second positive meniscus. Its inferred clear radii are15.6/13.8mm. The0.16mm S2–S3 axial spacing is preserved exactly. No glass supplier or historical melt is inferred from a modern coordinate match.

### L3 — Negative Meniscus

`nd=1.67270, νd=32.22. Glass: Unmatched literal patent coordinate. f=−30.704mm` (standalone in air).

S5–S6 form the front negative member bordering the iris cavity. Its inferred clear radii are12.7/12.1mm. The concave rear cap reaches toward the stop, so vertex clearance alone would be insufficient to qualify the iris location.

### L4 — Biconcave Negative

`nd=1.62590, νd=35.70. Glass: Unmatched literal patent coordinate. f=−21.735mm` (standalone in air).

S7–S8 form the negative front member of the cemented pair. The center thickness is0.88mm; inferred clear radii are10.8/11.0mm. S7 reaches forward toward the stop. Its full operating-disk clearance is checked along with S6.

### L5 — Biconvex Positive

`nd=1.69350, νd=53.39. Glass: Unmatched literal patent coordinate. f=+26.023mm` (standalone in air).

S8–S9 form the positive rear member, sharing S8 directly with L4. Inferred clear radii are11.0/12.0mm. Standalone powers describe each element in air and do not give the net cemented-unit power. Native aperture analysis identifies S8 as limiting the axial marginal ray; that clipping remains in the results.

### L6 — Biconvex Positive

`nd=1.78100, νd=44.55. Glass: Unmatched literal patent coordinate. f=+49.841mm` (standalone in air).

S10–S11 form the final positive element, with inferred clear radii11.9/11.8mm. S10 has the weak positive radius374.955mm; S11 uses the verified−43.293mm radius. The source's final glass thickness is2.8mm.

## Glass Identification and Selection

The master table labels N and v without an explicit reference-wavelength subscript. The private data retain the literal values and explicitly qualify the d-line convention. Thus the monochromatic numerical runs use587.5618nm as the engine's reference convention; the patent does not explicitly certify this wavelength for the master table.

No vendor glass, nC/nF/ng values, anomalous partial dispersion or full dispersion model is asserted. Any engine Abbe initialization is a proxy and was not used to claim polychromatic performance. The six standalone focal lengths above were independently computed from each pair of spherical faces and its physical thickness.

## Focusing Mechanism

The patent's dM=7.65mm is real source context for translating the entire photographic master from infinity to a close position in a combined converter experiment. It is not an image gap, and it does not establish a standalone0.45m calibration.

This model authors only static infinity geometry. The manufacturer's0.45m value is metadata. No internal motion law or finite source conjugate is invented; no finite MTF or catalog minimum-focus proof was run. Future finite analysis must derive consistent conjugates and translate the whole master relative to the image and object references.

## Geometry, Stop and Aperture Qualification

Independent reduced-angle matrix and physical-slope propagation agree on EFL51.4982911496mm and BFL36.8837336559mm, with BFL disagreement2.84×10⁻¹⁴mm. The resulting image plane is z71.0637336559mm. Computed power0.0194181201mm⁻¹ differs from the printed0.0194 by0.0000181201mm⁻¹, within a nominal half-unit rounding interval0.00005. This supports transcription consistency; it does not prove commercial identity.

Every unprinted clear radius was frozen before exact native pupil traces: absolute paraxial native axial marginal height×1.10, rounded upward to0.1mm. The complete per-surface ledger is in first-order.json. This applies the current spec's entrance-pupil clearance guidance without treating the patent outline or49mm filter as dimensional aperture data. No radius was enlarged to pass a ray.

The derived native stop radii at z17.9,18.4,18.9mm are10.407343,10.355053,10.302763mm. Analytic monotonic spherical-cap bounds over the complete iris disk give respective S6/S7 clearances of1.587/2.527,2.134/2.067,2.681/1.606mm. The midpoint control has1.828/2.325mm. All remain in air throughout the native iris disk and the smaller stopped-down disks. This is optical disk clearance, not proof of a physical blade assembly.

All four native models build successfully. Native SVG geometry produces six shapes with zero hidden trim. Strict standalone TypeScript checking passes. The candidate is outside the auto-discovered catalog and has visible:false; no catalog integration or browser validation is claimed.

## Bounded Native Pupil and Monochromatic MTF

Pupil checks sample0°,11.4°,22.8° object angles at f/1.73, with208 stop-lattice cells plus7 cardinal controls per field. At z18.4mm,195/157/67 of215 full raw traces are transmitted. The center field has20 clipped samples; the middle has58; the edge has109 clipped and39 pre-stop blocked samples. Those39 blocked inputs retain their native raw failed intersection records. They are already certified blocked by the native aiming solver, so they are not silently counted as numerical unknowns.

An independent analytic sphere/vector-Snell tracer checked2580 archived input rays across the four stop positions. For matching raw statuses, maximum image-intercept difference is8.21×10⁻¹⁴mm. There are161 raw status differences: every one was already marked pre-stop blocked by native aiming, native raw failed, and independently clipped at S1. All differences are retained. This validates intersections and refraction for the reused aimed inputs; it does not independently validate the aiming solver or diffraction kernel.

The final result is the full native monochromatic diffraction calculation through `computeMtfSteps` with `method:"diffraction"`, `spectrum:"reference"` and `focus:"design"`, using the engine's complex sheared-pupil OTF workflow. It is not geometric-only MTF. It uses evenly sampled physical-stop pupils and the unchanged derived infinity image plane. Fields are mapped by image height: chief heights at11.4° and22.8° are approximately10.3641 and21.4556mm for the baseline. MTF fractions are these chief heights divided by the patent-edge chief height; they are not angle fractions or the marketing47° field. Returned angles were explicitly checked against0°,11.4°,22.8°.

The 36×24mm format corner radius is21.63330765mm, distinct from the simulated patent-edge chief height21.45561584mm. The latter is about99.18% of the format-corner radius. The chart's100% field is explicitly the patent22.8° chief height, not the format corner. No result beyond the patent field is asserted.

The initial refinement ladder was16→32→64→128 cells across the pupil, frequencies0–50lp/mm in2lp/mm steps. All three figure-bounded edge cases missed the≤0.01 convergence criterion through50lp/mm at128. One bounded edge-only extension to256 converged all three. The midpoint control converged at128. All final fields have zero failed/unaimed MTF samples and zero unknown in-beam flux. Raw coarse-grid and unconverged results are retained.

At z18.4mm and the derived infinity plane:

| Object angle | Image height mm | Final grid | Valid / blocked | MTF30 S / T |
|---|---:|---:|---:|---:|
|0°|0.0000|64|3072 /156|0.1028 /0.1028|
|11.4°|10.3641|64|2424 /804|0.0669 /0.3035|
|22.8°|21.4556|256|16594 /34874|0.2566 /0.1643|

The edge MTF30 values over z17.9–18.9mm span S0.2561–0.2570 and T0.1641–0.1643. This small bounded stop sensitivity does not remove uncertainty in the inferred clear radii or schematic stop localization.

The separate best-axial diagnostic moves only the analyzed plane by−0.124945835mm. It yields MTF30 S/T0.7106/0.7106 centrally,0.4671/0.3237 at11.4°, and0.1394/0.1644 at22.8°. The central gain accompanies worse sagittal edge contrast. The source prescription and derived infinity BFL were not changed. These are simulated qualified-master curves, not measured production-lens performance.

## Reproducibility and Remaining Limits

All numerical scripts, call counters, source handoff, raw pupil records, refinement histories, independent checks and four scientific figures accompany this pair. The ledger includes806765 actual native exact-trace calls:227151 valid main-run calls,316470 edge-refinement calls,276 build/render/archive-bootstrap calls and262868 rejected exploratory calls. The independent analytic tracer made2580 calls. Per-phase finite limits and all counts are archived; no call limit was exhausted. An isolated extraction successfully built the candidate and loaded native diffraction support/render diagnostics from the archived engine snapshot without node_modules or the parent checkout.

One exploratory harness run incorrectly used last-surface chief height for its MTF field axis. It was rejected in full, retained only under invalid-field-axis, and rerun with true line/image-plane interception. None of its MTF values enters the final figures or tables. The former source-radius transcription error is unrelated and was never reintroduced.

Current release qualifications are exact commercial revision pairing, inferred stop/aperture mechanics, unprinted reference wavelength and full dispersion, and absent calibrated standalone finite conjugates. Original source archives remain on private Drive because local raw materialization was denied. No permission or original-file changes were made.

## Sources

1. [JPS60111215A official record](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-S60-111215/11/ja); [readable patent record](https://patents.google.com/patent/JPS60111215A/en). Master table PDF4; Figure2 PDF6. Source worker visually verified all prescription entries and the iris marks; inherited audit only here.
2. [A Guide to the Minolta SLR System](https://minolta.suaudeau.eu/ressources_iconographiques/system_SLR_MD1.pdf), manufacturer-authored scan, third-party mirror, printed19/PDF21. Source-worker visual verification inherited; exact prescription pairing remains qualified.
3. [Readable source handoff](https://drive.google.com/file/d/1b7Ud8UZs87RvUqyDJbMJWSkUV90Guei1/view),8085 bytes, SHA2567b6488a663153d3f2d16a768ba89f83504f2918350c13726afe5c7888ac8d2f4. Full readable content and hash verified locally.
4. [Source handoff ZIP](https://drive.google.com/file/d/1ohmq22IFG4XXvbzfX_83M1ATP9POO1P6/view),2053838 bytes, inherited SHA256184b5dbf7982c3c80a51395ccb4d5a2de6eabb91da1d21d3fbe8f4968183af83. Metadata read this run; raw host transfer denied, so this builder does not claim a new ZIP hash check.
5. [Original full source archive](https://drive.google.com/file/d/1CqDvnJ1TelJFnJUO2FbNmhDcJ0iI4LZ0/view),8541454 bytes, inherited SHA256713545f4935099eaa3c73c894a04de5efcbcadb6dc720f61cf28a79d7ec12df3. Source worker reports CRC and22 payload hashes passed; original patent SHA2561c6a740b75ac405360c38e9c43b1fb2dc2241f7335d243aba3217872ded18623. Not re-downloaded here.


## Integration metadata and existing infinity-only convention

The fixed infinity prescription uses the established finite closeFocusM=1e15 sentinel with no varying focus gaps. Retail 0.45 m remains descriptive context only. No optical values or the computed image plane change. This unnumbered photographic master is not converter Example 1 and not the sole numerical example in the publication. Following LENS_DATA_SPEC.md, source.example is omitted and the file is recorded in the existing patent-example queue and corpus exception list. No schema or runtime code is changed. Native MTF is a qualified authored-prescription simulation; heavy aperture clipping and all prior failed diagnostics remain. Shared current-main SUMMARY deep-focus URL and BREATHING behavior is reported separately; the sentinel is not claimed to fix those consumers.
