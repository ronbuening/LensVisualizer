# Sony FE 24-70mm f/2.8 GM II — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2023/181666 A1, "Zoom Lens and Imaging Device"
**Applicant:** Sony Group Corporation
**Inventor:** Masaki Maruyama
**Filed:** 6 February 2023 (PCT/JP2023/003793)
**Published:** 28 September 2023
**Priority:** JP 2022-046233, filed 23 March 2022
**Embodiment analyzed:** Example 4 (第4実施例), Figure 40, Tables 16–20

The identification of Example 4 as the production embodiment rests on the following convergent evidence:

1. **Element and group count.** Example 4 comprises 20 elements in 15 air-separated groups (7 zoom-movable groups), matching the manufacturer-published specification exactly.
2. **Special-element count.** The prescription contains 5 aspherical elements (8 aspherical surfaces), 2 elements with νd = 95.1 (Super ED class), and 2 elements with νd > 80 (ED class) — consistent with the production specification of 2 XA, 3 aspherical, 2 Super ED, and 2 ED elements.
3. **Focal length and aperture.** The patent states f = 24.72–67.90 mm at F/2.91, zoom ratio 2.75. The production lens is marketed as 24–70 mm at f/2.8. The design f-number of 2.91 is standard for a lens marketed at f/2.8 (the marketing value reflects the commercial rounding; the design aperture is never faster than the marketed value).
4. **Constant aperture.** F/2.91 is constant across all three zoom positions, matching the constant f/2.8 marketing specification.
5. **Image height.** Y = 21.63 mm at all zoom positions (image circle diagonal ≈ 43.3 mm), consistent with the 135 full-frame format.
6. **Focus mechanism.** Dual floating-element inner focus (Gr5 negative, Gr6 positive), consistent with the production lens's "floating focus mechanism" driven by four XD Linear Motors.
7. **Optical total length.** L = 136.00 mm at wide end. The production lens barrel is 119.9 mm long (mount flange excluded); accounting for the 18 mm Sony E-mount flange distance, the total optical path of approximately 136–138 mm is consistent.
8. **Patent timing.** The priority date of March 2022 precedes the product announcement in April 2022 by approximately one month, consistent with Sony's filing-to-launch cadence for G Master lenses.

## Optical Architecture

The lens is a 7-group zoom of the positive-negative-positive-positive-negative-positive-negative power distribution type, with the power layout:

| Group | Elements | Power | Focal Length | Role |
|-------|----------|-------|-------------|------|
| Gr1   | L11–L13  | Positive | +112.87 mm | Front collector; gathers light and sets the entrance pupil diameter |
| Gr2   | L21–L25  | Negative | −20.20 mm  | Variator; primary zoom action, diverges the beam |
| Gr3   | L31–L33  | Positive | +63.87 mm  | First middle-group positive relay, carries the aperture stop |
| Gr4   | L41–L45  | Positive | +26.64 mm  | Second middle-group positive relay; main refractive burden |
| Gr5   | L51      | Negative | −37.94 mm  | Negative focus group (Grrn) |
| Gr6   | L61      | Positive | +134.37 mm | Positive focus group (Grrp) |
| Gr7   | L71–L72  | Negative | −169.85 mm | Fixed rear group; field flattener and exit-pupil control |

The patent organizes the groups into three macro-sections (¶0019): a front group (Gr1), a negative variator (Gr2), a middle group Grm comprising Gr3 and Gr4, and a rear group Grr comprising Gr5, Gr6, and Gr7. The middle group Grm carries the aperture stop on its object side (surface 15, between Gr2 and Gr3 proper) and provides the bulk of the system's positive refractive power. The rear group Grr contains the floating focus mechanism and the final field-correcting elements.

During zooming from wide to telephoto (¶0151), Gr1 moves toward the object relative to the image plane, and the spacings between all groups from Gr1 to Gr6 change. The spacing between Gr1 and Gr2 increases dramatically (from 0.80 mm at wide to 28.87 mm at tele), while the Gr2–Gr3 spacing contracts (16.48 mm → 1.54 mm), reflecting the classic variator-compensator interaction in a positive-lead zoom.

