# Source Audit — NIKON AF-S NIKKOR 50mm f/1.4 G

## 2026-11-06 — Package history

The lens arrived in the SixLens package of November 6–7, 2026, as a hidden, infinity-only model of the master lens Gm.

- Source: JP 2015-041003 A, master lens Gm (Table 1 rows 1–17, Figure 1). Tables 2 and 3 and the grant JP 6413211 B2
  repeat the same 17 rows; the package found no difference between them.
- Scope: Gm only. The rear converters Gc of Examples 1–3, the dummy filter plate and the compound image plane were left
  out. The package treated the AF-S NIKKOR 50mm f/1.4G correlation as plausible but unproven.
- Cement: the printed 0.0100 mm layer (nd 1.514, νd 42.83) between the two R = 154.1 mm faces was kept as its own
  drawn element, so the model carried nine material entries for eight glass elements.
- Derived values: back focus 39.0174010578 mm, the paraxial image distance of Gm (the printed d17 = 3.0 mm is the gap
  to the converter); F-number 1.4505060101, inferred as the compound f/1.015 times 51.598 / 36.106 on the assumption
  that the converter does not limit the aperture; a 21.65 mm image height assumed from the full-frame format.
- Rims: read from Figure 1. L3's outer rim (S5) was reduced from the figure's 16.6 mm to 15.1 mm so that L2 and L3 do
  not overlap; S6 kept a 13.7 mm cap with a land to 15.1 mm and S8 a 13.2 mm cap with a land to 16.2 mm. No source
  radius was changed and no rim was widened to pass rays. The package reported a traced wide-open aperture of f/1.4555,
  limited by S5.
- Aperture settings ran to f/22 as a diagnostic; Nikon's minimum aperture is f/16.
- Glass: every element kept its printed nd/νd with no catalog glass name.
- Source inconsistency: ¶0014 gives the master as 51.6 mm but divides 36.1 by 51.5 in its sample ratio calculation.
  The table value 51.598 mm was kept.
- Package checks covered type checking, lint, the repo test suite, a production build and wide-open and stopped-down
  pupil and MTF runs on the repo engine, all in the package's own checkout; the viewer itself was not checked.
- Open at hand-over: production identity, physical rims and lands, the cement footprint, partial dispersion and finite
  focus.

## 2026-11-08 — Deployment validation and production cleanup

**Source re-read.** All 17 master rows (R, d, nd, νd), the stop row and the cement row were checked against the Table 1
image on PDF page 10; there are no aspheres and no variable gaps, and there were no mismatches. Tables 2 and 3 repeat the
master. A paraxial trace of Gm plus the Example 1 converter reproduces the printed compound values: EFL 36.10612 mm
against 36.106 mm, and final distance to the image 2.48492 mm against 2.4849 mm. Front page: application JP
2013-172291, filed 2013-08-22, published 2015-03-02, applicant Nikon Corporation, inventor Haruo Sato.

**Patent against model.**

| Quantity | Patent | Model |
| --- | --- | --- |
| EFL of Gm | 51.598 mm (lens group data) | 51.5981 mm |
| F-number of Gm | not printed; 1.015 × 51.598 / 36.106 = 1.4505 (Examples 2 and 3: 1.4501, 1.4502) | 1.4505 |
| Back focus | not printed (d17 = 3.0 mm is the converter gap) | 39.0174 mm, paraxial |
| Vertex track S1–S17 | 44.0843 mm (sum of printed d) | 44.0843 mm |
| Total length at infinity | — | 83.1017 mm |
| Longitudinal spherical aberration | — | +0.001 / −0.065 / −0.093 / −0.074 mm at pupil 1 / 0.85 / 0.7 / 0.5 |
| Half-field at 21.63 mm | not printed | 23.18° (Nikon: 46° angle of view) |

The engine values were identical before and after the cleanup: EFL 51.59805 mm, wide-open f/1.45051, stop radius
13.0347 mm, back focus 39.0174 mm, half-field 25.83°. Only the close-focus distance (from the old infinity-only value
to 0.45 m) and the largest f-number (22 to 16) changed.

