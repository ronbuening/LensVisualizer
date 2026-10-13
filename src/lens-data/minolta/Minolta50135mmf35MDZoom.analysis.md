## Patent Reference and Design Identification

**Patent:** US 4,192,577<br>
**Priority:** February 4, 1977 (Japan 52-12007)<br>
**Filed:** January 31, 1978<br>
**Granted:** March 11, 1980<br>
**Inventor:** Shuji Ogino<br>
**Assignee:** Minolta Camera Co., Ltd. (printed as Minolta Camera Kabushiki Kaisha)<br>
**Title:** *Zoom Lens System*<br>
**Embodiment analyzed:** Example 1

Example 1 is the numerical prescription used for this model. The patent gives the design as
$f = 131.5\text{–}51.5$ mm, FNo. 3.6, and full field $2\omega = 18^\circ\text{–}47^\circ$, with 12 glass
elements in 10 air-separated groups. The first three embodiments are stated to be intended for 35 mm single-lens-reflex
cameras. [1, Table 1; specification]

The production identification is a strong correlation rather than a manufacturer-confirmed patent attribution. Minolta's
MD Zoom 50-135mm f/3.5 literature gives 12 elements in 10 groups, 47°-18° angle of view, 1.5 m minimum focus, and a 55 mm
filter. Those specifications converge with Example 1's 12/10 construction, 51.5-131.5 mm design range, FNo. 3.6, and
47°-18° field. The marketed 50-135 mm f/3.5 values are therefore kept separate from the patent/model quantities rather than
being substituted for them. [2; 3]

The implemented model preserves the patent prescription at unit scale. It adds only the aperture-stop plane required by
the LensVisualizer data model and a derived rear image-space distance; no optical element, rear plate, asphere, filter, or
dummy plane is added.

## Optical Architecture

The prescription is a four-part positive-negative-negative-positive zoom architecture. The patent groups the front three
units as the variator system $V = V_1 + V_2 + V_3$ and the rear optics as relay $R$, with the relay divided into $R_1$ and
$R_2$. [1, Fig. 1; specification]

- **V1** is the positive front/focusing group, containing the G1-G2 cemented pair and G3. Its standalone paraxial focal
  length is +97.319 mm.
- **V2** is the negative variator, G4-G6, with standalone focal length -39.218 mm.
- **V3** is the single negative compensator G7, with standalone focal length -112.694 mm.
- **R** is the positive relay G8-G12, with standalone focal length +36.861 mm. Its front subgroup R1 is +40.608 mm, while
  the G11-G12 rear subgroup R2 is nearly afocal as a pair at +939.860 mm.

These are standalone group powers calculated with each group isolated in air. They describe the sign and approximate
strength of each unit; they are not in-situ contributions to the complete zoom lens.

The zoom motion is highly asymmetric. From the patent's long endpoint to the short endpoint, V2 moves 33.60 mm toward
object space and V3 moves 7.08 mm toward object space. The relay changes axial station by only 0.01 mm, which is consistent
with the precision of the printed spacing table and is treated as rounding rather than deliberate relay travel. In the
implemented wide-to-tele direction those motions reverse: V2 moves 33.60 mm toward image space and V3 moves 7.08 mm toward
image space.

The three source-variable gaps are D5, D11, and D13. The source lists the long and short endpoints in descending focal-length
order; the data file reverses only the control-point order to `[51.5, 131.5]` mm so that the zoom axis is monotonically
increasing. Each spacing remains attached to its original optical state.

The aperture stop is shown in Fig. 1 between G7 and G8, but the patent does not dimension its exact axial position or
diameter. The model places the stop 0.50 mm in front of the G8 front surface, on the relay side of the D13 gap. Its
12.262 mm semi-diameter is calibrated to the published FNo. 3.6; it is not a recovered production iris dimension.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element focal lengths in air, computed from the final data revision. For the
two cemented pairs, the separately quoted pair focal length is the net power of the cemented assembly in air. Neither
quantity should be read as the element's or pair's in-situ contribution inside the complete zoom system.

### D1 — G1 + G2 Cemented Front Pair

**G1:** nd = 1.8052, νd = 25.4. Glass: 805254 dense-flint coordinate class; SF6/FD60 family is coordinate-compatible but
the supplier is unproven. Standalone f = -125.076 mm.<br>
**G2:** nd = 1.6700, νd = 57.1. Glass: 670571 lanthanum-crown coordinate class; S-LAL52 is the catalog equivalent, supplier/melt unproven. Standalone f = +98.030 mm.

G1 is a negative meniscus cemented directly to the positive meniscus G2. The pair's standalone net focal length is
+502.751 mm, so the two stronger opposite-sign component powers largely cancel when considered as an isolated cemented
assembly. In the complete front group, that weak positive cemented pair is followed by G3 and participates in the positive
V1 unit.

