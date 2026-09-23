# Nikon NIKKOR Z 24-120mm f/4 S — Optical Analysis

**Patent:** WO 2022/259649 A1 (PCT/JP2022/008965)
**Priority:** JP 2021-096938, filed 9 June 2021
**Published:** 15 December 2022
**Inventors:** Takuro Ono, Kosuke Machida, Ayumu Makida, Keisuke Tsubonoya
**Assignee:** Nikon Corporation
**Design Example:** Example 5 (Table 5, Figures 9–10)

---

## 1. Overview

The NIKKOR Z 24-120mm f/4 S is a constant-aperture 5× zoom for the Nikon Z mount, covering a 24–120 mm focal range at f/4 across the full zoom travel. Nikon markets it as an S-Line optic — their premium tier — and lists the construction as **16 elements in 13 groups**, incorporating 3 ED (Extra-low Dispersion) glass elements, 1 aspherical ED glass element, and 3 aspherical elements. It uses ARNEO Coat and Nano Crystal Coat for flare suppression, a fluorine-coated front element, and an internal multi-focus system driven by dual stepping motors.

Example 5 in the patent filing corresponds to this production design. The patent prescription gives a wide-angle EFL of 24.70 mm, a telephoto EFL of 116.50 mm, and f-numbers of f/4.00 (wide) and f/4.12 (tele) — closely matching the marketed 24–120 mm f/4 specification. Its 16 elements in 13 air-separated groups, three low-dispersion νd 82.57 elements, one aspherical νd 71.67 element and four aspherical surfaces on four elements line up with Nikon's published construction. These EFLs have been independently verified by paraxial ray trace (ABCD matrix / y-nu method) and match the patent's stated values to within rounding precision (computed: 24.6997 mm and 116.4998 mm).

The 16 production elements yield 13 air-separated groups. However, the patent describes the design in terms of 7 *zoom groups* — units that move together during zooming — which is a different and coarser grouping. This distinction matters: the patent's G1–G7 are zoom-group designations, not the 13 optically air-separated groups that Nikon counts in its marketing specifications.

---

## 2. Design Parameters (Example 5)

| Parameter | Wide | Tele |
|-----------|------|------|
| Focal length (design) | 24.70 mm | 116.50 mm |
| f-number (design) | f/4.00 | f/4.12 |
| Zoom ratio | 4.72× | |
| Total track length | 130.96 mm | 185.96 mm |
| Back focal distance | 13.555 mm | 45.147 mm |
| Half-field angle ω (Figs. 10A/10C) | 43.38° | 9.97° |
| Image height (calculated, exact chief ray at ω) | 21.7 mm | 21.7 mm |
| Petzval sum | 0.001689 mm⁻¹ | |
| Petzval radius | −592 mm | |

The total track length changes by approximately 55 mm from wide to tele, consistent with the externally-telescoping zoom barrel visible in the production lens. The very long Petzval radius (−592 mm) indicates well-corrected field curvature — a signature of careful glass selection and group power balancing across the seven zoom groups. The patent's aberration plots also include a middle state at f = 69.98 mm and F/4.11 (Figure 10B, ω = 16.29°), but Table 5 does not list its spacings.

---

## 3. Zoom Group Architecture

The seven zoom groups, their patent-stated focal lengths, and their constituent elements are:

### G1 — Front Positive Group (f = +136.58 mm)

**Elements:** L1 + L2 (cemented doublet)
**Surfaces:** 1–3

G1 is a cemented positive doublet comprising a negative meniscus (L1, convex toward the object) bonded to a positive meniscus (L2, also convex toward the object). This is a positive-lead zoom: G1 is the weakest-powered group but sits furthest from the stop, and it travels 55.0 mm toward the object from wide to tele, so it handles the widest off-axis beams at 24 mm. The high-index L1 (nd = 1.9037) helps contain the front diameter.

