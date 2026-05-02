# Patent Analysis: JP2022-92388A — NIKKOR Z 100-400mm f/4.5-5.6 VR S

> **Companion data file:** `NikonNikkorZ100400f4556.data.ts` — zoom lens prescription for interactive SVG renderer.

## Patent Overview

| Field | Value |
|---|---|
| **Patent number** | JP2022-92388A (Kokai / Unexamined) |
| **Filed** | 10 December 2020 |
| **Published** | 22 June 2022 |
| **Applicant** | Nikon Corporation (株式会社ニコン) |
| **Inventor** | Hiroshi Yabumoto (籔本 洋) |
| **Title** | Optical System, Optical Apparatus, and Method for Manufacturing Optical System |
| **IPC** | G02B 15/22, G02B 13/02, G02B 15/20 |
| **Prior art** | WO2013/027364 |

This patent discloses a zoom optical system with multiple focusing groups that move along different trajectories during focus, optimized for telephoto zoom lenses covering the super-telephoto range. Four numerical examples are provided. **Example 1** is the principal subject of this analysis and is a strong candidate for the production NIKKOR Z 100-400mm f/4.5-5.6 VR S, as demonstrated by the convergent evidence below.

---

## Production Identification: Evidence for Example 1 → NIKKOR Z 100-400mm f/4.5-5.6 VR S

The following convergent criteria identify Example 1 as the basis for the production design:

1. **Element and group count.** The patent prescription yields exactly **25 elements in 20 air-separated groups**, matching Nikon's published specification.

2. **Special dispersion elements.** The prescription contains exactly **6 elements with nd ≈ 1.498 or 1.487 (ED glass)** and **2 elements with nd ≈ 1.437 (Super ED glass)**, totaling 8 special dispersion elements — matching Nikon's official specification of "6 ED elements, 2 Super ED elements." (*Note: several third-party reviews erroneously reverse this count to "6 Super ED + 2 ED." The correct breakdown per Nikon's own product pages is 6 ED + 2 Super ED.*)

3. **All-spherical design.** No aspherical coefficient tables appear for Example 1. This matches the confirmed production lens, which contains **no aspherical elements** — unusual for a modern S-line NIKKOR and noted by multiple reviewers.

4. **Focal length and f-number.** The patent gives f_t = 388.17 mm (tele) and f_w = 103.09 mm (wide), with F_not = 5.76. The production lens is marketed as 100–400 mm f/4.5–5.6. Independent paraxial ray trace confirms the wide-end f-number is **f/4.50**, matching the production specification exactly. The slight focal length discrepancy (zoom ratio 3.77× vs. marketed 4.0×) is typical of patent-to-production optimization; Nikon's final production tuning adjusts the zoom cam to reach the marketed endpoints.

5. **Optical total length.** TL_t = 284.55 mm at the tele end. The production lens measures 222 mm in barrel length at 100 mm, extending to ~272 mm at 400 mm — consistent with the variable-gap analysis showing ~50 mm of total group movement during zooming.

6. **Internal floating focus with two adjacent negative groups.** The patent specifies G5 and G6 as the focus groups, both negative, adjacently positioned — matching Nikon's description of a "Multi-Focus Stepping Motor AF System" with two STM motors moving in sync.

7. **VR group.** The patent identifies the L17+L18 cemented doublet as the vibration reduction group (f_vr / f_t = 0.202), consistent with the production lens's in-barrel VR system.

8. **Filing chronology.** Filed December 2020; the NIKKOR Z 100-400mm was announced October 2021, with sales beginning early 2022.

---

## System Architecture

### Zoom Group Structure

The lens follows a **seven-group zoom architecture** that forms a double-telephoto configuration at the tele end:

| Zoom Group | Elements | Power | Focal Length (mm) | Role |
|---|---|---|---|---|
| G1 (Front A) | L1, L2 | Positive | +220.2 | Primary light-gathering; front positive group |
| G2 (Front B) | L3–L5 | Positive | +412.7 | Second positive group; achromatic variator |
| G3 (Variator) | L6–L10 | Negative | −37.7 | Primary zoom variator |
| G4 (Relay) | L11–L19 + Stop | Positive | +46.0 | Image relay, stop, VR housing |
| G5 (Focus A) | L20+L21 | Negative | −81.7 | First focusing group |
| G6 (Focus B) | L22, L23 | Negative | −153.3 | Second focusing group |
| G7 (Field) | L24, L25 | Positive | +502.7 | Field flattener / teleconverter interface |

