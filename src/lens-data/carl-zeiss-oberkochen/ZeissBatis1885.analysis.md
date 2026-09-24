## Patent Reference and Design Identification

**Patent:** JP 2015-96915 A\
**Application Number:** JP 2013-237051\
**Filed:** 2013-11-15\
**Priority:** 2013-11-15\
**Published:** 2015-05-21\
**Inventors:** Hirofumi Tabata; Yasuhiko Obikane (source: 太幡 浩文; 帯金 靖彦)\
**Applicant:** Tamron Co., Ltd.\
**Title:** インナーフォーカス式レンズ及び撮像装置\
**Embodiment analyzed:** Example 2 / Numerical Example 2 (Figures 6–10; Tables 4–6 and 25)

The prescription implemented here is Numerical Example 2 of JP 2015-96915 A. The patent describes an inner-focus
lens with a positive first group G1, a negative single-element second group G2 that moves axially for focus, and a
positive third group G3 that contains a negative single-element vibration-compensation group translated transverse to
the optical axis (JP 2015-96915 A, ¶0037, ¶0045, ¶0047). Example 2 is introduced at ¶0115, with its numerical data in
Tables 4–6 and its conditional-expression values in Table 25.

The association with the production ZEISS Batis 1.8/85 is a research correlation, not a manufacturer-confirmed patent
attribution. The patent applicant is Tamron Co., Ltd.; no primary ZEISS source in the dossier states that the Batis
1.8/85 uses this exact Example 2 prescription. The correlation is nevertheless unusually close across independent
specifications:

1. The patent gives 82.87 mm and Fno 1.85 at infinity, while ZEISS markets the lens as 85 mm f/1.8.
2. Both have 11 elements in 8 groups.
3. The patent gives a 28.60° full field at infinity and Figure 7 reaches image height Y = 21.633 mm, or a 43.266 mm
   diameter; ZEISS specifies 29° diagonal coverage and a 43.3 mm image field.
4. The patent gives |β| = 0.125 at the minimum-distance state, equivalent to 1:8; ZEISS specifies 1:7.9.
5. Example 2 includes a transversely shifted vibration-compensation element; the production lens has optical image
   stabilization.
6. The rounded patent prescription gives a paraxial object-to-image distance of approximately 0.810 m at its MOD state;
   ZEISS specifies a 0.80 m minimum focusing distance. These are not identical reference planes and therefore are only a
   correlation check.
7. The patent was filed in 2013 and published in 2015 in a mirrorless medium-telephoto context; the Batis 1.8/85 was
   introduced in the 2015 Batis family for Sony E-mount full frame.

One contrary detail remains material. The ZEISS datasheet places the production entrance pupil 18.2 mm in front of the
image plane, whereas paraxial imaging of the patent stop through the rounded Example 2 prescription places it about
12.03 mm in front of the source image plane. That discrepancy is retained rather than reconciled by changing the patent
model. The production identity should therefore be read as convergent inference, not proof.

## Optical Architecture

The patent formula is an 11-element, 8-group, all-spherical positive–negative–positive inner-focus design. It is best
described by its published group architecture rather than by imposing a classical family name on the patent formula.
ZEISS describes the production Batis 1.8/85 as a Sonnar design, but that manufacturer label is part of the production
correlation and does not establish the taxonomy of the Tamron patent example.

At infinity, the independently recomputed paraxial group powers from the finalized data are:

| Group | Physical content | Net EFL |
|---|---|---:|
| G1 | L1; cemented L2+L3; L4 | +61.792 mm |
| G2 | L5, single focus element | −57.134 mm |
| G3a | cemented L6+L7 | +74.898 mm |
| G3b / VC | L8, single stabilization element | −61.276 mm |
| G3c | cemented L9+L10; L11 | +64.094 mm |
| G3 overall | G3a + VC + G3c | +78.720 mm |

The distinction between individual-element power, cemented-stack power, and functional-group power matters here. For
example, L2 is individually positive and L3 individually negative, yet their cemented pair D1 is net negative at about
−87.093 mm. Conversely, L6 is individually negative and L7 individually positive, while their cemented G3a pair is net
positive at about +74.898 mm. The analysis therefore does not infer group behavior from a single component's sign.

The aperture stop lies behind G2 and ahead of G3a, as shown by source row 11 and the Figure 6 layout. This agrees with the
patent's preference for placing the stop imageward of the moving negative focus group (¶0050–¶0054). The source does not
publish a physical diaphragm diameter; the LensVisualizer stop semi-diameter is a modeled calibration discussed below.

