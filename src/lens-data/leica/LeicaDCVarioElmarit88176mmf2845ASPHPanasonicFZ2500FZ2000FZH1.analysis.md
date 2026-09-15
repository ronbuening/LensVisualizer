# LEICA DC VARIO-ELMARIT 8.8-176mm f/2.8-4.5 ASPH. (Panasonic Lumix FZ2500 / FZ2000 / FZH1)

## Patent Reference and Design Identification

**Patent:** US 2018/0081156 A1\
**Application Number:** 15/666,874\
**Priority:** JP 2016-181078, September 16, 2016\
**Filed:** August 2, 2017\
**Published:** March 22, 2018\
**Inventors:** Hiroaki Suzuki; Yoshiaki Kurioka; Takehiro Nishioka; Hisayuki Ii\
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.\
**Title:** *Zoom Lens System, Imaging Apparatus and Camera*\
**Embodiment analyzed:** Numerical Example 1 / first exemplary embodiment, Figure 1 and Tables 1-3D

US 2018/0081156 A1 states that Numerical Example 1 corresponds to the first exemplary embodiment of Figure 1. The patent describes a five-powered-group zoom consisting, from object to image, of G1(+), G2(-), the aperture stop, G3(+), G4(-), and G5(+), followed by a plane-parallel plate P. The first embodiment contains 16 physical lens elements, five cemented pairs, and eight aspherical surfaces distributed over five elements. Those source facts are stated in ¶0025-¶0040 and tabulated in Tables 1-3D.

The implemented prescription is correlated with the LEICA DC VARIO-ELMARIT 8.8-176mm f/2.8-4.5 ASPH used in Panasonic's DMC-FZH1, DMC-FZ2500, and DMC-FZ2000 fixed-lens cameras. The correlation is strong but is not manufacturer confirmation that Numerical Example 1 is the exact production prescription. Panasonic's published product data identify a 20× 8.8-176 mm f/2.8-4.5 lens on a 1-inch-type camera, with 16 elements in 11 groups, five aspherical lenses/eight aspherical surfaces, four ED lenses, one UHR lens, and an inner-zoom construction. The patent example independently has 16 elements in 11 air-separated components, five aspherical elements/eight aspherical surfaces, a nearly one-inch-type image height, and internal zoom motion with a substantially fixed external track.

Several independent clues support the attribution:

1. The production specification and Numerical Example 1 both contain 16 physical elements in 11 air-separated lens components.
2. Both give five aspherical lens elements and eight aspherical surfaces.
3. The patent's maximum image height is 7.918 mm, close to the 7.932 mm nominal half-diagonal of the project's 13.2 × 8.8 mm one-inch-type reference format.
4. The patent keeps G1 and G5 fixed while internal groups and the stop move during zooming; Panasonic describes an inner-zoom structure.
5. The patent priority date, September 16, 2016, immediately precedes Panasonic's September 20, 2016 FZH1 announcement.
6. The patent contains four conspicuously low-dispersion physical-element coordinates (L2, L3, L8, and L10), which is compatible with but does not establish Panasonic's four-ED production count. It also contains several very-high-index coordinates, so the production one-UHR designation cannot be mapped to a unique patent element from refractive-index data alone.

The contradiction is material. Panasonic markets 8.8-176 mm, 20×, f/2.8-4.5, while patent Table 3A gives 9.1401-168.6806 mm, 18.45502×, f/2.91353-4.63206. Scaling the patent wide end to 8.8 mm requires a factor of about 0.96279, while scaling the telephoto end to 176 mm requires about 1.04339. A single geometric scale therefore cannot reconcile both endpoints, and no scale is applied. The implemented normalized model computes 9.143856-168.707624 mm and f/2.907934-f/4.622166 after the documented cement and rear-plate normalization. Marketed and design quantities remain separate throughout this analysis.

The patent also contains one source-label problem that materially affects the model. Table 3A and ¶0151 call 5.249/5.249/5.892 mm an effective aperture *diameter*. A literal-diameter interpretation produces first-order f-numbers near f/5.81, f/8.60, and f/9.24. Treating the same numbers as stop semi-diameters produces the published f-number scale and, after normalization, gives f/2.907934, f/4.300514, and f/4.622166. The raw wording and values are retained in the dossier; the data model applies the semi-diameter interpretation as a documented source-label correction rather than claiming an independently measured diaphragm size.

