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
- Cement: the drawn element M5 is now the thin element C1 ("Cement layer", nd 1.514, νd 42.83) on surface 9 with
  the printed 0.0100 mm thickness. A first pass made it an nd-only `cement` medium; that was reverted because a medium
  without an Abbe number rates the whole lens as constant-dispersion and switches off chromatic rays and MTF.
  First-order values are identical in both forms.
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

## 2026-11-08 — Second review: diagram, labels and movement

**Compared.** The live page (infinity, 0.45 m, the focus-motion overlay, and the inspectors of L3, L4, C1 and L5) with
Figure 1 of JP 2015-041003 A (page 16), which draws Gm with the Example 1 converter. Figures 3 and 5 (page 17) draw the
same Gm and served as a second reading. Figure 1 is isotropic at 11.04 px/mm at 300 dpi: S1 to S17 spans 486.5 px for
44.0843 mm, the S1–S8 and S8–S17 spans agree within 1 %, and every printed radius traced across the drawing stays within
±1 px of the ink out to its rim. The stop tick's inner end reads 12.8 mm against the engine's 13.03 mm. Nikon's optical
section, a small silhouette, also draws L3's rim running up to L2's rear face; it is too coarse to read rim heights.

| Element | Figure 1 (Figure 3) | Before | After |
| --- | --- | --- | --- |
| L1 | 18.7 (18.9), square | 18.8 / 18.8 | unchanged |
| L2 | 16.8 (17.0), square | 16.9 / 16.9 | unchanged |
| L3 | S5 meets L2's rear face at the corner, 16.3; edge 16.4 (16.7); S6 cap 13.7 (13.7) with a land to the edge | S5 15.1; S6 13.7, land 15.1 | S5 15.8; S6 13.7, land 15.8 |
| L4 | S8 cap 13.0–13.1 (13.15) with a land to 16.1 (16.3); S9 16.1 | S8 13.2, land 16.2; S9 16.2 | unchanged |
| L5 | square, 16.5 (16.8), 0.4 mm proud of L4 | S10 16.2 / S11 16.6 | 16.6 / 16.6 |
| L6, L7, L8 | 16.4 (16.6), 16.2 (16.35), 16.0 (16.1) | 16.4, 16.2, 16.0 | unchanged |

- L3 was 1.3 mm short of the figure and drawn below L4, the reverse of the figure. S4 and S5 meet at 15.90 mm, so
  15.8 mm is the largest 0.1 mm value short of contact; `checks.gapSagFrac` 0.99 admits the S4/S5 pair (combined sag
  1.488 mm of the 1.51 mm gap; 0.98 refuses it). The S6 land moved with S5, so L3 stays square-cut as drawn. L3 stays
  0.6 mm under the figure, whose S4 and S5 arcs overlap at the rim.
- S10 16.2 → 16.6 mm squares L5, which the figure draws square-cut and standing proud of L4; the model had a bevel.
- The cement element C1 no longer carries `cemented: "D1"`. With it the inspector counted three members and badged D1
  as a TRIPLET; L4 and L5 now read DOUBLET D1, and C1 shows FL "—" (its thick-lens focal length is 1.36 × 10⁷ mm).

**Lands and cuts.** No face ends below its baseline value, so there are no cuts.

| Face | Kind | Figure | Baseline | Final | Light cost | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| S6 | `rimExtensionSd` | cap 13.7, land to 16.4 | 13.7 + 15.1 | 13.7 + 15.8 | 0.0 points | keep: slight, drawn |
| S8 | `rimExtensionSd` | cap 13.0–13.1, land to 16.1 | 13.2 + 16.2 | 13.2 + 16.2 | 0.0 points | keep: slight, drawn |

The light cost is what raising each cap to its land height wins back; neither does at any field. Against the baseline
rims the final file loses nothing at any field and gains up to 1.7 points: 100.0 % on axis (from 99.0 %), 98.8 % at
2.9° (from 97.1 %), and 31.1 % at the 23.2° corner before and after. Engine half-field 25.83°, f/1.4505 and the
13.035 mm stop radius are unchanged; the surface validator, the aperture census (no rim limit), the image-circle check
and the corner field coverage (100 %) pass.

**Near state with a real object.** With the object 359.26 mm ahead of S1 (0.45 m to the image) and the corner object
height of 151 mm that reaches the 21.63 mm image corner, the wide-open transmission is 38.7 % at the corner before and
after, 90.2 % at a quarter field (from 88.9 %) and 95.5 % on axis before and after.

