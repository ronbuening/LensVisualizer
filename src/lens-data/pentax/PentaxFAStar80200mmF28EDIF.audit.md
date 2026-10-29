# PENTAX SMC FA* 80-200mm f/2.8 ED [IF]: audit log

The source package carried no audit log; this file starts at deployment validation.

## 2026-10-29 — Deployment validation and wording pass

- Source: US 5,572,276 A (Jun Hirakawa, Asahi Kogaku Kogyo K.K.), filed 1994-11-10, granted 1996-11-05, JP priority
  5-283617 (1993-11-12). First Embodiment, Table 1, col. 5–6 (PDF p. 19); Fig. 1 (PDF pp. 1–2); Table 6 (PDF p. 21).
  Local copy: `patents/US5572276.pdf` (22 pages, scanned; no text layer).
- Transcription: all 29 surfaces (R, d, nd, νd), the three variable gaps D8 / D15 / D20 in three states and
  fs = 47.47 were checked against the page image; zero mismatches. Cemented interfaces S12, S19, S24; no aspheric
  surfaces. The model's STO row splits the printed d25 = 7.88 into 4.40 + 3.48.
- First order, patent vs model: f 81.63 / 135.00 / 196.00 vs EFL 81.631 / 135.025 / 196.014 mm; F 2.8 vs f/2.8 at
  every station; fs 47.47 kept literally against Gaussian BFD 47.485 / 47.489 / 47.486 mm; front vertex to image
  233.52 mm in all states (D8 + D15 + D20 = 43.04). Printed ω 15.2 / 9.0 / 6.2°. Table 6 f1 = 104.57 and
  f1-1 = −849.26 (calculated 104.569 and −849.24), f1/f1-1 = −0.123; G1-2 mean νd 88.3 (condition ν1-2 > 75).
- On-axis LSA (`lsa.mjs`, d-line, full pupil): −0.037 / +0.161 / −0.225 mm at 81.63 / 135 / 196 mm, the same
  sign pattern as Figs. 2–4. The patent prints no close-focus gaps (Figs. 5–6 are 1.5 m plots only), so the model
  stays infinity-only; 1.4 m is Pentax's rated minimum focus.
- Product match: Ricoh's discontinued 35 mm lens page lists 16 elements / 13 groups, four ED elements, inner zoom and
  inner focus, 1.4 m, minimum f/32, K mount. Table 1 is 16 / 13 with high-Abbe glass at L1, L3, L4 and L12, the four
  positions the maker's construction drawing (`tz-faz80-200f28.jpg`) marks ED; the drawing also puts the iris right
  behind the G4 cemented doublet, as Fig. 1 does. Embodiment 5 is also 16 / 13 but has a 1.69680 / 55.5 front element
  and three high-Abbe elements; Embodiment 2 is 16 / 14 and Embodiments 3–4 are 17 / 15. Embodiment 1 is kept as a
  qualified production correlation. L1/L4/L12 (FCD1) and L3 (S-FPL53) carry `apd: "inferred"`.
- Values not printed by the patent: iris 4.40 mm behind S25 (Fig. 1 measures about 4.3–4.5 mm; the package read
  4.368 mm and also traced 3.7–5.1 mm), radius from f/2.8 (14.866 mm); rims from Fig. 1 with tenth-mm beam floors.
  S11–S13 stays at 18.2 mm (0.73 mm air left at the S10–S11 rim). The package's alternatives, an S11 floor of
  19.167 mm (99.94 % of the 7.01 mm gap in sag) and a square 19.581 mm S11–S13 rim (104.6 %, overlap), were not used.
- The package claimed a tele axial pupil of 85.95 % of nominal area (about f/3.020). Validation found this to be a
  measurement artefact: the engine stop already limits the real axial beam at every station, and the tele beam that
  fills it clears the 18.2 mm rims. The claim is removed from header, specs and analysis; no replacement figure.
- Package records not re-run and dropped from the public text: the intermediate zoom cam uses 33 controls (straight
  interpolation of the three printed rows added up to 2.832 mm BFD error; 9 / 17 / 33 controls cut the added error
  to 0.225 / 0.060 / 0.0153 mm); reference-wavelength MTF40 on axis 0.069 / 0.514 / 0.418 at the printed plane
  (0.831 / 0.668 / 0.668 after −0.087 / +0.045 / −0.072 mm best-axial shifts), measured before the glass names
  resolved; 651 of 8,274 sampled launch rays over 42 reference fields found no intersection: 650 meet the S1 sphere
  at 37.9–61.7 mm, outside its 35.2 mm rim, and one meets S28 at 22.22 mm, outside its 18.4 mm rim.
- Fields changed in this pass: data header rewritten in plain terms (all facts kept; process notes and the f/3.020
  claim removed); `subtitle` to "US 5,572,276 A, Embodiment 1 — qualified production correlation"; `specs` to five
  standard lines (16 / 13, design f, F/2.8, all spherical, 4 ED); element labels to "Element N" with a `role` each;
  the four `apdNote` texts reworded; focus description rewritten. Analysis: patent number and spacing fixed,
  identification rewritten as a numbered list, group powers and zoom motion stated, "unmatched" glass lines replaced
  by the catalog equivalents plus a glass table, process sections (cam residual screens, ray-sample counts, MTF
  diagnostics, outstanding-gate scope, file hash) removed. No optical value changed; `built.mjs` and `probe.mjs`
  output is identical before and after.
- Diagram labels: cemented brackets D1–D3 renamed C1–C3 so they do not read like the gap labels D8/D15/D20;
  the first group label shortened to "G1-1" so it no longer runs into "G1-2 (focus)".
- Open: production identity is not confirmed beyond construction matching. Open: no close-focus state (no printed
  finite spacings).
