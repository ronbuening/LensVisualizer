# NIKON AI NIKKOR 50mm f/1.8 S — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,234,242 A<br>
**Application Number:** US06/007,775<br>
**Priority:** 1978-02-03 (Japan 53-10525)<br>
**Filed:** 1979-01-30<br>
**Granted:** 1980-11-18<br>
**Inventor:** Soichi Nakamura<br>
**Assignee:** Nippon Kogaku K.K.<br>
**Title:** *Gauss Type Photographic Lens*<br>
**Embodiment analyzed:** Example 3

The modeled prescription is the user-selected correlation between US 4,234,242 A, Example 3, and the NIKON AI NIKKOR
50mm f/1.8 S. The patent itself does not identify a commercial model. The correlation instead rests on convergent evidence:
Nikon identifies Soichi Nakamura as the designer of the AI Nikkor 50mm f/1.8S and describes it as a compact Gauss-type
lens; the patent is Nakamura's compact Gauss design from the same development period; both use six elements in five
physical groups at f/1.8 and a 46° field; and both emphasize a narrow diaphragm space. Nikon further states that the
Series E 50mm f/1.8 shared the same basic optics and that this basic optical design was later carried into the AI AF
50mm f/1.8 family. This is a production correlation, not a manufacturer statement that Example 3 was the released
prescription.

Example 3 is published as a 100 mm normalization. The data model applies a uniform scale factor of `s = 0.5` to all
radii, thicknesses, air spaces, back focus, semi-diameters, and other dimensional coordinates. Refractive indices and
Abbe numbers are unchanged. The resulting computed design focal length is 49.98502471616683 mm, kept distinct from the
marketed 50 mm focal length. No aspherical surfaces are present, so no polynomial coefficient transformation
`A_p,scaled = A_p,patent / s^(p-1)` is applicable.

The printed Example 3 table contains an impossible fourth-glass entry, `n4 = 1.64841`, `ν4 = 1.6733`. The official
1981-04-14 Certificate of Correction changes those values to `n4 = 1.64831`, `ν4 = 33.8`; the corrected values are used
in the data file. The attached patent also tabulates no semi-diameters and gives only the ordering of the diaphragm
inside `d6`, not its numerical axial coordinate or diameter. The data model therefore places `STO` at the midpoint of
scaled `d6` as a disclosed inference and solves its semi-diameter to reproduce the modeled f/1.8 entrance pupil.
Semi-diameters elsewhere are likewise model-derived rather than patent-published.

No sensor cover, filter, inactive dummy plane, flare cutter, or other non-prescription optical plate is tabulated in
Example 3, and none is inserted in the sequential model.

## Optical Architecture

The lens is an all-spherical Gauss-type normal lens with six glass elements in five air-separated physical groups. The
patent analyzes it as two positive functional groups separated by the diaphragm space rather than merely as a sequence
of five physical groups. Functional group G1 contains L1, L2, and L3 ahead of the stop; functional group G2 contains the
cemented L4a/L4b pair and L5 behind it.

The scaled matrices give G1 an equivalent focal length of +130.651860 mm and G2 an equivalent focal length of
+49.932002 mm, with a computed principal-plane separation of 50.070594 mm. These are in-situ functional-group results;
they are not sums of the standalone element powers. The whole system is neither telephoto nor retrofocus by the project
definitions: total track divided by EFL is 1.33189, while BFL divided by EFL is 0.74217.

