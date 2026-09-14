# NIKON AF-S DX ZOOM-NIKKOR 18-70mm f/3.5-4.5G IF-ED

## Patent Reference and Design Identification

**Patent:** US 2005/0068636 A1

**Application Number:** US 10/951,871

**Priority:** JP 2003-341744, filed September 30, 2003

**Filed:** September 29, 2004

**Published:** March 31, 2005

**Inventor:** Satoshi Hayakawa

**Assignee:** Nikon Corporation

**Title:** *Zoom Lens System*

**Embodiment analyzed:** Example 1, Fig. 2 and Table 1

The prescription represented here is the native-scale d-line prescription of Example 1 in US 2005/0068636 A1. The patent
places Example 1 within a five-group positive/negative/positive/negative/positive zoom architecture and publishes three
infinity-focus states at 18.7, 35.0, and 67.9 mm with FNO values 3.6, 4.2, and 4.6. The production lens is marketed as an
18–70mm f/3.5–4.5 DX zoom; those rounded product specifications are kept separate from the patent/model values throughout
this analysis. The selected production correlation is not presented as a Nikon-confirmed patent identification.

Several independent criteria converge on the selected correlation:

1. Example 1 has 15 physical lens elements in 13 groups, matching Nikon's production specification of 15 elements in
   13 groups.
2. Nikon specifies three ED elements and one aspherical element. In the patent prescription, the three very-high-Abbe
   positive elements L32, L51, and L52 are the coordinate sets classified in the model as ED class, while the only
   aspherical surface is the thin resin layer bonded to L21.
3. The patent covers 18.7–67.9 mm at FNO 3.6–4.6; Nikon markets 18–70mm f/3.5–4.5. The small differences are consistent
   with the separation between exact design values and rounded product nomenclature.
4. The patent specifies focusing by axial movement of G2 (¶0085). Nikon specifies Internal Focusing for the production
   lens.
5. Nikon specifies a minimum focus distance of 0.38 m and maximum reproduction ratio of 0.16. A mechanism-constrained
   reconstruction using the Example-1 prescription reaches 0.160020× at the telephoto state at 0.38 m.
6. Nikon's historical material places the 18–70mm f/3.5–4.5G IF-ED in the 2004 DX lineup with the D70, while the patent
   claims Japanese priority from September 2003 and was filed in the United States in September 2004.

The patent text defines the d-line at 587.6 nm and identifies the four variable air spaces D5, D14, D19, and D23
(¶¶0087–0089). It also states that the aperture stop is 0.6 mm object-side of surface 15, that the stop moves with G3,
that G4 is fixed during zooming, and that G2 follows a gentle S-shaped zoom trajectory even though only three numerical
zoom states are tabulated (¶¶0083, 0085–0086).

The model applies no dimensional scaling. All radii, thicknesses, reconstructed spacings, and derived focal lengths
therefore remain at the patent's native scale. No aspheric coefficient transformation is required; the coefficients are
used exactly in the patent's dimensional convention.

The patent's machine-readable text layer contains several obvious transcription defects. The rendered patent pages establish
surface 8 as R = +11.3585 mm, surface 16 as R = +15.8142 mm, and surface 24 as R = −1292.7371 mm; they also restore
leading `1.` digits in several refractive indices, the powers of ten in the asphere table, and the comparison signs in the
conditional expressions. These are source-text restorations, not numerical corrections to the patent.

No sensor cover glass, filter plate, inactive dummy or flare-cutter plane, or mechanical surface is part of Example 1's
prescription. Consequently, the model omits no active plate and requires no air-equivalent rear-spacing correction. The
only inserted plane is the explicit `STO`, which normalizes the patent-published stop location without changing the
physical D14 air space.

## Optical Architecture

