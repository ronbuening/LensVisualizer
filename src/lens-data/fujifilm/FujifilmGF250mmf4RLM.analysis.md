## Patent Reference and Design Identification

**Patent:** US 2019/0094496 A1\
**Application Number:** 16/133,479\
**Priority:** September 25, 2017\
**Filed:** September 17, 2018\
**Published:** March 28, 2019\
**Inventors:** Shunsuke Miyagishima; Tetsuya Ori\
**Applicant / Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

Example 1 is treated as the patent correlation for the FUJIFILM FUJINON GF 250mm f/4 R LM OIS WR. This is a production correlation rather than a claim that Fujifilm publicly identified the commercial lens with this patent. Several independent characteristics converge:

1. Example 1 contains 16 elements in 10 air-spaced groups. Fujifilm specifies the production lens as 16 elements in 10 groups.
2. The patent prescription contains two `nd = 1.49700`, `νd = 81.54` elements and one `nd = 1.43875`, `νd = 94.66` element. The validated data identifies these as two S-FPL51-class ED elements and one S-FPL55 Super ED element, matching Fujifilm's published count of two ED and one Super ED element.
3. The patent gives `f = 242.544 mm`, `FNo. = 4.12`, and a full field of `13.4°` for Example 1. The commercial designation is 250 mm f/4, while Fujifilm specifies a 12.5° angle of view. The data file therefore keeps the marketed 250 mm and f/4 values separate from the unscaled patent design values.
4. The patent assigns axial focusing to the positive second group G2 and transverse image stabilization to the negative third group G3 (¶¶0041, 0048, 0062). The production lens uses a linear-motor focusing system and optical image stabilization.
5. The production system is Fujifilm G mount for the 44 × 33 mm GFX format, consistent with the image field covered by the Example 1 model.

No dimensional scale factor is applied. The radii, thicknesses, and image-plane coordinate remain at the patent's native scale. Example 1 is entirely spherical; the aspheric surfaces and odd-order coefficients published for Example 6 are not imported into this embodiment.

## Optical Architecture

Example 1 is an all-spherical, four-group telephoto system arranged as positive G1, positive G2, aperture stop, negative G3, and positive G4. It contains six cemented doublets and four singlets. In air-spaced terms, G1 contains four components, G2 one, G3 two, and G4 three, giving the validated total of 10 groups.

The independently recomputed group focal lengths are:

| Group | Construction | Computed EFL | Principal function |
|---|---|---:|---|
| G1 | L11 singlet; D1, D2, and D3 cemented pairs | +247.718985 mm | Front collection and primary chromatic/spherical correction |
| G2 | D4 cemented pair | +117.757894 mm | Axial inner-focus group |
| G3 | L31 singlet and D5 cemented pair | −34.849860 mm | Transverse OIS group immediately behind the stop |
| G4 | D6 cemented pair, L43, and L44 | +68.730717 mm | Rear relay and residual correction |

The active air-equivalent total length is 223.893850 mm against an EFL of 242.544222 mm, so `TL/EFL = 0.9231`. It therefore qualifies as a telephoto layout under the strict criterion `TL/EFL < 1`. It is not retrofocus: the air-converted BFD is 70.953850 mm, substantially shorter than the EFL.

G1 is the dominant front assembly. The patent specifically uses a positive singlet followed by three cemented pairs and states that this arrangement supports spherical and longitudinal chromatic correction while limiting size (¶¶0042–0045). G2 is a compact cemented negative-positive meniscus pair and is the only axial focusing component. The stop lies directly behind G2. G3 is a compact negative stabilizing assembly; placing it immediately behind the stop keeps ray heights and moving mass limited (¶0049). G4 provides the final positive relay power and includes a cemented pair, as required by the patent's rear-group strategy (¶¶0053–0055).

