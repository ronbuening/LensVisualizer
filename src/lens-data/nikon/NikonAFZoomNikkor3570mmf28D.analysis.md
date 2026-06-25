# NIKON AF ZOOM-NIKKOR 35-70mm f/2.8D

## Patent Reference and Design Identification

**Patent:** US 6,320,698 B1
**Application Number:** US 08/348,811
**Filed:** November 28, 1994
**Granted:** November 20, 2001
**Priority:** November 29, 1993 (JP 5-323283)
**Inventor:** Kenzaburo Suzuki
**Assignee:** Nikon Corporation, Tokyo
**Title:** Zoom Lens with Vibration Reduction Function
**Embodiment analyzed:** Third Embodiment / Example 3 (Table 3, FIG. 7)

US 6,320,698 B1 describes a four-group zoom lens with a negative first group, positive second group, negative third group, and positive fourth group. The patent's vibration-reduction mechanism laterally displaces the third group, or a partial group within it, substantially perpendicular to the optical axis. Example 3 is the worked example used here. It is tabulated at f = 36.0-68.5 mm, FNO = 2.85-2.86, and 2ω = 63.5°-34.2°.

Example 3 is the appropriate patent match for the Nikon AF Zoom-Nikkor 35-70mm f/2.8D on convergent optical and production evidence. The prescription has 15 elements in 12 air-spaced groups, matching the production lens specification. The patent focal-length range rounds naturally to the marketed 35-70 mm range, and the patent FNO corresponds to the marketed constant f/2.8 aperture. The aberration plots for the third embodiment use Y = 21.6 mm, corresponding to the half diagonal of the 135 still-camera format. The patent is assigned to Nikon and has a 1993 Japanese priority date, during the AF 35-70mm f/2.8 production era.

The match is not a claim that the production AF Zoom-Nikkor 35-70mm f/2.8D contains vibration reduction. It does not. The patent is best read as a Nikon design study for adding a laterally shifting G3 vibration-reduction group to the optical family of the 35-70mm f/2.8 standard zoom.

## Optical Architecture

The design is a negative-positive-negative-positive four-group standard zoom. The negative first group supplies the wide-angle front divergence and back-focus clearance required by a single-lens-reflex camera. The positive second group is the principal variator. The negative third group acts as a compensator and is the patent's vibration-reduction group. The fourth group is a positive relay group that brings the image to the 135-format image plane.

The element distribution is 4 + 5 + 3 + 3 elements. G1 contains four singlets. G2 contains a cemented triplet followed by two singlets. G3 contains one cemented doublet followed by one singlet. G4 contains three singlets. The computed group focal lengths from the transcribed prescription are f1 = -50.001 mm, f2 = 34.001 mm, f3 = -45.001 mm, and f4 = 64.995 mm, matching the patent's condition table to the stated precision.

During zooming from wide to tele, the G1-G2 interval decreases from 35.90188 mm to 2.80378 mm, the G2-G3 interval increases from 5.57243 mm to 16.43503 mm, and the G3-G4 interval decreases from 17.75710 mm to 6.79450 mm. G3 has Δ3 = 0 in the patent condition table, so it remains axially stationary during zooming. This is mechanically favorable for a lateral vibration-reduction actuator because the group does not also need zoom-axis cam travel.

The patent drawing for FIG. 7 shows aperture stop S between G2 and G3 and a stationary flare stop FS between G3 and G4. Table 3 does not specify exact stop sub-gaps or semi-diameters. The data file therefore inserts S and FS as zero-power flat surfaces inside the published d16 and d21 air gaps. These inserted surfaces preserve the published paraxial track length while allowing the viewer to show the two stops in their patent-indicated regions. The aperture stop is placed with 1.500 mm of air between S and G3 at the wide endpoint, and its semi-diameter is set to 11.2 mm so the tele endpoint can clear the patent's f/2.86 aperture; this is an inferred modeling aperture, not a patent-published mechanical iris diameter.

