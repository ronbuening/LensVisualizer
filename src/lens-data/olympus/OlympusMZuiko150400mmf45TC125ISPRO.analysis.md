## Patent Reference and Design Identification

**Patent:** JP 2021-096331 A
**Application Number:** JP 2019-226608
**Filed:** 2019-12-16
**Published:** 2021-06-24
**Inventors:** Yuki Kubota; Yasuharu Yamada
**Applicant:** Olympus Corporation
**Title:** Zoom optical system, imaging optical system and imaging device equipped therewith (translation)
**Example details:** 数値実施例５ / 数値実施例６; ¶0551–0568, ¶0647–0648; Figures 5–6; original PDF pp. 81–84 and 106. Dimensions are unscaled millimetres.

The patent design is associated with the Olympus product by the correspondences below. Exact equality with the production radii, thicknesses, glass melts and focus cam remains unproven:

1. The manufacturer specifies 150–400 mm f/4.5 with a built-in 1.25× converter, giving 187.5–500 mm f/5.6. Numerical Example 5 states 153.00–391.96 mm at f/4.59; Example 6 states 191.62–490.90 mm at f/5.75. The source values remain unscaled and separate from the marketing values.
2. Manufacturer construction is 28 elements in 18 groups including the built-in converter's 7 elements in 4 groups. The patent pair is 21 elements / 14 groups without the converter and 28 / 18 with it. Paragraphs 0564–0568 explicitly identify the pair and insertion location.
3. Both share a single dual-aspheric positive element, four very-low-dispersion positive elements, a negative internal focus doublet, and a rear stabilization assembly. The maker specifies one EDA, four Super ED, two ED, two HR and one HD element. The drawing places EDA at L8, Super ED at L3/L10/L11/L15 and ED at L17; the second ED element and both HR elements sit in the built-in converter, and the HD element is the rear negative L21. The patent indices and Abbe numbers support these inferred associations without identifying production glass melts.
4. The physical manufacturer diagram and the patent drawings show the same front singlet, front cemented pair, negative variator, fixed positive section and rear converter space. The November 2020 manufacturer announcement falls between the December 2019 filing and June 2021 publication.
5. A paraxial reconstruction using the patent's stated focus group reaches the manufacturer's 1.3 m minimum object-to-image distance with plausible magnifications. This is an independent consistency check, **not** a published finite-focus prescription.

**Reconstructed thickness:** Example 5, surface 15, prints `可変` (“variable”) for the glass thickness but supplies no d15 schedule. The model uses **reconstructed 1.5 mm**, supported by Example 6's printed `1.5000` at the corresponding common surface. Independently, Example 5's published air-equivalent total lengths require 1.499995 / 1.499795 / 1.499995 mm after all other printed terms are subtracted. The 1.5 mm value is therefore a reconstruction, not a printed Example 5 thickness.

## Optical Architecture

The source describes six powered zoom groups with signs **positive–negative–positive–negative–negative–positive** (¶0551–0563), distinct from the 14 or 18 air-separated construction groups. G1, G3, G6 and the stop remain fixed in zoom. G2 moves imageward; G4 first moves imageward then objectward; G5 follows the opposite compensation trend. The patent prints three infinity zoom states. Linear interpolation between them gives up to 10.89494 mm intermediate infinity defocus. The model adds 98 reconstructed stations per configuration: G2/G5 follow piecewise-linear interpolation and rigid G4 compensation preserves the interpolated infinity image plane. The three printed states remain exact. The reconstructed zoom path does not establish the production cam.

| Group | Base elements | Source group focal length, mm | Function |
|---|---|---:|---|
| G1 | L1–L3 | +237.6594 | Fixed front positive collector |
| G2 | L4–L7 | −56.7238 | Negative variator; cemented triplet plus singlet |
| G3 | L8–L11 | +42.1631 | Fixed positive section immediately behind stop; dual-aspheric L8 |
| G4 | L12–L13 | −65.5355 | Negative zoom compensator and focus doublet |
| G5 | L14 | −84.0416 | Negative zoom compensator |
| G6 | L15–L21 | +104.3063 | Fixed rear relay, centered IS and converter insertion space |

The built-in converter is inserted after base L19 and before the rear cemented L20–L21 pair (¶0568). In the converter-in example those seven added elements are L20–L26, and the unchanged rear pair becomes L27–L28. The source gives converter group focal length −96.8028 mm and G6 with converter +383.286 mm. Both configurations describe the same physical lens. The maker also specifies compatibility with the detachable MC-14 and MC-20 converters.

