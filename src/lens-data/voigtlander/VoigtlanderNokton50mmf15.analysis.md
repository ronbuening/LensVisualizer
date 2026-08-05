## Patent Reference and Design Identification

**Patent:** US 2,646,721 A<br>
**Priority:** 16 January 1950 (Switzerland)<br>
**Filed:** 12 September 1950<br>
**Granted:** 28 July 1953<br>
**Inventor:** Albrecht Wilhelm Tronnier<br>
**Assignee:** Voigtländer & Sohn Aktiengesellschaft<br>
**Title:** *Gauss Type Photographic Objective Having Two Lens Systems on Opposite Sides of a Diaphragm*<br>
**Embodiment analyzed:** Example 1 — the sole Numerical Example associated with Figure 2

The selected prescription is the patent's only worked numerical example. Figure 2 shows its cemented form: the first
opposite-power pair and the first rear pair use equal-radius junctions and are cemented, rather than separated by the
small air spaces permitted by Figure 1. The numerical table is normalized to an equivalent focal length of 1.0, while
the patent describes Figure 2 as a 150 mm embodiment.

The fixed production correlation for this entry is the **VOIGTLÄNDER NOKTON 50mm f/1.5** for the Prominent system.
Voigtländer's Prominent instructions establish the product identity, 50 mm f/1.5 marketed specification, 24 × 36 mm
format, interchangeable standard-lens bayonet, and body-mounted coupled focusing control. They do not identify this
patent or confirm that the production lens used the numerical prescription. The patent-to-product association is
therefore the selected correlation for this data set, not a documented manufacturer attribution.

The model applies a uniform scale factor of 50 to every patent length. Its computed design focal length is
49.9998858 mm, while the marketed value remains 50 mm. The patent's f/1.5 entrance aperture is retained as a modeled
f-number of 1.4999966. No aspheric surfaces are present, so no polynomial coefficient transformation is applicable;
indices and Abbe numbers remain unchanged under scaling.

## Optical Architecture

The objective is a modified Gauss design with **seven elements in five air-separated groups** and two cemented
doublets. The patent also divides the system into four functional groups, I–IV. Those two counts describe different
levels of organization:

- **Patent Group I:** cemented L1–L2, net positive.
- **Patent Group II:** air-spaced L3 and L4, net negative.
- **Patent Group III:** cemented L5–L6, net negative.
- **Patent Group IV:** rear singlet L7, positive.

The resulting functional power sequence is positive–negative–negative–positive around an intermediate diaphragm.
Ahead of the diaphragm, two opposite-power meniscus pairs form the front system. Behind it, a negative–positive
cemented doublet is followed by a positive singlet. This arrangement retains the broad Gauss symmetry of positive
outer power and negative inner power, but it is not geometrically symmetric.

The patent identifies two linked design choices. First, the negative L4 immediately before the diaphragm uses a
comparatively low refractive index, while the final positive L7 uses a substantially higher index. Second, the outer
radii of the front and rear systems are constrained relative to the entrance aperture. The patent presents this
combination as a means of extending lateral correction and image-field flattening at apertures faster than f/1.6.

The modeled first-surface-to-image track is 69.634222 mm. Its track-to-focal-length ratio is 1.39269, and its back-focal-
distance ratio is 0.60025. Under the project's definitions, the prescription is therefore neither telephoto
(`TL/EFL < 1`) nor retrofocus (`BFD > EFL`). The 30.012222 mm back focal distance is measured from the final optical
surface, not from a camera flange or bayonet reference.

The patent publishes only the total diaphragm space. The data model places the stop at the midpoint shown in Figure 2,
5.8405 mm from each adjacent refracting surface. This is a figure-based modeling inference. The physical stop
semi-diameter, 10.128514 mm, is solved from the published f/1.5 entrance aperture rather than read from the patent.

## Element-by-Element Analysis

### L1–L2 — Cemented Front Pair, Patent Group I

**L1:** `nd = 1.70315`, `νd = 41.1`. Glass: BASF7 (Sumita catalog equivalent; production supplier unspecified).
Standalone focal length: **−80.995 mm**.

L1 is the strongly curved diverging front meniscus. Its negative standalone power does not make Group I negative;
cementing it to L2 produces a calculated group focal length of **+87.259 mm**. The deeply curved cemented boundary is
the vicinal surface pair emphasized in the patent's description of the front group.

**L2:** `nd = 1.62095`, `νd = 60.3`. Glass: N-SK16 (Schott catalog equivalent; production supplier unspecified). Standalone focal length:
**+40.585 mm**.

L2 is the converging member of the cemented pair. Its lower index and higher Abbe number contrast with L1, while its
positive power dominates the net sign of Group I. The **+87.259 mm** value is the isolated cemented-group EFL in air,
not an in-situ power contribution or the arithmetic sum of the two isolated-element powers.

