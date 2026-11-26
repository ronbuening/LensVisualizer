# Audit Log — Nikon AI Zoom-Nikkor 360-1200mm f/11 ED

Patent: US 3,743,384, Example I / Claim 4

## 2026-06-19 — Local patent and figure review

- Local patent source: `patents/US3743384.pdf` (untracked local file).
- Rendered page images and `pdftotext -layout` output were checked for Example I, Claim 4, Fig. 1, and the certificate-of-correction rows.

### Prescription and layout

- Example I was matched surface-by-surface against the data file, including the certificate-corrected rows noted in the analysis file.
- Fig. 1 supports the rendered grouping: large low-dispersion front collector, compact negative variator, positive compensator, and long separated relay/telephoto rear section.
- The stop is not tabulated by the patent. The data file inserts `STO` immediately behind surface 21 while preserving the published `D21` total at both zoom endpoints: surface 21 carries 0.5 mm, and `STO` carries the remaining variable spacing.

### Semi-diameters

- The patent does not publish clear semi-diameters.
- The authored SDs were compared with Fig. 1 and the 122 mm front-accessory scale. The front collector is intentionally capped to avoid impossible rim geometry; the remaining groups follow the patent figure's smaller variator/compensator envelope and larger relay entrance.

### Glass disposition

- Stored `nd`/`vd` values match Example I.
- The repeated `486/815` low-dispersion material remains explicitly unmatched. The patent describes a special/quartzite-type material but does not publish C-, F-, or g-line indices or a modern catalog name.
- Other unresolved historical pairs (`613/369`, `515/546`, `639/450`, `501/565`, `744/494`) remain code/family-level descriptions pending a coefficient-backed catalog source.

## 2026-07-30 SUMITA KF3 coefficient recovery

- SUMITA's discontinued-inclusive KF3 vendor polynomial resolves L14 at the exact `1.51454 / 54.6` coordinate.
- Relabeled L14 as a KF3 optical equivalent while leaving the production supplier unspecified.
- The other historical code families listed above remain unresolved; no prescription or zoom data changed.

## 2026-07-30 - SUMITA F3 and BAF12 coefficient recovery

- SUMITA's discontinued-inclusive all-glass catalog publishes F3 at code `613369`, nd = 1.61293, νd = 36.9, and BAF12 at code `639450`, nd = 1.63930, νd = 45.0.
- Relabeled L11 and L17 as exact coefficient-backed catalog equivalents while leaving their production suppliers unspecified.
- The `486815`, `501565`, and `744494` families remain unresolved; no prescription or zoom data changed.

## 2026-08-18 — 501565 and 744494 coefficient assignments

- Visually rechecked `patents/US3743384.pdf`, PDF page 9. L18 remains `1.50137 / 56.5` and L19 remains `1.74443 / 49.4`.
- SUMITA K10 reproduces 501565 essentially exactly (`Δnd = +0.000001`, `Δνd = -0.09`); HOYA M-NBF1 is within the runtime window for 744494 (`Δnd = -0.001130`, `Δνd = -0.074`).
- Relabeled L18 and L19 as catalog equivalents while leaving their production suppliers unspecified. The special 486815 family remains unresolved; no prescription or zoom geometry changed.

## 2026-08-21 — BAL7 discontinued-catalog recovery

- OHARA's official 2026-07-01 all-products catalog supplies discontinued BAL7 at code `589512`,
  `nd = 1.58875`, `νd = 51.179278`, exactly reproducing L8's patent coordinate within printed precision.
- Relabeled L8 as a supplier-neutral BAL7 catalog equivalent and synchronized the analysis. The special `486815`
  family remains unresolved; no prescription, zoom, movement, or semi-diameter values changed.

## 2026-10-30 — Fresh optical section, source glass and partial-dispersion review

