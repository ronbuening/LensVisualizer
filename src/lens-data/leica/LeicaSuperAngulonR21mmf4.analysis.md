# LEICA SUPER-ANGULON-R 21mm f/4

## Patent Reference and Design Identification

**Patent:** US 3,512,874  
**Filed:** October 13, 1967  
**Priority:** October 22, 1966 — Germany Sch. 39,720  
**Granted:** May 19, 1970  
**Inventor:** Walter Wöltche  
**Assignee:** Jos. Schneider & Co., Optische Werke  
**Title:** *Wide-Angle Objective of Large Back-Focal Length*  
**Embodiment analyzed:** Example 3 / Fig. 3 / Table 3 / Claim 3

The implemented prescription is the third numerical example of US 3,512,874, uniformly scaled from the patent's normalized focal length of 100 to the patent's stated 21 mm implementation for a 24 × 36 mm frame. The patent gives this example a relative aperture of 1:4, a 90° full field, and a normalized back focal length of 173.92. [1, pp. 4–7; Fig. 3; Table 3; Claim 3]

The production identification is a strong research correlation rather than a manufacturer-confirmed patent attribution. Several independent details converge:

1. E. Leitz Catalog No. 41 lists catalog 11,813 as the 21 mm Auto-Aperture Super-Angulon-R f/4 and states that it would be available in late 1968. [4, printed p. 20]
2. Leitz manufacturer literature describes the 21 mm SUPER-ANGULON-R f/4 as a retro-focus LEICAFLEX lens with 10 elements in 8 members and a marketed 92° angle. The same literature treats f/22 as an available stop. [2, p. 7]
3. The patent's Example 3 likewise has 10 physical lenses in 8 optical members, is explicitly a large-back-focus wide-angle design, and is stated to scale to 21 mm for 24 × 36 mm with a 90° field. [1, pp. 4–6]
4. Later Leica system literature identifies code 11813 as the Super-Angulon-R 21 mm f/4 for the Leica R system and gives a 0.2 m minimum focus distance. [3]

The 90° patent field and 92° marketed angle are therefore kept separate. No located Leica, Leitz, or Schneider primary source explicitly states that production code 11813 is US 3,512,874 Example 3.

Two numerical source discrepancies are corrected in the modeled branch while the raw patent readings remain preserved in the dossier. Table 3 prints `r15 = +259.71`, but Claim 3 gives `r15 = -259.71` and Table 3's own surface-power column requires the negative sign. Table 3 also prints `d10 = 18.54`, while Claim 3 gives `18.45`; the German priority-family numerical example agrees with `18.45`. [1, Table 3 and Claim 3; 5] The implemented data therefore use `r15 = -259.71` and `d10 = 18.45` before applying the 0.21 scale.

A third contradiction is not numerically repaired. The U.S. prose says the axial thicknesses of members IV and V should be about 2.5–5 times `|fIII|`, whereas Example 3 gives ratios of approximately 0.466 and 0.401. The priority-family wording instead uses different component-thickness conditions that the example satisfies. The U.S. prose is retained as a source discrepancy rather than replaced with an invented coefficient. [1, p. 4; Table 4; 5]

## Optical Architecture

The design is an eight-member retrofocus wide-angle objective arranged as four broader components A–D. The member power sequence is positive, negative, negative, positive, positive, negative, positive, positive. Members IV and V are cemented doublets, so the eight members contain ten physical glass elements. [1, Fig. 3; pp. 4–6]

The implemented model is retrofocus under the project criterion because its rear-vertex back focal distance, 36.52267 mm, exceeds its 20.99932 mm effective focal length; `BFD/EFL = 1.73923`. Its first-to-last-vertex track is 50.28450 mm, giving `TL/EFL = 2.39458`, so it is not a telephoto system under the project's separate `TL/EFL < 1` criterion. These values are recomputed from the final data file by the bundled verifier. [7]

Component A contains the front positive meniscus followed by two negative menisci. Components B and C are the unusually thick positive members IV and V immediately ahead of the diaphragm, each implemented as a cemented doublet. Component D contains the negative sixth member followed by two positive rear members. The patent specifically emphasizes the large axial thickness of members IV and V as significant for field-curvature control, and it describes the second cemented interface in member V as particularly useful for higher-order entrance-pupil and asymmetrical aberrations. [1, pp. 4–6]

