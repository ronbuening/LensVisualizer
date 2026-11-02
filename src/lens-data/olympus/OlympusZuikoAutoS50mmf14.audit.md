# Audit Log — OLYMPUS G.ZUIKO AUTO-S 50mm f/1.4

Patent: US 4,094,588, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US4094588.pdf`.
- Example 1 confirms the relevant rows:
  - L2/L7: nd = 1.6935, νd = 50.8
  - L3: nd = 1.5814, νd = 40.8
  - L5: nd = 1.6935, νd = 53.3

### Glass corrections

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L2, L7 | `LaK-type A (694-508...)` | `694508 — LaK-type A...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |
| L3 | `BaF-type (581-408...)` | `PBL25 (OHARA, 581408)` | Existing coefficient-backed catalog entry. |
| L5 | `LaK-type B (694-533...)` | `LAC13 (HOYA, 694533)` | Existing coefficient-backed catalog entry. |

### Catalog-search disposition

- Public catalog search resolved `581408` and `694533` to coefficient-backed entries already in the catalog.
- Search for `694508` found no exact coefficient-backed public match, so the same L2/L7 glass remains code-labeled.
- Updated the analysis element notes and glass-selection table.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 is normalized to f = 1.0 (scaled ×50 here). FIG. 2B–C (Sheet 1, PDF page 2) plot its astigmatism and
distortion to ω = 23° (f·tan ω = 21.22 mm) for a lens sold for the 35mm format; the traced chief ray lands at 20.88 mm
at 23° (96.4%) and reaches the full-frame corner (21.65 mm) at 23.77°. The estimated L7 rims (14.0 mm, sized for a
0.6-field chief ray) clipped the real chief ray (solved through the stop centre) from 21.5°, leaving the analysis field
at 90% of the corner (19.44 mm). The corner chief ray needs surface 12 ≥ 15.87 mm and surface 13 ≥ 15.93 mm
(15.15 / 15.24 mm at the patent's 23°); every other rim clears it (surface 11 by 0.45 mm). Surface 13 takes
floor + ~0.5 mm and surface 12, its biconvex partner, is scaled with it, keeping the author's equal L7 rims. The
validator only rejects a negative edge; L7's edge is 0.38 mm at the floor and 0.20 mm at 16.5 mm (the surfaces meet at
17.1 mm), below the header's 0.7 mm authoring target, and the data-file header and analysis §9 now say so. The stop
stays at its inferred 25% of d6 (FIG. 1 draws none). No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 12 | 14.0 | 16.5 | corner chief ray 15.87 mm; scaled with surface 13 (biconvex L7) |
| 13 | 14.0 | 16.5 | corner chief ray 15.93 mm + clearance |

The validator accepts the new values (both surfaces spherical). The traced field now reaches 23.77° and 21.65 mm, 100%
of the corner (it was 21.53° / 19.44 mm, 90%), with every rim clear (surface 11 by 0.45 mm, L7 by 0.57 mm). The
image-circle floor still reports nothing undersized. L7 is now the thinnest glass edge in the lens (0.20 mm; next is
L1 at 0.78 mm).

## 2026-10-27 — Inferred stop plane behind r₆'s clear cap

Source scope: FIG. 1 (Sheet 1, PDF page 2) draws no diaphragm and the table gives no stop position, so the stop plane is a model choice. The earlier "25 % of d₆ from r₆" placement put it 4.196 mm behind r₆, inside r₆'s cap: r₆ (R 13.82 mm, rim 12.4 mm) sags 7.718 mm, so at that plane the glass of L3 filled everything beyond 9.92 mm, inside the 12.65 mm f/1.4 iris that F/N sizes there (`__tests__/src/lens-data/irisInAir.test.ts` flagged it). The sequential trace steps back to such a plane, but no iris can close there.

| Field | Before | After | Basis |
|---|---:|---:|---|
| Surface 6 `d` | 4.196 mm | 7.8 mm | r₆ sag 7.718 mm at its 12.4 mm rim, rounded up to 0.1 mm |
| `STO` `d` | 12.589 mm | 8.985 mm | Preserves d₆ = 16.785 mm |

