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
**Example details:** Tables 7–9, Figure 7, system 100-3

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

All focal lengths below are computed for an individual element surrounded by air. They are not the in-situ interface powers inside cemented components. Existing compatible catalog curves supply qualified spectral proxies; they do not identify a historical supplier, melt or chemistry. The two previously unmatched positions now use qualified coordinate-compatible curves; historical material identity remains unresolved.

### L13 (element 1) — Positive Meniscus

nd = 1.80610, νd = 33.27. Glass: NBFD15 (HOYA compatible spectral proxy). f = +348.460392 mm.

The first element is a weak positive meniscus, as both its standalone calculation and the example description establish. Its large inferred aperture accepts the wide incident field.

### L23 (element 2) — Negative Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA compatible spectral proxy). f = -80.538760 mm.

This negative meniscus follows the front collector. Its front clear cap stays 24.5 mm; the resolved native rear optical endpoint changes the inferred S4 cap from 19.9 to 19.1 mm, with a separate 24.5 mm outer shoulder. The former 19.9 mm allowance protected a paraxial field estimator; the source-height chief clears the 19.1 mm cap. The source gives no numerical S4 aperture or bevel dimension.

### L33 (element 3) — Negative Meniscus

nd = 1.80420, νd = 46.50. Glass: TAF3 (HOYA compatible spectral proxy). f = -50.569262 mm.

The third element adds negative power ahead of the first asphere. Its rear clearance toward S7 keeps the inferred S6 clear cap at 15.03 mm; a resolved free-air outer shoulder extends to 18.8 mm. This retains the prior shared-gap constraint rather than extending the optical sphere beyond its supported cap.

### L43 (element 4) — Neg. Meniscus (2× Asph)

nd = 1.77271, νd = 49.70. Glass: TAF1 (HOYA compatible spectral proxy). f = -24.654385 mm.

The two source aspheres are S7/S8. Their published H-Ape values, 15.06 and 12.31 mm, are preserved individually. The aspheric shape remains valid where a same-radius sphere would not, so a spherical sd/R shortcut would be inappropriate.

### L53 (element 5) — Biconcave Negative

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA compatible spectral proxy). f = -14.963818 mm.

This biconcave element is cemented to L63 at S10. It supplies strong negative standalone power and a high-index, high-dispersion partner, but its isolated power should not be assigned to the shared interface.

### L63 (element 6) — Biconvex Positive

nd = 1.74077, νd = 27.76. Glass: E-FD13 (HOYA compatible spectral proxy). f = +17.428485 mm.

L63 completes the front cemented doublet. The complete L53–L63 component has weak net negative power, f = −468.689165 mm, because the shared interface and thick-element separation matter.

### L73 (element 7) — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA compatible spectral proxy). f = +30.162235 mm.

This air-separated positive singlet is present in Example 3 and helps distinguish its architecture from the alternatives. It completes G1 and changes the net power of that source-defined group to positive.

### L83 (element 8) — Negative Meniscus

nd = 1.69680, νd = 55.46. Glass: LAC14 (HOYA compatible spectral proxy). f = -32.332801 mm.

L83 begins the inner-focus triplet. It is a negative meniscus with a convex object-side face. The triplet remains cemented while its two surrounding air gaps change.

### L93 (element 9) — Biconvex Positive

nd = 1.51823, νd = 58.96. Glass: E-C3 (HOYA compatible spectral proxy). f = +18.100766 mm.

The central biconvex member provides the positive contribution of the moving group. Its standalone value is not the group focal length; the complete L83–L103 triplet computes +98.643520 mm.

### L103 (element 10) — Negative Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA compatible spectral proxy). f = -58.155896 mm.

This negative meniscus completes the moving triplet at S17. Its source thickness remains 0.700 mm. No relative motion inside the cemented triplet is modeled.

### L113 (element 11) — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45 (HOYA compatible spectral proxy). f = -8.449203 mm.

The first post-stop element is biconcave and cemented to L123. This rear pair is net negative, f = −21.935462 mm, even though the full G3 assembly is net positive.

### L123 (element 12) — Biconvex Positive

nd = 1.78472, νd = 25.72. Glass: FD110 (HOYA compatible spectral proxy). f = +13.962670 mm.

L123 is the positive partner of the first rear doublet. Its current FD110-compatible catalog curve supplies a qualified spectral proxy; the previous catalog-derived per-element line-index anchors have been removed.

