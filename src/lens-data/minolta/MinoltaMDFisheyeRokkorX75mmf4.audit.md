# Audit Log - MINOLTA MD FISHEYE ROKKOR-X 7.5mm f/4

Patent: US 4,009,943, Example 2 / Table 2 / Figure 3

## 2026-10-22 — Deployment validation and fix-up pass

### Source and production comparison

- Re-read the local patent image facsimile, PDF page 8 (Table 2, printed columns 7–8), and Figure 3 on PDF page 3.
  All 20 radii, 19 axial thicknesses and 12 refractive-index/Abbe pairs match at the uniform ×7.5 scale.
  The two 2.082375 mm stop-adjacent gaps rejoin to source d11 = 0.5553 × 7.5 = 4.16475 mm.
  All powered surfaces are spherical; the filter faces are plane, with no aspheric coefficients.
  No transcription mismatches were found. The table's rounded back-focus summary is distinguished below.
- Compared Figure 3 with the March 1981 Minolta brochure, C4, and its optical-section detail. The ordered layout
  matches: two front singlets, a cemented doublet, positive singlet, built-in plane filter and three rear doublets.
  Example 2 is the only candidate with this cementing arrangement. The brochure explicitly states 12 elements in
  8 groups, equidistant projection, 180° coverage, approximately 23 mm circular image and focus fixed at 4 feet.
  This supports a probable correlation to the pictured MD Rokkor-X version, without proving factory radii,
  MC-to-MD continuity or later plain-MD identity.
- The filter is patent group L5 but model element 6; model element L5 is the preceding powered singlet.
  The US filter index 1.5186 is retained; the alternate German-source 1.5185 is not substituted.
- Clear rims and the midpoint stop location remain Figure 3 estimates. Low-confidence readings around r4 and
  r5–r7 do not justify rim changes. Every rim, the 83° rim-slope allowance and the default 0.90 gap-sag limit remain
  unchanged. Catalog glass names remain qualified equivalents, with no claim of factory melt identity.

### First-order comparison and focus

| Quantity | Patent at ×7.5 | Before → after |
| --- | --- | --- |
| Gaussian EFL | 1 × 7.5 = 7.5 mm | 7.500015785161377 → 7.500015785161377 mm |
| Gaussian BFD | Rounded s′ = 4.82 × 7.5 = 36.15 mm | 36.13549900068518 → 36.13549900068518 mm |
| Infinity image gap | Calculated from the table | 36.13549900068518 → 36.13549900068518 mm |
| Total infinity track | Derived | 110.09449900068518 → 110.09449900068518 mm |
| Built wide-open f-number | f/4 | 4 → 4 |
| Stop semi-diameter | Derived from f/4 | 3.7361115844709687 → 3.7361115844709687 mm |
| Paraxial stop-limited f-number | f/4 nominal | 3.947 → 3.947 |

The 0.014501 mm BFD difference from the scaled summary lies within the patent's printed rounding. The real-ray
aperture and the paraxial stop probe use different calculations; their unchanged values do not indicate a new
aperture discrepancy. The internal optical track remains 73.959 mm.

The former virtual unit-focus range ended at a back-focus gap of 36.185550648936086 mm for a 1.2192 m object-to-film
distance. Its 0.050051648250906 mm extension explains the approximate 0.05 mm production-setting difference.
The production lens has no focusing ring. Only the patent's infinity state is now modeled; the 4-foot setting is
explained in prose, without a simulated focus range or a source-published finite conjugate.

### Fields changed

- `name`: unchanged in this deployment pass (capitalization update recorded below); `visible`: absent → absent (defaults to true).
- `subtitle`: `US 4,009,943 A — Example 2; March1981 pictured-version correlation` →
  `US 4,009,943, Example 2 — probable March 1981 production correlation`.
