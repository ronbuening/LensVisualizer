## Patent Reference and Design Identification

**Patent:** US 2,975,673  
**Application Number:** US 836,195  
**Filed:** August 26, 1959  
**Priority:** August 30, 1958 (Germany)  
**Granted:** March 21, 1961  
**Inventors:** Walter Mandler; Erich Wagner  
**Assignee:** Ernst Leitz Canada Ltd., Optical Works  
**Title:** High Aperture Photographic Objective  
**Embodiment analyzed:** Example 1 — Fig. 1 / Table 1

US 2,975,673 describes a high-aperture photographic objective of the Gauss type and gives two numerical examples. The
implemented prescription is Example 1 only. Fig. 1 establishes the seven-element, five-group arrangement and places the
diaphragm between the front cemented negative meniscus and the inserted positive meniscus. Table 1 publishes the system as
normalized focal length `f = 1.0`, full image angle `64°`, and relative aperture `1:1.4`; it tabulates refractive index and
dispersion on the e-line basis as `n_e` and `μ_e`.[1]

The LensVisualizer model applies a uniform scale of exactly 35.0 to every patent length, while retaining the patent's native
e-line coordinates. Because the tabulated prescription is rounded, the scaled model computes to an effective focal length
of **35.1432 mm**, rather than being renormalized to exactly 35.000 mm. The production value remains separately identified
as the marketed 35 mm focal length.

The production correlation is strong but is not manufacturer-confirmed patent attribution. Leica states that the current
Summilux-M 35 f/1.4 Classic uses an optical design identical to the lens introduced in 1961, and its current technical data
specify seven lenses in five assemblies, 35 mm f/1.4 coverage for 24 × 36 mm, and Leica M bayonet mounting.[2][3] These
facts agree closely with Example 1 and its 1961 grant timing. Leica's current specification gives a 62.5° diagonal angle of
view, however, whereas the patent prints a 64° full image angle; the two source values are retained as different facts rather
than forced into agreement.[1][3]

## Optical Architecture

The patent calls the design a modification of a Gauss-type objective. In front-to-rear order the five air-separated groups
are a positive meniscus, a cemented negative meniscus, a positive meniscus, a second cemented negative meniscus, and a final
positive meniscus. The implemented air-bounded group powers therefore follow a **positive–negative–positive–negative–positive**
sequence. Their independently computed equivalent focal lengths are approximately +59.13 mm, −135.71 mm, +80.11 mm,
−249.43 mm, and +42.55 mm, respectively. These group values are equivalent air-bounded powers; they are not sums of the
standalone element powers and are not presented as in-situ ray-power contributions.

The structurally distinctive part of the patent is the positive concave meniscus L4 located between the diaphragm region
and the rear cemented negative meniscus. The patent explicitly ties this insertion, and the relation of its rear radius to
the next negative-meniscus surface, to reducing the zone of sagittal field curvature and the associated sagittal-coma
component described in the specification.[1] That stated patent rationale is kept separate from any additional aberration
assignment that might otherwise be inferred from element power or glass class alone.

The first-to-last vertex track of the scaled model is **32.424 mm**. The computed `TL/EFL` ratio is **0.92263**, so it meets
the project's numerical short-track/telephoto criterion, while the `BFD/EFL` ratio is **0.54396** and therefore does not
meet the project's retrofocus criterion. These ratios are numerical classifications only; the architectural designation
used here remains the patent's own Gauss-type description.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**n_e = 1.72341, ν_e = 50.10. Glass: LAC10 coordinate-compatible catalog proxy (historical supplier unproven). f = +59.13 mm.**

L1 is the front positive member and constitutes the first air-bounded positive group. Its standalone power is computed from
the final scaled radii, thickness, and native e-line index. Current catalog coordinates place this melt near the 720503
lanthanum-crown family, but the patent does not identify a supplier or historical melt, so the data file deliberately uses a
class label rather than a named historical glass.

### L2 — Positive Meniscus, Front Cemented Doublet

**n_e = 1.78990, ν_e = 48.00. Glass: Unmatched (native e-line 1.7899 / 48.0; no exact current-catalog identity). f = +27.39 mm.**

L2 is the positive member of the front cemented doublet D1. It shares the cemented interface at surface 4 with L3. The
native e-line coordinate recurs in L4 and L6, but the six-vendor catalog audit did not establish an exact current public
catalog identity, so no supplier or glass name is assigned.

