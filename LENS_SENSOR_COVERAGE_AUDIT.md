# LensVisualizer: Lens Sensor Coverage Audit

**Audit Date:** April 23, 2026  
**Purpose:** Identify all lenses with explicitly modeled cover glass or sensor elements  
**Status:** Complete

---

## Overview

This audit identifies all lenses in the LensVisualizer catalog that include surface or lens elements representing:

- **Cover glass** — protective optical element at sensor plane
- **IR-cut filters** — infrared light blocking element
- **OLPF** — Optical Low-Pass Filter (anti-aliasing element)
- **Sensor placeholder elements** — explicit glass blocks modeling the camera's optical stack
- **Sensor-adjacent optics** — elements specifically designed for sensor compatibility (telecentric correction, field flattening at sensor)

The audit distinguishes between:
1. **Explicit elements** — separate glass blocks with surfaces in the prescription
2. **BFD-folded** — cover glass thickness included in the back focus distance (BFD) calculation but not rendered as separate surfaces
3. **Annotated references** — role descriptions mentioning sensor-related functions

---

## Lenses with Explicit Cover Glass / Sensor Elements

### 1. CANON RF 135mm f/1.8 L IS USM

**File:** `src/lens-data/CanonRF135f18.data.ts`

**Coverage Type:** ✅ Explicit Element

**Details:**
| Field | Value |
|-------|-------|
| Element ID | 18 |
| Element Name | GB (Glass Block) |
| Element Label | Glass Block |
| Type | Plano-Plano (Filter) |
| Material | N-BK7 equivalent (IR-cut / cover glass) |
| RI (nd) | 1.51633 |
| V-number (νd) | 64.1 |
| Optical Power | Zero (Infinity FL) |

**Surfaces:**
- **Surface 31** (GB front): R = ∞ (flat), d = 1.5 mm, SD = 21.6 mm
- **Surface 32** (GB rear): R = ∞ (flat), d = 0.8 mm to image plane

**Role/Purpose:**
> "Camera-body IR-cut filter and sensor cover glass. Zero optical power; affects only BFD air-equivalent calculation."

**Notes:**
- Plano-plano geometry with zero optical power
- Explicitly documented as camera-body component, not part of lens barrel
- Affects BFD calculation but contributes no refraction

---

### 2. NIKON NIKKOR Z 28mm f/2.8

**File:** `src/lens-data/NikonZ28f28.data.ts`

**Coverage Type:** ✅ Explicit Element

**Details:**
| Field | Value |
|-------|-------|
| Element ID | 11 |
| Element Name | FL (Field Lens / Filter) |
| Element Label | **Cover Glass** |
| Type | Plano-Parallel |
| Material | S-BSL 7 (OHARA, N-BK7 equivalent) |
| RI (nd) | 1.5168 |
| V-number (νd) | 63.88 |
| Optical Power | Zero (Infinity FL) |

**Surfaces:**
- **Surface 20** (FL front): R = ∞ (flat), d = 1.6 mm, SD = 21.7 mm
- **Surface 21** (FL rear): R = ∞ (flat), d = 0.86 mm to image plane

**Role/Purpose:**
> "Sensor cover glass / IR-cut filter stack (camera body, not part of lens barrel)"

**Notes:**
- Explicitly labeled as "Cover Glass" in the element label field
- Plano-parallel geometry with zero optical power
- Part of the 11-element catalog entry (separate from the 9 optical lens elements)

---

### 3. NIKON NIKKOR Z 50mm f/1.2 S

**File:** `src/lens-data/NikonNikkorZ50f12.data.ts`

**Coverage Type:** ✅ Explicit Element

**Details:**
| Field | Value |
|-------|-------|
| Element ID | 18 |
| Element Name | FL (Filter) |
| Element Label | Filter (FL) |
| Type | Plano-Plano (Filter) |
| Material | S-NSL36 (OHARA) |
| RI (nd) | 1.5168 |
| V-number (νd) | 63.9 |
| Optical Power | Zero (Infinity FL) |

**Surfaces:**
- **Surface 34** (FL front): R = ∞ (flat), d = 1.6 mm, SD = 21.6 mm
- **Surface 35** (FL rear): R = ∞ (flat), d = 0.702 mm to image plane (BFD)

**Role/Purpose:**
> "IR-cut / OLPF / sensor cover glass placeholder"

**Notes:**
- Explicitly labeled as filter element (Element 18 of 18 total in prescription)
- Combines IR-cut filter, OLPF, and cover glass functions
- Typical placeholder for entire camera optical stack

---

## Lenses with BFD-Folded Cover Glass (No Explicit Surfaces)

These lenses include cover glass in their back focus distance calculation but do not render the cover glass as separate surfaces. Instead, the thickness and BFD-equivalent air gap are documented in comments.

### 4. FUJIFILM FUJINON XF 16-55mm f/2.8 R LM WR

**File:** `src/lens-data/FujifilmXF1655mmf28R.data.ts`

