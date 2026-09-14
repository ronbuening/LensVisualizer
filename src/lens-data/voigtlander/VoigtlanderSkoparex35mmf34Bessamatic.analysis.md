# VOIGTLÄNDER SKOPAREX 35mm f/3.4 (Bessamatic)

## Patent Reference and Design Identification

**Patent:** US 2,927,506\
**Filed:** September 9, 1957\
**Priority:** Germany, September 12, 1956\
**Granted:** March 8, 1960\
**Inventor:** Fritz Determann\
**Assignee:** Voigtländer A.G.\
**Title:** *Photographic Objective*\
**Embodiment analyzed:** Example 1 / Figure 2

The prescription is the Example 1 objective of US 2,927,506, uniformly scaled from the patent's normalized
`f = 1.0000` table to a 35 mm nominal focal length. The patent gives Example 1 as 1:3.4 and describes the design as a
wide-angle, long-back-focus development of an enlarged triplet type. The resulting data model has six glass elements in
five air-separated groups and remains entirely spherical.

The selected production correlation is the Voigtländer Skoparex 35mm f/3.4 for the Bessamatic system. That correlation
rests on convergent rather than manufacturer-explicit evidence:

1. the product and Example 1 share an f/3.4 maximum aperture and six-element construction;
2. scaling the normalized patent prescription by 35 produces a computed Gaussian EFL of 35.001633 mm, while the product
   is marketed as 35 mm;
3. on the Bessamatic's 24×36 mm format, the computed EFL corresponds to a paraxial full diagonal field of about 63.44°,
   consistent with the rounded 63° product specification; and
4. the 1956 German priority and 1960 US grant are contemporaneous with the Bessamatic system and its Skoparex wide-angle
   lens.

The correlation is therefore treated as the fixed project identification, not as a claim that Voigtländer explicitly
published Example 1 as the production prescription. Marketed quantities remain separate from design quantities: the product
is identified as 35 mm f/3.4, while the scaled prescription computes to 35.001633 mm EFL. The manufacturer literature's
39-inch minimum focusing distance is likewise product metadata, not a patent focus state.

## Optical Architecture

The design is an all-spherical retrofocus wide-angle objective in the patent's extended-triplet family. Group I is the
large front negative meniscus L1. Group II begins after the long front air space and consists of the inserted positive
meniscus L2, the strong positive L3 and negative L4 pair, and the cemented rear L5+L6 doublet. The aperture stop lies in
the air space between L4 and the rear doublet.

This architecture separates the back-focus requirement from the main positive power. The front negative member pushes
the principal structure rearward while the subsequent converging system restores the total positive power. From the
final data arrays, BFD/EFL is 1.049229, so the project criterion `BFD > EFL` classifies the objective as retrofocus. The
first-surface-to-image track is 70.730382 mm, or 2.020774 times EFL; it therefore does not meet the project's telephoto
criterion `TL/EFL < 1`.

The patent's numerical prescription is normalized to `f = 1`; every dimensional prescription value is scaled by
`s = 35`. There are no aspherical surfaces, so no conic or polynomial coefficient transformation is required. The model
contains no sensor cover glass, filter, inactive dummy or flare-cutter plane, or mechanical surface.

The patent specifies only the total R8-to-R9 diaphragm space, not a numeric stop coordinate. Figure 2 places the iris
close to R9, and the data model adopts an inferred 79%/21% split of that air space. The stop semi-diameter is then solved
from the scaled prescription so that the modeled infinity f-number is 3.4. Surface semi-diameters are also modeling
inferences: the patent publishes none. They are sized from wide-open ray envelopes and independently checked with an exact chief-ray solve to the 24×36 mm
diagonal image edge rather than only a paraxial field-angle estimate.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.50137, νd = 56.5. Glass: 501565 — K10-class crown (vendor not established by patent). f = −71.475888 mm.**