The patent includes an optional plane-parallel member `PP` behind L44 (¶0040). The model omits this cover/filter plate and replaces the published rear sequence with an air-equivalent final spacing of 70.952704641 mm. This preserves the plate's paraxial optical-path effect without representing sensor cover glass as a lens element.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-lens values in air, taken from the validated data file. They are not the focal lengths of the cemented components and do not describe each element's power in situ. Cemented-net and group powers are stated separately where relevant.

### L11 — Biconvex Positive Singlet

`nd = 1.48749`, `νd = 70.24`. Glass: S-FSL5 (OHARA catalog assignment). Standalone `f = +449.917345 mm`.

L11 is the weak positive collector at the front of G1. Its relatively low standalone power lets the system accept the required entrance pupil without concentrating all front-group refraction at one strongly curved component. The patent requires a positive singlet at the object side before the cemented sequence (¶0042). The assignment of S-FSL5 is catalog-derived; the patent itself supplies only `nd`, `νd`, and `θgF`.

### D1 — L12/L13 First G1 Cemented Pair

- **L12:** `nd = 1.49700`, `νd = 81.54`. Glass: S-FPL51 (OHARA). Standalone `f = +140.094425 mm`.
- **L13:** `nd = 1.65160`, `νd = 58.62`. Glass: J-LAK7R (HIKARI). Standalone `f = −178.924782 mm`.

The cemented pair has a computed standalone net focal length of `+564.016297 mm`. L12 is the first of the two S-FPL51 ED positive elements in G1; L13 supplies the negative partner. The patent describes the first-group cemented components as positive-negative pairs used to correct spherical and longitudinal chromatic aberration (¶0042).

The D1 cemented interface is convex toward the image side. The adjacent D2 interface has the opposite orientation. The patent identifies this opposed interface-curvature arrangement as a means of controlling distortion and astigmatism (¶0043). This is a design statement from the patent, not an element-by-element aberration decomposition from the model.

### D2 — L14/L15 Second G1 Cemented Pair

- **L14:** `nd = 1.51742`, `νd = 52.43`. Glass: S-NSL36 (OHARA). Standalone `f = −215.195493 mm`.
- **L15:** `nd = 1.49700`, `νd = 81.54`. Glass: S-FPL51 (OHARA). Standalone `f = +103.394568 mm`.

D2 has a computed standalone net focal length of `+211.413414 mm`. The sequence reverses the sign order used in D1: the negative L14 precedes the positive ED element L15. The strongly curved cemented interface is convex toward the object side, providing the opposed interface orientation described in ¶0043.

L15 is the second S-FPL51 element. The two ED-positive members are therefore distributed across separate G1 cemented pairs rather than concentrated in one component. That distribution is consistent with the patent's use of several positive-negative pairs to manage chromatic correction across the long front assembly.

### D3 — L16/L17 Third G1 Cemented Pair

- **L16:** `nd = 1.90366`, `νd = 31.31`. Glass: N-LASF46B (SCHOTT catalog selection). Standalone `f = +114.753119 mm`.
- **L17:** `nd = 1.80610`, `νd = 40.93`. Glass: S-LAH53 (OHARA). Standalone `f = −59.847061 mm`.

D3 is a negative cemented component with a computed standalone net focal length of `−139.261222 mm`. It closes G1 with a high-index positive member followed by a stronger negative member. Its negative net power moderates the accumulated positive power of the preceding G1 components while retaining the cemented architecture required by the patent.

The N-LASF46B name is a catalog selection, not a patent-specified vendor identity. Its catalog `nd` matches the stored value and its `νd` differs by only 0.01 from the patent value. L17's stronger standalone negative power should not be mistaken for the in-situ power of D3 or G1; G1 remains positive as a whole at `+247.718985 mm` EFL.

### D4 — L21/L22 Positive Inner-Focus Group

- **L21:** `nd = 1.56732`, `νd = 42.82`. Glass: S-TIL26 (OHARA). Standalone `f = −194.349902 mm`.
- **L22:** `nd = 1.43875`, `νd = 94.66`. Glass: S-FPL55 (OHARA). Standalone `f = +71.707975 mm`.