## Optical Architecture

The prescription is a positive-negative-stop-positive-negative-positive five-powered-group zoom. In the production-style construction count, its 16 physical elements form 11 air-separated lens components because five pairs are cemented. Those 11 components are then organized into the five moving or fixed powered groups used by the patent's zoom mechanism. This distinction prevents the manufacturer's “16 elements in 11 groups” wording from being confused with the patent's five functional zoom groups.

The final normalized model has the following computed paraxial group powers. These are group focal lengths in the implemented prescription, not the standalone focal lengths of individual elements and not production specifications.

| Functional group | Elements | Active group focal length | Zoom role |
|---|---|---:|---|
| G1 (+) | L1-L3 | +79.046255 mm | Fixed front group |
| G2 (-) | L4-L6 | -15.388189 mm | Moves imageward with increasing focal length |
| G3 (+) | L7-L12 | +23.600917 mm | Moves on a reversing locus |
| G4 (-) | L13-L14 | -17.928336 mm | Moves objectward during zoom; moves imageward for proximity focus according to the patent |
| G5 (+) | L15-L16 | +29.488189 mm | Fixed rear powered group |

At the three published infinity-focus zoom states, the modeled group and stop stations reproduce the detailed Table 1 spacing branch after cement normalization:

| Plane | Wide z | Middle z | Telephoto z | Motion from wide to telephoto |
|---|---:|---:|---:|---|
| G1 start | 0.0000 mm | 0.0000 mm | 0.0000 mm | Fixed |
| G2 start | 14.2022 mm | 40.6864 mm | 65.3056 mm | Imageward |
| Aperture stop | 69.1515 mm | 66.8114 mm | 80.3332 mm | Reverses about the middle state |
| G3 start | 94.8745 mm | 80.7480 mm | 82.3332 mm | Objectward, then partly imageward |
| G4 start | 117.4345 mm | 108.9587 mm | 107.4034 mm | Objectward |
| G5 start | 123.8948 mm | 123.8948 mm | 123.8950 mm | Fixed to source rounding |

This motion is the defining architectural feature of the example. The patent explicitly states that G1 and G5 remain fixed during zooming, G2 moves toward the image side, G4 moves toward the object side, and the stop and G3 follow non-monotonic loci (¶0039). The three published drawings are sampled states, and ¶0022 cautions that the polygonal lines joining them do not represent the exact continuous cam curves.

The aperture stop lies between L6 and L7. Its effective size is also zoom-dependent: the source values are unchanged at wide and middle and larger at telephoto, consistent with the patent's qualitative statement in ¶0039. The model preserves this with stop semi-diameters of 5.249, 5.249, and 5.892 mm, while keeping the source-label correction explicit.

The source prescription ends with plane-parallel plate P. LensVisualizer's ordinary photographic-lens model excludes that rear plate, so the implemented optical train ends at surface 33 after L16. The plate is not treated as a seventeenth lens element. Its optical-path contribution is converted into an air-equivalent rear spacing and then the image conjugate is recomputed after the five 0.005 mm cement media are collapsed. This normalization is discussed in the verification section below.

## Element-by-Element Analysis

The element focal lengths below are standalone thick-element focal lengths recomputed from the final normalized element surfaces. They are therefore distinct from the net power of a cemented assembly and from each element's behavior inside the complete zoom lens.

### L1 — Negative Meniscus, G1, cemented pair D1

**nd = 1.90366, νd = 31.3. Glass: 904313 high-index lanthanum-flint class. Standalone f = -122.847038 mm.**

L1 is the first element of the fixed positive front group and the only negative-power element in G1. The patent describes it as a meniscus with its convex surface toward the object and bonds it directly to L2 (¶0027, ¶0034). Its negative standalone power should not be confused with the positive power of G1 as a whole.

Together, L1 and L2 form D1. In the normalized model that cemented pair has a net isolated focal length of +288.757533 mm. The pair remains only one part of G1; the separate positive L3 supplies the remaining contribution needed for the complete group focal length of +79.046255 mm.

