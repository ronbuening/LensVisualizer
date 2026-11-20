# OLYMPUS 35mm f/2.8 (Olympus μ[mju:]-II) — Audit

No earlier analysis or audit accompanied this prescription. This log records the independent patent review and the resulting metadata, material-label and focus changes.

## 2026-11-20 — Deployment validation and cleanup

An independent validator compared the page-8 patent image at 400 dpi against all eight radii, seven spacings, four nd/νd pairs, stop position, K, A2, A4–A10 and fb; no transcription mismatch was found. The verdict was valid with notes: an Olympus filing a year before the μ[mju:]-II launch, four elements/four groups, f/2.8, 0.35 m focus and one asphere support a circumstantial product link, but all five examples share those broad features and no maker diagram identifies the production example.

### Source and optical decisions

- Example 1 retains the patent's own millimetre scale, all radii, internal spacings, nd/νd values, asphere coefficients, stop position and rims. The 2.49 mm L2-to-L3 gap remains split 1.60 / 0.89 mm at the position printed in ¶0055. The stop radius remains inferred from f/2.89.
- The printed infinity fb remains 14.6687 mm. The paraxial BFD is 14.6683151 mm, a 0.0003849 mm difference. No best-RMS image plane is used.
- The validator measured Figure 1 outer radii near 6.9, 6.1, 6.5 and 8.7 mm. L1's rear clear radius remains 5.9 mm because the adjacent surfaces cross near 6.25 mm height. L4's 7.1 / 7.8 mm clear radii and 8.7 mm opaque lands remain unchanged. The mixed evidence still warrants `sdSource: "heuristic"`.
- The patent's asphere equation uses K + 1, so its K = 0 requires no conversion. The omitted A2 is printed as zero. Figure 7 labels d/g/F/C, supporting the retained helium d-line reference.

### Fields changed

| Field                           | Old → new                                                                                                                             | Reason                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Constant and export             | `data` → `LENS_DATA`                                                                                                                  | House file form                                                    |
| Header                          | Run-together private notes → plain source, scale, stop, rim, image-plane and focus explanation                                        | Preserve optical facts and uncertainty in readable text            |
| `visible`                       | `false` → `true`                                                                                                                      | Assigned publication state                                         |
| `key`                           | `olympus-mju-ii-35mm-f28-patent` → `olympus-mju-ii-35-f28`                                                                            | Assigned identity                                                  |
| `name`                          | `OLYMPUS μ-II 35mm f/2.8` → `OLYMPUS 35mm f/2.8 (Olympus μ[mju:]-II)`                                                                 | Assigned display name                                              |
| `subtitle`                      | Wording claiming a patent model with unproven factory identity → `JP 3610160 B2, Example 1 — possible Olympus μ[mju:]-II correlation` | State the example and circumstantial association                   |
| `catalog.lensMounts`            | Absent → `["fixed-lens-camera"]`                                                                                                      | Maker's fixed-camera specification                                 |
| `catalog.closeFocusM.marketing` | Absent → `0.35`                                                                                                                       | Maker's published minimum focus                                    |
| `catalog.specs`                 | Two process-status lines → `DESIGN f = 33.91 mm`, `DESIGN F/2.89`                                                                     | Retain the 4/4 and one-asphere lines; show design values           |
| `elements[].focalLengthMm`      | Absent → `20.69`, `−16.21`, `20.50`, `−62.97` mm                                                                                      | Paraxial in-air element powers                                     |
| `elements[].role`               | Absent → front collector, negative pre-iris element, positive post-iris element, negative rear resin asphere                          | Describe optical positions and power                               |
| L4 `type`                       | `Negative Meniscus (1× Asph)` → `Negative Meniscus`                                                                                   | Geometric shape; asphere described separately                      |
| `indexReferenceNote`            | Four unsupported procedural notes → removed                                                                                           | Figure 7 supplies the d-line evidence                              |
| `focus.description`             | Calls 0.35 m a schema/UI placeholder → states unit extension and inferred spacings                                                    | Patent and product both specify real 35 cm focusing                |
| `focus.keyframes`               | Default `[0, 1]` → `[0, 0.25, 0.5, 0.75, 1]`                                                                                          | Bound interpolation defocus                                        |
| Final gap                       | Fixed surface-8A `d: 14.6687` → `gaps["8A"]`, BF values `14.6687, 15.535, 16.506, 17.6069, 18.87` mm                                  | Infer whole-unit focus while preserving the printed infinity plane |
| Sidecars                        | Absent → analysis and this audit                                                                                                      | Explain source identification, optical design and limitations      |

Maker, 135 full-frame format, 4/4 counts, marketing focal length 35 mm, design focal length 33.91 mm, marketing f/2.8, design f/2.89, the f/11 endpoint and `focus.closeFocusM: 0.35` were already correct and remain unchanged. No APD tags are added; no cemented groups exist.

### Glass labels

