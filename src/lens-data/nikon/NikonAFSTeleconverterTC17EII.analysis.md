## Patent Reference and Design Identification

**Patent:** JP 2005-107261 A  
**Application Number:** JP 2003-341735  
**Filed:** 2003-09-30  
**Published:** 2005-04-21  
**Inventors:** Naoko Fukuda; Akiko Furuta  
**Applicant:** Nikon Corporation  
**Title:** Rear converter lens (リアコンバーターレンズ)  
**Example details:** Example 5, Table 6 and Figures 10–11

The original publication lists the inventors as 福田 直子 and 古田 明子, in that order. Latin name spellings follow the recorded Google Patents bibliography; that web-only reading was not archived as original page bytes and does not constitute independent confirmation of the name readings. The original Japanese page establishes the application and publication dates. No product release date is established here. [1]

This model transcribes the rear converter in Example 5 as a detachable converter associated with the Nikon AF-S Teleconverter TC-17E II. The production-to-patent identification is a correlation, not a manufacturer-confirmed prescription. The Japanese publication, rather than a translated summary or another family member, supplies the optical data. [1]

Three features support the correlation:

1. Example 5 and Nikon's specifications both describe seven elements in four air-separated groups.
2. The nominal patent multiplier is 1.70, matching the marketed 1.7× converter.
3. The original patent section and Nikon's published optical section show the same sequence: a front cemented doublet, a central cemented triplet and two rear singlets. Their positive–negative element ordering also agrees. [1, 2, 3]

Nikon specifies a dedicated AF-S/AF-I lens-side interface and Nikon F camera-side mount. The documented product has an approximate mount-to-mount length of 31.5 mm, overall length of 43.5 mm, maximum diameter of 66 mm and mass of 250 g. These mechanical dimensions do not define the patent's optical reference plane or replace its spacings. The manufacturer's effective-aperture range, f/3.36–f/53.82 for coupled f/2–f/32 settings, is also retained as a product specification rather than used to adjust the prescription. [2, 4]

The patent's common objective is a 195 mm, f/2 design with a printed full field of 12.6°. Paragraph 0017 explicitly states that all examples use this objective. Neither the patent nor the cited Nikon documents identifies that objective as a particular production host. Its role here is an analytical reference, not a separately modeled production lens. [1, pp. 5–6, Table 1, ¶¶0017–0020]

## Optical Architecture

The converter is an all-spherical, negative-power rear attachment inserted into the converging image-side beam of the objective. It has no independent aperture stop. Its three functional groups have the positive–negative–positive power sequence described in ¶0033; this functional grouping differs from the four physical air-separated groups. [1, p. 10]

| Functional group | Construction                  | Standalone group focal length in air |
| ---------------- | ----------------------------- | -----------------------------------: |
| G1               | L11–L12 cemented doublet      |                         +150.6300 mm |
| G2               | L21–L22–L23 cemented triplet  |                          −35.3077 mm |
| G3               | L31 and L32, separated by air |                         +162.0733 mm |

These are paraxial focal lengths of each complete group isolated in air, not sums of the isolated element focal lengths and not separate magnification factors. The intervening spaces and principal-plane positions matter when the groups form the complete attachment. The converter's standalone EFL is −70.161395 mm; its first-to-last-vertex optical track is 39.1000 mm.

G2 provides the strongest negative group power. The weaker positive groups on either side give additional surfaces and separations with which to control the combined system. The patent specifically presents a cemented triplet containing one positive and two negative elements as useful for axial and lateral color, field curvature and coma, particularly in the second group. That is the patent's stated design rationale, not a numerical attribution of each aberration to an individual element in this model. [1, p. 4, ¶0010]

The converter's first principal plane is +19.939892 mm from its first vertex; its rear principal plane is −7.838413 mm from its last vertex, with positive axial distance directed toward the image. The latter location explains the positive distance `et` used in the patent's compactness condition: the last vertex lies imageward of the rear principal plane.

The literal-index Petzval sums are +0.000576550686 mm⁻¹ for the common objective and −0.000579893656 mm⁻¹ for the converter, giving −0.000003342970 mm⁻¹ for the combination. This near cancellation is a first-order surface-power result. It does not by itself establish a flat best-focus surface, low astigmatism or measured image quality across the field.

