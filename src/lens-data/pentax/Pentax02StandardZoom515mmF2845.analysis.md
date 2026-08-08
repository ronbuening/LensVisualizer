# PENTAX-02 STANDARD ZOOM 5-15mm f/2.8-4.5

## Patent Reference and Design Identification

**Patent:** US 8,824,059 B2
**Application Number:** 13/482,178
**Priority:** May 30, 2011 (JP 2011-120495)
**Filed:** May 29, 2012
**Granted:** September 2, 2014
**Inventors:** Koji Kato; Masakazu Saori
**Assignee:** Pentax Ricoh Imaging Company, Ltd.
**Title:** *Zoom Lens System and Optical Instrument Using the Same*
**Embodiment analyzed:** Example 1 / Numerical Embodiment 1, Tables 1–4 and Figs. 1–6D

The prescription is the first numerical embodiment of US 8,824,059 B2. The production correlation used by the model is the PENTAX-02 STANDARD ZOOM 5–15 mm f/2.8–4.5. This correlation is an analytical attribution based on convergent optical and historical evidence; neither the patent nor the manufacturer explicitly identifies Example 1 as the production prescription.

The correlation rests on several independent points:

1. **Focal-length range.** Patent Example 1 gives 5.14 / 10.00 / 14.83 mm. Independent paraxial computation from the final modeled prescription gives 5.139325 / 10.000203 / 14.824615 mm. The production lens is specified as 5–15 mm. [1, Tables 1–2; 2]
2. **Maximum aperture.** The patent gives FNO. 2.8 / 3.7 / 4.6 across its three tabulated zoom states. The production lens is marketed as f/2.8–4.5. The analysis therefore keeps the exact design values separate from the rounded product designation. [1, Table 2; 2]
3. **Element and physical-group count.** The patent embodiment contains eight physical lens elements in seven air-separated physical groups. RICOH IMAGING specifies the production 02 STANDARD ZOOM as 8 elements in 7 groups. [1, pp. 9–11; 2]
4. **Image-field correspondence.** The patent uses image height $Y=4.65$ mm, or a 9.30 mm full image diameter. The data model assigns the prescription to the canonical 1/1.7-inch-type format because the Q7 uses a 1/1.7-inch sensor and RICOH documents the 02 STANDARD ZOOM as fully compatible with that larger Q-series format. This is a modeling inference rather than a patent declaration of sensor format. [1, Table 2; 3–4]
5. **Timing and system identity.** The patent claims Japanese priority on May 30, 2011. PENTAX announced the 02 STANDARD ZOOM as one of the original Q-mount lenses on June 23, 2011. The close timing, Q-system dimensions, and matching focal/aperture envelope support the fixed production correlation. [1, front page; 5]

No uniform scaling is applied. The modeled prescription is already at the production focal-length scale. Consequently all radii, thicknesses, image-plane distances, and aspherical coefficients retain their source scale; no $A_p/s^{p-1}$ coefficient transformation is required.

## Optical Architecture

The design is a three-functional-group **negative–positive–positive** zoom. In patent terminology the moving optical groups are G1, G2, and G3. These three functional zoom groups must not be confused with the manufacturer's seven physical air-separated groups. The prescription has eight physical lens elements; the data model contains nine material entries only because the hybrid L11 element is represented as a glass substrate plus its bonded compound-resin layer.

G1 is a negative front group composed of three negative menisci. Its independently computed group focal length is **−7.454264 mm**, matching the patent's −7.45 mm value. G2 is a single positive meniscus with a computed focal length of **+32.910129 mm** and is also the focusing group. G3 is a positive rear group with a computed focal length of **+14.479190 mm**. It contains two strongly positive aspherical elements surrounding a cemented positive/negative pair. These group focal lengths reproduce Patent Table 4 within the printed precision. [1, Table 4]

