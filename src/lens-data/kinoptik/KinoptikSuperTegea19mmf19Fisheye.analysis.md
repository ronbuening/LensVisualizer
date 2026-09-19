## Patent Reference and Design Identification

**Patent:** US 3,037,426, *Photographic Objectives Having a Large Angular Field*\
**Filed:** August 2, 1960\
**Priority:** France, September 27, 1957\
**Granted:** June 5, 1962\
**Inventor:** Edgard Hugues\
**Assignee:** Les Appareils de Precision Kinoptik\
**Embodiment analyzed:** Example 3 / Figure 3 / Table 3

The prescription is the seven-element Example 3 of US 3,037,426. Figure 3 shows a very large negative front system, an isolated positive middle element, and a compact positive rear system, with the diaphragm immediately ahead of the rear system. Table 3 supplies the radii, center thicknesses, air gaps, d-line refractive indices, and dispersion coefficients for L16 through L22. The patent gives the complete objective as 1.98 mm, f/1.9, with a 197° full object field and a 9.28 mm distance from the last optical surface to the image plane. [1]

The identification with the production KINOPTIK 1.9mm f/1.9 SUPER-TEGEA is strong but remains a research correlation rather than a manufacturer statement that the production lens is specifically Example 3. Kinoptik/Karl Heitz literature lists the SUPER-TEGEA as 1.9 mm f/1.9, 197° on an 8.7 mm-diameter image circle, fixed focus, and approximately 9.2 mm optical back focus. Those values closely track the Example 3 patent summary. The same literature documents C-mount and ALPA versions. [2] [3]

The implemented prescription remains at patent scale. No uniform scaling is applied. The data file deliberately omits `lensMounts` and `imageFormat` because the supplied LensVisualizer taxonomy has no canonical identifiers for C-mount, ALPA, or the 8.7 mm circular cine image format.

## Optical Architecture

Example 3 is a three-system extreme retrofocus fisheye: System I is negative, System II is positive, and System III is positive overall. All seven elements are mutually air-spaced, so LensVisualizer records seven air-separated groups; the patent organizes those seven groups as the three dioptric systems L16-L17 / L18 / L19-L22. The implemented system focal lengths are approximately -7.55 mm, +44.30 mm, and +12.12 mm for Systems I, II, and III respectively. The complete parsed model has an EFL of 1.95590 mm and a paraxial back focal distance of 9.33058 mm from the L22 rear vertex. Because the verified BFD is substantially greater than the verified EFL, the project criterion for a retrofocus design is satisfied.

The architecture is dominated by the extraordinary separation between the very large front negative system and the compact rear imaging system. The first-to-last optical vertex track is 110.45 mm, while the patent-published image plane is 119.73 mm from the first vertex. This is not a telephoto arrangement: the total track is vastly longer than the focal length.

The patent's general discussion assigns the front negative/paraboloidal system the task of distortion control over unusually large object fields. It also describes the positive second system as contributing to low field curvature and correction of chromatic variation of image size, while the rear positive system is used to complete the aberration correction. Those statements describe the common three-system concept of the patent; the patent does not assign a unique aberration term to each individual Example 3 element. [1]

The diaphragm location is source-published. Table 3 gives 31.33 mm of air between L18 and L19, and the prose places D3 1.8 mm ahead of L19. The data model therefore conserves the source spacing as 29.53 mm from L18 to `STO` plus 1.80 mm from `STO` to L19.

## Element-by-Element Analysis

### L16 — Negative Meniscus

**nd = 1.69112, νd = 54.0. Glass: N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven). f = -98.2943 mm.**

L16 is the large spherical meniscus at the front of System I. Its standalone paraxial power is weak compared with L17, but its very large clear aperture and strongly separated position make it geometrically important to the entrance of the system. In the patent drawing it forms the broad outer shell of the front negative assembly, ahead of the plano-parabolic L17. [1]

The stored glass label is intentionally supplier-neutral. Current OHARA and Nikon/HIKARI catalog coordinates place the source pair near modern lanthanum-crown families, but the patent does not identify a manufacturer or melt. The analysis therefore does not promote a catalog neighbor to a historical glass identity. [4] [5]

### L17 — Plano-Parabolic Negative