The camera-side parallel plate C is separate from the lens elements. Its physical thickness is 4.1082 mm, index 1.51633, Abbe number 64.14, preceding gap 24.3098 mm and following gap 2.045 mm. The source's 29.064 mm air-equivalent BF includes that plate's reduced thickness; the physical first-vertex-to-image distance is approximately 323.9876 mm at infinity.

## Element-by-Element Analysis

The focal lengths below are **isolated thick-element paraxial calculations in air**, not claimed powers of elements while cemented into their actual neighboring media. Glass names are catalog equivalents of the printed nd/νd pairs; the patent names no supplier, so production melts remain unspecified. Roles below distinguish the source's grouping from optical interpretation; individual aberration budgets have not been recovered.

This companion follows **Numerical Example 5**, with **21 active elements**. TC is out; the base numbering is retained. The diagram explicitly uses the patent's L1–L21 designations. G4 is labelled “Zoom/Focus” because it reverses during wide-to-tele zoom and moves imageward for near focus (¶0561–0562).

### L1 — Plano-Convex Positive

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA catalog equivalent; production supplier unspecified). f = +310.050 mm.

The fixed plano-convex front singlet supplies positive collection power. Its relatively low index and high Abbe number distribute front-group bending without identifying a specific vendor melt (¶0552).

### L2 — Negative Meniscus

nd = 1.67300, νd = 38.26. Glass: S-NBH52V (OHARA catalog equivalent; production supplier unspecified). f = -244.382 mm.

This negative meniscus is cemented to L3. The higher dispersion relative to its positive partner provides the ordinary achromatizing contrast; no secondary-spectrum performance is claimed from Abbe numbers alone (¶0552).

### L3 — Positive Meniscus

nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA catalog equivalent; production supplier unspecified). f = +192.745 mm.

The positive member of the front cemented pair carries a very high Abbe number. It is one of four source elements with nd 1.43875 / νd 94.66, consistent with—but not proof of—the manufacturer’s Super ED count (¶0552).

### L4 — Positive Meniscus

nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA catalog equivalent; production supplier unspecified). f = +131.974 mm.

The first positive member of the G2 triplet works with the negative L5 and positive L6. G2 has net negative power and translates imageward for the wide-to-tele transition (¶0553, ¶0561).

### L5 — Biconcave Negative

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA catalog equivalent; production supplier unspecified). f = -64.990 mm.

The triplet’s strong negative member has lower index and higher Abbe number than its two positive neighbors. The cemented interfaces share the printed radii; no air film or fictitious gap is inserted (¶0553).

### L6 — Positive Meniscus

nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA catalog equivalent; production supplier unspecified). f = +373.500 mm.

This positive meniscus completes the variator triplet. Its source-drawn rear rim is slightly lower than the common forward rims; inferred radii preserve the aperture floor without forcing every variator face to one diameter (¶0553, Figure 5).

### L7 — Biconcave Negative

nd = 1.78800, νd = 47.37. Glass: S-LAH64 (OHARA catalog equivalent; production supplier unspecified). f = -81.701 mm.

The negative singlet completes the net-negative G2 variator. Its physical gap to the preceding triplet constrains the inferred semi-diameter; no gap-sag override is applied (¶0553).

### L8 — Biconvex Positive (2× Aspheric)

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA catalog equivalent; production supplier unspecified). f = +72.251 mm.

The positive L8 is the only dual-aspheric element. Both printed polynomial surfaces are retained; this supplies independent higher-order bending freedom close to the stop without changing the paraxial radii (¶0554, ¶0563).

### L9 — Plano-Concave Negative

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA catalog equivalent; production supplier unspecified). f = -120.077 mm.

The plane-concave negative member is cemented to the very-low-dispersion positive L10. The missing Example 5 thickness is the explicitly reconstructed d15=1.5 mm discussed above; the reconstruction is not concealed as a printed value (¶0554).

### L10 — Biconvex Positive

nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA catalog equivalent; production supplier unspecified). f = +117.206 mm.

The positive member of this fixed G3 doublet uses the same very-low-dispersion coordinate pair as L3. The unlike dispersion of L9/L10 supports primary chromatic balancing, while their cemented surface eliminates an air gap (¶0554).

### L11 — Biconvex Positive

nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA catalog equivalent; production supplier unspecified). f = +78.012 mm.

This separate positive very-low-dispersion element completes G3. The partition of positive power across L8, L10 and L11 is a design interpretation; the patent establishes their shapes and fixed group membership (¶0554).

### L12 — Negative Meniscus

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA catalog equivalent; production supplier unspecified). f = -41.735 mm.

The negative member of the G4 doublet supplies most of its net negative power. G4 moves rigidly imageward for near focus; neither the cemented interface nor the glass thickness changes (¶0555, ¶0562).

