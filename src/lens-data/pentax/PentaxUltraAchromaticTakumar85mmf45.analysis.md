## Patent Reference and Design Identification

**Patent:** US 3,490,825\
**Priority:** Japan, February 16, 1965 (40/8,464)\
**Filed:** February 9, 1966 (Ser. No. 526,239)\
**Granted:** January 20, 1970\
**Inventor:** Yasuo Takahashi\
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha\
**Title:** Highly Corrected Wide Band Lens System\
**Embodiment analyzed:** Sole numerical example, $f = 100\ \mathrm{mm}$, 1:4.5, half-field angle $16^\circ$

The numerical example is identified as the normalized optical formula of the PENTAX Ultra-Achromatic-Takumar 85mm f/4.5. The identification rests on several independent correspondences:

1. The patent and the production operating manual both specify five separate elements with no cemented interfaces.
2. The element sequence is identical: negative fused silica, positive fluorite, positive fluorite, negative fused silica, and positive fluorite.
3. The patent example is 1:4.5. Uniformly scaling every radius and spacing by $0.85$ changes its computed focal length from $99.9963$ to $84.9969\ \mathrm{mm}$ without changing aperture ratio.
4. The patent figure and the optical diagram in the production operating manual show the same five element shapes and the same material assignment.
5. The patent gives a $16^\circ$ half-field design example. The production manual specifies a $29^\circ$ full angle of view; a paraxial 35 mm-frame calculation at $84.9969\ \mathrm{mm}$ gives $28.559^\circ$.
6. The patent assignee is Asahi Kogaku Kogyo, and the manufacturer manual identifies the 85mm f/4.5 as a fluorite-and-quartz Ultra-Achromatic-Takumar.

The production manual is authoritative for the marketed focal length, aperture, five-element count, $29^\circ$ angle of view, $0.6\ \mathrm{m}$ minimum focusing distance, and stated chromatic-correction range of 220–1000 nm. The patent remains authoritative for the prescription and its design conditions.

### Claim 1 material-assignment error

Claim 1 reverses the materials, calling the negative elements fluorite and the positive elements fused silica. That wording conflicts with the abstract, the patent body, Claim 2, the numerical prescription, and the production manual. The consistent assignment is therefore:

- L1 and L4: negative fused-silica elements;
- L2, L3, and L5: positive calcium-fluoride elements.

Claim 1 is treated as a drafting error, not as a second embodiment.

## Optical Architecture

The lens is a five-element, five-group, all-spherical design with a negative–positive–positive–negative–positive power sequence. Every element is air separated. The patent explicitly describes the system as a modification of a Triplet type lens.

In that interpretation, L1–L3 act together as the front positive member, L4 is the central negative member, and L5 is the rear positive member. The in-situ cumulative power of L1–L3 is positive, with $\phi_{1,2,3}F = +2.2500$. Adding L4 changes the cumulative value to $\phi_{1,2,3,4}F = -0.44995$, after which L5 restores the final positive system power. This is a modified-triplet power skeleton rather than a conventional three-element Triplet prescription.

The patent gives no numerical aperture-stop station. Figure 1 places the diaphragm in the $d_6$ air space between surfaces 6 and 7. The data file therefore splits that production-scale $7.225\ \mathrm{mm}$ gap into $2.975\ \mathrm{mm}$ before the stop and $4.250\ \mathrm{mm}$ after it. This station is an inference from the drawing; it is not a tabulated patent dimension.

All prescription radii, center thicknesses, air gaps, back focus, and inferred semi-diameters in the data file are at production scale, obtained by multiplying the patent example by $0.85$.

## Element-by-Element Analysis

### L1 — Biconcave Negative

$n_d = 1.45854$, $\nu_d = 69.6$. Glass: fused silica / synthetic quartz (SiO$_2$). $f = -53.125\ \mathrm{mm}$ as a standalone thick lens in air at production scale.

L1 has production-scale radii $R_1 = -32.725\ \mathrm{mm}$ and $R_2 = +96.4665\ \mathrm{mm}$. Its standalone power is strongly negative. In the assembled system, it establishes condition (I), $\phi_1F = -1.6000$, and offsets part of the positive Petzval and chromatic contribution of the three fluorite elements.

