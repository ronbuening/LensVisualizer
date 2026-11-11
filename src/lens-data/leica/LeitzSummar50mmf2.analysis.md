## Patent Reference and Design Identification

**Patent:** GB 423,468 A
**Application Number:** 5397/34
**Filed:** February 19, 1934
**Accepted:** February 1, 1935
**Priority:** March 9, 1933, Germany
**Assignee:** Ernst Leitz GmbH
**Title:** Improvements in or relating to Lens Systems for Rapid Objectives
**Example details:** Sole numerical prescription, physical page2 and drawing page4; native100mm/F2 scaled uniformly by0.5.

The retained document is the **amended specification reprint**, explicitly referring to the Assistant Comptroller’s decision dated February24,1936. The acceptance year1935 in the data is not the amendment date. These dates, title and applicant were freshly inspected on originalGBpage1. The source names the corporate applicant but no individual inventor is assigned here; the structured authors list remains empty.

The selected **Sole example** corresponds to AT141288B through the matching priority, assignee and numerical prescription. The product identification is a probable family association rather than a factory-exact reconstruction:
1. Contemporary Leitz1933/1934 catalogs identify the Summar50mm f/2. Rigid and collapsible mounts are not counted as distinct optical designs.
2. The original-maker foldout labeled “THE SUMMAR” shows six elements in four groups: two outer singlets and two inner cemented pairs, matching the patent topology. This section was freshly inspected during bounded authoring.
3. The native100mm patent prescription is uniformly scaled to50mm. That documented representative scaling does not establish factory radii or glass identities.
4. Patent field52° and manufacturer field48° remain separate. This draft’s configured field is48° and its diagnostic edge is24° off-axis.

This is Summar, not the adjacent Summitar or Summicron diagrams, and not Summarex.

## Optical Architecture

The six-element/four-group architecture is a double-Gauss form with two positive outer singlets and two inner compound dispersing menisci concave toward one another. GBpage1 describes the curved cemented interfaces as collective and convex toward incident light; page2 specifies the numeric example. These are source descriptions, not proof that every aberration is corrected in the present inferred-aperture model.

All ten radii and nine physical intervals are scaled by0.5; refractive indices and Abbe numbers are unchanged. The scaled glass-to-glass track is30.125mm. The source’s68.3mm near-axis image intersection becomes a **fixed34.15mm terminal image gap**. It is not refocused to the calculated34.098727mm BFL. The approximately0.051273mm difference is retained and disclosed, not repaired.

## Element-by-Element Analysis

Each quoted focal length is a computed isolated thick-element estimate in air at native sodium D, not a patent-published focal length or in-system cemented-group power. Actual cemented interfaces encounter neighboring glass rather than air. nD and νD below are the source’s historical sodium-D coordinates, not helium d.

### L1: Positive meniscus outer singlet

nD = 1.6202, νD = 60.4. Glass: Unmatched source sodium-D glass; vendor unknown. f = +76.69 mm, computed isolated estimate.

L1 is the front simple collecting lens described on GBpage1. Its glass matches L2, L5 and L6 in the source table. No distinct focus-group motion is established.

### L2: Positive meniscus, front cemented pair

nD = 1.6202, νD = 60.4. Glass: Unmatched source sodium-D glass; vendor unknown. f = +33.58 mm, computed isolated estimate.

L2 is the first member of the front compound dispersing meniscus, cemented to L3 at R4. Its isolated positive power does not imply positive power for the whole compound group.

### L3: Negative meniscus, front cemented pair

nD = 1.5814, νD = 40.8. Glass: Unmatched source sodium-D glass; vendor unknown. f = -24.50 mm, computed isolated estimate.

L3 supplies the lower-index, lower-Abbe partner of L2. R5 faces the central air gap. The patent’s correction discussion concerns the compound member and its collective cemented interface; a separate optimized aberration contribution is not claimed.

### L4: Negative meniscus, rear cemented pair

nD = 1.5673, νD = 42.8. Glass: Unmatched source sodium-D glass; vendor unknown. f = -19.77 mm, computed isolated estimate.

L4 begins the rear compound dispersing meniscus; R6 faces the central gap. It uses a different nD/νD pair from L3, so the design is not numerically symmetric despite its broadly symmetric architecture.

### L5: Positive meniscus, rear cemented pair

nD = 1.6202, νD = 60.4. Glass: Unmatched source sodium-D glass; vendor unknown. f = +23.80 mm, computed isolated estimate.