### L133 (element 13) — Biconvex Positive (2× Asph)

nd = 1.55352, νd = 71.50. Glass: MP-FCD500-20 (HOYA compatible spectral proxy). f = +26.204916 mm.

This positive biconvex element has aspheres on both S22 and S23. Its source coordinate remains 1.55352 / 71.5. MP-FCD500-20 supplies a qualified spectral estimate despite its catalog νd = 71.72; the curve does not replace the printed pair or identify the historical material.

### L143 (element 14) — Negative Meniscus

nd = 1.95375, νd = 32.32. Glass: TAFD45 (HOYA compatible spectral proxy). f = -19.797829 mm.

This negative meniscus begins the final cemented doublet. The same source coordinate appears in L113, but the different curvatures and thickness give it a different standalone power.

### L153 (element 15) — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA compatible spectral proxy). f = +19.443294 mm.

The final positive element has the lowest dispersion of the fifteen elements and sits at the position Samyang marks ED. The complete L143–L153 doublet computes +138.787851 mm. That pairing alone does not establish apochromatic performance.

## Glass Identification and Spectral Scope

The patent supplies nd/νd rather than manufacturer glass names. The printed pairs were compared with the HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM catalogs. Several pairs have more than one compatible candidate. A consistent HOYA-equivalent set is used where a match exists, without asserting that Samyang bought those glasses.

| Elements   | Native nd / νd  | Model interpretation                          |
| ---------- | --------------- | --------------------------------------------- |
| L13        | 1.80610 / 33.27 | NBFD15 (HOYA compatible spectral proxy)       |
| L23        | 1.72916 / 54.67 | TAC8 (HOYA compatible spectral proxy)         |
| L33        | 1.80420 / 46.50 | TAF3 (HOYA compatible spectral proxy)         |
| L43        | 1.77271 / 49.70 | TAF1 (HOYA compatible spectral proxy)         |
| L53, L103  | 1.92286 / 20.88 | E-FDS1 (HOYA compatible spectral proxy)       |
| L63        | 1.74077 / 27.76 | E-FD13 (HOYA compatible spectral proxy)       |
| L73        | 1.84666 / 23.78 | FDS90 (HOYA compatible spectral proxy)        |
| L83        | 1.69680 / 55.46 | LAC14 (HOYA compatible spectral proxy)        |
| L93        | 1.51823 / 58.96 | E-C3 (HOYA compatible spectral proxy)         |
| L113, L143 | 1.95375 / 32.32 | TAFD45 (HOYA compatible spectral proxy)       |
| L123       | 1.78472 / 25.72 | FD110 (HOYA compatible spectral proxy)        |
| L133       | 1.55352 / 71.50 | MP-FCD500-20 (HOYA compatible spectral proxy) |
| L153       | 1.49700 / 81.61 | FCD1 (HOYA compatible spectral proxy)         |

The completed October 8/11 reviews had supplied catalog-derived nC/nF/ng on thirteen elements. The October 30 scoped followup removes all 39 active numeric fields: none is printed for a selected medium in the original. At that October 30 checkpoint, thirteen drawn elements plus OD3 retained fourteen compatible catalog curves and L43/L133 remained unmatched. The October 31 catalog followup below adds qualified curves for those two positions, bringing coverage to all sixteen modeled media. All sixteen source nd/νd pairs remain unchanged, with explicit d-reference notation. No catalog value is recast as a published per-element spectral observation or historical melt.

L43 now uses TAF1 and L133 uses MP-FCD500-20 as qualified spectral proxies within the existing lens compatibility window, ±0.003 in nd and ±2 in νd. Exact equality to a vendor coordinate is not required for this explicitly approximate use. These names identify the adopted catalog curves, not the historical glasses, suppliers, melts or molding processes. The source ray-fan text identifies 656.2700, 587.5600 and 479.9100 nm; the last wavelength is not silently treated as the standard F line. No per-element line index or partial dispersion is published for either position, and none is added.

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

The source does not publish a physical iris diameter or an iris schedule. The October 8 calibration reported entrance radius 2.488737662 mm and stop height 7.188930 mm. The current engine instead derives a 7.026947446 mm iris from the unchanged nominal f/2.851 rule; the old explicit radius is normalized by canonical ingest. The current exact working values are 2.922592696/2.922021218/2.917552798 at the three control states. Nominal paraxial aperture, exact working f-number and the earlier calibration are distinct conventions, not proof of a physical diaphragm schedule.

