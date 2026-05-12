# Nikon AF-P DX Nikkor 70-300mm f/4.5-6.3G ED VR — Patent Example 4 Analysis

## Patent Reference and Design Identification

The relevant patent filing is **US 2021/0026133 A1, “Optical System, Optical Apparatus, and Method of Manufacturing Optical System,”** assigned to Nikon Corporation and published on 2021-01-28 from PCT/JP2017/045187, filed 2017-12-15. The numerical embodiment transcribed here is **Example 4**, corresponding to Table 4 and the sectional diagram of FIG. 7.

The production lens matched to this embodiment is the **AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED VR**. Nikon’s product documentation describes a Nikon F-mount DX telephoto zoom covering 70-300 mm, with VR, AF-P pulse-motor autofocus, 14 elements in 10 groups, one ED element, and a 1.1 m minimum focusing distance. The patent example is not an exact production specification table, but the match is strong:

1. **Focal length and aperture.** Example 4 lists $f = 72.1$, $135.0$, and $292.1$ mm, with $FNO = 4.707$, $4.863$, and $6.494$. These values are close to the marketed 70-300 mm and f/4.5-6.3 class.
2. **Image height.** The patent image height is $Y = 14.75$ mm, appropriate for a DX / APS-C image circle.
3. **Construction.** The prescription contains 14 glass elements. Counting cemented subassemblies as construction groups gives 10 groups, consistent with Nikon’s first-party construction count.
4. **Special glass.** Example 4 has one very-high-Abbe positive element, L41, with $n_d = 1.49700$ and $\nu_d = 81.73$. This is the natural counterpart to the production lens’s single ED element.
5. **Focusing architecture.** The patent identifies the third group, consisting only of L31, as the focusing group that moves toward the object for short-distance focusing. This agrees with an internal-focus telephoto zoom architecture.

The file name omits `ED VR` by request, but the analysis and prescription refer to the VR production variant because that is the lens identified by the supplied prior draft and Nikon’s product documentation.

## Optical Architecture

Example 4 is a compact four-group telephoto zoom with a positive-negative-positive-positive power distribution:

| Group | Patent surfaces | Power | Function |
|---|---:|---:|---|
| G1 | 1-5 | +127.677 mm | Front collector / telephoto front group |
| G2 | 6-10 | -31.532 mm | Negative variator and zoom compensation group |
| G3 | 11-12 | +70.494 mm | Single-element internal focusing group |
| G4 | 13-25 | +147.512 mm | Rear relay, stop region, ED-containing corrector, and final field group |

The zoom ratio in the patent is 4.05×. Total optical length divided by effective focal length is approximately 2.34 at the wide setting, 1.47 at the middle setting, and 0.76 at the telephoto setting. The system is therefore not retrofocus. It becomes a true telephoto system at the long end, where the total track is shorter than the focal length.

Example 4 contains no aspherical surfaces. Its correction strategy is conventional: four zoom groups, several cemented doublets, one ED-class fluorophosphate-like crown in the rear group, dense flint partners, and one front-group anomalous-dispersion flint singled out by the patent’s conditional expressions.

## Element-by-Element Analysis

### L11 — Biconvex Positive Front Element

**$n_d = 1.51680$, $\nu_d = 63.88$. Glass: crown glass class, 517/639 code; catalog identity not asserted. Standalone in-air $f \approx +150.7$ mm.**

L11 is the front positive collector. Its job is to begin convergence at a moderate refractive index without making the front element strongly dispersive. It carries the largest clear aperture in the inferred data file and sets much of the beam scale for the rest of the zoom.

Because L11 is separated from the L12/L13 cemented pair by only 0.2 mm, the first group is compact. The group as a whole has a patent focal length of +127.677 mm.

### L12/L13 — Cemented Negative/Positive Front Doublet

**L12:** $n_d = 1.61155$, $\nu_d = 31.26$. Glass: anomalous-dispersion flint class, 612/313 code; patent-specified LZ material. Standalone in-air $f \approx -98.7$ mm.

**L13:** $n_d = 1.51742$, $\nu_d = 52.20$. Glass: medium-dispersion crown class, 517/522 code; catalog identity not asserted. Standalone in-air $f \approx +87.5$ mm.

