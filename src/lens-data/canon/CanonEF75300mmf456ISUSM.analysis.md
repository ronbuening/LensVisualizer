## Patent Reference and Design Identification

**Patent:** JP H08-062541 A (JPH0862541A)
**Application Number:** JP 6-222443
**Filed:** 24 August 1994
**Published:** 8 March 1996
**Inventor:** Shingo Hayakawa (早川 慎吾)
**Applicant:** Canon Inc.
**Title:** Variable-magnification optical system with an anti-vibration function
**Embodiment analyzed:** Numerical Example 2, Figures 3–4 and Table 3

The selected correlation is the original Canon EF 75–300mm f/4–5.6 IS USM, introduced in September 1995. It is an inferred product-to-patent association, not a manufacturer-confirmed transcription of the production optics. The selected Japanese publication remains the prescription authority; a later US family publication is used only as a reading aid and for the romanized inventor name.

Four details converge:

1. Example 2 contains fifteen physical elements in ten air-separated components, exactly the construction Canon lists. Example 1 instead has eleven air-separated components.
2. Canon describes six functional groups, with the second group providing image stabilization. Example 2 has the same arrangement and identifies G2 as the laterally moving group (¶0020).
3. Canon's section and patent Figure 4 agree in the front doublet plus singlet, the negative three-element G2, the positive pre-stop G3, the thin negative G4, the positive G5 and the rear cemented doublet.
4. The native focal-length range is close to the marketed 75–300mm range. The values have not been rescaled to the nameplate.

The patent plots label the native apertures f/4.1, f/4.7 and f/5.8. The marketed f/4–5.6 designation is retained as product identity, not substituted into the prescription. Canon's published 1.5 m minimum focus, eight diaphragm blades and 58 mm filter size describe the manufactured product; they do not supply missing patent motion or optical aperture dimensions.

## Optical Architecture

The six functional groups follow a positive–negative–positive–negative–positive–negative power sequence. “Ten groups” in the manufacturer's construction count means ten air-separated components, not ten independently moving assemblies. Five cemented doublets account for the difference between fifteen elements and ten components.

The stop is the explicit plane R16, placed 3.0 mm behind R15. It moves with G3 because that spacing is fixed; D16 is the changing air space between the stop and G4. There is no inferred shift of the stop into another gap.

| Functional group | Elements | Standalone focal length in air | Source role |
|---|---|---:|---|
| G1 | L1–L3 | +133.743 mm | Positive front group |
| G2 | L4–L6 | -40.976 mm | Negative stabilization group |
| G3 | L7–L9 | +59.944 mm | Positive pre-stop group |
| G4 | L10 | -410.972 mm | Weak negative fixed group |
| G5 | L11–L13 | +69.152 mm | Positive rear relay |
| G6 | L14–L15 | -58.042 mm | Negative terminal group |

These are isolated compound-group powers, not a sum of the element focal lengths. Cemented interfaces are traced directly between their two glasses; no artificial air or cement film is introduced.

### Zoom kinematics

Paragraph 20 fixes G2 and G4 during zoom and moves G1, G3, G5 and G6. Positions below are computed from each group’s first vertex to the adopted fixed image plane; negative means objectward. Small deviations of the nominally fixed groups reflect the source's rounded gaps and the rounded computed image distances.

| Group | Wide | Middle | Tele |
|---|---:|---:|---:|
| G1 | -182.500 mm | -211.900 mm | -237.490 mm |
| G2 | -164.300 mm | -164.320 mm | -164.290 mm |
| G3 | -121.600 mm | -132.350 mm | -150.890 mm |
| G4 | -103.700 mm | -103.720 mm | -103.690 mm |
| G5 | -77.400 mm | -83.020 mm | -79.590 mm |
| G6 | -46.300 mm | -56.970 mm | -66.900 mm |

D5 increases, D10 decreases, D16 increases and D23 decreases from wide to tele, agreeing with ¶0026. D18 decreases from 23.80 to 18.20 mm and then rises to 21.60 mm. This reversal is preserved rather than replaced by a two-endpoint approximation. It is zoom behavior, not a focus prescription.

