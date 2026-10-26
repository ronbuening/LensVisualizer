## Patent Reference and Design Identification

**Patent:** JP 2706781 B2  
**Application Number:** JP S63-190032  
**Filed:** 29 July 1988  
**Registered:** 17 October 1997  
**Published:** 28 January 1998 (B2); earlier application JPH0239116A published 8 February 1990  
**Inventors:** 松尾 栄樹; 皆川 博幸; 小川 潤  
**Assignee:** Kyocera Corporation  
**Title:** ズームレンズ (Zoom lens)  

The numerical authority is the complete B2 publication, whose prescription spans PDF pages 2–3. The earlier A publication is a separate reading witness. B2 prints the index header as “nb” beside νd; A page 3 explicitly labels the matching table “nd.” All 23 surface rows and twelve index/Abbe pairs agree. The data therefore interpret the coordinates as d-line values while preserving the header discrepancy. No numerical source entry is repaired.

The association with the Yashica Samurai Z is inferred from convergent evidence rather than a manufacturer statement identifying this patent as the production recipe:

1. The Samurai Z/Z-L instruction manual specifies 12 elements in 10 groups. The selected prescription has the same 12/10 construction, including a front cemented pair and a negative/positive middle pair.
2. The manual specifies a 17 × 24 mm film frame and a fixed lens, consistent with the prescription's intended format. A previously cited manufacturer camera section informed the inferred proportions: a large front pair plus singlet, a compact middle assembly and five separate rear elements. No independently accessible Z construction drawing confirms these dimensions.
3. Marketed 25–75 mm f/4–5.6 agrees closely with the native 25.78–73.05 mm F4–5.6 range. No uniform scaling is applied.
4. The manufacturer newsletter documents the new Samurai Z in October 1989, after the 1988 filing and before the 1990 application publication. The later B2 date is not the product introduction date.

The Samurai Z-L is the left-handed counterpart. The earlier Samurai X3.0 is not the selected product: its 14/13 construction and F3.5–4.3 maximum aperture differ. Correspondence does not establish identical production radii, coatings, glass melts or manufacturing apertures.

The manufacturer gives a 17 × 24 mm film frame and a fixed, integrated lens. The model's half-frame 135 format uses a nominal 18 × 24 mm rectangle. The manufacturer's narrower 17 mm frame dimension remains explicit and determines the intended image coverage.

## Optical Architecture

This is a positive–negative–positive three-group zoom. The first and third functional groups travel together, while the negative middle group moves independently. Twelve glass elements form ten air-separated components; “three groups” here refers to moving functional assemblies, not the commercial 12/10 count.

| Functional assembly                 | Source surfaces | Elements | Standalone equivalent focal length |
| ----------------------------------- | --------------- | -------- | ---------------------------------: |
| G1, positive front assembly         | S1–S5           | L1–L3    |                         +51.214 mm |
| G2, negative variator               | S6–S12          | L4–L7    |                         −13.385 mm |
| G3, positive rear assembly and stop | S13–S23         | L8–L12   |                         +22.953 mm |

S13 is the plane stop; its 1 mm separation from S14 is printed. The patent includes the shutter/stop in G3. The source claims that G1 and G3 move objectward together from wide to tele and that G2 also moves objectward, independently. Numerically, d5 changes 1.000→12.779 mm while d12 changes 12.767→0.988 mm. Their sum stays 13.767 mm, preserving the G1-to-G3 separation. The first-to-last optical vertex spacing is 52.237 mm at both endpoints.

The calculated wide EFL is 25.820607793 mm and its paraxial in-air BFD is 41.566464945 mm. Thus the wide configuration meets the back-focus criterion for retrofocus behavior. At tele, EFL 73.063940605 mm exceeds BFD 62.779463952 mm. Neither endpoint is a telephoto layout by the total-track criterion: the modeled first-surface-to-image tracks 93.637 mm and 114.937 mm exceed their respective EFLs. These terms describe the calculated geometry, not marketing classes.

All 22 refracting surfaces are spherical. There are no source asphere coefficients, sensor-cover plates or folded taking-ray paths. The camera's reflex/viewfinder mirrors are mechanical viewing-system components, not additional powered surfaces in the taking-lens prescription.

## Element-by-Element Analysis

The focal lengths below are thick-element equivalents with each element isolated in air. A cemented member's standalone power is not its in-situ contribution. Catalog classes and spectral proxies are explained separately below; none identifies a production supplier.

