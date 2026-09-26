## Patent Reference and Design Identification

**Patent:** US 2018/0252903 A1\
**Priority:** JP 2015-109802, May 29, 2015\
**PCT filed:** May 27, 2016\
**Published:** September 6, 2018\
**Inventor:** Satoshi Yamaguchi\
**Applicant:** Nikon Corporation\
**Title:** Zoom Optical System, Optical Device and Method for Manufacturing the Zoom Optical System\
**Embodiment analyzed:** Example 1 (ZL1)

This prescription is a transcription and model of Example 1, not a manufacturer-confirmed production prescription. The
identification with the Nikon AF-S DX NIKKOR 16-80mm f/2.8-4E ED VR is supported by several independent points of
correspondence:

1. Example 1 has calculated focal lengths of 16.491536 mm at the wide state and 77.792159 mm at the telephoto state,
   compared with Nikon's marketed 16-80 mm range. The patent's published design focal lengths are 16.49 and 77.79 mm;
   no uniform scaling is applied.
2. The patent gives maximum-aperture FNO values of 2.72, 3.38, and 4.16 at the wide, intermediate, and telephoto states,
   while the production lens is marketed as f/2.8-4. The modeled `nominalFno` values retain the patent quantities rather
   than replacing them with rounded marketing labels.
3. The patent contains 17 physical lenses in 13 construction groups. Nikon specifies 17 elements in 13 groups for the
   production lens.
4. Three physical lenses in Example 1 carry aspherical surfaces: the resin-composite L21 and the glass-molded L41 and
   L53. Nikon specifies three aspherical elements.
5. Four patent lenses use conspicuously high-Abbe coordinates: L12 at $\nu_d=67.9$ and L34, L51, and L52 at
   $\nu_d=82.6$. Nikon specifies four ED elements. The patent does not label these four lenses "ED," so the numerical
   correspondence supports the identification but does not prove the production glass identities.
6. Example 1 focuses by translating G2 and stabilizes the image by transversely shifting G4A. Nikon specifies Internal
   Focusing and Vibration Reduction for the production lens.
7. After reference-plane normalization, the published close-focus states give an object-plane-to-image-plane distance of
   350.001 mm at all three zoom positions, agreeing with Nikon's 0.35 m minimum focus distance.
8. The Japanese priority date of May 29, 2015 precedes Nikon's July 2, 2015 announcement of the 16-80mm lens by about one
   month.

The patent/manufacturer correlation is therefore convergent rather than documentary: no Nikon source cited here states
that US 2018/0252903 A1 Example 1 is the production prescription. Patent facts and production specifications are kept
separate throughout this analysis. The patent publication and Nikon's product and launch material are listed under
Sources.

## Optical Architecture

Example 1 is a five-group positive-negative-positive-negative-positive zoom. Patent FIG. 1 and ¶¶0142-0144 show all five
lens groups moving toward the object during zooming from wide to telephoto, while the four inter-group distances change
in the alternating pattern expected from the published variable-spacing table: G1-G2 increases, G2-G3 decreases,
G3-G4 increases, and G4-G5 decreases. The aperture stop lies immediately object-side of G3 and moves with G3.

Independent first-order tracing of the final data gives moving-group focal lengths of +86.490920 mm (G1), -13.014705 mm
(G2), +24.851957 mm (G3), -35.111763 mm (G4), and +36.006824 mm (G5). Each group value is calculated from that group's
complete surface range with air on either side; it is distinct from both standalone element power and the full system's
in-situ behavior. G3 and
G5 move by the same 25.534 mm relative to the image plane from wide to telephoto, reproducing the kinematic relation stated
in patent ¶0144. Over the same endpoints, G1 moves 41.200 mm objectward, G2 7.798 mm, and G4 17.557 mm.

The whole-system infinity-focus first-order results are:

| State | Calculated EFL | Calculated BFD | Total length, first surface to image |
|---|---:|---:|---:|
| Wide | 16.491536 mm | 37.993874 mm | 130.371 mm |
| Intermediate | 34.999307 mm | 49.377794 mm | 146.181 mm |
| Telephoto | 77.792159 mm | 63.528107 mm | 171.571 mm |

