# Fujinon XF 16-55mm f/2.8 R LM WR — Optical Design Analysis

*Analysis of US Patent Application Publication No. 2016/0154221 A1, Example 1.*

---

## 1. Identification and provenance

The lens under analysis is the **Fujinon XF 16-55mm F2.8 R LM WR**, Fujifilm's weather-sealed standard zoom for the APS-C X mount, first announced in January 2015. The published patent filing most closely aligned with this product is:

| | |
|---|---|
| Application | US 2016/0154221 A1 |
| Priority | JP 2014-243845, filed 2 December 2014 |
| Applicant | FUJIFILM Corporation |
| Inventors | Taiga Noda; Michio Cho |
| Examples in filing | 3 numerical examples; this document analyses **Example 1** |

The patent discloses three closely related numerical examples of a five-group standard zoom; all three meet the stated design targets (small F-number across the full zoom range, aberration-corrected at high pixel counts). Example 1 is the variant whose paraxial specifications (EFL range 16.49–53.44 mm, F/2.88–2.89, image heights consistent with APS-C) match Fujifilm's marketed XF 16-55mm product most closely. Examples 2 and 3 are design-space alternatives with modified Conditional Formula values; they were not commercialised. The analysis below is confined to Example 1.

### 1.1 Marketed versus patent specifications

| Parameter | Patent Example 1 | Fujifilm marketed spec | Note |
|---|---|---|---|
| Focal length (d-line) | 16.492 – 53.436 mm | 16 – 55 mm | Minor adjustment during productisation |
| Zoom ratio | 3.24× | 3.44× | As above |
| Wide F-number | 2.88 | 2.8 | Rounded; patent values are paraxial wide-open |
| Mid F-number | 2.74 | 2.8 | Iris stops down slightly in production to hold f/2.8 constant |
| Tele F-number | 2.89 | 2.8 | Rounded |
| 2ω at wide (d-line) | 87.0° | Approx. 83.2° | See note below |
| 2ω at mid (d-line) | 48.6° | — | Patent-only (no mid marketed spec) |
| 2ω at tele (d-line) | 28.8° | Approx. 29.0° | See note below |
| Elements / groups | 17 / 12 | 17 / 12 | Exact match |
| Aspherical elements | 3 (each with two aspheric surfaces) | 3 | Exact match |
| ED elements | 3 (two S-FPL51 + one S-FPM3) | 3 | Exact match |
| Close focus | Not stated in patent | 0.30 m (whole zoom range) | — |

*Per convention, when patent-derived and manufacturer-published specifications disagree on hard marketed values, the manufacturer value is authoritative. The patent values are retained here because they are traceable and useful for reconstructing the design.*

A note on the two angle-of-view conventions: the patent's 2ω values (87.0° wide, 48.6° mid, 28.8° tele from Table 2) are the optical field angles of the marginal chief ray, derived from the paraxial prescription without any in-camera geometric-distortion correction. The Fujifilm-marketed values (approximately 83.2° wide, 29.0° tele) are the rectilinear angles implied by the marketed focal length (16–55 mm) and the APS-C image circle (≈28.3 mm diagonal), i.e. $2\omega = 2\arctan\!\bigl(d_{\text{img}}/(2f)\bigr)$. A quick consistency check: at the patent's $f = 16.49$ mm the rectilinear 2ω would be $2\arctan(14.15/16.49) = 81.3°$; the patent's paraxial-chief-ray 2ω of 87.0° therefore corresponds to an incoming ray that, on a rectilinear lens of the same focal length, would map to an image height of $16.49 \tan(43.5°) = 15.65$ mm — about 10.6% outside the 14.15 mm semi-diagonal. This implies approximately **−10% corner barrel distortion at the wide end**, which the APS-C image sensor corner re-maps to approximately the rectilinear 83° angle during in-camera distortion correction. The tele end is essentially undistorted (patent 28.8° vs. rectilinear 29.7° at $f = 53.44$ mm). Substantial wide-end barrel distortion is a well-documented characteristic of contemporary mirrorless standard zooms: the design chooses a shorter, sharper rear section and a smaller front group in exchange for more aggressive software correction of distortion at the wide end.

---

## 2. Zoom architecture

The design is a **positive-negative-positive-negative-positive** (P-N-P-N-P) five-group zoom:

| Group | Role | Refractive power | Intrinsic focal length¹ | Elements |
|---|---|---|---|---|
| **G1** | Front group (focal-length determination) | Positive | **+85.7 mm** | L11, L12, L13 (3 elements, 2 groups) |
| **G2** | Variator | Negative | **−14.7 mm** | L21, L22, L23, L24 (4 elements, 3 groups) |
| **G3** | Master / relay, containing the stop | Positive | **+22.9 mm** | L31 + STO + L32A·B + L33A·B + L34 (6 elements, 4 groups) |
| **G4** | Compensator / **focusing** group | Negative | **−31.8 mm** | L41, L42, L43 (3 elements, 2 groups) |
| **G5** | Field flattener (fixed) | Positive | **+66.7 mm** | L51 (1 element, 1 group) |

¹ Intrinsic group focal lengths are computed by paraxial ray trace through the isolated group in air, independent of zoom state, and so are invariant of the variable gaps. They match the patent's Conditional-Formula expressions f₂, f₃ to within rounding.

Group-level element counts (3 + 4 + 6 + 3 + 1 = 17 elements; 2 + 3 + 4 + 2 + 1 = 12 air-separated groups) match Fujifilm's published "17 elements in 12 groups" specification exactly.

During zoom, four air gaps vary — d₅ (G1↔G2), d₁₂ (G2↔G3), d₂₃ (G3↔G4), and d₂₈ (G4↔G5). All five groups participate in the zoom motion **except G5**, which is fixed relative to the image plane. The table of variable gaps from Table 3 of the patent is reproduced here:

