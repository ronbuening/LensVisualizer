# Audit Log — Carl Zeiss Jena Cardinar 100mm f/4

Source: Carl Zeiss Jena factory optical data sheet, Sach-Nr. 550513A (Opt.), Cardinar 4/100.

## 2026-11-02 — Model built from the factory sheet

### Source

- Sheet read from a 2200 x 1484 reading copy of the public scan, every cell at 2x to 3x enlargement.
- Calculation "14.6.58", department mark "WOPho 25.8.58". Format 24 x 36, "Wechselobjektiv Werra", "ausgehend vom V 237".
- DD 23 651 is context only. Nothing in the prescription comes from it, and the file carries no patent metadata.

### Values read

| Row | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Radius | 45.925 | 156.02 | 33.03 | 158.625 | 143.24 | 67.72 | 20.098 | 51.53 | 185.84 |
| 2h axial | 23.77 | 22.54 | 21.39 | 16.93 | 16.79 | 14.22 | 12.31 | 10.08 | 9.65 |
| Freier Ø | 41.0 | 38.6 | 33.2 | 24.4 | 24.0 | 18.1 | 13.5 | 15.2 | 16.0 |

- Thicknesses and gaps, in order: 7.70, 3.20, 13.25, 0.20, 6.95, 3.85, 17.4, 2.90. Σd printed 55.45.
- Stop: "Blendenlage 9.2 + 8.2". Stop Ø at 1:4, 5.6, 8, 11, 16, 22, 32: 11.24, 7.95, 5.62, 3.97, 2.81, 1.99, 1.40.
- Linsen Ø: 42.0, 35.0, 27.0, 27.0, 17.0. Facets: "Fac 26.8 ∢40°" after L2, "Fac 18 ∢45°" after L4.
- Glass, melt, nd, νd: SK5 G 4703 1.5890 61.1; SK13 59976 1.5889 58.5; BK1 G 68327 1.5102 63.4; SF15 G 69242 1.6991 30.0;
  SF6 67433 1.8072 25.3.
- First order: f'0 95.13, fm 95.08, s'0 38.31, s'm 38.26, s0 105.96, 2σ 25°.
- Pupils "f. 8°": EP +80.2, AP −10.7, Ø EP 23.77, Ø AP 12.37.
- The S8 radius has a stray mark at its decimal point ("51:53"). It is read as 51.53, and closure agrees.

### Hand alterations on the sheet

- Thickness tolerances in ink: L1 and L5 ±0.10 to ±0.15; L2 ±0.05 to ±0.08; the 0.20 gap ±0.03 to ±0.01; L3 and L4 ±0.05 to
  ±0.06. ΔΣd ±0.03 to ±0.06.
- "Objektiv" struck out, "Cardinar" stamped. The characters "3A" of the part number are overwritten in black.
- Ink: "PaV und FaV vom 14.7.64". Pen, dated 7.12.65: Δs'A' − Δs'd +0.28, passed on to FEKFo / Broche.
- Pencil: fd 87.49 beside L5, 17.8 after the S9 free diameter, dimensions 36.0 and 34.9 upper right, sketches on the section.
- No radius, thickness, index or Abbe number is altered. The typed state is modeled. The pencil 17.8, 36.0 and 34.9 are not
  used, and their meaning is not established.

### Signs

Radii are unsigned on the sheet. The Sinnbild row shows S6 alone curving the other way, and the L3/L4 symbols share that face.
With S6 negative and the rest positive, the trace gives f' 95.136, s' 38.315 and s 105.961.

### Rim decisions

Baseline: every face at half its printed freier Ø, no lands. Transmission at f/4 at 0 / 2.1 / 4.2 / 6.3 / 8.5 / 10.6 / 12.7°:
100.0 / 100.0 / 95.6 / 89.1 / 80.9 / 66.2 / 43.9 %. The filed rims give the same curve, a change of 0.0 points at every field.

| Surface | sd | rimExtensionSd | Basis |
|---|---|---|---|
| 1, 2 | 20.5, 19.3 | 21 | Linsen Ø 42.0 |
| 3 | 16.6 | 17.5 | Linsen Ø 35.0 |
| 4 | 12.2 | 13.4 | Fac Ø 26.8 |
| 5 | 12.0 | 13.5 | Linsen Ø 27.0 |
| 6 | 13.5 | none | Linsen Ø 27.0, in place of freier Ø 18.1 |
| 7 | 6.75 | 9 | Fac Ø 18 |
| 8, 9 | 7.6, 8.0 | 8.5 | Linsen Ø 17.0 |

- S6 is cemented and cannot carry a land. At sd 9.05 the doublet draws as a wedge and a neck, unlike the sheet's square-edged
  pair. At 13.5 it matches the section, and no ray changes. With S6 open the peak footprint there traces to 9.05, half the
  printed 18.1.
