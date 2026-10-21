# Sigma 4.5mm f/2.8 EX DC Circular Fisheye HSM — audit log

## Package as received

The data and analysis files arrived in package `Sigma4_5F2_8EXDCCircularFisheyeHSM_JP2009058817A_Example3_V2_20261018`
without an audit log; this file starts the record. The package modelled JP 2009-058817 A Example 3 at infinity only,
with the image distance set to the paraxial back focus (40.86277 mm, 0.0029 mm longer than the printed BF),
`closeFocusM` as the 1e15 infinity value, inferred clear apertures and `checks.maxRimAngleDeg: 71` for surface 2.

## 2026-10-21 — Deployment validation and wording pass

### Source re-read

The patent PDF (19 pages; page 1 is the PAJ abstract, so PDF page = printed page + 1) was read directly. Front page:
JP 2009-58817 A, published 19 March 2009, application 2007-226758 filed 31 August 2007, applicant 株式会社シグマ, sole
inventor 保科 あい (PAJ: HOSHINA AI). `patentNumber` `JP 2009-058817 A`, `patentYear` 2009, `patentAuthors` `Ai Hoshina`
and `patentAssignees` `Sigma Corporation` (the form 58 other Sigma files use) agree.

Example 3 is on printed page 8 (PDF page 9), Figure 7 on printed page 14. The table has no text layer and was read from a
300 dpi render: all 23 rows of R, D, Nd and Vd were compared with the data file, with no mismatch. There are no aspheres
and no variable gaps; the stop is row 16 (R 0.0000); cemented interfaces are 7–9, 10–12, 13–15 and 19–21. ¶0028 states
equisolid projection, y = 2f sin(ω/2), for all examples.

The other examples do not fit the product: Example 1 is 10 elements / 7 groups at f 4.7017, F3.58; Examples 2 and 4 are
12/9 at f 4.3276 and 3.8948. Example 3 is the only 13/9 example (f 4.4463, F2.90, 2ω 180°).

### First-order values

| Quantity | Patent | Model |
|---|---:|---:|
| f | 4.4463 | 4.44577 (paraxial, −0.011%) |
| FN | 2.90 | 2.90 (EP radius 0.7666 on the reference f 4.4463) |
| 2ω | 180° | 180° (half-field 90°) |
| BF | 40.8599 | 40.8599 image distance; paraxial BFD 40.86277 |
| LT | 121.8599 | 121.8599 (lens track 81.0000) |
| f/Bf (1) | 0.1088 | 0.10882 |
| \|fF\|/f (2) | 0.83 | 0.8293 (fF = −3.6872 over surfaces 1–15) |
| 2/(Nd1+Nd2) (5) | 0.55 | 0.5543 |
| Vdp (3) | 81.61 | L12 νd 81.61 |

Chief rays from 0° to 90° converge and reach the image; the 90° chief lands at 6.197 mm against the ideal equisolid
6.288 mm (−1.45%). The declared `imageCircleMm` 12.576 is the ideal value.

### Maker diagram comparison

Sigma's construction diagram (https://www.sigma-global.com/lenses/45_28_specification_01.jpg) shows the same 13/9
sequence: front meniscus with a stepped flange, a second meniscus, a biconcave singlet, two cemented pairs, a small
cemented pair before the stop, then a positive singlet, a cemented pair and a rear positive singlet behind it. The
blue (SLD) element is the positive member of the rear cemented pair, L12. Heights measured on Figure 7 (about 10.4
px/mm, scaled from the 121.86 mm total length) and on Sigma's drawing (scaled from L1 at 21.5 mm): L1 front 21.8 / —;
surface 2 rear bowl 12.4 / 12.6; L2 12.2 / 12.2; L3 10.6 / 10.3; first cemented pair 7.6 / 7.6; second cemented pair
6.5 / 6.9; third pair 4.8 / 5.65; G2 7.9–8.5 / 8.0–8.5. The stored values agreed except the first two cemented pairs
(8.2 and 8.0 mm), which were larger than both drawings.

Product page (https://www.sigma-global.com/en/lenses/45_28/, discontinued): 13 elements in 9 groups, SLD glass, 180°,
13.5 cm minimum focus, 1:6, 6 blades, F22, rear gelatin filter, SA / EF / F / Pentax / A mounts, APS-C [DC]. These
match `lensMounts` (`sigma-sa`, `canon-ef`, `nikon-f`, `pentax-k`, `sony-a`), `imageFormat` `aps-c`, the blade count and
the f-stop range. Sigma announced the lens at the end of 2007; LensTip's review dates from January 2008.

### Fields changed in this pass

- Back focus: the `BF` gap is the printed 40.8599 mm (was the paraxial 40.86276762628765). Total track 121.8599 mm;
  EFL, f-number, half-field and stop radius are unchanged.
- Semi-diameters: surfaces 7, 8, 9 from 8.2 to 7.6 mm and surfaces 10, 11, 12 from 8.0 to 6.9 mm, the drawn heights.
  The f/2.9 axial marginal ray reaches 2.24–3.88 mm on those surfaces. The meridional transmission curve is identical
  before and after (1.000, 0.948, 0.875, 0.781, 0.708, 0.594, 0.573, 0.500 at 0°, 30°, 45°, 60°, 69°, 81°, 84°, 90°),
  and all chief rays to 90° still reach the image; a test at 4.0 / 3.6 mm did change both, so the check is sensitive.
  The surface validator reports no error.
- `closeFocusM`: 0.135, Sigma's minimum focus. Of 160 infinity-only primes in the corpus, 146 carry the production
  minimum focus and 14 the 1e15 value. No gap moves, so traces at the near end of the focus control are identical to
  infinity.
- L12: `apd: "patent"` with an `apdNote`. Claim 2 and conditions (3)–(4) define element LP as a positive G2 element with
  νd > 62.5 and PgF above 0.6675 − 0.002νd, Figure 7 leads LP to the rear cemented pair, and Table 1 gives PgF 0.5387
  for Example 3 (0.034 above that line). The patent therefore designates the element, so the tag is `patent` rather
  than `inferred`; it is also Sigma's SLD position.
- Element roles added for all 13 elements; header comment, `subtitle`, `specs` and focus description rewritten in plain
  language (`specs` now 13 ELEMENTS / 9 GROUPS, DESIGN f = 4.45 mm, DESIGN F/2.9, ALL SPHERICAL, EQUISOLID PROJECTION).
- Analysis: the back-focus, focus, clear-aperture and limitation sections were rewritten to match the data file; a
  description of a rejected focus trial, ray-sample counts and statements about the authoring checks were removed; the
  heading "Validation and Limits" became "Model Scope and Limitations".

The surface-2 rim (12.5 mm, 70.0° rim slope, `maxRimAngleDeg: 71`) is backed by both drawings. Under the default limit
(surface 2 capped at 11.95 mm) chief rays from about 85° outward fail to reach the image.

Open: none.
