# Nikon AF-S NIKKOR 70-200mm f/2.8G ED VR II Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US8416506.pdf`, Example 6 / Table 6 and FIGS. 26-30.

### Prescription, Zoom, Focus, And VR

- The data file remains aligned to Example 6: `f = 71.40 / 135.00 / 196.00 mm`, `FNO = 2.89`, and the five-group `G1(+), G2(-), G3(+), G4(-), G5(+)` architecture.
- Table 6 confirms the stored infinity variable distances for `d1`, `d2`, `d3`, `d4`, fixed `Bf = 53.787 mm`, and `TL = 246.275 mm`.
- The patent describes G3 as the preferred focusing group but does not publish finite-conjugate variable gaps for Example 6. The close-focus values remain paraxial reconstruction values constrained by Nikon's published 1.4 m minimum focus distance.
- The patent identifies G5b as the negative vibration-reduction subgroup and gives the Example 6 VR coefficient values already summarized in the analysis. The current G5b grouping remains appropriate.

### Glass And APD

- L11 was clarified as `J-LAFH3 (HIKARI; 795287, coefficients unavailable)`. The patent row is `nd=1.795041`, `νd=28.69`; no coefficient-backed public catalog entry was verified in this pass, so it remains an Abbe-only glass for runtime coverage.
- The seven `nd=1.49782`, `νd=82.52` ED rows remain catalog-identified as HIKARI J-FKH1. Their `apd: "inferred"` status is correct because Nikon's patent table gives only `nd`/`νd`; the anomalous partial-dispersion behavior comes from the catalog-class match and Nikon's seven-ED-element product specification.
- L54 remains a barium light-flint class row. Its `N-BALF4` token resolves to the existing Schott catalog entry, so it does not need a relabel.
- The patent has no `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` table for Example 6.

### Semi-Diameters

- US 8,416,506 does not publish per-surface clear apertures or effective diameters for Example 6.
- Current SDs remain documented renderer clear-aperture estimates. They make rational sense against FIG. 26 and the production 77 mm filter constraint: a large front collector, tightened variator and focus groups, a stop at `sd = 16.59 mm`, and moderate rear relay diameters through the G5a/G5b/G5c assembly.
- The stop SD is derived from the f/2.89 aperture geometry; the other SDs remain constrained by paraxial ray envelopes, edge thickness, and sag clearance rather than patent-published aperture data.

## 2026-10-08 — Square rims kept square and cross-gap limit raised

Rule (maintainer, 2026-10-08, "A clipped stated beam" in `agent_docs/patent-figure-sd-audit-procedure.md`): a clipping
surface rises only to the height the stated on-axis ray reaches there at the station that needs most, rounded up at
the file's precision (point 1); an element whose two faces carried one value before any rim was raised, and which the
patent figure draws with a square-cut rim, keeps one value, the higher of its two faces (point 2); and where the
validator's cross-gap limit refuses such a value although the surfaces do not cross and the figure draws the elements
meeting at the rim, `gapSagFrac` is set to the smallest two-decimal value that admits it (point 3). All three points
apply here. The figure is a check only, no semi-diameter was lowered, and the `STO` row is unchanged.

Starting point. No rim had been raised in this file; the copy at commit `c3fc5a2d` is the file before this section.
The stated ray is the f/2.89 on-axis marginal ray (Table 6: FNO = 2.89 at all three zoom states). The proposal
listing (`audit:aperture` with `--raise`) on that copy prints 12: 17.9 → 18.8, 13: 17.9 → 18.8, 14: 17.9 → 19.1, a
largest raise of 6.7 % with no flag, and in its square-rim column 13/14: 19.1. All three surfaces need most at
196 mm; at 135 mm the same ray reaches 15.544 / 15.575 / 15.897 mm on surfaces 12-14 and at 71.4 mm 11.875 / 12.039 /
12.399 mm. The file's semi-diameters are written to 0.1 mm. L24 (surfaces 13-14) is the only element whose two faces
shared one value and has a face below the ray; L23 (surfaces 11-12) carried 21.1 / 17.9 mm and L25 (surfaces 14-15)
17.9 / 22.0 mm, so both are raised face by face.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 12 `sd` (L23 rear) | 17.9 mm | 18.8 mm | Stated ray reaches 18.796 mm at 196 mm, infinity focus; 17.9 mm clipped it |
| Surface 13 `sd` (L24 front) | 17.9 mm | 19.1 mm | Squared to the higher face (surface 14), figure draws a square rim on L24; the ray needs 18.791 mm at 196 mm |
| Surface 14 `sd` (L24 / L25 cemented interface) | 17.9 mm | 19.1 mm | Stated ray reaches 19.048 mm at 196 mm, infinity focus; 17.9 mm clipped it |
| `gapSagFrac` | 0.90 (default) | 0.96 | Smallest two-decimal value that admits surfaces 12 / 13 at 18.8 / 19.1 mm; FIG. 26 draws L23 and L24 meeting at the rim |

