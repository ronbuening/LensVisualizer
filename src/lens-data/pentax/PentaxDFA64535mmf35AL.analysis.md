## Patent Reference and Design Identification

**Patent:** US 2001/0007512 A1
**Priority:** 1999-12-14
**Filed:** 2000-12-11
**Published:** 2001-07-12
**Inventor:** Takayuki Sensui
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha
**Title:** *Wide-Angle Lens System*
**Embodiment analyzed:** Embodiment 4, Figure 13 and Tables 4–5

The prescription transcribes Embodiment 4 at its original scale and associates it with the PENTAX HD D FA645
35mm f/3.5 AL [IF] selected in the job card. The association is a fixed project correlation, not a statement that Ricoh
or Pentax identified this patent as the production formula.

Several features support an FA645-lineage relationship:

1. The patent design computes to 36.000133 mm at f/3.6, corresponding closely to the marketed 35 mm f/3.5 class.
2. The published image height is 34.85 mm and the half field is 44.8°, matching a 69.7 mm-diagonal 645 image field.
3. The patent moves only the positive rear group and keeps the surface-1-to-image track essentially constant.
4. The prescription includes a bonded hybrid asphere and a second aspherical surface.
5. Ricoh describes the 2015 HD lens as based on the earlier smc PENTAX-FA645 35mmF3.5AL[IF], which also uses inner
   focusing and aspherical optics.

The limitations are material. Embodiment 4 has 10 physical elements in 8 air-separated groups, whereas Ricoh specifies
10 elements in 7 groups for both commercial versions. The patent minimum state is 0.200×, while the production lens is
specified at 0.25×. Ricoh also states that the 2015 HD revision added a newly designed glass-molded aspherical element.
The patent is therefore treated as a plausible design-lineage prescription rather than a confirmed exact model of the
2015 HD optical system.

## Optical Architecture

Embodiment 4 is a two-group retrofocus wide-angle system. The fixed first group G1 extends from surface 1 through surface
12 and has negative equivalent power. The moving second group G2 extends from surface 13 through surface 19A, contains
the diaphragm, and has positive equivalent power. This arrangement follows the patent's stated negative-positive power
distribution and rear-focusing mechanism (¶¶0004–0007, 0040).

The independently computed d-line group equivalents in air are:

| Functional group | Surfaces | Equivalent focal length | Function in the assembled system |
|---|---|---:|---|
| G1 — fixed negative | 1–12 | −156.978220 mm | Expands the entering bundle and establishes the long rear clearance |
| G2 — moving positive | 13–19A, including STO | +70.290846 mm | Supplies the dominant converging action and performs focusing |

These group focal lengths are standalone equivalents, not direct measures of their in-situ contribution. For a unit-height
parallel input ray, G1 leaves a positive reduced angle and increases the ray height before G2. G2 then applies the larger
opposite change in reduced angle that produces the complete system's positive power. The infinity back focal distance of
57.800198 mm exceeds the 36.000133 mm effective focal length, giving `BFD/EFL = 1.60555`; the retrofocus designation is
therefore quantitative rather than merely typological.

The patent counts 10 physical lens elements in 8 groups. The data file contains 11 authored optical-media entries because
the glass substrate and bonded synthetic-resin layer of physical element L2 must carry separate indices and surface
assignments. No cover plate, filter, dummy plane, flare cutter, blocker, or mechanical plane is included.

## Element-by-Element Analysis

### L1 — Front Negative Meniscus

`nd = 1.77250`, `νd = 49.6`. Glass: `773496 — lanthanum-flint class (vendor unresolved)`. Standalone
`f = −55.107570 mm`.

L1 begins the fixed negative group. Its strong negative standalone power is consistent with the retrofocus requirement:
the front group must spread the bundle before the positive rear group while shifting the system principal planes so that
substantial mirror clearance remains behind the final element. The specific aberration allocation is an optical-model
inference; the patent describes the group architecture rather than assigning individual corrections to L1.

### L2g and L2r — Bonded Hybrid Negative Meniscus

L2g: `nd = 1.72916`, `νd = 54.7`. Glass: `729547 — lanthanum-crown class (vendor unresolved)`. Standalone
`f = −56.961549 mm`.