### L2 — Positive Meniscus, G1, cemented pair D1

**nd = 1.59282, νd = 68.6. Glass: 593686 low-dispersion crown class. Standalone f = +85.461478 mm.**

L2 is the positive member of D1 and is a meniscus with its convex face toward the object according to ¶0034. Its patent dPgF value is +0.0194. Unlike most element-level design-role statements, the patent explicitly assigns chromatic significance to this coordinate: conditions (5), (5a), and (5b) use L2's dPgF, and ¶0123 states that satisfying the condition makes secondary-spectrum correction easier.

The data file therefore preserves dPgF = +0.0194 directly on L2. It does not infer a supplier or catalog melt from the coordinate.

### L3 — Positive Meniscus, G1

**nd = 1.59282, νd = 68.6. Glass: 593686 low-dispersion crown class. Standalone f = +106.464500 mm.**

L3 is the rear element of G1 and shares L2's nd, νd, and dPgF coordinate. The patent again gives it a direct chromatic condition: condition (6) is defined from L3's dPgF, and ¶0127 links that condition to easier secondary-spectrum correction. Its +0.0194 value satisfies the patent's preferred +0.015 threshold.

Because G1 is fixed through the zoom, L3's axial station relative to L1 and L2 does not change across the published zoom states.

### L4 — Negative Meniscus, G2

**nd = 1.95375, νd = 32.3. Glass: 954323 ultra-high-index class. Standalone f = -17.273281 mm.**

L4 begins the negative second group. The patent describes it as a meniscus with the convex surface facing the object (¶0035). It is a comparatively strong negative standalone element and is followed by another negative element, L5, before the positive L6 closes G2.

G2's computed net focal length is -15.388189 mm. During zooming the group translates strongly imageward, from a start station of 14.2022 mm at wide to 65.3056 mm at the telephoto limit.

### L5 — Biconcave Negative, two aspherical surfaces, G2

**nd = 1.80525, νd = 40.9. Glass: S-LAH53 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = -21.932007 mm.**

L5 is biconcave, negative, and aspherical on both surfaces 9A and 10A (¶0035; Table 2). Its glass coordinate is deliberately left unmatched at the supplier level. The patent supplies nd, νd, and dPgF = -0.0066 but does not identify a maker or melt.

The two aspheric surfaces are retained geometrically rather than being interpreted as a separate phase or diffractive element. Their verified modeled-rim departures are discussed in the asphere section.

### L6 — Biconvex Positive, G2

**nd = 1.94595, νd = 18.0. Glass: 946180 very-high-dispersion flint class. Standalone f = +27.305795 mm.**

L6 is the positive rear element of the otherwise negative G2 and is described by the patent as biconvex (¶0035). Its dPgF is +0.0386, but the patent does not assign L6 a dedicated conditional expression analogous to L2 or L3, so no specific chromatic correction role is inferred here from that number alone.

The aperture stop follows L6. Consequently, the G2-to-stop spacing is one of the principal zoom variables used by condition (3).

### L7 — Positive Meniscus, two aspherical surfaces, G3

**nd = 1.77182, νd = 49.6. Glass: 772496/773496 lanthanum-crown class. Standalone f = +19.619984 mm.**

L7 begins the positive third group immediately behind the stop. The patent describes it as a positive meniscus with its convex surface toward the object and aspherical surfaces on both faces (¶0036). Those faces are active-model surfaces 14A and 15A.

G3 as a whole has +23.600917 mm focal length in the normalized model and contains six elements arranged as L7, cemented L8+L9, cemented L10+L11, and L12. Its group locus reverses between the middle and telephoto states.

### L8 — Biconvex Positive, G3, cemented pair D2

**nd = 1.49700, νd = 81.6. Glass: 497816 ED/fluorophosphate class. Standalone f = +15.761950 mm.**

L8 is the positive front member of the L8+L9 cemented pair described in ¶0029 and ¶0036. Its patent coordinate has the highest Abbe number in the active prescription and dPgF = +0.0375. The class label records that low-dispersion coordinate without asserting that L8 is one of Panasonic's specifically marketed ED elements.