At the telephoto end, the system forms what the patent terms a **"double telephoto"** (ダブルテレフォト) configuration (¶0066). The first stage is the classical positive-front/negative-rear arrangement formed by G1+G2 (positive) and G3 (negative). The second stage is formed by G4 (positive) and the net-negative rear section G5+G6+G7. The combined telephoto ratio is TL_t / f_t = 0.733, achieving a 27% reduction in physical length relative to focal length.

### Zoom Mechanism

During zoom from wide (103 mm) to tele (388 mm), all six variable gaps change. Three — D4, D9, and D17 — vary only with zoom. The remaining three — D35, D38, D42 — vary with both zoom and focus.

| Gap | After | Wide ∞ (mm) | Tele ∞ (mm) | Change |
|---|---|---|---|---|
| D4 | L2 (G1→G2) | 1.500 | 51.500 | +50.000 |
| D9 | L5 (G2→G3) | 1.300 | 25.600 | +24.300 |
| D17 | L10 (G3→G4) | 43.095 | 2.100 | −40.995 |

The total sum of all six variable gaps increases from 90.4 mm (wide) to 140.4 mm (tele) at infinity focus — a net increase of exactly 50.0 mm, corresponding to the physical barrel extension observed during zooming.

### Focus Mechanism

Focus is accomplished by moving G5 and G6 along different axial trajectories — a **floating focus** system with two negative groups:

| Gap | After | Tele ∞ (mm) | Tele CF (mm) | Δ (mm) |
|---|---|---|---|---|
| D35 | L19 (G4→G5) | 3.467 | 34.084 | +30.617 |
| D38 | L21 (G5→G6) | 8.800 | 9.182 | +0.382 |
| D42 | L23 (G6→G7) | 48.913 | 17.915 | −30.998 |

Both G5 and G6 move toward the image during close focus (+30.6 and +0.4 mm respectively at tele), while the back focal distance (D42) decreases by 31 mm. The total focus-gap sum remains constant within each zoom position (61.18 mm at tele, 44.48 mm at wide, regardless of focus distance), confirming **true internal focusing**.

