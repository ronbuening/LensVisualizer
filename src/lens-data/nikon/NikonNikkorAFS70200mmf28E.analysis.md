# Optical Analysis: Nikon AF-S NIKKOR 70-200mm f/2.8E FL ED VR

## Patent WO 2019/097669 A1 — Example 1

**Patent**: WO 2019/097669 A1 (PCT/JP2017/041445)
**Filed**: November 17, 2017
**Published**: May 23, 2019
**Inventor**: ITO Tomoki (Nikon Corporation)
**Title**: Variable Magnification Optical System, Optical Device, and Method for Manufacturing Variable Magnification Optical System

---

## 1. Identification and Provenance

This patent describes the optical architecture of the Nikon AF-S NIKKOR 70-200mm f/2.8E FL ED VR, Nikon's third-generation professional telephoto zoom lens, announced October 19, 2016. The production lens is specified at 22 elements in 18 groups, incorporating 6 ED (Extra-low Dispersion) glass elements, 1 fluorite (FL) element, and 1 HRI (High Refractive Index, nd > 2.0) element.

Example 1 of the patent (Table 1, paragraph [0060]) presents a complete numerical prescription of 41 optical surfaces spanning 22 glass elements arranged in five zoom groups. It is the only one of the patent's nine examples with the production 22-element / 18-group layout — the section figures of Examples 2–9 show 19 or 20 elements — so it is the right example to model. A paraxial ray trace of this prescription reproduces the patent's stated focal lengths to within ±0.005 mm at all three zoom positions (wide, mid, tele), confirming transcription accuracy.

The design employs a constant total track length of 246.0 mm with a constant back focal distance of 54.0 mm across the zoom range, consistent with the production lens's constant-length barrel. The zoom ratio computed from the prescription is 196.0 / 71.5 = 2.74×, matching the patent's stated value.

### Production Lens Cross-Reference

| Parameter | Production Lens | Patent Example 1 |
|---|---|---|
| Elements / Groups | 22 / 18 | 22 / 18 |
| ED elements | 6 | 6 |
| Fluorite elements | 1 | 1 |
| HRI elements | 1 | 1 |
| Focal range | 70–200 mm | 71.5–196.0 mm |
| Maximum aperture | f/2.8 | f/2.9 in Table 1; f/2.85 / 2.90 / 2.86 (W/M/T) in FIG. 2 |
| Close focus | 1.1 m | 1.00 m object-to-image (calculated from the finite-distance gaps) |
| Filter size | 77 mm | — |
| Total track | ~202.5 mm (barrel) | 246.0 mm (optical) |

The ED, fluorite and HRI counts in the patent column are inferred from the tabulated nd/νd values; the patent text does not name any special glass. The slight differences in focal length (71.5 vs 70 mm) and aperture (f/2.85–2.90 vs f/2.8) between patent and production are typical: production lenses are often derived from patent prescriptions via minor optimization adjustments and deliberate rounding of marketed specifications.

---

## 2. Optical Architecture

The design follows a classic five-group telephoto zoom architecture with positive–negative–positive front groups and a rear "subsequent" group (GR) comprising focusing and vibration-reduction subgroups.

### Group Structure

| Group | Surfaces | Elements | Focal Length (mm) | Power | Function |
|---|---|---|---|---|---|
| G1 | 1–5 | L11, L12, L13 | +143.951 | Positive | Front objective; fixed |
| G2 | 6–13 | L21–L24 | −45.574 | Negative | Variator; zooms |
| G3 | 14–25 | S, L31–L36 | +94.464 | Positive | Relay; fixed |
| G4 | 26–30 | L41–L43 | +58.195 | Positive | Focusing group |
| G5 | 31–41 | L51–L56 | −109.088 | Negative | VR group; fixed |

The 18 "groups" in Nikon's marketing count arises from counting air-separated sub-assemblies: G1 contains 2 subgroups (one cemented doublet plus one singlet), G2 has 4 singlets, G3 has 5 subgroups (four singlets and one cemented doublet; the stop S at its front is not a group), G4 has 2 subgroups (one singlet and one cemented doublet), and G5 has 5 subgroups (two singlets, one cemented doublet, and two more singlets). The total is 2 + 4 + 5 + 2 + 5 = 18.

