## Patent Reference and Design Identification

**Patent:** JP 1980-087117 A
**Application Number:** 昭53-160562
**Filed:** 1978-12-23
**Published:** 1980-07-01
**Inventor:** Toshiko Shimokura
**Applicant:** Konishiroku Photo Industry Co., Ltd.
**Title:** Retrofocus Type Wide-Angle Lens (レトロフォーカス型広角レンズ)
**Embodiment analyzed:** Example 1 (第1実施例)

Example 1 is the fixed prescription used for the KONICA HEXANON AR 24mm f/2.8 correlation. The patent describes an
all-spherical retrofocus wide-angle lens of eight single elements and gives the numerical example in normalized units
with `f = 1`, F/2.8, full field `2ω = 84°`, and back focal distance `fB = 1.497`. The final LensVisualizer data preserves
that embodiment and applies a uniform linear scale of `s = 24.0` to the patent-listed radii and axial spacings.
The clear semi-diameters are separate model inferences because the patent does not publish apertures.
The Example 1 table begins on scanned patent page 4 (internal page 12), and Fig. 1 on scanned page 5 shows the
eight-element optical section.

The production correlation is based on convergent evidence rather than an explicit manufacturer statement tying the
lens to this patent:

1. The patent example specifies eight single elements, F/2.8, and an 84° full field; the 1980 Konica sales sheet gives
   24 mm, f/2.8, 8 elements in 8 groups, and an 84° angle of view.
2. Scaling the patent's `f = 1` Example 1 by 24 reproduces a computed Gaussian EFL of 23.9994 mm from the final data
   arrays.
3. The patent was filed in December 1978 and published in July 1980; the cited Konica specification sheet is dated
   1980 and describes Cat. No. 703-169 with the same first-order marketed specification set.
4. The final prescription has a computed BFD of 35.9197 mm, longer than its 23.9994 mm EFL, which is consistent with the
   patent's stated retrofocus architecture for an SLR wide-angle lens.

The manufacturer sheet gives the production lens as 24 mm, f/2.8–16, 8 elements in 8 groups, 84° angle of view, and a
0.25 m minimum focus measured from the film plane. Those marketed specifications are kept separate from the exact
modeled design quantities.

## Optical Architecture

The design is an all-refractive retrofocus prime. Its eight elements are all air-spaced, so there are eight physical
groups and no cemented doublets or triplets. The front functional section L1–L3 is net negative; the rear section L4–L8
is net positive.

This power split is the defining architectural feature. The negative front section increases ray height and helps create
rear clearance, while the positive rear section restores the convergence required at the image plane. In the assembled
system, the interaction of these groups is not equivalent to simply adding their isolated powers: spacing and the ray
state entering each group materially affect the in-situ contribution. The final system has `BFD/EFL = 1.49669`, so it
meets the project definition of a retrofocus lens (`BFD > EFL`).

L4 forms a thick positive transition between the negative front section and the stronger rear correcting section. The
rear sequence L5–L8 alternates positive and negative power before ending with a positive biconvex element. The patent
specifically constrains curvatures and glass coordinates in this rear section, including the relation between surfaces
10 and 11 and the Abbe-number contrast between L5 and L6.

All refracting surfaces are spherical. The rear face of L4 is plane in Example 1. The selected embodiment contains no
sensor cover, filter, inactive dummy plane, flare-cutter plane, mirror, or folded optical path requiring inclusion or an
air-equivalent correction.

The patent does not publish a diaphragm location. The single `STO` present in the data file is therefore a modeling
inference placed at the midpoint of the published air gap between surfaces 8 and 9. The original scaled gap is preserved
as two equal spacings around the neutral stop, so insertion of the stop does not change the first-order prescription.

## Element-by-Element Analysis

The focal lengths quoted below are the standalone paraxial focal lengths of the individual elements in air, as stored in
the final data file. They are not in-situ powers. Because every element is air-spaced, there is no cemented-group net
power to distinguish from these values.

### L1 — Positive Meniscus

`nd = 1.69680, νd = 55.5. Glass: 697555 — lanthanum crown class (source vendor unspecified). f = +93.6593 mm.`

L1 is the front positive meniscus. The patent describes it as convex toward the object. Its relatively weak standalone
positive power is subordinate to the combined negative power of L2 and L3, so L1 participates in the front retrofocus
section without making that section positive overall.

### L2 — Negative Meniscus

`nd = 1.58913, νd = 61.1. Glass: 589611 — crown class (source vendor unspecified). f = −25.5357 mm.`

L2 is the stronger of the two negative menisci in the front section. The patent places L2 and L3 in the same `nd/νd`
coordinate family and requires their combined use with L1 to produce a negative front-group focal length. Its isolated
negative power is sufficient, together with L3, to outweigh L1's weak positive contribution.

### L3 — Negative Meniscus

`nd = 1.58913, νd = 61.1. Glass: 589611 — crown class (source vendor unspecified). f = −56.6515 mm.`