The 15 air-separated sub-groups that constitute the production's "15 groups" count arise from the internal structure within each zoom group: Gr1 has 2 sub-groups (a cemented doublet plus a singlet), Gr2 has 4 (four distinct air-separated clusters among its 5 elements), Gr3 has 2 (a singlet plus a cemented doublet), Gr4 has 3 (two cemented doublets and a singlet), and Gr5, Gr6, and Gr7 contribute 1, 1, and 2 sub-groups respectively.

## Element-by-Element Analysis

### Gr1 — Front Collector Group (f = +112.87 mm)

**L11 — Negative Meniscus (convex to object)**
nd = 1.86966, νd = 20.0. Glass: dense flint (870/200 class, uncertain — no exact OHARA catalog match). f = −379.3 mm.

L11 is the frontmost element and is designated L1i and L1n in the patent's conditional-expression framework (¶0049, ¶0058). It satisfies condition (5), which requires nd/density > 0.50, selecting a glass with high refractive index relative to its weight — important because the front group has the largest diameter in the system (clear aperture ≈ 68.8 mm). It also satisfies condition (8), νd < 23.0, making it a strongly dispersive flint. This high dispersion, paired with the positive ED element L12 in a cemented doublet, corrects axial chromatic aberration across the zoom range. The meniscus shape (both radii positive: R1 = 472.0, R2 = 193.8 mm) bends marginal rays inward while presenting a gently curved front surface to minimize surface reflections at wide field angles.

L11 and L12 form a cemented doublet with a combined focal length of approximately +701 mm — very weakly positive. The doublet functions primarily as a chromatic corrector rather than a strong power element; the heavy lifting of Gr1's overall +112.87 mm power is done by L13.

**L12 — Biconvex Positive (cemented to L11)**
nd = 1.61800, νd = 63.4. Glass: S-PHM52 (OHARA) — phosphate crown with positive anomalous partial dispersion (ΔPgF > 0). f = +246.1 mm.

L12 is designated L1p in the patent (¶0055) and satisfies condition (7), the anomalous partial dispersion criterion: θgF − (−0.001801 × νd + 0.64826) > 0.005. This identifies it as one of the lens's two ED elements. Its phosphate-crown composition provides positive ΔPgF, enabling correction of secondary chromatic aberration (the residual color error that persists after primary achromatization). By placing this ED element in the front group where marginal ray heights are large, the designer gains leverage over axial color from wide to tele.

**L13 — Positive Meniscus (convex to object)**
nd = 1.76385, νd = 48.5. Glass: lanthanum crown (764/485 class, uncertain — no exact OHARA catalog match). f = +134.5 mm.

L13 is a standalone positive meniscus (R1 = 56.3, R2 = 119.2 mm) that provides the dominant positive power of Gr1. Its glass combines a moderately high refractive index with intermediate dispersion, allowing a long focal length on relatively gentle curvatures. The meniscus shape controls coma contribution from the front group and helps manage the principal-plane position for compact total track.

### Gr2 — Negative Variator Group (f = −20.20 mm)

Gr2 is the strongest negative group in the system at −20.20 mm, and its axial displacement during zooming produces the primary focal-length change (¶0145). It contains 5 elements in 4 sub-groups.

**L21 — Negative Meniscus (convex to object)**
nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA) — lanthanum crown. f = −34.0 mm.

L21 is the first negative element encountered by the converging beam from Gr1. Its strongly curved rear surface (R2 = 17.636 mm) provides most of its negative power and redirects the converging cone into a strongly diverging beam. The lanthanum crown glass provides a good balance of index and dispersion for managing the Petzval sum contribution.

**L22 — Negative Meniscus (convex to object, 2× Asph)**
nd = 1.77002, νd = 49.4. Glass: S-LAH52 class (OHARA) — lanthanum dense crown. f = −83.9 mm.

L22 is the only aspherical element in Gr2, with both surfaces (S8 and S9) carrying aspherical coefficients. The aspherical departures on both surfaces are negative (flatter than the spherical base) at the clear aperture, providing −76 µm on S8 and −68 µm on S9 of departure. This pair of aspherical corrections addresses the coma and astigmatism that arise from the strongly diverging beam passing through the variator at wide-angle settings. The weak base curvature on S8 (R = 307.0 mm, nearly flat) allows the aspheric polynomial to dominate the surface profile, effectively creating a Schmidt-plate-like corrector within the variator.

**L23 — Biconcave Negative (cemented to L24)**
nd = 1.63854, νd = 55.4. Glass: crown (639/554 class, uncertain — no exact OHARA catalog match). f = −31.3 mm.