The patent explicitly constrains the refractive-index and Abbe-number relationships of the three front-group glasses.
Example 1 satisfies those conditions, but the rounded nd/νd values do not establish a particular glass manufacturer. [1,
specification and claims]

### G3 — Rear Positive Element of V1

**nd = 1.6783, νd = 49.0. Glass: Unmatched (678490 lanthanum flint; no public catalog glass at this coordinate). Standalone f = +116.975 mm.**

G3 is a positive meniscus separated from the cemented front pair by 0.1 mm. Together with D1 it completes the fixed
positive V1 group, which is stationary during zooming. The patent calls V1 only the positive front lens group; it neither
describes a focusing mechanism nor publishes finite-focus spacings for Example 1.

### G4 — Front Negative Element of V2

**nd = 1.6968, νd = 55.5. Glass: 697555 lanthanum-crown coordinate class; J-LAK14 (1.69680 / 55.52) is the catalog
equivalent, supplier/melt unproven. Standalone f = -31.547 mm.**

G4 is a biconcave negative element and the strongest individual negative element in V2. Its very weak front curvature and
strong rear curvature place most of its standalone power at the second surface. The statement is geometric and paraxial;
no specific higher-order aberration assignment is inferred from the element's power sign or glass class alone.

### G5 — Second Negative Element of V2

**nd = 1.6583, νd = 58.5. Glass: Unmatched (658585 lanthanum crown; nearest LAK11 class at Δνd −1.2). Standalone f = -87.007 mm.**

G5 is a second biconcave negative singlet. It is separated from G4 by 4.6 mm and from G6 by only 0.5 mm. Together G4 and
G5 establish the negative character of the moving V2 variator before the positive rear singlet G6.

### G6 — Positive Rear Element of V2

**nd = 1.8052, νd = 25.4. Glass: 805254 dense-flint coordinate class; SF6/FD60-family coordinates are compatible, but the
supplier is unproven. Standalone f = +59.200 mm.**

G6 is a positive meniscus with the same rounded nd/νd coordinate as G1. Its positive power partly offsets the two preceding
negative singlets, while the complete V2 unit remains negative at -39.218 mm standalone focal length. The patent's
conditions constrain V2's focal length and a curvature combination; Example 1 satisfies both conditions.

### G7 — Negative Compensator V3

**nd = 1.6700, νd = 57.1. Glass: 670571 lanthanum-crown coordinate class; S-LAL52 is the catalog equivalent, supplier/melt unproven. Standalone f = -112.694 mm.**

G7 is a single negative meniscus and constitutes V3 by itself. Its motion is much smaller than V2's: 7.08 mm from the long
to the short endpoint, against 33.60 mm for V2. That different travel is the compensating motion that allows the rear relay
to remain essentially fixed while focal length changes.

The aperture stop follows G7 in the D13 air space. Its modeled location and radius are inference/calibration choices rather
than source-published dimensions.

### G8 — Front Positive Element of Relay R1

**nd = 1.6214, νd = 61.3. Glass: Unmatched (621613 dense crown; nearest SK16 class at Δνd −1.0). Standalone f = +55.209 mm.**

G8 is a biconvex positive singlet immediately behind the inferred aperture stop. It begins relay subgroup R1. The stop is
held 0.50 mm in front of this surface in the model, consistent with the relay-side iris placement shown in the patent
figure, but the drawing is not dimensioned. [1, Fig. 1]

### D2 — G9 + G10 Cemented Relay Pair

**G9:** nd = 1.5168, νd = 64.0. Glass: 517640 crown coordinate class; N-BK7 is a close catalog coordinate, but supplier/melt is unproven. Standalone f = +40.421 mm.<br>
**G10:** nd = 1.8074, νd = 31.6. Glass: Unmatched (807316 lanthanum dense flint; coordinate of discontinued Schott LaSF8). Standalone f = -49.809 mm.

G9 is biconvex and G10 biconcave. Their isolated cemented-pair focal length is +168.789 mm: again, the net pair is much
weaker than either component because the positive and negative powers substantially oppose one another. With G8, the pair
forms relay subgroup R1, whose standalone focal length is +40.608 mm.

### G11 — Positive Front Element of Relay R2

**nd = 1.6214, νd = 61.3. Glass: Unmatched (621613 dense crown; nearest SK16 class at Δνd −1.0). Standalone f = +67.641 mm.**

G11 is a biconvex positive element separated from R1 by the patent's conspicuous 27.5 mm relay air space. It begins R2.
The 27.5 mm separation is one of the quantities explicitly constrained by the patent's relay conditions.

### G12 — Rear Negative Element of Relay R2

**nd = 1.6700, νd = 47.2. Glass: 670472 barium-flint coordinate class; BAF10 (1.67003 / 47.20) is the catalog equivalent,
supplier/melt unproven. Standalone f = -65.923 mm.**