L2r: `nd = 1.52700`, `νd = 43.7`. Material: `Unmatched (synthetic resin; patent nd=1.52700, νd=43.7)`.
Standalone `f = −252.107126 mm`.

The 0.400 mm resin layer is bonded to the rear of the glass substrate and carries aspherical surface 5A. The two media
form one physical lens element but are modeled separately because the interface changes refractive index. Their combined
standalone equivalent focal length is −46.327412 mm. The resin layer is weak by itself; its main significance is the
aspherical boundary that changes the peripheral sag without requiring the entire substrate to be an aspherical glass
blank. This hybrid construction is stated for the common embodiment architecture in ¶0068 and retained by Embodiment 4.

### L3 — Biconvex Positive Element

`nd = 1.75520`, `νd = 27.5`. Glass: `755275 — dense-flint class (vendor unresolved)`. Standalone
`f = +68.226169 mm`.

L3 is the first positive element after the two front negative menisci. It recovers part of the front-group convergence
while remaining inside a group whose net equivalent power is negative. Its high index permits useful positive power with
moderate surface curvature. The low Abbe number makes it a chromatically strong medium, but no apochromatic, anomalous-dispersion, or exact secondary-spectrum claim follows because the patent supplies only `nd` and `νd`.

### D1 — Cemented L4/L5 Pair

L4: `nd = 1.51742`, `νd = 52.4`. Glass: `517524 — crown-flint class (vendor unresolved)`. Standalone
`f = +52.347624 mm`.

L5: `nd = 1.80400`, `νd = 46.6`. Glass: `804466 — lanthanum-flint class (vendor unresolved)`. Standalone
`f = −31.141651 mm`.

The pair is cemented at surface 9 and has a net standalone equivalent focal length of −73.230769 mm. The positive and
negative members must not be interpreted by their individual powers alone: the shared interface and finite thickness
leave the complete doublet negative. The patent specifically constrains the power of this convex cemented surface through
condition (5), linking its index step and radius to the full-system focal length (¶¶0017–0021, 0053–0055).

### L6 — Final Positive Meniscus of G1

`nd = 1.51823`, `νd = 59.0`. Glass: `518590 — crown class (vendor unresolved)`. Standalone
`f = +59.735483 mm`.

L6 closes the fixed front group. Its positive standalone power moderates the preceding negative assemblies, but the
complete G1 remains negative at −156.978220 mm. In the assembled system, L6 also forms the image-side boundary of the
variable D12 air gap, so its rear surface participates directly in the focus-group separation.

### D2 — Cemented L7/L8 Pair

L7: `nd = 1.48749`, `νd = 70.2`. Glass: `487702 — fluor-crown class (vendor unresolved)`. Standalone
`f = +46.878320 mm`.

L8: `nd = 1.84666`, `νd = 23.8`. Glass: `847238 — special dense-flint class (vendor unresolved)`. Standalone
`f = −135.995313 mm`.

The pair is cemented at surface 14 and has a positive net standalone equivalent focal length of +70.303602 mm. The large
Abbe-number separation is consistent with an achromatizing pair, but the data do not establish anomalous partial
dispersion or apochromatic correction. D2 forms the front portion of the moving positive group and precedes the internal
diaphragm.

### L9 — Post-Stop Negative Meniscus

`nd = 1.84666`, `νd = 23.8`. Glass: `847238 — special dense-flint class (vendor unresolved)`. Standalone
`f = −110.619878 mm`.

L9 lies behind the diaphragm within G2. Its negative power offsets part of the stronger positive action of D2 and L10.
Because its two surfaces are close to the stop in pupil space, the element is well placed to influence oblique-ray bending;
the exact division of coma and astigmatism correction is an interpretation of the layout rather than an explicit patent
statement.

### L10 — Final Biconvex Positive Element with Rear Asphere

`nd = 1.58636`, `νd = 60.9`. Glass: `Unmatched (barium-crown vicinity; no exact public-catalog match)`.
Standalone `f = +108.520463 mm`.

