# Sigma 45mm F2.8 DG DN | Contemporary — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2019-211703 A (特開2019-211703)
**Application Number:** 特願2018-109697 (P2018-109697)
**Filed:** 2018-06-07 (平成30年6月7日)
**Published:** 2019-12-12 (令和元年12月12日)
**Inventor:** Yamamoto Yukihiro (山本 幸広)
**Applicant:** Sigma Corporation (株式会社シグマ)
**Title:** 結像光学系 (Image-Forming Optical System)
**Classification:** G02B 13/00; G02B 13/18
**Claims / Worked examples:** 18 claims; 10 numerical examples
**Embodiment analyzed:** Numerical Example 1 (数値実施例1)

The patent discloses compact, short-flange, standard-angle image-forming optical systems for large-format digital sensors. Its common layout is a positive first group G1, fixed aperture stop S, positive second group G2, and negative third group G3. In the main invention, focusing from infinity toward close distance narrows the G1-G2 spacing, widens the G2-G3 spacing, and moves G2 toward the object (¶0032, ¶0073-¶0079, ¶0105).

Numerical Example 1 is the prescription used here and is the closest match to the production **Sigma 45mm F2.8 DG DN | Contemporary** (Edition C019):

1. **Element and air-spaced group count.** Example 1 contains eight glass elements in seven air-spaced glass groups: L1, L2, L3+L4, L5, L6, L7, and L8. Sigma publishes the production lens as 8 elements in 7 groups.
2. **Aspherical count.** Example 1 has four aspherical surfaces on two glass elements, L1 and L5. Sigma publishes two aspherical lens elements.
3. **Focal length and aperture.** Example 1 gives f = 43.93 mm and F-number 2.90 at infinity. The production lens is marketed as 45 mm F2.8.
4. **Image circle.** The patent's maximum image height is 21.63 mm, giving a 43.26 mm diagonal, which is the 135 full-frame image circle.
5. **Focus mechanism.** Example 1 moves only G2 while G1, the aperture stop, and G3 remain fixed relative to the image plane (¶0105). This is the internal-focus form expected for the DG DN production lens.
6. **Close focus and magnification.** Example 1 includes a 240 mm close-distance state. Independent paraxial tracing gives lateral magnification -0.25096 at that state, agreeing with Sigma's published 24 cm minimum focusing distance and 1:4 maximum magnification.
7. **Patent timing.** The 2018 filing and 2019 publication align with the C019 production release period.

The sibling examples do not fit as well. Example 2 is near the same focal length but adds a resin/glass composite in the first group (¶0108), giving a different construction. Examples 3-8 use different focal lengths. Examples 9 and 10 reuse the same basic prescription as Example 1 but change the focus kinematics: Example 9 moves the G1+stop+G2 assembly as a unit and then moves G2 further toward the object (¶0129-¶0130), while Example 10 moves G1, G2, and G3 separately (¶0133-¶0135). Those forms conflict with the compact internal-focus production interpretation. Example 1 is therefore the best production candidate.

**Manufacturer specifications override the patent where they conflict.** Sigma publishes the lens as 45 mm F2.8, full-frame DG, for L-Mount and Sony E-mount, with 8 elements in 7 groups, 2 aspherical elements, 51.3° angle of view, 7 rounded diaphragm blades, minimum aperture F22, 24 cm minimum focusing distance, 1:4 maximum magnification, 55 mm filter thread, stepping-motor AF, 64.0 mm diameter, 46.2 mm length and 220 g for L-Mount, and 48.2 mm length and 235 g for Sony E-mount. The patent values remain the design prescription values: f = 43.93 mm and F2.90.

## Optical Architecture

Example 1 is a compact positive-stop-positive-negative normal prime rather than a double-Gauss. Reading object to image, G1 is positive (f = 98.79 mm), the aperture stop sits immediately behind G1, G2 is positive (f = 22.68 mm), and G3 is negative (f = -39.36 mm). The combined G1+G2 subsystem is strongly positive (f12 = 24.39 mm), and the negative G3 expands the image circle, pulls the exit pupil forward, and supplies field-balance power (¶0034-¶0036, ¶0081-¶0083).

