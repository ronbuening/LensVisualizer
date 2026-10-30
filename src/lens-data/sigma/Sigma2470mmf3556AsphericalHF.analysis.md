## Patent Reference and Design Identification

**Patent:** JP 2002-236254 A  
**Application Number:** JP 2001-033481  
**Filed:** 9 February 2001  
**Published:** 23 August 2002  
**Inventors:** Norikazu Yokoi; Tetsusuke Kusakawa; Shizuka Takemoto  
**Applicant:** Sigma Corporation  
**Title:** Zoom lens  
**Example details:** Numerical Example 2, paragraphs 0018–0022 and Figure 5

The production lens matched to this example is the original **Sigma 24–70mm F3.5–5.6 ASPHERICAL HF**. Sigma’s September 2004 catalogue uses this exact name, which distinguishes it from the constant-F2.8 EX and later DG models. The catalogue lists Sigma SA, Canon AF, Nikon AF, Pentax AF and Minolta AF versions; the Minolta AF version uses the current sony-a mount identifier, which does not imply a Sony-branded 2004 product. The catalogue section and specifications support the match in several independent ways:

1. Nine elements form seven groups. The negative front group has three elements, the second of them marked aspherical, and the rear group is a cemented pair.
2. Figure 5 shows the same overall arrangement, including the distinctive rear doublet, with a thin refractive layer on the second front element. Its single aspherical surface sits where the catalogue marks the asphere.
3. The design focal lengths of 25.0/49.4/67.6 mm and design F-numbers of 3.62/5.05/5.79 are close to the advertised 24–70mm F3.5–5.6 range. The model keeps the patent's values rather than rescaling them.
4. The catalogue describes HF as linear front-group focusing without rotation of the lens front. It specifies a 0.4 m minimum focusing distance, 1:4.5 maximum magnification, eight iris blades and a 62 mm filter thread.

The match rests on architecture and specifications; Sigma has not confirmed that this example is the production prescription. The thin layer is interpreted as a hybrid resin layer from its thickness, its optical constants and the catalogue's asphere marking; the patent table does not name its material. The missing image distance and the unpublished clear apertures limit the reconstruction regardless of the product identification.

## Optical Architecture

The patent uses negative–positive–weakly-negative zoom groups G1, G2 and G3. Their standalone paraxial focal lengths are −40.2074, +37.3090 and −1594.7035 mm. The weak net power of G3 does not mean its elements are individually weak. The rear doublet and the aperture stop SP1 move together: the SP1-to-G3 separation is 34.4000 mm at all three tabulated stations. SP2 is a separate fixed flare diaphragm, not the image surface (¶0007 and Fig. 5).

The patent table has nineteen rows, including SP1 and SP2. The model has eighteen, with the stop at SP1. SP2 has no published diameter, so it is not modeled. The final interval combines the printed d18 with a **35.73 mm SP2-to-image distance** that the patent does not print; it is derived from the prescription and held constant across the three stations. Without SP2 the model cannot reproduce the flare cutting that is a central subject of the patent.

| Printed station | Calculated EFL (mm) | Last vertex to model image (mm) | First vertex to model image (mm) | Model image minus paraxial image (mm) |
| --------------- | ------------------: | ------------------------------: | -------------------------------: | ------------------------------------: |
| 25.0 mm         |           25.009803 |                         39.1100 |                         130.1500 |                             -0.027037 |
| 49.4 mm         |           49.447193 |                         55.7559 |                         122.6124 |                             -0.036125 |
| 67.6 mm         |           67.589572 |                         69.1742 |                         131.2215 |                             +0.045590 |

The paraxial SP2-to-image distances calculated from the prescription are 35.757037, 35.766125 and 35.684410 mm. The model keeps the single 35.73 mm value rather than refocusing each station, so these small differences remain. At the wide station the back focal distance from the last vertex exceeds the EFL, so the design is retrofocus at that end. At no station is the first-vertex-to-image distance shorter than the EFL, so a telephoto-ratio claim would be inappropriate.

Referenced to the fixed image, G1 reverses direction between the printed stations, while G2 and G3 move objectward from wide to tele. Between the three printed stations the model follows an inferred path. The G1–stop (d7) and stop–G2 (d8) spacings change piecewise-linearly through the printed values, and the stop moves with G3: d15 changes opposite to d8, which keeps the 34.40 mm SP1-to-G3 spacing. The back focus is solved paraxially along the path, and the small focus residuals of the printed stations, shown in the table above, carry through between them. The intermediate positions are not published and are not Sigma's zoom cam.

## Element-by-Element Analysis

Focal lengths below are standalone in-air paraxial values for each element's two surfaces, including its centre thickness. They are not in-situ powers or isolated contributions to aberration correction. The model has nine glass elements and the resin layer R1.

### L1 — Negative Meniscus

nd = 1.80420, νd = 46.5. Glass: TAF3 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -37.7827 mm.

