## Patent Reference and Design Identification

**Patent:** JP S48-71634 A  
**Filed:** 1971-12-27  
**Published:** 1973-09-27  
**Inventor:** Tomowaki Takahashi  
**Applicant:** Nippon Kogaku K.K.  
**Title:** Retrofocus-type super-wide-angle distortion-free photographic lens  
**Embodiment analyzed:** The second numerical prescription, 球面光学系（参考資料）, “spherical optical system (reference material),” beginning on PDF page 3 (printed 165) and continuing on PDF page 4 (printed 166).

The patent does not number this table as an example; it is the all-spherical comparison prescription printed after the patent's single aspheric embodiment. The aspheric embodiment, its coefficients, and its aberration curves are not the present optical model.

The model is shown under the name of the 1973 NIKON NIKKOR-QD·C AUTO 15mm f/5.6, a fourteen-element, twelve-group lens. That is a plausible production correlation rather than a manufacturer-confirmed identification of this patent table. The evidence converges as follows:

1. The selected reference is specified at f = 15.3 mm and F/5.6, close to the manufacturer's marketed 15 mm f/5.6.
2. Both the spherical reference heading and Nikon's historical catalogue identify a 110° full field.
3. The patent applicant is Nippon Kogaku, and Nikon's historical account places the commercial 15 mm f/5.6 in 1973, contemporary with publication.
4. The table has fourteen elements in twelve groups, the construction of the Nikkor-QD·C Auto 15mm f/5.6, and its internal filter plate is compatible with that lens's built-in filter turret.

Nikon’s historical accounts attribute the production 15 mm design to Ikuo Mori, while this patent names Tomowaki Takahashi. The different attribution is an additional reason to keep the correlation qualified. [3, 7]

These points do not establish exact production radii, glass melts, aperture dimensions, or the production close-focus law. Nikon's catalogue describes floating close correction and a 0.3 m minimum focus distance; neither fact supplies numerical motion states for the reference prescription. [1–3]

## Optical Architecture

The model contains fourteen powered lens elements in twelve air-separated lens groups, plus a source-listed plane-parallel filter. Its data array therefore has fifteen optical material entries. Two cemented doublets account for the difference between powered element and group counts. This analysis numbers individual lens components L1–L14 and identifies the filter as F; the patent's sectional labels combine some cemented components into compound lenses.

At the source reference state, sequential reduced-angle tracing and independent ABCD multiplication give EFL = 15.309004 mm and BFD = 38.792875 mm. BFD is measured from the last lens vertex. The source's printed image-plane distance, 38.77 mm, remains in the model; it is not silently replaced by the computed paraxial best focus. The difference is consistent with propagated rounding of the tabulated prescription.

The first-to-last-vertex track is 81.400000 mm. The first principal plane is 46.550992 mm imageward of the first vertex, while the second principal plane is 23.483872 mm imageward of the last vertex. BFD exceeds EFL, supporting the retrofocus designation at this reference state. No uniform length scaling is applied.

The front block, surfaces 1–10, has isolated EFL -21.397461 mm. The block between filter and stop, surfaces 13–20, has isolated EFL +61.078893 mm; the post-stop block, surfaces 21–28, has isolated EFL +34.519140 mm. These are subassembly powers calculated in air, not a decomposition of the complete lens EFL into additive focal lengths. The initial negative block and subsequent converging structure provide the gross retrofocus distribution.

The stop is inferred in the air gap between surfaces 20 and 21. The undimensioned iris location is modeled at the gap midpoint. Its physical semi-diameter, 3.326993599 mm, is calibrated by exact on-axis spherical Snell tracing to the published F/5.6 target. This match is a calibration dependency, not independent evidence of the historical diaphragm diameter. With that same iris, the paraxial pupil calculation gives F/5.496339; the two conventions are deliberately kept separate.

