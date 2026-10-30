# Nikon NIKKOR Z 180-600mm f/5.6-6.3 VR Audit

Patent: WO 2024/062958 A1, Example 2 / Figure 5 / Tables 5–8

## 2026-08-03 - Integration, Figure, and Glass Audit

### Prescription and Display Name

- Checked the new prescription and analysis against the retained local patent, including Example 2, Figure 5, and
  Tables 5–8.
- Confirmed the display name against Nikon's product page. `NIKON` remains the repository's maker prefix and
  `NIKKOR Z 180-600mm f/5.6-6.3 VR` is Nikon's product spelling, so no display-name correction was needed.

### Semi-Diameters

- Isolated PDF page 90, rendered it at 300 dpi, rotated it to the optical-axis orientation, and audited the Figure 5
  optical section. The active figure and modeled prescription have a median figure/data scale ratio of 1.022.
- Refined the front collector and G2/G3/G4/G6 optical rims:

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 1–2 | 46.8 | 47.0 |
| 3–5 | 40.5 | 40.7 |
| 6–7 | 38.7 | 38.9 |
| 8–9 | 25.0 | 25.3 |
| 13–14 | 21.75 | 22.0 |
| 15–16 | 21.25 | 21.6 |
| 17–18 | 21.0 | 21.2 |
| 19–20 | 19.75 | 20.1 |
| 36–38 | 13.5 | 13.7 |
| 39–41 | 14.5 | 14.8 |

- Rejected a 25.3 mm L7 trial based on the drawing's outer box because it crossed both adjacent air gaps; the retained
  20.5 mm value follows the optical rim rather than the drawn flange.
- The accepted values retain the same sampled on-axis ray-fan pass pattern across all three zoom positions at infinity
  and 2.4 m focus.
- `audit:image-circle` reports no undersized surfaces, and `audit:surface` passes the asphere-domain, edge,
  slope, and cross-gap checks. A 13.8 mm surfaces 36–38 trial was also rejected after the edge validator found a
  0.009 mm overrun.

### Glass Classification and Dispersion

- Relabeled L7 from a generic TAF3 class to exact HOYA `TAF3D`, matching the patent's 1.80420/46.50 coordinate and an
  existing coefficient-backed catalog row.
- Strict and trusted chromatic coverage rise from 24/26 to 25/26 elements. The only remaining fallback is the explicitly
  identified optical-resin layer, which is not a missing optical-glass catalog type.
- The analysis glass table and L7 narrative were synchronized with the data file.

## 2026-10-27 — Rim-cut figure review

Figure 5 (PDF p. 90, native 300 ppi raster, wide end at infinity) was rotated so the axis runs horizontally and read
element by element on both halves for flat lands square to the axis at the rims of concave faces, the shape
`rimCutDepthMm` draws. Vertex spacings give 0.1387 mm per native pixel.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 5 (L3 rear, R 246.002) | 0.92 | 2.87 mm | 37.47 mm | 40.7 | 37.05 mm |
| 10 (L6 rear, R 63.527) | 0.83 | 4.02 mm | 22.24 mm | 25.3 (was 22.25) | 20.54 mm |
| 21 (L12 rear, R 63.609) | 0.84 | 2.67 mm | 18.24 mm | 20.1 (was 18.25) | 16.32 mm |
| 35 (L20 rear, R 34.189) | 0.88 | 1.61 mm | 10.37 mm | 11.8 | 9.63 mm |

- Faces 10 and 21 had stopped short of their cemented partners (25.3 and 20.1 mm), so the section drew a slanted
  edge. Figure 5 draws both cemented pairs with one square edge at the partner's height and the land on the rear
  face, so each face's `sd` now equals its partner's and the cut sits at the former rim. The clear radius of 10 goes
  from the old 22.25 mm rim to the 22.2396 mm cut radius, where the beams reach 20.7411 mm; that of 21 goes from
  18.25 to 18.2358 mm, where the beams reach 16.1904 mm. The figure's own ratio would put these two cuts lower (21.0
  and 16.9 mm); they were not moved.
- Lands seen but not cut: 12 (L7 rear, ratio 0.92, cut radius 18.82 mm) lies inside the 19.66 mm on-axis beam;
  36 (L21 front, 0.785, 10.75 mm) would raise full-field side vignetting there from 3 % to 62 %, and 42A (L25 resin
  front, 0.90, 13.05 mm) from 39 % to 76 %.
- No resolvable land on the other concave faces (11, 13, 14, 18, 28, 29, 31, 41): each curve runs to its element edge,
  or the sag left past any land would be under about two native pixels.
- Only surface 21 faces the stop, across a fixed 6.7379 mm gap; its land stands 4.07 mm ahead of the stop plane. No
  cap reaches the stop plane at any zoom or focus state.
- The aperture audit is unchanged: all three stations remain stop-limited at f/5.80, f/6.16 and f/6.53, with no rim,
  trace or rim-cut limiter. The surface validator and the image-circle audit stay clean.
- At the figure's own radii the cuts on 5 and 35 stood inside the traced beams, and the beam rule moved both out
  (below). At their present radii all four cuts clear every traced ray of the wide-open beams by their margins and
  clip none of them, so they change no vignetting.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stops of #933 (EPD = F/N) with the rule's current
search, which follows each beam to the field where it vanishes, seeds from the stop and refines near cuts on the full
measurement. Traced against that rule, these cuts from the figure review above were changed:

- Surface 5: the beams reach 38.5756 mm there (tele, 582.16 mm, at infinity, 0.68°), past the figure's 37.47 mm cut.
  The depth goes from 2.87 to 3.09 mm, which puts the cut radius at 38.8683 mm: a clearance of 0.2927 mm against a
  0.1166 mm margin, 0.1761 mm spare. The land is shorter than the figure's.
- Surface 35: the beams reach 11.5466 mm there (zoomT 0.75, focusT 0.9, 3.24°), past the figure's 10.37 mm cut. The
  depth goes from 1.61 to 2.03 mm, which puts the cut radius at 11.6054 mm: a clearance of 0.0588 mm against a
  0.0500 mm margin, 0.0088 mm spare. The land is shorter than the figure's.

The other two cuts clear the beams by their margins at their figure-review positions:

- Surface 10: cut radius 22.2396 mm. The beams reach 20.7411 mm there (wide, 185.01 mm, focusT 0.4, 7.44°), a
  clearance of 1.4985 mm against a 0.0667 mm margin, 1.4318 mm spare.
- Surface 21: cut radius 18.2358 mm. The beams reach 16.1904 mm there (zoomT 0.8, at infinity, 1.47°), a clearance of
  2.0453 mm against a 0.0547 mm margin, 1.9906 mm spare.

The surface audit and the beam rule pass.

Figure scale and land length: Figure 5's 0.1387 mm per native pixel, from the vertex spacings in the figure review,
is 7.210 native px per lens mm. One native pixel at the cap end and at the edge moves q by ±(1 + q) / (edge px).

- 5: figure q 0.92 at a 293.4 px edge (40.7 mm), range 0.913–0.927. The beam rule put the cut at 0.955 of `sd`.
  Land 1.8317 mm, over the 0.1 mm minimum.
- 10: figure q 0.83 at a 182.4 px edge (25.3 mm), range 0.820–0.840. The cut sits at the old 22.25 mm rim, 0.879 of
  `sd`. Land 3.0604 mm, over the minimum.
- 21: figure q 0.84 at a 144.9 px edge (20.1 mm), range 0.827–0.853. The cut sits at the old 18.25 mm rim, 0.907 of
  `sd`. Land 1.8642 mm, over the minimum.
- 35: figure q 0.88 at an 85.1 px edge (11.8 mm), range 0.858–0.902. The beam rule put the cut at 0.984 of `sd`.
  Land 0.1946 mm (1.4 native px), over the minimum.


## 2026-10-29 — Rim-extension recheck

Re-read local `patents/WO2024062958A1.pdf`, Example 2 / Figure 5, PDF p. 90, at 600 dpi, rotated
object-left. The previously measured vertex spacings give 7.210 native px/mm (0.1387 mm/px). All 25 physical
elements, including the modeled L25 glass/resin layers, were checked on both halves. The supported lands on
5, 10, 21 and 35 already have cuts that clear the traced beams. Their depths and clear radii stay unchanged.

The additional source lands on 12, 36 and 42A end inside the current optical caps. Their outer outlines are
already represented by the stored radii; adding an extension outside those radii would invent taller elements.
Moving those caps inward to the figure readings would clip the beams documented above. The other ordinary
faces run to their edges; cemented interfaces cannot receive extensions. No further cut or extension is supported
without changing the qualified optical model.

No prescription or drawing parameter changed. `audit:surface` passes, including the retained inferred-cut beam
rule, and `audit:image-circle` reports 0 undersized / 0 skipped.


## 2026-10-29 — Glass-only reinspection

Re-read `patents/WO2024062958A1.pdf`, Example 2: Table 5, PDF pp. 45–46; G1b mapping ¶0155,
p. 43; partial-dispersion definition ¶0082–0083, p. 25; Table 33, p. 78. All 26 modeled media (25 physical
lens elements) retain their printed d-line nd/νd coordinates. All 25 glass media resolve compatibly; L25r's
1.53610/41.21 source resin remains explicitly unmatched and is not relabeled as ordinary glass.

| Media | Change / retained verdict |
|---|---|
| L3 | Add patent-supported APD and converted runtime dPgF −0.00731635 |
| Other 25 media | Retain source coordinates, labels and unresolved resin disposition |

The prior statement that condition (11) could not identify an element was too cautious. ¶0155 explicitly makes
G1b positive L2 + negative L3 + positive L4; L3 is its sole negative lens. Table 33 gives ΔPgF1b = −0.0067
for Example 2. ¶0083 defines the source line through C7 (νd 60.49, PgF 0.5393) and F2 (36.30, 0.5829).
At νd 42.72 that line gives 0.5713286069; subtracting 0.0067 gives PgF 0.5646286069. The runtime line
0.6438 − 0.001682νd is 0.57194496, so dPgF = −0.0073163531, stored as −0.00731635. Its precision is
limited by the source's rounded −0.0067, not a measurement to eight decimals. The compatible TAFD5G curve
supplies C/d/F shape; the source condition supplies g/F partial dispersion. No separate C/F/g indices,
production supplier or system-level APO performance is claimed. Header and analysis were corrected.

Verification: `assertCatalogConsistent()` and fresh per-element `resolveCompatibleGlass` / compatibility checks pass.
The existing dispersion and glass-resolution-parity suites pass (2 files, 93 tests).
`audit:surface` passes after the glass-only changes.
The runtime spectral probe returns PgF 0.56462861 for L3 through the catalog tier, matching the converted source ratio.
