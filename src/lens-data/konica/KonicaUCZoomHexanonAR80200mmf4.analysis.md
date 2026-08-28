## Patent Reference and Design Identification

**Patent:** JPS51-37247A\
**Application Number:** 49-110764\
**Filed:** 25 September 1974\
**Published:** 29 March 1976\
**Inventor:** Hideo Shizume\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** *Compact Zoom Lens* (コンパクトズームレンズ)\
**Embodiment analyzed:** Example 1

The prescription is the first numerical example of JPS51-37247A. The patent front page identifies Hideo Shizume as inventor and Konishiroku Photo Industry Co., Ltd. as applicant. Example 1 is tabulated on patent page 303 of the supplied publication scan, with its optical section and aberration plots beginning on page 304.

The selected production correlation is the **KONICA UC ZOOM HEXANON AR 80–200mm f/4**. The correlation rests on convergent, but not manufacturer-confirmed, evidence:

1. The Konica/Berkey product sheet specifies an 80–200mm f/4 Automatic Macro Zoom Hexanon UC with 14 elements in 10 groups. The patent example is likewise a 14-element, 10-group constant-f/4 zoom whose printed focal range is 79.925–196.158mm.
2. Konica literature gives a 30°–12° angle of view and 0.7m minimum focus measured from the film plane. The patent shows full-format image heights near 21.6mm and supplies close-focus aberration plots at 0.7m.
3. The product sheet states that the lens focuses continuously to 0.7m, reaches approximately 1:2 reproduction at 200mm, and can be zoomed to 80mm without refocusing for approximately 1:5 reproduction. The patent states that close focusing is performed by moving the front positive component toward the object.
4. The Autoreflex T4 lens table independently lists the 80–200mm f/4 as a 14-element/10-group Konica bayonet zoom with 0.7m closest distance and a 62mm filter. The associated camera system is 35mm, consistent with the data file's `konica-ar` mount and `135-full-frame` format.

Marketing, patent-state, and traced design quantities are kept separate. The production designation remains 80–200mm f/4. The data file keeps the patent's printed zoom-state endpoints, 79.925mm and 196.158mm, in `zoomPositions`, while `focalLengthDesign` stores the independently traced raw-prescription EFLs, 80.879304mm and 199.749083mm. No scale factor is applied.

## Optical Architecture

The lens is organized into the five functional components shown in the patent figure. In the final data model their net powers, computed from the actual prescription, are approximately:

| Component | Construction | Computed isolated EFL | Net sign |
|---|---|---:|---|
| F1 | front cemented pair D1 + L2 | +102.737mm | positive |
| F2 | L3 + cemented pair D2 | -35.982mm | negative |
| F3 | cemented pair D3 | +102.662mm | positive |
| F4 | L6 + cemented pair D4 | +112.168mm | positive |
| F5 | L8 + L9 + L10 | -704.980mm | weak negative |
| F4 + F5 | complete fixed rear section | +120.677mm | positive |

F1 is the front positive focusing component. It contains a cemented negative-positive pair followed by a positive singlet. F2 is the principal negative variator. F3 is a positive cemented compensator. The aperture stop lies between F3 and F4. F4 is a positive rear component, and F5 is a widely spaced positive-negative-positive three-singlet train.

The numerical Example 1 requires an important distinction between source prose and computed behavior. The patent describes the fifth component as positive, but the transcribed numerical prescription gives F5 a weak negative isolated power of about -704.980mm. The combined fixed rear section F4+F5 remains positive. The data therefore preserves the numerical surfaces rather than forcing the prose description onto them.

At infinity focus, zooming from wide to tele moves the start of F2 from 15.235mm to 49.075mm behind the first surface, an imageward shift of 33.840mm. F3 moves only 0.375mm imageward, from 61.131mm to 61.506mm. F4 and F5 remain fixed, with surface 14 at 78.722mm from the first surface at both endpoints. Example 1 publishes only the two endpoint spacing states, so the model does not invent an intermediate reversal.