Example 1 is a five-power-group standard zoom with the sequence **positive / negative / positive / negative / positive**.
The patent explicitly gives this power arrangement and the zoom-gap directions (¶¶0046–0047, 0076). Independent
calculation from the modeled prescription gives isolated functional-group EFLs of +78.788231 mm for G1, −14.000016 mm for
G2, +26.680613 mm for G3, −41.402451 mm for G4, and +34.681232 mm for G5. These are group-level powers; they are not the
same quantity as the standalone focal lengths of individual elements or the net powers of cemented pairs.

The 15 physical elements are represented by 16 optical-media entries because L21 is a hybrid composite: a
0.08 mm aspherical resin layer (`L21r`) is bonded to the glass substrate L21. The additional media entry therefore does
not change the physical element count. The model contains three bonded combinations: the L11+L12 cemented pair in G1,
the L21r+L21 hybrid pair in G2, and the L31+L32 cemented pair in G3.

At the wide state, G1 acts as the large front collector and establishes much of the ray height before the strongly
negative G2. G2 is the principal variator and the internal-focus group. G3 restores positive power around the aperture
stop, G4 supplies a fixed negative relay, and G5 provides the rear positive power that brings the system to the image
plane. The arrangement is deliberately asymmetric at the wide end to secure back focal distance for an SLR mirror box,
which is one of the patent's stated design objectives (¶¶0067–0071).

The patent's four published variable gaps evolve as follows:

| Gap | 18.7 mm | 35.0 mm | 67.9 mm | Wide-to-tele behavior |
|---|---:|---:|---:|---|
| D5, G1→G2 | 2.98 mm | 15.56 mm | 31.36 mm | increases |
| D14, G2→G3 | 15.50 mm | 7.83 mm | 2.84 mm | decreases |
| D19, G3→G4 | 0.98 mm | 6.94 mm | 10.68 mm | increases |
| D23, G4→G5 | 11.77 mm | 5.82 mm | 2.07 mm | decreases |

With the image plane normalized to a fixed z reference, the independently reconstructed group stations show G1 moving
25.413 mm objectward from wide to tele, G2 moving 2.967 mm imageward, and G3 and G5 each moving approximately 9.693 mm
objectward. G4 changes by only 0.0088 mm across the three tabulated states, consistent with the patent's statement that
G4 is fixed and with rounding in the published spacings. The three numerical samples do not determine the exact
continuous S-shaped trajectory of G2 between them, so no additional reversal point is implied by the model.

The architecture should not be assigned a single telephoto or retrofocus label across the entire zoom range. Under the
project's strict criterion, BFD exceeds EFL at 18.7 and 35.0 mm, so those two states are retrofocus; at 67.9 mm BFD is
smaller than EFL. None of the three states satisfies the project criterion `TL/EFL < 1` for a telephoto form. This is
compatible with the patent's use of “retrofocus type” as a discussion of excessive BF/f ratio rather than as a fixed
classification of every zoom state (¶0070).

The stop is a published axial datum rather than an inferred placement. In the modeled prescription, the physical D14 space is split
so that surface 14 to `STO` equals D14 − 0.6 mm and `STO` to surface 15 equals 0.6 mm. The physical stop diameter is not
published. The modeled `nominalFno` values therefore control the maximum-aperture stop opening at each zoom state rather
than forcing one fixed iris radius across the zoom.

Patent semi-diameters are also absent. The modeled semi-diameters are derived values derived from exact-Snell marginal
and chief-ray envelopes, then constrained by edge thickness, actual rim slope, the positive-K conic domain, cross-gap
surface intrusion, Fig. 2's silhouette, and the production 67 mm filter thread as an external mechanical ceiling. They
must not be read as dimensions disclosed by the patent.

## Element-by-Element Analysis

### L11 — Negative Meniscus (convex to object)

**nd = 1.84666, νd = 23.8. Glass: 847238 class. Standalone f = −144.349 mm.**

L11 is the front member of the G1 cemented pair. Its standalone power is weakly negative, but that number describes the
isolated element in air; it does not describe the bonded pair or the assembled G1. The low Abbe number relative to L12
makes the pair a strong first-order dispersion contrast.

