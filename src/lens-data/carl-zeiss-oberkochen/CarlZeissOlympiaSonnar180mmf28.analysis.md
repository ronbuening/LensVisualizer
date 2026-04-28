# Carl Zeiss Olympia-Sonnar 180 mm f/2.8 — Contarex

## Patent & Design Overview

**Patent:** DE 1,268,404 (Bundesrepublik Deutschland — Auslegeschrift)
**Filed:** 14 November 1961
**Published:** 16 May 1968
**Applicant:** Fa. Carl Zeiss, 7920 Heidenheim
**Inventors:** Erwin Konschack; Dr. Günther Lange
**Example analysed:** Example 2 (Tabelle II, Fig. 2)

The patent describes a four-element photographic objective of approximately 180 mm focal length and f/2.8 maximum aperture, intended for 24×36 mm format. It covers four numerical examples: Examples 1 and 2 are f/2.8 designs corrected for a ±7° field; Example 3 is an f/4 design with four elements corrected for ±5°; Example 4 is also f/4 and ±5° but uses five elements in five groups (adding a fifth element, L_V, after L_IV). Example 2 is believed to represent the design closest to the production Contarex Olympia-Sonnar 180 mm f/2.8, launched in 1966 — though the patent does not state which example was manufactured. Approximately 965 units were produced over a five-year run, making it one of the rarest lenses in the Contarex system.

This Contarex-era design is architecturally distinct from the celebrated original 1936 Olympia-Sonnar by Ludwig Bertele, which used five elements in three groups (with cemented components) for the Contax rangefinder. Konschack and Lange's redesign simplified the construction to four air-separated singlets — a configuration that reduced manufacturing complexity, eliminated cemented-surface alignment sensitivity, and better suited the needs of an SLR lens with its longer back-focal-distance requirement.

---

## Prescription — Example 2, Scaled to f = 180 mm

All patent data is normalised to unit focal length (f = 1). The table below scales every radius and thickness by the production focal length of 180 mm.

| Surface | R (mm)    | d (mm) | nd      | νd    | Element |
|---------|-----------|--------|---------|-------|---------|
| r₁      | +76.014   | 15.732 | 1.62041 | 60.29 | L_I front |
| r₂      | +2658.4   |  0.054 | 1.0 (air) | —   | L_I rear → air |
| r₃      | +60.381   | 10.872 | 1.62041 | 60.29 | L_II front |
| r₄      | +127.611  | 14.904 | 1.0 (air) | —   | L_II rear → air |
| r₅      | ∞ (flat)  |  5.814 | 1.78470 | 26.10 | L_III front |
| r₆      | +40.939   | 48.330 | 1.0 (air) | —   | L_III rear → air |
|         |           |        |         |       | *(stop in this gap)* |
| r₇      | +344.448  |  4.932 | 1.75520 | 27.53 | L_IV front |
| r₈      | −170.183  | 74.268 | 1.0 (air) | —   | L_IV rear → image |

