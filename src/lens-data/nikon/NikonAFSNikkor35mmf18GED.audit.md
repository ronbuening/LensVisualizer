# Source and numerical audit

Representative probable-family prescription; source literal millimetres retained.

- Native model SHA256: `40f4aa86ff0b3025ef11e3fc8861fdd53084cddd153d38f11007b28a09f3b3be`.
- Source archive SHA256: `d936835a371ac5a3087f35790c1fd7e7ebead2697c255e2718a5bc4bb3a65690`.
- Source CSV LF separator-only transport hash retained separately from original bytes.
- First-order methods agree; source/computed image-plane distinction retained.
- Geometry and all24 native format-reference fields pass at every advertised aperture; max delta0.0099676113.
- All raw clipping and0 aim-blocked engine failures remain in the evidence. No applied refocus or optical tuning.
- Type checking, corpus and compiled-viewer receipts are produced by the separate final integration run; this source writer does not assert those results. Closed 2026-11-02: that run belonged to the package; the checks below were made on the repo file.

## 2026-11-02 — Deployment validation and wording pass

Source re-read: JP 2015-118186 A, Table 1, checked against the text layer and the page images (pp. 12–13). All 21 R/d rows, 12 media, κ, A4–A10, D7 and Bf were compared with no mismatches. Equation (a) has κ inside the radical, so κ = 1 is K = 0. The patent's text never calls an element ED, anomalous or extra-low dispersion, so L22 carries `apd: "inferred"`, not `"patent"`.

Patent against model: f 34.5 / 34.517, F-number 1.86 / 1.86, Bf 38.42 / 38.4173 paraxial, TL 115.40 / 115.40, ω 32.68° / 32.677° at Y 21.60, G1 574.104 / 574.108, G2 50.927 / 50.927. Near state at D0 1019.325: paraxial β −1/29.9 against printed −1/30, defocus −0.0028 mm. Derived 0.25 m state: rigid G2 travel 8.239 mm, β −0.2402, defocus −0.0001 mm, against Nikon's 0.24×. Finite-object rays at both near states clear every rim at the fixed iris; worst axial margin 0.44 mm at surface 10.

Maker diagram: the coordinator viewed Nikon's section. ED marks the S10–S11 positive element (L22, 1.59319/67.90) and the aspherical element sits in the rear group. Example 1 fits the drawn axial spacings at 0.64 mm rms, Example 5 at 1.32 mm. Sibling note: Example 4 misprints R6 as 31.0797; 33.0797 restores f 35.000, Bf 38.876 and G1 322.745. Example 8 prints its variable gap as D8 for surface 7.

Fields changed in this pass: `subtitle`, `specs`, header comment, element `name`, `diagramLabel` and `role` (patent signs L11–L27, with L27r and L27g for the composite), `apd` and `apdNote` on L22. The analysis was reworded, and its test-run section replaced by a limits section. Optics are unchanged.

Open: Figure 1 draws lands on m2 (clear radius about 20 mm) and m14 (about 10.9 mm) that are not modeled, and they do not explain the narrower ray fans in the patent's coma plots. Both wait for the separate rim pass.