All three labels resolve to vendor Ohara and meet |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15. Differences below are catalog minus patent. The S-LAH51 row differs by −0.000004 in nd, slightly more than the validator's stated ≤0.000002 but still well inside the matching tolerance.

| Element | Old → new                                                                                                                   |       Δnd |       Δνd |
| ------- | --------------------------------------------------------------------------------------------------------------------------- | --------: | --------: |
| L1      | `Unmatched (source n=1.7432, Abbe=49.31; supplier unproven)` → `S-LAM60 (Ohara)`                                            | −0.000002 | +0.029444 |
| L2      | `Unmatched (source n=1.72825, Abbe=28.46; supplier unproven)` → `S-TIH10 (Ohara)`                                           |         0 | +0.000599 |
| L3      | `Unmatched (source n=1.7859, Abbe=44.19; supplier unproven)` → `S-LAH51 (Ohara)`                                            | −0.000004 | +0.012637 |
| L4      | `Unmatched (source n=1.52542, Abbe=55.78; supplier unproven)` → `Unmatched (COP resin, Zeonex type; nd 1.52542 / νd 55.78)` |         — |         — |

The Ohara names are catalog equivalents, not supplier identifications. The resin grade remains unresolved; the patent names ZEONEX in ¶0030. The source nd/νd values remain literal. There were no catalog-copied nC/nF/ng fields to remove.

### Focus spacing and interpolation

The schema explicitly supports unit focus with one variable final gap. The validator's inferred 18.87 mm near gap is retained; solving directly for exactly 350 mm object-to-image distance gives 18.8747221 mm, explaining the rounded endpoint's approximately 350.30 mm readout. The near extension is 4.2013 mm. Internal separations and stop-to-element distances stay fixed.

Two endpoint states alone gave 0.2644 mm defocus at the inverse-distance midpoint and a maximum of 0.2659 mm. Three paraxially inferred intermediate spacings reduce the four interval-midpoint residuals to 0.0119, 0.0144, 0.0181 and 0.0233 mm; the maximum across travel is 0.0234 mm at about t = 0.878, below the required 0.05 mm. No finite state is marked as source-published or assigned a source-certified finite conjugate. The paraxial near distance is 350.33 mm with the infinity rounding offset held fixed.

### Optical results and audit checks

Before → after infinity values are identical: EFL 33.9095834978856 → 33.9095834978856 mm; f-number 2.89 → 2.89; stop radius 4.959298777311241 → 4.959298777311241 mm; half-field 32 → 32°; tracing half-field 26.802542004094033 → 26.802542004094033°. Paraxial BFD is 14.6683151 → 14.6683151 mm, first-to-last surface length 21.0641 mm and total infinity track 35.7328 mm. The patent prints 33.91 mm, f/2.89 and fb 14.6687 mm.

Surface audit: OK, no validation errors. Aperture audit: within 3% of the stated f-number; zero rim, trace or iris limits and zero failures. Image-circle audit: one lens checked, zero undersized, zero skipped. Field coverage is 99%, modeled 32.0° → 21.51 mm of the 21.65 mm full-frame half-diagonal; corner 32.2° clear; zero skipped or unsolved. The validator's separate clear-aperture check at IH 21.6 mm found no axial clipping or blocked chief ray, with about 4% / 14% / 10% one-sided corner bundle clipping at surfaces 1–3.

The analysis covers identification and product-link strength, architecture, all four elements, catalog equivalents and unresolved resin, inferred focus, the asphere, and image-plane/field/rim limits. The fixed prescription, material coordinates, aperture, field and infinity optical values remain unchanged.

### Sources and open items

Product metadata is supported by the [Olympus 18 February 1997 specifications](https://www.olympus.co.jp/jp/news/1997a/nr970218mju2spj.html), the [Olympus release reproduced by Wanafoto](https://wanafoto.blogspot.com/1997/02/olympus-mju-ii-compact-camera.html), [135compact](https://135compact.com/135_olympus_mjuII.htm) and [Wikipedia](https://en.wikipedia.org/wiki/Olympus_Stylus_Epic). The prescription and material discussion are from [JP 3610160 B2](https://patents.google.com/patent/JP3610160B2/en).

Open: The exact production example, glass suppliers and resin grade remain unidentified. A later semi-diameter pass should revisit L1's asymmetric clear radii, the L1/L2 overlap drawn in Figure 1, indistinct L2/L3 curve endpoints, and L4's rear 7.7–7.9 mm reading and bevel shape. The inferred focus states are paraxial spacings, not a measured production travel law or evidence of agreement with Figure 8's near-focus aberrations. The 64° field lands slightly inside the patent's 21.6 mm image height; this retained rounding and partial corner vignetting are documented rather than corrected by rim changes.

Second review fixes: The analysis and audit now cite the Wanafoto article directly instead of its monthly archive, with obsolete access claims removed. Unrelated commentary was removed from the audit while preserving its optical findings and unresolved lens questions. The prescription and optical values remain unchanged.
