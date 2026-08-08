## Patent Reference and Design Identification

**Patent:** US 7,106,520 B2
**Application Number:** 10/836,224
**Priority:** May 6, 2003
**Filed:** May 3, 2004
**Granted:** September 12, 2006
**Inventor:** Masakazu Saori
**Assignee:** Pentax Corporation
**Title:** *Wide-Angle Zoom Lens System*
**Embodiment analyzed:** Embodiment 8, Table 8, Figs. 29 and 31

The modeled lens is **PENTAX SMC DA 16-45mm f/4 ED AL**. The selected production correlation is Embodiment 8 of
US 7,106,520 B2. That correlation is fixed by the project job card; it is not presented as a manufacturer-confirmed
patent assignment.

Several independent features make the correlation technically coherent:

1. Embodiment 8 is a four-state zoom with published focal lengths of 16.30, 22.59, 31.90, and 43.70 mm. The production
   lens is marketed as a 16-45 mm zoom.
2. The patent design is F/4.1 at all four states, while the production lens is marketed as F4. The data therefore keeps
   the exact modeled F/4.1 separate from the rounded marketing aperture.
3. The physical prescription contains 13 lenses in 10 air-separated groups, matching the manufacturer's 13-element,
   10-group construction.
4. Two physical lenses carry aspherical surfaces: L13 at surface 6A and the hybrid L41 at surface 19A. The manufacturer
   likewise specifies two aspherical lenses.
5. L22 has the patent coordinate nd = 1.49700, νd = 81.6 and is stored as a 497816 ED class material. The production
   literature identifies one extra-low-dispersion lens.
6. The patent is designed around a 14.24 mm maximum image height (semi-diagonal, approximately 28.48 mm full image
   diagonal) for a small-format digital SLR. The production lens is an APS-C PENTAX K-mount DA lens.
7. The patent's endpoint half fields of 42.2° and 17.8° correspond to approximately 84.4° and 35.6° full field, close to
   the manufacturer's marketed 83°-35° specification.
8. The patent priority date is May 2003, and PENTAX's archived release announcement for the production lens appears in
   December 2003.

No dimensional scaling is applied. The patent prescription is modeled at its native scale, so all radii, spacings,
image-plane distances, and aspherical coefficients remain in the source scale. In particular, the asphere coefficients
are not transformed: the scale factor is exactly 1.

## Optical Architecture

The design is a four-moving-group **negative-positive-negative-positive wide-angle retrofocus zoom**. The patent itself
emphasizes a long back focal distance for digital SLR use. Under the project's explicit classification rule, every
published zoom state is retrofocus because its back focal distance exceeds its effective focal length. None of the
states
meets the separate telephoto criterion TL/EFL < 1.

The four patent power groups should not be confused with the manufacturer's 10-group construction count. The latter
counts air-separated physical lens clusters; the former are the four larger moving functional assemblies:

| Functional group | Patent surfaces | Computed in-situ group focal length | Principal role |
|---|---:|---:|---|
| G1 | 1-8 | -28.238253 mm | Negative front/focus group; establishes wide field and long back focus |
| G2 | 9-15 | +31.373563 mm | Main positive converging group adjacent to the diaphragm |
| G3 | 16-18 | -46.669030 mm | Compact negative relay/correction group |
| G4 | 19A-24 | +66.569575 mm | Positive rear group containing the hybrid asphere and rear cemented pair |

These focal lengths are computed from the final prescription at the groups' air boundaries. They are not standalone
sums of individual element powers.

At infinity, the patent varies three principal inter-group air spaces. The G1-to-G2 separation decreases strongly from
54.81 mm to 5.01 mm, the G2-to-G3 separation grows from 2.66 mm to 15.76 mm, and the G3-to-G4 separation decreases from
15.40 mm to 2.30 mm. The spacing from G2 through G3 to G4 remains 22.48-22.49 mm to source precision, confirming the
patent statement that G2 and G4 translate integrally while G3 moves between them.