The patent prints only these three stations, and the US family publication (Example 9) repeats the same three rows. Linear interpolation between them alone would leave the image up to 12.7 mm from paraxial focus near 235 mm. The model therefore adds 13 solved stations between 85 and 273 mm. G2 and G4 stay fixed (D10 + D16 = 35.30 mm; the G4-to-image distance is held). D5, D10 and D18 follow quadratics through the three printed rows in s = ln(f/fW)/ln(fT/fW), and D23 with the image gap is solved so that G6 places the paraxial image on the fixed image plane. Interpolation between adjacent stations then leaves at most 0.14 mm of paraxial defocus. The solved stations are calculated first-order states, not Canon cam data. The three printed stations are unchanged, and only they carry source authority.

### Length and reference planes

| Native station | Computed EFL | Adopted rear-vertex image gap | First vertex to image | Track / EFL |
|---|---:|---:|---:|---:|
| 76.12 mm | 76.117480 mm | 41.50 mm | 182.50 mm | 2.3976 |
| 135.00 mm | 135.026499 mm | 52.17 mm | 211.90 mm | 1.5693 |
| 291.49 mm | 291.499147 mm | 62.10 mm | 237.49 mm | 0.8147 |

Only the tele station has an optical track/EFL ratio below unity. The first-vertex optical track is not the manufacturer's mount-to-front barrel length. There is no justification for comparing those lengths without their distinct reference planes.

## Element-by-Element Analysis

Each focal length below is computed for the individual element in air, including its center thickness. It is not that element's in-situ power inside a cemented pair. The source uses generic N and ν without specifying the reference spectral line. For readability the coordinate slots below are labeled approximate nd/νd; the data file explicitly preserves the uncertainty through explicit Unmatched annotations and indexReferenceNote. The quoted catalog class is a possible d-line coordinate match, never proof of a supplier or production melt.

### L1 — Negative Meniscus

Approximate nd = 1.80518, νd = 25.4. Glass: S-TIH6 class (possible d-line catalog class; supplier and source line unconfirmed). f = -221.388 mm.

The first two elements share R2. This negative, object-convex front meniscus opposes its positive crown partner. Calling that pairing achromatizing is a conventional first-order interpretation; the patent does not provide element-resolved chromatic sensitivities.

### L2 — Positive Meniscus

Approximate nd = 1.51633, νd = 64.2. Glass: S-BSL7 class (possible d-line catalog class; supplier and source line unconfirmed). f = +134.258 mm.

The weaker rear curvature is positive, so the two surfaces form an object-convex positive meniscus. The interface with L1 must remain one shared surface. Its independent focal length should not be mistaken for the net focal length of the doublet.

### L3 — Biconvex Positive

Approximate nd = 1.51633, νd = 64.2. Glass: S-BSL7 class (possible d-line catalog class; supplier and source line unconfirmed). f = +208.963 mm.

This biconvex crown is separated from L2 by the small printed air gap. It completes the net-positive first functional group. Its clear radius is estimated with the front assembly, not obtained from a published semi-diameter.

### L4 — Biconcave Negative

Approximate nd = 1.77250, νd = 49.6. Glass: LAH66 class (possible d-line catalog class; supplier and source line unconfirmed). f = -59.953 mm.

This negative singlet begins G2. Together with the following cemented pair it moves laterally for stabilization in the patent, while its axial position is fixed at the source zoom stations. The centered model represents only its neutral position.

### L5 — Biconcave Negative

Approximate nd = 1.51633, νd = 64.2. Glass: S-BSL7 class (possible d-line catalog class; supplier and source line unconfirmed). f = -46.656 mm.

The biconcave member is followed directly by L6 at R9. The front crown and rear high-dispersion flint give the pair opposite standalone signs. The narrow air space preceding this element constrains the shared clear radius at R7/R8.

### L6 — Biconvex Positive