The design is not telephoto-compressed. The patent's physical first-surface-to-image length is 63.57 mm, so LT/f = 1.45. The lens also is not a retrofocus design in the SLR-wide-angle sense: the physical rear distance from L8 to the image plane, including the plane-parallel filter plate and BF, is about 20.82 mm, well below the focal length.

The aperture stop is adjacent to the image side of G1 and remains fixed during focusing (¶0079-¶0080, ¶0105). That stop location is not incidental. The patent states that placing the stop between G1 and G2 moves the exit pupil toward the object side and reduces ray exit angle at the sensor (¶0034, ¶0082). Independent pupil imaging gives an exit-pupil-to-image distance of 52.64 mm, or EXP/Ymax = 2.434, reproducing the patent's condition value of 2.43.

The important mechanical choice is the G2 focus group. G2 consists of the L3+L4 cemented doublet plus L5. It advances 3.480 mm toward the object from infinity to the 240 mm state; G1, the aperture stop, and G3 stay fixed. This makes the moving group small enough for a compact stepping-motor mechanism while retaining a short close-focus distance (¶0074-¶0076, ¶0088-¶0092, ¶0105).

The patent includes a plane-parallel filter F between G3 and the image plane and states that its axial position between G3 and the image plane does not affect aberrations (¶0106). In the companion data file, this plate is excluded per project convention and folded into the final air-equivalent gap: 16.3216 + 2.5000 / 1.51633 + 2.0000 = 19.9703 mm.

## Element-by-Element Analysis

### G1 — Front Positive Group (f = 98.79 mm)

**L1 — Positive meniscus, convex to object, both surfaces aspherical**
nd = 1.77250, νd = 49.50. Glass: M-TAF105 (HOYA). f = +35.62 mm.

L1 is the front collector. Its high refractive index gives useful positive power without an excessively steep front surface, and its two aspherical surfaces are assigned by the patent to spherical-aberration and coma correction (¶0087). The element starts convergence early enough to reduce the beam diameter in later groups, supporting the compact barrel objective stated in the patent (¶0033, ¶0086).

This glass should not be described as a crown merely because it is a lanthanum/high-index moldable type. Its νd = 49.50 places it just on the flint side of the usual crown/flint boundary. In this analysis it is treated as a high-index, medium-dispersion moldable glass near that boundary.

**L2 — Negative meniscus, convex to object**
nd = 1.51742, νd = 52.15. Glass: E-CF6 (HOYA). f = -50.02 mm.

L2 reduces the marginal-ray angle after L1 and helps share aberration correction with the focus group (¶0086). The patent specifically prefers L1 and L2 to remain air-spaced rather than cemented, preserving an additional air-glass surface for correction and reducing manufacturing sensitivity (¶0086). Both L1 and L2 are convex to the object side in the patent prose and in the radius signs.

### G2 — Moving Focus Group (f = 22.68 mm)

**L3 + L4 — Cemented doublet, biconcave negative plus biconvex positive**

- L3: nd = 1.69895, νd = 30.05. Glass: E-FD15 (HOYA). f = -14.26 mm.
- L4: nd = 1.87070, νd = 40.73. Glass: TAFD32 (HOYA). f = +16.60 mm.

The doublet opens G2 and is shaped as a cemented meniscus unit concave toward the object side, consistent with the patent's manufacturing-sensitivity discussion (¶0089). Standalone in air, the doublet is nearly afocal: the independently traced focal length is approximately -1054 mm. Its principal function is chromatic and manufacturing control rather than net power.

The high-dispersion negative L3 is cemented to a high-index positive L4. Cementing lowers decenter sensitivity at the strongly curved interface and helps neutralize color generated by the negative member (¶0089). The patent also notes that placing the negative element where the beam is narrow keeps the moving focus group lighter (¶0089).

**L5 — Biconvex positive, both surfaces aspherical**
nd = 1.58913, νd = 61.25. Glass: M-BACD5N (HOYA). f = +25.55 mm.

L5 supplies nearly all of G2's positive power. Its two aspherical surfaces are used to control spherical aberration and astigmatism, including their variation through the focus stroke (¶0092). Because L5 lies where off-axis rays are high, the patent prefers a low-specific-gravity material to reduce moving-group mass (¶0091). M-BACD5N is a plausible moldable crown for this role and is consistent with a glass-molded aspherical element.