The modeled Petzval sum is `+0.00366568 mm⁻¹`, corresponding to a signed reciprocal magnitude of 272.801 mm in the adopted convention. This value is accumulated surface by surface as `φ/(n·n′)` from the final scaled prescription; it is a paraxial design quantity rather than a measured field-curvature radius. [7]

The patent does not publish a physical stop diameter, an exact stop coordinate within the diaphragm gap, or clear semi-diameters. The implemented stop is therefore a disclosed modeling choice. Fig. 3 constrains the iris to the published `d12` diaphragm space but depicts the diaphragm as a finite-width schematic symbol rather than a dimensioned axial plane. The model chooses a 37.5% split from `r12` toward `r13`, approximately aligned with the object-side/lower blade mark in the drawing; that fraction is a modeling estimate, not a measured patent dimension. Its semi-diameter, 4.33660 mm, is calibrated to reproduce the published f/4 target, yielding an entrance-pupil semi-diameter of 2.62492 mm and a modeled f-number of 4.00000. Agreement with f/4 is calibration, not independent confirmation of the manufactured diaphragm diameter. [1, Fig. 3; 7]

All clear semi-diameters in the data file are likewise modeled rather than published. They began as exact ray envelopes and were then compared proportionally with Fig. 3, whose rims (including the drawn iris opening) are uniformly about 0.73 times the ray-envelope scale; members IV and V were trimmed to the drawing's flat-topped outlines (surface 7 at 8.7 mm, surfaces 10–12 at 6.4/6.4/6.3 mm), while the other rims already agreed with the drawing within about 10%. The resulting set satisfies the bundled verifier checks for positive edge thickness, actual spherical rim slope, spherical sag domain, and shared-gap intrusion. The full on-axis f/4 meridional bundle and the default ±27° off-axis bundle are contained, and the ±45° chief rays are contained. At the extreme ±45° field, the modeled apertures intentionally vignette the full f/4 meridional bundle; the original verifier's 70.82% survival figure (computed before the figure-proportion trim, which clips that extreme bundle further) is a one-dimensional meridional clipping sample, not a two-dimensional pupil transmission or a production relative-illumination measurement. [7]

## Element-by-Element Analysis

The patent tabulates refractive index and Abbe number at the e line, 546.1 nm. Accordingly, the following element lines use `ne` and `νe`; the data schema stores these values in its historical `nd`/`vd` slots with `indexReference: "e"`. Standalone element focal lengths are computed for each physical lens in air and should not be confused with the net powers of the cemented members IV and V. [1, p. 4; 7; 8]

### L1 — Positive Meniscus

`ne = 1.52736, νe = 64.31.` Glass: **PC3 (HOYA e-line catalog equivalent of historical SCHOTT PK3 class)**. Standalone `f = +164.830 mm`. [7; 8]

L1 is the positive front meniscus that distinguishes this invention from the earlier two-negative-meniscus front arrangement discussed in the patent. Its power is weak relative to the system as a whole, and it precedes the two negative front members that establish the long-back-focus wide-angle form. The patent specifies that the menisci turn their concave sides toward the diaphragm space. [1, p. 4]

### L2 — Negative Meniscus

`ne = 1.62287, νe = 60.06.` Glass: **N-SK16 class (supplier unproven)**. Standalone `f = -53.797 mm`. [7; 8]

L2 is the first negative meniscus of the front retrofocus section. Its current glass label is a coordinate-class assignment, not a historical supplier claim: SCHOTT N-SK16 is extremely close to the patent's native e-line pair, but the patent does not identify the melt or vendor. [6]

### L3 — Negative Meniscus

`ne = 1.66104, νe = 57.08.` Glass: **K-LaK11 (SUMITA e-line catalog equivalent of historical SCHOTT LaK11 class)**. Standalone `f = -23.690 mm`. [7; 8]

L3 is the second negative front meniscus and completes the three-element front component A. Together, L1–L3 form the front section that permits the image-side vertex spacing to remain substantially longer than the effective focal length. The source does not assign a unique aberration-correction role to L3 beyond the stated member-power relationships, so no more specific attribution is made here. [1, pp. 4–6]

### L4 — Plano-Concave Negative, First Lens of Member IV

`ne = 1.62287, νe = 60.06.` Glass: **N-SK16 class (supplier unproven)**. Standalone `f = -27.484 mm`. [7; 8]