## Element-by-Element Analysis

### Group 1 - Negative Front Diverger (f1 = -50.0 mm)

#### L1 - Positive Meniscus, Convex to Object

nd = 1.80458, νd = 25.50. Glass: dense flint, S-TIH6/J-SF6 class. f = +295.6 mm.

L1 is a weak positive meniscus at the object side of the negative front group. Its positive power reduces the net negative strength required from the following two negative elements and helps moderate front-group aberrations. The patent glass is close to the S-TIH6/J-SF6 dense-flint region but does not exactly match the current OHARA S-TIH6 catalog value; the data file therefore labels it as a class match rather than a precise catalog identity.

#### L2 - Negative Meniscus, Convex to Object

nd = 1.67025, νd = 57.53. Glass: lanthanum crown, J-LAK02 class. f = -71.6 mm.

L2 supplies much of G1's diverging power. Its convex-front, concave-rear meniscus form is typical of a negative-lead SLR zoom: the rear surface carries the stronger curvature and produces the main negative refraction while the front surface keeps incidence angles manageable.

The earlier generic crown identification has been tightened. Current HIKARI J-LAK02 lies close to the patent's 670/575 glass code, so L2 is best described as a J-LAK02-class lanthanum crown rather than an unmatched BAK/SK-type glass.

#### L3 - Biconcave Negative

nd = 1.67025, νd = 57.53. Glass: lanthanum crown, J-LAK02 class. f = -60.5 mm.

L3 uses the same glass as L2 and adds further negative power. Its front surface is very weak, while its rear surface provides the active curvature. Together L2 and L3 establish the negative first-group power without resorting to a very high-dispersion flint for the strongest negative components.

#### L4 - Positive Meniscus, Convex to Object

nd = 1.86074, νd = 23.01. Glass: J-SFH2 class (HIKARI). f = +131.6 mm.

L4 closes G1 with a high-index positive dense-flint meniscus. It counters part of the preceding negative power, shapes the ray bundle entering the moving G2 interval, and contributes to field-curvature correction. The catalog value for HIKARI J-SFH2 matches the patent nd exactly and differs slightly in νd, so the correct label is a close class match.

### Group 2 - Positive Variator (f2 = 34.0 mm)

#### L5 + L6 + L7 - Cemented Triplet

Net cemented-triplet focal length = 118.9 mm.

**L5 - Negative Meniscus, Convex to Object.** nd = 1.86074, νd = 23.01. Glass: J-SFH2 class (HIKARI). f = -85.2 mm.

**L6 - Biconvex Positive.** nd = 1.48749, νd = 70.41. Glass: N-FK5 (SCHOTT). f = +41.4 mm.

**L7 - Negative Meniscus, Concave to Object.** nd = 1.80458, νd = 25.50. Glass: dense flint, S-TIH6/J-SF6 class. f = -233.9 mm.

The triplet combines a strong low-dispersion positive core with two dense-flint negative partners. L6 carries the largest positive power in this cemented set. The flint partners correct axial color and also let the strongest refractions occur at cemented interfaces, reducing the air-glass surface count compared with an air-spaced equivalent.

The N-FK5 identification for L6 is exact for nd and νd in the current SCHOTT catalog. This is stronger than a broad FC5-equivalent label and is the preferred catalog annotation in the data file.

#### L8 - Biconvex Positive

nd = 1.48749, νd = 70.41. Glass: N-FK5 (SCHOTT). f = +68.2 mm.

L8 is a standalone positive variator element using the same low-dispersion glass as L6. It adds positive power while keeping chromatic contribution low. The repeated use of N-FK5 in G2 places the lowest-dispersion material at the strongest positive-power positions of the variator group.

#### L9 - Positive Meniscus, Convex to Object

nd = 1.51835, νd = 60.23. Glass: unmatched crown (518/602 code; BaLKN3-like legacy region). f = +126.7 mm.