D4 is the complete G2 focusing group and has a computed net focal length of `+117.757894 mm`. Its form follows the patent's preferred arrangement: a negative meniscus followed by a positive meniscus, both concave toward the image side (¶¶0046–0048). The group moves toward the object for closer focus.

L22 is the prescription's Super ED element. The patent explicitly constrains the difference between the partial-dispersion ratios of the positive and negative G2 members to limit focus-dependent chromatic change (¶0058). The validated values give `|θgF22 − θgF21| = |0.53402 − 0.57309| = 0.03907`, inside both the general and preferred patent ranges.

### L31 — Negative Meniscus OIS Singlet

`nd = 1.85150`, `νd = 40.78`. Glass: S-LAH89 (OHARA). Standalone `f = −69.995029 mm`.

L31 is the front singlet of G3 and the first refracting component after the aperture stop. It is a negative meniscus concave toward the image side, matching the form emphasized by the patent for the stabilizing group (¶0051). The entire G3 assembly moves transversely for image stabilization; L31 does not move independently.

Its position immediately behind the stop keeps the chief and marginal ray heights smaller than they would be in a more remote stabilizing group. The patent connects that placement to reduced diameter and mass for the moving OIS unit (¶¶0041, 0049).

### D5 — L32/L33 Rear G3 Cemented Pair

- **L32:** `nd = 1.72916`, `νd = 54.09`. Glass: S-LAL19 (OHARA). Standalone `f = −33.176692 mm`.
- **L33:** `nd = 1.84666`, `νd = 23.78`. Glass: S-TIH53 (OHARA). Standalone `f = +59.389318 mm`.

D5 has a computed standalone net focal length of `−73.338138 mm`. Together with L31 it produces the strongly negative G3 power of `−34.849860 mm` EFL. L32 is biconcave, and L33 is a positive meniscus concave toward the image side. The patent states that the multiple concave surfaces in this compact group help suppress aberration variation during transverse stabilization (¶¶0050–0052).

S-TIH53 is a catalog-derived assignment matching the stored `nd`, `νd`, and patent partial-dispersion ratio at source precision. The assignment does not imply that the patent names OHARA as the supplier.

### D6 — L41/L42 Front G4 Cemented Pair

- **L41:** `nd = 1.89286`, `νd = 20.36`. Glass: S-NPH4 (OHARA). Standalone `f = −80.676546 mm`.
- **L42:** `nd = 1.67003`, `νd = 47.20`. Glass: H-ZBAF52 (CDGM catalog selection). Standalone `f = +49.177591 mm`.

D6 is a positive cemented component with a computed standalone net focal length of `+123.535991 mm`. The dense, low-Abbe negative L41 is paired with the lower-index positive L42. The patent requires the rear group to include a cemented pair and associates that construction with suppression of chromatic aberration generated within G4 (¶¶0053–0054).

H-ZBAF52 is selected from an exact-index equivalent family. The stored prescription remains the patent's `nd = 1.67003`, `νd = 47.20`; the catalog name supplies a defensible dispersion model rather than changing the prescription.

### L43 — Biconvex Positive Relay Singlet

`nd = 1.60342`, `νd = 38.03`. Glass: S-TIM5 (OHARA). Standalone `f = +84.247742 mm`.

L43 provides substantial positive power after D6. In the validated model it is the strongest positive singlet in the rear relay after the cemented pair. The patent allows G4 to contain a cemented pair followed by additional positive and negative lenses (¶0054), which is the arrangement used in Example 1.

Its role is best described at group level rather than as a separately verified aberration contribution: D6, L43, and L44 together form the positive `+68.730717 mm` G4 assembly.

### L44 — Rear Negative Meniscus

`nd = 1.72916`, `νd = 54.68`. Glass: S-LAL18 (OHARA). Standalone `f = −160.539886 mm`.

