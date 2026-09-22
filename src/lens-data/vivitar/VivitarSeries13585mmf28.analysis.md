# Vivitar Series 1 35–85mm f/2.8 VMC — Key Findings

## Patent Overview

**Patent:** US 3,975,089
**Inventor:** Ellis I. Betensky
**Assignee:** Ponder & Best, Inc.
**Filed:** April 19, 1974
**Granted:** August 17, 1976 (Certificate of Correction January 25, 1977)
**Title:** Zoom Lens
**Embodiment analyzed:** Table I (the single tabulated prescription), with Fig. 1 for the iris position and element proportions

US Patent 3,975,089, filed April 1974 and granted August 1976, describes Ellis I. Betensky's zoom lens design for Vivitar's Series 1 line. Table I gives 12 spherical elements in four functional groups (nine air-spaced groups) with a three-moving-group architecture; the claims repeat the same table three times, and the Certificate of Correction only fixes a "5.93" in claim 17 to the 5.98 mm of Table I.

## Core Innovation
Rather than the conventional two-moving-group zoom design, Betensky's approach allows the front positive group to participate in zoom motion. This strategy provides "additional degrees of freedom for aberration correction" while reducing the physical travel demands on the variator and compensator groups, enabling a more compact design without sacrificing optical quality. Table II quantifies the travel: Group II moves 19.07 mm and Group III 8.14 mm, while Group I moves only 3.24 mm forward and 3.15 mm back over the range; the data file's variable gaps reproduce all three figures.

## Optical Configuration
The lens employs a positive-negative-negative-positive (PNNP) power distribution. Group I (positive front) and Groups II and III (negative variator and compensator) all move during zooming, while Group IV (positive relay) remains stationary. The patent identifies three critical conditional relationships governing the facing surface radii and combined curvature parameters—all three conditions are satisfied in the published prescription.

Fig. 1 draws the iris symbol inside Group IV, between L10 and L11, about a third of the way through the 11.53 mm R17–R18 gap; the data file places the stop there (4.15 mm behind R17, a figure-derived split). Because the iris sits in the stationary group, the f/2.8 marginal ray meets it at the same 11.6 mm radius at both zoom stations, so a single fixed iris holds f/2.8 across the range and no inferred aperture schedule is needed.

## Prescription and Focal-Length Discrepancy
Table I is printed in millimetres "as scaled to a 36–83mm focal length", and the data file stores it native. As printed, however, it computes to f = 38.5 mm at the wide station and 89.1 mm at the tele station, with a paraxial back focus of 45.8 mm, whereas the text states 36–83 mm and a back focal length of 40.06 mm. The published Table III powers for Groups I–III (0.0157, −0.0395, −0.0098 mm⁻¹) match the printed rows, but Group IV computes to 0.0319 mm⁻¹ against the published 0.0333, so the disagreement lies in the Group IV rows rather than in a uniform scale error, and no single printed value can be corrected to reconcile focal length, back focus and front-vertex distance together. The prescription is therefore kept exactly as printed; the zoom stations are labelled with the patent's 36 mm and 83 mm while the computed focal lengths are reported alongside. One practical consequence: at the computed 89 mm tele focal length the f/2.8 axial beam is about 5 % too large for the knife-edged L6–L8 elements (an effective f/3 at the tele station in the model), whereas at the patent's nominal 83 mm it clears them.

## Semi-Diameters and Field
The patent publishes no semi-diameters. The data file's values are estimated from the Fig. 1 drawing (≈13.7 px/mm at 300 dpi, scale taken from the drawn Group I and Group IV axial lengths) and checked with a real-ray trace at f/2.8 and a 21.6 mm image height. The front group is large — L1 at 32.5 mm half-diameter, consistent with the production lens's 72 mm filter thread — because the iris sits deep in the relay group and the entrance pupil is correspondingly far back. L3, L4, L7, L8, L9 and L11 are drawn at their knife edges and are stored just inside the zero-edge height; the L5 rear and L6 front are limited to about 9 mm because their facing concave bowls would touch at the tele station's 5.01 mm gap. With these apertures the full-frame corner chief ray at the wide end is intercepted by the L4 knife edge and the L5 rear rim; the chief ray clears every surface only to roughly 15–16 mm image height, so the extreme corners at 35 mm are lit by the lower part of the bundle. This heavy wide-end vignetting follows from the printed prescription and the drawn proportions, not from the estimates themselves.

## Glass Palette
The design uses ten distinct nd/νd rows, dominated by high-index dense flints and dense crowns. The patent gives only nd/νd, so every glass name in the data file is a catalog equivalent chosen for the printed pair rather than a supplier the patent identifies. Notably, the L9–L10 cemented doublet pairs a low-dispersion fluor crown of FK5 type (νd = 70.4) with a dense flint of SF6 type (νd = 25.5), creating a Δνd = 44.9 differential for aggressive chromatic correction — a technique that would become standard in later high-performance zoom designs.

Two formerly code-only rows now have coefficient-backed equivalents: HOYA BSC6 reproduces L2's `531621`
coordinate, while SUMITA BAF12 reproduces L11's rounded `639451` coordinate. These names identify optical
equivalents; the patent does not identify the production suppliers.

## Focus Mechanism
The patent's focusing member moves "all lens groups in fixed relation to one another" (col. 4), i.e. unit focus, and the operator zooms and focuses with the same control member. The patent publishes no close-focus state. The data file's close-focus gaps use a single whole-lens extension of 11.18 mm, calculated so that the wide station reaches the production lens's published 0.26 m minimum (film plane) at 35 mm, where the model gives a magnification of −0.29 (published 1:3). The same extension at the 85 mm setting puts the object at about 0.885 m, matching the published 0.9 m close focus at the long end — a check that the production lens really does focus by moving the whole assembly.

## Field Curvature Control
The computed Petzval sum of +0.0017 mm⁻¹ demonstrates exceptional field-curvature correction for an era before aspherical surfaces became commonplace. This performance results from carefully balanced high-index negative elements working against the positive groups.

## Manufacturing Reality
Production was contracted to Kino Precision Industries in Japan. The push-pull varifocal mechanism—not a true parfocal zoom—was marketed as "Auto Variable Focusing", converting a design constraint into a commercial feature while granting optical advantages in resolution and aberration control. The two tabulated stations already differ in paraxial back focus by 0.55 mm, and the data file models each station at its own focus.