The zoom motion is unusual in that G1 and G2 are not monotonic over the three tabulated states. From wide to the intermediate position both move imageward; from intermediate to tele both reverse slightly toward the object. G3 moves monotonically toward the object. The diaphragm remains 1.000 mm in front of G3 and moves integrally with it, as specified in the patent's zoom-path description and Fig. 43. [1, pp. 5–6, Fig. 43]

The infinity-focus variable gaps make the architecture explicit:

| Gap | Wide | Intermediate | Tele | Function |
|---|---:|---:|---:|---|
| G1→G2, `D7` | 6.822 mm | 5.367 mm | 5.091 mm | Zoom; also changes during focus |
| G2→stop, `D9` | 22.449 mm | 6.704 mm | 1.333 mm | Zoom; also changes during focus |
| Stop→G3 | 1.000 mm | 1.000 mm | 1.000 mm | Fixed within the moving G3/stop unit |

The final modeled EFLs are 5.139325, 10.000203, and 14.824615 mm. The corresponding powered back focal distances measured from surface 17A are 11.072439, 17.053317, and 22.792783 mm. Under the project's architectural definitions, $BFD>EFL$ at all three states, so the normalized prescription is **retrofocus** throughout the tabulated zoom range. It is not telephoto: the active modeled track remains much longer than EFL at every state.

The patent includes an optical filter and cover glass behind G3. They are not lens elements in the LensVisualizer model. Their first-order effect is preserved by replacing the physical plate stack with a state-dependent air-equivalent distance from the final powered surface 17A to the same source-defined image plane. This normalization is described quantitatively in the verification summary below.

## Element-by-Element Analysis

### L11 (L11G + L11R) — Hybrid negative meniscus

**Glass substrate:** $n_d=1.77250$, $\nu_d=49.6$. Glass: `773496 class`. Standalone substrate $f=-51.669$ mm.
**L11 compound-resin layer:** $n_d=1.52972$, $\nu_d=42.7$. Glass: `Unmatched (compound resin, nd=1.52972, vd=42.7)`. Standalone layer $f=-109.304$ mm.
**Computed hybrid net:** $f=-35.194497$ mm.

L11 is one physical hybrid lens, not two physical lens elements. The patent describes a glass negative meniscus with a thin compound-resin aspherical layer bonded to its image-side surface. In the data model the two materials are separated because the glass-to-resin interface has finite refractive power and the outer resin surface is aspherical. [1, pp. 5–6]

The distinction between the two standalone material powers and the hybrid net power is important. The standalone values describe each material layer counterfactually in air; the **−35.194497 mm hybrid net** is the meaningful first-order power of the assembled physical L11 element.

The patent gives L11 a specific aberration-correction role. It states that the front-group asphere is shaped so that its negative refractive power weakens toward the periphery relative to its paraxial sphere, generating positive distortion that compensates the negative distortion produced by the negative front group. Surface 3A therefore contributes both to compact front-group power distribution and to distortion control. [1, p. 6]

### L12 — Negative meniscus

$n_d=1.80420$, $\nu_d=46.5$. Glass: `804465 class`. Standalone $f=-35.529080$ mm.

L12 is the second of the three negative menisci in G1. It is spherical and uses a high-index, moderate-dispersion class. Its role is best understood as part of the distributed negative power of G1 rather than as an isolated aberration corrector: the three negative menisci together produce a group focal length of −7.454264 mm while keeping the individual curvatures and element diameters within the compact front-group envelope shown in Figs. 1 and 4. [1, Figs. 1, 4]

No vendor-specific glass is asserted. The `804465 class` label records a defensible catalog coordinate family without claiming that the patent identifies a particular manufacturer or melt.

### L13 — Negative meniscus

$n_d=1.74930$, $\nu_d=51.1$. Glass: `Unmatched (nd=1.74930, vd=51.1)`. Standalone $f=-15.603799$ mm.

L13 is the rear member of G1 and the strongest negative element in that group by standalone focal length. Its rear surface faces the large variable gap `D7`, so L13 also forms the object-side boundary of the focusing-group conjugate space.

