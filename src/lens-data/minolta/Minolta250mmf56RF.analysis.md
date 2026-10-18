## Patent Reference and Design Identification

## Catalog spectral model

The catalog preserves the source index and Abbe coordinates. The following names select compatible dispersion curves for simulation; they do not identify the historical supplier, melt, or annealing state. Catalog compatibility includes tolerances and is not an exact material identification.

| Element record | Current spectral annotation |
|---|---|
| 1 | S-NSL36 spectral proxy (OHARA; light crown; patent vd 53.5 retained versus catalog 52.43; supplier unconfirmed) |
| 2 | N-BK7 spectral proxy (Schott; borosilicate crown; production supplier unconfirmed) |
| 3 | N-BK7 spectral proxy (Schott; borosilicate crown; production supplier unconfirmed) |
| 4 | N-BK7 spectral proxy (Schott; borosilicate crown; production supplier unconfirmed) |
| 5 | N-BK7 spectral proxy (Schott; borosilicate crown; production supplier unconfirmed) |
| 6 | S-TIH3 spectral proxy (OHARA; dense flint; production supplier unconfirmed) |

All six rendered element records have qualified spectral proxies (five physical blanks): S-NSL36, N-BK7 and S-TIH3. The source line is unspecified. S-NSL36 has an Abbe residual of about -1.07; source coordinates remain unchanged.


**Patent:** US 4,264,136 A
**Filed:** August 13, 1979
**Granted:** April 28, 1981
**Priority:** August 25, 1978, Japan
**Inventor:** Shuji Ogino
**Assignee:** Minolta Camera Kabushiki Kaisha
**Title:** Catadioptric lens system
**Embodiment analyzed:** Example 2, Table 2 and Figures 3–4

The model uses an explicit source-error hypothesis: Table 2 and its claim-12 repetition literally print N5 = 11.7400. Retaining that literal value gives normalized EFL 25.808518 and rear-component EFL +7.345410, incompatible with the published 100.0 and −27.15. Interpreting N5 as 1.7400 gives 99.979487 and −27.148791. The implemented value is therefore a supported modeling correction, while the literal printing remains preserved in the evidence.

The prescription is the second embodiment of Ogino's patent, scaled uniformly by 2.5 from its normalized focal length of 100 to the nominal 250 mm production class. The selected production correlation is the Minolta RF 250mm f/5.6. It is a research correlation rather than a manufacturer-confirmed attribution of this precise numerical example.

The supporting evidence is convergent but incomplete:

1. The patent names Minolta as assignee and describes a compact, wide-field catadioptric photographic system.
2. The source field is 9°40′, close to the manufacturer's advertised 10° field for the RF 250mm.
3. The scaled source image diagonal is 43.25 mm, consistent with the 35 mm still-camera format.
4. Both descriptions employ two mirrors and a compact folded path.

Two differences prevent a claim of exact production identity. Figure 4a labels the design f/4.5, whereas the production lens is f/5.6. The selected patent contains five physical glass blanks in four air-separated groups; the Minolta brochure describes six elements in five groups, together with two mirrors. The brochure's integral lens-element filter could contribute to that difference, but that explanation is unconfirmed. No filter has been added to the patent prescription.

The data therefore separates the marketed 250 mm and f/5.6 values from the computed design focal length, approximately 249.949 mm, and the source design aperture f/4.5. The Minolta SR mount and 135 full-frame metadata describe the selected production correlation, not a mount definition in the patent. A primary-source production release date has not been established.

## Optical Architecture

Example 2 is a catadioptric system with a positive front meniscus, two substrate-backed mirrors, and a negative rear refractive component. Its optical imaging sequence is:

- L1 front collector
- M1 annular primary substrate, rear reflection, and return through its front face
- M2 secondary substrate, reflection at its object-side coated face, and exit through its image-side face
- The clear central part of the M1 blank
- The cemented L4–L5 rear doublet

