# Audit — LEICA SUMMILUX-SL 50mm f/1.4 ASPH. I

Patent: EP 3 136 147 A1, Example 1.

## 2026-09-21 — Patent figure, glass and metadata integration

### Semi-diameters

Reviewed local `EP3136147A1.pdf, p. 18, FIG. 1` at 600 dpi and compared the optical outlines with the viewer. The clean optical rims support a smaller front surface and larger final element. Exclude the straight rear shoulder of L11 and the nonoptical rims around the cemented front groups. Rear S21A is capped at 19.5 mm because its polynomial slope reverses near 20 mm; the approximately 21.5 mm schematic rim is not safe for that surface.

| Surface | Before (mm) | After (mm) |
|---|---:|---:|
| 1 | 33 | 26.5 |
| 20A | 18.2 | 21.5 |
| 21A | 18 | 19.5 |

At the updated rims, polynomial departure is +0.8570 mm on 20A and +0.7066 mm on 21A; the analysis values are synchronized.

### Glass classification

The patent reference coordinates are retained unchanged. Catalog curves are qualified spectral proxies unless the patent explicitly names the glass supplier; no production-melt identity is inferred from a coordinate match. Compatibility uses the authored d/e reference system, not a mixed-line comparison.

| Element | Before | After |
|---|---|---|
| L32 | 809404 class (supplier/melt unresolved) | L-LAH84 class (coordinate-compatible spectral proxy; native d 1.8086/40.42; supplier/melt unproven) |

### Live glass-label follow-up

Named the existing compatible spectral proxies explicitly while retaining coordinate codes and supplier/melt uncertainty: L11 → H-K9L, L12 → E-FD13, L13 → J-LAK14, L14 → N-SF66, L15 → FCD515, L16 → H-ZF4A, L21 → S-LAH55, L22 → J-SF14, L23 → L-LAM69, L31 → E-FD15. No spectral curve or patent reference coordinate changes.

### Live geometry and travel follow-up

The live infinity/close states agree with FIG. 1: Gr2 moves objectward by 8.122 mm while Gr1/Gr3 remain fixed. Retained the prior SD corrections; extending the last asphere beyond 19.5 mm would approach the polynomial turnover rather than improve the physical optical rim. The four aspheric surfaces belong to two elements, so the diagram correctly shows two element-level A badges. No zoom travel applies to this prime lens.

### L15 front-rim correction

The previous pass missed the overhanging front rim of L15. In FIG. 1 the S8 front optical rim terminates at the same height as the S9 cemented interface, giving a level upper/lower edge. Corrected S8 from 28.0 to 24.8 mm to match S9. The larger value produced an unsupported projecting tip even though the geometry validator accepted it. This is a figure-derived rim correction; radii, thicknesses and the cemented interface are unchanged.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 [0057] on PDF p. 10 (rendered at 160 dpi): surface 21* d = 21.790; surfaces 22–23 are the
  plane-parallel plate PT, 1.410 mm, nd 1.51680, νd 64.20; surface 23 → image is 0.800 mm. Gr3 is fixed, so the rear
  path is the same at POS1/POS2/POS3.
- Surface 21A now stores the physical 21.790 mm (was the air-equivalent 23.5195886076), with `rearPlates` PT labelled
  H-K9L (exact 1.51680 / 64.20 CDGM row, matching the H-K9L class already used for L11) and gapAfter 0.800 mm.
- Paraxial check against the previous data: EFL and defocus identical at all three focus keyframes (worst difference
  5e-12 mm, the old fold was stored unrounded). Physical track grows by 0.480 mm = 1.410 × (1 − 1/1.51680).

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/EP3136147A1.pdf`, Example 1 ¶0057, PDF pp. 10–11, and definitions ¶0053–0056. All 20 powered radii, eleven lens nd/νd pairs, all thicknesses/gaps, four K/A4–A16 sets and three focus stations agree. Infinity d11=10.989, d17=3.491; finite stations 6.424/8.055 and 2.867/11.613 are preserved. No scaling. PT already uses rearPlates: gap before 21.790, thickness 1.410, nd=1.51680, νd=64.20, gap after 0.800. ¶0054 defines BF from the plate’s image-side face.

Independent EFL 51.962733278 versus 51.964 and air BFL 23.594862856 versus reduced rear path 23.519588608. Physical first-to-image track 142.002 versus printed TL142.000. Focus is 0.075274249 mm behind the image plane. No supported single misprint identified.

The small-offset designer-focus possibility was checked: ¶0056 describes aberrations relative to a paraxial image surface, without identifying a distinct best-focus placement. Reference-index geometric axial MTF (32 grid, 812 rays, 10/20/40 lp/mm) prefers +0.025549 mm, score 0.685210→0.839889. This indicates the printed plane lies closer to finite-aperture optimum than to paraxial focus, but does not prove designer intent or a full-field optimum. Retain that uncertainty instead of claiming a transcription error.

**Cause/action:** source image-plane/paraxial discrepancy, potentially finite-aperture design convention but unproven; preserve the printed path. Offset **+0.075274 → +0.075274 mm**; Section E row deleted, no numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