The physical first-surface-to-image track, including the cover glass, is 98.701 mm, or 1.190 times the computed
infinity EFL (1.180 times on the air-equivalent path with the plate reduced to t/n), so the design does not satisfy the
project's strict `TL/EFL < 1` definition of a telephoto optical form. Its air-equivalent Gaussian BFD from the final
active surface is about 0.209 times EFL, so it is not retrofocus either. The patent itself uses “telephoto” in the focal-range sense for
medium-telephoto through super-telephoto applications; that wording is not used here as a strict first-order
classification (¶0040).

The source prescription includes two optically inactive air-to-air bookkeeping planes and a rear CG/filter plate. The
LensVisualizer model removes the two inactive planes and combines their adjacent air spaces without changing axial
stations. The source CG plate (surfaces 23–24, labeled CG in Figure 6) is modeled in `rearPlates`: surface 22 keeps the
printed 14.700 mm air gap, followed by the 2.500 mm plate at nd = 1.5168, νd = 64.20 and 1.000 mm air to the image. Every
analysis traces the plate, but the diagram does not draw it. Its paraxial equivalent is 17.348206751055 mm of air-equivalent
rear spacing. No dimensional scaling is applied.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.9037, νd = 31.31. Glass: 904313 — high-index lanthanum-flint class (supplier unproven). Standalone f = +72.515 mm.**

L1 is the front positive element of G1. Its standalone power is positive, and it precedes the D1 cemented pair and L4.
The patent assigns the first group positive power and discusses strong positive G1 power as part of its compact
medium-telephoto architecture (¶0043), but it does not isolate a named aberration correction to L1 alone.

### L2 — Biconvex Positive, front component of D1

**nd = 1.4970, νd = 81.61. Glass: 497816 — low-dispersion fluorine/phosphate-crown class (supplier unproven). Standalone f = +65.846 mm.**

L2 is cemented to L3 at the surface corresponding to source row 4. Its νd = 81.61 is the high-Abbe positive element used
by Example 2 for condition (6). The patent explicitly associates condition (6), νd1a ≥ 60, with reducing chromatic
aberration generated in G1 (¶0083–¶0087). This is a patent-stated design rationale; the data file itself carries only
d-line index and Abbe number, not measured line indices or anomalous partial-dispersion data.

### L3 — Biconcave Negative, rear component of D1

**nd = 1.7408, νd = 27.76. Glass: 741278 — dense-flint class (supplier unproven). Standalone f = −34.168 mm.**

L3 forms the negative member of D1. The two components together have a computed cemented-stack EFL of approximately
−87.093 mm despite L2's positive standalone power. D1 remains inside the overall positive G1; this illustrates why the
cemented stack and the complete group must be treated separately in first-order interpretation.

### L4 — Positive Meniscus

**nd = 1.6584, νd = 50.85. Glass: 658509 — dense-crown class (supplier unproven). Standalone f = +71.026 mm.**

L4 is the rear positive element of G1. It is also the image-side positive G1 element used in the Example 2 evaluation of
condition (9): νd2 − νd1b = 70.44 − 50.85 = 19.59. The patent frames that condition as control of the chromatic balance
between G1 and the moving G2 focus element (¶0098–¶0102).

### L5 — Biconcave Negative Focus Element

**nd = 1.4875, νd = 70.44. Glass: 487704 — low-index crown class (supplier unproven). Standalone f = −57.134 mm.**

L5 is the entire G2 focus group. It is a single negative element, matching the core architecture of ¶0037 and ¶0045.
From infinity toward the close state it moves imageward while G1 and G3 remain fixed. Its νd = 70.44 satisfies condition
(1), for which the patent specifically states that a high Abbe number reduces chromatic variation as the focus element
moves (¶0056–¶0060).

### L6 — Negative Meniscus, front component of D2 / G3a

**nd = 1.7847, νd = 25.72. Glass: 785257 — dense-flint class (supplier unproven). Standalone f = −39.905 mm.**

L6 is the negative component of the cemented G3a pair. Its individual sign should not be confused with the power of the
subgroup: the complete L6+L7 cemented pair is positive, with computed EFL +74.898 mm. The patent treats G3a as the
positive front subgroup ahead of the VC element (¶0048, ¶0072–¶0076).

### L7 — Biconvex Positive, rear component of D2 / G3a

**nd = 1.5928, νd = 68.62. Glass: 593686 — low-dispersion crown class (supplier unproven). Standalone f = +26.088 mm.**

L7 supplies the stronger positive standalone power within D2. Together with L6 it forms the positive G3a subgroup. The
patent's condition (4) applies to the net subgroup focal length, not to L7 by itself; the verified Example 2 ratio is
f3a/f = 0.90334 from the rounded prescription.