The focal length quoted here is the element's standalone in-air value. It is not the element's effective contribution inside the complete, spaced system.

### L2 — Biconvex Positive

$n_d = 1.43387$, $\nu_d = 94.9$. Glass: calcium-fluoride fluorite (CaF$_2$). $f = +53.810\ \mathrm{mm}$ as a standalone thick lens in air at production scale.

L2 is nearly symmetric, with production-scale radii $R_3 = +47.175\ \mathrm{mm}$ and $R_4 = -44.9616\ \mathrm{mm}$. It lies only $0.85\ \mathrm{mm}$ behind L1. Its positive fluorite power begins the reversal from L1's negative front power toward the net-positive L1–L3 equivalent.

The patent states that the balance of L1 and L2 can be selected after conditions (I) and (II) are satisfied to control aberrations other than chromatic aberration. No more specific single-surface correction claim is assigned to L2 than the patent supports.

### L3 — Biconvex Positive

$n_d = 1.43387$, $\nu_d = 94.9$. Glass: calcium-fluoride fluorite (CaF$_2$). $f = +41.152\ \mathrm{mm}$ as a standalone thick lens in air at production scale.

L3 has a steep front surface, $R_5 = +20.825\ \mathrm{mm}$, and a much weaker rear surface, $R_6 = -115.89495\ \mathrm{mm}$. It is the strongest standalone positive element in the prescription. Together with L1 and L2, it gives $\phi_{1,2,3}F = +2.2500$, within the patent's specified interval of $1.5$ to $2.8$.

The patent explains that excessive L1–L3 cumulative power worsens spherical aberration and coma and makes a lens brighter than 1:8 impractical. The example remains well inside the stated upper bound.

### L4 — Biconcave Negative

$n_d = 1.45854$, $\nu_d = 69.0$ as tabulated. Glass: fused silica / synthetic quartz (SiO$_2$). $f = -24.035\ \mathrm{mm}$ as a standalone thick lens in air at production scale.

L4 is the strongest standalone negative element. Its production-scale radii are $R_7 = -32.300\ \mathrm{mm}$ and $R_8 = +17.00595\ \mathrm{mm}$. It changes the cumulative power from the positive L1–L3 value to $\phi_{1,2,3,4}F = -0.44995$, satisfying condition (III).

The patent prints $\nu_d = 69.0$ for L4 but $69.6$ for L1 despite assigning the same material and the same $n_d = 1.45854$ to both. Current fused-silica reference data give $\nu_d \approx 67.8$. The data file preserves the patent's element-specific values while supplying explicit C-, F-, and g-line indices from a modern fused-silica material reference for spectral tracing.

### L5 — Biconvex Positive

$n_d = 1.43387$, $\nu_d = 94.9$. Glass: calcium-fluoride fluorite (CaF$_2$). $f = +47.016\ \mathrm{mm}$ as a standalone thick lens in air at production scale.

L5 has production-scale radii $R_9 = +33.150\ \mathrm{mm}$ and $R_{10} = -51.3876\ \mathrm{mm}$. It supplies the rear positive power that completes the modified-triplet sequence and returns the complete system to an effective focal length of approximately $85\ \mathrm{mm}$.

The patent associates the eighth and ninth surfaces with astigmatism control. Condition (IV) is $r_9 \leq F$, which the example satisfies with $r_9/F = 0.39$. The accompanying prose separately warns that making the radius extremely small also worsens aberrations. The inequality itself contains no numerical lower bound; it should not be described as directly enforcing one.

## Glass Identification and Selection

The material identification is explicit in the patent and the manufacturer manual; no catalog-name guess is required. The design uses two optical materials rather than conventional melt glasses.

| Material | Elements | Patent $n_d$ | Patent $\nu_d$ | Modern reference $n_d$ | Modern reference $\nu_d$ | Derived $\Delta P_{g,F}$ |
|---|---|---:|---:|---:|---:|---:|
| Fused silica / synthetic quartz, SiO$_2$ | L1, L4 | 1.45854 | 69.6 / 69.0 | 1.458522 | 67.8 | −0.00179 |
| Calcium-fluoride fluorite, CaF$_2$ | L2, L3, L5 | 1.43387 | 94.9 | 1.43386 | 95.22 | +0.05702 |