The diaphragm is a source fact: it lies 1.60 mm on the object side of surface 9 and moves with G2. In the data model the
published d8 is split into surface 8 to `STO` and a fixed 1.60 mm `STO`-to-surface-9 distance, preserving the original
surface-9 axial station. The patent associates this forward stop location with a longer exit-pupil distance and improved
telecentricity.

The four tabulated zoom states show G1 moving monotonically toward the image. The patent prose also says that G1 should
reverse and later move toward the object. Because Table 8 does not sample that reversal, the model preserves only the
published control points. No extra zoom state or invented reversal trajectory is introduced between them.

The physical lens count is 13, but the data contains 14 optical-media records. The difference is deliberate: L41 is a
single physical hybrid lens whose thin resin aspherical layer and glass substrate must be represented as separate media
for refraction and dispersion. This does not change `elementCount: 13` or the manufacturer's 13-lens construction.

## Element-by-Element Analysis

The focal lengths given below are standalone thick-element values in air unless a cemented or bonded net focal length is
stated explicitly. They should not be confused with the in-situ focal length of the complete functional group.

### L11 — Negative Meniscus

**nd = 1.69680, νd = 55.5. Glass: 697555 class. Standalone f = -38.102247 mm.**

L11 is the first surface pair of G1 and supplies the strongest negative standalone power in the front group. Its
meniscus form places a convex surface toward the object while maintaining negative net power. In the four-group
retrofocus architecture, that front negative action contributes to the large back focal distance required by a DSLR
mirror box.

The current data stores catalog-derived C-, F-, and g-line indices and dPgF for this class from a coordinate-compatible
current catalog anchor. The patent itself publishes only nd and νd and does not identify a glass manufacturer.

### L12 — Negative Meniscus

**nd = 1.71300, νd = 53.9. Glass: 713539 class. Standalone f = -61.650247 mm.**

L12 continues the negative front-group sequence with weaker standalone power than L11. Its relatively high refractive
index lets the group bend rays strongly without relying on an extremely short center thickness. The front-group power is
therefore distributed over several elements rather than concentrated in one very strong surface pair.

The 713539 class is catalog-resolved for spectral modeling, but the vendor identity remains deliberately unstated in the
lens data because the patent provides no supplier attribution.

### L13 — Weak Negative Meniscus with Rear Asphere

**nd = 1.52538, νd = 56.3. Glass: Unmatched (nd=1.52538, vd=56.3). Standalone f = -390.552228 mm.**

L13 has very weak standalone paraxial power; its importance lies primarily in surface shaping rather than first-order
power. Its rear surface 6A is one of the two aspheres in the design. The patent specifically teaches that an aspherical
surface in G1 is useful for correcting astigmatism and distortion at the short-focal-length end. This is consistent
with
placing a strong departure on this otherwise weak element.

No current public catalog identity was found that defensibly reproduces the stored nd/νd pair. The `Unmatched` label is
therefore retained rather than assigning a speculative vendor glass.

### L14 — Biconvex Positive

**nd = 1.84666, νd = 23.8. Glass: 847238 class. Standalone f = +116.028461 mm.**

L14 closes G1 with positive power after three negative meniscus elements. Its high index and low Abbe number distinguish
it from the preceding front-group glasses. As a positive member inside a group whose net power is negative, it moderates
rather than reverses the overall G1 power and provides an additional degree of freedom for balancing the front group's
chromatic and monochromatic aberrations.

The group as a whole remains strongly negative at -28.238253 mm; L14's +116 mm standalone power should therefore not be
interpreted as a separate positive functional group.

### L21 — Biconvex Positive

**nd = 1.48749, νd = 70.2. Glass: 487702 class. Standalone f = +178.434143 mm.**

L21 begins the positive G2 assembly immediately behind the moving diaphragm. It is a relatively weak positive crown-like
element compared with the stronger positive elements that follow. Its high Abbe number limits dispersion while the
surrounding G2 elements establish most of the converging power.

