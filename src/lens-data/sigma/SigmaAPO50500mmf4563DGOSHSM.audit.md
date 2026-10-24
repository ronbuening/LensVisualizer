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

## 2026-10-24 — Semi-diameter pass against the patent figure

### Source and scale

- Figure 8 (PDF page 13, printed page 12) is Example 2 at the wide end. Its companion Figure 9 prints F = 4.57 and
  2ω = 46.37°, Example 2's wide-end values (¶0034). The figure draws 22 elements in 16 groups, matching the file.
- The figure was measured at its native 300 dpi. The optical axis runs vertically at page x = 717.5 px; the drawing
  has no dash-dot axis, so the centre was taken from element symmetry. Vertex crossings along the axis put S1 at
  y = 399 and S39 at y = 1378: 979 px for the 206.359 mm wide-end track, giving 0.2108 mm/px. All 39 predicted
  vertex rows fall within 1 px of the drawn crossings.
- The radial scale was checked two ways. The drawn stop ticks end at 10.4 mm, against the engine's 10.49 mm stop
  radius. Every rim also lands on the row its sag predicts at the measured height. For example, L2's S3 should meet
  its edge 38 px below the vertex at 42.6 mm and is drawn at 38–39 px. A 10 % radial error would move that by
  about 7 px.
- Figure 8 is a CAD-style section. Concave faces end inside a square mounting flange (L1 rear, L3 rear, L4, L6, L12
  front, L14 front, L15 front, L20 rear, L21 front). Those faces were measured where the curve meets the flange.

### Before and after

| Surfaces | Element | Before | After | Figure (mm) | Evidence |
| --- | --- | ---: | ---: | ---: | --- |
| S1 / S2 | L1 | 47 / 47 | 43.5 / 40.6 | 43.5 / 40.6 (flange 43.5) | Figure; stored was 8 % / 16 % over |
| S3 / S4 | L2 | 46.5 | 42.7 | 42.7 | Figure; edge 2.7 mm |
| S5 / S6 | L3 | 45 / 45 | 41.2 / 36.8 | 41.2 / 36.8 (flange 41.2) | Figure; S6 axial floor 36.09 |
| S7 / S8 | L4 | 28.752 | 26.2 / 22.2 | 26.2 (box) / 22.2 (curve end) | Figure; S8 chief at the corner 20.63 |
| S9 / S10 | L5 | 20 | 17.2 | 17.2 | Figure; edge 1.5 mm, as drawn |
| S11 / S12 | L6 | 17.878 | 13.2 / 12.1 | 13.2 / 12.1 (box 14.3) | Figure; S12 axial floor 11.74 |
| S13–S15 | L7/L8 | 15.3 | 13.3 | 13.3 | Figure; square-cut doublet |
| S16 / S17 | L9 | 15.915 | 13.8 | 13.8 | Figure; edge 1.9 mm, as drawn |
| S18–S20 | L10/L11 | 14.8 | 13.3 | 13.3 | Figure |
| S22 | L12 | 13.159 | 10.4 | 10.3 (box 12.0) | Floor: axial 10.32 at the design f-number |
| S23 / S24 | L12/L13 | 13.159 | 12.0 | 12.0 | Figure |
| S25 / S26 | L14 | 15.5 | 11.9 / 13.2 | 11.85 / 13.2 (box 13.2) | Figure; S25 axial floor 11.77 |
| S27 / S28 | L15 | 15.5 | 12.2 / 13.3 | 12.1 / 13.3 (box 13.3) | S27 axial floor 12.18 sets the value |
| S29 / S30 | L16 | 15.4 | 13.4 | 13.4 | Figure; edge 1.3 mm, as drawn |
| S31–S33 | L17/L18 | 14.2 | 13.0 | 13.0 | Figure; square-cut doublet |
| S34 / S35 | L19/L20 | 11.7841 | 11.7841 | 11.8 | Kept; matches the figure |
| S36 | L20 | 11.7841 | 9.6 | 9.6 (box 11.8) | Figure; axial 7.51, corner chief 7.34 |
| S37 | L21 | 15 | 11.0 | 11.0 (box 13.0) | Figure; corner chief 7.79 |
| S38 / S39 | L21/L22 | 15 | 13.0 | 13.0 | Figure |

- Measurement repeatability is about 1 px: 0.5 % on G1 and 1.6 % on the 13 mm rear rims. The same-day pass read
  G2 at 28.75 mm and G5 at 13.16 mm. This pass reads 26.2 mm and 12.0 mm. Every stored rim except L19/L20 sat
  8–16 % above the drawing, so the whole set was moved to keep the proportions consistent.
- The stop is unchanged and still derived from the f-numbers.
- Sigma's construction diagram agrees with these proportions, taking its axial scale for both directions. L4/L1 is
  0.61 there and 0.60 here, L5/L1 is 0.39 and 0.40, L9/L1 is 0.33 and 0.32, and the last doublet over L1 is 0.30 in
  both. The diagram also draws L4's concave rear stepping in before the rim. The earlier comparison found the same
  group sequence and the four SLD positions L2, L3, L9 and L14.

### Clearance and engine results

- The surface validator reports no errors with the new values, and the image-circle check finds no undersized rim.
- An exact real-ray trace at Y = 21.63 mm and the design F/4.57–6.47 covers all 65 stations at all five focus
  keyframes. It shows no axial clip and no blocked corner chief ray. The tightest margins are S27 (12.2 against
  12.18), S22 (10.4 against 10.32) and S25 (11.9 against 11.77).
- Field coverage reaches the 21.63 mm corner at all 65 stations, as before. The design f-numbers and the
  10.49 mm stop are unchanged.
- The engine half-field at the wide end falls from 28.33° to 23.20°. The patent's 23.185° half-field
  (2ω = 46.37°) still fits. S8 now sets the limit; at 22.6 mm it would give 23.57°. S8 was left at the drawn
  22.2 mm because the trace shows no clip.
- Off-axis vignetting increases, and this is what the figure's rims produce. Geometric transmission at the wide
  corner (23.2°) drops from 82 % to 38 %. At 485 mm, transmission at 2.5° drops from 62 % to 41 %.

### Live check

- The local page was viewed at 51.5 mm (infinity and closest focus), 159.6 mm and 485 mm. G1 now reads about 1.65 times
  G2's height and about 3.3 times the rear groups, as in Figure 8. The flanged faces show as tapered rims, because the
  renderer does not draw the flat flange.

### Limitations

- S22, S25 and S27 sit within 1 % of the on-axis beam at the station where the iris is largest (10.63 mm). Any
  future change to the stop schedule or the design f-numbers has to re-check these three faces.
