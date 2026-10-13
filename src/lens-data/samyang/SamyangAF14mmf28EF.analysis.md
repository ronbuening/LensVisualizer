# Samyang AF 14mm F2.8 EF — Example 3 optical analysis

## Patent Reference and Design Identification

**Patent:** KR 10-1918210 B1  
**Application Number:** 10-2017-0053558  
**Filed:** 2017-04-26  
**Registered:** 2018-11-07  
**Published:** 2018-11-14  
**Inventors:** Jae Myung Yu (유재명), Hae Jin Lee (이해진), Jung Du Lee (이정두)  
**Applicant:** Samyang Optics Co., Ltd.  
**Title:** Lens optical system and photographing apparatus having the same  
**Embodiment analyzed:** Numerical Example 3, Tables 7–9, Figure 7, system 100-3

This model transcribes Numerical Example 3 without scaling. Its link to the Canon EF version of the Samyang AF 14mm F2.8 rests on the optical construction; Samyang has not confirmed that the example is the production prescription.

Elements carry the patent's reference signs, which are also the labels on the diagram: L13 to L153. The tens digits count the elements front to rear and the trailing 3 marks Example 3, so L13 is the first element and L133 the thirteenth.

1. Samyang lists 15 elements in 10 groups with 2 aspherical, 4 HR and 1 ED element, a 0.20 m minimum focus distance, 0.15× maximum magnification and a 116.6° angle of view. Example 3 is the patent's only 15-element / 10-group example; Example 1 has 13 elements in 10 groups and Example 2 has 14 in 10.
2. Samyang's published section shows three front menisci, an aspherical fourth element, a cemented pair led by an HR element, a separated positive singlet, a cemented triplet, a cemented pair containing an HR element, an aspherical biconvex singlet, and a final cemented pair whose rear element is ED. Figure 7 (도면7) shows the same sequence: L13–L33, the double-sided aspherical L43, cemented L53+L63, L73, the cemented focusing triplet L83–L103, cemented L113+L123, the double-sided aspherical L133 and cemented L143+L153.
3. L153 (nd 1.49700, νd 81.61) is the example's lowest-dispersion glass and sits at the position Samyang marks ED. Four elements (L53, L103, L113, L143) have nd above 1.9, the same number as Samyang's HR elements.
4. The patent's infinity f = 14.194604 mm, Fno = 2.851 and full field 115.742° are close to, but distinct from, the marketed 14 mm, f/2.8 and 116.6°. Its closest tabulated state is 0.2 m object-to-image at magnification 0.157.

The Nikon F version is not modelled separately, and the Sony FE version, a separate file, follows a different patent (KR 10-1933088 B1). The correlation does not establish production radii, coatings, glass suppliers or melts.

Two modelling choices apply throughout. The patent's asphere equation is blank, so the standard conic form is assumed (see Aspherical Surfaces), and the image plane is placed 0.5 mm behind the cover plate (see Focus Mechanism). Neither is a correction of the patent.

## Optical Architecture

The prescription has the computed distance relationship of a retrofocus lens: its bare-lens back focal distance is 38.328954 mm from S26, well above the computed EFL of 14.190782 mm. Including the source rear plate, the infinity Gaussian image lies 39.180747 mm behind S26. The physical S1–S26 lens track is 90.897060 mm.

The source identifies a fixed first group, a moving second group and a fixed third group. Figure 7 labels them G13, G23 and G33 with the same trailing 3, and the diagram brackets use those signs; they are written G1, G2 and G3 below. Their independently computed standalone d-line focal lengths are:

| Source group | Surfaces      | Elements  | Computed EFL (mm) |
| ------------ | ------------- | --------- | ----------------: |
| G1 / G13     | 1–13          | L13–L73   |        +25.111991 |
| G2 / G23     | 14–17         | L83–L103  |        +98.643520 |
| G3 / G33     | stop18, 19–26 | L113–L153 |       +115.047351 |

The positive computed G1 is an unresolved contradiction with the patent's negative-group wording; Example 2's first group computes positive as well. The group boundary and radii are kept as printed. The large negative front menisci, positive L73 and separated groups must be considered as a compound system; summing thin-lens powers would not reproduce these thick-group values.

The rear optical device OD3 is a 2.500 mm plane-parallel plate, nd = 1.51680 and νd = 64.20, located 36.200000 mm after S26. Paragraph 0099 identifies possible low-pass, IR-cut or cover glass, without establishing a drop-in holder. The model traces this plate but does not draw it or count it among the 15 elements. Its position and thickness stay fixed.