L1 is the leading negative meniscus of G1. It sits ahead of the relatively large air gap to the hybrid second element. Its negative power contributes to the negative front group; the patent does not separately quantify its aberration budget.

### L2 — Negative Meniscus

nd = 1.77250, νd = 49.7. Glass: TAF1 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -48.6987 mm.

L2 is the glass substrate of the hybrid second front element. Its rear face is bonded to the thin layer, so its standalone power is a diagnostic value, not the power of the assembled hybrid.

### R1 — Neg. Meniscus Resin Layer (1× Asph)

nd = 1.51840, νd = 52.1. Glass: Unmatched (hybrid optical resin; spectrum unpublished). f = -294.7345 mm.

R1 is the 0.1000 mm thick layer that the patent lists as its own row. Its outer face, s5, is the lens's only aspherical surface. The model keeps it as a real layer with its own index rather than collapsing it into a zero-thickness aspherical surface. It is not given an optical-glass dispersion curve, since no catalogue glass describes a resin.

### L3 — Biconvex Positive

nd = 1.67270, νd = 32.1. Glass: S-TIM25 (OHARA coordinate-equivalent class; supplier unconfirmed). f = +46.2282 mm.

L3 is the positive last element of G1. The large variable gap behind it separates the negative front group from SP1 and the following positive group.

### L4 — Biconvex Positive

nd = 1.69680, νd = 55.6. Glass: K-LaK14 (SUMITA coordinate-equivalent class; supplier unconfirmed). f = +39.5647 mm.

L4 is the first positive element of G2, immediately after the variable stop interval. The printed 0.1500 mm air gap separates it from the following cemented pair.

### L5 — Biconvex Positive

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA coordinate-equivalent class; supplier unconfirmed). f = +29.6380 mm.

L5 is the positive, lower-index member of the middle cemented pair. L5 and L6 meet at the single interface s12; the patent lists no separate cement layer.

### L6 — Biconcave Negative

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -13.8882 mm.

L6 is the negative, higher-index partner of L5. The pair contributes to the positive G2 group, but the two standalone powers do not simply add, because the elements share an interface and have thickness.

### L7 — Biconvex Positive

nd = 1.51680, νd = 64.4. Glass: BSC7 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +40.4048 mm.

L7 is the last positive element of G2. Its front face shares the tight d13 air gap with L6, which constrains the inferred clear radii. The following d15 gap increases toward tele.

### L8 — Positive Meniscus

nd = 1.65844, νd = 50.8. Glass: BACED5 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +31.7316 mm.

L8 is the positive member of the weakly negative rear doublet G3. Its front radius is shallow, but its rear curvature gives it appreciable standalone power.

### L9 — Negative Meniscus

nd = 1.77250, νd = 49.7. Glass: TAF1 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -31.2614 mm.

L9 is the negative member of G3. Because it shares the s17 interface with L8, the pair's net negative power is much weaker than either standalone power. The printed d18 gap ends at SP2; the derived 35.73 mm distance to the image follows it.

## Glass and Spectral Evidence

Paragraph 0010 defines the indices as d-line values, and the model keeps the printed nd/νd pairs. Each glass label names the closest catalogue glass found in a comparison of HOYA, OHARA, Schott, HIKARI, Sumita and CDGM data. A close match identifies a compatible glass type, not the actual supplier, melt or production dispersion.

| Material locations | Patent nd / νd | Catalogue match          |       Δnd |       Δνd | θgF (catalogue) |
| ------------------ | -------------- | ------------------------ | --------: | --------: | --------------: |
| L1                 | 1.80420 / 46.5 | HOYA TAF3                | +0.000000 | +0.000000 |          0.5580 |
| L2, L9             | 1.77250 / 49.7 | HOYA TAF1                | +0.000000 | -0.070000 |          0.5504 |
| L3                 | 1.67270 / 32.1 | OHARA S-TIM25            | +0.000000 | -0.000794 |          0.5989 |
| L4                 | 1.69680 / 55.6 | SUMITA K-LaK14           | +0.000000 | +0.000000 |          0.5438 |
| L5                 | 1.48749 / 70.2 | OHARA S-FSL5             | +0.000000 | +0.036252 |          0.5301 |
| L6                 | 1.83400 / 37.3 | HOYA NBFD10              | +0.000000 | +0.040000 |          0.5791 |
| L7                 | 1.51680 / 64.4 | HOYA BSC7                | +0.000000 | -0.200000 |          0.5343 |
| L8                 | 1.65844 / 50.8 | HOYA BACED5              | +0.000000 | +0.060000 |          0.5575 |
| R1                 | 1.51840 / 52.1 | Unmatched inferred resin |         — |         — |               — |

Residuals are catalogue minus patent at the listed precision. They show how closely each glass matches its type; they are not corrections to the patent.