The patent lists no semi-diameters. The modeled clear apertures follow the element rims of patent Fig. 1 (PDF p. 4), which draws the aspheric embodiment; its front group L1–L5 and filter share most radii with the spherical table. Measured at 0.1317 mm per pixel of the 352 dpi scan, the figure rims are about 38.5 mm (L1 front), 31 mm (L2), 18.8 / 14.8 mm (L3), 13.2 / 11 mm (L4), 10 / 8.2 mm (L5) and 9.7 mm (filter). An exact chief ray of this table at the 135 corner (ω = 55.3°, image height 21.65 mm) needs 38.4, 30.8, 30.5, 29.5, 18.9, 15.0, 14.2, 11.7, 11.1 and 9.6 mm on surfaces 1–10, so figure and ray trace agree within about 1 mm. Surfaces 1–12 are set to the larger of the two (39.0, 30.8, 31.0, 30.6, 19.0, 15.2, 14.3, 11.9, 11.2, 9.8, 9.7, 9.7 mm). Doublet D1 has very different thicknesses in the two tables and uses one common 8.0 mm rim. Behind the stop the figure is followed where it clears the beam (L11 front 4.3 mm, L14 7.6 / 7.8 mm); the figure draws doublet D2 narrower than the F/5.6 axial beam, so D2 and L8 remain ray-based.

With these apertures the traced chief ray reaches the full 135 corner at 55.3°, slightly beyond the 55° half-field the patent states (image height 21.43 mm). A meridional ray fan passes unvignetted to at least 33°, about 88% of the stop width at 45°, about 71% at 50°, and about 20% at the corner, where L1's front rim and the rear group cut the bundle from both sides. Two default geometry limits are raised because the 110° table requires it: surface 2 (R = 32.80 mm) is used to a 30.8 mm semi-diameter, the smallest 0.1 mm step that clears the 30.77 mm corner chief ray, which is a 69.9° rim slope, and the 10.3 mm air gap between L1 and L2 closes to about 0.53 mm at that rim. Fig. 1 draws the rear of L1 equally deep. These are modeled clear apertures; they do not establish the production lens's mechanical diameters, and skew-ray clearance is not checked.

## Element-by-Element Analysis

The numerical n/ν reference is unspecified in the patent. For consistency with the application schema, the following nd and νd labels denote the stored source coordinates under an approximate d-line tracing convention; they are not evidence that the original table explicitly specified the d line. Focal lengths are standalone thick-element values in air. At cemented interfaces, these individual powers differ from the net power of the bonded assembly.

### L1 — Negative Meniscus

nd = 1.78764, νd = 47.5. Glass: LaSF014 class — nearest J-LASF014 (HIKARI) / TAF4 (HOYA) at 1.78800 / 47.5, Δnd ≈ +0.0004; coordinate-compatible catalog class, supplier unconfirmed. f = -143.39 mm.

The first negative meniscus begins the diverging front section. Both curvature centres lie toward the image side, and the stronger rear curvature dominates its standalone power. Its sign is consistent with the front-group topology described by the patent; a specific aberration balance is not inferred solely from that sign. [1, spherical reference table]

### L2 — Positive Meniscus

nd = 1.71341, νd = 53.9. Glass: LaK8 class — nearest J-LAK8 (HIKARI) / LAC8 (HOYA) at 1.71300 / 53.9, Δnd ≈ −0.0004; coordinate-compatible catalog class, supplier unconfirmed. f = +93.19 mm.

This positive meniscus lies within the predominantly negative front block. Its comparatively thick glass path distinguishes it from the adjacent thin negative menisci. The patent contrasts this thickness with the thicker choice in the separate aspheric invention; the reference must retain its own value. [1, spherical reference table]

### L3 — Negative Meniscus

nd = 1.69320, νd = 53.5. Glass: LaK13 class — nearest LAC13 (HOYA) / S-LAL13 (OHARA) at 1.69350, Δnd ≈ +0.0003; coordinate-compatible catalog class, supplier unconfirmed. f = -67.91 mm.

This negative meniscus resumes the front section’s divergence after L2. Its location and power are directly established by the numerical prescription. The selected spherical table does not assign an independently quantified coma or chromatic contribution to this element. [1, spherical reference table]

### L4 — Negative Meniscus

nd = 1.69320, νd = 53.5. Glass: LaK13 class — nearest LAC13 (HOYA) / S-LAL13 (OHARA) at 1.69350, Δnd ≈ +0.0003; coordinate-compatible catalog class, supplier unconfirmed. f = -57.57 mm.

The second consecutive negative meniscus belongs to the same front divergent sequence. Unlike the corresponding aspheric embodiment, its surfaces are spherical; no S7 aspheric term may be imported into this prescription. [1, spherical reference table]