The BFD is measured from the surface-32 vertex to the image plane. Patent ¶0147 explicitly defines this quantity as an
air-equivalent back focus. No sensor cover glass, filter, or other rear plate appears in Example 1, so the data model
retains that published air-equivalent spacing without adding an extra plate.

The design is not uniformly scaled: the model uses `s = 1`. The physical element count remains 17, but the data file has
18 material entries because the patented L21 is a single physical negative lens with a bonded aspherical resin layer over
a glass substrate. LensVisualizer must represent those two media separately to preserve the refractive-index transition at
surface 7. This modeling split does not change the physical element count.

The aperture-stop axial station is source-published, but its diameter is not. The model's wide-state stop semi-diameter of
7.75075 mm is calibrated from the published FNO target. The corresponding paraxial calibrated values are 7.750745,
7.698802, and 7.679827 mm at the three published zoom states. Agreement with the source FNO values is therefore a model
calibration, not an independent measurement or verification of the manufactured diaphragm diameter.

Surface semi-diameters are not published. The 2026-09-26 Fig. 1 review enlarges the front cemented pair (S1/S2/S3: 28.0/26.7/26.7 mm) and bonded L21 (S6A/S7/S8: 14.0/14.0/10.5 mm), preserving its stepped optical rim. Other apertures retain the initial ray-envelope estimates. All three infinity zoom stations reach the format corner, and the production renderer reports zero trimming over five zoom and three focus samples. The original 630-ray margin figures described the smaller initial apertures and are superseded here; these remain model dimensions.

The surface-by-surface Petzval sum from the final parsed model is 0.003023716174 mm⁻¹, corresponding to a reciprocal
radius of about 330.719 mm under the calculation's sign convention. This is a first-order field-curvature invariant of the
modeled prescription, not a measured image-surface curvature.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element values in air calculated from each model entry's two
bounding surfaces. They should not be substituted for the in-situ powers of the moving groups. Cemented and hybrid net
powers are called out separately where useful.

### L11 — Negative Meniscus, convex to object

**$n_d=1.84666$, $\nu_d=23.8$. Glass: 847238 class (supplier unresolved). $f=-131.233036$ mm.**

L11 is the front component of the cemented L11+L12 pair in G1. Its high-index, low-Abbe coordinate is paired directly
with the much higher-Abbe L12. The pair is only weakly positive as an isolated cemented assembly: its calculated net focal
length in air is +612.786341 mm. The patent does not isolate an aberration contribution for L11, so the safer description
is structural: L11 and L12 form the front cemented component of the positive first zoom group (¶0143).

### L12 — Biconvex Positive

**$n_d=1.59319$, $\nu_d=67.9$. Glass: 593679 class (supplier unresolved). $f=+107.357663$ mm.**

L12 is cemented to L11 and completes the first compound member of G1. The coordinate is consistent with a low-dispersion
crown class, but the patent does not name a glass supplier or label this element as ED. The data file therefore retains a
class designation instead of a vendor glass name, and it does not import candidate catalog line indices.

### L13 — Positive Meniscus

**$n_d=1.81600$, $\nu_d=46.6$. Glass: 816466 class (supplier unresolved). $f=+99.490395$ mm.**

L13 is the rear positive meniscus of G1. Together with the L11+L12 cemented member it produces the verified positive G1
focal length of +86.490920 mm. Its role in the model is therefore best described at group level rather than by assigning a
specific aberration correction that the patent does not attribute to it.

### L21r — Bonded Aspherical Resin Layer

**$n_d=1.56093$, $\nu_d=36.6$. Glass: Bonded aspherical resin layer (patent medium; no inorganic glass identity). $f=-404.776956$ mm as a standalone model entry.**

L21r is not a separate physical production lens. It is the thin resin layer that the patent places on the object-facing
surface of physical lens L21 to form the first asphere (¶0143). It is separated in the data only because the resin and the
1.81600-index glass substrate are distinct optical media. The standalone entry power is a bookkeeping quantity; the
physically meaningful hybrid L21 resin-plus-glass assembly has a calculated isolated focal length of -19.037516 mm.