The coordinate pair does not support a confident current-catalog identity in the final data. It therefore remains explicitly `Unmatched` rather than being forced into a nearby named glass. This prevents a guessed Sellmeier model from being presented as source data.

### L21 / G2 focus group — Positive meniscus

$n_d=1.84666$, $\nu_d=23.8$. Glass: `847238 class`. $f=+32.910129$ mm.

L21 is both a single physical lens element and the complete G2 functional group. The patent repeatedly identifies G2 as the focusing group and specifies that focus from infinity toward finite distance is obtained by moving this positive meniscus **toward the image side**. [1, pp. 5–8]

Its positive meniscus form is also central to the patent's conditional design logic. For Example 1 the shape factor

$$
SF=\frac{R_{2F}-R_{2R}}{R_{2F}+R_{2R}}=-0.543452,
$$

lies inside both the broad patent interval $-1<SF<0$ and the preferred interval $-0.8<SF<-0.4$. The patent associates this meniscus form with controlling astigmatism and focus-dependent coma balance at the short-focal-length end. [1, pp. 7–8, Table 29]

The very low $\nu_d=23.8$ identifies a strongly dispersive material coordinate at the Abbe-number level. The final data deliberately stops at the generic `847238 class`; no vendor-specific spectral constants are assigned.

### L31 — Biconvex positive, two aspherical surfaces

$n_d=1.49283$, $\nu_d=82.7$. Glass: `Unmatched (nd=1.49283, vd=82.7)`. Standalone $f=+14.118181$ mm.

L31 begins G3 immediately behind the diaphragm. Both surfaces, 11A and 12A, are aspherical. It is a strong positive element and supplies a substantial fraction of the rear group's converging power.

The unusually high Abbe number is retained exactly from the patent, but the coordinate pair remains unmatched against the authoritative glass catalogs reviewed for the model. No ED, anomalous-partial-dispersion, or APO label is attached to this material entry because the patent does not supply line indices or $dP_{gF}$ and the data does not resolve L31 to a validated vendor Sellmeier entry.

The patent's broader G3 rationale is that three positive elements—L31, L32, and L34—are combined with a negative element, L33, to control spherical aberration and coma. L31's two aspheres provide additional shape freedom close to the stop, where ray heights are relatively compact. [1, pp. 6–7]

### L32 + L33 — Cemented positive/negative pair

**L32:** $n_d=1.49700$, $\nu_d=81.6$. Glass: `497816 class`. Counterfactual standalone-in-air $f=+15.396277$ mm.
**L33:** $n_d=1.83400$, $\nu_d=37.3$. Glass: `834373 class`. Counterfactual standalone-in-air $f=-6.885762$ mm.
**Computed cemented net:** $f=-14.784884$ mm.

L32 is biconvex positive and L33 is biconcave negative. They are cemented directly at surface 14; the interface passes from $n_d=1.49700$ to $n_d=1.83400$ without an air layer. The surface is therefore assigned to the downstream L33 medium in the data model, consistent with the project's cemented-interface convention.

The separate L32 and L33 focal lengths quoted above are explicitly **standalone-in-air diagnostics**. They do not describe the elements' actual in-situ behavior because the physical pair contains a direct glass-to-glass interface. The computed **−14.784884 mm cemented net** is the relevant first-order measure of the assembled doublet.

At the $n_d/\nu_d$ level the pair combines a high-Abbe positive element with a much lower-Abbe, higher-index negative element. That contrast is consistent with an achromatizing role, but the available data is insufficient to make a secondary-spectrum or apochromatic claim. The patent itself emphasizes the pair's spherical-aberration function: it states that the negative L33 contributes negative spherical aberration and that bonding L32 to L33 assists correction of higher-order spherical aberration. [1, p. 7]

