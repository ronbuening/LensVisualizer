# Build audit

Status: source-qualified infinity representative. Native and reference-MTF qualifications are recorded below; integration outcomes belong to the accompanying package validation manifest. (Closed 2026-11-10: integrated and reworded; see the dated sections below.)

- Pinned baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Isolated repository; no commits, pushes, publication or delivered-package edits.
- Exact patent numbers and first-radius fingerprints absent in baseline lens source search. Broader completed-package absence remains bounded search evidence.
- Literal whole source retained; no hidden retuning, invented glass, plate, finite motion or factory identity.
- H0 static rim failures preserved; current inferred rims pass bounded geometry without override.
- Source-row mapping and deterministic generator retained separately.
- Required layout and infinity-sentinel focus fields present.
- Native geometry, zero trim, iris clearance, official aperture census, sampled rays and spectral-support assessment completed. Reference MTF completed with retained source/format distinctions and bounded convergence limitations; integration outcomes are recorded separately.
- Non-optical initial identity-schema failure preserved; corrected lowercase key and spaced patent number. No source optical values changed.

- Reference MTF findings are recorded in the companion analysis and optical-quality evidence. Max grid128, no source-plane shift, no finite runtime states, no source retuning.

- Initial focused sweep: 22/23 files and 1608/1609 tests passed; one assignee-spelling consistency failure. Only structured corporate-suffix rendering normalized using same-patent original-assignee/assignment records at https://patents.google.com/patent/US4934797A/en. Original cover “Asahi Kogaku Kogyo Kabushiki Kaisha” preserved; canonical “Asahi Kogaku Kogyo Co., Ltd.” corroborated by existing assigneeCorporateHistory.ts. No optical fields or criteria changed.

## Deployment validation (2026-11-10)

Independent check against the 300 dpi page images (the OCR layer drops digits): 21 surfaces, 4 asphere terms plus K
and the 1/10 state all equal Example 4 ×0.24; no mismatches. EFL 23.9996, F/2.0, BF 36.749, TL 105.862 match. Example 4 is
the only F/2.0 example with the 1.618/63.4 rear element, which fits Ricoh's diagram (rear-group asphere and anomalous-
dispersion element, 11/9). The Tokina and FA 135 documents in the package's evidence are unrelated research material.

Applied: `catalog.closeFocusM.marketing` 0.3 (Ricoh); f/22 added to `fStops`.