**Back focal distance (BFD):** 74.27 mm (patent: s′ = 0.4126 f); independently computed BFD = 74.37 mm (0.1 mm discrepancy from rounding in the patent's normalised data).

### Computed System Parameters (ABCD paraxial ray trace)

| Parameter | Value |
|-----------|-------|
| Effective focal length (EFL) | 180.06 mm |
| Back focal distance | 74.37 mm (computed; patent-scaled: 74.27 mm) |
| Total track (front vertex to image) | 175.0 mm |
| Telephoto ratio (total track / EFL) | 0.972 |
| Half-field angle (diagonal, 24×36 mm) | 6.9° |
| Entrance pupil diameter (f/2.8) | 64.3 mm |
| Petzval sum | 0.00127 mm⁻¹ |
| Petzval radius | 787 mm (4.4× EFL) |

The telephoto ratio of 0.97 means the lens is about 5 mm shorter than its own focal length — a mild telephoto compression achieved by the large separation between the negative L_III and the positive rear element L_IV.

---

## Aspherical Surfaces

**There are none.** The patent specifies exclusively spherical surfaces throughout all four examples. No conic constants, polynomial coefficients, or aspherical departures are mentioned anywhere in the document. This is entirely consistent with the era: aspherical surfaces were extremely rare in production camera lenses in the early 1960s, and Carl Zeiss did not adopt aspherical elements in 35 mm optics until significantly later. The optical correction in this design relies entirely on the choice of glass types, element bending, and air-space optimisation.

---

## Glass Identification

The patent provides refractive index (nd) and Abbe number (νd) for each element. The six-digit glass code (first three digits from nd, next three from νd) allows identification against the Schott catalog, which Carl Zeiss Oberkochen (West Germany) used as its primary glass supplier.

### L_I and L_II — nd = 1.62041, νd = 60.29 → Code 620603

**Identification: Schott SK16** (nd = 1.62041, νd = 60.32). Confidence: **exact match** — the refractive index agrees to all five decimal places, and the Abbe number difference of 0.03 is within catalog rounding. SK16 is a dense crown glass ("Schwerkron") in the SK family, characterised by moderately high refractive index combined with low dispersion. It was well-established in the Schott catalog by the early 1960s and is still produced today (as N-SK16 in the eco-glass reformulation). Both L_I and L_II use the same glass, which simplifies manufacturing logistics.

### L_III — nd = 1.78470, νd = 26.10 → Code 785261

**Identification: Schott SF56A** (nd = 1.78470, νd = 26.08) or **Schott SF11** (nd = 1.78472, νd = 25.76). The nd match is effectively perfect for both candidates. SF56A matches the Abbe number more closely (Δνd = 0.02 vs. 0.34), but its introduction date relative to the 1961 filing is uncertain. SF11 is a well-documented dense flint from that era. Both are lead-containing dense flint glasses (SF = "Schwerflint") with very high dispersion. For this analysis, the six-digit code 785261 is used as the manufacturer-agnostic identifier. Confidence: **exact nd match**; family-level certainty (dense flint, SF-class).

### L_IV — nd = 1.75520, νd = 27.53 → Code 755275

**Identification: Schott SF4** (nd = 1.75520, νd = 27.58). Confidence: **exact match** — nd agrees to five decimal places, νd difference of 0.05 is within rounding. SF4 is another dense flint glass, slightly less refractive than L_III's glass but with similarly high dispersion.

### Summary of Glass Choices

| Element | Glass Code | Schott Match | Type | Role |
|---------|-----------|-------------|------|------|
| L_I | 620603 | SK16 | Dense crown | Low-dispersion positive |
| L_II | 620603 | SK16 | Dense crown | Low-dispersion positive |
| L_III | 785261 | SF56A / SF11 | Dense flint | High-dispersion negative |
| L_IV | 755275 | SF4 | Dense flint | High-dispersion positive |

The glass selection is notable for its simplicity: only two glass families are used (dense crown and dense flint), with the two crown elements sharing identical glass. This minimises procurement complexity while still providing enough degrees of freedom for aberration correction.

---

## Element-by-Element Optical Analysis

### L_I — Front Positive Element

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, near-plano-convex (rear surface r₂ ≈ flat; both R > 0) |
| Radii | r₁ = +76.01 mm, r₂ = +2658.4 mm |
| Centre thickness | 15.73 mm |
| Focal length | +125.8 mm |
| Glass | SK16 (620603) |

L_I is the primary light-gathering element. Its front surface (r₁ = +76.0 mm) provides strong positive refraction, while the rear surface is nearly flat (r₂ ≈ +2658 mm), making this functionally a plano-convex element with the convex side facing the subject. This orientation is deliberate: presenting the more strongly curved surface to the incoming collimated beam distributes the refraction more evenly between the two surfaces, minimising spherical aberration — a textbook strategy for fast positive elements.

The patent describes L_I as "ein unsymmetrisches sammelndes erstes Glied, welches die Fläche mit der stärkeren Krümmung dem Aufnahmegegenstand zukehrt" — an asymmetric converging first element with its more strongly curved surface facing the subject. With a focal length of 125.8 mm (0.70× the system EFL), L_I carries the largest single share of the system's positive power.

### L_II — Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus (convex toward subject) |
| Radii | r₃ = +60.38 mm, r₄ = +127.6 mm |
| Centre thickness | 10.87 mm |
| Focal length | +174.0 mm |
| Glass | SK16 (620603) |

L_II is described in the patent as "ein meniskenförmiges sammelndes zweites Glied, welches seine hohle Seite dem dritten Glied zukehrt" — a meniscus-shaped converging second element with its concave side facing the third element. Both surfaces curve in the same direction (both R positive), but the front surface is more strongly curved, producing net positive power. It adds converging power to the front group while controlling spherical aberration and coma through its meniscus bending.

L_I and L_II together form a "front positive group" with a combined focal length of approximately 74 mm — substantially shorter than the system focal length. This strong positive power in the front group, followed by a large air space, is characteristic of a telephoto-type configuration.

### L_III — Negative Element

| Property | Value |
|----------|-------|
| Shape | Plano-concave — flat front, rear convex toward object (negative power) |
| Radii | r₅ = ∞ (flat), r₆ = +40.94 mm |
| Centre thickness | 5.81 mm |
| Focal length | −52.2 mm |
| Glass | SF56A or SF11 (785261) |

L_III is the sole negative element. The patent describes it as "ein unsymmetrisches zerstreuendes drittes Glied, welches die Fläche mit der stärkeren Krümmung dem vierten Glied zukehrt" — an asymmetric diverging third element with its more strongly curved surface facing the fourth element. With a flat front surface and all the refractive power concentrated on surface r₆, this element provides strong negative power (f = −52.2 mm, or −0.29× the system EFL) using a high-dispersion dense flint glass.

The negative element serves three critical functions. First, it creates the telephoto separation: placed between the strong front positive group and the rear positive element, it diverges the converging beam, allowing the system to achieve a 180 mm focal length in a physical length of only 175 mm. Second, its high-dispersion glass (νd = 26.1) provides the primary chromatic correction against the low-dispersion crown elements. Third, its surface r₆ has the largest surface power (Δn/r) of any surface in the system at −3.45/f, making it the dominant contributor to both Petzval curvature correction and higher-order aberration balancing.

### L_IV — Rear Positive Element

| Property | Value |
|----------|-------|
| Shape | Biconvex (weak front, stronger rear) |
| Radii | r₇ = +344.4 mm, r₈ = −170.2 mm |
| Centre thickness | 4.93 mm |
| Focal length | +151.5 mm |
| Glass | SF4 (755275) |

The patent describes L_IV as "einem sammelnden, vorzugsweise bikonvexen vierten Glied" — a converging, preferably biconvex fourth element. This is the most optically unusual element in the design. In a conventional telephoto achromat, one would expect a rear positive element to use crown glass (high νd) to complement the negative flint element. Instead, Konschack and Lange chose a dense flint glass (SF4, νd = 27.53) — nearly matching the dispersion of L_III's glass.

This unconventional glass choice is the key to the patent's stated goal of controlling the Gauss error (secondary spectrum). By placing positive power in a flint glass and balancing it against the negative flint element's opposite-sign contribution, the designers gain an additional degree of freedom in the partial-dispersion balance, Σ(φᵢ · Pg,F / νᵢ). A conventional crown-flint pairing constrains this sum to follow the "normal line" of the Pg,F vs. νd diagram; using two different flints with slightly different partial dispersions allows departure from the normal line, reducing secondary spectrum.

L_IV also provides the final positive power contribution needed to bring the diverging beam from L_III to focus. Its relatively thin profile (4.93 mm) and weak front curvature (r₇ = +344.4 mm) concentrate most of its bending at the rear surface (r₈ = −170.2 mm), which contributes a surface power of +0.80/f — modest compared to the dominant surfaces r₆ (−3.45/f) and r₃ (+1.85/f), but critical for the overall power balance and chromatic correction.

---

## Chromatic Aberration and the Gauss Error

The patent devotes its entire theoretical discussion to the Gaußfehler — the variation in longitudinal chromatic aberration with wavelength, known in English as secondary spectrum or secondary chromatic aberration. This is the residual focus shift between the blue-violet and red extremes of the spectrum that remains even after primary achromatisation.

### Primary Achromatisation

The primary chromatic correction is verified by the sum Σ(φᵢ / νᵢ), which should be near zero for a well-corrected system:

| Element | φ (mm⁻¹) | νd | φ/ν |
|---------|----------|------|------|
| L_I | +0.00795 | 60.29 | +0.000132 |
| L_II | +0.00575 | 60.29 | +0.000095 |
| L_III | −0.01917 | 26.10 | −0.000734 |
| L_IV | +0.00660 | 27.53 | +0.000240 |
| **Sum** | | | **−0.000267** |

The sum is small but intentionally non-zero. The slight residual under-correction (negative sign) indicates a deliberate design choice to balance the primary chromatic aberration against higher-order chromatic effects at the actual aperture and field of the lens.

### Secondary Spectrum Strategy

The patent's innovation lies in the observation that for this four-element Sonnar configuration, the Gauss error can be kept small by constraining eight geometric parameters — five dimensional bounds (element thicknesses, air spaces, and a vertex distance) and three radius ratios — documented in the patent claims. Example 2 satisfies all eight constraints. The practical implementation of these constraints leads to the glass pairing strategy described above: two crown positives (L_I, L_II) plus one flint negative (L_III) plus one flint positive (L_IV).

In a classical two-glass achromat, secondary spectrum is fixed by the partial dispersion properties of the two glasses — it cannot be independently adjusted. By using three different glasses (SK16, SF56A/SF11, and SF4) with subtly different partial dispersion ratios (Pg,F), the designers created enough parametric freedom to simultaneously control primary colour, secondary colour, and the Petzval sum.

---

## Field Curvature

The Petzval sum of 0.00127 mm⁻¹ yields a Petzval radius of 787 mm — approximately 4.4 times the focal length. For a 180 mm telephoto covering the 24×36 mm format (half-diagonal 21.6 mm, half-field 6.9°), this represents a modest field curvature: the Petzval displacement at the extreme corner is approximately 0.3 mm, which exceeds the geometric depth of focus at f/2.8 (±0.084 mm for a 30 µm circle of confusion) but falls within the off-axis aberration budget typical for a lens of this speed and era. In practice, the designer balances the Petzval surface against astigmatism to flatten the best-focus surface across the field — the Petzval sum alone does not tell the whole story. At 70% of the diagonal (a more representative evaluation radius), the Petzval displacement drops to approximately 0.15 mm. The favourable Petzval sum is a direct consequence of the strong negative power of L_III, whose r₆ surface contributes −0.0107 mm⁻¹ to the Petzval sum — enough to nearly cancel the cumulative positive contributions of the other three elements.

---

## Focus Mechanism

The patent itself does not describe a focus mechanism; it presents only the optical prescription at infinity focus. Based on the physical configuration, the manufacturer's documentation, and the Contarex system architecture, focusing is by **unit focus** (Gesamtverschiebung) — the entire four-element optical assembly translates forward along the optical axis to focus on closer subjects. There are no internal focusing groups, floating elements, or variable air gaps in this design.

The Contarex Olympia-Sonnar featured a "quick focusing system" (Schnellfokussierung) in its mechanical mount, similar to the system used in the Contarex 250 mm and 400 mm telephotos. This was a lever-actuated helicoid that provided rapid and precise focus acquisition — a practical necessity for sports and press photography with a manual-focus 180 mm lens. The minimum focus distance was 1.8 m from the film plane, at which the lens barrel extends approximately 22.4 mm forward from its infinity position.

Since focusing moves the entire lens, the only distance that changes is the gap between the last glass surface (r₈) and the film plane, which increases as the lens moves forward (away from the film) for closer subjects. At the minimum focus distance, the image magnification is small enough that the change in aberration balance from the altered conjugate ratio is modest, though the patent's claim of "correction for ±7° field" strictly applies at infinity focus.

---

## Design Architecture — Modified Sonnar / Ernostar Telephoto

The four-element, four-group architecture of this lens can be understood as a simplified Sonnar telephoto. The original 1936 Olympia-Sonnar by Ludwig Bertele used five elements in three groups, with cemented doublets and triplets that reduced air-glass surface count to improve contrast in the pre-multicoating era. By 1961, anti-reflection coatings (Carl Zeiss's "T" coating) had matured to the point where minimising air-glass surfaces was no longer paramount, and the benefits of an all-singlet design — simpler manufacturing, no cemented-surface alignment, better thermal stability — could be realised.

The layout follows a well-known telephoto pattern:

1. **Front positive group** (L_I + L_II): Strong converging power (combined f ≈ 74 mm) collects and begins converging the light. Left unchecked, this group would form a real intermediate image approximately 74 mm behind its rear principal plane — but L_III intercepts the beam well before that point.
2. **Negative diverging element** (L_III): Intercepts the converging beam and diverges it, effectively extending the focal length beyond the physical length of the assembly (telephoto compression).
3. **Aperture stop**: Located in the large 48.3 mm air gap between L_III and L_IV, approximately 35% of the way from L_III to L_IV (inferred from Fig. 2).
4. **Rear positive element** (L_IV): Receives the diverging beam and brings it to final focus at the film plane, while contributing to chromatic and field-curvature correction.

The large air gap d₆ = 48.3 mm (27% of the total track) is the defining structural feature. It provides the physical separation needed for the telephoto effect and houses the aperture diaphragm in a position that yields good control over off-axis aberrations (coma, astigmatism) and provides relatively even illumination across the field.

---

## Summary of Key Design Characteristics

| Feature | Value |
|---------|-------|
| Configuration | 4 elements / 4 groups, all singlets |
| Aspherical surfaces | None (all spherical) |
| Cemented elements | None |
| EFL | 180.06 mm |
| Maximum aperture | f/2.8 |
| Field of view | ±7° (diagonal, 24×36 mm) |
| Telephoto ratio | 0.97 |
| Petzval radius | 787 mm |
| Focus type | Unit focus (entire lens translates) |
| Close focus distance | 1.8 m (extension ≈ 22.4 mm) |
| Glass types | 2 families: dense crown (SK16), dense flint (SF56A/SF11, SF4) |
| Notable feature | Flint glass in rear positive element for Gauss error control |
| Production | ~965 units, 1966–1971, Contarex bayonet mount |
| Filter thread | 67 mm |
| Weight | ~1 kg |
| Overall length | ~130 mm |
