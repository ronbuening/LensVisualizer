## Patent Reference and Design Identification

**Patent:** US 2019/0302431 A1\
**Application Number:** 16/355,942\
**Priority:** JP 2018-064597, 29 March 2018\
**Filed:** 18 March 2019\
**Published:** 3 October 2019\
**Inventor:** Daiki Kawamura\
**Applicant / Assignee:** Fujifilm Corporation\
**Title:** *Zoom Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

The prescription is a transcription and normalized LensVisualizer model of Example 1. The patent's numerical example is given in Tables 1–3, with the wide/tele and infinity/500 mm states in Table 2 and the associated aberration plots in Fig. 13. The final model retains the patent dimensional scale; no focal-length rescaling is applied. [US 2019/0302431 A1, ¶0092-0104; Tables 1-3; Fig. 13]

The identification with the production FUJIFILM FUJINON XF 8-16mm f/2.8 R LM WR is a strong research correlation, not a FUJIFILM statement that Example 1 is the shipped prescription. The convergent evidence is:

1. Example 1 computes to 8.2361 mm and 15.5142 mm at the infinity endpoints, while the production lens is marketed as 8-16 mm; the patent prints 8.238 and 15.516 mm. The design F-number is 2.88, close to the marketed f/2.8.
2. The patent example contains 20 elements in 13 air-separated physical groups, exactly matching the production construction count published by FUJIFILM.
3. Four physical elements carry aspherical surfaces in Example 1, matching FUJIFILM's published count of four aspherical elements.
4. Six elements occupy high-Abbe, low-dispersion coordinate classes in the patent model, consistent in count with FUJIFILM's stated three ED plus three Super ED elements. The data do not establish which patent element corresponds to each marketed ED designation.
5. The patent claims priority on 29 March 2018, before the production lens release date of 29 November 2018 reported by FUJIFILM.

Two differences are deliberately left unreconciled. Example 1 prints 125.8° / 82.4° full fields at the infinity endpoints, whereas FUJIFILM markets 121° / 83.2°. The patent also publishes short-range states with the object 500 mm from the image plane, while the production lens is marketed to focus to 0.25 m. The model therefore uses the patent's four published states and does not invent a production-MFD internal spacing law. [US 2019/0302431 A1, ¶0096; Table 2; FUJIFILM product sources listed below]

## Optical Architecture

Example 1 is a five-power-group wide-angle zoom with the sequence G1(-) / G2(+) / G3(+) / G4(-) / G5(+). The patent assigns five elements to G1, the stop plus five elements to G2, five elements to G3, four elements to G4, and one element to G5. These five power groups contain 13 air-separated physical glass groups: five cemented doublets and one cemented triplet account for seven internal element-to-element cemented junctions. [US 2019/0302431 A1, ¶0093; Table 1; Fig. 2]

The verified d-line group focal lengths from the final model are G1 = -15.325 mm, G2 = +45.387 mm, G3 = +24.673 mm, G4 = -25.439 mm, and G5 = +64.428 mm. These are paraxial powers of the complete functional groups, not sums of standalone element focal lengths.

Zooming from Wide infinity to Tele infinity moves G1 16.782 mm imageward. G2, G3, and G4 move objectward by 9.763 mm, 10.311 mm, and 5.810 mm respectively, while G5 remains fixed to the image plane to numerical precision. This reproduces the direction statements in ¶0093 at the published endpoints; there are no source-published intermediate zoom positions, so no claim is made about reversal or the exact nonlinear trajectory between those endpoints.

The aperture stop lies immediately before L21 at the object-side boundary of G2. The patent presents this stop location as advantageous for combining wide angular coverage with control of lens diameter (¶0061). The physical stop diameter is not published. The LensVisualizer base stop is therefore calibrated from the published/model f-number rather than treated as a measured diaphragm dimension.

G4 is the entire focusing group Gf. In the patent's general discussion, a negative focusing group in the subsequent lens system is used to obtain a comparatively small focus travel, and a four-element positive-negative-positive-negative construction is explicitly described as a preferred configuration (¶0064-0066). Example 1 implements that arrangement as L41 followed by the cemented L42-L43-L44 triplet.

The design should not be labeled globally as either telephoto or retrofocus under the project's geometric definitions. Using the final model's Gaussian reference planes, first-surface-to-focus track/EFL is about 16.13 at Wide and 7.48 at Tele, so neither endpoint satisfies TL/EFL < 1. BFD/EFL is about 1.434 at Wide and 0.761 at Tele; only the Wide endpoint satisfies BFD > EFL.

