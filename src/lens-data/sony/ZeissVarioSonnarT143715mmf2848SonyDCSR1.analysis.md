## Patent Reference and Design Identification

**Patent:** US 2008/0218875 A1 — *Zoom Lens System and Imaging Device*  
**Application Number:** US 11/885,365  
**Priority:** 2005-03-11 — JP 2005-068901  
**Filed:** 2006-02-15 — PCT/JP2006/302662  
**Published:** 2008-09-11  
**Inventors:** Daisuke Kuroda; Masafumi Sueyoshi; Kazuya Watanabe  
**Assignee on the supplied US publication:** none printed  
**Embodiment analyzed:** Example 1, Figures 1–4 and Tables 1–3  
**Production correlation:** Carl Zeiss Vario-Sonnar T* 14.3–71.5 mm f/2.8–4.8 in the Sony Cyber-shot DSC-R1; strong correlation, not manufacturer confirmation that Example 1 is the exact production prescription

The implemented prescription is the first numerical example of US 2008/0218875 A1. The patent describes a six-functional-group zoom with refractive-power sequence positive–negative–positive–negative–positive–negative, with the fourth group used for focusing. Figure 1 shows those six moving groups, the iris within the third-group region, the sixth group adjacent to the rear filter stack, and the final image plane. The numerical prescription is given in Tables 1–3. (US 2008/0218875 A1, Fig. 1; ¶¶0030, 0054–0061; PDF pp. 2, 18–19.)

The selected production correlation is supported by several converging facts, but it remains a correlation rather than a manufacturer-published patent mapping:

1. Sony specifies the DSC-R1 lens as a Carl Zeiss Vario-Sonnar T* with **10 groups / 12 elements**. Example 1 contains twelve patent-labeled lenses, G1–G12, arranged as ten air-separated physical optical groups. The six GR1–GR6 labels in the patent are moving functional groups, not the same count as the manufacturer’s ten physical air-separated groups. (Sony DSC-R1 archived specifications; US 2008/0218875 A1, ¶0056 and Table 1.)
2. Sony specifies **three aspherical lenses plus one double-sided aspherical lens**. Example 1 contains four physical lenses with aspheric surfaces: G3, G5, G7, and G9; G9 is aspheric on both faces. This yields five aspheric surfaces in the numerical prescription. (Sony DSC-R1 archived specifications; US 2008/0218875 A1, Tables 1 and 3.)
3. The patent design spans 14.71–69.8725 mm at published FNo 2.8501–5.0545, while Sony markets the production lens as 14.3–71.5 mm f/2.8–4.8. These are close but not identical, and the two endpoint focal lengths do not admit one uniform scale factor. The data therefore preserves the patent prescription unscaled and stores marketed and design values separately. (US 2008/0218875 A1, Table 2; Sony DSC-R1 specifications.)
4. The patent expressly targets a compact integrated-lens digital still camera with high-speed autofocus, while the DSC-R1 is a fixed-lens digital camera. The patent priority date, 2005-03-11, also precedes Sony’s 2005-09-13 DSC-R1 announcement. (US 2008/0218875 A1, ¶¶0003, 0009–0014; Sony press release, 2005-09-13.)
5. External bibliographic and assignment records associate this patent family with Sony Corporation and Tamron Co., Ltd. The supplied US A1 front page itself does not print an assignee, so the structured `patentAssignees` field remains empty rather than converting later bibliographic evidence into a source-publication assertion.

Sony’s production specifications give a 21.5 × 14.4 mm CMOS sensor. The LensVisualizer record maps that camera to the project’s canonical `aps-c` taxonomy class, but the taxonomy’s nominal APS-C dimensions are not presented as the DSC-R1’s exact sensor dimensions. Sony also gives 14.3–71.5 mm, f/2.8–4.8, and macro focus limits of approximately 0.35 m at wide and 0.40 m at tele. Those manufacturer values remain separate from the patent design quantities and do not define an unprinted Example 1 focus state.

## Optical Architecture