### L21 — Negative Meniscus Glass Substrate

**$n_d=1.81600$, $\nu_d=46.6$. Glass: 816466 class (supplier unresolved). $f=-20.004218$ mm for the substrate alone.**

The glass substrate and L21r together form the patented L21 negative meniscus. This hybrid is the first physical lens of
the negative second group. Its front asphere is a composite resin surface rather than a glass-molded surface; the patent
explicitly distinguishes the resin-layer construction from the glass-molded L41 and L53 aspheres.

### L22 — Biconcave Negative

**$n_d=1.81600$, $\nu_d=46.6$. Glass: 816466 class (supplier unresolved). $f=-19.821077$ mm.**

L22 is a strong negative member of G2. It is air-spaced from the L21 hybrid and followed by the positive L23. The complete
G2 surface set has a calculated focal length of -13.014705 mm. That value is important because it exposes the one material
numerical discrepancy in the patent table: Table 1 prints -13.10 mm for G2, while the surface prescription and Table 4
condition (8) support approximately -13.01 mm.

### L23 — Biconvex Positive

**$n_d=1.84666$, $\nu_d=23.8$. Glass: 847238 class (supplier unresolved). $f=+19.883388$ mm.**

L23 is the positive member embedded within the otherwise negative G2 sequence. Its low-Abbe coordinate contrasts with the
sign of its optical power, illustrating why power sign alone is not a reliable guide to chromatic function. The analysis
does not assign a specific aberration task to L23 beyond its verified participation in the net negative focusing group.

### L24 — Negative Meniscus, concave to object

**$n_d=1.88300$, $\nu_d=40.7$. Glass: 883407/883408 class (supplier unresolved). $f=-42.822362$ mm.**

L24 closes G2 on the image side. The group translates toward the object for close focusing while G1, G3, G4, and G5 keep
their focus-state axial positions at a given zoom setting. The element's high index reduces the curvature required for a
given surface power, but no supplier identity or production melt is established by the patent coordinate alone.

### L31 — Biconvex Positive

**$n_d=1.54814$, $\nu_d=45.8$. Glass: 548458 class (supplier unresolved). $f=+48.130130$ mm.**

L31 is the first powered lens after the aperture stop in G3. The stop is adjacent to and object-side of G3 in the source,
and it moves integrally with this group during zooming (¶0144). Catalog research found coordinate-compatible public
glasses, but the final data deliberately retains only the six-digit class because supplier identity is not established.

### L32 — Biconvex Positive

**$n_d=1.51742$, $\nu_d=52.2$. Glass: 517522 class (supplier unresolved). $f=+32.307433$ mm.**

L32 is cemented to L33. The isolated L32+L33 cemented pair has a very long net focal length of +1465.814286 mm, so the pair
should not be read as a simple high-power positive or negative component from the standalone powers alone. Its behavior in
G3 depends on the surrounding L31 and L34 and the actual in-situ separations.

### L33 — Negative Meniscus, concave to object

**$n_d=1.90200$, $\nu_d=25.3$. Glass: 902253 class (supplier unresolved). $f=-31.940680$ mm.**

L33 is the negative component of the L32+L33 cemented pair. Its very high index and low Abbe number form a strong material
contrast with L32. This is a catalog-class description only: the patent publishes $n_d$ and $\nu_d$, not a trade glass
name, melt, or supplier.

### L34 — Biconvex Positive

**$n_d=1.49782$, $\nu_d=82.6$. Glass: 498826 class (supplier unresolved). $f=+48.057591$ mm.**

L34 is the rear positive element of G3. Its very high Abbe number is one of the four patent coordinates that numerically
correspond to Nikon's published count of four ED elements. The correlation is useful for production identification, but
without a patent ED label or a production glass identification it remains an inference rather than a material claim.

### L41 — Biconcave Negative, object-side glass-molded asphere

**$n_d=1.79050$, $\nu_d=45.0$. Glass: Unmatched (nd=1.79050, vd=45.0; glass-molded asphere). $f=-23.077592$ mm.**