This is the construction used for the Vivitar Series 1 zoom (#774): the plane sits at the preceding surface's sag at its retained clear radius, rounded up to the next 0.1 mm, and the vertex-to-vertex air gap is preserved. Splitting a neutral air transfer leaves EFL, BFD and every power unchanged. The plane is a sequential-model choice, not a measured blade position. r₇'s cap (sag −5.537 mm at its 11.6 mm rim) begins 11.25 mm behind r₆, 3.45 mm behind the new plane.

Result: the iris is in air over its whole stroke, at least 0.41 mm clear of r₆'s cap and 3.45 mm of r₇'s. The derived iris is 12.234 mm (12.646 mm at the old plane: F/N fixes the paraxial entrance pupil, and the paraxial marginal ray is lower 3.6 mm further into the converging beam), and the analysis half field is 23.76° (was 23.77°). Under the earlier stop rule, which took the iris from the real f/1.4 marginal ray (11.641 mm here), the stated beam was then limited by rims that the stop plane had masked: f/1.4 traced f/1.55, limited at surface 9. `audit:aperture --raise` asks for surfaces 4, 5, 8, 9, 10 and 11 to rise by up to 13.1 % (8/9 square at 14.7 mm, 10/11 at 15.7 mm). LSA is ordinary (−0.10 mm at full pupil), so this is a rim estimate, not a misprint. The raise is queued in `agent_docs/sd-audit-queue.md` Section I for a figure read; no rim changed here.

## 2026-10-27 — Rims raised to the stated f/1.4 beam

With the stop plane clear of r₆ (entry above), `audit:aperture` showed the f/1.4 on-axis beam clipped by inferred rims (f/1.40 traced f/1.55, surface 9). LSA is ordinary (−0.101 / −0.036 / −0.067 / −0.074 mm at pupil 1 / 0.85 / 0.7 / 0.5), so the rims, not the prescription, are short. Each clipping surface rises only to the stated ray's height (`audit:aperture --raise`), rounded up to 0.1 mm; elements whose faces carried one value and that FIG. 1 draws square keep one value at the higher height.

| Surface | Before | After | Ray needs | Basis |
|---|---:|---:|---:|---|
| 4 (L2 rear) | 15.0 | 15.4 | 15.4 | stated ray; L2's faces already differ (16.5 / 15.0) |
| 5 (L3 front) | 13.0 | 14.5 | 14.5 | stated ray; L3's rear r₆ stays at its 12.4 mm slope limit |
| 8 (L4/L5 junction) | 13.0 | 14.7 | 14.3 | L5 square at the higher face, as FIG. 1 draws the flat-topped L4/L5 block |
| 9 (L5 rear) | 13.0 | 14.7 | 14.7 | stated ray |
| 10 (L6 front) | 14.0 | 15.7 | 15.5 | L6 square at the higher face; FIG. 1 draws both faces ending together |
| 11 (L6 rear) | 14.0 | 15.7 | 15.7 | stated ray |

Figure check (FIG. 1, PDF page 2, rendered at 200 dpi; 44.185 mm of glass over 540 px, 0.0818 mm/px, read by hand): L2 is drawn to about 16.7 mm, L3's front to 15.5, the L4/L5 block to 15.2 and L6 to 16.2 mm, so every raised rim stays inside the drawn element (L1 reads 18.8 against the stored 18.5, confirming the scale). Largest raise 13.1 % (surface 9), inside the procedure's ~15 % band. `audit:surface --sd` accepts the set; L6's edge is 0.77 mm at 15.7 mm and the L5–L6 and L6–L7 gaps open toward the rim.

Result: f/1.4 traces f/1.40, iris-limited. `audit:image-circle` reports nothing undersized; `audit:field-coverage` still reaches the format corner. The rendered section was compared with FIG. 1: the doublet block and L6 now stand nearer their drawn heights, L5 stays square, and the stop sits just clear of L3's r₆ tips.

## 2026-10-27 — Rims given a stated margin

The rims raised above stood exactly at the stated ray's height, rounded up to 0.1 mm, where rounding decides whether the f/1.4 ray passes. Every inferred rim within 1 % of that ray now stands at least 1 % above it, rounded up to 0.1 mm, so a change of the stated beam of up to about 0.3 % (the f-number work's expected size) cannot clip it. Square elements keep both faces at the higher value.

