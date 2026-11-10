## Patent Reference and Design Identification

**Patent:** [JP H08-86961 A](https://patents.google.com/patent/JPH0886961A/en)
**Filed:** 1994-09-20
**Published:** 1996-04-02
**Inventors:** Hideki Nagata, Soh Ohzawa, Hiroyuki Matsumoto, Masakuni Tai
**Applicant:** Minolta Co., Ltd.
**Title:** High-magnification zoom lens (高変倍ズームレンズ)
**Example details:** 実施例2; original PDF pages 3–4, Figure 2 on PDF page 10, Table 1 on PDF page 9. No scaling.

This is a **probable production-family correlation** to the MINOLTA AF 100–400mm f/4.5–6.7 APO, not an established factory prescription. The prescription matches JPH0886962A Example 3 and US5633759A Example 2/Table 2 numerically. The Japanese publication is the transcription source. Published English-family names establish the inventors' Latin spellings.

The association rests on converging evidence:

1. Minolta provenance and a 1994 filing precede the named product documentation.
2. The candidate has 14 elements in 11 air-separated components, matching the named product. The four mechanical units contain 3 + 2 + 6 + 3 elements.
3. Two front elements have n_d = 1.49310 and νd = 83.58. The maker describes two AD elements. This is supporting evidence, not proof that the source glasses have the maker's anomalous partial dispersion.
4. The 102.5–390.1 mm, F4.60–6.62 program and 21.6 mm plotted image height fit the named 100–400 mm full-frame product family.
5. The manufacturer-derived book's named section supports the broad front/middle/rear topology. The section is too small to identify every interface or an iris, and its zoom/focus state is unknown.
6. The retained comparison of 29 nearby example records leaves this 14/11 program as the local finalist. Other 100–400 candidates differ in topology; the original and later 75–300 programs are distinct.

The evidence does not prove exact production identity. Neither the stop coordinate nor physical clear apertures is published for this prescription. Their assumptions remain separate from the product association.

## Optical Architecture

The source is a four-unit **positive–negative–positive–negative** telephoto zoom with 14 glass elements, 11 air-separated components and 25 refracting surfaces. All refracting surfaces are spherical. The modeled air stop adds one non-refracting surface.

| Mechanical unit | Elements | Source surfaces | Role and motion |
| --- | --- | --- | --- |
| Gr1, positive | L1–L3 | 1–5 | Front collecting unit; objectward through the zoom range |
| Gr2, negative | L4–L5 | 6–9 | Negative variator; imageward through the zoom range |
| Gr3, positive | L6–L11 | 10–20 | Compound compensating unit; objectward through the zoom range |
| Gr4, negative | L12–L14 | 21–25 | Rear telephoto unit; objectward through the zoom range |

The source divides Gr3 optically into a negative front subunit and a positive rear subunit. These are not independent movers: every internal Gr3 spacing remains fixed in this model. Only the four complete mechanical units receive movement brackets.

Three printed infinity stations are preserved:

| Printed focal length, mm | F-number | d5, mm | d9, mm | d20, mm |
| --- | --- | --- | --- | --- |
| 102.5 | 4.60 | 3.863 | 56.870 | 25.573 |
| 200.0 | 6.30 | 42.578 | 28.353 | 15.355 |
| 390.1 | 6.62 | 80.664 | 4.600 | 0.999 |

The table does not publish a continuous cam. For the continuous slider, image-anchored positions of Gr1, Gr2 and Gr4 are interpolated separately within wide–middle and middle–tele. Gr3 is solved to retain paraxial infinity focus while preserving its internal prescription. This constrained reconstruction preserves the source's movement directions. It is not a recovered factory cam.

There are 33 controls in one zoom model: the three source rows are explicitly published and the 30 added controls explicitly unpublished. The tested 3/5/9/17/33-control refinement selected 33 to keep sampled between-control axial defocus below 0.06 mm. With only the source rows, linear gap interpolation produces a 7.33 mm maximum focus error. The final 129-position native check bounds that residual at 0.04965 mm. Labels at inferred controls are calculated effective focal lengths, not additional patent values.

## Element-by-Element Analysis

The focal lengths below are calculated isolated thick-lens values in air. For a cemented element they describe its individual shape and index, not its actual in-system interface power. All glass labels are deliberately unmatched.

### L1 — Negative Meniscus

nd = 1.74950, νd = 35.04. Glass: Unmatched (nd 1.74950, νd 35.04). f = -277.2827 mm.

The negative meniscus is cemented to L2. Its relatively high index and lower Abbe number oppose the positive, low-dispersion partner in the front unit.

### L2 — Biconvex Positive

nd = 1.49310, νd = 83.58. Glass: Unmatched (nd 1.49310, νd 83.58). f = +140.2152 mm.

The positive component of the front cemented pair provides collecting power with the first of the two very high-Abbe source glasses.

### L3 — Positive Meniscus

nd = 1.49310, νd = 83.58. Glass: Unmatched (nd 1.49310, νd 83.58). f = +281.3607 mm.

This air-separated positive meniscus completes Gr1 and repeats the high-Abbe material of L2. Its convex side faces the object.

### L4 — Biconcave Negative

nd = 1.71300, νd = 53.93. Glass: Unmatched (nd 1.71300, νd 53.93). f = -59.4921 mm.

The biconcave element supplies the main negative contribution of Gr2. Its large changes in separation from Gr1 and Gr3 provide zoom leverage.

### L5 — Biconvex Positive

nd = 1.75520, νd = 27.51. Glass: Unmatched (nd 1.75520, νd 27.51). f = +114.4653 mm.

The positive Gr2 partner balances the preceding negative element. It is air-separated, not cemented to L4.

### L6 — Biconcave Negative

nd = 1.71300, νd = 53.93. Glass: Unmatched (nd 1.71300, νd 53.93). f = -51.1083 mm.

This biconcave element begins Gr3F. The assumed stop is placed 2 mm before its front vertex, in air.

### L7 — Positive Meniscus

nd = 1.61293, νd = 36.96. Glass: Unmatched (nd 1.61293, νd 36.96). f = +226.4747 mm.

The positive meniscus follows L6 across the printed 1.982 mm air space. Together they form the negative front subunit of Gr3.

### L8 — Biconvex Positive

nd = 1.48749, νd = 70.44. Glass: Unmatched (nd 1.48749, νd 70.44). f = +97.0953 mm.

This biconvex high-Abbe element begins Gr3R and supplies positive relay power.

### L9 — Negative Meniscus

nd = 1.84666, νd = 23.82. Glass: Unmatched (nd 1.84666, νd 23.82). f = -94.9116 mm.

The dense, low-Abbe negative meniscus is cemented to L10. Their common interface is source surface 17.

### L10 — Biconvex Positive

nd = 1.51680, νd = 64.20. Glass: Unmatched (nd 1.51680, νd 64.20). f = +52.1966 mm.

The Japanese source paragraph 0016 and signed radii identify a biconvex positive element. The English-family prose calling it biconcave is not followed.

### L11 — Biconvex Positive

nd = 1.48749, νd = 70.44. Glass: Unmatched (nd 1.48749, νd 70.44). f = +70.3410 mm.

This biconvex element completes Gr3 and uses the same high-Abbe glass pair as L8.

### L12 — Negative Meniscus

nd = 1.75450, νd = 51.57. Glass: Unmatched (nd 1.75450, νd 51.57). f = -56.0000 mm.

This negative meniscus begins Gr4, with its stronger concavity toward the image.

### L13 — Positive Meniscus

nd = 1.67339, νd = 29.25. Glass: Unmatched (nd 1.67339, νd 29.25). f = +36.1997 mm.

The positive meniscus is cemented to L14. Its stronger convex surface faces the image.

### L14 — Biconcave Negative

nd = 1.71300, νd = 53.93. Glass: Unmatched (nd 1.71300, νd 53.93). f = -27.7203 mm.

The final biconcave element supplies the negative partner of the rear cemented pair. The image interval after it is derived, not tabulated.

## Glass Identification and Selection

All 14 source index/Abbe pairs are retained at the d line. The Japanese definition in paragraph 0007 expressly identifies that reference; the English counterpart agrees. There is no catalog-glass substitution and no authored partial-dispersion value or spectral line index.

| Elements | nd | νd | Interpretation |
| --- | --- | --- | --- |
| L1 | 1.74950 | 35.04 | High-index, lower-Abbe front negative partner |
| L2, L3 | 1.49310 | 83.58 | Very high-Abbe front positive elements |
| L4, L6, L14 | 1.71300 | 53.93 | Moderate-dispersion negative elements |
| L5 | 1.75520 | 27.51 | High-dispersion positive variator partner |
| L7 | 1.61293 | 36.96 | Lower-Abbe Gr3F positive element |
| L8, L11 | 1.48749 | 70.44 | High-Abbe Gr3R positive elements |
| L9 | 1.84666 | 23.82 | Dense, high-dispersion negative cemented partner |
| L10 | 1.51680 | 64.20 | Crown-like positive cemented partner |
| L12 | 1.75450 | 51.57 | Rear negative meniscus |
| L13 | 1.67339 | 29.25 | Lower-Abbe rear positive partner |

The relative dispersion pairing supports a chromatic-correction interpretation. Neither a high Abbe number nor the product's APO suffix certifies secondary-spectrum performance. No assertion of fluorite, exact AD material identity, or measured apochromatism is made from these pairs.

## Focus Mechanism

The source tabulates only infinity-focus zoom configurations. There are no published finite spacings or certified finite conjugates in the model.

The optional focus slider is an **inferred front-unit reconstruction**. Gr1 alone moves objectward; d5 increases while every rear unit and the image plane retain their zoom-specific positions. A paraxial scalar solve places the object 2.0 m before the image plane. The resulting Gr1 travel is 12.27884 mm at wide, 12.48586 mm at middle and 12.78226 mm at tele. Each zoom control has nine focus controls: infinity, 16, 8, 16/3, 4, 3.2, 8/3, 16/7 and 2 m. All eight finite controls are unpublished. This is a refinement of the illustrative focus path, not additional source evidence.

The maker's 2 m minimum focus and 0.25× maximum magnification are product context. They do not establish the reconstructed motion or certify its magnification. The model makes no finite-focus MTF certification: no conjugate or published-focus flag is authored. Between-control focus remains illustrative. Across a 129 × 17 zoom/focus grid, the maximum sampled finite-focus interpolation defocus is 0.12012 mm and the maximum distance-label discrepancy is 1.4721%; the 2 m endpoint differs by at most 0.00100 m. A two-control focus path produced 5.30 mm intermediate defocus; 5 and 9 controls reduced the source-station check to 0.454 and 0.120 mm. Nine was retained as a compact refinement, without certifying any finite state.

## Stop, Clear Apertures and Image Reference

The stop is **assumed**, not measured from a source diagram. It is placed 2.000 mm before surface 10 and moves with Gr3. The published d9 is split into d9 − 2.000 and 2.000 mm without changing the optical separation. The iris radius is derived independently from each source f-number; interpolated f-numbers at added controls are not published aperture data. No iris size is represented as a published physical diameter.

All clear semi-diameters are inferred and remain fixed across zoom and focus. The air-separated component radii are 34, 34, 22, 22, 18, 17, 16, 15, 15, 16 and 13.5 mm, front to rear. Shared cemented interfaces use one radius. These are geometrically valid model apertures checked against the native axial and off-axis traces, not measured retail barrel or clear-aperture dimensions. There are no hidden geometry-check overrides, rim cuts or rim extensions.

The terminal image interval is absent from the prescription table. At each printed infinity state it is derived from the unchanged d-line paraxial matrix:

| Station | Traced EFL, mm | Derived BF, mm | Sum of displayed physical intervals, mm |
| --- | --- | --- | --- |
| Wide | 102.546440074 | 37.749942357 | 149.367 |
| Middle | 200.040306775 | 65.120431301 | 149.347 |
| Tele | 390.079970802 | 102.746702534 | 149.324 |

Table 1 prints a wide BF of 37.697 mm, 0.052942357 mm shorter than the derived value. It also prints summed tracks of 149.369 / 149.348 / 149.326 mm, differing by 0.001–0.002 mm from the sum of displayed intervals. These remain explicit unresolved source discrepancies. No radius, glass, thickness or source zoom spacing is adjusted to remove them. The modeled image plane is the stated paraxial interpretation, not a claim that the patent printed that plane.

## Verification Summary

Checks were bounded to this model against the retained 420b475 engine. No whole-catalog suite, publication or deployment is claimed.

- Canonical V2 ingest and geometry validation pass without relaxation.
- All 25 signed radii, 14 material pairs and every printed zoom spacing are preserved; the stop split sums exactly to source d9 at each published row.
- Native axial-aperture checks pass at all 33 controls within the check's 3% tolerance, with no rim-, trace- or iris-limited failures.
- A 129-position zoom grid at 17 focus coordinates has zero hidden render trim. The minimum sampled iris-to-glass clearance through the stroke is 1.38089 mm.
- Native spherical-aberration and exact field bundles were checked at 12 positions, including three positions halfway between authored controls. At every tested position a converged chief ray reaches the source's 21.6 mm image height.
- The 25-sample on-axis and half-field bundles pass at all 12 positions. At the full image-height field, 18–25 samples pass: normal edge clipping remains at the longer focal lengths. No clear apertures were enlarged to force full-field transmission.
- At wide/middle/tele, modeled current-plane axial RMS transverse errors are 21.314 / 1.549 / 10.976 µm. Least-squares best-focus shifts are −0.2986 / −0.0071 / −0.2213 mm. These describe the assumed-stop model at its declared image plane, not measured production performance or retuned source values.
- A separate exact finite-object trace at 16 reconstructed zoom/focus states passes all 25 axial pupil samples at each state. It uses the actual paraxial object point and is not a patent-certified finite configuration.
- Native rendered silhouettes were inspected across zoom. Gr1, Gr3 and Gr4 move objectward; Gr2 moves imageward. Gr3's front/rear optical subunits remain one mover.

The absent source stop, inferred rims, reconstructed cam/focus motion and probable product correlation limit any performance interpretation. The model is a source-traceable reconstruction of one whole published zoom, not an exact retail optical drawing.

## Sources

1. [JPH0886961A](https://patents.google.com/patent/JPH0886961A/en), complete original: numerical Example 2, PDF pages 3–4; definitions paragraph 0007; morphology paragraph 0016; Figure 2, PDF page 10; Table 1, PDF page 9.
2. [JPH0886962A](https://patents.google.com/patent/JPH0886962A/en), Example 3, the numerical counterpart.
3. [US5633759A](https://patents.google.com/patent/US5633759A/en), Example 2/Table 2, English-family witness and Latin inventor names. Its cover identifies both Japanese applications.
4. Konica Minolta AF Lenses brochure, 2004, PDF page 11 / printed pages 18–19: named AF APO TELE ZOOM 100–400, two AD elements, 2.0 m and 0.25×. Retained maker-original custody: [brochure source archive](https://drive.google.com/file/d/1a68PhcZc59aeVZ_jOrTntvEsEDhGNBXZ/view).
5. Manufacturer-derived Minolta book, printed page 111 / PDF page 113: named 100–400 APO, 14/11 and broad optical section. Retained [page-witness archive](https://drive.google.com/file/d/18ER-pg_HI4f2kQhnWK6ugxfLvvBfYzeS/view). The unknown section state is not treated as measured wide-end geometry.
6. Retained [complete-source candidate comparison](https://drive.google.com/file/d/13DctGB3uKfmTIwfRTwstwgNxK9eQB7yy/view) and [research archive](https://drive.google.com/file/d/1dTeviUcD_EtXPmihX33HQZMc1YeVgQBR/view): nearby-program exclusions and shared-table identity.