The modern fused-silica reference is Corning HPFS, and the fluorite reference is Corning OptiGrade calcium fluoride. Their d-line indices agree with the patent values within $1.8\times10^{-5}$ and $1.0\times10^{-5}$ respectively. This is substantially stronger evidence than a generic six-digit glass-code match.

The data file includes explicit $n_C$, $n_F$, and $n_g$ values for both materials. The listed $\Delta P_{g,F}$ values are derived from those manufacturer line indices using the SCHOTT normal-line relationship. These fields allow the spectral model to represent fluorite's anomalous partial dispersion instead of reducing the design to $n_d/\nu_d$ alone.

The APD display badge is intentionally limited to L2, L3, and L5. Their CaF$_2$ reference value,
$\Delta P_{g,F}=+0.05702$, is a strong anomalous departure and is marked `inferred` because the patent identifies the
material but does not publish partial-dispersion line data. L1 and L4 retain the fused-silica line indices and small
negative $\Delta P_{g,F}$ for tracing, but are not badged because they remain close to the normal-material line.

## Focus Mechanism

The patent provides only one prescription and no focus-spacing table. The production lens is manual focus, and the manufacturer gives a minimum distance of $0.6\ \mathrm{m}$. The data file models focusing as unit extension: all inter-element spacings remain fixed and only the final back-focus distance changes.

This is an explicit modeling inference, not a patent-published moving-group prescription. It is consistent with the operating manual's instruction to focus the 85mm lens in the same manner as a standard lens.

| Quantity | Infinity | 0.6 m minimum distance |
|---|---:|---:|
| Back-focus distance from surface 10 | 66.7116 mm | 84.3134 mm |
| Extension from infinity | 0 mm | 17.6019 mm |
| Object distance from front principal plane | $\infty$ | 495.4339 mm |
| Image distance from rear principal plane | 84.9969 mm | 102.5987 mm |
| Paraxial magnification magnitude | 0 | 0.2071× |

The $0.2071\times$ magnification is calculated from the verified thick-lens model. It is not presented as a manufacturer-published specification.

## Chromatic Correction Strategy

The optical strategy combines negative fused-silica power with positive fluorite power. Both materials have high Abbe numbers, but fluorite also has strongly positive anomalous partial dispersion. The reference data used in the file give $\Delta P_{g,F} = +0.05702$ for CaF$_2$ and $-0.00179$ for fused silica. The contrast provides a degree of secondary-spectrum control unavailable from an ordinary pair of normal-dispersion crown and flint glasses.

The patent claims correction over 200–800 nm for its worked example. The production operating manual specifies 220–1000 nm for the 85mm f/4.5. These ranges describe chromatic correction, not an assertion that every wavelength within the range has identical transmission or detector response.

The manual also states that no traditional optical glass is used and illustrates the two negative elements as quartz and the three positive elements as fluorite. The spectral fields in the data file support a visible-line chromatic model; they do not substitute for a full 200–1000 nm optimization or measured longitudinal-chromatic-aberration curve.

## Conditional Expressions

The patent defines four design conditions. Powers below were recomputed from the complete spaced subassemblies rather than by summing standalone thin-lens powers.

| Condition | Patent expression | Recomputed example value | Status |
|---|---|---:|---|
| I | $-2/F \leq \phi_1 \leq -1/F$ | $\phi_1F = -1.599997$ | Satisfied |
| II | $1.5/F \leq \phi_{1,2,3} \leq 2.8/F$ | $\phi_{1,2,3}F = +2.250008$ | Satisfied |
| III | $-1.2/F \leq \phi_{1,2,3,4} \leq 0$ | $\phi_{1,2,3,4}F = -0.449949$ | Satisfied |
| IV | $r_9 \leq F$ | $r_9/F = 0.390000$ | Satisfied |

The computed values reproduce the patent's stated $-1.6$, $+2.25$, and $-0.45$ values within the precision of the prescription.

## Verification Summary

All quantitative optical values in this analysis were independently recomputed with a reduced-angle paraxial ray trace and an ABCD matrix implementation.

### Patent scale