One sentence in the patent's explanatory prose incorrectly refers to the bonded negative element as being in the **second** lens group while immediately identifying elements 32 and 33. The figures, Table 1, the detailed embodiment description, and all surrounding group definitions place L32/L33 in **G3**. The analysis follows the internally consistent figures and prescription table rather than the isolated prose error. [1, pp. 5, 7, Table 1]

### L34 — Biconvex positive, two aspherical surfaces

$n_d=1.51885$, $\nu_d=65.8$. Glass: `Unmatched (nd=1.51885, vd=65.8)`. Standalone $f=+15.621805$ mm.

L34 is the final powered element. Both surfaces, 16A and 17A, are aspherical. Its positive power completes G3 and brings the converging beam to the rear image space after the cemented negative-net L32/L33 pair.

The element remains `Unmatched` because the stored $n_d/\nu_d$ pair does not justify a specific current-catalog identity. As with L31, no spectral fields are synthesized from nearby catalog glasses.

Surface 17A is also the normalization boundary for the omitted optical filter and cover glass. Its authored rear distance is therefore not the patent's raw `d17`; it is the verified air-equivalent distance from the last powered surface to the source-defined image plane.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number for the active materials. It does not name glass manufacturers, give Sellmeier coefficients, or provide per-element $n_C$, $n_F$, $n_g$, or $dP_{gF}$. The final data therefore uses generic six-digit classes where the coordinate family is defensible and `Unmatched (...)` where a named or class-level identity would overstate the evidence.

Class-level annotations were rechecked against current manufacturer catalogs rather than treated as supplier identifications. The relevant coordinate-code families are independently represented by OHARA, HIKARI, HOYA, SCHOTT, and SUMITA: 773496 (for example S-LAH66N / J-LASF016), 804465 (N-LASF44 / TAF3D-family cross-reference), 847238 (S-TIH53 / FDS90 family), 497816 (S-FPL51 / FCD1), and 834373 (N-LASF40 / NBFD10 / K-LaSFn14). Small vendor-to-vendor coordinate differences are one reason the data retains generic `class` labels instead of selecting a supplier or melt. [6–10]

| Material entry | $n_d$ | $\nu_d$ | Final annotation | Evidence level |
|---|---:|---:|---|---|
| L11 glass substrate | 1.77250 | 49.6 | `773496 class` | Catalog class-level coordinate match |
| L11 resin layer | 1.52972 | 42.7 | `Unmatched (compound resin, nd=1.52972, vd=42.7)` | Patent identifies resin; no glass-catalog identity applicable |
| L12 | 1.80420 | 46.5 | `804465 class` | Catalog class-level coordinate match |
| L13 | 1.74930 | 51.1 | `Unmatched (nd=1.74930, vd=51.1)` | No defensible exact current-catalog match retained |
| L21 | 1.84666 | 23.8 | `847238 class` | Catalog class-level coordinate match |
| L31 | 1.49283 | 82.7 | `Unmatched (nd=1.49283, vd=82.7)` | No defensible exact current-catalog match retained |
| L32 | 1.49700 | 81.6 | `497816 class` | Catalog class-level coordinate match |
| L33 | 1.83400 | 37.3 | `834373 class` | Catalog class-level coordinate match |
| L34 | 1.51885 | 65.8 | `Unmatched (nd=1.51885, vd=65.8)` | No defensible exact current-catalog match retained |

The production lens literature states that the 02 STANDARD ZOOM uses four special optical-glass elements and describes extra-low-dispersion and low-refractive aspherical optics. [2, 5] That is a manufacturer statement about the production lens, not a glass assignment within the patent prescription. The analysis therefore does not map those marketing categories onto L11–L34 unless the patent coordinates and independent catalog evidence support the mapping.

The most conspicuous d-line dispersion contrast occurs in the L32/L33 cemented pair: $\nu_d=81.6$ against $37.3$. L31 also carries a very high $\nu_d=82.7$. These numbers indicate the design has substantial Abbe-number leverage in G3, but they do not by themselves establish anomalous partial dispersion or apochromatic correction. The final data intentionally contains no `nC`, `nF`, `ng`, `dPgF`, `apd`, or `apdNote` fields.