L5 is cemented to L4 at R7. The patent explicitly discusses the collective action at this interface in its page2 refraction table. No catalog glass substitution is made.

### L6: Plano-convex positive outer singlet

nD = 1.6202, νD = 60.4. Glass: Unmatched source sodium-D glass; vendor unknown. f = +58.89 mm, computed isolated estimate.

L6 is the rear collecting singlet, with plane R9 and curved R10. It terminates at the original source-derived fixed image gap; no corrective focus shift is introduced.

## Glass Identification and Selection

L1, L2, L5 and L6 use nD1.6202/νD60.4; L3 uses1.5814/40.8 and L4 uses1.5673/42.8. These are literal published pairs, not catalog identifications. The contrasting Abbe values in the cemented members are consistent with their source-described dispersing role, but do not establish apochromatic performance.

The current engine supports native sodiumD589.2938nm, distinct from helium d587.5618nm. Every element explicitly uses indexReference D. No D-to-d conversion is performed. Normal-line chromatic estimates based on nD/νD are inferred spectral behavior, not measured melt data or supplied partial-dispersion measurements.

## Focus Mechanism

Only the source’s infinity prescription is modeled. No finite-focus group motion or travel is derived. The1e15 close-focus sentinel is a supported static numerical convention, not a physical minimum focus distance or mechanical law. The terminal image gap remains34.15mm at every diagnostic field.

## Aspherical Surfaces

The source contains no aspheric coefficients. All finite-radius surfaces are spherical; R9 is plane. No conic, polynomial term or source-radius repair was introduced.

## Inferred Stop and Surface Rims

The patent’s central interval15.72mm is a total air gap, not a printed stop coordinate. The maker’s broadly symmetric sectional iris depiction supports an **approximate midpoint** choice:7.86+7.86native,3.93+3.93mm scaled. This is an author inference, not publication precision. Iris radius is derived by the engine from f/2. The conventional f-stop menu is a diagnostic control and not evidence of the maker’s engraved range.

Current v2 surface caps were determined from the original patent figure independently of failed-ray heights. At1500pixel page height, the axis is approximatelyy703 and the first/last verticesx365/672, a307pixel span corresponding to60.25native millimeters. Smaller top/bottom radial extent is used and rounded down0.1mm. R3/R4 use11.6mm; R7/R8 use11.5mm, based on their full-height faces. Concave R5/R6 retain8.7/8.6mm; all other caps remain unchanged. Different surface caps within a compound group reflect the drawing’s bevel/face boundaries, not separate glass diameters inferred from rays.

These are inferred drawing proportions, not measured optical clear apertures. Endpoint uncertainty is approximately2pixels (0.2mm scaled), with additional unquantified schematic distortion. No cap was fitted to force a ray pass. Earlier common-minimum-cap interpretation is retained in the audit history, not used as the current model description.

## Verification Summary

Current v2 native geometry passes without overrides. All tested chief rays aim and reach the image. A25point circular pupil plus a separately traced chief gives26traces, with the center duplicated:

| Off-axis field | Successful | Clipped | Launch-blocked |
|---|---:|---:|---:|
| 0° | 26 | 0 | 0 |
| 12° | 25 | 1 | 0 |
| 18° | 21 | 5 | 0 |
| 24° | 14 | 11 | 1 |

These sparse unweighted counts are **not illumination or transmission percentages**. Edge clipping remains; no claim of complete full-field or MTF qualification is made. The current26/26axial result replaces the historical v1 cap-limited result. Literal source plane, nativeD coordinates and all optical prescription values remain unchanged.

The draft remains hidden (visible:false), not ready for delivery. Required full corpus/type/test/build/rendered-viewer and optical validation gates remain pending. Geometry construction alone does not establish physical lens performance.

## Sources

- [GB423468A](https://patents.google.com/patent/GB423468A/en): retained amended specification; page1 metadata and architecture, page2 prescription and source image intersection, page4 drawing.
- [AT141288B](https://patents.google.com/patent/AT141288B/en): retained counterpart prescription and drawing. Its metadata does not replace the primaryGB amended-version identity.
- [Leitz1933 catalog](https://www.pacificrimcamera.com/rl/00305/00305.pdf), Summar listing, and [Leitz1934 catalog](https://www.pacificrimcamera.com/rl/01320/01320.pdf), named lens/specifications.
- [Original-maker Summar/Summitar/Summicron sectional foldout, mirrored scan](https://zeissikonveb.de/onewebmedia/Marco/Summar-Summitar-Summicron%20englisch.jpg). Commercial sectional evidence, not an engineering prescription sheet.