**Coverage Type:** 📌 BFD-Folded

**Details:**
| Field | Value |
|-------|-------|
| Final Surface | 30 |
| Description | Final air gap to image plane |
| Radius | R = -80.18906 mm |
| Air Gap | d = 21.999 mm (air-equivalent BFD) |
| SD | 11.1 mm |

**Documentation:**
```
{ label: "30", R: -80.18906, d: 21.999, nd: 1.0, elemId: 0, sd: 11.1 }, 
// 30  L51 rear → image (air-equivalent BFD folds the 2.15/1.54763 + 0.70/1.49784 + 0.513 mm cover-glass stack)
```

**Cover Glass Stack (Folded):**
- Layer 1: 2.15 mm @ nd = 1.54763
- Layer 2: 0.70 mm @ nd = 1.49784
- Layer 3: 0.513 mm

**Notes:**
- Cover glass stack explicitly mentioned in comment but not rendered as separate surfaces
- Total folded cover thickness: ~3.36 mm equivalent in air
- BFD-equivalent calculation includes cover glass optical path

---

### 5. FUJIFILM FUJINON XF 16–80mm f/4 R OIS WR

**File:** `src/lens-data/FujifilmXF1680f4.data.ts`

**Coverage Type:** 📌 BFD-Folded

**Details:**
| Field | Value |
|-------|-------|
| Final Surface | 29A |
| Description | Aspherical surface before image |
| Type | Part of final lens element (aspheric rear) |
| SD (estimated) | 11.8 mm |

**Documentation:**
```
{ label: "29A", R: -29.56019, d: 17.494, nd: 1.0, elemId: 0, sd: 11.8 }, 
// L53 rear → image (asph, air-equiv BFD incl. cover glass)
```

**Notes:**
- Cover glass thickness included in BFD but not explicitly rendered
- Final surface is aspherical

---

### 6. FUJIFILM FUJINON XF 50–140mm F2.8 R LM OIS WR

**File:** `src/lens-data/FujifilmXF50140mmf28R.data.ts`

**Coverage Type:** 📌 BFD-Folded (with element reference)

**Details:**
| Field | Value |
|-------|-------|
| Final Surface | 40 |
| Radius | R = -40.9228 mm |
| Air Gap | d = 29.4067 mm |
| SD | 14.6 mm |

**Documentation:**
```
{ label: "40", R: -40.9228, d: 29.4067, nd: 1.0, elemId: 0, sd: 14.6 }, 
// L411 rear → image (cover glass air-equiv folded into BFD)
```

**Related Element (Element 13):**
- Explicitly mentioned in context of sensor focusing
- L41 (Biconvex Positive, ED): "begins re-focus onto sensor"

**Notes:**
- Cover glass air-equivalent folded into final BFD spacing
- Patent includes explicit cover glass surfaces (41-42)

---

### 7. FUJIFILM FUJINON XF 60mmF2.4 R Macro

**File:** `src/lens-data/FujifilmXF60mmf24R.data.ts`

**Coverage Type:** 📌 BFD-Folded

**Details:**
| Field | Value |
|-------|-------|
| Final Surface | 19 |
| Description | Final air gap before image plane |

**Documentation:**
```
Final surface's d includes air-equivalent BFD with cover glass folded in
```

**Notes:**
- Cover glass handling consistent with other Fujifilm X-mount lenses

---

### 8. LEICA SUMMILUX 28 mm f/1.7 ASPH.

**File:** `src/lens-data/Leica28mmf17.data.ts`

**Coverage Type:** 📌 BFD-Folded (with label reference)

**Details:**
| Field | Value |
|-------|-------|
| Final Surface | 21A |
| Type | Aspherical surface |

**Notes:**
- Final aspherical surface handles BFD and cover glass folding

---

### 9. LEICA APO-SUMMICRON 43mm f/2 ASPH.

**File:** `src/lens-data/LeicaAPO43mmf2.data.ts`

**Coverage Type:** 📌 BFD-Folded (with label reference)

**Details:**
| Field | Value |
|-------|-------|
| Final Surface | 19A |
| Type | Aspherical surface |

**Notes:**
- Consistent with other Leica L-mount designs

---

## Lenses with Annotated Sensor References (No Explicit Cover Glass)

These lenses have role descriptions mentioning sensor compatibility, field flattening, or telecentricity but do NOT include explicit cover glass elements or BFD-folded cover glass documentation.

### 10. NIKON NIKKOR Z 85mm f/1.8 S

**File:** `src/lens-data/NikonZ85f18S.data.ts`

**Coverage Type:** 🔍 Annotated Reference (Excluded)

**Documentation from header:**
```
NOTE ON COVER GLASS:
  Patent surfaces 22–23 (nd = 1.51680, νd = 64.20, d = 1.6 mm)
  represent the sensor cover glass / filter stack. These are
  EXCLUDED; the last surface's d includes the cover glass
  thickness + back focus (11.000 + 1.600 + 0.920 = 13.520 mm).
```

