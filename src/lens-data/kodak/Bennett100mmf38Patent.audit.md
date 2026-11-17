# Bennett US2231699 Figure 1 audit — 2026-11-16

Transcribed from the original patent scan. The patent was filed in 1939 and granted in 1941. No earlier model of this
patent exists in the catalog.

## Literal source

The Figure 1 table on drawing sheet 1 and the matching table in the specification were checked visually.
R = [29.18, −47.45, flat, −16.45, 52.50, −33.58]; glass thicknesses = [7.3, 2.1, 2.9, 5.5]; air gap S = 39.5.
nD/ν = [1.498/67.0, 1.664/35.9, 1.516/64.1, 1.639/55.5]. No value was corrected. The certificate of correction changes
the prose "1" to ".1" (the preferred index step), not these numbers. Figure 2 is a separate example and supplies none of
this file's values.

## Inferences

- Stop halfway through the air gap, 19.75 mm behind the rear face of the front doublet. The patent neither draws nor
  locates a diaphragm.
- Front and rear clear semi-diameters of 13.5 mm and 10 mm are estimates, not measured from a dimensioned drawing. No
  mount or image-format fields are set.
- The iris radius, 8.24 mm, follows from the f/3.8 rating by the paraxial rule. The outermost axial rays at the full
  f/3.8 pupil clip at the iris, so no fully transmitted f/3.8 beam is claimed.
- The image plane is the computed paraxial back focus at the D line, 33.45 mm; it is not printed and not optimized.
- Dispersion comes from the printed nD and ν only; no glass name is asserted. Because the ν = 67.0 crown has no
  partial-dispersion data, the MTF view shows the reference wavelength only.

## First-order and ray checks

- Paraxial EFL 100.06 mm and back focus 33.45 mm; an exact near-axis spherical trace converges to the same back focus.
- The schema and geometry checks report no errors. The stop has 19.75 mm of clearance in front and 17.54 mm behind
  (to the R4 surface at the iris radius).
- Of 36 meridional rays (nine pupil positions at four field angles), the unvignetted counts were 7 of 9 on axis, 7 of 9
  at 5°, 3 of 9 at 10° and 1 of 9 at the 12.55° default field. The clipping comes from the estimated rims and the
  paraxial iris.

## 2026-11-16 — Deployment validation

An independent re-read of the patent page images (300–400 dpi) checked:
- the front page: "Harold F. Bennett, Rochester, N. Y., assignor to Eastman Kodak Company", filed October 28, 1939
  (Serial No. 301,848), patented February 11, 1941;
- both Figure 1 tables, the Figure 1 drawing and the Figure 2 table (a different example);
- the certificate of correction, and the text's "about 1/6 F" and "about 1/3 F" rear radii.

Every R, t, S, nD and ν matches; all signs are printed.

Verdict: valid with notes. No product link is documented. Google Patents lists none. The nearest candidate is Kodak's
135 mm f/3.8 Ektar for the Ektra (1941–48), which collector pages (bnphoto.org) call a Tele-Tessar-type lens with a
differently designed rear element. No source ties it to this patent, and no element count or section diagram could be
confirmed.

Changes:
- `source.patentNumber`: "US 2,231,699" → "US 2,231,699 A" (house form).
- `catalog.focalLengthMm.design`: 100.05834371899277 → 100.06 (float noise rounded).
- JSDoc header: rewritten in plain words, naming the source, example, scale and inferred values.
- Element `role` on L1–L4: provenance notes → optical roles.
- Analysis: the opening sentence and the "Validation and Limits" section were rewritten in plain words.
- This audit: process notes and run-together numbers removed; no fact was changed.
- No prescription value, rim, stop or gap was changed.

First-order after the changes (`built.mjs`, `probe.mjs`):
- EFL 100.058 mm; f/3.8; back focus 33.452 mm; front vertex to image 90.752 mm.
- Iris radius 8.237 mm; default half-field 12.55°.
- Front component +72.16 mm; rear component −145.58 mm.

Audits:
- `audit:surface`: OK.
- `audit:aperture --raise`: no surface below the on-axis ray.
- `audit:image-circle`: skipped, no image format.
- `audit:field-coverage`: skipped, hidden.
- Real-ray clearance (`clearap.mjs --scan 60`) at image height 22.3 mm (12.36°): the chief ray clears S6 (9.70 mm
  against 10 mm). S5 and S6 cut 74 % and 93 % of one side of the oblique beam; with 13 mm rear rims the figures would be
  19 % and 27 %.
- The real f/3.8 axial ray needs 8.44 mm at the stop, against the 8.24 mm paraxial iris.
- A real-ray trace gives about +1.3 % pincushion distortion at 10° with the mid-gap stop, and about +0.8 % with the stop
  just behind the front doublet. There is no source for either stop position.

Open:
- Cleanup pass, wording:
  - `name` and `key` "PATENT REFERENCE" style;
  - `subtitle` "NO PRODUCTION MATCH" → "no documented production match";
  - `specs` "PATENT-ONLY REFERENCE";
  - element labels "Element 1–4";
  - "native" wording left in the analysis's architecture, glass and focus sections;
  - the analysis's **Patent:** link text has no kind code.
- `catalog.focalLengthMm.design` could take the printed 100 mm.
- SD pass: Figure 1 draws the rear doublet at about 12.6 mm semi-diameter (0.91 × the front, about 13.9 mm), and L4's
  drawn 1.5 mm edge matches the computed edge at 12.6 mm. The 10 mm rear rim is undersized against the figure.
- Optional: no partial-dispersion estimate is justified by the patent; keep reference-wavelength MTF.