The patent states that excessive positive power in G1 makes axial chromatic aberration more difficult to correct
(¶0065). In that context, the negative, high-index L11 is part of the power-and-dispersion balancing that allows G1 to
remain positive without placing all of the positive power in a single crown element.

### L12 — Positive Meniscus (convex to object)

**nd = 1.64000, νd = 60.1. Glass: S-BSM81 catalog equivalent (patent 640601; production supplier unspecified). Standalone f = +97.879 mm.**

L12 is cemented directly to L11. Its positive standalone power and substantially higher νd oppose both the sign of L11's
power and its stronger dispersion. The isolated L11+L12 cemented pair has a net focal length of +310.469 mm, much weaker
than either element alone, illustrating why standalone element powers should not be interpreted as the power of the
bonded component.

Within G1, L12 therefore provides part of the converging action while keeping the front doublet only weakly positive as a
unit. This is a first-order interpretation of the stored nd/νd coordinates; no partial-dispersion or apochromatic claim is
made.

### L13 — Positive Meniscus (convex to object)

**nd = 1.71300, νd = 53.9. Glass: 713539 class. Standalone f = +104.241 mm.**

L13 is the air-spaced rear positive element of G1. The weakly positive L11+L12 pair is followed by this stronger positive
meniscus so that the complete isolated G1 reaches +78.788 mm. This distribution separates the chromatic balancing of the
front doublet from the group power needed for the zoom architecture.

As G1 moves objectward during zooming, L13 remains part of the rigid first group. The patent's G1 conditional expression
therefore constrains the behavior of the whole three-element group, not L13 in isolation (¶¶0062–0066).

### L21r — Hybrid Aspheric Resin Layer (1x Asph)

**nd = 1.55389, νd = 38.1. Glass: Unmatched (hybrid aspheric resin; patent nd=1.55389, vd=38.1). Standalone f = −197.987 mm.**

L21r is the 0.08 mm bonded resin layer on the object-side surface of L21. The patent explicitly identifies a thin resin
layer with an aspherical shape on L21 (¶0084). It is represented as a separate optical medium because its refractive index
is different from the L21 substrate, while the physical element count remains one for the hybrid component.

Its standalone focal length is only a bookkeeping description of the thin refracting layer. Bonded to L21, the
L21r+L21 hybrid combination has an isolated net focal length of −16.458 mm. The aspheric departure of its front surface is
discussed separately below.

### L21 — Negative Meniscus (convex to object)

**nd = 1.80400, νd = 46.6. Glass: 804466 class. Standalone f = −18.023 mm.**

L21 is the glass substrate of the hybrid front component of G2. It supplies most of the negative power of that hybrid
pair and begins the strongly negative focusing group. Because the resin layer is bonded to its front surface, the optical
behavior of the component cannot be understood by adding the two standalone focal lengths directly.

The patent identifies G2 as both the negative second group and the focusing group (¶¶0079, 0085). It also warns that
making G2 too strong makes field curvature difficult to correct, while making it too weak increases required group travel
and system size (¶¶0048–0051). L21 is therefore part of a group whose power is explicitly constrained by both aberration
and movement considerations.

### L22 — Biconcave Negative

**nd = 1.80400, νd = 46.6. Glass: 804466 class. Standalone f = −19.292 mm.**

L22 repeats the same nd/νd coordinate class as the L21 substrate but uses a biconcave form and remains air-spaced. Its
standalone negative power is comparable to L21's, increasing the negative strength of G2 without adding another material
coordinate.

Because L22 translates rigidly with the rest of G2 during both zooming and the reconstructed close-focus motion, its
chief contribution is inseparable from the group motion in the assembled lens. The independent group calculation gives
G2 as −14.000 mm after all four physical elements and their internal separations are included.

### L23 — Biconvex Positive

**nd = 1.79504, νd = 28.5. Glass: J-LAFH3 catalog equivalent (patent 795285; production supplier unspecified). Standalone f = +16.676 mm.**

L23 is the sole positive element within the negative G2. Its strong positive standalone power opposes the surrounding
negative members and helps shape the net group power rather than simply maximizing divergence. The low νd means it is not
a low-dispersion crown despite its positive sign.