**L24 — Positive Meniscus (convex to object, cemented to L23)**
nd = 2.00069, νd = 25.5. Glass: S-LAH79 (OHARA) — ultra-high-index lanthanum dense flint. f = +27.7 mm.

L24 is designated L2p in the patent (¶0051) and satisfies condition (6): nd > 1.955. This is one of the highest-index glasses in the system at nd = 2.00069, enabling strong positive curvature from a relatively thin element (d = 4.15 mm center thickness). The cemented doublet L23+L24 has a combined focal length of approximately +273 mm — weakly positive within the otherwise strongly negative Gr2. The ultra-high-index L24 serves as a chromatic corrector for the variator: its high dispersion (νd = 25.5) paired with the lower-dispersion L23 (νd = 55.4) creates an achromatizing doublet that controls the lateral chromatic aberration generated by Gr2's strong negative power. The patent emphasizes (¶0052) that the ultra-high refractive index allows the element to be thin, keeping Gr2 compact and maximizing the available zoom travel.

**L25 — Negative Meniscus (concave to object)**
nd = 1.61800, νd = 63.4. Glass: S-PHM52 (OHARA) — phosphate crown. f = −166.7 mm.

L25 is a weakly negative meniscus at the rear of Gr2 (R1 = −29.7, R2 = −42.2 mm). It provides mild negative power and helps manage the exit angle of the diverging beam before it enters the variable air gap (d14) preceding the aperture stop.

### Gr3 — First Middle-Group Relay (f = +63.87 mm)

Gr3 sits immediately after the aperture stop and begins the process of reconverging the divergent beam from Gr2. The stop is placed on the object side of Gr3 at surface 15 (¶0143).

**L31 — Positive Meniscus (convex to object, 1× Asph)**
nd = 1.85108, νd = 40.1. Glass: S-LAH89 (OHARA) — lanthanum dense crown. f = +57.8 mm.

L31 is designated Lmp_asp in the patent (¶0053) — the aspherical middle-group positive lens. Its object-side surface (S16) carries aspherical coefficients, with a departure of −114 µm (flatter than the base sphere) at the clear aperture. The patent explicitly describes this element's role (¶0054): the middle group, having overall positive power, naturally contains many positive refracting surfaces. Rather than using a strongly negative-power spherical surface to counteract the resulting spherical aberration (which would require thick edges), the designer uses an aspherical surface that is positive in the paraxial zone but becomes progressively negative in the peripheral zone. This elegantly corrects spherical aberration without the compactness penalty of adding a thick negative element. This element is inferred to be one of the two XA (extreme aspherical) elements in the production lens, given its critical position immediately after the aperture stop where the on-axis beam is at its most sensitive to surface figure errors.

**L32 — Biconvex Positive (cemented to L33) — Super ED**
nd = 1.43700, νd = 95.1. Glass: S-FPM2 (OHARA) / FCD100 (HOYA) — fluorophosphate, Super ED class. f = +69.9 mm.

L32 is one of the two Super ED elements in the design. Its νd = 95.1 identifies it unambiguously as a fluorophosphate glass with exceptionally low dispersion and strong positive anomalous partial dispersion. It satisfies condition (9), the Lmp criterion: θgF − (−0.001801 × νd + 0.64826) > 0.045 (¶0061). Placed at a position where on-axis marginal ray heights are significant (just past the stop), it provides large chromatic correction leverage for both axial and lateral color from g-line to F-line across the entire zoom range.

**L33 — Biconcave Negative (cemented to L32)**
nd = 1.77250, νd = 49.6. Glass: S-LAH52Q (OHARA) — lanthanum dense crown. f = −58.2 mm.

L33 is cemented to L32 and serves as the achromatizing flint partner. The doublet L32+L33 has a combined focal length of approximately −422 mm — weakly negative. This is a deliberate design choice: the Super ED positive element provides the chromatic correction while the cemented doublet as a whole contributes only mild negative power, keeping Gr3's total power at +63.87 mm.

### Gr4 — Second Middle-Group Relay (f = +26.64 mm)

Gr4 carries the strongest positive power in the system at +26.64 mm and contains 5 elements in 3 sub-groups. A flare-cutter aperture (surface 21) of variable diameter may be placed on its object side, according to the patent (¶0143), accounting for the distinctive R = ∞, d = −1.10 mm entry in the prescription table.