**nd = 1.80000, νd = 45.0. Glass: M-TAF31-class (coordinate-compatible spectral proxy; supplier unproven). f = -9.3750 mm.**

L17 supplies most of the standalone negative power in System I and carries the design's only aspherical surface. Its front surface is plane and its rear surface is modeled as a rotational paraboloid. The combination of strong negative power and paraboloidal form is consistent with the patent's emphasis on the first system as the distortion-control mechanism for fields extending beyond 180°. [1]

The Table 3 entry for the L17 rear surface is not used literally. The patent prints “rear face section parabola (parameter = 15).” A literal 15 mm vertex-radius interpretation produces a first-system focal length of -14.018 mm and a whole-objective EFL of 3.4253 mm, both incompatible with the patent's own -7.710 mm and 1.98 mm summaries. The raw `15` remains preserved in the dossier; the implemented surface uses the documented MD04 correction, R = +7.5 mm and K = -1.

That correction is not a numerical fit chosen only to reproduce one headline value. The patent states that L17 is similar to L7 of Figure 2; their center-thickness ratio, 2.56/5.09 = 0.502947, scales L7's printed parabola parameter 15 to 7.5442 mm. The corrected model also restores the applicable claim relationships and reproduces the published first-order summaries within source-precision-aware tolerances. The correction is therefore treated as a row-specific Table 3 error, not as a patent-wide redefinition of “parameter.”

### L18 — Biconvex Positive

**nd = 1.68102, νd = 32.0. Glass: Unmatched (681320-class; supplier unspecified). f = +44.3004 mm.**

L18 is the complete second dioptric system: a single isolated biconvex positive element separated by long air spaces from both the front and rear systems. Its standalone focal length is consequently also the computed focal length of System II.

The patent prints +44.36 mm for this system. Recalculation from the unambiguous Table 3 radius, thickness, and index gives +44.3004 mm, a residual of about -0.0596 mm that lies just outside the strict half-last-digit propagation envelope used in the audit. No surface value was altered to force the derived summary. The direct Table 3 prescription remains authoritative, and the discrepancy is retained explicitly.

### L19 — Biconvex Positive

**nd = 1.69112, νd = 54.0. Glass: N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven). f = +11.0388 mm.**

L19 begins System III immediately behind the stop. It is a strong positive biconvex element and shares the same source glass coordinate as L16. Its position next to the diaphragm makes it the first refracting element of the compact final imaging system, but the patent does not isolate a specific aberration contribution for L19 alone.

### L20 — Biconcave Negative

**nd = 1.73259, νd = 28.4. Glass: Unmatched (733284-class; supplier unspecified). f = -5.45943 mm.**

L20 is the only negative element in System III and has the strongest standalone negative power of the rear system. It follows the positive L19 across a short air gap, producing a pronounced positive-negative alternation within the final system. The source coordinate is close in dispersion to SF10-type glasses but differs too much in refractive index for the data file to assert that identity. [5] [6]

### L21 — Positive Meniscus

**nd = 1.62023, νd = 60.2. Glass: N-SK16-class (coordinate-compatible spectral proxy; supplier unproven). f = +10.4079 mm.**

L21 is a positive meniscus followed by only 0.02 mm of air before L22. Although the gap is extremely small, the elements are not cemented in the source and are therefore modeled as separate air-spaced elements. Current SCHOTT and Nikon/HIKARI catalogs contain SK16-family coordinates very close to the source pair, but this does not establish the historical supplier. [5] [6] The current semi-diameter at L21 is a modeled aperture choice rather than a patent dimension; the exact meridional sampling used for construction shows that this region clips a small subset of extreme peripheral rays while retaining physical rays at every sampled field angle.

### L22 — Biconvex Positive

**nd = 1.62023, νd = 60.2. Glass: N-SK16-class (coordinate-compatible spectral proxy; supplier unproven). f = +18.6100 mm.**

L22 is the final positive element and uses the same source glass coordinate as L21. It closes the four-element System III and is followed by the patent-published 9.28 mm image-plane spacing. Together, L19-L22 compute to +12.1173 mm, compared with the patent's rounded +12.017 mm system summary.

## Glass Identification and Selection

