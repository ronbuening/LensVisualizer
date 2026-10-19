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
| L1 | 1–2 | 1.497 | 81.61 | +155.7 | Biconvex front element; ED-class glass |
| L2 | 3–4 | 1.617 | 62.79 | +182.5 | Positive meniscus, convex to the object |
| L3 | 5–6 | 1.65412 | 39.70 | −80.5 | Biconcave (nearly plano-concave) negative element of group I |
| L4 | 7–8 | 1.497 | 81.61 | +162.8 | Positive meniscus closing group I; ED-class glass |
| L5 | 9–10 | 1.50378 | 66.81 | −220.1 | Biconcave focusing singlet IIa |
| L6 | 11–12 | 1.68893 | 31.08 | +112.6 | Biconvex flint of focusing pair IIb |
| L7 | 12–13 | 1.52682 | 51.12 | −64.6 | Biconcave rear element of IIb (pair −157.7) |
| L8 | 14–15 | 1.788 | 47.43 | +61.6 | Biconvex positive element of group III |
| L9 | 16–17 | 1.60342 | 38.01 | −46.4 | Biconcave front element of the rear pair |
| L10 | 17–18 | 1.6779 | 55.33 | +67.5 | Biconvex rear element of the rear pair (pair −153.8) |

Focal lengths are thick-lens values in air at the 180 mm scale. Glass identities are not printed in the patent.

## Glass Identification and Selection

The patent nd/νd pairs are kept without catalog glass names. L1 and L4 (1.49700/81.61) are fluorophosphate ED-class crowns, consistent with Olympus's ED designation for this lens; Olympus did not publish which positions are ED, so the file carries no anomalous-dispersion tag. Two scalar coordinates do not fix a full dispersion curve, so modeled behavior away from the d-line rests on an Abbe-number approximation.

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

Clear semi-diameters are inferred, not patent dimensions. They are set per group, limited by a 0.1 mm minimum edge thickness and by the air-gap sag between facing surfaces (surfaces 6 and 7 are limited by their gap). The front rim (50.98 mm semi-diameter) is slightly larger than a 100 mm filter thread would allow, so the modeled corner vignetting is a lower bound. The stop semi-diameter, 20.03 mm, follows from F/2. The infinity chief ray reaches the full-frame corner.

The patent prints only d-line indices and Abbe numbers, so the model makes no claim about the production lens's chromatic or MTF performance.
