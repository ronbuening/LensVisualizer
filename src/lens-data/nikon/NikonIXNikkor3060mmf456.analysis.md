## Patent Reference and Design Identification

**Patent:** JP 3909533 B2  
**Filed:** 24 January 1997  
**Grant published:** 25 April 2007; registered 2 February 2007  
**Inventor:** Haruo Sato  
**Patentee:** Nikon Corporation  
**Title:** Ultra-compact zoom lens  
**Embodiment analyzed:** Example 5, Table 5 and Figure 17, with E4/E5 center thicknesses taken from Nikon's Tale 83 drawing

The patent's numerical Example 5 is associated with the Nikon IX-Nikkor 30–60mm f/4–5.6, the pancake zoom for the APS-format Pronea S (1998). The factory prescription is unpublished.

The patent supplies the numerical starting point. [Nikon Tale 83](https://imaging.nikon.com/imaging/information/story/0083/index.html), written by the patent's inventor Haruo Sato, describes six spherical elements in a negative–positive two-group zoom, a lanthanum-glass first element, a four-element Ernostar-type rear group whose last three elements touch, f/4 at 30 mm to f/5.6 at 60 mm, a 0.35 m minimum focus distance, and a patent filed in January 1997 and published in August 1998. It does not identify a numbered example.

Example 5 has a zoom ratio of 1.884 rather than Nikon's nominal 2×. Its weak negative E4 rear curvature differs from the weak positive curvature in Nikon's drawing; the patent radius is kept.

## Model Scope

E4 and E5 center thicknesses follow the Tale 83 cross-section rather than the patent table: 2.766 → 2.591 mm and 3.399 → 2.457 mm at 30 mm per unit. All other values are the patent's. Because of that change, focal lengths run about 3% long of the patent's (30.88 / 42.09 / 58.55 mm against 30.00 / 40.78 / 56.51 mm), the back focus is recalculated, and condition (7), (d22 + d23)/f2, becomes 0.182 against the printed 0.2268, still inside the claimed range. Example 1, whose 2.007 zoom ratio is closer to 2×, was evaluated and rejected because its element shapes do not match the drawing.

## Optical Architecture

The model has six air-separated elements and two functional zoom groups: a negative front pair and a positive four-element rear assembly. There are no cemented groups or aspheres. The calculated group focal lengths are −37.862 and +27.774 mm.

All patent radii, indices, Abbe numbers, fixed central air gaps and the three printed intergroup spacings are kept. The scale is 30 mm per normalized unit, from Nikon's nominal wide focal length and the patent's normalized wide value of 1; it does not force the modeled wide focal length to 30 mm.

Only the E4/E5 glass thicknesses change. A common-scale fit of the drawing's central surface curves, 20–125 pixels from the axis, gives normalized thicknesses 0.0863665544/0.0819024111. Group offsets absorb the drawing's unstated zoom position. Radii, glass and gaps are held fixed in the fit, and no focal-length, f-number or performance target enters it.

| Quantity | Patent table at 30 mm/unit | Model |
|---|---:|---:|
| E4 center thickness | 2.7660 mm | 2.5910 mm |
| E5 center thickness | 3.3990 mm | 2.4571 mm |
| Change from patent thickness | — | −6.327% / −27.712% |
| EFL at wide / middle / tele | 30.0077 / 40.7903 / 56.5301 mm | 30.8805 / 42.0875 / 58.5532 mm |
| BFL from last optical vertex | 36.7511 / 44.4936 / 55.7957 mm | 39.3667 / 47.5878 / 59.6666 mm |

The patent table as printed reproduces its stated focal lengths and back focus to within its last printed digit (EFL +0.03 to +0.04%). The model's back focus values are calculated infinity image planes, not factory spacings. Both groups move relative to the image plane during zooming while their internal gaps stay fixed; the 65 zoom stations interpolate the intergroup gap between the three printed states and are not a recovered cam law.

## Element-by-Element Analysis

Standalone thick-element focal lengths use the stored radii, glass index and center thickness, with air on each side.

### L1 — Negative meniscus

**nd = 1.796681, νd = 45.37; glass: Q-LASFPH3S spectral proxy (supplier/melt unverified); standalone f = −22.967 mm.**

Its negative standalone power dominates the front pair; the object-convex shape and all radii follow the patent.

### L2 — Positive meniscus

**nd = 1.846660, νd = 23.82; glass: S-TIH53 spectral proxy (supplier/melt unverified); standalone f = +65.282 mm.**

Its positive power partly offsets L1. The combined front pair remains negative; the lower Abbe number is source data, not proof of a chosen supplier.

### L3 — Biconvex positive

**nd = 1.658440, νd = 50.84; glass: N-SSK5 spectral proxy (supplier/melt unverified); standalone f = +22.587 mm.**

This first rear element precedes the stop. Its center thickness is the patent's.

### L4 — Biconvex positive

**nd = 1.658440, νd = 50.84; glass: N-SSK5 spectral proxy (supplier/melt unverified); standalone f = +31.052 mm.**

Its center thickness follows Nikon's drawing: 2.591 mm against the patent's 2.766 mm. The very weak negative rear radius is the patent's, although the drawing shows a weak positive curvature.

### L5 — Biconcave negative

**nd = 1.805182, νd = 25.35; glass: S-TIH6 spectral proxy (supplier/melt unverified); standalone f = −12.399 mm.**

This negative member of the positive rear group has its center thickness from Nikon's drawing: 2.457 mm against the patent's 3.399 mm. Both adjacent air gaps are the patent's.

### L6 — Positive meniscus

**nd = 1.698950, νd = 30.04; glass: E-FD15 spectral proxy (supplier/melt unverified); standalone f = +34.618 mm.**

The final element retains its patent thickness and two negative signed radii. It is separated by air, not cemented to L5.

The L1/L2 pair provides negative group power; the L3–L6 sequence provides positive rear-group power. The E4/E5 changes affect group power and system conjugates without changing any curvature sign. The surface-by-surface Petzval sum is +0.00258644 mm⁻¹, with each contribution computed as `(n′−n)/(R n n′)`. That paraxial sum is not a measured field-curvature or astigmatism result.

## Glass Identification and Selection

All d-line indices and Abbe values are the patent's, including six-decimal entries. Glass annotations name coordinate-compatible catalog curves as spectral proxies; supplier, melt and factory material remain unverified. L1 uses Q-LASFPH3S approximately (catalog nd 1.79525 / νd 45.25 versus source 1.796681 / 45.37), without changing the source coordinate. Tale 83 states that only the first element uses a lanthanum glass; L1's nd 1.7967 / νd 45.4 is a lanthanum-flint coordinate, while the other five are barium-crown and dense-flint coordinates, which is consistent with that statement.

All six bodies now use catalog dispersion curves anchored to the retained patent d-line coordinates. No measured production C/F/g indices or source anomalous-partial-dispersion data are available, so no anomalous-dispersion performance claim is made.

## Focus Mechanism

Patent ¶0050 states that close focusing can be done by moving the first group toward the object. The model uses that single motion, holds the rear group and image plane fixed at each zoom state, and solves the paraxial conjugate for Nikon's 0.35 m minimum focus distance, taken as object-to-image distance. G1 travels about 4.7–4.8 mm. The patent prints no near-focus spacings, so these are calculated rather than published.

Seventeen focus keyframes, spaced in reciprocal object distance, are interpolated; the largest paraxial defocus found between keyframes is about 0.004 mm. Only the three printed zoom states at infinity are marked as published, and finite-focus MTF is not available for this lens.

## Aspherical Surfaces

There are none, as Tale 83 also states. All twelve refracting surfaces are spherical, and the stop is a flat plane.

## Aperture, Rims and Source Limits

The stop's axial position follows patent surface 7. Its radius is set from the patent's f-number schedule, 4.09/4.79/5.85, not from a published diameter.

Surface semi-diameters are inferred from the optical curve extents in Nikon's drawing; the drawing's mechanical rim details are not clear apertures. Facing surfaces 9/10 are reduced from an inferred 6.300 mm to 5.731 mm so that the patent's 0.582 mm central air gap is kept, leaving about 0.017 mm of air at the rim. This near-contact matches Tale 83's statement that the last three elements touch; the final L24 rims are 5.6 mm, closer to the roughly 5.26 mm optical-curve estimate in patent Figure 17 than the previous 6.3 mm. The E5/E6 rim clearance changes with this inferred extent; mechanical contact remains unreconstructed. The rims pass the full axial beam at every zoom station, with off-axis vignetting toward the field corners.

The lens covers the APS film format. On the Nikon IX mount of the Pronea bodies, the protruding rear housing prevents use on ordinary F-mount bodies without modification. Factory MTF, coatings, tolerances and the actual cam motion are unknown.

## Sources and References

- JP 3909533 B2 (Nikon, filed 24 January 1997, published as JP H10-206733 on 7 August 1998): Table 5 on printed pages 16–17, Figure 17, ¶0050 and claims 1–7.
- [Nikon Tale 83](https://imaging.nikon.com/imaging/information/story/0083/index.html) and its [Figure 1 cross-section](https://imaging.nikon.com/imaging/information/story/0083/img/pic_01.jpg): product description and relative element dimensions; the drawing is unscaled.
