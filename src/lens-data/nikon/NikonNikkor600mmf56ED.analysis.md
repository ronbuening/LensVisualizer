# NIKON NIKKOR 600mm f/5.6 ED — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,774,991\
**Filed:** 20 December 1971\
**Priority:** Japan 45/125634, 25 December 1970\
**Granted:** 27 November 1973\
**Inventor:** Yoshiyuki Shimizu\
**Assignee:** Nippon Kogaku K.K.\
**Title:** *Achromatic Telephoto Objective Lens*\
**Embodiment analyzed:** Example II / Claim 3

The prescription is taken from Example II of US 3,774,991, with Claim 3 providing a duplicate numerical table. The patent gives a focal length of 600.0 mm, relative aperture f/5.6, and an 8° full design field. Example II appears on PDF page 11; Claim 3 appears on PDF page 12. The Patent Office Certificate of Correction on PDF page 13 changes the Example-II body-table value of `r5 = +244.820 mm` to `r5 = +224.820 mm`. Claim 3 already prints the corrected +224.820 mm value. The implemented prescription therefore preserves the raw +244.820 mm reading as a source discrepancy while using the official +224.820 mm correction. [1]

The correlation with the production Nikkor 600mm f/5.6 ED is strong but is not treated as manufacturer-confirmed patent attribution. The evidence converges in several independent ways:

1. The selected patent example is exactly 600.0 mm at f/5.6, matching the marketed focal length and maximum aperture. [1]
2. The prescription contains five elements in four air-separated groups. Nikon's period specification for the separate-focusing-mount 600mm f/5.6 ED also lists five elements in four groups. [4]
3. Example II uses the low-dispersion fluophosphate-crown / lanthanum / barium-flint combination that the patent identifies as its chromatic-correction strategy. [1]
4. Nikon identifies Yoshiyuki Shimizu as the optical designer responsible for the 400, 600, 800, and 1200 mm focusing-unit super-telephoto series. [2]
5. Nikon records the Nikkor 600mm F5.6 ED among the four ED telephotos released in 1975, after the patent's 1970 priority and 1971 filing dates. [3]
6. Nikon's period specification gives f/5.6–22, a 4°10′ marketed angle of view, and 11 m minimum focus for the separate-focusing-mount 600mm f/5.6 ED. These are kept separate from the patent's wider 8° optical design field. [4]

No inspected Nikon source explicitly states that US 3,774,991 Example II is the production prescription. The identification should therefore be read as a research correlation supported by matching optical and historical evidence, not as a factory attribution.

## Optical Architecture

The design is an all-spherical telephoto objective with five elements in four air-separated groups. Its front section consists of three separate elements: a positive L1, a negative L2, and a positive L3. After L3, a 254 mm air space separates this forward achromatic group from the rear cemented L4+L5 doublet. Figure 2A on patent PDF page 3 shows the same widely separated front and rear architecture. [1]

The first-order model confirms that the system is telephoto in the project's strict sense. At infinity, the Gaussian effective focal length is 599.998701 mm and the distance from the first surface vertex to the Gaussian image plane is 546.874735 mm, giving `TL/EFL = 0.911460 < 1`. The back focal distance from patent surface 9 to the Gaussian image is 246.874735 mm. The system is therefore not retrofocus: its BFD is substantially shorter than its EFL.

The power distribution is also consistent with that architecture. Considered as an air-embedded subsystem, L1+L2+L3 has paraxial EFL +487.804894 mm. The cemented L4+L5 rear pair has a much weaker net negative EFL of −1201.333223 mm. These subsystem focal lengths are diagnostics of isolated groups; they are not substitutes for the groups' in-situ behavior in the complete lens.

The patent's uncorrected Example-II body table does not reproduce the stated 600 mm focal length. With `r5 = +244.820 mm`, independent paraxial tracing gives approximately 698.184715 mm. Applying the Patent Office correction to +224.820 mm gives 599.998701 mm, within 0.001299 mm of the published 600.0 mm value. This numerical result is one reason the official correction is optically consequential rather than merely typographic. [1]

## Element-by-Element Analysis

### L1 — Biconvex Positive

