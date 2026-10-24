# Audit Log — SIGMA APO 50-500mm f/4.5-6.3 DG OS HSM

Patent: JP 2011-039260 A, Numerical Example 2 (¶0034, printed page 8; lens section Figure 8, printed page 12)
Family: JP 5417083 B2 (grant of application JP 2009-186204, printed page 8): identical Example 2 tables

## 2026-10-24 — Source validation, rim sizing, wording and analysis rewrite

### Source identification

- Front page: applicant Sigma Corporation, inventor Tomoki Kono (KONO TOMOKI), filed 2009-08-11, published 2011-02-24.
  These match `source.patentNumber`, `patentYear: 2011`, `authors` and `assignees`.
- Example 2 is the only embodiment with 22 elements and four nd 1.49700 / νd 81.6 elements. Examples 1 and 3 each have
  41 surfaces and 23 elements, with a four-element fifth group. Example 3 is also a 43–426 mm design.

### Transcription check

- All 39 rows were checked against the 400 dpi table render: R, d, nd and νd for surfaces 1–39, with the stop at row 21
  followed by 4.7312. Every value matches the file exactly. The grant table is identical.
- Every infinity and finite variable gap at f = 51.50 / 159.61 / 485.00 mm matches, as do the finite object
  distances d0 = 1978.6638 / 6115.9619 / 18651.9325 mm.
- The variable-gap table labels its fifth and sixth rows "d28" and "d35". Those labels are carried over from the
  41-surface Examples 1 and 3; in Example 2, surfaces 28 and 35 carry fixed 0.15 and 0.80 mm spacings. The rows are
  applied to d24 and d33, and no value is changed. G3's distance to the image is then 190.991 mm in all three columns,
  as claim 3 requires.
- Paraxial EFL is 51.4979 / 159.6018 / 484.9537 mm against the printed 51.50 / 159.61 / 485.00 mm. Back focus
  minus printed Bf is 0.0034 / 0.0063 / 0.0179 mm.
- Longitudinal spherical aberration at the design f-numbers is within ±0.13 mm at all three stations, so there is no
  sign of a misprint.
- The finite columns trace at magnification −0.0250 in all three states, with object-to-image distances of
  2.240 / 6.425 / 19.001 m.
- Conditions (1)–(5) recompute as 0.41 / 0.179 / 0.087 / 0.52 / 0.0035, the printed values.

### Product correlation

| Evidence | Patent Example 2 | Product |
| --- | --- | --- |
| Elements / groups | 22 / 16 | 22 / 16 (Sigma product page; Imaging Resource) |
| Low-dispersion positions | L2, L3, L9, L14 at 1.49700 / 81.6 | Four SLD elements, coloured at the same four positions in Sigma's construction diagram |
| Layout | G1 3 singlets; G2 1; G3 1 + 1 + doublet; G4 1 + doublet; stop; G5 doublet; G6 3 singlets + doublet; G7 2 doublets | Same sequence in Sigma's diagram |
| Focal range / aperture | 51.50–485.00 mm, F/4.57–6.47 | 50–500 mm, f/4.5–6.3 |
| Stabilization / focus | G3b shifts across the axis (claim 1); G7 rear focus (claim 2) | OS; HSM internal focus |
| Dates | Filed 2009-08 | Released 2010 |