The normalized D2 pair has a net isolated focal length of -15.120600 mm. That net value is not simply the sum of the two standalone powers because a cemented thick pair must be evaluated as a coupled optical system.

### L9 — Biconcave Negative, G3, cemented pair D2

**nd = 1.88300, νd = 40.8. Glass: 883408 high-index lanthanum-flint class. Standalone f = -6.843400 mm.**

L9 is the strong negative member of D2 and is biconcave in the patent description (¶0036). Its dPgF is -0.0094. The implemented cemented interface uses L9's downstream index directly; the source's intervening 0.005 mm generic medium is omitted and its thickness is folded into L9's modeled center thickness.

That construction change is why the final-model standalone focal length above is used rather than blindly copying the source Table 3B value.

### L10 — Biconvex Positive, G3, cemented pair D3

**nd = 1.55024, νd = 75.6. Glass: FCD705 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +14.508633 mm.**

L10 is a positive biconvex element cemented to the negative L11 (¶0029, ¶0036). It carries dPgF = +0.0194. As with L8, the low-dispersion coordinate is recorded directly, but the production ED marketing count is not mapped to a specific physical element without manufacturer evidence.

The normalized L10+L11 pair D3 has a net isolated focal length of +24.345539 mm.

### L11 — Negative Meniscus, G3, cemented pair D3

**nd = 1.69895, νd = 30.0. Glass: 699300 dense-flint class. Standalone f = -33.629244 mm.**

L11 is the negative member of D3. The patent describes it as a meniscus with its concave surface toward the object (¶0036). Its dPgF is +0.0086.

As at the other cemented junctions, the final model uses the downstream element index at the shared radius and incorporates the source's 0.005 mm interface layer into L11's thickness. The resulting standalone value is therefore a property of the normalized element, while +24.345539 mm describes D3 as an isolated cemented assembly.

### L12 — Positive Meniscus, two aspherical surfaces, G3

**nd = 1.68820, νd = 31.1. Glass: S-TIM28 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +63.918951 mm.**

L12 closes G3. The patent describes it as a positive meniscus with its convex face toward the object and aspherical surfaces on both sides (¶0036). These are surfaces 24A and 25A in the active model.

The S-TIM28 curve is a coordinate-compatible spectral proxy, with no claim of an exact glass identity. Its dPgF = +0.0074 is retained as source data without a broader performance claim.

### L13 — Biconvex Positive, front asphere, G4, cemented pair D4

**nd = 1.68820, νd = 31.1. Glass: S-TIM28 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +16.443119 mm.**

L13 is the positive front member of the two-element negative fourth group. The patent describes it as biconvex with an aspherical object-side surface (¶0037); that face is surface 26A in the active model.

L13 is cemented to the negative L14. Because D4 is the entirety of G4, the normalized cemented-pair focal length and functional-group focal length are the same within numerical precision: -17.928336 mm.

### L14 — Biconcave Negative, G4, cemented pair D4

**nd = 1.80420, νd = 46.5. Glass: 804465 lanthanum-flint class. Standalone f = -8.398820 mm.**

L14 is the strong negative member of D4 and is biconcave in the patent (¶0037). Its dPgF is -0.0066. The combination of positive L13 and stronger negative L14 produces G4's net negative power.

G4 is also the patent's focus group. It moves toward the object side during zooming (¶0039), but ¶0040 states that it moves toward the image side when focusing from infinity toward proximity. The patent does not publish numerical close-focus spacings, so that focusing motion is not reconstructed in the data.

### L15 — Biconvex Positive, front asphere, G5, cemented pair D5

**nd = 1.80525, νd = 40.9. Glass: S-LAH53 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +14.560878 mm.**

L15 begins the fixed positive rear group. The patent describes it as biconvex with an aspherical object-side surface (¶0038); that face is surface 30A. L15 is cemented to L16 and uses the same supplier-neutral S-LAH53 spectral proxy as L5.

The normalized D5 assembly has a net isolated focal length of +29.488189 mm. Since D5 is the whole of G5, this is also the active G5 functional-group focal length.