The normalized first-surface-to-image track is 192.324mm at the wide endpoint and 192.309mm at the tele endpoint. Under the project criterion `TL/EFL < 1`, only the long endpoint is telephoto in the strict first-order sense: its ratio is approximately 0.963. The wide endpoint ratio is approximately 2.378. Neither endpoint is retrofocus because the back focal distance is smaller than the effective focal length.

## Element-by-Element Analysis

### D1 — L1a + L1b: Front Cemented Pair

**L1a:** nd = 1.80518, νd = 25.4. Glass: `S-TIH6 coefficient proxy (patent 805254; production supplier unspecified)`. Standalone f = -157.464mm.\
**L1b:** nd = 1.62299, νd = 58.2. Glass: `S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)`. Standalone f = +100.899mm.

L1a is a negative meniscus and L1b is a biconvex positive element. Their individual powers have opposite signs, but the cemented pair is weakly positive as an isolated unit, with computed EFL +277.628mm. This distinction matters: the negative front member does not make the cemented pair negative.

The pair also provides a conventional dispersion-balancing degree of freedom through the contrast between νd = 25.4 and νd = 58.2. The patent does not provide partial-dispersion or line-index data, so this is an Abbe-number-level chromatic interpretation only.

### L2 — Positive Meniscus

**nd = 1.62299, νd = 58.2. Glass: `S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)`. Standalone f = +162.607mm.**

L2 is the positive singlet that completes F1. Together with D1 it raises the front component to a computed net EFL of +102.737mm. Because the patent specifies close focusing by translating this entire positive front component toward the object, L2 participates in focus motion with D1 rather than acting as an independent floating member.

### L3 — Negative Meniscus

**nd = 1.62299, νd = 58.2. Glass: `S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)`. Standalone f = -67.782mm.**

L3 is the first element of the negative variator F2. It is a distinct negative singlet ahead of D2, and its power is separately constrained by the patent through the F22/F21 condition comparing the two sub-units of F2.

The large movement of F2 during zooming is concentrated at this part of the system: the F2 front station moves 33.840mm imageward between the two published infinity endpoints.

### D2 — L4a + L4b: Variator Cemented Pair

**L4a:** nd = 1.62299, νd = 58.2. Glass: `S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)`. Standalone f = -34.463mm.\
**L4b:** nd = 1.80518, νd = 25.4. Glass: `S-TIH6 coefficient proxy (patent 805254; production supplier unspecified)`. Standalone f = +58.924mm.

L4a is strongly negative and L4b is positive, but the cemented pair remains negative as a unit, with isolated EFL -83.431mm. Combined with L3, the complete F2 variator has computed EFL -35.982mm.

As in D1, the pair juxtaposes the two dominant Abbe coordinates used in the front half of the lens. The pairing supports chromatic balancing without requiring any claim of anomalous partial dispersion.

### D3 — L5a + L5b: Positive Compensator

**L5a:** nd = 1.62299, νd = 58.2. Glass: `S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)`. Standalone f = +64.034mm.\
**L5b:** nd = 1.80518, νd = 25.4. Glass: `S-TIH6 coefficient proxy (patent 805254; production supplier unspecified)`. Standalone f = -170.648mm.

D3 is the entire F3 compensator. The biconvex L5a supplies the dominant positive power, while the negative-meniscus L5b moderates that power and supplies the opposite-dispersion cemented partner. The pair remains positive, with computed EFL +102.662mm.

F3 moves only 0.375mm between the published wide and tele infinity states. Its comparatively small translation, against the much larger F2 motion, is characteristic of its compensating role in maintaining the image plane while the negative variator changes system power.

### L6 — Positive Meniscus Behind the Stop

**nd = 1.54077, νd = 47.2. Glass: `S-TIL2 coefficient proxy (patent 541472; production supplier unspecified)`. Standalone f = +154.310mm.**

L6 is the first refractive element behind the aperture stop and the front singlet of F4. Its positive power begins the fixed rear relay. It works with D4 to give F4 a substantially stronger positive net power than L6 has alone.

### D4 — L7a + L7b: Rear Cemented Pair