## Element-by-Element Analysis

The focal lengths below refer to individual glass elements isolated in air. At a cemented boundary, the actual refraction is between the neighboring glasses rather than between glass and air. Individual element powers therefore describe the components without substituting for the power of their cemented assembly.

### L11 — Positive Meniscus, Convex to the Image

nd = 1.531720, νd = 48.87. Glass: coordinate class 532489, supplier unconfirmed. f = +59.7358 mm.

L11 is the first component of G1. Its relatively weakly curved front face and more strongly curved rear face form the image-facing positive meniscus specified in ¶0033. The bending of this first element is governed by condition (1), which connects its two radii to the patent's stated balance between installation clearance, back focus and aberration correction with a bright objective. [1, ¶¶0009, 0033]

Surface 2 is shared with L12. The class annotation resolves to an Ohara S-TIL6 spectral proxy in the current model, but neither that lookup nor the source nd/νd pair proves the supplier or historical melt.

### L12 — Negative Meniscus, Convex to the Image

nd = 1.816000, νd = 46.63. Glass: coordinate class 816466, supplier unconfirmed. f = −102.3582 mm.

L12 is the negative rear component of the G1 doublet. The doublet remains positive as an assembly. Its glass has a substantially higher refractive index than L11, while their Abbe numbers are comparatively close; the pair should not be assigned an achromatizing performance merely from opposite isolated powers.

The glass label names Ohara S-LAH59, the catalog glass at these coordinates. Other coordinate candidates, including Hikari J-LASF09A and Ohara LAH59, retain their distinct names and catalog identities. None is asserted to be the patent's actual glass.

### L21 — Biconcave Negative

nd = 1.804000, νd = 46.58. Glass: coordinate class 804466, supplier unconfirmed. f = −20.8679 mm.

L21 starts the central negative group. Its rear face, surface 5, is cemented to the positive L22. The high-index negative component supplies substantial isolated negative power, but the triplet's net power must include its actual glass-to-glass interfaces.

The glass label names Ohara S-LAH65V, the catalog glass at these coordinates; CDGM H-ZLaF50D is another near match. This is an equivalent-property model choice, not evidence of the glass Nikon used. The patent attributes the triplet's usefulness to the assembly rather than assigning a separate aberration correction to L21. [1, ¶¶0010, 0033]

### L22 — Biconvex Positive

nd = 1.688930, νd = 31.07. Glass: coordinate class 689311, supplier unconfirmed. f = +22.2567 mm.

L22 is the positive middle component of G2, cemented to L21 at surface 5 and to L23 at surface 6. Its lower Abbe number introduces a dispersion contrast with both neighboring negative elements. That contrast supplies chromatic design freedom, but an element-specific correction of axial color, lateral color or secondary spectrum is not established by nd and νd alone.

Ohara S-TIM28 is the selected catalog proxy. The shared surfaces preserve three different glass media; there is no additional synthetic cement layer in the prescription.

### L23 — Biconcave Negative

nd = 1.883000, νd = 40.77. Glass: coordinate class 883408, supplier unconfirmed. f = −36.5961 mm.

L23 closes the negative triplet. It has the highest refractive index used in the converter, shared with L32. Its positive-signed rear radius and negative-signed front radius give the biconcave form shown in Figure 10. The complete G2 assembly remains negative despite the positive middle component. [1, ¶0033, Table 6]

The current model resolves this class to Ohara S-LAH58. Its spectral behavior is that proxy's behavior; the name is not treated as a recovered Nikon material designation.

### L31 — Biconvex Positive

nd = 1.487490, νd = 70.24. Glass: coordinate class 487702, supplier unconfirmed. f = +39.0985 mm.

L31 is the positive front singlet of G3. It has the lowest index and highest Abbe number in the converter. It is separated from L32 rather than cemented to it, leaving a powered glass–air–glass sequence at the rear of the design. The pair's combined group power is weakly positive.

The selected proxy is Ohara S-FSL5. A relatively high Abbe number is not, by itself, proof of an anomalous-partial-dispersion designation or apochromatic correction. No such production or performance claim is made here.

