# Canon RF 28-70mm F2 L USM — Optical Design Analysis

**Patent:** JP 2020-118807 A (Published 2020-08-06), Example A Main Optical System  
**Inventor:** Kohei Kimura (木村 公平), Canon Inc.  
**Filing date:** 2019-01-22  
**Manufacturer specification:** 19 elements in 13 groups, f/2 constant aperture, 28–70 mm zoom  

---

## 1. Overview and Context

The Canon RF 28-70mm F2 L USM, launched alongside the Canon EOS R system in September 2018, was the world's first autofocus full-frame zoom lens with a constant f/2 maximum aperture. This analysis examines the optical prescription disclosed as "Example A" in JP 2020-118807 A, a patent that nominally describes a converter device (コンバータ装置) but whose Example A main optical system corresponds closely to the production RF 28-70mm F2 L USM.

The patent was filed by Canon on January 22, 2019 — approximately four months after the lens's commercial release — and covers the use of a relay (re-imaging) optical system that can be placed between the main lens and sensor to independently adjust field curvature. The main optical systems (Examples A, B, C) are provided as reference designs for mating with the converter; Example A is a four-group zoom lens with a 2.35× zoom ratio, F/2.06 maximum aperture, and focal length range of 28.9–67.9 mm, aligning precisely with the RF 28-70mm F2's marketed specifications.

The RF mount's 54 mm throat diameter and 20 mm flange distance were critical enablers for this design. The short back focus permits large-diameter rear elements to be placed close to the sensor, which reduces peripheral aberrations at f/2 — a constraint that made an f/2 constant-aperture standard zoom impractical on the EF mount with its 44 mm flange distance.

### 1.1 Patent Data Verification

Independent paraxial ray trace of the full prescription yields the following:

| Position | Patent EFL | Computed EFL | Patent F/# |
|----------|-----------|-------------|-----------|
| Wide     | 28.90 mm  | 28.90 mm    | 2.06      |
| Mid      | 50.00 mm  | 50.01 mm    | 2.06      |
| Tele     | 67.90 mm  | 67.92 mm    | 2.06      |

The agreement is effectively exact, confirming correct transcription of the patent data. Group focal lengths also verify within ±0.01 mm of the patent-stated values (G1: +104.99, G2: −19.18, G3: +47.05, G4: +44.67).

---

## 2. Optical Architecture

The design is a four-group positive-negative-positive-positive zoom with inner focusing. This is a classic zoom topology, but the f/2 constant aperture demands exceptionally well-corrected aberrations at every zoom position, driving the high element count (19 elements) and extensive use of special glass.

### 2.1 Group Structure

| Group | Elements | Focal Length | Power | Role |
|-------|---------|-------------|-------|------|
| G1 (L1–L3) | 3 elements, 2 sub-groups | +104.99 mm | Positive | Front collector — gathers light and sets the entrance pupil diameter |
| G2 (L4–L8) | 5 elements, 3 sub-groups | −19.17 mm | Negative | Variator — moves rearward to zoom from wide to tele |
| G3 (L9–L12) | 4 elements, 3 sub-groups | +47.05 mm | Positive | Compensator/focuser — contains the aperture stop (SP) |
| G4 (L13–L19) | 7 elements, 5 sub-groups | +44.67 mm | Positive | Rear image-forming group — close to sensor via RF mount short flange |

This yields 2 + 3 + 3 + 5 = 13 sub-groups, matching Canon's stated "13 groups."

A flare-cut stop (AP) is positioned between Groups 3 and 4, near the primary image plane. The patent encodes this as a flat surface (r = ∞) with a negative thickness (d = −2.59 mm), which represents a backwards offset from the first surface of Group 4. For data-file encoding, this negative thickness is absorbed into the preceding air gap (d₂₁): the effective gap at each zoom position becomes d₂₁(patent) − 2.59 mm. The AP contributes no refractive power and is omitted as a separate surface.

### 2.2 Zoom Movement

The zoom is accomplished by moving Groups 2, 3, and 4 while Group 1 remains fixed. The variable air spacings at each zoom position are:

| Gap | Wide (28.9 mm) | Mid (50.0 mm) | Tele (67.9 mm) | Δ (W→T) |
|-----|---------------|--------------|---------------|---------|
| d₅ (G1–G2) | 3.93 mm | 20.98 mm | 29.21 mm | +25.28 mm |
| d₁₃ (G2–G3) | 15.61 mm | 6.51 mm | 2.27 mm | −13.34 mm |
| d₂₁ (G3–G4)* | 6.08 mm | 2.00 mm | 1.02 mm | −5.06 mm |
| d₃₄ (G4–image)† | 19.71 mm | 28.93 mm | 34.37 mm | +14.66 mm |

*d₂₁ values include the absorbed flare-cut offset (patent d₂₁ − 2.59 mm).  
†d₃₄ values include the cover glass path (patent d₃₄ + 1.96 mm CG glass + 2.75 mm air).

The total track increases from approximately 157.5 mm (wide) to 179.1 mm (tele), consistent with the lens's external barrel extension during zooming. The RF 28-70mm F2 is not an internally-zooming design — the barrel extends approximately 21.5 mm when zooming from 28 mm to 70 mm.

All moving groups shift rearward during zoom to telephoto, but at different rates. Group 2 (the variator) has the largest excursion (+25.3 mm), which is characteristic: the variator's movement relative to the fixed front group is what changes the system magnification and hence the focal length.

### 2.3 Focusing Mechanism