**L7a:** nd = 1.53172, νd = 48.9. Glass: `S-TIL6 coefficient proxy (patent 532489 at nd 1.53172; production supplier unspecified)`. Standalone f = +49.782mm.\
**L7b:** nd = 1.75520, νd = 27.5. Glass: `E-FD4 coefficient proxy (patent 755275; production supplier unspecified)`. Standalone f = -44.223mm.

L7a and L7b have individually strong and opposing powers. Their cemented combination is only weakly positive, with isolated EFL +801.713mm. The pair therefore should not be interpreted from either member alone. In situ with L6, F4 has computed EFL +112.168mm.

The contrast between νd = 48.9 and νd = 27.5 supplies another ordinary-dispersion achromatizing degree of freedom in the rear section. No vendor-specific Sellmeier behavior is assigned in the final data.

### L8 — Biconvex Positive Singlet

**nd = 1.53177, νd = 48.9. Glass: `S-TIL6 coefficient proxy (patent 532489 at nd 1.53177; production supplier unspecified)`. Standalone f = +52.248mm.**

L8 is the first of the final three separated singlets in F5. The source distinguishes its index, 1.53177, from the 1.53172 used by L7a even though both round to the same neutral six-digit coordinate code. The data preserves that distinction.

The patent later constrains the Abbe-number ratio of L8 to L9. The final prescription gives ν(L8)/ν(L9) = 0.989879, well inside the published range.

### L9 — Biconcave Negative Singlet

**nd = 1.74320, νd = 49.4. Glass: `S-LAM60 coefficient proxy (patent 743494; production supplier unspecified)`. Standalone f = -24.558mm.**

L9 is the strongest negative standalone element in the final three-singlet section. It is separated by air from both neighboring positive singlets. Its strong negative power is therefore not equivalent to the net power of F5; the air spaces and the powers of L8 and L10 materially determine the combined behavior.

### L10 — Final Biconvex Positive Singlet

**nd = 1.56732, νd = 42.8. Glass: `S-TIL26 coefficient proxy (patent 567428; production supplier unspecified)`. Standalone f = +59.056mm.**

L10 is the final refractive element before the image space. The numerical prescription makes it unambiguously positive. Patent Figure 1's legend appears to label L10 as negative, conflicting both with the surface prescription and with the surrounding description of the last three singlets as positive-negative-positive. The data retains the numerical prescription and treats the legend sign as a source contradiction.

Although L8 and L10 are positive and L9 is negative, F5 as a widely spaced three-element component is weakly negative in isolation. The fixed rear system F4+F5 is nevertheless positive, illustrating why standalone element signs, cemented-unit powers, and in-situ component behavior must remain separate.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It does not identify a glass manufacturer and does not provide nC, nF, ng, PgF, or dPgF. The final data preserves those source coordinates and names compatible catalog curves only as coefficient proxies, with the production supplier explicitly unspecified.

| Stored glass annotation | nd | νd | Elements | Data interpretation |
|---|---:|---:|---|---|
| S-TIH6 coefficient proxy (805254) | 1.80518 | 25.4 | L1a, L4b, L5b | high-index, low-Abbe coordinate used as the higher-dispersion member of three cemented pairs |
| S-BSM15 coefficient proxy (623582) | 1.62299 | 58.2 | L1b, L2, L3, L4a, L5a | higher-Abbe coordinate used extensively through F1–F3 |
| S-TIL2 coefficient proxy (541472) | 1.54077 | 47.2 | L6 | moderate-index rear positive singlet |
| S-TIL6 coefficient proxy (532489, nd 1.53172) | 1.53172 | 48.9 | L7a | positive member of D4 |
| E-FD4 coefficient proxy (755275) | 1.75520 | 27.5 | L7b | high-index, low-Abbe negative member of D4 |
| S-TIL6 coefficient proxy (532489, nd 1.53177) | 1.53177 | 48.9 | L8 | positive singlet in F5; source index kept distinct from L7a |
| S-LAM60 coefficient proxy (743494) | 1.74320 | 49.4 | L9 | strong negative singlet in F5 |
| S-TIL26 coefficient proxy (567428) | 1.56732 | 42.8 | L10 | final positive singlet |