### L5 — Negative Meniscus

nd = 1.69684, νd = 55.6. Glass: LaK14 class — J-LAK14 (HIKARI) / S-LAL14 (OHARA) at 1.69680 / 55.5; coordinate-compatible catalog class, supplier unconfirmed. f = -63.73 mm.

The last negative meniscus of the front block precedes the internal filter. It completes the five-element front section. Its single-element power is not the same as the net power of that separated five-element assembly. [1, spherical reference table]

### F — Plane-Parallel Plate

nd = 1.51743; νd is not published. Glass: Unmatched — filter glass with no published Abbe number. Standalone refractive power is zero.

The patent explicitly identifies this plane plate as a filter and supplies an index and thickness, but no numerical Abbe value. Nikon’s catalogue describes an incorporated filter selector with a neutral-glass position. Retention models that source-listed neutral-filter state; the inference that a plate remains in the optical path is disclosed rather than quoted as a mandatory-insertion instruction. The plate is not counted as a powered lens element. No invented spectral dispersion is supplied. [1, spherical reference table]

### L6 — Biconcave Negative

nd = 1.84131, νd = 43.3. Glass: Unmatched — no coordinate-compatible catalog glass; dispersion falls back to the Abbe number. f = -15.76 mm.

This negative biconcave component is the front member of D1. Its rear face is the actual cemented boundary with L7; the model uses L7’s medium after that interface. The isolated-element focal length is computed with air on both sides for interpretation, while system tracing uses the true adjacent glass. [1, spherical reference table]

### L7 — Biconvex Positive

nd = 1.54800, νd = 45.9. Glass: LLF1 class — J-LLF1 (HIKARI) / LLF1 (SCHOTT) at 1.54814; coordinate-compatible catalog class, supplier unconfirmed. f = +16.70 mm.

The positive biconvex rear member of D1 follows the strongly curved cemented interface. The different source index and dispersion coordinate are retained rather than replaced with a synthetic cement layer. No anomalous-dispersion or secondary-spectrum performance follows from the two Abbe values alone. [1, spherical reference table]

### L8 — Negative Meniscus

nd = 1.69684, νd = 55.6. Glass: LaK14 class — J-LAK14 (HIKARI) / S-LAL14 (OHARA) at 1.69680 / 55.5; coordinate-compatible catalog class, supplier unconfirmed. f = -23.31 mm.

This negative meniscus separates the two bonded assemblies ahead of the stop. It remains an air-spaced physical lens. Its negative standalone sign should not be interpreted as proof of a particular field-curvature correction independent of the surrounding surfaces. [1, spherical reference table]

### L9 — Biconvex Positive

nd = 1.59483, νd = 35.6. Glass: flint — nearest FF5 (HOYA) at 1.59270 / 35.45, Δnd ≈ −0.0021; the catalog curve supplies dispersion only and is not a period identification. f = +11.33 mm.

The positive front member of D2 is biconvex when isolated in air. In the assembled prescription its rear surface leads directly into L10. Both surfaces and the common aperture are retained without an artificial air film. [1, spherical reference table]

### L10 — Plano-Concave

nd = 1.59160, νd = 58.2. Glass: SK13/BaCD13 class — nearest BACD13 (HOYA, obsolete) at 1.59181 / 58.3, Δnd ≈ +0.0002; coordinate-compatible catalog class, supplier unconfirmed. f = -21.13 mm.

The rear member of D2 is plano-concave. Its image-side face is plane and exits to the stop gap. Although the adjacent component has a similar index, their dispersion coordinates are distinct and must not be merged into a single material. [1, spherical reference table]

### L11 — Plano-Convex

nd = 1.59508, νd = 35.6. Glass: flint — nearest FF5 (HOYA) at 1.59270 / 35.45, Δnd ≈ −0.0024; the catalog curve supplies dispersion only and is not a period identification. f = +20.10 mm.

A plano-convex positive lens begins the post-stop block. The object-side plane is a refracting glass-entry surface, not an inactive dummy plane. Its finite rear curvature provides its standalone positive power. [1, spherical reference table]

### L12 — Biconcave Negative

nd = 1.86142, νd = 23.1. Glass: dense flint — nearest J-SFH2 (HIKARI) at 1.86074 / 23.08, Δnd ≈ −0.0007; a modern coordinate-compatible curve used for dispersion only, explicitly not a period glass. f = -11.01 mm.

