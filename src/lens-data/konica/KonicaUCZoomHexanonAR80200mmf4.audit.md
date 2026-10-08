# Audit Log — KONICA UC ZOOM HEXANON AR 80-200mm f/4

Patent: JP S51-37247 A, the single unnumbered example (the data file and analysis note call it Example 1)

## 2026-10-07 — Patent-audit queue: focal-length prescription re-read

Scope: the queue row "the prescription computes 80.88 / 199.75 mm where JP S51-37247 A prints f = 79.925~196.158".
Every row of the example table on printed p.303 (PDF sheet 5) was re-read from 600-dpi crops of the 347-ppi scan and
compared with the file. No prescription value differs from the print, so no surface, spacing, index, or Abbe number
changed. The contradiction is inside the patent and is recorded as an `unresolved` source erratum.

| Field | Before | After | Source |
|---|---|---|---|
| `sourceErrata` | absent | one `unresolved` entry: the printed table traces to f = 80.88 / 199.75 mm and back focus 49.50 / 49.49 mm against the stated f = 79.925~196.158 and fB = 48.523 | p.303 table header and footer; Figs. 2A and 2C, pp.304-305 |
| Data-file header | ZOOM MODEL note only | adds a "SOURCE CONTRADICTION — UNRESOLVED" block stating what the re-read established | p.303; Figs. 2A and 2C |
| Analysis note, "First-order normalization" | states the mismatch and that no surface is altered | adds the table-to-print match, the plot-label zoom ratio, the traced spherical aberration and distortion against Figs. 2A / 2C, the telephoto-ratio check, the header-digit relation (196.158 / 2.4697 = 79.425), the r22 / r23 back-solves, and the `unresolved` entry | p.303; Figs. 2A and 2C |
| Analysis note, patent reference paragraph | "the first numerical example" | "the single numerical example ..., which the patent leaves unnumbered" | pp.302-303, heading (実施例) only |

### Table as read on p.303

| Surface | r | d | n | ν |
|---|---:|---:|---:|---:|
| 1 | 300.239 | 2.00 | 1.80518 | 25.4 |
| 2 | 88.878 | 6.10 | 1.62299 | 58.2 |
| 3 | -209.061 | 0.10 | | |
| 4 | 79.669 | 4.50 | 1.62299 | 58.2 |
| 5 | 364.975 | 36.375~2.535 | | |
| 6 | 360.022 | 1.40 | 1.62299 | 58.2 |
| 7 | 37.738 | 5.85 | | |
| 8 | -43.860 | 1.20 | 1.62299 | 58.2 |
| 9 | 42.500 | 3.60 | 1.80518 | 25.4 |
| 10 | 392.427 | 0.381~33.846 | | |
| 11 | 120.028 | 4.50 | 1.62299 | 58.2 |
| 12 | -58.892 | 1.50 | 1.80518 | 25.4 |
| 13 | -104.239 | 11.216~11.591 | | |
| 14 | 71.579 | 3.00 | 1.54077 | 47.2 |
| 15 | 495.913 | 0.10 | | |
| 16 | 30.407 | 13.00 | 1.53172 | 48.9 |
| 17 | -174.099 | 2.00 | 1.75520 | 27.5 |
| 18 | 41.529 | 30.00 | | |
| 19 | 49.454 | 4.50 | 1.53177 | 48.9 |
| 20 | -61.404 | 2.00 | | |
| 21 | -29.989 | 1.50 | 1.74320 | 49.4 |
| 22 | 47.628 | 3.00 | | |
| 23 | 48.034 | 5.00 | 1.56732 | 42.8 |
| 24 | -106.580 | | | |

Header: f = 79.925~196.158, F 4. Footer: fB = 48.523, Σd = 142.822, telephoto ratio at the long end 0.97.

### Confirmed unchanged

- All 24 radii, 23 spacings, and 14 n/ν pairs in the file equal the rows above. The variable spacings are printed
  tele~wide while f is printed wide~tele; the file's wide state (d5 2.535, d10 33.846, d13 9.061 + 2.530) and tele
  state (36.375, 0.381, 8.686 + 2.530) are the only pairing whose spacings sum to the printed Σd = 142.822, and they
  do so exactly at both ends.
- The table as printed traces to EFL 80.8793 / 199.7491 mm and back focal distance 49.5021 / 49.4870 mm, by the
  zoom-iris helper and by an independent paraxial trace of the rows above. Against the print that is +1.19 % /
  +1.83 % on f and +2.0 % on fB, with 0 % on Σd, so no uniform scale relates them. The patent's legend under the
  table defines f, fB, r, d, n, and ν without any normalization.
- Zoom ratio: table 2.4697; aberration-plot labels f = 80.0 / 129.1 / 197.5 mm give 197.5 / 80.0 = 2.469; header
  196.158 / 79.925 = 2.4543. The table agrees with the plots, not the header. 196.158 divided by the table ratio
  2.469718 is 79.4253, which prints as 79.425, one digit from the header's 79.925; 79.925 times the ratio is 197.392,
  which is not a digit variant of 196.158. Against 79.425~196.158 the table is +1.83 % at both ends.
- Spherical aberration of the printed table at f/4 (pupil 1.0 / 0.85 / 0.7 / 0.5): wide +0.513 / +0.061 / -0.107 /
  -0.122 mm, tele -0.171 / -0.057 / +0.005 / +0.028 mm. Fig. 2C plots about +0.4 mm at the margin, a zero crossing
  near 0.84 of the aperture, and about -0.14 mm at half aperture; Fig. 2A plots about -0.16 mm at the margin and a
  curve on the axis below 0.7 of the aperture.