### G3 — Rear Negative Group (f = -39.36 mm)

**L6 — Negative meniscus, convex to object**
nd = 1.67300, νd = 38.26. Glass: S-NBH52V (OHARA). f = -39.19 mm.

L6 sets much of the rear group's negative power. The patent states that making its diameter comparable to L5 helps the upper off-axis marginal ray emerge nearly parallel to the axis, reducing decenter sensitivity between G2 and G3 and limiting focus-dependent aberration variation (¶0094). Its negative Petzval contribution is one reason the rear group can expand the image circle without leaving excessive field curvature.

**L7 — Negative meniscus, concave to object**
nd = 1.75211, νd = 25.05. Glass: FF8 (HOYA). f = -79.59 mm.

L7 sits near the image side where axial ray height is lower, and the patent assigns this negative meniscus primarily to astigmatism correction (¶0094). Its strong dispersion also participates in lateral color balance with the following positive L8.

**L8 — Biconvex positive**
nd = 1.98612, νd = 16.48, PgF = 0.6656. Glass: FDS16-W (HOYA). f = +83.60 mm.

L8 is the rearmost powered glass element and the element governed by the patent's anomalous-partial-dispersion condition. Its refractive index satisfies condition (3), and its ΔPgF = +0.046934 satisfies condition (2). The patent explains that the separation between axial and off-axis ray paths is larger near the image side of G3, making this position useful for correcting lateral chromatic aberration, astigmatism, and distortion (¶0043-¶0048, ¶0094).

## Glass Identification and Selection

The glass identifications were rechecked against manufacturer catalog naming rather than inferred from the lens maker. For the HOYA glasses, the patent's nd and νd values round to HOYA six-digit glass codes, and the official HOYA cross-reference table maps those codes to the glass names below. For L6, the patent values match OHARA S-NBH52V directly.

| Element | nd | νd | PgF | ΔPgF | Code | Glass identification | Role |
|---|---:|---:|---:|---:|---|---|---|
| L1 | 1.77250 | 49.50 | 0.5519 | -0.00733 | 773-495 | M-TAF105 (HOYA) | Moldable high-index asphere |
| L2 | 1.51742 | 52.15 | 0.5589 | +0.00444 | 517-522 | E-CF6 (HOYA) | Negative meniscus / angle relaxer |
| L3 | 1.69895 | 30.05 | 0.6028 | +0.00856 | 699-301 | E-FD15 / E-FD15L class (HOYA) | Negative flint in doublet |
| L4 | 1.87070 | 40.73 | 0.5682 | -0.00682 | 871-407 | TAFD32 (HOYA) | High-index positive doublet member |
| L5 | 1.58913 | 61.25 | 0.5373 | -0.00078 | 589-613 | M-BACD5N (HOYA) | Moldable low-dispersion positive asphere |
| L6 | 1.67300 | 38.26 | 0.5757 | -0.00376 | 673-383 | S-NBH52V (OHARA) | Strong negative rear-group member |
| L7 | 1.75211 | 25.05 | 0.6191 | +0.01586 | 752-251 | FF8 (HOYA) | Negative meniscus, astigmatism/lateral color |
| L8 | 1.98612 | 16.48 | 0.6656 | +0.04693 | 986-165 | FDS16-W (HOYA) | Anomalous-dispersion rear positive |

ΔPgF is computed exactly as the patent defines it: ΔPgF = PgF - 0.64833 + 0.00180νd (¶0038). L8 is the only strongly anomalous element. L7 has a modest positive ΔPgF, but the patent's condition (2) is clearly targeted at L8, the positive lens in G3.

Sigma's public special-element list for the production lens states only two aspherical elements. It does not publish a special low-dispersion element count for this lens. The patent's two aspherical elements correspond to L1 and L5, both on HOYA moldable-glass types.

## Focus Mechanism

The focus mechanism is a one-group internal-focus system. From infinity to the patent's 240 mm state, G2 moves 3.480 mm toward the object. The air gap before G2 closes by 3.480 mm, and the air gap behind G2 opens by the same amount, so the G1/stop assembly and G3 remain fixed (¶0105).