L9 is a weak positive meniscus at the rear of G2. It shapes the pupil and marginal-ray slope entering the stop region. The patent glass falls near the 518602 glass-code region sometimes associated with legacy BaLKN3-type crowns. Because no primary manufacturer datasheet was found that confirms the exact legacy identity, the data file leaves L9 as an unmatched crown rather than assigning a catalog glass name.

### Group 3 - Negative Compensator / Patent VR Group (f3 = -45.0 mm)

G3 is the patent's designated lateral vibration-reduction group. It remains fixed along the optical axis during zooming and is displaced perpendicular to the optical axis for image-shift correction. The patent gives a maximum G3 displacement of 0.30 mm at both zoom endpoints.

#### L10 + L11 - Cemented Doublet

Net cemented-doublet focal length = -239.2 mm.

**L10 - Positive Meniscus, Concave to Object.** nd = 1.86074, νd = 23.01. Glass: J-SFH2 class (HIKARI). f = +77.6 mm.

**L11 - Biconcave Negative.** nd = 1.51860, νd = 69.98. Glass: J-PKH1 class (HIKARI). f = -59.6 mm.

The L10/L11 doublet is weakly negative as a cemented unit because the strong positive and negative powers largely offset. Its chromatic role is more important than its net power. L11 is the first negative lens component in G3 and is the component used for the patent's q- shape-factor condition.

#### L12 - Biconcave Negative

nd = 1.51860, νd = 69.98. Glass: J-PKH1 class (HIKARI). f = -57.0 mm.

L12 supplies most of the negative power of G3. The high Abbe number of the G3 negative components satisfies the patent's ν- > 50 condition and helps suppress short-wavelength axial color in the group that is laterally displaced during vibration reduction. HIKARI J-PKH1 matches the patent nd exactly and is close in νd, so it is treated as a class match.

### Group 4 - Positive Rear Relay (f4 = 65.0 mm)

#### L13 - Positive Meniscus, Concave to Object

nd = 1.58913, νd = 61.09. Glass: S-BAL35 class (OHARA). f = +85.5 mm.

L13 begins the relay group with a concave-to-object positive meniscus. It receives the diverging bundle from G3 and starts reconverging it toward the image plane. Current OHARA S-BAL35 matches the patent nd and is close in νd, making it a reliable class identification.

#### L14 - Biconvex Positive

nd = 1.62041, νd = 60.14. Glass: J-SK16 / N-SK16 class. f = +49.5 mm.

L14 is the strongest positive element in the rear relay group. Its moderate-index, high-Abbe crown glass provides positive convergence with low chromatic burden. Both HIKARI J-SK16 and SCHOTT N-SK16 lie close to the patent pair, with exact nd agreement and small νd differences.

#### L15 - Negative Meniscus, Concave to Object

nd = 1.80458, νd = 25.50. Glass: dense flint, S-TIH6/J-SF6 class. f = -53.3 mm.

L15 is the final negative dense-flint meniscus. It acts as a field-correcting element at the rear of the relay group and offsets part of the positive Petzval contribution of L13 and L14. Its glass is the same dense-flint class used at L1 and L7.

## Glass Identification and Selection

The patent publishes nd, νd, and n(G) values but does not name glass manufacturers. The data file therefore uses catalog matches only where the nd/νd pair is supported by manufacturer data, and otherwise uses class labels with six-digit glass-code context.