- `catalog.specs`: `11 POWERED ELEMENTS + FILTER`; `EQUI DISTANT CIRCULAR FISHEYE`; `EXAMPLE 2` →
  `12 ELEMENTS / 8 GROUPS`; `DESIGN f = 7.50 mm`; `DESIGN F/4.00`; `ALL SPHERICAL`;
  `EQUIDISTANT PROJECTION / 180 DEG CIRCULAR`.
- `source.patentNumber`: `US 4,009,943 A` → `US 4,009,943`, matching neighboring US grants from the period.
- Element 6 `label`: `Source L5 built-in filter` → `Built-in filter (patent L5; element 6)`.
- `focus.closeFocusM`: 1.2192 → 1000000 m, the fixed-focus schema placeholder used by the Kinoptik precedent.
- `focus.keyframes`: nine virtual-focus coordinates from 0 to 1 → omitted; no variable focus spacing remains.
- `focus.description`: virtual unit-focus reconstruction to 4 feet → fixed production focus near 4 feet, no focusing
  ring, infinity-only patent model and approximately 0.05 mm unmodeled back-focus difference.
- `gaps["20"]`: nine BF values from 36.13549900068518 to 36.185550648936086 mm → removed;
  final surface `d`: absent → 36.13549900068518 mm, preserving the original infinity image gap exactly.
- Header: joined words and virtual-focus wording → spaced source/scale/rim/stop notes, explicit fixed-focus scope
  and placeholder explanation. Printed versus derived BFD, scale and geometric assumptions remain stated.
- Analysis: joined words, inconsistent patent suffix, ambiguous filter numbering, understated maker count evidence
  and virtual-focus prose → corrected spacing, matching identifier, explicit filter mapping, brochure-stated count
  and infinity-only focus scope. Removed the private Drive citation and file/check narrative; retained public patent
  and brochure citations, technical numbers, glass qualifications and source limitations.
- Audit sidecar: missing → this source comparison, change record, first-order results and remaining limitations.

### Targeted checks and remaining scope

Both before and after the edits, the surface audit reports no validation errors. The aperture audit reports one lens,
one station within 3% of the stated f-number, with no rim, trace or iris limitations or failed stations. The builder
and paraxial probe load successfully. Infinity optical values are unchanged; the only changed numeric builder summary
is the required close-focus placeholder (1.2192 → 1000000 m). The former finite-focus states have been removed.

Open: actual production glass melts, exact iris position, measured clear rims, factory prescription identity,
color-filter response and measured MTF remain unresolved. The fixed 4-foot production conjugate is intentionally
not modeled. The full test suite, typecheck, lint, build, generators and browser review were excluded by this brief.

## 2026-10-22 — Semi-diameter pass against the patent figure

Source: the local US 4,009,943 image facsimile, Figure 3 (Example 2) on PDF page 3, measured at its native 300 dpi.
The scan is rotated about 1° (the axis drops 26 px across the sheet), so each rim was read as half the top-to-bottom
extent at that column rather than from the axis. Scale: the first-to-last vertex span (73.959 mm at ×7.5) is 1374.5 px,
18.585 px/mm; every predicted vertex column from r2 to r19 falls within 5 px of the drawn axis crossing.

Rays: clearap cannot launch past about 50°, so the floor came from a scratch meridional real-ray trace of the scaled
prescription with no rim clipping, the chief ray solved through the stop centre and the rim rays through the f/4 stop
edge at 0–90°. Its chief-ray image heights match the engine's bounding-sphere solve (11.336 mm at 90°).