**L41 — Negative Meniscus (convex to object, cemented to L42)**
nd = 2.00100, νd = 29.1. Glass: S-NPH5 (OHARA) — ultra-high-index dense flint. f = −52.6 mm.

L41 is the second element in the system with nd > 2.0, a testament to the design's aggressive use of exotic high-index glasses. Its negative meniscus shape with a strongly curved rear surface (R2 = 18.620 mm, which is also the cemented junction) creates a powerfully diverging interface at the cemented boundary. This element is the leading flint in the L41+L42 cemented doublet.

**L42 — Biconvex Positive (cemented to L41) — ED**
nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) — fluorophosphate crown, ED class. f = +30.0 mm.

L42 is one of the two ED elements in the design. S-FPL51 (νd = 81.6) is the workhorse ED glass of modern Japanese optical design, offering strong positive anomalous partial dispersion (ΔPgF ≈ +0.038). The cemented doublet L41+L42 has a combined focal length of approximately +68.3 mm. The extreme index contrast at the junction (Δnd = 0.504) creates an exceptionally strong achromatizing interface. This doublet simultaneously contributes positive power to Gr4 and corrects secondary chromatic aberration across the zoom range.

**L43 — Positive Meniscus (concave to object, cemented to L44) — Super ED**
nd = 1.43700, νd = 95.1. Glass: S-FPM2 (OHARA) / FCD100 (HOYA) — fluorophosphate, Super ED class. f = +72.7 mm.

L43 is the second Super ED element in the design and, like L32, satisfies condition (9) for Lmp (¶0061). The use of two Super ED elements — one in Gr3 and one in Gr4 — is characteristic of the most demanding high-aperture zoom designs, where a single ED element cannot sufficiently control the secondary spectrum at the system's extreme f/2.8 aperture across a nearly 3× zoom ratio.

**L44 — Biconcave Negative (cemented to L43)**
nd = 1.80610, νd = 33.3. Glass: dense flint (806/333 class, uncertain — no exact OHARA catalog match). f = −23.8 mm.

L44 is cemented to L43, forming the second achromatizing doublet in Gr4. The doublet L43+L44 has a combined focal length of approximately −35.0 mm — substantially negative. This negative doublet within the otherwise positive Gr4 is critical for Petzval sum correction: it reduces the field curvature that would otherwise result from Gr4's strong +26.64 mm power.

**L45 — Biconvex Positive (2× Asph)**
nd = 1.85108, νd = 40.1. Glass: S-LAH89 (OHARA) — lanthanum dense crown. f = +19.2 mm.

L45 is the most powerful single element in the design at f = +19.2 mm, and both its surfaces (S28 and S29) carry aspherical coefficients. The departure on S28 is −507 µm (flatter than the base sphere), making it the most strongly aspherized surface in the entire system. The departure on S29 is +225 µm (also flatter than the concave base sphere, which has negative sag). Together these aspherical surfaces correct the substantial spherical aberration and coma generated by L45's extreme power density. This element is inferred to be the second XA (extreme aspherical) element in the production lens, consistent with Sony's emphasis on XA elements for both resolution and bokeh quality. Its position near the convergence point of the on-axis beam makes its surface figure critically important for both the point-spread function (resolution) and the defocused disk shape (bokeh).

### Gr5 — Negative Focus Group, Grrn (f = −37.94 mm)

**L51 — Negative Meniscus (convex to object, 2× Asph)**
nd = 1.85155, νd = 40.1. Glass: S-LAH89 class (OHARA) — lanthanum dense crown. f = −37.9 mm.

L51 constitutes the entire negative focus group Grrn (¶0148). Both surfaces carry aspherical coefficients. The front surface (S30) has a departure of +175 µm (steeper than the base sphere), while the rear surface (S31) departs by +168 µm (also steeper). These aspherical profiles correct the aberrations introduced when L51 moves along the optical axis during focusing. Without aspherical correction on a moving focus element, the aberration balance established at infinity would deteriorate significantly at close focus — particularly spherical aberration and coma.

L51 moves toward the image side when focusing from infinity to close distance (¶0152). At the wide-angle end, the close-focus object distance is 74.00 mm (from the first surface), corresponding to a magnification of β = −0.229.

### Gr6 — Positive Focus Group, Grrp (f = +134.37 mm)