Both reflectors are second-surface mirrors: rays refract into glass before meeting the coating. Treating them as bare first-surface reflectors would remove real refractive power and change the prescription. The patent explicitly uses negative distances and indices during return propagation, and primes identify repeated encounters with a physical surface (PDF pages 6–7, printed columns 2–3).

The data's listed order describes physical stations rather than optical encounter order. It starts with the inferred stop and L1, then the secondary, the central primary region, the annular primary region, and the rear doublet. The negative 4 mm displacement from CB back to M1F resets the station list to the front of the annular zone. It is not a negative glass thickness or an additional ray segment.

M1 is represented by two complementary rendered entries. M1 is the annular silvered shell; L3 is the clear central plug of the same blank. They share radii, axial stations, index and Abbe value. Their radial ranges meet at 14 mm without a vacant ring. Thus six model entries represent five physical blanks, not six independent lens elements.

The rear refractive component includes the clear primary pass as well as the rear doublet. Its scaled first-order focal length is approximately −67.872 mm. It must not be confused with the isolated rear doublet or with the refractive power of any one element.

## Element-by-Element Analysis

### L1 — Positive meniscus, convex toward the object

nd = 1.51760, νd = 53.5. Glass: S-NSL36 spectral proxy (source coordinates retained). Standalone refractive f = +446.357 mm.

The front meniscus is the first glass encountered by the incoming beam. The patent identifies it as a positive single lens. Its substantial difference between front and rear curvature gives positive refractive power while keeping a meniscus form. No specific isolated aberration correction is assigned to it from the power sign alone.

The native glass coordinate is retained. S-NSL36 is compatible within the catalog proxy tolerance but differs in Abbe number; it is not a supplier identification.

### M2 — Positive-meniscus secondary, second-surface reflection

nd = 1.51680, νd = 64.1. Glass: Borosilicate crown class. Standalone refractive-pass f = +193.390 mm.

M2 lies near the front of the physical system but is reached by the intended imaging ray only after reflection from M1. The returning beam enters M2F, reflects at M2B, and exits again through M2F. The focal length above refers to the isolated transmissive meniscus; it is not the focal length of its complete reflecting encounter or an in-situ power contribution.

The coated object-side surface is active for the returning beam. Its inactive side blocks incident central light. The inferred 14 mm secondary semi-diameter therefore influences both the returning bundle and the incoming central obstruction. The patent does not provide its physical diameter.

### M1 / L3 — Annular primary mirror and clear central refractive region

nd = 1.51680, νd = 64.1. Glass: Borosilicate crown class. Standalone refractive-pass f = −354.898 mm.

The main mirror is a negative meniscus whose image-side coating faces the object. The incoming annular bundle enters M1F, reflects at M1B, and returns through the front of the same blank. The large-scale focusing action of this encounter includes reflection; the negative standalone transmissive focal length does not imply a negative focal length for the complete mirror system.

The axial beam returning from M2 subsequently crosses the clear central region, labeled CF and CB. These are the same geometrical faces as the primary shell, without the reflective coating in the central disk. The clear region belongs to the rear negative component LR described by the patent. It is not a separate cemented insert or a fabricated sixth physical element.

A ray near the annular boundary can cross the central front zone on its return journey. Automatic physical traversal is used so that this crossing remains a refraction even when its surface label changes from M1F to CF. Only the initial STO hit is mandatory. After that one-entry prefix, mode="auto" discovers the physical optical path. The model does not require all rays to follow one invariant list of lens-surface labels.

### L4 — Negative member of the rear cemented doublet

nd = 1.51680, νd = 64.1. Glass: Borosilicate crown class. Standalone refractive f = −59.989 mm.

L4 is biconcave and supplies negative standalone refractive power. It follows the clear central pass through M1. Its rear surface is the cemented junction with L5. At that junction the implemented medium and element ownership change directly to L5; no synthetic cement layer is present.

The published negative LR power is a property of the compound rear component, not a direct statement of L4's isolated contribution. Separation and coupling to the central primary pass matter to that compound value.

### L5 — Positive member of the rear cemented doublet

