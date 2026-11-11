## Patent Reference and Design Identification

**Patent:** US 2012/0268834 A1  
**Filed:** April 19, 2012  
**Published:** October 25, 2012  
**Priority:** April 22, 2011, JP2011-095966  
**Inventor:** Yoichi Nomura  
**Assignee:** Pentax Ricoh Imaging Company, Ltd.  
**Title:** Photographing lens system  
**Example details:** Tables 1–3, Figure 1; native millimetres, no scaling.

This is a hidden, qualified representative of the PENTAX 01 Standard Prime 8.5mm f/1.9, not a verified factory prescription or release-qualified model. The [complete patent](https://patentimages.storage.googleapis.com/d1/a3/13/8a6db002de4037/US20120268834A1.pdf) supplies the literal optical data.

1. The [official 2011 announcement](https://www.ricoh-imaging.co.jp/japan/news/2011/201109.html) identifies 8.5mm f/1.9 with eight elements in five groups and two aspheric elements.
2. The [contemporary named press section](https://dc.watch.impress.co.jp/docs/news/455172.html) agrees with the distinctive three cemented pairs and rear aspheric structure. It is a press reproduction; manufacturer image credit is not established.
3. The optical architecture and specifications support a probable production family. They do not uniquely select this example among nine alternatives. The official Q catalog's shared optical diagram depicts the 02 zoom and is not used as 01 evidence.

The source half-field is 30.8°, distinct from the original Q product's 49.5° full field and the later Q7-era 58° specification. No crop or distortion explanation is asserted as proven. Table F1.9 and diagram F1.93 are retained as a source discrepancy.

## Optical Architecture

A positive front group contains a negative singlet and two cemented pairs. An explicit diaphragm at z=13.457mm separates it from a rear cemented pair and final positive aspheric singlet. The eight powered glasses form five groups. Two further plane-parallel camera components, optical filter OP and cover glass CG, are retained physically and are not counted as taking-lens elements.

All 18 source rows are retained. Source dB=0.53mm is placed after the last camera plate: total axial track through the plates is 30.768mm, giving a fixed image plane z=31.298mm, consistent with rounded source L=31.30. This interpretation is numerically supported, although paragraph 0057's generic backfocus definition refers to the last powered element. Computed EFL is 8.500681449mm; residual focus after the last plate is 0.529877363mm. The powered-element-to-image distance including plates is 7.794mm, not 0.53mm. No refocus or nominal rescaling is applied.

Clear apertures are figure-derived estimates, not tabulated factory dimensions. Figure 1's first/last plate vertex span of 1036 pixels is mapped to 30.768mm; per-face smaller rim extents are rounded down to 0.01mm. Approximate three-pixel pick uncertainty is 0.09mm, in addition to schematic distortion. The native engine derives iris size from nominal F1.9 at the published station. Neither caps nor iris were fitted to ray outcomes.

## Element-by-Element Analysis

The roles below follow the patent's description, not an assertion that isolated-element powers equal their cemented in-situ powers.

|Element|Source n_d|V_d|Form and role|
|---|---:|---:|---|
|L1|1.51680|64.2|Negative front singlet; part of the patent's compact positive front group|
|L2|1.59551|39.2|Negative component of first cemented pair; patent associates its concave object-side form with astigmatism correction|
|L3|1.88300|40.8|Positive partner; patent associates its convex object-side form with spherical aberration and coma correction|
|L4|1.77250|49.6|Positive component of second front cemented pair|
|L5|1.58144|40.9|Negative partner with concave image-side face|
|L6|1.76182|26.6|Negative component of rear cemented pair; patent describes negative spherical-aberration contribution|
|L7|1.75501|51.2|Positive partner with image-side asphere; spherical-aberration and coma correction described by patent|
|L8|1.80610|40.7|Positive double-aspheric rear singlet and designated focusing element|
|OP|1.51680|64.2|0.55mm plane-parallel camera optical filter|
|CG|1.51680|64.2|0.50mm plane-parallel camera cover glass|

## Glass Identification

The model uses the source helium d-line indices and Abbe numbers directly. No modern catalog match, melt identity, coating, transmission spectrum or measured partial dispersion is established. Dispersion outside the source constants is an engine-model inference. The two camera plates retain their own source thicknesses and glass constants rather than being collapsed into air or a single equivalent plate.

## Focus Mechanism

Paragraph 0055 states that L8 moves toward the object to focus nearer. The source used here supplies the infinity configuration but not a complete numerical travel law. The model therefore uses the supported static infinity-only sentinel, not a simulated retail minimum-focus claim. The final image gap stays 0.53mm.

Focused diagnostic results use 25 pupil-grid samples plus a separate chief ray, with the center represented twice: at 0°, 26 reach; at 12°, 25 reach and one clips; at the original-Q 24.75° edge, 14 reach and 12 clip. A separate source-field-only diagnostic at 30.8°, with identical optics and caps, has six reaching and twenty clipping. All tested chief rays aim and reach. These small-grid counts are not illumination percentages, full MTF validation or a factory-performance claim. Edge clipping remains material and requires explicit qualification.

Strict isolated TypeScript and native construction checks pass without overrides. Full corpus integration, rendered viewer comparisons, comprehensive geometry/pupil/field and chromatic acceptance have not been completed. The lens remains hidden and is not a finished delivery.

## Aspherical Surfaces

Source surfaces 12, 13 and 14 use the patent's conic-plus-even-polynomial equation with K=0 and the published A4, A6 and A8 coefficients unchanged. S12 is L7's rear face; both L8 faces are aspheric. Thus three aspheric surfaces occur on two elements, consistent with the maker's element-level count. Unlisted higher orders are zero by the equation's truncation, not fitted corrections. The patent describes decreasing peripheral positive power at L7's rear face; no extra asphere is invented.