The biconcave negative element follows L11 across air. It carries the smallest Abbe coordinate among the powered elements. That coordinate is evidence of relative dispersion within the patent table, not sufficient evidence of a named dense-flint melt or a quantitative correction allocation. [1, spherical reference table]

### L13 — Positive Meniscus

nd = 1.44772, νd = 67.2. Glass: Unmatched — no coordinate-compatible catalog glass; dispersion falls back to the Abbe number. f = +25.62 mm.

This positive meniscus has a weakly curved object-side face and a substantially stronger rear face. The unusual source index is preserved verbatim despite the lack of a close reviewed catalogue match. Replacing it with a more familiar catalogue glass would change the model. [1, spherical reference table]

### L14 — Biconvex Positive

nd = 1.50976, νd = 63.4. Glass: BK1 class — nearest BK1 (SUMITA) at 1.51009 / 63.4, Δnd ≈ +0.0003; coordinate-compatible catalog class, supplier unconfirmed. f = +43.76 mm.

The final biconvex lens has a weak front curvature and a stronger convex rear face. It completes the positive rear section and establishes the final vertex from which BFD is measured. The published rear image-space distance is retained independently of the computed paraxial focus. [1, spherical reference table]

## Glass Identification

No glass is assigned a confirmed manufacturer or melt identity. The source provides n and ν coordinates, with no wavelength specification or spectral-line indices; reading them as d-line values is an assumption. On that assumption nine of the fourteen lens elements fall on standard catalog classes within Δnd 0.0005 and Δνd 0.4, and three more (L9, L11, L12) borrow the nearest catalog curve at a larger index offset; the model uses those catalog dispersion curves for twelve of the fourteen elements while tracing the patent's own n values. The names identify coordinate-compatible catalog classes, not the glass supplier of the 1970s lens. The direct vendor review examined the current HOYA catalogue including obsolete entries and OHARA’s published numerical table, supplemented by a direct Hikari comparison. Current project catalogue shards supplied a separately identified, secondary six-vendor comparison; they do not substitute for a complete primary historical-catalogue search.

| Source n | Source ν | Used in | Disposition |
|---|---:|---|---|
| 1.44772 | 67.2 | L13 | Unmatched; no coordinate-compatible catalog glass |
| 1.50976 | 63.4 | L14 | BK1 class (nearest BK1 SUMITA, Δnd ≈ +0.0003) |
| 1.54800 | 45.9 | L7 | LLF1 class (J-LLF1 HIKARI / LLF1 SCHOTT) |
| 1.59160 | 58.2 | L10 | SK13/BaCD13 class (nearest BACD13 HOYA, Δnd ≈ +0.0002) |
| 1.59483 | 35.6 | L9 | Nearest FF5 HOYA (Δnd ≈ −0.0021, Δνd −0.15); dispersion curve only |
| 1.59508 | 35.6 | L11 | Nearest FF5 HOYA (Δnd ≈ −0.0024, Δνd −0.15); dispersion curve only |
| 1.69320 | 53.5 | L3, L4 | LaK13 class (nearest LAC13 HOYA / S-LAL13 OHARA, Δnd ≈ +0.0003) |
| 1.69684 | 55.6 | L5, L8 | LaK14 class (J-LAK14 HIKARI / S-LAL14 OHARA) |
| 1.71341 | 53.9 | L2 | LaK8 class (nearest J-LAK8 HIKARI / LAC8 HOYA, Δnd ≈ −0.0004) |
| 1.78764 | 47.5 | L1 | LaSF014 class (nearest J-LASF014 HIKARI / TAF4 HOYA, Δnd ≈ +0.0004) |
| 1.84131 | 43.3 | L6 | Unmatched; no coordinate-compatible catalog glass |
| 1.86142 | 23.1 | L12 | Nearest J-SFH2 HIKARI (Δnd ≈ −0.0007); modern curve, not a period glass |

