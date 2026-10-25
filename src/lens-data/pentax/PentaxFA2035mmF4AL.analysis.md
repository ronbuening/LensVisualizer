# PENTAX SMC FA 20-35mm f/4 AL

## Patent Reference and Design Identification

**Patent:** US 6,246,529 B1  
**Inventor:** Takayuki Sensui  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha  
**Filed:** 1999-10-26  
**Granted:** 2001-06-12  
**Priority:** 1998-10-26  
**Title:** Wide-angle zoom lens system  

The numerical source is Table 5 (Example 5) in the grant, PDF page 19, printed column 8, with aspheric coefficients continuing on PDF page 20. The source identity matters: its surface-7 spacing is 14.851 mm at wide and 1.200 mm at tele. Values from a related publication are not interchangeable with these rows.

The association with the production FA 20–35mm F4 AL is supported by the convergent focal range, f/4 aperture, ten physical elements in eight air-separated groups, and two aspherical elements including a hybrid element. Ricoh's product page independently describes those production features and floating zoom. The example's exact production identity is not manufacturer-confirmed. The patent dates are not a verified product-release date. The current manufacturer's 70–44° view-angle range is presented for a digital format and is not the source's full-frame half-field range of 47.8–32.6°.

The numerical model keeps the two printed infinity stations, 20.60 and 34.01 mm, unchanged. Positions between them follow an inferred path. D10 and the image distance change linearly between the stations, and D7 is solved at each position for infinity focus. The patent describes a first-group reversal but does not publish enough numerical stations to recover that trajectory. The inferred path is one solution among many. Intermediate shapes, group positions and displayed focal lengths must not be read as a reconstruction of the production zoom cam.

## Optical Architecture

The three functional groups have negative–positive–positive power. G1 spans surfaces 1–7 and has computed standalone focal length −25.289 mm; G2 is the cemented pair at 8–10, +93.811 mm; G3 spans 11–19A, +43.180 mm. These are group powers in air at the d-line. The front negative group and relatively long rear clearance are characteristic of a retrofocus wide-angle architecture. Group sign alone does not establish a particular aberration contribution.

There are ten physical lens elements and eight air-separated groups. Eleven material entries are necessary because the glass substrate L2 and its resin layer L2R have different indices. Surface 4 is their shared material boundary; 5A is the aspheric resin-to-air boundary. Collapsing these two media would change the prescription. The other cemented pairs are L4/L5 and L7/L8.

With the image plane used as the fixed reference, the endpoint front-vertex displacements are +4.486 mm for G1, −9.165 mm for G2 and −16.250 mm for G3, with positive direction toward the image. These are endpoint differences only. The source says G1 first moves toward the image and then reverses toward the object near tele (PDF page 17, column 3; Figure 25 on PDF page 15). Figure 25 has W/T labels and a schematic trajectory, without dimensional intermediate constraints. The inferred path produces a reversal of this kind. G1 travels 4.685 mm toward the image by about 31.1 mm focal length, then returns 0.199 mm toward the object by tele. The location and size of that turn follow from the linear D10 and image-distance laws, not from patent data.

Because D7 is solved for focus, every intermediate position stays at infinity focus. The image-plane offset from the computed back focus only carries the printed endpoints' rounding residual, which runs from −0.009 mm at wide to +0.001 mm at tele. The path may have slope corners, so it is a continuous visualization path, not a mechanically smooth cam. Intermediate focal-length labels are the computed EFLs of the prescription at each position.

## Element-by-Element Analysis

The focal lengths below are calculated for each material segment as an isolated thick lens in air using its printed front and rear curvatures. For a cemented pair or the hybrid layer, these are descriptive component powers, not the net assembly power or its in-situ aberration contribution. All values use the data file, with paraxial power taken at the d-line.

### L1 — Negative Meniscus

nd = 1.77250, νd = 49.6. Glass: OHARA S-LAH66 catalog equivalent; production supplier unspecified. f = -35.1 mm.

The first negative meniscus starts G1. Its rear surface is more strongly curved than its front surface, giving negative standalone power. The inferred optical clear radius excludes the non-optical blank rim shown schematically; neither the patent nor the product page supplies a clear-aperture measurement for this surface.