### L8 — Negative Meniscus VC Element

**nd = 1.8042, νd = 46.50. Glass: 804465 — lanthanum high-index class (supplier unproven). Standalone f = −61.276 mm.**

L8 is the complete G3b vibration-compensation group. The patent deliberately specifies a negative single-element VC group
inside G3 and translates it approximately perpendicular to the optical axis for image stabilization (¶0037, ¶0047–¶0048).
Example 2 states a 0.750 mm transverse VC displacement for the illustrated infinity-focus stabilization calculation
(¶0115).

The element's nd = 1.8042 and νd = 46.50 satisfy conditions (7) and (8). The patent links these limits to compact VC
motion and to controlling chromatic variation during decentering (¶0089–¶0096). Those are patent-stated goals; this
analysis does not claim an independently measured production stabilization response from the prescription alone.

### L9 — Biconvex Positive, front component of D3 / G3c

**nd = 1.8061, νd = 33.27. Glass: 806333 — high-index flint class (supplier unproven). Standalone f = +21.026 mm.**

L9 is the strong positive member of the D3 cemented pair. The computed cemented EFL of L9+L10 is +41.843 mm. That pair,
together with L11, forms the complete positive G3c rear subgroup with computed EFL +64.094 mm.

### L10 — Biconcave Negative, rear component of D3 / G3c

**nd = 1.4875, νd = 70.44. Glass: 487704 — low-index crown class (supplier unproven). Standalone f = −38.938 mm.**

L10 uses the same d-line coordinate class as the moving L5 focus element but serves a different structural role inside
D3. Its negative standalone power partially offsets L9 while leaving the cemented pair positive. No supplier or melt
identity is inferred from the repeated 487704 coordinate pair.

### L11 — Rear Negative Meniscus

**nd = 1.5182, νd = 58.96. Glass: 518590 — crown class (supplier unproven). Standalone f = −89.666 mm.**

L11 is the final active lens element and is a negative meniscus convex toward the image plane. The patent explicitly
recommends this orientation at the image side of G3, associating it with correction of field curvature and distortion and
with reduced susceptibility to sensor-reflection ghost paths (¶0049). That explanation is retained as a source claim;
no separate ghost analysis is implied by the paraxial model.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number for each element but does not identify glass suppliers or
melts. The data therefore uses supplier-neutral six-digit coordinate classes. Catalog matches below establish that the
coordinates are plausible public optical-glass classes; they do not prove which vendor supplied a production lens.

| Class | nd | νd | Elements | Coordinate-compatible catalog examples |
|---|---:|---:|---|---|
| 904313 | 1.9037 | 31.31 | L1 | CDGM H-ZLaF75A; HOYA TAFD25 |
| 497816 | 1.4970 | 81.61 | L2 | CDGM H-FK61; SCHOTT N-PK52A; near OHARA S-FPL51 |
| 741278 | 1.7408 | 27.76 | L3 | CDGM H-ZF50 |
| 658509 | 1.6584 | 50.85 | L4 | CDGM H-ZBaF50 |
| 487704 | 1.4875 | 70.44 | L5, L10 | CDGM H-QK3L; HOYA FC5; near SCHOTT N-FK5 |
| 785257 | 1.7847 | 25.72 | L6 | CDGM H-ZF13 |
| 593686 | 1.5928 | 68.62 | L7 | HOYA FCD515 |
| 804465 | 1.8042 | 46.50 | L8 | HOYA TAF3D; OHARA S-LAH65VS code-level cross-reference |
| 806333 | 1.8061 | 33.27 | L9 | HOYA NBFD15 / NBFD15-W |
| 518590 | 1.5182 | 58.96 | L11 | CDGM H-K10; OHARA S-NSL3 code-level cross-reference |

The catalog review included CDGM, HOYA, SCHOTT, OHARA, HIKARI, and SUMITA sources. Where several vendors occupy the same
coordinate class, the match is deliberately left at class level. In particular, OHARA S-prefix identities are not
silently converted to L-prefix families.

No `nC`, `nF`, `ng`, or `dPgF` fields are authored for these elements. Although some coordinate-compatible catalog
candidates publish such spectral data, the patent does not identify a supplier or melt, so candidate line indices are not
transferred into the prescription. Consequently, this model supports Abbe-level chromatic interpretation only; no APO or
anomalous-partial-dispersion performance claim is made.

## Focus Mechanism

Example 2 uses published inner focusing. G1 and G3 are fixed, while the single negative G2 element L5 moves imageward as
the object distance decreases (¶0041, ¶0045, ¶0115). Tables 4 and 6 publish three states:

| State | abs(β) | Published f | Published Fno | Published 2ω | Source d1 | Source d2 | G2 travel from INF |
|---|---:|---:|---:|---:|---:|---:|---:|
| INF | 0.000 | 82.87 mm | 1.85 | 28.60° | 3.248 mm | 13.725 mm | 0.000 mm |
| 1/40 | 0.025 | 82.01 mm | 1.85 | 27.39° | 4.580 mm | 12.393 mm | 1.332 mm imageward |
| MOD | 0.125 | 77.72 mm | 1.93 | 23.06° | 10.172 mm | 6.801 mm | 6.924 mm imageward |

The source gaps satisfy d1 + d2 = 16.973 mm at all three states. In the normalized model, source plane 8 is removed and
its preceding fixed 1.290 mm air space is folded into the G1–G2 gap. The resulting authored variable gaps are 4.538,
5.870, and 11.462 mm before G2, paired with 13.725, 12.393, and 6.801 mm after G2.

The implementation preserves all three source states rather than reconstructing a focus law. Its slider coordinates are
`[0, 0.229613661542, 1]`; the intermediate value is a modeling coordinate obtained from the normalized focus-distance
mapping, not a patent-published mechanical coordinate. Piecewise interpolation between the three authored states is a
viewer behavior and should not be read as additional published focus data.

ZEISS specifies a production minimum focusing distance of 0.80 m. The rounded patent prescription gives approximately
0.810 m object-to-image at its MOD conjugate. Because the reference planes differ and the product-to-patent identity is
not manufacturer-confirmed, these values are kept separate rather than forced into equality.

## Image Stabilization

The patent places the vibration-compensation group inside G3 as the single negative L8 element. For Example 2 it states a
0.750 mm displacement perpendicular to the optical axis for the infinity-focus stabilization calculation (¶0115). Figure
10 compares the centered and decentered states; the preceding general discussion says the transverse-aberration plots are
used to evaluate decentered coma and astigmatism during compensation (¶0113–¶0114).

The LensVisualizer prescription records L8's optical identity and group annotation but does not encode a live transverse
VC-control state. The 0.750 mm patent displacement is therefore a source fact described here, not a modeled UI movement.
ZEISS independently specifies optical image stabilization for the Batis 1.8/85, which supports the production correlation
but does not prove that the production VC mechanics are identical to this patent example.

## Conditional Expressions

Table 25 publishes Example 2 values for the patent's nine conditions. Independent recalculation from the rounded
prescription produces the following values. The small residuals in conditions (2)–(5) are retained because Table 25 is
printed to two decimal places and the surface prescription is itself rounded.

| Condition | Meaning | Recalculated value | Table 25 | Patent limit |
|---|---|---:|---:|---|
| (1) | νd of G2 focus element | 70.44 | 70.44 | ≥ 45.0 |
| (2) | f1 / f | 0.74526 | 0.74 | 0.30–1.20 |
| (3) | f3 / f | 0.94943 | 0.94 | 0.30–3.30 |
| (4) | f3a / f | 0.90334 | 0.91 | 0.20–1.70 |
| (5) | f3c / f | 0.77302 | 0.76 | 0.50–5.00 |
| (6) | νd of qualifying positive G1 element | 81.61 | 81.61 | ≥ 60.0 |
| (7) | nd of VC element | 1.8042 | 1.80 | ≥ 1.6 |
| (8) | νd of VC element | 46.50 | 46.50 | 25.0–70.0 |
| (9) | νd2 − νd1b | 19.59 | 19.59 | −25.0–60.0 |

All nine inequalities are satisfied by the rounded Example 2 data. The largest displayed-table residual is condition (5),
where the recomputation gives 0.77302 against the printed 0.76. It is treated as source-precision rounding, not silently
rewritten to equality.

## Verification Summary

The finalized LensVisualizer data retains the patent dimensions without uniform scaling. Independent height/reduced-angle
tracing and a separately implemented ABCD calculation give an infinity EFL of 82.913030 mm, compared with the patent's
82.87 mm. At the published 1/40 and MOD states, the recomputed EFLs are 82.043074 mm and 77.730630 mm respectively,
consistent with the rounded Table 4 values 82.01 mm and 77.72 mm within the source-precision tolerances used for the
dossier.