- The peak footprints at S2 to S5 trace to 19.27, 16.57, 12.16 and 11.97. The printed values at those faces are envelopes.
- The facets are not modeled as cones, which the schema cannot draw. The straight edges between lands stand in for them, and
  the printed facet diameters set the land heights.
- Section scale on the reading copy: 7.52 px per mm, from L1 Ø42 and Σd. Measured: L3/L4 semi-diameter 13.5, the L4 facet 45°.
  The drawn facet ends near semi-diameter 9.6 against the printed 9.0; the printed value is used.
- No `checks` override is needed at default limits.

### Glass

- Rows and residuals as tabulated in the analysis. L1, L3 and L4 resolve within 0.00015 in index and 0.10 in νd. L5 resolves at
  −0.00202 and +0.13.
- SF15 and SF6 comparison: SF15 (Sumita) PgF 0.5994 against E-FD15 (Hoya) 0.6029; SF6 (Schott) 0.6102 against N-SF6 (Schott)
  0.6158. Legacy rows are kept for these lead flints. Lead-free rows move g focus by 0.007 mm.
- L2 takes BACD13 (Hoya, obsolete) as the SK13-class counterpart: no catalog holds an SK13 row, and Hoya numbers its BACD
  series after the SK series. It is 0.00291 from the sheet's index and −0.19 in νd. The pairing is an inference from the
  series numbering; no document states it for Jena SK13.

### Open items

- Close focus and focusing mechanism are not on the sheet. `closeFocusM` is 1.5 m from the museum-digital record (object 3836), with static geometry; unit focus has only an owner account behind it, so it is not modeled.
- Exit-pupil Ø: closed by the second review below. The printed 12.37 is the real f/4 axial beam at the pupil plane, 12.33 to 12.34 in the model; the paraxial 12.21 is a different quantity.
- The sheet's calculation date reads 14.6.58, while the zeissikonveb.de history gives 16 June 1958.

## 2026-11-02 — Second review: diagram, labels and movement

### Compared

The local page at f/4, f/32, `focus=1`, `mv=focus` and every `?el=`, against the sheet's 1:1 section and the published section drawing. DD 23 651 served for layout only. Vertex crossings and rims were measured afresh from the images: the sheet at 7.50 px per mm (S1 to S9, 416 px for 55.45 mm), the published section at 8.88 px per mm axially (492.5 px) and 8.95 radially (L1 Ø42). The model's outline, overlaid on both at those scales, lands on the drawn radii and thicknesses, which confirms the reading of the prescription, its signs and the stop gap.

### Rim and land verdicts

Baseline is the printed-rim file `.lens-work/base1104c`. Every land stays under rule (b), since none costs light. Nothing is cut below baseline.

| Surface | Sheet section | Published section | Baseline sd + land | Final sd + land | Light cost, points | Verdict |
|---|---|---|---|---|---|---|
| 1, 2 | 20.8 to 21.2 | 21.0 | 20.5, 19.3 + 21 | unchanged | 0.0 | keep |
| 3 | 17.5 | 17.6 | 16.6 + 17.5 | unchanged | 0.0 | keep |
| 4 | 13.3 | 13.4 | 12.2 + 13.4 | unchanged | 0.0 | keep |
| 5 | 13.3 to 13.5 | 13.5 | 12.0 + 13.5 | unchanged | 0.0 | keep |
| 6 | 13.3 to 13.5 | 13.5 | 13.5, no land | unchanged | 0.0 | keep |
| 7 | 9.6 | 9.2 to 9.3 | 6.75 + 9 | 6.75 + 9.96 | 0.0 | land raised |
| 8, 9 | 8.4 to 8.5 | 8.55 | 7.6, 8.0 + 8.5 | unchanged | 0.0 | keep |

Worst loss against baseline: 0.0 points at every field. Transmission is unchanged at 100.0 / 100.0 / 95.6 / 89.1 / 80.9 / 66.2 / 43.9 %. Engine half-field 14.47° and f/4.00 before and after; stop radius 5.574 mm. No clipping flags, surface audit clean, image circle and field coverage 100 %. Step order is L1 21 > L2 17.5 > L3 13.5 = L4 13.5 > L5 8.5, with the neck at 13.4 as printed.

### Facets

Both drawings confirm the printed angles. L2's cone measures 40° on the sheet (37 by 31 px) and 39.8° on the published section (42 by 35 px). L4's measures 46° and 45.8°. The printed 1.7 mm on the sheet runs from the end of the 40° cone to S4's vertex plane, which puts the cone between 6.66 and 11.55 mm behind S3's vertex.