J-LAFH3 supplies a coordinate-compatible catalog dispersion curve. The source still establishes only the patent
coordinate, so the label remains a modeling proxy and does not identify Nikon's production supplier or melt.

### L24 — Negative Meniscus (concave to object)

**nd = 1.80400, νd = 46.6. Glass: 804466 class. Standalone f = −44.576 mm.**

L24 is the rear negative meniscus of G2. It closes the focusing group immediately ahead of D14 and the aperture-stop
region, so translation of G2 directly changes the G2-to-stop/G3 separation.

Its weaker standalone power compared with L21 and L22 lets the group retain a strongly negative net power while avoiding
a final very strong refracting surface adjacent to the stop. This role is a design interpretation of the prescription;
the patent discusses G2's power limits at the group level rather than assigning aberrations to L24 individually.

### L31 — Negative Meniscus (convex to object)

**nd = 1.80440, νd = 39.6. Glass: 804396 class. Standalone f = −27.228 mm.**

L31 is the negative front member of the G3 cemented pair and lies immediately behind the aperture stop. Its negative
standalone power is almost equal in magnitude to the positive standalone power of L32.

The bonded L31+L32 pair consequently has an isolated net focal length of +550.261 mm, so the cemented pair is nearly
afocal compared with either constituent. This is an important distinction: G3's +26.681 mm group power is not supplied
by the cemented pair alone but is completed by L33 and the internal group geometry.

### L32 — Biconvex Positive

**nd = 1.49782, νd = 82.6. Glass: J-FKH1 catalog equivalent (patent 498826; production supplier unspecified). Standalone f = +26.170 mm.**

L32 is the positive rear member of the G3 cemented pair. Its very high νd is the strongest low-dispersion coordinate in
the front three groups and creates a large dispersion contrast against L31 while their powers nearly cancel as a bonded
pair.

J-FKH1 is coordinate-compatible at the patent's printed precision. The model remains supplier-neutral because the
patent does not identify the glass supplier. Nikon's production statement that the lens contains three ED elements is
consistent with classifying L32 as ED, but it does not establish a particular melt or supplier.

### L33 — Biconvex Positive

**nd = 1.48749, νd = 70.4. Glass: 487704 class. Standalone f = +28.150 mm.**

L33 is the air-spaced positive rear element of G3. After the nearly neutral L31+L32 cemented pair, L33 supplies much of
the positive group power required around the stop. The complete isolated G3 has an EFL of +26.681 mm.

The patent specifically notes that making G3 too strong makes spherical aberration more difficult to correct, while too
weak a G3 enlarges the system (¶¶0054–0056). L33 therefore sits in the group whose positive power is directly tied by the
patent to the spherical-aberration/compactness trade.

### L41 — Positive Meniscus (concave to object)

**nd = 1.84666, νd = 23.8. Glass: 847238 class. Standalone f = +34.418 mm.**

L41 is the positive front element of the fixed G4. Although positive in isolation, it is paired across a narrow air gap
with the stronger negative L42 so that the complete isolated G4 is negative at −41.402 mm.

The 0.28 mm air gap after L41 is the tightest geometry in the modeled prescription. The validated semi-diameters preserve
positive clearance between the facing surfaces; the same boundary becomes the first vignetting location for some
60%-field pupil-edge rays. That modeled vignetting is allowed at an air-separated boundary and is not moved into a
cemented interface.

### L42 — Biconcave Negative

**nd = 1.83481, νd = 42.7. Glass: 835427 class. Standalone f = −18.612 mm.**

L42 supplies the dominant negative power of G4. The patent states that G4 remains fixed during zooming (¶0086), and the
image-plane-normalized reconstruction confirms that its station is constant to within 0.0088 mm across the three
published states.

The patent also states that excessive negative power in G4 makes coma difficult to correct, while insufficient negative
power increases the movement needed from G4 in the general architecture (¶¶0059–0061). Example 1 avoids that motion by
placing G4 within the permitted power range and fixing it mechanically during zoom.