L41 is the negative component of the cemented G4A pair and carries aspherical surface 23A. The patent identifies L41 as a
glass-molded aspherical lens and identifies G4A as the transverse vibration-isolation unit (¶¶0143, 0146). No exact match
for the 1.79050/45.0 coordinate was established in the checked public OHARA, HOYA, SCHOTT, HIKARI, CDGM, or SUMITA
coverage, so the final data leaves it explicitly unmatched rather than forcing a catalog identity.

### L42 — Positive Meniscus

**$n_d=1.90200$, $\nu_d=25.3$. Glass: 902253 class (supplier unresolved). $f=+36.085407$ mm.**

L42 is cemented to L41. The isolated L41+L42 cemented pair has a calculated focal length of -62.937881 mm, consistent with
its placement in the negative G4A subgroup. During VR operation the pair moves transversely as a unit; this transverse
motion is distinct from the axial zoom motion of G4 as a whole.

### L43 — Negative Meniscus, concave to object

**$n_d=1.81600$, $\nu_d=46.6$. Glass: 816466 class (supplier unresolved). $f=-82.216286$ mm.**

L43 forms the negative G4B subgroup behind G4A. G4A and G4B together give the complete fourth group a calculated focal
length of -35.111763 mm. Patent ¶0143 explicitly divides G4 into the two negative subgroups, while only G4A is assigned the
vibration-isolation displacement.

### L51 — Plano-Convex Positive

**$n_d=1.49782$, $\nu_d=82.6$. Glass: 498826 class (supplier unresolved). $f=+42.177293$ mm.**

L51 is the front positive member of G5 and has a plane object-side surface. Its $\nu_d=82.6$ coordinate repeats the same
high-Abbe class used by L34 and L52. As with those elements, this supports a low-dispersion interpretation but does not
identify the production melt or independently establish Nikon's ED designation for this specific physical lens.

### L52 — Biconvex Positive

**$n_d=1.49782$, $\nu_d=82.6$. Glass: 498826 class (supplier unresolved). $f=+32.160911$ mm.**

L52 is cemented to the negative L53. The isolated L52+L53 cemented pair has a net focal length of +248.142761 mm. Together
with L51 it forms the positive fifth group, whose calculated group focal length is +36.006824 mm.

### L53 — Negative Meniscus, image-side glass-molded asphere

**$n_d=1.88202$, $\nu_d=37.2$. Glass: 882372 class (supplier unresolved). $f=-36.327672$ mm.**

L53 is the rear negative component of the L52+L53 cemented pair and carries aspherical surface 32A on its image side. The
patent identifies L53 as glass-molded. A current HOYA molded-glass family is coordinate-compatible with the published
1.88202/37.2 pair, but the patent does not establish HOYA as the supplier; the final data therefore remains at the 882372
class level.

## Glass Identification and Selection


The integration audit uses these runtime spectral curves: L11, L23: `J-SF03`; L12: `J-PSKH1`; L13, L21, L22, L43: `J-LASF09A`; L21r, L41: `Unmatched`; L24: `J-LASF08A`; L31: `LLF1`; L32: `J-KF6`; L33, L42: `J-LASFH24`; L34, L51, L52: `J-FKH1`; L53: `M-TAFD307`. The coordinate/class descriptions below retain the source-identification context; catalog names are qualified proxies, not evidence of production suppliers.

The patent specifies d-line refractive indices and Abbe numbers rather than glass trade names. The final data consequently
uses named spectral proxies or an explicit unmatched label. Catalog matches are evidence for coordinate compatibility, not
proof of Nikon's production supplier or melt.