Example 1 is best described as a **six-moving-group positive–negative–positive–negative–positive–negative zoom**. That description follows the patent directly and avoids assigning a classical prime-lens architecture to a system whose marketed “Vario-Sonnar” name is a product designation rather than a prescription taxonomy. (US 2008/0218875 A1, ¶¶0030–0034, 0056.)

The physical source design contains **12 lens elements in 10 air-separated groups**. The implemented `elements` array contains 14 entries because two physical composite-asphere lenses, G3 and G5, each contain a thin second optical medium that must be represented explicitly to preserve the source index transitions. The physical `elementCount` remains 12. This model split does not imply fourteen manufactured lens blanks.

The verified isolated functional-group powers are:

| Functional group | Patent role | Isolated EFL (mm) | Power (D) |
|---|---|---:|---:|
| GR1 | positive front group | +135.531312 | +7.378369 |
| GR2 | negative group | -20.014183 | -49.964568 |
| GR3 | positive group containing the iris region | +22.230043 | +44.984168 |
| GR4 | single negative focusing group | -34.620148 | -28.884914 |
| GR5 | positive aspheric group | +47.672640 | +20.976392 |
| GR6 | net-negative rear group | -110.531431 | -9.047200 |

These values are isolated-group first-order powers computed from the final parsed data. They are not interchangeable with the standalone powers of individual elements or with the in-situ full-system EFL.

The zoom is represented by the three patent-published infinity-focus states at 14.71, 32.0597, and 69.8725 mm. Relative to the fixed image plane, the verified wide-to-tele group motions are GR1 −37.029 mm, GR2 +5.427 mm, GR3 −30.058 mm, GR4 −31.451 mm, GR5 −30.058 mm, and GR6 −19.801 mm, with negative sign denoting motion toward object space in that reference frame. GR3 and GR5 track together to within 0.001 mm in the rounded published states, consistent with the patent’s statement that they should move together. (US 2008/0218875 A1, ¶0040; Stage 2 verified result `FACT_STAGE2_MOVEMENT`.)

The patent also states that GR1 should reverse direction somewhere along the continuous zoom path, first moving imageward and then objectward. The three Table 2 states do not locate that reversal. The LensVisualizer interpolation therefore reproduces the three published control states only; it must not be interpreted as a recovered production cam law. (US 2008/0218875 A1, ¶0047.)

The spacing around GR4 has the published sequence D18 = 6.037 → 5.394 → 7.430 mm from wide through intermediate to tele. That decrease and subsequent increase is exactly the pattern the patent describes for the GR4–GR5 separation. The patent associates this spacing strategy with control of focus-related field-curvature and spherical-aberration fluctuations; the implemented data verifies the kinematics but does not independently decompose those aberrations by group. (US 2008/0218875 A1, ¶¶0033, 0048–0050; Table 2.)

The source also includes a rear low-pass/filter plate train at surfaces 26–29. Those plates are excluded from the ordinary LensVisualizer lens prescription under the current data rules. Their optical-path contribution is retained by replacing D25 with an air-equivalent distance to the same image plane:

`D25_model = D25_source + 2.010/1.5523 + 2.100 + 0.500/1.5567 + 1.000`.

The fixed addition is 4.716045065 mm, giving implemented surface-25-to-image spacings of 6.716045065, 14.651045065, and 26.517045065 mm at the three published zoom states.

## Element-by-Element Analysis

### G1 — Positive Meniscus, GR1

**nd = 1.5891, νd = 61.253. Glass: 589613 class, supplier unresolved. f = +135.531 mm.**

G1 is the sole physical lens in GR1. Its optical role can be stated securely at group level: it forms the front positive section of the six-group zoom and participates in the large axial motion required by zooming. The patent does not attribute a specific isolated aberration correction to G1, so no more specific causal claim is assigned here. (US 2008/0218875 A1, ¶0056.)

The manufacturer’s ten-group count treats G1 as one physical air-separated group. Its moderate positive standalone power is distinct from the much stronger negative power that follows in GR2.

### G2 — Negative Meniscus, front member of GR2

**nd = 1.7725, νd = 49.600. Glass: 773496 class, supplier unresolved. f = -25.460 mm.**