| Element(s)  | Patent nd | Patent νd | Catalog / class annotation        | Status                                                       |
| ----------- | --------: | --------: | --------------------------------- | ------------------------------------------------------------ |
| L1, L7, L15 |   1.80458 |     25.50 | Dense flint, S-TIH6/J-SF6 class   | close class match; not exact current S-TIH6                  |
| L2, L3      |   1.67025 |     57.53 | J-LAK02-class lanthanum crown     | close HIKARI class match                                     |
| L4, L5, L10 |   1.86074 |     23.01 | J-SFH2 class (HIKARI)             | exact nd, small νd residual                                  |
| L6, L8      |   1.48749 |     70.41 | N-FK5 (SCHOTT)                    | exact nd/νd match                                            |
| L9          |   1.51835 |     60.23 | Unmatched crown, 518602 code      | no primary manufacturer confirmation for exact legacy identity |
| L11, L12    |   1.51860 |     69.98 | J-PKH1 class (HIKARI)             | exact nd, small νd residual                                  |
| L13         |   1.58913 |     61.09 | S-BAL35 class (OHARA)             | exact nd, small νd residual                                  |
| L14         |   1.62041 |     60.14 | J-SK16 / N-SK16 class             | exact nd, small νd residual                                  |

The chromatic strategy is conventional for a fast standard zoom of this period. High-index dense flints appear in positive and negative roles to control Petzval curvature and longitudinal color, while the strongest positive elements in G2 use low-dispersion N-FK5. The design does not use ED branding, fluorite, or aspherical surfaces.

## Focus Mechanism

Patent Table 3 gives zoom spacings only. It does not provide a separate close-focus prescription, focus-group travel, or macro-mode spacing. The data file therefore models the patent at infinity focus only, with the close-focus entries in the `var` table intentionally repeating the infinity values.

For the production AF Zoom-Nikkor 35-70mm f/2.8D, the normal minimum focus distance is 0.6 m. A macro mode at the 35 mm setting reaches 0.28 m and a maximum reproduction ratio of 1:4; the normal maximum reproduction ratio is 1:7.7. Those production figures are metadata and context, not a reconstructed close-focus prescription.

| Gap represented in data file | Patent wide value | Patent tele value | Data-file treatment                    |
| ---------------------------- | ----------------: | ----------------: | -------------------------------------- |
| d8, G1-G2                    |       35.90188 mm |        2.80378 mm | zoom variable                          |
| d16, G2-G3                   |        5.57243 mm |       16.43503 mm | split by inserted STO; total preserved; S-to-G3 gap fixed at 1.500 mm |
| d21, G3-G4                   |       17.75710 mm |        6.79450 mm | split by inserted FS; total preserved  |
| Bf                           |       37.89050 mm |       48.75270 mm | zoom variable                          |

## Conditional Expressions

The patent defines eleven conditional expressions. Using the patent values for fW = 36.00 mm, fT = 68.50 mm, f1 = -50.000 mm, f2 = 34.000 mm, f3 = -45.000 mm, f4 = 64.995 mm, R31 = -60.839 mm, L = 6.2 mm, D = 23.1 mm, ΔS3 = 0.30 mm, and Δ3 = 0, Example 3 satisfies all listed conditions.

| Formula | Quantity | Computed value | Patent listed value |
|---|---:|---:|---:|
| (1) | abs(f3) / sqrt(fW fT) | 0.90618 | 0.9062 |
| (2) | abs(f2) / abs(f1) | 0.68000 | 0.68 |
| (3) | ΔS3 / abs(f3) | 0.00667 | 0.0067 |
| (4) | R31 / abs(f3) | -1.35198 | -1.3520 |
| (5) | L / abs(f3) | 0.13778 | 0.138 |
| (6) | N- for G3 negative lenses | 1.51860 | 1.51860 |
| (7) | ν- for G3 negative lenses | 69.98 | 69.98 |
| (8) | abs(f3) / abs(f4) | 0.69236 | 0.6924 |
| (9) | q- for L11 | 0.90904 | 0.90904 |
| (10) | ΔS3 / D | 0.01299 | 0.013 |
| (11) | Δ3 / sqrt(fW fT) | 0.00000 | 0 |

For condition (9), q- is calculated as (R2 + R1) / (R2 - R1) for L11, the first negative lens component in G3: R1 = -32.4210 mm and R2 = 680.4752 mm. This gives q- = 0.90904.

## Vibration Reduction