- **L2:** the renderer joins the two land corners with one segment, so the neck cannot be drawn. The edge runs at 23.9°. A 40° edge from S3's corner would need S4's corner at 9.7 mm, inside its clear opening. S4 stays at the printed 13.4: it has the smallest worst departure, 0.97 mm against 1.16, 1.07 and 1.42 mm at trial heights of 12.6, 13.0 and 14.0. Outline area is 4.6 mm² at 13.4; 13.0 trims it to 4.1 mm² but drops the neck further below L3's rim than the sheet prints.
- **L4:** S7's land sits at the sag of the Ø13.5 mm opening, 1.17 mm behind the vertex, and the printed Ø18 belongs to the rim plane at 2.13 mm. At the land's plane the 45° cone is 9.96 mm high. At 9.0 the corner fell 0.68 mm inside the glass. At 9.96 it lies on the drawn facet: the glass missing from the upper half falls from 9.6 to 6.5 mm², and the worst departure from 2.00 to 1.57 mm. The edge eases from 35.2° to 29.0°. A 45° edge would need the corner at 7.2 mm and leaves 15.3 mm² missing, so the outline is preferred to the angle.
- **S3, not changed:** the land sits 0.54 mm ahead of the true Ø35 corner, which leaves a small point on L2's rim. Setting sd 17.5 with no land removes it at 0.0 points, but it departs from the printed freier Ø 33.2 mm, so it is left for the coordinator.

### Stop, focus and movement

- The stop sits at 9.2 + 8.2, between S7 and S8, as printed, and the published section draws the iris 8.9 to 9.3 mm behind S7.
- The page shows stop Ø 11.15 mm at f/4 and 1.39 mm at f/32, against the printed 11.24 and 1.40. The marked stops run f/4 to f/32 as printed. Stopped down, the app follows the marked number, so f/5.6, f/11 and f/22 give 7.96, 4.05 and 2.03 mm, where the printed 7.95, 3.97 and 1.99 follow an exact √2 series. That is the app-wide stop rule.
- `focus.description` is true of the sheet, which gives no focus data. The 1.5 m value was not rechecked, because this pass downloads nothing. `focus=1` draws the same lens, and the slider reads "Not modeled". There is no zoom.

### Labels

- `G1 (+)` and `G2 (+)` are removed. The sheet names no groups, and DD 23 651 counts four Glieder, not two. The brackets hid the negative doublet that does the telephoto work, and the movement panel read "Groups 2" beside the header's 4 GROUPS. It now reads 4, from the construction fallback. The other static primes in this batch carry no `groups` either.
- `C1` stays: one cemented component, surfaces 5 to 7, the name the analysis uses, and the inspector shows "DOUBLET C1" on L3 and L4.
- `name` L1 to L5 follows the sheet's Teil-Nr. -01 to -05 and the patent's L1 to L5. Surface labels are the sheet's Flächen-Nr. Types agree with the signs of R.
- Recomputed in-air focal lengths are 107.70, 68.17, 91.14, -21.78 and 87.49 mm. The front pair is +43.68 mm, C1 is -30.00 mm and L1 to L4 is +177.19 mm, so the roles hold.
- The lens is all spherical, with no `A` labels and no `apd` tags; the sheet marks no special glass. The Werra badge matches "Wechselobjektiv Werra" and the format badge matches "Format 24 x 36". `/mounts/werra` lists the lens.

### Colour

With the current rows, including BACD13 on L2, the paraxial A' focus sits +0.291 mm from d at 768.2 nm and +0.288 mm at 766.5 nm. Real rays give +0.275 mm at 0.5 of the pupil, the zone the sheet's s'm matches, and +0.221 mm at full aperture. The pen note reads +0.28. The C, F and g shifts trace to +0.106, -0.100 and -0.051 mm, as the analysis states. The e focus is -0.055 mm, so e and g nearly coincide in the model.

### Exit pupil

A real f/4 axial ray leaves S9 at 4.815 mm and crosses the axis 38.24 mm behind it. That beam measures Ø12.33 mm at the model's 8° pupil plane, 10.65 mm ahead of S9, and Ø12.34 mm at the printed 10.7. Against the printed 12.37 mm that is 0.2 to 0.3 %, where the paraxial 12.21 mm misses by 1.3 %.

## 2026-11-10 — Source issuer

- `source.issuer: "VEB Carl Zeiss Jena"` records who issued the factory sheet. Carl Zeiss Jena was the state-owned
  VEB Carl Zeiss Jena from 1948, so the 1958 sheet is that entity's document. The catalog already uses this name for
  the works' patents.
- Effect: the universal relationship map groups the model under VEB Carl Zeiss Jena instead of a separate
  "Carl Zeiss Jena" catalog-maker hub. `maker` stays "Carl Zeiss Jena" for the maker page. No patent metadata is added.
