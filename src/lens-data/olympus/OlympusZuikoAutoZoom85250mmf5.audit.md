# Audit Log - Olympus Zuiko Auto-Zoom 85-250mm f/5

Patent: US 4,025,167, Embodiment 2

## 2026-06-24 - Local patent unavailable

### Patent evidence

- The data file cites US 4,025,167, but no matching local PDF was found under `patents/`.

### Disposition

- No prescription, glass, APD, high-index, or SD changes were made.
- A full patent audit remains blocked until `patents/US4025167.pdf` or an equivalent local source is added.

## 2026-07-30 - F8 coordinate-equivalent recovery

- The local patent remains unavailable, so the prescription itself was not re-audited.
- The existing authored L13 coordinate (`nd=1.59551`, `νd=39.2`) exactly matches coefficient-backed HOYA E-F8
  (`nd=1.59551`, `νd=39.22`, code `596392`) from the official obsolete-inclusive catalog.
- Relabeled L13 to E-F8 as a catalog equivalent while leaving the patent supplier unspecified.
- Synchronized the analysis; no prescription geometry or authored optical constants changed.

## 2026-07-30 — Primary-source and legacy-catalog recovery

### Patent evidence

- Retrieved the primary Google Patents scan of US 4,025,167 to ignored `tmp/pdfs/US4025167.pdf`, then rendered and
  visually checked PDF page 11.
- Embodiment 2 prints L4 and L7 at `nd = 1.56873`, `νd = 63.2`, and L10 at `nd = 1.49831`, `νd = 65.0`, matching
  the stored prescription. The source names no glass supplier and supplies no secondary line index or
  partial-dispersion value.
- The full Embodiment 2 prescription on that page also confirms the neighboring rows and zoom constants. No
  prescription geometry changed.

### Catalog additions and relabels

- Added discontinued OHARA BAL22 from the vendor's official 2026-07-01 all-products AGF. Its formula-3 polynomial
  round-trips to `1.5687286 / 63.162358`, and its published code is the patent's exact `569632`.
- Added discontinued OHARA BSL3 from the same source. Its polynomial round-trips to
  `1.4983080 / 65.026785`, and its published code is the patent's exact `498650`.
- Relabeled L4/L7 to BAL22 and L10 to BSL3 as coefficient-backed catalog equivalents. Each annotation explicitly
  leaves Olympus's production supplier unspecified.

### Analysis sync

- Updated both element discussions, the glass inventory, and the source list to replace the obsolete source-blocker
  and code-only wording with the verified catalog-equivalent evidence.

## 2026-10-07 — Patent-audit queue: stop position wording

Source read: `tmp/pdfs/US4025167.pdf` (14 pages, 300 dpi scan; page 1 prints 4,025,167). No copy exists under
`patents/`. No prescription value, semi-diameter, variable gap, or aperture field changed; the edits are prose only.

| Field | Before | After | Source |
| --- | --- | --- | --- |
| Data-file header, stop statement | Stop inserted in the D2 gap "as inferred from Fig. 2" | Stop is a modeling inference with no figure basis; inputs named as the printed F = 1:5, the D1-D3 table, and one fixed opening for all three positions | Figs. 1-3, drawing sheet 1 of 7 (PDF p. 2); Embodiment 2 table, cols. 5-6 (PDF p. 11); Claim 3, cols. 9-10 (PDF p. 13) |
| Analysis note, Optical Architecture stop paragraph | Stop placed "following the position shown schematically in the patent figure" | Same statement as the header, plus the marginal-ray heights that bound where one fixed opening can sit | Same locators; F5 labels on Figs. 6A-6C (sheet 4, PDF p. 5) and 7A-7C (sheet 5, PDF p. 6) |
| Analysis note, paraxial fit of the 13.42 mm stop | F/5 "within 0.04%" | F/5 "within 0.05%" (paraxial F/5.0015, F/4.9981, F/4.9979 at 85.0 / 151.4 / 250.0) | Computed from the transcribed prescription |

- Figures: Figs. 1-3 and the front-page figure were rendered at 400 dpi and the Fig. 2 variator-compensator gap at
  800 dpi. Each shows only the lens elements, the `r` and `d` callouts with their leader lines, and the optical axis.
  The short marks on the axis inside the `d5`, `d12`, and `d20` gaps of Fig. 2 (`d5`, `d12`, and `d21` in Figs. 1
  and 3) are the leader ends of those callouts. No gap in any figure carries a stop or diaphragm mark. Fig. 2 has 26
  surfaces and is the Embodiment 2 section.
- Tables: the Embodiment 2 table runs `r12`, `d12 = D2`, `r13` with no stop row, and Claim 3 prints the same rows
  with the gap as "variable". Neither lists a stop diameter.
- Text: cols. 1-8 and the claims contain no reference to a stop, diaphragm, aperture, iris, or pupil, and no statement
  about F-number during zooming. A search of the PDF text layer for those words returns nothing.
- Placement kept: the `STO` row stays 0.75 mm ahead of `r13` with `sd` 13.42, because the patent gives no position to
  move it to. `nominalFno` 5 and `zoomApertureModel: "fixed-iris"` are unchanged.
- F-number evidence confirmed on the page: `F = 1 : 5` in the Embodiment 2 header for `f = 85.0 ~ 250.0`, and F5 on
  the spherical-aberration plots of Figs. 6A-6C and 7A-7C at f = 85.0, 151.4, and 250.0. Zoom table `D2` is 45.0 /
  27.54 / 1.49, which the file carries as surface 12 plus the 0.75 mm `STO` gap.
- One radius fits F/5 at this plane: the real marginal ray needs 13.4561 / 13.4490 / 13.4519 mm (spread 0.05%) and the
  paraxial ray 13.4241 / 13.4149 / 13.4143 mm (spread 0.07%). The fixed iris of 13.4561 mm gives f/5.000 / 4.997 /
  4.998, and the aperture audit traces f/5.00 at all three stations with the iris as the limiter.
- Paraxial F/5 marginal-ray heights at 85.0 / 151.4 / 250.0, from an independent y-nu trace of the file's
  prescription: 8.122 / 10.210 / 13.326 mm at `r12`, 13.514 / 13.505 / 13.504 mm at `r13`, 13.836 / 13.825 /
  13.824 mm at `r16`, 10.029 / 10.020 / 10.019 mm at `r20`, 5.404 / 5.392 / 5.391 mm at `r26`. The spread is 49% at
  `r12` and at most 0.23% from `STO` to `r26`.

Left open:

- The stop location remains unsourced. A stop fixed with the relay ahead of `r16` satisfies the same inputs and gives
  the same on-axis F-number; entrance-pupil position and vignetting differ between the two. Settling it needs a source
  outside this patent, such as a production section drawing.
- The wide-end `D2` is the only zoom-table entry printed to one decimal, and the printed gaps sum to 62.74 mm there
  against 62.82 mm at the other two positions. The header and note attribute this to table rounding. That attribution
  was not examined under this row.
- The specification table prints `r20 = 8.663` and Claim 3 prints `r20 = 28.663`; both were re-read on the page. The
  file uses 28.663 and documents it in the header, without a `sourceErrata` entry. Not examined under this row.
