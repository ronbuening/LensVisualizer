# Private whole-E3 authoring audit

JP2025044411A Embodiment3 selected as a complete separate representative, not a repaired E1. All13rows and both complete asphere tables are source-native. Literal final18.81 and imagez41.02 frozen before native calls; header41.03/G2track13.04 versus literal13.03 and weakG1focal residual remain explicit. Source SD/iris hypotheses frozen before construction/tracing, never resized afterward. Native geometry zero hidden trim; six source-field scalar diffraction results pass, with original sparse208-ray-per-field clipping retained.

## 2026-11-09 — Deployment validation

Independent check against the full JP 2025-044411 A (Google Patents, 17 pp.; tables on pp. 13–14): 13 rows, the
stop, 2 cemented pairs, both aspheres (K, A4–A14) and D0/D13 at both states agree with the file; scale 1. Engine
EFL 18.543 (printed 18.54), F/2.82, BF 18.81, ω 37.95°, f2/f23 reproduce. Front page: Cosina Co., Ltd., inventor
Tatsuya Moriyama, published 2025-04-02. Attribution: 7/5, APD front element and the double-sided rear asphere
match Cosina's diagram; Embodiment 1 (the patent's representative figure) fits the L7 front-face shape slightly
better but prints L1 nd 1.78749, a one-digit misprint of 1.48749. Embodiment 3 is kept.

Deployment change: `maker` → "Voigtländer"; f/22 added to `fStops` and `maxFNumber` 22, as Cosina lists f/2.8–22.

Open (all closed in the cleanup pass below): the printed close state (D13 21.62, 0.169 m, 1:6.6) is not modeled;
glass labels; wording.

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten in plain terms, keeping the patent, example, no scaling, the asphere convention,
the Embodiment 1 misprint (L1 nd 1.78749 for 1.48749) and why Embodiment 3 is used, the printed-versus-paraxial
image gap (18.81 against 18.814 mm), the 41.02/13.03 against 41.03/13.04 mm rounding, the G1 focal-length gap
(1113.9 against 1107.30 mm), and how the stop and rims were set. Subtitle → "JP 2025-044411 A, Embodiment 3 —
probable production correlation". The seven process-note specs → 7 ELEMENTS / 5 GROUPS, DESIGN f = 18.54 mm, DESIGN
F/2.82, 2 ASPHERICAL SURFACES / 1 ELEMENT, UNIT FOCUS; 1:6.6 MAX. `catalog.closeFocusM.marketing` 0.17 (Cosina
product page). Element labels "Source L16"… → "Element 1"…; boilerplate roles replaced by each element's job, with
the patent paragraph where one applies; L1 apdNote rewritten (Cosina marks the front element as anomalous partial
dispersion; FK5-type pair). Exact catalog equivalents replace the seven `Unmatched` labels (all within 0.0001 in nd
and 0.15 in νd, each confirmed to resolve): L1 J-FK5 (HIKARI), L2 TAFD55 (HOYA), L3 E-FD1L (HOYA), L4 and L5 TAFD37A
(HOYA), L6 J-SF6 (HIKARI), L7 L-BAL42 (OHARA).

Focus. The printed shortest-distance state of Table 11 is now modeled: surface 13's `d` moved into `gaps["13"]` as
D13 [18.81, 21.62], `focus.closeFocusM` 1e15 → 0.16903 (125.20 + 22.21 + 21.62 mm object to image),
`published: [1]`, and one `first-surface` conjugate at 125.20 mm citing Table 11. Description rewritten (PUBLISHED
unit focus, 2.81 mm extension, 1:6.6).

Engine before → after (infinity): EFL 18.54269 → 18.54269 mm, F/2.82 → 2.82, half field 37.95° → 37.95°, stop
radius 3.44193 → 3.44193 mm, BFD 18.8138 → 18.8138 mm, track 41.02 → 41.02 mm. New close keyframe: object 125.24 mm
from surface 1 (printed 125.20), 169.07 mm object to image, magnification −0.1515. Surface audit OK; aperture audit
reports no rim limit.

Analysis rewritten from process notes to the house skeleton: product identification with numbered evidence, the
Embodiment 1/2/3 comparison and the comparison with Cosina's optical section, group powers, element roles with
patent paragraphs, a glass table with catalog equivalents and partial dispersion, the printed focus states, the
asphere equation and profile, the stop and rim assumptions, a short scope section, and clean citations (process
hashes, archive IDs and ray/MTF sample tables removed).

Open: Cosina's section draws L7 with a slightly concave front face, as in Embodiment 1; if a later source favors
Embodiment 1, it could be modeled with a `source.errata` entry for L1 nd. Rims remain Fig. 5 estimates.
