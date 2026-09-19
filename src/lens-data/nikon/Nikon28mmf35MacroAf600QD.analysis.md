# NIKON 28mm f/3.5 (Nikon AF600 / AF600 QD)

## Patent Reference and Design Identification

**Patent:** JP H06-235857 A (特開平6-235857)\
**Application Number:** 特願平5-22527\
**Filed:** 1993-02-10\
**Published:** 1994-08-23\
**Inventor:** Kouichi Ohshita (大下 孝一)\
**Applicant:** Nikon Corporation (株式会社ニコン)\
**Title:** ビハインド絞りを有するトリプレットレンズ (Triplet lens with a behind-the-lens stop)\
**Embodiment analyzed:** Example 2 / 第2実施例

JP H06-235857 A describes a three-element triplet with the aperture stop behind the final lens. Example 2 publishes a
normalized focal length of 100.0, back focus of 83.35, f-number of 3.54, and full angular field of 74.6°. Its lens sequence
is a positive meniscus, a biconcave negative element, and a biconvex positive element, all air spaced and all spherical.
These facts are stated in the patent description, Table 2, and Figure 3.[1]

The production correlation is strong but remains an inference rather than a Nikon-confirmed patent attribution. Nikon's
product history places the AF600/AF600 QD in 1993 and identifies a 28 mm f/3.5 lens.[2] Nikon's own design retrospective
describes the production lens as a three-element rear-aperture triplet, shows the same positive-meniscus / biconcave /
symmetric-biconvex sequence, states that the third element has equal front and rear curvature, and documents whole-lens
focusing to 0.35 m.[3] These details independently reinforce the match to Example 2 beyond focal length and aperture. A
scan of the original instruction manual supplies the 24 × 36 mm picture area and f/3.5-to-f/16 aperture range.[4] Scaling
every dimensional prescription quantity by 0.28 gives a verified modeled EFL of 27.998393 mm. The job-card wording includes
“Macro,” but the Nikon manufacturer sources do not establish “Macro” as lens branding.

## Optical Architecture

The design is a compact positive-negative-positive triplet with a rear aperture stop. From object to image, L1 is a positive
meniscus convex toward the object, L2 is biconcave and negative, and L3 is biconvex and positive. The six refracting
surfaces occupy 8.2264 mm from the first vertex through the sixth vertex in the scaled model. The authored image plane is
23.338 mm behind surface 6 because it preserves the patent's scaled published back focus; the independently recomputed
Gaussian BFD from the same rear vertex is 23.336453 mm, the small difference arising from the source table's finite
precision.[1]

The patent treats the power distribution as central to wide-angle correction. Its discussion states that excessive L1
power aggravates pupil aberration and peripheral-illumination loss, while insufficient L1 power raises the ray height in
L2 and higher-order spherical aberration. The L2/L3 power ranges are then tied to Petzval and field-curvature control.
Separate conditions constrain total lens thickness, the two inter-element air gaps, L3 surface curvature, refractive
indices, and Abbe numbers.[1, ¶¶0007–0013]

No surfaces are cemented, and there are no rear plates, filters, dummy planes, or aspheres in the selected example. The
model therefore contains three physical glass elements, three air-separated groups, six spherical refracting surfaces,
and one inferred rear `STO` plane.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex toward the object

**nd = 1.77279, νd = 49.4. Glass: S-LAH66-class (coordinate-compatible spectral proxy; supplier unproven). f = +25.658699 mm.**

L1 is the relatively weak front positive element. Its isolated thick-lens focal length is a computed standalone property,
not an in-situ group power. In the patent's normalized form, condition (1) places `f1/f` between 0.9 and 1.1; the verified
Example 2 value is 0.916382. The patent explicitly associates this range with limiting pupil aberration and retaining
peripheral illumination while avoiding the higher-order spherical-aberration penalty that follows if L1 is made too
weak.[1, ¶0007]

The element also participates in the patent's compactness constraints. Its center thickness gives `d1/f = 0.1037`, within
condition (5), and its front radius gives `r1/Σd = 1.112219`, within condition (8). Those conditions are patent design
constraints; they should not be read as a claim that L1 alone corrects the listed aberrations.[1, ¶¶0008, 0010]

### L2 — Biconcave Negative

**nd = 1.68893, νd = 31.2. Glass: N-SF8-class (coordinate-compatible spectral proxy; supplier unproven). f = −10.309454 mm.**

L2 supplies the triplet's strong negative standalone power. The verified ratio is `f2/f = −0.368195`, satisfying the
patent's requirement that `−f2/f` lie between 0.3 and 0.4. The patent discusses the L2/L3 power allocation together in
relation to Petzval sum and image-surface curvature rather than assigning a single isolated aberration to L2.[1, ¶0007]

Its d-line coordinate is close to several catalog glasses, most notably HIKARI J-SF8 and CDGM D-ZF10, but the patent does
not identify a supplier. The data therefore retains a coordinate-class label instead of converting that proximity into a
supplier or melt claim.[5][6]