L4 begins cemented member IV and is plano-concave when considered as an isolated physical lens. Its standalone negative power does not describe the cemented member as a whole: member IV has a verified net focal length of `+233.041 mm` after L4 is cemented to L5. [7]

The cemented interface is negatively refracting. In the patent's discussion of the corresponding fourth member, this interface is associated with reduced chromatic aberration and improved image quality relative to the singlet form. That statement supports the cemented-member interpretation, but it does not establish a modern apochromatic classification. [1, p. 5]

### L5 — Biconvex Positive, Second Lens of Member IV

`ne = 1.53530, νe = 45.67.` Glass: **FTM8 (OHARA e-line catalog proxy)**. Standalone `f = +25.165 mm`. [7; 8]

L5 supplies the positive counterpart in member IV. Although L4 and L5 have substantial opposing standalone powers, their cemented combination is weakly positive. The member is also deliberately thick: the patent singles out the axial thicknesses of members IV and V as important to the design's field-curvature strategy. [1, p. 4]

### L6 — Biconvex Positive, First Lens of Member V

`ne = 1.61114, νe = 45.92.` Glass: **H-BaF6 class (supplier unproven)**. Standalone `f = +29.548 mm`. [7; 8]

L6 begins the second thick positive cemented member immediately ahead of the stop. CDGM H-BaF6 closely reproduces the patent's native e-line coordinates, but the identification is retained only as a modern coordinate class because the historical supplier is not documented. [6]

### L7 — Positive Meniscus, Second Lens of Member V

`ne = 1.53430, νe = 48.66.` Glass: **S-TIL6 class (supplier unproven)**. Standalone `f = +53.773 mm`. [7; 8]

L7 is cemented to L6 across the positively refracting `r11` interface. The patent expressly states that this additional cemented surface is particularly effective in suppressing higher-order entrance-pupil and asymmetrical aberrations. The verified cemented member V has a net focal length of `+20.770 mm`; that value is computed for the complete thick cemented member rather than by conflating the standalone powers of L6 and L7. [1, p. 5; 7]

The current S-TIL6 label is again a class-level match at the e-line coordinates, not proof that the production lens used OHARA glass. [6]

### L8 — Biconcave Negative

`ne = 1.74618, νe = 27.97.` Glass: **FD3 (HOYA e-line catalog equivalent of historical SCHOTT SF3 class)**. Standalone `f = -15.132 mm`. [7; 8]

L8 is member VI, the biconcave negative lens immediately behind the diaphragm. The patent consistently places this negative member behind the stop as part of the rear component D. Its dense-flint coordinate pair is reproduced at the e line by HOYA FD3 (the historical SF3 class, `nd ≈ 1.740`, `νd ≈ 28.2`); the label is a catalog equivalent, not a supplier identification. [1, Fig. 3; 6]

### L9 — Positive Meniscus

`ne = 1.62287, νe = 60.06.` Glass: **N-SK16 class (supplier unproven)**. Standalone `f = +29.256 mm`. [7; 8]

L9 is the positive seventh member following L8. It repeats the same native e-line coordinate pair used by L2 and L4. Its placement between the negative sixth member and the final positive rear member forms the positive recovery section of component D. [1, Fig. 3]

### L10 — Plano-Convex Positive

`ne = 1.59142, νe = 61.03.` Glass: **N-SK5 (SCHOTT e-line catalog equivalent)**. Standalone `f = +34.716 mm`. [7; 8]

L10 is the final positive member and is plano-convex in the implemented prescription. Its coordinate pair is reproduced at the e line by SCHOTT N-SK5 (`ne = 1.59142`, `νe = 61.02`), the modern successor of the classic SK5 barium crown; the label is a catalog equivalent, and the patent does not identify the melt or vendor. [6]

## Glass Identification and Selection

The patent supplies `ne` and `νe` only; it does not publish `nC`, `nF`, `ng`, or `dPgF`. The catalog work therefore supports present-day coordinate classes, not historical melt identification or a claim of anomalous partial dispersion. No APO classification is inferred from these data. [1, p. 4; 6]

