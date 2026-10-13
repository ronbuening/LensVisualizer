## Patent Reference and Design Identification

**Patent:** JP 2025-043459 A  
**Application Number:** JP 2023-150744  
**Filed:** 19 September 2023  
**Published:** 1 April 2025  
**Inventor:** Masakazu Hibino  
**Applicant:** Sigma Corporation  
**Title:** Large Aperture Ratio Telephoto Zoom Lens  
**Embodiment analyzed:** Numerical Example 1

The prescription follows the complete original Japanese application, not a grant or another family member.
The numerical example occupies PDF pages 17–19 (printed pages 16–18).
The governing asphere equation is on PDF page 16, paragraph 0064; Figure 1 is on PDF page 45.
The front matter identifies Hibino and Sigma in the original Japanese text and the accompanying English abstract.

The association with the SIGMA 70-200mm f/2.8 DG DN OS | Sports is a strong construction correlation.
Neither the patent nor the manufacturer's public specification establishes that every numerical value is the production prescription.
The principal convergent observations are:

1. The prescription contains 20 lens elements in 15 air-separated groups, matching the published product construction.
2. Four aspheric surfaces occupy three elements, L8, L12 and L15.
   Sigma specifies three aspherical elements, and its construction diagram outlines elements 8, 12 and 15. [2]
3. Six elements use the 1.43700/95.10 glass: L2, L3, L4, L10, L13 and L19.
   L5 uses 1.55032/75.50 and L20 uses 1.49700/81.61.
   Sigma's diagram colours FLD at elements 2, 3, 4, 10, 13 and 19 and SLD at elements 5 and 20: a one-to-one positional match.
   The patent does not name FLD, SLD or any supplier.
4. The source physical track is essentially constant during zoom, consistent with the product's internal-zoom mechanism.
5. The source's two focus groups move in opposite directions, agreeing with the product's floating-focus description.
6. Source focal lengths, aperture, field, timing and near-tele magnification are compatible with the selected commercial design.

The product is specified for full-frame mirrorless cameras in L-Mount and Sony E-mount.
Its marketed focal range and aperture are 70–200 mm and f/2.8.
Its published field is 34.3°–12.3°, and its minimum focusing distances are 0.65 m at wide and 1.0 m at tele.
The announced release date was 7 December 2023.
These manufacturer values are retained separately from the numerical prescription. [2, 3]

The patent's design values are 72.10, 118.00 and 194.00 mm, at f/2.91, f/2.89 and f/2.92.
The source states span infinity to 1.0 m at each station; they do not supply the marketed 0.65 m wide setting.
No scaling to the nameplate, near-focus extrapolation or digital-correction assumption is applied.

## Optical Architecture

The eight functional groups have power sequence positive–negative–negative–positive–positive–negative–positive–negative.
The aperture stop is source surface 13, after G4 and at the front of the G5 assembly.
Functional groups are motion/power divisions; the 15 air-separated optical groups are a different count.
Five cemented doublets account for the difference between 20 elements and 15 air-separated groups.
A separate source-listed plane plate sits immediately ahead of the image and is excluded from those lens counts.

The patent describes G1 as the fixed positive front assembly.
G2 and G3 are negative zoom groups, with different imageward trajectories.
G4 is positive and moves imageward to converge the rays before the source-described stationary rear assembly.
The patent connects this distribution to control of bundle diameter and zoom-dependent aberration variation (¶0018–0020).
G5 contains both positive and negative components and includes the negative stabilization doublet.
G6 and G7 are the opposed focus groups; G8 is the fixed negative rear assembly.

The computed isolated functional-group focal lengths are:

| Group | Source surfaces | EFL in air (mm) | Function supported by the source |
|---|---:|---:|---|
| G1 | 1–5 | +161.2151 | Fixed front positive assembly |
| G2 | 6–7 | -119.9756 | Negative zoom group |
| G3 | 8–10 | -114.1797 | Negative zoom group |
| G4 | 11–12 | +125.9471 | Positive zoom group |
| G5 | 13–26 | +60.2568 | Fixed rear assembly with stabilization subgroup |
| G6 | 27–30 | -69.7444 | Negative floating-focus group |
| G7 | 31–32 | +52.7338 | Positive floating-focus group |
| G8 | 33–36 | -47.3861 | Fixed negative rear assembly |
These are isolated air-to-air composite powers, rather than sums of isolated element powers.
The cemented group powers are calculated with their real glass-to-glass boundaries.
Their in-situ magnification and influence also depend on the neighboring groups and conjugates.