### L51 — Positive Meniscus (concave to object)

**nd = 1.49782, νd = 82.5. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone f = +39.017 mm.**

L51 begins the rear positive group G5. Its high νd identifies it as a low-dispersion coordinate class in the modeled prescription.
The element's very weakly curved front surface and stronger rear surface produce positive standalone power while keeping
its front refraction modest.

Nikon's production specification identifies three ED elements. L51, L52, and L32 are the three prescription elements
whose nd/νd coordinates support the model's ED-class annotations. This mapping is a production-correlation inference,
not a vendor or melt identification.

### L52 — Biconvex Positive

**nd = 1.49782, νd = 82.5. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone f = +41.336 mm.**

L52 is the second low-dispersion positive element of G5 and uses the same coordinate pair as L51. Its biconvex form adds
positive power behind L51 before the final negative meniscus.

The 82.5 Abbe row remains distinct from L32's 82.6 row even though both use the same coordinate-compatible J-FKH1
dispersion proxy. The patent coordinates remain recorded separately, and neither proxy is an asserted production glass
identity.

### L53 — Negative Meniscus (concave to object)

**nd = 1.80518, νd = 25.4. Glass: 805254 class. Standalone f = −43.289 mm.**

L53 is the rear negative meniscus and final physical element. Its high index and low νd oppose the two positive,
high-νd elements ahead of it, leaving the complete isolated G5 positive at +34.681 mm.

This arrangement gives the rear group a strong first-order dispersion contrast without requiring a vendor-specific glass
claim. The patent supplies only nd and νd, so the analysis does not assign anomalous partial dispersion or apochromatic
behavior to L51, L52, or L53.

## Glass Identification and Selection

The patent does not name glass manufacturers. It publishes only d-line refractive index and Abbe number. The model uses
coordinate classes or supplier-neutral catalog equivalents where a compatible dispersion curve exists; each proxy
retains the patent code and explicitly leaves the production supplier unspecified.

| Modeled glass label | nd | νd | Used by | Interpretation |
|---|---:|---:|---|---|
| 847238 class | 1.84666 | 23.8 | L11, L41 | high-index, high-dispersion class |
| S-BSM81 catalog equivalent (patent 640601) | 1.64000 | 60.1 | L12 | supplier-neutral dispersion proxy |
| 713539 class | 1.71300 | 53.9 | L13 | high-index crown/lanthanum-class coordinate |
| Unmatched (hybrid aspheric resin; patent nd=1.55389, vd=38.1) | 1.55389 | 38.1 | L21r | bonded resin medium, not optical glass |
| 804466 class | 1.80400 | 46.6 | L21, L22, L24 | high-index class used throughout G2 |
| J-LAFH3 catalog equivalent (patent 795285) | 1.79504 | 28.5 | L23 | supplier-neutral dispersion proxy |
| 804396 class | 1.80440 | 39.6 | L31 | high-index cemented negative member |
| J-FKH1 catalog equivalent (patent 498826) | 1.49782 | 82.6 | L32 | supplier-neutral proxy; inferred ED role |
| 487704 class | 1.48749 | 70.4 | L33 | low-dispersion crown coordinate |
| 835427 class | 1.83481 | 42.7 | L42 | high-index negative coordinate |
| J-FKH1 catalog equivalent (patent 498825) | 1.49782 | 82.5 | L51, L52 | supplier-neutral proxy; inferred ED role |
| 805254 class | 1.80518 | 25.4 | L53 | dense, high-dispersion rear negative coordinate |

Comparison against the catalog identifies compatible Sellmeier proxies for the 640601, 795285, 498826, and 498825
coordinates. These matches increase modeled chromatic coverage but do not establish vendor identity. The
1.49782/82.5 coordinate of L51 and L52 remains recorded separately from L32's 1.49782/82.6 patent coordinate.