Patent refractive indices and Abbe numbers are preserved. Named catalog glasses below are coordinate-compatible spectral proxies, not identifications of the production supplier or historical melt. The runtime compatibility guards are unchanged; no catalog-derived line indices are copied into the prescription.

| Element | Patent nd | Patent νd | Runtime glass annotation |
|---|---:|---:|---|
| L16 | 1.69112 | 54.00 | N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven) |
| L17 | 1.80000 | 45.00 | M-TAF31-class (coordinate-compatible spectral proxy; supplier unproven) |
| L18 | 1.68102 | 32.00 | Unmatched (681320-class; supplier unspecified) |
| L19 | 1.69112 | 54.00 | N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven) |
| L20 | 1.73259 | 28.40 | Unmatched (733284-class; supplier unspecified) |
| L21 | 1.62023 | 60.20 | N-SK16-class (coordinate-compatible spectral proxy; supplier unproven) |
| L22 | 1.62023 | 60.20 | N-SK16-class (coordinate-compatible spectral proxy; supplier unproven) |

No patent C/F/g line indices or partial-dispersion measurements are supplied for these elements. Unresolved rows retain the Abbe fallback; compatible rows use the catalog curve. None of these assignments establishes apochromatic performance.

## Focus Mechanism

The patent gives one static prescription and no variable focus spacings. Archival Kinoptik/Karl Heitz product literature describes the 1.9 mm SUPER-TEGEA as fixed focus. [2] [3]

The LensVisualizer model therefore uses `NO_INTERNAL_RECONSTRUCTION`: `var` is empty and no internal group motion is invented. The required `closeFocusM` field is set to 1,000,000 m solely as a non-operative schema placeholder. It is not a physical minimum-focus specification and should not be interpreted as one.

## Aspherical Surfaces

L17 rear surface `4A` is the sole asphere. The source describes it as a paraboloidal surface but does not publish a conic equation or conic-constant convention. In LensVisualizer's standard sag representation it is therefore encoded geometrically as a pure paraboloid with K = -1 and all polynomial coefficients zero.

The implemented asphere uses R = +7.5 mm as the disclosed MD04 correction to the raw Table 3 `parameter = 15`. No A4-A14 polynomial terms are introduced, and no scale transform is involved because the prescription is not uniformly rescaled.

At the modeled semi-diameter of 14.8 mm, the portable geometry verifier gives an actual rim-slope angle of approximately 63.13°, below the current 64.2° construction threshold. This semi-diameter is inferred from the modeled ray envelope and geometry constraints; it is not a published clear-aperture dimension.

## Conditional Expressions and Patent Consistency

Claims 1, 2, and 4 define the principal focal-length and spacing relationships for the three-system architecture. Using the corrected implemented system focal lengths with the patent-published whole focal length as the claim reference gives the following values:

| Patent condition | Verified value | Result |
|---|---:|---|
| 2 < |fI|/f < 4.5 | 3.81169 | satisfies |
| 8 < fII/f < 25 | 22.37395 | satisfies |
| 3 < fIII/f < 6.5 | 6.11986 | satisfies |
| 5 < gap I-II/f < 20 | 19.06566 | satisfies |
| 4 < gap II-III/f < 16 | 15.82323 | satisfies |
| 2 ≤ fII/|fI| ≤ 6 | 5.86982 | satisfies |

The source-published diaphragm position also falls within Claim 1's permitted axial window around System III, and the L16/L17 spherical-meniscus plus plano-parabolic arrangement matches Claim 4. The literal 15 mm L17 branch fails the first-system focal-length condition, one of the patent-internal reasons that MD04 is retained as a source correction rather than as an arbitrary model preference. [1]

These ratios intentionally use the patent's own published whole-objective focal length of 1.98 mm, because the claims define their bounds in terms of `f`. Substituting the corrected table-derived EFL of 1.955900 mm would make the second-to-third-system gap ratio about 16.018 and narrowly exceed the stated `< 16f` bound. The table-derived correction is therefore not represented as reproducing every claim ratio when a different denominator is substituted.

## Projection, Aperture, and Modeled Clear Apertures