| Variable gap | Wide (16.5 mm) | Mid (31.1 mm) | Tele (53.4 mm) |
|---|---|---|---|
| d₅ (G1→G2) | 0.800 | 12.276 | 26.783 |
| d₁₂ (G2→G3) | 19.890 | 5.636 | 0.685 |
| d₂₃ (G3→G4) | 2.000 | 6.395 | 7.257 |
| d₂₈ (G4→G5) | 2.600 | 7.250 | 14.396 |

Total track length (front vertex to image plane, infinity focus) increases from 122.1 mm at wide to 145.9 mm at tele — this is an **externally extending** zoom by approximately 23.8 mm, driven principally by G1 motion.

![Zoom group motion trajectories](zoom_trajectories.png)

All motions below are reported as the axial distance from the group's **rear vertex to the image plane** at infinity focus (smaller value = group closer to image):

| Group | Wide | Mid | Tele | Motion type |
|---|---|---|---|---|
| G1 rear | 107.5 mm | 113.7 mm | 131.3 mm | monotonic outward; total +23.8 mm |
| **G2 rear** | **85.8 mm** | **80.6 mm** | **83.6 mm** | **non-monotonic (reverses)** |
| G3 rear | 36.8 mm | 45.8 mm | 53.8 mm | monotonic outward; total +17.1 mm |
| G4 rear | 28.6 mm | 33.2 mm | 40.4 mm | monotonic outward; total +11.8 mm |
| G5 rear | 23.0 mm | 23.0 mm | 23.0 mm | fixed |

The trajectories deserve four specific observations:

1. **G1 moves monotonically outward** (toward the subject) from wide to tele. Its rear vertex travels 23.8 mm further from the image plane across the zoom range.
2. **G2 reverses direction.** The G2 rear-vertex-to-image-plane distance first *decreases* from 85.8 mm (wide) to 80.6 mm (mid) — a 5.2 mm movement toward the image — then *increases* back to 83.6 mm (tele) — a 3.0 mm movement away from the image. This is the classic non-monotonic variator trajectory of a five-group standard zoom and is shown in the patent's Figure 4 as a curved locus. The reversal allows G2 to provide both the magnification sweep and partial compensation for the image-plane drift caused by G1 motion.
3. **G3 and G4 move monotonically outward.** G3 (which carries the aperture stop) moves 17.1 mm toward the subject; G4 moves 11.8 mm. Both contribute to maintaining focus across the zoom range, with G4 additionally providing the focusing degree of freedom for object distance.
4. **G5 is fixed.** Its rear vertex sits a constant 23.0 mm from the image plane at all zoom positions — matching the patent's reported constant Bf of 22.000 mm when air-equivalent.

---

## 3. Patent prescription summary

Example 1 comprises 30 optical surfaces plus a compound cover-glass stack (surfaces 31–33), for 33 surfaces total. Paraxial computation from Table 1 independently reproduces the patent's stated focal lengths and back-focal distance across all three zoom positions:

| Position | Patent EFL | Computed EFL | Residual | Patent Bf | Computed Bf |
|---|---|---|---|---|---|
| Wide  | 16.492 mm | **16.492 mm** | 0.000 | 22.000 mm | **21.995 mm** |
| Mid   | 31.059 mm | **31.063 mm** | +0.004 | 22.000 mm | **21.999 mm** |
| Tele  | 53.436 mm | **53.447 mm** | +0.011 | 22.000 mm | **22.001 mm** |

Residuals are at the level of rounding in the published table (R values quoted to 5 decimals, thicknesses to 3). The back focal distance is essentially constant at 22.00 mm across the zoom range, consistent with G5 being stationary.

---

## 4. Element-by-element breakdown

The table below lists all 17 elements in the design, front to rear, with the element's own focal length (computed by the thick-lens formula), the glass catalog match with residuals, and the optical role deduced from the patent description and the prescription data. Glasses are identified against the OHARA catalog where a direct match exists; the six-digit glass code (nd × 1000 / vd × 10, rounded) is given as a manufacturer-agnostic fallback.

### 4.1 Front group (G1) — aberration-correcting doublet + positive singlet

| Elem | nd | νd | Glass | f (mm) | Role |
|---|---|---|---|---|---|
| **L11** | 1.84666 | 23.78 | **OHARA S-TIH53** (exact) | −179.4 | Cemented to L12; front face of the leading doublet. A high-index dense flint, its low Abbe number (strongly dispersive) lets it correct longitudinal and lateral chromatic aberration generated downstream while carrying only modest refractive power. The patent paragraph [0058] explicitly assigns this role: *"the 1-1 negative lens L11 bears the function of correcting longitudinal chromatic aberration, lateral chromatic aberration, and spherical aberration."* |
| **L12** | 1.61800 | 63.33 | **OHARA S-PHM52** (Δνd = +0.06) | +140.4 | Cemented to L11 to form the achromatic leading doublet. A lanthanum phosphate crown (PHM family, low-dispersion, high-index for its νd class). |
| **L13** | 1.75500 | 52.32 | Near **OHARA S-LAL60** (Δnd = −0.0005, Δνd = −0.75) or melt variant; six-digit code **755523** | +94.1 | Separate positive lanthanum crown. Distributes positive power between two positive lenses in G1 (the patent rationale, paragraph [0058]) to suppress spherical aberration generation while keeping the overall group power short enough to shorten track. |

### 4.2 Variator (G2) — negative meniscus leader + cemented doublet + negative singlet

