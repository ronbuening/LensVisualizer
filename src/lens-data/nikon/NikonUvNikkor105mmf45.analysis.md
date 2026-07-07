# NIKON UV-NIKKOR 105mm f/4.5

## Patent Reference and Design Identification

**Patent:** JP S61-090115 (A)
**Application Number:** 昭59-212244
**Filed:** October 9, 1984
**Published:** May 8, 1986
**Inventor:** Wakamiya Koichi (若宮 孝一)
**Applicant:** Nippon Kogaku Kogyo K.K. (日本光学工業株式会社; now Nikon Corporation)
**Title:** 結像用対物レンズ (Imaging Objective Lens)
**Embodiment analyzed:** Example 4 (第4実施例, Table 4)

JP S61-090115 discloses imaging objectives made only from calcium fluoride (CaF₂) and fused silica (SiO₂). The stated design purpose is good color correction from approximately 200 nm in the ultraviolet through the visible range and into the near infrared. The patent gives five worked examples using a four-component L₁-L₄ architecture.

Example 4 is the best match to the Nikon UV-Nikkor 105mm f/4.5 and to the later Nikon/Tochigi Nikon Rayfact UV105mm industrial derivative.

1. **Aperture.** Example 4 is the only worked example at F/4.5. Examples 1-3 are F/4, and Example 5 is F/3.76.
2. **Element layout.** Example 4 contains six air-separated elements in six groups, arranged as four optical components. The patent drawing for Example 4 shows the same L₁-L₄ arrangement as the numerical table.
3. **Focal length.** The patent prescription is normalized to f = 100. A uniform 1.05× scale gives a 105 mm production focal length. Nikon's current Rayfact UV105mm specification gives 105.2 mm at infinity, which is within the expected production-vs.-normalized rounding difference.
4. **Field angle and image circle.** The patent gives 2ω = 23.4°. At 105 mm this corresponds to an image diameter of about 43.5 mm. Nikon's current Rayfact UV105mm specification gives a 23.3° field of view and Φ43.2 mm image circle, consistent with full-frame 135 coverage.
5. **Materials.** Every element in Example 4 is either CaF₂ or SiO₂, matching the fluorite/quartz UV-lens construction used by the production family.
6. **Close-range correction.** The patent provides Example 4 aberration diagrams at infinity and β = -0.5. Nikon's current Rayfact UV105mm specification gives a magnification range of infinity to -0.5× and an object-to-image distance of 481.2 mm at close range.
7. **Patent timing.** The October 1984 filing and May 1986 publication align with the mid-1980s Nikon UV-Nikkor 105mm f/4.5 production period.

## Optical Architecture

The design is a six-element, six-group, all-spherical UV imaging objective arranged as four optical components. The component power sequence is negative-positive-negative-positive. The large L₂-L₃ air spacing is the patent's distance D. The numerical prescription does not give an exact aperture-stop station; Fig. 4 places the stop in this D gap. The companion data file therefore inserts `STO` at the approximate midpoint of the D gap and fits its semi-diameter to reproduce F/4.5. That stop placement is an inferred visualization and ray-trace convention, not a patent-table surface.

L₁, surfaces 1-4, is a weak negative front component. It consists of a biconcave fused-silica element followed by a biconvex calcium-fluoride element. The patent describes the first component as helping form a flattener while reducing the residual positive Petzval sum of a simple CaF₂/SiO₂ achromat.

L₂, surfaces 5-6, is a biconvex CaF₂ singlet. It supplies the main pre-stop converging power. Its standalone focal length is about +51.0 in the patent's f = 100 normalization.

L₃, surfaces 7-8, is a biconcave SiO₂ singlet. It is the strongest standalone negative element in the system. Its image-side radius R₈ is the radius R in condition (3), which controls the aberration balance behind the stop.

L₄, surfaces 9-12, is a separated positive rear component made from a biconvex CaF₂ element followed by a negative SiO₂ meniscus. The R₁₀/R₁₁ air gap is extremely small, and the two radii are closely matched. This gives a quasi-cemented rear correcting pair while keeping the elements air-separated.

At the patent scale, the axial distance from surface 1 to surface 12 is 54.441 and the listed back focal distance is 82.765, giving a total surface-1-to-image distance of 137.206. At the 105 mm production scale these become 57.163 mm, 86.903 mm, and 144.066 mm respectively. The 86.9 mm scaled back focal distance is substantially longer than the Nikon F 46.5 mm flange distance, so the optical image plane can be reached with ordinary SLR mirror clearance.