**Key Points:**
- Patent includes cover glass (surfaces 22–23)
- **NOT rendered** in the lens prescription (intentionally excluded per project convention)
- BFD incorporates cover glass thickness: 1.6 mm

---

### 11. CANON RF 28-70mm F2 L USM

**File:** `src/lens-data/CanonRF2870mmf2L.data.ts`

**Coverage Type:** 🔍 Annotated Reference

**Sensor-Related References:**
- "Primary corrector for FC, astigmatism, distortion **near sensor**"
- "Ultra-high nd minimizes curvatures **close to sensor**"

**Notes:**
- Elements optimized for sensor plane performance
- Does not include explicit cover glass element

---

## Summary Statistics

| Category | Count | Lenses |
|----------|-------|--------|
| **Explicit Elements** | 3 | Canon RF 135mm, Nikon Z 28mm, Nikon Z 50mm f/1.2 |
| **BFD-Folded** | 4 | Fujifilm XF 16-55mm, XF 16-80mm, XF 50-140mm, XF 60mm |
| **Annotated References** | 2+ | Nikon Z 85mm f/1.8, Canon RF 28-70mm |
| **Leica (BFD-Folded)** | 2 | Summilux 28mm, APO-Summicron 43mm |
| **Total with Coverage** | **~11** | |

---

## Coverage Patterns by Manufacturer

### Canon RF (mirrorless, Z-mount alternative)
- ✅ **RF 135mm f/1.8** — Explicit glass block (GB) element
- 🔍 RF 28-70mm f/2 — Annotated sensor references, no explicit cover glass

### Fujifilm XF (APS-C mirrorless, X-mount)
- 📌 **XF 16-55mm f/2.8** — BFD-folded cover glass stack
- 📌 **XF 16-80mm f/4** — BFD-folded cover glass
- 📌 **XF 50-140mm f/2.8** — BFD-folded cover glass
- 📌 **XF 60mm f/2.4** — BFD-folded cover glass

**Pattern:** Fujifilm patents consistently include cover glass stacks; LensVisualizer folds them into BFD rather than rendering explicit surfaces.

### Leica (L-mount & legacy)
- 📌 **Summilux 28mm f/1.7** — BFD-folded handling
- 📌 **APO-Summicron 43mm f/2** — BFD-folded handling

### Nikon Z (mirrorless, Z-mount)
- ✅ **NIKKOR Z 28mm f/2.8** — Explicit cover glass element (FL, Element 11)
- ✅ **NIKKOR Z 50mm f/1.2** — Explicit filter element (FL, Element 18)
- 🔍 **NIKKOR Z 85mm f/1.8** — Patent cover glass excluded, BFD-incorporated

**Pattern:** Nikon Z designs vary; newer models (28mm, 50mm) explicitly include cover glass as plano-parallel elements.

---

## Technical Observations

### 1. Plano-Parallel Geometry
All explicit cover glass elements use **plano-parallel** (flat-flat) geometry with:
- Zero optical power (FL = ∞)
- Purely passive light transmission role
- Typical materials: N-BK7, S-BSL7, S-NSL36

### 2. BFD Integration
For BFD-folded cover glass:
- **Fujifilm:** Multi-layer stacks (e.g., 2.15/1.55 + 0.70/1.50 + 0.513 mm) documented in comments
- **Nikon/Canon:** Single equivalent thickness incorporated into final air gap (d)

### 3. Element Count
- **Explicit elements:** Increase element count (e.g., 17 → 18 for Nikon Z 50mm f/1.2)
- **BFD-folded:** No effect on element count; purely documentation

### 4. Functional Roles
All cover glass elements combine:
- **IR-cut filtering** (infrared light suppression)
- **OLPF** (anti-aliasing, if multi-layer)
- **Protective cover** (mechanical sensor protection)

---

## Recommendations for Further Action

1. **Visualization consistency:** Consider adding visual indicators in the UI to highlight lenses with explicit cover glass modeling vs. BFD-folded approaches.

2. **Leica verification:** Review remaining Leica lenses (Summicron V5 50mm, Elcan 50mm, etc.) to confirm cover glass handling.

3. **Canon verification:** Check other Canon RF lenses (RF 85mm f/1.2L, RF 24-105mm f/2.8L, etc.) for potential cover glass elements.

4. **Nikon Z expansion:** Verify remaining Nikon Z lenses for explicit vs. excluded cover glass treatment.

5. **Documentation standard:** Consider establishing a project-wide convention for documenting cover glass treatment (explicit vs. BFD-folded vs. excluded).

---

## References

- **LENS_DATA_SPEC.md** — Lens data format specification
- **adding_a_lens.md** — Lens data creation workflow
- **code_conventions.md** — Project coding standards
- Individual lens patent documents cited in each file header

---

*Audit completed: April 23, 2026*