The glass palette establishes substantial first-order dispersion contrasts: L11/L12 in G1, L31/L32 in the G3 cemented
pair, and L51/L52 against L53 in G5. These contrasts provide first-order dispersion leverage for chromatic balancing at the d-line/Abbe level,
but they do not establish secondary-spectrum behavior. The patent supplies no per-element nC, nF, ng, θgF, or ΔPgF,
and the model therefore contains no such values.

## Focus Mechanism

The patent states that focusing is performed by moving G2 along the optical axis (¶0085). It does not publish close-focus
spacings. The focus state is therefore classified as **CONSTRAINED_RECONSTRUCTION** rather than presented as a published focus
state.

The reconstruction uses Nikon's specified 0.38 m minimum focus distance, fixes the image plane at each zoom state, and
constrains G2 to translate rigidly. In each state, D5 and physical D14 change by equal and opposite amounts, so their sum
is conserved and no internal spacing inside G2 is altered. The physical stop remains attached to G3 at the patent's
published axial location.

| Zoom state | G2 shift, + imageward | D5 at 0.38 m | physical D14 at 0.38 m | paraxial \|m\| |
|---|---:|---:|---:|---:|
| 18.7 mm | −1.415523 mm | 1.564477 mm | 16.915523 mm | 0.062009× |
| 35.0 mm | −2.234433 mm | 13.325567 mm | 10.064433 mm | 0.106145× |
| 67.9 mm | −4.721413 mm | 26.638587 mm | 7.561413 mm | 0.160020× |

The negative sign in the table means G2 moves objectward when positive motion is defined toward the image. The required
objectward travel grows with focal length, reaching 4.721 mm at the telephoto state. The 67.9 mm reconstruction produces
0.160020× magnification, closely matching Nikon's marketed maximum reproduction ratio of 0.16. That agreement is an
independent check on the constrained model, not evidence that Nikon published these close-focus spacings.

The patent also says that G2 follows a gentle S-shaped path during zooming (¶0086). The three tabulated infinity states
are retained as the only numerical trajectory knots. The exact continuous path between them is underdetermined, so the
focus reconstruction does not add or infer an unprinted zoom reversal.

No autofocus drive geometry is modeled in the prescription. Nikon identifies the production lens as AF-S with a Silent
Wave Motor, but the patent's optical embodiment specifies the focusing group rather than a production motor mechanism.
The optical analysis therefore treats G2 translation as the relevant design fact and the AF-S designation as product
metadata.

## Aspherical Surfaces

Example 1 has one aspherical surface: patent surface 6, represented as **6A** on the front of the thin L21 hybrid resin layer.
The `A` suffix is a data-model label; it does not change the patent surface number. The patent explicitly states that the
negative L21 component carries a thin resin layer with an aspherical shape on its object-side surface (¶0084).

Patent ¶¶0073–0074 use the standard conic form

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10},
$$

with $c=1/R$. Thus the patent's $K$ is already the standard conic constant used by the data model: $K=0$ corresponds to
a spherical base. No κ-to-K conversion is required.

For surface 6A the native-scale coefficients are:

| Coefficient | Value |
|---|---:|
| K | +15.4398 |
| A4 | +2.5511 × 10⁻⁵ mm⁻³ |
| A6 | −7.9835 × 10⁻⁹ mm⁻⁵ |
| A8 | −2.6853 × 10⁻¹⁰ mm⁻⁷ |
| A10 | +2.2060 × 10⁻¹³ mm⁻⁹ |

Only even radial powers are present. Because the prescription is used at scale factor 1, the coefficients are copied
without the `A_p/s^(p-1)` transformation that would be required for a scaled model, and K remains unchanged.

The patent supplies no clear semi-diameter for the asphere. The patent-figure-refined 11.5 mm model value is a validated
modeling diameter, not a source dimension. At that semi-diameter, independent evaluation of the final coefficients gives
an aspheric departure of **+0.3822 mm** from the base sphere. The positive-K real-domain limit under the current 0.98
margin is 26.7098 mm, so the modeled 11.5 mm semi-diameter remains well inside the conic domain.