| Source coordinate | Elements | Implemented glass label | Current-catalog comparison |
|---|---|---|---|
| `1.52736 / 64.31` | L1 | PC3 (PK3 class) | HOYA PC3 `ne=1.52736`, `νe=64.41`; `Δne=0.00000`, `Δνe=+0.10` |
| `1.62287 / 60.06` | L2, L4, L9 | N-SK16 class | SCHOTT N-SK16 `ne=1.62286`, `νe=60.08`; `Δne=-0.00001`, `Δνe=+0.02` |
| `1.66104 / 57.08` | L3 | K-LaK11 (LaK11 class) | SUMITA K-LaK11 `ne=1.66104`, `νe=57.02`; `Δne=0.00000`, `Δνe=-0.06` |
| `1.53530 / 45.67` | L5 | FTM8 proxy | OHARA FTM8 `ne=1.53532`, `νe=45.59`; `Δne=+0.00002`, `Δνe=-0.08` |
| `1.61114 / 45.92` | L6 | H-BaF6 class | CDGM H-BaF6 `ne=1.611135`, `νe=45.91`; `Δne=-0.000005`, `Δνe=-0.01` |
| `1.53430 / 48.66` | L7 | S-TIL6 class | OHARA S-TIL6 `ne=1.534304`, `νe=48.55`; `Δne=+0.000004`, `Δνe=-0.11` |
| `1.74618 / 27.97` | L8 | FD3 (SF3 class) | HOYA FD3 `ne=1.74619`, `νe=28.03`; `Δne=+0.00001`, `Δνe=+0.06` |
| `1.59142 / 61.03` | L10 | N-SK5 | SCHOTT N-SK5 `ne=1.59142`, `νe=61.02`; `Δne=0.00000`, `Δνe=-0.01` |

These modern matches are useful for classifying the optical-coordinate neighborhood, but they cannot establish that Schneider or Leitz purchased those exact catalog glasses in the 1960s. The distinction is especially important here because the patent uses native e-line data whereas many six-digit glass families are normally indexed from d-line coordinates. [6]

## Focus Mechanism

The implemented prescription has **NO_INTERNAL_RECONSTRUCTION**. The patent does not publish focus-state prescriptions, variable air gaps, group travel, object-distance tables, or any internal movement law for Example 3. The data file therefore contains no focus `var` entries and represents only the published static optical state. [1; 8]

Manufacturer literature gives the production Super-Angulon-R 21 mm f/4 a 0.2 m minimum focus distance and describes a non-rotating focusing mount. Those facts establish production focusing capability, but they do not determine whether the patented optical stack moved as a unit or whether any internal compensation occurred. The 0.2 m value is consequently retained as product metadata only and is not used to synthesize a close-focus prescription. [3]

## Conditional Expressions

US 3,512,874 defines two sets of focal-length inequalities. The bundled verifier recomputes the member powers from the final data and confirms that all 15 of these conditions pass after uniform scaling. [1, p. 4; 7]

| Member-to-system condition | Result |
|---|---|
| `6f < |fI| < 10f` | Pass |
| `2f < |fII| < 3f` | Pass |
| `0.9f < |fIII| < 1.5f` | Pass |
| `6f < |fIV| < 15f` | Pass |
| `0.8f < |fV| < 1.2f` | Pass |
| `0.6f < |fVI| < 0.8f` | Pass |
| `1.1f < |fVII| < 1.5f` | Pass |
| `1.3f < |fVIII| < 2f` | Pass |

| Condition relative to member III | Result |
|---|---|
| `5|fIII| < |fI| < 8|fIII|` | Pass |
| `1.5|fIII| < |fII| < 2.5|fIII|` | Pass |
| `5|fIII| < |fIV| < 12|fIII|` | Pass |
| `0.7|fIII| < |fV| < |fIII|` | Pass |
| `0.5|fIII| < |fVI| < 0.8|fIII|` | Pass |
| `|fIII| < |fVII| < 1.4|fIII|` | Pass |
| `1.2|fIII| < |fVIII| < 1.7|fIII|` | Pass |

The separate U.S. prose statement that members IV and V should each be about 2.5–5 times `|fIII|` does not agree with Example 3 and is not treated as another passing condition. The final model retains the numerical prescription and the explicit discrepancy record rather than modifying the example to force that sentence to pass. [1, p. 4; 5; 7]

## Verification Summary

The final data file was reloaded by the portable verifier rather than re-entered as a separate prescription. A TypeScript-aware AST loader accepts only the literal data payload and rejects unsupported expression syntax. An intentionally altered source radius is also detected by the source-to-data comparison. [7]

