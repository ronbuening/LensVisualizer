# Lens Patent — Olympus M.Zuiko Digital ED 17mm F1.2 PRO — Stage 4 Audit

## Historical audits prior to 2026-11-03

Squashed on 2026-11-03 from the Stage 4 package audit and three 2026-10-13 passes. The full per-ensemble ray tables,
the raw-failure list and the claim map live in the Stage 4 archive's `results.json`; the facts they support are kept
below.

### Stage 4 package (2026-10-12; integrated 2026-10-13)

- Source: `patents/US10073255B2.pdf` (3,349,729 bytes, SHA256 `b25983af5ce438f82a64ebd2117ab1bb29e00b0cbb52a3ab1f0ae5e513d69a05`),
  Example 4. PDF p. 30 (printed cols. 23–24): prescription, three focus states, six aspheres, rounded unit focal
  lengths and condition table; p. 31 (col. 25): higher-precision parameters; p. 28 (col. 19): sag equation; pp. 27–28
  (cols. 18–19): architecture and focus; p. 6 FIG. 4: section; p. 10 FIG. 8: aberration plots; p. 1: attribution.
- Package identities as delivered (not the current files): Stage4-R1 native SHA256
  `77f7d2d5d1e334070cbedc0daacd9cbfb5ff5fa9d682e191be3eabd51cf9314b`, analysis
  `68b24b95995099f977e77c1c85a694c2e8ef16f43a3a9f6341bfc571eb570408`; Stage 3 native
  `c91ec373b5029a1d6ebad1c68635983a76352d67b26f92d3b420a6940cd48ffb`, analysis
  `aae8850be12af6bfe7e3ae9e357774191e32833901c9e4793685b5384ec7c797`; frozen PassA ZIP
  `dd90a229d918178b4966cae3d2dfd9d61d5f002120819f36f9df04e9baad71c5`; neutral source ZIP
  `c07df138f7ca023d196934bdd18e5a20055433f7f5dc0991f1a40ee714762fa7`; source card
  `0415f4135e0fbf10128c01bc21c946d9539cb559813949965574521f23aa91f3`; runtime pin `33ec433d56ed0044db432d6b0ff0395554d14696`.
  Two-pass review: an independent source-first baseline was frozen before the candidate was opened.
- Conventions: z imageward, R centre imageward, unscaled mm, d-line indices; standard conic (1 + K under the root),
  native K = patent k, no scaling. 15 elements / 11 groups; aspheres on L2, L11, L12; cemented L3–4, L5–6, L9–10,
  L13–14; STO is the printed 28.98 mm iris. Camera plate C traced as a physical rear plate (s27 air 11.00, s28 4.11 at
  1.51633 / 64.14, s29 2.05); air-equivalent 15.760492 mm is a diagnostic only. 236 source values re-entered and agree.
- Semi-diameters from FIG. 4 at 11.80 px/mm: source-supported corrections s2 and s3A 14.0 → 14.3, s4A 12.0 → 12.2,
  s9 and s10 12.3 → 12.7, s11 12.8 → 13.8; the rest retained within ±0.3 mm reading uncertainty (±0.5 at s7/s8,
  s19/s20). An earlier s2/s3 reduction to 14.0 made only to pass the sag margin was rejected.
- Gap policy: shared-band fraction 2→3A 0.960236 (clearance 0.249 mm), 4A→5 0.916, 7→8 0.885; all physical
  clearances positive and render trim 0. A conditional gapSagFrac of 0.961 was adopted after 0.90/0.95/0.96 failed;
  no rim-angle, conic-domain, edge or render waiver. Maximum rim angle 64.149796° (limit 64.158067°).
- First-order: EFL 16.671803 / 16.646492 / 16.397181 mm (INF / CL1 / CL2 as printed); air BFD 15.782773 mm,
  physical-plate paraxial BFD 17.182282 mm against the 17.16 mm printed geometry. Group f −36.714153 / +25.714485 /
  −35.498888 / +33.103414 mm, G12 15.531123 mm; Petzval sum +0.003794419 mm⁻¹. Air BFD/EFL 0.9467, plate BFD/EFL
  1.0306, track/EFL 6.297 (neither telephoto nor an unqualified retrofocus).