- Directly inspected original `patents/US3743384.pdf`: optical Figure 2 on PDF p. 3 at 600 dpi, Example I tables on pp. 8–9, d-line definitions, source prose on pp. 6–8 and the Certificate of Correction on p. 12. Figure 1 is the motion schematic, not the optical section. All 20 source glass pairs and the existing certificate-corrected radii remain intact.
- Reviewed every air-facing and cemented face against the optical figure. No further resolved concave cap-end land justifies a new cut/extension. Retain all geometry, inferred stop and published infinity-only zoom states; the existing conservative front-envelope/corner-vignetting qualification remains.
- The prose literally discusses “quartzite or other special optical glass,” good partial dispersion and a no-infrared-calibration claim. It does not establish a composition for the five numerical 1.48606/81.5 media, or supply their θgF/C/F/g anchors. Their spectral anomaly is unestablished, not measured as zero; no guessed material identity, numeric override or APD assertion was added. L1/L2/L7/L12/L15 retain source pairs and unresolved labels. A fresh strict catalog search (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15) finds no exact-coordinate candidate for that pair.
- Fifteen of twenty media retain compatible coefficient-backed curves. Public labels qualify the nonidentical M-NBF1 proxy (1.743299744/49.325889 versus source 1.74443/49.4) and K10's source/catalog νd 56.5/56.41. Coefficient availability is separate from historical supplier/melt identity and from the unmodeled special partial dispersion.
- Focused surface, image-circle, aperture and field checks pass at both zoom stations; catalog consistency passes. Nine actual SVG zoom/focus states were viewed with no automatic rim trimming. No finite-focus mechanism was invented from the production minimum-focus metadata.

## 2026-11-25 — Calculated intermediate zoom stations

- Base: `origin/main` at `f05a9d6f4`. Source: `patents/US3743384.pdf`, Example I spacing rows, Fig. 1 motion diagram and Fig. 2 section, with `pdftotext -layout` checked against rendered pages.
- With only the two printed rows, linear interpolation put the paraxial image up to 252.1 mm behind the film plane near the middle of the slider, because the compensator path is curved.
- Both printed rows are unchanged (D7 11.258 / 211.258, D15 64.853 / 4.248, D21 143.138 / 3.744 mm). Their sums are 219.249 and 219.250 mm.
- An independent Python paraxial y-ν trace gives back focal distances of 235.2012 mm (360 mm setting) and 235.3611 mm (1200 mm setting). The axial ray leaves f3 within about 1e-6 rad of parallel at both, so the 0.16 mm residual is tabulation rounding. The film plane is now fixed at 235.2811 mm behind R32, their mean (previously 235.201 mm, the short-end value). The printed settings focus 0.0799 mm in front of it and 0.0800 mm behind it.
- Added 83 calculated stations (`published: false`). At each, D7 sets the variator, the gap total is blended linearly from 219.249 to 219.250 mm along the variator travel, and D15 is solved for paraxial focus on the film plane, with D21 the remainder. Stations were placed to equalize the error of linear interpolation between them. 85 stations give a peak of 19.84 µm before rounding; 84 give at best 20.32 µm. Rounded to 0.0001 mm (choosing the neighbouring rounding with the least defocus), each calculated station focuses within 0.14 µm. The engine's own gap interpolation, sampled 40 times per segment, gives at most 19.92 µm between calculated stations and at most 19.85 µm departure from the straight run in the two segments next to the printed rows.
- Station focal lengths are the calculated EFLs, 360.0411 to 1188.4123 mm, matching `catalog.focalLengthMm.design`; the first and last stations keep their labels. D7 increases, and D15, D21 and the f3 position change monotonically at every station. f2 travels 200.000 mm and f3 139.395 mm, and f3 approaches its turnaround just beyond the 1200 mm setting, as the patent describes.
- Stop check: the patent text, table and Figs. 1–2 do not locate the diaphragm. The STO plane stays 0.5 mm behind R21 and moves with f3, and the `STO` gap carries D21 − 0.5 mm. Because the f3 output is collimated, the fixed iris gives f/11.000–11.004 at all 85 stations. A trial with the stop fixed 3.244 mm ahead of R22 gave f/11.000–11.005, about the same front-collector vignetting (10–15 % per side at the 21.6 mm corner), and corner clipping at the f3 rims (15–17 % per side) where the moving stop has none. No source decides it, so the earlier inference was kept.
- Nikon's dimensioned drawing and cutaway on MIR (`3601200f11EDpreAIopt.gif`, `3601200f11EDoptic.jpg`) show no diaphragm either.
- No glass, radius, element thickness, fixed air space or semi-diameter changed; the only fixed value that moved is the R32 image distance (+0.0801 mm).