G2 begins the negative second functional group. It is spherical in Example 1. The patent’s explicit wide-angle correction rationale for GR2 is tied to placing an aspheric surface in that group; in Example 1 that asphere belongs to the following physical lens G3, not to G2. Accordingly, G2 is treated structurally as a negative member of GR2 rather than being credited independently with the group’s distortion/coma correction. (US 2008/0218875 A1, ¶0051; Tables 1 and 3.)

### G3 — Composite-Asphere Negative Lens, GR2

The physical patent lens G3 is represented by two model entries because the prescription has a 1.7725 medium followed by a 0.200 mm layer of index 1.5361 before the aspheric air interface:

- **G3b:** nd = 1.7725, νd = 49.600. Glass: 773496 class, supplier unresolved. Model-entry f = -47.794 mm.
- **G3c:** nd = 1.5361, νd = 41.207. Glass: Unmatched composite-asphere layer; bulk supplier unresolved. Model-entry f = -161.873 mm.

The verified physical composite span has an isolated net EFL of **-36.891 mm**. This net value is the meaningful standalone power of the physical G3 assembly; the two model-entry powers describe the separated media used to reproduce the source refractions.

Surface 7A is the aspheric outer surface of this composite lens. In the numerical sequence it is G3’s rear/image-side surface, although ¶0056 calls G3’s composite asphere object-side; Tables 1 and 3 both place the asphere at surface 7, so the numerical tables control the transcription and the prose-side disagreement is retained as a source discrepancy. The patent recommends an asphere in GR2 for distortion and coma correction at the wide end. That statement supports a group-level role for G3’s asphere, but it does not establish the fraction of correction supplied by G3 relative to the rest of GR2. (US 2008/0218875 A1, ¶0051; ¶0056; Tables 1 and 3.)

### G4 — Positive Meniscus, rear member of GR2

**nd = 1.9229, νd = 20.880. Glass: 923209 class, supplier unresolved. f = +60.963 mm.**

G4 closes GR2 as a positive member after two negative physical lenses. Its high index and low Abbe number are source properties, but the patent does not isolate a specific chromatic or monochromatic correction task for this element. The defensible statement is therefore architectural: G4 is part of the net-negative GR2 whose isolated EFL is -20.014 mm.

### G5 — Composite-Asphere Positive Lens, front of GR3

The physical G5 lens is also split into two model entries:

- **G5c:** nd = 1.5146, νd = 49.961. Glass: Unmatched composite-asphere layer; bulk supplier unresolved. Model-entry f = +319.907 mm.
- **G5b:** nd = 1.6180, νd = 63.396. Glass: 618634 class, supplier unresolved. Model-entry f = +31.372 mm.

The verified physical composite span has an isolated net EFL of **+28.697 mm**. Surface 10A is the outer composite-asphere surface. The source describes G5 as a convex lens with a composite aspheric surface and places it at the front of positive GR3, ahead of the iris. (US 2008/0218875 A1, ¶0056.)

Because the patent does not assign a unique aberration term to G5 alone, the analysis does not infer one solely from its positive power or high-νd carrier glass.

### G6 + G7 — Cemented pair in GR3

**G6:** nd = 1.9037, νd = 31.319. Glass: 904313 class, supplier unresolved. f = -19.496 mm.  
**G7:** nd = 1.6230, νd = 58.122. Glass: 623581 class, supplier unresolved. f = +14.750 mm.

G6 and G7 form the cemented pair that completes GR3. Their verified isolated cemented net EFL is **+58.013 mm**. That net power is distinct from either member’s standalone power and from GR3’s overall +22.230 mm isolated EFL.

The numerical tables place the G7 asphere at source surface 16, implemented as 16A. There is a source-text conflict here: ¶0056 describes G7 as having an aspheric surface on its “object side,” but Table 1 marks surface 16 as ASP and Table 3 supplies the surface-16 coefficients. Since G7 spans source surfaces 15–16, surface 16 is its rear/image-side surface in the sequential prescription. The model follows the mutually consistent numerical tables and preserves the prose disagreement as a source discrepancy rather than silently rewriting it.