## Element-by-Element Analysis

### G1a — Front negative subgroup

#### L11 — Negative Meniscus

**nd = 1.85150, νd = 40.78. Glass: S-LAH89 (OHARA) class. Standalone f = -71.646 mm.**

L11 is the first member of the patent's G1a subgroup. Together with L12 and L13 it forms the three-negative-lens front section that the patent associates with obtaining the very wide field while controlling off-axis aberration and front-element diameter (¶0068). Its standalone focal length is descriptive of the element in air; the complete G1 power is set by the coupled five-element group.

#### L12 — Neg. Meniscus (2x Asph)

**nd = 1.69259, νd = 53.07. Glass: Unmatched (nd=1.69259, vd=53.07, theta_gF=0.54955). Standalone f = -36.040 mm.**

L12 is the second G1a negative meniscus and carries aspheres on both faces (3A and 4A). Its patent coordinate is deliberately left Unmatched: the nearest checked catalog candidate does not reproduce the published partial-dispersion coordinate closely enough to support a named glass. The element retains patent nd/νd and θgF-derived dPgF without a named catalog substitution.

#### L13 — Neg. Meniscus (2x Asph)

**nd = 1.85108, νd = 40.12. Glass: Q-LASFH58S (HIKARI) class. Standalone f = -40.006 mm.**

L13 completes G1a and also has two aspherical faces (5A and 6A). The HIKARI Q-LASFH58S class reproduces the recorded coordinate closely, but the label remains a class identification rather than supplier proof. The verified isolated G1a focal length is -12.186 mm.

### G1b — Rear subgroup of G1

#### L14 — Biconcave Negative

**nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA) class. Standalone f = -38.101 mm.**

L14 begins G1b and is the negative member of the cemented L14+L15 pair. Its very high Abbe number is consistent with the patent's preference for a high-Abbe negative lens in G1b; the patent explicitly links this subgroup to reducing changes in longitudinal chromatic aberration during zooming (¶0069-0070, ¶0076).

#### L15 — Positive Meniscus

**nd = 1.95375, νd = 32.32. Glass: S-LAH98 (OHARA) class. Standalone f = +29.514 mm.**

L15 is the positive member cemented to L14. The isolated cemented pair has a net focal length of +129.740 mm, which is much weaker than either member alone; that number describes the cemented stack in air, not an in-situ decomposition of G1. The complete G1 focal length is -15.325 mm.

### G2 — Positive group behind the stop

#### L21 — Biconvex Positive (2x Asph)

**nd = 1.69350, νd = 53.18. Glass: L-LAL13 (OHARA) class. Standalone f = +22.437 mm.**

L21 is the first glass element after the aperture stop and the only aspherical element in G2, with aspheres on 11A and 12A. It is a strong positive element in isolation. The patent places the stop at the object-side boundary of G2 and notes that this arrangement assists wide-angle coverage while limiting lens diameter (¶0061).

#### L22 — Biconcave Negative

**nd = 1.75500, νd = 52.32. Glass: S-LAH97 (OHARA) class. Standalone f = -19.315 mm.**

L22 is a negative element cemented directly to L23. Its role can be described securely as part of a negative-positive cemented pair inside the positive G2 group; the patent does not assign a unique aberration term to L22 by itself.

#### L23 — Positive Meniscus

**nd = 1.59522, νd = 67.73. Glass: S-FPM2 (OHARA) class. Standalone f = +38.233 mm.**

L23 is the positive partner of L22 and uses an S-FPM2-class low-dispersion coordinate. The L22+L23 cemented stack has a verified isolated focal length of -38.684 mm. This cemented-stack power is distinct from the power of G2 as installed in the zoom.

#### L24 — Biconcave Negative

**nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA) class. Standalone f = -32.916 mm.**

L24 is the negative half of the second cemented pair in G2. Its S-LAH59-class coordinate recurs at L31 in G3, providing a repeated high-index/medium-dispersion material point across the two positive zoom groups.

#### L25 — Biconvex Positive

**nd = 1.64769, νd = 33.79. Glass: S-TIM22 (OHARA) class. Standalone f = +32.307 mm.**

