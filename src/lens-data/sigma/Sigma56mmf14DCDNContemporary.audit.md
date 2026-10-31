# Audit log — Sigma 56mm f/1.4 DC DN | Contemporary (C018)

## Initial build

- Selected JP 2020-030383 A, Numerical Example 1, a related design rather than an exact factory match. Example 7 kept as the alternative. The grant PDF was not inspected.
- The 19 patent surfaces map to 17 lens surfaces plus the 2 mm rear plate and 1 mm of back air. All 10 elements and the printed K and A4–A12 terms are kept.
- Printed first-surface object distance 425.0723 mm. Image planes and the 0.0001 mm gap rounding unchanged.
- Square rims inferred from Figure 1, default gap allowance, no stop override.
- The inferred 65-position focus path keeps both printed states. Distance labels near infinity are approximate, and no intermediate finite conjugate is claimed.
- An early `sony-e` mount id was invalid and was replaced with `sony-fe`. The mount list comes from Sigma's current product page and does not confirm identical prescriptions or camera stacks across mounts.
- The rounded infinity spacing focuses at about 15.7 km rather than at infinity. No focus pole lies in range, and the relative distance-label error near infinity is not uniform.

## 2026-10-31 — Deployment validation and fix pass

Source re-read against the page images of pp. 15–16: 52 surface and glass cells, 18 aspheric terms, the two variable gaps and BF at both states, and the rear plate, with no mismatches. Figure 1 measures as Example 1 at 10.17 px/mm, with element shapes, cementing and stop position agreeing with the file.

First-order, patent against model: EFL 53.95 / 53.948 mm, near EFL 52.16 / 52.160 mm, BF 1.0000 / 0.9998 mm, lens length 74.93 / 74.928 mm. A 14.31° chief ray lands at Y = 14.20 mm, and 12.52° does at the 500 mm state. Group focal lengths G1 43.50 / 43.503, G2 −37.32 / −37.325, G3 42.42 / 42.418, G3a 102.19 / 102.186, G3b 60.65 / 60.647 mm. Conditions 1, 2, 4, 5, 6, 8 and 9 reproduce. On-axis LSA at the full pupil is −0.015 mm, so no misprint is indicated. The object-to-image distance of 500.0002 mm is d0 plus lens length and stands for Sigma's 50 cm; `closeFocusM` keeps that value.

Stop: the engine gives 12.1357 mm from paraxial EPD = 36.95 mm. Working f/# is 1.533 at infinity and 1.697 at the 500 mm state, paraxial working 1.460 and 1.629, against 1.46 and 1.62 printed. A 12.808 mm stop gives 1.4604 and 1.6150; Figure 1 draws about 12.8 mm and Sigma's drawing about 12.6 mm. Under the one-stop-rule decisions of 2026-10-27 and 2026-10-20 no override was added and the design f-number is unchanged. The earlier 12.808 mm iris and real-ray F-number figures were replaced, and the analysis explains the difference.

Maker comparison: Sigma lists 10 elements in 6 groups, 50 cm, 1:7.4, 9 blades, F16, and seven mounts, all matching the file's ids. The drawing marks element 2 SLD and aspherical and element 10 aspherical, matching L12 and L35. Fitted to axial crossings and surface curves on the drawing, Example 1 has rim-sag RMS 0.27 mm and thickness RMS 0.70 mm, Example 7 0.37 and 0.66, Example 6 0.91 and 2.22. Example 1 and Example 7 tie. The drawing's L32 is about 1.5 mm thicker and its L11–L12 gap about 1.4 mm narrower than either, so the file stays a related design. Lens length plus flange is about 77.5 mm on all seven mounts, which Examples 4, 5 and 6 cannot fit.

Glass: resolved elements went from 0 to 10. Every pair meets the catalog rule (largest residual Δνd 0.01, FF5) and recurs in at least three of the seven examples. Printed PgF pins FDS18 (0.6546), M-FCD500 (0.5403) and TAC8 (0.5453, against S-LAL18 0.5445). M-FCD500 and M-TAF105 print the catalog index, so no moulding index drop applies. The rear plate stays on its Abbe estimate.

dPgF: moved to the engine's normal line rather than dropped, because the patent prints these PgF values and an authored value sets the g line. L11 0.038464 → 0.040842, L12 0.020924 → 0.016966, L14 −0.004694 → −0.006645. Paraxial g-line focus shift from the d line went from −0.035 to +0.007 mm with the relabel. `apd` was removed from L11 and L14, and L12 changed to `"inferred"` for Sigma's SLD mark.

Fields changed: header, `subtitle`, `specs`, element `label`, `role`, `glass`, `dPgF`, `apd`, `apdNote`, `cemented` and `doublets` text (D1, T1, D2 → C1, C2, C3), `focus.description`, conjugate and plate `source` strings. No R, d, nd, νd, sd, asphere, gap, f-number or mount value changed. The analysis MTF figures were recomputed at the 12.14 mm stop with the new glass labels.

Open: JP 7094550 B2 has not been compared with the application. Sigma's drawing shows larger triplet rims than Figure 1; the file follows the patent figure.