The sign and magnitude of the computed rim departure show that the composite surface has substantially greater sag than
its base sphere at the modeled edge. The patent later states that placing an aspherical surface in G2 enables effective
correction of curvature of field and distortion (¶0159). In Example 1 that statement applies to 6A, the sole asphere. The
computed +0.3822 mm departure quantifies the modeled shape at the validated rim; it does not independently decompose
how much of the finished system's correction is attributable to that surface.

## Chromatic Correction Strategy

Nikon's production specification states that the lens contains three ED elements. The model associates that production
fact with the three very-high-Abbe positive elements L32 (νd = 82.6), L51 (νd = 82.5), and L52 (νd = 82.5). The
`apd: "inferred"` annotations record that correlation separately from the supplier-neutral J-FKH1 dispersion proxies.

The most conspicuous first-order chromatic pairing is the G3 cemented pair. L31 has nd = 1.80440 and νd = 39.6, whereas
L32 has nd = 1.49782 and νd = 82.6. Their standalone powers, −27.228 and +26.170 mm, almost cancel; the cemented pair's
net isolated focal length is +550.261 mm. The large Abbe contrast therefore provides chromatic balancing with little net
power, while L33 supplies most of the positive group action.

G5 uses a related strategy in air-spaced form. L51 and L52 are positive, high-νd elements, followed by the negative,
low-νd L53. The complete G5 remains positive at +34.681 mm. G1 similarly combines the low-νd negative L11 with the
higher-νd positive L12 before adding the separate positive L13.

These statements concern nd/νd-level dispersion and first-order power balance. They do not establish anomalous partial
dispersion, secondary-spectrum correction, or apochromatic performance. The patent's aberration plots include d- and
g-line curves (¶0091), but no per-glass g-line index or other line-index set is published, and no validated Sellmeier
identity is stored for the ED-class coordinates.

## Conditional Expressions and Design Trade-offs

The patent defines five principal ratios for the five-group architecture. The final data arrays reproduce the Example-1
printed values to the patent's stated precision:

| Condition | Patent range | Example 1 printed | Recomputed from model | Satisfied |
|---|---:|---:|---:|---|
| (−f2)/fw | 0.655–2.000 | 0.748 | 0.747820 | yes |
| f3/fw | 1.18–2.50 | 1.425 | 1.425162 | yes |
| (−f4)/fw | 1.92–4.00 | 2.212 | 2.211538 | yes |
| f1/fw | 3.78–6.00 | 4.209 | 4.208522 | yes |
| BF/fw | 1.8–6.0 | 2.035 | 2.035143 | yes |

The first ratio limits G2 power. The patent explains that too much negative power in G2 makes field curvature difficult
to correct, while too little negative power increases G2 movement and overall size (¶¶0048–0051). Example 1's
recomputed 0.747820 sits inside both the broad claimed interval and the patent's preferred discussion around a lower
limit of 0.7 and upper limit of 1.0.

The second ratio limits G3 power. The patent associates excessive G3 power with difficult spherical-aberration correction
and insufficient G3 power with increased system length (¶¶0054–0056). The recomputed 1.425162 is consistent with the
printed 1.425.

The third ratio limits the fixed negative G4. The patent associates excessive G4 power with difficult coma correction;
when G4 is too weak in the general architecture, greater movement is required and system size increases (¶¶0059–0061).
Example 1's G4 is both within the ratio range and fixed during zooming.

The fourth ratio constrains positive G1. The patent states that excessive G1 power makes axial chromatic aberration more
difficult to correct, while insufficient power increases G1 travel and system size (¶¶0064–0066). The front cemented
pair and L13 distribute that power within the group rather than concentrating it in one strong positive element.

The fifth ratio formalizes the SLR back-focus requirement. The patent seeks enough back focal length to leave room for a
mirror and filter, but warns that an excessively large BF/fw ratio drives the power arrangement toward a more asymmetric
retrofocus condition that worsens off-axis correction and enlarges the system (¶¶0069–0071). Example 1's recomputed
2.035143 matches the printed 2.035 ratio closely.

