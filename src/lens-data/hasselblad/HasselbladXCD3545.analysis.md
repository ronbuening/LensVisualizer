## Patent Reference and Design Identification

**Patent:** WO 2017/221949 A1\
**Application Number:** PCT/JP2017/022757\
**Priority:** 2016-06-21\
**Filed:** 2017-06-20\
**Published:** 2017-12-28\
**Inventor:** Akira Sawamoto\
**Applicant:** Nittoh Inc.\
**Embodiment analyzed:** Example 1

The modeled lens is **HASSELBLAD XCD 45mm f/3.5**, using Example 1 of WO 2017/221949 A1 as the fixed prescription source. The patent-to-production identification is a strong correlation rather than a documented Hasselblad attribution. Example 1 publishes a 45.027 mm focal length, f/3.5, a 56 mm image circle, nine elements in seven air-spaced groups, and rigid full-system focusing. Hasselblad publishes the XCD 3,5/45 as a 45.0 mm f/3.5 X-system lens with nine elements in seven groups and full focusing. The patent priority date also precedes Hasselblad's 28 February 2017 X/H-system lens brochure that lists the XCD 3,5/45.

The correlation therefore rests on the convergence of focal length and aperture, the 9/7 optical count, the unit-focus mechanism, the large image circle appropriate to the X-system format, and compatible timing. None of these points by itself establishes manufacturer confirmation, and the data file preserves that distinction in its subtitle.

Example 1 is all-spherical and is used at its published scale (`s = 1`). The patent publishes effective diameters for every listed optical plane; the data file uses these directly as semi-diameters (`sd = De/2`). No sensor cover glass, filter, inactive dummy plane, flare cutter, folded path, or mechanical plane is inserted because none is part of the selected Example 1 prescription.

## Optical Architecture

The design has two principal groups separated by the aperture stop. G1 has overall positive power and contains L1−, L2+, and the cemented C1 doublet L3+/L4−. G2 has overall negative power and contains the cemented C2 pair L5−/L6+, followed by L7+, L8−, and L9−. The nine physical elements therefore form seven air-spaced groups, with two cemented doublets immediately adjacent to the stop.

The stored raw d-line prescription computes G1 at approximately +29.034 mm and G2 at approximately −72.509 mm. The two cemented pairs are not interchangeable with their constituent element powers: C1 computes to approximately +23.390 mm as a cemented unit, whereas C2 computes to approximately −47.835 mm. The element focal lengths given below are standalone thick-element values calculated from each element's two bounding radii, thickness, and stored d-line index; the group values describe the elements in their assembled in-situ arrangement.

The patent describes the positive–negative system as a telephoto or inverse-retrofocus type (¶0021). Under the project's quantitative terminology, however, the final stored model has `LA/EFL = 1.0523` and `BF/EFL = 0.5958`; it is therefore not labeled either telephoto (`TL/EFL < 1`) or retrofocus (`BFD > EFL`) in LensVisualizer analysis. This is a taxonomy choice, not a correction to the patent's terminology.

The main architectural feature is the rear sequence L7+, L8−, L9−. The patent places the two negative menisci L8 and L9 at the image side to enlarge the available image circle while retaining back focus, then positions L7 immediately in front of them to control the beam entering that rear negative section (¶¶0024–0025). The facing concave surfaces of L8 and L9 are specifically identified by the patent as a means of limiting growth of the Petzval sum and the associated field curvature (¶0024).

## Element-by-Element Analysis

### L1 — Biconcave Negative

`nd = 1.54814`, `νd = 45.78`. Glass: **548458 class (vendor unproven)**. Standalone `f = −25.393 mm`.

L1 is the negative front element of G1. The patent makes this object-side element concave toward the object and uses it ahead of the positive L2 meniscus to widen the field while keeping the front diameter comparatively small (¶¶0015, 0022). Condition (4) constrains its first-surface radius relative to the published system focal length, making the front negative element part of the patent's wide-angle strategy rather than a weak protective front component.

### L2 — Positive Meniscus, Convex to Object