### L3 — Negative Meniscus, Front Cemented Doublet

**n_e = 1.70444, ν_e = 29.84. Glass: SF15 coordinate-compatible catalog proxy (historical supplier unproven). f = −18.46 mm.**

L3 is the negative member of D1. In the patent description, its air-facing concave surface `r5` faces the diaphragm.[1]
Although L2 is positive and L3 is negative as standalone elements, the cemented pair is evaluated separately as one
negative air-bounded group with equivalent focal length about −135.71 mm. This avoids treating the two standalone powers as
though they added directly in the assembled objective.

### L4 — Positive Meniscus, Concave to Object

**n_e = 1.78990, ν_e = 48.00. Glass: Unmatched (native e-line 1.7899 / 48.0; no exact current-catalog identity). f = +80.11 mm.**

L4 is the patent's inserted positive concave meniscus immediately behind the diaphragm region. Its standalone focal length
is **80.1056 mm** after the 35× scale. The patent does not identify this repeated `1.7899 / 48.0` material by supplier or
catalog name, and the data therefore preserves the same `Unmatched` treatment used for L2 and L6.

### L5 — Negative Meniscus, Rear Cemented Doublet

**n_e = 1.76167, ν_e = 27.34. Glass: SF4-class dense flint (755276 family; supplier unproven). f = −21.50 mm.**

L5 is the negative member of rear cemented doublet D2. Its strongly curved front surface `r8` faces toward the diaphragm,
matching the sequence described in the patent. Current-catalog coordinates are compatible with the 755276 SF4 family, but
this is a class match only and is not evidence that a particular supplier's glass was used in the 1959 design.

### L6 — Positive Meniscus, Rear Cemented Doublet

**n_e = 1.78990, ν_e = 48.00. Glass: Unmatched (native e-line 1.7899 / 48.0; no exact current-catalog identity). f = +28.60 mm.**

L6 is cemented to L5 at surface 9 and forms the positive member of D2. The assembled D2 group remains slightly negative in
its air-bounded equivalent power, with an equivalent focal length of about −249.43 mm. That group result is distinct from
L6's standalone +28.60 mm focal length.

### L7 — Rear Positive Meniscus

**n_e = 1.72056, ν_e = 47.59. Glass: S-LAM3-class lanthanum flint (717479 family; supplier unproven). f = +42.55 mm.**

L7 is the final positive meniscus between the rear cemented group and the image plane. The patent's `r11 = −20.0000`
normalizes to the weakly curved −700 mm front surface in the scaled model; the much stronger rear surface completes the
positive meniscus. Its e-line coordinate is closely compatible with the current OHARA S-LAM3 family, but the historical
supplier remains unproven.

## Glass Identification and Selection

Native e-line coordinates are preserved; catalog curves are evaluated at C′/e/F′. Six-digit d-line codes alone do not resolve these elements.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| L1 | 1.72341 / 50.1 (e) | LAC10 |
| L2 | 1.7899 / 48 (e) | Unresolved; patent-coordinate fallback |
| L3 | 1.70444 / 29.84 (e) | SF15 |
| L4 | 1.7899 / 48 (e) | Unresolved; patent-coordinate fallback |
| L5 | 1.76167 / 27.34 (e) | SF4 |
| L6 | 1.7899 / 48 (e) | Unresolved; patent-coordinate fallback |
| L7 | 1.72056 / 47.59 (e) | S-LAM3 |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. Unresolved rows retain their source-based fallback; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. US 2,975,673 publishes one fixed Example 1 prescription and no
finite-focus spacing table or mechanism constraints from which a unique internal motion law could be solved.[1] The data
file consequently has empty `var` and `varLabels` objects and keeps the patent prescription fixed.

Leica specifies a current focus range of **1 m to infinity** for the Classic reissue.[3] The model stores `closeFocusM: 1.0`
only as manufacturer product metadata required by the current schema. It is not used to move an element or group and is not
presented as a reconstruction of the 1961 focusing mechanism.

## Conditional Expressions

The two patent conditions explicitly carried into the numerical verifier are satisfied by Example 1.[1]

| Patent condition | Verified Example 1 value | Result |
|---|---:|---|
| `|r7| / |r8| ≥ 2` | 2.50551 | Satisfied |
| Preferred `|r7| / |r8| ≈ 2.4–2.6` | 2.50551 | Within preferred interval |
| Inserted positive meniscus focal length > objective focal length | 2.28873× | Satisfied |
| Preferred inserted-meniscus/objective focal-length ratio ≈ 2–2.5 | 2.28873× | Within preferred interval |