| Source-coordinate classification | $n_d$ | $\nu_d$ | Physical lenses / model entries | Catalog-evidence disposition |
|---|---:|---:|---|---|
| 847238 class | 1.84666 | 23.8 | L11, L23 | Coordinate-exact or near-exact candidates exist across multiple vendors; supplier unresolved |
| 593679 class | 1.59319 | 67.9 | L12 | Exact coordinate candidate exists; supplier unresolved |
| 816466 class | 1.81600 | 46.6 | L13, L21 substrate, L22, L43 | Multiple coordinate-compatible candidates; supplier unresolved |
| 883407/883408 class | 1.88300 | 40.7 | L24 | Several close public catalog candidates; supplier unresolved |
| 548458 class | 1.54814 | 45.8 | L31 | Coordinate-compatible CDGM/SCHOTT-class evidence; supplier unresolved |
| 517522 class | 1.51742 | 52.2 | L32 | Exact or near-exact candidates; supplier unresolved |
| 902253 class | 1.90200 | 25.3 | L33, L42 | Coordinate-compatible HIKARI-class evidence; supplier unresolved |
| 498826 class | 1.49782 | 82.6 | L34, L51, L52 | Exact/near-exact high-Abbe candidate evidence; supplier unresolved |
| Unmatched | 1.79050 | 45.0 | L41 | No exact row established in the checked public catalogs |
| 882372 class | 1.88202 | 37.2 | L53 | Coordinate-compatible molded-glass family exists; supplier unresolved |
| Bonded resin medium | 1.56093 | 36.6 | L21r | Patent resin layer; inorganic-glass catalog matching not applicable |

No `nC`, `nF`, `ng`, or `dPgF` values are authored in the final data. The dossier's catalog evidence records some candidate
line-index data, but those values belong to candidate catalog glasses rather than to a patent-identified or production-
identified melt. They are therefore not promoted into the model. The analysis consequently makes no apochromatic or
anomalous-partial-dispersion claim.

The material strategy visible directly from the patent is nevertheless broad: high-index, low-Abbe media appear alongside
moderate- and high-Abbe positive media across multiple groups, and the three 1.49782/82.6 lenses plus L12 provide the four
high-Abbe coordinates that support the product correlation. Beyond those source-visible contrasts, a more specific account
of secondary-spectrum correction would require verified spectral-line data or a defensible resolved glass identity.

## Focus Mechanism

Focus status is **PUBLISHED**. Patent ¶0145 and Table 3 specify that G2 moves toward the object when focusing from infinity
to the short-distance state. No close-focus reconstruction is used.

| Zoom state | D5 infinity | D5 short | D14 infinity | D14 short | G2 objectward shift | Published $\beta$ |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 2.100 mm | 0.885 mm | 18.846 mm | 20.061 mm | 1.215 mm | -0.0648 |
| Intermediate | 17.730 mm | 15.776 mm | 7.642 mm | 9.596 mm | 1.954 mm | -0.1260 |
| Telephoto | 35.502 mm | 31.579 mm | 1.110 mm | 5.033 mm | 3.923 mm | -0.2249 |

For each zoom state, `D5 + D14` is exactly conserved between infinity and close focus in the published table: 20.946,
25.372, and 36.612 mm respectively. This independently supports the single translating-G2 interpretation. The other
variable spacings D22, D27, and BF are unchanged with focus at a given zoom setting.

Finite-conjugate paraxial recomputation from the final data gives magnifications of -0.0647932, -0.1260612, and
-0.2248868, reproducing the patent's published values to the source precision. Inverse solving gives first-surface-to-
object distances of 219.731, 203.796, and 178.442 mm, close to the rounded patent D0 values of 219.63, 203.82, and
178.43 mm.

The product minimum-focus comparison requires a reference-plane conversion. Patent D0 is measured from the first surface
to the object, whereas Nikon's focusing distance is referenced to the camera image plane. Adding the published total
length gives 350.001 mm at all three short-distance states. That is the quantity compared with Nikon's 0.35 m production
specification; D0 by itself is not compared directly with the marketed MFD.

## Aspherical Surfaces

Example 1 has three aspherical surfaces: patent surface 6 on the resin layer of physical L21, surface 23 on L41, and
surface 32 on L53. In the data file these are labeled 6A, 23A, and 32A.

Patent ¶¶0140-0141 uses