### L16 — Negative Meniscus, G5, cemented pair D5

**nd = 1.92119, νd = 24.0. Glass: 921240 high-index high-dispersion class. Standalone f = -25.769745 mm.**

L16 is the negative rear member of D5 and a meniscus with its concave surface toward the object according to ¶0038. Its patent dPgF is +0.0151. The final refracting surface of L16 is active-model surface 33.

The source then inserts a 7.67 mm air space and plane-parallel plate P before the image plane. The active model omits P and replaces that source branch with the normalized rear-air spacing described below.

## Glass Identification and Selection

The patent does not name glass suppliers or melt designations. It supplies d-line refractive index nd, d-line Abbe number νd, and dPgF for the lens elements. The final data uses coordinate-compatible spectral proxies and six-digit coordinate classes without claiming a production supplier identity.

The active element palette is:

| Element | Patent index / Abbe | Reference | Runtime spectral model | Index residual / Abbe residual |
|---|---|---|---|---|
| L1 | 1.90366 / 31.3 | d-line | J-LASFH13; supplier-neutral proxy | 0.000000 / -0.026 |
| L2 | 1.59282 / 68.6 | d-line | FCD515; supplier-neutral proxy | 0.000004 / 0.030 |
| L3 | 1.59282 / 68.6 | d-line | FCD515; supplier-neutral proxy | 0.000004 / 0.030 |
| L4 | 1.95375 / 32.3 | d-line | J-LASFH21; supplier-neutral proxy | 0.000000 / 0.030 |
| L5 | 1.80525 / 40.9 | d-line | S-LAH53; supplier-neutral proxy | 0.000848 / 0.026 |
| L6 | 1.94595 / 18 | d-line | FDS18; supplier-neutral proxy | -0.000005 / -0.020 |
| L7 | 1.77182 / 49.6 | d-line | S-LAH66N; supplier-neutral proxy | 0.000678 / -0.052 |
| L8 | 1.49700 / 81.6 | d-line | H-FK61; supplier-neutral proxy | -0.000000 / 0.013 |
| L9 | 1.88300 / 40.8 | d-line | S-LAH58; supplier-neutral proxy | -0.000003 / -0.035 |
| L10 | 1.55024 / 75.6 | d-line | FCD705; supplier-neutral proxy | 0.000083 / -0.100 |
| L11 | 1.69895 / 30 | d-line | SF15; supplier-neutral proxy | 0.000001 / 0.000 |
| L12 | 1.68820 / 31.1 | d-line | S-TIM28; supplier-neutral proxy | 0.000731 / -0.025 |
| L13 | 1.68820 / 31.1 | d-line | S-TIM28; supplier-neutral proxy | 0.000731 / -0.025 |
| L14 | 1.80420 / 46.5 | d-line | N-LASF44; supplier-neutral proxy | -0.000000 / 0.000 |
| L15 | 1.80525 / 40.9 | d-line | S-LAH53; supplier-neutral proxy | 0.000848 / 0.026 |
| L16 | 1.92119 / 24 | d-line | FDS24; supplier-neutral proxy | -0.000001 / -0.040 |




The glass audit compared these coordinates against current authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalog resources. Those comparisons are useful for class-level interpretation but do not establish the physical supplier or melt used in a patent embodiment. The data consequently omits unsupported nC, nF, and ng values and retains the patent's dPgF values directly.

L5/L15 use S-LAH53 and L12/L13 use S-TIM28 as near-coordinate spectral proxies. Their catalog partial-dispersion signs agree with the patent; the patent values −0.0066 and +0.0074 remain authoritative at the g-line. These matches do not establish exact production compositions.

The manufacturer's statement that the production lens uses four ED lenses and one UHR lens is kept separate from these patent coordinate classifications. The numerical example contains plausible low-dispersion and high-index candidates, but the evidence does not establish which specific patent elements Panasonic intended to label ED or UHR in the production product.

## Focus Mechanism

The patent's focus mechanism is a rear internal focusing motion of G4. Paragraph 0040 states that the fourth lens group moves toward the image side when focusing from infinity toward proximity. Because G4 is the cemented L13+L14 pair, the published mechanism moves that complete two-element negative group rather than an individual glass element.