### L3 — Biconvex Positive

**nd = 1.84042, νd = 43.3. Glass: Unmatched (840433-class; no compatible catalog curve). f = +11.516071 mm.**

L3 is the strong rear positive element immediately ahead of the aperture stop. Its verified ratio is `f3/f = 0.411288`,
inside the patent's 0.33–0.42 interval. The two L3 radii have equal magnitude and opposite sign, so condition (9),
`r5 = −r6`, is satisfied exactly in the published and scaled prescription.[1]

The patent specifically notes that equal front and rear curvature on L3 is favorable for coma control and also simplifies
manufacture because both surfaces can use the same curvature process and the element is insensitive to front/back
orientation during assembly.[1, ¶0010] The high L3 index is likewise deliberate at the patent level: the material
conditions assign the strongest index requirement to the third positive element as part of the stated Petzval strategy.
[1, ¶0011]

## Glass Identification and Selection

Patent refractive indices and Abbe numbers are preserved. Named catalog glasses below are coordinate-compatible spectral proxies, not identifications of the production supplier or historical melt. The runtime compatibility guards are unchanged; no catalog-derived line indices are copied into the prescription.

| Element | Patent nd | Patent νd | Runtime glass annotation |
|---|---:|---:|---|
| L1 | 1.77279 | 49.40 | S-LAH66-class (coordinate-compatible spectral proxy; supplier unproven) |
| L2 | 1.68893 | 31.20 | N-SF8-class (coordinate-compatible spectral proxy; supplier unproven) |
| L3 | 1.84042 | 43.30 | Unmatched (840433-class; no compatible catalog curve) |

No patent C/F/g line indices or partial-dispersion measurements are supplied for these elements. Unresolved rows retain the Abbe fallback; compatible rows use the catalog curve. None of these assignments establishes apochromatic performance.

## Focus Mechanism

Example 2 contains one static prescription and no focus-spacing table, group travel, object-distance series, or
magnification series. The implemented status therefore remains **NO_INTERNAL_RECONSTRUCTION** for internal spacings: `var`
is empty and no internal lens gap is invented. The production mechanism itself is known, however. Nikon's official design
retrospective states that the complete photographic lens is extended by the retraction motor, with 100 focus steps from
infinity to 0.35 m and approximately 2.7 mm of extension at minimum focus.[3] The patent background is consistent with
that arrangement, describing a fixed rear stop while the lens is extended for focusing.[1, ¶0002]

A Stage 4 finite-conjugate paraxial check of the scaled Example 2 prescription solves a required rigid-lens extension of
2.707913 mm for an object 350 mm from the image plane, agreeing with Nikon's approximately 2.7 mm figure. This agreement
strengthens the production correlation, but the data file deliberately does not turn the external rigid-body motion into
an internal `var` reconstruction.

## Aperture Stop and Modeled Clear Apertures

Figure 3 establishes that the stop lies behind L3 but does not dimension its axial station or diameter.[1] For the data
model, the stop center is placed 1.02 mm behind surface 6. This comes from a documented ratio measurement of the rendered
figure, which implies 1.023971 mm after scaling; the authored 1.02 mm station is therefore a schematic-placement inference,
not patent metrology.

The physical stop semi-diameter, 3.152041 mm, is likewise modeled. It was calibrated at the inferred station so the
paraxial entrance pupil has a semi-diameter of 3.954575 mm and the parsed model gives f/3.54000048, matching the patent's
published f/3.54 target. That agreement is calibration-dependent and does not independently verify an unpublished iris
diameter.

The patent also omits lens semi-diameters. The data file's clear apertures are modeled from exact spherical Snell-ray
tracing and then checked for sphere domain, actual rim slope, element edge thickness, shared-gap intrusion, and ray
containment. The narrow L1–L2 gap is the limiting geometry: at the shared modeled rim it retains 0.034189 mm of axial
clearance and requires the disclosed `gapSagFrac = 0.98`. The portable trace confirms containment for the authored on-axis
bundles, the source-field 0.6 samples at ±22.38°, and chief rays at the source half-field of ±37.3°. A Stage 4
cross-check also samples the 135-format diagonal-derived 0.6 field at ±22.615°; all traced rays remain inside the
authored semi-diameters, with the smallest surface margin 0.0483 mm. The integration audit enlarged L3 to 5.0 mm on both surfaces; the other clearances are unchanged.

## Conditional Expressions

The patent defines fifteen numerical conditions for the triplet. Because the production normalization is uniform, their
dimensionless values are unchanged by the ×0.28 scale. All fifteen conditions pass when recomputed from the parsed final
data.[1, claims/¶0005; Table 3]

