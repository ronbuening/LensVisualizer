# Olympus OM Zuiko Auto-T 180mm f/2: JP H05-042643 B2, Example 1

## Patent Reference and Design Identification

**Patent:** JP H05-042643 B2 (printed 特公平5-42643; digital identifier JPH0542643B2)
**Application Number:** JP 57-226387
**Filed:** 24 December 1982
**Published:** 29 June 1993; earlier application publication JP S59-116709 A, 5 July 1984
**Inventor:** Masaki Imaizumi
**Applicant:** Olympus Optical Co., Ltd.
**Title:** 望遠レンズのフォーカシング方式 (focusing method for a telephoto lens system)
**Embodiment analyzed:** Example 1

The US family member is [US 4,558,928 A](https://patents.google.com/patent/US4558928A/en), published 17 December 1985, filed 5 December 1983, with the same Japanese priority. Its Embodiment 1 table prints the same prescription; it gives φa = −0.818 where the JP scan prints −0.828, and the model's IIa power matches the US value.

The production correlation is probable, not a factory prescription. The patent's detailed description states that the invention concerns bright 180 mm telephoto lenses of F/1.8 or F/2.0. Example 1 is the F/2.0 design (f = 100, 2ω = 13.7°); Example 2 is an F/1.8 variant with a doublet IIa. Example 1 has ten elements in eight groups and an internally focusing two-part middle group, matching the published construction of the OM Zuiko Auto-T 180mm f/2 (10 elements in 8 groups, internal focus, 1.6 m minimum focus, 100 mm filter). Scaling the normalized prescription by 1.8 gives a 179.998 mm focal length. All radii and axial spacings are scaled; refractive indices and Abbe numbers are unchanged.

## Optical Architecture

The design is a telephoto of positive front group I, negative middle group II and positive rear group III. Group I has four singlets; group II is split into a negative singlet (IIa) and a negative cemented pair (IIb); group III is a positive singlet followed by a cemented pair. The stop sits 5.22 patent units (9.396 mm scaled) behind surface 13 and moves with IIb, as the patent states. Groups I and III stay fixed relative to the image plane.

The patent prints no back focus, so the last gap is the Gaussian back focal distance, 57.720 mm. No cover glass or other unlisted elements are added.

## Element-by-Element Analysis

| Element | Surfaces | nd | νd | f (mm) | Role |
|---|---|---:|---:|---:|---|
| L1 | 1–2 | 1.497 | 81.61 | +155.7 | Biconvex front element; FCD1-class ED glass (inferred) |
| L2 | 3–4 | 1.617 | 62.79 | +182.5 | Positive meniscus, convex to the object |
| L3 | 5–6 | 1.65412 | 39.70 | −80.5 | Biconcave (nearly plano-concave) negative element of group I |
| L4 | 7–8 | 1.497 | 81.61 | +162.8 | Positive meniscus closing group I; FCD1-class ED glass (inferred) |
| L5 | 9–10 | 1.50378 | 66.81 | −220.1 | Biconcave focusing singlet IIa |
| L6 | 11–12 | 1.68893 | 31.08 | +112.6 | Biconvex flint of focusing pair IIb |
| L7 | 12–13 | 1.52682 | 51.12 | −64.6 | Biconcave rear element of IIb (pair −157.7) |
| L8 | 14–15 | 1.788 | 47.43 | +61.6 | Biconvex positive element of group III |
| L9 | 16–17 | 1.60342 | 38.01 | −46.4 | Biconcave front element of the rear pair |
| L10 | 17–18 | 1.6779 | 55.33 | +67.5 | Biconvex rear element of the rear pair (pair −153.8) |

Focal lengths are thick-lens values in air at the 180 mm scale. Glass identities are not printed in the patent.

## Glass Identification and Selection

The patent prints only nd and νd. Nine of the ten pairs match a current or discontinued catalog glass within the patent's printed precision, and the model uses those catalog rows as coordinate equivalents: they supply the dispersion curve, while the patent's nd/νd stay as printed. They are not claims about Olympus's actual supplier or melt.

| Element | Patent nd / νd | Catalog equivalent | Catalog nd / νd |
|---|---|---|---|
| L1, L4 | 1.49700 / 81.61 | HOYA FCD1 | 1.49700 / 81.61 |
| L2 | 1.61700 / 62.79 | OHARA S-PHM51 | 1.61700 / 62.80 |
| L3 | 1.65412 / 39.70 | OHARA BPH5 | 1.65412 / 39.69 |
| L5 | 1.50378 / 66.81 | OHARA BSL21 (discontinued) | 1.50378 / 66.81 |
| L6 | 1.68893 / 31.08 | OHARA S-TIM28 | 1.68893 / 31.08 |
| L7 | 1.52682 / 51.12 | none within printed precision | — |
| L8 | 1.78800 / 47.43 | OHARA S-LAH64 | 1.78800 / 47.37 |
| L9 | 1.60342 / 38.01 | HOYA E-F5 | 1.60342 / 38.01 |
| L10 | 1.67790 / 55.33 | OHARA S-LAL12 | 1.67790 / 55.34 |

L7 has no match in the local HOYA, OHARA and Sumita catalogs; the nearest, HOYA CF2 (1.52630 / 51.05), misses nd by 0.0005, so L7 keeps the patent pair and its dispersion follows the Abbe-number approximation. S-LAH64 matches nd exactly and differs from the printed νd by 0.06; it is the closest catalog row.

L1 and L4 are the only fluorophosphate (FCD1-class, νd 81.6) elements. Olympus markets the lens as using ED glass without naming positions, so both carry an inferred anomalous-dispersion tag; FCD1's catalog P_g,F of 0.5389 lies about +0.032 above the normal line.

## Focus Mechanism

IIa and IIb both move toward the image, changing their separation, while groups I and III stay fixed. The patent prints the variable gaps (patent units) for three object points:

| Object point | d8 | d10 | d13 |
|---|---:|---:|---:|
| ∞ | 9.80 | 4.58 | 22.00 |
| −3056 | 12.01 | 4.82 | 19.55 |
| −1031 | 16.61 | 5.65 | 14.13 |

From the gaps, IIa moves 2.21 and 6.81 and IIb moves 2.45 and 7.88 at the two finite points. The patent's separate xa/xb table prints the same four numbers transposed (its rows hold the two object points, its columns IIa and IIb); Example 2 shows the same layout. Both readings satisfy condition (2), 1 < xb/xa, and the gap-derived values are used. With φa = −0.818 and φb = −1.142 (US print), condition (1) gives φb/φa = 1.40, inside 0.7–1.5. Traced paraxially, the printed rows focus at 3047 and 1031 units from the first surface, consistent with object distances measured from the front vertex. At the −1031 row the three gaps sum 0.01 unit more than at infinity; d13 is taken as 14.12 so the rear group stays fixed.

Intermediate states follow a quadratic relation between IIb and IIa travel through the two printed rows, with the image plane held fixed. This interpolation law is inferred. The last printed state lies at about 2.07 m object-to-image distance (magnification −0.102). The marketed 1.6 m minimum focus distance lies beyond it: there IIa has moved 16.80 mm and IIb 19.89 mm, about 37% and 40% more than at the last printed state, and the magnification is −0.140, in line with the roughly 1:7 maximum reported for the production lens. The near end of the focus range is therefore an extrapolation, not the factory focusing cam.

## Aspherical Surfaces

None. Every optical surface in Example 1 is spherical.

## Apertures and Model Scope

Clear semi-diameters are estimated from the patent's Fig. 1, not printed dimensions. The figure is drawn at one scale in both directions, and its rims were read at the 1.8× scale of the model. Where Fig. 1 draws a rim slightly under the F/2 axial marginal ray at infinity (L1, L2, the front face of L3, the rear face of L3 and L4, by up to 3%), the value sits just above that ray instead. Elements drawn with square-cut edges keep one value on both faces, and L3 keeps the flat rear flange the figure shows: its front face reaches 36.8 mm, its concave rear face 31.8 mm. The front rim (45.0 mm semi-diameter, a 90 mm clear diameter) fits inside the 100 mm filter thread. The stop semi-diameter, 20.03 mm, follows from F/2. The infinity chief ray reaches the full-frame corner with about 51% geometric transmission wide open. At the 1.6 m minimum focus the front group, rather than the iris, limits the on-axis cone to about 83% of the stop radius. The image-side numerical aperture there is 0.224, still above 0.219, the NA/(1 + β) to which the patent's claim 3 resizes the iris during focusing (NA = 0.250 at infinity, magnification 0.140 taken as a magnitude).

The patent prints only d-line indices and Abbe numbers. The modeled chromatic behavior uses the catalog equivalents' dispersion curves (and an Abbe-number approximation for L7), so it describes the patent design with those glasses, not measured chromatic or MTF performance of the production lens.