No numerical close-focus spacing table is published for Numerical Example 1. The patent gives the direction of motion but not the required G4 displacement at wide, middle, or telephoto, nor any zoom-dependent compensation law. Panasonic's minimum-focus specification is an observable of the production camera, not enough information to solve a unique internal lens prescription.

The data therefore uses **NO_INTERNAL_RECONSTRUCTION**. Every focus pair in the six variable-spacing arrays is identical at each zoom keyframe, so changing the UI focus coordinate does not invent internal motion. `closeFocusM = 0.03 m` is retained only as manufacturer-derived wide-end macro/MF metadata required by the schema. It is not evidence that the patent model has been solved at 0.03 m.

This limitation also constrains interpretation of patent statements about proximity-focus field curvature. The patent uses the G4 focal-length condition partly to discuss proximity behavior, but only the infinity-focus wide/middle/telephoto prescriptions are represented numerically here.

## Aspherical Surfaces

Numerical Example 1 has eight aspherical surfaces on five physical elements: L5 surfaces 9 and 10, L7 surfaces 14 and 15, L12 surfaces 24 and 25, L13 surface 26, and L15 surface 30. In the data file those labels carry the required `A` suffix: 9A, 10A, 14A, 15A, 24A, 25A, 26A, and 30A.

The patent defines the sag as

$$
Z(h)=\frac{h^2/r}{1+\sqrt{1-(1+K)(h/r)^2}}+\sum A_n h^n,
$$

with h and r in millimeters. This is the same `1 + K` conic convention used by the LensVisualizer schema, so the patent K values map directly; no K offset is applied. No geometric scale is applied, so the coefficients are transcribed without an asphere scaling transform. The patent supplies A4, A6, A8, A10, and A12 for this example; A14 is zero in the application data because no nonzero A14 term is published.

| Active surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 9A | L5 front | 3.51523 | +9.50609e-5 | -1.19316e-6 | +1.02224e-8 | -2.26985e-11 | 0 |
| 10A | L5 rear | 0 | +6.80001e-5 | -1.23885e-6 | +1.06516e-8 | -3.20770e-11 | 0 |
| 14A | L7 front | 0.836518 | -4.21007e-5 | +7.09284e-8 | -6.19453e-9 | +5.96586e-11 | -4.68713e-13 |
| 15A | L7 rear | 0 | -1.45079e-5 | +3.76423e-7 | -4.65945e-9 | +4.02785e-11 | 0 |
| 24A | L12 front | 0 | -8.67409e-5 | -6.80320e-7 | +2.20681e-8 | -4.09626e-10 | 0 |
| 25A | L12 rear | 0 | -6.76312e-5 | -8.32658e-7 | +2.65808e-8 | -4.37836e-10 | 0 |
| 26A | L13 front | 0 | +2.07523e-5 | -3.49617e-7 | +1.56939e-8 | -1.68224e-10 | 0 |
| 30A | L15 front | 0 | +1.07094e-5 | +1.16689e-7 | -7.07962e-10 | +2.28709e-12 | 0 |

The modeled lens clear apertures are inferred rather than patent-published, so aspheric departure is quoted only at those verified modeled semi-diameters. The values below are the full aspheric sag minus the corresponding base-conic sag at the same radius and K; they are geometric profile differences, not direct claims about a particular aberration contribution.

| Surface | Modeled semi-diameter | Departure from base conic at that radius |
|---|---:|---:|
| 9A | 10.3 mm | +0.635118 mm |
| 10A | 10.2 mm | +0.197897 mm |
| 14A | 9.9 mm | -0.785155 mm |
| 15A | 9.9 mm | +0.149356 mm |
| 24A | 6.2 mm | -0.153010 mm |
| 25A | 6.1 mm | -0.116815 mm |
| 26A | 6.0 mm | +0.026771 mm |
| 30A | 8.8 mm | +0.099323 mm |

Surfaces 9A and 14A have positive K and therefore finite conic-domain limits under the published equation. Both authored semi-diameters pass the current conic-domain policy in the portable geometry verifier. The analysis does not assign a manufacturing process such as molded, polished, or hybrid asphere because the cited patent passages and production specifications used here do not establish one for each surface.