- Distortion of the printed table with the stop at the file's station: wide -1.42 % / -0.60 % / -0.29 % and tele
  +3.15 % / +1.59 % / +0.82 % at image heights 21.63 / 15.14 / 10.82 mm; moving the stop anywhere in d13 changes
  these by less than 0.1 percentage points. Fig. 2C plots about -1.8 % / -0.8 % / -0.4 % (curve 70 / 30 / 17 px
  from the axis at 450 dpi, 78.5 px per 2 %). Fig. 2A plots about +3.0 % at 21.63 mm and +1.5 % at 15.14 mm,
  measured from its own axis (107 / 53 px, 72.75 px per 2 %); that sheet is skewed about 0.7 degrees, and reading
  against the origin tick instead gives +3.1 % / +1.6 %. The table is 0.4 / 0.2 / 0.1 percentage points short of
  Fig. 2C.
- Telephoto ratio: (142.822 + 48.523) / f rounds to 0.97 for f between 196.3 and 198.3 mm. It is 0.969 at the plot
  label 197.5 mm, 0.975 at the header's 196.158 mm (0.97 only if truncated), and 0.963 for the table's own back
  focus and focal length.
- Misprint search: 7,444 single-value variants of the printed r, d, and n (each digit substituted, adjacent digits
  transposed, sign reversed, decimal point shifted, pairs of look-alike digits, and every exchange of two radii).
  None reproduces the stated focal lengths and back focus together. One variant brings the back focus to the print
  at both ends, exchanging the magnitudes of r21 and r22 (f 80.118 / 197.870 mm, back focus 48.530 / 48.515 mm); it
  gives marginal spherical aberration of -4.4 / -5.0 mm against the few tenths of a millimetre in Figs. 2C and 2A
  and is rejected.
- Back-solving one radius to restore fB = 48.523 at the wide end: any radius of components 3 to 5 keeps the zoom
  ratio at 2.4697 and the two image planes within 0.015 mm. Component-4 radii (r14 to r18) give f = 80.01-80.08 /
  197.59-197.78 mm, close to the plot labels; component-5 radii (r19 to r24) give 79.28-79.61 / 195.80-196.61 mm.
  A radius of components 1 or 2 changes the ratio and separates the two image planes by 1.3 to 4.8 mm. None of the
  solved radii is a digit variant of its printed value, and none is applied.
- Back-solved rear radii against the figures (image plane at each variant's own paraxial focus). r23 = 46.571
  (f 79.378 / 196.043 mm): spherical aberration wide +0.387 / +0.010 / -0.124 / -0.123 mm, tele -0.178 mm at the
  margin; distortion wide -1.88 % / -0.78 % / -0.38 %, tele +2.89 % / +1.50 %. r22 = 48.770 (f 79.466 /
  196.259 mm): wide +0.397 / +0.015 / -0.122 / -0.122 mm, tele -0.175 mm; distortion wide -1.69 % / -0.72 % /
  -0.35 %, tele +3.06 % / +1.56 %. Both lie within 0.06 % of 79.425~196.158, and in the wide margin, the zero
  crossing (near 0.84) and the distortion both lie closer to Figs. 2C and 2A than the table as printed (wide margin
  +0.513 mm, zero crossing near 0.80 of the aperture, distortion -1.42 % / +3.15 %). Solved for f = 196.158
  instead, r22 = 48.804 leaves the back focus at 48.495 mm and r23 = 46.616 at 48.554 mm, so neither radius alone
  meets f and fB together. A component-4 solve does not come closer: r18 = 41.780 gives wide margin +0.340 mm, tele
  margin -0.270 mm, and distortion -1.44 % / +3.24 %. Exchanging r22 and r23 gives f 79.956 / 197.469 mm, which
  would be labelled 80.0 / 197.5, with back focus 48.879 / 48.864 mm.
- n10 = 1.53172 and n12 = 1.53177 are printed as distinct values with the same ν = 48.9; the file keeps both.
- Aperture model: `nominalFno` 4 and `zoomApertureModel: "fixed-iris"` are unchanged. The wide-open iris is
  15.7102 mm and both stations trace f/4.00 with the iris limiting.

### Left open

- The cause of the contradiction is not isolated. The stated back focus, the header read as 79.425~196.158, and the
  spherical-aberration and distortion plots together point to the fifth component, in the region of r22 / r23, as
  the place where the table differs, but they do not single out a value: r22 and r23 fit about equally, neither
  solved radius is a digit variant of the print, and neither meets f and fB together. The plot labels 80.0 /
  197.5 mm share the zoom ratio but match the focal lengths of neither the table nor that header pair (exchanging
  r22 and r23 matches the labels but not fB). The source-errata standard (two independent kinds of
  source-internal evidence for a specific replacement) is not met; the patent has one example and its claimed
  conditions are satisfied by the printed table. A second printing of the same table, such as a counterpart
  publication of application S49-110764, would be needed to settle it.
- The header's focal-length pair disagrees with the zoom ratio of both the table and the plot labels, and the wide
  value 79.925 is the likelier misprint (79.425). Both are kept in `zoomPositions` as the patent's printed station
  labels; only the table's zoom ratio supports 79.425, which is one kind of evidence.
- Section G of `agent_docs/sd-audit-queue.md` keeps a row for this lens while the entry is unresolved, as the
  source-errata standard requires.
- The subtitle and the analysis note's embodiment line keep the label "Example 1" for the unnumbered example.
- The analysis note's stop paragraph quotes 4.000299 / 3.999701 for the authored 15.628207 mm stop radius. Those
  are paraxial values; the runtime iris is sized by a real marginal ray. Not part of this row.