By cementing L1 and L2, Nikon eliminates an air gap and its attendant ghost reflections while simultaneously correcting lateral chromatic aberration across the large entrance pupil. The strong dispersion difference between L1 (νd = 31.27, high dispersion) and L2 (νd = 63.34, moderate dispersion) creates an effective achromatic corrector at the front of the system. Measured from the patent's Figure 9, L1's front surface reaches about 27.7 mm semi-diameter and the cemented junction about 25.6 mm, with L1 carrying a flat flange out to its outer edge. The wide-angle full-field chief ray needs 25.2 mm at the front surface, so the corner bundle is clipped here, as is normal for a 24 mm wide end.

### G2 — Variator Group (f = −24.06 mm)

**Elements:** L3, L4, L5, L6 (four air-spaced singlets)
**Surfaces:** 4–11

G2 is the primary variator — the negative group whose separations from G1 and from the stop change the most during zooming, providing the majority of the magnification change. Its short negative focal length (−24.06 mm) makes it the most powerful group in the system. Relative to the image plane G2 itself moves only 9.8 mm toward the object (a curved path in Figure 9); the 45.18 mm growth of d3 (1.525 → 46.708 mm) comes from G1 running 55.0 mm forward, and d11 shrinks from 24.145 to 2.370 mm as the stop and G3 advance 31.6 mm.

The four elements are:

- **L3** (nd = 1.77503, νd = 47.31, f ≈ −27.8 mm): A negative meniscus in HOYA M-TAF401-equivalent glass (patent 775473; production supplier unspecified) with an aspherical front surface (*4) and a strongly concave rear (R = 21.486 mm). It is the largest element of G2 in Figure 9 (front rim about 20.1 mm). The base radius of 8892 mm is nearly flat — at the 20.1 mm rim the base sphere contributes only ~23 µm of sag while the polynomial terms add about +936 µm of departure, so the front figure is essentially the polynomial. The wide-angle full-field chief ray crosses this surface at 17.7 mm, where the departure is roughly +0.55 mm; the surface acts mainly on the off-axis beams (distortion and astigmatism at the wide end).

- **L4** (nd = 1.83400, νd = 37.18, f ≈ −54.2 mm): A biconcave negative lens providing strong divergence. The high-index lanthanum glass keeps the surface curvatures moderate despite the strong negative power.

- **L5** (nd = 1.85451, νd = 25.15, f ≈ +35.9 mm): A biconvex positive element in very high-dispersion glass, tagged **P1** in the patent (satisfying conditional expression (23): νdP1 < 45). This is the chromatic aberration corrector within the variator. By placing a high-dispersion positive element adjacent to the lower-dispersion negatives, Nikon creates an air-spaced achromatic pair (L4 + L5) that corrects both the Petzval contribution and the chromatic variation of G2's strong negative power. The symmetric curvature (R = ±60.170 mm) helps minimize coma generation.

- **L6** (nd = 1.49782, νd = 82.57, f ≈ −69.5 mm): A negative meniscus in a low-dispersion fluor crown (exact Hikari J-FKH1 coordinate; the S-FPL51 / FCD1 class), tagged **N** in the patent (satisfying conditional expression (24): νdN > 60). This is the first of three elements with this glass, which match Nikon's count of three ED elements. A low-dispersion negative element in the variator reduces the chromatic change of G2's strong negative power across the zoom range. The patent itself gives only Abbe numbers, so partial-dispersion behaviour is not quantified here.

### G3 — First Relay Group (f = +59.44 mm)

**Elements:** L7, L8 (two air-spaced singlets)
**Surfaces:** 13–16

G3 sits immediately behind the aperture stop and acts as the first positive relay group in the rear assembly. The stop's spacing to L7 (d = 0.880 mm) is fixed — not a variable gap — meaning the aperture diaphragm is physically mounted in the G3 barrel assembly and moves with it during zooming.