$$
S(y)=\frac{y^2/r}{1+\sqrt{1-K_{\mathrm{pat}}y^2/r^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}+A_{12}y^{12},
$$

with $A_2=0$. LensVisualizer uses the standard denominator containing $1-(1+K)h^2/R^2$, so the conic conversion is
$K_{\mathrm{LV}}=K_{\mathrm{pat}}-1$. All three patent values are $K_{\mathrm{pat}}=1$, therefore all three authored
conic constants are $K=0$. This is a convention conversion, not a correction to the source. No linear scaling is applied,
so the asphere coefficients are retained at their published magnitudes.

| Surface | Physical lens | $K$ in data | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ | $A_{12}$ |
|---|---|---:|---:|---:|---:|---:|---:|
| 6A | L21 resin layer | 0 | 1.91866e-05 | -3.07743e-08 | -1.44905e-10 | 1.15106e-12 | -1.98690e-15 |
| 23A | L41 | 0 | 3.75789e-06 | -1.80254e-08 | 0 | 0 | 0 |
| 32A | L53 | 0 | 7.46360e-06 | 8.05331e-09 | -4.65179e-11 | 2.16314e-13 | 0 |

The data file also contains schema-required `A14: 0` entries; A14 is not a nonzero published coefficient. The patent
identifies the L21 asphere as a bonded resin composite and L41/L53 as glass-molded aspherical lenses (¶0143).

Asphere departures are quoted only at the verified modeled semi-diameters, not as patent clear apertures. Relative to the
spherical/conic base used by the LensVisualizer equation, the polynomial departures at the model rim are approximately
0.511811 mm at 6A with `sd = 14.0 mm`, 0.017808 mm at 23A with `sd = 9.6 mm`, and 0.191494 mm at 32A with `sd = 12.3 mm`.
Because these semi-diameters are inferred model apertures, the departures are model-geometry results rather than source
manufacturing dimensions.

## Chromatic Correction Strategy

The patent's chromatic strategy can be discussed only to the level supported by its d-line indices and Abbe numbers. The
most conspicuous low-dispersion coordinates are L12 at 1.59319/67.9 and L34, L51, and L52 at 1.49782/82.6. These four
physical lenses match Nikon's published count of four ED elements numerically, but the patent does not explicitly map an
"ED" label to them. Conversely, several elements use high-index, low-Abbe coordinates such as 1.84666/23.8 and
1.90200/25.3.

That distribution provides the designer with dispersion contrast across the five moving groups, but the available data
do not justify a stronger claim about secondary-spectrum or apochromatic correction. The authored model intentionally
retains only $n_d/\nu_d$ for these supplier-unresolved classes. Any wavelength-specific conclusion beyond ordinary Abbe
behavior would require direct patent line indices, `dPgF`, or a validated production-glass/Sellmeier identification.

## Conditional Expressions

The patent gives 17 conditions for Example 1 and states in ¶0152 that the example satisfies all of them. The values below
were independently reevaluated. Conditions 2 and 6 use the source FNO values, and conditions 16 and 17 use the published
half-field values; because the patent does not publish physical stop diameter or clear semi-diameters, those four are
source-condition checks rather than independent exact pupil/field-geometry measurements.

| No. | Condition | Recomputed/source value | Table 4 | Result |
|---:|---|---:|---:|---|
| 1 | $0.80 < (-f_4)/f_{5w} < 2.50$ | 0.975142 | 0.975 | Pass |
| 2 | $FN_w < 3.50$ | 2.72 | 2.722 | Pass |
| 3 | $0.30 < N_{5n}-N_{5p}$ | 0.384200 | 0.384 | Pass |
| 4 | $1.85 < N_{5n}$ | 1.88202 | 1.882 | Pass |
| 5 | $3.50 < f_t/f_w$ | 4.717096 | 4.717 | Pass |
| 6 | $FN_t < 4.50$ | 4.16 | 4.160 | Pass |
| 7 | $2.50 < f_1/f_3 < 4.20$ | 3.480246 | 3.480 | Pass |
| 8 | $0.25 < f_2/f_4 < 0.55$ | 0.370665 | 0.371 | Pass |
| 9 | $1.85 < N_{2\max}$ | 1.88300 | 1.883 | Pass |
| 10 | $0.40 < f_w/f_3 < 1.00$ | 0.663591 | 0.664 | Pass |
| 11 | $0.30 < f_w/(-f_4) < 0.80$ | 0.469687 | 0.470 | Pass |
| 12 | $2.00 < f_t/f_3 < 5.00$ | 3.130223 | 3.130 | Pass |
| 13 | $1.50 < f_t/(-f_4) < 4.50$ | 2.215558 | 2.216 | Pass |
| 14 | $0.30 < N_{3n}-N_{3p}$ | 0.380873 | 0.381 | Pass |
| 15 | $1.85 < N_{3n}$ | 1.90200 | 1.902 | Pass |
| 16 | $25.0^\circ < \omega_w < 60.0^\circ$ | 43.244° | 43.244° | Pass |
| 17 | $3.0^\circ < \omega_t < 20.0^\circ$ | 10.411° | 10.411° | Pass |

Condition 8 also helps resolve the patent's one material numerical discrepancy. Table 1 prints the G2 focal length as
-13.10 mm, but the surface prescription gives -13.014705 mm. Combining that calculated G2 value with the independently
calculated G4 focal length of -35.111763 mm gives 0.370665, which rounds to Table 4's 0.371. Using the printed -13.10 mm
would not reproduce Table 4 as closely. The raw -13.10 mm remains preserved as source text; the implemented model follows
the actual surface prescription rather than silently editing the patent table.

## Image Stabilization

Patent ¶0146 assigns vibration isolation to G4A, the cemented L41+L42 subgroup. The subgroup moves transversely to the
optical axis; G4B/L43 does not belong to the shift unit. The patent defines the required group displacement for a roll blur
angle $\theta$ as $(f\tan\theta)/K$, where $K$ is its vibration-proof coefficient.

For the patent's 0.50° example, independent calculation gives shifts of -0.221394 mm at wide, -0.386633 mm at the
intermediate state, and -0.685720 mm at telephoto. The patent rounds these to -0.22, -0.39, and -0.68 mm respectively.
These are optical-unit displacements from the patent model, not claims about the production VR actuator's total mechanical
travel.

## Verification Summary

The final data file was reloaded through a strict literal TypeScript parser and recomputed before this analysis was
written. Sequential height/reduced-angle tracing and an independently assembled ABCD matrix reproduce the patent's W/M/T
EFL, BFD, and total length to source precision. The parsed prescription also reproduces the published close-focus
magnifications and the G2-only focus constraint, the group-power conditions, the VR shift equation, and the surface-by-
surface Petzval sum.

The modeled geometry passes the documented portable checks for exact sampled meridional containment, element edge thickness,
actual rim slope, conic-domain applicability, and shared-gap intrusion. These checks establish the internal consistency of
the authored prescription and inferred apertures; they do not substitute for a production renderer's separate trim or
presentation diagnostics.

No source plane is silently removed at the rear: patent BF is already defined as an air-equivalent distance from surface
32 to the image plane. No scale factor is applied. The main modeling inferences are the physical stop semi-diameter and
all refracting-surface semi-diameters; both are disclosed above and remain distinct from patent-published dimensions.

## Sources

1. Satoshi Yamaguchi, **US 2018/0252903 A1**, *Zoom Optical System, Optical Device and Method for Manufacturing the Zoom
   Optical System*, Nikon Corporation, published September 6, 2018. Example 1: FIG. 1; ¶¶0140-0153; Tables 1-4; PDF
   pp. 33-36. Patent publication: https://patents.google.com/patent/US20180252903A1/en
2. Nikon USA, **AF-S DX NIKKOR 16-80mm f/2.8-4E ED VR — Tech Specs**, retrieved September 18, 2026:
   https://www.nikonusa.com/p/af-s-dx-nikkor-16-80mm-f28-4e-ed-vr/20055/overview
3. Nikon USA, **An Everyday Lens That's Anything But Ordinary: The AF-S DX NIKKOR 16-80mm f/2.8-4E ED VR Lens**, press
   release, July 2, 2015:
   https://www.nikonusa.com/press-room/16-80mm-an-everyday-lens
4. Glass-class comparison evidence was checked against current/public catalog material from HIKARI, OHARA, SCHOTT, HOYA,
   CDGM, and SUMITA as recorded in the companion dossier. Catalog matches are used only as class evidence unless the
   data file explicitly says otherwise.