| State | Object-side distance d0 | Gap after stop d5 | Gap after L5 d10 | BF | Patent EFL | Patent F-number |
|---|---:|---:|---:|---:|---:|---:|
| Infinity | ∞ | 8.3114 | 1.7666 | 2.0000 | 43.93 | 2.90 |
| 240 mm | 172.6297 | 4.8314 | 5.2466 | 2.0000 | 36.81 | 3.02 |

The conserved sum d5 + d10 = 10.0780 mm verifies that the focus stroke is a pure G2 translation. The independent finite-conjugate trace gives lateral magnification -0.25096 at the 240 mm state, matching the production 1:4 specification. The close-focus effective focal length shortens to 36.81 mm, so the design breathes toward a shorter focal length at close distance.

## Aspherical Surfaces

The four aspherical surfaces are L1 front/rear and L5 front/rear, corresponding to patent surfaces 1, 2, 9, and 10. The data file labels them 1A, 2A, 9A, and 10A.

The patent uses the standard conic-plus-even-polynomial sag equation (¶0099):

$$z = \frac{(1/r)y^2}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12} + A_{14}y^{14} + A_{16}y^{16} + A_{18}y^{18} + A_{20}y^{20}.$$

No Japanese κ offset is present: K = 0 is spherical. The coefficients therefore transcribe directly into the renderer.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 1A | +0.7548 | -1.0943E-05 | -9.0526E-08 | +3.3856E-09 | -6.8374E-11 |
| 2A | 0.0000 | -2.3116E-06 | +1.4773E-07 | -4.0502E-09 | +7.7863E-11 |
| 9A | -2.3178 | -2.4796E-06 | -9.6746E-09 | -5.6804E-10 | +3.7440E-11 |
| 10A | -2.6500 | -4.7357E-06 | +1.5970E-08 | +3.7484E-10 | -1.2512E-11 |

| Surface | A12 | A14 | A16 | A18 | A20 |
|---|---:|---:|---:|---:|---:|
| 1A | +7.5676E-13 | -4.8496E-15 | +1.5425E-17 | -1.8709E-20 | 0.0000E+00 |
| 2A | -9.6225E-13 | +6.3690E-15 | -2.0898E-17 | +2.6920E-20 | 0.0000E+00 |
| 9A | -7.5858E-13 | +7.5576E-15 | -3.5787E-17 | +6.4474E-20 | 0.0000E+00 |
| 10A | +2.6612E-13 | -3.0274E-15 | +1.8357E-17 | -4.2619E-20 | 0.0000E+00 |

The patent's effective-diameter column is a full diameter, not a semi-diameter. At the verified semi-diameters used in the data file, the aspheric departures from the same-radius spherical base are:

| Surface | Patent effective diameter | Data semi-diameter | Departure from sphere at rim |
|---|---:|---:|---:|
| 1A | 20.01 mm | 10.005 mm | -39.3 µm |
| 2A | 18.30 mm | 9.150 mm | -1.0 µm |
| 9A | 17.90 mm | 8.950 mm | -48.2 µm |
| 10A | 18.50 mm | 9.250 mm | +152.9 µm |

The L1 aspheres primarily handle spherical aberration and coma at the entrance of the system (¶0087). The L5 aspheres are more strongly tied to focus behavior, especially control of spherical aberration and astigmatism as the moving group changes position (¶0092).

## Conditional Expressions

The patent's Example 1 condition table (¶0138) was rechecked from the prescription. All values reproduce the published Example 1 column to the displayed precision.

