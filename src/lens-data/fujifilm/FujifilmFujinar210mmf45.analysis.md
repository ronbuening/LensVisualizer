## Patent Reference and Design Identification

**Patent:** JP1954-002685 (特許出願公告 昭29-2685)\
**Application Number:** 特願 昭26-11016\
**Filed:** 1951-08-24\
**Published:** 1954-05-15\
**Inventor:** Ryoichi Doi (土居 良一)\
**Applicant:** Fuji Photo Film Co., Ltd. (富士写真フイルム株式会社)\
**Title:** ボケの描写を考慮した非球面写真レンズ — “Aspherical photographic lens considering the rendering of out-of-focus blur”\
**Embodiment analyzed:** Example 1 — project designation for the patent's sole numerical prescription

The catalog correlation used here associates JP1954-002685 with the **FUJIFILM FUJINAR 210mm f/4.5**. The patent itself does not print the Fujinar trade name, so this correlation is not presented as manufacturer confirmation. It is nevertheless consistent with the source prescription, which gives `f′ = 210` and `F:4.5`, and with the four-element, three-group Tessar-type section shown in Figure 7 on patent page 3.

The production identity is independently supported by the Tokyo Photographic Art Museum collection, which lists a Fuji Film **Fujinar F4.5 21cm**. FUJIFILM's corporate history also states that the company's early postwar large-format studio-camera lens line was introduced as Rectar and later renamed Fujinar. These sources establish the product family and exact 21 cm / f/4.5 designation, but they do not state that this patent prescription was the manufactured optical formula.

The patent prints `f′ = 210` mm, while independent reduced-angle tracing of the tabulated prescription gives an effective focal length of **210.946571886 mm**, a difference of **+0.45075%**. The model therefore keeps **210 mm** as the nominal product/patent focal length and **210.946571886 mm** as the computed design focal length; it does not treat the rounded nominal value as an exact result of the tabulated radii, spacings, and indices.

## Optical Architecture

The prescription is a four-element, three-group **Tessar-type** photographic objective. In air-separated functional-group order its power sequence is **positive / negative / positive**:

1. **G1 — L1:** a positive plano-convex front element whose nominally plane rear surface carries the patent's eighth-order aspheric deformation.
2. **G2 — L2:** an air-spaced biconcave negative element.
3. **G3 — L3 + L4:** a cemented rear pair in which a negative biconcave element is followed by a stronger positive biconvex element, giving the cemented pair positive net power.

The computed standalone focal lengths are +94.678 mm for L1, -64.612 mm for L2, -92.278 mm for L3, and +54.971 mm for L4. These values describe each element isolated in air. They are not additive contributions to the complete objective. The cemented L3+L4 pair has an isolated equivalent focal length of **+125.634 mm**, while the complete spaced system has the much weaker net power corresponding to the **210.947 mm** EFL.

The patent does not publish a diaphragm station. The data model places the stop at the midpoint of the published 12.3 mm air space between the negative middle element and the rear cemented group, preserving the source gap as 6.15 mm before and 6.15 mm after `STO`. This is a modeling inference, not a patent dimension. The stop semi-diameter, **19.708728064 mm**, is then solved so the modeled paraxial entrance pupil gives the published **f/4.5**.

No image height, image circle, or specific film format is published for the numerical example. The data therefore uses the canonical large-format lens-board system classification supported by FUJIFILM's historical description of the Rectar/Fujinar line, but leaves `imageFormat` unset rather than assigning an unsupported coverage format.

## Element-by-Element Analysis

### L1 — Plano-Convex Positive

**Stored source index N = 1.6126; νd = not published. Glass: Unmatched (N=1.6126; Abbe number and spectral reference not published). Standalone f = +94.678 mm.**

L1 is the principal front positive collector. Its first surface is convex and its rear base surface is planar. The patent's defining modification is applied to that rear face, so L1 combines substantial positive paraxial power from the front spherical surface with a deliberately high-order correction on a surface having zero paraxial curvature.

That separation is important to the design concept. The reconstructed eighth-order departure changes the high-order marginal-ray behavior without changing the first-order power of the plane surface. Consequently the system EFL and Petzval sum are unchanged by the value of A8 to first order, while the wide-open marginal focus shifts materially.

### L2 — Biconcave Negative

**Stored source index N = 1.5783; νd = not published. Glass: Unmatched (N=1.5783; Abbe number and spectral reference not published). Standalone f = -64.612 mm.**

L2 is the separate negative middle element of the Tessar front section. It opposes the strong positive front element and precedes the large air space containing the modeled diaphragm. The negative sign and element shape are direct consequences of the patent radii; no additional glass or aberration role is assigned beyond what can be defended from the prescription.

Its standalone power is stronger in magnitude than the complete lens power, illustrating why the architecture must be interpreted as a spaced system rather than by summing isolated focal powers.