| Surface | Before | After | f/1.4 ray | Margin |
|---|---:|---:|---:|---:|
| 4 (L2 rear) | 15.4 | 15.5 | 15.302 | 1.3 % |
| 5 (L3 front) | 14.5 | 14.6 | 14.453 | 1.0 % |
| 7 (L4 front) | 11.5 | 11.6 | 11.467 | 1.2 % |
| 8 (L4/L5 junction) | 14.7 | 14.9 | 14.235 | L5 square with 9 |
| 9 (L5 rear) | 14.7 | 14.9 | 14.694 | 1.4 % |
| 10 (L6 front) | 15.7 | 15.8 | 15.411 | L6 square with 11 |
| 11 (L6 rear) | 15.7 | 15.8 | 15.631 | 1.1 % |

Surface 7 was not raised before, but stood only 0.3 % above the ray. Each value stays inside FIG. 1's drawn element: L2 to about 16.7 mm, L3's front to 15.5, the L4/L5 block to 15.2 and L6 to 16.2. The largest total raise over the original estimates is 14.6 % (surface 9, 13.0 to 14.9), inside the procedure's ~15 % band. L6's edge is 0.71 mm, above this file's 0.7 mm rule.

Why the inferred rims were short. The original estimates came from a combined marginal and chief-ray trace "at f/1.4" with about 8 % clearance. But the stop plane then sat inside r₆'s cap, so the traced marginal ray could not reach the stop above the beam that passes at f/1.73. The rims behind the stop were sized against that smaller beam, and no audit traced the stated f/1.4 beam past the stop until the plane moved. The two entries above sized the rims against the f/1.4 ray at the paraxial pupil; the next entry checks them against the beam the iris admits on the f-number work's stops.

## 2026-10-28 — Rims checked against the beam the f/1.4 iris admits: kept, f/1.4 traces f/1.48

On the stops sized by paraxial EPD = F/N (#933), the f/1.4 iris at this plane is 12.234 mm, and the on-axis ray to its rim enters at 19.077 mm, 6.8 % above the 17.855 mm paraxial pupil: the front group's spherical aberration of the pupil. That ray cannot be traced through the lens even with every rim ignored (`noBracket` behind the stop). With the plane at the far end of its window in air (d₆ 9.5 mm, r₇'s cap 1.75 mm behind it), the ray enters at 18.780 mm, and the rims it needs with a 1 % margin are:

| Surface | Now | Needed | FIG. 1 element (line centre) |
|---|---:|---:|---|
| 1 / 2 (L1) | 18.5 / 18.5 | 19.0 / 18.9 | 18.6 |
| 3 / 4 (L2) | 16.5 / 15.5 | 16.7 / 16.4 | 16.5 |
| 5 (L3 front) | 14.6 | 15.5 | 15.5 |
| 6 (L3 rear) | 12.4 | 12.3 | r₆ arc ends at 12.0 |
| 7 (L4 front) | 11.6 | 12.2 | r₇ arc ends at 12.6 |
| 8 / 9 (L4/L5 block) | 14.9 / 14.9 | 15.6 / 15.8 | 15.1 |
| 10 / 11 (L6) | 15.8 / 15.8 | 16.7 / 16.8 | 16.0 |

FIG. 1 was re-read at 400 dpi by two independent readings and a reconciling third, which agree within 0.04 mm: heights to the centre of the drawn rim line, scaled by the 44.185 mm vertex-to-vertex length (0.04065 mm/px, fitted axis). The earlier 200 dpi reading (L1 18.8, L2 16.7, L4/L5 15.2, L6 16.2 mm) took the outer edge of the line, about 0.15–0.2 mm high. Eight of the eleven needed rims (1, 2, 3, 6, 8, 9, 10, 11) stand above the drawn element, and the edges would thin past this file's 0.7 mm rule: L1 to 0.45 mm, L5 to 0.18 mm, L6 to 0.03 mm. The d₆ 7.8 mm plane needs more (s1 19.3 mm). So no rim inside the drawing passes the beam the f/1.4 iris admits, and the rims and the 7.8 mm plane stay as they are: each rim is inside its drawn element, except L7's 16.5 mm, which already stood above its drawn 15.5 mm for field coverage (2026-09-24).

Result: f/1.4 traces f/1.48, limited at surface 5 (`audit:aperture`; F/N's iris with the beam the rims let through). `audit:image-circle` reports nothing undersized; `audit:field-coverage` reaches the format corner at 23.76°. Queued in `agent_docs/sd-audit-queue.md` Section I for the owner: accept the rim-limited model, or find another source for the rims.