### L2 — Negative Meniscus

nd = 1.80400, νd = 46.6. Glass: OHARA S-LAH65V catalog equivalent; production supplier unspecified. f = -47.2 mm.

This negative meniscus is the glass substrate of the hybrid element. It remains a separate material segment from L2R. The shared interface at surface 4 refracts from substrate into resin rather than into air, so its isolated air power is not the power of the bonded assembly.

### L2R — Negative Meniscus

nd = 1.53256, νd = 45.9. Glass: Unmatched (patent resin; supplier unconfirmed). f = -183.8 mm.

The 0.280 mm axial resin layer carries aspheric surface 5A. Its printed index and Abbe number are retained without assigning a catalog glass or polymer brand. The quoted standalone power is a mathematical air-bounded comparison; the layer is physically bonded to L2. The aspheric departures affect off-axis and finite-height tracing, while the listed paraxial power depends on vertex curvatures.

### L3 — Positive Meniscus

nd = 1.84666, νd = 23.8. Glass: OHARA S-TIH53 catalog equivalent; production supplier unspecified. f = +76.9 mm.

This positive meniscus completes G1. Its positive component power partially offsets the preceding negative components, while the assembled group remains negative. The variable air gap immediately after surface 7 separates G1 from G2.

### L4 — Biconvex Positive

nd = 1.51742, νd = 52.4. Glass: OHARA S-NSL36 catalog equivalent; production supplier unspecified. f = +33.0 mm.

The positive biconvex member begins the G2 cemented pair. Its relatively lower index and higher Abbe number contrast with L5. The actual shared surface at 9 must be counted once when computing the pair; summing isolated element focal lengths would not give its net power.

### L5 — Negative Meniscus

nd = 1.80400, νd = 46.6. Glass: OHARA S-LAH65V catalog equivalent; production supplier unspecified. f = -50.2 mm.

The negative meniscus is cemented to L4 and completes G2. The paired index/Abbe contrast provides a conventional chromatic balancing degree of freedom, but no isolated aberration budget is available. G2 remains weakly positive as an assembly. Surface 10 is followed by the variable gap to the physical stop.

### L6 — Plano-convex Positive

nd = 1.61772, νd = 49.8. Glass: OHARA S-BSM28 catalog equivalent; production supplier unspecified. f = +53.8 mm.

The plano-convex positive element lies immediately behind the stop, with the printed 1.700 mm stop-to-surface-11 distance retained. Its positive power is part of G3; its location near the stop alone does not establish a unique correction assignment.

### L7 — Biconvex Positive

nd = 1.48749, νd = 70.2. Glass: OHARA S-FSL5 catalog equivalent; production supplier unspecified. f = +26.0 mm.

This biconvex positive member is cemented to L8. Its relatively low index and high Abbe number distinguish it from the dense, more dispersive negative partner. The pair is one air-separated group, with the common boundary at surface 14.

### L8 — Biconcave Negative

nd = 1.80610, νd = 40.9. Glass: OHARA S-LAH53 catalog equivalent; production supplier unspecified. f = -25.5 mm.

The negative component shares surface 14 with L7. Its large negative isolated power nearly balances the positive component at the level of standalone powers, but the actual compound power must include the common interface and thicknesses. Neither secondary-spectrum performance nor a supplier identity follows from these two coordinates.

### L9 — Negative Meniscus

nd = 1.84666, νd = 23.8. Glass: OHARA S-TIH53 catalog equivalent; production supplier unspecified. f = -49.4 mm.

This negative meniscus is a separate air-spaced member within G3. It shares L3's patent coordinate and catalog equivalent, which does not establish a shared melt or supplier. It precedes the final aspheric element and contributes another negative-power degree of freedom within the net positive rear group.

### L10 — Positive Meniscus

nd = 1.58913, νd = 61.2. Glass: HIKARI J-SK5 catalog equivalent; production supplier unspecified. f = +44.0 mm.

The positive meniscus terminates the optical train. Its rear surface 19A carries the second asphere; the published back focal distance is measured from that vertex to the image plane. The model does not treat the blank D19 table entry as zero spacing.