The focal-length ratio above uses L4's independently computed standalone focal length against the patent's published
normalized objective value `f = 1.0`, exactly as the patent condition is framed. It is not calculated by dividing L4 by the
slightly different recomputed 35.1432 mm system EFL.

## Verification Summary

The final data revision is a 35× dimensional scaling of the patent prescription with one inserted `STO` plane. Direct
sequential height/reduced-angle tracing and an independent ABCD implementation give the same first-order model. The final
computed EFL is **35.1432 mm** and the paraxial back focal distance is **19.1164 mm** from the surface-12 rear vertex. The
published scaled image distance `a5` is 19.1415 mm; the small difference is retained and remains compatible with the
source-precision treatment established for the rounded patent table rather than being removed by renormalization.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives **0.00711753 mm⁻¹**, corresponding to a Petzval radius of
**140.498 mm**. These are first-order model quantities, not manufacturer performance specifications.

The patent locates the diaphragm only schematically within `a2`. The model therefore places `STO` at **57.10%** of the
`r5→r6` gap measured from `r5`, preserving the published total gap exactly. Its **8.08977 mm** semi-diameter is calibrated to the patent's f/1.4 target; the resulting entrance-pupil semi-diameter is **12.5511 mm** and the modeled f-number is 1.4 by
construction. That agreement does not independently establish the physical production diaphragm diameter.

Direct production tracing also finds on-axis near-marginal clipping at surface 5 in the imported aperture model. That pre-existing limit is retained; the nominal f/1.4 stop calibration does not prove full-pupil transmission.

The patent supplies no clear semi-diameters. The front and final element rims are now 13 and 10.4 mm, respectively, following Fig. 1. Inner apertures retain the geometry-constrained model. These are inferred optical rims, not published dimensions; previous ray-envelope clearance results do not establish field clearance for this revised aperture set.

No aspherical surface, diffractive surface, rear filter/cover plate, dummy optical plane, zoom state, or reconstructed
finite-focus state is introduced.

## Sources

1. Walter Mandler and Erich Wagner, **“High Aperture Photographic Objective,” US Patent 2,975,673**, granted March 21,
   1961. Example 1: Fig. 1 (patent PDF p. 1), Table 1 and descriptive text (patent PDF p. 2), claim repetition (patent PDF
   p. 3). https://patents.google.com/patent/US2975673A/en
2. Leica Camera AG, **“Summilux-M 35 f/1.4”** — manufacturer product page; states the current Classic optical design is
   identical to the lens launched in 1961. https://leica-camera.com/en-US/photography/lenses/m/summilux-m-35mm-f1-4
3. Leica Camera AG, **“Summilux-M 35 f/1.4 — Technical Specification”** — 24 × 36 mm, 62.5° diagonal view, 7 lenses / 5
   assemblies, 1 m–∞ focus, Leica M bayonet. https://leica-camera.com/en-US/photography/lenses/m/summilux-m-35mm-f1-4/technical-specification
4. Leica Camera AG, **“PR: Leica Summilux-M 35 f/1.4,”** October 20, 2022 — launch in 1961 and production-history context.
   https://leica-camera.com/en-US/press/leica-summilux-m-35-f14
5. CDGM, **H-LaK8A Optical Glass Data Sheet**. https://www.cdgmgd.com/webapp/pdf/H-LaK8A.pdf
6. SUMITA Optical Glass, **Optical Glass Data Book, version 14.02** (August 21, 2026).
   https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf
7. HOYA, **E-FD15L Optical Glass Data Sheet**. https://www.hoya-opticalworld.com/common/pdf2019/E-FD15L.pdf
8. HIKARI GLASS, **J-SF15 Optical Glass Data Sheet**.
   https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/SF/J_SF15.pdf
9. SCHOTT, **Optical Glass 2025 Collection**; HIKARI GLASS, **J-SF General Optical Glass**.
   https://media.schott.com/api/public/content/e13dfb26ab7e44c792ba5c12f7382f1f?download=true&v=93796fb8
   https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sf/
10. OHARA, **Current Optical Glass Catalog — S-LAM family / S-LAM3**. https://www.ohara-inc.co.jp/en/product/01000/