The data file stores no separate C-, F- or g-line indices or partial-dispersion offsets for the nine glass elements. The chromatic trace takes their dispersion from the published curve of each labelled catalogue glass, and the θgF values above come from those curves. Both TAF1 elements, L2 and L9, resolve to HOYA TAF1 itself. The largest νd difference is 0.2, for BSC7. The resin layer R1 has no catalogue match and is traced from the patent's index and Abbe number alone, with no line data. None of the matched glasses departs strongly from normal partial dispersion, and the resin's dispersion is unknown, so precise claims about chromatic performance, anomalous dispersion or apochromatic correction are not supported.

The model’s surface-by-surface d-line Petzval sum is +0.002971193 mm⁻¹, independent of the air spacings. This paraxial sum is not the complete finite-field best-focus curvature or an MTF result.

## Focus and Zoom Behavior

The model is infinity-only. The patent prints no object distance and no focusing data, so the three printed zoom states are treated as infinity states. The catalogue describes front-group focusing and a 0.4 m minimum focusing distance for the product, but the patent gives no focus law, so close focus is not modeled.

The patent's condition 1.0 < β3T < 1.5 (claim 1, ¶0006) limits β3T, G3's lateral magnification at the tele end. The patent prints 1.04 for this example; the printed prescription gives 1.0486. Both satisfy the condition, but they do not agree under ordinary rounding. The prescription is kept as printed, without changing any radius, index, thickness or gap.

## Aspherical Surface and Clear Apertures

Paragraph 0012 writes the base conic with A under the radical, so the standard conic constant is K = A − 1. For s5, A = 2.168 and therefore K = 1.168. The H² coefficient is zero; the nonzero polynomial terms are A4 = −1.7530×10⁻⁵, A6 = −3.7060×10⁻⁸, A8 = +3.2240×10⁻¹¹ and A10 = −3.9640×10⁻¹³, in mm^(1−order). The polynomial ends at H10; the model's A12 and A14 are zero. The negative A4 and A6 terms flatten the periphery of this concave rear face relative to its base conic. A thin resin layer over a glass substrate makes this a hybrid (composite) asphere, an interpretation drawn from the prescription and the catalogue rather than from the patent text.

At the **inferred model radius of 15 mm**, the complete asphere sag is 3.212541 mm, and its departure from the sphere of the same vertex radius is −0.941348 mm. The rim slope is 15.3230°. These values apply to the modeled aperture; the patent publishes no manufacturing departures. The layer stays positive in thickness out to that radius, thinning to 0.0467 mm at the rim.

The patent publishes no clear apertures, so every semi-diameter is an estimate. The chosen values pass the full on-axis beam at the printed F-numbers and the chief ray to the full-frame corner. They also keep every element's edge thickness positive, stay inside the asphere's valid range, and respect the default 90% limit on how far facing surfaces may reach into an air gap; no exception to that limit is used. A check against the Figure 5 wide-angle drawing, scaled from its vertex spacing, set both L4 faces to 11.5 mm and both L7 faces to 8.6 mm to match the drawn heights, and set L2's front face to 15 mm, level with its rear face and the resin layer, because the drawing shows the hybrid element square-cut. The drawing shows the front group 6–15% taller than the model, but the prescription cannot follow it there. The L1 rear and L2 front surfaces meet at about 15.2 mm, and the resin layer thins to zero at about the same height, so the front group stays at or below 15 mm behind L1. The silhouette shows optical clear apertures, including unequal face radii, not a measured mechanical edge profile. The fresh source review restores independently drawn rear flat lands on S2 and S13, extending the blank to 20 and 11 mm while preserving clear caps 14.5 and 8.3 mm. The hybrid substrate/resin remains connected at 15 mm; extending only the resin to the taller schematic outline would create an unsupported wing and a nonpositive coating thickness. No such extension is modeled.

The patent does not give the iris diameter either. Matching the printed F-numbers on axis gives stop semi-diameters of 8.047427, 8.499225 and 9.505185 mm at the three stations. These follow from the F-numbers and are not independent evidence of the diaphragm size. Off-axis bundles are still clipped at the element rims, so the model shows real vignetting. Without SP2 it cannot show the lens's real throughput or flare suppression. Exact d-line tracing reaches the 21.633308 mm full-frame corner clear at each printed station; that checks the chief ray only, not every pupil ray or every intermediate state.

## Sources

- Japan Patent Office, [JP2002236254A](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2002236254A): definitions and architecture ¶¶0005–0012 (PDF pp. 3–4); Numerical Example 2, ¶¶0018–0022 (PDF p. 4, printed p. 3); Fig. 5 (PDF p. 7, printed p. 6). The numbers come from this Japanese original, not from a foreign-family transcription.
- Sigma, [September 2004 lens catalogue](https://w5.fuji.com.tw/pdf/SIGMA-lens-English.pdf), manufacturer-authored PDF hosted by a reseller: PDF p. 6 for the HF name, section drawing and focusing description; PDF p. 12 for specifications.
- [HOYA optical-glass catalogue](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), including obsolete entries; [OHARA July 2026 catalogue](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip); [Sumita catalogue](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf). The θgF values and the dispersion used in the chromatic trace come from these catalogues' published coefficients for the matched glasses.
