# OLYMPUS F.ZUIKO AUTO-T 300mm f/4.5 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 3,819,253 (sole example, PDF p. 4 and the claim repeat): 10 R, 9 d, 6 nd/νd agree; native
f = 300, so no scaling. Engine EFL 299.845, f/4.5, half-field 4.0° (Fig. 2C/2D), telephoto ratio 0.750 (claim: within
0.8). The patent prints no back focus, stop or clear apertures: the stop at the midpoint of d7 and every semi-diameter
come from PhotonsToPhotos' Optical Bench diameters, and the last gap is the paraxial back focus.

Attribution strong: 6 elements / 4 groups, 8° diagonal, f/4.5–32, 3.5 m, OM system launched 1972 (priority JP 47-47166,
May 1972); the mir.com.my OM construction drawing shows the same four groups and proportions.

Deployment changes: added `catalog.lensMounts: ["olympus-om"]` (missing in the package); `patentNumber`
"US 3819253 A" → "US 3,819,253" (house form).
Open: `focus.closeFocusM` 10 is a placeholder (production 3.5 m); `fStops` stop at 22 (lens closes to 32); package
wording ("Qualified patent reconstruction", "P2P") remains for the cleanup pass. (All three closed in the cleanup pass
below.)

## 2026-11-09 — Cleanup and wording pass

Data file. The header comment is rewritten in plain terms and keeps every fact: patent, sole example, native f = 300
(no scaling), what is printed, the computed paraxial back focus, the stop at the midpoint of d7 and all semi-diameters
taken from the PhotonsToPhotos Optical Bench transcription, the glass treatment and the static focus. `subtitle`
"Qualified patent reconstruction; secondary stop and apertures" → "US 3,819,253, sole example — strong match to the OM
production lens". Added `specs` (6 ELEMENTS / 4 GROUPS, DESIGN f = 300 mm, DESIGN F/4.5, ALL SPHERICAL, 1
ANOMALOUS-DISPERSION ELEMENT). `focalLengthMm.design` 299.845 (computed) → 300 (printed). Added
`catalog.closeFocusM.marketing` 3.5 (mir.com.my specification, retail listings). `focus.closeFocusM` 10 placeholder →
1e15 with a plain static-focus description; the patent prints the infinity state only and names no focusing group.
`fStops` gain 32 and `maxFNumber` 22 → 32 (mir.com.my: f/4.5–32).

Elements. Removed the six identical `indexReferenceNote` strings; added a `role` to each element. Glass relabels, each
an exact match to the printed pair (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15) confirmed to resolve to that row: L1 → S-FSL5
(OHARA), L2 → LAC13 (HOYA), L3 → PCD4 (HOYA), L5 → LAC8 (HOYA), L6 → FF5 (HOYA, Δνd 0.15, at the limit). L4 "KzSF
class, supplier unknown" → an `Unmatched (...)` label; the nearest row, OHARA BPH50, misses nd by 0.0002. L4 gains
`apd: "patent"`: the patent text names it an abnormal-dispersion glass of KzSF type. The cemented pairs L3–L4 and
L5–L6 gain `cemented` tags D1 and D2 and matching `doublets` brackets, so the inspector and diagram show them as
doublets.

Colour check before keeping the relabels (telephoto, so the g-line matters). Paraxial focus relative to d on axis,
patent Fig. 2A read at 200 dpi: C +0.25, F −0.14, g +0.09 mm. Abbe-only model: +0.297, −0.119, +0.335. With the five
catalog equivalents: +0.270, −0.144, +0.138. The relabels move all three toward the plot; a ΔPgF near −0.005 in L4
(not added, none printed) would close the rest of the g-line gap.

Analysis. Removed process material (pixel inspection, package and archive references, MTF and transmission sample
results, model-calibration and polychromatic-gate wording, browser-UI note) and the six repeated focal-length
disclaimers. Added the product (F.Zuiko and later multicoated Zuiko Auto-T, both 6/4; 8°; f/4.5–32; 3.5 m by straight
helicoid), the six-point attribution, the mir.com.my drawing comparison, the patent's component-to-element mapping,
group focal lengths (+180.75 / −142.79 mm), telephoto ratio and Petzval sum, the glass table, the Fig. 2A colour
comparison, the stop and clear-aperture provenance and a scope table.

Engine, before → after: EFL 299.8453, f/4.5, half-field 4°, stop radius 18.698 mm, BFD 84.7866 and TL 224.8866 mm
unchanged; `closeFocusM` 10 → 1e15 and `maxFNumber` 22 → 32 as intended. Surface audit OK; aperture audit reports no
rim limit.