**Labels, tags and movement.** Element types agree with the signs of R, the inspector focal lengths match a thick-lens
calculation for all eight elements, and the roles are true. The stop sits between L3 and L4, as ¶0046 states. There
are no aspheres and no `A` labels, and no `apd` tags, since Nikon lists no ED glass. The `Gm (+) / UNIT FOCUS → OBJ`
bracket spans S1–S17 and the D1 bracket S8–S11; BF is the only gap label, so nothing collides. Focus keyframe 0 is
infinity (back focus 39.017 mm) and keyframe 1 the 0.45 m state (46.659 mm); the motion overlay moves the single group
7.64 mm toward the object, and the slider ends read ∞ and 45 cm. The patent designates the elements Lm1–Lm8; the file
keeps L1–L8, and the analysis states the mapping.

**Colour and glass.** The patent prints aberration curves only for Gm with each converter (Figures 2, 4 and 6;
f = 36.1 mm, F1.01), not for Gm alone, so no line-by-line comparison is possible. C1 (1.514 / 42.83) is the only
unmatched label. The patent prints nd and νd only for it, the row belongs to the shared master (Tables 1–3), and the
pair is Nikon's usual cement value (1.514 / 42.8 in the AF-S NIKKOR 20mm f/1.8G file).

**Open:**

- At the 0.45 m state traced from a real object point, the rims of L6 and L7 (S13–S15) trim 4.5 % of the app's
  wide-open on-axis stop lattice (1.6 % at the real f/1.4505 marginal ray), which needs about 16.7 / 16.6 / 16.6 mm
  there. The figure reads 16.4 and 16.2 mm and is drawn at infinity, so the rims stay. (Closed 2026-11-08: the third
  review re-read the figure and kept both rims; see below.)
- On the live page the first letter of the STO label touches the top corner of L3's land: the label sits at the stop
  housing height plus a fixed pad, a layout matter outside the rim data.

## 2026-11-08 — Third review: diagram, labels and movement

**Compared.** The live page at infinity and 0.45 m, the focus overlay and every element's inspector, against Figure 1
(page 16), re-measured on its native 300 ppi bitmap. Twelve vertex crossings give 11.016 px/mm along the axis
(residuals within 0.65 px) and the printed radii fit the arcs best at 11.0 px/mm across it. Rim readings: L1 18.85,
L2 16.94, L3 edge 16.64, L4 16.21, L5 16.73, L6 16.51, L7 16.24, L8 16.05 mm; S6 cap 13.70, S8 cap 13.05 mm. Every
rim but L3 (held at 15.8 mm by the S4/S5 contact) is within 0.15 mm of the figure, and the drawn step order holds. No
rim changed. Second-review land and cut verdicts re-measured: unchanged; worst loss 0.0 points, and each land costs
0.0 points.

- **Near state.** From a real object 359.26 mm ahead of S1: 95.5 % on axis and 38.7 % at the 151 mm corner. The real
  f/1.4505 marginal ray reaches 16.61, 16.55 and 16.58 mm at S13–S15. Raising L6 to its figure reading (16.5 mm) wins
  0.0 points because L7 then clips. Full clearance needs L6 at 16.7 and L7 at 16.6 mm, which would draw L6 above L5
  and L7 level with them, against the figure's 16.73 / 16.51 / 16.24 mm steps. Verdict: the rims stay.
- **Labels and movement.** L4 and L5 read DOUBLET D1; C1 has no badge, FL "—", glass "Unmatched (1.51400/42.83)" and
  an Abbe-estimate dispersion, so no medium is constant. The gap values give 7.641 mm of travel toward the object, the
  probe 450.00 mm object to image at −0.148×, the overlay 7.64 mm, and the slider ends ∞ and 45 cm.
- **Colour.** With the Example 1 converter rows matched to catalog glasses, the trace reproduces Figure 2: d −0.038
  and g +0.109 mm at the rim (figure about −0.035 and +0.10), g +0.019 mm paraxial (+0.02), and g−d lateral colour
  −0.010 mm at mid field and +0.043 mm at 14.25 mm (−0.009, +0.043). The stated label precision was corrected to
  2 × 10⁻⁶ in nd and 0.01 in νd (TAFD25) in the analysis and header; the near-state trim now reads about 4.5 %.

**Open:**

- The STO label still touches L3's land corner. The stop housing uses the optical `sd` of S6 and S8 (13.7, 13.2 mm),
  not their lands, so the label sits at 15.46 mm, under L3's 15.8 mm corner 1.07 mm ahead of the stop.
