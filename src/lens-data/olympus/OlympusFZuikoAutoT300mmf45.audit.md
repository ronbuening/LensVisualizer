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
against a figure (Fig. 1 is not to scale). The lens's introduction year (1972–1974 in reference listings) is not
fixed; a dated Olympus catalogue page would settle it and might carry a sharper construction drawing.