## Element-by-Element Analysis

### E1 — Biconcave Negative, SiO₂

nd = 1.45851, νd = 67.93. Glass: fused silica (SiO₂). f = -43.3 at patent scale.

The first element has R₁ = -32.904 and R₂ = +50.597 with 1.331 center thickness. It is a strongly negative fused-silica biconcave element. Both surfaces are concave to the external medium, with the object-side surface carrying the stronger curvature.

Its principal function is not primary image formation but front-end field and Petzval control. In combination with the following CaF₂ positive element it forms a weakly negative achromatizing front component. The resulting L₁ component power is φ₁ = -0.00447, satisfying condition (1).

### E2 — Biconvex Positive, CaF₂

nd = 1.43388, νd = 95.57. Glass: calcium fluoride (CaF₂). f = +63.8 at patent scale.

The second element has R₃ = +121.007 and R₄ = -35.246 with 7.415 center thickness. It is a biconvex CaF₂ positive element whose image-side surface has much stronger curvature than the object-side surface.

Together E1 and E2 form the first component L₁. The element pairing follows the patent's CaF₂-positive / SiO₂-negative chromatic-correction logic. Because the two materials have only a moderate Abbe-number separation, this front pair is deliberately weak overall rather than being used as the main power carrier.

### E3 — Biconvex Positive, CaF₂, Component L₂

nd = 1.43388, νd = 95.57. Glass: calcium fluoride (CaF₂). f = +51.0 at patent scale.

The third element has R₅ = +31.157 and R₆ = -70.598 with 7.605 center thickness. It is the main positive element before the large L₂-L₃ spacing. The object-side surface is more strongly curved than the image-side surface.

This element establishes the pre-stop converging beam that is then expanded and corrected by the negative L₃ component. The patent's condition (2) controls the distance D from L₂ to L₃ because that separation is central to the triplet-like aberration balance.

### E4 — Biconcave Negative, SiO₂, Component L₃

nd = 1.45851, νd = 67.93. Glass: fused silica (SiO₂). f = -39.3 at patent scale.

The fourth element has R₇ = -31.157 and R₈ = +43.241 with 1.426 center thickness. It is a thin, strong biconcave negative element. Its front-surface curvature magnitude exactly matches R₅ of E3, with opposite sign.

R₈ = +43.241 is the radius R used in condition (3), 0.21f < R < 0.90f. This surface is therefore not a secondary detail; it is one of the controlled design variables for the balance between field curvature, spherical aberration, and higher-order coma.

### E5 — Biconvex Positive, CaF₂, Front Element of L₄

nd = 1.43388, νd = 95.57. Glass: calcium fluoride (CaF₂). f = +39.4 at patent scale.

The fifth element has R₉ = +179.247 and R₁₀ = -18.630 with 8.936 center thickness. It is the strongest standalone positive element in the prescription. The object-side surface is weakly curved, while the image-side surface is steep.

This element supplies most of the positive power of L₄. Its steep rear surface faces the very small 0.111 air gap to E6, producing a rear correcting interface that behaves optically closer to a separated cemented pair than to an ordinary wide air gap.

### E6 — Negative Meniscus, SiO₂, Rear Element of L₄

nd = 1.45851, νd = 67.93. Glass: fused silica (SiO₂). f = -89.4 at patent scale.

The sixth element has R₁₁ = -18.224 and R₁₂ = -33.891 with 1.901 center thickness. It is a negative meniscus with its concave surface facing the object and its convex surface facing the image.

The close match between R₁₀ = -18.630 and R₁₁ = -18.224 makes the E5/E6 air space a tight, high-sensitivity correction gap. In the data file, the semi-diameters at surfaces 10 and 11 are limited by this gap; carrying the full oblique paraxial bundle through that interface would require overlapping surface sags. The restriction is physically plausible as natural off-axis vignetting in the rear component.

The complete L₄ component has positive net power, f₄ ≈ +71.8 at patent scale. The combined L₃+L₄ power is negative, φ₃₄ ≈ -0.00695, satisfying condition (4).

## Glass Identification and Selection

The patent uses only two optical materials and publishes their d-line refractive index, Abbe number, and partial-dispersion ratio θ = (ng - nF)/(nF - nC).

| Material | nd | νd | θgF | ΔPgF vs. Schott normal line | Elements | Role |
|---|---:|---:|---:|---:|---|---|
| Calcium fluoride, CaF₂ | 1.43388 | 95.57 | 0.542 | +0.05895 | E2, E3, E5 | Positive low-dispersion material |
| Fused silica, SiO₂ | 1.45851 | 67.93 | 0.528 | -0.00154 | E1, E4, E6 | Negative achromatizing material |