This cemented pair completes G1. L12 is the element identified by the patent’s conditional-expression table. Its low Abbe number and listed partial-dispersion ratio make it materially important for secondary-spectrum control, but it should not be conflated with the production lens’s ED marketing term. The ED-class element in this prescription is L41, not L12.

The L12/L13 cemented interface reduces chromatic and spherical residuals introduced by the front collector. L13 restores positive contribution within the first group while maintaining a compact front-group package.

### L21/L22 — Cemented Negative/Positive Variator Doublet

**L21:** $n_d = 1.69680$, $\nu_d = 55.52$. Glass: high-index crown class, 697/555 code; catalog identity not asserted. Standalone in-air $f \approx -26.6$ mm.

**L22:** $n_d = 1.80809$, $\nu_d = 22.74$. Glass: dense flint class, 808/227 code; catalog identity not asserted. Standalone in-air $f \approx +35.7$ mm.

L21 and L22 form the front doublet of G2, the negative zoom variator. The individual standalone powers are not a reliable guide to the pair’s in-situ behavior: together with L23 and the surrounding air spaces, the group has a focal length of -31.532 mm.

The high index of both elements allows strong variator power without extreme curvature. The dense-flint L22 provides chromatic balancing against L21 while retaining the compactness needed in the moving variator group.

### L23 — Biconcave Negative Element

**$n_d = 1.85026$, $\nu_d = 32.35$. Glass: dense flint / lanthanum-flint class, 850/324 code; catalog identity not asserted. Standalone in-air $f \approx -48.2$ mm.**

L23 is the rear element of G2. It reinforces the group’s negative power and strongly affects the spacing sensitivity between G2 and G3. Its high index permits a comparatively compact negative element.

The inferred semi-diameter for L23 is deliberately conservative because the air gap from L22 to L23 is only 2.038 mm and is the tightest cross-gap sag constraint in the data file.

### L31 — Biconvex Positive Focusing Element

**$n_d = 1.58913$, $\nu_d = 61.22$. Glass: crown class, 589/612 code; catalog identity not asserted. Standalone in-air $f \approx +70.5$ mm.**

L31 is the entire third group. The patent states that the third group moves toward the object when focusing from infinity to a short-distance object. This makes L31 the sole focusing element.

The zoom data place G3 between the two zoom-variable air spaces D10 and D12. At wide, middle, and telephoto settings, D10 changes from 32.727 to 21.603 to 2.157 mm, while D12 changes from 10.112 to 13.560 to 16.367 mm. This is consistent with a compact internal-focus group operating from different zoom-dependent base positions.

### L41/L42 — ED-Containing Rear Cemented Doublet

**L41:** $n_d = 1.49700$, $\nu_d = 81.73$. Glass: ED fluorophosphate crown class, 497/817 code; catalog identity not asserted. Standalone in-air $f \approx +40.4$ mm.

**L42:** $n_d = 1.85026$, $\nu_d = 32.35$. Glass: dense flint / lanthanum-flint class, 850/324 code; catalog identity not asserted. Standalone in-air $f \approx -38.7$ mm.

This doublet opens G4 and is the main ED-class correction pair in Example 4. Placing the ED-class positive element in the rear group is efficient because the beam is smaller than in the front collector, while the group still has enough leverage to correct longitudinal and lateral color left by the front and variator groups.

L42 pairs the low-dispersion L41 with high-index flint power. The cemented interface keeps the rear corrector compact and suppresses secondary color without introducing an aspherical surface.

### L43 — Biconvex Positive Element Ahead of the Aperture Stop

**$n_d = 1.48749$, $\nu_d = 70.31$. Glass: low-dispersion crown class, 487/703 code; catalog identity not asserted. Standalone in-air $f \approx +70.0$ mm.**

L43 is a positive relay element immediately before the stop-side air space. It stabilizes ray angles entering the stop region and supports the rear group’s positive power with relatively little added secondary spectrum.

The aperture stop is located after L43 and before the L44/L45 doublet. The axial air distance from the stop to L44 is 23.297 mm, so the post-stop doublet is not physically adjacent to the diaphragm even though it is the next lens assembly in optical order.

### L44/L45 — Cemented Positive/Negative Doublet Behind the Stop

**L44:** $n_d = 1.80100$, $\nu_d = 34.92$. Glass: dense flint / high-index medium-dispersion class, 801/349 code; catalog identity not asserted. Standalone in-air $f \approx +28.3$ mm.