### L13 — Positive Meniscus

nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA catalog equivalent; production supplier unspecified). f = +106.302 mm.

The positive meniscus completes the focus doublet and partially balances its negative member. The model moves both elements together; source-tabulated close-focus values are absent (¶0555).

### L14 — Negative Meniscus

nd = 1.59270, νd = 35.31. Glass: S-FTM16 (OHARA catalog equivalent; production supplier unspecified). f = -84.042 mm.

The isolated negative G5 element compensates zoom while the image plane and fixed groups remain stationary. Its inferred rim follows the smaller source-drawn silhouette rather than the much larger adjacent G3 diameter (¶0556, ¶0561).

### L15 — Biconvex Positive

nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA catalog equivalent; production supplier unspecified). f = +60.025 mm.

The first G6 element is a positive very-low-dispersion singlet. It is the fourth element with nd 1.43875 / νd 94.66 in the base lens (¶0557).

### L16 — Biconvex Positive

nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA catalog equivalent; production supplier unspecified). f = +40.463 mm.

The positive member of the L16/L17 cemented pair is part of the source’s laterally moving stabilization assembly. The model keeps it centred; stabilization effectiveness is not simulated (¶0557, ¶0562).

### L17 — Biconcave Negative

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA catalog equivalent; production supplier unspecified). f = -39.747 mm.

This negative member completes the stabilized doublet. Its comparatively high Abbe number contrasts with the positive member’s high dispersion (¶0557). The maker drawing marks this position ED, consistent with the printed pair; it carries an inferred ED annotation, and its anomalous partial dispersion is not printed.

### L18 — Biconcave Negative

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA catalog equivalent; production supplier unspecified). f = -31.695 mm.

The negative singlet moves with L16/L17 during source-described image stabilization. The model preserves the centered prescription and omits unsupported decenter travel (¶0562).

### L19 — Biconvex Positive

nd = 1.76200, νd = 40.1. Glass: S-LAM55 (OHARA catalog equivalent; production supplier unspecified). f = +55.204 mm.

This positive singlet precedes the built-in-converter insertion space. The converter does not replace this element or the rear cemented pair (¶0568).

### L20 — Biconvex Positive

nd = 1.85025, νd = 30.05. Glass: S-NBH57 (OHARA catalog equivalent; production supplier unspecified). f = +36.118 mm.

The rear positive member is cemented to a plane-concave negative partner. With the built-in converter engaged it is renumbered L27, but its radii, thickness, index and Abbe number remain unchanged (¶0557, ¶0567).

### L21 — Plano-Concave Negative

nd = 1.94595, νd = 17.98. Glass: FDS18 (HOYA catalog equivalent; production supplier unspecified). f = -43.816 mm.

The rear plane-concave negative member completes the lens before the separate camera-side plate. It becomes L28 with the converter engaged (¶0557, ¶0567).

## Glass Identification and Selection

All nd/νd pairs below are printed in the patent. Each matches an OHARA or HOYA catalog glass within 6 × 10⁻⁶ in nd and 0.01 in νd. The patent names no supplier, so these names are catalog equivalents, not production identities; it also supplies no spectral-line indices, partial-dispersion data or coatings. The EDA, Super ED and ED annotations are inferred from the maker drawing and compatible patent coordinates; the HD position carries no anomalous-dispersion tag. An Abbe-based dispersion estimate cannot establish apochromatic correction or production MTF; calculations at the reference wavelength have narrower scope.

| Catalog equivalent | nd | νd | Elements | Maker drawing |
|---|---:|---:|---|---|
| S-FSL5 (OHARA) | 1.48749 | 70.23 | L1, L5 | — |
| S-NBH52V (OHARA) | 1.67300 | 38.26 | L2 | — |
| S-FPL55 (OHARA) | 1.43875 | 94.66 | L3, L10, L11, L15 | Super ED |
| S-NBH56 (OHARA) | 1.85478 | 24.8 | L4, L13, L16 | — |
| S-TIH11 (OHARA) | 1.78472 | 25.68 | L6 | — |
| S-LAH64 (OHARA) | 1.78800 | 47.37 | L7 | — |
| FCD1 (HOYA) | 1.49700 | 81.61 | L8 | EDA |
| S-TIH53 (OHARA) | 1.84666 | 23.78 | L9 | — |
| S-LAH66 (OHARA) | 1.77250 | 49.6 | L12, L18 | — |
| S-FTM16 (OHARA) | 1.59270 | 35.31 | L14 | — |
| FCD515 (HOYA) | 1.59282 | 68.63 | L17 | ED |
| S-LAM55 (OHARA) | 1.76200 | 40.1 | L19 | — |
| S-NBH57 (OHARA) | 1.85025 | 30.05 | L20 | — |
| FDS18 (HOYA) | 1.94595 | 17.98 | L21 | HD |