`nd = 1.48606`, `νd = 81.5`. Glass: `Unmatched (486815 — fluophosphate crown; vendor unresolved)`. Standalone paraxial `f = +241.555 mm`.

L1 is the front positive member of the patent's forward achromatic group. The patent explicitly identifies this coordinate as fluophosphoric-acid glass and places this low-dispersion positive component at the center of its secondary-spectrum strategy. Its function is therefore source-supported at the chromatic-strategy level; the present model does not assign a more specific spherical-aberration or coma contribution that is not independently calculated. [1]

No current public catalog match establishes the historical supplier or exact melt. The `Unmatched` label preserves the patent coordinate and material class without converting a modern low-dispersion comparison glass into a claimed production identity.

### L2 — Biconcave Negative

`nd = 1.74400`, `νd = 44.9`. Glass: `744449 — lanthanum glass coordinate class (vendor unresolved)`. Standalone paraxial `f = −216.390 mm`.

L2 is the divergent member of the three-element forward group. The patent explicitly identifies it as lanthanum glass. In the patent's chromatic argument, the negative component is paired with low-dispersion positive glass and an additional positive barium-flint component so that the combined dispersion behavior reduces secondary spectrum while retaining the required net power. [1]

Current catalogs contain close or exact members of the 744449 coordinate family, but the patent does not name a supplier. The data therefore records the coordinate class rather than assigning a vendor-specific Sellmeier identity.

### L3 — Positive Meniscus

`nd = 1.56965`, `νd = 49.5`. Glass: `570495 — barium flint glass coordinate class (vendor unresolved)`. Standalone paraxial `f = +415.401 mm`.

L3 is the second positive component in the forward group and is identified by the patent as barium flint glass. In the patent's stated concept, this additional positive member is used with L1 and L2 to alter the combined partial-dispersion behavior of the forward group rather than merely adding positive power. [1]

The data file retains the patent's d-line coordinate directly. A close modern catalog coordinate supports the broad barium-flint classification, but it does not prove the historical glass manufacturer or melt.

### L4 — Biconcave Negative, Front Member of D1

`nd = 1.52682`, `νd = 51.1`. Glass: `527511 — crown-flint coordinate (CF2 dispersion proxy; supplier unresolved)`. Standalone paraxial `f = −116.174 mm`.

L4 begins the cemented rear doublet. The patent provides its d-line index and Abbe number but does not assign a material class in the Example-II table. The integration audit uses CF2 as a closely compatible dispersion proxy; this neither identifies the historical melt nor establishes a patent-published material class.

At the shared L4→L5 cemented interface, the data model assigns the interface to the downstream L5 medium, preserving the physical cemented junction without inserting a synthetic cement layer.

### L5 — Biconvex Positive, Rear Member of D1

`nd = 1.62374`, `νd = 47.0`. Glass: `624470 — barium flint glass coordinate class (vendor unresolved)`. Standalone paraxial `f = +131.581 mm`.

L5 completes the cemented rear doublet. Its positive standalone power is stronger than the doublet's combined power because the biconcave L4 and their shared cemented interface substantially alter the net result. The verified air-embedded L4+L5 combination has EFL −1201.333 mm, so the pair is weakly negative as a unit despite L5's positive standalone power.

The 624470 coordinate has modern catalog-family counterparts, but the patent gives no historical supplier. The data therefore keeps a vendor-neutral coordinate-class label and does not import modern catalog line indices into the patent element.

## Glass Identification and Selection

The patent's chromatic concept is unusually explicit for an early-1970s telephoto design. Its specification describes a forward group containing a positive phosphate- or fluophosphate-crown component, a negative lanthanum- or antimony-flint component, and another positive barium-flint component. Example II realizes that scheme as L1, L2, and L3 respectively. Patent pages 9–10 explain the intended reduction of secondary spectrum, and Figure 8 on PDF page 8 plots the axial achromatism of Example II after normalization to 100 mm focal length. [1]