`nd = 1.91650`, `νd = 31.60`. Glass: **917316 class (vendor unproven)**. Standalone `f = +54.609 mm`.

L2 is a high-index positive meniscus immediately behind L1. The patent notes that part of its object-side convex surface lies within the image-side concavity of L1 (¶0015). In the assembled system this negative–positive front pair supplies field expansion while transferring the beam into the stronger positive part of G1.

### C1 — L3/L4 Cemented Positive–Negative Doublet

**L3:** `nd = 1.69700`, `νd = 48.52`. Glass: **697485 class (vendor unproven)**. Standalone `f = +18.114 mm`.\
**L4:** `nd = 1.69895`, `νd = 30.13`. Glass: **699301 class (vendor unproven)**. Standalone `f = −75.314 mm`.

L3 is biconvex and L4 is a negative meniscus convex toward the image. They share the cemented surface labeled 6 in the data file, with the junction assigned to downstream element L4. Their computed cemented focal length is approximately **+23.390 mm**, so C1 remains a positive unit even though its rear member is negative.

C1 faces the aperture stop from the object side. The patent explicitly associates C1, together with the corresponding stop-side pair C2, with correction of chromatic and other aberrations (¶0028). The data support only the published d-line index and Abbe-number contrast; they do not contain line indices or anomalous-partial-dispersion data sufficient for an APO or anomalous-dispersion claim.

### C2 — L5/L6 Cemented Negative–Positive Doublet

**L5:** `nd = 1.85026`, `νd = 32.27`. Glass: **850323 class (vendor unproven)**. Standalone `f = −11.252 mm`.\
**L6:** `nd = 1.64850`, `νd = 53.02`. Glass: **649530 class (vendor unproven)**. Standalone `f = +16.676 mm`.

C2 is the cemented pair immediately behind the stop, with the interface labeled 10 assigned to downstream element L6. The stored d-line prescription computes the cemented pair at approximately **−47.835 mm**. Figure 3 of the patent likewise gives C2 a negative focal length (−47.123 mm), while ¶0028 describes C2 in prose as having overall positive power. The numerical prescription and Figure 3 therefore conflict with that sentence; the analysis follows the numerical sign and does not silently rewrite either source statement.

C2 begins the overall negative G2 group. Its opposite-power elements and differing `νd` values provide the dispersion contrast that the patent cites as part of its chromatic-aberration correction, while the strongly negative standalone L5 power makes clear that the pair's net behavior cannot be inferred from L6 alone.

### L7 — Biconvex Positive

`nd = 1.85026`, `νd = 32.27`. Glass: **850323 class (vendor unproven)**. Standalone `f = +28.667 mm`.

L7 is the positive element immediately ahead of the final two negative menisci. The patent calls it the third lens and places it only 0.15 mm from L8 at the vertex spacing `d13`, the minimum air interval in this rear section (¶0025). Its function in the patent is to condition the beam entering L8/L9 so the rear negative elements can remain compact while preserving aberration correction.

### L8 — Negative Meniscus, Convex to Object

`nd = 1.83481`, `νd = 42.72`. Glass: **835427 class (vendor unproven)**. Standalone `f = −57.658 mm`.

L8 is the first of the two terminal negative menisci. Its image-side surface faces the object-side surface of L9 across the 6.63 mm air space, forming the opposed concave pair governed by condition (1). The patent attributes this rear pair to controlling the balance between image-circle enlargement, back focus, and field curvature (¶¶0006–0008, 0024).

### L9 — Negative Meniscus, Convex to Image

`nd = 1.48749`, `νd = 70.24`. Glass: **487702 class (vendor unproven)**. Standalone `f = −75.769 mm`.

L9 is the final optical element and has the lowest stored d-line index and highest Abbe number in the prescription. Its high `νd` is a source coordinate, not evidence of anomalous partial dispersion. The patent makes L9 a negative meniscus convex toward the image and assigns the terminal negative pair L8/L9 the role of producing a large image circle relative to the rear lens diameter while retaining back focus (¶0024).