L25 is the positive partner of L24. The isolated L24+L25 stack is nearly afocal in first order, with f = +904.475 mm; the complete G2 remains positive at f = +45.387 mm because the group power is an in-situ result of all five elements and their spacings.

### G3 — Positive intermediate group

#### L31 — Biconcave Negative

**nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA) class. Standalone f = -22.073 mm.**

L31 starts G3 as a negative element cemented to L32. It uses the same S-LAH59-class coordinate as L24. As elsewhere in this analysis, the catalog class identifies a coordinate match rather than the production supplier or melt.

#### L32 — Biconvex Positive

**nd = 1.59282, νd = 68.62. Glass: FCD505 (HOYA) class. Standalone f = +22.542 mm.**

L32 is the positive partner of L31 and matches the HOYA FCD505 class. The isolated L31+L32 cemented pair is weakly positive, f = +816.097 mm. The patent coordinate matches HOYA's updated νd = 68.62 value recorded in the catalog evidence.

#### L33 — Negative Meniscus

**nd = 1.85150, νd = 40.78. Glass: S-LAH89 (OHARA) class. Standalone f = -38.619 mm.**

L33 is a negative meniscus cemented to L34. Its S-LAH89-class coordinate is also used by L11, but the two elements occupy very different ray-height environments within the zoom and should not be assigned the same optical function merely because their glass coordinates match.

#### L34 — Biconvex Positive

**nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA) class. Standalone f = +32.133 mm.**

L34 is the positive S-FPL55-class partner of L33. The L33+L34 cemented pair has an isolated focal length of +179.349 mm. This pair is followed by L35 rather than being the terminal positive power of G3.

#### L35 — Biconvex Positive

**nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA) class. Standalone f = +30.428 mm.**

L35 is an air-spaced biconvex positive element with the same S-FPL55-class coordinate as L14 and L34. Its standalone focal length is comparatively strong within G3, while the complete G3 focal length is +24.673 mm. No claim is made that the standalone value alone measures its in-situ share of group power.

### G4 / Gf — Negative focusing group

#### L41 — Positive Meniscus (2x Asph)

**nd = 1.85343, νd = 40.56. Glass: 853406 class (spectrally unmatched to D-ZLaF85LS-25). Standalone f = +36.723 mm.**

L41 is the object-side positive meniscus of the four-element focusing group G4/Gf and carries aspheres on both faces (27A and 28A). Its glass remains only an 853406 class: the closest named CDGM candidate matches nd/νd closely but conflicts materially in partial dispersion, so the exact named assignment is rejected.

#### L42 — Plano-Concave Negative

**nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA) class. Standalone f = -13.827 mm.**

L42 begins the cemented three-element rear portion of the focus group. It is a plano-concave negative element in the final data model and is cemented to the high-Abbe positive L43.

#### L43 — Biconvex Positive

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) class. Standalone f = +23.212 mm.**

L43 is the positive middle member of the G4 cemented triplet and has νd = 81.54. This directly realizes the high-Abbe focus-group condition used by the patent: ¶0075 states that a sufficiently high-Abbe element in Gf helps restrain chromatic variation during focusing. The S-FPL51 label is a catalog-class coordinate match, not a supplier claim.

#### L44 — Biconcave Negative

**nd = 1.88300, νd = 39.22. Glass: H-ZLaF68N (CDGM) class. Standalone f = -27.113 mm.**

L44 closes the cemented triplet as a negative element. The L42+L43+L44 stack has a verified isolated focal length of -14.251 mm; with L41 and the internal spacing, the full G4/Gf focal length is -25.439 mm. The patent describes this four-element positive-negative-positive-negative ordering as a preferred focus-group form (¶0066).

### G5 — Fixed positive rear group

#### L51 — Biconvex Positive

**nd = 1.94595, νd = 17.98. Glass: FDS18 / FDS18-W (HOYA) class. Standalone f = +64.428 mm.**

L51 is the sole element of G5 and the final powered element in the active model. Its verified standalone and group focal length are both +64.428 mm. G5 is fixed to the image plane during zooming in Example 1 (¶0093), consistent with the patent's general preference for a fixed positive rear group (¶0084-0086).

## Glass Identification and Selection

The patent supplies nd, νd, and θgF coordinates rather than commercial glass names. The names below are authoritative-catalog coordinate or class matches developed from OHARA, HOYA, HIKARI, CDGM, SUMITA, and SCHOTT sources; they are not evidence of the production supplier or melt. The final data file therefore uses `class` wording, preserves two spectrally unmatched elements, and omits unsupported spectral substitutions.