### Zoom Mechanism

During zooming from wide to tele, the spacings between groups change while G1, G3, and G5 remain fixed relative to the image plane (paragraph [0052]). G2 moves toward the image side (increasing D1, decreasing D2), and G4 exhibits a non-monotonic cam path — the patent says it first moves toward the object, then reverses toward the image side. This is evident in the D3 variable-gap data: at infinity focus, D3 = 16.922 mm (W), 14.105 mm (M), 16.921 mm (T), showing a dip at mid-zoom before returning to nearly the same value at tele. D4 also exhibits non-monotonic behaviour: D4 = 1.903 mm (W), 4.720 mm (M), 1.903 mm (T), peaking at mid-zoom.

The total variable-gap sum (D1 + D2 + D3 + D4 + BF) is conserved at 126.44 mm across all zoom positions, confirming the constant-length design.

### Focus Mechanism

Focusing from infinity to close distance is accomplished by moving G4 toward the object along the optical axis (paragraph [0053]). This is an internal-focus design: the front element does not rotate, the overall length does not change, and the filter thread remains stationary — all critical features for professional use.

The variable-gap data shows that D1 and D2 are identical at infinity and close focus for each zoom position, confirming that only D3 and D4 change during focus. At the tele end, D3 decreases from 16.921 mm to 2.928 mm (a 14 mm travel) while D4 increases from 1.903 mm to 15.897 mm, maintaining conservation of total track.

The patent labels its second gap column only "finite distance" and prints no object distance. A paraxial calculation shows that the published D3/D4 values focus at an object-to-image distance of 1.00 m at all three zoom positions (object about 754 mm in front of the first surface), for magnifications of about −0.087×, −0.158× and −0.233× (W/M/T). The object heights printed on the finite-distance aberration plots (FIG. 3A–3C: 250.21, 134.69 and 90.61 mm for the 21.6 mm image height) agree with that. The data file therefore labels the close end 1.00 m, as a calculated value. The production lens focuses to 1.1 m (0.21× maximum reproduction ratio), so the patent's near state is slightly closer than production.

### Aperture

The aperture stop S sits at the front of G3, which is fixed, and does not move during zoom. Table 1 rounds the f-number to 2.9 at every position, while the infinity aberration plots (FIG. 2A–2C) print FNO = 2.85, 2.90 and 2.86. A real-ray trace shows that one iris of about 19.5 mm radius gives those three values (the iris needed for each is 19.48, 19.43 and 19.40 mm). The small change comes from G4 moving behind the stop. The patent publishes no iris diameter; the model therefore uses one fixed iris at f/2.85, the calculated wide-open value, and does not use a per-station aperture schedule.

### Vibration Reduction (VR)

The VR system uses a subgroup within G5 consisting of the L52+L53 cemented doublet and the L54 plano-concave singlet. These three elements move perpendicular to the optical axis to correct image-plane shift caused by camera shake (paragraph [0054]). The VR coefficient K = −1.21 is constant across the zoom range, while the required lateral shift Z increases proportionally with focal length: −0.31 mm at wide (71.5 mm), −0.58 mm at mid (135 mm), and −0.85 mm at tele (196 mm), all for a tilt angle θ = 0.3°.

---

## 3. Aspherical Surfaces

Example 1 contains no aspherical surfaces. There are no asterisk-marked surfaces in the prescription table, and no aspherical surface data section appears in the patent for this example.

This is consistent with the production AF-S NIKKOR 70-200mm f/2.8E FL ED VR, which does not list aspherical elements in its specifications — Nikon highlights ED, fluorite, and HRI elements but does not reference aspherical surfaces. The all-spherical design achieves its aberration correction through the strategic deployment of special glass types (ED, fluorite, HRI) and careful power distribution among 22 elements.

For reference, Example 3 in the same patent does include one aspherical surface (its surface 15, with κ = 1, C4 = −1.26980 × 10⁻⁶, C6 = −9.34669 × 10⁻¹¹; Table 3), demonstrating that the patent covers both spherical and aspherical variants of the architecture.

---