## Chromatic Correction Strategy

The patent provides unusually explicit chromatic design guidance for L2 and L3. Conditions (5) and (6) require positive dPgF values for those two elements, while ¶0123 and ¶0127 state that the conditions make secondary-spectrum correction easier. Numerical Example 1 gives dPgF = +0.0194 for both L2 and L3, exceeding the patent's more-preferred +0.015 thresholds in conditions (5b) and (6b).

That patent statement supports a limited secondary-spectrum interpretation for the fixed front group. It does not, by itself, establish that the complete lens is apochromatic. The data lacks published C-, F-, and g-line indices for each element, and supplier-level Sellmeier identities are not established for the complete glass set. Accordingly, no APO claim is made.

Several other elements carry large positive or negative dPgF values in Table 1, including L6 (+0.0386), L8 (+0.0375), and L9 (-0.0094). Those values are preserved for the dispersion engine's dPgF-corrected Abbe fallback, but this analysis does not infer a specific aberration assignment for them unless the patent states one.

The production specification's four-ED-lens statement is also kept separate. It is useful correlation evidence, but it does not authorize relabeling four patent elements as specific production ED parts.

## Conditional Expressions

The patent uses six principal conditions to bound power distribution, stop placement, second-group travel, and two partial-dispersion coordinates. Table 13 prints the Example-1 values as 8.65, 1.96, 0.38, 0.60, 0.0194, and 0.0194. The normalized active model recomputes the same expressions from the final data as follows:

| Condition | Definition | Active-model value | Table 13 value | Principal patent requirement |
|---|---|---:|---:|---|
| (1) | f1 / fw | 8.644739 | 8.65 | 6.0 < value < 20.0 |
| (2) | abs(f4) / fw | 1.960697 | 1.96 | 0.5 < value < 4.0 |
| (3) | D13w / (D12w + D13w) | 0.383098 | 0.38 | value > 0.15 |
| (4) | T21t / T21w | 0.598198 | 0.60 | value < 1.0 |
| (5) | dPgF2 | 0.019400 | 0.0194 | value > 0.005 |
| (6) | dPgF3 | 0.019400 | 0.0194 | value > 0.005 |

The small differences in conditions (1), (2), and (4) relative to the printed Table 13 values are expected consequences of evaluating the expressions on the normalized active model rather than on the raw 35-plane source model. Conditions (3), (5), and (6) are unchanged because their governing quantities survive the normalization directly.

The active values also fall within the patent's tighter preferred ranges: condition (1) is between 6.5 and 12, condition (2) between 1.0 and 3.0, condition (3) between 0.25 and 0.45, condition (4) between 0.4 and 0.8, and conditions (5) and (6) exceed 0.015. These comparisons follow ¶0100-¶0129; they are not substitutes for the full aberration plots in Figure 2.

## Model Normalization and Verification

The data file is not a literal 35-plane copy of Table 1. It applies project normalization while preserving a raw source branch in the dossier.

First, five source interfaces insert a 0.005 mm, nd = 1.56732 medium between patent-defined bonded element pairs: L1/L2, L8/L9, L10/L11, L13/L14, and L15/L16. The active model removes those generic cement media. Each surviving same-radius cemented junction carries the downstream element's refractive index and element ID, and the 0.005 mm axial thickness is added to the downstream element thickness. This preserves the subsequent axial stations but changes the first-order power slightly, which is why all active element, group, and system quantities are recomputed from the final file rather than copied from Table 3B or 3C.

Second, source plate P, surfaces 34-35, is omitted. If only the plate were removed, its air-equivalent rear gaps from surface 33 would be 9.900400, 9.865810, and 9.853810 mm at wide, middle, and telephoto. After the cement normalization changes the optical power slightly, the final conjugate-correct rear gaps become 9.917892, 9.894033, and 9.885515 mm. The additional refocus required by the cement normalization is therefore +0.017492, +0.028222, and +0.031705 mm.