### L32 — Negative Meniscus, Convex to the Image

nd = 1.883000, νd = 40.77. Glass: coordinate class 883408, supplier unconfirmed. f = −48.0999 mm.

L32 is the rear negative singlet of G3 and uses the same source nd/νd pair as L23. The patent describes its image-facing meniscus orientation. Its weak rear curvature places the final refracting surface ahead of the long air space to the image plane. [1, ¶0033, Table 6]

The drawing shows a square-cut blank: the front curve ends near 14.9 mm inside a short flat shelf, and the cylindrical edge runs at about 16.3 mm to the rear face. The model gives both faces the 16.4-mm blank height so the diagram draws the element square instead of bevelled; on the mounting host and the patent's reference objective, surface 10 clips no in-format ray at either height, and the shelf is not modeled as an additional refracting surface. The selected glass proxy is again Ohara S-LAH58.

## Glass Identification and Selection

The source publishes d-line indices and Abbe numbers, not glass trade names or measured C-, F- and g-line indices. Paragraph 0018 labels the d line as 588 nm; the catalog/runtime convention uses approximately 587.6 nm. The published nd values are preserved directly, without a wavelength-based adjustment. The other standard sampled lines are C = 656.3 nm, F = 486.1 nm and g = 435.8 nm; the patent's aberration plots label g approximately as 436 nm. [1, ¶¶0018, 0022]

| Element(s) | Coordinate class | Source nd | Source νd | Selected runtime spectral proxy |
| ---------- | ---------------- | --------: | --------: | ------------------------------- |
| L11        | 532489           |  1.531720 |     48.87 | S-TIL6 (Ohara)                  |
| L12        | 816466           |  1.816000 |     46.63 | S-LAH59 (Ohara)                 |
| L21        | 804466           |  1.804000 |     46.58 | S-LAH65V (Ohara)                |
| L22        | 689311           |  1.688930 |     31.07 | S-TIM28 (Ohara)                 |
| L23, L32   | 883408           |  1.883000 |     40.77 | S-LAH58 (Ohara)                 |
| L31        | 487702           |  1.487490 |     70.24 | S-FSL5 (Ohara)                  |

The six-digit annotations are derived coordinate classes, not codes printed by the patent. Candidate comparisons include the authoritative Ohara, Hoya, Schott, Hikari, CDGM and Sumita catalogs. Current catalog rows corroborate the selected candidates' properties, while historical coefficient sets in the runtime may differ slightly in rounding or revision. A coordinate-compatible candidate is not proof of supplier or melt identity. Ohara S- and L-prefix distinctions are preserved. [5–10]

No measured `nC`, `nF`, `ng` or `dPgF` is added to the production elements. The resolved catalog spectra provide finite, normally ordered C/d/F/g indices for illustrative chromatic tracing. Their green-channel indices may differ slightly from the literal source nd. Uncolored source-prescription checks use the literal indices; chromatic proxy traces are a separate model branch. These inputs do not establish the production converter's secondary-spectrum correction or APO performance.

## Focus Mechanism

The converter is modeled as a rigid attachment. The source optical configuration is at infinity, and no internal converter translation, floating group or finite-focus spacing law is published for the selected example. The objective's stop remains the system stop. There is no independent converter focal ratio or independent converter iris.

Nikon states that the host lens's minimum focusing distance is unchanged with the TC-17E II attached. That product statement does not determine the host's internal focusing motion or authorize a reconstructed converter focus law. Focus drive and any host-specific optical changes remain properties of the compatible host lens. [4]

The model is dedicated Nikon F, not universal. Its host-f-number limit is f/2, the published reference objective's tested setting. This is a bounded qualification of the reference beam, not a guarantee that every f/2 host has the same exit pupil, clearance or field coverage. In this catalog it mounts only on the AF-I Nikkor 300mm f/2.8 D IF-ED; the other accepting hosts are held back pending review, and the patent reference objective is retained only as an analytical fixture.

## Conditional Expressions and Reference Planes