The raises are +5.0 % (surface 12) and +6.7 % (surfaces 13 and 14). The rims stand 0.004 mm (surface 12), 0.309 mm
(surface 13) and 0.052 mm (surface 14) outside the stated ray at 196 mm. No other surface is below the stated ray at
any station, so the remaining 34 surfaces keep their values.

### How FIG. 26 draws each rim

FIG. 26 (Sheet 26 of 35, PDF p. 28) draws Example 6. The page image embedded in the PDF is 2560 × 3300 px at 300 dpi;
positions were read from pixel runs of a 600 dpi render, so one native pixel is two render pixels, about 0.13 mm. The
optical axis runs up the page with the object side at the bottom; the coordinates below are for the page turned so
that the object is at the left. The axis line is centred on y = 2455.5 px.

- Scale along the axis: the surface-1 vertex is at x = 1507.5 px and the image line at x = 5272 px, 3764.5 px for the
  246.275 mm total length, 15.29 px/mm. Inside G2 the surface-8 vertex at x = 1976 px and the surface-15 vertex at
  x = 2429.5 px give 453.5 px for 30.0 mm, 15.12 px/mm. The variable gaps read d2 = 26.2 mm (printed 25.896 at
  71.4 mm, 2.011 at 196 mm), d3 = 5.6 mm (5.289), d4 = 20.1 mm (19.899) and Bf = 53.5 mm (53.787), so the drawing is
  the wide-angle infinity state, to scale along the axis. The gap between surfaces 12 and 13 is drawn 66 px wide on
  the axis, 4.3 mm against the printed 4.2 mm.

| Element | Rim as drawn | Rim-line centre above / below the axis | Drawn half-height, front face / rear face |
|---|---|---:|---:|
| L23 (surfaces 11-12) | Square-cut, on the rim line it shares with L22 and L24 | 299.0 / 296.0 px | 297.5 px, 19.5 mm / 297.5 px, 19.5 mm |
| L24 (surfaces 13-14) | Square-cut, on the same line | 299.0 / 296.0 px | 297.5 px, 19.5 mm / 297.5 px, 19.5 mm |
| L25 (surfaces 14-15) | Stepped: a radial step on its front face | 316.0 / 313.0 px (rear face) | 297.5 px, 19.5 mm / 314.5 px, 20.6 mm |

Millimetres are at 15.29 px/mm; at the G2 scale of 15.12 px/mm the two heights are 19.7 mm and 20.8 mm.

- L22, L23 and L24 end on one straight rim line on each side of the axis (x = 2130 to 2321 px, y = 2152-2161 above
  and y = 2748-2755 below). The surface-11 arc runs into that line at x ≈ 2272 px, the straight surface-12 line at
  x ≈ 2292 px, and the surface-14 arc at x ≈ 2316 px, so L23 keeps a drawn edge about 20 px (1.3 mm) long and L24 one
  about 24 px (1.6 mm) long, both square.
- The surface-13 arc leaves the rim line at the same point as the surface-12 line. The two strokes run as one from
  the rim down to about 268 px above the axis and 260 px below it (17.3 mm) before they separate: the figure draws
  L23 and L24 meeting at the rim.
- L25 has its own rim line (x = 2308 to 2438 px, y = 2136-2143 above and y = 2764-2773 below), 17 px (1.1 mm) outside
  the common line, joined to it by a short radial stroke at x = 2308-2318 px. Its cemented face ends at the L24 rim
  and its rear face runs out to the higher line. The cemented pair L24-L25 is therefore not drawn with one common
  rim, and the two elements are judged separately: L24 square, L25 stepped.

The figure draws the three raised faces at 19.5 mm against 18.8 / 19.1 / 19.1 mm in the file, 2 to 4 % above the
file, so no element is drawn smaller than the value it now carries.

### Cross-gap pair

Surface 12 (R = 287.5696) and surface 13 (R = -53.8038) face each other across the fixed 4.2 mm air gap between L23
and L24. The validator compares them at the lower of the two rims, 18.8 mm: surface 12 sags 0.615 mm toward L24 and
surface 13 sags 3.391 mm toward L23, 4.007 mm together, 95.4 % of the gap, leaving 0.193 mm of clearance. The two
surfaces would touch at a height of 19.24 mm, so they do not cross. At the default 0.90 the allowed intrusion is
3.780 mm and the validator refuses both the face-by-face values (18.8 / 18.8 mm) and the squared ones (18.8 /
19.1 mm) with the same message, because the comparison height is 18.8 mm either way. Tried in memory with the squared
values:

| `gapSagFrac` | Result |
|---:|---|
| 0.95 | Refused: `Air gap "12"→"13": combined surface sag (4.01 mm) exceeds allowed gap intrusion (3.990 mm of 4.200 mm) at sd=18.8`, once for the fixed layout and once for each of the three zoom positions |
| 0.96 | Builds; allowed intrusion 4.032 mm |

Above the comparison height the front corner of L24 at 19.1 mm lies 0.135 mm behind the straight edge the renderer
draws between the two rims of L23 (21.1 mm at surface 11, 18.8 mm at surface 12). No other air gap in the lens is
above 90 %: the next highest is surfaces 9 / 10 at 87.9 %.

### Result

Traced at infinity focus, wide open:

| Station | Before | After | Limiter after |
|---|---|---|---|
| 71.4 mm | f/2.89 → f/2.89 (-0.0 %; 2.8900), iris (`STO`) | f/2.89 → f/2.89 (-0.0 %; 2.8900) | iris (`STO`) |
| 135 mm | f/2.89 → f/2.89 (+0.1 %; 2.8922), iris (`STO`) | f/2.89 → f/2.89 (+0.1 %; 2.8922) | iris (`STO`) |
| 196 mm | f/2.89 → f/3.08 (+6.7 %), rim of surface 14 (sd 17.9 mm) | f/2.89 → f/2.89 (-0.0 %; 2.8894) | iris (`STO`) |

Run on the file as it now stands, the proposal listing names no surface below the stated ray, and every station is
bounded by the iris. The +0.1 % at 135 mm is the fixed iris itself: the engine holds it at the 17.3607 mm that gives
f/2.89 at 71.4 mm, and the stated ray needs 17.3750 mm at 135 mm and 17.3570 mm at 196 mm. The field-coverage audit
reports 100 % of the 21.65 mm image height at all three stations, the image-circle audit reports no undersized
surface, and the render diagnostics report no trimmed element at five zoom positions from 71.4 to 196 mm at infinity
and at the 1.4 m close-focus spacing. The minimum element edge thickness is 0.42 mm at L23 (0.36 mm with surface 12
at 17.9 mm), and L24 keeps 1.80 mm at 19.1 mm (2.01 mm at 17.9 mm).

### Render comparison

The lens page was captured at 71.4 mm, the state FIG. 26 draws, and at 196 mm. Element order and grouping match the
figure at both: the cemented pair and two singlets of G1, L21 with the two cemented pairs of G2, L31 with the
cemented pair of G3, L41, the two singlets of G5a ahead of the stop, and the cemented pair with four singlets behind
it. Group spacing at 71.4 mm follows the figure.

- L24 is rendered with a square rim at 19.1 mm, as the figure draws it.
- L23 is rendered with a slanted edge from 21.1 mm at surface 11 to 18.8 mm at surface 12; the figure draws it
  square on the common rim line at about 19.5 mm. Its two faces already differed (21.1 / 17.9 mm), so point 2 does
  not apply to it.
- L25 is rendered with a slanted edge from 19.1 mm at the cemented face to 22.0 mm at surface 15; the figure draws a
  radial step of 1.1 mm there. The renderer joins unequal rims with a straight line, so a step appears as a slant.
- The rear corner of L23 and the front corner of L24 are rendered with their outlines touching and no overlap of the
  glass, as the figure draws the two elements meeting at the rim. The on-axis fan drawn at 196 mm passes through G2
  inside the rims and reaches the image uncut.

### Open

- FIG. 26 draws L22, L23 and L24 on one rim line at about 19.5 mm. The file keeps 21.1 mm on surfaces 10 and 11,
  8 % above the figure and inside the ~15 % band, so L22 and the front of L23 stand 2.0 mm above L24 in the render.
  Bringing them to one line would mean lowering surfaces 10 and 11, which this rule does not do. Surface 12 cannot
  follow the figure to 19.5 mm in any case: surfaces 12 and 13 touch at 19.24 mm.
- FIG. 26 draws L21 with a rim at 306 px, 20.0 mm, against 25.0 mm on surface 8, a figure 20 % below the file. L21
  has no face below the stated ray (19.600 mm at 196 mm) and was not changed; its front semi-diameter is a candidate
  for the figure-based semi-diameter audit.
- The authored `STO` semi-diameter is 16.59 mm, while the engine's wide-open fixed iris is 17.3607 mm. The `STO` row
  and the sentence in the analysis note that describes the 16.59 mm derivation are as they were.
