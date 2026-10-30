# Canon RF 100mm f/2.8 L Macro IS USM

## Patent Reference

**Patent:** JP2021-47297A (Published 2021.03.25)

**Applicant:** Canon Inc.

**Inventors:** Keiko Taki (滝 慶行), Takeo Mori (森 丈夫), Makoto Nakahara (中原 誠). Romanized names follow the current catalog attribution; the Japanese original prints the name spellings without Latin readings. The prior approximate Takehiro/丈大 entry is superseded by the original 丈夫 spelling.

**Filing Date:** 2019.09.19

JP 2021-047297 A, Canon, Numerical Example 1. The hosted marketing name identifies the associated lens; the numerical model uses the patent's 100.81 mm, f/2.92 design. Numerical data are on PDF pages 10–11; Figure 1 on page 17 shows the focus configurations. Patent optical data do not establish production glass suppliers or motor mechanisms.

## Architecture

Seventeen spherical elements form thirteen air-separated components and five functional groups. L1, the aperture stop, L3 and L5 remain fixed; negative groups L2 and L4 translate toward the image during close focusing. Four cemented doublets are D1 (elements 1–2), D2 (6–7), D3 (10–11) and D4 (13–14). There are no zoom controls.

## Element by element

| Element | Patent nd / vd | Patent individual focal length (mm) | Description                                                              |
| ------- | -------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| L1      | 1.83481 / 42.7 | -33.78                              | Front negative element of cemented doublet D1                            |
| L2      | 1.76182 / 26.5 | 41.88                               | Rear positive element of cemented doublet D1                             |
| L3      | 1.83481 / 42.7 | 127.06                              | Positive singlet in fixed front assembly L1                              |
| L4      | 1.48749 / 70.2 | 72.24                               | Low-dispersion positive singlet in L1                                    |
| L5      | 1.84666 / 23.8 | -40.65                              | High-dispersion negative singlet in L1                                   |
| L6      | 2.001 / 29.1   | -87.23                              | Front negative element of cemented doublet D2                            |
| L7      | 1.7725 / 49.6  | 43                                  | Rear positive element of D2; published component focal length +85.34 mm  |
| L8      | 1.72916 / 54.7 | 68.41                               | Last positive singlet before the fixed stop                              |
| L9      | 1.734 / 51.5   | -61.88                              | Negative singlet in moving focus group L2                                |
| L10     | 1.7725 / 49.6  | -37.33                              | Front negative element of cemented doublet D3 in L2                      |
| L11     | 1.94595 / 18   | 61.7                                | Rear positive element of cemented doublet D3 in L2                       |
| L12     | 1.76385 / 48.5 | 57.69                               | Plano-convex singlet in fixed group L3                                   |
| L13     | 1.72916 / 54.7 | 37.59                               | Front positive element of cemented doublet D4                            |
| L14     | 2.00069 / 25.5 | -58.94                              | Rear negative element of cemented doublet D4                             |
| L15     | 1.83481 / 42.7 | -50.02                              | Negative L41 in moving group L4; 19.35 mm air gap to L42                 |
| L16     | 1.6727 / 32.1  | 106.82                              | Positive L42 in moving group L4; published group focal length −163.75 mm |
| L17     | 1.58913 / 61.1 | -76.25                              | Negative singlet forming fixed rear group L5                             |

## Glass

All seventeen nd/vd pairs are retained from the numerical table. Catalog names are compatible dispersion counterparts, not identified production materials. The table supplies no partial-dispersion values or anomalous-dispersion classifications; no APD badges are asserted. FDS18 and S-LAH96 now provide compatible catalog counterparts for the previously code-labelled elements 11 and 12. Chemical composition, manufacturing process and supplier cannot be inferred from nd/vd alone.

## Focus

The published gap stations are preserved:

| State    | d15 after stop | d20   | d25   | d29   | Published EFL |
| -------- | -------------- | ----- | ----- | ----- | ------------- |
| Infinity | 3.10           | 27.41 | 4.17  | 26.63 | 100.81        |
| 0.5×     | 11.72          | 18.80 | 11.48 | 19.32 | 65.87         |
| 1.4×     | 27.41          | 3.10  | 29.50 | 1.30  | 36.01         |

All lengths are millimetres. L2 moves 24.31 mm and L4 moves 25.33 mm toward the image between the endpoint stations. The middle d15+d20 sum is 30.52 mm versus 30.51 mm at the endpoints: the 0.01 mm discrepancy is retained as published rounding. Source BF is 14.66 mm at every station. Paragraph 52 explicitly defines BF as air-equivalent; no cover glass or filters are included and no additional plate correction is applied.

Independent paraxial propagation of the rounded prescription gives finite object-to-image distances 0.375178758 m and 0.254657653 m, with magnifications −0.49998588 and −1.39999310. The slider uses those calculated conjugates and places the middle source station at normalized focus 0.6787635164. The previous 0.26 m marketing distance and middle slider position were inconsistent with these numerical stations. Intermediate states interpolate gaps and are not separately published examples.