## Focus Mechanism

The patent defines an internal-focus mechanism in which **L21/G2 alone moves imageward** when focusing from infinity to a finite object. G1, G3, the diaphragm, and the image plane do not participate in the focus degree of freedom. [1, pp. 5–8]

The patent does not publish a finite-distance focus-spacing table. The close-focus states in the model are therefore labeled **`CONSTRAINED_RECONSTRUCTION`**, not source-published focus data. The reconstruction preserves the patent mechanism and uses the manufacturer's 0.3 m minimum focusing distance as the finite conjugate. The object distance is modeled from the image/sensor plane, consistent with photographic MFD convention; that reference-plane choice is an explicit modeling assumption because the product specification does not restate the measurement reference plane. [2]

At each zoom position G1, G3, the stop, and the image plane remain fixed. G2 moves toward the image by an amount $\Delta z$, `D7` increases by the same amount, and `D9` decreases by the same amount. Thus `D7 + D9` is conserved at each zoom state.

| Zoom state | G2 imageward travel | `D7` infinity → close | `D9` infinity → close | Computed $|m|$ at 0.3 m |
|---|---:|---:|---:|---:|
| Wide | 0.314864 mm | 6.822 → 7.136864 mm | 22.449 → 22.134136 mm | 0.020907× |
| Intermediate | 0.323537 mm | 5.367 → 5.690537 mm | 6.704 → 6.380463 mm | 0.038944× |
| Tele | 0.329880 mm | 5.091 → 5.420880 mm | 1.333 → 1.003120 mm | 0.057765× |

The telephoto-end reconstructed magnification of **0.057765×** is consistent with the manufacturer's rounded **approximately 0.06×** maximum reproduction specification. This agreement is a cross-check on the constrained model, not evidence that the exact close-focus spacings were published by PENTAX. [2–3]

PENTAX's 2011 launch material states that the high-performance Q lenses contain an AF motor in the lens barrel. [5] It does not identify the exact actuator architecture or publish the production group's internal travel, so no more specific drive-system claim is made here.

## Aspherical Surfaces

Five surfaces are aspherical: **3A** on the L11 resin layer, **11A and 12A** on L31, and **16A and 17A** on L34. The patent uses the same standard conic convention as the project:

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12},
$$

where $c=1/R$. All five tabulated conic constants are **$K=0$**, so the reference conic is spherical. There is no $\kappa$-to-$K$ conversion. Coefficients not listed by the patent are zero. [1, pp. 9–11, Table 3]

| Surface | $K$ | $A_4$ (mm$^{-3}$) | $A_6$ (mm$^{-5}$) | $A_8$ (mm$^{-7}$) |
|---|---:|---:|---:|---:|
| 3A | 0 | −8.4500E−05 | −5.2270E−07 | +1.6140E−10 |
| 11A | 0 | −6.9560E−05 | −1.3460E−06 | 0 |
| 12A | 0 | +3.6840E−04 | −7.8560E−06 | +2.1090E−07 |
| 16A | 0 | +5.5830E−04 | −1.3390E−05 | 0 |
| 17A | 0 | +6.5410E−04 | +7.9070E−06 | 0 |

$A_{10}$ and $A_{12}$ are zero for all five surfaces; the schema also stores $A_{14}=0$. Because the prescription is unscaled, the values above are the source-scale coefficients and no scaling transform has been applied.

The patent explicitly identifies L11 as a hybrid element whose aspherical layer is formed from a compound resin material. It does not specify the manufacturing process for the L31 or L34 aspheres beyond their aspherical surface form; these should not be relabeled as molded or polished without another source. [1, pp. 5–6]

The final semi-diameter model makes it possible to evaluate departures at explicit, validated surface heights. These are computation results at the authored clear apertures, not patent-published departures:

| Surface | Verified semi-diameter | Departure from $K=0$ base sphere |
|---|---:|---:|
| 3A | 8.80 mm | −0.743682 mm |
| 11A | 3.95 mm | −0.022046 mm |
| 12A | 3.45 mm | +0.043177 mm |
| 16A | 3.10 mm | +0.039677 mm |
| 17A | 3.15 mm | +0.072125 mm |

Surface 3A is therefore the most strongly departing asphere at its modeled clear rim. The other four aspheres work over substantially smaller semi-diameters in G3.

## Conditional Expressions

Example 1 satisfies all four design conditions stated by the patent. The values below were recomputed from the final data arrays rather than copied from Table 29.

| Condition | Patent expression | Computed from final model | Patent Table 29 | Result |
|---|---|---:|---:|---|
| (1) | $0.4<|d_{12w}/f_1|<1.0$ | 0.915181 | 0.92 | Pass |
| (2) | $d_{12w}<d_{23w}$ | 6.822 mm < 23.449 mm | 6.822 < 23.449 | Pass |
| (3) | $1.5<m_{2w}<2.3$ | 1.843344 | 1.84 | Pass |
| (4) | $-1<SF<0$; preferred $-0.8<SF<-0.4$ | −0.543452 | −0.54 | Pass; preferred range also satisfied |

For condition (2), $d_{23w}$ is the full G2-to-G3 separation. It equals the patent's `d9 = 22.449 mm` plus the fixed 1.000 mm stop-to-G3 spacing, giving 23.449 mm. Treating `d9` alone as $d_{23w}$ would mix two different source definitions. [1, Tables 1, 2, 29]


## Verification Summary

Independent first-order evaluation of the final normalized prescription gives the following state values:

| Quantity | Wide | Intermediate | Tele |
|---|---:|---:|---:|
| EFL | 5.139325 mm | 10.000203 mm | 14.824615 mm |
| Patent nominal $f$ | 5.14 mm | 10.00 mm | 14.83 mm |
| Powered BFL from 17A | 11.072439 mm | 17.053317 mm | 22.792783 mm |
| OP/CG-normalized rear distance | 11.073487 mm | 17.057487 mm | 22.798487 mm |
| Design FNO. | 2.8 | 3.7 | 4.6 |
| Inferred wide-open stop SD | 3.470750 mm | 3.366312 mm | 3.278723 mm |