Approximate nd = 1.84666, νd = 23.8. Glass: S-TIH53 class (possible d-line catalog class; supplier and source line unconfirmed). f = +72.533 mm.

The positive member ends on the negative-radius R10. G2 remains net negative despite this positive contribution. Its role in reducing decentering aberrations belongs to the compound prescription; no isolated numerical aberration contribution is assigned to this element.

### L7 — Biconvex Positive

Approximate nd = 1.60311, νd = 60.7. Glass: S-BSM14 class (possible d-line catalog class; supplier and source line unconfirmed). f = +58.516 mm.

The first part of G3 is an air-separated biconvex crown. Its position ahead of the stop changes with zoom. It is followed by the second positive crown at a thin air gap whose curvatures open away from each other.

### L8 — Biconvex Positive

Approximate nd = 1.48749, νd = 70.2. Glass: S-FSL5 class (possible d-line catalog class; supplier and source line unconfirmed). f = +60.552 mm.

This positive crown has the largest Abbe number in the prescription. A low-dispersion crown is not by itself evidence of anomalous partial dispersion or an apochromatic design. The rear surface is the shared R14 interface with L9.

### L9 — Biconcave Negative

Approximate nd = 1.83400, νd = 37.2. Glass: S-LAH60 class (possible d-line catalog class; supplier and source line unconfirmed). f = -55.248 mm.

The negative member follows the positive L8 at the cemented interface. The pair is followed by 3.0 mm of air to the stop. This source distance is retained at every zoom station.

### L10 — Negative Meniscus

Approximate nd = 1.60311, νd = 60.7. Glass: S-BSM14 class (possible d-line catalog class; supplier and source line unconfirmed). f = -410.972 mm.

Both radii are negative, and the smaller-magnitude front curvature makes the meniscus weakly negative. Figure 4 shows it behind the stop. Its first vertex is approximately fixed relative to the image through the three source zoom stations.

### L11 — Biconvex Positive

Approximate nd = 1.60311, νd = 60.7. Glass: S-BSM14 class (possible d-line catalog class; supplier and source line unconfirmed). f = +57.129 mm.

The biconvex crown begins G5 and is cemented to L12. G5 moves relative to G4 and G6 during zoom. Its positive compound power includes the following independent singlet rather than just this doublet.

### L12 — Negative Meniscus

Approximate nd = 1.80518, νd = 25.4. Glass: S-TIH6 class (possible d-line catalog class; supplier and source line unconfirmed). f = -102.810 mm.

The image-convex negative meniscus is the flint partner of L11. The two printed negative radii must not be replaced by a biconcave interpretation. The rear air gap to L13 is retained literally.

### L13 — Positive Meniscus

Approximate nd = 1.51633, νd = 64.2. Glass: S-BSL7 class (possible d-line catalog class; supplier and source line unconfirmed). f = +147.956 mm.

The positive object-convex singlet completes G5. Its rear radius is weaker than its front radius. The changing D23 behind it connects this positive assembly to the negative terminal group.

### L14 — Biconcave Negative

Approximate nd = 1.77250, νd = 49.6. Glass: LAH66 class (possible d-line catalog class; supplier and source line unconfirmed). f = -30.700 mm.

The terminal doublet begins with a biconcave, high-index element. The rear partner shares its second face. The negative net power of G6 depends on the two elements and their common boundary.

### L15 — Positive Meniscus

Approximate nd = 1.80518, νd = 25.4. Glass: S-TIH6 class (possible d-line catalog class; supplier and source line unconfirmed). f = +66.041 mm.

The last element is an object-convex positive meniscus with a weakly curved rear face, not a plane. The final air distance is the computed paraxial back focus because the patent does not tabulate it. No cover glass is added to explain that omission.

### Cemented assemblies

| Elements | Surfaces | Net isolated-doublet focal length |
|---|---|---:|
| L1/L2 | R1–R3 | +352.966 mm |
| L5/L6 | R8–R10 | -136.649 mm |
| L8/L9 | R13–R15 | -965.737 mm |
| L11/L12 | R19–R21 | +129.339 mm |
| L14/L15 | R24–R26 | -58.042 mm |

