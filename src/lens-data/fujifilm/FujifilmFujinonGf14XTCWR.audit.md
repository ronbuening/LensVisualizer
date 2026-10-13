# Audit Log — FUJIFILM FUJINON TELECONVERTER GF1.4X TC WR

## 2026-10-04 — Adapted from the reviewed master-plus-converter package

- Source: US 2021/0003819 A1, Example 1 (Tetsuya Ori / Fujifilm Corporation; filed 14 September 2020 as a division of
  application 16/112,420, priority JP 2017-177302 of 15 September 2017, published 7 January 2021). The package modeled
  the complete published system, master lens ML plus rear converter RCL, as one lens.
- Table numbering: the text calls the master and combined lens data Tables 1 and 3 (paragraphs 0041–0050), but the
  pages caption them TABLE 2 and TABLE 4, and the specification tables carry no caption. The rows identify the data.
- Kept: the converter only, rows 28–37 of the combined lens data, which paragraph 0047 names as the converter,
  relabelled 1–10. The package's element names L17–L23 are replaced by the patent's designations RL1a–RL3b in groups
  RG1–RG3 (FIG. 2, paragraphs 0029–0032). The plane member behind the converter is optical member PP (paragraph
  0039), listed in `rearPlates`.
- Dropped: master rows 1–27 (the 16 elements L1a–L1p and the stop, row 15), `nominalFno`, `projection`, the focus and
  f-stop fields and the other lens-only fields. The host lens supplies them when the converter is mounted.
- Geometry: master back focus in air 68.8437 + 3.2 / 1.5168 = 70.9534 mm (the master specification prints 70.95); the
  combined-table gap d27 = 16.4997 mm gives `masterImageDistanceMm` 54.4537. The last gap, 38.9201 mm, is the
  physical distance to PP (3.2 mm, nd 1.5168, touching the image plane): 41.0298 mm in air (the patent prints 41.03).
- Semi-diameters are the package's inferred rims, not source values; the patent publishes none. One rim per cemented
  group, 10% over the envelope of ray bundles traced through the patent's master and converter at the f/4.12 master
  stop across the published field. RG1 and RG2 were then cut back from 21.44 and 22.81 mm to 21.16 and 21.17 mm,
  where the biconvex RL1b and RL2b keep a 0.06 mm edge. The patent figures corroborate topology only; the rims are
  not figure-audited.
- Glass review: the patent prints nd/νd only and the package delivered `Unmatched (…)` labels. Each printed pair
  equals a catalog entry to the printed precision, so all seven are relabelled `<glass> (<vendor> coordinate match;
  supplier unconfirmed)` and resolve to catalog Sellmeier data: Ohara S-LAL8 (1.71299 / 53.87), S-TIM8 (1.59551 /
  39.24), S-LAH97 (1.75500 / 52.32) and S-NBH5 (1.65412 / 39.68); Hoya E-F1 (1.62588 / 35.74; Ohara S-TIM1 is 35.70)
  and E-FDS2 (2.00272 / 19.32); and CDGM H-ZLaF68N (1.88300 / 39.22; NHG H-ZLaF68L has the same coordinates). Ohara
  S-YGH51 and Hoya TAC6L share S-LAH97's coordinates; the current Ohara name is kept.
- Element roles restate paragraphs 0029–0032 and 0037 and the first-order group powers. No aberration contribution is
  assigned to a single element beyond what the patent states.
- Source discrepancies carried without correction: Table 11 prints f1/fC = −1.303, f3/fC = −1.019 and ν1 − ν2 = 14.7
  for Example 1, while the printed rows give −1.3106, −1.0161 and 14.63 (f2/fC = 0.342 agrees). All four conditional
  expressions are still satisfied, and the printed rows are kept.
- Production correlation is the package's and is not manufacturer-confirmed: 7 elements in 3 cemented groups and a
  computed 1.4001× magnification, against the production converter's 7 / 3 and 1.4×.
- Fit: `minHostFno: 4`, because the rims are sized for the f/4.12 master beam. Fujifilm's compatibility chart lists
  the GF 250mm f/4, GF 500mm f/5.6 and GF 100-200mm f/5.6 for this converter (fujifilm-x.com support pages, read
  2026-10-04); only the GF 250mm f/4 declares converter support in the catalog so far.
- On the catalog host `fujifilm-gf250mm-f4-r-lm-ois-wr`: that file is transcribed from a different publication,
  US 2019/0094496 A1 Example 1. Its 27 surfaces match this patent's master rows to the printed precision, but its
  back focus in air is 70.9527 mm, so the junction gap is 16.4990 mm against the patent's 16.4997. Focal length
  242.544 → 339.583 mm against the printed 339.58, f/5.768 against 5.77, and the host's stop radius unchanged.

## 2026-10-04 — Additional hosts

- Fujifilm's compatibility chart for this converter (fujifilm-x.com support pages, read 2026-10-04) lists the GF
  100-200mm f/5.6 and GF 500mm f/5.6 alongside the GF 250mm f/4; both now declare `acceptsTeleconverters`.
- GF 100-200mm: junction gap 6.17 mm, 142.4 / 213.6 / 284.6 mm at f/7.84. GF 500mm: junction 11.87 mm, 679.7 mm
  f/7.98.
- On both hosts the stop radius is unchanged, the corner chief ray clears, and more of the axial bundle reaches the
  format corner than on the bare lens. The converter's rims are the package's values, unchanged.