- F-number: Gaussian F/1.148868, exact axial-ray F/1.239908 (adopted; reproduces the printed 1.24 within 0.0005),
  image-space 1/(2NA) F/1.238996; CL1/CL2 image NA give 1.241191 / 1.253086.
- Source conflicts kept: 21 strict comparison failures (p. 31 precision, field definitions); CL2 Gaussian
  magnification −0.144600 against −0.15; the printed 67.55° / 10.81 mm pair (chief ray gives 10.489490 mm; 10.81 mm
  needs 69.358847°; FIG. 8C about −6 % distortion); condition (4) prints 94.93 against S17 νd 95.10; d22 + d25 =
  9.55 / 9.55 / 9.56 mm (G3 travel 2.67 by d22, 2.66 by d25). FIG. 8 rows map INF / CL1 / CL2 top to bottom.
- Glass: 3,171 raw catalog rows re-matched across six makers; L3 relabelled from Unmatched to the TAFD55 class. No
  patent nC/nF/ng/ΔPgF; no supplier, melt or APO claim. Manufacturer sources corroborate 15/11, 17 mm f/1.2, Micro
  Four Thirds, 0.2 m, 0.15×, ED-DSA, announcement 2017-10-26 and January 2018 launch; marketed 65° field.
- Ray execution at seven focus states (0, 0.108888, 0.217776, 0.4, 0.6, 0.8, 1): full-iris axial fans 101/101 at every
  state, required chiefs to 10.82 mm transmit, render trim 0. Diagnostic ensembles: 5,791 attempted = 5,648
  constructed + 143 unsolved aims; constructed = 4,218 transmitted + 1,399 clipped + 31 failed (23 clear-aperture
  exclusions, 8 TIR, independently retraced; maximum residual 4.67e−13 mm). Labels, source distances and adaptive
  conjugates kept distinct (CL1 adaptive 911.635 mm against the 918.330 mm label).

### 2026-10-13 — Semi-diameter pass against the patent figure

FIG. 4 (PDF p. 6) at 300 dpi, 12.272 px/mm from vertex crossings (20 vertices within 1.4 px). Changed: s5 and s6
12.1 → 12.4 (square-cut L3 cap), s20A 14.2 → 13.3 (curve end at the annulus), s24 10.6 → 10.9 (square-cut L13),
s25 10.6 → 9.5 (curve end at the annulus). Retained: s1 18.4, s2/s3A 14.3, s4A 12.2 (reads 12.35; 12.4 would need a
0.966 allowance), s7/s8 9.8, s9/s10 12.7, s11/s12 13.8, s14/s15 16.2, s16 15.5, s17/s18 15.1, s19A 14.2, s21A/s22A
13.6, s23 10.9, s26/s27 11.6, iris 14.49. Smallest on-axis margin 0.234 mm at 21A in CL2; 101/101 axial rays at all
states. The off-axis bundle narrows by up to 3.8 points of stop diameter at infinity and 4.9 at CL2; that vignetting
is supported by the drawing and kept. EFL, f-number and half field (37.063°) unchanged.

### 2026-10-13 — Glass labels, key, metadata and wording pass

All 117 prescription values re-read against PDF p. 30 with no mismatch; p. 31 parameters (f 16.671, f1 −36.722,
f2 25.717, f12 15.529, Dm 7.569, St 28.980, DA 31.6987, DL 56.1414) match the analysis. One catalog glass per element,
each within 2 × 10⁻⁶ in nd and 0.01 in νd: L1 S-FSL5, L2/L12 FCD1, L3 TAFD55, L4 S-TIM5, L5 S-NBH52, L6/L8/L15 FCD515,
L7 S-LAM55, L9 S-TIH53, L10 FCD100, L11 S-LAM60, L13 S-NBH57, L14 S-TIM39, plate S-BSL7. Key set to
`olympus-mzuiko-digital-ed-17mm-f12-pro`. OM SYSTEM's UK page lists 1 SED, 3 ED, 1 ED-DSA, 1 aspherical, 1 Super HR,
9 blades and 0.2 m: `apd: "inferred"` on L10, L6, L8, L15, L2 and L12; `apertureBlades: 9`, `maxFstop: 16`.