| Elem | nd | νd | Glass | f (mm) | Role |
|---|---|---|---|---|---|
| **L21** | 1.85135 | 40.10 | **HOYA M-TAFD305** (exact; six-digit code **851401**). Equivalent moldable grades: HOYA M-TAF31, HOYA M-TAFD55, Sumita K-VC91, HIKARI J-LASFH21 — all published at identical (nd, νd) | −17.6 | Double-aspheric negative meniscus with concave surface toward the image. Principal negative-power element of G2. The patent paragraph [0059] assigns it two duties: suppressing distortion at the wide-angle end, and bending the off-axis chief-ray angles down so that downstream elements see more moderate slopes. The strong rear-surface hyperboloid (see §5) is the key asphere of the entire design — it does most of the heavy lifting in controlling off-axis aberrations at the wide end. The HOYA M- prefix designates a moldable low-Tg glass intended for precision glass molding (PGM), consistent with L21 being a double-aspheric element. |
| **L22** | 1.69680 | 55.53 | **OHARA S-LAL14** (Δνd = −0.12) | −16.4 | Biconcave negative lens, cemented to L23 at the rear. Shares negative-power burden with L21. |
| **L23** | 1.90366 | 31.31 | **OHARA S-LAH58** (exact) | +14.6 | Biconvex positive lens, cemented to L22. A dense lanthanum flint — its very high nd (1.904) combined with its low Abbe number allows it to contribute positive power to balance dispersion inside G2 while keeping the combined surface in the cement close to its optimal shape for correcting zooming-induced fluctuations in chromatic and spherical aberration. |
| **L24** | 1.72916 | 54.68 | **OHARA S-LAL18** (Δνd = +0.01) | −48.6 | Separate negative meniscus, concave to the subject side. The patent's detailed description refers to this element as "2-4 positive lens L24" in paragraph [0059], but this is an inconsistency with the claims and with the computed power: the thick-lens formula yields **f = −48.6 mm**, unambiguously negative. The claims (paragraph [0016], claim 1) correctly call it a "2-4 negative lens". |

### 4.3 Master group (G3) — six elements plus stop in a positive-stop-positive-negative-positive sequence

The patent's Conditional Formula (4) and (5) describe this group's arrangement. After the prescription:

| Elem | nd | νd | Glass | f (mm) | Role |
|---|---|---|---|---|---|
| **L31** | 1.68458 | 30.88 | Near **OHARA L-TIM28** (moldable; Δnd = +0.0044, Δνd = +0.28); six-digit code **685309** | +39.1 | **Double-aspheric** positive singlet *before* the stop. Per patent [0065], its purpose is to "receive divergent light beams from the second lens group... the diameters of the lenses following thereafter can be prevented from becoming great, and the generation of spherical aberration can be suppressed." In short: a "diverging-beam catcher" that limits the clear apertures of the rest of G3, which is essential at f/2.8. The low Abbe number (~31) is chosen to satisfy Conditional Formula (7), 20 < νd31 < 40, which balances lateral chromatic aberration fluctuation across the zoom. |
| **STO** | — | — | (aperture stop) | — | Variable iris, immediately after L31, sitting between L31 and L32. The wide-open stop semi-diameter varies with zoom position (wide ≈ 7.0 mm, mid ≈ 8.5 mm, tele ≈ 9.1 mm) — the production iris closes down at mid to deliver the marketed constant f/2.8. |
| **L32A** | 1.84666 | 23.78 | **OHARA S-TIH53** (exact; same glass as L11) | −34.6 | Cemented to L32B. Negative-power front member of the first cemented doublet after the stop. Per [0066], the L32 doublet is specifically formed "by cementing a negative lens and a biconvex lens" — this achromatises the positive-combined doublet. |
| **L32B** | 1.53775 | 74.70 | **OHARA S-FPM3** (exact) — **ED glass** | +23.0 | Biconvex positive, cemented to L32A. A fluor-phosphate ED glass with anomalous partial dispersion, critical for correcting apochromatic residuals (secondary spectrum) in the post-stop region where marginal-ray heights are largest. This is ED element #1. |
| **L33A** | 1.49700 | 81.54 | **OHARA S-FPL51** (exact against 2014-era catalog; modern OHARA datasheets publish νd = 81.61, Δνd = −0.07) — **ED glass** | +72.6 | Positive meniscus (convex to image), cemented to L33B. The second cemented doublet (L33A + L33B) has a negative combined power per [0065] and provides the strong counterweight to L32's positive doublet. S-FPL51 is Ohara's flagship ED glass (anomalous partial dispersion, vd = 81.54, near-fluorite behaviour). ED element #2. |
| **L33B** | 1.79952 | 42.22 | **OHARA S-LAH52** (exact) | −22.0 | Biconcave negative, cemented to L33A. This is also the **image-stabilization element**: paragraph [0081] of the patent states that camera-shake correction is performed by moving the L33 cemented doublet perpendicular to the optical axis. (In production, the XF 16-55mm does not include OIS — Fujifilm dropped this provision from the commercialised design.) |
| **L34** | 1.61882 | 63.58 | Near **OHARA L-PHM52** (PGM version; Δnd = −0.00082, Δνd = −0.18); six-digit code **619636** | +19.8 | **Double-aspheric** positive singlet terminating G3. Per [0069], its asphericity corrects astigmatism and spherical aberration generated within G3. The L-prefix indicates a low-Tg glass intended for precision glass molding (PGM) — consistent with the two-surface aspheric requirement. |

### 4.4 Focusing group (G4) — two negative plano-concave elements + a positive cemented lens

| Elem | nd | νd | Glass | f (mm) | Role |
|---|---|---|---|---|---|
| **L41** | 1.61800 | 63.33 | **OHARA S-PHM52** (same as L12) | −35.8 | Plano-concave negative; flat face toward the subject. The plano-front is characteristic of an inner-focus design where the element must glide axially relative to adjacent groups — a flat reference surface simplifies mechanical registration. |
| **L42** | 1.84666 | 23.78 | **OHARA S-TIH53** (same as L11 and L32A) | −54.3 | Plano-concave negative, cemented at the rear to L43. Per [0084], *"by providing two negative lenses toward the object side, the forward principal point of the fourth lens group G4 can be moved toward the object side, and focusing sensitivity can be increased."* This is the key reason for splitting the G4 negative power between two elements rather than using a single stronger negative lens. |
| **L43** | 1.49700 | 81.54 | **OHARA S-FPL51** (same as L33A; 2014-era catalog match) — **ED glass** | +67.4 | Biconvex positive, cemented to L42. Balances longitudinal chromatic aberration drift during focusing — a second occurrence of S-FPL51, completing the 3-ED-glass specification Fujifilm advertises. ED element #3. |