G12 is the final negative meniscus. Its standalone negative power nearly cancels G11's positive power when the two-element
R2 subgroup is considered in isolation, giving the very long +939.860 mm net subgroup focal length. The complete relay is
not weak, however, because R1 supplies substantial positive power and the long R1-R2 separation changes the combined
first-order behavior.

## Glass Identification and Selection

The patent publishes rounded d-line refractive index and Abbe number only. It does not identify glass suppliers and gives
no nC, nF, ng, PgF, or dPgF data for Example 1. Accordingly, the data file uses coordinate classes or six-digit codes rather
than asserting unsupported melts. No apochromatic or anomalous-partial-dispersion performance claim is made from these
nd/νd pairs alone.

| Coordinate class | nd | νd | Elements | Defensible identification |
|---|---:|---:|---|---|
| 805254 | 1.8052 | 25.4 | G1, G6 | Dense-flint class; SCHOTT SF6 and HOYA FD60 are close coordinate matches, supplier unproven |
| 670571 | 1.6700 | 57.1 | G2, G7 | Lanthanum-crown coordinate class; S-LAL52 (1.67000 / 57.33) is the catalog equivalent, supplier/melt unproven |
| 678490 | 1.6783 | 49.0 | G3 | Unmatched lanthanum flint; no public catalog glass at this coordinate |
| 697555 | 1.6968 | 55.5 | G4 | Lanthanum-crown class; J-LAK14 (1.69680 / 55.52) is the catalog equivalent, supplier/melt unproven |
| 658585 | 1.6583 | 58.5 | G5 | Unmatched lanthanum crown; nearest LAK11 class (1.65830 / 57.3) differs by 1.2 in νd |
| 621613 | 1.6214 | 61.3 | G8, G11 | Crown coordinate class; not an exact N-SK16 identification |
| 517640 | 1.5168 | 64.0 | G9 | Crown coordinate class; N-BK7 is a close catalog coordinate, supplier/melt unproven |
| 807316 | 1.8074 | 31.6 | G10 | Unmatched; coordinate of the discontinued Schott LaSF8, no public dispersion coefficients located |
| 670472 | 1.6700 | 47.2 | G12 | Barium-flint coordinate class; BAF10 (1.67003 / 47.20) is the catalog equivalent, supplier/melt unproven |

The front group illustrates the patent's explicit glass-selection logic without requiring a supplier assignment. G1 uses
a relatively high-index, low-Abbe coordinate while G2 and G3 use substantially higher Abbe numbers. The verified Example 1
values satisfy the patent's front-group index and Abbe conditions. That establishes compliance with the patented design
constraints; it does not by itself identify the exact historical glass melts or quantify secondary-spectrum performance.

## Focus Mechanism

The patent describes V1 only as the positive front lens group and does not discuss focusing; front-group focusing is the
conventional arrangement for this zoom type and is an inference here. Example 1 publishes only the infinity-focus zoom
prescription. There is no finite-object spacing table, no front-group focus travel, and no focus-dependent image-distance
law from which a unique close-focus model could be reconstructed. [1, specification; Table 1]

The production lens is specified by Minolta to focus to 1.5 m. [2; 3] That value is retained as product metadata, but it is
not used to invent internal spacings. The model therefore has focus status **NO_INTERNAL_RECONSTRUCTION**: every authored
focus pair repeats the same infinity spacing at each zoom endpoint. The visualization does not claim to reproduce the
production lens at 1.5 m.

## Conditional Expressions

The patent supplies nine design conditions. The calculations below use the Example 1 source values together with the
standalone V2 and relay powers recomputed from the final prescription. The raw printing of condition (2) is preserved as a
source discrepancy rather than silently corrected.

| Condition | Verified Example 1 value | Result |
|---|---:|---|
| (1) $0.4 > n_a-n_b > 0.05$ | 0.1352 | Pass |
| (2), as printed: $3.0 > n_b+n_c > 3.5$ | 3.3483 | **Literal failure; inequality is impossible** |
| (2), supported reading: $3.0 < n_b+n_c < 3.5$ | 3.3483 | Pass |
| (3) $v_a < 40$, $v_b+v_c > 80$ | 25.4; 106.1 | Pass |
| (4) $f_s > |f_2| > 0.5f_s$ | 25.75 < 39.218 < 51.5 mm | Pass |
| (5) $0.1 < |f_2|(1/r_b-1/r_a) < 1.0$ | 0.650614 | Pass |
| (6) $1.3f_m > d_m > 0.25f_m$ | $d_m/f_m = 0.746045$ | Pass |
| (7) $5.0 > r_c/r_d > 1.3$ | 1.996723 | Pass |
| (8) $v_l-v_m < 30$ | 14.1 | Pass |
| (9) $|r_e| > 2.5f_m$ | $|r_e|/f_m = 10.1815$ | Pass |