| Elements | Patent nd / νd / θgF | Data-file glass disposition | Spectral support retained |
|---|---|---|---|
| L11 | 1.85150 / 40.78 / 0.56958 | S-LAH89 spectral proxy | Patent-derived dPgF=-0.00562804 |
| L12 | 1.69259 / 53.07 / 0.54955 | Unmatched spectral proxy | Patent-derived dPgF=-0.00498626 |
| L13 | 1.85108 / 40.12 / 0.56852 | Q-LASFH58S spectral proxy | Patent-derived dPgF=-0.00779816 |
| L14 | 1.43875 / 94.66 / 0.53402 | S-FPL55 spectral proxy | Patent-derived dPgF=+0.04943812 |
| L15 | 1.95375 / 32.32 / 0.59015 | S-LAH98 spectral proxy | Patent-derived dPgF=+0.00071224 |
| L21 | 1.69350 / 53.18 / 0.54831 | L-LAL13 spectral proxy | Patent-derived dPgF=-0.00604124 |
| L22 | 1.75500 / 52.32 / 0.54737 | S-LAH97 spectral proxy | Patent-derived dPgF=-0.00842776 |
| L23 | 1.59522 / 67.73 / 0.54426 | S-FPM2 spectral proxy | Patent-derived dPgF=+0.01438186 |
| L24 | 1.81600 / 46.62 / 0.55682 | S-LAH59 spectral proxy | Patent-derived dPgF=-0.00856516 |
| L25 | 1.64769 / 33.79 / 0.59393 | S-TIM22 spectral proxy | Patent-derived dPgF=+0.00696478 |
| L31 | 1.81600 / 46.62 / 0.55682 | S-LAH59 spectral proxy | Patent-derived dPgF=-0.00856516 |
| L32 | 1.59282 / 68.62 / 0.54414 | FCD505 spectral proxy | Patent-derived dPgF=+0.01575884 |
| L33 | 1.85150 / 40.78 / 0.56958 | S-LAH89 spectral proxy | Patent-derived dPgF=-0.00562804 |
| L34 | 1.43875 / 94.66 / 0.53402 | S-FPL55 spectral proxy | Patent-derived dPgF=+0.04943812 |
| L35 | 1.43875 / 94.66 / 0.53402 | S-FPL55 spectral proxy | Patent-derived dPgF=+0.04943812 |
| L41 | 1.85343 / 40.56 / 0.56684 | Unmatched spectral proxy | Patent-derived dPgF=-0.00873808 |
| L42 | 1.88300 / 40.76 / 0.56679 | S-LAH58 spectral proxy | Patent-derived dPgF=-0.00845168 |
| L43 | 1.49700 / 81.54 / 0.53748 | S-FPL51 spectral proxy | Patent-derived dPgF=+0.03083028 |
| L44 | 1.88300 / 39.22 / 0.57295 | H-ZLaF68N spectral proxy | Patent-derived dPgF=-0.00488196 |
| L51 | 1.94595 / 17.98 / 0.65460 | FDS18 spectral proxy | Patent-derived dPgF=+0.04104236 |

Table 1 publishes θgF for every element. The model preserves each ratio using `dPgF = θgF − (0.6438 − 0.001682 × νd)`. Catalog-derived C/F/g line indices have been removed from authored element data; compatible curves resolve at runtime with the patent partial-dispersion correction retained at g. L12 and L41 remain unresolved because of spectral ambiguity. L14, L23, L32, L34, L35, and L43 carry inferred APD tags from their published ratios and compatible fluorophosphate catalog curves. The tags describe an inferred material property, not an explicit patent designation. None of these proxies establishes a production supplier or a whole-lens APO classification.

## Focus Mechanism

The focus model is PUBLISHED rather than reconstructed. The patent states that the entire fourth group G4 is Gf and moves toward the image side when focusing from infinity toward short range; Example 1 supplies explicit W/T rows for infinity and for an object 500 mm from the image plane. [US 2019/0302431 A1, ¶0062-0066, ¶0093, ¶0096; Table 2]