### L1 — Negative Meniscus

nd = 1.80518, νd = 25.4. Glass: K-SFLD6 (SUMITA catalog-equivalent class; supplier unconfirmed). f = -66.459 mm.

The first element is an object-convex negative meniscus, cemented to L2. Its high index and low Abbe number contrast with the weaker-dispersion partner. The pair is net positive when isolated in air, with equivalent focal length +136.657 mm. This sign follows calculation; it must not be inferred from the first member alone.

### L2 — Biconvex Positive

nd = 1.53172, νd = 48.9. Glass: LLF6 (SUMITA catalog-equivalent class; supplier unconfirmed). f = +45.478 mm.

L2 is the positive biconvex partner at shared surface S2. The junction belongs to L2's medium in the surface table. Its lower index and higher Abbe number relative to L1 provide a conventional refractive/dispersion contrast, but the patent does not allocate a separately measured chromatic correction to each member.

### L3 — Positive Meniscus

nd = 1.48749, νd = 70.1. Glass: FSL5 (OHARA catalog-equivalent class; supplier unconfirmed). f = +82.618 mm.

The air-separated crown meniscus completes G1. Both radii are positive, with stronger curvature on the object-facing side. Its positive standalone power strengthens the front assembly beyond the relatively weak cemented pair. The high Abbe number makes it the least dispersive coordinate in this prescription, without establishing an APO or special-glass marketing claim.

### L4 — Negative Meniscus

nd = 1.83400, νd = 37.2. Glass: LASFN14 (SUMITA catalog-equivalent class; supplier unconfirmed). f = -17.166 mm.

The front G2 singlet is a negative meniscus with the stronger curvature facing the image. This shape is explicitly described in the B2 construction prose on page 2. It precedes the central cemented negative/positive pair, rather than a second independent moving group.

### L5 — Biconcave Negative

nd = 1.60342, νd = 38.0. Glass: F5 (SUMITA catalog-equivalent class; supplier unconfirmed). f = -12.856 mm.

The biconcave negative member starts the middle doublet at S8. Its nd=1.60342 is the n8 constrained below 1.75 by the patent. The text connects this condition to compensating aberration introduced by cementing the two middle lenses; the glass coordinate satisfies the condition directly.

### L6 — Biconvex Positive

nd = 1.84666, νd = 23.9. Glass: SFLDN3 (SUMITA catalog-equivalent class; supplier unconfirmed). f = +10.488 mm.

L6 is the high-index biconvex positive member, entered at the cemented S9 interface. Together L5/L6 form a net positive component, calculated at +46.328 mm in air. G2 remains negative because the surrounding negative singlets and their separations outweigh that positive pair. The patent's rationale emphasizes reduced sensitivity to relative spacing and centering when these middle elements are cemented.

### L7 — Negative Meniscus

nd = 1.83400, νd = 37.2. Glass: LASFN14 (SUMITA catalog-equivalent class; supplier unconfirmed). f = -29.598 mm.

The final G2 element is an image-convex negative meniscus, with the more strongly curved surface facing the object. It completes the source's negative–negative–positive–negative element sequence. Its glass coordinates repeat those of L4, but no shared melt or supplier is implied.

### L8 — Biconvex Positive

nd = 1.59270, νd = 35.3. Glass: E-F16 (HIKARI catalog-equivalent class; supplier unconfirmed). f = +25.503 mm.

L8 is the first positive rear singlet, 1 mm behind the source stop. Its positive front curvature is substantially stronger than its negative rear curvature. The patent describes the first two rear positives as facing their stronger curvature toward the object; this row satisfies that description.

### L9 — Biconvex Positive

nd = 1.56883, νd = 56.3. Glass: E-BAK4 (HIKARI catalog-equivalent class; supplier unconfirmed). f = +39.935 mm.

The second positive rear singlet has a very weakly curved rear surface at R17=−435.979 mm. It is not a plane. The following 0.5 mm air space and L10's object-facing concavity impose the most important clear-radius constraint in the inferred geometry. The model retains both literal radii and that gap.

### L10 — Biconcave Negative

nd = 1.80518, νd = 25.4. Glass: K-SFLD6 (SUMITA catalog-equivalent class; supplier unconfirmed). f = -14.110 mm.

L10 is the thick biconcave flint, with 6 mm center thickness d18. The patent explicitly assigns this thickness a coma-correction role and constrains d18/f3. This is source-backed design intent; the present model does not claim an isolated numerical coma budget for L10. Its index/Abbe pair repeats L1's dense-flint coordinate.