### L3 — Biconcave Negative, Front Member of Rear Cemented Pair

**Stored source index N = 1.5293; νd = not published. Glass: Unmatched (N=1.5293; Abbe number and spectral reference not published). Standalone f = -92.278 mm.**

L3 begins the rear cemented group. It is negative as a standalone element and is cemented directly to L4 at surface 6. In the data model, that cemented junction correctly carries the downstream L4 index and element identity rather than inserting an artificial cement layer.

The negative power of L3 partially offsets L4 within the cemented group. Its role therefore must be distinguished from the net behavior of G3: L3 alone is negative, whereas the L3+L4 cemented combination is positive.

### L4 — Biconvex Positive, Rear Member of Cemented Pair

**Stored source index N = 1.6227; νd = not published. Glass: Unmatched (N=1.6227; Abbe number and spectral reference not published). Standalone f = +54.971 mm.**

L4 is the strongest positive standalone element in the prescription. Cemented behind L3, it converts the rear pair into a positive group with an isolated equivalent focal length of **+125.634 mm**. The pair forms the final powered group before the long image-space back focus.

The rear pair's positive equivalent power should not be interpreted as its in-situ contribution to the complete objective. Its actual effect depends on the preceding positive and negative groups and their separations; the verified full-system power is **0.004740536862 mm⁻¹**.

## Glass Identification and Selection

The patent supplies only a single refractive-index column labeled **N**. It gives no wavelength designation, Abbe number, C/F/g-line indices, partial-dispersion quantity, glass name, or catalog code. The data file therefore stores the four patent N values in the historical `nd` slot only for monochromatic geometric and paraxial tracing; it does **not** claim that they are d-line indices.

Because a defensible catalog identification requires at least a reference index plus dispersion information in a known spectral coordinate system, none of the four glasses is assigned to an OHARA, HOYA, Schott, HIKARI, CDGM, or Sumita catalog entry. Each remains explicitly `Unmatched (...)`. No `νd`, `nC`, `nF`, `ng`, or `dPgF` values are authored.

Accordingly, this prescription supports no claim of anomalous partial dispersion, ED behavior, apochromatic correction, or catalog-specific glass equivalence. FUJIFILM's corporate history records contemporary development of new optical glasses, including lanthanum glass, but that historical context does not identify any of the four glasses used in this patent example.

## Focus Mechanism

The patent publishes one static prescription and no finite-object spacing table, focusing movement, or internal group displacement. The modeled focus status is therefore **NO_INTERNAL_RECONSTRUCTION**.

No internal spacing is varied and no close-focus state is synthesized. A view camera would normally focus by changing the camera standard or bellows extension, but that external camera movement is outside this lens prescription. The data file's finite `closeFocusM = 1.0` value is only the schema-required UI placeholder used for infinity-only models and must not be read as a physical 1.0 m minimum focusing distance.

## Aspherical Surfaces

### Surface 2A — Plane-Base Eighth-Order Asphere

The patent defines the rear surface of L1 with the local meridional coordinates **x** along the optical axis in the direction of light travel and **y** transverse to it. Its stated form is

$$
x = k y^8, \qquad k < 0.
$$

This is not a conic prescription and does not use the later Fujifilm `KA` convention. In the LensVisualizer standard sag form it maps directly to a plane base (`R → ∞`, `K = 0`) with only an eighth-order coefficient:

$$
A_8 = -7.885176251421168\times10^{-14}\ \mathrm{mm}^{-7}.
$$

The numerical coefficient is **not printed by the patent**. It is a constrained reconstruction from the patent's statement that, for the 210 mm example, sufficient effect is obtained when the outer edge of the effective diameter departs from the plane by approximately **20 Newton rings**.

The reconstruction adopts the reflected Newton-ring surface-height convention in which adjacent fringes correspond to **λ/2** in sample height, using the traditional mercury green reference **λ = 546.07 nm**. Twenty fringes then correspond to a signed departure of **-5.460700 µm**. The exact wide-open axial ray that reaches the modeled f/4.5 stop edge intersects surface 2A at **y = 22.649291126 mm**; imposing the stated departure there gives the authored A8 above.

The reconstruction uncertainty remains explicit. Repeating the same self-consistent solution with sodium D at 589.3 nm increases the A8 magnitude by **7.8362%**. Sizing the stop from the rounded printed 210.0 mm rather than the computed EFL changes the magnitude by **3.8251%**. Moving the otherwise unpublished stop station across the tested interior portion of the same 12.3 mm gap changes the reconstructed magnitude by approximately **-1.0868% to +2.6572%** relative to the midpoint model.

No scale factor has been applied to the prescription, so no asphere scaling transformation is required. The A8 above is authored directly in the unscaled patent-coordinate model.

