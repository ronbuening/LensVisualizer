## 2026-11-02 — Deployment validation and cleanup

Patent re-read: US 7,715,116 B2, Embodiment 7, Table 7, read from the page images. All 14 r, 13 d plus fB, 8 Nd, 8 ν, the 3.500 mm stop statement and the three printed spacing rows were checked, with no mismatches. There are no aspheres. Scale factor 1. Table 8 prints condition (6) as 81.2 for every embodiment while every table prints 81.6 at element 5; the file keeps the table value. Figures 20A and 20B label FNO 1:4.12 against the table's 1:4.1.

Patent vs model: f 291.00 / 290.9907; FNO 4.1 / 4.100; fB 56.93 / 56.9329; length 228.21 / 228.21; W 4.2° / 4.21° at y = 21.64. Table 8 traces to 1.594, 2.742, −5.212, −0.133 against printed 1.59, 2.74, −5.21, −0.13. The −0.0093 mm EFL difference is table rounding: d7 alone spans ±0.083 mm of EFL, the combined rounding spread is ±0.125 mm root-sum-square, and d7 = 2.2974 with d4 = 2.2343 (both rounding to print) give 291.0008 / 56.9306. All seven embodiments differ from their printed f, by −0.063 to +0.041 mm. A single-slip search over 1705 variants found five that fit f, fB and Table 8; none is unique or needed.

Near state: printed gaps, with d9 + d12 = 63.96 mm in all three rows. Traced object to image 1400.03 mm against Ricoh's 1.4 m; m = −0.2445 against printed −0.25 and Ricoh's 0.24×. The patent prints no object distance, so no conjugate is certified. A stop fixed with group 2 gives a closest-focus F-number of 4.67 against printed FE 4.63; a stop moving with group 3 gives 3.76.

Product fit: Embodiments 1–5 measure about 235 mm, putting surface 1 about 190 mm ahead of the K flange against a 184 mm barrel, and trace to 0.250–0.255×. Embodiments 6 and 7 measure 228.74 and 228.21 mm and trace to 0.2436× and 0.2445×. Embodiments 6 and 7 are the fitting family; no retail figure separates them. Embodiment 6's glass pairs all match catalog rows; four of Embodiment 7's do not.

Diagram comparison: Ricoh's construction drawing (ricoh-imaging.co.jp/japan/products/lens/img/img-smcpentax-das300_02_en.gif) shows three front elements, a doublet, the iris, a doublet and a rear meniscus, with the second element and a member of the first doublet shaded. That matches the model. Figure 19 places the stop 3.52 mm in front of surface 10 against the printed 3.500, and the semi-diameters sit 1.6–2.6 % above the figure's heights. Figure 19 draws the stop opening at about 16.7 mm; the file's derived radius is 16.06 mm, a real axial beam of about F/4.22.

Fields changed: `closeFocusM` 1e15 → 1.4, `focus.published` [] → [1], `gaps` for STO and 12, `aperture.fStops` and `maxFNumber` through f/32; then header comment, `subtitle`, `catalog.specs`, `focus.description`, element `role` and `focalLengthMm`, `apd` and `apdNote` on elements 2 and 5, `cemented` D1/D2 → C1/C2, `groups`, `doublets`. The analysis lost the package's run records and private links, and gained the embodiment comparison, the rounding explanation and the near-state figures.

Open: whether production follows Embodiment 6 or Embodiment 7 is not established.

Open: the printed −0.02 row is not authored, because its keyframe would need a computed distance; the spec prefers keeping every published row.

Open: printed m at closest focus (−0.25) does not trace from the printed gaps (−0.2445); Embodiment 6 shows the same difference (−0.26 against −0.2436).