The aperture slider starts at the published infinity f/2.92 and preserves its current derived fixed iris. The source also prints finite F-numbers 4.49/6.64. Current exact aimed-ray working values do not reproduce that finite column, so its convention is left qualified; the column alone does not establish a physical focus-dependent iris schedule. No aperture or focus control is changed.

### Spherical-aberration adjustment limitation

This viewer models the normal SA setting. The patent describes SA changes through differential L2/L4 displacement, but no SA slider is implemented here. Page 11 gives two alternative gap sets only at 0.5×; the second prints d15=10.72 and d20=18.80, whose sum is 1 mm smaller than the normal setting. Original-page inspection confirms this is printed, not OCR. A corrected value and a complete focus-dependent SA schedule cannot be asserted from these data. The former claim of simulated SA adjustment at any focus position is removed; this source inconsistency remains follow-up work.

## Aspheres

None. Every optical surface in Example 1 is spherical.

## Semi-diameter notes

The previous diameters had been tuned to a commercial construction drawing. The patent instead publishes an effective-diameter column: those values, divided by two, now define the semi-diameters. The 2026-09-09 review inspected Figure 1 from a 600 dpi rendering as a topology and profile check. Its embedded section is native 150 ppi, so that was 4x magnification rather than additional source detail; this provenance qualification does not claim a fresh shape inspection. Figure 1(C), identified by paragraph 19 as the 1.4× state, shows group separations much closer to Figure 1(B) than to the numerical closest-focus gaps (d20=3.10 mm and d29=1.30 mm). This drawing/table inconsistency remains unresolved; the model follows the numerical tables, whose paraxial magnifications independently agree with the published values.

Two renderer limits are explicit: S17/S18 use 13.25 mm instead of the source 13.49/13.46 mm. At source radii, the spherical surfaces intrude 3.45 mm into the 3.71 mm air gap, exceeding the validator's 90% clearance allowance (3.339 mm). This is a renderer clearance margin, not a claim that the patent's surfaces physically intersect. All other refracting surfaces use the exact half-diameters. The generic stop effective-diameter row is 30.81 mm (half 15.405), which is source envelope evidence; current runtime derives a fixed iris radius of 15.1292861863 mm from the existing f/2.92 convention. The generic row does not prove a physical focus-dependent iris schedule, and iris authority is retained. No prescription radius or gap was changed. Surface validation, image-circle coverage and render diagnostics at infinity, half slider, the middle source station and closest focus pass without hidden rim trimming.

## Sources

- Local original: patents/JP2021047297A.pdf, paragraphs 51–52, Numerical Example 1 (PDF pp. 10–11), Figures 1–3 (p. 17).
- [JP 2021-047297 A patent record](https://patents.google.com/patent/JP2021047297A/en).
- Local glass catalog: compatible optical counterparts only; no production identity established.

## 2026-10-30 reuse and current-runtime follow-up

The complete original shape/glass review remains dated **2026-09-09**. Canonical comparison against its audited commit `c905777d9` finds no optical difference after only later `source.example` and `focus.published` provenance metadata are normalized. All 17 source pairs, radii, gaps, clear caps, iris rule and three focus keyframes are unchanged. There are no per-lens C/F/g or partial-dispersion overrides, APD claims, inferred cuts or rim extensions. Seventeen compatible curves remain qualified proxies. Source paragraph 0051 (PDF page 9) explicitly defines d 587.6 nm / F 486.1 nm / C 656.3 nm; no historical glass identity is inferred. Current identity/iris wording is synchronized without a new source shape/glass review or a data-file change. The original normal-SA-only scope and alternative 0.5× SA/table/figure limitations above are retained.

A separate current-runtime follow-up samples 66 focus positions, including the exact published middle keyframe. At the fixed derived iris 15.1292861863 mm, the infinity axial pupil passes 169/193 samples and the exact nominal working probe is vignetted at S17, so no numeric working value is reported there. The source middle and close states give exact working f/3.571497 and f/5.093627 versus printed 4.49/6.64; this source/model/convention discrepancy remains unresolved and is not fitted by an invented iris schedule. All 528 focus/aperture calls comprise 527 traced and that one vignette. Close axial pupil samples pass 193/193; corner clipping remains.

Published close conjugates focus numerically, while the infinity rounded prescription retains −0.002683 mm residual. Interpolated normal-SA focus states are illustrative: worst finite conjugate residual is −13.418988 mm at focus .859375, displayed 0.296329 m. No cam is retuned. All 66 rendered states produce 1,122 finite, closed, connected element paths with zero hidden trimming. These current runtime findings are distinct from the reused September 9 source inspection and do not certify unavailable SA adjustment or production performance.