At the Wide endpoint, the published spacing change moves G4 0.122 mm imageward. At Tele, it moves 0.299 mm imageward. In both cases DD[26] increases by exactly the amount that DD[32] decreases in the rounded table, keeping their sum constant: 5.547 mm at Wide and 15.858 mm at Tele. G5 remains fixed relative to the image plane.

| State | DD[26] (mm) | DD[32] (mm) | G4 shift from infinity |
|---|---:|---:|---:|
| Wide, infinity | 2.100 | 3.447 | reference |
| Wide, 500 mm from image plane | 2.222 | 3.325 | +0.122 mm imageward |
| Tele, infinity | 6.601 | 9.257 | reference |
| Tele, 500 mm from image plane | 6.900 | 8.958 | +0.299 mm imageward |

The production lens is marketed by FUJIFILM with a linear-motor autofocus system and a 0.25 m minimum focus distance. Those are production specifications, not additional internal states of the patent example. The model therefore does not extrapolate the G4 travel to 0.25 m.

## Aspherical Surfaces

Example 1 has eight aspherical surfaces on four physical elements: 3A and 4A on L12, 5A and 6A on L13, 11A and 12A on L21, and 27A and 28A on L41. Table 3 gives coefficients A3 through A20. All A3 values are zero and are omitted from the authored object; the nonzero A4-A20 values are retained exactly at scale factor 1. [US 2019/0302431 A1, ¶0097-0102; Table 3]

The patent writes the conic term as `sqrt(1 - KA*C^2*h^2)`. LensVisualizer uses `sqrt(1 - (1+K)*(h/R)^2)`, so the conversion is `K = KA - 1`. Every Example 1 asphere has KA = 1, hence every authored asphere has K = 0. The odd powers remain rotationally symmetric because h is radial height, not a signed Cartesian coordinate.

The coefficient sets are:

### Surface 3A

```text
K   = 0
A4  = 1.81609960e-04
A5  = -1.13359520e-05
A6  = -1.43354250e-06
A7  = 1.66577040e-07
A8  = 3.71765280e-09
A9  = -1.17898820e-09
A10 = 1.68460450e-11
A11 = 4.96836640e-12
A12 = -1.65097870e-13
A13 = -1.28893910e-14
A14 = 5.73799980e-16
A15 = 2.00213090e-17
A16 = -1.04712550e-18
A17 = -1.69508920e-20
A18 = 1.00010190e-21
A19 = 5.97018580e-24
A20 = -3.96367100e-25
```

At the modeled semi-diameter h = 21.8 mm, the verified polynomial departure from the K=0 base sphere is +4.372192 mm and the actual rim-slope angle is 43.375°. These are model-rim quantities because the patent does not publish numerical clear apertures; they are not manufacturing specifications.

### Surface 4A

```text
K   = 0
A4  = 1.84686100e-04
A5  = -1.21450910e-05
A6  = -1.21662550e-06
A7  = 7.37398480e-09
A8  = 1.16348180e-08
A9  = 1.75272940e-09
A10 = -2.34392420e-10
A11 = -2.08901350e-11
A12 = 2.68542260e-12
A13 = 1.19508080e-13
A14 = -1.62616270e-14
A15 = -3.88913100e-16
A16 = 5.38766800e-17
A17 = 6.98410330e-19
A18 = -9.28600780e-20
A19 = -5.43011620e-22
A20 = 6.53181110e-23
```

At the modeled semi-diameter h = 16.1 mm, the verified polynomial departure from the K=0 base sphere is -0.599271 mm and the actual rim-slope angle is 46.817°. These are model-rim quantities because the patent does not publish numerical clear apertures; they are not manufacturing specifications.

### Surface 5A

```text
K   = 0
A4  = -3.51215970e-05
A5  = -1.78478030e-05
A6  = 2.35078980e-06
A7  = 2.67910470e-07
A8  = -4.72518610e-08
A9  = -2.35783620e-09
A10 = 5.09851330e-10
A11 = 1.37691110e-11
A12 = -3.41190270e-12
A13 = -5.09510860e-14
A14 = 1.43449450e-14
A15 = 1.09919010e-16
A16 = -3.65649160e-17
A17 = -1.22427340e-19
A18 = 5.15347810e-20
A19 = 5.20846460e-23
A20 = -3.08229360e-23
```

At the modeled semi-diameter h = 16.1 mm, the verified polynomial departure from the K=0 base sphere is -1.890824 mm and the actual rim-slope angle is 8.031°. These are model-rim quantities because the patent does not publish numerical clear apertures; they are not manufacturing specifications.