The stop moves with G2 and therefore retains its published axial offset relative to the G2 front surface throughout the
zoom movement.

### L22 — Biconvex Positive, ED Class

**nd = 1.49700, νd = 81.6. Glass: 497816 ED class. Standalone f = +64.959911 mm.**

L22 is the clearest low-dispersion element in the prescription. Its coordinate is reproduced by the current 497816
catalog class, and the stored line-index data confirm the unusually low dispersion implied by νd = 81.6. This makes L22
the natural prescription counterpart to the production lens's single advertised ED element.

That correspondence is an identification inference, not a statement that PENTAX specified a particular catalog vendor.
The data retains the class label rather than naming the representative catalog anchor as the production glass.

### D1 — L23 + L24 Cemented Pair

**L23:** nd = 1.48749, νd = 70.2. Glass: 487702 class. Standalone f = +34.949005 mm.
**L24:** nd = 1.67270, νd = 32.1. Glass: 673321 class. Standalone f = -56.991003 mm.
**Cemented net f = +84.890196 mm.**

D1 completes G2. L23 is a relatively strong biconvex positive element; L24 is a negative meniscus cemented directly to
it at surface 14. The pairing combines substantially different dispersions across a shared interface and leaves a
moderate positive net power.

The cemented pair's +84.890196 mm net focal length is not the same as G2's +31.373563 mm in-situ focal length. G2's
stronger net convergence results from the combined action and separation of L21, L22, and D1.

### D2 — L31 + L32 Cemented Negative Group

**L31:** nd = 1.80518, νd = 25.4. Glass: 805254 class. Standalone f = +27.791135 mm.
**L32:** nd = 1.76200, νd = 40.1. Glass: 762401 class. Standalone f = -17.767841 mm.
**Cemented net f = -46.669030 mm.**

D2 is the entire G3 functional group. A strong positive meniscus is cemented to a still stronger biconcave negative
element, producing a negative cemented net equal to the independently computed G3 power. The high-index pair creates a
compact power reversal between the positive G2 and positive G4 assemblies.

Because G3 moves independently while G2 and G4 maintain nearly fixed mutual separation, this compact negative group is
central to the zoom ratio and to the changing distribution of conjugate power through the system.

### H1 — L41 Resin Layer + L41 Glass Substrate

**L41 resin:** nd = 1.52972, νd = 42.7. Glass: Resin layer (patent hybrid asphere). Standalone f = +93236.998823 mm.
**L41 glass substrate:** nd = 1.58913, νd = 61.2. Glass: 589612 class. Standalone f = +47.559478 mm.
**Bonded net f = +47.542522 mm.**

H1 is one physical hybrid positive lens represented by two optical media. The thin resin layer is only 0.10 mm thick and
has essentially zero standalone paraxial power; its calculated focal length of roughly 93 m shows that its primary
purpose is to supply the aspherical surface profile rather than to act as an independent powered lens.

The glass substrate supplies nearly all of the hybrid's first-order positive power. Bonding the resin layer changes the
net focal length only slightly, from +47.559478 mm for the isolated substrate to +47.542522 mm for the complete hybrid.
Surface 19A nevertheless introduces a substantial non-spherical departure and is therefore optically significant well
beyond its paraxial power.

The patent expressly identifies this construction type as a possible hybrid lens in which an aspherical resin layer is
bonded to a spherical glass surface. In Embodiment 8, the 0.10 mm resin medium and separate substrate index make
that
interpretation explicit in the numerical prescription.

### D3 — L42 + L43 Rear Cemented Pair

**L42:** nd = 1.80610, νd = 33.3. Glass: 806333 class. Standalone f = -26.051004 mm.
**L43:** nd = 1.48749, νd = 70.2. Glass: 487702 class. Standalone f = +31.548753 mm.
**Cemented net f = -182.302614 mm.**