The printed finite-state Fno values 2.853 and 2.938 are quoted above, but the patent does not state how they are defined. The prior October 8 full-stop calculation gave image-space 1/(2 sin u) values 2.861232, 2.860883 and 2.860311 under its then-calibrated stop. Finite incoming-radius f/(2h at S1) gives different values again. These values are not substituted for the patent's Fno row: with the iris held at its infinity setting the model does not reproduce the printed near-state 2.938. No changing diaphragm is modelled.

## Aspherical Surfaces and Equation Convention

The Equation 6 area is blank in both the A and B publications, although ¶0096 defines K as the conic constant, c = 1/R and A–F as aspheric coefficients. The model assumes the standard form, a conic base with K plus A·Y⁴+B·Y⁶+C·Y⁸+D·Y¹⁰+E·Y¹²+F·Y¹⁴, which the sibling KR 10-1933088 B1 prints as its Equation 5 (p. 11) under the same wording. No conversion of K is applied.

That sibling has the same applicant and filing date but is a separate application; only the form of the equation is taken from it. The October 8 ray check supported that interpretation: the recorded on-axis RMS spot radius at f/2.851 was 10.5 µm and the 57.871° chief landed at 21.700 mm, the image height y = 21.7 mm of Table 10, whereas reading the printed K as 1+K gives 213 µm and 32.2 mm. Coefficient units are mm^(1−p) for the Y^p term. No rescaling is applied.

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

The S7/S8 clear apertures remain the published 15.06/12.31 mm. All other clear caps are inferred. The October 30 S4 cap correction to 19.1 mm and S4/S6 outer shoulders are described below, retaining unequal clear caps and all source R/d. The separate S8 outer-shoulder trial fails the existing guard and is not adopted. The S6–S7 band uses 89.5143% of its vertex gap and retains 0.454869 mm clearance. The maximum rim angle is 62.9964°, and the minimum glass thickness within a shared aperture is 0.700000 mm. The cemented L53–L63 pair is square at 13.0 mm, as Figure 7 draws it. That makes S8–S9 the tightest gap: at the published 12.31 mm height of S8 the two faces take 8.174 mm of the 8.555 mm gap (95.55%) and leave 0.381 mm of air, so the data file raises the gap allowance for this lens from 90% to 96%.

The full-field chief ray clears every rim at all three states, with a smallest margin of 0.47 mm at S6 at infinity. Off axis the bundle that fills the iris is progressively cut by the inferred rims, so corner illumination follows estimated apertures and is not a measured value.

The patent's infinity half-field is 57.871°. The diagram uses a separate safety-limited drawing field; the current original-field checks below use the public vector/chief path and actual finite object geometry independently of that display clamp.

The model is the patent example at the d line with a fixed iris and three tabulated focus states; it carries no measured MTF, coating or production-tolerance data.

## Sources