The production lens achieves minimum focus distances of 0.75 m at 100 mm and 0.98 m at 400 mm (per Nikon's specification).

---

## Aspherical Surfaces

**Example 1 contains no aspherical surfaces.** This is confirmed both by the absence of any aspherical coefficient table in the patent text and by Nikon's published specifications.

---

## Glass Identification

**Methodological limitation:** This patent provides only nd for each element — the Abbe number (νd) is not listed. Where no exact catalog glass is available, the companion data file uses a six-digit nd/vd code annotation instead of forcing a mismatched catalog name.

### Super ED Elements (2 total)

| Element | nd | Catalog Match | νd (est.) | Group |
|---|---|---|---|---|
| **L2** | 1.437001 | Near S-FPL55 (OHARA) | ~95 | G1 |
| **L5** | 1.437001 | Near S-FPL55 (OHARA) | ~95 | G2 |

### ED Elements (6 total)

| Element | nd | Catalog Match | νd (est.) | Group |
|---|---|---|---|---|
| **L1** | 1.487490 | N-FK5 / S-FSL5 | 70.4 | G1 |
| **L3** | 1.497820 | S-FPL51 (OHARA) | 81.1 | G2 |
| **L7** | 1.497820 | S-FPL51 (OHARA) | 81.1 | G3 |
| **L12** | 1.497820 | S-FPL51 (OHARA) | 81.1 | G4 |
| **L13** | 1.497820 | S-FPL51 (OHARA) | 81.1 | G4 |
| **L24** | 1.497820 | S-FPL51 (OHARA) | 81.1 | G7 |

### Standard Glass Elements (17 total)

| Element | nd | Catalog Match | νd (est.) | Power | Group |
|---|---|---|---|---|---|
| L4 | 1.804400 | S-LAH63 | 39.6 | Negative | G2 |
| L6 | 1.720467 | 720502 code; no exact catalog match | 50.2 | Positive | G3 |
| L8 | 1.741000 | S-LAM3 | 52.6 | Negative | G3 |
| L9 | 1.854505 | 855399 code; no exact catalog match | 39.9 | Positive | G3 |
| L10 | 1.755000 | S-LAH97 | 52.3 | Negative | G3 |
| L11 | 1.593190 | S-SK14 | 60.5 | Positive | G4 |
| L14 | 1.806100 | S-LAH53 | 40.9 | Negative | G4 |
| L15 | 1.808090 | S-NPH1 | 22.8 | Positive | G4 |
| L16 | 2.000690 | 001255 code; no exact catalog match | 25.5 | Negative | G4 |
| L17 | 1.552981 | 553555 code; no exact catalog match | 55.5 | Positive | G4 (VR) |
| L18 | 1.953750 | S-LAH99 | 32.3 | Negative | G4 (VR) |
| L19 | 1.603420 | 603564 code; no exact catalog match | 56.4 | Positive | G4 |
| L20 | 1.850260 | 850323 code; no exact catalog match | 32.3 | Positive | G5 |
| L21 | 1.729160 | S-LAL18 | 54.7 | Negative | G5 |
| L22 | 1.654115 | S-NBH5 | 39.7 | Positive | G6 |
| L23 | 1.902650 | 903354 code; no exact catalog match | 35.4 | Negative | G6 |
| L25 | 1.738000 | 738493 code; no exact catalog match | 49.3 | Positive | G7 |

Code-based entries retain the inferred nd/vd pair without forcing a mismatched Sellmeier catalog resolution. They can auto-upgrade if a future catalog entry with the same six-digit code is added.

---

## Element-by-Element Focal Lengths

Computed from the patent prescription using the thick-lens formula.

| Element | nd | Type | f (mm) | Cemented Group | Group |
|---|---|---|---|---|---|
| L1 | 1.48749 | Biconvex positive | +477.6 | — | G1 |
| L2 | 1.43700 | Plano-convex positive | +407.5 | — | G1 |
| L3 | 1.49782 | Biconvex positive | +116.2 | D1 (f = −166.7) | G2 |
| L4 | 1.80440 | Biconcave negative | −65.7 | D1 | G2 |
| L5 | 1.43700 | Biconvex positive | +115.4 | — | G2 |
| L6 | 1.72047 | Biconvex positive | +63.4 | D2 (f = −626.0) | G3 |
| L7 | 1.49782 | Biconcave negative | −56.1 | D2 | G3 |
| L8 | 1.74100 | Biconcave negative | −42.0 | D3 (f = −118.5) | G3 |
| L9 | 1.85451 | Positive meniscus | +65.1 | D3 | G3 |
| L10 | 1.75500 | Biconcave negative | −62.4 | — | G3 |
| L11 | 1.59319 | Biconvex positive | +129.2 | — | G4 |
| L12 | 1.49782 | Plano-convex positive | +129.7 | — | G4 |
| L13 | 1.49782 | Plano-convex positive | +96.9 | — | G4 |
| L14 | 1.80610 | Biconcave negative | −110.1 | — | G4 |
| L15 | 1.80809 | Positive meniscus | +142.0 | — | G4 |
| L16 | 2.00069 | Negative meniscus | −46.9 | — | G4 |
| L17 | 1.55298 | Biconvex positive | +42.7 | VR (f = +78.6) | G4 |
| L18 | 1.95375 | Negative meniscus | −92.6 | VR | G4 |
| L19 | 1.60342 | Positive meniscus | +77.0 | — | G4 |
| L20 | 1.85026 | Biconvex positive | +71.2 | D5 (f = −81.7) | G5 |
| L21 | 1.72916 | Biconcave negative | −37.5 | D5 | G5 |
| L22 | 1.65412 | Biconvex positive | +70.4 | — | G6 |
| L23 | 1.90265 | Biconcave negative | −46.5 | — | G6 |
| L24 | 1.49782 | Biconcave negative | −75.3 | — | G7 |
| L25 | 1.73800 | Positive meniscus | +66.7 | — | G7 |

---

## Patent Conditional Expressions — Example 1 Values

| Cond. | Expression | Value | Range | Purpose |
|---|---|---|---|---|
| (1) | Σ\|γᵢ\| × (5.76/F_not) | 6.419 | 4.00–10.00 | Focus sensitivity control |
| (2) | \|γ\|_max / \|γ\|_min | 4.305 | 0.10–10.00 | Focus group balance |
| (3) | ω_t | 3.10° | 2.20°–13.00° | Half-angle at tele |
| (4) | TL_t / f_t | 0.733 | 0.40–0.90 | Telephoto ratio |
| (5) | Σ\|γᵢ\| × (5.76/F_not) × (Y_max/21.63) | 6.419 | 4.00–10.00 | Sensor-normalized sensitivity |
| (6) | (−f_F1) / FD | 9.289 | > 2.00 | Focus group spacing ratio |
| (7) | f_F1 / f_F2 | 0.533 | 0.30–1.00 | Focus group power ratio |
| (8) | β_F1 / β_F2 | 1.217 | 0.85–1.40 | Focus group magnification ratio |
| (9) | f_vr / f_t | 0.202 | 0.10–0.30 | VR group sensitivity |
| (10) | f_t / f_w | 3.765 | 2.00–20.00 | Zoom ratio |
| (11) | −(MV1+MV2+MV3) / TL_t | 0.149 | 0.10–0.30 | Zoom travel efficiency |

---

## Numerical Verification

Independently computed from the patent prescription using a paraxial ABCD matrix ray trace:

| Quantity | Computed | Patent | Δ |
|---|---|---|---|
| System EFL (tele ∞) | 388.15 mm | 388.17 mm | −0.02 mm |
| System EFL (wide ∞) | 103.08 mm | 103.09 mm | −0.01 mm |
| F-number (tele) | f/5.76 | 5.76 | exact |
| F-number (wide) | f/4.50 | — (not stated) | matches production spec |
| Total track (tele ∞) | 284.59 mm | 284.55 mm | +0.04 mm |
| G1 focal length | +220.226 mm | +220.226 mm | < 0.001 mm |
| G2 focal length | +412.745 mm | +412.716 mm | +0.029 mm |
| G3 focal length | −37.714 mm | −37.713 mm | −0.001 mm |
| G4 focal length | +45.972 mm | +45.972 mm | < 0.001 mm |
| G5 focal length | −81.739 mm | −81.740 mm | +0.001 mm |
| G6 focal length | −153.341 mm | −153.334 mm | −0.007 mm |
| G7 focal length | +502.736 mm | +502.735 mm | +0.001 mm |

The wide-end f-number was **not stated in the patent** but was independently verified as f/4.50 by paraxial ray trace — matching the production specification exactly.

---

## Semi-Diameter Estimation

The patent does not provide semi-diameters. For the companion `.data.ts` file, semi-diameters were estimated by paraxial ray trace at both zoom positions using the reduced-angle ABCD method:

1. Marginal ray traced from the entrance pupil edge (scaled to match the target f-number at each zoom position).
2. Chief ray constructed to pass through the stop center at the full-field angle.
3. Unvignetted SD at each surface = |y_marginal| + |y_chief|, with 10% mechanical clearance.
4. Maximum of wide and tele configurations taken.
5. Front-group surfaces (1–9) capped at the physical barrel constraint of the 77 mm filter thread (~37.5 mm max SD). Computed unvignetted tele-end SDs for the front elements reach ~59 mm, confirming significant tele-end vignetting typical of variable-aperture telephoto zooms.

---

## Sources

1. JP2022-92388A, "Optical System, Optical Apparatus, and Method for Manufacturing Optical System," Nikon Corporation, filed 2020-12-10, published 2022-06-22. Inventor: Hiroshi Yabumoto.
2. Nikon product page: "NIKKOR Z 100-400mm f/4.5-5.6 VR S — 25 elements in 20 groups (including 6 ED glass and 2 Super ED glass elements)."
3. OHARA Optical Glass Catalog (glass identification reference for nd/νd matching).
4. SCHOTT Optical Glass Catalog (glass identification reference for nd/νd matching).