### Surface 6A

```text
K   = 0
A4  = -5.11946460e-05
A5  = -1.80581700e-05
A6  = 3.54372690e-06
A7  = 1.04071260e-07
A8  = -6.50029150e-08
A9  = 1.59808180e-09
A10 = 9.64691290e-10
A11 = -1.13942060e-10
A12 = -3.50858600e-12
A13 = 1.54374740e-12
A14 = -4.82632510e-14
A15 = -8.54423210e-15
A16 = 4.82126040e-16
A17 = 2.06381140e-17
A18 = -1.54643380e-18
A19 = -1.74868130e-20
A20 = 1.69961150e-21
```

At the modeled semi-diameter h = 13.7 mm, the verified polynomial departure from the K=0 base sphere is -1.445775 mm and the actual rim-slope angle is 44.151°. These are model-rim quantities because the patent does not publish numerical clear apertures; they are not manufacturing specifications.

### Surface 11A

```text
K   = 0
A4  = 3.41301730e-05
A5  = -2.62179140e-05
A6  = 9.86763440e-06
A7  = -4.88982640e-07
A8  = -7.29675950e-07
A9  = 1.93814220e-07
A10 = 1.56486150e-09
A11 = -6.66567120e-09
A12 = 4.64996470e-10
A13 = 1.20736780e-10
A14 = -1.27385910e-11
A15 = -1.44214790e-12
A16 = 1.79784460e-13
A17 = 1.04357690e-14
A18 = -1.38859180e-15
A19 = -3.29759090e-17
A20 = 4.48546740e-18
```

At the modeled semi-diameter h = 7.5 mm, the verified polynomial departure from the K=0 base sphere is +0.072228 mm and the actual rim-slope angle is 19.741°. These are model-rim quantities because the patent does not publish numerical clear apertures; they are not manufacturing specifications.

### Surface 12A

```text
K   = 0
A4  = 6.24206250e-05
A5  = -2.10627330e-05
A6  = 8.49052690e-06
A7  = -1.10362130e-06
A8  = -2.54856920e-07
A9  = 1.18525470e-07
A10 = -1.35340980e-08
A11 = -1.68639620e-09
A12 = 6.53099980e-10
A13 = -4.11658960e-11
A14 = -9.21911360e-12
A15 = 1.47858230e-12
A16 = 2.04608840e-14
A17 = -1.64197470e-14
A18 = 6.13683140e-16
A19 = 6.49615820e-17
A20 = -4.13357860e-18
```

At the modeled semi-diameter h = 7.4 mm, the verified polynomial departure from the K=0 base sphere is +0.171696 mm and the actual rim-slope angle is 5.599°. These are model-rim quantities because the patent does not publish numerical clear apertures; they are not manufacturing specifications.

### Surface 27A

```text
K   = 0
A4  = -6.08077700e-05
A5  = 3.62275500e-05
A6  = -2.53103780e-05
A7  = 9.42960470e-06
A8  = -1.68204930e-06
A9  = -6.12194870e-10
A10 = 5.35856180e-08
A11 = -7.22683380e-09
A12 = -2.34107490e-10
A13 = 1.27683300e-10
A14 = -6.93885190e-12
A15 = -6.76682400e-13
A16 = 8.48979760e-14
A17 = -9.80853920e-16
A18 = -2.50711050e-16
A19 = 1.30301110e-17
A20 = -1.93524720e-19
```

At the modeled semi-diameter h = 11.2 mm, the verified polynomial departure from the K=0 base sphere is -0.691559 mm and the actual rim-slope angle is 42.641°. These are model-rim quantities because the patent does not publish numerical clear apertures; they are not manufacturing specifications.

### Surface 28A

```text
K   = 0
A4  = 2.97164370e-05
A5  = 7.62424900e-07
A6  = -1.70920450e-06
A7  = 4.58607720e-07
A8  = 1.45577270e-08
A9  = -2.53043940e-08
A10 = 1.62896490e-09
A11 = 6.63381240e-10
A12 = -6.75152690e-11
A13 = -9.93347830e-12
A14 = 1.23735180e-12
A15 = 8.65004870e-14
A16 = -1.22938660e-14
A17 = -4.06661890e-16
A18 = 6.43308120e-17
A19 = 7.95728170e-19
A20 = -1.39104450e-19
```