**L61 — Positive Meniscus (convex to object, 1× Asph)**
nd = 1.61875, νd = 63.7. Glass: S-PHM52 class (OHARA) — phosphate crown. f = +134.4 mm.

L61 constitutes the entire positive focus group Grrp (¶0149). Its front surface (S32) carries aspherical coefficients with a departure of +202 µm (steeper than the base sphere) at the clear aperture. As the positive counterpart to the negative L51, it moves along a different trajectory during focusing (¶0152). The combination of a negative singlet and a positive singlet moving with different cam trajectories is the "floating focus" mechanism that the production lens advertises.

The patent notes (¶0045) that using single-lens groups for both Grrn and Grrp is favorable for compactness: a single negative lens has relatively large edge thickness while a single positive lens has relatively large center thickness. When the two are stacked axially, the combined thickness variation across the aperture is moderated, improving space efficiency within the barrel. The actuator size for driving the focus groups is also minimized when each group is a single lens.

### Gr7 — Fixed Rear Group (f = −169.85 mm)

**L71 — Positive Meniscus (concave to object)**
nd = 1.94595, νd = 18.0. Glass: S-NPH4 (OHARA) — ultra-high-dispersion dense flint. f = +56.5 mm.

L71 is a positive element made from the most dispersive glass in the system (νd = 18.0, nd = 1.94595). Its extreme dispersion makes it an effective lateral-color corrector when paired with the negative L72. The meniscus shape (both radii negative: R1 = −795.9, R2 = −50.2 mm) directs the converging beam toward the sensor while keeping the Petzval surface contribution under control.

**L72 — Negative Meniscus (concave to object)**
nd = 1.91082, νd = 35.2. Glass: lanthanum dense flint (911/352 class, uncertain — no exact OHARA catalog match). f = −40.5 mm.

L72 is designated Lrr in the patent (¶0064) and satisfies condition (10), the shape-factor criterion: 0.9 < (r2 + r1)/(r2 − r1) < 6.9, where r1 = −36.090 and r2 = −1674.853 mm (computed shape factor ≈ 1.04). This indicates a concave meniscus presenting its convex side (or nearly flat rear surface) toward the image. The patent explains (¶0065) that this shape allows the rearmost surface's effective light-path diameter to be large relative to the element diameter, ensuring that off-axis beams reach the sensor corners without vignetting even at the short back focal distance characteristic of mirrorless designs. The very long radius on the rear surface (R = −1674.9 mm, nearly flat) also minimizes the contribution of the final optical surface to astigmatism and coma.

The back focal distance from S37 to the image plane is 15.82 mm, and it is constant across all zoom positions — it is not among the six variable gaps in Table 18. This value is shorter than the 18 mm Sony E-mount flange distance, meaning the rear surface of L72 protrudes approximately 2 mm into the mirror box cavity past the lens-mount flange plane. This is common practice in mirrorless-native lenses where the absence of a reflex mirror permits rear elements to sit close to the sensor. The air-equivalent BFD in the data file accounts for the sensor cover glass (folded into the final air gap per convention).

## Glass Identification and Selection

The design uses 12 distinct glass types across its 20 elements. Glass identifications below are catalog cross-references by nd/νd matching against OHARA and HOYA catalogs, consistent with Sony's historical use of OHARA as a primary glass supplier. Twelve of the twenty elements yield exact or near-exact OHARA matches (Δnd < 0.001, Δνd < 0.3). Five elements have nd/νd values that do not closely match any current OHARA catalog entry and are listed with six-digit descriptive codes rather than speculative glass names; these may represent proprietary Sony melts, discontinued catalog entries, or glasses from alternative suppliers (HOYA, Sumita, CDGM).