| Quantity | Verified value | Interpretation |
|---|---:|---|
| Effective focal length | `20.99932 mm` | Final scaled model |
| Rear-vertex BFD | `36.52267 mm` | Surface 18 vertex to paraxial image plane |
| First-to-last-vertex track | `50.28450 mm` | Surface 1 to surface 18 |
| `BFD/EFL` | `1.73923` | Retrofocus by project criterion |
| `TL/EFL` | `2.39458` | Not telephoto by project criterion |
| Petzval sum | `+0.00366568 mm⁻¹` | Surface-by-surface paraxial sum |
| Entrance-pupil semi-diameter | `2.62492 mm` | From modeled stop and front-group matrix |
| Modeled wide-open f-number | `4.00000` | Calibrated to the patent's published f/4 |

The final surface-to-image spacing uses the recomputed paraxial BFD rather than merely multiplying the patent's rounded `173.92` by 0.21. The difference is about `-0.00053 mm`, which avoids importing the source's rounding error into the implemented image plane. [7; 8]

The prescription is entirely spherical, so there are no aspheric surfaces, conic conventions, or coefficient transformations to analyze. Uniform scaling affects all lengths by 0.21 while leaving indices and Abbe numbers unchanged. [1; 8]

Repository-dependent LensVisualizer checks remain outside the bundled verification. The bundled dossier does not claim that project `buildLens()`, `validateLensData()`, runtime glass resolution, production render diagnostics, corpus tests, or the full build were executed. Those remain integration work rather than evidence for the optical claims above. [7]

## Sources and References

1. Walter Wöltche, **US 3,512,874, “Wide-Angle Objective of Large Back-Focal Length,”** United States Patent Office, granted May 19, 1970. See especially Fig. 3, pp. 4–7, Table 3, Table 4, and Claim 3. A copy is bundled with this dossier as `US3512874.pdf`.
2. Leitz / Leica, **manufacturer lens brochure**, p. 7, entry for the 21 mm SUPER-ANGULON-R f/4, catalog 11,813. Archival scan: https://www.pacificrimcamera.com/rl/01076/01076.pdf
3. Leitz / Leica, **Handbook of the LEICA-System Photography**, 4/81 edition, entry for the 21 mm SUPER-ANGULON-R f/4, code 11813. Archival scan: https://www.pacificrimcamera.com/rl/03440/03440.pdf
4. E. Leitz, Inc. / Ernst Leitz GmbH, **Leica and Leicaflex Cameras and Accessories — Catalog No. 41**, printed 6-68, specifications effective June 1, 1968, printed p. 20. https://www.cameramanuals.org/leica_pdf/leica_leicaflex_accessories.pdf
5. **DE 1 497 596 A1**, German priority-family publication, consulted only to resolve direct contradictions in the selected U.S. source. https://patents.google.com/patent/DE1497596A1/en
6. Current authoritative glass references used for coordinate-class review: SCHOTT Optical Glass Pocket Catalog (N-SK16), https://www.us.schott.com/shop/medias/schott-optical-glass-pocket-catalog-jan-2018-us.pdf; SCHOTT Optical Glass Datasheet Collection (N-SK5), https://media.schott.com/api/public/content/820eba3413cc4e788433a3751f8edba9?download=true&v=97b3ea2b; OHARA S-TIL6 datasheet, https://oharacorp.com/wp-content/uploads/2025/04/estil06.pdf; CDGM H-BaF6 datasheet, https://www.cdgmgd.com/webapp/pdf/H-BaF6.pdf. HOYA, HIKARI, and SUMITA current catalog resources were also checked for coverage; exact retrieval notes are preserved in `LeicaSuperAngulonR21mmf4.evidence.json`. The e-line values quoted for HOYA PC3 and FD3, SUMITA K-LaK11, OHARA FTM8 and SCHOTT N-SK5 were evaluated at 546.07 nm (with C′/F′ for `νe`) from the LensVisualizer glass catalog's published dispersion coefficients.
7. `LeicaSuperAngulonR21mmf4.results.json` and `LeicaSuperAngulonR21mmf4.verify.py`, bundled computational verification artifacts for the final data revision.
8. `LeicaSuperAngulonR21mmf4.data.ts`, the verified LensVisualizer candidate analyzed here.