## Element-by-Element Analysis

The number in each heading is the element's ordinal, front to rear, which is the count Samyang's section uses.

All focal lengths below are computed for an individual element surrounded by air. They are not the in-situ interface powers inside cemented components. Catalog equivalents supply a declared dispersion approximation; they do not identify the production supplier.

### L13 (element 1) — Positive Meniscus

nd = 1.80610, νd = 33.27. Glass: NBFD15 (Hoya equivalent). f = +348.460392 mm.

The first element is a weak positive meniscus, as both its standalone calculation and the example description establish. Its large inferred aperture accepts the wide incident field.

### L23 (element 2) — Negative Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (Hoya equivalent). f = -80.538760 mm.

This negative meniscus follows the front collector. Its front and rear inferred clear semi-diameters differ because the rear spherical surface imposes a steeper-rim limit; those modeled edge dimensions are not source-measured bevel geometry.

### L33 (element 3) — Negative Meniscus

nd = 1.80420, νd = 46.50. Glass: TAF3 (Hoya equivalent). f = -50.569262 mm.

The third element adds negative power ahead of the first asphere. Its rear clearance toward S7 is the tightest modeled air band, so the inferred rear semi-diameter is held at 15.03 mm.

### L43 (element 4) — Neg. Meniscus (2× Asph)

nd = 1.77271, νd = 49.70. Glass: Unmatched (lanthanum crown class; source 1.77271 / 49.70). f = -24.654385 mm.

The two source aspheres are S7/S8. Their published H-Ape values, 15.06 and 12.31 mm, are preserved individually. The aspheric shape remains valid where a same-radius sphere would not, so a spherical sd/R shortcut would be inappropriate.

### L53 (element 5) — Biconcave Negative

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (Hoya equivalent). f = -14.963818 mm.

This biconcave element is cemented to L63 at S10. It supplies strong negative standalone power and a high-index, high-dispersion partner, but its isolated power should not be assigned to the shared interface.

### L63 (element 6) — Biconvex Positive

nd = 1.74077, νd = 27.76. Glass: E-FD13 (Hoya equivalent). f = +17.428485 mm.

L63 completes the front cemented doublet. The complete L53–L63 component has weak net negative power, f = −468.689165 mm, because the shared interface and thick-element separation matter.

### L73 (element 7) — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: FDS90 (Hoya equivalent). f = +30.162235 mm.

This air-separated positive singlet is present in Example 3 and helps distinguish its architecture from the alternatives. It completes G1 and changes the net power of that source-defined group to positive.

### L83 (element 8) — Negative Meniscus

nd = 1.69680, νd = 55.46. Glass: LAC14 (Hoya equivalent). f = -32.332801 mm.

L83 begins the inner-focus triplet. It is a negative meniscus with a convex object-side face. The triplet remains cemented while its two surrounding air gaps change.

### L93 (element 9) — Biconvex Positive

nd = 1.51823, νd = 58.96. Glass: E-C3 (Hoya equivalent). f = +18.100766 mm.

The central biconvex member provides the positive contribution of the moving group. Its standalone value is not the group focal length; the complete L83–L103 triplet computes +98.643520 mm.

### L103 (element 10) — Negative Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (Hoya equivalent). f = -58.155896 mm.

This negative meniscus completes the moving triplet at S17. Its source thickness remains 0.700 mm. No relative motion inside the cemented triplet is modeled.

### L113 (element 11) — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45 (Hoya equivalent). f = -8.449203 mm.

The first post-stop element is biconcave and cemented to L123. This rear pair is net negative, f = −21.935462 mm, even though the full G3 assembly is net positive.

### L123 (element 12) — Biconvex Positive

nd = 1.78472, νd = 25.72. Glass: FD110 (Hoya equivalent). f = +13.962670 mm.

L123 is the positive partner of the first rear doublet. Its FD110 catalog-equivalent spectrum is supplied as explicit line-index anchors, as for the other matched elements.

### L133 (element 13) — Biconvex Positive (2× Asph)

nd = 1.55352, νd = 71.50. Glass: Unmatched (low-dispersion crown class; source 1.55352 / 71.5). f = +26.204916 mm.

This positive biconvex element has aspheres on both S22 and S23. Its source dispersion coordinate is not replaced with MP-FCD500-20: that catalog glass has νd = 71.72, whereas the patent prints 71.5.

### L143 (element 14) — Negative Meniscus

nd = 1.95375, νd = 32.32. Glass: TAFD45 (Hoya equivalent). f = -19.797829 mm.