The patent’s broader discussion of GR3, GR4, and GR5 focuses on their spacing and focus/zoom interaction rather than assigning a separate aberration function to the G6/G7 cemented pair. (US 2008/0218875 A1, ¶¶0033, 0040, 0056; Tables 1 and 3.)

### G8 — Biconcave Negative Focusing Lens, GR4

**nd = 1.9037, νd = 31.319. Glass: 904313 class, supplier unresolved. f = -34.620 mm.**

G8 is the complete fourth functional group and is the patent’s focusing lens. The patent deliberately specifies a single negative lens for GR4 and gives design conditions on its focal length, refractive index, and Abbe number. It explains that a one-lens focus group reduces moving mass and required travel compared with focusing a larger front group. (US 2008/0218875 A1, ¶¶0035–0039.)

The verified isolated EFL of -34.620 mm yields `|fg4/fw| = 2.351438` when paired with the recomputed wide-state EFL. That satisfies the patent’s required interval 1.5 < |fg4/fw| < 3.5. The data does not invent a close-focus displacement for G8 because the selected example publishes no numerical close-focus state.

### G9 — Double-Sided Aspheric Positive Lens, GR5

**nd = 1.5831, νd = 59.461. Glass: 583595 class, supplier unresolved. f = +47.673 mm.**

G9 is the sole physical lens of positive GR5 and is aspheric on both surfaces, 19A and 20A. The patent explicitly states that placing asphericity in GR5 assists correction over both object-distance change and zoom-ratio change. That is a source-stated design role, not an inference from power sign. (US 2008/0218875 A1, ¶0046; Table 3.)

GR5 also moves with GR3 during zooming. The verified movement difference between GR3 and GR5 is at most 0.001 mm across the rounded published states, consistent with the patent’s common-cam description. (US 2008/0218875 A1, ¶0040.)

### G10 + G11 — Cemented pair at the front of GR6

**G10:** nd = 1.8350, νd = 42.984. Glass: 835430 class; current-catalog identity unresolved. f = -21.803 mm.  
**G11:** nd = 1.8467, νd = 23.785. Glass: 847238 class, supplier unresolved. f = +89.359 mm.

The cemented G10/G11 pair has a verified isolated net EFL of **-30.273 mm**. The sign of that net cemented power should not be confused with GR6’s complete in-situ function, because G12 follows as another positive lens and the full isolated GR6 EFL is -110.531 mm.

The patent describes the sixth group generally as including negative and positive lenses in that order and discusses its image magnification as part of the compact rear-group strategy. It does not assign a separate aberration term to G10 or G11 individually, so their roles are kept at the cemented-pair and functional-group level. (US 2008/0218875 A1, ¶¶0043–0045, 0056.)

### G12 — Rear Biconvex Positive Lens within GR6

**nd = 1.9229, νd = 20.880. Glass: 923209 class, supplier unresolved. f = +47.911 mm.**

G12 is the final physical lens before the omitted low-pass/filter plate train. Although G12 is positive by itself, the complete GR6 remains net negative. At the tele state, the verified sixth-group lateral magnification is **1.398948**, satisfying the patent’s condition 1.1 < βtg6 < 2.0. (US 2008/0218875 A1, ¶¶0043–0045; Table 11; Stage 2 `FACT_STAGE2_CONDITIONS`.)

The patent associates the rear-group form with controlling marginal-ray behavior, distortion, and chromatic aberration while enlarging the image. Those are patent-stated group-level objectives; the analysis does not assign them specifically to G12 without a separate aberration decomposition.

## Glass Identification and Selection

The patent provides only d-line refractive indices and Abbe numbers. It does not name glass suppliers, publish per-element C/F/g indices, or provide `dPgF`. The final data therefore uses supplier-neutral six-digit classes or explicit `Unmatched (...)` labels rather than asserting a particular vendor melt.