### 2026-10-13 — Second review: diagram, labels and movement

Independent FIG. 4 measurement (12.267 px/mm, worst vertex residual 0.06 mm) confirms the first pass. s20A
13.3 → 14.2 so L11 draws as its square 14.20 mm block (20A→21A band 0.380880, 1.647 mm clearance; a 241 × 241 ×
25-field sweep transmits 349,720 rays either way). s25 stays at its 9.5 mm curve end because it is a working rim
(squaring L14 would raise transmission by up to 4.7 points). s7/s8 stay 9.8 against a drawn 10.1 because widening a
rim for vignetting is not allowed. L1, L2, L4, L5 cannot reach their caps (validator rejects), so they keep slanted
edges. L10 and L12 `apdNote` now cite condition (4). Labels, groups (G1 1–12, G2 14–22, G3 23–25, G4 26–27) and
cemented brackets D1–D4 checked. FIG. 8 astigmatism and distortion match the traced states within about 0.003 mm and
0.15 %; FIG. 8C rules out the −3.05 % the printed field pair needs, and Example 3 shows the same f·tan ω = 11.15 mm
relation, so the printed 2ω follows a summary-table convention. Open limitations: slanted edges on L1, L2, L4, L5,
L14; the 20A curve runs 0.9 mm past its drawn end; cemented cap steps cannot be drawn.

## 2026-11-03 — Image-plane consistency (re-solve)

US 10,073,255 B2 Example 4 (PDF p. 30) prints two-decimal gaps that leave the image plane 0.022282 mm before
paraxial focus at infinity (12.3 depths at F/1.24). The CL1 and CL2 planes sit 0.018467 and 0.014780 mm before
paraxial focus. No back focus is printed to contradict, and the file matches the table. The real-ray axial best focus
lay +0.018 mm beyond the plane, so it was not a best-focus plane. This is source rounding, re-solved under
LENS_DATA_SPEC Image-Plane Consistency: back focus first, then the focus group at the certified distances.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| S27 `d` (air ahead of plate C) | 11.00 | 11.022282 | Infinity paraxial focus; fixed gap, carried to CL1/CL2 |
| d22 (CL1 / CL2) | 2.34 / 4.65 | 2.335907 / 4.641371 | G3 re-solved at d0 = 813.34 / 94.99 mm (first surface) |
| d25 (CL1 / CL2) | 7.21 / 4.91 | 7.214093 / 4.918629 | Same G3 move, opposite sign |
| `focus.closeFocusM` | 0.19999 | 0.2 | CL2 object to image 200.012 mm |
| `focus.keyframes[1]` | 0.21777574510252307 | 0.217781 | 0.2 / 0.918352 (CL1 object to image) |

- Residual: INF +0.022282 → 0, CL1 +0.018467 → 0, CL2 +0.014780 → 0 mm. G3 travel 2.67 / 2.66 → 2.661371 / 2.651371 mm
  (d22 / d25); the printed 0.01 mm difference is kept. Track 104.99 / 104.99 / 105.00 → 105.012282 / 105.012282 /
  105.022282 mm.
- EFL: INF 16.671803 mm unchanged; CL1 16.646492 → 16.646802, CL2 16.397181 → 16.398399 mm. Gaussian magnification
  −0.020001 / −0.144608 at CL1 / CL2.
- Close focus 0.19999 → 0.2 m; the certified 813.34 and 94.99 mm conjugates keep their distances, and their
  `source` notes now say the gaps are re-solved. The CL2 `unresolved` erratum (f, magnification, gap sum) stays,
  reworded for the re-solved gaps.
- Minimum clearance of the moved gaps: d22 1.980 / 2.336 / 4.641 mm and d25 6.702 / 6.346 / 4.051 mm at INF / CL1 / CL2.
  Aperture, image-circle, field-coverage and surface-probe audits are unchanged.

Follow-ups: none for the image plane. The field/image-height convention and the CL2 magnification remain unresolved
errata.
