# Fujifilm Fujinon XF 90mm f/2 R LM WR — Patent Analysis

**Patent:** US 2016/0274335 A1 — *Imaging Lens and Imaging Apparatus*
**Inventor:** Daiki Kawamura (Fujifilm Corporation)
**Filed:** March 8, 2016 | **Priority:** JP 2015-052258, March 16, 2015
**Production Embodiment:** Example 1

---

## 1. Embodiment Identification

Fujifilm's published specifications for the XF 90mm f/2 R LM WR state the lens comprises **11 elements in 8 groups**, including **three ED (extra-low dispersion) elements**, with a maximum aperture of f/2, a minimum focus distance of 0.6 m, and a 62 mm filter thread. The lens uses a Quad Linear Motor (LM) inner-focus system and is weather-sealed (WR).

Example 1 of the patent matches the production lens on every convergent criterion: 11 elements in 8 groups arranged as G1 (4 elements) / Stop / G2 (2 elements, cemented) / G3 (5 elements), with an f/2.06 design aperture and an 87.5 mm design focal length. Fujifilm markets the lens as 90 mm, and the stated 137 mm full-frame equivalent derives from 90 × 1.52 (Fujifilm's published crop factor for the 23.5 × 15.6 mm X-Trans sensor). No aspherical surfaces are present in Example 1, consistent with Fujifilm's specifications, which make no mention of aspherical elements. Inner focusing is performed by movement of G2 alone.

Examples 2, 3, and 6 share the same 11-in-8 configuration as Example 1 (Example 6 is identical to Example 1 with the addition of an apodization filter). Example 4 has 12 elements in 8 groups, and Example 5 has 11 elements in 7 groups with two aspherical surfaces. The production lens is therefore unambiguously identified with **Example 1**.

---

## 2. OCR Correction — Surface 1 Radius

The PDF OCR of Table 1 renders the first surface radius as "134,542.19". In US number formatting the comma is a thousands separator, which would give R₁ ≈ 134.5 m — an essentially flat surface. However, a paraxial ray trace with R₁ = 134542 yields EFL ≈ 107 mm, far from the patent-stated f = 87.495 mm, and all seven conditional formulae (Table 14) fail.

Interpreting the value as **R₁ = 134.54219 mm** (the decimal point corrupted to a comma during OCR) recovers EFL = 87.50 mm and satisfies every conditional formula to the patent's stated precision:

| Formula | Computed | Patent |
|---|---|---|
| TL/f | 1.315 | 1.315 |
| \|f2\|/f | 0.549 | 0.549 |
| Bf/f | 0.282 | 0.282 |
| D23/TL | 0.163 | 0.163 |

The same OCR corruption appears in Example 2 (surface 2: "18334.01582" likely representing a value with a misplaced decimal) and in Example 6 (identical to Example 1). All data in the accompanying `.data.ts` file uses the corrected R₁ = 134.54219 mm.

---

## 3. Optical Configuration

The lens is a three-group telephoto-type design:

| Group | Elements | Power | Role |
|---|---|---|---|
| G1 | L11, L12, L13, L14 | Positive (f = +70.4 mm) | Front objective — collects and converges light |
| G2 | L21, L22 (cemented) | Negative (f = −48.1 mm) | Inner-focus group — moves 8.1 mm toward image during infinity→close focus |
| G3 | L31, L32+L33, L34, L35 | Positive (f = +57.5 mm) | Rear relay — corrects off-axis aberrations and sets back focus |

The aperture stop is located between G1 and G2, fixed relative to the image plane during focusing. This placement is a key design choice: by positioning the stop ahead of the focusing group (rather than behind it, as in many competing designs), the front element diameters are reduced and the focus throw space is naturally available in the gap between G1 and G3.

The telephoto ratio is TL/f = 1.315, meaning the physical length (115.1 mm from front vertex to image plane) is about 31.5% longer than the focal length. This is a moderately compact telephoto arrangement.

---

## 4. Aspherical Surfaces

**Example 1 has no aspherical surfaces.** All 20 optical surfaces (plus the flat aperture stop) are spherical. This is confirmed by the absence of any asterisk markings in Table 1 of the patent, and by the absence of any aspherical coefficient table for Example 1.

This is noteworthy for a modern f/2 medium-telephoto design. The designer achieved satisfactory aberration correction using only spherical surfaces, relying instead on a generous element count (11 lenses), judicious glass selection (three ED materials and two ultra-high-dispersion glasses), and careful power distribution across the three groups.

For comparison, Example 5 in the same patent *does* use aspherical surfaces (on surfaces 12 and 13, the front element of G3), but it has a different group structure (7 groups vs. 8) and was not selected for production.

---

## 5. Glass Identification

The patent provides nd, vd, and θgF for each element. Matching these against the OHARA, HOYA, and Schott catalogs yields the following identifications:

| Element | nd | vd | θgF | Glass ID | Six-Digit Code | Confidence |
|---|---|---|---|---|---|---|
| L11 | 1.51633 | 64.14 | 0.53531 | S-BSL7 (OHARA) | 516/641 | Exact |
| L12 | 1.49700 | 81.61 | 0.53887 | FCD1 (HOYA) | 497/816 | Exact (nd/vd/θgF) |
| L13 | 1.59522 | 67.73 | 0.54426 | S-FPM2 (OHARA) | 595/677 | Exact |
| L14 | 1.74950 | 35.33 | 0.58189 | S-NBH53 (OHARA) | 750/353 | Exact |
| L21 | 1.92286 | 18.90 | 0.64960 | S-NPH2 (OHARA) | 923/189 | Exact |
| L22 | 1.63854 | 55.38 | 0.54858 | S-BAM4 (OHARA) | 639/554 | Exact (nd/vd) |
| L31 | 1.59522 | 67.73 | 0.54426 | S-FPM2 (OHARA) | 595/677 | Exact (same as L13) |
| L32 | 1.83481 | 42.72 | 0.56486 | S-LAH55VS (OHARA) | 835/427 | Exact |
| L33 | 1.67270 | 32.10 | 0.59891 | S-TIM22 (OHARA) | 673/321 | Exact |
| L34 | 1.71300 | 53.87 | 0.54587 | S-LAM60 (OHARA) | 713/539 | Exact |
| L35 | 1.51742 | 52.43 | 0.55649 | S-NSL3 (OHARA) or E-ADF10 (HOYA) | 517/524 | Exact |
| PP | 1.51633 | 64.14 | 0.53531 | S-BSL7 (OHARA) | 516/641 | Exact |

All glasses except L12 and possibly L35 are identifiable as OHARA types, consistent with Fujifilm's established supply chain preference for OHARA optical glass.

### ED Element Identification

Fujifilm states the lens contains **three ED elements**. Anomalous partial dispersion analysis (deviation ΔθgF from the Schott normal line) identifies the three ED glasses:

| Element | vd | ΔθgF | Classification |
|---|---|---|---|
| **L12** | 81.61 | **+0.032** | **ED** — Fluorophosphate crown (FCD1), strong anomalous dispersion |
| **L13** | 67.73 | **+0.014** | **ED** — Phosphate crown (S-FPM2), moderate anomalous dispersion |
| **L31** | 67.73 | **+0.014** | **ED** — Same glass as L13 (S-FPM2) |

L12 (FCD1/HOYA) is the strongest ED glass in the design, with vd = 81.61 and a large positive ΔθgF of +0.032. This is a calcium fluoride substitute widely used for secondary spectrum correction. L13 and L31 both use S-FPM2, which has a more moderate but still clearly anomalous partial dispersion.

L11 (S-BSL7, vd = 64.14) has essentially zero anomalous dispersion (ΔθgF = −0.001) and is *not* an ED glass; it is a standard borosilicate crown.

---

## 6. Focusing Mechanism

The lens employs **inner focusing** via G2 only. Key characteristics:

- **Travel distance:** 8.096 mm (infinity to 0.6 m closest focus)
- **Direction:** G2 moves from object side toward image side
- **Fixed elements:** G1, aperture stop, and G3 are all stationary relative to the image plane
- **Focus group mass:** Only 2 cemented elements (L21+L22), enabling the Quad Linear Motor system to achieve the advertised 0.14-second autofocus speed
- **Diaphragm:** 7 rounded blades (from Fujifilm specifications), contributing to the smooth bokeh rendering the lens is known for

The constant total gap (DD[8] + DD[11] = 23.353 mm) means the lens barrel length does not change during focusing — an important characteristic for weather sealing (seven internal seals). The fixed stop position also means the f-number variation during focusing is purely geometric (from β = 0 at infinity to β = 0.14 at closest focus), with no mechanical stop diameter change.

---

## 7. Design Summary

| Parameter | Value |
|---|---|
| Patent embodiment | Example 1 (US 2016/0274335 A1) |
| Design focal length | 87.495 mm (marketed as 90 mm) |
| Design f-number | f/2.06 (marketed as f/2.0) |
| Half-field angle | 9.2° (full angle 18.4°) |
| Total track (TL) | 115.1 mm |
| Back focus (air) | 24.66 mm |
| Telephoto ratio (TL/f) | 1.315 |
| Elements / Groups | 11 / 8 |
| ED elements | 3 (L12: FCD1, L13: S-FPM2, L31: S-FPM2) |
| Aspherical surfaces | None |
| Focus type | Inner focus (G2 only) |
| Focus travel | 8.1 mm |
| Closest focus | 0.6 m (β = 0.14) |
| Petzval sum | +0.00201 mm⁻¹ |
| Diaphragm | 7 blades, rounded |

The Fujifilm XF 90mm f/2 R LM WR is an all-spherical, 11-element inner-focus telephoto that relies on careful glass selection — particularly three ED elements and two ultra-high-dispersion flints — to achieve excellent chromatic correction without aspherical surfaces. The compact, lightweight G2 focus group (a single cemented doublet of exotic glass) enables fast, quiet autofocus while maintaining aberration stability across the focus range.