| Surface | Before | Figure 3 | After | Evidence and decision |
|---|---:|---:|---:|---|
| 1 | 28 | 27.8 | 28 | Within 1%; retained. 90° chief 26.06, bundle 27.59 mm. |
| 2 | 13.55 | 13.7 | 13.55 | Hemispherical bowl; retained at the 83° allowance. |
| 3 | 12 | 11.6 | 12 | Within 4%; retained. |
| 4 | 10 | 8.3 (8.5 top, 8.1 bottom) | 8.3 | The r4 bowl ends at a drawn bevel; at 10 mm its sag would put the rim 2.3 mm behind the drawn element. 90° chief 7.49 mm, bundle 8.51 mm. |
| 5 | 8 | 7.5 | 8 | 6%, within noise; retained. |
| 6 | 8 | 7.5 | 8 | Cemented junction reaches the doublet's flat rim; retained with r5. |
| 7 | 8 | 5.0 (5.05 top, 4.9 bottom) | 5 | The concave r7 ends at a chevron bevel level with the next singlet's rim. Axial 2.79 mm, 90° chief 2.81 mm. |
| 8–9 | 5.5 | 5.1 | 5.5 | 7%, within noise; retained. |
| 10–11 | 4 | 3.9 | 4 | Retained; axial marginal 3.60/3.65 mm. |
| STO | 3.736 | (iris bars 4.1) | unchanged | Derived from f/4; not touched. |
| 12 | 6.5 | 5.5 (5.8 top, 5.1 bottom) | 5.5 | The front concave ends at a drawn bevel inside the 6.8 mm flat rim. Axial 3.82 mm, 90° bundle 4.53 mm. |
| 13–14 | 6.5 | 6.8 | 6.5 | 5%; retained. |
| 15–17 | 7.5 | 7.6 | 7.5 | Retained. |
| 18–20 | 10 | 10.5 | 10 | 5%; retained (not widened for wide-field rays). |

Clearance: no surface clips the axial f/4 beam or the chief ray at any field to 90°. The engine still reports a 90°
half-field, f/4.000, EFL 7.500016 mm and 3.736 mm stop radius. The vignetting curve is identical before and after
(51.0% at 90°, 76.0% at 75°), because the smaller r4, r7 and r12 rims fall inside rays already cut by the filter, the
rear singlet and the rear doublet. The chief-ray image heights are unchanged. The surface validator and image-circle
check pass; field coverage skips this fisheye by design.

The Minolta March 1981 brochure section (C4 detail) was viewed as a secondary check. It agrees on 12 elements in
8 groups and on the cementing order, and it also draws bevels on the front corners of the first doublet behind the
stop. It draws the rear concave of the front doublet reaching closer to its flat rim (about 85–90% of it) than the
patent does. The patent figure governs. The brochure marks no special-dispersion or aspheric elements.

Open: the renderer joins rims with straight edges, so the patent's flat-rim-then-bevel outlines on L1's rear annulus,
L2 and the front doublet appear as single slopes. Actual production clear apertures remain unmeasured.

## 2026-10-22 — Glass classification and metadata pass

US 4,009,943, Example 2 / Table 2 supplies the printed nd/νd pairs. Residuals below are signed catalog minus
printed values. Catalog equivalents supply dispersion curves; the printed nd/νd remain in the prescription,
and production suppliers and melts remain unconfirmed. Only L9's glass label changed in this pass.

| Element | Glass label before → after | Catalog row nd/νd | Δnd / Δνd |
|---|---|---|---|
| L1 | `BACD16 (Hoya equivalent)` → unchanged | Hoya BACD16, 1.62041/60.35 | +0.000010 / +0.050000 |
| L2 | `LAC8 (Hoya equivalent)` → unchanged | Hoya LAC8, 1.713/53.94 | 0 / +0.040000 |
| L3, L5 | `Unmatched (source nd=1.5934, vd=34.8)` → unchanged | None | — |
| L4 | `LAC8 (Hoya equivalent)` → unchanged | Hoya LAC8, 1.713/53.94 | 0 / −0.060000 |
| FILTER (element 6) | `Unmatched (source nd=1.5186, vd=60.1)` → unchanged | None | — |
| L7 | `Unmatched (source nd=1.805, vd=41.0)` → unchanged | None | — |
| L8 | `PBL6Y (Ohara equivalent)` → unchanged | Ohara PBL6Y, 1.531717/48.95 | +0.000017 / +0.050000 |
| L9 | `Unmatched (source nd=1.4645, vd=65.9)` → `FSL3 (Ohara equivalent)` | Ohara FSL3, 1.464499/65.938855 | −0.000001 / +0.038855 |
| L10 | `FD110 (Hoya equivalent)` → unchanged | Hoya FD110, 1.78472/25.72 | +0.000020 / +0.020000 |
| L11 | `LAF3 (Hoya equivalent)` → unchanged | Hoya LAF3, 1.717/47.98 | 0 / +0.080000 |
| L12 | `Unmatched (source nd=1.4707, vd=67.4)` → unchanged | None | — |