This negative meniscus begins the final cemented doublet. The same source coordinate appears in L113, but the different curvatures and thickness give it a different standalone power.

### L153 (element 15) — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya equivalent). f = +19.443294 mm.

The final positive element has the lowest dispersion of the fifteen elements and sits at the position Samyang marks ED. The complete L143–L153 doublet computes +138.787851 mm. That pairing alone does not establish apochromatic performance.

## Glass Identification and Spectral Scope

The patent supplies nd/νd rather than manufacturer glass names. The printed pairs were compared with the HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM catalogs. Several pairs have more than one compatible candidate. A consistent HOYA-equivalent set is used where a match exists, without asserting that Samyang bought those glasses.

| Elements   | Native nd / νd  | Model interpretation                                          |
| ---------- | --------------- | ------------------------------------------------------------- |
| L13        | 1.80610 / 33.27 | NBFD15 (Hoya equivalent)                                      |
| L23        | 1.72916 / 54.67 | TAC8 (Hoya equivalent)                                        |
| L33        | 1.80420 / 46.50 | TAF3 (Hoya equivalent)                                        |
| L43        | 1.77271 / 49.70 | Unmatched (lanthanum crown class; source 1.77271 / 49.70)     |
| L53, L103  | 1.92286 / 20.88 | E-FDS1 (Hoya equivalent)                                      |
| L63        | 1.74077 / 27.76 | E-FD13 (Hoya equivalent)                                      |
| L73        | 1.84666 / 23.78 | FDS90 (Hoya equivalent)                                       |
| L83        | 1.69680 / 55.46 | LAC14 (Hoya equivalent)                                       |
| L93        | 1.51823 / 58.96 | E-C3 (Hoya equivalent)                                        |
| L113, L143 | 1.95375 / 32.32 | TAFD45 (Hoya equivalent)                                      |
| L123       | 1.78472 / 25.72 | FD110 (Hoya equivalent)                                       |
| L133       | 1.55352 / 71.50 | Unmatched (low-dispersion crown class; source 1.55352 / 71.5) |
| L153       | 1.49700 / 81.61 | FCD1 (Hoya equivalent)                                        |

Thirteen elements carry nC/nF/ng evaluated from the HOYA catalog dispersion formulas at 656.2725, 486.1327 and 435.8343 nm. These catalog-derived values are not patent-published measurements or production-melt spectra. They take precedence over the app's catalog lookup; the printed nd/νd are unchanged.

L43 and L133 remain explicitly Unmatched. For L43, TAF1 differs by Δnd = −0.00021 and Δνd = −0.07. For L133, MP/MC-FCD500-20 matches nd but differs by Δνd = +0.22. Their modelled dispersion therefore uses the Abbe approximation from the printed nd/νd. The source ray-fan text identifies 656.2700, 587.5600 and 479.9100 nm; the last wavelength is not silently treated as the standard F line.

The ED/flint pairings suggest a chromatic balancing strategy, but the mixed spectral evidence does not support an APO, secondary-spectrum, measured MTF or production-performance claim. The interface-by-interface d-line Petzval sum is +0.00518138510909 mm⁻¹; it is not a direct measurement of image-surface curvature or chromatic correction.

## Focus Mechanism and Image-Plane Interpretation

The source provides three discrete configurations. Only G2, the cemented L83–L103 triplet, moves; G1 and G3 stay fixed. D1 decreases by 3.226261 mm while D2 increases by the same amount at the near state. Their sum remains 7.589060 mm.

| Quantity                   |  Infinity | MGA = −1/30 heading | TL = 0.2 m |
| -------------------------- | --------: | ------------------: | ---------: |
| D0, object to S1 (mm)      |         ∞ |          405.430516 |  69.902940 |
| D1, S13→S14 (mm)           |  5.334159 |            4.640341 |   2.107898 |
| D2, S17→ST18 (mm)          |  2.254901 |            2.948719 |   5.481162 |
| D3, S26→plate (mm)         | 36.200000 |           36.200000 |  36.200000 |
| Literal D4, plate→IMG (mm) |  0.495503 |            0.514995 |   0.572628 |
| Signed D5 after IMG (mm)   | +0.004497 |           −0.014995 |  −0.072628 |
| Printed MAG                |         — |           +0.033333 |  +0.157378 |
| Printed Fno                |     2.851 |               2.853 |      2.938 |
| Printed HFOV (degrees)     |    57.871 |              57.495 |     55.966 |