nd = 1.74000, νd = 28.3. Glass: Dense flint class. Standalone refractive f = +204.024 mm.

L5 is biconvex, with a comparatively weakly curved cemented front face and a more strongly curved rear face. Its high-index, lower-Abbe glass is paired with the crown-like L4 material. The pairing supplies dispersion contrast, but the patent's index/Abbe coordinates alone do not establish anomalous partial dispersion or apochromatic performance.

The stated nd = 1.74000 implements the explicit N5 source-typo hypothesis described above; it is not the literal printed cell.

Its rear face is the final source optical surface r9. The computed paraxial back focal distance is approximately 42.581 mm measured from this rear vertex. That distance is independent of the optional inferred stop offset at the front.

## Glass Identification and Selection

The patent prints N and ν without explicitly naming the reference wavelength. The d-line interpretation is an inference from the historical coordinates and catalog comparisons; the native values are not converted or replaced.

Three glass coordinates occur:

- L1, 1.5176/53.5: qualified S-NSL36 spectral proxy. Current OHARA S-NSL36 is approximately 1.51742/52.43, a meaningful Abbe mismatch rather than an exact identification. HOYA E-CF6 and HIKARI J-KF6 are also comparison candidates only.
- M1, M2, L3 and L4, 1.5168/64.1: borosilicate crown class. SCHOTT N-BK7 and HIKARI J-BK7A occupy nearby coordinates. OHARA S-BSL7 and L-BSL7 have different indices and are not interchangeable identifications for this source.
- L5, 1.7400/28.3: dense flint class. CDGM H-ZF5 reproduces the displayed coordinates; OHARA S-TIH3 and historical HOYA FD3 are also close candidates. Coordinate agreement does not establish the manufacturer or melt actually used.

All six available project vendor catalog families were screened: OHARA, HOYA, SCHOTT, HIKARI, CDGM and Sumita. Primary OHARA, SCHOTT and CDGM material was rechecked for the relevant comparisons. This is not a claim to have freshly retrieved every complete vendor catalog. Historical availability and melt differences remain unresolved.

No nC, nF, ng, partial-dispersion deviation or supplier Sellmeier curve is assigned to the patent glasses. Consequently, the analysis does not claim quantitatively verified chromatic or APO performance.

## Focus Mechanism

The focus disposition is NO_INTERNAL_RECONSTRUCTION. Table 2 supplies one design prescription and no internal-motion law, finite-conjugate spacing table or measured focus travel. Every authored spacing is therefore fixed at the published infinity configuration.

The complete patent, printed columns 7–8, expressly places the actual useful focal plane behind the paraxial plane and explains that zonal-to-marginal rays form the image because the center is obscured. That paragraph is missing from the supplied ten-page PDF but was visually checked in the separately retrieved eleven-page patent scan. No numerical focus offset is published. The implemented image plane is therefore a paraxial reference, not a reconstruction of the patent's actual best-focus plane; no arbitrary axial shift is introduced.

The manufacturer's 2.5 m minimum focus distance is retained only as product metadata. It is not evidence for which lens groups move, their travel, or the conjugate accuracy of this model at that distance. No reconstructed close-focus state is presented.

All source optical surfaces are spherical. There is no asphere equation, conic conversion, diffractive phase or aspheric departure claim in this embodiment.

## Conditional Expressions

The four patent inequalities are evaluated from the selected Table 2 values, not from a sibling example (PDF page 7, printed column 3):

1. 0.5 < L/D < 1.5. Example 2 gives L/D ≈ 0.786127.
2. 0.27 < R3R4/[f(R4 − 3R3)] < 0.9. The result is approximately 0.398492.
3. 0.25 < R5R6/[f(R6 − 3R5)] < 0.8. The result is approximately 0.337574.
4. 0.15 < −fR/f < 0.7. The computed result is approximately 0.271488.

All four are satisfied. The normalized rear-component calculation gives −27.148791, consistent with the printed −27.15 at its stated precision. The inequalities constrain architecture and shape; they do not establish a complete modern image-quality assessment.