### L3 — Positive Meniscus, Front Member of Patent Group II

`nd = 1.62095`, `νd = 60.3`. Glass: N-SK16 (Schott catalog equivalent; production supplier unspecified). Standalone focal length:
**+40.585 mm**.

L3 repeats L2's patent radius pair, center thickness, refractive index, and Abbe number. The authored semi-diameters
differ because the clear apertures taper toward the stop, but the optical prescription otherwise makes L2 and L3
identical positive menisci. This implements the patent's stated manufacturing option of using the same glass and form
for the two converging menisci in the front system.

L3 begins the second opposite-power pair. Its positive standalone power is outweighed by L4 when the two elements are
traced with their actual air spacing, yielding an isolated L3–L4 subassembly EFL of **−158.754 mm** in air.

### L4 — Negative Meniscus Adjacent to the Diaphragm

`nd = 1.53250`, `νd = 46.2`. Glass: FTM8 (Ohara catalog equivalent; production supplier unspecified).
Standalone focal length: **−26.318 mm**.

L4 is the low-index negative member immediately ahead of the diaphragm. Its strong negative power reverses the sign of
the L3–L4 pair and produces the net-negative Patent Group II. The element's refractive index is central to the patent's
material condition: the difference between L7 and L4 is 0.17065, exceeding the specified minimum of 0.150.

FTM8 is a close class-compatible dispersion equivalent for the patent coordinate. It enables spectral modeling without
identifying the production supplier or claiming that the modern Ohara catalog glass was the historical melt.

### L5–L6 — Cemented Rear Doublet, Patent Group III

**L5:** `nd = 1.64783`, `νd = 33.8`. Glass: SF2 (Schott catalog equivalent; production supplier unspecified). Standalone focal length:
**−17.366 mm**.

L5 is the biconcave element immediately behind the diaphragm. It supplies the strongest isolated negative power in the
prescription. Its relatively low Abbe number distinguishes it from the positive cemented partner, but the available
source data support only ordinary Abbe-level color balancing, not a claim of anomalous partial dispersion.

**L6:** `nd = 1.61948`, `νd = 60.4`. Glass: N-SK16 (Schott catalog equivalent; production supplier unspecified). Standalone focal length:
**+24.056 mm**.

L6 is the biconvex positive member cemented to L5. The large `νd` contrast between L5 and L6 is consistent with
first-order chromatic balancing in the doublet. The two elements nevertheless form a net-negative isolated cemented
subassembly with an EFL of **−103.399 mm** in air; this is not an in-situ power contribution.

The revised inferred clear apertures use an 11.5 mm rim for the cemented L5–L6 pair. The value remains a visualization
inference rather than a patent dimension or evidence of production manufacturability.

### L7 — Positive Rear Singlet, Patent Group IV

`nd = 1.70315`, `νd = 41.1`. Glass: BASF7 (Sumita catalog equivalent; production supplier unspecified). Standalone
and group focal length: **+34.998 mm**.

L7 is the final biconvex positive singlet. It restores positive power after the two negative central functional groups
and forms Patent Group IV by itself. Its high refractive index is paired deliberately with the low-index L4 across the
diaphragm; that index contrast is one of the patent's principal conditions.

L7 shares only L1’s published glass coordinate (`nd`, `νd`), not its radii, thickness, shape, or power. The common
material coordinate therefore does not imply interchangeable elements. Its placement at the rear also makes it a
principal limiter of the wide-open off-axis bundle in the inferred-aperture model.

## Glass Identification and Selection

The patent supplies only d-line refractive indices and Abbe numbers. It does not name glass manufacturers or trade
glasses. Close class-compatible catalog matches are therefore used as dispersion equivalents while the patent's `nd`
and `νd` remain authoritative. These equivalents do not identify production suppliers or exact historical melts.

| Data-file glass annotation | `nd` | `νd` | Elements | Supported interpretation |
|---|---:|---:|---|---|
| BASF7, Sumita catalog equivalent | 1.70315 | 41.1 | L1, L7 | High-index barium-flint dispersion equivalent |
| N-SK16, Schott catalog equivalent | 1.62095 | 60.3 | L2, L3 | SK16-family crown dispersion equivalent |
| FTM8, Ohara catalog equivalent | 1.53250 | 46.2 | L4 | Low-index flint dispersion equivalent |
| SF2, Schott catalog equivalent | 1.64783 | 33.8 | L5 | SF2-family flint dispersion equivalent |
| N-SK16, Schott catalog equivalent | 1.61948 | 60.4 | L6 | SK16-family crown dispersion equivalent |

L2 and L3 are the same prescription glass. L6 has a distinct published index but remains close enough to use the same
N-SK16 dispersion equivalent. L1 and L7 likewise share one coordinate, while L4 and L5 are unique.