The patent's repeated claims, body text and Table 6 use the following conditions. Here r1 and r2 are the first element's front and rear radii; Lr is the converter's first-to-last-vertex distance; Bf is the combined system's back focus; and et is positive when the converter's rear principal plane lies objectward of its last vertex. [1, pp. 2–4, ¶¶0009–0014, Table 6]

1. −2 < (r2 + r1)/(r2 − r1) < −0.5.
2. (et + Bf)/(Lr + Bf) < 0.8.
3. β > 1.5.

With r1 = −236.1536 mm and r2 = −28.2070 mm, condition (1) evaluates to −1.271290803. The literal source-system value of condition (2) is 0.612030849, and the source-system multiplier is 1.702892530. All three inequalities are satisfied. The abstract instead prints `(r1 − r2)/(r1 + r2)` with negative bounds; that expression differs from the repeatedly stated body/claims convention and is not silently substituted for it.

The mount-related distance D = −6.90 mm is measured from the patent's M plane to the converter's first vertex, as defined in ¶0018. M is a nonrefracting mechanical reference, not a glass surface and not an established Nikon F flange datum. Combining the objective's 36.9886-mm final spacing to M with D gives the physical objective-to-converter junction of 30.0886 mm. No negative physical air gap or folded path is introduced.

The objective's paraxial BFD is computed as 78.988581998 mm; this is a calculated quantity, not a printed Table 1 back-focus entry. Subtracting the physical junction gives the exact source virtual-object distance of 48.899981998 mm behind the converter's first vertex. The native converter uses the rounded reference 48.900000 mm and keeps the printed final gap of 41.4775 mm. All source lengths remain unscaled; no radius, spacing, index or Abbe value is corrected to force the nominal multiplier.

| First-order quantity                             | Exact source junction | Rounded-reference model |
| ------------------------------------------------ | --------------------: | ----------------------: |
| Objective-to-converter junction                  |       30.088600000 mm |         30.088581998 mm |
| Combined EFL                                     |      332.063257805 mm |        332.063402893 mm |
| Combined BFD from converter last vertex          |       41.477507956 mm |         41.477560159 mm |
| Combined/objective focal-length ratio            |           1.702892530 |             1.702893274 |
| Combined focal ratio with the f/2 reference beam |           3.405785059 |             3.405786547 |

The rounded-reference branch changes the junction through the host's calculated native image position; it does not rewrite the printed converter last gap. Neither branch requires a camera-side plate or filter conversion because none is listed in the selected prescription.

Several printed derived values do not reproduce at their last displayed digit. The discrepancies remain source observations rather than altered inputs:

| Printed comparison                         | Printed value | Literal-source calculation |
| ------------------------------------------ | ------------: | -------------------------: |
| Condition-block Bf                         |   41.47753 mm |            41.477507956 mm |
| Condition (2), traced et and Bf            |         0.606 |                0.612030849 |
| Condition (2), printed et/Lr/Bf arithmetic |         0.606 |                0.612030798 |
| Condition (3) β                            |         1.699 |                1.702892530 |
| Figure 11 nominal focal ratio              |          3.40 |                3.405785059 |

These five strict displayed-precision comparisons fail. In particular, the condition-(2) discrepancy is present even when only the printed et, Lr and Bf values are combined, without tracing a ray. The table's four-decimal final gap of 41.4775 mm and nominal header multiplier 1.70 remain consistent with the literal prescription at their own printed precision. The source is not treated as having printed a corrected 0.612 value or a corrected 1.703 multiplier.

## Inferred Clear Apertures

Neither Table 1 nor Table 6 supplies effective diameters. Optical caps are inferred from the original Figures 1 and 10 and checked against the named source beam. The native drawings retain their original aspect ratio; curved-surface endpoints are distinguished from shelves, mounting features and leader lines. The converter drawing's registration gives 15.635077 pixels/mm, and the master drawing gives 7.017453 pixels/mm. The adopted ±3-pixel reading uncertainty corresponds to about ±0.192 mm and ±0.428 mm, respectively.

| Converter surface(s) | Modeled semi-diameter |
| -------------------- | --------------------: |
| 1, 2                 |               14.0 mm |
| 3                    |               14.2 mm |
| 4, 5, 6              |               13.7 mm |
| 7                    |               14.1 mm |
| 8, 9                 |               15.1 mm |
| 10, 11               |               16.4 mm |