The term “telephoto” in the patent title identifies the intended long-focal-length range.
The computed first-surface-to-image track divided by infinity EFL is greater than one at all three published stations;
therefore this particular full physical prescription does not satisfy the stricter compactness criterion TL/EFL < 1.
Its image-side clearance also remains shorter than EFL; no retrofocus classification is inferred.

| Infinity station | Calculated EFL (mm) | Physical track (mm) | TL/EFL | Image distance from last lens vertex (mm) |
|---|---:|---:|---:|---:|
| 72.10 mm | 72.103989 | 221.9968 | 3.078842 | 32.8510 |
| 118.00 mm | 118.003859 | 221.9972 | 1.881271 | 32.8513 |
| 194.00 mm | 194.000791 | 221.9962 | 1.144306 | 32.8510 |
The last column is the source image-plane distance from lens surface 36, including physical glass thickness.
The calculated paraxial best-image plane differs from that source image plane by about two micrometres.
The patent's BF row instead measures the final air gap after plane-plate surface 38; these reference planes must not be mixed.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element focal lengths in air, computed from each element's two radii,
center thickness and printed d-line index. They are not the power of a cemented pair or a claimed isolated aberration contribution.
Each glass named below is the catalog glass whose nd, νd and PgF equal the patent's printed values.
The name selects a dispersion curve; it does not identify the supplier or melt.
The patent designates the groups G1–G8 and no individual elements, so L1–L20 number the elements front to rear;
the camera-side plate is treated separately.

### L1 — Negative Meniscus

nd = 1.78590, νd = 43.94. Glass: NBFD11 (HOYA; equals the patent nd and PgF, catalog νd 43.93; supplier unconfirmed). f = -254.7386 mm.

Source surfaces 1–2; source PgF = 0.5612; modeled dPgF = -0.0086929.

L1 is the negative member of the front cemented doublet. Its object-facing surface has the weaker curvature.

The shared interface with L2 has a substantial index change, so the doublet must be evaluated as a coupled assembly.

The patent explicitly describes this negative-meniscus/positive-biconvex pairing in G1 (¶0074).

### L2 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +197.1864 mm.

Source surfaces 2–3; source PgF = 0.5336; modeled dPgF = +0.0497582.

L2 is the positive member of that first doublet and uses the high-Abbe 1.43700/95.10 glass.

Its air-separated next neighbor is L3, another positive element of the same glass.

The pair balances a negative dense-glass member against a positive low-dispersion member. L2 is the first of the six FLD positions in Sigma's construction diagram.

### L3 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +196.2085 mm.

Source surfaces 4–5; source PgF = 0.5336; modeled dPgF = +0.0497582.

L3 completes G1. Its rear radius is very large and negative, but the surface is retained as finite rather than changed to a plane.

This fixed positive front group sets the power reference used by patent condition (8).

A large absolute rear radius describes a weakly curved optical surface, not permission to simplify the source geometry.

### L4 — Negative Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = -119.9756 mm.

Source surfaces 6–7; source PgF = 0.5336; modeled dPgF = +0.0497582.

L4 alone forms the negative G2 zoom group. The stronger positive rear curvature gives negative isolated power.

Its Abbe number and partial-dispersion ratio enter the source conditions (3) and (4) on the negative lenses of G2 and G3.

The group moves imageward as the zoom changes from wide to tele (¶0073).

### L5 — Biconcave Negative

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = -66.1930 mm.

Source surfaces 8–9; source PgF = 0.5401; modeled dPgF = +0.0232910.

L5 is the negative biconcave member of the G3 cemented doublet.

Its Abbe number and partial-dispersion ratio enter conditions (3) and (4) together with L4. It is the first of the two SLD positions in Sigma's diagram.

The two negative zoom groups move independently; their source trajectories are not interchangeable.

### L6 — Positive Meniscus

nd = 1.85883, νd = 30.00. Glass: NBFD30 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +154.7463 mm.