The source rear path includes a 2.500 mm CG plate, modeled in `rearPlates` rather than drawn. The printed rear path
(14.700 mm air + 2.500 mm plate + 1.000 mm air) is equivalent to 17.348206751055 mm of air, which differs from the
air-equivalent Gaussian BFD of the rounded active prescription by only 0.007293 mm. This comparison uses the final active
surface as the BFD reference plane; the patent's printed 18.20 mm FB is the physical distance through air plus the
refractive plate and therefore is not directly interchangeable with that Gaussian BFD.

Petzval curvature was recomputed surface by surface as `φ/(n·n′)`. The active prescription sums to
+0.001241061776 mm⁻¹, corresponding to a reciprocal radius of approximately +805.762 mm. This is a first-order Petzval
quantity, not a traced best-fit field-curvature result.

The patent identifies the aperture-stop position but gives no physical diaphragm diameter. The model therefore sets the
stop semi-diameter to 11.170016651708 mm by calibrating the infinity state to Fno = 1.85. Agreement at infinity is a
calibration result, not independent evidence for the manufactured diaphragm. With that one fixed stop, the paraxial model
gives Fno ≈ 1.85031 at both the 1/40 and MOD states, while Table 4 prints 1.93 at MOD. Because the source supplies neither
a stop diameter nor a focus-dependent iris law, the mismatch is preserved rather than inventing a variable stop.

The patent also publishes no clear-aperture semi-diameters. The `sd` values are therefore modeled from exact spherical
meridional on-axis marginal rays and full-field chief rays, normally with roughly 8% allowance. The limiting surfaces 5
and 6 use 16.0 mm semi-diameters, satisfying the default 90% gap-intrusion policy across their 1.501 mm air gap.
The 600 dpi Fig. 6 audit enlarges the rear doublet S18–S20 to 15.8 mm and S22 to 16.8 mm; S21 is limited to 14.5 mm
to maintain clearance from S20. The previous lens-specific gap-policy override is removed. These dimensions are visualization/model apertures, not patent dimensions or production
measurements.

No aspherical surfaces occur in Example 2, so there is no asphere equation, conic conversion, coefficient scaling, or
asphere-departure analysis for this embodiment.

## Sources and References

1. Japan Patent Office, **JP 2015-96915 A**, *インナーフォーカス式レンズ及び撮像装置*, published 2015-05-21.
   Relevant material: ¶0037–¶0054 (architecture and stop), ¶0056–¶0102 (conditions), ¶0115–¶0119 (Example 2),
   Tables 4–6, Table 25, Figures 6–10. <https://patents.google.com/patent/JP2015096915A/en>
2. ZEISS, **ZEISS Batis 1.8/85 — Technical Specifications**, rev. 04/17. Product focal length, aperture, 11/8
   construction, image field, angular field, minimum focus, reproduction ratio, entrance-pupil position, and Sony E
   system data. <https://www.zeiss.com/content/dam/pno/downloads/photo-lenses/datasheets/batis-lenses/datasheet-zeiss-batis-1885.pdf>
3. ZEISS, **Batis Lenses — Batis 1.8/85**. Product family and optical image-stabilization context.
   <https://www.zeiss.com/photonics-and-optics/en/photography/products/lenses-for-mirrorless-system-cameras/batis-lenses.html>
4. ZEISS, **Mirrorless System Lenses brochure**. Batis system/product context.
   <https://www.zeiss.com/content/dam/consumer-products/downloads/photography/brochures/en/brochure-zeiss-mirrorless-system-lenses-en.pdf>
5. CDGM, **Optical Glass Database**. Coordinate-class checks for H-ZLaF75A, H-FK61, H-ZF50, H-ZBaF50, H-QK3L,
   H-ZF13, and H-K10. <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>
6. HOYA Optics Division, **Optical Glass for Polished Lenses** and associated technical notes. Coordinate-class checks
   for TAFD25, FC5, FCD515, TAF3D, and NBFD15. <https://www.hoya-opticalworld.com/english/products/kenma.html>
7. SCHOTT, **Optical Glass catalog / N-PK52A datasheet**. Coordinate comparison for the 497816 class and related checks.
   <https://media.schott.com/api/public/content/a2a92fcce8144b9eaa7f5dcd2666d258?v=09326c27>
8. OHARA, **Optical Glass Pocket Catalog** and current glass chart. Cross-checks including S-FPL51 and code-level
   references; S-prefix identities are retained as published. <https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf>
9. HIKARI GLASS, **General Optical Glass Catalog**. Independent coordinate-coverage check.
   <https://www.hikari-g.co.jp/optical_glass/catalog/>
10. SUMITA OPTICAL GLASS, **Optical Glass Data Downloads / Precision-Molding Materials**. Independent coordinate-coverage
    check. <https://www.sumita-opt.co.jp/en/download/>