D3 is a weakly negative cemented pair behind the strong positive H1 hybrid. L42 is a negative meniscus of relatively
high index; L43 is a biconvex positive element of substantially lower dispersion. Their powers nearly cancel, leaving a
weak negative cemented net while preserving independent control of curvature and dispersion near the image side.

The complete G4 group remains positive at +66.569575 mm because H1 dominates its first-order power. The patent
notes that
including both positive and negative elements in G4 assists chromatic correction across zoom, and that a positive
image-side element with a convex rear surface helps maintain telecentricity. L43 occupies that final positive position.

## Glass Identification and Selection

The patent supplies d-line nd and νd coordinates but no glass-maker names. The data therefore uses vendor-neutral class
labels wherever a current catalog coordinate can reproduce the patent pair, an explicit unmatched label for L13, and a
material-role label for the hybrid resin. Representative catalog names below are provenance anchors only; they are not
assertions about the glass actually purchased by PENTAX.

| Data glass label | nd | νd | Used in | Representative current catalog anchor |
|---|---:|---:|---|---|
| 697555 class | 1.69680 | 55.5 | L11 | OHARA S-LAL14 coordinate |
| 713539 class | 1.71300 | 53.9 | L12 | OHARA S-LAL8 coordinate |
| Unmatched (nd=1.52538, vd=56.3) | 1.52538 | 56.3 | L13 | No defensible current catalog match |
| 847238 class | 1.84666 | 23.8 | L14 | OHARA S-TIH53 coordinate |
| 487702 class | 1.48749 | 70.2 | L21, L23, L43 | OHARA S-FSL5 coordinate |
| 497816 ED class | 1.49700 | 81.6 | L22 | OHARA S-FPL51 coordinate |
| 673321 class | 1.67270 | 32.1 | L24 | OHARA S-TIM25 coordinate |
| 805254 class | 1.80518 | 25.4 | L31 | OHARA S-TIH6 coordinate |
| 762401 class | 1.76200 | 40.1 | L32 | OHARA S-LAM55 coordinate |
| Resin layer (patent hybrid asphere) | 1.52972 | 42.7 | L41 resin | Not treated as optical catalog glass |
| 589612 class | 1.58913 | 61.2 | L41 glass substrate | OHARA S-BAL35 coordinate |
| 806333 class | 1.80610 | 33.3 | L42 | HIKARI J-LASFH6 coordinate |

For the matched classes, the data also carries catalog-derived `nC`, `nF`, `ng`, and `dPgF` values. These line data are
useful for chromatic modeling, but they are not published by the patent and they do not establish the production glass
vendor. The largest nd and νd residuals against the representative anchors are only a few parts in 10^6 and 0.06 Abbe
units respectively, which is sufficient for a coordinate-class identification.

The glass palette deliberately mixes high-Abbe positive elements with lower-Abbe negative partners. The clearest example
is G2, where the 497816 ED-class L22 and 487702 positive elements are followed by the lower-Abbe 673321 negative L24.
A similar dispersion contrast appears in rear pair D3. This arrangement is consistent with chromatic balancing over the
zoom range, but the individual aberration allocation is a modeling interpretation rather than a separately published
claim for each lens element.

No apochromatic designation is inferred. The production literature states that the lens uses one ED element, and the
catalog-derived line data support a low-dispersion interpretation for L22, but neither source establishes an APO design
classification.

## Focus Mechanism

The patent states that focusing is performed by the negative first group G1. It does not publish a finite-distance
spacing table. The data therefore uses the declared focus status **CONSTRAINED_RECONSTRUCTION** rather than presenting a
close-focus row as source data.

The reconstruction holds the image plane and G2-G4 fixed and translates only G1, exactly preserving the patent's one-
degree-of-freedom focus mechanism. The object plane is placed 0.28 m from the image plane, matching the manufacturer's
published closest focusing distance.

| Zoom state | G1 shift from infinity | Reconstructed paraxial magnification |
|---:|---:|---:|
| 16.30 mm | -5.782755 mm | -0.118558 |
| 22.59 mm | -5.112024 mm | -0.144566 |
| 31.90 mm | -4.769585 mm | -0.190647 |
| 43.70 mm | -4.690529 mm | -0.257492 |