| Element | Patent d-line coordinate | Source/material treatment | Data-file glass label |
|---|---:|---|---|
| L1 | 1.48606 / 81.5 | Fluophosphoric-acid glass | `Unmatched (486815 — fluophosphate crown; vendor unresolved)` |
| L2 | 1.74400 / 44.9 | Lanthanum glass | `744449 — lanthanum glass coordinate class (vendor unresolved)` |
| L3 | 1.56965 / 49.5 | Barium flint glass | `570495 — barium flint glass coordinate class (vendor unresolved)` |
| L4 | 1.52682 / 51.1 | No class stated in Example II | `527511 — crown-flint coordinate (CF2 dispersion proxy; supplier unresolved)` |
| L5 | 1.62374 / 47.0 | No class stated in Example II | `624470 — barium flint glass coordinate class (vendor unresolved)` |

The glass audit checked current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita catalog families. Those comparisons are useful for class and coordinate context, but they do not establish the actual historical melts used by Nippon Kogaku. The data therefore does not store vendor-derived `nC`, `nF`, `ng`, or `dPgF` values on these elements.

That limitation matters for terminology. The patent explicitly presents the invention as a method of reducing secondary spectrum, and Nikon marketed the lens as ED. The model preserves the patent's `nd`/`νd` coordinates and uses compatible catalog curves for four of the five elements; L1 remains on the Abbe approximation. It therefore does not independently establish apochromatic or anomalous-partial-dispersion performance. The analysis treats the patent's chromatic claims as source statements rather than as results reproduced by the current mixed catalog/Abbe model.

## Focus Mechanism

The optical prescription is modeled only at infinity. The patent publishes no finite-focus spacing table, no group-travel values, and no numerical focus mechanism from which a unique close-focus state could be reconstructed. Accordingly, the data uses `NO_INTERNAL_RECONSTRUCTION`: no `var` gaps or internal lens movement are authored.

Nikon's history of the focusing-unit super-telephotos explains the production mechanism. The lens head itself used a fixed barrel, while movable focusing and aperture mechanisms were built into the common focusing unit. The revised AU-1 focusing unit was released in 1975 and provided 600/1200 mm distance scales. Nikon also describes this family as using a behind-the-lens diaphragm arrangement. [2]

The production minimum focus of 11 m is retained only as manufacturer metadata from Nikon's period specification. [4] It does not define a finite optical prescription in the model, because minimum-focus distance alone is insufficient to solve the lens-head/focusing-unit travel and reference station uniquely.

The aperture stop is likewise a modeling inference rather than a patent measurement. Because Nikon documents the diaphragm in the focusing unit behind the lens head, the model inserts one flat `STO` 1.000 mm behind patent surface 9. Its physical semi-diameter, 22.047760 mm, is calibrated by exact spherical tracing to reproduce the published f/5.6 entrance pupil. The 1.000 mm station offset is a numerical convention, and the calibrated stop radius is not evidence of the manufactured iris diameter.

## Chromatic Correction Strategy

The patent begins from the difficulty of suppressing secondary spectrum in long-focus achromats when ordinary glasses have closely correlated Abbe number and partial dispersion. It proposes combining a very low-dispersion positive glass with a negative lanthanum- or antimony-flint member and a further positive barium-flint member whose dispersion characteristics alter the composite behavior of the latter pair. [1]

Example II implements that concept in the L1–L3 forward group. The patent's own claim is therefore stronger than a generic statement that the design merely contains an ED-like front element: the three-component glass selection is part of the disclosed chromatic strategy. At the same time, the current LensVisualizer prescription does not contain enough wavelength-resolved material data to reproduce the patent's Figure 8 secondary-spectrum plot independently. The source claim and the implemented spectral capability should not be conflated.

## Verification Summary

The implemented infinity prescription reproduces the corrected patent's first-order quantities with two separately implemented paraxial methods. Its Gaussian EFL is 599.998701 mm against the published 600.0 mm target. The S9-to-image BFD is 246.874735 mm, the first-surface-to-image track is 546.874735 mm, and the surface-by-surface Petzval sum is `7.938434704198 × 10⁻⁴ mm⁻¹` using `φ/(n·n′)` at every refracting interface. The y–ν and ABCD system matrices agree to the numerical precision of the verification run.