## Glass Identification and Selection

The patent supplies `nd` and `νd` only and names no glass manufacturer. The data file therefore uses six-digit optical classes rather than asserting OHARA, HOYA, Schott, HIKARI, CDGM, Sumita, or another vendor. The published coordinate pairs have exact or near-exact matches in multiple public glass catalogs, but coordinate equivalence does not establish the actual production or patent melt.

| Elements | Stored glass annotation | nd | νd |
| --- | --- | ---: | ---: |
| L1 | 548458 class (vendor unproven) | 1.54814 | 45.78 |
| L2 | 917316 class (vendor unproven) | 1.91650 | 31.60 |
| L3 | 697485 class (vendor unproven) | 1.69700 | 48.52 |
| L4 | 699301 class (vendor unproven) | 1.69895 | 30.13 |
| L5, L7 | 850323 class (vendor unproven) | 1.85026 | 32.27 |
| L6 | 649530 class (vendor unproven) | 1.64850 | 53.02 |
| L8 | 835427 class (vendor unproven) | 1.83481 | 42.72 |
| L9 | 487702 class (vendor unproven) | 1.48749 | 70.24 |

No `nC`, `nF`, `ng`, or `dPgF` values are authored. As a diagnostic only, e-line indices from coordinate-equivalent catalog glasses reproduce the patent's separate focal-length values much more closely than the stored d-line indices, despite ¶0018 labeling those focal quantities as d-line. Those catalog line indices are not source properties of the patent elements and are therefore not authored. Consequently, the data support Abbe-level dispersion discussion and the patent's own statement that the two cemented pairs contribute to chromatic correction, but not a claim of apochromatic or anomalous-dispersion performance.

## Focus Mechanism

The patent publishes rigid unit focusing for Example 1: G1, the aperture stop, and G2 move together relative to the image plane without any internal air spacing changing (¶0017). Hasselblad likewise specifies **full focusing** for the production XCD 3,5/45 and gives a minimum object-to-sensor distance of **0.40 m**, maximum image scale **1:6.4**, and corresponding exposure reduction of **0.4 stop**.

The patent does not publish a close-focus spacing row. The data file therefore uses a **CONSTRAINED_RECONSTRUCTION** rather than inventing internal motion. The source infinity row retains surface 17 at **26.88 mm**. The retained raw d-line prescription independently computes a paraxial BFL of **27.051018155 mm**, so that source image plane is **0.171018155 mm** inside the raw model's d-line paraxial infinity focus; the source row is not silently shifted. The reconstructed 0.40 m endpoint changes only surface 17 to **34.149113679 mm**, equivalent to translating the complete lens unit **7.269113679 mm objectward** while preserving every internal spacing.

Independent paraxial solution of that constrained state gives a lateral magnification of **−0.157319**, or **1:6.3565**, and a first-order bellows exposure reduction of **0.4216 stop**. These modeled values closely bracket Hasselblad's rounded 1:6.4 and 0.4-stop production specifications, but the 34.149 mm rear spacing itself is not a published Hasselblad or patent dimension.

## Conditional Expressions

Example 1 publishes four conditions. The values below are recomputed from the selected prescription; condition (4) uses the patent's own published `f = 45.027 mm`, as the patent does.

| Condition | Required range | Recomputed | Patent value |
| --- | --- | ---: | ---: |
| `(R16 + R15)/(R16 - R15)` | `−1.0 < x < −0.1` | −0.252923 | −0.253 |
| `LA/BF` | `1.5 < x < 2.5` | 1.766369 | 1.766 |
| `De1/BF` | `0.6 < x < 1.5` | 0.907738 | 0.908 |
| `R1/f` | `−1.5 < x < −0.6` | −1.212783 | −1.213 |

All four reproduce the patent's rounded Example 1 values.

## Verification Summary