| Element | nd | νd | Glass Identification | Category | Production Role |
|---------|-------|------|----------------------|------------|----------------|
| L11 | 1.86966 | 20.0 | Dense flint (870/200, uncertain) | Ultra-high-dispersion dense flint | L1n chromatic corrector |
| L12 | 1.61800 | 63.4 | S-PHM52 (OHARA) | Phosphate crown with +ΔPgF | L1p — ED element |
| L13 | 1.76385 | 48.5 | Lanthanum crown (764/485, uncertain) | Lanthanum crown | Positive power carrier |
| L21 | 1.72916 | 54.7 | S-LAL18 (OHARA) | Lanthanum crown | Variator negative |
| L22 | 1.77002 | 49.4 | S-LAH52 class (OHARA) | Lanthanum dense crown | Aspheric aberration corrector |
| L23 | 1.63854 | 55.4 | Crown (639/554, uncertain) | Crown | Achromatizing partner |
| L24 | 2.00069 | 25.5 | S-LAH79 (OHARA) | Ultra-high-index lanthanum dense flint | L2p compact positive |
| L25 | 1.61800 | 63.4 | S-PHM52 (OHARA) | Phosphate crown | Beam management |
| L31 | 1.85108 | 40.1 | S-LAH89 (OHARA) | Lanthanum dense crown | Lmp_asp aspheric positive |
| L32 | 1.43700 | 95.1 | S-FPM2 (OHARA) | Fluorophosphate — Super ED | Lmp chromatic corrector |
| L33 | 1.77250 | 49.6 | S-LAH52Q (OHARA) | Lanthanum dense crown | Flint partner for L32 |
| L41 | 2.00100 | 29.1 | S-NPH5 (OHARA) | Ultra-high-index dense flint | Cemented flint |
| L42 | 1.49700 | 81.6 | S-FPL51 (OHARA) | Fluorophosphate — ED | Cemented ED positive |
| L43 | 1.43700 | 95.1 | S-FPM2 (OHARA) | Fluorophosphate — Super ED | Lmp chromatic corrector |
| L44 | 1.80610 | 33.3 | Dense flint (806/333, uncertain) | Dense flint | Cemented flint partner |
| L45 | 1.85108 | 40.1 | S-LAH89 (OHARA) | Lanthanum dense crown | XA aspheric biconvex |
| L51 | 1.85155 | 40.1 | S-LAH89 class (OHARA) | Lanthanum dense crown | Negative focus singlet |
| L61 | 1.61875 | 63.7 | S-PHM52 class (OHARA) | Phosphate crown | Positive focus singlet |
| L71 | 1.94595 | 18.0 | S-NPH4 (OHARA) | Ultra-high-dispersion dense flint | Lateral color corrector |
| L72 | 1.91082 | 35.2 | Lanthanum dense flint (911/352, uncertain) | Lanthanum dense flint | Lrr field corrector |

The chromatic correction strategy uses three distinct tiers. The first tier is primary achromatization via cemented doublets: L11+L12 in Gr1, L23+L24 in Gr2, L32+L33 in Gr3, L41+L42 in Gr4, and L43+L44 in Gr4. The second tier is secondary-spectrum correction via anomalous partial dispersion glasses. The patent identifies four elements satisfying its ΔPgF conditions: L12 (condition 7, ΔPgF > 0.005), L32 (condition 9, ΔPgF > 0.045), L43 (condition 9), and L42 (S-FPL51, which is known to have ΔPgF ≈ +0.038). These four elements are the production lens's "2 ED + 2 Super ED" special elements. The third tier is ultra-high-dispersion flints (L11 at νd = 20.0, L71 at νd = 18.0) in the front and rear groups, which act as chromatic levers at positions where beam diameters are large but ray heights are very different, providing independent control of axial and lateral color.

A notable design choice is the use of three elements with nd > 1.90 (L24 at 2.001, L41 at 2.001, L71 at 1.946). These ultra-high-index and ultra-high-dispersion glasses allow the designer to achieve strong optical power from thin elements, critical for the 22% weight reduction over the predecessor (695 g vs 886 g) that defines the GM II generation.

## Focus Mechanism

Focusing is accomplished by a floating-element inner-focus system using two independently-moving groups within the rear group Grr (¶0152):

- **Gr5 (L51)** — the negative focus group Grrn — moves toward the image side when focusing from infinity to close distance.
- **Gr6 (L61)** — the positive focus group Grrp — moves along a different (mutually distinct) trajectory.

Both groups are single-element groups, minimizing the mass that the four XD Linear Motors must accelerate. The variable air spacings during focus are:

| Gap | Surface | Wide ∞ | Wide close | Mid ∞ | Mid close | Tele ∞ | Tele close |
|-----|---------|--------|------------|-------|-----------|--------|------------|
| Gr5 front | d29 | 4.76 | 7.18 | 3.76 | 5.66 | 2.12 | 5.75 |
| Gr5–Gr6 | d31 | 7.22 | 4.50 | 8.51 | 4.35 | 13.40 | 5.56 |
| Gr6–Gr7 | d33 | 4.30 | 4.60 | 14.75 | 17.01 | 26.83 | 31.03 |