- **L7** (nd = 1.59306, νd = 66.97, f ≈ +77.8 mm): A positive meniscus in Hikari J-PSKH4-equivalent glass (production supplier unspecified) with an aspherical front surface (*13), tagged **P2** in the patent. Its aspherical departure (approximately −242 µm at the 13.5 mm rim) corrects spherical aberration generated by the f/4 axial beam passing through the stop region. The negative departure (surface becomes flatter toward the edge) reduces marginal ray refraction and tames overcorrected spherical aberration from the preceding elements.

- **L8** (nd = 1.61800, νd = 63.34, f ≈ +249.1 mm): A weak positive meniscus, also tagged **P2**. L8 shares the same glass as L2 (S-PHM52 or equivalent) and adds mild convergence to the relay.

### G4 — Second Relay Group (f = +67.49 mm)

**Elements:** L9, L10 + L11 (cemented doublet)
**Surfaces:** 17–21

G4 is the second positive relay group, with total focal length of +67.49 mm — close to G3's, creating a near-symmetric positive relay pair behind the stop.

- **L9** (nd = 1.49782, νd = 82.57, f ≈ +52.4 mm): A biconvex positive lens in the same J-FKH1-equivalent low-dispersion glass as L6, tagged **P2**. Its very low dispersion keeps the chromatic contribution of its strong positive power small.

- **L10** (nd = 1.90043, νd = 37.38, f ≈ −31.1 mm): A negative meniscus bonded to L11. Its primary role in the cemented doublet is chromatic rather than refractive: the moderate Abbe number (νd = 37.38) provides the dispersive counterbalance to L11's extremely low dispersion.

- **L11** (nd = 1.49782, νd = 82.57, f ≈ +36.3 mm): A positive meniscus in the third element of J-FKH1-equivalent low-dispersion glass, tagged **P2**. Together, L10 + L11 form a cemented doublet with a combined thick-lens focal length of approximately −203 mm. While weakly negative overall, the true purpose of this pair is chromatic: the enormous Abbe number contrast (37.38 vs. 82.57, Δνd ≈ 45) generates controlled negative chromatism to compensate for the positive chromatism of the upstream relay elements. The junction surface at R = 17.933 mm is strongly curved. Figure 9 draws the doublet slimmer than L9: about 12.7 mm semi-diameter at L10 and 12.0 mm at L11, still above the tele f/4.12 axial beam (11.8 mm at L10, 11.0 mm at L11).

### G5 — First Focus Group (f = +135.76 mm)

**Elements:** L12, L13 (two air-spaced singlets)
**Surfaces:** 22–25

G5 is the first of two internal-focus groups. During close focusing, G5 moves toward the object side. Its long positive focal length (+135.76 mm) means it introduces only mild convergence, minimizing aberration sensitivity to focus position.

- **L12** (nd = 1.78472, νd = 25.64, f ≈ −79.0 mm): A negative meniscus (concave toward the object). Despite being in a positively powered group, L12 is individually negative. Its very high-dispersion glass (consistent with OHARA S-TIH11) works as a chromatic corrector within G5.

- **L13** (nd = 1.77250, νd = 49.62, f ≈ +52.0 mm): A biconvex positive element providing the group's net positive power. The glass coordinate (1.77250/49.62) matches OHARA S-LAH66.

### G6 — Second Focus Group (f = +79.64 mm)

**Elements:** L14 (single element)
**Surfaces:** 26–27

G6 is a single positive meniscus (concave toward the object) that serves as the second internal-focus group. It also moves toward the object during close focusing, working in tandem with G5 to maintain image quality across the focus range.

- **L14** (nd = 1.55332, νd = 71.67, f ≈ +79.6 mm): This is the element that matches Nikon's **aspherical ED element** — the one element that combines aspherical figuring with low-dispersion glass (the ED attribution is inferred from Nikon's count; the patent gives only νd). Its glass coordinate is an excellent match for **HOYA M-FCD500**, a mold-compatible fluorophosphate crown. The rear surface (*27) carries the aspherical profile, with approximately +766 µm of departure at the 15.0 mm rim measured from Figure 9. Using a moldable low-dispersion glass lets one element carry both chromatic and aspherical correction.

