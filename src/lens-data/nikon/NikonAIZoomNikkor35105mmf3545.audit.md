# Audit Log — Nikon AI Zoom-Nikkor 35–105mm f/3.5–4.5S

Patent: US 4,699,475, Seventh Embodiment / Table 7

## 2026-06-19 — Local patent and figure review

- Local patent source: `patents/US4699475.pdf` (untracked local file).
- Rendered page images and `pdftotext -layout` output were checked for Table 7 and Fig. 14.
- The patent, data key, rendered figure, and table all support the 35–105mm f/3.5–4.5 design.

### Prescription and layout

- Table 7 was matched surface-by-surface against the data file: radii, axial thicknesses, d-line indices, Abbe numbers, and zoom variables agree with the printed wide, middle, and telephoto columns.
- The patent places the stop 0.8 mm ahead of L9. The data file preserves the printed `d14` total by splitting it into surface 14 to `STO` plus 0.8 mm from `STO` to L9.
- Fig. 14 shows the same positive front group, compact negative variator, stop ahead of L9, and larger rear relay section represented in the SVG data.

### Semi-diameters

- The patent does not publish clear semi-diameters.
- The authored SDs were compared with Fig. 14 and with the table geometry. They are plausible for the 52 mm filter objective, keep the narrow cemented/air-spaced groups compact, and avoid impossible edge-thickness or cross-gap sag intersections.

## 2026-06-19 — Requested L1/L4/L5/L7 SD recheck

- Rechecked Fig. 14 against the authored SDs for elements 1, 4, 5, and 7.
- L1 remains unchanged at `22.3 / 17.85`; it is plausible for the front negative meniscus and 52 mm filter constraint.
- L5 cannot be made as tall as the surrounding G2 envelope because its `R10 = -20.49` cemented rear surface and 1.0 mm center thickness make the physical edge-thickness limit about 6.6 mm at the common rim. A follow-up visual pass kept L5 narrow relative to L4/L7 instead of using the full mathematical limit.

| Field | Before | After | Reason |
|---|---|---|---|
| L4 surface 7 `sd` | 14.0 | 13.0 | Better matches the compact G2 envelope in Fig. 14 while staying larger than the following cemented pairs. |
| L4 surface 8 `sd` | 13.0 | 12.2 | Keeps the L4 rear rim clear of the L5 front surface across the 3.0 mm air gap. |
| L5 surface 9 `sd` | 6.9 | 7.1 | Keeps L5 compact in the G2 stack while avoiding the overly pinched original front face. |
| L5 surface 10 `sd` | 5.55 | 5.7 | Leaves a realistic positive edge-thickness margin on the steep cemented interface. |
| L7 surface 12 `sd` | 11.0 | 10.4 | Keeps the L7/L8 doublet in line with the revised G2 envelope. |
| L7/L8 surface 13 `sd` | 8.8 | 9.4 | Reduces excessive taper through the cemented L7/L8 interface. |
| L8 surface 14 `sd` | 8.8 | 9.4 | Keeps the L8 rear rim consistent with the revised cemented interface. |

### Glass disposition

- The element `nd`/`vd` values match Table 7.
- Exact or close catalog-class labels were retained where the patent-rounded values support them.
- L8/L16 (`796/409`) and L14 (`518/603`) remain intentionally unresolved because no coefficient-backed public catalog entry was verified for those exact values.
- `npm run generate:glass-reports` passed with these entries represented as unresolved coverage items, not catalog mismatches.