No element carries patent-supplied `nC`, `nF`, `ng`, or `dPgF`, and no catalog equivalent is asserted as an exact-vendor
identity for the historical glass. Accordingly, the design can be discussed at the level of index, Abbe number, and
ordinary achromatic pairing, but not as apochromatic or anomalous-dispersion corrected.

## Focus Mechanism

The patent publishes no focus-state table, moving-group law, object-distance series, or close-focus magnification. The
production camera's body-mounted focusing control is consistent with unit focusing, but the numerical motion used here
is a **CONSTRAINED_RECONSTRUCTION**, not a published patent state.

The reconstruction preserves every internal optical spacing. Physically, the complete objective translates away from
the film plane; in the sequential data model, the equivalent operation is represented by increasing only the final
R11-to-image distance.

| State | R11-to-image distance | Internal spacing change |
|---|---:|---:|
| Infinity | 30.012222 mm | 0 mm |
| 1.0668 m | 32.572237 mm | 0 mm |

The 1.0668 m endpoint comes from the manufacturer's 3 ft 6 in distance-scale entry and is assumed to be measured from
the film plane. Solving the finite-conjugate imaging condition gives **2.560015 mm** of extension and a transverse
magnification of approximately **−0.05120×**. The source does not establish the exact mechanical travel or the distance
reference plane, so both remain disclosed assumptions of the reconstruction.

## Conditional Expressions

The patent's material and outer-radius conditions are evaluated in its normalized `F = 1` coordinates. The entrance-
aperture diameter is `DA = 1/1.5 = 2/3`.

| Patent condition | Evaluated result | Status |
|---|---:|---|
| `n7 − n4 > 0.150` | `1.70315 − 1.53250 = 0.17065` | Pass |
| `0.8DA < |R1| + |R6| ≤ 1.8DA` | `0.53333 < 0.91597 ≤ 1.20000` | Pass |
| `||R1| − |R6|| < 0.8DA` | `0.41621 < 0.53333` | Pass |
| `0.8DA < |R11| + |R7| ≤ 1.8DA` | `0.53333 < 0.90286 ≤ 1.20000` | Pass |
| `||R11| − |R7|| < 0.8DA` | `0.31452 < 0.53333` | Pass |
| Front/rear outer-radius-sum ratio `> 1` | `1.01452` | Pass |

All four quoted group focal lengths are isolated subassemblies evaluated in air; no in-situ group contribution is
claimed. They satisfy the ranges stated by the patent:

```text
1.30F < fI   < 2.60F
−5.00F < fII < −2.50F
−3.50F < fIII < −1.50F
0.55F < fIV  < 0.95F
```

All individual radius inequalities in claim 3 pass for the selected numerical example. These checks reproduce the
patent's design conditions; they do not independently establish production identity or image quality.

## Verification Summary

The final data arrays reproduce an effective focal length of **49.9998858 mm**, a modeled wide-open f-number of
**1.4999966**, and a 33.333333 mm entrance-pupil diameter. The paraxial 24 × 36 mm diagonal field is approximately
**46.79°**. These are computed design quantities; the corresponding marketed values remain 50 mm and f/1.5.

Surface-by-surface Petzval calculation using `φ/(n·n′)` gives **+0.00535379 mm⁻¹**, corresponding to a Petzval-radius
magnitude of **186.784 mm**. This is a first-order field-curvature quantity and does not include astigmatism or the
higher-order balance that determines the final best-focus surface.

The patent does not publish surface semi-diameters. The authored values are inferred from the f/1.5 marginal bundle,
24 × 36 mm off-axis rays, a 600 dpi audit of Figure 2, and geometric clearance. The two pre-stop members now use
11.5 mm rims, restoring the pronounced scale difference from the large front doublet, while the rear groups use
11.5–11.9 mm rims. Positive edge thickness, valid spherical rim slopes, and non-intersecting air gaps were rechecked.

No cover glass, filter, dummy plane, flare cutter, or mechanical component appears in the selected active prescription,
so none is added or compensated by an air-equivalent plate correction.

## Sources

1. Albrecht Wilhelm Tronnier, *Gauss Type Photographic Objective Having Two Lens Systems on Opposite Sides of a
   Diaphragm*, US 2,646,721, granted 28 July 1953, especially Figure 2 and the Numerical Example on patent page 4.
2. Voigtländer A.G., Braunschweig, *Prominent Instructions for Use*, manufacturer manual: standard NOKTON 50 mm f/1.5,
   24 × 36 mm format, interchangeable 50 mm bayonet, coupled body focusing, and 3 ft 6 in distance-scale entry.
3. Official optical-glass catalogs and data portals from OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita, used only for
   class-level residual comparison; the patent does not identify a glass vendor.