The source also contains a separate total-length discrepancy. Summing the detailed Table 1 spacings through surface 35 and then adding the separately tabulated BF does not reproduce the Table 3A total-length summary of 142.2000 mm at wide and telephoto. The model follows the detailed spacing/BF branch and leaves the 142.2000 mm row recorded as a conflicting source summary rather than altering the prescription to force agreement.

The zoom interpolation control points retain the patent-published Table 3A state focal lengths of 9.1401, 39.1047, and 168.6806 mm. These state labels are kept separate from the normalized model's recomputed EFLs below; the latter differ slightly because of the documented cement and rear-plane normalization.

The implemented wide/middle/telephoto first-order results, recomputed from the parsed final `.data.ts`, are:

| State | Active EFL | BFL from final refracting surface 33 | Modeled maximum f-number |
|---|---:|---:|---:|
| Wide | 9.143856 mm | 9.917892 mm | f/2.907934 |
| Middle | 39.113262 mm | 9.894033 mm | f/4.300514 |
| Telephoto | 168.707624 mm | 9.885515 mm | f/4.622166 |

The sequential height/reduced-angle trace and an independently accumulated conventional angle-ABCD matrix agree at the three keyframes to the verifier's floating-point tolerance. The active-model Petzval sum is -0.000799288446 mm^-1, corresponding to a signed radius of +1251.113 mm under the verifier's convention; it is summed surface by surface as phi/(n·n').

Example 1 does not publish physical lens semi-diameters. The data therefore uses modeled clear apertures: the semi-diameters are inferred from exact meridional d-line ray containment and then checked against edge thickness, actual spherical/aspherical rim slope, positive-K conic limits, and shared-gap sag intrusion. The final portable checks give a minimum modeled edge thickness of 0.245520 mm, a maximum rim angle of 60.246549°, and a maximum positive shared-gap intrusion fraction of 0.767857 against the 0.90 policy limit.

At the three defined zoom states, the sampled exact-ray minimum clearances are 0.463345, 0.706878, and 0.141657 mm, and six additional piecewise-linear intermediate zoom samples also remain nonnegative. This is finite meridional sampling, not a proof over every continuous cam position and not the production LensVisualizer render-trim diagnostic. The authored semi-diameters should therefore be read as geometry-valid model apertures, not as measured manufacturer mechanical dimensions.

Repository integration results are recorded in the accompanying 2026-09-15 audit log.

## Sources and References

- **US 2018/0081156 A1**, *Zoom Lens System, Imaging Apparatus and Camera*, Panasonic Intellectual Property Management Co., Ltd., published March 22, 2018. Principal locations used here: Figure 1; ¶0025-¶0040; ¶0093-¶0129; ¶0145-¶0155; Tables 1, 2, 3A-3D, and 13.
- Panasonic Newsroom Japan, **“Digital Camera LUMIX DMC-FZH1 launch release,”** September 20, 2016: https://news.panasonic.com/jp/press/jn160920-3
- Panasonic Australia, **DMC-FZ2500 Camera Archive — Specs:** https://www.panasonic.com/au/support/product-archives/lumix-cameras-video-cameras/lumix-digital-cameras/dmc-fz2500.specs.html
- Panasonic, **DMC-FZ2000 official product/archive page:** https://pl.panasonic.com/panasonic-dmc-fz2000-lumix-aparat-kompaktowy-z-obiektywem-leica-dc-f2-8-4-5-24-480mm-mos-20-1mp-zoom-20x-wideo-4k-wizjer-oled-lvf-czarny/
- OHARA INC., **Catalog Download:** https://www.ohara-inc.co.jp/en/product/catalog/
- HOYA Optics Division, **Optical Glass Catalog / Cross Reference Index:** https://www.hoya-opticalworld.com/japanese/products/crossreference.html
- SCHOTT, **Optical Glass Downloads:** https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- HIKARI GLASS CO., LTD., **Optical Glass Catalog Download:** https://www.hikari-g.co.jp/optical_glass/catalog/
- Chengdu Guangming Photoelectric / CDGM, **Optical glass database:** https://www.cdgmgd.com/database/toWebDatabase.htm?url=database
- SUMITA OPTICAL GLASS, Inc., **Optical Glass Data Downloads:** https://www.sumita-opt.co.jp/en/download/
