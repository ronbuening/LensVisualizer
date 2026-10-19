# Audit Log — VILTROX AF 50mm f/1.4 PRO FE

Patent: CN 120871380 A (`patents/CN120871380A.pdf`, 31 pp.), Example 1, Tables 1–4 on PDF pp. 13–16; Figure 1 on p. 24.

## 2026-10-19 — Deployment validation and wording pass

Source re-read from page images (the PDF has no text layer): all 29 rows of Table 1 (R, d, nd, νd), the plate
S28/S29, Table 2 (D1/D2 at infinity and 0.32 m) and the eight S17/S18 coefficients of Tables 3–4. Front page:
publication 2025-10-31, application 202410457423.X filed 2024-04-16, applicant Shenzhen Viltrox Technology Co., Ltd.,
inventors Liu Ruijun and Chen Baofeng. These match the data file.

The validation found that the file is a fit, not a transcription. All 15 nd/νd pairs, K = 0, D1 = 13.125 mm, the
2.5 mm plate, the flat surfaces, R7 and R19 match the print. 23 of the 25 finite radii differ by 0.06–10.0 %
(largest R12 20.258 → 22.284, R24 −89.342 → −96.970, R18 −50.444 → −54.660, R27 −48.364 → −44.515, R2 55.866 →
60.027 mm). Seven intervals differ (d2 +0.50, d12 −0.50, d14 +0.09, d19 +0.56, D2 −0.65, d25 +0.29, d27 −0.29 mm),
the final air is 0.996 mm (printed 1.000), and none of the eight asphere terms keeps its printed mantissa.

Why the print cannot be used literally: Table 1 traced paraxially gives EFL 50.55 mm (stated 51.1) with focus
2.87 mm behind the printed image plane, and 45.74 mm (stated 45.9) with the near gaps. The printed coefficients
(S17 A8 −2.598e−2, S18 A4 +2.934e−2) give sags of metres at the rim. A search over every single-digit change, sign
flip and adjacent-digit transposition in Table 1 found no one-cell repair (the only near hit, d8 6.279 → 9.279,
lengthens the track by 3 mm and still misses focus by 0.44 mm). Examples 2 and 3 give paraxial EFL 38.6 mm and
80.1 mm against stated 50.5 mm, so they are no alternative.

Patent vs model, infinity: EFL 51.1 / 51.10 mm; F/1.47 (paraxial) / f/1.48 (exact marginal, iris radius 14.52 mm);
half-field 23.3° / 23.06°; track 125.3 / 125.30 mm. Close focus is not modelled. audit:surface OK, image circle not
undersized, field coverage 100 % at the full-frame corner.

Maker diagram (user manual construction diagram, viltrox.com specifications): 15 elements in 11 groups with 1
aspherical, 3 ED and 8 high-refractive elements. The diagram's ED positions are L06, L08 and L11 and its aspherical
element is L10, matching Example 1's topology, cemented pairs and stop position. The owner accepted the fitted
prescription for deployment as a one-off exception, not a new standard for patent-sourced files, because the
example's topology matches Viltrox's diagram.

Fields changed in this pass: header comment rewritten in plain terms with the inconsistency findings; `subtitle`;
`specs` (design focal length, design F-number and aspherical-surface lines added; process lines removed); element
`label`s shortened to "Element N"; `role` wording; `apd: "inferred"` with `apdNote` on L06, L08 and L11;
`focus.description`; `rearPlates[0].source` wording. The analysis lost its process material (archive links,
hashes, replay and test counts, internal fitting vocabulary) and gained the inconsistency findings; its
verification section became "Model Scope and Limitations". No optical value changed.

Open: near focus is not modelled; the printed G2 travel (7.859 mm) does not give a usable near state on the fitted
radii, and the patent's 0.32 m reference differs from the marketed 0.45 m.
Open: the Nikon Z version (announced February 2026) is not in `lensMounts`.