L3 is a weaker negative meniscus than L2 but retains the same refractive index and Abbe number. It completes the
net-negative L1–L3 front section. The patent's conditions constrain both the average index and average Abbe number of L2
and L3, indicating that their material coordinates are a deliberate part of the front-group design rather than an
incidental duplication.

### L4 — Plano-Convex Positive

`nd = 1.78470, νd = 26.2. Glass: 785262 — dense flint class (source vendor unspecified). f = +57.0868 mm.`

L4 is a thick plano-convex positive element, with its rear face plane in Example 1. It separates the negative front
section from the rear correcting section and introduces positive power without a curved rear surface. The patent places
an explicit bound on its focal length, `1.5f < f4 < 3.3f`; the final prescription gives `f4 = 2.378616f` in normalized
units.

### L5 — Biconvex Positive

`nd = 1.69680, νd = 55.5. Glass: 697555 — lanthanum crown class (source vendor unspecified). f = +24.8821 mm.`

L5 is the strongest standalone positive element in the lens. It begins the rear correcting section after the central
L4 element. The patent singles out the curvature around surface 10 and requires the positive surface power there to
exceed the magnitude of the negative power introduced at surface 11 on the following element.

### L6 — Biconcave Negative

`nd = 1.80518, νd = 25.4. Glass: 805254 — dense flint class (source vendor unspecified). f = −25.4291 mm.`

L6 is the principal negative element in the rear section. Its high refractive index and low Abbe number contrast with
L5's `νd = 55.5`. The patent explicitly requires `28 < ν5 − ν6 < 35`; Example 1 gives 30.1. That condition supports a
first-order chromatic balancing role for the L5/L6 combination, but the source does not provide the line-index or partial-
dispersion data needed to make an apochromatic or anomalous-dispersion claim.

### L7 — Positive Meniscus

`nd = 1.65160, νd = 58.6. Glass: 652586 — lanthanum crown class (source vendor unspecified). f = +37.1692 mm.`

L7 is a positive meniscus in the rear section, concave toward the object according to the patent description. It restores
positive power after L6 while using a substantially higher Abbe number than the preceding negative element. The patent
also constrains the average refractive index of L7 and L8, tying the final positive pair to the prescribed rear-section
power distribution.

### L8 — Biconvex Positive

`nd = 1.69680, νd = 55.5. Glass: 697555 — lanthanum crown class (source vendor unspecified). f = +65.1115 mm.`

L8 is the final biconvex positive element ahead of the image plane. It uses the same `nd/νd` coordinate family as L1 and
L5 and completes the positive rear section. Its standalone focal length is comparatively long, so its role is best read
as part of the coupled rear assembly rather than as an isolated high-power component.

## Glass Identification and Selection

The patent provides only d-line refractive indices and Abbe numbers and names no glass vendor. A catalog audit was
therefore performed from the source coordinates rather than from the existing labels. Authoritative catalogs contain
exact or near-exact members of all five coordinate classes, but that is not evidence that Konica used any one current
vendor formulation. The data file preserves the patent coordinates and leaves the production supplier
unspecified. S-BAL35 supplies a compatible curve for L2/L3, J-LAK7R supplies one for L7, and
the newly added legacy PBH23 entry resolves L4 through its exact 785262 code. All eight elements
now have coefficient-backed dispersion; these are catalog equivalents, not production identities.

| Coordinate class | Patent nd | Patent νd | Elements | Catalog check |
|---|---:|---:|---|---|
| 697555 | 1.69680 | 55.5 | L1, L5, L8 | OHARA S-LAL14: 1.69680 / 55.53; HIKARI J-LAK14: 1.696800 / 55.52 |
| 589611 | 1.58913 | 61.1 | L2, L3 | S-BAL35 curve: 1.58913 / 61.135024; patent 589611 retained |
| 785262 | 1.78470 | 26.2 | L4 | OHARA PBH23 curve: 1.784702 / 26.216753 (OHARA_260701.AGF) |
| 805254 | 1.80518 | 25.4 | L6 | OHARA S-TIH6: 1.80518 / 25.42 |
| 652586 | 1.65160 | 58.6 | L7 | HIKARI J-LAK7R curve: 1.651600 / 58.618566 |

The prescription uses a broad first-order dispersion spread, from `νd = 25.4` to `νd = 61.1`, and the patent makes
several of those material coordinates explicit design constraints. In particular, L2/L3 are constrained as a higher-
Abbe crown pair in the negative front section, while the rear L5/L6 pair is required to have a 28–35 Abbe-number
difference. These facts support discussion of ordinary chromatic balancing at the d-line/Abbe level only.

No `nC`, `nF`, `ng`, or `dPgF` values are present in the source or final data. Catalog curves provide an approximation rather than patent-measured spectral behavior.
Accordingly, this prescription does not support claims of APO correction, anomalous partial dispersion, or a specific
secondary-spectrum strategy beyond what follows from the published `nd/νd` coordinates.

## Focus Mechanism

The selected patent example publishes only the infinity prescription. It contains no focus-spacing table, object-distance
series, magnification series, or source-supported internal focusing mechanism. The final data therefore uses
`NO_INTERNAL_RECONSTRUCTION`: `var` and `varLabels` are empty, and no moving internal group is modeled.