Sources: Sigma product page (https://www.sigma-global.com/en/lenses/50_500_45_63_os/), Imaging Resource
specifications. The correlation is strong; a patent example is still not a certified factory prescription.

### Derived quantities

| Item | Before | After | Basis |
| --- | --- | --- | --- |
| Zoom stations | 201 (3 published) | 65 (3 published: stations 0, 20, 64) | Retained subset of the solved cam, denser toward tele. Maximum interpolation defocus is 0.0154 mm (0.0826 mm for a uniform 65-station subset); each station's own residual is at most 0.018 mm. |
| Focus keyframes | 21 | 5 ([0, 0.25, 0.5, 0.75, 1]) | Keyframe 4 is the printed finite column; keyframes 1–3 are interpolated G7 positions. |
| Derived numbers | Full float precision | 4 decimals | Published values unchanged |
| File size | 826 KB | 51 KB | |

- On the retained stations, G1, G2 and G4–G7 move monotonically and G3 stays within 0.001 mm.
- The stop radius is derived from the printed f-numbers (10.49 / 10.48 / 10.45 mm at the published stations).
- Station `closeFocusM` values are the patent's finite conjugates (2.24 / 6.425 / 19.0 m), not the maker's
  0.5–1.8 m minimum focus.

### Rim sizing

All `sd` values are inferred. They were measured against Figure 8 at 300 dpi; the scale is 0.2108 mm/px, from S1 to
S39 = 206.36 mm over 979 px. Two inferred rims already sit at the figure scale and anchor the comparison: G2 (28.75 mm)
and G5 (13.16 mm). The silhouette was also checked against Sigma's construction diagram.

| Surfaces | Element | Before | After | Figure (mm) | Reason |
| --- | --- | ---: | ---: | ---: | --- |
| 3–4 | L2 | 47.694 | 46.5 | 42.8 | Knife edge 0.11 mm → 0.75 mm; follows the figure's L1:L2:L3 = 207:203:196 px |
| 5–6 | L3 | 49.611 | 45.0 | 41.3 | 20% above the figure; knife edge 0.08 mm → 1.8 mm |
| 9–10 | L5 | 21.123 | 20.0 | 17.3 | Knife edge 0.17 mm → 0.59 mm |
| 13–15 | L7/L8 | 16.139 | 15.3 | 14.4 | Knife edge 0.20 mm → 0.54 mm |
| 18–20 | L10/L11 | 15.156 | 14.8 | 14.2 | Knife edge 0.36 mm → 0.56 mm |
| 25–26 | L14 | 18.491 | 15.5 | 13.3 | 39% above the figure, which draws G6 at one diameter |
| 27–28 | L15 | 19.330 | 15.5 | 13.3 | 45% above the figure |
| 29–30 | L16 | 16.563 | 15.4 | 13.5 | Knife edge 0.06 mm → 0.54 mm |
| 31–33 | L17/L18 | 14.937 | 14.2 | 13.1 | Knife edge 0.04 mm → 0.53 mm |
| 37–39 | L21/L22 | 15.685 | 15.0 | 13.1 | Knife edge 0.03 mm → 0.55 mm |
| 34–36 | L19/L20 | 11.784120 | 11.7841 | 11.8 | Rounded only; matches the figure |

- Unchanged rims: S1/S2 at 47 (front element, inferred), S7/S8 at 28.752, S11/S12 at 17.878, S16/S17 at 15.915 and
  S22–S24 at 13.159. The stop radius is unchanged and derived.
- After the change, an exact meridional trace at Y = 21.6 mm and F/4.57 / 5.73 / 6.47 shows that the axial beam and
  the corner chief ray pass every surface at infinity and at the finite columns.
- Off-axis vignetting is real and retained: 17–28% per side on L2/L3 and up to 41% on L19/L20.
- Field coverage reaches the 21.63 mm corner at all 65 stations. The aperture audit puts every station within 3% of
  its stated f-number. The surface validator reports no errors, and the image circle is not undersized.

### Glass and metadata

| Element | Field | Before | After | Justification |
| --- | --- | --- | --- | --- |
| All | `glass` | `<name> (<Vendor> coordinate-equivalent spectral proxy; supplier unproven)` | `<name> (<VENDOR> coordinate equivalent; supplier unconfirmed)` | House wording; each label resolves to an exact (nd, νd) catalog match (largest Δνd 0.01) |
| L2, L3, L9, L14 | `apd` | — | `inferred` + `apdNote` | 1.49700 / 81.6 equals FCD1; Sigma's diagram marks these four positions SLD; the patent names no special glass |
| All | `label` / `role` | "Source glass body" / boilerplate | "Element N" / specific optical role | Wording |
| — | `subtitle` | "…probable product correlation, approved bounded reconstruction" | "JP 2011-039260 A, Example 2 — production correlation" | Wording |
| — | `catalog.specs` | — | 22/16, design f, design F, all spherical, 4 SLD | Neighbouring Sigma files |
| — | `doublets` | — | D1–D6 (S13–15, 18–20, 22–24, 31–33, 34–36, 37–39) | Cemented interfaces in the table |
| — | `groups` | G1–G7 | G1–G7 with signs | Claim 1 signs |
| — | `focus.description` | Process notes | Plain description of G7 focus and the patent's near states | Wording |
| — | File name | `Sigma50_500F4_5_6_3DGOSHSM.*` | `SigmaAPO50500mmf4563DGOSHSM.*` | Repo naming, matching `SigmaAPO50500mmf463EXRFHSM` |

- `key` `sigma-apo-50-500mm-f45-63-dg-os-hsm` is unique; the earlier non-OS lens is `sigma-apo-50-500mm-f4-63-ex-rf-hsm`.
- The mount ids (sigma-sa, canon-ef, nikon-f, pentax-k, sony-a) and the 135-full-frame format are canonical, and the
  maker's page lists these mounts.

### Analysis sync

- The analysis was rewritten to LENS_ANALYSIS_SPEC. Removed: package and process text, MTF and ray-count logs, and
  claims of resin layers, aspheric terms and polymer media, none of which exist in this all-spherical design.
- Added: the patent's conditions with paragraph citations, group powers and motions, per-element roles, the glass
  palette, the zoom and focus spacing tables, and an explanation of the d28/d35 label reading.

### Follow-ups

- The decentred-OIS state of G3b is not modelled.
- The production minimum focus (0.5–1.8 m) is closer than the patent's tabulated near states (2.24–19.0 m). No source
  gives the extra G7 travel, so focus stops at the patent's near state.