Coordinate proximity under an assumed d-line convention cannot establish the original spectral reference, historical melt, or supplier, so every class label above is a dispersion model only. L6 and L13 have no catalog glass within tolerance. Their unusual coordinates (1.84131 / 43.3 and 1.44772 / 67.2) are printed identically in both of the patent's tables, and substituting the nearest period-plausible indices moves the computed back focus by 0.24 mm or more against the printed 38.77 mm, so they are the values the designer used, not misprints. The two 35.6 flints differ from each other by 0.00025 in index and sit about 0.002 above FF5, the nearest catalog flint. L12 (1.86142 / 23.1) lies near the modern J-SFH2 coordinate; that glass postdates the design and is used only as a dispersion curve. OHARA S- and L-prefixes remain distinct in the review. The plate’s missing Abbe value is left missing. No catalogue nC, nF, ng, or ΔPgF is written into the prescription; no apochromatic or anomalous-dispersion performance is asserted. [4–6]

## Focus Mechanism

Focus is not modeled. The patent table supplies one infinity prescription and no finite-distance spacing sequence, so all internal separations remain fixed and no variable-gap motion is invented.

The manufacturer’s production lens uses floating close correction and is described as focusing to 0.3 m. Those mechanical facts do not uniquely determine the travel of the selected patent reference. Accordingly, the data file’s very large closeFocusM value only marks focus as not modeled; it is not a physical minimum focus distance. [1–2]

## Conditional Expressions

The invention places a lower bound on the sum of selected thick positive-lens paths. The source comparison explicitly distinguishes its aspheric embodiment from the spherical reference analyzed here:

4.1 f > d3 + d13 + d14 + d18 + d19 > 1.9 f.

For the selected spherical reference, the thickness sum is 26.4 mm and its ratio to the published 15.3 mm focal length is 1.725490196. The source prints 1.726; the quotient from its rounded thickness and focal-length entries differs by −0.000509804, so that printed ratio is not exactly reproduced. It lies below 1.9, so the comparator does not satisfy the invention’s lower bound. That deliberate distinction is retained; the spherical comparison must not inherit the aspheric embodiment’s claimed condition satisfaction. [1, PDF p3 comparison table]

The surface-by-surface Petzval sum of the final prescription is 0.009174209014 mm⁻¹, using each refraction’s (n′−n)/(R n n′). This is a first-order curvature contribution, not an exact tangential/sagittal image-surface or distortion evaluation. The present model does not claim to reproduce the aspheric embodiment’s published aberration curves.

## Sources

1. Japan Patent Office, JP S48-71634 A, published 27 September 1973, supplied original JP_S4871634_A.pdf. PDF p1: filing, inventor and applicant; p3/printed165: spherical reference heading, system quantities and comparison condition; p4/printed166: complete spherical prescription. [Patent record](https://patents.google.com/patent/JPS4871634A/en). The supplied scan governs transcription; online record retrieval was unavailable during construction.
2. Nikon, *Objectifs Nikkor*, undated historical French manufacturer catalogue, archived scan. PDF p12/printed10: 15mm f/5.6, 110° field, floating close correction, 0.3m MFD and built-in filters; PDF p3: 24×36mm Nikon/Nikkormat system. [Catalogue](https://www.nikonpassion.com/wp-content/uploads/downloads/docs/ObjectifsNikkorAI.pdf).
3. Nikon, Haruo Sato, *NIKKOR—The Thousand and One Nights*, No.9, historical development discussion. [Manufacturer history](https://imaging.nikon.com/imaging/information/story/0009/). Supports contemporary 15mm f/5.6 product context, not patent attribution.
4. HOYA, *Optical Glass Catalog*, Zemax file dated 7 July 2026, including obsolete glasses. [Official download index](https://www.hoya-opticalworld.com/english/datadownload/index.html). Relevant raw rows and coordinate residuals are retained in the evidence record.
5. OHARA, published optical-glass numerical table, accessed 2 October 2026. [Manufacturer table](https://www.ohara-inc.co.jp/product/01000/).
6. Hikari Glass, *Optical Glass Catalog*, 1 September 2023, PDF p109, J-SFH2 comparison. [Manufacturer-hosted catalogue](https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf). Catalogue candidates are comparisons, not identified materials in this historical prescription.

7. Nikon, Kouichi Ohshita, *The Thousand and One Nights*, No.86. [Manufacturer design history](https://imaging.nikon.com/imaging/information/story/0086/index.html). Attributes the production 15 mm f/5.6 optics to Ikuo Mori.