| # | Condition | Computed from Example 1 | Patent EX1 | Result |
|---|---|---:|---:|---|
| (1) | 1.40 < f/f12 < 2.80 | 1.80 | 1.80 | Satisfied |
| (2) | 0.020 < G3 ΔPgFmax < 0.300 | 0.047 | 0.047 | Satisfied |
| (3) | 1.80 < G3 nd | 1.99 | 1.99 | Satisfied |
| (4) | 0.60 < f1/f < 6.50 | 2.25 | 2.25 | Satisfied |
| (5) | 2.00 < LT/Ymax < 3.10 | 2.94 | 2.94 | Satisfied |
| (6) | 2.00 < K2 < 5.00 | 3.05 | 3.05 | Satisfied |
| (7) | 0.30 < f2/f < 0.95 | 0.52 | 0.52 | Satisfied |
| (8) | 0.30 < |f3/f| < 1.40 | 0.90 | 0.90 | Satisfied |
| (9) | 0.50 < (D1_2·K2)/f < 1.40 | 0.90 | 0.90 | Satisfied |
| (10) | 1.60 < |EXP/Ymax| < 3.50 | 2.43 | 2.43 | Satisfied |

The focus-sensitivity condition uses the patent's definition, K2 = |(f/f12)^2 · (1 - (f12/f1)^2)| (¶0057). With f = 43.93 mm, f12 = 24.39 mm, and f1 = 98.79 mm, K2 = 3.05.

## Chromatic Correction Strategy

The G2 cemented doublet provides the conventional axial-color correction. L3 is a high-dispersion negative member, and L4 is a high-index positive member with lower dispersion. Cementing the pair reduces manufacturing sensitivity and keeps the negative element's color contribution under control in a narrow beam (¶0089).

The distinctive chromatic correction is in G3. The patent explicitly requires the positive lens in G3 to have high index and positive anomalous partial dispersion (conditions 2 and 3; ¶0043-¶0048). Since off-axis ray separation is greater near the image side of G3, L8 can act strongly on lateral color without functioning as a general apochromatic axial-color corrector (¶0044, ¶0094). This should be described as targeted lateral-color correction, not as an APO claim.

## Verification Summary

The prescription was transcribed directly from the patent table on pages 20-21 and checked against the condition table on page 38.

Independent paraxial tracing gives:

- Infinity EFL = 43.92695 mm, matching the patent's 43.93 mm.
- Group focal lengths: G1 = 98.791 mm, G2 = 22.677 mm, G3 = -39.365 mm, G12 = 24.393 mm, and G23 = 54.897 mm.
- Patent filter-included BFL after surface 18 = 2.00062 mm from the rounded prescription, matching the tabulated BF = 2.0000 mm within rounding.
- Air-equivalent data-file final gap after surface 16 = 19.9703 mm after folding the plane-parallel filter out of the optical list.
- Stop effective diameter = 12.90 mm, so the data-file stop semi-diameter is 6.45 mm. Imaging the stop through G1 gives an entrance-pupil diameter of about 15.11 mm and an F-number of 2.91, matching the patent's F2.90.
- Close-focus finite-conjugate trace at d0 = 172.6297 mm gives magnification -0.25096.
- Surface-by-surface Petzval sum Σφ/(n·n′) = +2.9707E-03 mm^-1, corresponding to a Petzval-radius magnitude of about 337 mm. The rear negative group contributes the principal negative Petzval balancing term.

For this transcription, the patent effective-diameter column is treated as a full clear diameter, the data file stores semi-diameters, and the patent filter plate is excluded from the `.data.ts` surfaces and folded into the final air-equivalent spacing. L1 is classified as a high-index medium-dispersion moldable glass near the crown/flint boundary rather than as a crown glass.

## Sources

1. Japan Patent Office, JP 2019-211703 A, Sigma Corporation, "結像光学系," filed 2018-06-07 and published 2019-12-12.
2. Sigma Corporation, "45mm F2.8 DG | Contemporary," official product specification page, https://www.sigma-global.com/en/lenses/c019_45_28_re/.
3. HOYA Group Optics Division, "Glass Cross Reference Index," official six-digit optical-glass code table, https://www.hoya-opticalworld.com/english/products/crossreference.html.
4. HOYA Group Optics Division, official catalog data spreadsheet, `HOYA20150615.xls`, https://www.hoya-opticalworld.com/common/xls/HOYA20150615.xls.
5. HOYA Group Optics Division, E-FD15L datasheet, https://www.hoya-opticalworld.com/common/pdf2019/E-FD15L.pdf.
6. OHARA Corporation, "S-NBH52V" optical glass datasheet/product page, https://oharacorp.com/glass/s-nbh52v/.