| No. | Patent condition | Verified Example 2 value | Table 3 | Result |
| ---: | --- | ---: | ---: | --- |
| 1 | `0.9 < f1/f < 1.1` | 0.916382 | 0.916 | Pass |
| 2 | `0.3 < −f2/f < 0.4` | 0.368195 (`−f2/f`) | −0.368 (`f2/f`) | Pass |
| 3 | `0.33 < f3/f < 0.42` | 0.411288 | 0.411 | Pass |
| 4 | `0.28 < Σd/f < 0.30` | 0.293800 | 0.294 | Pass |
| 5 | `0.10 < d1/f < 0.11` | 0.103700 | 0.104 | Pass |
| 6 | `2 < d2/d4 < 2.8` | 2.196532 | 2.200 | Pass |
| 7 | `0.18 < (d2+d4)/Σd < 0.205` | 0.188223 | 0.188 | Pass |
| 8 | `1.05 < r1/Σd < 1.12` | 1.112219 | 1.112 | Pass |
| 9 | `r5 = −r6` | exact equality | — | Pass |
| 10 | `1.7 < n1 < 1.8` | 1.77279 | 1.773 | Pass |
| 11 | `1.67 < n2 < 1.71` | 1.68893 | 1.689 | Pass |
| 12 | `1.82 < n3 < 1.85` | 1.84042 | 1.840 | Pass |
| 13 | `48 < ν1 < 55` | 49.4 | 49.4 | Pass |
| 14 | `29 < ν2 < 32` | 31.2 | 31.2 | Pass |
| 15 | `36 < ν3 < 44` | 43.3 | 43.3 | Pass |

Condition (6) preserves a source-precision discrepancy rather than silently correcting it. The rounded Table 2 spacings
compute `3.80 / 1.73 = 2.196532`, whereas Table 3 prints 2.200. The difference is consistent with Table 2 spacing values
printed to 0.01 and Table 3 ratios printed to 0.001; both the raw source value and the recomputation remain recorded.

## Verification Summary

The implemented prescription was recomputed from its parsed TypeScript literals rather than from a second hard-coded copy. Two
independent paraxial implementations agree, giving an EFL of 27.998393 mm and a Gaussian BFD of 23.336453 mm from the
surface-6 vertex. The authored image-plane spacing remains 23.338 mm after surface 6 because it is the exact ×0.28 scaling
of the patent's published 83.35 back focus.

Standalone element focal lengths were independently cross-checked with the thick-lens formula and isolated ABCD matrices;
they are +25.658699 mm for L1, −10.309454 mm for L2, and +11.516071 mm for L3. These are isolated-element quantities, not
cemented-group or in-situ powers; the design has no cemented groups.

The surface-by-surface Petzval calculation uses `φ/(n·n′)` at each refracting surface. Its signed sum is
+0.009958148 mm⁻¹; the reciprocal, 100.420283 mm, is retained only as an algebraic diagnostic and is not asserted to be the
actual image-surface radius. The authored front-vertex-to-image track is 31.5644 mm, so `TL/EFL = 1.127365`; the Gaussian
`BFD/EFL = 0.833493`. Under the project definitions the prescription is therefore neither telephoto nor retrofocus.
The original exact-ray construction checks describe the starting apertures. Repository surface and image-circle audits pass after enlarging L3 to match Figure 3.

## Sources / References

1. Japan Patent Office, **特開平6-235857 (JP H06-235857 A)**, “ビハインド絞りを有するトリプレットレンズ,” published
   1994-08-23. Primary prescription: ¶¶0015–0019, Table 2, Table 3, Figure 3; design rationale: ¶¶0007–0013. The original
   seven-page patent PDF is included in this dossier.
2. Nikon Corporation, **Our Product History: 1990s — 1993 Nikon AF600/AF600 QD**,
   https://imaging.nikon.com/imaging/information/products_history/1990/ (retrieved 2026-09-18).
3. Nikon Corporation, **NIKKOR — The Thousand and One Nights No. 94: Nikon Mini AF600QD / Lite-Touch AF**,
   https://imaging.nikon.com/imaging/information/story/0094/ (retrieved 2026-09-18). Manufacturer design retrospective;
   documents the 28 mm f/3.5 rear-aperture triplet, rigid whole-lens focus, 0.35 m MFD, ~2.7 mm extension, equal L3 curvatures,
   close lens spacing, and the production cross-section.
4. Nikon, **AF600 Instruction Manual**, specifications page; scan hosted by ManualsLib,
   https://www.manualslib.com/manual/1233403/Nikon-Af600.html?page=43 (retrieved 2026-09-18).
5. Nikon Corporation / HIKARI, **J-series optical glass — SF family**,
   https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/sf.html (retrieved 2026-09-18).
6. Chengdu Guangming Optoelectronic Corp. (CDGM), **Optical-glass database and D-ZF10 data sheet**,
   https://www.cdgmgd.com/database/toWebDatabase.htm?pageIndex=7&typeId=18&url=database (retrieved 2026-09-18).
7. HOYA Corporation, **Glass Molded Lenses / optical-glass listings**,
   https://www.hoya-opticalworld.com/english/products/moldlenses.html (retrieved 2026-09-18).
8. OHARA Inc., **L-TIM28 data sheet and comparative glass table**,
   https://www.ohara-inc.co.jp/assets/en/product/pdf/eltim28.pdf (retrieved 2026-09-18).
