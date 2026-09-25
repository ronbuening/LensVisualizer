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

## 2026-07-29 — `796409` coefficient-source review

- Visually rechecked the Table 7 `1.79631 / 40.9` rows used by L8 and L16; their stored radii and
  thicknesses remain patent-consistent.
- Official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact `796409` row.
  The nearest named high-index families either miss the d-line guard or belong at materially different coordinates.
- Retained both explicit unmatched `796409` annotations. No supplier, catalog model, or geometry changed.

## 2026-07-30 SUMITA BALK3 coefficient recovery

- SUMITA's discontinued-inclusive BALK3 vendor polynomial resolves L14 at the patent-rounded `1.518 / 60.3` coordinate.
- Relabeled L14 as a BALK3 optical equivalent while leaving the production supplier unspecified.
- Both `796409` elements remain unresolved; no prescription or zoom data changed.

## 2026-08-11 — Phase 92 HOYA legacy-catalog recovery

- Visually rechecked US 4,699,475 Table 5: L8 and L16 are the patent-rounded `1.796 / 40.9` material.
- HOYA NBFD2 at `1.797199 / 41.143795` is within `+0.001199 / +0.243795`, so both elements now use its official
  formula-3 model as an optical equivalent.
- Synchronized the analysis and left the production supplier unspecified. No prescription or zoom data changed.

## 2026-09-25 - MTF census: source Bf contradiction retained

Source: local `patents/US4699475.pdf`, PDF page 23, Table 7 (Seventh
Embodiment), printed columns 15-16. Checked all 28 radii, all fixed
gaps/thicknesses, all 16 nd/vd pairs, and every wide/mid/tele variable
spacing. No scaling, aspheres or source rear plates. Source infinity
stations F=36.2/60/103 are selected, with no modeled close-focus travel.

Source d6 = 0.98/10.62/19.77, d14 = 12.52/6.77/1.49,
d20 = 10.84/6.96/3.08 and Bf = 52.36/65.30/78.24 mm all match.
The stop is correctly 0.8 mm ahead of L9: authored S14 gaps
11.72/5.97/0.69 plus STO-to-S15 0.8 reproduce source d14 exactly.

Independent ABCD at wide infinity gives EFL 37.391953 mm versus source
36.2 mm and BFL 53.302330 mm versus source Bf 52.36 mm. There is no
transcription mismatch or single supported misprint to correct. Retain the
published image distance and document the contradiction in the header and
analysis; do not replace the three-decimal indices with catalog values to
fit focus. Source spectral evidence and qualified glass labels are unchanged.

Offset before/after: +0.942330 -> +0.942330 mm. Section E row deleted;
the numerical census flag remains by design. No visible data fix/changelog.