The production sales sheet specifies a minimum focusing distance of 0.25 m measured from the film plane. That value is
stored as marketing metadata in `closeFocusM`, but it is not used to infer any optical movement. The available sources do
not support a quantitative statement about focus travel or changing internal gaps.

## Conditional Expressions

The patent states eight sets of design conditions. The following values are recomputed from the final scaled data, with
length-normalized quantities reported in the patent's `f = 1` convention. Uniform scaling does not change these ratios.

| Condition | Patent expression | Example 1 value | Result |
|---|---|---:|---|
| 1 | `0.8f < |f123| < 1.0f`, `f123 < 0` | `|f123| = 0.907169`, `f123 = −0.907169` | Pass |
| 2 | `0.25f < d4 + d6 < 0.28f` | `0.2688` | Pass |
| 3 | `1.55 < (n2+n3)/2 < 1.65`; `55 < (ν2+ν3)/2 < 65` | `1.58913`; `61.1` | Pass |
| 4 | `1.5f < f4 < 3.3f` | `2.378616` | Pass |
| 5 | `0.43f < d7 < 0.46f`; `0.28d7 < d8 < 0.35d7` | `0.4465`; `d8/d7 = 0.324076` | Pass |
| 6 | `0.7f < |R10| < 1.1f`; `2.1|R10| < |R11| < 2.5|R10|`; `R10,R11 < 0`; `φ10 > |φ11|` | `0.9321`; `2.319279`; both negative; `0.747559 > 0.372458` | Pass |
| 7 | `53 < ν5 < 60`; `28 < ν5−ν6 < 35` | `55.5`; `30.1` | Pass |
| 8 | `1.60 < (n7+n8)/2 < 1.72` | `1.6742` | Pass |

All 15 individual inequality/sign checks represented by these eight condition sets pass.

## Verification Summary

The patent prescription is normalized to `f = 1`; the final data applies `s = 24.0` to the patent-listed radii and axial
spacings. The image-plane distance is recomputed from the scaled rounded prescription, while semi-diameters are inferred
directly in the scaled model. There are no aspheres, so no aspheric coefficient transformation is applicable and no
aspherical-surfaces section is required.

Recalculation from the final TypeScript arrays gives a Gaussian EFL of 23.99938196 mm and BFD of 35.91969113 mm. The
last authored spacing is the recomputed Gaussian BFD rather than the patent header's rounded `1.497 × 24 = 35.928 mm`,
keeping the infinity image plane consistent with the rounded numerical prescription.

The patent gives F/2.8 but neither diaphragm position nor physical stop diameter. The modeled `STO` is therefore an
authoring inference at the midpoint of the scaled `d8` air gap. Its 5.898969 mm semi-diameter yields an independently
recomputed entrance-pupil diameter of 8.571208 mm and modeled f-number of 2.79999994. These pupil quantities describe the
LensVisualizer model, not additional patent-published specifications.

The patent does not publish semi-diameters. The final clear apertures are inferred from the modeled ray envelope and the
patent section drawing, then constrained by edge thickness, actual rim slope, and shared-gap intrusion. Independent
exact-ray checks keep the on-axis wide-open bundle, the 42° chief ray, and the defined 25.2° off-axis bundle inside every
authored semi-diameter. The closest shared-gap geometry occurs between surfaces 12 and 13, but remains inside the current
validation limit.

Patent surface `r11` is `−2.1618` in normalized units. That value reproduces the patent's printed `φ11 = −0.372` and
the stated first-order quantities; no numerical correction to the source table is required.

## Sources

1. **JP S55-87117 A / JP 1980-087117 A**, *レトロフォーカス型広角レンズ* (Retrofocus Type Wide-Angle Lens),
   Konishiroku Photo Industry Co., Ltd., inventor Toshiko Shimokura, published 1980-07-01. Example 1 and Fig. 1 are the
   prescription and optical-section sources used here. Original scan supplied with the LensVisualizer job package.
2. **Konica Division / Berkey Marketing Companies**, *Konica 24mm f2.8 Automatic Ultra Wide Angle Hexanon Lens*,
   Cat. No. 703-169, 1980. Manufacturer specification sheet:
   https://www.pacificrimcamera.com/rl/02831/02831.pdf
3. **OHARA**, S-LAL glass catalog: https://oharacorp.com/glass-type/s-lal/
4. **OHARA**, S-TIH/S-NPH glass catalog: https://oharacorp.com/glass-type/s-tih-s-nph/
5. **HIKARI / Nikon**, LAK optical-glass catalog: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lak.html
6. **CDGM**, D-ZK3A optical-glass data sheet: https://www.cdgmgd.com/webapp/pdf/D-ZK3A.pdf
7. **CDGM**, optical-glass cross-reference database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data
8. **OHARA**, official all-products and discontinued-glass catalog, `OHARA_260701.AGF`, PBH23 polynomial row (accessed 2026-09-05): <https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip>.