Source surfaces 9–10; source PgF = 0.5979; modeled dPgF = +0.0045600.

L6 is the positive meniscus member of G3 and shares the source surface-9 boundary with L5.

The net G3 doublet remains negative even though this individual element is positive in air.

A flint-class partner can participate in chromatic balancing, but power sign and Abbe number alone do not quantify the residual chromatic aberration.

### L7 — Positive Meniscus

nd = 1.87070, νd = 40.73. Glass: TAFD32 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +125.9471 mm.

Source surfaces 11–12; source PgF = 0.5682; modeled dPgF = -0.0070921.

L7 is the single positive meniscus in G4, before the stop.

The patent explains that G4 converges the bundle spread by the preceding negative groups, helping reduce the rear group diameters (¶0020).

Its movement during zoom is prescribed independently of G2 and G3.

### L8 — Positive Meniscus (1× Asph)

nd = 1.80610, νd = 40.73. Glass: M-NBFD130 (HOYA moulding glass; equals the patent nd, νd and PgF; supplier unconfirmed). f = +112.9251 mm.

Source surfaces 14–15; source PgF = 0.5694; modeled dPgF = -0.0058921.

L8 begins the refracting part of G5 immediately behind the stop. Its first surface, 14A, is aspheric.

The negative leading aspheric coefficient reduces sag relative to the same-radius sphere at the modeled aperture.

The prescription supports the geometric profile, but does not establish whether this production surface is molded or polished.

### L9 — Negative Meniscus

nd = 1.80610, νd = 33.27. Glass: NBFD15 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = -61.4640 mm.

Source surfaces 16–17; source PgF = 0.5884; modeled dPgF = +0.0005601.

L9 is the negative meniscus member of the first cemented pair within G5.

It is followed across the cemented boundary by the low-index, high-Abbe L10.

The source retains its small physical center thickness; no synthetic cement layer is inserted.

### L10 — Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +63.7868 mm.

Source surfaces 17–18; source PgF = 0.5336; modeled dPgF = +0.0497582.

L10 is the positive member of that pair. Its very large positive rear radius is retained exactly.

The combined pair is weakly negative in isolation, despite the strong isolated positive contribution of L10.

This illustrates why element focal lengths must not be substituted for the coupled group calculation.

### L11 — Positive Meniscus

nd = 1.80809, νd = 22.76. Glass: S-NPH1 (OHARA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +139.0315 mm.

Source surfaces 19–20; source PgF = 0.6307; modeled dPgF = +0.0251823.

L11 is the positive meniscus member of the stabilization doublet within G5.

The source identifies the fourth and fifth lenses in G5 as the pair translated approximately perpendicular to the axis for image stabilization (¶0075).

Together with L12, this gives a negative composite stabilization subgroup.

### L12 — Biconcave Negative (1× Asph)

nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA moulding glass; equals the patent nd, νd and PgF; supplier unconfirmed). f = -42.2227 mm.

Source surfaces 20–21; source PgF = 0.5467; modeled dPgF = -0.0076176.

L12 is the negative biconcave member of the stabilization doublet, with aspheric exit surface 21A.

The source retains nonzero even polynomial orders through A20 on that surface.

The higher-order terms are not replaced by a lower-order fit; all of them are part of the modeled surface.

### L13 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +50.3640 mm.

Source surfaces 22–23; source PgF = 0.5336; modeled dPgF = +0.0497582.

L13 is a positive low-dispersion biconvex element cemented to the following negative L14.

It is one of the six 1.43700/95.10 elements, which occupy the six positions Sigma's construction diagram marks as FLD.

That correspondence is positional; the patent does not name the glass.

### L14 — Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = -49.9470 mm.

Source surfaces 23–24; source PgF = 0.6103; modeled dPgF = +0.0088023.

L14 is the negative meniscus member of the pair behind the stabilization subgroup.

Its rear radius is weakly negative; the pair is only weakly positive when evaluated in air.

The original shared surface is retained with the downstream element index, not modeled as two coincident air interfaces.

### L15 — Biconvex Positive (2× Asph)

nd = 1.76450, νd = 49.09. Glass: L-LAH91 (OHARA low-Tg moulding glass; equals the patent nd, νd and PgF; supplier unconfirmed). f = +40.0372 mm.

