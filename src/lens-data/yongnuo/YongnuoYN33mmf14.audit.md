# Source and geometry audit

Literal source rows, stop and three physical focus states retained. Rear plate is explicit. Source image plane unchanged. All semi-diameters are preliminary estimates from the inspected patent figure, not printed dimensions; no tracing or performance claim has yet been made (closed: traced below and in the 2026-11-09 sections). Source plot pupil radius 11.1999 mm sets derived f/1.45702, independently of marketing f/1.4. Printed surface 11 is absent but no physical surface is missing. Full field 46.8 degrees is provisional APS-C coverage inference, not a patent quote (wrong: ¶0051 prints 2ω = 48.74°; corrected 2026-11-09).

## Initial geometry check and inferred-rim refinement

Initial figure estimates failed the geometry checks before aperture tracing. No primary optical values were repaired. The preliminary rims were reduced at the unchanged default gap and edge rules while retaining equal-height connected glass contours. These remain modeling assumptions, not factory dimensions; clipping and vignetting depend on them. Revalidation is pending (closed: geometry passes, next section).

Surface | Initial inferred sd (mm) | Refined inferred sd (mm)
--- | ---: | ---:
3 | 15.5 | 14.926
4 | 15.5 | 14.926
5 | 16.5 | 14.926
6 | 16.5 | 14.926
7 | 16.5 | 14.926

## Optical results

Geometry passes at INF, X20 and MOD, and no rim is trimmed in the drawing. Source pupil 11.1999 mm gives iris-limited f/1.457011934. Infinity diffraction MTF converges at the center, half and 95% field, wide open and at f/4; the wide-open geometric MTF at 95% field does not converge at any of the three states. Finite-distance diffraction MTF was not run. The source image plane stays 95 mm behind S1; the paraxial focus lies +0.061687, +0.096270 and +0.141078 mm behind it.

## 2026-11-09 — Deployment validation

Independent check against CN 220137479 U (PDF pp. 6–7): 21 surfaces, the stop, the rear plate, 11 nd/νd pairs, both
variable gaps at three states and both object distances agree; all spherical. Engine EFL 32.637 (printed 32.620),
TL 95.000, magnification 0.0965 at 0.40 m; all four conditional expressions reproduce. Front page: 深圳市永诺电器有限公司,
inventors Zhuang Ying, Ye Yuanhua, Zhuang Yongsheng, Zhuang Yongxiao. Attribution strong: Yongnuo's 2026 catalog
lists E and Z mounts, APS-C, 11 elements / 9 groups, 0.4 m, 0.1×, and low-dispersion plus high-index glass, which
the example's two nd 1.593 and four high-index elements match.

Deployment change: `projection.fullFieldDeg` → 48.74, the printed 2ω (para. 0051); `focalLengthMm.design` → 32.62
(Table 2); `catalog.lensMounts` ["sony-fe", "nikon-z"] from the maker catalog.

Open: the analysis text still calls 46.8° unprinted; wording. (Closed in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. The one-line header became a full comment: patent header values, Table 2 focal length, the missing row
11, the rear plate, the stop sized from the Fig. 2 pupil, the paraxial focus offsets and how the rims were read from
the to-scale Fig. 1 (about 21.5 px/mm at 400 dpi; L1, L5 and L6–L11 within 2%; L2–L4 held at 14.926 mm because the
L2–L3 air space closes at 15.67 mm with equal-height rims). The subtitle went from "qualified associated patent
model" to "Sole example — strong production correlation", following the YN 56mm F1.4. New `catalog.specs`:
11 ELEMENTS / 9 GROUPS, DESIGN f = 32.62 mm, DESIGN F/1.46, ALL SPHERICAL, INNER FOCUS; 0.1× MAX. Every element
gained a `role`. The focus description now states the printed Table 2 states, the 6.598 mm travel of L8–L9 and the
400 mm object-to-image distance at MOD, and the conjugate `source` strings name Table 2. `aperture` gained
`maxFNumber` 16 (published f/1.4–f/16) and `blades` 9 (Yongnuo catalog). `groups` (GR1, GR2 FOCUS, GR3, the patent's
groups) and `doublets` (L3/L4, L6/L7) were added.

Glass labels, exact matches only (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15): L2 H-ZF88, L4/L9/L10 H-ZLaF68C, L5 H-ZLaF50E
(CDGM), L8 FD225 (HOYA, no CDGM row). L1 and L6 (nd 1.593; FCD515/FCD505 at 1.59282, H-ZPK5 at 1.5928), L3, L7 and
L11 stay `Unmatched (patent nd …, νd …)`. No `apd` tag: the catalog drawing is too small to show which elements
Yongnuo marks as low-dispersion. `catalog.closeFocusM.marketing` is set to Yongnuo's 0.4 m: the focus readout,
which holds the image plane at the infinity paraxial focus, shows 42 cm at MOD, more than 2% from the marketed
value, so the marketed figure now appears beside it.

Analysis. The repeated per-element boilerplate, the MTF grid and convergence notes and the process wording were
removed. Added: the product (2024 announcement, mounts, catalog specifications), a numbered attribution list with
caveats, element roles, the glass table and match rule, the conditional-expression values, the model's scope, and
corrected field statements (printed 2ω = 48.74°; the real chief ray reaches the 14.18 mm corner at 24.3°). The
Photons to Photos hub citation was dropped: the page could not be shown to list this lens.

Engine numbers before and after, identical: EFL 32.636776 mm, FOPEN 1.457012, half-field 24.37°, stop radius
9.604105 mm, infinity BFD 1.0617 mm after the plate, focus keyframes 0 / 0.532586 / 1 (EFL 32.6368 / 31.7847 /
31.1097 mm). audit:surface OK; audit:aperture reports no rim limit; field coverage 100% (corner 24.3°, clear).

Open: L2–L4 rims are 1–1.5 mm below the drawn 15.3–16.5 mm; the figure implies stepped rims or lands that a later
rim pass could model. Open: Yongnuo's product page also lists a Canon RF version (YN33mm F1.4R DA DSM), and reviews
list a Fujifilm X version; `lensMounts` keeps the catalog's E and Z. Open: if a legible maker drawing turns up (the
product page carries images YN33mm-F101 to F110 that were not viewed), tag the two νd ≈ 68.5 elements `apd:
"inferred"` if it marks them low-dispersion. Open: `rearPlates[0].source` still reads "literal rear plate" and has
no glass label. Open: elements are named L1–L11 while the patent and the YN 56mm entry use G1–G11.
