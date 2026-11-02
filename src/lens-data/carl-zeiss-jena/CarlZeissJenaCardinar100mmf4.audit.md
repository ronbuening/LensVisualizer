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
- L2 stays Unmatched. No catalog holds an SK13 row. BACD13 (Hoya, obsolete) is 0.00291 from the sheet's index, and no
  equivalence is documented. Using it would move g focus by 0.018 mm.

### Open items

- Close focus and focusing mechanism are not on the sheet. `closeFocusM` is 1.5 m from the museum-digital record (object 3836), with static geometry; unit focus has only an owner account behind it, so it is not modeled.
- SK13 dispersion has no catalog row.
- Exit-pupil Ø: 12.21 against the printed 12.37, unresolved.
- The sheet's calculation date reads 14.6.58, while the zeissikonveb.de history gives 16 June 1958.