The positive printed MAG entries are retained as magnitudes; the middle heading retains its signed wording. Computed Gaussian magnifications are −0.033324139 and −0.157329939. The patent provides no continuous mechanical law. Gaps between the three tabulated states are linearly interpolated for illustration, and only the two tabulated finite states have published object distances.

The plate faces remain at z = 127.097060 and 129.597060 mm from S1. Literal IMG lies at z = 130.092563, 130.112055 and 130.169688 mm. The signed sum D4+D5 is always 0.500000 mm, placing a fixed arithmetic reference at z = 130.097060 mm. That arithmetic identity does not establish that the reference is the same physical sensor plane as literal IMG.

The model places the image plane at this fixed position, 0.500000 mm behind the plate, as the sibling FE model does. The plate does not move and no negative air gap is modelled. This is a modelling choice, not a correction of the patent. On-axis RMS spot radius at f/2.851 is 10.5, 10.0 and 9.7 µm at this plane for the three states, against 10.9, 8.9 and 10.0 µm at the printed D4.

| State    | Gaussian defocus relative to modeled plane (mm) |
| -------- | ----------------------------------------------: |
| Infinity |                                       −0.019253 |
| Middle   |                                       +0.003864 |
| Near     |                                       +0.075973 |

The near D0 plus the track to that plane is exactly 200.000000 mm, the 0.20 m minimum focus distance Samyang states. The middle object-to-image distance is 535.527576 mm, which places that state at 0.3735 on the model's focus scale (0.20 m / 0.5355 m). The object distances themselves are the printed D0 values measured from S1.

### Inferred iris and finite F-number limitation

The source does not publish a physical iris diameter or an iris schedule. Infinity f/2.851 calibrates an entrance radius of 2.488737662 mm; exact tracing gives an inferred fixed physical stop radius of 7.188930 mm. Reproducing that target is calibration, not independent aperture evidence.

The printed finite-state Fno values 2.853 and 2.938 are quoted above, but the patent does not state how they are defined. Full-stop ray angles give image-space 1/(2 sin u) values 2.861232, 2.860883 and 2.860311. Finite incoming-radius f/(2h at S1) gives different values again. These values are not substituted for the patent's Fno row: with the iris held at its infinity setting the model does not reproduce the printed near-state 2.938. No changing diaphragm is modelled.

## Aspherical Surfaces and Equation Convention

The Equation 6 area is blank in both the A and B publications, although ¶0096 defines K as the conic constant, c = 1/R and A–F as aspheric coefficients. The model assumes the standard form, a conic base with K plus A·Y⁴+B·Y⁶+C·Y⁸+D·Y¹⁰+E·Y¹²+F·Y¹⁴, which the sibling KR 10-1933088 B1 prints as its Equation 5 (p. 11) under the same wording. No conversion of K is applied.

That sibling has the same applicant and filing date but is a separate application; only the form of the equation is taken from it. Ray tracing supports the assumption: the on-axis RMS spot radius at f/2.851 is 10.5 µm and the 57.871° chief ray lands at 21.700 mm, the image height y = 21.7 mm of Table 10, whereas reading the printed K as 1+K gives 213 µm and 32.2 mm. Coefficient units are mm^(1−p) for the Y^p term. No rescaling is applied.

| Coefficient |            S7 |            S8 |           S22 |           S23 |
| ----------- | ------------: | ------------: | ------------: | ------------: |
| K           |     -1.814675 |     -0.991237 |     -0.944323 |     -0.379701 |
| A           |  4.382060E-05 |  8.027756E-05 |  1.218699E-05 |  6.765680E-06 |
| B           | -6.238794E-07 | -6.824901E-07 | -2.957337E-07 | -5.681990E-07 |
| C           |  2.964679E-09 | -2.553086E-09 |  1.226961E-09 |  1.289974E-08 |
| D           | -7.736225E-12 |  4.533099E-11 | -1.755245E-10 | -5.635791E-10 |
| E           |  1.016927E-14 | -2.113286E-13 |  4.105461E-12 |  9.294879E-12 |
| F           | -4.412777E-18 |  3.515643E-16 | -4.297231E-14 | -6.527433E-14 |

L43's two aspheres combine a negative meniscus with a large departure from a simple spherical form. At the published S7 semi-diameter of 15.06 mm, sag is 3.768721 mm and the rim angle is 16.681254°; the departure from a sphere of the same vertex radius is −1.449772 mm. At the published S8 semi-diameter of 12.31 mm, sag is 7.179803 mm and the rim angle is 43.410119°. A sphere of the same vertex radius does not reach that height, because 12.31 mm exceeds |R| = 10.342 mm; the aspheric surface remains valid there.