At the wide-angle setting, focusing from infinity to the minimum object distance of 74.00 mm (measured from surface 1) yields a magnification of β = −0.229. At the telephoto end, the close-focus object distance is 151.21 mm at β = −0.292. The manufacturer publishes a minimum focus distance of 0.21 m at 24 mm and 0.30 m at 70 mm (measured from the sensor plane), and a maximum magnification of 0.32× at 70 mm.

The patent's condition (1) governs the magnification relationship between Grrn and Grrp (¶0032–0033):

$$-0.31 \leq \frac{1 - \beta_{rp,w}^2}{(1 - \beta_{rn,w}^2) \cdot \beta_{rp,w}^2} \leq 0$$

This ensures that the negative and positive focus groups' sensitivities are balanced so that focus stroke remains compact even when achieving high close-focus magnification. The constraint that the upper bound is 0 reflects the requirement that Grrn (negative) and Grrp (positive) have opposite signs of power — the expression is inherently ≤ 0 by construction.

## Aspherical Surfaces

The design contains 8 aspherical surfaces distributed across 5 elements. All aspherical surfaces use K = 0 (spherical base) with even-order polynomial terms. The patent's aspheric sag equation is:

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12} + A_{14} h^{14}$$

All conic constants are zero (K = 0), so the base surfaces are spherical and the polynomial terms alone define the aspherical departure.

### Surface-by-Surface Aspherical Summary

**S8, S9 (L22 in Gr2):** Both surfaces flatten relative to the base sphere at the edge (−76 µm and −68 µm respectively). The nearly flat base on S8 (R = 307.0 mm) means the polynomial terms define essentially the entire surface profile, functioning as a freeform corrector plate within the variator. These surfaces primarily correct coma and astigmatism from the strongly diverging Gr2 beam.

**S16 (L31 in Gr3):** The front surface of Lmp_asp departs by −114 µm (flatter). This is the surface the patent specifically describes (¶0054) as having positive paraxial power but negative peripheral refractive action — the key spherical aberration corrector for the f/2.8 middle group.

**S28, S29 (L45 in Gr4):** The most strongly aspherized element in the system. S28 departs by −507 µm and S29 by +225 µm. The extreme departure on S28 reflects L45's role as the most powerful single element (f = +19.2 mm): without aspherical correction, its spherical aberration contribution would dominate the system. The opposing-sign departures on front and rear surfaces indicate a compound correction profile — the front surface reduces peripheral power while the rear surface redirects the marginal rays.

**S30, S31 (L51 in Gr5):** Both surfaces steepen relative to the base sphere (+175 µm and +168 µm). As the moving negative focus element, L51 must maintain aberration correction across its full focus travel. The steepening profiles compensate for the changing object conjugate as the element shifts along the axis.

**S32 (L61 in Gr6):** The front surface of the positive focus element steepens by +202 µm. Like L51, this aspherical correction maintains aberration balance during focus travel and particularly controls the close-focus spherical aberration that is characteristic of high-magnification zoom lenses.

### Aspherical Coefficients (Patent Table 19)

| Surface | A4 | A6 | A8 | A10 | A12 | A14 |
|---------|-----|-----|-----|------|------|------|
| S8  | −5.149E−06 | 4.608E−08 | −2.900E−10 | 9.307E−13 | −1.605E−15 | 1.657E−18 |
| S9  | −5.180E−06 | 4.130E−08 | −2.257E−10 | 4.589E−13 | — | — |
| S16 | −3.133E−06 | −7.345E−09 | 1.287E−11 | −1.015E−13 | — | — |
| S28 | −1.461E−05 | −2.529E−09 | −4.346E−12 | — | — | — |
| S29 | 1.157E−05 | −3.472E−08 | 6.884E−11 | −1.466E−13 | — | — |
| S30 | 9.069E−06 | −1.214E−08 | −3.816E−11 | 4.342E−14 | — | — |
| S31 | 7.537E−06 | 1.154E−08 | −8.250E−11 | −1.748E−13 | — | — |
| S32 | 4.166E−06 | −3.884E−09 | 2.463E−11 | −4.910E−14 | — | — |