FSL3 is the discontinued OHARA_260701.AGF row, matching L9 at the printed precision with |Δνd| ≤ 0.1.
The nearest rows returned by the catalog coordinate search for the remaining unmatched pairs were rejected:

| Element | Nearest rejected row nd/νd | Δnd / Δνd | Reason |
|---|---|---|---|
| L3, L5 | Ohara S-FTM16, 1.592701/35.310075 | −0.000699 / +0.510075 | Neither coordinate matches the printed precision; Abbe residual exceeds 0.1. |
| FILTER | Sumita BALK3, 1.51835/60.3 | −0.000250 / +0.200000 | Neither coordinate matches the printed precision; Abbe residual exceeds 0.1. |
| L7 | CDGM H-ZLaF52A, 1.8061/41.016887 | +0.001100 / +0.016887 | nd does not match the printed precision despite the close νd. |
| L12 | CDGM H-QK1, 1.47047/66.88 | −0.000230 / −0.520000 | Neither coordinate matches the printed precision; absolute Abbe residual exceeds 0.1. |

- Display `name`: `MINOLTA MD Fisheye Rokkor-X 7.5mm f/4` → `MINOLTA MD FISHEYE ROKKOR-X 7.5mm f/4`,
  following the repository's Minolta capitalization convention.
- The patent front page names the assignee `Minolta Camera Kabushiki Kaisha`; `source.assignees` retains
  `Minolta Camera Co., Ltd.`, the English form used by the other Minolta files.

The earlier open production-melt, iris, clear-rim, factory-prescription, filter-response and MTF questions remain
unresolved; adopting a coordinate-equivalent dispersion curve does not establish historical glass identity.

## 2026-10-22 — Second review: diagram, labels and movement

Compared the local page at infinity with US 4,009,943 Figure 3 (PDF page 3, native 300 dpi, re-measured
independently at 300 and 600 dpi), the patent text in columns 1–4 (PDF pages 5–6) and Table 2 (PDF page 8). The
Minolta March 1981 brochure C4 section was viewed as a secondary check.

### Silhouette

Re-measured on Figure 3 at 18.565 px/mm (r1-to-r20 vertex span 1373 px for 73.959 mm; the vertex columns r2–r20
fall within 5 px of prediction), reading each rim as the ink-line centre:

| Component | Stored sd | Figure 3 | Ratio | Decision |
|---|---:|---:|---:|---|
| L3 outer rim (r5, r6) | 8 | 7.6 (7.6 top, 7.6 bottom) | 1.05 | Retained, within noise. |
| L3 rear concave r7 | 5 | 4.9 (4.85 top, 4.98 bottom) | 1.02 | Retained. |
| L4 (r8, r9) | 5.5 | 5.2 | 1.06 | Retained, within noise; square-cut on both. |
| L5 filter (r10, r11) | 4 | 3.9 | 1.03 | Retained. |
| L6 front concave r12 | 5.5 | 5.2 (both corners) | 1.06 | Retained; the bevel to the outer rim matches. |
| L6 outer rim (r13, r14) | 6.5 | 6.84 (6.99 top, 6.69 bottom) | 0.95 | Retained. |
| L7 (r15–r17) | 7.5 | 7.6 (7.70 top, 7.51 bottom) | 0.99 | Retained. |
| L8 (r18–r20) | 10 | 10.46 (10.58 top, 10.34 bottom) | 0.96 | Retained. |