Every selected curve stays inside the catalog compatibility guard. S-LAM60 resolves the former 743494 gap even though its catalog code rounds to 743493; its evaluated `nd/νd` remains compatible with the patent row. These assignments improve chromatic tracing but do not identify Konishiroku's historical supplier.

The cemented pairs use ordinary Abbe-number contrast repeatedly: 25.4 against 58.2 in D1, D2, and D3, and 27.5 against 48.9 in D4. This supports conventional achromatizing action. It does not support an apochromatic or anomalous-partial-dispersion claim, because the final data contains no validated line-index or dPgF information.

## Focus Mechanism

The patent states that close focusing is performed by moving the front positive component F1 toward the object. It does not publish a close-focus spacing table. Konica product literature specifies a minimum focus distance of 0.7m measured from the film plane. The final data therefore uses a **CONSTRAINED_RECONSTRUCTION**, not a published focus state.

Only the air space following F1 changes with focus. A common objectward extension of 27.690052mm is applied at both zoom endpoints; no additional internal motion is introduced.

| Endpoint | Design EFL | d5 at infinity | d5 at 0.7m | Computed magnification | Manufacturer rounded value |
|---|---:|---:|---:|---:|---:|
| Wide | 80.879304mm | 2.535000mm | 30.225052mm | 0.21218 | about 1:5 |
| Tele | 199.749083mm | 36.375000mm | 64.065052mm | 0.52402 | about 1:2 |

The reconstruction is solved from the 0.7m film-plane object distance and the patent's one-moving-component mechanism. The computed magnifications are not imposed as constraints; their agreement with the rounded product figures is an independent consistency check. The common mechanical travel leaves small paraxial imaging-B residuals of +0.002750mm at wide and -0.001113mm at tele, reflecting the fact that the raw rounded patent prescription does not exactly reproduce its own printed first-order values.

The other authored variable gaps are zoom-only at a given focus setting. d10 changes with zoom as the variator moves, the r13-to-stop portion of d13 changes by 0.375mm with the compensator, and the normalized rear image spacing changes slightly between the two infinity endpoints. None of these is assigned an additional close-focus movement.

## Conditional Expressions

The patent gives six principal power/curvature conditions and a later glass-dispersion condition. Recalculation from the final data gives:

| Patent condition | Final-data value | Result |
|---|---:|---|
| `-3.2 < F1/F2 < -2.7` | -2.855232 | pass |
| `-3.5 < F3/F2 < -2.5` | -2.853131 | pass |
| `0.28 ≤ abs(F2/FR) ≤ 0.4` | 0.298170 | pass |
| `0.9 ≤ F22/F21 < 1.3` | 1.230877 | pass |
| `9.5·abs(F2) ≤ R6`, with `R6 > 0` | 341.830482mm ≤ 360.022mm | pass |
| `0.8 < F4/FR < 1.1` | 0.929495 | pass |
| `0.7 < ν(L8)/ν(L9) < 1.3` | 0.989879 | pass |

The first two conditions regulate the relative positive and negative powers of the front, variator, and compensator components. Conditions three and six constrain how the variator interacts with the positive rear system. The F22/F21 condition controls the internal balance of the two negative sub-units within F2, while the R6 inequality limits the curvature/power relationship at the front of the variator. The final Abbe-ratio condition keeps the dispersions of L8 and L9 near one another in the rear correction train.

## Verification Summary

### First-order normalization

The patent prints `f = 79.925–196.158mm`, `F4`, `fB = 48.523mm`, and a first-to-last surface length of 142.822mm. Direct tracing of the unchanged numerical surface table instead gives 80.879304mm and 199.749083mm effective focal length, with back focal distances of 49.502094mm and 49.487008mm. The final data does not alter any refracting radius, axial spacing, refractive index, or Abbe value to force agreement.

Instead, the model separates the rounded marketing designation from the computed design values and places the image plane at the independently traced paraxial focus of the raw prescription. The small difference between the two endpoint BFDs is therefore a model normalization of the image plane, not a correction to a patent surface.

### Aperture stop and semi-diameter model