| Stored class / status | nd | νd | Physical use |
|---|---:|---:|---|
| 589613 class | 1.5891 | 61.253 | G1 |
| 773496 class | 1.7725 | 49.600 | G2, G3 carrier |
| Unmatched composite layer | 1.5361 | 41.207 | G3 composite layer |
| 923209 class | 1.9229 | 20.880 | G4, G12 |
| Unmatched composite layer | 1.5146 | 49.961 | G5 composite layer |
| 618634 class | 1.6180 | 63.396 | G5 carrier |
| 904313 class | 1.9037 | 31.319 | G6, G8 |
| 623581 class | 1.6230 | 58.122 | G7 |
| 583595 class | 1.5831 | 59.461 | G9 |
| 835430 class, current identity unresolved | 1.8350 | 42.984 | G10 |
| 847238 class | 1.8467 | 23.785 | G11 |

The Stage 1 catalog review found coordinate-compatible modern candidates for several of these classes across SCHOTT, OHARA, HOYA, and HIKARI catalogs, frequently with more than one plausible vendor equivalent. That multiplicity is precisely why the production file does not promote any one candidate to a supplier identity. The 835430 coordinate remains especially unsuitable for a confident modern catalog name, and the two 0.200 mm composite-asphere media are retained as unmatched thin layers rather than being forced onto bulk-glass catalog entries.

No APO, anomalous-partial-dispersion, or secondary-spectrum claim is made. With only `nd`/`νd` source data and supplier-neutral class labels, the model does not have the line-index or validated Sellmeier evidence required for such statements.

## Focus Mechanism

The patent uses **inner focusing by axial translation of GR4**, which in Example 1 is the single biconcave negative lens G8. The patent explains that the small single-lens focus group is intended to reduce moving mass and travel while supporting faster autofocus. (US 2008/0218875 A1, ¶¶0035–0039.)

The selected numerical example, however, publishes only three **infinity-focus** zoom states. It does not publish G8 travel versus object distance, a close-focus spacing table, or a solved macro state. The implemented focus status is therefore **NO_INTERNAL_RECONSTRUCTION**. Every `var` focus pair is identical, so the viewer does not simulate internal focus motion.

The required `closeFocusM` field is set to 0.35 m because Sony publishes approximately 35 cm at the wide end in macro AF; Sony also publishes approximately 40 cm at tele. These are production-camera specifications, not numerical Example 1 conjugates. They do not supply enough information to reconstruct the internal GR4 position uniquely, and the data deliberately does not treat them as such.

The absence of a close-focus model also means that no numerical claim is made here for focus breathing, close-range aberration change, or actual GR4 focus travel. The patent’s statements about those behaviors remain source design objectives unless and until a constrained reconstruction is solved separately.

## Aspherical Surfaces

Example 1 uses five numerical aspheric surfaces: **7A, 10A, 16A, 19A, and 20A**. The source equation is the standard rotationally symmetric conic-plus-even-polynomial form

`x = (y²c) / [1 + sqrt(1 - (1 + K)y²c²)] + Σ A_i y^i`,

with `c = 1/R`. The patent therefore uses the same `(1 + K)` convention as LensVisualizer, and the conic constants are stored without remapping. The published nonzero polynomial orders are A4, A6, A8, and A10. (US 2008/0218875 A1, ¶0055; Table 3.)

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 7A | -1.092E-01 | -2.822E-05 | -6.366E-08 | +6.44E-11 | -7.54E-13 |
| 10A | 0 | -2.071E-05 | -2.457E-08 | -3.06E-10 | +2.03E-12 |
| 16A | +2.549E-01 | +3.840E-06 | -2.542E-08 | -2.74E-09 | +2.67E-11 |
| 19A | 0 | +2.296E-05 | -4.800E-07 | +9.29E-09 | -1.23E-10 |
| 20A | 0 | +6.366E-06 | -6.296E-07 | +1.12E-08 | -1.35E-10 |

The patent prose contains three asphere-location inconsistencies that are preserved rather than silently normalized. First, ¶0061 lists the fifth asphere as the “12th” surface, while Tables 1 and 3 both identify surface 20. Second, ¶0056 describes G3’s composite asphere as object-side, whereas Tables 1 and 3 place it on surface 7, the rear/image-side surface of G3 in the numerical sequence. Third, ¶0056 similarly describes the G7 asphere as object-side, whereas Tables 1 and 3 place it on surface 16, the rear/image-side surface of G7. The implementation follows the mutually consistent numerical tables in all three cases.