On L32, the front optical curve ends near 14.9 mm inside the blank's flat peripheral shelf, while the rear face runs out to the blank edge at about 16.3 mm. The renderer joins an element's front and rear rims with a straight edge, so unequal caps (formerly 15.0/16.4 mm) drew a long bevel where the figure draws a shelf and a cylindrical edge. Both faces now carry the 16.4-mm blank height, which draws the block square. On the mounting host and the patent's reference objective, surface 10 limits no in-format ray at either value: the f/2 axial cone of the reference objective reaches it at 6.3 mm, and on the AF-I 300mm f/2.8 host the vignetting curve and corner coverage are unchanged. Hosts with a distant exit pupil can send corner rays past 15.0 mm there; a forced trial on two slow undeclared lenses raised mounted corner coverage by 0.1–0.3 points. The reference objective similarly has a visible step between its larger surface 9 cap and the smaller cemented surface 10 and exit surface 11. Figure-derived apertures are modeled estimates, not independently measured production dimensions.

All spherical domains and actual rim slopes remain valid at these caps. The minimum converter shared-band element edge thickness is 1.770893 mm, and the maximum rim slope is 0.827581. Its three inter-group air gaps open outward over their shared radial bands. The source master, converter and both composed branches satisfy the normal edge and gap checks, and the actual renderer trims no element. No increased gap-sag allowance or display adjustment is used to conceal a geometry failure.

## Source-State Ray Coverage and Model Limits

The f/2 objective specification calibrates the aperture; no independent physical diaphragm diameter is published. A paraxial calibration gives a stop radius of 20.313001911 mm. Exact marginal-ray calibration in the runtime gives 20.917782496 mm. The exact-calibrated stop is preserved unchanged when either reference branch is composed with the converter. Agreement with the calibration target is not independent evidence of the production iris diameter.

At infinity, both composed branches transmit all **4001/4001** sampled axial rays across the full source f/2 entrance pupil. The Y = 21.60 mm chief ray also transmits in both branches, with image-height error below 0.0001 mm. The bare objective's chief at its printed half-field of 6.3° transmits. These are specifically named source-state transmission checks; they do not establish universal host compatibility or an unvignetted full pupil at every field.

The actual normal off-axis viewer fan is a separate test. Its field is 3.200197309° in the exact-source branch and 3.200198152° in the rounded-reference branch. Both use the normal pupil offsets −0.75, −0.375, 0, +0.375 and +0.75 about a solved central chief.

| Composed branch, normal off-axis fan | Attempted | Aim-supported launches | Transmitted | Clipped | Failed |
| ------------------------------------ | --------: | ---------------------: | ----------: | ------: | -----: |
| Exact source                         |         5 |                      5 |           3 |       2 |      0 |
| Rounded reference                    |         5 |                      5 |           3 |       2 |      0 |

One converged central-chief aim supports those five offset launches. They are not five independently re-aimed pupil rays. “Aim-supported” records a defined launch, not subsequent passage through the stop or every physical cap. Both compositions also transmit all six normal axial viewer rays.

For the rounded-reference off-axis fan, the −0.75 sample intersects TC1's supporting sphere at radius 14.194613621 mm, exceeding the inferred 14.0-mm clear cap by 0.194613621 mm. The +0.75 sample intersects the master first supporting sphere at radius 55.457387240 mm, exceeding its 51.7-mm cap by 3.757387240 mm. These are two aperture clips with solved sphere intersections and no numerical trace failure. The TC1 excess is comparable to the approximately ±0.192-mm figure-reading uncertainty: the boundary-ray clipping is a result of the modeled cap, not a measured production vignette. The inferred rim is not enlarged to make that sample transmit.

The full-pupil field grids are distinct from the five-ray viewer fan. At each signed Y = 21.60 mm field, each composition records **577 attempted, 577 aim-supported launches, 411 transmitted, 110 clipped and 56 FAILED**. A field-magnitude central-chief solution supplies mirrored signed grids; the pupil samples are offsets, not separately stop-aimed rays. The grid has a chief plus twelve radial rings with 48 azimuths per ring. Its unweighted counts are not a measured throughput percentage or a continuum guarantee.