The defining compactness device is the shortened diaphragm region. The patent treats the two functional groups as
positive groups whose principal planes are deliberately kept close while preserving SLR back focus. Nikon's later
technical history independently describes the production lens as a Gauss construction with reduced curvature of the
concave surfaces surrounding the aperture and an unusually narrow aperture space. In the patent's own explanation, the
L2-L3 air lens and the bending of the rear meniscus components are central to controlling coma, field curvature, and
chromatic variation while maintaining the compact group separation.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.76682`, `νd = 46.81`. Glass: **J-LASFH2-class (supplier unresolved)**. Standalone `f = +65.742658 mm`.

L1 is the first positive collector in functional group G1. Its high refractive index allows useful positive power with
comparatively moderate surface bending. The patent's material condition (9) places this first positive component among
the high-index, moderate-dispersion glasses used to balance compactness, Petzval behavior, and chromatic correction.
The glass label is a coordinate class only; it does not assert that a historical HIKARI melt was used in production.

### L2 — Positive Meniscus

`nd = 1.79713`, `νd = 45.62`. Glass: **797456 — J-LASF017 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved**. Standalone
`f = +51.615041 mm`.

L2 is the strongest standalone positive element in G1. Together with L3 it forms the closely spaced pre-stop pair that
the patent uses to control higher-order chromatic behavior. Conditions (7), (10), and (11) constrain the L2/L3 index
relationship and the curvatures around their air gap. The patent explicitly describes the intervening air lens as having
a diverging action that contributes to chromatic and Petzval correction.

The surface-3 semi-diameter is set to 14.5 mm, matching the rear L2 rim at surface 4. This removes the unsupported
front-surface extension visible in the earlier rendering and follows the paired L2 rim drawn in Fig. 2; the value remains
a figure-derived authoring inference because the patent does not tabulate clear apertures.

### L3 — Negative Meniscus

`nd = 1.71714`, `νd = 29.49`. Glass: **717295 / SF1-class (supplier unresolved)**. Standalone
`f = -28.582368 mm`.

L3 supplies the principal negative power on the object side of the diaphragm. Its substantially lower Abbe number than
L2 makes the L2/L3 combination the principal pre-stop chromatic balancing pair identified in the patent. Its image-side
surface also forms one boundary of the diaphragm space, so its bending affects the compromise among stop clearance,
coma, Petzval sum, and back focus. The data model's semi-diameter is inferred; the patent does not publish a clear
aperture for this element.

### L4a / L4b — Cemented Rear Meniscus Pair

L4a: `nd = 1.64831`, `νd = 33.8`. Glass: **648338 / SF2-class (supplier unresolved)**. Standalone
`f = -27.230036 mm`.

L4b: `nd = 1.76682`, `νd = 46.81`. Glass: **J-LASFH2-class (supplier unresolved)**. Standalone
`f = +28.855022 mm`.

The two members are cemented at surface 8 and form the patent's L4 meniscus component in functional group G2. The
standalone powers are nearly opposite in sign, while the complete cemented pair has a weak net positive equivalent
focal length of +395.850270 mm. That cemented-pair value includes the actual glass-to-glass interface and must not be
confused with either member's standalone power or with the behavior of the pair inside the complete G2 matrix.

The patent assigns a specific chromatic role to this pair. Conditions (7) through (9) require a lower index in the
negative member and a higher index in the positive member, while the cemented-surface condition keeps `r8` negative and
strongly larger in magnitude than `r7`. The stated purpose is to control chromatic variation while preventing the
Petzval sum from becoming excessively positive. L4a is also the element affected by the official correction to Example 3.

### L5 — Biconvex Positive

`nd = 1.71313`, `νd = 53.94`. Glass: **713539 / LAK8-class (supplier unresolved)**. Standalone
`f = +64.536323 mm`.

L5 is the final positive element of G2 and provides a substantial share of the rear group's converging power. The patent
places its index and Abbe number within condition (9) and separately constrains its shape factor in condition (13). The
rear positive element therefore participates not only in setting the final system power and back focus but also in the
balance of spherical aberration, astigmatism, and field behavior described by the patent's shape constraint.

## Glass Identification and Selection

The patent identifies glasses only through refractive index and Abbe number. It does not name suppliers or catalog
melts. The data file therefore uses conservative class labels and coordinate-compatible catalog curves as spectral
proxies without asserting production glass provenance.

| Element(s) | `nd` / `νd` | Data-file glass label | Catalog-coordinate evidence |
|---|---:|---|---|
| L1, L4b | 1.76682 / 46.81 | 767468 — J-LASFH2 spectral proxy; supplier unresolved | HIKARI J-LASFH2 is the unique compatible catalog match in the audited resolver window |
| L2 | 1.79713 / 45.62 | 797456 — J-LASF017 spectral proxy; supplier unresolved | HIKARI J-LASF017 is within Δn = 0.00213 and Δν = 0.31 of the patent coordinate |
| L3 | 1.71714 / 29.49 | 717295 / SF1-class (supplier unresolved) | SF1-family coordinates agree closely across several vendors |
| L4a | 1.64831 / 33.8 | 648338 / SF2-class (supplier unresolved) | Several SF2-family glasses match; SUMITA SF12 is coordinate-exact in the audited catalog |
| L5 | 1.71313 / 53.94 | 713539 / LAK8-class (supplier unresolved) | LAK8-family coordinates match closely across several vendors |

These catalog matches provide coefficient-backed spectral proxies, not historical supplier identities. The patent
supplies no `nC`, `nF`, `ng`, `PgF`, or `dPgF` data, and the data file deliberately stores none. Consequently the model
supports no claim of anomalous partial dispersion or apochromatic correction. The patent's references to achromatism
describe its index/Abbe-number design strategy, not APO performance in the modern spectral-data sense.

## Focus Mechanism

The patent publishes Example 3 only at infinity and gives no focus-spacing table. The data file therefore labels its
close state **CONSTRAINED_RECONSTRUCTION** rather than treating it as a source fact. The modeled mechanism is pure unit
focus: every internal spacing remains fixed and only the rear air distance from surface 11 to the image plane changes.

At infinity, the model preserves the half-scaled published back focus of 37.1 mm. The independently computed paraxial BFL
is 37.097353 mm, a 0.002647 mm difference attributable to the patent table's displayed precision. At the
manufacturer-constrained 0.45 m focal-plane object distance, the imaging equation gives a rear spacing of
44.3095517997571 mm, an extension of 7.2095517997571 mm relative to the authored infinity spacing. The corresponding
paraxial lateral magnification is -0.144287.

The 0.45 m constraint is manufacturer-rounded product context, not a patent-published focus state. Nikon's archived
specification for the later AI AF 50mm f/1.8S, which Nikon states retained the same basic optical design, lists 0.45 m
minimum focus and 1/6.6 maximum reproduction. The reconstructed patent model does not exactly reproduce that later
marketing magnification; it should therefore be interpreted only as a mechanism-constrained visualization endpoint,
not as a claim that the production close-focus prescription was published or recovered.

## Conditional Expressions

The corrected Example 3 prescription satisfies all of the patent conditions audited for this embodiment. Ratios below
are dimensionless and are unchanged by the uniform 0.5 scale.

| Patent condition | Corrected Example 3 test | Result |
|---|---:|---|
| (3) compact functional-group spacing | `D/f = 1.001712` within `(0.98, 1.05)` | Pass |
| (4) front functional-group power | `f1/f = 2.613820` within `(2.5, 3.0)` | Pass |
| (5) G1 physical length | `D1/f1 = 0.0745875` within `(0.06, 0.08)` | Pass |
| (6) G2 physical length | `D2/f2 = 0.1728350` within `(0.16, 0.18)` | Pass |
| (7) index-ratio relation | `n3/n2 = 0.955490 >= n4/n5 = 0.932925` | Pass |
| (8) L3/L4a glass region | `(n3+n4)/2 = 1.682725`; `ν3 = 29.49`, `ν4 = 33.8` | Pass |
| (9) positive-element index/Abbe region | `n1,n2,n5,n6` and `ν1,ν2,ν5,ν6` all within stated bounds | Pass |
| (10) L2 rear-surface bending | `r4/f1 = 0.254795` within `(0.2, 0.3)` | Pass |
| (11) L3 front-surface bending | `r5/f1 = 0.516414` within `(0.5, 0.7)` | Pass |
| (12) rear meniscus front curvature | `|r7|/f2 = 0.325773` within `(0.31, 0.37)` | Pass |
| rear cemented-surface constraints | `r8 < 0` and `3|r7| < |r8|` | Pass |
| (13) L5 shape factor | `(r11+r10)/(r11-r10) = -0.758547` within `(-0.8, 0.15)` | Pass |

The patent description prints condition (3) with the lower bound `0.98f`, whereas Claim 1 prints `0.9f`; Example 3
passes either form. The patent also numbers both the rear cemented-surface constraint and the later L5 shape-factor
inequality as (13); the table leaves the former unnumbered to avoid conflation.

The material conditions are relevant to ordinary achromatization and Petzval control; they do not by themselves justify
an APO classification.

## Verification Summary

Independent sequential reduced-angle tracing of the final TypeScript arrays gives an EFL of 49.98502471616683 mm and
an ABCD determinant of 0.9999999999999998. The computed BFL is 37.09735282961131 mm, while the authored infinity rear
spacing remains the scaled published value of 37.1 mm. With the inferred midpoint stop and its solved physical radius,
the entrance-pupil diameter is 27.769458175648243 mm and the modeled wide-open f-number is 1.8.

Surface-by-surface Petzval calculation using `φ/(n·n′)` gives a scaled sum of +0.003769314836449539 mm⁻¹, corresponding
to a Petzval radius of +265.300205 mm. Geometry checks on the authored semi-diameters found positive edge thicknesses,
acceptable actual rim slopes, and shared-gap sag intrusion below the current 0.90 limit; exact spherical ray traces also
remained within all modeled apertures for the tested infinity and reconstructed close-focus bundles. These results
validate the authored numerical model but do not convert the inferred stop placement or semi-diameters into source facts.
Figure 2 supports the matched 14.5 mm L2 rim across surfaces 3–4 and the final 11.5 mm common central rim across surfaces
5–9. Those choices also remove the two material-outline trims reported by the renderer diagnostics.

## Sources / References

1. Soichi Nakamura, **US 4,234,242 A, “Gauss Type Photographic Lens,”** granted 1980-11-18, especially Example 3 on
   printed pp. 6–7 and the design conditions on printed pp. 2–5. The official 1981-04-14 Certificate of Correction is
   used for the corrected L4a index and Abbe number. <https://patents.google.com/patent/US4234242A/en>
2. Kouichi Ohshita, Nikon, **“NIKKOR — The Thousand and One Nights No. 60: AI NIKKOR 50mm f/1.8S.”** Product-history
   source for designer attribution, Gauss architecture, narrow diaphragm space, 1980 timing, and continuity with the
   Series E and later AF versions. <https://imaging.nikon.com/imaging/information/story/0060/>
3. Nikon, **AI AF Nikkor 50mm f/1.8S — archived product specifications.** Manufacturer context for 6 elements in 5
   groups, 46° field, 0.45 m minimum focus, and 1/6.6 maximum reproduction in the related AF implementation.
   <https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_nikkor_50mm_f18s/>
4. OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA authoritative optical-glass catalogs, as recorded in the companion
   glass audit. These sources support the qualified spectral proxies; no supplier is assigned to the historical
   production lens.