L1 is the isolated diverging front member identified as member I in the patent. Both of its surfaces curve toward the
rear system in the patent's description, producing the negative meniscus used to obtain the long back focus required by
an SLR-type camera. Its large diameter and large separation from L2 are architectural rather than incidental: the
patent explicitly treats the front member and its spacing to the converging system as defining features of the design.

### L2 — Positive Meniscus

**nd = 1.664466, νd = 35.9. Glass: 664359 — BASF2-class dense barium flint (vendor not established by patent). f = +68.534730 mm.**

L2 is the additional positive lens inserted ahead of the patent's triplet variation. The patent states that this added
converging member contributes to reducing zonal aberrations of the aperture defects. In Example 1 it is a strongly bent
positive meniscus rather than a weak collector, but its standalone focal length remains much longer than that of the
strong central positive L3.

### L3 — Biconvex Positive

**nd = 1.62374, νd = 47.0. Glass: 624470 — BAF8-class barium flint (vendor not established by patent). f = +23.421841 mm.**

L3 is the strongly refractive positive element immediately ahead of L4. Its rear surface and the front surface of L4
form the patent's characteristic vicinal pair, R6/R7, whose summed and differential surface powers are constrained by
the principal conditions of the invention. L3 is also deliberately thick: its scaled center thickness of 3.72365 mm is
0.10639 times the 35 mm scale, inside the patent's stated advantageous range of 0.10–0.25 of the equivalent focal
length.

### L4 — Biconcave Negative

**nd = 1.60717, νd = 40.2. Glass: 607402 — BASF3-class dense barium flint (vendor not established by patent). f = −14.490711 mm.**

L4 is the negative member paired with L3 across R6/R7. The patent makes the power distribution across these adjacent
surfaces central to its attempt to reduce residual astigmatic and comatic error in the outer field without resorting to
extreme surface curvatures. The stop follows L4, so this strongly negative element also sits at the transition between
the front correction structure and the rear cemented member.

### L5 — Negative Meniscus, Front Component of D1

**nd = 1.61659, νd = 36.6. Glass: 617366 — F4/PBM4-class flint (vendor not established by patent). f = −18.973899 mm.**

L5 is negative when treated as a standalone thick element in air. It is not, however, an air-spaced negative group in
the complete objective: its rear surface is cemented directly to L6. The patent prints this physical junction as two
coincident equal-radius bookkeeping rows, R10 and R11, with zero intervening distance. The data model correctly collapses
those rows to one L5→L6 interface owned by downstream element L6.

### L6 — Biconvex Positive, Rear Component of D1

**nd = 1.69100, νd = 54.8. Glass: 691548 — LAK9-class lanthanum crown (vendor not established by patent). f = +11.451038 mm.**

L6 is the strong positive rear component of the cemented doublet. The standalone L5 and L6 focal lengths describe each
element in isolation; they must not be mistaken for the power of the cemented pair. Traced as the physical L5+L6
cemented group, D1 is net positive, and its behavior in the complete objective is further modified by the preceding
air-spaced groups. The patent specifically notes the usefulness of a rear cemented surface convex toward the diaphragm
for controlling aperture defects.

## Glass Identification and Selection

The patent supplies d-line refractive indices and νd values but no manufacturer or glass names. The data file therefore
uses six-digit optical-coordinate codes and conservative class labels rather than assigning a modern catalog melt to a
1950s Voigtländer prescription.

| Element | nd | νd | Data-file glass annotation |
|---|---:|---:|---|
| L1 | 1.50137 | 56.5 | 501565 — K10-class crown |
| L2 | 1.664466 | 35.9 | 664359 — BASF2-class dense barium flint |
| L3 | 1.62374 | 47.0 | 624470 — BAF8-class barium flint |
| L4 | 1.60717 | 40.2 | 607402 — BASF3-class dense barium flint |
| L5 | 1.61659 | 36.6 | 617366 — F4/PBM4-class flint |
| L6 | 1.69100 | 54.8 | 691548 — LAK9-class lanthanum crown |