At the modeled semi-diameter h = 11.2 mm, the verified polynomial departure from the K=0 base sphere is +0.016570 mm and the actual rim-slope angle is 57.413°. These are model-rim quantities because the patent does not publish numerical clear apertures; they are not manufacturing specifications.

The patent does not identify the production method for these four aspherical elements. No claim is therefore made that they are molded, polished, hybrid, or fabricated by any particular process.

## Chromatic Correction Strategy

The patent's chromatic logic is most explicit in G1 and the focusing group. G1a is a three-negative-lens front section. Conditions 1, 4, and 7 constrain its refractive-index range; ¶0071 and ¶0074 connect those bounds to the trade between wide-angle geometry, lens diameter, off-axis aberration, and lateral chromatic correction. G1b then introduces a negative-positive pair. The patent specifically describes this subgroup as having an achromatic effect that reduces change in longitudinal chromatic aberration during zooming (¶0069-0070).

The focus group follows a different constraint. Condition 5 requires at least one high-Abbe lens in Gf, and Example 1 uses L43 at νd = 81.54. The patent associates that requirement with restraining chromatic variation during focusing (¶0075). L43 is cemented between the negative L42 and L44 elements, giving the rear triplet an isolated net negative power while allowing a low-dispersion positive member inside the translating group.

Across the complete example, six elements occupy conspicuously high-Abbe coordinates: L14, L23, L32, L34, L35, and L43. That count agrees with FUJIFILM's marketed three-ED plus three-Super-ED construction, strengthening the production correlation. It does not establish a one-to-one ED/Super-ED mapping, and the analysis does not infer apochromatic performance from the count alone.

## Conditional Expressions

Table 35 prints twelve Example 1 condition values. Independent calculation from the final model reproduces every condition from the prescription and source-defined quantities. The values below are the recomputed results; the printed values are shown only for source comparison. All twelve satisfy the patent inequalities. Condition 9 uses a slightly wider source-comparison tolerance because both the printed field angle and F-number are rounded. [US 2019/0302431 A1, ¶0071-0082; Table 35]

| Cond. | Expression | Recomputed | Printed | Patent bound |
|---:|---|---:|---:|---|
| 1 | `Ndlave` | 1.798390 | 1.798000 | `1.73 < x < 1.95` |
| 2 | `|ff/f1|` | 1.659908 | 1.660000 | `1 < x < 3` |
| 3 | `|(1-beta_fw^2)*beta_rw^2|` | 1.439077 | 1.441000 | `0.6 < x < 2.3` |
| 4 | `Nd1a_min` | 1.692590 | 1.693000 | `1.52 < x < 1.89` |
| 5 | `vd_f` | 81.540000 | 81.540000 | `60 < x` |
| 6 | `vd_1bn` | 94.660000 | 94.660000 | `60 < x` |
| 7 | `Nd1` | 1.851500 | 1.852000 | `1.7 < x < 2.1` |
| 8 | `BFw/(fw*tan(omega_w))` | 0.734726 | 0.736000 | `0.5 < x < 1.5` |
| 9 | `tan(omega_w)/FNow` | 0.678532 | 0.676000 | `0.45 < x < 1` |
| 10 | `(R1+R2)/(R1-R2)` | 3.750086 | 3.750000 | `3.3 < x < 5.5` |
| 11 | `|f1/f2|` | 0.337661 | 0.338000 | `0.2 < x < 0.65` |
| 12 | `|f1a/f1b|` | 0.093924 | 0.094000 | `0.02 < x < 0.15` |

The conditions are not independent performance scores. They constrain coupled design choices: front-group refractive index and dispersion (1, 4, 6, 7), relative group powers and focusing sensitivity (2, 3, 11, 12), focus-group dispersion (5), back-focus/field geometry (8), wide-angle speed (9), and the shape factor of the first element (10). The patent itself supplies the associated design rationales in ¶0071-0082.

## Verification Summary

The final data model computes d-line EFLs of 8.236088 mm and 15.514241 mm at Wide and Tele infinity, compared with the patent's rounded 8.238 mm and 15.516 mm. At the two published 500 mm states the corresponding values are 8.193296 mm and 15.326058 mm, compared with 8.195 mm and 15.327 mm. All four differences are within the 0.003 mm source-precision tolerance established from the patent's rounding statement in ¶0102.

