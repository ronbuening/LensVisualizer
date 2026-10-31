# Audit Log - CANON RF 14mm f/1.4 L VCM

Patent: US 2025/0389929 A1, Numerical Example 1 / Figure 1

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 2, Figure 1, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 30.46 µm/px.
- The reliable optical-rim rows have a median figure/data ratio of 0.985. L1 and L4-L7, L10-L13, and L15-L18 agree closely with the modeled silhouette.
- Automated L2/L3/L9 outliers come from the front blank flange, group annotations, and the stop line. High-resolution crops show their optical rims remain close to the authored values.
- Retained all surface and stop semi-diameters. `audit:image-circle` reports zero undersized surfaces and `audit:surface` reports no geometry violations.

### Glass classification

- Relabeled L5 as CaF2 using Canon's published one-fluorite construction, the independently identified concave fluorite location, and the patent's matching `1.43387 / 95.1` coordinate. The label remains explicitly a production-correlation inference.
- Relabeled L12 as an H-ZBaF4 catalog equivalent. Its `1.66565 / 35.64` coordinate is inside the resolver window, while the patent-authored `dPgF = -0.00145352` remains authoritative at g.
- Kept L4 explicitly unmatched. It shares the `666356` coordinate but has no published partial-dispersion value, so extending H-ZBaF4's conflicting g-line behavior would be speculative.
- The Canon BR resin remains explicitly unmatched. No new catalog row is justified.

### Identity and metadata

- Verified the display name `CANON RF 14mm f/1.4 L VCM` against Canon's `RF14mm F1.4 L VCM` product name and repository spacing conventions.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling.

## 2026-08-20 - Screenshot, movement, and chromatic follow-up

- Rechecked Figure 1 at 600 dpi after reviewing the site screenshot. Clean rims still have a 0.985 median figure/data ratio; apparent L2/L3/L9 scan outliers are annotation, leader, or flange ink. No SD change was justified.
- Added patent `G1`-`G18` diagram labels while retaining the data's internal `L1`-`L18` names. Corrected the functional captions to patent groups `L1`, `L2`, and `L3`, with L2 explicitly marked as objectward focus.
- Verified the published close state moves L2 about 1.01 mm objectward. The lens is a prime and correctly exposes no zoom travel.
- Made each selected catalog curve explicit and qualified as a modeling equivalent with the production supplier unspecified. This removes generic six-digit labels that previously hid the resolver's selected curve.
- Superseding the conservative initial disposition above, backfilled G4 with the same H-ZBaF4 equivalent already justified for the compatible patent 666356 coordinate at G12. G4 has no patent partial-dispersion datum, so its catalog g-line remains a model value rather than a source claim.
- Sellmeier and trusted chromatic coverage increased from 16/18 to 17/18; only the proprietary BR resin remains unresolved. The full catalog audit reports zero mismatches.
- Added patent-backed anomalous-dispersion tags to G9/G11/G12/G14 and inferred tags to the production-correlated UD G2 and fluorite G5.

## 2026-10-30 — Scoped original shape-and-glass follow-up

The August 20 audit and actual date remain history. This follow-up reopens the
reproducible missing free-end shoulders and oversized C3 rear cap, while reusing
its unchanged curve selections and source partials. Exact original:
`patents/US-20250389929-A1.pdf`, Numerical Example 1, PDF pp. 27–28 / printed
pp. 10–11; Fig. 1 / PDF p. 2 / sheet 1; Figs. 2A/B / PDF p. 3; Tables 1–2 /
PDF pp. 38–39. The front page confirms Takahiro Saito, Canon Kabushiki Kaisha
(normalized Canon Inc.), filing 2025-06-19 and publication 2025-12-25.

All 32 rows, 30 fixed distances, two published focus-gap endpoints, eighteen pairs
and five K/A4–A12 aspheric blocks match the original. Authored zero A14 fillers
remain zero. Table 2 supplies the precise Abbe values where the surface table
rounds: G2/G15 81.65, G13 94.66, G9/G14 29.74, G12 35.64 and G11 20.08.
No source R/d, asphere, stop or numeric focus control changes. Catalog design
focal length changes from computed 14.4176265 to literal source 14.42 mm, leaving
traced EFL unchanged and distinguishing source metadata from the runtime result.

### Native contour, every element and interface

The original embeds 2560×3300 pixels at approximately 300–301 ppi. Prior 600-dpi
renders were upsampling. Rotation/crops preserve native pixels. The active span
is about 1718 px / 104.5 mm, or 16.44 px/mm. Rim uncertainty is ±0.6 mm, increasing
to ±0.9 mm at the front blank transitions. Leaders, brackets, the stop/image-plane
lines and ambiguous front second-element flange ink are excluded from optical-rim
measurements; they do not justify enlarging that optical cap.

Native C3 blank half-height is about 12.3 mm, supporting S25's inferred cap correction
14→12.6 mm. Every other optical cap retains the earlier review. Six free-end
shoulders preserve their existing clear caps:

| Surface | Clear sd | Outer extension sd |
| ------- | -------: | -----------------: |
| 2A      |     19.2 |               27.8 |
| 4       |     16.8 |               17.3 |
| 6A      |     14.2 |               14.6 |
| 10      |     13.9 |               14.4 |
| 16      |     13.3 |               13.6 |
| 22      |     13.7 |               13.9 |

Values are millimeters. Native free-end shoulders replace diagonal SVG closures.
S2A's outer land preserves its optical cap rather than extrapolating the asphere
out to the larger blank height. Full S8 outer 14.4 is rejected: land intrusion
4.111 mm exceeds both the 3.609 mm guard and printed 4.01 mm air gap, giving about
0.101 mm physical overlap. Retain S8 clear 12.5 and its explicit outline constraint;
no R/d or clearance tolerance is changed to force a flat block.