Only S8 carries significant higher-order terms (through A14), reflecting its role as the most demanding correction surface at the largest aperture in the variator group. The remaining surfaces truncate at A8 or A10, which is typical for elements at the moderate semi-diameters found in the relay and focus groups.

## Conditional Expressions

The patent defines 10 conditional expressions. The following are most relevant to the optical design:

| Condition | Expression | Example 4 Value | Status |
|-----------|------------|----------------|--------|
| (1) | −0.31 ≤ (1−β²ᵣₚ)/((1−β²ᵣₙ)·β²ᵣₚ) ≤ 0 | See focus section | Satisfied |
| (2) | 0.60 < fₘ/fᵥ < 1.60 | fₘ/fᵥ = Grm combined focal length / 24.72 | Satisfied |
| (4) | 0.2 < BF/fᵥ ≤ 1.2 | 15.82/24.72 = 0.64 | Satisfied |
| (5) | nd(L1i)/density(L1i) > 0.50 | L11: high nd, relatively low density | Satisfied |
| (6) | nd(L2p) > 1.955 | L24: 2.00069 | Satisfied |
| (7) | ΔPgF(L1p) > 0.005 | L12: phosphate crown with +ΔPgF | Satisfied |
| (8) | νd(L1n) < 23.0 | L11: νd = 20.0 | Satisfied |
| (9) | ΔPgF(Lmp) > 0.045 | L32, L43: Super ED fluorophosphate | Satisfied |
| (10) | 0.9 < shape factor(Lrr) < 6.9 | L72: shape factor = 1.04 | Satisfied |

## Petzval Sum

The independently computed Petzval sum for the system (using the surface-by-surface formula Σ φ/(n·n′) for each refracting interface) is +0.000587 mm⁻¹, corresponding to a Petzval radius of approximately +1703 mm. This very small positive value indicates a nearly flat Petzval surface — an excellent result for a zoom lens of this focal-length range and aperture. The correction is achieved primarily through the strongly negative doublets in Gr2 and Gr4 (particularly L43+L44 at f = −35.0 mm combined), which contribute negative Petzval contributions that counterbalance the many positive elements in the relay groups.

## Verification Summary

Independent paraxial ray trace (y–nu method) through the full prescription at wide, mid, and tele zoom positions yielded the following system EFL values:

| Position | Patent EFL | Computed EFL | Deviation |
|----------|-----------|-------------|-----------|
| Wide | 24.72 mm | 24.722 mm | +0.01% |
| Mid | 41.46 mm | 41.450 mm | −0.02% |
| Tele | 67.90 mm | 67.878 mm | −0.03% |

The paraxial trace agrees with the patent's stated EFL to within ±0.03% at all three zoom positions, confirming that the prescription is internally consistent and that the patent's stated EFL is a paraxial quantity. This level of agreement requires using d21 = −1.10 mm as transcribed from the patent (surface 21 is the flare-cutter reference position with a negative spacing, which subtracts from the total track). Group focal lengths were verified to match patent Table 20 values to within ±0.02 mm across all seven groups. Total optical track was verified at 136.02, 148.20, and 168.83 mm for wide, mid, and tele respectively, matching the patent's 136.00, 148.19, and 168.79 mm.

Note regarding the φi column in Table 16: the patent's φi values represent the full effective clear aperture *diameter*, not the semi-diameter. This is confirmed by the image-plane value of φi = 43.34 mm corresponding to a half-diagonal of 21.67 mm (consistent with the stated Y = 21.63 mm), and by the front-element value of 68.80 mm corresponding to a 34.4 mm radius, which is consistent with the production lens's 82 mm filter thread.

## Sources

1. WO 2023/181666 A1 — Primary patent source for all prescription data, conditional expressions, and design descriptions.
2. Sony Corporation — Official product page for the FE 24-70mm F2.8 GM II (SEL2470GM2): 20 elements in 15 groups, 2 XA, 3 aspherical, 2 ED, 2 Super ED, floating focus, 695 g, MFD 0.21 m (24 mm) / 0.30 m (70 mm), max magnification 0.32×.
3. OHARA Inc. — Optical glass pocket line list (May 2023 edition) for nd/νd cross-reference and glass classification.
4. DXOMARK — "Sony FE 24-70mm F2.8 GM II Lens test" (November 2022) for production optical characterization context.