### L11 — Positive Meniscus

nd = 1.51112, νd = 60.5. Glass: K7 (SUMITA catalog-equivalent class; supplier unconfirmed). f = +42.990 mm.

L11 is a positive meniscus with a weak concave front and a stronger convex rear facing the image. It follows the thick negative element and precedes the final positive singlet. The numerical front curvature is finite at −1011.23 mm, so it is modeled as weakly curved rather than silently flattened.

### L12 — Biconvex Positive

nd = 1.51112, νd = 60.5. Glass: K7 (SUMITA catalog-equivalent class; supplier unconfirmed). f = +41.010 mm.

The final biconvex positive singlet shares L11's index/Abbe coordinate. S23 is the last glass/air interface, and its following distance is the source's 41.4/62.7 mm image gap. No extra plate or rear optical element is introduced to remove the small residual defocus.

## Glass Identification and Spectral Scope

Nine distinct coordinates were compared against OHARA, HOYA, SCHOTT, HIKARI, SUMITA and CDGM catalogs. The choices below are coordinate-compatible classes, independent of the camera brand. Historical and modern OHARA prefixes remain distinct.

| Elements | Native nd / νd | Adopted equivalent class | Interpretation                                        |
| -------- | -------------- | ------------------------ | ----------------------------------------------------- |
| L1, L10  | 1.80518 /25.4  | SUMITA K-SFLD6           | Dense-flint class                                     |
| L2       | 1.53172 /48.9  | SUMITA LLF6              | Low-index light-flint class                           |
| L3       | 1.48749 /70.1  | OHARA legacy FSL5        | Low-dispersion crown class; not an S-prefix assertion |
| L4, L7   | 1.83400 /37.2  | SUMITA LASFN14           | High-index lanthanum-flint class                      |
| L5       | 1.60342 /38.0  | SUMITA F5                | Flint class                                           |
| L6       | 1.84666 /23.9  | SUMITA SFLDN3            | High-index dense-flint class                          |
| L8       | 1.59270 /35.3  | HIKARI E-F16             | Flint class                                           |
| L9       | 1.56883 /56.3  | HIKARI E-BAK4            | Barium-crown class                                    |
| L11, L12 | 1.51112 /60.5  | SUMITA K7                | Crown class                                           |

The patent's d-line indices and Abbe numbers are unchanged. C-, F- and g-line indices are evaluated from the equivalent-catalog formulas at 656.2725, 486.1327 and 435.8343 nm. These are modeling proxies, not spectral values printed by the patent or measurements of the production melt.

The model uses direct line-index dispersion for every glass, including historical classes absent from the built-in catalog. F5 also matches a compatible Schott class, but the supplied SUMITA-derived line indices control its modeled dispersion.

The per-surface paraxial Petzval contributions sum to +0.003562464771 mm⁻¹ at the native d-line. This is a first-order surface-power sum, not measured sagittal/tangential field curvature or evidence of flat-field image quality. No apochromatic-performance or anomalous-dispersion claim is made.

## Focus Mechanism and Zoom-State Limits

The patent specifies G3 motion toward the image for close focusing, but supplies no quantitative near-focus table or travel. Only infinity focus is modeled. The manufacturer manual gives autofocus ranges of 1.0 m to infinity at 25 mm and 0.7 m to infinity at 75 mm; these do not determine the missing lens positions.

The patent prints only the wide and tele infinity prescriptions. Repeated focus values preserve each zoom geometry without implementing near focusing. The approximately 49 mm F4.8 aberration plot does not supply an intermediate prescription.

Between the printed endpoints, the model includes 199 unpublished intermediate positions. D5 varies linearly and D12 remains complementary, preserving D5+D12 = 13.767 mm and the 52.237 mm first-to-last optical spacing. G1 and G3 remain coupled and move objectward; G2 moves independently objectward, with positive gaps throughout. The rear image gap follows first-order focus while retaining interpolated endpoint defocus of −0.1664649454 to −0.0794639516 mm. This motion is an interpolation, not a measured factory cam law. The printed endpoint prescriptions remain unchanged. Aperture variation is also interpolated; at approximately 49 mm, the model gives F5.043 versus the plotted F4.8.

## Conditional Expressions

The B2 claim and page 2 prose define three conditions. The isolated functional-group powers and unmodified source coordinates give:

| Condition              | Computed quantity | Result    |
| ---------------------- | ----------------: | --------- |
| 0.2 < \|f2/f1\| < 0.35 |       0.261348794 | Satisfied |
| n8 < 1.75              |           1.60342 | Satisfied |
| 0.1 < d18/f3 < 0.5     |       0.261407294 | Satisfied |

The first controls the balance of front and variator power; the second constrains the negative member of the G2 pair; the third limits the thickness of the rear negative element relative to G3's power. Their interpretations follow the patent's page 2 explanation. Compliance does not by itself establish production performance.

## Model Scope and Limitations

| Quantity                                  |            Wide |            Tele |
| ----------------------------------------- | --------------: | --------------: |
| Source nominal focal length               |        25.78 mm |        73.05 mm |
| Calculated d-line EFL                     | 25.820607793 mm | 73.063940605 mm |
| Printed S23 image gap retained            |         41.4 mm |         62.7 mm |
| Calculated paraxial in-air BFD            | 41.566464945 mm | 62.779463952 mm |
| Model image plane minus paraxial focus    | −0.166464945 mm | −0.079463952 mm |
| Modeled first-surface-to-image track      |       93.637 mm |      114.937 mm |
| Source native maximum f-number            |             4.0 |             5.6 |
| Modeled effective axial f-number          |     4.082932144 |     5.805239942 |
| Axial geometrical pupil-area loss         |      4.0211243% |      6.9458589% |

The focal residuals exceed half of the last printed focal digit and remain unresolved source discrepancies. The printed image gaps are retained without optimization or refocusing. Small residual defocus remains; the model's image plane differs from paraxial best focus.

The source prints the stop position but no iris diameter or glass clear radii. Iris radii are inferred by exact-ray calibration to F4/F5.6; matching those labels is therefore a calibration, not independent evidence of physical diaphragm size. All glass clear radii are estimates guided by the patent section, previously cited manufacturer proportions and axial/field tracing. No independently accessible Z construction drawing confirms the manufacturing apertures.

The default 90% shared-band gap allowance is retained. At the S17–S18 air space, inferred 5.43 mm clear radii satisfy valid geometry but clip the nominal axial pupil edge. Passing the full native tele pupil would require 97.1479742% intrusion, beyond the 97% limit; that override is not used. The effective axial f-numbers and lost circular entrance-pupil area above quantify this explicit model limitation. They are not T-stop losses, coating losses, measured production transmission or a claim that the full published pupil is reproduced.

The chosen radii transmit central axial rays with ordinary off-axis vignetting. The maker's 17 × 24 mm frame is covered by chief rays throughout the modeled zoom range; nominal 18 × 24 mm coverage reaches 98.1% at wide. Neither cemented interior interface clips the sampled rays. A tele ray can clip at S19. These inferred-rim results do not establish measured pupil transmission, vignetting or MTF.

The inferred surfaces require no rendering trim. Printed surface values, stop location, cemented-interface media and endpoint spacings are retained. Intermediate defocus reaches 0.16603 mm in magnitude; 152 of the 199 interpolated positions exceed 0.1 mm. No MTF optimization or extra geometry allowance is applied.

## Sources

1. Japan Patent Office, JP2706781B2. PDF p.1 cover and claim; p.2 construction and first table block; p.3 remaining table and explanation; p.4 Figures 1–2.
2. Japan Patent Office, JPH0239116A, PDF p.3. Confirms the nd header and matching numerical entries; B2 remains the prescription source.
3. Kyocera/Yashica, Samurai Z/Z-L instruction manual, PDF p.45 / printed p.44 specifications and p.46 / printed p.45 filter/body details. [Manual source](https://www.butkus.org/chinon/yashica/yashica_samurai_z/yashica_samurai_z.htm); [public Z/Z-L manual](https://manualzz.com/doc/de/53761587/yashica-samurai-zl-instructions). The complete manual has 49 pages.
4. Yashica/Contax News, No.28, October 1989, PDF p.2: manufacturer specifications, product chronology and camera/lens section. The previously cited section is not an independently confirmed Z construction drawing.
5. [OHARA July 2026 catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), [HOYA catalog](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), [SUMITA optical-glass data](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf), and HIKARI, SCHOTT and CDGM optical-glass catalogs. These support equivalent classes and spectral proxies only.
6. Yashica, Samurai X3.0 multilingual instruction manual, PDF p.36 / printed p.57, technical specifications: 14 elements / 13 groups and 25–75 mm F3.5–4.3. Used only to exclude the different X3.0 product.