The patent's vibration-reduction mechanism moves G3 laterally. For Example 3, the lateral G3 displacement is 0.30 mm at both the wide and tele endpoints. The corresponding image shift is -0.346 mm at the wide end and -0.387 mm at the tele end. The image-shift sensitivity is therefore approximately -1.15x at wide and -1.29x at tele.

The production AF Zoom-Nikkor 35-70mm f/2.8D lacks VR. In the data file, the group is labeled as `G3 / VR` because that is its role in the patent, not because the production lens contains a stabilizer.

## Verification Summary

The prescription was re-entered directly from Table 3 and checked with an independent paraxial y-nu ray trace. The last surface's published Bf was excluded when computing EFL and compared against the calculated back focal distance.

| Quantity       |     Computed | Patent value |  Difference |
| -------------- | -----------: | -----------: | ----------: |
| EFL, wide      |  36.01482 mm |     36.00 mm | +0.01482 mm |
| EFL, tele      |  68.49677 mm |     68.50 mm | -0.00323 mm |
| BFD, wide      |  37.88198 mm |  37.89050 mm | -0.00852 mm |
| BFD, tele      |  48.75271 mm |  48.75270 mm | +0.00001 mm |
| f1             | -50.00050 mm |   -50.000 mm | -0.00050 mm |
| f2             |  34.00050 mm |    34.000 mm | +0.00050 mm |
| f3             | -45.00069 mm |   -45.000 mm | -0.00069 mm |
| f4             |  64.99489 mm |    64.995 mm | -0.00011 mm |
| Petzval sum    |   0.00349015 |            - |           - |
| Petzval radius |    286.52 mm |            - |           - |

The Petzval sum was computed surface by surface as φ / (n n'), not from thin-lens element approximations. The semi-diameters in the data file are estimated because the patent table omits clear-aperture data. They were constrained to keep element edge thickness positive, front/rear element semi-diameter ratios within the project limit, sd/|R| below 0.90, and signed cross-gap sag intrusion within 90 percent of each adjacent air gap. The inserted aperture stop semi-diameter is set by the larger tele-end clear-aperture requirement implied by FNO = 2.86, while the nominal f-number field preserves the marketed f/2.8 behavior.

## Design Heritage and Context

Nikon's own historical article identifies the Ai AF Zoom-Nikkor 35-70mm f/2.8S as Nikon's first f/2.8 standard zoom. The D-type version retained the same broad optical identity while adding distance-information encoding for Nikon's metering and flash systems. US 6,320,698 B1 belongs to a later internal development path: it uses the established fast standard-zoom architecture as the base for a G3 lateral-shift vibration-reduction concept.

The patent is therefore historically useful even though its stabilizer was not commercialized in the AF Zoom-Nikkor 35-70mm f/2.8D. It shows how Nikon evaluated VR placement in a compact fast standard zoom before optical stabilization became common in interchangeable SLR lenses.

## Sources

1. US 6,320,698 B1, Kenzaburo Suzuki, Nikon Corporation, "Zoom Lens with Vibration Reduction Function," granted November 20, 2001; especially FIG. 7 and Table 3.
2. Nikon, _The Thousand and One Nights No. 39: Ai AF Zoom-Nikkor 35-70mm f/2.8S_, Haruo Sato, Nikon Imaging.
3. Nikon AF Zoom-Nikkor 35-70mm f/2.8D user-manual/specification material for production lens specifications: 35-70 mm, f/2.8, 15 elements / 12 groups, 62°-34°20' picture angle, 0.6 m normal minimum focus, 0.28 m macro, 1:4 macro reproduction ratio.
4. SCHOTT, optical glass datasheets: N-FK5 and N-SK16.
5. OHARA, optical glass datasheets: S-BAL35 and S-TIH6.
6. HIKARI Glass, optical glass datasheets/catalog entries: J-SFH2, J-PKH1, J-SK16, and J-LAK02.
7. Legacy glass-code cross-reference material for the 518602 crown region, treated only as secondary context; L9 remains unmatched without a primary manufacturer confirmation.