## Verification Summary

Independent first-order calculation from the modeled prescription was cross-checked by sequential height/reduced-angle
tracing and an independent ABCD matrix calculation. The two methods agree at all three infinity zoom states to better than 3 × 10⁻¹⁴ in the independent calculation.

| Patent zoom state | Computed EFL | Computed BFD | Modeled FNO | Exact-Snell stop SD |
|---|---:|---:|---:|---:|
| 18.7 mm | 18.721115 mm | 38.100142 mm | 3.6 | 5.555086 mm |
| 35.0 mm | 34.997049 mm | 44.051919 mm | 4.2 | 5.821296 mm |
| 67.9 mm | 67.902108 mm | 47.793151 mm | 4.6 | 6.055825 mm |

The computed effective focal lengths agree with the patent's rounded 18.7, 35.0, and 67.9 mm values. Example 1 labels
rear spacing as BF but does not tabulate numerical BF values, so the three BFD values above are computed model quantities
and are the values stored after surface 29. The physical stop semi-diameters are likewise computed because the patent
publishes stop position and FNO but no stop diameter.

Surface-by-surface Petzval summation using $\phi/(n n')$ gives +0.0034200564 mm⁻¹, corresponding to a reciprocal scale of
about 292.393 mm. This is a Petzval curvature scale, not a measured final field-curvature radius and not a claim about the
fully aberrated image surface.

The patent-figure-refined semi-diameters pass the independent geometry gates over the defined zoom and focus endpoints,
including the binding L41-L42 air gap. The 6A asphere remains far inside its positive-K conic domain.

Exact off-axis tracing shows that the full-field chief ray passes every modeled surface at all three infinity states.
Some 60%-field pupil-edge rays vignette at the narrow L41–L42 air-separated boundary; no tested ray first clips at the
cemented interfaces. This result is consistent with using that 0.28 mm gap as the binding physical aperture boundary
rather than enlarging the two elements until their surfaces overlap.


## Sources and References

1. Satoshi Hayakawa, **“Zoom Lens System,” US 2005/0068636 A1**, Nikon Corporation, published March 31, 2005. Example 1:
   Fig. 2, Table 1, and ¶¶0077–0095; architecture and conditional-expression rationale: ¶¶0046–0071; asphere convention:
   ¶¶0073–0074; G2-asphere correction statement: ¶0159.
2. Nikon USA, **AF-S DX Zoom-NIKKOR 18-70mm f/3.5-4.5G IF-ED** product specifications:
   <https://www.nikonusa.com/p/af-s-dx-zoom-nikkor-18-70mm-f35-45g-if-ed/2149/overview>.
3. Nikon Inc., **AF-S DX 18-70MM f/3.5-4.5G IF-ED Specifications**, January 2004:
   <https://www.nikonusa.com/fileuploads/pdfs/18_70mm.pdf>.
4. Nikon Imaging, **NIKKOR — The Thousand and One Nights No. 88**, noting the 18–70mm f/3.5–4.5G IF-ED among the DX
   lenses released in 2004 with the D70:
   <https://imaging.nikon.com/imaging/information/story/0088/index.html>.
5. Nikon Japan, **D70 archive**, listing the D70 18–70 mm lens kit with a March 19, 2004 release date:
   <https://nij.nikon.com/products/lineup/slr/d70/index.html_1>.
6. Official optical-glass catalog resources used for coordinate-class comparison: OHARA
   (<https://oharacorp.com/>), HOYA (<https://www.hoya-opticalworld.com/english/datadownload/index.html>), SCHOTT
   (<https://www.us.schott.com/shop/advanced-optics/en/search/>), HIKARI (<https://www.hikari-g.co.jp/optical_glass/>),
   CDGM (<https://www.cdgmgd.com/database/toWebDatabase.htm?url=database>), and SUMITA
   (<https://www.sumita-opt.co.jp/en/download/>).