The patent does not publish clear apertures. The data therefore uses modeled semi-diameters, and asphere departures are quoted only at those modeled apertures. The verified departures from the same-radius sphere are:

| Surface | Modeled semi-diameter (mm) | Departure from same-radius sphere (mm) |
|---|---:|---:|
| 7A | 13.500 | -1.566240 |
| 10A | 8.300 | -0.110061 |
| 16A | 6.300 | -0.000070 |
| 19A | 8.300 | -0.029576 |
| 20A | 8.400 | -0.147978 |

Surface 16A is the only positive-K conic in the example. Its modeled 6.3 mm semi-diameter remains comfortably inside the mathematical conic domain, and its total departure from the same-radius sphere is very small at that aperture. These departures are model-geometry results, not patent-published clear-aperture data.

The physical construction is mixed: G3 and G5 are expressly described as composite aspheres and are represented with thin distinct optical layers; G7 carries one geometric asphere; and G9 is a conventional single-medium lens with aspheric surfaces on both faces. (US 2008/0218875 A1, ¶0056; Tables 1 and 3.)

## Conditional Expressions

The patent gives eleven conditions governing the group motions, focus group, back focal relation, sixth-group magnification, and GR4–GR5 spacing. All eleven are satisfied by the final parsed model. Conditions (6) and (11) do not reproduce the patent’s printed Table 11 values to the last digits from the rounded Tables 1–2, but both the printed and independently recalculated values remain inside their required ranges. No source radius or spacing was altered to force agreement.

| Condition | Requirement | Final-model value | Patent printed value | Result |
|---|---|---:|---:|---|
| (1) | DW(1–2) < DT(1–2) | 1.000 < 43.456 | same | pass |
| (2) | DW(2–3) > DT(2–3) | 36.851 > 1.366 | same | pass |
| (3) | DW(3–4) > DT(3–4) | 3.937 > 2.544 | same | pass |
| (4) | DW(4–5) < DT(4–5) | 6.037 < 7.430 | same | pass |
| (5) | DW(5–6) < DT(5–6) | 4.829 < 15.086 | same | pass |
| (6) | 1.5 < \|fg4/fw\| < 3.5 | 2.351438 | 2.336 | pass |
| (7) | 1.8 < Ndg4 | 1.9037 | 1.904 | pass |
| (8) | 25 < Vdg4 | 31.319 | 31.319 | pass |
| (9) | 0.2 < Twbf/fw < 1.2 | 0.456161 | 0.457 | pass |
| (10) | 1.1 < βtg6 < 2.0 | 1.398948 | 1.394 | pass |
| (11) | 3 < \|fg4/DT(4–5)\| < 6 | 4.659508 | 4.625 | pass |

The discrepancies in (6) and (11) are retained as source-precision/internal-derivation limitations. The values in Table 11 were evidently derived from design precision not fully preserved in the rounded public tables, or from an internal definition not recoverable from the printed precision. The independently calculated rounded-table values do not justify changing the prescription. A separate prose conflict occurs in ¶0039: its explanatory sentence says a value of Vdg4 larger than 25 is undesirable, opposite to the printed condition (8), `25 < Vdg4`, and Table 11’s Example 1 value of 31.319. The inequality and numerical table are mutually consistent and therefore control; no prescription value is altered. (US 2008/0218875 A1, ¶0039; Tables 10–11.)

## Verification Summary

The final `.data.ts` was parsed as the implemented model rather than re-entered into a separate calculation copy. Sequential height/reduced-angle tracing and an independent ABCD implementation reproduce the three design states with mutual matrix agreement better than 1e-12.

| State | Parsed-model EFL (mm) | Patent f (mm) | BFL from surface 25 (mm) | Implemented surface-25→IMG (mm) |
|---|---:|---:|---:|---:|
| Wide | 14.722970 | 14.7100 | 6.797209 | 6.716045 |
| Intermediate | 32.075652 | 32.0597 | 14.670645 | 14.651045 |
| Tele | 69.853197 | 69.8725 | 26.397504 | 26.517045 |