The sign convention above takes positive motion as imageward, so every close-focus solution moves G1 toward the object.
At the tele state, |m| = 0.25749, independently reproducing the manufacturer's 0.26x maximum reproduction ratio to the
precision of the published marketing value. This agreement supports the 0.28 m object-to-image-plane normalization, but
it does not turn the reconstructed spacings into patent-published data.

The manufacturer's Quick-Shift Focus specification describes the production lens's AF-to-manual control behavior. It is
separate from the optical reconstruction: the patent and data identify which optical group moves, but they do not supply
or infer the production focusing drive mechanism from that fact alone.

## Aspherical Surfaces

Embodiment 8 contains two aspherical surfaces, both represented with the required `A` suffixes in the data: surface
6A on
L13 and surface 19A on the resin face of hybrid L41.

The patent uses the standard even-asphere equation

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10},
$$

where $c=1/R$. The patent's printed `K` is already the standard conic constant; no conversion from an alternate κ or KA
convention is required. Both surfaces have K = -1. Because the prescription is unscaled, every coefficient is entered at
its published value.

| Surface | Element | K | A4 (mm^-3) | A6 (mm^-5) | A8 (mm^-7) | A10 (mm^-9) |
|---|---|---:|---:|---:|---:|---:|
| 6A | L13 | -1 | -1.7710e-5 | -4.5910e-9 | -5.6900e-11 | 0 |
| 19A | L41 resin | -1 | -1.1930e-5 | +2.9100e-9 | 0 | 0 |

The patent publishes no clear-aperture height for either asphere. The data's semi-diameters are model-derived, so any
rim departure must be stated as a computed result at those modeled heights rather than as a source value. At the final
validated semi-diameters, surface 6A has a signed departure of -2.111163 mm from the same-radius sphere at h = 17.0 mm,
while surface 19A has a signed departure of -0.298293 mm at h = 12.7 mm.

The two aspheres have different functions in the patent's design logic. The G1 asphere is specifically associated with
wide-end astigmatism and distortion correction. The object-side G4 asphere is placed near the center of the integrally
moving G2/G4 assembly, where the patent describes it as useful for balancing aberrations over the zoom range while
reducing sensitivity to decentration. The 19A surface is a resin-on-glass hybrid rather than a molded monolithic glass
asphere in this embodiment.

## Chromatic Correction Strategy

The patent's numerical table itself does not label any element as ED, nor does it provide per-element C-, F-, or g-line
indices. Chromatic interpretation therefore rests on two separate sources: the patent's nd/νd coordinates and the
current catalog-derived line data stored in the final model.

L22 is the strongest low-dispersion signature. Its 1.49700/81.6 coordinate corresponds to the 497816 class, and current
catalog data reproduce that coordinate together with the line indices stored in the lens file. The production lens is
independently described by PENTAX as using one ED lens, making L22 the most defensible correspondence.

Elsewhere, the design alternates high- and moderate-dispersion materials across positive/negative pairs. D1 combines
487702 positive and 673321 negative media; D2 combines 805254 positive and 762401 negative media; D3 combines 806333
negative and 487702 positive media. These pairings give the designer chromatic degrees of freedom in the same
groups that
carry significant zoom power.

The available data support discussion of low-dispersion and partial-dispersion behavior at the catalog-model level, but
not an APO claim. No such designation is added.

## Conditional Expressions

The patent defines the short-end group-power ratios and the overall-length ratio as design constraints. Using the
functional-group focal lengths recomputed from the final data and fW = 16.30 mm gives:

| Condition | Computed value | Patent Table 10 | General limit | Preferred limit | Result |
|---|---:|---:|---|---|---|
| \|f1/fW\| | 1.732408 | 1.73 | 1.2-2.0 | 1.4-1.8 | Pass |
| f2/fW | 1.924758 | 1.93 | 1.5-2.2 | 1.7-2.0 | Pass |
| \|f3/fW\| | 2.863131 | 2.86 | 2.5-3.6 | 2.7-3.0 | Pass |
| f4/fW | 4.084023 | 4.08 | 3.2-4.7 | 3.4-4.3 | Pass |
| TLW/TLT | 1.229719 | 1.23 | 1.05-1.30 | — | Pass |

The first four computed values use the in-situ four-group focal lengths rather than sums of standalone element powers.
The slight numerical difference between the computed second ratio, 1.924758, and the patent's printed 1.93 is consistent
with the table's limited precision and does not affect either limit.

Condition (5) also exposes a source inconsistency. Table 8 prints TLW = 147.63 mm and TLT = 131.39 mm, whose ratio is
1.12360 and therefore cannot yield the Table 10 value 1.23. Summing the complete Embodiment 8 prescription with its
published back focal distances gives 166.59 mm at wide and 135.47 mm at tele, whose ratio is 1.229719. The model retains
the printed TL pair only as a documented source error and uses the prescription-derived track for the optical geometry.

## Verification Summary and Modeling Scope

Independent reduced-angle tracing of the final modeled surfaces agrees with an independently assembled ABCD matrix to
within 1e-12 at every published infinity zoom state. The computed paraxial values are:

| Patent focal length | Computed EFL | Patent fB | Computed BFD | Prescription-derived track |
|---:|---:|---:|---:|---:|
| 16.30 mm | 16.300559 mm | 37.22 mm | 37.214740 mm | 166.59 mm |
| 22.59 mm | 22.590099 mm | 41.85 mm | 41.855298 mm | 148.54 mm |
| 31.90 mm | 31.898190 mm | 47.89 mm | 47.894231 mm | 137.82 mm |
| 43.70 mm | 43.690260 mm | 55.90 mm | 55.881974 mm | 135.47 mm |

The back focal distance exceeds EFL in all four states, which is the basis for the retrofocus classification used here.
The surface-by-surface Petzval sum, evaluated as $\phi/(n n')$, is +0.002397277 mm^-1. With the audit convention
$R_P=-1/\Sigma P$, the signed Petzval radius is -417.139981 mm.

The clear apertures shown in the model are not source dimensions. The patent publishes no semi-diameters, so every
surface `sd` was inferred from exact meridional ray tracing across all four zoom states and the constrained close-focus
states, then limited by edge thickness, actual rim slope, conic domain, cross-gap clearance, and ray containment. The
1.60 mm axial stop position is published; the effective stop radius at each zoom state is model-derived from the F/4.1
pupil requirement.

No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, blocker, or folded-path surface occurs in the
selected numerical prescription, and none is synthesized in the model. There is therefore no omitted plate requiring an
air-equivalent back-focus correction.

The design is kept at native scale. No length scaling and no asphere-coefficient transformation are applied. The only
non-published geometric states are the explicitly disclosed G1-only close-focus reconstruction and the inferred clear
apertures.

## Sources

- **US 7,106,520 B2**, Masakazu Saori, *Wide-Angle Zoom Lens System*, Pentax Corporation. Embodiment 8, Table 8,
  Figs. 29 and 31, plus Table 10 and the patent's general zoom/focus/asphere description. This is the primary numerical
  prescription source.
- **RICOH IMAGING, smc PENTAX-DA 16-45mmF4ED AL product page:**
  https://www.ricoh-imaging.co.jp/english/products/lens/k/wide/smcpentax-da16-45/
- **RICOH IMAGING, 2003 PENTAX press-release archive:**
  https://www.ricoh-imaging.co.jp/japan/press/2003.html
- **OHARA, current optical-glass catalog/download resources and glass-type tables:**
  https://www.ohara-inc.co.jp/en/product/catalog/
  https://www.ohara-inc.co.jp/product/01000/
- **HIKARI, J-LASFH6 optical-glass data:**
  https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/LASF/J_LASFH6.pdf