## Focus Mechanism

The patent explicitly places near focus in G4, the L12–L13 doublet, moving toward the image (¶0562). It does **not** publish close-focus numerical tables for these examples. The manufacturer states 1.3 m minimum focusing distance across the zoom range. The model solves an independent reduced-angle ABCD system for a rigid G4 translation at that object-to-image distance, leaving all other glass and the image plane fixed.

The forward gap D19 grows by δ and rear gap D22 shrinks by the same δ. Their sum is invariant. Native infinity prescriptions remain untouched. The six-decimal reconstructed translations are approximately 3.06465 / 7.99256 / 20.52928 mm for TC OUT and 3.06455 / 7.99244 / 20.52914 mm for TC IN. Differences between configurations follow independent solves, not rounded copying. Positive roots were searched over the physically admissible gap range; each source station has one such root.

The inferred magnifications are about −0.124 / −0.184 / −0.285 without TC and −0.155 / −0.231 / −0.357 with TC. Their endpoint agreement with the manufacturer's rounded values supports the reconstruction. The 101-station reconstructed zoom path preserves the three printed states. At 201 sampled positions, intermediate infinity residual is about 0.00446 mm or less and computed close distance is approximately 1299.958–1300.0001 mm. These are sampled model results; the patent does not supply these intermediate positions or close-focus spacings. Intermediate focus positions are also reconstructed. Finite-focus MTF is unavailable.

## Aspherical Surfaces

Both aspheres are on L8, source surfaces 13 and 14 (¶0563, ¶0642, ¶0647–0648). The equation is the standard conic-plus-even-polynomial form:

$$z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)h^2/R^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}.$$

The source uses **K = 0** for both surfaces. No κ↔K conversion, sign reversal or dimensional scaling is applied.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 13 | 0 | −2.32812e−6 | −3.60753e−10 | +1.07081e−13 | −3.07466e−15 |
| 14 | 0 | +2.91882e−6 | −7.53043e−11 | +5.04843e−13 | −2.44305e−15 |

The leading quartic terms have opposite signs, but the higher terms materially affect the usable rim; the full polynomial, not the quartic alone, determines the traced departure. The manufacturer describes an extra-low-dispersion aspherical element. Its manufacturing process is not inferred from that label.

## Image Stabilization

The source names L16, L17 and L18 as the laterally moving stabilization assembly (¶0562). Image stabilization is modelled centred. Decenter travel, actuators and stabilization performance are not modelled.

## Model Scope and Limitations

Paraxial calculations reproduce the patent focal lengths within approximately 0.009 mm at all six printed configuration/zoom states. The largest residual paraxial image-plane offset is about 0.00118 mm. The model retains the physical plate and stated image plane.

Semi-diameters are inferred from Figures 5–6, the stated axial f-number and clearance to the full Four Thirds format corner. Rims are read from the clean sides of all three Figure 5 panels, with the leader-crossed wide panel as a check. The drawing makes the L2/L3 pair and the G5 element L14 and front G6 elements L15–L19 smaller than the first estimates; the drawn L2 rim sits at the axial beam of the long end, and the smaller G6 rims add some corner vignetting at full aperture. Figure-based estimates describe optical clear apertures, not measured mechanical lens radii.

Sampled geometry and ray results apply to the stated positions and rays; they do not establish clearance throughout every continuous zoom/focus position or the full pupil.

## Sources

- [Original JP 2021-096331 A PDF](https://patentimages.storage.googleapis.com/66/8d/55/1c3fbfca463c5c/JP2021096331A.pdf), title page; ¶0551–0568, ¶0638–0648; original PDF pp. 81–84 and 106.
- [Olympus announcement, 2020-11-17](https://olympusamerica.com/press-release/2020-11-17/new-super-telephoto-lens-olympus-enables-1000mm-equivalent-handheld), product construction, built-in TC, focal/aperture ranges and minimum focus.
- [OM System official product specification](https://jp.omsystem.com/product/lens/zoom/pro/150-400_45ispro/spec.html), element/group counts, TC, magnification, minimum distance and aperture blades.
- [OM System official feature page](https://jp.omsystem.com/product/lens/zoom/pro/150-400_45ispro/feature.html), EDA/Super ED descriptions and MC-14/MC-20 compatibility; [construction drawing](https://jp.omsystem.com/content/000113783.jpg).