L10 provides the final positive contribution and carries aspherical image-side surface 19A. Its position immediately
before the long image-space distance makes the rear asphere geometrically well placed to influence field-dependent
residuals. That correction role is a layout-based interpretation; the patent does not assign a specific aberration to L10.
The glass label remains explicitly unmatched because current public catalogs provide only soft nearby candidates for the
stored `nd`/`νd` pair.

## Glass Identification and Selection

The patent gives d-line refractive index and Abbe number but no manufacturer glass names. The data therefore uses
vendor-neutral six-digit classes where multiple current catalogs contain exact or source-rounding-equivalent candidates,
and `Unmatched (...)` where no defensible public-glass identity exists.

| Element or medium | `nd` | `νd` | Data-file identification | Status |
|---|---:|---:|---|---|
| L1 | 1.77250 | 49.6 | 773496 — lanthanum-flint class | Vendor unresolved |
| L2g | 1.72916 | 54.7 | 729547 — lanthanum-crown class | Vendor unresolved |
| L2r | 1.52700 | 43.7 | Synthetic resin | Not an optical-glass catalog identity |
| L3 | 1.75520 | 27.5 | 755275 — dense-flint class | Vendor unresolved |
| L4 | 1.51742 | 52.4 | 517524 — crown-flint class | Vendor unresolved |
| L5 | 1.80400 | 46.6 | 804466 — lanthanum-flint class | Vendor unresolved |
| L6 | 1.51823 | 59.0 | 518590 — crown class | Vendor unresolved |
| L7 | 1.48749 | 70.2 | 487702 — fluor-crown class | Vendor unresolved |
| L8 and L9 | 1.84666 | 23.8 | 847238 — special dense-flint class | Vendor unresolved |
| L10 | 1.58636 | 60.9 | Unmatched barium-crown vicinity | No exact public-catalog match |

No element carries authored `nC`, `nF`, `ng`, or `dPgF`. Consequently, the prescription supports d-line paraxial and
Abbe-based chromatic modeling but not a claim of apochromatic correction, anomalous partial dispersion, or exact
secondary-spectrum behavior.

## Focus Mechanism

The patent publishes rear-focus states at infinity, `x = −1/40`, and `x = −1/5`. G1 remains fixed while G2, including the
diaphragm, moves 7.810 mm toward the object. The D12 reduction is balanced by an increase in the final image-space gap,
keeping the total surface-1-to-image track at 158.998 mm at the modeled endpoints.

| Focus state | D12 | Image-space gap after 19A | Computed EFL | Computed signed magnification |
|---|---:|---:|---:|---:|
| Infinity | 11.274 mm | 57.800 mm | 36.000133 mm | 0 |
| `x = −1/40` | 10.321 mm | 58.753 mm | 36.112417 mm | −0.0249921 |
| `x = −1/5` | 3.464 mm | 65.610 mm | 36.941439 mm | −0.2000006 |

The intermediate image-space gap is the data file's linear interpolation between the two published endpoints. It is
58.753 mm, 0.003 mm above the patent's rounded 58.750 mm row. This is a disclosed interpolation result, not a patent
correction or an independently invented focus state.

At the minimum state, the solved object plane lies 177.054302 mm in front of surface 1 and 336.052302 mm from the image
plane. The data file therefore uses `closeFocusM = 0.336052`. Ricoh's marketed 0.3 m closest focus and 0.25× reproduction
remain product specifications and are not imposed on this 0.200× patent endpoint.

## Aspherical Surfaces

The patent uses the same standard conic convention as the data file:

$$
Z(h)=\frac{C h^2}{1+\sqrt{1-(1+K)C^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10},\qquad C=1/R.
$$

No conic conversion is required. No dimensional scaling was applied, so the radii and polynomial coefficients remain the
raw Embodiment 4 values.

| Surface | Physical location | `K` | `A4` (mm⁻³) | `A6` (mm⁻⁵) | `A8` (mm⁻⁷) | `A10` (mm⁻⁹) |
|---|---|---:|---:|---:|---:|---:|
| 5A | Rear surface of the bonded resin layer on L2 | +1.00 | +3.060×10⁻⁶ | +2.868×10⁻⁹ | +1.268×10⁻¹¹ | +4.817×10⁻¹⁶ |
| 19A | Image-side surface of L10 | 0.00 | +7.658×10⁻⁶ | +9.964×10⁻⁹ | +2.314×10⁻¹¹ | 0 |

The patent publishes no clear semi-diameters and no physical stop diameter. The data file therefore uses
Figure-13-proportioned semi-diameters constrained by exact meridional ray containment and geometry checks, and a stop
semi-diameter of 10.119123 mm inferred from the infinity f/3.6 state. At the validated semi-diameters, the aspheric
departure from the same-radius spherical base is 1.588445 mm at 5A (`h = 13.4 mm`) and 0.109855 mm at 19A
(`h = 10.5 mm`). Surface 5A also remains inside its `K = +1` real-sag domain and the current rim-slope limit.

## Conditional Expressions

The patent defines five conditions for the group dimensions, group powers, and the first cemented interface. Independent
calculation from the final data object gives:

| Condition | Required interval | Computed | Patent Table 5 |
|---|---:|---:|---:|
| `TL2/f` | 0.5 to 1.0 | 0.935413 | 0.935 |
| `f1/f2` | −4 to −2 | −2.233267 | −2.233 |
| `f1/f` | −6 to −3 | −4.360490 | −4.360 |
| `TL1/TL2` | 1.3 to 2.8 | 1.670349 | 1.670 |
| `(n1−n2)f/Rc` | 0.2 to 1.0 | 0.426125 | 0.426 |

All five values lie inside their specified intervals. Here `f1` and `f2` are the standalone equivalent focal lengths of
G1 and G2, while the last expression uses the index step and radius at the L4/L5 cemented surface.

## Verification Summary

The final TypeScript object was independently evaluated with sequential height/reduced-angle tracing and an ABCD matrix
check. The infinity matrix gives EFL 36.000133351 mm, BFL 57.800198 mm, and determinant 1.000000000. The front principal
plane lies 45.754683 mm imageward of surface 1, and the rear principal plane lies 21.800065 mm imageward of surface 19A.
The surface-by-surface Petzval sum, using `φ/(n·n′)`, is +0.001580563851 mm⁻¹. The ratios `BFD/EFL = 1.60556` and
`TL/EFL = 4.41659` verify a retrofocus system and exclude a telephoto classification under the `TL/EFL < 1` criterion.

The inferred semi-diameters pass the applicable geometry checks in every authored focus state. The Figure 13 revision
restores the pronounced large-front-group taper while retaining the existing rendered-ray reach; surface 5A is capped
by its conic-domain and rim-slope limits rather than extended to the full adjacent substrate height. The repository
validator and render diagnostics report no edge-thickness, cross-gap, conic, or hidden-trim failures. These are
model-validation results, not patent dimensions.

## Sources

- Takayuki Sensui, [US 2001/0007512 A1, *Wide-Angle Lens System*](https://patents.google.com/patent/US20010007512A1/en),
  especially ¶¶0004–0021, 0040–0068, 0076–0081, Figure 13, and Tables 4–5.
- Ricoh Imaging, [HD PENTAX-D FA645 35mmF3.5AL[IF] product page](https://www.ricoh-imaging.co.jp/english/products/lens/645/wide/hdpentax-dfa645-35/).
- Ricoh Imaging, [2015 launch announcement](https://news.ricoh-imaging.co.jp/rim_info2/2015/20151112_019254.html).
- Ricoh Imaging, [smc PENTAX-FA645 35mmF3.5AL[IF] product page](https://www.ricoh-imaging.co.jp/english/products/lens/645/wide/smcpentax-fa645-35/).
- Manufacturer glass catalogs and cross-reference data from
  [OHARA](https://www.ohara-inc.co.jp/en/product/catalog/),
  [HOYA](https://www.hoya-opticalworld.com/english/),
  [SCHOTT](https://www.schott.com/en-us/products/optical-glass-p1000267/downloads),
  [HIKARI](https://www.hikari-g.co.jp/optical_glass/),
  [CDGM](https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods), and
  [SUMITA](https://www.sumita-opt.co.jp/en/download/).
