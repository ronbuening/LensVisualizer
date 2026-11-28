# Thypoch Simera 50mm f/1.4 — audit log

## Historical audits prior to 2026-11-03

Source throughout: CN 118244463 A (application A, controlling), Example 1: Table 1a prescription and rear plate (PDF
page 7), Tables 1b–1c focus rows and aspheres (page 8), Tables 1d–1g and ¶0068–0069 / ¶0074 (page 9), claims 1–4 and
8–9 (page 2), Figure 1 (page 18, 150 dpi native). Grant CN 118244463 B repeats the surfaces, gaps and aspheres with
revised summaries (A f = 51.93 mm, B 51.76 mm); A stays controlling and B is not substituted.

**2026-10-07 Stage 1–3 dossier.** References verified at GitHub main `3920234ab22de546bcaacaee275e35bd51eed0ca`;
266 hash-verified shared payloads. Literal, unscaled d-line model: EFL 51.763364557 mm, physical Gaussian BFD from the
last powered lens 26.642661339 mm against the printed 26.90 mm rear distance (25.55 mm air + 0.85 mm CG + 0.50 mm),
track 68.790000 mm. The CG plate (nd 1.52, νd 64.2) is traced in `rearPlates` and not counted as a powered element.
D0 = 370 mm is first-surface (Table 1a object row, Table 1b, ¶0060), distinct from Thypoch's 0.45 m sensor-plane
figure. Focus published: G1 (L1–L6 with the stop) moves 9.32 mm toward the object, G2 fixed; interpolation is not a
cam law. Two-decimal source indices; glasses deliberately Unmatched after six-vendor catalog searches. Exact marginal
diagnostics (unvignetted, EFL/(2F) launch): −1.310996 mm at infinity and −2.083606 mm at 370 mm from the image plane;
marginal-minus-paraxial SA −1.053658 / −1.716111 mm — far from the source's plotted curves, kept as a fidelity limit.
Stage 2 was first held (24 near/intermediate full-iris axial probes clip at 8A; the 1.790 mm 8A→9 gap needed intrusion
0.921102 at 370 mm against the 0.90 default; no exception granted), then requalified on a physical first-cap sample:
71,720 launches over 40 field/focus groups, 38,081 OK / 28,315 clipped / 5,324 failed (1,506 cap misses in air, 3,818
TIR); 140 inverse stop targets unsupported. Near D0 admits 0.987387578 of the stop radius (area 0.974934229).
Source-first fingerprint `0ffc81c2c2d0adcaad122af09ad82b9bbe2a763418769323e1130de23985e24e`.

**2026-10-07 independent Stage 4.** READY_FOR_BATCH, INTEGRATION_PENDING for the qualified sampled model; no optics
changed. Replays against runtime `cb944bb` reproduced the native JSON/SVG; 245 verifier checks, 241 PASS and 4
integration NOT_RUN. All 3,172 cemented-interface witnesses exit the inferred 12.8 mm L5 cylinder first; minimum body
thickness 0.788780404 mm, minimum gap-policy slack 0.006076046 mm. Documentary corrections in evidence.json: asphere
locators to ¶0064–0067 / Table 1c; conditions C1–C5 to claims 1–4, 8–9 and Table 1e / ¶0074; C5 upper bound opened
(source gives νd ≥ 81.6 only); APO boilerplate removed; display name "THYPOCH SIMERA 50mm f/1.4"; analysis F5
clarified that the outgoing-axis residuals are unvignetted diagnostics (near 8A hit 11.095511963 mm against the 10.95
mm rim). CDGM coverage supplemented with H-K9L* (PDF 80), no new match. SHA-256: Stage 3 ZIP
`4f869c8fd2e165ec43df5195df20308976f5dd23cf155a919fcbef1e45cf0450`; original data
`21f077253ff81741643b7de4a9439e3700b002ffb28febae71257560165c5787`; original analysis
`6342fac466095a06f6befee2879a21356cd645098dc1ab0cba3f39c112315bc8`; final analysis
`ca278def51ebd6fa9153e73d5fd51fc0ee5873e54e7337c42fb638d6f0972480`; evidence
`0a150d08fadfdf9f9d3c54fbb1481b356a825ecc8677e683f9d6cc90d97f238e`; native result
`91e7c9977fd52717c8a73d77ca1d3ce417210b9f2a10267a15e5499fcebc86f2`; replay code
`26d1225ee9ae972be4b50d69f6f8227259a0f134dc7e49781b74e83e1758674c`; verifier
`04daa9671f5b5a402943e565f80bd36f528209e0671fd3d1936ec9277eb85175`.

**2026-10-09 deployment validation.** Page images (PDF pages 7–9): 17 rows, both aspheres and D11 match; EFL 51.763
against the printed 51.93 mm follows from the two-decimal indices. Thypoch's construction diagram matches Figure 1
(8/6, ED L2, aspherical L4, floating L1–L6). Inventors and applicant romanized; "ASPH." added to the name.