The difference between these compound powers and the element powers is intentional. Cemented interfaces refract from glass to glass, whereas the element numbers above use air on both sides.

## Glass Identification and Dispersion Limits

The source N/ν coordinates are retained exactly. Paragraph 0057 does not define their reference wavelength; d/g aberration-plot labels alone do not establish that reference. The repeat of this prescription in [US 2001/0030809 A1, Numerical Example 9](https://patents.google.com/patent/US20010030809A1/en) likewise uses generic N/ν. All 15 elements therefore retain an explicit Unmatched disposition and indexReferenceNote. Tracing uses approximate d-line Abbe dispersion; no catalog curve or catalog-derived C/F/g fields are activated. The candidate classes below describe numerical proximity only, with supplier, melt and source reference unresolved.

| Source N | Source ν | Possible d-line catalog class | Element |
|---:|---:|---|---|
| 1.80518 | 25.4 | S-TIH6 | L1 |
| 1.51633 | 64.2 | S-BSL7 | L2 |
| 1.51633 | 64.2 | S-BSL7 | L3 |
| 1.77250 | 49.6 | LAH66 | L4 |
| 1.51633 | 64.2 | S-BSL7 | L5 |
| 1.84666 | 23.8 | S-TIH53 | L6 |
| 1.60311 | 60.7 | S-BSM14 | L7 |
| 1.48749 | 70.2 | S-FSL5 | L8 |
| 1.83400 | 37.2 | S-LAH60 | L9 |
| 1.60311 | 60.7 | S-BSM14 | L10 |
| 1.60311 | 60.7 | S-BSM14 | L11 |
| 1.80518 | 25.4 | S-TIH6 | L12 |
| 1.51633 | 64.2 | S-BSL7 | L13 |
| 1.77250 | 49.6 | LAH66 | L14 |
| 1.80518 | 25.4 | S-TIH6 | L15 |

The modern S-prefixed candidates do not assert identity with the legacy OHARA glasses. LAH66 is a separately cataloged legacy curve, also left inactive here. No inferred anomalous-partial-dispersion coefficient, ED count or APO-performance claim is made.

## Focus Mechanism and Model Scope

Canon describes micro-USM autofocus and a 1.5 m closest focusing distance. The selected numerical example supplies no near-focus configuration or quantitative internal travel. The model therefore does not reconstruct focusing: all focus entries repeat the same infinity geometry. The manufacturer's close-focus number is metadata, not a modeled finite conjugate or a validated magnification endpoint.

No focus breathing, travel or near-state image quality can be inferred from those duplicate vectors. The patent's axial group motions describe zoom, and the lateral G2 motion describes stabilization; neither is substituted for an absent focus law.

## Aperture, Clear Radii and Field Coverage

The physical iris is inferred by tracing the native f-number entrance bundle to the printed stop at each station. Exact spherical-ray calibration gives:

| Station | Native f-number | Inferred stop semi-diameter |
|---|---:|---:|
| 76.12 mm | 4.1 | 12.909889366 mm |
| 135.00 mm | 4.7 | 12.898942265 mm |
| 291.49 mm | 5.8 | 12.740409069 mm |

Agreement with the requested f-number is calibration, not independent confirmation of an unpublished physical diaphragm. At the 13 solved stations the f-number (f/4.23 to f/5.66) is chosen so that the iris radius lies on a straight line between these three radii, as for a nearly fixed iris; those f-numbers are not patent data.

Every glass clear radius is inferred. The front assembly uses a 28 mm radius, consistent in scale with the manufacturer's section and its 58 mm filter. R7 uses 13.7 mm to retain visible clearance in the R7/R8 air lens under the default 90% gap-intrusion policy. The other rims retain an axial and representative-field margin where their geometry permits it. These are modeled apertures, not dimensions recovered from a factory drawing.

Exact native axial bundles fit all non-stop rims. Off-axis rays may clip, especially at the front group toward tele. Such clipping is reported rather than suppressed by enlarging inferred radii. The selected patent plots show h = 0 and h = ±15 mm; they do not establish performance at the approximately 21.63 mm corner of a 36 × 24 mm frame. Full-frame ray sampling is a model diagnostic based on product format, not a source claim of corner image quality or a measured vignetting curve.

The example is all-spherical. There are no aspheric coefficients, diffractive surfaces, resin layers or camera-side plates in the selected prescription.

## Conditional Expressions and Source Discrepancy

The patent's stabilization-group condition reproduces:

| Quantity | Printed | Computed |
|---|---:|---:|
| abs(fa / sqrt(fW × fT)) | 0.275 | 0.275086 |
| abs(foW / frW), literal ¶0033–0035 | 0.335 | 1.979514 |
| abs(foT / frT), literal ¶0033–0035 | 1.068 | 0.637265 |

The patent states three bounds (¶0030 and ¶0033):

- 0.15 < abs(fa / sqrt(fW × fT)) < 0.50: satisfied by 0.275086.
- 0.20 < abs(foW / frW) < 1.50: not satisfied by the literal 1.979514.
- 0.80 < abs(foT / frT) < 6.0: not satisfied by the literal 0.637265.

The last two comparisons fail. Under the literal definition, fo is the focal length of G1 and fr is the combined focal length of G1+G2, including their state-dependent separation. Neither their printed values nor the corresponding suggested inequality satisfaction is claimed to reproduce. The same contradiction appears in the related US publication, so it cannot be dismissed as a text-extraction mistake.

All radii, media and zoom gaps remain unchanged. The discrepancy concerns derived design assertions rather than an essential construction input: the directly tabulated complete prescription reproduces all three stated focal lengths. It is retained in sourceErrata and is not used to infer a stabilization sensitivity or to justify changing the optical data.

## Image Stabilization

Paragraph 20 assigns transverse motion to G2 while G2 and G4 remain axially fixed during zoom. Canon independently identifies its second group as the stabilization group. The patent discusses reducing decentering aberrations and illustrates an angular-disturbance correction in its paired plots; those source statements are distinct from a numerical validation of the mechanism.

This model is centered. It does not simulate decentered surfaces, gyro control, actuator travel, stabilization limits or blur-reduction performance. The unresolved conditional ratios further prohibit using those printed assertions as a computed stabilization-performance result.

## Model Scope and Limitations

The prescription reproduces the source focal lengths at all three printed stations. The image gaps there are the computed paraxial back focus rounded to 0.01 mm, not patent-published distances. Off-axis rays that miss the inferred rims are left clipped rather than hidden by enlarging those rims.

Only the three printed infinity stations carry source authority. The solved intermediate stations, unprinted apertures, unspecified source wavelength, inactive catalog-class candidates and approximate Abbe dispersion remain explicit limitations. No MTF, measured chromatic quality, near-focus performance or manufacturer-confirmed production recipe is claimed.

## Sources

- Japan Patent Office, [JPH0862541A](https://patents.google.com/patent/JPH0862541A/ja), cover; ¶0020, ¶0026, ¶0033–0035, ¶0057; Numerical Example 2, Table 3; Figures 3–4 and 11–16.
- Canon Camera Museum, [EF75-300mm f/4-5.6 IS USM](https://global.canon/en/c-museum/product/ef330.html), product specifications, six-group/IS description and optical block diagram. Retrieved 8 October 2026.
- [US20010030809A1](https://patents.google.com/patent/US20010030809A1/en), family publication, Example 9 (the same prescription and the same three zoom rows) and inventor metadata. It does not replace the selected Japanese source.
- OHARA, [optical-glass catalog downloads](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), July 2026 Zemax catalog, including preserved legacy entries.
- HOYA, Schott, Hikari, Sumita and CDGM catalogs, used as comparison sources rather than supplier identifications.