### G7 — Rear Negative Group (f = −38.93 mm)

**Elements:** L15 + L16 (cemented doublet)
**Surfaces:** 28–30

G7 is the final zoom group — a cemented negative doublet that acts as a negative relay/field-flattener at the rear of the system.

- **L15** (nd = 1.77503, νd = 47.31, f ≈ −25.7 mm): A biconcave negative element using the same M-TAF401-equivalent patent melt as L3, with an aspherical front surface (*28). The aspherical departure is small — it peaks near +30 µm around 13–14 mm and falls to about −76 µm at the 16.9 mm rim — fine-tuning the off-axis beams just before the image plane. G7 is drawn in Figure 9 as the largest group behind the stop (about 17 mm semi-diameter), because the full-field chief ray reaches 15.2 mm at its last surface.

- **L16** (nd = 1.92286, νd = 20.88, f ≈ +71.9 mm): A positive meniscus in extremely high-dispersion glass, tagged **P1**. The glass code matches the historical **OHARA PBH21** row, a dense flint with an unusually high refractive index and low Abbe number. Paired with L15 in the cemented doublet, the extreme Abbe number contrast (47.31 vs. 20.88, Δνd ≈ 26) provides a final stage of lateral color correction for off-axis beams at the image end.

---

## 4. Aspherical Surfaces

Four surfaces in Example 5 are aspherical, distributed across three zones of the lens. All use K = 0 (spherical base) with even-order polynomial corrections. The patent's formula (a) is printed with 1 − K·y²/r² under the root, which would make K = 0 a paraboloid, but a trace settles it: with a spherical base the f/4 axial marginal ray lands within 0.05 mm of the image plane at both zoom ends, whereas a paraboloid base leaves 0.9 mm (wide) and 23 mm (tele) of spherical aberration. Surfaces *4 and *28 carry coefficients through A14; surfaces *13 and *27 carry coefficients through A10 only. Departures below are quoted at the data file's rims, which for *4, *27 and *28 are measured from Figure 9.

| Surface | Element | Position | Key Coefficient | Departure at rim |
|---------|---------|----------|-----------------|---------------------|
| *4 | L3 front | G2 variator | A4 = +6.78 × 10⁻⁶ | +936 µm @ 20.1 mm (≈ +550 µm at the 17.7 mm wide chief-ray height) |
| *13 | L7 front | G3 relay | A4 = −7.33 × 10⁻⁶ | −242 µm @ 13.5 mm |
| *27 | L14 rear | G6 focus | A4 = +1.69 × 10⁻⁵ | +766 µm @ 15.0 mm |
| *28 | L15 front | G7 rear | A4 = +2.41 × 10⁻⁶ | peak ≈ +30 µm near 13–14 mm; −76 µm @ 16.9 mm |

**Surface *4 (L3)** carries the largest departure, and it grows steeply with height: about +134 µm at 12.3 mm, +550 µm where the wide-angle chief ray crosses (17.7 mm) and +936 µm at the 20.1 mm rim. Because the base radius (R = 8892 mm) is nearly flat, the polynomial terms define almost the whole front figure, and they act mostly on the wide-angle off-axis beams that sweep the outer zone.

**Surface *13 (L7)** has a negative departure, meaning the surface becomes progressively flatter than a sphere toward the edge. This is a textbook spherical aberration corrector for the axial beam near the stop.

**Surface *27 (L14)** has the second-largest departure. As the sole element in G6 (the second focusing group), the aspherical rear surface provides field-dependent corrections that remain effective as the element translates during focusing.