A fresh catalog audit supports the class annotations without establishing the historical supplier. SCHOTT K10 is an
`nd = 1.50137` crown with `νd = 56.41`, close to L1's patent value of 56.5. SUMITA's current all-glass archive includes
legacy BASF2 (`1.664460/35.9`), K-BaF8 (`1.62374/47.1`), BASF3 (`1.60717/40.2`), F4 (`1.61659/36.6`), and K-LaK9
(`1.69100/54.8`), providing exact or source-precision-near coordinate matches for L2–L6. These catalog comparisons
establish class compatibility, not the melt actually supplied to Voigtländer. The data therefore retains the patent's
`nd`/`νd` values as the optical authority and leaves vendor identity unresolved.

No `nC`, `nF`, `ng`, `PgF`, or `dPgF` values are published for Example 1, and the data file carries none. The design
therefore does not support an apochromatic or anomalous-partial-dispersion claim from the available evidence.

## Focus Mechanism

The patent publishes only the infinity prescription for Example 1. It gives no finite-object spacing table, magnification
state, moving-group definition, or internal focus kinematics. The data file therefore uses
`NO_INTERNAL_RECONSTRUCTION`: `var` and `varLabels` are empty, and no lens group is made to move in the visualization.

Archival product literature gives the Skoparex focusing range as infinity to 39 inches (0.9906 m). That value is retained
as `closeFocusM` product metadata only. It is not sufficient to determine whether the patent prescription should be
modeled as unit focus or with some internal movement, so no close-focus optical state is inferred from it.

## Aberration-Correction Strategy

The patent's stated problem is the persistence of sagittal/meridional image-shell separation and higher-order coma in
wide-angle, long-back-focus objectives after spherical and central field-curvature correction. Its solution is not a
single special glass or asphere, but a controlled distribution of refractive power and bending in the front portion of
the converging system.

The key pair is R6/R7, the rear surface of L3 and front surface of L4. The patent constrains both the sum and difference
of their surface powers relative to total system power. It then relates that pair to the power of L2 and separately
constrains the bending distribution of L1 through L4. In Example 1 these conditions are satisfied without any aspherical
surface. The resulting correction strategy is therefore chiefly one of spherical-surface bending, air-space selection,
and glass-power distribution.

## Conditional Expressions

Using the final scaled data arrays and normalizing surface powers back to the patent's `Φ = 1` convention, the five
worked-example conditions evaluate as follows:

| Patent condition | Final value | Required interval | Result |
|---|---:|---:|---|
| `|φ6 + φ7|` | 0.521364 | 0.25–0.75 | Pass |
| `|φ6 − φ7|` | 0.734208 | 0.5–1.5 | Pass |
| `|φ6 + φ7| / |φ3 + φ4|` | 1.076765 | 0.25–1.25 | Pass |
| `D1 / a1` | 6.700507 | 4–9 | Pass |
| curvature-distribution ratio | 2.674071 | 1–3 | Pass |

The same final prescription also satisfies the patent's broader architectural constraints: the L1-to-L2 separation is
0.46976 of the normalized focal length, L3 center thickness is 0.10639, and the computed long back focus lies within the
patent's 0.85–1.25 EFL range.

## Verification Summary and Modeling Disclosures

Independent height/reduced-angle tracing and a separately assembled ABCD matrix agree to machine precision for the
final data arrays. They give EFL 35.001633 mm and BFL 36.724732 mm from the last refracting vertex. The patent's printed
`s′0 = 1.0493 f` corresponds to 36.7255 mm after scaling; the data uses the recomputed 36.724732 mm image-plane spacing
rather than forcing the rounded header value.

The modeled stop is an explicit inference. Figure 2 supplies only qualitative placement within the R8-to-R9 air gap, so
the file uses a 79%/21% split and a solved stop semi-diameter of 5.216405 mm. That model yields an infinity f-number of
3.4 and an entrance-pupil semi-diameter of 5.147299 mm. Neither stop coordinate nor aperture diameter is claimed as a
patent-published dimension.