All eighteen elements, concave ends, four bonded assemblies and the high-partial
G11 layer were inspected. Both C2 interfaces stay curved and connected. Its source
1 mm central layer has minimum modeled thickness 0.073943 mm; chemistry and cure
are unresolved. No opaque bonded land, disconnected resin wing or inferred cut is
introduced. Paragraph 0172 permits organic/glass/bonded aspheres generally but does
not identify a separate hybrid in this numerical configuration. Paragraph 0175 /
PDF p. 26 explicitly excludes optical-filter/faceplate members from numerical optical
length; the selected table contains no plate to omit. Production filter-holder
hardware is not inserted as an invented optical medium.

### Glass, reference and genuine published partials

Paragraph 0174 / PDF p. 26 defines d587.6/F486.1/C656.3/g435.8 nm and the exact
Abbe/partial equations. All 18 pairs remain at d. No complete numeric nC/nF/ng
triplet is printed. All 17 prior compatible catalog/fluorite curves resolve
identically; their labels now qualify historical supplier, melt and chemistry.
G11 remains unmatched: BR resin is a production correlation, not source-proved
chemistry or cure. CaF2 is a qualified spectral proxy and production correlation,
not proof of the historical source medium. Zero unsupported numeric overrides
were present or removed.

The original gives θgF for G9/G11/G12/G14 in the single-lens table / PDF p. 28 and
Table 2 / PDF p. 39. Retain their SCHOTT-normal dPgF values +0.00132268/+0.16817456/
−0.00145352/+0.00132268. Paragraph 0079 / PDF p. 22 explicitly defines the negative
condition as anomalous partial dispersion; paragraph 0115 / PDF p. 23 does so for
the positive medium. The four patent APD tags therefore have direct evidence,
independent of catalog coordinates. Their source-normal residuals use a different
normal line and are not substituted for these SCHOTT-normal fields. G2/G5 APD
remains inferred. The unchanged August 20 selections/partials retain that date;
this source check qualifies their scope rather than identifying a supplier.

### Focus, source contradictions and runtime scopes

The source close gaps remain D22 5.08→4.08 and D29 2.20→3.21 mm, preserving their
0.01 mm rounded track difference and the published −0.1 magnification label.
Literal first-surface object distance 240.532 mm conflicts with the rounded
prescription conjugate. The current close gaps give first-object distance 120.641763,
object-to-image distance 239.151763 mm and magnification −0.100982. Literal 240.532
from the first surface instead requires image gap 13.344840 mm and magnification
−0.054115. The earlier image-plane interpretation is retained as an unresolved
reference-plane qualification, not a proven source correction. Paragraph 0136's
stationary L1/L2 wording likewise conflicts with abstract/paragraph 0032/Claim 1
L1/L3. Both are formally recorded as unresolved; no optical fitting follows.

Surface/image-circle, infinity aperture and ≥99% format-chief checks pass. All 101
focus contours have eighteen finite, closed, connected paths with zero hidden
renderer trimming. Derived infinity iris radius remains 11.503957 mm, paraxial
F/# 1.46; a real collimated admitted-pupil measurement gives 1.561063. Physical
source iris dimensions are unpublished, and the two conventions remain separate.

The explicit actual-Gaussian pupil sweep samples 29,391 rays over 101 focus controls,
axis/half/full nominal 21.635 mm format field and 97 stop-aimed pupil points. All 100
finite controls have positive object distances. All axial pupils and chiefs clear;
there are 6212 ordinary marginal clips and ten bounded first-asphere cap misses,
with no failed seed, unaimed ray or unexplained intersection failure. The prior-cap
baseline has 5604 clips and the same ten misses; the source-supported S25 correction
adds 608 sampled marginal clips without changing axial/chief clearance.

Finite object heights in that sweep are scaled by paraxial magnification; actual
distorted image height is not forced to the nominal field. The close source-height-
scaled 18.68 mm probe returns 16.208003 mm. Independent positive-object supplements
use 240.532/focus mm from the image plane or literally from the first surface:
each samples 29,391 rays with all axial pupils/chiefs clear, 6264/6318 ordinary clips
and ten bounded first-cap misses. These do not resolve the source reference plane.

A separate unclipped inverse-chief solve targets actual 18.68/21.635 mm image heights
at every 100 non-infinity controls, then applies actual apertures. All 200 roots and
chiefs pass, maximum image residual 0.000000939 mm. Its 19,400 pupil rays include
12,262 ordinary clips and 962 actual-profile intersections beyond the retained
first cap. The 18.68 boundary has 5120 clips and zero intersection failures; the
21.635 boundary has 7142 clips and 962 bounded misses. These source-relevant/runtime
edges are separate from literal published finite-field coverage or a production cam.

The source infinity 18.68 mm edge is reached at actual angle 56.316670°, consistent
with Fig. 2A's 56.3° versus table 52.34° paraxial angle. The Fig. 2B close 55.9° label
is preserved without fitting the current reference-plane interpretation to its
angle convention. A separate bounding-sphere angular diagnostic at focus 0/.5/1
samples 873 source-range pupil rays: all axial pupils/chiefs clear, 161 ordinary
clips and three actual-profile cap misses. Nine 80/89/90° extreme seeds are
unbracketed; those limits are not coverage. Angular probes at a focus control are
not described as actual finite-object launches.

Source fidelity, sampled clearance and production correlation remain separate.
Inferred apertures, rounded close gaps, intermediate focus interpolation, exact
historic G11 chemistry and the production concave-asphere mismatch remain qualified.
The coordinator owns full repository gates, commit and shared coverage updates.