Open: the stop at the midpoint of d7 is the PhotonsToPhotos convention; the mir.com.my drawing may place the diaphragm
nearer 70 mm behind S7, which would change off-axis vignetting only. Rims stay as transcribed and are not checked
against a figure (Fig. 1 is not to scale). (Rim item closed in the semi-diameter pass below, which also finds Fig. 1
close to scale; the earlier "not to scale" reading was wrong.) The lens's introduction year (1972–1974 in reference
listings) is not fixed; a dated Olympus catalogue page would settle it and might carry a sharper construction drawing.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US3819253.pdf`, sheet 1 (PDF page 2), Fig. 1, the only section drawing, of the sole example at
infinity (the front page repeats it smaller). The scan is 72 ppi native; it was rendered at 144 dpi, the axis line was
fitted (3.49° tilt, rms 0.5 px over 282 rows) and the drawing resampled along and across that axis.

Scale, both directions. Vertex crossings beside the axis (S1 168, S2 413, S3 481, S4/S5 520, S6 734, S7 774, S8 2580,
S9 2611, S10 2674 px) give 17.74 px/mm through the front group (S1–S7, 34.1 mm), 18.07 across d7 (100 mm), 15.6 in
the rear doublet (6 mm) and 17.88 overall (S1–S10, 140.1 mm); d7 is drawn to scale and the thin elements somewhat thin.
Across the axis, arcs fitted to the drawn R1, R2, R3, R6 and R7 at the front-group axial scale give 18.0, 17.3, 18.0,
17.5 and 16.1 px/mm, median 17.5; the rear surfaces' short arcs scatter (15–20). Readings use 17.5 px/mm across the
axis. The drawn axis runs about 7 px off the element centres, so each rim is the mean of its top and bottom readings.

Rims (figure px → mm, stored, figure/stored), read where each curved face ends (L2 and the rear face of the front pair
end in bevels; L1 and the rear doublet are drawn square):
S1 630 → 36.0, 35.73, 1.01. S2 630 → 36.0, 35.73, 1.01. S3 605 → 34.6, 35.95, 0.96. S4 578 → 33.0, 32.96, 1.00.
S5 582 → 33.3, 33.39, 1.00. S6 585 → 33.4, 33.39, 1.00. S7 546 → 31.2, 31.04, 1.00. S8 227 → 13.0, 13.76, 0.94.
S9 241 → 13.8, 14.83, 0.93. S10 241 → 13.8, 14.83, 0.93.

The PhotonsToPhotos diameters for L1, the front pair and L2's rear face match the figure within 1 %. One change: S3
35.95 → 34.6. The figure ends L2's front face 1.4 mm inside L1's rim (605 against 630 px, each read to about ±3 px),
where the stored values put it 0.2 mm outside; the step order is now as drawn and L2's front/rear ratio is 1.05
against 1.05 drawn. S3 does not limit any traced beam: the f/4.5 axial ray reaches 31.66 mm there, the gap to S2 stays
3.9 mm at the rim, and the corner light is unchanged.

Kept: the rear doublet, drawn about 7 % smaller than stored (S8 0.94, S9/S10 0.93). Its drawn thickness is also 13 %
short of scale, so its own drawn proportions (rim to thickness 2.58) match the model's (2.47) within 5 %, and the
mir.com.my construction drawing gives it 0.42 of the front element's diameter against 0.415 stored and 0.38 in the
patent figure. Moving it to the figure would cost 5.1 points of light at the 4° corner (84.6 → 79.5 %), more than the
3-point allowance; a half-way move would cost 2.3. L1's square rim, both front-pair faces and L2's rear face are
within reading error and keep their values.

Clearance, final set: surface audit OK; aperture audit reports no rim limit; real-ray trace at Y = 21.6 mm shows no
axial clip or blocked chief ray (ω 4.08°); image-circle check 0 undersized; field coverage 98 %, limited by the
declared 4° field (21.16 of 21.65 mm), corner clear. Engine EFL 299.845 mm, f/4.5, half-field 4.0° and stop radius
18.698 mm unchanged. Geometric transmission at 0, 2.0, 2.7, 3.3 and 4.0°: 100, 99.1, 97.3, 92.3, 84.6 % before and
after. The only printed state is infinity, and the page render at that state shows L2's front rim just inside L1's,
as drawn. Overlay of model outlines on the rectified figure (new rims red, old blue) kept outside the repo.

Open: the rear doublet's rims stay about 7 % above the figure reading for the reasons above.

## 2026-11-09 — Glass coverage pass

L4 (patent 1.7398 / 31.7, which the patent calls an abnormal-dispersion glass of KzSF type) was the only element on
the Abbe estimate. Its label is now "BPH50 (OHARA; nearest catalog row to patent nd 1.7398, νd 31.7)", which resolves
to OHARA BPH50, 1.739997 / 31.71 (Δnd +0.0002, Δνd +0.01). The catalog curve gives P_g,F 0.5902, within 0.0003 of
the normal line, so the label adds a measured dispersion curve but not the anomalous partial dispersion the patent
names; `apd: "patent"` stays and the `apdNote` says so.

Colour check, paraxial focus relative to the d-line on axis (mm). Fig. 2A was re-read at 300 dpi: the ±0.5 mm bar is
820 px long, and the curve ends at the axis lie at 335 (C), 462 (g), 529 (d) and 653.5 (F) px. The d curve ends 11 px
from the bar's midpoint, so the table gives the patent offsets from the d curve, as the model's are; the
cleanup-pass reading from the bar midpoint (C +0.25, F −0.14, g +0.09) is given in brackets.

| Line | Fig. 2A | L4 on Abbe number | L4 as BPH50 |
|---|---|---|---|
| C | +0.237 (+0.25) | +0.270 | +0.269 |
| F | −0.152 (−0.14) | −0.144 | −0.145 |
| g | +0.082 (+0.09) | +0.138 | +0.133 |

Measured from the d curve, all three lines move closer to the plot (C by 0.001, F by 0.001, g by 0.004 mm). Against
the bar-midpoint reading F moves 0.001 mm away, far below the plot's reading precision (one line width is about
0.02 mm). Kept. EFL, f-number, half-field, stop radius and back focus are unchanged at the d-line.