The material choice is driven by transmission as much as by refractive index. The patent states that ordinary optical glass absorbs strongly below the near ultraviolet, while CaF₂ and SiO₂ remain useful for imaging beginning around 200 nm and extending into the infrared.

The data file keeps patent partial-dispersion values on both materials for chromatic tracing, but the APD display key is intentionally narrower. CaF₂ elements are flagged as patent APD because they depart strongly from the normal line; the fused-silica elements keep their small negative `dPgF` values without an APD badge because SiO₂ lies close to the ordinary-material line. The `glass` labels use ASCII `CaF2` and `SiO2` tokens so both special-material Sellmeier entries resolve through the catalog.

The pair is difficult to use in a photographic-format objective because the refractive indices are close and the Abbe-number difference is moderate. The patent explicitly derives the short component focal lengths required for achromatization: approximately +0.29f for the CaF₂ positive component and -0.41f for the SiO₂ negative component in a simple thin achromat. Such strong component powers would normally produce large higher-order aberrations, so this design distributes the correction across L₁, L₂/L₃, and L₄ rather than relying on one cemented doublet.

No ordinary vendor optical-glass catalog identification is needed here. The prescription names fundamental materials, not catalog melts such as Ohara, Hoya, Schott, Hikari, CDGM, or Sumita glasses.

## Focus Mechanism

The patent gives one infinity-focus prescription and no internal variable-spacing table. The appropriate model is unit focusing: the complete optical unit translates as a rigid body for close focus, with internal air spaces remaining fixed.

The production close-range specification is β = -0.5. For a thick lens, the image-side extension from infinity to -0.5× is 0.5f. At the 105 mm scale this is approximately 52.5 mm, increasing the modeled back focal distance from 86.903 mm to about 139.403 mm. The principal-plane separation computed from the patent matrix is about 7.85 mm at production scale, so the full object-to-image distance at -0.5× is about 480.4 mm. This agrees with Nikon's current Rayfact UV105mm value of 481.2 mm and with the usual 0.48 m close-focus specification for the UV-Nikkor.

The companion data file therefore models close focus by varying only the final BF gap. This is a conventional representation of unit focusing in a sequential lens file: optically, it reproduces the required image-side extension while leaving the internal prescription unchanged.

## Chromatic Correction Strategy

The design's chromatic correction is the central subject of the patent. The material pair is selected because both materials transmit through the UV, but the correction problem is not solved by transmission alone.

The patent's thin-achromat discussion shows why CaF₂ must carry positive power and SiO₂ negative power. The relatively small dispersion difference forces short focal-length components, which would normally make spherical aberration, coma, astigmatism, and Petzval curvature difficult to control.

The patent also notes that because Nc < Ns, a simple CaF₂/SiO₂ achromat leaves a positive Petzval residual. L₁ is therefore assigned weak negative power and acts as a field-flattening front component. L₂ and L₃ form the principal separated positive/negative correcting pair, and L₄ supplies a final positive rear component with a tightly spaced CaF₂/SiO₂ pair.

The partial-dispersion graph in Fig. 11 supports the secondary-spectrum rationale. CaF₂ has strong positive anomalous partial dispersion relative to the normal line, while SiO₂ lies close to the normal line. The design therefore has better broadband correction than would be expected from Abbe number alone, but the analysis should still be read as patent-grounded broadband achromatization rather than as a generic visible-light apochromat claim.

## Conditional Expressions

The patent gives four conditional expressions. Example 4 satisfies all four.

**Condition (1):** $-1 < f\varphi_1 < 0$

φ₁ is the refractive power of L₁. Example 4 gives φ₁ = -0.00447, so fφ₁ = -0.447 at f = 100. This keeps the first component weakly negative.

**Condition (2):** $0.10f < D < 0.25f$

D is the air spacing between L₂ and L₃. Example 4 gives D = 15.924, so D/f = 0.159. This spacing is large enough to support the separated-triplet aberration balance without making the system unnecessarily long.

**Condition (3):** $0.21f < R < 0.90f$

R is the image-side radius of L₃, surface 8. Example 4 gives R = 43.241, so R/f = 0.432.

**Condition (4):** $-1.1 < f\varphi_{34} < 0$

φ₃₄ is the combined power of L₃ and L₄. Example 4 gives φ₃₄ ≈ -0.00695, so fφ₃₄ ≈ -0.695. This leaves the rear section moderately negative in net power.