The 56 FAILED attempts per signed maximum-field grid terminate as `noBracket` at the master first surface, without an accepted physical-cap hit. Independent line–sphere intersections place their unbounded supporting-sphere crossings outside the 51.7-mm physical cap. Across the rounded-reference grids, the smallest such continuation radius is 57.425331950 mm. Those continuations remain failed diagnostic rays, never successful transmission. Clipped rays are likewise excluded from transmitted counts; drawing or analytically extending their continuation does not change their status.

All attempts remain in the mandatory sample-accounting and field-coverage records. Mandatory source axial and chief transmission checks apply to the named source-state samples above. The complete default-fan and full-pupil grid checks require honest accounting and localization of excluded rays; they do not impose an unsupported universal all-outer-rays-transmitted condition.

The bare master's distinct normal off-axis fan, at 5.080728860°, has 5 attempted/aim-supported launches, 4 transmitted, 0 clipped and 1 FAILED outside its first cap. Optional axial launch stress at pupil fractions ±1.05, ±1.10 and ±1.12 has 6 attempted/constructed launches, 0 transmitted, 6 clipped and 0 failed in each branch. It requires no central-chief aim and is not a faster-host qualification or a mandatory transmission target.

Figure 11 provides the source's combined-system aberration plots at nominal f/3.40. Its visible coma panels are Y = 0 and Y = 21.60 mm; the general description elsewhere mentioning an intermediate height does not create an additional panel in this figure. Those published plots, the literal-index geometric checks and the catalog-proxy chromatic traces are different forms of evidence and are not presented as interchangeable measurements of the production converter. [1, p. 15, Figure 11]

## Sources

1. Japan Patent Office, **JP 2005-107261 A**, _Rear converter lens_, published 2005-04-21. Original Japanese PDF `JP2005107261A.pdf`: front-page bibliography; claims and ¶¶0009–0014 on pp. 2–4; common objective and conventions, ¶¶0017–0020 and Table 1 on pp. 5–6; Example 5, ¶¶0033–0034 and Table 6 on pp. 10–11; Figure 1 on p. 12, Figure 10 on p. 14 and Figure 11 on p. 15. [Publication locator](https://patents.google.com/patent/JP2005107261A/en).
2. Nikon, [TC-17E II official Japanese specifications](https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af-s_teleconverter_tc-17e_2/spec.html), construction, multiplier, dimensions, mass and aperture coupling.
3. Nikon, [TC-17E II official optical section](https://nij.nikon.com/cms/products/nikkor/fmount/ai_af-s_teleconverter_tc-17e_2/img/spec/02.png), structural comparison only.
4. Nikon, [TC-14E II / TC-17E II user manual](https://download.nikonimglib.com/archive2/i2cxK00hKiZ002rPmMR06VPbrv57/TC-14EII17EII_%2880_DL%2902.pdf), 7MAA0180-02, compatibility, specifications and minimum-focus behavior.
5. Ohara, [July 2026 optical-glass catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), [S-series data](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20260402-5.xlsx) and [L-series data](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20250312-L5.xlsx); coordinate candidates and distinctions among named glasses.
6. Hoya, [2026 glass data](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx) and [catalog including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf); alternative coordinate candidates.
7. Schott, [optical-glass data](https://media.schott.com/api/public/content/7f5a58f7fa754445abab44cafc76acb3?v=a102056c&download=true) and [preferred/special-glass coefficients](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true); alternative coordinate candidates.
8. Hikari, [Optical Glass Catalog Data](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), including J-LASF09A.
9. CDGM, [September 2026 glass data](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb) and [Zemax catalog](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX), including H-ZLaF50D.
10. Sumita, [optical-glass data download](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php), workbook version 14.02.00 and Zemax data; alternative coordinate candidates.

## Host Compatibility

The site offers the converter only on the AF-I Nikkor 300mm f/2.8D IF-ED, which Nikon lists for the TC-17E II and which passes every composition check. Other hosts that accept converters are kept off in `incompatibleLensKeys` until each is checked; that is a qualification limit, not a finding of mechanical incompatibility. Finite-focus performance is not certified.