The patent provides no clear-aperture semi-diameters. The data therefore uses modeled values derived from exact spherical ray envelopes at infinity: 56 mm on L1, 54 mm on L2, 53 mm on L3, and 23 mm on the L4+L5 rear doublet. These values pass the portable edge-thickness, actual rim-slope, shared-gap intrusion, and sampled off-axis containment checks. The minimum modeled element edge thickness is 1.287626 mm and the largest modeled rim-slope angle is 16.260205°.

The exact-ray sampling includes on-axis full-pupil rays, a 60%-of-marketed-field bundle, both edges of the marketed 4°10′ full field (±2°05′), and surviving samples at the patent's ±4° design-field edges. Additional outer-pupil probes can fail to reach the inferred stop at the edge field. The model therefore does not claim that the full f/5.6 pupil is unvignetted across the entire 8° patent field. The 8° patent design field and the 4°10′ marketed 35 mm angle of view remain separate quantities.

The semi-diameters and stop are model geometry, not measured production apertures. The integration review adds LensVisualizer surface and production render validation.

## Sources and References

1. Yoshiyuki Shimizu, **US 3,774,991, “Achromatic Telephoto Objective Lens,”** filed 20 December 1971, granted 27 November 1973. Example II: PDF p. 11; Claim 3: PDF p. 12; Certificate of Correction: PDF p. 13; optical section Figure 2A: PDF p. 3; chromatic discussion: PDF pp. 9–10; Example-II achromatism Figure 8: PDF p. 8. Patent copy included with the dossier; public record: https://patents.google.com/patent/US3774991A/en
2. Nikon Imaging, **NIKKOR — The Thousand and One Nights No. 50**, focusing-unit history, AU-1 mechanism, behind-the-lens diaphragm discussion, and Yoshiyuki Shimizu design responsibility: https://imaging.nikon.com/imaging/information/story/0050/
3. Nikon Imaging, **NIKKOR — The Thousand and One Nights No. 98**, historical note identifying the Nikkor 600mm F5.6 ED among Nikon's four ED telephotos released in 1975: https://imaging.nikon.com/imaging/information/story/0098/
4. Nikon, Inc., **Nikkor Lenses / Technical Specifications**, Tele-Nikkor section, June 1978; manufacturer-authored specification archived by Pacific Rim Camera. The separate-focusing-mount 600mm f/5.6 ED is listed as 5 elements/4 groups, f/5.6–22, 4°10′, and 35 ft / 11 m minimum focus: https://www.pacificrimcamera.com/rl/01037/01037.pdf
5. Nikon Imaging, **Mount Adapter FTZ II — incompatible lenses and accessories**, compatibility list identifying the 600mm f/5.6 as requiring the AU-1 focusing unit: https://imaging.nikon.com/imaging/lineup/accessory/camera/ftz_2/index.html
6. HIKARI GLASS CO., LTD. / Nikon Business, **Optical Glass Catalog 2023**, coordinate-family comparison source: https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
7. CDGM, **Optical Glass Data Sheets, 2022-06**, coordinate-family comparison source: https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf
8. OHARA, **Pocket Catalog 2023-05**, coordinate-family comparison source: https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf


## Integration Review — 2026-09-13 UTC

US3774991.pdf p. 3, Fig. 2A was inspected at 600 dpi. Its broken long air gap cannot calibrate whole-span dimensions; the front/rear rim proportions support retaining the existing SDs. CDGM H-BaF2 supplies the 570495 spectral curve (Δnd = +0.00005, Δνd = −0.05); the existing CF2 curve is a 527511 coordinate proxy (Δnd = −0.000524, Δνd ≈ −0.054). Coverage rises from 2/5 to 4/5. The 486815 ED coordinate remains unmatched. The non-IF ED name and AU-1 qualification are retained.

The optical prescriptions, stop calibration, and source focus/zoom states are preserved. Surface validation, image-circle screening, and the shared render-diagnostics corpus were run during integration. Catalog proxies preserve patent nd/νd and do not identify the historical supplier, melt, or anomalous partial dispersion.

New coefficient source: [CDGM Optical Glass Data Sheet, June 2022](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf), H-LaK67 printed p. 140, QF3 p. 145, H-BaF2 p. 171. Polynomial rows are retained in their published form; they are not converted to fabricated Sellmeier coefficients.