## Folded / Mirror Path Verification

The numerical model uses signed Gaussian transfer matrices and a separate sequential height/reduced-angle calculation for the published path. Negative source indices are retained in that mathematical representation, while the application data stores positive physical media with reflective interactions. The implemented-model calculation derives its nominal encounter sequence from an actual physical trace of the completed data file.

The scaled paraxial EFL is 249.948718 mm. The back focal distance from r9 is 42.581444 mm, and the global distance from r1 to the paraxial image is 96.881444 mm. The explicit paraxial reference plane is at z = 97.131444 mm in the model's coordinate frame because the inferred stop is 0.25 mm ahead of r1. It does not claim the patent's undimensioned actual useful focal plane. Folded travel distance is distinct from this global extent.

The stop's inferred outer semi-diameter, 27.772080 mm, is calibrated from the design f/4.5. Its single-entry mandatory STO prefix enforces this aperture before automatic optical traversal; a bare same-index stop in unrestricted auto mode would otherwise be skipped. It is not an independently measured diaphragm. The aperture is annular after central obstruction, so this geometric f-number is not a transmission measurement or an area-equivalent T-stop.

The inferred radial model uses 30 mm front semi-diameters; a primary annulus from 14 to 26 mm; a 14 mm clear primary center; a 14 mm secondary; and 12.2 mm rear-doublet semi-diameters. These choices are geometrical modeling assumptions, not recovered production dimensions. Exact vector refraction and reflection are used to check representative on-axis and off-axis rays.

Production-engine samples at signed fields through ±4.8° retain the intended two-mirror imaging branch. Additional direct and multiple-bounce paths also reach the image plane, and some rays miss the rear group; the historical draft ray counts do not describe the revised rims. The patent does not specify a complete baffle system, and none has been invented to suppress those paths. This model therefore demonstrates the intended optical branch without claiming production stray-light rejection, full-field throughput or uniform illumination.

The physical automatic traversal completed that sample without intersection failures. An independent audit repeated those 603 samples, added 2,005 symmetric meridional and 202 skew samples, and tested the stop edge including 0.01, 0.1 and 1 mm outside it. The enforced stop rejects the outside-stop probes, while the original in-pupil outcomes are unchanged. These additional samples also produced no terminal intersection failures. Production geometry validation and element-render diagnostics required no semi-diameter trim. A separate portable nearest-hit spherical/vector calculation reproduces representative physical paths and the nominal source prescription. Finite ray sampling does not prove every pupil point or every possible optical path.

## Sources

1. Shuji Ogino, Minolta Camera Kabushiki Kaisha, [US 4,264,136 A, “Catadioptric lens system”](https://patents.google.com/patent/US4264136A/en), granted April 28, 1981. Supplied original PDF: page 1 identity; page 3 Figures 3–4; pages 6–7 conventions and conditions; page 8 Table 2.
2. [Complete eleven-page US4264136A scan](https://patentimages.storage.googleapis.com/42/47/46/843789ddd0fb66/US4264136.pdf), page 9, printed columns 7–8, supplies the actual-versus-paraxial-focus discussion missing from the supplied PDF.
3. Minolta, [SLR System brochure, MD-era archival scan](https://minolta.suaudeau.eu/ressources_iconographiques/system_SLR_MD1.pdf), printed page 27, RF 250mm f/5.6 specifications. Exact publication edition is undetermined.
4. OHARA, [S-NSL36 detailed glass data](https://www.ohara-inc.co.jp/assets/en/product/pdf/esnsl36.pdf), comparison coordinate only.
5. SCHOTT, [N-BK7 optical glass datasheet](https://media.schott.com/api/public/content/41e799d0bf874807a0bb8e702fbb75b5?v=54856406), comparison coordinate only.
6. CDGM, [optical-glass database](https://www.cdgmgd.com/database/toWebDatabase.htm?pageIndex=2&typeId=14&url=database), H-ZF5 row and S-TIH3 comparison.