## Verification Summary

The Example 4 prescription was re-entered directly from the patent table and checked with an independent y-ν paraxial ray trace. The Petzval sum was computed surface by surface as Σφ/(n·n′), not by a thin-element shortcut.

| Quantity | Patent value | Computed value | Status |
|---|---:|---:|---|
| System EFL | 100.000 | 99.997 | Agrees |
| Back focal distance | 82.765 | 82.762 | Agrees |
| Surface-1 to surface-12 distance | 54.441 | 54.441 | Agrees |
| Surface-1 to image distance | 137.206 | 137.206 | Agrees |
| Petzval sum ΣP | 0.00191 | 0.001912 | Agrees |
| L₁ power φ₁ | -0.00447 | -0.004466 | Agrees |
| L₃₄ power φ₃₄ | -0.00695 | -0.006945 | Agrees |
| fφ₁ | — | -0.447 | Satisfies condition (1) |
| D/f | — | 0.159 | Satisfies condition (2) |
| R/f | — | 0.432 | Satisfies condition (3) |
| fφ₃₄ | — | -0.695 | Satisfies condition (4) |

Standalone thick-lens-in-air focal lengths at the patent scale are:

| Element or group | Focal length |
|---|---:|
| E1 | -43.3 |
| E2 | +63.8 |
| E3 / L₂ | +51.0 |
| E4 / L₃ | -39.3 |
| E5 | +39.4 |
| E6 | -89.4 |
| L₁ | -223.9 |
| L₄ | +71.8 |
| L₃ + L₄ | -144.0 |

The scaled data file uses a 1.05× factor for all radii, axial distances, and back focus, with figure-matched semi-diameter estimates. The resulting computed focal length is approximately 105.0 mm. With the inserted stop, the paraxial entrance-pupil semi-diameter is approximately 11.667 mm, giving F/4.500 at infinity.

## Data-File Implementation Notes

The patent does not list semi-diameters. The data file uses estimated semi-diameters derived from the patent F-number, field angle, a paraxial marginal/chief-ray trace, the Fig. 4 silhouette, and the physical sag constraints at the tight E5/E6 air gap. The front half now avoids the artificial equal-height plateau that a pure ray envelope produced. The rear component keeps surfaces 9-12 much closer in diameter, matching the Fig. 4 silhouette, while surfaces 10 and 11 remain just small enough to avoid impossible overlap at the near-contact R₁₀/R₁₁ gap. This may vignette the most extreme full-field, full-pupil oblique rays, but it preserves a physically plausible separated rear pair.

The patent drawing places the stop between L₂ and L₃, but the numerical table does not give its exact station. The data file places `STO` at the approximate midpoint of the D spacing between surfaces 6 and 7 and sets the stop semi-diameter so that the entrance pupil gives F/4.5 at infinity. The base prescription is the infinity-focus state. Close focus is represented by increasing the final BF gap by 52.5 mm at the 105 mm scale.

## Design Heritage and Context

The Nikon UV-Nikkor 105mm f/4.5 is a specialized F-mount UV/visible/near-IR objective for scientific, forensic, conservation, and industrial imaging. The later Nikon/Tochigi Nikon Rayfact UV105mm PF10545MF-UV appears to preserve the same optical concept and close-range specification in an industrial lens presentation.

The patent cites JP Publication S43-26269 as prior art for CaF₂/SiO₂ objectives and identifies inadequate Petzval correction as a problem in earlier designs. The present architecture addresses that by adding a weak negative front component and distributing chromatic correction through multiple CaF₂/SiO₂ pairings. This is the design's main architectural distinction: it is not a simple fluorite/quartz doublet scaled to photographic format, but a six-element objective built around Petzval and secondary-spectrum management.

## Sources

- JP S61-090115 (A), "結像用対物レンズ" (Imaging Objective Lens), published May 8, 1986. Primary source for the optical prescription, material table, conditional expressions, design rationale, and aberration diagrams.
- Nikon, "Rayfact UV Series | Lineup," current Rayfact UV105mm / PF10545MF-UV specifications. Source for the current production-derivative focal length, F-number, field of view, image circle, wavelength range, magnification range, object-to-image distance, F mount, and flange-to-image distance.
- Daitron / Tochigi Nikon, "UV-105mmF4.5 Tochigi Nikon UV Shooting Lens." Source for the UV-105mm F4.5 industrial presentation, 105 mm focal-distance label, 220-900 nm range, F mount, 46.5 mm flange back, and physical lens data.