**Surface *28 (L15)** has the smallest departure — within about ±80 µm out to its 16.9 mm rim, changing sign near 15.6 mm — a fine trim on the off-axis beams entering the final cemented doublet.

---

## 5. Glass Material Identification

The following table summarizes the inferred glass identifications. Glasses labeled "confident" match catalog entries to better than ±0.0005 in nd and ±0.5 in νd. Those labeled "likely" are the closest catalog match with a small residual.

| Element | nd | νd | Inferred Glass | Confidence | Notes |
|---------|------|------|----------------|------------|-------|
| L1 | 1.903660 | 31.27 | Hikari J-LASFH13 catalog equivalent | Confident | Exact coordinate; dense lanthanum flint |
| L2 | 1.618000 | 63.34 | S-PHM52 (OHARA) | Confident | Phosphate crown |
| L3 | 1.775030 | 47.31 | HOYA M-TAF401 catalog equivalent | Qualified | Close coefficient-backed coordinate; supplier unspecified |
| L4 | 1.834000 | 37.18 | S-LAH60 (OHARA) | Confident | Dense lanthanum flint |
| L5 | 1.854510 | 25.15 | HOYA NBFD25 | Catalog-backed | Very high-dispersion flint; HOYA code 855252 |
| L6 | 1.497820 | 82.57 | **Hikari J-FKH1 catalog equivalent** | Confident | Exact coordinate; low-dispersion fluor crown (S-FPL51 / FCD1 class) |
| L7 | 1.593060 | 66.97 | Hikari J-PSKH4 catalog equivalent | Qualified | Close coefficient-backed coordinate; supplier unspecified |
| L8 | 1.618000 | 63.34 | S-PHM52 (OHARA) | Confident | Same glass as L2 |
| L9 | 1.497820 | 82.57 | **Hikari J-FKH1 catalog equivalent** | Confident | Same glass as L6 |
| L10 | 1.900430 | 37.38 | HOYA TAFD37A | Confident | Exact coordinate; dense lanthanum flint |
| L11 | 1.497820 | 82.57 | **Hikari J-FKH1 catalog equivalent** | Confident | Same glass as L6 |
| L12 | 1.784720 | 25.64 | S-TIH11 (OHARA) | Confident | High-dispersion dense flint |
| L13 | 1.772500 | 49.62 | S-LAH66 (OHARA) | Confident | Exact coordinate; lanthanum crown |
| L14 | 1.553320 | 71.67 | **HOYA M-FCD500** | Confident | Moldable fluorophosphate ED glass |
| L15 | 1.775030 | 47.31 | M-TAF401 catalog equivalent | Qualified | Same patent melt as L3; supplier unspecified |
| L16 | 1.922860 | 20.88 | PBH21 (OHARA) | Confident | Ultra-high-dispersion dense flint |

### Glass Strategy Summary

The design employs three primary families of glass:

1. **Low-dispersion crowns** (L6, L9, L11 = J-FKH1-equivalent, νd 82.57; L14 = M-FCD500-equivalent, νd 71.67): these match Nikon's three ED elements and one aspherical ED element, and carry most of the chromatic correction from 24 mm to 120 mm. The patent itself states only Abbe-number conditions (24) and (25), so the ED designation is inferred from the glass class and Nikon's specification.

2. **High-dispersion flints** (L5, L16 = P1 elements; L12): These elements sit adjacent to the ED elements and provide the dispersive counterbalance needed for the achromatic corrections. The extreme Abbe number contrasts (e.g., L5 at νd = 25.15 next to L6 at νd = 82.57, a Δνd of 57) give the chromatic leverage needed to correct a 5× zoom.

3. **Dense lanthanum crowns and flints** (L1, L4, L10, L13): High-index glasses that provide optical power in compact element geometries, minimizing element diameters and total track length.

---

## 6. Focus Mechanism

Focusing is performed by **G5 (L12 + L13) and G6 (L14)**, which move along the optical axis independently as an internal multi-focus system. The patent description ([0254]) states that when focusing from infinity to a close-range object, both G5 and G6 move from the image side toward the object side.