Figure 1 shows the stop inside the air gap between surfaces 13 and 14, but the patent does not tabulate its station or diameter. The data places the stop 2.530mm objectward of surface 14 and adopts a fixed radius of 15.628207mm. The fixed stop gives traced endpoint f-numbers of 4.000299 and 3.999701. Because this is a constant-aperture zoom, the data stores a scalar modeled nominal f-number of 4 rather than treating the minute raw-prescription endpoint difference as a variable maximum aperture; the marketed aperture is likewise f/4.

The patent also publishes no clear-aperture semi-diameters. Every surface `sd` in the data is therefore a modeling inference constrained by the patent optical section, the approximately 21.6mm full-corner image-height plots, paraxial ray containment, the production 62mm filter specification, and positive physical clearances. A 600-dpi review of the tele-state Figure 1 retains the dominant 26.5 mm F1 rim, steps L2 down to 25.0 mm, and enlarges F3/F4 to 18.5 mm and the final F5 singlets to 14.2–15.5 mm. That restores the source's gradual front-to-rear taper; L8 cannot share the larger 15.5 mm rim because its real 2.0 mm air gap to L9 would overlap. These values must not be read as patent-transcribed apertures.

Example 1 contains no sensor cover glass, filter plate, inactive dummy surface, flare-cutter plane, or folded-path element. Consequently none is omitted from the sequential prescription, and no air-equivalent plate correction is required.

### Source contradictions retained rather than silently repaired

Two source inconsistencies remain visible in the interpretation. First, the patent prose describes F5 as positive even though the numerical Example 1 computes to a weak negative F5, while F4+F5 is positive. Second, the Figure 1 legend appears to give L10 the wrong sign; the numerical radii and index produce a positive L10. The final data follows the numerical prescription in both cases.

The patent's printed EFL/BFD discrepancy is likewise preserved as a source-level inconsistency. It is not resolved by changing a surface radius or glass index.

### Spectral, aspherical, and scaling scope

All refracting surfaces in Example 1 are spherical. There are no conic constants or aspherical polynomial coefficients, so no asphere convention or coefficient transformation is applicable. No dimensional scale factor is applied.

The patent does not supply source-specific nC, nF, ng, or dPgF values. Coordinate-compatible catalog curves improve the runtime spectral model while the patent `nd/νd` values remain authoritative; the data intentionally makes no anomalous-partial-dispersion or apochromatic claim.

### Petzval check

The surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is +0.000490241278mm⁻¹. This scalar is reported only as a first-order audit quantity; it is not treated as a direct measurement of the best-focus field surface or as a substitute for the patent's aberration plots.

## Sources and References

1. **JPS51-37247A**, *Compact Zoom Lens* (コンパクトズームレンズ), Hideo Shizume, applicant Konishiroku Photo Industry Co., Ltd., published 29 March 1976. Supplied eight-page publication scan; Example 1 prescription on printed page 303 and optical section/aberration plots on pages 304–306.
2. **Konica Division, Berkey Marketing Companies**, *80-200mm f/4.0 Automatic Macro Zoom Hexanon UC Lens*, Cat. No. 703-177, 1980. Product literature used for the 80–200mm designation, f/4 aperture range, 14-element/10-group construction, 0.7m film-plane minimum focus, approximate 1:2 and 1:5 reproduction figures, 62mm filter, 157mm length, 830g weight, and built-in hood.
3. **Konica**, *Autoreflex T4 User's Manual*, interchangeable-lens table, pp. 78–79. Used as an independent manufacturer-authored source for the 80–200mm f/4, 14-element/10-group specification, 0.7m closest distance, 62mm filter, 157mm length, 830g weight, and the Konica 35mm bayonet system context.
4. **OHARA Corporation**, *Optical Glass Pocket Catalog* and current detailed optical-glass data. Used only to test modern `nd`/`νd` coordinate compatibility for the neutral six-digit glass annotations; no OHARA identity is assigned to the historical lens.
5. **SCHOTT**, *Optical Glass* catalog and current N-SF6 / N-LAF35 data sheets. Used only as cross-vendor coordinate evidence demonstrating that matching six-digit coordinates do not by themselves establish the historical supplier.