The first pass's L1 and L2 readings (27.8/13.7 and 11.6/8.3–8.4) were confirmed. Every element agrees within
about 6%, the drawn height order (L1 > L2 > L8 > L3 ≈ L7 > L6 > L4 > filter) is preserved, and nothing overlaps.
No `sd` changed. The site still differs from the figure only where the renderer joins the two faces with a straight
edge. L1 is drawn with a vertical rear annulus from the r2 bowl up to a bevelled outer rim, but the site shows one
slope from r2 at 13.55 mm to r1 at 28 mm. L2 is drawn with a flat top before its bevel. Element 4 (L3b) is drawn
with a flat 7.6 mm top over nearly its whole length and a short bevel down to r7, but the site draws a long wedge
from the r6 rim to r7. Raising r7 toward the flat would cross L4's front rim (r7 at 8 mm sags to 12.27 mm behind r5
against r8's rim at 12.02 mm), so the bevel-end value stays. The meridional trace (0–90°) shows no axial or chief
clip. Engine half-field 90°, wide-open f/4.000, EFL 7.500016 mm and stop radius 3.736 mm are unchanged. Wide-open
transmission is still 76.0% at 75° and 51.0% at 90°. The brochure draws the same 12/8 layout, a stop between the
filter and the first rear doublet, and no special-glass or aspheric marks. Its r7 reaches higher on the doublet's flat
rim than the patent's; the patent governs.

### Designations, brackets and tags

The patent states that its symbol L names a component, single element or doublet (column 3). Its first lens
group ahead of the diaphragm is L1–L4, the filter is L5, and the second lens group behind it is L6–L8 (columns
3–4). The previous sequential element names L3–L12 clashed with that notation: element L5 was the biconvex singlet,
whereas patent L5 is the filter.

| Field | Before | After |
|---|---|---|
| Element names 3–12 | L3, L4, L5, FILTER, L7, L8, L9, L10, L11, L12 | L3a, L3b, L4, L5, L6a, L6b, L7a, L7b, L8a, L8b |
| Element 6 `label` | Built-in filter (patent L5; element 6) | Element 6 (Built-in Filter) |
| `cemented` | D1, D2, D3, D4 | L3, L6, L7, L8 |
| `groups` | FRONT 1–9, FILTER 10–11, REAR 12–20 | FIRST GROUP L1-L4 1–9, L5 FILTER 10–11, SECOND GROUP L6-L8 12–20 |
| `doublets` | D1, D2, D3, D4 | L3, L6, L7, L8 (same surface ranges) |

Elements 1, 2 and the `label` values "Element N" were already correct. The diagram's numbers 1–12 match the patent's
N1–N12 index order, which counts the filter as 6. The header comment and the analysis headings, architecture,
glass and rim paragraphs now use these names. Every element `type` agrees with its radius signs. No surface is
aspheric and none is marked. The stop lies between r11 and r12, as Figure 3 and Table 2 place the diaphragm. No `apd`
tag is set, and none is warranted: the patent text names no special glass, and the brochure marks none. No `role`
text is authored.

In the inspector with COLOR on, BACD16 (element 1), LAC8 (2, 4), PBL6Y (8), FSL3 (9), FD110 (10) and LAF3 (11)
each show their catalog dispersion. For example, FSL3 gives nC 1.46233, nF 1.46937 and ng 1.47312. Elements 3, 5,
6, 7 and 12 show "Abbe estimate". Table 2 gives only N/ν pairs for those; the patent gives no glass name, extra
line index or partial dispersion anywhere.

### Movement

There are no `var`, zoom or focus keyframes. The movement overlay reports that the lens has no modeled focus or zoom
group movement. The focus panel reads ∞ / "Not modeled" with the fixed-focus description. The diagram and image
plane are identical at `focus=1`. Only the inert slider thumb moves to the right end.

After the edits the surface validator reports no errors, and the image-circle check passes. Field coverage skips
the lens as a fisheye. The builder summary is byte-identical to the summary taken before the edits.

Open: the straight-edge rendering of L1's rear annulus, L2's flat top and L3b's flat-then-bevel rim remains a renderer
limitation. Production clear apertures remain unmeasured.
