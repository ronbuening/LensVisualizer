# SIGMA 15mm f/2.8 EX DG DIAGONAL FISHEYE: audit log

The source package carried no audit log; this file starts at deployment validation.

## 2026-10-29 — Deployment validation and cleanup

- Source: JP H02-248910 A (Yasunori Murata, Sigma Corporation), filed 1989-03-23 as 特願平1-69310, published
  1990-10-04. Numerical Example 1 table and Fig. 1 on PDF p. 3, Fig. 3 aberrations on p. 4. The PDF is a 347 dpi scan
  with no text layer; the table was read from 300 dpi page images. Google Patents gives the inventor romanization.
  Bibliographic fields in the data file match the front page.
- Transcription: 14 R, 13 d, 7 nd/νd pairs, the stop at row 9 and the cemented interface at surface 13 were checked;
  zero mismatches. There are no aspheres. The patent prints no back focus, total length, image height, clear
  apertures or close-focus state; the headings are n_i / ν_i and the d line is assumed (Fig. 3 plots d and g).
- First order, patent vs model: f 15.3 vs EFL 15.3007 mm; F/2.8 vs 2.800 at the engine stop (6.782 mm, derived from
  the paraxial entrance pupil); 2ω 180° vs half-field 90°. Paraxial back focus 38.9556 mm, vertex length 56.27 mm.
  Printed conditions f3 = 1.31 f, R4 = −2.29 f, D4 = 0.81 f vs 1.309, −2.288 and 0.811. An independent meridional
  trace puts the 90° chief ray at 21.687 mm against the equisolid 2f sin(ω/2) = 21.637 mm (+0.23 %); the 21.6 mm
  full-frame half-diagonal is reached at 89.50°, so the 180° field covers the frame corner. Distortion against
  equisolid is about +0.9 % at 60°, in line with the small positive bulge in Fig. 3(c).
- Product match: Sigma's page (sigma-global.com/en/lenses/15_28) lists 7 elements / 6 groups, 180°, 0.15 m, 1:3.8,
  seven blades, F22, a rear gelatin-filter holder and SA / EF / F / K / A mounts; the EX DG version was announced in
  October 2005. Vertex positions measured from Sigma's construction diagram (lenses/15_28_specification_01.jpg) fit
  Example 1 at 0.32 mm rms and Example 2 at 0.86 mm rms after a free scale and offset; Example 1's d2 = 16.88 and
  d4 = 3.01 mm match the drawing, Example 2's 14.83 and 5.27 mm do not. Example 1 is the better match.
- Rims: the semi-diameters agree with Fig. 1 and Sigma's diagram to within about 5–10 %. The 90° chief ray needs
  14.909 mm on the L1 rear surface (R 15.56 mm); the 15.0 mm rim there has a 74.58° slope, hence
  `checks.maxRimAngleDeg` 75. Every other rim clears the 90° chief. Surface audit OK, image-circle audit 0 undersized;
  the field-coverage audit and `clearap.mjs` do not handle fisheye fields, so the 90° check above was traced separately.
- Focus: the patent is infinity-only. The package moves the whole lens (image gap 38.956 → 42.689 mm) to Sigma's
  0.15 m object-to-image distance; the nine keyframes reproduce paraxial focus exactly. This gives 1:4.10 against
  Sigma's 1:3.8. With linear interpolation between keyframes the residual defocus peaks at 0.046 mm and the slider
  label differs from the in-focus distance by up to 7.3 % just past the infinity cutoff.
- Glass: all seven labels resolve to the same catalog rows before and after relabelling (J-LAK14, NBFD11, FD140,
  NBFD15, FK5 ×2, FD60; nd exact, |Δνd| ≤ 0.04).
- Data file edits in this pass (no R, d, nd, νd, sd, projection, patent, mount or format change; built and probe
  output identical before and after): header comment rewritten in plain terms with the Example 1 / Example 2 diagram
  fit and the L1 rim reasoning; `subtitle` to "JP H02-248910 A, Numerical Example 1 — construction-based production
  correlation"; `specs` to "7 ELEMENTS / 6 GROUPS", "DESIGN f = 15.3 mm", "DESIGN F/2.8", "ALL SPHERICAL",
  "EQUISOLID FISHEYE, 2ω = 180°"; glass labels to the "NAME (VENDOR catalog equivalent; production supplier
  unspecified)" form; L3 / L4 roles say "patent condition", L5 role "Positive crown behind the stop"; focus
  description rewritten with the image-gap travel and the 1:4.1 vs 1:3.8 difference.
- Analysis edits in this pass: the stop semi-diameter now reads 6.782 mm (the package's 7.21693 mm is the real-ray
  axial marginal height at the stop, not the engine's derived stop); the identification section states the diagram
  fit and no longer calls Sigma's live page archived. The rest of the analysis wording is revised separately.
- Open: production identity rests on construction and spacing only. Open: close focus is inferred unit focus, not
  Sigma's mechanism. Open: the site's MTF analysis does not support fisheye projections, so this lens has no MTF.