### 4.5 Field flattener (G5)

| Elem | nd | νd | Glass | f (mm) | Role |
|---|---|---|---|---|---|
| **L51** | 1.95906 | 17.47 | **OHARA S-NPH3** (exact) | +66.7 | Positive biconvex, weakly curved on both faces. A niobium ultra-high-index, ultra-high-dispersion glass. Per [0062] and [0079] the L51's duties are twofold: reduce the chief-ray angle of incidence on the sensor (so each pixel's microlens sees light near-telecentrically, critical for mirrorless cameras where the rear element sits close to the sensor) and — thanks to the stationary G5 — form a dust-sealing barrier at the rear of the lens barrel. Conditional Formula (6), 15 < νd5 < 40, is comfortably satisfied (17.47). |

![Individual element focal lengths](element_focal_lengths.png)

The chart makes visible the design's internal symmetry: each zoom group contains both positive and negative power, never a run of same-signed elements, and the strongest element in the design (L11, f = −179 mm) is comparatively weak — most of the focal lengths lie between |15| and |75| mm, consistent with a fast zoom that distributes power widely to avoid high-order aberrations.

---

## 5. Glass map and material strategy

![Glass map](glass_map.png)

Thirteen distinct optical materials are used (some glass types repeat across elements). The design's material strategy clusters them into four distinct regions:

| Region | Elements | νd range | Purpose |
|---|---|---|---|
| **ED region** (νd > 70) | L32B, L33A, L43 | 74.7–81.5 | Apochromatic correction (secondary spectrum removal). L33A and L43 are S-FPL51; L32B is S-FPM3. |
| **Crown/PHM region** (νd ≈ 63, nd ≈ 1.62) | L12, L34, L41 | 63.3–63.6 | General positive-power duties; moderate dispersion. S-PHM52 / L-PHM52 variant. |
| **Lanthanum crown/flint region** (νd 40–56, nd 1.70–1.90) | L13, L21, L22, L24, L33B | 40–56 | Bulk of the negative and positive power-bearing elements. Uses LaK and LaSF families to pack high refractive index (short radii for power) with manageable Abbe number. |
| **Dense flint region** (νd < 30) | L11, L23, L31, L32A, L42, L51 | 17.5–31.3 | Dispersion-control partners in cemented doublets; also the rear field flattener (L51 is niobium, νd = 17.5, deliberately chosen for ultra-high-index positive contribution near the sensor). |

Three elements are **aspheric** (each with aspherised front *and* rear surfaces), and all three are moldable-grade glasses (signalled by the OHARA **L-** prefix or the HOYA **M-** prefix in the best catalog match) because precision glass molding of aspheric surfaces requires glasses that soften at achievable mold temperatures. The three aspheric elements are L21, L31, and L34, corresponding to Fujifilm's published claim of "3 aspherical elements."

Glass identification confidence (Δ values reported as **catalog minus patent**):

- **Exact catalog matches** (|Δnd| < 0.0001 and |Δνd| < 0.05 at time of patent filing, 2014): L11, L21, L23, L24, L32A, L32B, L33B, L42, L51 — nine elements confirmed at rounding precision.
- **Very close** (within ~0.07 νd units of the current published catalog value): L12 (S-PHM52, Δνd = +0.06), L33A and L43 (S-FPL51, Δνd = +0.07 vs. modern datasheet; 0.00 vs. 2014 datasheet), L41 (S-PHM52, Δνd = +0.06). The 2014-era OHARA catalog listed slightly different νd values for phosphate-crown and fluor-phosphate glasses than today's; these elements are exact matches against catalog data contemporary with the patent's priority date.
- **Close** (within ~0.3 νd units): L22 (S-LAL14, Δνd = −0.12), L34 (L-PHM52, Δνd = +0.27), L31 (L-TIM28, Δnd = +0.0044, Δνd = +0.28). All three likely represent melt-variant or contemporary-catalog differences rather than a different glass family.
- **Family-level only** (no close direct match): L13 (six-digit code **755523**) — no catalog glass within 2 νd units; the design may use a bespoke melt or a now-discontinued catalog entry.

Of note: L21's glass is confirmed as **HOYA M-TAFD305** (six-digit code 851401) — an exact catalog match. OHARA's pocket-catalog cross-reference tables (2018 and 2023 editions) list this six-digit code directly against M-TAFD305, with HIKARI (J-LASFH21 family) and Sumita (K-VC91/K-VC99 series) offering functional equivalents. For a Japanese manufacturer using precision-glass-molded aspheric elements, HOYA moldable glasses are an entirely expected sourcing choice. The HOYA M-prefix designates a low-Tg composition for precision glass molding (PGM), consistent with L21 being a double-aspheric element.

---

## 6. Aspheric surfaces — the design's correction workhorses

### 6.1 The Fujifilm conic-constant convention

The patent's sag equation in paragraph [0095] is:

$$
z(h) = \frac{C h^{2}}{1 + \sqrt{1 - K_A \cdot C^{2} h^{2}}} + \sum_{m=3}^{16} A_{m}\, h^{m},
$$

where $C = 1/R$ and $K_A$ is the "conic coefficient" as printed in Table 4. **Note carefully the convention**: this formulation uses $K_A = 1$ to denote a spherical base (since $1 - 1 \cdot C^2 h^2$ matches the ordinary spherical sag), so the standard Zemax-style conic constant is related to the tabulated value by

$$
K_{\text{std}} = K_A - 1.
$$

Hence $K_A = 1$ corresponds to a sphere ($K_{\text{std}} = 0$), and $K_A = -1.3833$ on surface 7 corresponds to a hyperboloid ($K_{\text{std}} = -2.3833$). This is an important check: applied naively, a −1.38 value copied directly into Zemax or a competitor code would (incorrectly) be interpreted as a near-paraboloid, not a strong hyperboloid.