The variable spacing data from the patent shows the zoom-dependent gaps surrounding the focus groups at infinity:

| Gap | Wide/∞ | Tele/∞ |
|-----|--------|--------|
| d25 (after G5) | 2.000 | 5.177 |
| d27 (after G6) | 9.107 | 1.773 |

The patent provides only infinity-focus spacings for each zoom position. Close-focus data is not given in Example 5, so the real focus travel cannot be recovered. The close-focus positions in the data file are calculated: at each zoom end the smallest combined G5/G6 travel that focuses an object 0.35 m from the image plane, with d25 kept at least 0.5 mm (the limit is reached at tele). That gives G5/G6 travels of 0.99/2.23 mm at wide and 7.47/12.14 mm at tele, and a calculated magnification of 0.10× at wide and 0.38× at tele, close to Nikon's 0.39×. The split between the two groups is a modelling choice, not published travel. The dual-group internal focus architecture itself is clear from ¶0254: by moving two groups independently during focus, Nikon can correct aberrations (particularly field curvature and spherical aberration) that would shift if only a single group moved. This is what Nikon designates "Multi-Focus System" (Multi-FS) in their marketing.

The production lens achieves a minimum focus distance of 0.35 m with a maximum reproduction ratio of 0.39× — high for a general-purpose zoom. The calculated tele travel above shows why: at 116.5 mm the focus groups need more than 12 mm of room, which comes mainly from the long tele d21 gap (18.04 mm at infinity).

---

## 7. Zoom Mechanism

Figure 9's movement arrows show every group moving toward the object from wide to tele, with G2 on a curved path. The variable spacing data at the two extreme zoom positions is:

| Gap | Description | Wide (24.70 mm) | Tele (116.50 mm) | Change |
|-----|-------------|-----------------|-------------------|--------|
| d3 | G1 → G2 | 1.525 | 46.708 | +45.183 |
| d11 | G2 → Stop/G3 | 24.145 | 2.370 | −21.775 |
| d16 | G3 → G4 | 9.007 | 1.400 | −7.607 |
| d21 | G4 → G5 | 6.277 | 18.040 | +11.763 |
| d25 | G5 → G6 | 2.000 | 5.177 | +3.177 |
| d27 | G6 → G7 | 9.107 | 1.773 | −7.334 |
| Bf | G7 → Image | 13.555 | 45.147 | +31.592 |
| **Total var.** | | **65.616** | **120.615** | **+54.999** |

The total variable gap sum increases by approximately 55 mm from wide to tele, so the lens extends during zooming. Referenced to the image plane (calculated from the table), the groups travel toward the object by:

| Group | Wide → tele travel |
|-------|--------------------|
| G1 | +55.00 mm |
| G2 | +9.82 mm |
| G3 (with stop) | +31.59 mm |
| G4 | +39.20 mm |
| G5 | +27.44 mm |
| G6 | +24.26 mm |
| G7 | +31.59 mm |

The variator action therefore comes mostly from G1 running away from a nearly stationary G2 (d3 grows by 45 mm) while the stop and G3 close in behind it (d11 shrinks by 22 mm). G3 and G7 travel the same 31.59 mm, which would allow them to share one cam; the patent does not say so.

The patent provides variable spacing data at only two zoom positions (wide and tele). Aberration plots at an intermediate focal length of 69.98 mm (Figure 10B) show that the design was evaluated at a middle state, but its gaps are not tabulated in Example 5.

---

## 8. Conditional Expressions and Design Philosophy

The patent specifies several conditional expressions that Example 5 must satisfy. Two families are particularly illuminating:

### Dispersion Conditions

- **(23)** νdP1 < 45.00 — At least one positive lens in the rear groups must have a low Abbe number (high dispersion).
  - **Satisfied by:** L5 (νd = 25.15) and L16 (νd = 20.88)

