# Fujifilm Fujinon XF 90mm f/2 R LM WR — Patent Analysis

**Patent:** US 2016/0274335 A1 — *Imaging Lens and Imaging Apparatus*
**Inventor:** Daiki Kawamura
**Applicant / Assignee:** Fujifilm Corporation
**Filed:** March 8, 2016 | **Priority:** JP 2015-052258, March 16, 2015
**Published:** September 22, 2016
**Embodiment analyzed:** Example 1 (Tables 1–2, FIG. 1)

---

## 1. Embodiment Identification

Fujifilm's published specifications for the XF 90mm f/2 R LM WR state the lens comprises **11 elements in 8 groups**, including **three ED (extra-low dispersion) elements**, with a maximum aperture of f/2, a minimum aperture of f/16, a minimum focus distance of 0.6 m (maximum magnification 0.2×), and a 62 mm filter thread. The lens uses a Quad Linear Motor (LM) inner-focus system and is weather-sealed (WR).

Example 1 of the patent matches the production lens on every convergent criterion: 11 elements in 8 groups arranged as G1 (4 elements) / Stop / G2 (2 elements, cemented) / G3 (5 elements), with an f/2.06 design aperture and an 87.5 mm design focal length. Fujifilm markets the lens as 90 mm, and the stated 137 mm full-frame equivalent derives from 90 × 1.52 (Fujifilm's published crop factor for the 23.5 × 15.6 mm X-Trans sensor). No aspherical surfaces are present in Example 1, consistent with Fujifilm's specifications, which make no mention of aspherical elements. Inner focusing is performed by movement of G2 alone.

Examples 2, 3, and 6 share the same 11-in-8 configuration as Example 1 (Example 6 is identical to Example 1 with the addition of an apodization filter). Example 4 has 12 elements in 8 groups, and Example 5 has 11 elements in 7 groups with two aspherical surfaces. The production lens is therefore unambiguously identified with **Example 1**.

---

## 2. Prescription Check — Surface 1 Radius and the Cover Plate

The printed Table 1 gives the first radius as **R₁ = 134.54219 mm**, and Table 12 repeats the same row for Example 6. Only the OCR text layer embedded in the PDF garbles the row to "134,542.19"; read as a thousands separator that would be a 135 m radius, which yields EFL ≈ 107 mm and fails every tabulated condition. The data file stores the printed value, so no correction of the patent is involved.

With the printed radii, a paraxial trace reproduces the patent's general data and Table 14:

| Quantity | Computed | Patent |
|---|---|---|
| f | 87.50 mm | 87.495 |
| Bf (air-converted) | 24.67 mm | 24.663 |
| TL/f | 1.315 | 1.315 |
| \|f2\|/f | 0.549 | 0.549 |
| Bf/f | 0.282 | 0.282 |
| D23/TL | 0.163 | 0.163 |

Table 1 closes with a parallel plate PP (surfaces 21–22, d = 2.850 mm, nd = 1.51633) standing in for the sensor cover glass and filters (¶0075). Following the data-file convention the plate is omitted and the last air gap is the patent's air-converted back focus, 24.663 mm: 20.784 mm of air, 2.850/1.51633 = 1.880 mm for the plate, and a derived 1.999 mm behind it.

---

## 3. Optical Configuration

The lens is a three-group telephoto-type design (group focal lengths are calculated from the prescription; the patent tabulates only |f2|/f):

| Group | Elements | Power | Role |
|---|---|---|---|
| G1 | L11, L12, L13, L14 | Positive (f = +70.4 mm) | Front objective — collects and converges light |
| G2 | L21, L22 (cemented) | Negative (f = −48.1 mm) | Inner-focus group — moves 8.1 mm toward the image between the patent's infinity and proximal states |
| G3 | L31, L32+L33, L34, L35 | Positive (f = +57.5 mm) | Rear relay — corrects off-axis aberrations and sets back focus |

The aperture stop is located between G1 and G2, fixed relative to the image plane during focusing. This placement is a key design choice: by positioning the stop ahead of the focusing group (rather than behind it, as in many competing designs), the front element diameters are reduced and the focus throw space is naturally available in the gap between G1 and G3.

The telephoto ratio is TL/f = 1.315, meaning the air-converted length (115.1 mm from front vertex to image plane; 116.0 mm with the 2.85 mm plate in place) is about 31.5% longer than the focal length. This is a moderately compact telephoto arrangement.

---

## 4. Aspherical Surfaces

**Example 1 has no aspherical surfaces.** All 20 optical surfaces (plus the flat aperture stop) are spherical. This is confirmed by the absence of any asterisk markings in Table 1 of the patent, and by the absence of any aspherical coefficient table for Example 1.

This is noteworthy for a modern f/2 medium-telephoto design. The designer achieved satisfactory aberration correction using only spherical surfaces, relying instead on a generous element count (11 lenses), judicious glass selection (three ED materials and two ultra-high-dispersion glasses), and careful power distribution across the three groups.

For comparison, Example 5 in the same patent *does* use aspherical surfaces (on surfaces 12 and 13, the front element of G3), but it has a different group structure (7 groups vs. 8) and was not selected for production.

---

## 5. Glass Identification

The patent provides nd, vd, and θgF for each element but names no glass types. Matching the published coordinates against the OHARA and HOYA catalogs gives the following catalog equivalents; they are inferences from the numbers, not patent statements. ΔθgF is calculated from the patent's θgF as θgF − (0.6438 − 0.001682·νd) and is stored as `dPgF` on every element.

| Element | nd | vd | θgF | ΔθgF | Catalog equivalent | Six-Digit Code | Match |
|---|---|---|---|---|---|---|---|
| L11 | 1.51633 | 64.14 | 0.53531 | −0.0006 | S-BSL7 (OHARA) | 516/641 | Exact nd/vd |
| L12 | 1.49700 | 81.61 | 0.53887 | +0.0323 | FCD1 (HOYA) | 497/816 | Exact nd; vd within 0.02 |
| L13 | 1.59522 | 67.73 | 0.54426 | +0.0144 | S-FPM2 (OHARA) | 595/677 | Exact nd; vd within 0.01 |
| L14 | 1.74950 | 35.33 | 0.58189 | −0.0025 | S-NBH51 (OHARA) | 750/353 | Exact nd/vd |
| L21 | 1.92286 | 18.90 | 0.64960 | +0.0376 | S-NPH2 (OHARA) | 923/189 | Exact nd/vd |
| L22 | 1.63854 | 55.38 | 0.54858 | −0.0021 | S-BSM18 (OHARA) | 639/554 | Exact nd/vd |
| L31 | 1.59522 | 67.73 | 0.54426 | +0.0144 | S-FPM2 (OHARA) | 595/677 | Same row as L13 |
| L32 | 1.83481 | 42.72 | 0.56486 | −0.0071 | S-LAH55VS (OHARA) | 835/427 | Exact nd; vd within 0.02 |
| L33 | 1.67270 | 32.10 | 0.59891 | +0.0091 | S-TIM25 (OHARA) | 673/321 | Exact nd/vd |
| L34 | 1.71300 | 53.87 | 0.54587 | −0.0073 | S-LAL8 (OHARA) | 713/539 | Exact nd/vd |
| L35 | 1.51742 | 52.43 | 0.55649 | +0.0009 | S-NSL36 (OHARA) | 517/524 | Exact nd/vd |
| PP | 1.51633 | 64.14 | 0.53531 | −0.0006 | S-BSL7 class plate (not modeled) | 516/641 | — |

Ten of the eleven elements match OHARA catalog coordinates; L12 matches the HOYA FCD1 coordinate most closely (OHARA S-FPL51 is 1.49700 / 81.55). The large positive ΔθgF of L21 is the ordinary behavior of a very dense flint (νd = 18.9), not an ED property.

### ED Element Identification

Fujifilm states the lens contains **three ED elements**. The patent never uses the term; it only requires low-dispersion positive lenses in G1 (conditions (1) and (7), νd above 55 and 65). The three low-dispersion crowns with positive ΔθgF are the inferred ED elements:

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

- **Travel distance:** 8.096 mm between the two published states (Table 2: DD[8] 4.600 → 12.696 mm, DD[11] 18.753 → 10.657 mm)
- **Published near state:** "Proximal", β = 0.14, FNo. 2.35, 2ω = 16.0°. The patent prints no object distance; the tabulated gaps focus an object 700 mm in front of the first surface (calculated, β = −0.136), about 0.815 m object-to-image. The data file's close-focus end is this state. The production lens reaches 0.6 m and 0.2×; the additional G2 travel is not published and is not modeled.
- **Direction:** G2 moves from object side toward image side
- **Fixed elements:** G1, aperture stop, and G3 are all stationary relative to the image plane
- **Focus group mass:** Only 2 cemented elements (L21+L22), enabling the Quad Linear Motor system to achieve the advertised 0.14-second autofocus speed
- **Diaphragm:** 7 rounded blades (from Fujifilm specifications), contributing to the smooth bokeh rendering the lens is known for

The constant total gap (DD[8] + DD[11] = 23.353 mm) means the lens barrel length does not change during focusing — an important characteristic for weather sealing (seven internal seals). The stop is fixed, and the patent lists FNo. 2.06 at infinity and 2.35 at the proximal state with no change of iris diameter implied.

---

## 7. Design Summary

| Parameter | Value |
|---|---|
| Patent embodiment | Example 1 (US 2016/0274335 A1) |
| Design focal length | 87.495 mm (marketed as 90 mm) |
| Design f-number | f/2.06 (marketed as f/2.0); f/2.35 at the proximal state |
| Half-field angle | 9.2° (full angle 18.4°) |
| Total track (TL) | 115.1 mm |
| Back focus (air) | 24.66 mm |
| Telephoto ratio (TL/f) | 1.315 |
| Elements / Groups | 11 / 8 |
| ED elements | 3 (L12: FCD1, L13: S-FPM2, L31: S-FPM2) |
| Aspherical surfaces | None |
| Focus type | Inner focus (G2 only) |
| Focus travel | 8.1 mm (infinity → patent proximal state) |
| Closest published focus | β = 0.14, ≈ 0.82 m object-to-image (calculated); production MFD 0.6 m / 0.2× not modeled |
| Petzval sum | +0.00201 mm⁻¹ |
| Diaphragm | 7 blades, rounded |

The Fujifilm XF 90mm f/2 R LM WR is an all-spherical, 11-element inner-focus telephoto that relies on careful glass selection — particularly three ED elements and two ultra-high-dispersion flints — to achieve excellent chromatic correction without aspherical surfaces. The compact, lightweight G2 focus group (a single cemented doublet of exotic glass) enables fast, quiet autofocus while maintaining aberration stability across the focus range.