The patent states a 197° full object field and specifically notes that the image of an object having constant angular dimension increases in size as that object moves away from the optical axis. It does not publish an image-height equation. [1]

The current data schema offers named equidistant and equisolid fisheye projections but not a stereographic or unknown-fisheye category. The data file therefore omits `projection` rather than assigning a law that the source does not establish. Under the current LensVisualizer contract, omission falls back to ordinary rectilinear projection metadata, so projection-dependent runtime interpretation is not source-faithful for this lens and remains an integration limitation. Manufacturer literature's 197° / 8.7 mm specification is consistent with the same production correlation, but it does not by itself define the exact mapping law. [2]

The patent publishes f/1.9 but not the physical diaphragm diameter. The modeled `STO` semi-diameter, 3.148125 mm, is calibrated so that the corrected paraxial system has an entrance-pupil semi-diameter of 0.514711 mm and a modeled f-number of 1.900000. Agreement with f/1.9 is therefore a calibration result, not independent evidence for the actual iris diameter.

None of the surface semi-diameters is source-published. They are construction values inferred from ray geometry and checked for positive edge thickness, actual rim slope, conic domain, shared-gap intrusion, and sampled wide-field containment. Exact meridional sampling from 0° to 98.5° in 0.5° steps attempted 33 stop-fraction samples per field; 6,328 rays were mathematically traceable and 6,250 survived the modeled apertures, with at least one physical survivor at every sampled field angle. This verifies the authored geometry at the tested samples but is not a production-render or continuum-clearance proof.

## Verification Summary

The final data revision was recomputed directly from the parsed TypeScript literal payload. Sequential height/reduced-angle tracing and a separately assembled ABCD matrix agree to machine precision.

| Quantity | Implemented result | Patent summary |
|---|---:|---:|
| Whole-objective EFL | 1.955900 mm | 1.98 mm |
| Paraxial BFL from L22 rear vertex | 9.330584 mm | 9.28 mm |
| System I focal length | -7.547147 mm | -7.710 mm |
| System II focal length | +44.300427 mm | +44.36 mm |
| System III focal length | +12.117332 mm | +12.017 mm |
| Petzval sum | -0.01011764 mm^-1 | not published |
| Signed Petzval radius | -98.8373 mm | not published |

The Group II mismatch is deliberately retained rather than hidden by changing the directly tabulated L18 prescription. The EFL, BFL, and Group I values are evaluated under the explicitly corrected L17 source branch; the raw printed 15 mm branch remains preserved separately in the audit as a failed source-model observation.

## Sources

1. Edgard Hugues, “Photographic Objectives Having a Large Angular Field,” US Patent 3,037,426, filed August 2, 1960, granted June 5, 1962. See Figure 3 (PDF p. 3), Table 3 and accompanying Example 3 text (PDF p. 5 / printed p. 4), and Claims 1-4 (PDF pp. 5-6). https://patents.google.com/patent/US3037426A/en
2. KINOPTIK / Karl Heitz, Inc., lens brochure, SUPER-TEGEA 1.9mm f/1.9 specifications: 197° on 8.7 mm diameter circle, f/1.9-f/22, fixed focus, 9.2 mm optical back focus, C-mount. Archival scan hosted by Pacific Rim Camera, brochure p. 3 / PDF index p. 2. https://www.pacificrimcamera.com/rl/00030/00030.pdf
3. KINOPTIK / Karl Heitz, Inc., lens brochure with SUPER-TEGEA C-mount and ALPA-mount drawings. Archival scan hosted by Pacific Rim Camera, brochure p. 3 / PDF index p. 2. https://www.pacificrimcamera.com/rl/01254/01254.pdf
4. OHARA Corporation, S-LAL optical-glass family catalog, including S-LAL9 reference coordinates. https://oharacorp.com/glass-type/s-lal/
5. Nikon Corporation / HIKARI, J-series Optical Glass catalog and family tables (including J-LAK9, J-SK16, and J-SF10). https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/
6. SCHOTT Advanced Optics, Optical Glass catalog/search, including N-SK16 and SF10-family reference coordinates. https://www.us.schott.com/shop/advanced-optics/en/search/
7. CDGM Glass Co., Ltd., Colourless Optical Glass catalog, current catalog family comparisons. https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