**Maker-diagram comparison.** Nikon's optical section
(<https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/normal/af-s_50mmf_14g/img/pic_003.jpg>) matches the
patent's Figure 1: a nested L2/L3 pair ahead of the stop with rims almost touching, a biconcave L4 with a stepped rim
cemented to L5 across a nearly flat interface, and three rear singlets. Nikon lists eight elements in seven groups, all
spherical, a 46° angle of view, 0.45 m minimum focus, 0.15× maximum reproduction, f/16 minimum aperture and nine
rounded blades; the lens was announced on 2008-09-22
(<https://www.nikon.com/company/news/2008/0922_nikkor_01/>). Nikon states that all lens groups shift during focusing.
The correlation stays inferred: the patent never names the product.

**Fields changed.**

- `key` `nikon-af-s-50g-master-gm-research` → `nikon-af-s-nikkor-50mm-f14g`; `name` → `NIKON AF-S NIKKOR 50mm f/1.4 G`;
  `subtitle` → `JP 2015-041003 A, master lens Gm — inferred AF-S NIKKOR 50mm f/1.4G correlation`; `visible` → true.
- Catalog: `lensMounts` `["nikon-f"]`; `focalLengthMm` `{ marketing: 50, design: 51.598 }`; `fNumber`
  `{ marketing: 1.4, design: 1.4505 }`; specs rewritten to `8 ELEMENTS / 7 GROUPS`, `DESIGN f = 51.6 mm`,
  `DESIGN F/1.45`, `ALL SPHERICAL`. No `closeFocusM.marketing`, since the model's close state is Nikon's 0.45 m.
- Cement: the drawn element M5 became the undrawn `cement` medium (nd 1.514) on surface 9 with the printed 0.0100 mm
  thickness. First-order values are unchanged; the layer's νd 42.83 is no longer traced, which has no visible effect
  because its two faces have equal radii.
- Elements: M1–M9 became L1–L8 with shape types, roles and focal lengths. Glass labels now name the catalog glass each
  printed pair reproduces (Δnd below 1 × 10⁻⁶, Δνd at most 0.005): S-LAH65 (OHARA), TAFD25 (HOYA), E-FD4 (HOYA) for
  L3 and L4, S-LAH55 (OHARA) for L5 and L6, S-LAH59 (OHARA), S-LAL18 (OHARA). No `apd` tags: the lens has no ED
  elements.
- Focus: the infinity-only state became a unit-focus reconstruction at 0.45 m (object to image). The back focus moves
  from 39.0174 mm to 46.6586 mm, a 7.641 mm extension at 0.148×; the probe confirms 450.00 mm object to image. It is
  calculated, so it carries no published flag or conjugate.
- Aperture: stops end at f/16 with `maxFNumber` 16; 9 rounded blades (roundedness 0.7, as on the AF-S 24–70 G).
- Groups and doublets: one `Gm (+) / UNIT FOCUS → OBJ` bracket and the `D1` doublet over L4 and L5.
- Rims: unchanged. The aperture audit reports no rim limit, and the real axial marginal ray at f/1.4505 reaches
  14.95 mm at S5, inside its 15.1 mm rim, so the package's S5-limited f/1.4555 is not reproduced.
- Header comment, analysis and this log rewritten in production wording.

**Checks.** `audit:surface` OK. `audit:aperture`: within 3 % of the stated f-number, no rim, trace or iris limit.
`audit:image-circle`: not undersized. `audit:field-coverage --all`: not among the stations below 90 %. The
clear-aperture check at a 21.63 mm image height shows no axial or chief-ray clipping.

**Open:**

- The production identity is an inferred correlation; Nikon does not publish the prescription.
- Rims and lands follow the patent figure, not a measured lens.
- The close-focus spacing is a paraxial reconstruction.
- The cement layer is traced at nd only.