Another notable feature: the polynomial sum runs over **both even and odd orders** from $m = 3$ to $m = 16$, and this is not a formal nicety — **all six aspherical surfaces in Example 1 carry non-zero odd-order coefficients $A_5, A_7, A_9, A_{11}, A_{13}, A_{15}$**, and on the strongest surface (S7A, L21 rear) the odd orders contribute sag comparable to or larger than the even orders. At $h = 9.5$ mm on S7A, the $A_5$ term alone contributes approximately $+1.49$ mm of sag — nearly half of the surface's total sag at the rim. The inclusion of odd orders distinguishes this from some Western conventions that restrict to even powers only; any faithful reimplementation must honour both parities.

### 6.1a Even-only re-fit for the companion data file

The project's lens-rendering schema (see `LENS_DATA_SPEC`) accepts only **even**-order aspheric coefficients ($A_4, A_6, A_8, A_{10}, A_{12}, A_{14}$, with optional $A_{16}, A_{18}, A_{20}$) and the standard conic $K_\text{std} = K_A - 1$. Naively dropping the odd orders is not an option: at the rim of S7A it produces a ~5 mm sag discrepancy relative to the patent surface — a catastrophic departure that would render the surface visibly wrong.

The companion data file (`FujifilmXF1655f28R.data.ts`) therefore uses the following principled substitute: the patent's base conic $(R, K_\text{std})$ is retained **exactly** for each surface, and the polynomial is **least-squares re-fitted over the surface's clear aperture** using only the available even orders $A_4\ldots A_{16}$. The fit samples the patent surface (odd + even) at 300 points on $[0, h_\text{max}]$, where $h_\text{max}$ is a small margin (~2%) above the surface's estimated clear semi-diameter in the design. Residuals after refit:

| Surface | $h_\text{max}$ (mm) | max sag residual (μm) | rms residual (μm) |
|---|---|---|---|
| S6A (L21 front) | 11.68 | 2.9 | 1.3 |
| S7A (L21 rear) | 11.06 | 2.8 | 1.2 |
| S13A (L31 front) | 10.62 | 0.3 | 0.1 |
| S14A (L31 rear) | 10.31 | 0.04 | 0.02 |
| S22A (L34 front) | 12.10 | 11.2 | 4.6 |
| S23A (L34 rear) | 12.18 | 1.8 | 0.8 |

The worst-case residual is 11.2 μm at the rim of S22A — well below typical manufacturing tolerance (λ/4 in the visible is ~140 nm, but practical element-shape tolerance in a zoom lens is tens of micrometres). For visualization purposes the refit is indistinguishable from the patent surface; for optical simulation or manufacturing, the patent's full odd + even coefficients would be required.

The refitted coefficients (present in the `.data.ts` file) are **not** the patent's original values and must not be confused with them. Anyone reading the coefficients back out of the data file to reproduce optical simulation must use the patent Table 4 values, not the refit.

### 6.2 Aspheric surfaces at a glance

| Surface | Element face | R (mm) | $K_A$ | $K_\text{std}$ | Comment |
|---|---|---|---|---|---|
| S6A  | L21 front | +141.92  | +1.0000 | 0 (sphere) | Polynomial-only asphere on a weakly curved convex face |
| S7A  | L21 rear  |  +13.48  | −1.3833 | −2.3833 (strong hyperboloid) | **The design's principal asphere.** Heavy conic + heavy polynomial |
| S13A | L31 front |  +27.67  | +1.0000 | 0 | Polynomial-only |
| S14A | L31 rear  | −787.33  | +1.0000 | 0 | Polynomial-only; weak departure (near-flat base) |
| S22A | L34 front |  +20.62  | +1.0000 | 0 | Polynomial-only; strong peripheral departure |
| S23A | L34 rear  |  −26.89  | +1.0000 | 0 | Polynomial-only |

### 6.3 Aspheric departure profile

The plot below shows sag departure from the base sphere (μm) as a function of height from the axis, for each of the six aspheric surfaces. Each curve is truncated at an estimated clear semi-diameter.

![Aspheric departure from base sphere](aspheric_departure.png)

Three observations bear on the design philosophy:

1. **S7A (L21 rear) is the largest-aperture aspheric in the design.** At h = 8 mm the departure is −112 μm; at h = 10 mm it reaches −286 μm. This is a heavily figured surface. Because L21 is the first strongly diverging element after the G1 front group, S7A is ideally positioned to pre-correct off-axis aberrations (distortion, astigmatism) for the full wide-angle field before the chief ray ever reaches the stop.

   **An architecturally important nuance:** the plotted "departure from sphere" on S7A is the *net* of two aggressive shape components that partially oppose each other. The bare hyperboloid base ( $K_\text{std} = -2.3833$ ) alone, without any polynomial, would sit **−1254 μm below the sphere at h = 10 mm** — four times deeper than the final surface. The polynomial terms contribute **+967 μm at h = 10 mm**, pulling the surface back toward (though still below) the sphere. The patent is therefore using two independent degrees of freedom — a strong conic *and* an aggressive polynomial — and tuning them against each other to achieve a very specific peripheral sag profile that neither one alone could deliver. This is characteristic of modern high-performance asphere design, and it is distinct from the simpler case of a near-paraboloid with mild polynomial fine-tuning.

2. **S22A (L34 front) is almost as strong.** At h = 8 mm the departure reaches −141 μm; at h = 10 mm it reaches −310 μm. L34 sits immediately before the focusing group G4 and is the last element in G3 to see the full marginal-ray cone; its aspheric profile, on a spherical base ( $K_A = 1$ ), works entirely through the polynomial and is principally a spherical-aberration corrector at the high cone angles that f/2.8 produces.