## Glass Identification and Selection

The patent prints only nd and νd. Each glass is labelled with a catalog glass that matches its printed coordinate to the printed precision. The label names a dispersion model, not the production supplier or melt. OHARA supplies a match for every glass entry except L10. There, OHARA's nearest glass S-BAL35 (νd 61.14) does not round to the printed 61.2, so HIKARI J-SK5 (νd 61.22) is used. The hybrid resin has no catalog match.

| Material entries | Patent nd | Patent νd | Catalog equivalent | Catalog νd |
|---|---:|---:|---|---:|
| L1 | 1.77250 | 49.6 | OHARA S-LAH66 | 49.60 |
| L2, L5 | 1.80400 | 46.6 | OHARA S-LAH65V | 46.58 |
| L2R | 1.53256 | 45.9 | Unmatched hybrid resin | — |
| L3, L9 | 1.84666 | 23.8 | OHARA S-TIH53 | 23.78 |
| L4 | 1.51742 | 52.4 | OHARA S-NSL36 | 52.43 |
| L6 | 1.61772 | 49.8 | OHARA S-BSM28 | 49.82 |
| L7 | 1.48749 | 70.2 | OHARA S-FSL5 | 70.24 |
| L8 | 1.80610 | 40.9 | OHARA S-LAH53 | 40.93 |
| L10 | 1.58913 | 61.2 | HIKARI J-SK5 | 61.22 |

The L4/L5 and L7/L8 pairs combine positive and negative components with differing dispersion. This is consistent with chromatic balancing, but individual chromatic contributions have not been isolated. The chromatic views use the dispersion formulas of the named catalog glasses. The resin layer falls back to an Abbe-number approximation from its printed nd and νd. The source's aberration diagrams label d, g and C lines without printing wavelengths. The values d 587.6, C 656.3, F 486.1 and g 435.8 nm are the usual conventions. No apochromatic or anomalous-dispersion performance claim is made.

## Focus Mechanism

The source provides infinity-focus spacings at the two zoom stations only, so focusing is not modeled. The data's 0.3 m close-focus distance is Ricoh's marketed minimum focus distance, recorded for display. Ricoh also gives a 0.16× maximum magnification. Neither number supplies internal close-focus spacings, so every focus setting shows the infinity geometry and no focus travel is reconstructed.

Across the zoom range D7 changes from 14.851 to 1.200 mm, D10 from 8.485 to 1.400 mm and the image gap from 36.90 to 53.15 mm. The stop-to-surface-11 gap stays at 1.700 mm. Between the stations, D10 and the image gap follow linear laws and D7 is solved for infinity focus. That path is not unique given only two printed stations.

## Aspherical Surfaces

The patent writes the conic radical using 1 + K, so its K maps directly to the app's conic convention. With radial height h in mm and vertex curvature C = 1/R, the sag is the conic sag plus A4 h⁴ + A6 h⁶ + A8 h⁸; unlisted coefficients are zero (PDF page 17, column 4; Table 5 continuation, PDF page 20, column 9).

| Surface | Element | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) |
|---|---|---:|---:|---:|---:|
| 5A | L2R, resin layer | −1.00 | −0.9670e−5 | −0.1870e−7 | −0.8470e−10 |
| 19A | L10 | 0.00 | +0.2530e−5 | −0.6230e−8 | −0.2970e−9 |

At the inferred 14 mm radius of 5A, the polynomial terms lower sag by 0.637284 mm relative to its K = −1 conic base. At the inferred 7.9 mm radius of 19A, their net contribution is +0.003834 mm relative to its spherical base. These are computed geometric departures at inferred clear radii, not published manufacturing tolerances or a measured aberration improvement. The source and manufacturer description support a hybrid asphere and a glass-molded asphere, without identifying resin chemistry or a catalog melt.

## Conditional Expressions

The source specifies 0.36 < (D2S − D2L)/(fL − fS) < 0.7 and 0.25 < f23S/f2 < 0.5. Here D2 includes D10 and the fixed stop-to-next-element gap, which cancels in the endpoint difference. The calculated values are 0.528337 and 0.360026, respectively; both strict inequalities pass.