Canon specifies "inner focusing" with a ring-type USM (ultrasonic motor). The patent itself does not explicitly label the focusing group for Example A (it is not the patent's subject), but the architecture strongly implies that Group 3 (L9–L12) is the inner focus group:

1. Group 3 contains the aperture stop (S14 is its first surface), and the powered elements L9–L12 follow immediately after it — a common arrangement for the focusing group in modern zoom designs.
2. The four elements of Group 3 (L9–L12) are of moderate size — smaller than G1 or G4 — making them suitable for rapid USM-driven focusing.
3. The patent text (paragraph 16) references "a lens that moves during focusing" in the main optical system, and the converter patent's variable-gap analysis for the re-imaging system requires the main lens's focus group to move in coordination with field curvature adjustment.

The patent provides only infinity-focus spacings at each zoom position. No close-focus data is available for Example A. The minimum focus distance of 0.39 m (0.18× maximum magnification) is per Canon's published specification.

---

## 3. Aspherical Surfaces

Canon specifies **four aspherical elements bearing five aspherical surfaces**: two ground-and-polished (G&P) aspherical elements and two glass-molded (GMo) aspherical elements. The Canon Hong Kong product page specifically notes that the glass-molded aspherics were produced on "a new type of glass molding machine with a significantly higher level of aspheric accuracy."

All five aspherical surfaces in the patent use a conic constant K = 0 (spherical base curve) with even-order polynomial deformation terms through A12. The sag equation used in the patent is:

$$
X = \frac{(1/R) \cdot H^2}{1 + \sqrt{1 - (1+K)(H/R)^2}} + A_2 H^2 + A_4 H^4 + A_6 H^6 + A_8 H^8 + A_{10} H^{10} + A_{12} H^{12}
$$

The patent's formula explicitly includes an A2 (second-order) term. In all five numerical prescriptions, no A2 value is given, implying A2 = 0. The A2 term is not part of the project's data-file schema (which starts at A4), and since A2 = 0 throughout, the coefficients transfer directly.

### 3.1 Surface S6 — L4 Front (Group 2 Variator)

| Parameter | Value |
|-----------|-------|
| R | 167.209 mm |
| K | 0 |
| A4 | +4.38428 × 10⁻⁶ |
| A6 | −2.70954 × 10⁻⁹ |
| A8 | +4.53124 × 10⁻¹² |
| A10 | −5.11345 × 10⁻¹⁶ |
| A12 | +2.85627 × 10⁻¹⁸ |

This is the front surface of L4, a strong negative meniscus (f = −30.6 mm) at the entrance to the variator. The aspheric departure is moderate: approximately +42 µm at h = 10 mm, increasing to +155 µm at h = 14 mm. The positive A4 term steepens the surface at the margins, adding negative power at the rim. This corrects higher-order spherical aberration introduced by the high-aperture beam passing through the variator.

**Manufacturing classification:** Likely glass-molded (GMo). The element is thin (d = 1.55 mm), uses S-LAM54 (nd = 1.769) — a lanthanum medium crown available in moldable formulations — and is positioned in the variator where diameters are moderate.

### 3.2 Surface S13 — L8 Rear (Group 2 Variator)

| Parameter | Value |
|-----------|-------|
| R | −64.186 mm |
| K | 0 |
| A4 | −2.04866 × 10⁻⁶ |
| A6 | −6.82741 × 10⁻¹⁰ |
| A8 | −2.06847 × 10⁻¹¹ |
| A10 | +9.28973 × 10⁻¹⁴ |
| A12 | −1.47499 × 10⁻¹⁶ |

This is the rear (exit) surface of cemented doublet D3, specifically the rear surface of L8 (S-LAH60, nd = 1.883). The departure is approximately −22 µm at h = 10 mm, growing to −96 µm at h = 14 mm. The negative A4 flattens the concave surface at the margins, reducing the divergence of oblique ray bundles exiting the variator.

**Manufacturing classification:** Likely glass-molded (GMo). L8 is thin (d = 1.20 mm) and its glass (S-LAH60, nd = 1.883) may be available in moldable formulations. Being the last surface of Group 2, it serves as a "clean-up" asphere for the variator's residual aberrations across all zoom positions.

### 3.3 Surface S18 — L10 Rear (Group 3 Compensator)

| Parameter | Value |
|-----------|-------|
| R | −87.269 mm |
| K | 0 |
| A4 | +2.64029 × 10⁻⁶ |
| A6 | −2.43625 × 10⁻⁹ |
| A8 | −1.84031 × 10⁻¹² |
| A10 | −2.30946 × 10⁻¹⁷ |
| A12 | +4.15861 × 10⁻¹⁸ |

The rear surface of L10, a thick biconvex element (d = 9.50 mm, f = +35.8 mm) that is the primary power contributor in Group 3. The departure is approximately +24 µm at h = 10 mm, growing to +81 µm at h = 14 mm. The positive A4 steepens the concave rear surface, adding negative power at the rim to flatten the tangential field.

**Manufacturing classification:** Likely ground and polished (G&P). L10 is the thickest element in Group 3 (9.50 mm), uses a high-index lanthanum glass (S-LAH65V, nd = 1.804) that is typically not available in precision moldable grades at this size, and being part of the likely inner focus group, it carries the full-aperture beam at all zoom positions. The large clear aperture demands the higher-accuracy G&P process.

### 3.4 Surfaces S30 and S31 — L17 Double Asphere (Group 4 Rear)

#### S30 (L17 front):

| Parameter | Value |
|-----------|-------|
| R | −1000.000 mm |
| K | 0 |
| A4 | −4.43289 × 10⁻⁵ |
| A6 | −1.56326 × 10⁻⁸ |
| A8 | +3.31996 × 10⁻¹⁰ |
| A10 | −1.13489 × 10⁻¹² |
| A12 | +2.02156 × 10⁻¹⁵ |

#### S31 (L17 rear):

| Parameter | Value |
|-----------|-------|
| R | 119.129 mm |
| K | 0 |
| A4 | −2.52968 × 10⁻⁵ |
| A6 | +2.32789 × 10⁻⁸ |
| A8 | +3.09529 × 10⁻¹⁰ |
| A10 | −9.01793 × 10⁻¹³ |
| A12 | +1.19241 × 10⁻¹⁵ |

L17 is a double-asphere element — both surfaces are aspherical — positioned in the rear portion of Group 4, close to the sensor. The base radii are nearly flat on the front (R = −1000 mm, essentially a plano surface) and moderately convex on the rear (R = +119 mm), making this nominally a weak negative meniscus (f_thin = −124.6 mm) in its spherical base form.

The aspherical departures are extremely large:

| Height h | S30 departure | S31 departure |
|----------|---------------|---------------|
| 5 mm | −28 µm | −15 µm |
| 8 mm | −181 µm | −93 µm |
| 10 mm | −435 µm | −207 µm |
| 12 mm | −875 µm | −367 µm |
| 14 mm | −1544 µm | −533 µm |

At h = 14 mm, S30's departure exceeds 1.5 mm — an enormous aspherical correction that radically reshapes the wavefront. The front surface goes from essentially flat (R = −1000 mm) to strongly concave at the rim due to the dominant negative A4 coefficient. The rear surface similarly flattens dramatically at the margins, converting what is nominally a weak meniscus into a powerful field-flattening and distortion-correcting element.

**Manufacturing classification:** Almost certainly ground and polished (G&P). The enormous aspheric departures (>1 mm on S30) are far beyond what glass molding can achieve with optical precision. The glass is S-LAH66 (nd = 1.854), a conventional lanthanum crown not available in low-Tg moldable grades. Ground-and-polished aspherics at this departure level require magnetorheological finishing (MRF) or similar sub-aperture polishing technology.

The double-asphere L17 is arguably the most critical single element in the entire design. Its position near the image plane — where chief ray heights are large but marginal ray heights are decreasing — makes it uniquely effective at controlling field-dependent aberrations (field curvature, astigmatism, and distortion) independently of axial aberrations (spherical, longitudinal chromatic). This is precisely the zone where the RF mount's short flange distance provides the mechanical clearance to place such a complex element.

### 3.5 Aspherical Summary

| Surface | Element | Group | Departure @ h=10mm | Manufacturing (inferred) |
|---------|---------|-------|--------------------|-----------------------|
| S6 | L4 front | G2 | +42 µm | Glass-molded (GMo) |
| S13 | L8 rear | G2 | −22 µm | Glass-molded (GMo) |
| S18 | L10 rear | G3 | +24 µm | Ground & polished (G&P) |
| S30 | L17 front | G4 | −435 µm | Ground & polished (G&P) |
| S31 | L17 rear | G4 | −207 µm | Ground & polished (G&P) |

This yields 2 GMo elements (L4, L8) and 2 G&P elements (L10, L17), matching Canon's stated "two ground and polished aspheric lenses, two glass-molded aspheric lenses."

---

## 4. Glass Selection and Chromatic Correction

### 4.1 Glass Catalog Identification

All 19 glasses are exact catalog matches (Δnd = 0.00000, Δνd ≤ 0.04 in all cases).

| Element | nd | νd | 6-digit Code | Glass | Catalog | Glass Type |
|---------|----|----|-------------|-------|---------|-----------|
| L1 | 1.80810 | 22.8 | 808/228 | S-NPH1 | OHARA | Short flint (APD) |
| L2 | 1.72916 | 54.7 | 729/547 | S-LAL18 | OHARA | Lanthanum crown |
| L3 | 1.77250 | 49.6 | 773/496 | S-LAH55V | OHARA | Lanthanum crown |
| L4 | 1.76902 | 49.3 | 769/493 | S-LAM54 | OHARA | Lanthanum medium crown |
| L5 | 1.76385 | 48.5 | 764/485 | **M-TAFD305** | **HOYA** | Lanthanum crown (PGM-designated) |
| L6 | 1.85478 | 24.8 | 855/248 | S-NPH5 | OHARA | Heavy phosphate flint (APD) |
| L7 | 1.48749 | 70.2 | 487/702 | S-FSL5 | OHARA | Fluorophosphate crown |
| L8 | 1.88300 | 40.8 | 883/408 | S-LAH60 | OHARA | Lanthanum heavy crown |
| L9 | 1.72916 | 54.7 | 729/547 | S-LAL18 | OHARA | Lanthanum crown |
| L10 | 1.80400 | 46.6 | 804/466 | S-LAH65V | OHARA | Lanthanum crown |
| L11 | 1.73800 | 32.3 | 738/323 | S-NBH8 | OHARA | Barium heavy flint |
| L12 | 1.49700 | 81.5 | 497/815 | **S-FPL51** | OHARA | **UD glass** (APD) |
| L13 | 1.43875 | 94.7 | 439/947 | **S-FPL53** | **OHARA** | **Super UD glass** (APD) |
| L14 | 1.59522 | 67.7 | 595/677 | S-FPM2 | OHARA | Fluorophosphate crown |
| L15 | 1.49700 | 81.5 | 497/815 | **S-FPL51** | OHARA | **UD glass** (APD) |
| L16 | 1.80610 | 33.3 | 806/333 | S-NBH56 | OHARA | Barium heavy flint |
| L17 | 1.85400 | 40.4 | 854/404 | S-LAH66 | OHARA | Lanthanum crown |
| L18 | 1.48749 | 70.2 | 487/702 | S-FSL5 | OHARA | Fluorophosphate crown |
| L19 | 2.00100 | 29.1 | 201/291 | S-NPH2 | OHARA | Heavy phosphate flint (APD) |

**Correction note:** L5 was previously listed as uncertain. It is an exact match to HOYA M-TAFD305 (nd = 1.76385, νd = 48.49). The M-prefix indicates this glass is designated for precision glass molding, though the element itself (being part of cemented doublet D2) is likely conventionally fabricated. L13 was previously described as a possible Canon proprietary glass formulation; it is in fact OHARA S-FPL53 (nd = 1.43875, νd = 94.66), a standard catalog Super UD glass used by Canon as their "Super UD" element.

### 4.2 Special Dispersion Glasses

Canon's specification lists "two UD elements and one Super UD element." These map to:

**L12 (S-FPL51, νd = 81.5):** Ultra-low Dispersion glass with anomalous partial dispersion. Positioned in cemented doublet D4 within Group 3, paired with the high-dispersion L11 (S-NBH8, νd = 32.3). This combination corrects secondary spectrum in the compensator/focus group.

**L13 (S-FPL53, νd = 94.7):** The Super UD element. OHARA S-FPL53 is a fluorophosphate crown with the highest Abbe number in OHARA's catalog glass line and strong anomalous partial dispersion. Its placement at the front of Group 4, where marginal ray heights are large, maximizes its chromatic correction contribution. The nearly-plano rear surface (R₂ = −665 mm) minimizes surface reflections and sensitivity to centering errors.

**L15 (S-FPL51, νd = 81.5):** The second UD element, in cemented doublet D5 within Group 4, paired with high-dispersion L16 (S-NBH56, νd = 33.3). This provides additional secondary-spectrum correction in the rear group.

The placement strategy is deliberate: all three anomalous-dispersion elements are concentrated in Groups 3 and 4, which handle the final image formation. The variator (Group 2) uses heavy phosphate flint (S-NPH5 in D2) and lanthanum crown (S-LAH60 in D3) for its chromatic correction — the NPH glass contributes some anomalous dispersion benefit, but the primary secondary-spectrum correction is handled by the UD and Super UD elements in the rear groups where the converging beam is being brought to focus.

### 4.3 Heavy Phosphate Flint (S-NPH) Family

Three elements use OHARA's S-NPH heavy phosphate flint series — L1 (S-NPH1, nd = 1.808), L6 (S-NPH5, nd = 1.855), and L19 (S-NPH2, nd = 2.001). This family is characterized by positive anomalous partial dispersion (dPgF > 0), which means their blue-violet dispersion is higher than the normal glass line predicts. When paired with crown glasses in cemented doublets, the NPH glasses provide secondary-spectrum correction in addition to primary chromatic correction. The use of three NPH elements across the full extent of the optical system (front, variator, and rear) reflects a coordinated strategy for chromatic correction.

### 4.4 Ultra-High-Index Glass: L19 (nd = 2.001)

L19 is the rearmost positive element of the design, using S-NPH2 — a heavy phosphate flint with nd = 2.00100. This is among the highest refractive indices used in any production camera lens. With nd > 2, even moderate curvatures produce significant refractive power: L19's thin-lens focal length is +36.2 mm despite having radii of 50.0 mm and −131.6 mm. In a conventional glass (nd ≈ 1.5), equivalent curvatures would yield roughly f = +72 mm — requiring much steeper curves for the same power, which would dramatically worsen higher-order aberrations.

The ultra-high index is especially valuable this close to the sensor, where any element curvature is amplified in its effect on off-axis ray paths. By minimizing curvature at full power, L19 keeps the peripheral illumination uniform across the full 43.3 mm image circle — a critical requirement at f/2.

### 4.5 Petzval Sum

The computed Petzval sum for the full system is +0.00108 mm⁻¹, corresponding to a Petzval radius of −926 mm. This is an extraordinarily flat Petzval surface for a zoom lens, indicating very well-controlled intrinsic field curvature. The positive sign (backward-curving Petzval surface) means the natural tendency is toward undercorrected field curvature, which the aspherical elements (particularly L17) compensate.

---

## 5. Element-by-Element Analysis

### Group 1: Front Collector (L1–L3, f = +104.99 mm)

**Cemented Doublet D1 (L1 + L2):**
The front doublet consists of a thin negative meniscus L1 (S-NPH1, nd = 1.808, νd = 22.8, f = −160.5 mm) cemented to a thick positive meniscus L2 (S-LAL18, nd = 1.729, νd = 54.7, f = +136.3 mm). The doublet's combined thin-lens focal length is +901 mm — very weakly positive, essentially acting as a corrector plate rather than a power element. Its primary role is achromatic correction: the negative flint cancels the chromatic contribution of the positive crown, establishing a color-neutral entrance to the system.

**L3 (Positive Meniscus):**
S-LAH55V lanthanum crown (nd = 1.773, νd = 49.6), f = +121.5 mm. This meniscus contributes most of Group 1's positive power. Its meniscus shape (convex surface toward the object, R₁ = 59.0 mm, R₂ = 158.7 mm) helps control spherical aberration by bending the marginal rays gradually rather than abruptly.

Group 1 is the largest-diameter element group. At f/2 and 28 mm wide angle, the entrance pupil diameter is approximately 14 mm, but accounting for the telephoto-end EP (33 mm diameter) and off-axis chief ray heights, the front elements must clear semi-diameters approaching 43–44 mm (consistent with the 95 mm filter thread).

### Group 2: Variator (L4–L8, f = −19.17 mm)

The variator is the heart of the zoom mechanism. Its strong negative power (f = −19 mm) diverges the beam from Group 1, and its axial position controls the system's overall focal length.

**L4 (Strong Negative Meniscus, 1× Asph):**
S-LAM54 (nd = 1.769, νd = 49.3), f = −30.6 mm. The dramatic radius difference (R₁ = 167 mm, R₂ = 20.6 mm) creates a deeply curved meniscus that bends marginal rays outward aggressively. The aspherical front surface (S6) fine-tunes this divergence to control zonal spherical aberration.

**Cemented Doublet D2 (L5 + L6):**
An achromatic pair consisting of biconcave L5 (M-TAFD305, nd = 1.764, νd = 48.5, f = −22.5 mm) cemented to biconvex L6 (S-NPH5, nd = 1.855, νd = 24.8, f = +20.5 mm). The doublet's combined focal length is +222 mm, providing gentle positive correction within the overwhelmingly negative variator. The identification of L5 as HOYA M-TAFD305 is noteworthy — it is the only non-OHARA glass in the design. Canon's use of a HOYA glass here may reflect either a performance advantage of this specific melt or supply chain considerations. The M-prefix indicates the glass is PGM-compatible, though L5 itself (within a cemented doublet) is conventionally fabricated.

**Cemented Doublet D3 (L7 + L8):**
L7 is a positive meniscus (f = +71.5 mm) of S-FSL5 (nd = 1.487, νd = 70.2) — a low-index, low-dispersion fluorophosphate. L8 is a negative meniscus (f = −30.8 mm) of S-LAH60 (nd = 1.883, νd = 40.8) with an aspherical rear surface (S13). The doublet's combined focal length is −54 mm, contributing additional negative power. Despite the individual elements having opposite signs, the pair works as a negative achromatic corrector. The asphere on S13 serves as a "clean-up" correction for oblique aberrations at the variator's exit, reducing coma and astigmatism that would otherwise degrade performance across the zoom range.

### Group 3: Compensator / Focus Group (L9–L12, f = +47.05 mm)

This group immediately follows the aperture stop (S14) and is the probable inner-focus group.

**L9 (Plano-Convex):**
S-LAL18 lanthanum crown (nd = 1.729, νd = 54.7), f = +76.5 mm. The flat rear surface (R₂ = ∞) makes this a simple positive converging element that begins refocusing the diverged beam from Group 2.

**L10 (Thick Biconvex, 1× Asph):**
S-LAH65V (nd = 1.804, νd = 46.6), f = +35.8 mm. This is the dominant power element in Group 3, with the thickest center (9.50 mm) of any element in the group. The aspherical rear surface (S18) provides approximately +24 µm of departure at h = 10 mm, correcting spherical aberration and flattening the tangential field. If Group 3 is indeed the focus group, L10 is the largest and heaviest element the USM must move during autofocus.

**Cemented Doublet D4 (L11 + L12):**
An achromatic pair optimized for secondary spectrum correction. L11 (S-NBH8, nd = 1.738, νd = 32.3) is a biconcave high-dispersion negative element (f = −22.5 mm); L12 (S-FPL51, nd = 1.497, νd = 81.5) is a positive meniscus UD glass (f = +58.3 mm). The doublet's combined thin-lens focal length is −36.5 mm — negative overall, which means it acts as a field-flattening achromatic corrector within the otherwise-positive Group 3. The UD glass's anomalous partial dispersion is essential here: a conventional crown would leave uncorrected secondary spectrum that would manifest as purple fringing at f/2.

### Group 4: Rear Image-Forming Group (L13–L19, f = +44.67 mm)

Group 4 is the largest group by element count (7 elements in 5 sub-groups) and benefits directly from the RF mount's short back focus. The last surface sits only about 15 mm (at wide) to 30 mm (at tele) from the sensor, which is mechanically possible only with the RF mount's 20 mm flange distance.

**L13 (Super UD Biconvex):**
OHARA S-FPL53 (nd = 1.439, νd = 94.7), f = +66.2 mm. The sole Super UD element, positioned at the front of Group 4 where marginal ray heights are largest. This glass's extreme anomalous partial dispersion provides powerful correction of secondary longitudinal chromatic aberration. The nearly-plano rear surface (R₂ = −665 mm) minimizes surface reflections and sensitivity to centering errors.

**L14 (Biconvex):**
S-FPM2 fluorophosphate crown (nd = 1.595, νd = 67.7), f = +55.2 mm. A straightforward positive element that shares the convergence load with L13, reducing the curvature required on any single surface.

**Cemented Doublet D5 (L15 + L16):**
L15 is the second UD element (S-FPL51, nd = 1.497, νd = 81.5), a biconvex positive with f = +84.9 mm. L16 is a biconcave negative of barium heavy flint (S-NBH56, nd = 1.806, νd = 33.3), f = −43.9 mm. The doublet's combined focal length is −90.9 mm — net negative, serving as a secondary-spectrum-correcting field flattener.

**L17 (Double Asphere, Negative Meniscus):**
S-LAH66 (nd = 1.854, νd = 40.4), f = −124.6 mm. This is the most optically sophisticated single element in the design (discussed in detail in Section 3.4). Both surfaces carry enormous aspherical departures (S30 up to 1.5 mm, S31 up to 0.5 mm). Its position near the image plane makes it the primary corrector for field curvature, astigmatism, distortion, and lateral chromatic aberration. The double-asphere configuration provides twice the degrees of freedom of a single asphere, enabling simultaneous correction of multiple field-dependent aberrations.

**Cemented Doublet D6 (L18 + L19):**
The final optical doublet before the sensor. L18 is S-FSL5 (nd = 1.487, νd = 70.2), a biconcave negative, f = −45.6 mm. L19 is S-NPH2 (nd = 2.001, νd = 29.1), a biconvex positive with f = +36.2 mm. The doublet has a combined focal length of +175.9 mm — gently positive.

The pairing of the lowest-index glass in the system (L18, nd = 1.487) with the highest-index glass (L19, nd = 2.001) is deliberate: the extreme index differential at the cemented junction (Δnd = 0.514) creates a powerful chromatic corrector with minimal surface curvature. L19's nd = 2.001 means that even the weak curvatures of its surfaces refract strongly, keeping the element compact and reducing higher-order surface contributions to aberrations. This is the element that most directly exploits the RF mount's short flange distance — its rear surface sits only millimeters from the sensor plane.

---

## 6. Cemented Doublet Summary

| Doublet | Elements | Combined f | Group | Primary Role |
|---------|---------|-----------|-------|-------------|
| D1 | L1 + L2 | +901 mm | G1 | Front achromatic corrector |
| D2 | L5 + L6 | +222 mm | G2 | Variator achromatic pair |
| D3 | L7 + L8 | −54 mm | G2 | Variator negative corrector (asph) |
| D4 | L11 + L12 | −37 mm | G3 | Secondary spectrum corrector (UD) |
| D5 | L15 + L16 | −91 mm | G4 | Secondary spectrum corrector (UD) |
| D6 | L18 + L19 | +176 mm | G4 | Ultra-high-index rear achromat |

---

## 7. Design Philosophy and RF Mount Advantages

The RF 28-70mm F2 represents a design philosophy where the optical prescription exploits the mechanical freedom of the RF mount to achieve performance that was physically impossible on the EF mount:

1. **Large rear elements close to the sensor.** L19 (nd = 2.001) and the preceding elements of Group 4 can be placed within 15–30 mm of the sensor, well inside the EF mount's 44 mm flange distance. This reduces the angle of incidence of marginal rays on the sensor and improves peripheral illumination.

2. **Double-asphere field corrector.** L17's position near the sensor plane would place it inside the mirror box of an SLR. On the RF mount, this element can sit in the space that was previously occupied by the reflex mirror, providing powerful field-dependent correction that conventional retro-focus zoom designs cannot match.

3. **Constant f/2 without compromising size.** The four-group zoom architecture, with its strong negative variator (f = −19 mm) and equally strong positive compensator and rear groups, maintains the exit pupil position and size across the zoom range, keeping the f/2 cone angle consistent. On the EF mount, achieving this would require either a longer total track or larger front-group diameters.

The combination of Super UD (S-FPL53), UD (S-FPL51), ultra-high-index glass (S-NPH2, nd > 2.0), and ground-and-polished aspherics represents the full arsenal of Canon's optical technology.

---

## 8. Data File Encoding Notes

### 8.1 Flare-Cut Stop (Patent S22)

Patent surface 22 is a flare-cut aperture (AP) encoded with d = −2.59 mm. This negative thickness represents a virtual offset — the AP sits 2.59 mm object-side of the first glass surface of Group 4. In the data file, this surface is omitted entirely and its negative thickness is absorbed into the preceding air gap: surface "21" carries d₂₁(effective) = d₂₁(patent) − 2.59 mm at each zoom position.

### 8.2 Cover Glass

Patent surfaces 35–36 describe a cover glass (nd = 1.51633, d = 1.96 mm) followed by an air gap (d = 2.75 mm, constant across zoom). These are excluded from the data file's surfaces array. The total physical path (1.96 + 2.75 = 4.71 mm) is added to d₃₄(patent) to produce the data file's BFD on surface "33."

### 8.3 Semi-Diameter Estimation

Semi-diameters are not provided in the patent. They were estimated by tracing marginal and chief rays at all three zoom positions (wide, mid, tele) through the clean prescription (no CG, flare-cut absorbed). The chief ray was traced at 80% of full field angle to model the ~20% corner vignetting typical of f/2 zoom lenses. The maximum beam footprint (marginal + chief) at each surface across all three zoom positions was taken, then 5% mechanical clearance applied and rounded to the nearest 0.5 mm.

The front group (G1) semi-diameters were capped at 44.5 mm, consistent with the 95 mm filter thread's internal clear aperture (~89 mm diameter). The telephoto position drives the front group SDs (largest entrance pupil: EP ≈ 33 mm diameter), while the wide position drives the variator SDs (largest chief ray heights). The stop semi-diameter is set to 16.0 mm — the physical iris opening required at the tele end; the renderer derives the correct entrance pupil at each zoom position from `nominalFno` via paraxial ray trace.

### 8.4 Focus Model Limitations

The patent provides infinity-focus data only. No close-focus variable spacing tables are available for Example A. The data file encodes all variable gaps as zoom-only (identical infinity/close values). Canon's published minimum focus distance of 0.39 m is recorded as `closeFocusM` for reference, but the focus slider will not produce physically meaningful results — zooming will work correctly, but focus variation is not modeled.

---

## 9. Corrections from Initial Draft

The following errors were identified during cross-verification and corrected in this revision:

1. **L5 glass identification:** Previously listed as "uncertain." Verified as an exact match to HOYA M-TAFD305 (nd = 1.76385, νd = 48.49; Δnd = 0.00000, Δνd = 0.01). This is the only non-OHARA glass in the design.

2. **L13 glass identification:** Previously described as "Canon proprietary Super UD formulation, intermediate between CaF₂ and S-FPL53." In fact, L13 is an exact match to OHARA S-FPL53 (nd = 1.43875, νd = 94.66; Δnd = 0.00000, Δνd = 0.04). It is a standard catalog glass, not a proprietary formulation.

3. **L7 element type:** Previously described as "negative meniscus." L7 (R₁ = −42.283, R₂ = −19.110, nd = 1.487) has a thin-lens focal length of +71.5 mm — it is a **positive meniscus** (concave toward the object). The combined D3 doublet is still negative (f = −54 mm), as the stronger negative power of L8 dominates.