Open: the patent's printed 1/10 close state (d6 4.95, fB 164.04 at f = 100) could become a close keyframe; real-ray f/2
marginal needs 10.0–10.2 mm at S9–S11 (sd 10; the engine's paraxial iris clears); resin layer type wording; public wording
(name "(E4 representative)", subtitle, specs, `focus.description`) and package-process prose need a cleanup pass. (Resin
type and wording items closed in the cleanup pass below; the other two carry forward.)

## 2026-11-10 — Cleanup and wording pass

Fields changed in the data file:

- Header comment rewritten as plain facts: patent and Example 4, uniform ×0.24 scale from f = 100 with A_p scaled by
  0.24^(1−p) and K = 0 kept, resin layer 1.22 × 0.24 = 0.2928 mm with distinct S14/S15 radii, iris at mid-d10 (inferred
  from the text's element order), rims from Fig. 10, the real-ray f/2 margin at S9–S11, infinity focus only.
- `subtitle`: "US4934797A WHOLE EXAMPLE 4 — QUALIFIED SOURCE REPRESENTATIVE" → "US 4,934,797 A, Example 4 — probable
  production correlation".
- `specs`: "11 GLASS + DISTINCT RESIN / 9 GROUPS", "INFINITY-ONLY SOURCE MODEL", "FACTORY IDENTITY NOT ESTABLISHED" →
  "11 ELEMENTS / 9 GROUPS", "DESIGN f = 24.00 mm", "DESIGN F/2.0", "1 ASPHERICAL SURFACE / 1 ELEMENT", "HYBRID ASPHERICAL
  ELEMENT".
- `catalog.focalLengthMm.design` 23.999618242056 → 23.9996: traced EFL rounded to four decimals, the convention of the
  folder's other patent primes (45.0006, 28.0006, 84.9969).
- `focus.closeFocusM` 1e9 → 1e15 placeholder; `focus.description` replaced by a plain infinity-only text naming the
  moving rear group, the printed 1/10 state at scale and Pentax's 0.3 m / 0.13×.
- Element labels "Glass element N" → "Element N"; resin "Distinct aspherical resin layer" → "Element 8 resin layer",
  type "Positive Meniscus" → "Bonded Aspheric Resin Layer"; one-line roles added to all twelve elements.
- Cemented ids D1/D2 → C1/C2 (H1 kept for the hybrid); `groups` (G1 S1–S6 fixed, G2 S7–S21 focusing) and `doublets`
  (C1 S11–S13, H1 S14A–S16, C2 S17–S19) added.
- `apd: "inferred"` with an `apdNote` on L11, the rear positive meniscus Ricoh's diagram marks as anomalous low-dispersion
  glass; 1.618/63.4 is a phosphate crown (PCD4 θgF 0.540).

Glass relabels, all from "Unmatched (literal source n/v; catalog identity unproved)"; Δ is catalog minus patent, label
form "<name> (<vendor> catalog equivalent; production supplier unspecified)":

- L1, L4 → S-LAL18 (OHARA): Δnd −3.1e-6, Δνd −0.02
- L2 → S-LAH60 (OHARA): Δnd −2.1e-7, Δνd −0.04
- L3 → PBH25 (OHARA): Δnd −2.6e-6, Δνd +0.01
- L5, L9 → PBH6 (OHARA): Δnd −3.1e-6, Δνd +0.04
- L6 → S-TIH3 (OHARA): Δnd −1.9e-6, Δνd −0.00
- L7 → S-LAH63 (OHARA): Δnd −2.2e-6, Δνd −0.01
- L8 → S-TIH11 (OHARA): Δnd +2.7e-6, Δνd −0.02
- L10 → LAH66 (OHARA): Δnd −9.1e-7, Δνd +0.00
- L11 → PCD4 (HOYA): Δnd −2.1e-6, Δνd −0.00
- Resin → "Unmatched (aspheric resin layer; nd 1.5201, νd 50.8)", the FA* 28-70 form.

Vendor choice: the printed rounding (νd 37.2 and 25.4, nd 1.76180 and 1.80440) fits OHARA rows rather than HOYA NBFD10,
FD60, FD140 and NBFD3; νd 63.4 fits PCD4 rather than S-PHM52 (63.33). Remaining ties (TAC8, FD110, TAF1) follow the
OHARA majority; older OHARA names are used where the catalog holds them (PBH25, PBH6, LAH66). The g-line plots cannot
separate the tied rows at their scale. The file carried no nC/nF/ng to drop.

Engine numbers before and after are identical: EFL 23.999618242064543 mm, FOPEN 2, halfField 43.17764982881914°, stop
radius 9.461850256600073 mm, BFD 36.7494 mm, track 105.8616 mm; only the closeFocusM placeholder changed. The surface
audit prints OK and the aperture audit reports no rim limit.

Analysis: identification rewritten around the Ricoh table and diagram, with Example 4 as the only f/2.0 example with
the 1.618/63.4 rear glass (the "Example 2 cannot be excluded" hedge is removed); conditions (1)–(3) and the printed
values added; process prose removed (coordinator handoff note, pinned-baseline precedents, placeholder wording, native
pilot, aperture census, MTF grid and convergence paragraphs, manifest references); "Model Qualification and
Verification" renamed "Model Scope and Limitations"; element boilerplate replaced by glass names and roles; glass table
and a scaled focus table added; production years cited from the Pentax Forums database.

Open:

- The printed 1/10 near state (d6 15.87 → 4.95, fB 153.12 → 164.04 at f = 100; m = −0.0999, object about 0.34 m from
  the image at this scale) could become a published close keyframe.
- A real f/2 marginal ray needs 10.22 / 10.22 / 10.03 mm at S9 / S10 / S11 (sd 10); the engine's paraxial iris (9.46 mm)
  clears.
- Rims against Fig. 10 (300 dpi render, read by eye, about ±3 %), scaled by the S1–S21 vertex span: L1 25.4 (sd 25),
  L2 20.8 (20), L3 16.5 (15.3), L4 12.5 (12), L5 10.3 (10), C1 10.1 (10), H1 9.0 (9), C2 11.8 (12), L11 13.3 (13); all
  within about 4 % except L3, about 8 % under the drawing. Not changed in this pass. (Closed: see the semi-diameter pass
  below.)
- `indexReferenceNote` "Source explicitly defines d-line indices." repeats on all twelve elements; true, left unchanged.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: `patents/US4934797A.pdf`, PDF page 5 (sheet 4), FIG. 10, which the text assigns to Example 4. Native raster
300 dpi; measured at 300 dpi on the upper half (the group brackets and focus arrow are below the axis). The axis is
row 1954. Vertex crossings at the axis run from column 833 (S1) to 1766 (S21), 933 px for the 69.113 mm S1–S21 span:
13.50 px/mm. Two sub-spans agree (S1–S13 13.54, S5–S16 13.46 px/mm). The vertical scale was checked on L2's front face,
whose drawn sag at its 277 px rim (43 px, 3.19 mm) matches the prescription's 3.26 mm at 20.5 mm. The rear group from
S17 on is drawn up to 12 px behind its prescribed stations and L11 thinner than printed, so rear readings use rim
heights only.

Figure readings (outermost rim ink, px → mm) against the stored values:

| Element / surface | Figure       | Stored before | After                      | Evidence and decision                                           |
| ----------------- | ------------ | ------------- | -------------------------- | --------------------------------------------------------------- |
| L1 S1–S2          | 339 → 25.1   | 25 / 25       | kept                       | Agrees.                                                         |
| L2 S3             | 277 → 20.5   | 20            | kept                       | 2.5 %, noise.                                                   |
| L2 S4             | cap 225 → 16.7, land to 277 | 20 | 16.7, `rimExtensionSd` 20 | Figure: concave cap ends at a vertical stroke (columns 992–995, rows 1677–1729). |
| L3 S5–S6          | 220 → 16.3   | 15.3 / 15.3   | kept                       | 6.5 %, inside the noise band; no light depends on it.           |
| L4 S7             | 169 → 12.5   | 12            | kept                       | 4 %, noise.                                                     |
| L4 S8             | cap 142 → 10.5, land to 169 | 12 | 10.5, `rimExtensionSd` 12 | Figure: vertical stroke at columns 1140–1142, rows 1785–1812.   |
| L5 S9–S10         | 138 → 10.2   | 10 / 10       | kept                       | 2 %, noise.                                                     |
| C1 S11–S13        | 135 → 10.0   | 10            | kept                       | Agrees.                                                         |
| H1 S14A–S16       | 122 → 9.0    | 9             | kept                       | Agrees; drawn S14 sag 2.0 mm against 1.9 mm modeled.            |
| C2 S17–S19        | 158–160 → 11.7–11.9 | 12     | kept                       | Agrees.                                                         |
| L11 S20–S21       | 179–180 → 13.3 | 13          | kept                       | 2 %, noise.                                                     |

The two lands sit where the figure draws them: S4's at z = 12.35 mm from S1 (figure 11.89 mm), S8's at 22.99 mm (figure
22.81 mm). Baseline S4 at 20 mm drew L2's rear rim back to z = 17.3 mm, over L3; the figure ends L2 at about 11.9 mm.

Proportional readings (cap end as a share of the drawn edge times the model edge) gave 16.2 and 10.1 mm. S4 at 16.2
lowered the engine half-field from 43.18° to 42.34° (S4 became the field limiter); 16.7 keeps 43.18° and is the
direct reading. S8 at 10.1 cost 4.8 points at 37°; at 10.5 the worst loss is 1.7 points (37.0°: 60.8 → 59.1 %), inside
the 3-point allowance, and the land costs nothing at the corner.

Results with the new rims: engine EFL 23.999618 mm, f/2.000, half-field 43.1776° and stop radius 9.4619 mm, all
unchanged. Corner illumination at 42.7° is 36.2 % before and after; the curve is unchanged to 31.3° and drops by at most
1.7 points between 34° and 40°. The surface audit prints OK, the aperture audit reports no rim limit, the image-circle
audit finds nothing undersized, and field coverage stays 100 % (42.7° to the 21.65 mm corner, clear). Real-ray
clearance at the full-frame corner is unchanged: S4 carries 13.13 mm and S8 7.22 mm of beam, inside the new caps.

Kept: S9–S11 at 10 mm. The figure draws L5 and C1 at 10.2 and 10.0 mm; the real f/2 marginal ray from the paraxial
entrance radius needs 10.22 / 10.22 / 10.03 mm there, but the engine's paraxial iris (9.46 mm) admits no ray that
reaches them and the aperture audit finds no rim limit, so nothing is raised.

Open: L3 reads about 6.5 % larger in the figure (16.3 mm against 15.3 mm); left as noise. The model sketch joins rim
ends straight and does not draw lands; the overlay adds them by hand, so the live page should be checked for the two
lands. (Lands closed: the live page draws both where the figure does; see the second review below.)

## 2026-11-10 — Second review: diagram, labels and movement

Compared the local page (2× screenshot) with FIG. 10 (`patents/US4934797A.pdf`, PDF page 5, native 300 dpi) and with
Ricoh's construction diagram (green aspherical element behind the cemented pair that follows the iris, yellow
anomalous low-dispersion rear element, 11 elements). Rims were re-measured independently with the figure profiler on
the upper half (axis row 1954, 13.50 px/mm): L1 339 px (25.1 mm), L2 277 (20.5), L3 220 (16.3), L4 169 (12.5), L5 138
(10.2), C1 135 (10.0), H1 122 (9.0), C2 159–160 (11.8), L11 180 (13.3). The two drawn lands are vertical strokes:
S4 at columns 992–994, rows 1677–1729 (cap end 225 px, 16.7 mm), S8 at columns 1140–1142, rows 1785–1812 (cap end
142 px, 10.5 mm). Every reading repeats the semi-diameter pass's to within 2 px, and every stored rim is within 4 % of
it except L3 (6.5 % under, inside the noise band; L3 still sits just below L2's cap end, as drawn). No rim changed.

Lands and cuts against `.lens-work/base1119sd` (corner-light tool, full-pupil lattice, wide open at infinity):

| Face | Baseline | Final | Land        | Figure     | Light cost                       | Verdict                   |
| ---- | -------- | ----- | ----------- | ---------- | -------------------------------- | ------------------------- |
| S4   | 20       | 16.7  | to 20       | cap 16.7   | 0.0 points                       | keep: drawn, costs nothing |
| S8   | 12       | 10.5  | to 12       | cap 10.5   | 1.7 points at 37.0° (60.8 → 59.1 %) | keep: slight             |

Each land on its own costs 0.0 points. Worst loss for the lens: 1.7 points at 37.0°; corner (42.7°) 36.2 % before and
after.

S9–S11 real-ray margin: a real f/2 marginal ray from the 6.000 mm paraxial entrance radius meets S9 / S10 / S11 at
10.22 / 10.22 / 10.03 mm and the stop at 10.09 mm, but the engine's derived iris is 9.46 mm, so no admitted ray reaches
the 10 mm rims; the aperture census traces f/2.000 with the iris as limiter. The figure draws L5 at 10.2 mm and C1 at
10.0 mm, inside the reading error of the stored 10 mm. Kept.

Labels changed:

| Field                          | Before                                   | After                                         | Evidence |
| ------------------------------ | ---------------------------------------- | --------------------------------------------- | -------- |
| `diagramLabel`, all 12 elements | none: the diagram drew element ids 1–12, so the resin showed as 8 and L8–L11 as 9–12 | L1–L7, L8r, L8–L11, matching `name` and the inspector | Live page; the FA* 28-70 sibling labels the same way (L1r) |
| Resin `name`                   | Resin                                    | L8r                                           | Agrees with its diagram label |
| `groups` text                  | G1 (−), fixed / G2 (+), focusing          | Front (−), fixed / Rear (+), focusing         | The patent names only a "front lens group" and a "rear lens group" (subscripts F and R in conditions (1)–(2)) |
| Seven `role` strings           | G1 / G2                                  | front group / rear group                      | Same; the analysis prose follows |

Checked and found correct: element types against the signs of R (L1 and L2 and L4 menisci convex to the object, L3, L5
and L7 biconvex, L6 and L8 biconcave, L9 negative and L10 and L11 positive menisci convex to the image); one aspheric
face, S14A, the patent's 14th surface and the position Ricoh colours green; the stop between L5 and C1, as the patent's
element order and Ricoh's iris line place it; cemented brackets C1 S11–S13, H1 S14A–S16, C2 S17–S19; the resin
inspector line (Bonded Aspheric Resin Layer, FL +181.54 mm, plausible for a 0.29 mm layer with radii −27.39 and
−21.31 mm); `apd: "inferred"` on L11, the element Ricoh colours yellow, while the patent text names no special glass.

Movement: the file is infinity only and says so. The patent moves only the rear group, toward the object, as the
Fig. 10 arrow and the 1/10 state show (d6 15.87 → 4.95 and fB 153.12 → 164.04 at f = 100, 2.62 mm at this scale);
the front group is fixed. The focus overlay shows no modeled movement and the slider reads "Not modeled".

Glass: all eleven glass labels resolve exactly (largest |Δνd| 0.04). The resin is unmatched by design and uses the
Abbe fallback; the patent prints only nd/νd for it, the same 1.52010 / 50.8 in Examples 3–5 (1.5200 / 50.8 in
Examples 1–2), so it is a real resin, with no name, line index or partial dispersion anywhere. No catalog row lies in
the exact window (nearest KF5 / CF5 1.5231 / 50.9). No constant or nd-only medium.

Colour: Fig. 11 chromatic panel read at 600 dpi (123 px per unit at f = 100): at the pupil rim d −0.14, g −0.35,
C +0.20; paraxial C +0.27, g −0.06. The model, rescaled to f = 100, gives rim d −0.15, g −0.31, C +0.25 and paraxial
C +0.26, g −0.01, inside the reading error.

Assignee "Asahi Kogaku Kogyo Co., Ltd." is the corpus's canonical form (33 files). Engine numbers are unchanged:
EFL 23.9996 mm, f/2.000, half-field 43.18°, stop radius 9.4619 mm. Surface audit OK, aperture census no rim limit,
image circle not undersized, field coverage 100 % to the 21.65 mm corner.

Open: the printed 1/10 near state and the S9–S11 real-ray margin above stay as recorded; L3 stays 6.5 % under the
figure.