**2026-10-09 semi-diameter pass (Figure 1).** Scale 0.1080 mm/px (637 px for 68.79 mm; S1–S15 and S1–STO spans
agree; rim sags reproduce the radii to about 1 px). SDs: S1 18.5 → 18.0 (L1 square-cut; axial floor 17.85), S5
12.5 → 11.3, 7A 11.7 → 11.0, S9 12.8 → 11.0; S2, S3/S4, S10/S11, S12–S15 kept; 8A stays 10.95 because 11.0 needs
`gapSagFrac` 0.91 (sag 1.6215 of the 1.790 mm gap, fraction 0.9059; no crossing). 7A departure −0.078181 mm at
11.00 mm (was −0.105844), 8A +0.029646 mm. Coverage 100 % (22.6° to 21.65 mm); axial margins 0.03 mm at S5 and 0.08 mm
at 8A; near on-axis limit 8A alone; full-field vignetting 13 % at 7A, 23 % at S9 and 8A, kept as drawn.

**2026-10-09 integration and second review.** Glasses stay Unmatched (Abbe-exact candidates for a later reader:
M-TAF101 class for L4, H-ZLaF68N, E-F5 class, NBFD25, FCD1 / H-FK61 class). Re-measured Figure 1 (all fifteen vertices
within 1 px): S10/S11 12.8 → 12.6 so the L5/L6 doublet sits level with L7 as drawn (axial need 11.37 / 11.41). L2
`apd` "inferred" → "patent" (¶0068–0069, claim 9 name it ultra-low-dispersion); focus description rewritten. Group
brackets G1 (1–11) / G2 (12–15), doublets D1 (3–5) / D2 (9–11), designations L1–L8, aspheres 7A/8A only, and the stop
between L3 and L4 all confirmed. Open: 8A at 10.95; flat annuli on S5 / S9 rendered as tapers; L1, L2/L3, L7, L8 2–4 %
above the figure (axial floor); the 71,720-launch counts predate both SD passes.

**2026-10-29 Z-mount reinspection.** Figure 1 re-read at 600 dpi (37.040 px/mm); S5 and S9 optical caps kept at 11.3
and 11.0 mm with opaque lands out to 15.4 and 12.6 mm; cemented interfaces 4 and 10 unchanged. `apd: "patent"`
removed: ¶0068–0069 state ED glass, not anomalous partial dispersion. All eight media and CG (1.52/64.2) stay
Unmatched; catalog curves are proxies only (0/8 resolved).

## 2026-11-03 — Image-plane consistency (re-solve)

Source: local `patents/CN118244463A.pdf`, Example 1 Tables 1a/1b (PDF pages 7–8): nd printed to two decimals, S15
d = 25.55 mm before the 0.85 mm CG and 0.50 mm to IMAGE, D0 = 370 mm (first surface), D11 = 0.39 / 9.71 mm.
LENS_DATA_SPEC § Image-Plane Consistency: source rounding, so the air gaps are re-solved, back focus first; the
Ksana 21mm (same source family) is the precedent.

| Field | Before | After | Justification |
|---|---|---|---|
| S15 `d` (air before CG) | 25.55 | 25.292661 | Paraxial focus at infinity; the plane sat 0.257339 mm in front of it (104 depths at F1.45) |
| `gaps["11"]` near row | 9.71 | 9.585506 | G1 re-solved to focus the certified 370 mm (first-surface) object after the back-focus change |
| `focus.closeFocusM` | 0.44811 | 0.4477 | Object-to-image distance of the re-solved near row (447.728 mm) |
| `catalog.closeFocusM.marketing` | — | 0.45 | Thypoch's sensor-plane figure, distinct from the model value |
| conjugate `source`, `focus.description` | residual retained | re-solved values quoted | The certified 370 mm distance is unchanged |

- Residual: infinity −0.257339 → 0 mm; near row now focuses 370.00 mm from the first vertex (was 355.75 mm).
- Travel: G1 9.32 → 9.195506 mm. EFL unchanged at 51.763 mm (A prints 51.93, B 51.76). Track 68.79 → 68.532661 mm at
  infinity and 78.11 → 77.728167 mm at the near state; TTL/f 1.328932 → 1.323961.
- Close focus: 0.44811 → 0.4477 m; the label was 0.4339 m before.
- Evidence for the class: two-decimal indices (Table 1a); the real-ray axial best focus (−0.346 mm) lay beyond paraxial
  focus, so the printed plane was not a best-focus plane. Re-solving the infinity row by back focus keeps D11 at the
  printed 0.39 mm; moving G1 instead would have left 0.099 mm of air at S11/S12.
- Rim clearance: D11 0.390 / 9.586 mm, smallest at the vertex; the CG gap only widens toward S15's rim.

Follow-ups:

- None.