1. [KR101918210B1 original PDF](https://patentimages.storage.googleapis.com/8a/41/db/f97098b731c3df/KR101918210B1.pdf): pp. 10–12 group descriptions and conventions; pp. 16–17 Tables 7–10; p. 24 Figure 7.
2. [KR101918210B1 readable record](https://patents.google.com/patent/KR101918210B1/en): application, inventors, applicant and publication identity.
3. [KR20180119886A original](https://patentimages.storage.googleapis.com/54/c0/bf/af948366520f1c/KR20180119886A.pdf): selected A/B numerical-table comparison and the same missing equation.
4. [KR101933088B1 original](https://patentimages.storage.googleapis.com/81/b2/2b/a7be48631e191e/KR101933088B1.pdf): p. 11 Equation 5, the asphere equation form assumed here.
5. [Samyang AF 14mm F2.8 EF official technical information](https://www.lksamyang.com/en/product/product-view.php?seq=147) and [official optical section](https://www.samyanglensglobal.com/upload/editor/1554972046): product identity, EF mount and positional correlation. The technical table's 0.20 m differs from generic 0.35 m feature text elsewhere on the page; no inferred focus law comes from that text.
6. [HOYA optical-glass downloads](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), [OHARA catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), [SCHOTT optical-glass data](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?download=true&v=3b65e351), [HIKARI optical glass](https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/nikon-hikari20220701.zip), [SUMITA data](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf) and [CDGM catalog](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf): catalog nd/νd and dispersion data used for the glass comparison.

## October 30, 2026 — Scoped Original Followup and Current Runtime Scope

Completed October 8 and October 11, 2026 source/shape/glass/finite-control and diagram coverage is preserved with those actual dates. This scoped reopening directly checks the same original `patents/KR101918210B1.pdf`, SHA-256 `4ee7eb1bb37c39968354cc8ae8210524e9cb8965666335ffa9c35a0c7a673028`: Example 3, Tables 7–9 on PDF pp. 16–17 and Fig. 7 on p. 24. Every modeled medium, concavity, cemented interface and free end was accounted for. No other example supplies replacement coordinates; the blank controlling Eq. 6 remains the explicitly retained limitation. Its previously disclosed sibling-based conic interpretation is not a new source recovery or literal formula confirmation.

The native embedded Fig. 7 raster is 2027×2326 at approximately 366×365 ppi. Native crops are inspected without resampling; 3× nearest-neighbor enlargements are magnifications only. The figure is anisotropic: S1–S26 spans about 1111.3 px over 90.897060 mm, or 12.225 px/mm axially; the published S7 clear 15.06 mm spans about 175.5 px, giving 11.65 px/mm transversely. Practical rim uncertainty is ±0.6 mm, rather than an assertion of exact blank machining. Leaders, brackets, focus travel, stop ticks and image/plate marks are excluded.

The S4 optical curve ends about 222 px from the axis (19.06 mm); its inferred clear cap changes 19.9→19.1 mm. Its resolved rear free-air shoulder extends to the retained front blank height 24.5 mm. S6 retains clear 15.03 mm under the prior gap constraint and gains outer 18.8 mm, matching the next resolved free-air step. Both use `rimExtensionSd`, preserving separate optical caps. Those outer heights cannot be optical spherical apertures: 24.5 exceeds |R4| 22.335 and 18.8 exceeds |R6| 18.600. No cemented-interface land or disconnected wing is added; the rear cemented components retain their existing unequal-cap silhouettes.

The full S8 outer 15.06 mm shoulder trial is rejected. With source S8 clear 12.31 and S9 clear 13.0, the land/neighbor intrusion becomes 8.290 mm in physical 8.555 mm, exceeding the existing 0.96 guard allowance 8.213 mm. The remaining physical air is positive; this is a guard failure, not evidence that the literal optical faces cross. The existing S8 tapered closure and published cap remain. No partial shoulder is tuned to the threshold. The legacy 0.96 exception, adopted in October 11 coverage, is retained without widening; the current review does not change any geometry tolerance.

All source R/d, four asphere coefficient sets, source S7/S8 caps, all three focus states and their object distances, moving-triplet topology, nominal iris rule and fixed image-reference/OD3 choices remain unchanged. Catalog design focal length now records the printed 14.194604 mm rather than computed 14.190782147 mm. The physical OD3 remains thickness 2.5 mm, nd/νd 1.51680/64.20, lens gap 36.2 mm and retained post-plate reference 0.5 mm. Its clear diameter is unreported, so the generated non-clipping rear-plate aperture is a model assumption, not source plate-edge verification. Signed D5 and the fixed-reference exception remain explicit in the source-state table.

Current surface/image-circle checks and single infinity aperture/field audits pass. Across 66 focus controls (65 uniform points plus the native middle keyframe), all 462 f-stop working calls trace. All 990 SVG element paths are finite, closed and connected with zero hidden renderer trim. Protected surface positions, indices, clear caps apart from S4, and current iris are identical to the prior configuration; the maximum protected runtime difference is zero. Final actual SVGs at the three source controls were compared with the native infinity/near panels. The unresolved S8 shoulder and rear bonded-margin differences remain visible rather than being hidden by renderer trimming.

At infinity the public bounding-sphere/vector chief and full-pupil launch converges at the printed 57.871°, giving |Y| 21.701270 mm. Its 193-sample iris-filling bundle has 73 passed, 103 clipped and 17 unresolved no-bracket continuations; all axial samples pass and the source-edge chief clears. The half-angle 28.9355° bundle passes 173/193 with twenty clips. These are iris-filling disk samples, not the older entrance-offset meridional fan, radiometric throughput or a full unvignetted-pupil claim. Separate 65°/80°/89° extreme diagnostics fail to bracket, beyond the paper's stated field; they establish no additional coverage.

Two separate finite launch domains are retained. At the exact source D0 values 405.430516/69.902940 mm, six inverse-chief targets at Y=0/10.85/21.7 mm all converge and physically clear. The middle full-image-edge chief leaves the object at 57.490484° (printed 57.495°), near at 55.949815° (printed 55.966°), with minimum clear margins 0.555870/0.889207 mm. Pupils at middle pass 193/156/77 of 193, with 0/0/8 unresolved marginal continuations; near passes 193/152/86 with none unresolved. Across both native finite states there are 857 passed, 293 clipped, eight unresolved no-bracket and zero unaimed samples. No failed continuation is relabeled a source check success or proof that no physical ray exists.

A separate Gaussian object-plane supplement at 65 positive finite controls inverse-solves actual image targets 0/10.85/21.7 mm: all 195 chiefs converge and physically clear, 27,870 pupil samples pass, 9,390 clip and 375 marginal continuations remain unresolved. Every axial 193-sample bundle clears. This is distinct from source D0 illumination and from collimated rays at nonzero focus. The retained fixed image reference gives Gaussian object-to-image distances 0.539035/0.203177 m at the two native finite controls, versus source/display 0.535528/0.200000 m. At focus 0.015625 the illustrative Gaussian distance is 5.414372 m versus the 12.8 m display label, a 57.700219% discrepancy. Such intervals are not demonstrated production focus cams or source focus-preserving states; no optical fit removes the discrepancy.

The original Table 10 group-power/conditional-expression disagreements, blank Eq. 6, fixed-reference signed-D5 interpretation, assumed OD3 aperture, retained S6/S8 gap limits, marginal pupil clipping and unavailable production glass/IS data remain public. Source fidelity, sampled runtime clearance and production correlation are separate conclusions.

## October 31, 2026 — Scoped Catalog-Proxy Followup

The completed October 8/11 original review and October 30 scoped shape/spectral-override review retain their actual dates. This followup checks the material evidence and existing catalog coefficients; it does not claim another shape inspection. The same original [KR 10-1918210 B1](../../../patents/KR101918210B1.pdf), Numerical Example 3, Table 7 on PDF p. 16, directly prints L43 at surface 7 as 1.77271 / 49.70 and L133 at surface 22 as 1.55352 / 71.5. Paragraph 0100 on p. 13 defines Nd/Vd, identifying the d-reference by notation, and paragraph 0128 on p. 17 gives the ray-fan wavelengths. Neither the selected table nor the source prose supplies a named glass, individual line indices or a partial-dispersion constraint for these positions.

The [official HOYA July 7, 2026 all-products AGF](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf) is checked from its previously retrieved local bytes because a new download timed out. Its TAF1 and MP-FCD500-20 NM/CD rows match the existing six polynomial coefficients exactly. Their native formula is `n² = A0 + A1 λ² + A2 λ⁻² + A3 λ⁻⁴ + A4 λ⁻⁶ + A5 λ⁻⁸`, with λ in micrometres. Evaluating those curves at the standard C/d/F/g lines gives:

| Position          | Qualified curve | Evaluated nd | Evaluated νd | Δnd from source | Δνd from source | Curve PgF |
| ----------------- | --------------- | -----------: | -----------: | --------------: | --------------: | --------: |
| L43 / element 4   | TAF1            |  1.772500029 |    49.624284 |    −0.000209971 |       −0.075716 |  0.550358 |
| L133 / element 13 | MP-FCD500-20    |  1.553517183 |    71.718206 |    −0.000002817 |       +0.218206 |  0.539786 |

TAF1 is closer in the combined normalized index/Abbe residual than the eligible MC-TAF115; the latter's verified index is about 1.77047, not the malformed 1.777047 in one AGF header. MP-FCD500-20 is the closest existing joint-coordinate candidate for L133; the matching MC variant publishes the same coefficients and would add no distinct spectral information. No manufacturing route is inferred from a catalog prefix. The former exact-identity rejection was too strict for a qualified proxy: the ±0.15 Abbe catalog-consistency guard tests a vendor row against its own coefficients, whereas the existing lens-to-catalog window is ±2. Neither tolerance changes.

All fifteen drawn elements plus OD3 now reach compatible catalog curves, 16/16 versus 14/16. The published source pairs remain authoritative, no spectral override or APD evidence is invented, and d-line runtime geometry is unchanged. All source R/d, aspheres, caps, shoulders, stops, focus conjugates and controls retain the previous review's constraints. The blank source equation, fixed-reference interpretation, interpolation errors and sampled pupil limitations above remain applicable.