L133 provides a second pair of aspheric degrees of freedom behind the stop. The positive fourth-order terms do not by themselves determine the net rim departure because the higher orders and conic terms also contribute. Manufacturing process and exact production correction contributions are not inferred from coefficient signs alone. S22/S23 clear radii are modeled, not published.

## Source Conditions and Unresolved Statements

| Condition                   | Source bounds | Recalculated ratio | Disposition                                |
| --------------------------- | ------------- | -----------------: | ------------------------------------------ |
| Rfront/f                    | 3–6.5         |           5.860635 | Satisfied                                  |
| Σt/y                        | 0.15–0.4      |           0.342857 | Satisfied                                  |
| f1st/f                      | 15–30         |          24.555404 | Satisfied; printed component power differs |
| fAF/fG3                     | 0.3–1.2       |           0.857417 | Satisfied; printed group powers differ     |
| D/y with Table 10 D = 12.08 | 0.65–0.75     |           0.556682 | Not satisfied                              |

Table 10 prints f1st = 345.936 mm, fAF = 99.513 mm and fG3 = 118.196 mm. The Table 7 prescription computes 348.460392, 98.643520 and 115.047351 mm. These differences of 0.7–2.7 % exceed the effects of rounding, and offsets of the same size appear between Table 10 and the prescriptions of Examples 1 and 2, so they belong to Table 10 rather than to this example alone. G1 also computes positive despite the negative-power wording, as it does in Example 2.

These inconsistencies are left unresolved. The Table 7 apertures are not substituted for Table 10's D, no group boundary is moved and no prescription value is altered.

## Model Scope and Limitations

The S7/S8 apertures are the published values. All other semi-diameters are estimated from Figure 7 and checked by real-ray trace, with different front and rear values on the front menisci where rim slope and clearance require them. The S6–S7 band uses 89.5143% of its vertex gap and retains 0.454869 mm clearance. The maximum rim angle is 62.9964°, and the minimum glass thickness within a shared aperture is 0.700000 mm. The cemented L53–L63 pair is square at 13.0 mm, as Figure 7 draws it. That makes S8–S9 the tightest gap: at the published 12.31 mm height of S8 the two faces take 8.174 mm of the 8.555 mm gap (95.55%) and leave 0.381 mm of air, so the data file raises the gap allowance for this lens from 90% to 96%.

The full-field chief ray clears every rim at all three states, with a smallest margin of 0.47 mm at S6 at infinity. Off axis the bundle that fills the iris is progressively cut by the inferred rims, so corner illumination follows estimated apertures and is not a measured value.

The patent's infinity half-field is 57.871°. The diagram draws off-axis bundles only out to about 46.5°, a display limit of the app and not a limit of the design's coverage.

The model is the patent example at the d line with a fixed iris and three tabulated focus states; it carries no measured MTF, coating or production-tolerance data.

## Sources

1. [KR101918210B1 original PDF](https://patentimages.storage.googleapis.com/8a/41/db/f97098b731c3df/KR101918210B1.pdf): pp. 10–12 group descriptions and conventions; pp. 16–17 Tables 7–10; p. 24 Figure 7.
2. [KR101918210B1 readable record](https://patents.google.com/patent/KR101918210B1/en): application, inventors, applicant and publication identity.
3. [KR20180119886A original](https://patentimages.storage.googleapis.com/54/c0/bf/af948366520f1c/KR20180119886A.pdf): selected A/B numerical-table comparison and the same missing equation.
4. [KR101933088B1 original](https://patentimages.storage.googleapis.com/81/b2/2b/a7be48631e191e/KR101933088B1.pdf): p. 11 Equation 5, the asphere equation form assumed here.
5. [Samyang AF 14mm F2.8 EF official technical information](https://www.lksamyang.com/en/product/product-view.php?seq=147) and [official optical section](https://www.samyanglensglobal.com/upload/editor/1554972046): product identity, EF mount and positional correlation. The technical table's 0.20 m differs from generic 0.35 m feature text elsewhere on the page; no inferred focus law comes from that text.
6. [HOYA optical-glass downloads](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), [OHARA catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), [SCHOTT optical-glass data](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?download=true&v=3b65e351), [HIKARI optical glass](https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/nikon-hikari20220701.zip), [SUMITA data](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf) and [CDGM catalog](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf): catalog nd/νd and dispersion data used for the glass comparison.
