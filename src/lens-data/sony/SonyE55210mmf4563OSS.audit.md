# Sony E 55-210mm f/4.5-6.3 OSS audit

- Source: USPTO US 8,837,056 B2 and US 2013/0033621 A1; Example 1 checked in 220 assertions over 121 numerical fields. Factory identity and physical scale are unproved; Example 3 was kept as the alternative.
- The inferred 55x scale applies to every length and An/55^(n−1). No endpoint stretching, source correction, glass substitution or image-plane optimization.
- The first build carried an invalid Sony mount spelling and a too-wide figure rim; the mount was corrected to the canonical id sony-fe. A 7.75 mm G2 rim clipped the stated axial tele beam; exact tracing required 7.770308882 mm, which motivated the 7.78 mm rim with the default 0.90 gap-sag allowance.
- The printed image planes and weak tele MTF were kept. The inferred G4-only 65x33 cam has no published finite conjugate; near-infinity focus labels and virtual conjugates were documented. No finite MTF claim.
- Geometry was sampled at 4,257 states and 3,660 pupil requests; partial-pupil failures were recorded. At first authoring, mixed spectra were unavailable for lack of partial dispersion (closed 2026-10-31 by the catalog labels). Convergence was not treated as a quality pass.
- First authoring ran isolated type, format and rebuild checks only; whole-project checks belong to the release branch.

## 2026-10-31 — Deployment validation and fix pass

Source re-read: 23 surfaces, 87 static cells (R, d, nd, νd, K, A4–A10), 15 variable gaps and 6 f/Fno cells read from the grant page images; 0 mismatches, and the application's tables are identical. The 55x scale is exact on R and d, and An matches 55^(1−n) to 1e-12.

Patent vs model at 55x: EFL 55 / 105.05 / 199.1 vs 54.97 / 104.82 / 198.67 mm (−0.33% at tele against Table 10's 3.624). Printed BF 17.60 / 27.885 / 51.095 vs paraxial 17.637 / 27.914 / 50.701 mm. TL 120.505 / 137.335 / 164.56 mm. Table 10's f1, f2, β2 and f51/f5 reproduce. LSA peaks at 0.25 mm and matches Figs. 5A–7A, so the repeated ±2.78726E+05 C10 values stand as printed.

The +0.394 mm tele plane is 1.03 sigma of print rounding (sigma 0.383 mm, 20,000-trial Monte Carlo of the printed digits), so it is not a misprint. LENS_DATA_SPEC keeps the authored plane. Photopic on-axis MTF at 40 lp/mm, wide open, grid 128: 0.689 / 0.641 / 0.055 on the printed planes; 0.809 / 0.777 / 0.730 at best axial focus (shifts −0.058, −0.084, −0.388 mm).

Stale numbers replaced: working f/# 4.628 / 5.389 / 6.503 and 4.660 / 5.548 / 7.111 became 4.65 / 5.42 / 6.56 at infinity and 4.68 / 5.58 / 7.14 at 1 m, using iris radii 6.9732 / 7.0968 / 7.7333 mm from the one-stop rule. The first-authoring MTF figures were replaced, because the spectra changed with the catalog labels.

Source inconsistencies: Fig. 6 prints ω 7.34° against Table 3's 7.43°, and 7.34° is right by trace (image heights 13.906 / 13.899 / 13.915 mm at 55x). Fig. 5A prints Fno 4.84 against Table 3's 4.64; the table is kept on stop-ratio evidence (1.109 against Example 3's 1.105; 1.157 for 4.84).

Clearance: audit:surface OK, field coverage 65/65 at ≥99%, 0 CLIPS-AXIAL (S6 7.77 vs rim 7.78). The default clearap BLOCKS-CHIEF flags on S1–5, 19A and 20A are ghost roots of its launch scan: they clear with a 25 mm scan limit, and an independent trace gives a maximum chief height of 15.01 mm at S1.

Maker comparison: Sony publishes 13 elements in 9 groups, two ED and two aspherical, 1 m, 0.225x. Its construction diagram (sony.jp y_SEL55210_comosition.jpg) colors L2 and L8 as ED and L10 and L11 as aspherical, the positions Example 1 carries. Tele magnification at the inferred 1 m is 0.219. Example 1 is the best of the three examples; Example 2 has 14 elements and F/7.30, and Example 3 has a third 81.61 element and 3.46x. No Tamron assignment or better patent was found, though J-PlatPat was not searched.

Fields changed: `patentNumber`, `name`, `subtitle`, `specs`, element `label`, `role`, `glass`, `apd`/`apdNote` on L2 and L8, `cemented` and `doublets` text D1–D4 to C1–C4, `focus.description`, the header comment and the analysis wording. Glass resolved 0/13 before, 13/13 after; all pairs in all three examples sit on catalog rows, so none looks optimizer-floated, and L10 and L11 show no index drop from their moulding-glass rows. Optics unchanged: `built.mjs` and `probe.mjs` output is identical before and after.