The first printed summary is 0.529. The computed value differs from it by −0.000663, more than the ±0.0005 rounding of a three-decimal figure, so the table does not reproduce the summary literally. Letting each printed input vary within its rounding gives an interval of [0.527869, 0.528806], which overlaps the printed summary's interval. A prescription perturbed within every printed half-unit can match both endpoint EFL/BFD summaries and this condition at once, giving 0.528510. The summary is therefore numerically compatible with Table 5, though this does not recover the unrounded design. The second summary, 0.360, agrees within the same rounding rule.

## Model Limits and Ray Checks

The computed paraxial EFLs at the two printed stations are 20.603 and 34.011 mm. The BFDs from surface 19A are 36.909 and 53.149 mm, against printed image gaps of 36.90 and 53.15 mm. Those small differences are within the printed precision, and the inferred path interpolates them between the stations.

No surface semi-diameters or physical iris diameter are published. The clear radii are estimated from the rims drawn in Figures 17 and 19, floor-checked against the exact full f/4 axial beam and the source and format-corner chief rays at every zoom position. They stay within the valid spherical and aspheric domains and the default 0.90 gap-sag limit. The cemented G2 pair follows the drawing at a single 8.9 mm radius. L6 (9.0 mm), the L7/L8 pair (8.7 mm) and L9 (7.1 mm) are drawn slightly smaller than the f/4 telephoto axial beam, so their single radii sit on that beam. Front surface 1 has a 17.6 mm clear radius. Surface 2 has 14.3 mm, where the drawing ends L1's concave rear face at a flat flange step. L10 keeps separate front and rear radii of 7.5 and 7.9 mm. The app derives the iris from the design f/4: it traces the f/4 entrance-pupil radius at each station to the stop, giving inferred iris radii of 6.781 mm at wide and 8.753 mm at tele, interpolated between. This is an aperture model, not a recovered mechanical iris schedule.

The app's default rays use six axial and five off-axis pupil fractions, with the off-axis fan at 0.6 of the half-field. Its half-field estimate at wide is 40.32°. That figure is a paraxial bound set by the surface-2 rim; the exact chief ray at the patent's 47.8° still clears that surface at 13.10 mm. Across 21 zoom positions every default axial ray transmits, and no default ray first clips at a cemented interface. From about 28 mm to tele, one off-axis default ray per position first clips at the exterior rim of surface 16.

Separate source-field checks aim the chief ray through the stop centre at 0, 60 and 100 % of each printed half-field, 47.8° at wide and 32.6° at tele, and add the five default off-axis offsets. At wide, 5/5 rays survive at 60 % and 3/5 at 100 %; at tele, 4/5 survive at both. The full-field chief survives at both stations. This is modeled vignetting from inferred rims, not a measured production value. Both full f/4 axial boundary rays and the format-corner chief rays clear every rim at every zoom position. The app's full-frame format uses a 43.3 mm diagonal, a 21.65 mm corner radius, slightly more than the 21.63 mm of an exact 36×24 mm frame. Its corner fields at the two stations are 47.83° and 32.66°, solved from the geometry.

## Sources and References

1. [US 6,246,529 B1, Wide-angle zoom lens system](https://patents.google.com/patent/US6246529B1/en). PDF 1: bibliographic record; PDF 11–12: Figures 17/19 and corresponding endpoint aberration diagrams; PDF 15: Figure 25 motion sketch; PDF 16–17: conditions, group motion and conventions; PDF 19–20: Table 5 prescription/aspheres and Table 7 condition summaries.
2. [Ricoh Imaging, smc PENTAX-FA 20–35mm F4 AL](https://www.ricoh-imaging.co.jp/english/products/lens/k/wide/smcpentax-fa20-35/), reviewed 2026-10-03. Production specifications and construction description support correlation, not exact numerical identity.
3. OHARA and HIKARI optical-glass catalog data for the catalog-equivalent labels in the glass table. These supply dispersion models only. The patent nd and νd values remain authoritative, and the production suppliers are not established.