## Aberration Correction Strategy and Design Intent

The patent's stated purpose is not simply to minimize spherical aberration. It discusses the appearance of out-of-focus blur on the two sides of focus and argues for deliberately retaining a strong negative high-order spherical-aberration component so that the blur transition changes character.

Its conceptual longitudinal spherical-aberration diagrams distinguish lower-order forms of approximately `Ks = aY² + bY⁴` from a higher-order form `Ks = aY² + bY⁴ + cY⁶`, with the Figure 3 case using the sign pattern `a < 0`, `b > 0`, `c < 0`. These expressions describe aberration behavior; they are separate from the surface equation `x = k y⁸` used on surface 2.

The reconstructed model reproduces the intended qualitative mechanism: because surface 2A has zero paraxial power, it leaves first-order EFL unchanged while moving the exact wide-open stop-edge ray substantially relative to the paraxial image. In the verified model, the reconstructed-asphere stop-edge ray crosses the axis at **z = 230.566716494 mm**, about **2.133036 mm** ahead of the paraxial image. With A8 set to zero, the corresponding stop-edge ray crosses at **232.962634060 mm**, about **0.262881 mm** behind the paraxial image. These are model diagnostics, not measurements of a production Fujinar's blur profile.

## Verification Summary

Independent reduced-angle y–ν tracing and a separately accumulated ABCD matrix agree to machine precision. The paraxial system matrix has determinant **0.9999999999999998**, and the verified cardinal quantities are:

- effective focal length: **210.946571886 mm**;
- back focal distance from surface 7: **184.399752680 mm**;
- first refracting vertex to paraxial image: **232.699752680 mm**;
- front principal plane relative to surface 1: **+19.881318586 mm**;
- rear principal plane relative to surface 7: **-26.546819205 mm**.

By the project definitions, `TL/EFL = 1.10312`, so the design is **not telephoto**, and `BFD/EFL = 0.87415`, so it is **not retrofocus**.

The surface-by-surface Petzval calculation using `φ/(n·n′)` sums to **+0.001313107076 mm⁻¹**. Surface 2A contributes zero paraxial Petzval power because its base surface is plane and the y⁸ departure has no axial quadratic term.

The patent publishes no clear semi-diameters. Surface 2A's **22.649291126 mm** semi-diameter is the reconstructed effective edge used by the 20-ring condition, and the stop semi-diameter is the solved f/4.5 value. The remaining clear apertures are modeling inferences based on the exact wide-open axial envelope and Figure 7 proportions. Independent geometry checks give a minimum element edge thickness of **3.789386 mm**, a maximum actual rim slope of **24.4433°**, and a maximum positive shared-gap intrusion fraction of **0.616755**, below the model's 0.90 limit.

The patent also gives no field angle or image circle. Off-axis tracing was used only as a containment stress test for the inferred semi-diameters; it is not used to claim production coverage or assign an image format.

## Sources

1. Japanese Patent Office, **JP1954-002685**, 特許出願公告 昭29-2685, filed 1951-08-24, published 1954-05-15.
2. FUJIFILM, **“カメラ・光学機器事業基盤の確立” (Camera and optical equipment business foundation)**, corporate history. https://www.fujifilm.co.jp/corporate/aboutus/history/ayumi/dai2-09.html
3. FUJIFILM, **“営業写真用レンズの整備と中判カメラの発売”**, corporate history section documenting Rectar as a large-format studio-camera lens line later renamed Fujinar. https://www.fujifilm.co.jp/corporate/aboutus/history/ayumi/dai3-05.html
4. Tokyo Photographic Art Museum collection, **Fujinar F4.5 21cm**, accession 60100451. https://collection.topmuseum.jp/Publish/search?aate=%E5%AF%8C%E5%A3%AB%E3%83%95%E3%82%A4%E3%83%AB%E3%83%A0&aaty=contains
5. Chuo Precision Industrial Co., Ltd., **“About evaluation of interference fringes (fringes of equal thickness)”**, reference for reflected fringe height λ/2 and the 0.546 µm Hg Newton-ring reference. https://www.chuo.co.jp/english/contents/hp0259/index.php?CNo=259&No=68
6. National Institute of Standards and Technology, **Hg I spectral-line data**, listing the strong green Hg I line at approximately 546.075 nm. https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication250-71.pdf

### Patent-rim and glass audit (2026-09-11 UTC)

Figure 7 (PDF p.3) was inspected at 600 dpi. The 48.30 mm glass span gives 50.05 µm/px; optical rims agree within about 5%. SDs, including the constrained S2 aspheric edge, were retained. Surface validation passes; the image-circle floor is skipped because this historical large-format record has no source-backed image format. The four unlabeled N values have neither Abbe numbers nor a published spectral reference, so no dispersion or supplier identity was invented.