The modeled EFLs reproduce the patent focal lengths within the source precision. Sequential height/reduced-angle tracing and an independently assembled ABCD matrix give the same first-order system matrices to numerical precision. The total active Petzval sum, evaluated surface by surface as $\phi/(nn')$, is **+0.005854182 mm$^{-1}$**.

The patent gives the stop **position** but not its physical diameter. The stop semi-diameters in the table are inferred from the final EFL, the entrance-pupil conjugate, and the patent's FNO. values. `STO.sd` stores the wide/base value; the zoom-dependent `nominalFno` array represents the changing wide-open aperture at the intermediate and tele states. These aperture sizes are modeling results, not patent measurements.

The patent likewise gives no clear-aperture semi-diameters. The authored semi-diameters are inferred from exact spherical/aspherical meridional tracing over the three infinity states and the three constrained 0.3 m focus states, with conservative clearance. The final geometry has a minimum non-stop representative-ray clearance of **0.354892 mm**, a maximum actual rim-slope angle of **37.15°**, a minimum modeled material edge thickness of **0.355665 mm**, and a worst shared-band cross-gap intrusion ratio of **0.812681**, below the project's 0.90 limit. These values validate the modeled clear apertures; they are not source-published dimensions.

The optical filter OP and cover glass CG in the patent are intentionally omitted from the ordinary lens model. Their plate effect is folded into the rear air spacing according to

$$
d_{17,\mathrm{model}}=d_{17}+\frac{0.500}{1.51633}+0.620+\frac{0.500}{1.51633}+0.530.
$$

This gives 11.073487 / 17.057487 / 22.798487 mm at wide/intermediate/tele. The corresponding powered BFL residuals are 0.001048 / 0.004170 / 0.005704 mm, consistent with the patent's rounded `fB = 0.53 mm` and printed spacing precision.

No dummy, flare-cutter, blocking, folded-path, or mechanical planes are retained. No scaling is applied. The image-format assignment and all semi-diameters are explicit modeling inferences; the focus close pairs are a constrained reconstruction; the OP/CG treatment is a reference-plane normalization; and the L32/L33 group-location discrepancy noted above is a patent prose error resolved by the prescription table and figures.

## Sources / References

1. **Kato, Koji; Saori, Masakazu.** *Zoom Lens System and Optical Instrument Using the Same.* US 8,824,059 B2, granted September 2, 2014. Numerical Embodiment 1, Tables 1–4, Figs. 1–6D; zoom path Fig. 43.
2. **RICOH IMAGING.** “02 STANDARD ZOOM / High-Performance Lenses / Q-mount Lenses.” Manufacturer product specification: 5–15 mm, F2.8–F4.5, 8 elements/7 groups, 0.3 m closest focus, approximately 0.06× maximum reproduction, five diaphragm blades. https://www.ricoh-imaging.co.jp/english/products/lens/q/high-performance/02-standard-zoom/
3. **RICOH IMAGING.** “PENTAX Q7 Interchangeable-Lens Specifications.” Manufacturer Q7 lens table: PENTAX Q metal mount, 02 STANDARD ZOOM 5–15 mm, F2.8–F4.5, 8 elements/7 groups, 0.3 m MFD through the zoom range, approximately 0.06× maximum magnification. https://www.ricoh-imaging.co.jp/english/products/q7/lenses/
4. **RICOH IMAGING.** “PENTAX Q7.” Press release, June 13, 2013. Identifies the Q7's 1/1.7-inch image sensor and 23–69 mm-equivalent field with the 02 STANDARD ZOOM. https://www.ricoh-imaging.co.jp/english/news/2013/20130613_3.html
5. **HOYA CORPORATION, PENTAX Imaging Systems Division.** “Five Q mount interchangeable lenses designed for exclusive use with the PENTAX Q digital camera.” Press release, June 23, 2011. Identifies the original 02 STANDARD ZOOM launch, Q metal mount, internal AF motor for the high-performance series, and 8-element/7-group construction. https://www.ricoh-imaging.co.jp/english/news/2011/201109.html
6. **OHARA INC.** “Glass Type / Products and Service.” Current optical-glass catalog table and code families, including S-LAH66N (773496), S-LAH65VS (804465), S-TIH53 (847238), and S-FPL51 (497816). https://www.ohara-inc.co.jp/en/product/01000/
7. **HIKARI GLASS CO., LTD.** “J-LASF / General Optical Glass.” Current catalog entry for J-LASF016, code 773496, $n_d=1.772500$, $\nu_d=49.62$. https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-lasf/
8. **HOYA CORPORATION, Optics Division.** “Glass Cross Reference Index” and glass-code guidance. Current cross-vendor code families including 497-816, 804-465, 847-238, and 834-373. https://www.hoya-opticalworld.com/english/products/crossreference.html
9. **SCHOTT.** “Lanthanum Dense Flint / Optical Glass.” Current entries include N-LASF44, code 804465, $n_d=1.80420$, $\nu_d=46.50$, and N-LASF40, code 834373, $n_d=1.83404$, $\nu_d=37.30$. https://www.schott.com/shop/advanced-optics/en/Lanthanum-Dense-Flint/c/glass-LASF
10. **SUMITA OPTICAL GLASS, Inc.** *Optical Glass Data Book*, current download edition. K-LaSFn14 is code 834373 with $n_d=1.83400$, $\nu_d=37.3$. https://www.sumita-opt.co.jp/download_files/ja/data/glassdatabook_ver14.01.00.pdf