The source PP plate is traced through `rearPlates` and omitted only from the drawing and element count. Table 1 gives 8.949 mm of air, 2.850 mm of glass (nd=1.51680, vd=64.20), then 1.000 mm of air. Its paraxial equivalent remains 11.8279556962 mm; its physical thickness is retained for exact tracing.

The wide-infinity physical stop semi-diameter in the data file is 6.109156 mm, calibrated from the modeled/published f/2.88 target and entrance-pupil magnification. The corresponding Tele-infinity effective opening is 6.842455 mm. Because the patent does not publish diaphragm diameter, these are calibration-dependent model quantities; matching f/2.88 is not independent physical-stop verification.

The modeled surface semi-diameters likewise are not source dimensions. With those values, the modeled geometry gives a minimum element edge thickness of 0.185408 mm, a maximum actual rim-slope angle of 61.307°, and a maximum shared-gap sag-intrusion fraction of 0.896456. Exact meridional tracing clears all authored apertures for the verified 0.6-field samples at the four published states and at representative interpolated states. The extreme published full field is retained as a diagnostic and is allowed to vignette; the model does not claim full-pupil clearance over the entire 125.8° wide field.

The surface-by-surface Petzval sum, computed as Σφ/(n·n′) over active surfaces 1-34, is +0.005200927 mm⁻¹, corresponding to a reciprocal magnitude of 192.273 mm. This is a paraxial field-curvature quantity, not a measured image-surface radius of the production lens.

The rounded patent tables leave approximately 0.014-0.015 mm of paraxial image-plane residual in the four modeled states. The data preserve the published spacings rather than silently altering a gap to force exact Gaussian focus.

## Sources and References

1. Daiki Kawamura, *Zoom Lens and Imaging Apparatus*, US 2019/0302431 A1, published 3 October 2019. Example 1: Fig. 2; Tables 1-3; ¶0092-0104. Conditional-expression rationale: ¶0071-0082. Optional PP plate: ¶0058. The original publication PDF is included in the dossier as `US20190302431A1.pdf`.
2. FUJIFILM Corporation, official product listing, “フジノンレンズ XF8-16mmF2.8 R LM WR”: https://mall-jp.fujifilm.com/shop/g/g16591570/ — production focal range, aperture, construction, special-element counts, angle of view, close-focus specification, and release timing.
3. FUJIFILM, “Fujifilm Wide-Angle Lens Guide”: https://www.fujifilm-x.com/en-gb/learning-centre/fujifilm-wide-angle-lens-guide/ — 0.25 m close focus, three ED plus three Super ED elements, and linear-motor autofocus.
4. FUJIFILM, X System: https://www.fujifilm.com/us/en/consumer/digitalcameras/x — X-mount system classification.
5. OHARA official glass data: S-LAH89 https://oharacorp.com/glass/s-lah89/ ; S-FPL55 https://oharacorp.com/wp-content/uploads/2025/04/esfpl55.pdf ; S-LAH98 https://oharacorp.com/glass/s-lah98/ ; L-LAL13 https://oharacorp.com/wp-content/uploads/2025/04/ellal13.pdf ; S-LAH97 https://oharacorp.com/glass/s-lah97/ ; S-FPM2 https://oharacorp.com/glass/s-fpm2/ ; S-LAH59 https://oharacorp.com/glass/s-lah59/ ; S-TIM22 https://oharacorp.com/glass/s-tim22/ ; S-LAH58 https://oharacorp.com/glass/s-lah58/ ; S-FPL51 https://oharacorp.com/glass/s-fpl51/ .
6. HIKARI official optical-glass data, Q-LASFH58S family: https://www.hikari-g.co.jp/optical_glass/moldlenses/q-lasf/ .
7. HOYA official optical-glass data and update pages: FCD505 https://www.hoya-opticalworld.com/japanese/datadownload/data_up2019.html ; FDS18/FDS18-W context https://www.hoya-opticalworld.com/japanese/news/index.html .
8. CDGM official datasheets: H-ZLaF68N https://www.cdgmgd.com/webapp/pdf/H-ZLaF68N.pdf ; D-ZLaF85LS-25 comparison for L41 https://www.cdgmgd.com/webapp/pdf/D-ZLaF85LS-25.pdf ; D-LaK6-25 comparison for unmatched L12 https://www.cdgmgd.com/webapp/pdf/D-LaK6-25.pdf .