## 4. Glass Strategy

The design uses 14 unique glass types across 22 elements. The glass selection is dominated by low-dispersion crowns, high-index flints, and fluorite, with special emphasis on chromatic aberration control across a 2.74× zoom range at f/2.9.

### Glass Identification Table

The patent lists only nd and νd. The catalog names below are equivalents chosen by matching those two values, with Hikari (Nikon's usual supplier) preferred where it has an exact match. The patent does not name any glass.

| Element | nd | νd | Catalog equivalent | Match | APD flag |
|---|---|---|---|---|---|
| L11 | 1.950000 | 29.37 | Hikari J-LASFH15 | Exact | No |
| L12 | 1.497820 | 82.57 | Hikari J-FKH1 | Exact | Inferred (ED) |
| L13 | 1.433852 | 95.25 | Calcium fluoride (CaF₂) | nd exact, νd 95.25 vs 95.00 | Inferred (fluorite) |
| L21 | 1.719990 | 50.27 | Hikari J-LAK10 | Exact | No |
| L22 | 1.618000 | 63.34 | OHARA S-PHM52 | Nearest (νd 63.33) | No |
| L23 | 1.846660 | 23.83 | Hikari J-SF03 | Nearest (νd 23.80) | No |
| L24 | 1.603000 | 65.44 | Hikari J-PSK03 | Exact | No |
| L31 | 1.834810 | 42.73 | OHARA S-LAH55V | Exact | No |
| L32 | 1.593190 | 67.90 | Hikari J-PSKH1 | Exact | Inferred (ED) |
| L33 | 1.497820 | 82.57 | Hikari J-FKH1 | Exact | Inferred (ED) |
| L34 | 2.001000 | 29.12 | HOYA TAFD55 | Nearest (νd 29.13) | No (HRI) |
| L35 | 1.902650 | 35.73 | Hikari J-LASFH9 | Exact | No |
| L36 | 1.581440 | 40.98 | Hikari J-LF5 | Exact | No |
| L41 | 1.497820 | 82.57 | Hikari J-FKH1 | Exact | Inferred (ED) |
| L42 | 1.950000 | 29.37 | Hikari J-LASFH15 | Exact | No |
| L43 | 1.593190 | 67.90 | Hikari J-PSKH1 | Exact | Inferred (ED) |
| L51 | 1.804000 | 46.60 | Hikari J-LASF015 | Exact | No |
| L52 | 1.846660 | 23.83 | Hikari J-SF03 | Nearest (νd 23.80) | No |
| L53 | 1.719990 | 50.27 | Hikari J-LAK10 | Exact | No |
| L54 | 1.953750 | 32.33 | Hikari J-LASFH21 | Exact | No |
| L55 | 1.593190 | 67.90 | Hikari J-PSKH1 | Exact | Inferred (ED) |
| L56 | 1.719990 | 50.27 | Hikari J-LAK10 | Exact | No |

### Special Glass Summary

The patent never says which elements are ED, fluorite or high-index glass, and it gives no partial-dispersion (θgF) data. The assignments below come from matching the nd/νd values to Nikon's published count of 6 ED, 1 fluorite and 1 HRI element, and there is exactly one way to make that count fit.

**Fluorite (CaF₂) — L13**: nd = 1.433852 and νd = 95.25 are the coordinates of calcium fluoride, and no other element in the prescription is close. It is the only candidate for Nikon's single fluorite element. It sits in G1, where the axial marginal ray is highest (about 34 mm at the tele end), so it has the most effect on secondary spectrum. Fluorite is also less dense than the optical glass it replaces, which helps explain the production lens's lower weight compared with its predecessor.

**ED (Extra-low Dispersion) elements — L12, L33, L41 and L32, L43, L55**: Three elements (L12, L33, L41) have exactly the coordinates of Hikari J-FKH1, a fluor-crown (1.497820 / 82.57). Three more (L32, L43, L55) match Hikari J-PSKH1, a phosphate crown (1.593190 / 67.90). Together these are the six low-dispersion positive elements that Nikon's ED count requires. The APD flags on all six are marked inferred, because the patent does not call any of them ED.

**HRI (High Refractive Index) — L34**: Element L34 has nd = 2.001000 and νd = 29.12. The closest catalog glass is HOYA TAFD55 (29.13). It is the only element with nd above 2.0, so it matches Nikon's single HRI element. At that index, a given power needs gentler surface curvatures, which reduces higher-order aberrations at each surface. The high-index dense flints L11/L42 (J-LASFH15, nd = 1.950) and L54 (J-LASFH21, nd = 1.954) are close to that index but do not exceed 2.0.

---

## 5. Element-by-Element Analysis

### Group 1 — Front Objective (f = +143.95 mm, fixed)

G1 collects light from the object and provides positive power that forms a real intermediate image for the subsequent groups. Being fixed relative to the image sensor, G1's aberration contribution remains constant across the zoom range.

**L11 (Negative meniscus, convex toward object)**: nd = 1.950000, νd = 29.37 (J-LASFH15 equivalent), f = −327.1 mm. The front element uses a very high-index, high-dispersion lanthanum dense flint. Its meniscus shape contributes negative power to flatten the field while its high index minimizes surface curvatures and thus surface contributions to spherical aberration. As the element with the largest clear aperture, the meniscus form reduces the angle of incidence of off-axis rays, controlling coma and astigmatism. It is cemented to L12.

**L12 (Weak biconvex positive, cemented to L11)**: nd = 1.497820, νd = 82.57 (J-FKH1 equivalent, ED by inference), f = +165.2 mm. The patent text [0049] describes this element as biconvex; the rear surface R = −998.249 mm is so weak that the element is nearly plano-convex in form. The cemented doublet L11+L12 pairs a high-index dense flint (L11) with a low-index anomalous-dispersion crown (L12). This classic achromatic combination corrects primary longitudinal chromatic aberration at the front of the system, and the fluor-crown's anomalous partial dispersion also helps reduce secondary spectrum.

**L13 (Positive meniscus, convex toward object)**: nd = 1.433852, νd = 95.25 (calcium-fluoride coordinates; the patent does not name the material), f = +243.4 mm. The fluorite element provides additional positive power with extremely low dispersion (νd = 95.25), contributing to both primary and secondary chromatic correction. Its meniscus shape with convex front follows the curvature of the converging beam, minimizing surface aberrations. Fluorite's low density (3.18 g/cm³ vs ~3.5–5.5 for optical glass) also reduces the weight of this large-diameter front element.

### Group 2 — Variator (f = −45.57 mm, moves during zoom)

G2 provides negative power and moves along the optical axis during zooming. Its motion is the primary mechanism that changes the system's effective focal length. G2 moves toward the image during wide-to-tele zoom, causing D1 to increase from 3.0 mm to 51.0 mm while D2 decreases from 50.6 mm to 2.7 mm.

**L21 (Negative meniscus, convex toward object)**: nd = 1.719990, νd = 50.27 (J-LAK10 equivalent), f = −93.9 mm. The leading element of G2 uses a meniscus shape to progressively bend rays away from the axis. The lanthanum crown gives moderate index with controlled dispersion.

**L22 (Biconcave negative)**: nd = 1.618000, νd = 63.34 (S-PHM52 equivalent), f = −92.2 mm. A strong diverging element using a phosphate glass with νd = 63.34. The biconcave form produces strong negative power for zoom range, while the relatively low dispersion of the phosphate crown limits chromatic variation during zoom.

**L23 (Positive meniscus, convex toward object)**: nd = 1.846660, νd = 23.83 (nearest catalog glass J-SF03), f = +86.8 mm. This element uses a dense flint with very high dispersion and positive power. That is the reverse of the usual pairing of positive power with low-dispersion glass, and it is typical for the flint element of a negative variator. Positioned within a diverging group, its role is to correct higher-order chromatic aberrations and balance the Petzval sum contribution of the surrounding negative elements.

**L24 (Biconcave negative)**: nd = 1.603000, νd = 65.44 (J-PSK03 / S-PHM53 equivalent), f = −96.8 mm. The final element of G2 provides additional negative power. The glass is a phosphate crown that limits chromatic variation as G2 moves through its zoom travel.

### Group 3 — Relay Group (f = +94.46 mm, fixed)

G3 follows the aperture stop and relays the image while providing positive power. Its fixed position means it must handle the full range of ray geometries produced by the zooming G2 group above.

**Aperture Stop (S)**: Located at the entrance to G3 (surface 14), the stop position between G2 and G3 is optimal for controlling off-axis aberrations. The 2.5 mm air gap before L31 provides space for the mechanical iris diaphragm.

**L31 (Biconvex positive)**: nd = 1.834810, νd = 42.73 (S-LAH55V equivalent), f = +128.0 mm. The first glass element after the stop provides moderate positive power using a high-index lanthanum glass that contributes favorable Petzval sum.

**L32 (Plano-convex, convex toward object)**: nd = 1.593190, νd = 67.90 (J-PSKH1 equivalent), f = +152.3 mm. This is the first of three J-PSKH1-type phosphate-crown elements counted as ED by inference. Its plano-convex form (flat rear surface, R = ∞) minimizes spherical aberration for near-collimated beams emerging from the stop region. The patent does not publish partial-dispersion data, so the ED role is inferred from nd/νd and Nikon's production count.

**L33 (Positive meniscus, convex toward object)**: nd = 1.497820 (J-FKH1 equivalent, ED by inference), f = +119.6 mm. The second J-FKH1-type ED element in the system, contributing additional positive power with very low dispersion. Paired with L34 (following), this forms a loose air-spaced achromatic combination.

**L34 (Biconcave negative) — HRI element**: nd = 2.001000, νd = 29.12 (nearest catalog glass TAFD55), f = −70.1 mm. This is the only element with nd above 2.0, so it matches the High Refractive Index element in Nikon's marketing. With nd exceeding 2.0, the surface curvatures required for a given power are much gentler than with conventional glass, dramatically reducing higher-order aberrations (spherical, coma) at each surface. Positioned after two positive ED elements, L34 provides strong negative power for Petzval sum flattening and chromatic aberration control. Its high dispersion (νd = 29.12) is deliberately paired against the preceding low-dispersion elements.

**L35 + L36 (Cemented negative doublet)**: L35 is a biconvex positive element (nd = 1.902650, νd = 35.73, f = +47.5 mm) cemented to L36, a biconcave negative (nd = 1.581440, νd = 40.98, f = −44.0 mm). The patent text [0049] describes this pair as 接合負レンズ (cemented negative lens), confirming a net negative focal length of approximately −1420 mm — very weak combined power, functioning primarily as a field-flattening corrector at the exit of G3. L35 matches Hikari J-LASFH9 and L36 matches Hikari J-LF5 exactly.

### Group 4 — Focusing Group (f = +58.20 mm, moves during zoom and focus)

G4 is the internal focusing group. It moves toward the object during focus from infinity to close, and also participates in zooming with a non-monotonic cam path. Its relatively short focal length (+58.2 mm) means small movements produce significant focus shifts.

**L41 (Biconvex positive)**: nd = 1.497820 (J-FKH1 equivalent, ED by inference), f = +89.7 mm. The third J-FKH1-type ED element, providing positive power with extremely low dispersion. Placing an ED element in the focusing group ensures that chromatic performance is maintained across the focus range, not just at infinity.

**L42 + L43 (Cemented positive doublet)**: L42 is a negative meniscus (nd = 1.950000, J-LASFH15 equivalent, f = −89.9 mm) cemented to L43, a positive meniscus (nd = 1.593190, J-PSKH1 equivalent, f = +57.1 mm). The patent text describes this as 接合正レンズ (cemented positive lens), with a net positive focal length of approximately +170 mm. The pairing of high-index dense flint with a low-dispersion crown creates a powerful achromatic combination. The meniscus forms reduce higher-order aberrations, and the phosphate crown (ED by inference) helps chromatic correction survive focus changes. Note: L43's steep junction radius (R = 28.478 mm) produces the tightest edge-thickness constraint in the entire design, which limits the cemented doublet to a semi-diameter of about 17 mm. FIG. 1 draws the doublet at about 16.8 mm.

### Group 5 — VR Group (f = −109.09 mm, fixed overall; VR subgroup shifts laterally)

G5 has a net negative focal length, making the complete system shorter than G1–G4 alone (telephoto ratio). It houses the vibration-reduction mechanism.

**L51 (Negative meniscus, convex toward object)**: nd = 1.804000, νd = 46.60 (J-LASF015 equivalent), f = −98.7 mm. The leading element of G5, providing negative power to diverge the converging beam from G4. Its high-index lanthanum glass (νd = 46.60) contributes to favorable Petzval sum balance.

**L52 + L53 (Cemented doublet — VR subgroup, part 1)**: L52 is a biconvex positive (nd = 1.846660, nearest J-SF03, f = +61.2 mm) cemented to L53, a biconcave negative (nd = 1.719990, J-LAK10 equivalent, f = −41.3 mm). This cemented doublet (net f ≈ −138 mm) is part of the VR moving subgroup. The pairing creates a diverging achromatic element with well-controlled chromatic performance during lateral decentering. The dense flint L52 paired with the lanthanum crown L53 provides the necessary power balance for image-shift correction.

**L54 (Plano-concave, concave toward image — VR subgroup, part 2)**: nd = 1.953750, νd = 32.33 (J-LASFH21 equivalent), f = −71.9 mm. This plano-concave element moves with L52+L53 as part of the VR subgroup. Its flat front surface and curved rear surface produce strong negative power. The high-index glass (nd = 1.954) minimizes aberrations generated during the lateral shift needed for image stabilization. Note: the patent prescription table renders the flat-surface radius as "0.000" — a rendering artifact; the patent text explicitly describes L54 as 平凹レンズ (plano-concave), and the EFL computation confirms R = ∞.

**L55 (Biconvex positive)**: nd = 1.593190 (J-PSKH1 equivalent), f = +108.0 mm. The third J-PSKH1-type element (ED by inference) provides positive power after the VR subgroup and helps keep the chromatic balance introduced by the VR elements from degrading during lateral shift.

**L56 (Positive meniscus, convex toward object)**: nd = 1.719990 (J-LAK10 equivalent), f = +100.4 mm. The final element before the image plane, a positive meniscus that helps control the back-focal field curvature and provides final positive power to direct the converging beam to the sensor. Reusing the same lanthanum crown as L21 and L53 maintains manufacturing simplicity.

---

## 6. Semi-Diameter Estimation

The patent publishes no clear apertures. The rims in the data file are measured from the Example 1 cross-section (FIG. 1, 300 dpi scan). The drawing scale, 9.69 px/mm, comes from the 192.01 mm span between the first and last surface vertices. The measured rims were then checked with an exact real-ray trace at the full-frame image height Y = 21.6 mm and the FIG. 2 f-numbers. That trace reaches the image corner at ω = 16.82° / 8.86° / 6.10°, the same half-angles printed on FIG. 2.

- **G1**: FIG. 1 draws the L11+L12 doublet rim at about 36.8 mm and L13 at about 34.4 mm, so the stored 36.5 / 35.0 mm are kept. They fit inside the production 77 mm filter thread. At the tele end the axial f/2.86 beam is about 34.3 mm high at the front surface, so it is not clipped. A full-field bundle would need about 56 mm, so the image corner is mechanically vignetted by roughly 60 % on one side, as is normal for this class of lens.
- **G2**: The earlier L23 rear and L24 front rims (18.2 mm) clipped the f/2.85 axial beam, which needs about 18.8 mm there. L24 is now 20.4 mm, matching the figure. L23 is 20.1 mm at the front and 19.0 mm at the rear, where its edge meets L24's front edge. L22 was 21.0 / 22.5 mm against a figure rim of 19.3 mm and is now 19.5 mm.
- **G3**: The L33 rear and L34 front rims (18.4 mm) also clipped the axial beam, which needs about 19.0 mm. L34 is now 20.0 mm (figure 20.0), and L33 is 20.3 mm at the front and 19.2 mm at the rear (figure rim 20.3). In FIG. 1 the edges of L23/L24 and of L33/L34 touch, so the data file allows 97 % of those air gaps for rim sag (`gapSagFrac` 0.97) rather than the default 90 %.
- **Stop**: stored at the fixed iris radius of 19.5 mm (see Aperture above). FIG. 1 draws S at about 20.5 mm.
- **G4 / G5**: The stored rims are within about 12 % of the figure (L41 17.7, the L42+L43 doublet 16.8, L51 16.1, the L52+L53 doublet 14.7, L55 17.4, L56 18.7 mm measured) and are kept. The flat front of L54 was 13.7 mm against a drawn 16.1 mm and is now 16.0 mm, the same as its rear. The rear of the L52+L53 doublet stays at 13.7 mm, because at a larger radius its steep R = 42.059 mm surface would reach into the 2.583 mm gap in front of L54.

Every surface passes the repository's edge-thickness, rim-slope and gap-intrusion checks at all three zoom positions. No surface clips the axial beam or blocks the full-field chief ray, at infinity or at the near state.

---

## 7. Verification Appendix

### EFL Verification (Paraxial Ray Trace)

| Position | Patent EFL (mm) | Computed EFL (mm) | Δ (mm) |
|---|---|---|---|
| Wide (W) | 71.5 | 71.498 | −0.002 |
| Mid (M) | 135.0 | 134.996 | −0.004 |
| Tele (T) | 196.0 | 196.000 | 0.000 |

### Group Focal Length Verification

| Group | Patent f (mm) | Computed f (mm) | Δ (mm) |
|---|---|---|---|
| G1 (f1) | 143.951 | 143.951 | 0.000 |
| G2 (f2) | −45.574 | −45.573 | +0.001 |
| G3 (f3) | 94.464 | 94.465 | +0.001 |
| G4 (f4) | 58.195 | 58.194 | −0.001 |
| G5 (f5) | −109.088 | −109.087 | +0.001 |

### Variable Gap Conservation

| Position | D1 + D2 + D3 + D4 + BF (mm) |
|---|---|
| Wide (∞) | 126.437 |
| Wide (close) | 126.436 |
| Mid (∞) | 126.436 |
| Mid (close) | 126.435 |
| Tele (∞) | 126.436 |
| Tele (close) | 126.437 |

Sum conserved within ±0.002 mm (rounding), confirming constant-length design across all six configurations.

### Petzval Sum

Petzval sum = +0.001491 mm⁻¹, corresponding to a Petzval radius of −671 mm. The positive sum (concave Petzval surface toward object) indicates slight under-correction of field curvature, which is typical for telephoto zoom designs and is partially compensated by the negative field-flattening contribution of the L35+L36 cemented doublet and the overall G5 negative power.

### Conditional Expressions

| No. | Expression | Patent Value | Computed |
|---|---|---|---|
| (1) | f1 / (−f2) | 3.1586 | 3.1587 |
| (2) | f2 / \|fZ\| | 0.4178 | 0.4178 |
| (5) | f3 / (−f2) | 2.0728 | 2.0728 |
| (6) | f1 / fw | 2.0133 | 2.0133 |
| (7) | nd1 | 1.9500 | 1.950000 |
| (8) | ωw | 11.200° | 16.82° (see note) |

Note on condition (8) and the 2ω row: Table 1 prints 2ω = 22.4 / 41.1 / 57.9 and condition (8) ωw = 11.200. These values cannot be reconciled with f = 71.5–196 mm and Y = 21.6 mm. The FIG. 2 plots print half-angles of 16.82°, 8.87° and 6.10°, and the real-ray trace reaches the 21.6 mm image corner at those same angles. The model follows the 21.6 mm image height, which gives the FIG. 2 angles; the tabulated angles appear to be a source error.

---

## 8. References

1. **WO 2019/097669 A1** — ITO Tomoki (Nikon Corporation), "Variable Magnification Optical System, Optical Device, and Method for Manufacturing Variable Magnification Optical System," published May 23, 2019.
2. **Nikon product page**: AF-S NIKKOR 70-200mm f/2.8E FL ED VR, https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/telephotozoom/af-s_70-200mmf_28e_fl_ed_vr/
3. **HOYA Glass Cross Reference Index**: https://www.hoya-opticalworld.com/english/products/crossreference.html
4. **OHARA Optical Glass Pocket Catalog**, May 2023 edition.