3. **L31's aspheres (S13A, S14A) and L34's rear (S23A) are milder inside their useful clear apertures.** Verified peripheral departures:

   | Surface | h = 6 mm | h = 8 mm | h = 10 mm |
   |---|---|---|---|
   | S13A (L31 front) | −17 μm | −55 μm | −128 μm |
   | S14A (L31 rear)  | −5 μm  | −12 μm | −16 μm |
   | S23A (L34 rear)  | +9 μm  | +30 μm | +102 μm |

   L31 sits near the stop, where marginal-ray heights are approximately 7–8 mm at f/2.8 — within this range its aspheric contribution is ≤55 μm, a fine-tuning correction rather than a dominant one. S14A's near-flat base (|R| = 787 mm) makes its polynomial departure small across the whole aperture. S23A's positive departure (conversely signed from the other aspheres) reflects that its role is to compensate, not to pile onto, the negative departures of its companion surfaces.

### 6.4 Where the aspheres fall in the patent's Conditional Formulae

Paragraphs [0068] and [0069] explicitly link the aspheric surfaces to the aberration budget:
> *"the generation of spherical aberration within the third lens group G3 can be suppressed, by forming at least one surface of the 3-1 positive lens L31 to be an aspherical surface. ... the generation of astigmatism and spherical aberration within the third lens group G3 can be suppressed, by forming at least one surface of the 3-4 positive lens L34 to be an aspherical surface."*

The patent does not require L21 to be aspheric as a claim limitation — it is a dependent feature of the specific numerical examples — but the prescription makes it the most aggressively figured surface in the design.

---

## 7. Focusing mechanism

### 7.1 G4 is the focusing group

Paragraph [0084] explicitly identifies G4 as the focusing group: *"the fourth lens group G4 ... is configured to move toward the image side when changing focus from an object at a far distance to an object at a close distance."* G4 is composed of three elements (L41, L42, L43) in two air-separated groups (L41 separate, L42+L43 cemented).

This is an **inner-focus** (internally focusing) architecture — the lens's overall length does not change during focusing, only an internal group shifts. Compared with unit-focus (whole-lens translation) or front-group focusing, inner focus offers:

- **Constant physical length** during focus acquisition — critical for video, weather sealing, and dust-prevention (the XF 16-55mm's WR designation).
- **Lower moving mass** — with just three elements and modest aperture, G4 can be driven rapidly by a linear motor (the **LM** in the product name, denoting Linear Motor).
- **No mechanical disturbance to the filter thread** — the filter ring stays still relative to the body.

### 7.2 Why *these* three elements

The patent's rationale for splitting G4's negative power between two negative elements (L41, L42) rather than using a single negative lens is explained in paragraph [0084]:

> *"By providing two negative lenses toward the object side, the forward principal point of the fourth lens group G4 can be moved toward the object side, and focusing sensitivity can be increased without increasing the negative refractive power of the fourth lens group G4 as a whole."*

This is the fundamental principle: for a given group focal length, pushing the front principal plane toward the subject increases how much image shift a given mechanical motion produces. Quantitatively, for a weakly-focused group, the image shift per mm of group motion scales roughly as $(1 - m_{G4})^2$ where $m_{G4}$ is the lateral magnification of the group; splitting the negative power into two elements placed forward of the positive element pushes the principal plane forward and increases $|1 - m_{G4}|$.

A short numerical verification of the focus sensitivity — defined as (image-plane shift) / (G4 motion) for small perturbations — gives:

| Zoom position | Sensitivity |
|---|---|
| Wide (16.5 mm) | **1.91× per mm** |
| Mid (31 mm) | **2.22× per mm** |
| Tele (53.4 mm) | **2.73× per mm** |

In other words: a 1 mm axial shift of G4 produces approximately 1.91 mm of image-plane displacement at wide and 2.73 mm at tele. Because the total track budget allows several millimetres of G4 travel, focusing from infinity to the marketed MFD of 0.30 m is well within the mechanical envelope. Solving the paraxial focus equation explicitly for each zoom position with MFD measured from the image plane yields the required G4 image-ward translations:

| Zoom position | Required G4 travel |
|---|---|
| Wide (16.5 mm) | **≈ 0.70 mm** |
| Mid (31 mm) | **≈ 2.04 mm** |
| Tele (53.4 mm) | **≈ 4.55 mm** |

The tele figure is the binding constraint on mechanical design: the infinity-focus value of DD28 (G4-to-G5 gap) at tele is 14.396 mm, so the ~4.5 mm close-focus reduction leaves ≈ 9.8 mm of clearance between L43 (G4 rear) and L51 (G5 front) at MFD — comfortable, and consistent with the relatively long rear path characteristic of this design. These computed close-focus air-gap values are what the companion data file records as the "close focus" half of each DD23 and DD28 variable-gap pair.

### 7.3 The shape-constraint rule of paragraph [0084]

The same paragraph of the patent adds a further geometric constraint on L41 and L42: *"fluctuations in spherical aberration and astigmatism during focusing operations can be suppressed more effectively, by the 4-1 negative lens L41 and the 4-2 negative lens L42 both having a surface toward the image side with a radius of curvature of a lower absolute value than that of the surface toward the object side."* In plain terms: each of the two negative focus elements should have a more strongly curved image-side surface than object-side surface. Verified against the prescription:

| Element | R_object | R_image | |R_image| / |R_object| | Constraint |
|---|---|---|---|---|
| L41 | ∞ (plano) | +22.131 mm | 0 | ✓ (image side infinitely more curved) |
| L42 | ∞ (plano) | +45.984 mm | 0 | ✓ (image side infinitely more curved) |

Both elements are plano-concave with their flat face toward the subject — the limiting case of the constraint. The plano-front-concave-rear form simultaneously (a) satisfies the shape constraint by trivially having an "infinitely larger" object-side radius, (b) presents a flat reference datum for mechanical axial registration as the element glides inside the barrel, and (c) minimises the lateral-shift sensitivity of the focus group (a flat surface has no chief-ray decentration error to first order). This is an elegant resolution of three design constraints in a single shape choice.

### 7.4 The L42–L43 cement as the focusing achromatic corrector

A side-effect of splitting G4 into three elements rather than a doublet is that the single positive lens L43 (the S-FPL51 ED glass) becomes the cemented partner of L42. As the object distance decreases, the marginal ray heights through G4 change continuously; this produces a focus-dependent chromatic aberration that, without correction, would manifest as longitudinal colour breathing. The ED glass in L43, cemented to the high-dispersion flint L42, forms an achromatised focusing sub-unit that holds chromatic aberration stable as G4 translates. The patent's paragraph [0084] observes: *"negative refractive power can be distributed by providing two negative lenses. Therefore, fluctuations in spherical aberration and astigmatism during focusing operations can be suppressed."*

---

## 8. Zoom mechanism commentary

### 8.1 Sign alternation and aberration cancellation

The alternating P-N-P-N-P power distribution is not arbitrary. Each change of sign corresponds to an opportunity to cancel aberrations that would otherwise accumulate: field curvature generated in a positive group can be partially cancelled by field curvature of the opposite sign in the following negative group. This is visible in the Petzval sum:

$$
P = \sum_{\text{surfaces}} \frac{n' - n}{n\, n'\, R} \;=\; 0.00260\,\text{mm}^{-1},
$$

which corresponds to a Petzval radius of +385 mm — that is, an almost flat image curvature for a zoom whose focal lengths are 16–53 mm. A Petzval radius of 385 mm on APS-C (image-height 14 mm) means mid-field curvature under 1 mm at the worst, which is readily corrected by the astigmatism residuals in G3 and the field flattener L51.

### 8.2 Why G5 is fixed

Four practical reasons motivate holding G5 stationary relative to the image plane:

1. **Weather sealing.** A fixed rear element can be gasketed to the lens mount, closing the final seal between lens barrel and camera body.
2. **Constant chief-ray angle at the sensor.** Because the L51 (S-NPH3, nd = 1.959) has a positive power and sits close to the sensor, its slight wedge-like action on oblique rays is more consistent if it doesn't translate; mirrorless sensors with microlens arrays benefit from this stability.
3. **Reduced dust ingress.** Paragraph [0078]: *"The lenses and a lens barrel can be sealed by adopting this configuration, and the entry of foreign [matter] can be prevented thereby."*
4. **Simpler mechanical design.** One fewer moving group reduces cost and improves reliability.

The patent notes this with specific reference to non-reflex (mirrorless) cameras: *"Foreign matter is likely to be pictured particularly in non reflex type cameras."*

### 8.3 Aperture behaviour

The patent's F-number varies slightly across the zoom range: 2.88 at wide, 2.74 at mid, 2.89 at tele. This is a paraxial consequence of the design — at the middle zoom position, the geometry is most favourable for a wide entrance pupil relative to focal length. In production, the physical iris is adjusted per zoom position to deliver a constant marketed f/2.8, which means at middle zoom the iris is slightly *stopped down* from its geometric maximum. The patent description observes that *"the aperture stops St of Examples 1 through 3 are variable stops"*, confirming that the stop diameter is a programmed function of zoom position.

---

## 9. Design synthesis — putting it all together

The Fujifilm XF 16-55mm f/2.8 R LM WR is a carefully balanced realisation of the modern fast APS-C standard zoom. Reading the patent prescription against the element-level roles yields a coherent design narrative:

- **G1** (3 elements, +85.7 mm) provides most of the overall positive power but does so without steep radii — its longest radius is R = +200.6 mm (surface 5), and its shortest is R = +54.4 mm (surface 2). The cemented L11+L12 doublet corrects both longitudinal and lateral chromatic aberration for the whole system; the separate L13 distributes the positive work between two positive lenses to suppress spherical aberration.
- **G2** (4 elements, −14.7 mm) is the variator. Its strong negative lead element L21 (−17.6 mm) with two aspheric surfaces — including the design's principal hyperbolic asphere S7A — does most of the wide-angle aberration correction. A cemented L22+L23 doublet inside G2 prevents zoom-induced chromatic aberration drift.
- **G3** (6 elements + STO, +22.9 mm) is the master group. Its internal structure — L31(positive, double-asph) + STO + L32(+doublet) + L33(−doublet) + L34(positive, double-asph) — is a classic double-Gauss-plus-asphere architecture, a modern take on the "Planar" family with aspheres at the front and rear positive lenses and a negative doublet behind the stop to balance the positive doublet in front of it. All three ED glasses (S-FPM3 in L32B, S-FPL51 in L33A) and the image-side double-aspheric L34 live in this group. Most of the work of delivering f/2.8 wide-open performance happens here.
- **G4** (3 elements, −31.8 mm) is the focus group, chosen for minimum moving mass and maximum focus sensitivity. Its double-negative-front-plus-cemented-positive-rear architecture pushes the principal plane forward and includes an ED glass (S-FPL51 in L43) to hold chromatic aberration stable through the focus stroke.
- **G5** (1 element, +66.7 mm) is the fixed field flattener — a single S-NPH3 ultra-high-index element whose job is to deliver a near-telecentric beam to the APS-C sensor and to seal the rear of the lens barrel.

The decision to use **three** double-aspheric elements (L21, L31, L34) — each in a different zoom group — lets the design separately address wide-angle, stop-region, and tele-region aberrations. The decision to use **three** ED elements — two near the stop (L32B as S-FPM3, L33A as S-FPL51) and one in the focusing group (L43 as S-FPL51) — constitutes an **apochromatic correction strategy**: an ordinary achromatic doublet corrects two wavelengths to a common focus, leaving a residual "secondary spectrum" (typically g-line misfocus on the order of f/2000 for a crown-flint doublet); a three-glass combination, with at least one glass exhibiting anomalous partial dispersion (both S-FPL51 and S-FPM3 qualify — they are fluor-crown and fluor-phosphate respectively, the low-dispersion-with-curved-dispersion-slope family that makes apochromatic correction possible), can bring three wavelengths to a common focus and reduce the residual roughly an order of magnitude.

Crucially, the ED elements in this design are **positionally distributed** rather than clustered. L32B and L33A sit just after the stop, where marginal-ray heights are largest and longitudinal chromatic aberration is most severe; correcting it there is efficient. L43 sits inside the focus group, where the chief and marginal rays are both re-heighted every time G4 translates for focus acquisition; having an ED element *in* the focus group keeps the chromatic correction stable across the focus stroke, not just at infinity. This is the same pattern seen in modern apochromatic telephoto designs (e.g. super-telephoto Nikkors and Canon L-series): stop-region ED glass for on-axis chromatic correction, plus focus-group ED glass for focus-invariant chromatic correction. Fujifilm's application of this strategy to a fast APS-C zoom — rather than a prime telephoto — is what makes the XF 16-55mm optically competitive with fast primes across its focus range.

Together these material and geometric choices, with the double-cemented-doublet G3 and the ultra-high-index G5, describe a contemporary Fujifilm design vocabulary that is also visible in other fast zooms from the same design era.

---

## 10. References

1. **US Patent Application Publication 2016/0154221 A1**, "Zoom Lens and Imaging Apparatus", inventors Taiga Noda and Michio Cho, assignee Fujifilm Corporation, published 2 June 2016 (priority JP 2014-243845 filed 2 December 2014).
2. OHARA Corp., *Optical Glass Pocket Catalog* (editions from 2014-contemporary and 2018/2023 for cross-reference tables) — used for primary glass identification by (nd, νd) pairs and for HOYA/HIKARI/SUMITA cross-indices.
3. HOYA Corp., *Optical Glass Catalog*, including M- (moldable) series. The OHARA pocket catalog's cross-reference list confirms six-digit code 851401 as HOYA M-TAFD305, exactly matching L21's (nd = 1.85135, νd = 40.10) and making this a direct catalog match rather than a family-level inference.
4. Sumita Optical Glass Inc. and HIKARI Glass Co. product databases (cross-consulted for alternative matches to L21 at nd = 1.85135, νd = 40.10; HIKARI J-LASFH21 and Sumita K-VC91/K-VC99 offer equivalent specs).
5. Fujifilm Corporation, XF 16-55mm F2.8 R LM WR product page and published specifications (for marketed focal-length range, close-focus distance, and element/group/aspherical/ED counts).
6. Paraxial ray-trace verification and element-level analysis performed independently for this document (Python ABCD/y-ū trace; thick-lens element focal lengths; surface-method Petzval sum; aspheric sag evaluation with both patent odd+even convention and even-only least-squares refit; close-focus G4-translation solve; semi-diameter ray-envelope with on/off-axis rays, edge-thickness validation, cross-gap overlap validation, and rim-slope validation).

### Appendix: Summary of computational verification

| Check | Patent value | Computed value | Status |
|---|---|---|---|
| EFL at wide | 16.492 mm | 16.4919 mm | ✓ |
| EFL at mid | 31.059 mm | 31.0627 mm | ✓ (rounding) |
| EFL at tele | 53.436 mm | 53.4466 mm | ✓ (rounding) |
| BFD (all zooms, air-equivalent) | 22.000 mm | 21.9996 mm | ✓ |
| Total track (wide → tele) | — | 122.10 → 145.93 mm | — (independent) |
| Group f₁ (positive) | positive | +85.73 mm | ✓ |
| Group f₂ (negative) | negative | −14.70 mm | ✓ |
| Group f₃ (positive) | positive | +22.94 mm | ✓ |
| Group f₄ (negative) | negative | −31.82 mm | ✓ |
| Group f₅ (positive) | positive | +66.71 mm | ✓ |
| Conditional (1) (L11f−L12r)/(L11f+L12r) ∈ (−0.9, −0.1) | −0.235 | −0.2355 | ✓ |
| Conditional (2) f₂/L22f ∈ (0.2, 1) | +0.457 | +0.4571 | ✓ |
| Conditional (3) f₂/f₂₁ | +0.836 | +0.8362 | ✓ |
| Conditional (4) f₃/f₃₄ ∈ (0.7, 1.6) | +1.160 | +1.1599 | ✓ |
| Conditional (5) f₃/f₃₁ ∈ (0.2, 0.8) | +0.586 | +0.5865 | ✓ |
| Conditional (6) νd5 ∈ (15, 40) | 17.47 | 17.47 | ✓ |
| Conditional (7) νd31 ∈ (20, 40) | 30.88 | 30.88 | ✓ |
| Petzval sum (surface method, Σ (n′−n)/(n·n′·R)) | — | +0.002597 mm⁻¹ (radius +385.0 mm) | ✓ |
| G4 focus sensitivity (wide/mid/tele) | — | 1.91× / 2.22× / 2.73× | ✓ |
| G2 motion (rear vertex to image plane) | — | 85.8 → 80.6 → 83.6 mm | ✓ (reverses, per Fig. 4) |
| Shape constraint [0084]: L41, L42 \|R_image\| < \|R_object\| | required | both satisfy (plano-front) | ✓ |
| L24 sign (claim [0016]: negative) | negative | f = −48.6 mm | ✓ (detailed description [0059] typo) |
| Aspheric count | 3 elements, 6 surfaces | 3 elements, 6 surfaces | ✓ |
| ED count | 3 elements | 3 (2× S-FPL51, 1× S-FPM3) | ✓ |
| Element count | 17 | 17 | ✓ |
| Air-separated group count | 12 | 12 | ✓ |
| Aspheric re-fit residuals (even-only, in companion data file) | — | max 11.2 μm at S22A rim, sub-3 μm elsewhere | ✓ |
| Close-focus G4 travel (MFD 0.30 m from image plane) | — | 0.70 mm (W) / 2.04 mm (M) / 4.55 mm (T); within DD28 budget | ✓ |
| HOYA catalog cross-index for L21 (851401) | — | Matches M-TAFD305 exactly (OHARA 2018/2023 pocket catalogues list the cross-reference directly) | ✓ |
| Data file paraxial EFL round-trip (re-traced from written surfaces) | patent | 16.492 / 31.063 / 53.447 mm — residuals ≤ 11 μm | ✓ |
| Data file BFD round-trip (air-equivalent 21.999 mm target) | 22.000 mm | 21.995 / 21.999 / 22.001 mm | ✓ |