The final data file preserves the raw Figure 2 d-line prescription rather than forcing its first-order results to match the patent's separate focal-length summary. Sequential height/reduced-angle tracing gives a system EFL of **45.119160437 mm** and paraxial BFL of **27.051018155 mm**. An independent `[y,u]` ABCD formulation agrees with the reduced-angle matrix to **1.07 × 10⁻14**. The patent separately states **45.027 mm** and defines the printed `d17 = 26.88 mm` as back focus. Those source values are retained as source facts; they are not substituted for the quantities computed from the stored `nd` table.

The same inconsistency appears in Figure 3: the printed d-line indices do not reproduce most of the published standalone-element and group focal lengths. A diagnostic using e-line indices from coordinate-equivalent catalog glasses reproduces the separate Figure 3 values far more closely, but those catalog values are not promoted into the patent model. For this reason, `focalLengthDesign` and every element `fl` in the data file are recomputed from the stored d-line arrays. C2 adds a second source-level contradiction: ¶0028 calls the cemented pair positive, while Figure 3 and the numerical prescription make it negative. Neither contradiction is silently repaired.

The patent's stop plane has effective diameter **14.20 mm**. Treating that value as the modeled physical stop gives an entrance-pupil diameter of **13.207929955 mm** and a modeled wide-open f-number of **f/3.416066**. The data therefore use 3.416066 for `nominalFno` and `apertureDesign`, while Hasselblad's and the patent's rounded **f/3.5** remains the marketing/source value. The modeled entrance pupil lies **60.8578 mm** in front of the sensor at infinity, close to Hasselblad's published **62 mm** production value.

Using the project convention `P_i = φ_i/(n_i n'_i)`, the raw d-line prescription has a total Petzval sum of **+0.001275444 mm⁻¹**. The rear L8/L9 arrangement is therefore discussed in the patent's own terms—limiting Petzval growth and field curvature—without assigning a comparative improvement that the source does not quantify.

All semi-diameters are direct patent values. To preserve them, the data file sets `gapSagFrac = 0.91`; the two tightest published gaps would marginally exceed the shared default of 0.90, although both retain positive physical clearance. Independent geometry checks give a maximum spherical rim slope of **45.6894°**, positive edge thickness for all nine elements, positive shared-band air-gap clearance, no required hidden render trim, and exact d-line meridional ray containment for the defined infinity and reconstructed 0.40 m states.

No scaling or asphere conversion applies. Example 1 contains no aspheric surface, and no omitted optical plate has been compensated by an inferred air-equivalent spacing.

## Sources and References

- **WO 2017/221949 A1 / JP WO2017/221949 A1**, Example 1, especially ¶¶0015–0028 and Figures 1–5. The attached Japanese republication PDF is the prescription source used for the data file.
- Hasselblad, **XCD 3,5/45mm Datasheet**: https://cdn.hasselblad.com/datasheets/xcd-lenses/XCD45-Datasheet-en.pdf
- Hasselblad, **X & H System Lenses**: https://cdn.hasselblad.com/manuals/lenses/X_H_System_Lenses.pdf
- Hasselblad, **X/H System Lenses brochure, 28 February 2017**: https://cdn.hasselblad.com/04e9d0f7-abdf-434d-8b5b-364c69af21ec_x-h-system-lenses_v2_28feb2017_a.pdf
- OHARA, **Optical Glass Catalog**: https://oharacorp.com/glass-catalog/
- HOYA, **Optical Glass Data Download**: https://www.hoya-opticalworld.com/english/datadownload/index.html
- SCHOTT, **Optical Glass Datasheets and Downloads**: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- HIKARI, **Optical Glass Catalog**: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/
- CDGM, **Optical Glass Database**: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
- Sumita, **Optical Glass Data Book**: https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf

### Patent-rim review — 2026-09-12 UTC

JPWO2017221949A1.pdf, page 13, Figs. 1–2 was visually inspected at 600 dpi. The published De/2 apertures were retained. The 600-dpi figure screen has a median figure/data ratio near 1.12, with almost all normalized shape ratios near 1.00; the drawing does not justify replacing its explicit diameter table. The documented 0.91 gapSagFrac preserves those source apertures with positive physical gaps. Surface validation and image-circle audits pass.