L44 is the final refracting element and a negative meniscus concave toward the object side. The validated data assigns it a residual field-correction role, but the patent does not isolate its individual aberration contribution. Its rear position and weak standalone negative power make that interpretation plausible without requiring a stronger claim.

The optical member `PP` shown after L44 in the patent is not part of L44 and is not represented as a seventeenth element. Its paraxial effect is included only through the normalized final air spacing.

## Glass Identification and Selection

The patent publishes `nd`, `νd`, and `θgF`; it does not identify glass manufacturers. The names below are catalog-derived assignments retained by the validated data file. They were chosen to reproduce the stored index/Abbe pairs without altering the patent prescription. S-FPL51 appears twice, so the 16 elements use 15 distinct glass names.

| Element(s) | Catalog assignment | `nd` | `νd` | Patent `θgF` | Stored `dPgF` |
|---|---|---:|---:|---:|---:|
| L11 | S-FSL5 (OHARA) | 1.48749 | 70.24 | 0.53007 | +0.00441368 |
| L12, L15 | S-FPL51 (OHARA) | 1.49700 | 81.54 | 0.53748 | +0.03083028 |
| L13 | J-LAK7R (HIKARI) | 1.65160 | 58.62 | 0.54102 | −0.00418116 |
| L14 | S-NSL36 (OHARA) | 1.51742 | 52.43 | 0.55649 | +0.00087726 |
| L16 | N-LASF46B (SCHOTT) | 1.90366 | 31.31 | 0.59481 | +0.00367342 |
| L17 | S-LAH53 (OHARA) | 1.80610 | 40.93 | 0.57019 | −0.00476574 |
| L21 | S-TIL26 (OHARA) | 1.56732 | 42.82 | 0.57309 | +0.00131324 |
| L22 | S-FPL55 (OHARA) | 1.43875 | 94.66 | 0.53402 | +0.04943812 |
| L31 | S-LAH89 (OHARA) | 1.85150 | 40.78 | 0.56958 | −0.00562804 |
| L32 | S-LAL19 (OHARA) | 1.72916 | 54.09 | 0.54490 | −0.00792062 |
| L33 | S-TIH53 (OHARA) | 1.84666 | 23.78 | 0.62054 | +0.01673796 |
| L41 | S-NPH4 (OHARA) | 1.89286 | 20.36 | 0.63944 | +0.02988552 |
| L42 | H-ZBAF52 (CDGM) | 1.67003 | 47.20 | 0.56337 | −0.00103960 |
| L43 | S-TIM5 (OHARA) | 1.60342 | 38.03 | 0.58356 | +0.00372646 |
| L44 | S-LAL18 (OHARA) | 1.72916 | 54.68 | 0.54451 | −0.00731824 |

The explicit `nC`, `nF`, and `ng` fields are constrained reconstructions, not direct patent line-index tables. For each element, the C–F interval is fixed by the patent's `nd` and `νd`; the selected catalog glass supplies the partition of the d line within that interval; and the patent's `θgF` fixes the g–F interval. The stored `dPgF` is the patent `θgF` expressed as deviation from the Schott normal line. This preserves the patent's partial-dispersion evidence while avoiding the false implication that the patent publishes a vendor melt or complete Sellmeier solution.

The patent reports `θgF` for every element, but publication of that column is not itself an anomalous-partial-dispersion designation. The UI's APD badge is therefore limited to the two ED elements L12/L15 and the Super ED element L22. L33 and L41 remain useful high-`θgF` chromatic partners, but are not labeled APD. Every row retains its numerical `dPgF` evidence.

## Focus Mechanism

The patent describes G2-only inner focusing. During focus from infinity to a close object, the entire cemented L21/L22 group moves toward the object while G1, G3, G4, the stop, and the image plane remain fixed (¶¶0048, 0062). Fujifilm identifies the production lens as using a linear motor and specifies a focus range of 1.4 m to infinity with maximum magnification of 0.22×.