Condition (2) is printed in US 4,192,577 with both inequality signs pointing in the same direction, which makes the stated
interval impossible. The surrounding patent discussion describes lower and upper limits in a manner consistent with
$3.0 < n_b+n_c < 3.5$, and Example 1 gives 3.3483. The model therefore records the printed expression as a failed source
comparison and the reversed-bound interpretation as a separately supported correction proposal. [1, specification]

## Verification Summary

Paraxial tracing of the final data revision gives 51.528241 mm at the wide endpoint and 131.448239 mm at the tele endpoint,
compared with the patent's 51.5 and 131.5 mm values. Independent sequential height/reduced-angle tracing and an ABCD matrix
calculation agree to floating-point precision.

The derived paraxial back focal distance from the last refracting surface is 44.573871 mm wide and 44.551973 mm tele. The
patent does not publish the rear image distance. The model therefore uses a fixed image plane 163.167922 mm from surface 1,
with derived rear air gaps of 44.567922 mm wide and 44.557922 mm tele. The resulting paraxial defocus residual is about
-0.005949 mm wide and +0.005949 mm tele, symmetrically absorbing the 0.01 mm total-track mismatch produced by the source's
rounded spacing table.

With the inferred stop position and calibrated 12.262 mm stop semi-diameter, the modeled wide-open f-number is 3.600411 at
wide and 3.599489 at tele. Those numbers verify internal consistency with the published FNo. 3.6; they do not independently
verify the physical diaphragm diameter.

The surface-by-surface Petzval sum is +0.001594289 mm⁻¹, corresponding to a paraxial Petzval radius of +627.239 mm under
the adopted sign convention. This is a first-order result from the prescription, not a direct prediction of the final
astigmatic field surfaces shown by the patent's aberration plots.

Because no clear apertures are published, the surface semi-diameters are modeling inferences rather than patent facts. The
ray-envelope set was then fitted to the rims drawn in FIG. 1 of the patent, measured by pixel profile at 0.107 mm/px from
the r1–r22 vertex span: the front group already agreed within 2%, while the variator, compensator, the rear of R1 and
both R2 elements were raised 5–10% to the drawn 13.5–14.1 mm. Surface 7 remains at 12.6 mm, the limit set by the D7 air
gap. For
the fitted set, the minimum element edge thickness at the common rim height is 0.587 mm (G2), the maximum spherical rim
slope is 33.66° (surface 7), the tightest air gap is D7 with 0.49 mm rim clearance against its 4.6 mm vertex spacing
(ratio 0.107), and the exact on-axis f/3.6 marginal ray keeps at least 7.5% of the semi-diameter in hand at every lens
surface (minimum at surface 14, tele endpoint). Exact chief rays at the
published endpoint half-fields of 23.5° and 9.0° reach the fixed image plane at approximately 21.49 and 21.54 mm image
height, respectively. These checks validate the authored geometry at the sampled states; they do not turn the inferred
semi-diameters into measured production apertures.

## Sources

1. Shuji Ogino, **US 4,192,577, “Zoom Lens System,”** Minolta Camera Kabushiki Kaisha, granted March 11, 1980. Primary
   prescription: Example 1, Fig. 1 and Table 1. Public copy:
   <https://patents.google.com/patent/US4192577A/en>
2. Minolta Camera Co., Ltd., **Minolta MD Zoom Lenses Owner's Manual**, document 9222-9003-06 N608-A6, 1985. Manufacturer
   specifications for the MD Zoom 50-135mm f/3.5:
   <https://www.massimoscottinelweb.com/Immagini%20ridotte%20per%20SITO%20web/Minolta%20pubblicit%C3%A0%20e%20cataloghi%20d%27epoca/Libretti%20di%20Istruzione/Minolta%20MD%20Zoom%20Lenses%20Owner%27s%20Manual%20E-G-F-S%20-%209222-9003-06%20N608-A6.pdf>
3. Minolta Camera Co., Ltd., **Minolta SLR System** catalog scan, manufacturer specification table for the MD zoom range:
   <https://minolta.suaudeau.eu/ressources_iconographiques/system_SLR_MD1.pdf>
4. SCHOTT, **Optical Glass** catalog/search and glass datasheets, used only for coordinate comparison:
   <https://www.us.schott.com/shop/advanced-optics/en/search/>
5. OHARA INC., **Optical Glass Catalog**, current catalog coverage checked for coordinate comparison:
   <https://www.ohara-inc.co.jp/en/product/catalog/>
6. HOYA Corporation Optics Division, **NBFD15-W / FD60-W optical-glass notice**, used for the FD60 coordinate comparison:
   <https://www.hoya-opticalworld.com/english/pdf/NBFD15-W_FD60-W_120524.pdf>