The corresponding normalized surface-1-to-image tracks are 113.606045, 121.394045, and 150.635045 mm. The ratios `TL/EFL` are approximately 7.72, 3.78, and 2.16, so the project’s strict `TL/EFL < 1` architectural criterion is not met at any state. `BFD > EFL` is also not met, so the design is not labeled retrofocus under the project definition.

The iris axial plane is source-published, but its diameter is not. The model uses a common **6.5985 mm stop semi-diameter**, calibrated to the three patent FNo states. With that common modeled stop, the recomputed maximum-aperture f-numbers are **2.864678, 3.717422, and 5.037302**. These are stored as `nominalFno`; matching the target f-number is calibration evidence, not independent evidence of the production diaphragm diameter.

The corresponding paraxial entrance-pupil radii are 2.569742, 4.314234, and 6.933592 mm from wide to tele. Their planes lie 25.071189, 55.696224, and 107.637386 mm objectward of surface 1. These are model-derived pupil quantities tied to the calibrated stop, not manufacturer specifications.

The patent publishes no semi-diameters. The implemented apertures are estimates reviewed against local Fig. 1. G3/G4 and the rear groups were enlarged to match the optical outlines, with G3 capped to preserve positive composite-layer edge thickness and G9 capped before surface 19A turns over. Repository surface validation checks edge thickness, rim slope, conic domain and shared-gap clearance; the image-circle audit checks the rear aperture floor. These checks do not establish production clear apertures or reproduce the patent performance curves.

The final parsed Petzval sum is **0.001306562050 mm⁻¹**, evaluated surface by surface as `φ/(n·n′)`. This is a first-order curvature diagnostic of the implemented refracting surfaces; it is not a direct measurement of final field curvature after all higher-order aberrations.

## Sources and References

1. **Kuroda, Daisuke; Sueyoshi, Masafumi; Watanabe, Kazuya.** “Zoom Lens System and Imaging Device.” US 2008/0218875 A1, published 2008-09-11. Primary prescription source. Example 1: Fig. 1 and Tables 1–3; conditional values: Tables 10–11.
2. **Sony Japan.** “DSC-R1 主な仕様.” Archived product specifications. <https://www.sony.jp/cyber-shot/products/archive/DSC-R1/spec.html>. Product name, sensor, 10-group/12-element construction, asphere count, marketed focal length/aperture, and focus-distance specifications.
3. **Sony Marketing (Japan) Inc.** DSC-R1 launch release, 2005-09-13. <https://www.sony.jp/CorporateCruise/Press/200509/05-0913B/>. Production identity, 21.5 × 14.4 mm CMOS sensor, 24–120 mm equivalent range, f/2.8–4.8, and announcement timing.
4. **Sony UK.** “DSC-R1 Specifications.” <https://www.sony.co.uk/electronics/support/compact-cameras-dsc-r-series/dsc-r1/specifications>. Marketed 14.3–71.5 mm focal length and macro focus distances.
5. **SCHOTT Advanced Optics.** Optical Glass Collection and N-PSK53A product data, consulted for coordinate matching during the dossier glass audit.
6. **OHARA Corporation.** S-LAH, S-BSM, and detailed optical-glass data, consulted for coordinate matching during the dossier glass audit.
7. **HOYA Corporation Optics Division.** Molded-lens material and legacy optical-glass coordinate data, consulted for coordinate matching during the dossier glass audit.
8. **HIKARI Glass / Nikon Corporation.** J-series LASF, SK, and SF optical-glass catalog data, consulted for coordinate matching during the dossier glass audit.
9. **Companion verified model records:** `ZeissVarioSonnarT143715mmf2848SonyDCSR1.data.ts`, `ZeissVarioSonnarT143715mmf2848SonyDCSR1.results.json`, and the consolidated audit in the same dossier. Computed values in this analysis are drawn only from the verified final data revision and its executed verifier outputs.

The catalog groups this Sony camera lens under Sony and preserves ZEISS Vario-Sonnar T* branding in the display name. Camera-family correlation and patent-assignee metadata remain separate from that manufacturer attribution.