The patent does not publish finite-distance spacings. The close state in the data file is therefore marked `CONSTRAINED_RECONSTRUCTION`, not `PUBLISHED`. It solves the 1.4 m object condition under the patent mechanism and conserves the two air gaps surrounding G2:

| Spacing | Infinity | Reconstructed 1.4 m | Change |
|---|---:|---:|---:|
| D11, G1 rear to G2 front | 16.620000 mm | 4.334759 mm | −12.285241 mm |
| D14, G2 rear to stop | 8.520000 mm | 20.805241 mm | +12.285241 mm |
| D11 + D14 | 25.140000 mm | 25.140000 mm | 0 |

The reconstructed translation is 12.285240686 mm toward the object. The resulting paraxial magnification is `−0.216396787×`, consistent with Fujifilm's rounded 0.22× specification, and the close-state system EFL is `200.955830 mm`. The object distance is modeled from the fixed image plane. These values are computed model results and are not presented as a patent-published close-focus table.

## Chromatic Correction Strategy

The production specification identifies two ED elements and one Super ED element. In the correlated prescription, L12 and L15 are the two S-FPL51 positive members in the first-group cemented pairs, while L22 is the S-FPL55 positive member of the translating focus pair. This places low-dispersion positive glass in both the stationary front correction group and the moving focus group.

The patent's strongest glass-selection condition applies to G2. It requires the absolute difference between the positive and negative members' g–F partial-dispersion ratios to fall between 0.03 and 0.045, with a preferred interval of 0.032 to 0.042 (¶0058). Example 1 gives 0.03907. The high-`νd` L22 element therefore supplies both strong positive power and a deliberately separated partial-dispersion characteristic relative to L21, reducing the chromatic variation associated with moving the focus group.

The G1 strategy is broader. Three cemented pairs divide positive and negative powers among glasses ranging from `νd = 31.31` to `81.54`. The rear group adds further high/low-dispersion pairings, particularly D6. These data support a deliberate secondary-spectrum correction strategy, but they do not by themselves establish an apochromatic designation. No APO claim is made.

## Aberration-Correction Strategy

The patent describes the G1 cemented sequence as a compact means of correcting spherical and longitudinal chromatic aberration (¶0042). The opposed cemented-interface curvatures of D1 and D2 are specifically associated with distortion and astigmatism control (¶0043). The final G1 component D3 then supplies negative net power within an otherwise positive group, preventing the front assembly from becoming a simple stack of strong positive components.

G2 uses a negative-positive meniscus pair to limit spherical and chromatic changes during focusing (¶¶0046–0048). Because the whole cemented pair moves, there is no independently floating correction component in the validated model.

The stop precedes G3. This reduces ray height through the stabilizing group and permits a compact negative assembly (¶0049). G3 combines a negative meniscus with a biconcave/positive cemented pair; the patent links this multi-concave arrangement to reduced aberration change during transverse motion (¶¶0050–0052).

G4 restores positive relay power after G3 and includes a cemented pair to limit chromatic error generated in the rear group (¶¶0053–0054). The independently computed Petzval sum is `+0.0005572542 mm⁻¹`, corresponding to a signed Petzval radius of approximately `−1794.51 mm` under the adopted image-curvature convention. This is a paraxial curvature result, not a prediction of the final tangential or sagittal image surfaces after higher-order correction.

## Conditional Expressions

The patent evaluates its conditions at the d line and at infinity focus. The independently recomputed Example 1 values are:

| Condition | Patent range | Preferred range | Example 1 result | Status |
|---|---:|---:|---:|---|
| `(1) TTL/Bf` | `2 < x < 3.6` | `2.5 < x < 3.5` | 3.15549 | Passes both |
| `(2) f/f2` | `1.8 < x < 2.5` | `2.0 < x < 2.4` | 2.05977 | Passes both |
| `(3) |θgF22 − θgF21|` | `0.03 < x < 0.045` | `0.032 < x < 0.042` | 0.03907 | Passes both |
| `(4) f1/f2` | `1.0 < x < 3.0` | `1.5 < x < 2.8` | 2.10364 | Passes both |