**L45:** $n_d = 1.70000$, $\nu_d = 48.11$. Glass: high-index flint class, 700/481 code; catalog identity not asserted. Standalone in-air $f \approx -15.9$ mm.

The L44/L45 cemented doublet is the first lens assembly after the stop. It has strong internal power contrast and therefore contributes substantially to spherical aberration, coma, pupil aberration, and chromatic balancing in the rear half of the lens.

The Abbe numbers place both components in flint or flint-border territory rather than in ordinary crown territory. The data file therefore uses class-level flint descriptions instead of asserting a catalog melt.

### L46 — Biconvex Positive Rear Relay Element

**$n_d = 1.60342$, $\nu_d = 38.03$. Glass: medium-index flint class, 603/380 code; catalog identity not asserted. Standalone in-air $f \approx +35.8$ mm.**

L46 restores positive relay power after the post-stop doublet. Its moderate Abbe number indicates that it participates in residual color balancing rather than acting as a spectrally neutral crown relay.

It also contributes to field shape control before the final negative meniscus.

### L47 — Negative Meniscus Final Element

**$n_d = 1.77250$, $\nu_d = 49.62$. Glass: high-index medium-dispersion flint class, 773/496 code; catalog identity not asserted. Standalone in-air $f \approx -67.8$ mm.**

L47 is the image-side lens of Example 4. Its negative meniscus shape helps control field curvature, distortion, and final ray angles approaching the sensor.

The patent back focal distances are 43.294 mm at wide angle, 45.652 mm at the middle setting, and 70.374 mm at telephoto. These back-focus values are represented as zoom-variable BF values in the data file.

## Glass Identification and Selection

The patent gives refractive index, Abbe number, and partial-dispersion ratio, but it does not name commercial glass melts. The data file therefore uses class-level descriptions and six-digit glass codes rather than vendor catalog names. This avoids circular validation and prevents false precision where no catalog identity has been independently established.

| Element(s) | $n_d$ | $\nu_d$ | Class-level description | Role |
|---|---:|---:|---|---|
| L11 | 1.51680 | 63.88 | Crown glass, 517/639 | Front collector |
| L12 | 1.61155 | 31.26 | Patent-specified anomalous-dispersion flint, 612/313 | Secondary-spectrum control in G1 |
| L13 | 1.51742 | 52.20 | Medium-dispersion crown, 517/522 | Cemented partner for L12 |
| L21 | 1.69680 | 55.52 | High-index crown, 697/555 | Negative variator component |
| L22 | 1.80809 | 22.74 | Dense flint, 808/227 | Variator achromatizing partner |
| L23 / L42 | 1.85026 | 32.35 | Dense flint / lanthanum-flint class, 850/324 | Strong negative correction |
| L31 | 1.58913 | 61.22 | Crown glass, 589/612 | Positive internal-focus group |
| L41 | 1.49700 | 81.73 | ED fluorophosphate crown class, 497/817 | Primary ED-class chromatic corrector |
| L43 | 1.48749 | 70.31 | Low-dispersion crown, 487/703 | Relay before stop |
| L44 | 1.80100 | 34.92 | Dense medium-dispersion flint class, 801/349 | Post-stop positive correction |
| L45 | 1.70000 | 48.11 | High-index flint class, 700/481 | Post-stop negative correction |
| L46 | 1.60342 | 38.03 | Medium-index flint, 603/380 | Rear relay and residual color correction |
| L47 | 1.77250 | 49.62 | High-index medium-dispersion flint class, 773/496 | Final field and distortion correction |

The safest production-level statement is that Example 4 contains one ED-class element, L41. L12 is important to the patent’s conditional-expression strategy, but its $\nu_d = 31.26$ is in the flint range and should not be called the ED element.

## Focus Mechanism

The focus mechanism is internal focus by the single positive G3 element, L31. The patent states that G3 moves toward the object when focusing from infinity to a short-distance object.

Example 4 publishes zoom-variable spacings at infinity, but it does not publish a short-distance variable-spacing table. The production lens’s 1.1 m minimum focusing distance therefore comes from Nikon’s product specification, not from the numerical focus-spacing data in Example 4.

The data file models the patent’s infinity zoom states only. D5, D10, D12, and BF are entered as zoom variables with identical infinity and close-focus values at each zoom point. This preserves the patent prescription while avoiding an invented close-focus travel table. A paraxial attempt to force a 1.1 m object distance using only G3 translation is underconstrained and does not yield a physically consistent telephoto-end solution with the published infinity spacings, where D10 is only 2.157 mm.