Source surfaces 25–26; source PgF = 0.5528; modeled dPgF = -0.0084306.

L15 ends G5 and is biconvex with two aspheric surfaces, 25A and 26A.

The source uses a positive conic on the front and a slightly negative conic on the rear, together with polynomial corrections.

OHARA's L-glass list gives L-LAH91 at nd = 1.76450, νd = 49.09 and PgF = 0.5528, the patent's printed values;
its catalog dispersion curve, which the data file uses, gives 49.10 and 0.5529. The supplier and melt are not identified.

### L16 — Positive Meniscus

nd = 1.86966, νd = 20.02. Glass: FDS20-W (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +134.0125 mm.

Source surfaces 27–28; source PgF = 0.6435; modeled dPgF = +0.0333736.

L16 is the positive meniscus at the front of negative focus group G6.

An air gap separates it from L17. Its glass has the lowest Abbe number in the design.

The two elements move together as G6; a separate element motion is not introduced.

### L17 — Negative Meniscus

nd = 1.75500, νd = 52.32. Glass: TAC6 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = -45.7694 mm.

Source surfaces 29–30; source PgF = 0.5473; modeled dPgF = -0.0084978.

L17 is the negative meniscus at the rear of G6.

Its stronger rear curvature makes the two-element focus group negative as a whole.

The source moves G6 imageward on focusing closer, with a zoom-dependent amount of travel.

### L18 — Biconvex Positive

nd = 1.65100, νd = 56.24. Glass: S-LAL54Q (OHARA; equals the patent nd, νd and PgF; supplier unconfirmed). f = +52.7338 mm.

Source surfaces 31–32; source PgF = 0.5420; modeled dPgF = -0.0072043.

L18 alone forms positive G7. It is biconvex and moves in the opposite direction to G6 during close focusing.

The patent relates the opposed focus motions to control of focus-dependent aberration variation and reduced moving-group burden (¶0050–0055).

Its infinity zoom trajectory reverses around the retained middle station.

### L19 — Biconcave Negative

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = -89.4817 mm.

Source surfaces 33–34; source PgF = 0.5336; modeled dPgF = +0.0497582.

L19 is the negative biconcave front element of G8, the sixth element in the 1.43700/95.10 glass.

It is air-spaced from the final negative meniscus. The patent describes G8 as fixed;
the literal table retains sub-micron image-relative offsets instead of forcing exact fixity.

The source does not assign an independently measurable “field-flattener” contribution to this single element; no such claim is inferred from its location alone.

### L20 — Negative Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed). f = -107.8055 mm.

Source surfaces 35–36; source PgF = 0.5389; modeled dPgF = +0.0323680.

L20 is the final negative meniscus in the lens prescription.

Its printed 1.49700/81.61 and PgF 0.5389 equal HOYA's listed values for FCD1. With L5 it occupies the two positions Sigma's diagram marks as SLD.

The nearby camera-side plate is not part of this element or of G8, and its physical gaps remain separately traceable.

### Cemented assemblies

The five cemented pairs are evaluated with their shared glass-to-glass interfaces:

| Pair | Elements | Source surfaces | Composite EFL in air (mm) |
|---|---|---:|---:|
| D1 | L1 + L2 | 1–3 | +876.5779 |
| D2 | L5 + L6 | 8–10 | -114.1797 |
| D3 | L9 + L10 | 16–18 | -1416.0681 |
| D4 | L11 + L12 | 19–21 | -59.8711 |
| D5 | L13 + L14 | 22–24 | +1027.6646 |
These values show that D1 and D5 are weakly positive, D3 weakly negative, and D2 and D4 more strongly negative.
No equality is assumed between the net power of a cemented pair and the sum of its two standalone powers.

## Glass Identification and Selection

The patent prints the d-line index, Abbe number and PgF for every glass, including the plane plate.
It names no glass or supplier and gives no nC, nF or ng.
Each printed triple equals one HOYA or OHARA catalog glass, and the data file names that glass so the model uses its dispersion curve. [4, 5]

| Patent nd | νd | PgF | Elements | Catalog glass used | Catalog PgF |
|---:|---:|---:|---|---|---:|
| 1.78590 | 43.94 | 0.5612 | L1 | NBFD11 (HOYA; lists νd 43.93) | 0.5612 |
| 1.43700 | 95.10 | 0.5336 | L2, L3, L4, L10, L13, L19 | FCD100 (HOYA) | 0.5336 |
| 1.55032 | 75.50 | 0.5401 | L5 | FCD705 (HOYA) | 0.5400 |
| 1.85883 | 30.00 | 0.5979 | L6 | NBFD30 (HOYA) | 0.5979 |
| 1.87070 | 40.73 | 0.5682 | L7 | TAFD32 (HOYA) | 0.5682 |
| 1.80610 | 40.73 | 0.5694 | L8 | M-NBFD130 (HOYA) | 0.5694 |
| 1.80610 | 33.27 | 0.5884 | L9 | NBFD15 (HOYA) | 0.5884 |
| 1.80809 | 22.76 | 0.6307 | L11 | S-NPH1 (OHARA) | 0.6307 |
| 1.69350 | 53.20 | 0.5467 | L12 | M-LAC130 (HOYA) | 0.5466 |
| 1.85451 | 25.15 | 0.6103 | L14 | NBFD25 (HOYA) | 0.6103 |
| 1.76450 | 49.09 | 0.5528 | L15 | L-LAH91 (OHARA) | 0.5529 |
| 1.86966 | 20.02 | 0.6435 | L16 | FDS20-W (HOYA) | 0.6435 |
| 1.75500 | 52.32 | 0.5473 | L17 | TAC6 (HOYA) | 0.5473 |
| 1.65100 | 56.24 | 0.5420 | L18 | S-LAL54Q (OHARA) | 0.5421 |
| 1.49700 | 81.61 | 0.5389 | L20 | FCD1 (HOYA) | 0.5389 listed; 0.5377 from the curve |
| 1.51680 | 64.20 | 0.5343 | filter plate FL | BSC7 (HOYA) | 0.5343 |
The catalog PgF is computed from the dispersion curve the model uses.
It is within 0.0001 of the print in every row except FCD1, whose fitted curve gives νd 81.59 and PgF 0.5377 where HOYA lists 81.61 and 0.5389.
PgF decides between glasses that share nd and νd: 1.80610/40.73 with PgF 0.5694 is M-NBFD130 rather than NBFD13 (0.5672),
and 1.80809/22.76 with PgF 0.6307 is S-NPH1 rather than FD225 (0.6287).
The three aspherical elements, L8, L12 and L15, are the three whose matches are moulding glasses; this is an observation, not a patent statement.
The six FCD100 elements and the FCD705 and FCD1 elements sit at the positions Sigma's diagram marks FLD and SLD.
A matching catalog triple identifies neither the supplier nor the melt of the production glass.

The patent measures anomalous dispersion as ΔPgF = PgF − 0.64833 + 0.00180 νd, and that convention is kept for its conditions.
Conditions (3) and (4) apply it to the negative lenses of G2 and G3, which are L4 and L5 (ΔPgF +0.05645 and +0.02767);
those two are the only elements for which the patent text itself calls for anomalous dispersion (¶0030–0037).
The model stores dPgF = PgF − (0.6438 − 0.001682 νd), computed from the same printed PgF.
All 21 media take their chromatic indices from the named catalog curves, not from measured data in the patent.
That does not establish apochromatic correction or the polychromatic MTF of the production lens.

The surface-by-surface d-line Petzval sum is +0.0005132734 mm⁻¹.
It is computed using each refracting interface's power divided by its incident and transmitted indices.
The plane plate and stop contribute zero surface power; every cemented boundary is evaluated once with its real index step.
This first-order sum alone is not a prediction of the sagittal and tangential field surfaces at finite aperture.

## Focus Mechanism and Continuous Zoom

The patent tabulates two focus states at each of the three zoom stations: infinity and a nominal 1.0 m object-to-image distance.
Paragraph 0062 defines d0 from the object to the first lens surface.
Adding the physical source track reproduces the 1.0 m shooting distance to source precision.
All near-state rows, including the very small BF differences, are retained.
The source near aberration figures also label F2.92, F3.01 and F3.00, respectively (Figs. 3, 5 and 7).
The model calibrates its iris only to the printed infinity values, retaining that zoom iris during focus.
It does not claim to reproduce those near F-number labels or to recover an unpublished focus-dependent iris law.

G6 translates imageward and G7 objectward for close focus (¶0073, ¶0050).
The source-derived changes in their first-vertex coordinates are:

| Source zoom station | G6 travel (mm) | G7 travel (mm) | Near EFL (mm) | Near paraxial magnification |
|---|---:|---:|---:|---:|
| 72.10 mm | +1.3184 | -1.2160 | 66.623630 | -0.083869 |
| 118.00 mm | +3.5739 | -2.7733 | 98.005506 | -0.127922 |
| 194.00 mm | +7.8357 | -7.4217 | 126.820264 | -0.193759 |
These EFL changes refer to the first-order prescription at fixed source focus states.
They are not replacements for the marked zoom focal lengths or a measurement of the production lens's video breathing.
No extra close-focus state is synthesized to reach the manufacturer's shorter wide-end minimum distance.
Only the three printed near positions carry the patent's object distance; positions between them are interpolations.

During infinity zoom, G2, G3 and G4 move imageward.
G6 moves objectward; G7 first moves objectward and then imageward across the three stations.
The middle keyframe preserves this reversal.
The patent describes G1, stop/G5 and G8 as fixed relative to the image, but the literal table is not exactly conserved.
For stop/G5, the infinity rear variable sum d26+d30+d32+BF is 27.0814, 27.0803 and 27.0820 mm.
Its adjacent differences are −0.0011 and +0.0017 mm; the two-station half-last-place bound for four variable distances is only 0.0004 mm.
Thus rounding alone has not been established as the explanation. These small source-prose/table discrepancies
remain explicit, and the model preserves the numerical rows without enforcing zero motion.

The viewer continuously interpolates the published spacing values.
This creates continuous mechanical motion but does not recover the unpublished production cam law.
It does not prove that every intermediate position remains focused at the source image plane.
A representative example is zoomT = 0.75 at infinity focus: the computed EFL is 158.274513 mm,
while the paraxial best-image plane is 4.030305 mm beyond the modeled image plane.
The physical track remains 221.9967 mm.
This defocus is retained explicitly; no invented compensating gap, rescaled focal length or discrete-preset substitute is used.

At the six published states, source-image paraxial residuals are only 0.00131–0.00198 mm.
That endpoint agreement must not be extended to a claim of a continuously focused factory mechanism.

## Aspherical Surfaces

The source equation, verified from the rendered original at paragraph 0064, is

z(y) = (y²/r) / [1 + √(1 − (1+K)(y/r)²)] + Σ Ap yᵖ.

Its printed general equation includes orders 3–20; the selected coefficient table gives only even terms.
The source K therefore maps directly to the model K without subtracting one.
Unlisted odd terms are absent. All nonzero published even terms, including A20 on source surface 21, are retained.
Radii and lengths are in millimetres, and Ap has units mm^(1−p).

| Coefficient | 14A | 21A | 25A | 26A |
|---|---:|---:|---:|---:|
| K | 0.00000 | 0.00000 | 5.73849 | -0.04777 |
| A4 | -1.70699E-06 | -2.05493E-06 | -6.68946E-06 | 5.98132E-07 |
| A6 | -9.83571E-10 | 1.55966E-08 | 6.52223E-09 | 3.49487E-09 |
| A8 | -1.48085E-12 | -2.58234E-10 | -4.77660E-11 | -2.96468E-11 |
| A10 | 2.58015E-16 | 2.85196E-12 | 1.22707E-13 | 7.59590E-14 |
| A12 | 0.00000E+00 | -2.04687E-14 | -1.23679E-16 | -6.84430E-17 |
| A14 | 0.00000E+00 | 9.26512E-17 | 0.00000E+00 | 0.00000E+00 |
| A16 | 0.00000E+00 | -2.51983E-19 | 0.00000E+00 | 0.00000E+00 |
| A18 | 0.00000E+00 | 3.72342E-22 | 0.00000E+00 | 0.00000E+00 |
| A20 | 0.00000E+00 | -2.27627E-25 | 0.00000E+00 | 0.00000E+00 |
Surface 14A is on L8, surface 21A on L12, and surfaces 25A/26A on L15.
The leading negative A4 terms on 14A, 21A and 25A do not by themselves describe the full profile:
the conic and higher-order terms must be evaluated together.
At the data-file semi-diameters, which are estimated from Figure 1, the exact profiles give:

| Surface | Modeled semi-diameter (mm) | Total departure from same-radius sphere (µm) | Signed rim-slope angle (°) |
|---|---:|---:|---:|
| 14A | 18.0 | -228.044 | +16.1706 |
| 21A | 16.2 | -101.509 | +11.4872 |
| 25A | 17.0 | -342.853 | +9.4838 |
| 26A | 17.0 | +44.799 | -18.8402 |
These are modeled-rim departures, not departures at a patent-specified clear aperture.
The negative total departures of the first three surfaces and positive departure of 26A describe geometry only.
No particular aberration correction is established by a coefficient sign without a separate aberration calculation.
The positive K on 25A limits the real conic to heights below 27.4 mm; the 17.0 mm semi-diameter is well inside it.
The publication does not establish a specific asphere manufacturing method, so no molded/polished attribution is added.

## Patent Conditions

The selected example publishes eight condition values in the EX1 column on PDF page 42, printed page 41.
All are recomputed here from the printed glass data, group powers or in-situ paraxial magnification.

| No. | Quantity | Required interval | Published EX1 | Calculated |
|---:|---|---|---:|---:|
| 1 | f2/fT | -1.18 < value < -0.37 | -0.62000 | -0.61842852 |
| 2 | f3/fT | -0.94 < value < -0.35 | -0.59000 | -0.58855275 |
| 3 | mean νd of the negative elements in G2/G3 | > 67 | 85.30000 | 85.30000000 |
| 4 | mean source ΔPgF of those negative elements | > 0.018 | 0.04200 | 0.04206000 |
| 5 | (1−βOS,T) βrear-OS,T | -2.7 < value < -0.52 | -1.36000 | -1.35509371 |
| 6 | βbehind-stop,W | -0.42 < value < 0.48 | 0.04700 | 0.04714200 |
| 7 | fG6/fG7 | -2.4 < value < -0.64 | -1.32000 | -1.32257528 |
| 8 | f1/fT | 0.63 < value < 1.07 | 0.83000 | 0.83100211 |
The negative-glass mean νd is 85.30, and the source-defined mean anomalous deviation is +0.04206.
Those source conventions are preserved independently of the model's dPgF fields.
The stabilization coefficient and behind-stop magnification are in-situ quantities, calculated from the paraxial ray-angle transfer.
They are not the isolated focal lengths of the same groups.
Source-rounded values remain visible rather than being rewritten to the calculated precision.

## Image Stabilization

The patent identifies L11–L12, the fourth and fifth elements of G5, as the transversely moving stabilization pair (¶0075).
Its isolated composite power is negative, and the computed tele-state stabilization coefficient is −1.35509371.
This agrees with the selected source condition value of −1.36 at printed precision.
The source discusses a negative stabilization subgroup and its optical/mechanical tradeoffs in paragraphs 0038–0043.

The model is the centered optical state.
No lateral motion amplitude, control algorithm, camera shake response or stabilization effectiveness is simulated.
The manufacturer's optical-stabilization feature supports the production association but is not a numerical input to the centered prescription.

## Aperture, Clear Apertures and Traced Coverage

The stop location is published; its physical diameter and all lens clear semi-diameters are not.
The iris is therefore inferred by tracing the nominal infinity entrance-pupil radius to the stop at each source station.
The resulting physical iris semi-diameters are 16.698609, 16.664039 and 16.702018 mm.
Their agreement with the source aperture is a calibration, not an independent measurement of diaphragm size.
The model holds each zoom station's iris unchanged during focusing.
The paraxial entrance-pupil radii of those irises at infinity are 12.524920, 20.645944 and 33.569502 mm.
EFL divided by twice those paraxial radii gives 2.878421, 2.857798 and 2.889539, respectively.
These first-order pupil diagnostics differ from the nominal source F-number convention used in the exact-ray calibration.
Neither diagnostic establishes a measured physical pupil or a focus-dependent production iris.

Lens clear radii are estimated from the Figure 1 cross-section, measured at 0.1275 mm per pixel on the 420 dpi page raster,
and floor-checked by exact real-ray traces at the six published states and by valid material geometry.
The final front group radii are 34.4–35.0 mm; the final rear G8 radii are 17.1–17.2 mm on the outer faces
and 15.5 mm on the two facing concave surfaces, where the drawing ends the curves inside a flat annulus.
Other radii are preserved explicitly in the data file; they must not be described as patent dimensions.
All element edge thicknesses remain positive, with a minimum rim value of 0.93789 mm on L6.
The tightest air space at the rim is 0.72 mm, between the facing concave surfaces 34 and 35 at 15.5 mm height.

At the three infinity stations, exact chief rays reach image semi-height 21.63 mm at half-fields
16.46543°, 10.00682° and 6.09215°, consistent with the published full fields.
The on-axis beam at the printed F-number clears every rim at all six published states;
the smallest margin is 0.49 mm, at surface 26A at 194 mm and 1.0 m.

Off-axis bundles are vignetted by the estimated rims.
At the wide end, wide open, the modeled geometric transmission is 83 % at 11° and 54 % at the 16.5° corner.
L4 is the one element deliberately set away from Figure 1: the model keeps a 24 mm rim on both of its faces to hold wide-corner illumination.
The drawing shows its blank at 23.0 mm and ends the concave rear curve at 19.3 mm inside a flat annulus.
The corner value would be 52 % with a square 23.0 mm rim and 44 % with the rear face at 19.3 mm.
These values follow from rims read off a drawing; they are not measurements of the production lens.

## Camera-Side Plate and Reference Planes

Source surfaces 37–38 define a 2.5 mm plane-parallel optical plate with nd = 1.51680, νd = 64.20 and PgF = 0.5343,
values equal to HOYA BSC7.
Figure 1 draws FL separately immediately ahead of image I.
It is represented as a camera-side rear plate, traced physically and omitted from drawn lens-element counts.
It is not replaced by an air-equivalent length in the surface table.

The model keeps the plate's trailing air gap fixed at 1.0000 mm.
The source's tiny trailing-gap differences are carried in the preceding air gap after lens surface 36.
This is a modeling convention, not a statement about their physical cause.
It moves the plate by at most 0.0004 mm while preserving the total physical and reduced path.
The plate is not treated as an optional or removable filter.

## Model Scope and Limitations

The model reproduces the three printed focal lengths and all eight printed condition values at printed precision.
It does not establish the exact manufactured prescription, supplier identity, measured clear apertures,
measured spectral dispersion, manufacturing method, production autofocus cam, measured corner transmission or production MTF.
Positions between the printed zoom and focus states are interpolated and can be visibly out of focus.
The computed back focus differs from the printed BF by 0.00131–0.00198 mm at the six states, and the computed G1 focal length
exceeds the printed 161.21 mm by 0.0050666 mm; both are slightly more than rounding of the last printed digit allows.
Rounding of the printed radii, thicknesses and indices can move the back focus by about 0.015–0.02 mm
and the G1 focal length by about 0.004 mm, so it may account for both, but the cause is not established.
No printed value is altered to remove the differences.

## Sources and References

1. Japan Patent Office, JP 2025-043459 A, original publication, Numerical Example 1.
   [Complete publication via DPMA](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2025043459A).
   Original PDF pp 11, 15–19, 42 and 45; printed pages 10, 14–18, 41 and 44.
2. Sigma, [70–200mm F2.8 DG DN OS | Sports](https://www.sigma-global.com/en/lenses/s023_70_200_28/),
   specifications, lens construction diagram and mechanical-feature descriptions; accessed 4 and 13 October 2026.
3. Sigma Corporation of America, [release announcement](https://press.sigmaphoto.com/product/11/sigma-announces-release-of-70-200mm-f2-8-dg-dn-os-sports-lens/),
   16 November 2023, with release date 7 December 2023.
4. [OHARA optical glass catalogs](https://www.ohara-inc.co.jp/en/product/catalog/), all-products AGF dated 1 July 2026;
   current S-glass CSV OHARA_20260402_5.csv and L-glass CSV OHARA_20250312_L5.csv, downloaded 4 October 2026.
5. [HOYA optical glass data](https://www.hoya-opticalworld.com/english/datadownload/), including obsolete glasses, 7 July 2026.