Patent Table 14 prints `TTL/Bf = 3.17` for Example 1. Using the prescription, the patent's stated Bf definition, and the independently traced BFD gives 3.15549, which rounds to 3.16. The source table is therefore inconsistent at the second decimal place. No radius, spacing, or index is changed to force the tabulated 3.17 value, and the condition remains comfortably satisfied.

## Image Stabilization

The complete G3 group is the optical image-stabilization unit. During correction it moves in a direction with a component perpendicular to the optical axis, while G1, G2, and G4 remain fixed relative to the image plane (¶¶0041, 0062). Fujifilm specifies up to five stops of OIS performance for the commercial lens; that is a marketed mechanical-system specification, not a result derived from the centered patent prescription.

The stabilizing group is compact and strongly negative at `−34.849860 mm` EFL. It consists of L31 followed by D5 and is placed immediately behind the aperture stop. The patent explicitly links this stop-adjacent location to reduced ray height, diameter, and moving weight (¶¶0041, 0049).

Neither the patent nor the available source material provides a transverse travel or decenter magnitude. The data file therefore contains no OIS slider, decentered surface state, or quantitative stabilization sensitivity. Only the centered optical prescription is modeled.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD check applied to the final arrays reproduce the main infinity quantities:

| Quantity | Patent / source | Recomputed from final arrays |
|---|---:|---:|
| EFL | 242.544 mm | 242.544222 mm |
| Air-converted BFD | 70.954 mm | 70.953850 mm |
| Design f-number | F/4.12 | F/4.120000 from inferred stop |
| Full patent field | 13.4° | Source value retained |
| G1 EFL | — | +247.718985 mm |
| G2 EFL | — | +117.757894 mm |
| G3 EFL | — | −34.849860 mm |
| G4 EFL | — | +68.730717 mm |

The stop diameter is not published. The physical stop semi-diameter of `13.522135 mm` is inferred from the patent EFL and F/4.12 after tracing the entrance pupil. Surface semi-diameters are also modeled values rather than patent data. They were checked in the infinity and reconstructed-close states: the minimum non-stop ray clearance is `0.294770 mm`, the minimum modeled edge thickness is `0.180213 mm`, the maximum actual rim angle is `52.977888°`, and the tightest shared-band cross-gap margin is `0.095434 mm`.

The final rear gap preserves the omitted plate's published air-equivalent distance. It differs from the independently recomputed BFD by 0.001145 mm; that residual is documented rather than silently removing the source normalization. No scale transformation and no aspheric-coefficient transformation are involved because the prescription remains at native scale and Example 1 is all-spherical.

## Sources and References

1. US 2019/0094496 A1, *Imaging Lens and Imaging Apparatus*, Example 1, especially Figures 1, 7, and 8; Tables 1, 2, and 14; and ¶¶0038–0069.
2. [Fujifilm, FUJINON GF250mmF4 R LM OIS WR product page](https://www.fujifilm-x.com/global/products/lenses/gf250mmf4-r-lm-ois-wr/).
3. [Fujifilm, FUJINON GF250mmF4 R LM OIS WR specifications](https://www.fujifilm-x.com/global/products/lenses/gf250mmf4-r-lm-ois-wr/specifications/).
4. [OHARA, optical-glass catalog index](https://www.ohara-inc.co.jp/product/01001/).
5. [HIKARI, optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf).
6. [SCHOTT, N-LASF46B optical-glass datasheet](https://media.schott.com/api/public/content/affcd22a41fb42f5bf79f4022c83a7cf).
7. [CDGM, H-ZBAF52 optical-glass datasheet](https://www.cdgmgd.com/webapp/pdf/H-ZBaF52.pdf).
8. Independent calculation, geometry-validation, and glass-audit artifacts accompanying the prescription.