The semi-diameters are likewise inferred rather than transcribed. Independent exact-ray verification solves the off-axis chief ray that actually lands at the 24×36 mm diagonal image
height of 21.6333 mm; this occurs at a 32.6438° half-field for the authored stop model. Wide-open stop-edge bundles at that field remain inside every non-stop surface. The smallest remaining
semi-diameter clearance is about 0.286 mm at surface 10. These dimensions should therefore be read as a validated
visualization model, not as factory mechanical diameters.

Petzval curvature was recomputed surface by surface as `φ/(n·n′)`, using one physical L5→L6 cemented interface. The sum
is +0.00517935 mm⁻¹, corresponding to a curvature-radius magnitude of about 193.07 mm. This scalar paraxial result is a
computed property of the transcribed prescription; it is not a patent table entry.

One internal inconsistency in the patent is deliberately not silently corrected. The Example 1 table's printed auxiliary
surface powers for R3 and R4 differ slightly from values recomputed from the same rows' radii and refractive indices. The
patent's later condition arithmetic agrees with the radius/index-derived powers. The data file therefore preserves the
published R, d, nd, and νd prescription and recomputes optical power from those quantities rather than altering a radius
or index to reproduce the two printed auxiliary powers.

No omitted plate or dummy surface requires an air-equivalent correction. The only source normalization is the physical
collapse of the coincident R10/R11 zero-gap bookkeeping pair into the single direct cemented interface. No finite-focus
state is reconstructed, and no asphere scaling is applicable because Example 1 is all-spherical.

## Design Heritage and Context

US 2,927,506 identifies itself as a further development of the wide-angle, long-back-focus objective disclosed in US
2,746,351. The later Determann design retains the separated negative front member and converging rear system but focuses
its claims on the power distribution around the L3/L4 vicinal surfaces and on related bending conditions. In this sense,
Example 1 is best understood as a refinement of the early retrofocus/extended-triplet approach rather than as a
conventional symmetric wide-angle form.

## Sources and References

- Fritz Determann, **US 2,927,506**, *Photographic Objective*, filed September 9, 1957; German priority September 12,
  1956; granted March 8, 1960. Example 1 and Figure 2 are the prescription source.
- Archival Voigtländer sales literature, **35mm SKOPAREX W. A. LENS**, preserved by Pacific Rim Camera:
  https://www.pacificrimcamera.com/rl/01120/01120.pdf
- Voigtländer, **Reflex Camera Lenses & Accessories**, May 15, 1965, preserved by Pacific Rim Camera; the Skoparex
  listing gives 35 mm f/3.4, 63°, six elements, and focusing from infinity to 39 inches:
  https://www.pacificrimcamera.com/rl/01002/01002.pdf
- Voigtländer **Bessamatic** instruction book, supporting the 24×36 mm format and quick-change bayonet system:
  https://www.pacificrimcamera.com/rl/01553/01553.pdf
- SCHOTT K10 datasheet and SUMITA Optical Glass Data / all-glass Zemax archive were used for the fresh glass-class
  coordinate audit. The patent does not identify a supplier, so no historical vendor is assigned.
## Integration audit — 2026-09-11 UTC

US 2,927,506, Fig. 2, PDF p2 (600 dpi). Axial arrows and crop edges contaminate automatic scale extraction, but direct comparison with the local SVG establishes common horizontal rims for the smaller members. S3/S4 now share 9.5 mm, S5/S6 8.6 mm, S7/S8 6.9/6.6 mm, and S9/S10/S12 8 mm. The L4 rear rim is limited to 6.6 mm to avoid the renderer’s stop-adjacent gap trim. The large front meniscus retains its beveled outline and ray-cleared apertures. L1–L6 and D1 labels agree with the prescription. No internal focus travel is published or enabled. L4 resolves through the compatible BAFD3 curve while preserving its patent coordinates.

Surface validation and image-circle audits passed. Display names were checked against the shared all-caps maker/line, separated system-token, and aperture conventions; the existing titles already conform. Patent optical coordinates and inferred-focus qualifications were preserved.