| Quantity | Patent | Recomputed |
|---|---:|---:|
| Effective focal length | 100 mm | 99.996301 mm |
| Back focal distance from surface 10 | not stated | 78.484183 mm |
| First-to-last vertex track | 35.20 mm | 35.200000 mm |
| Petzval sum | “about 0.4” when multiplied by $F$ | $0.003583041\ \mathrm{mm}^{-1}$; $PF = 0.358304$ |
| Seidel-table $P$ sum | 0.358 | 0.358304 |

The Petzval value was computed surface by surface as

$$
P = \sum_i \frac{n_i' - n_i}{R_i n_i n_i'},
$$

not from standalone element powers.

### Production scale, $\times 0.85$

| Quantity | Recomputed |
|---|---:|
| Effective focal length | 84.996856 mm |
| Back focal distance at infinity | 66.711556 mm |
| Front focal distance | −75.329500 mm |
| First-to-last vertex track | 29.920000 mm |
| First vertex to image plane | 96.631556 mm |
| 35 mm-frame diagonal full field | 28.559335° |

The computed diagonal field agrees with the manufacturer's rounded $29^\circ$ specification.

### Stop and inferred apertures

The inferred stop lies $2.975\ \mathrm{mm}$ behind surface 6 and $4.250\ \mathrm{mm}$ ahead of surface 7. A physical stop semi-diameter of $8.461424\ \mathrm{mm}$ gives an entrance-pupil semi-diameter of $9.444095\ \mathrm{mm}$ and reproduces 1:4.5.

Because the patent does not publish clear apertures, all surface semi-diameters are estimates. The selected set was checked against the project geometry constraints:

Figure 1 gives L1-L3 nearly equal rim heights. Surfaces 1-4 therefore use $sd=12.4\ \mathrm{mm}$, with L3 retained at
$12.0\ \mathrm{mm}$; the rear L5 aperture remains at its edge-thickness-limited value rather than being enlarged to
match the schematic mechanically.

| Check | Result |
|---|---:|
| Maximum $sd/|R|$ | 0.576230 |
| Minimum computed element edge thickness | 0.554449 mm |
| Maximum positive signed cross-gap sag intrusion | 26.54% of gap |
| Maximum front/rear SD ratio within one element | 1.000 |

The rear fluorite element is edge-thickness limited. Extending it to pass the full paraxial corner bundle at 1:4.5 would reduce its edge below the adopted $0.5\ \mathrm{mm}$ minimum. The file therefore uses $sd = 10.6\ \mathrm{mm}$ on surfaces 9 and 10 and accepts modeled wide-open peripheral vignetting. These values are renderer-safe estimates, not claims about the production lens's measured clear apertures.

## Design Heritage and Context

The patent's novelty is not merely the use of fluorite. It is the combination of fluorite and fused silica in a bright, ordinary-field photographic anastigmat while keeping the Petzval sum low enough for a useful image angle. The patent contrasts this with earlier ultra-achromatic systems that were restricted to narrow fields.

The manufacturer manual presents the 85mm f/4.5 as a visible-, ultraviolet-, and infrared-capable specialty lens and instructs the operator to focus in visible light before selecting the required filter. The optical prescription supports that intended use through material selection and chromatic power distribution, but the patent does not provide measured transmission, MTF, or polychromatic spot data for the production lens.

## Sources

- Takahashi, Yasuo. **US 3,490,825, “Highly Corrected Wide Band Lens System.”** Filed February 9, 1966; granted January 20, 1970. Primary source for prescription, power conditions, aberration table, and design rationale.
- Asahi Optical Co. **Ultra-Achromatic-Takumar 85mm f/4.5 and 300mm f/5.6 Operating Manual.** Primary manufacturer source for production specifications, material diagram, correction range, and operating instructions.
- Corning Incorporated. **HPFS 7979, 7980 and 8655 Fused Silica.** Manufacturer reference for fused-silica refractive indices, Abbe number, and spectral data.
- Corning Incorporated. **Corning OptiGrade Calcium Fluoride.** Manufacturer reference for CaF$_2$ refractive indices, Abbe number, and spectral data.
- SCHOTT. **Optical Glass Datasheet Collection / Refractive Index and Dispersion technical information.** Reference for relative partial-dispersion conventions and the normal-line calculation used for $\Delta P_{g,F}$.
