# Olympus M.Zuiko Digital ED 12–200mm f/3.5–6.3 — audit log

## 2026-10-29 — Deployment validation and fixes

**Source re-read.** JP 2020-154139 A, Numerical Example 1 (pp. 18–19, ¶0162), checked against the page images: 28 lens
surfaces and the cover plate (R, d, nd, νd), the stop at S15, five cemented interfaces, four aspheric surfaces (k = 0
and 14 coefficients, conic convention per ¶0161) and the five variable gaps plus d30 at all five printed states. 101
surface fields, no mismatches. The Example 1 table of the grant JP 7204554 B2 is identical. Front page: published
2020-09-24, application 2019-052558 filed 2019-03-20, applicant Olympus Corporation, inventors Masahiro Imamura and
Toyonori Kon. Its Article 30 disclosure cites the Olympus 12–200mm specification page, published 2019-01-24.

**First order, patent → model.** EFL 12.36 / 25.56 / 46.76 / 93.32 / 196.04 → 12.362 / 25.560 / 46.760 / 93.332 /
196.134 mm. F-numbers 3.60 / 4.66 / 5.45 / 6.08 / 6.47 exact. Air-equivalent BF 17.70 → 17.71 at W and 17.72 → 17.73 at
T. The real chief ray at 10.06 mm image height lands at ω = 41.96° at W (printed 2ω = 83.93°). At 11.15 mm it lands at
13.09° and 3.23° at Int.2 and T (printed 26.19° and 6.46°). Group focal lengths match f1–f5 (105.06 / −10.96 / 17.75 /
−19.22 / 50.53 mm). The LTL row equals the S1–S28 length (99.36 against 99.37 mm), not the BF-inclusive length ¶0159
defines (erratum).

**Maker comparison.** The OM SYSTEM Japan specification page lists 16 elements / 11 groups: 3 aspherical, 2 Super ED,
2 ED, 2 HR and 1 Super HR. It also gives 84°–6.2°, 0.22 / 0.70 m minimum focus, a 72 mm filter, 7 blades and f/22; the
lens was announced 2019-02-13. The colour-coded construction diagram (https://jp.omsystem.com/content/000099683.jpg)
matches Example 1 at L1 (Super HR), L2 and L11 (Super ED), L3 (ED), L8 and L10 (HR) and L5 / L9 / L15 (aspherical). It
colours L12 as ED, where Example 1 prints 1.51633 / 64.14. Example 1 fits the product better than the other examples:
Examples 2–4 have 15 elements, and Example 6 is 16 / 11 but has only one νd ≈ 95 glass.

**Rims and focus (unchanged).** Semi-diameters are estimated from Fig. 1. The tele and Int.2 panels give a front radius
of about 25 mm; L4 is stepped at 13.0 / 9.5 mm. A larger front-doublet / S7 rim (26.8 / 9.8 mm) also passes the
geometry checks. It was not adopted: the printed wide-angle field already clears, and only the 10.82 mm Four Thirds
corner would need it. G4-only close-focus reconstructions were tried earlier and rejected, because their distance
labels could not be kept consistent with the computed conjugates. The model stays at infinity focus, with closeFocusM =
0.22 m (maker data).

**Fixes in this pass.**

- Zoom path: 129 → 42 stations (5 printed, 37 inferred).
  - Previous law: G1–G3 linear with G4 solved for focus throughout. Between Int.3 and T this made G4 back up 0.19 mm
    (D25 22.08 → 21.89 → 23.42 mm) and D22 overshoot to 13.02 mm between the printed 11.92 and 12.35 mm. d28 also
    carried the d30 rounding (12.92 mm at Int.1, 12.95 mm at T), so the fixed G5 moved.
  - New law: W → Int.3 is unchanged. Int.3 → T moves G1, G3 and G4 linearly and solves G2, which departs up to 0.80 mm
    from its straight path. d28 = 12.93 mm in every state.
  - Result: only G2 reverses, at Int.1 and Int.3, as the printed positions require.
  - Defocus: inferred stations are within 0.0001 mm. Interpolation between stations adds at most 0.018 mm. The printed
    states keep −0.003 / +0.030 / +0.009 / −0.032 / −0.017 mm. EFL rises monotonically.
  - Station spacing is the smallest count per segment (12 / 7 / 5 / 17 intervals) that keeps interpolation defocus
    within 0.02 mm, so slider travel is not uniform in focal length.
- Glass: labels changed to the corpus form. L5 / L15 (1.80280 / 40.55) and L9 (1.76960 / 49.30) have no
  coordinate-equal catalog row (nearest S-LAH63 1.8044 / 39.59 and HOYA MC-TAF101-100 1.76902 / 49.29) and stay
  Unmatched. L2, L3 and L11 are tagged apd "inferred"; L12 is left untagged.
- Wording:
  - name, subtitle and specs
  - focus description
  - element labels and roles
  - header comment
  - rear-plate source note
  - errata text: the third erratum's residuals are updated for the fixed d28
  - analysis: process prose removed and the zoom, coverage and glass sections updated

**Checks after the fixes.**

- Surface validator: no errors.
- Image circle: not undersized.
- Field coverage: 39 of 42 stations reach ≥ 99% of the 10.82 mm corner. 12.36, 13.39 and 14.44 mm reach 94%, 97% and
  99%: the chief ray is clipped at S1, and at 12.36 mm also at S7.
- Real-ray clearance: no axial clipping. At the printed 10.06 mm height no chief ray is blocked.

**Open.**

- Fig. 9 labels ω = 44.64° against the tabulated 41.97° at W; unresolved.
- The printed-state defocus residuals (up to 0.032 mm) are left as printed.
- Site behaviour shared by every infinity-only lens: a focus value carried in a URL makes the compact comparison
  header print "22 cm" while the geometry stays at infinity. The fix belongs in the UI, not in this file.