- **(24)** νdN > 60.00 — At least one negative lens in the rear groups must have a high Abbe number (low dispersion).
  - **Satisfied by:** L6 (νd = 82.57)

- **(25)** νdP2 > 60.00 — At least one positive lens in the rear groups must have a high Abbe number (low dispersion).
  - **Satisfied by:** L7 (νd = 66.97), L8 (νd = 63.34), L9 (νd = 82.57), L11 (νd = 82.57), L14 (νd = 71.67)

### Group Power Conditions

- **(3)** 8.00 < f1 / D1 < 27.00 — For Example 5, f1 = 136.58 mm and D1 = 1.800 + 9.290 = 11.090 mm, giving f1/D1 = 12.32.

---

## 9. Special Elements Summary

| Count | Type | Elements |
|-------|------|----------|
| 3 | ED glass (inferred) | L6, L9, L11 (J-FKH1 equivalent, νd 82.57) |
| 1 | Aspherical ED glass (inferred) | L14 (HOYA M-FCD500 equivalent) |
| 3 | Aspherical | L3, L7, L15 |
| **7** | **Total special elements** | |

This count of 7 special elements out of 16 total matches Nikon's published specifications exactly. Nearly half the elements in the design are either aspherical, ED glass, or both — an unusually high ratio for a consumer-grade zoom.

---

## 10. Notes and Caveats

1. **Semi-diameters** are not provided in the Example 5 prescription table. The rims of L1–L3, L10/L11, L14 and L15/L16 are measured from Figure 9, which is drawn to scale (the vertex positions match the table). The remaining rims are earlier ray-trace estimates that lie within about 15 % of the figure. An exact trace at the patent's field angles (43.38° wide, 9.97° tele) reaches an image height of 21.7 mm without any surface blocking the chief ray or clipping the f/4 axial beam. The wide-angle corner bundle is clipped mainly by G1, which is expected at 24 mm.

2. **Close-focus variable spacings** are not provided for Example 5. The data file's close-focus G5/G6 positions are calculated (§6), and the real focus cam cannot be recovered from the patent.

3. **Glass identifications** labeled as catalog equivalents are optical-coordinate matches, not claims about the production supplier. L3/L15 use the same patent melt and resolve through the close M-TAF401 curve; L7 resolves through J-PSKH4. Their placement on aspherical surfaces is consistent with mold-compatible formulations but does not prove a manufacturing source.

4. **Zoom positions:** The patent provides variable gap data at only two positions (wide and tele), and the data file stores exactly those two. The viewer interpolates every gap linearly between them, which is not the production cam: at the middle of the zoom slider the interpolated gaps give a paraxial focal length of about 48 mm (the zoom readout, which interpolates 24.7 → 116.5 mm, shows about 71 mm), and the image forms about 6 mm ahead of the stored image plane. Only the two end stations reproduce the patent exactly.

5. **Manufacturing methods**: The P1 and P2 tags in the patent's prescription table refer to dispersion conditional expressions (23) and (25), *not* to manufacturing processes. However, the glass choices for the four aspherical elements (L3, L7, L14, L15) strongly suggest precision glass molding (PGM) — all four use glasses with optical properties consistent with known mold-compatible formulations.

6. **Aperture stop behavior across zoom:** The iris moves with G3, and the optics in front of it change strongly during zooming. At wide angle the f/4.00 entrance pupil (radius 3.09 mm) images back to an iris radius of about 6.3 mm; at tele the f/4.12 pupil (radius 14.14 mm) needs an iris radius of about 11.9 mm. A near-constant f/4 therefore needs the iris to open by roughly 1.9× from wide to tele — a fixed iris sized for f/4 at wide would give only about f/7.7 at tele. The patent publishes no iris diameters, so the data file infers this schedule from the published f-numbers (`zoomApertureModel: "from-nominal-fno"`).