| Zoom state | D5 | D10 | D12 | BF |
|---|---:|---:|---:|---:|
| Wide | 2.306 mm | 32.727 mm | 10.112 mm | 43.294 mm |
| Middle | 36.768 mm | 21.603 mm | 13.560 mm | 45.652 mm |
| Telephoto | 51.599 mm | 2.157 mm | 16.367 mm | 70.374 mm |

## Aspherical Surfaces

Example 4 contains **no aspherical surfaces**. The patent states that aspherical surfaces are marked with `*a` in the lens-data table. Table 4 contains no such marked surfaces. The data file therefore sets `asph: {}`.

This is optically significant. The design relies on spherical surfaces, cemented interfaces, group power distribution, one ED-class element, and one patent-specified anomalous-dispersion flint rather than on molded or polished aspherical correction.

## Image Stabilization

The production lens is the VR version, and Nikon’s product documentation states that it has in-lens Vibration Reduction. The patent family discusses optical systems that may include vibration-proof configurations, but Example 4 does not explicitly assign a vibration-proof subgroup or provide decentering data.

Accordingly, this transcription treats Example 4 as an optical prescription compatible with the VR production lens but does not model a VR shift group. No decentered state is included in the data file.

## Conditional Expressions

The patent’s principal material condition requires a specified lens satisfying

$$n_{d,LZ} + 0.01425\nu_{d,LZ} < 2.12$$

and

$$\nu_{d,LZ} < 35.0.$$

In Example 4, the specified lens is L12, with $n_d = 1.61155$, $\nu_d = 31.26$, and $\theta_{gF} = 0.618$. The patent table gives the following corresponding values:

| Quantity | Patent value |
|---|---:|
| $n_{d,LZ} + 0.01425\nu_{d,LZ}$ | 2.057 |
| $\nu_{d,LZ}$ | 31.26 |
| $\theta_{gF,LZ} + 0.00316\nu_{d,LZ}$ | 0.7168 |
| $n_{d,LZ} + 0.00787\nu_{d,LZ}$ | 1.858 |
| $D_{LZ}$ | 1.7 mm |
| Conditional expression (7) value | 36.513 |
| Conditional expression (8) value | 12.605 |

These values confirm that L12 is the material singled out by the patent’s chromatic-correction strategy.

## Verification Summary

The Table 4 prescription was independently checked with a paraxial $y$-$u$ ray trace using the patent sign convention. The computed focal lengths and back focal distances agree with the patent’s general data within rounding error:

| Zoom position | Patent EFL | Calculated EFL | Patent BF | Calculated BFL |
|---|---:|---:|---:|---:|
| Wide | 72.1 mm | 72.0979 mm | 43.294 mm | 43.2925 mm |
| Middle | 135.0 mm | 134.9956 mm | 45.652 mm | 45.6487 mm |
| Telephoto | 292.1 mm | 292.1056 mm | 70.374 mm | 70.3688 mm |

The group focal lengths from the same trace are G1 = +127.6768 mm, G2 = -31.5320 mm, G3 = +70.4939 mm, and G4 = +147.5055 mm. These values match the patent group data to the displayed precision.

The stop semi-diameter required to reproduce the patent f-numbers is approximately 10.5 mm at the three zoom points. The data file uses a 10.8 mm stop semi-diameter to remain compatible with the marketed f/4.5-6.3 nominal aperture scale used by the viewer.

The Petzval sum was computed from the surface-by-surface expression $\sum \Phi/(n n')$, not from thin-lens element approximations. The resulting paraxial Petzval sum is approximately $+3.49\times10^{-4}\ \mathrm{mm}^{-1}$.

The patent omits semi-diameter data. The data-file semi-diameters are therefore inferred and conservative. They satisfy element edge-thickness checks, front/rear element semi-diameter ratios, spherical rim limits, and signed cross-gap sag intrusion at all three zoom positions.

## Sources

Nikon Corporation, **US 2021/0026133 A1**, “Optical System, Optical Apparatus, and Method of Manufacturing Optical System,” published 2021-01-28.

Nikon Corporation, “Release of the AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED VR and AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED,” 2016-08-17.

Nikon USA, “AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED VR,” official product specification page.
