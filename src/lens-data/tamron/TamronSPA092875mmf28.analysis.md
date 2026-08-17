## Patent Reference and Design Identification

**Patent:** US 7,075,731 B1  
**Application Number:** 11/094,194  
**Filed:** March 31, 2005  
**Granted:** July 11, 2006  
**Inventor:** Yasuharu Yamada  
**Assignee:** Tamron Co., Ltd.  
**Title:** Large Aperture Zoom Lens  
**Embodiment analyzed:** Exemplary large aperture zoom lens (job-card Example 1)

The prescription represented here is the exemplary numerical design in US 7,075,731 B1. The patent gives three zoom stations at 28.87, 49.98, and 72.65 mm, each at F/2.91, and describes a four-group positive-negative-positive-positive zoom with focusing performed by the second group [1]. The LensVisualizer entry treats this prescription as the fixed production correlation for the TAMRON SP AF 28-75mm f/2.8 XR Di LD Aspherical [IF] MACRO, Model A09.

The production correlation is supported by several convergent features rather than by an explicit manufacturer statement linking the patent number to Model A09:

1. The patent design spans 28.87-72.65 mm at F/2.91, closely corresponding to the marketed 28-75 mm f/2.8 range.
2. The modeled prescription contains 16 physical lens bodies in 14 air-separated assemblies, matching Tamron's published 16-element/14-group specification. Four additional 0.2 mm optical media are modeled as thin hybrid aspheric layers and are not counted as separate physical production elements.
3. The patent uses four aspherical surfaces and a four-group + / - / + / + zoom architecture, with the negative second group serving as the focus group.
4. Tamron publishes a 0.33 m minimum focus distance throughout the zoom range and 1:3.9 maximum magnification at 75 mm. The constrained G2-only focus reconstruction reaches 1:3.923 at the 72.65 mm design station.
5. The patent's compactness discussion uses a 67 mm front filter diameter, the same filter size Tamron publishes for the A09.

Tamron dates Model A09 to 2003 [2][3], while the US patent was filed in 2005 [1]. Filing chronology therefore is not independent evidence for the correlation; the identification rests on the numerical and structural agreement above.

The patent is the numerical authority for the optical design. Tamron's product data supply only production identity and marketed specifications [2]. Accordingly, the data file keeps marketed 28-75 mm and f/2.8 separate from the design values 28.87-72.65 mm and F/2.91. No uniform scale is applied: the model uses `s = 1.0`, so radii, spacings, image-plane coordinates, and aspheric coefficients remain at the patent design scale.

Three patent-table errors are corrected in the modeled prescription and are not treated as silent transcription changes. Surface 8 prints `νd = 146.6`; the model uses 46.6, consistent with the same `nd = 1.80400` medium at surface 10. Surface 34 prints `νd = 141.2`; the model uses 41.2, consistent with the other `nd = 1.53610` thin layers. Most significantly, surface 30 prints `R = +40.8554 mm`; independent paraxial tracing shows that the positive sign produces whole-system focal lengths of only 10.980, 15.909, and 21.073 mm, whereas `R = -40.8554 mm` reproduces the published zoom focal lengths. The negative sign is therefore the modeled source correction.

No sensor-cover glass, optical filter plate, inactive dummy surface, flare cutter, or other non-prescription plate appears in the selected numerical design. None is added to the model, and no omitted plate requires an air-equivalent rear-spacing correction. Patent surface 17 is explicitly the aperture stop and is represented by the single `STO` surface.

## Optical Architecture

The design is a four-group standard zoom with positive, negative, positive, and positive group powers in object-to-image order. It is best described by that power sequence rather than by applying a global telephoto or retrofocus label. Under the project definitions, the full system is not telephoto at any of the three published stations, and the condition `BFD > EFL` is true at wide and mid but not at telephoto; consequently, “retrofocus” is not an appropriate label for the zoom as a whole.

Independent d-line paraxial calculation from the final data gives the following isolated group focal lengths. These values characterize each group as an air-isolated optical subsystem; they are not the same thing as the group's contribution after placement in the complete zoom.

| Functional group | Surfaces | Power sign | Isolated group EFL |
|---|---|---:|---:|
| G1 | 1-6 | positive | +96.5694 mm |
| G2 | 7A-16 | negative | -14.9233 mm |
| G3 | 18-25 | positive | +42.1977 mm |
| G4 | 26-35A | positive | +54.4650 mm |

G1 contains the large front elements and supplies a moderate positive net power. G2 is much stronger and negative; it provides both the principal variator action and the inner-focus motion. The aperture stop follows G2, with 0.8 mm of air to the first surface of G3. G3 and G4 are both positive relay groups, but their internal mixtures of positive, negative, high-Abbe, and hybrid-aspheric components distribute power rather than concentrating it in a single element.

The patent's three zoom-dependent inter-group gaps are reproduced directly:

| Gap | 28.87 mm | 49.98 mm | 72.65 mm | Wide-to-tele change |
|---|---:|---:|---:|---:|
| `d6`, G1-G2 | 2.694 mm | 16.985 mm | 27.814 mm | +25.120 mm |
| `d16`, G2-stop/G3 region | 9.782 mm | 3.828 mm | 0.985 mm | -8.797 mm |
| `d25`, G3-G4 | 6.786 mm | 2.409 mm | 0.997 mm | -5.789 mm |

With the image plane normalized to a fixed reference, all four functional groups move toward the object from wide to telephoto. The computed wide-to-tele group-front displacements are 32.650 mm for G1, 7.530 mm for G2, 16.327 mm for G3, and 22.116 mm for G4. There is no direction reversal among the three published stations.

The patent does not publish a final `d35` spacing. The data file therefore uses independently computed paraxial d-line back focal distances of 39.0948, 52.9411, and 61.2104 mm at the wide, mid, and telephoto states so that the modeled image plane remains at paraxial focus. These are computed modeling quantities, not patent table entries.

The physical stop location is source-defined, but its clear radius is not. The authored `STO.sd = 12.2 mm` is a model clear-aperture limit rather than a claim that the iris opening is fixed at that value. Paraxial pupil calculation shows that F/2.91 corresponds to physical stop semi-diameters of approximately 9.133, 10.875, and 11.998 mm at the three infinity zoom stations, all inside the modeled stop clear radius.

Surface semi-diameters are likewise not published. They are model geometry derived from the F/2.91 ray envelope, 135-format field sampling, the patent optical section, and the A09's published 67 mm filter and 73 mm maximum external diameter. The values therefore describe the LensVisualizer model, not measured production clear apertures.

## Element-by-Element Analysis

The focal length given on each element line below is the data file's independently verified **air-isolated material-segment focal length**. For hybrid and cemented assemblies, a separate assembly focal length is stated where useful. Neither quantity should be confused with in-situ behavior inside the complete zoom, where neighboring groups, stop location, and conjugate changes determine the actual ray geometry.

### L1 — Negative Meniscus

**nd = 1.84666, νd = 23.8. Glass: 847238 class (vendor unresolved). Standalone f = -119.9428 mm.**

L1 is the large front negative meniscus of G1. Its negative standalone power is embedded within a net-positive first group. This arrangement lets the front group collect a wide field without assigning all of the group power to a single strongly positive front element. The relatively high index and low Abbe number are source coordinates; no unique vendor glass is asserted from them.

### L2 — Biconvex Positive

**nd = 1.69680, νd = 55.5. Glass: 697555 class (vendor unresolved). Standalone f = +99.1412 mm.**

L2 supplies positive power behind L1. In the isolated G1 calculation, the three-element combination has substantially weaker net power than L2 alone, illustrating why standalone element focal lengths cannot be added arithmetically to describe group behavior.

### L3 — Positive Meniscus

**nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor unresolved). Standalone f = +118.1592 mm.**

L3 is the rear positive meniscus of G1. Together with L2 it overcomes the front negative element to leave G1 positive at +96.5694 mm isolated EFL. Its meniscus form also closes the front group with a comparatively weak rear surface before the strongly variable G1-G2 air gap.

### L4 / L4r — H1 Front Hybrid Negative Assembly

**L4r:** nd = 1.53610, νd = 41.2. Glass: Unmatched hybrid/aspheric layer. Standalone f = -337.6834 mm.  
**L4:** nd = 1.80400, νd = 46.6. Glass: 804466 class (vendor unresolved). Standalone f = -25.7688 mm.  
**H1 assembly:** computed air-isolated EFL = -23.9094 mm.

The physical fourth lens is represented by two optical media because the patent explicitly inserts a 0.2 mm `nd = 1.53610` layer at the aspheric front interface. The thin layer is therefore modeled as `L4r`, cemented to the `L4` glass body, rather than being replaced by a generic cement.

The assembly is strongly negative and occupies the front of G2. Surface 7A is the first asphere in the design. In the complete lens this hybrid negative unit begins the high-power negative focus/variator group, so its in-situ behavior depends strongly on the G1-G2 spacing and on G2's focus translation.

### L5 — Biconcave Negative

**nd = 1.80400, νd = 46.6. Glass: 804466 class (vendor unresolved). Standalone f = -32.8733 mm.**

L5 adds another substantial negative contribution within G2. It uses the same d-line coordinate class as the L4 glass body. The repeated coordinate does not establish that the physical melts are literally the same catalog glass; the patent supplies only `nd` and `νd`.

### L6 — Biconvex Positive

**nd = 1.80518, νd = 25.4. Glass: 805254 class (vendor unresolved). Standalone f = +29.3647 mm.**

L6 is a strong positive element placed inside an otherwise negative group. Its standalone power counterbalances part of the negative power of H1 and L5. The low Abbe number also gives it a markedly different dispersion coordinate from the adjacent negative components, but the data do not contain line indices or partial-dispersion data sufficient to make an anomalous-dispersion claim.

### L7 / L8 — D1 Cemented Pair

**L7:** nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor unresolved). Standalone f = -30.2555 mm.  
**L8:** nd = 1.80518, νd = 25.4. Glass: 805254 class (vendor unresolved). Standalone f = +90.5616 mm.  
**D1 assembly:** computed air-isolated EFL = -46.0459 mm.

D1 closes G2 as a cemented negative-positive pair. Although L8 by itself is positive, the cemented pair is net negative because the shared interface power and finite thickness matter. This is a direct example of the distinction between standalone segment power and cemented assembly power.

In situ, D1 is part of the translating G2 assembly rather than an independently moving corrector. The entire G2 group remains strongly negative at -14.9233 mm isolated EFL, and its displacement changes both zoom conjugates and close-focus conjugates.

### L9 — Positive Meniscus

**nd = 1.49700, νd = 81.6. Glass: 497816 class (vendor unresolved). Standalone f = +77.4149 mm.**

L9 is the first refracting element after the stop and begins G3. Its high Abbe number is consistent with the patent's use of low-dispersion material in the third group. That statement is limited to the source's dispersion class: the data do not identify a unique glass vendor or establish anomalous partial dispersion.

### L10 / L10r — H2 Front Hybrid Positive Assembly

**L10r:** nd = 1.53610, νd = 41.2. Glass: Unmatched hybrid/aspheric layer. Standalone f = +476.3562 mm.  
**L10:** nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor unresolved). Standalone f = +110.7335 mm.  
**H2 assembly:** computed air-isolated EFL = +89.9381 mm.

The second hybrid lens uses the same unmatched 0.2 mm layer coordinate as H1, but here the combined assembly is positive. Surface 20A is the aspheric outer face of the thin layer. The hybrid construction introduces a non-spherical correction surface without replacing the underlying high-Abbe positive glass body.

Within G3, H2 supplements L9's positive power while the following D2 pair is nearly neutral in isolated first-order power. G3 as a whole remains positive at +42.1977 mm isolated EFL.

### L11 / L12 — D2 Cemented Pair

**L11:** nd = 1.49700, νd = 81.6. Glass: 497816 class (vendor unresolved). Standalone f = +75.1589 mm.  
**L12:** nd = 1.84666, νd = 23.8. Glass: 847238 class (vendor unresolved). Standalone f = -78.4094 mm.  
**D2 assembly:** computed air-isolated EFL = +2189.3743 mm.

The D2 pair combines a high-Abbe positive meniscus with a high-index, low-Abbe negative meniscus. Their isolated powers are of similar magnitude and opposite sign, leaving the cemented pair only weakly positive in first order. That near cancellation permits substantial internal refracting power at the cemented interface without assigning much net paraxial power to the pair itself.

This should not be read as the pair being optically inactive. In the complete G3 group it still changes ray angles and dispersion balance; “nearly neutral” refers only to the calculated air-isolated paraxial EFL of the cemented pair.

### L13 — Positive Meniscus

**nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor unresolved). Standalone f = +127.1639 mm.**

L13 begins G4 with moderate positive power and a relatively high Abbe number. G4 moves as a zoom group, but it does not participate in the reconstructed internal focusing motion.

### L14 — Biconvex Positive

**nd = 1.49700, νd = 81.6. Glass: 497816 class (vendor unresolved). Standalone f = +43.0443 mm.**

L14 is the strongest positive standalone element in G4 before the two rear hybrid assemblies. Its high-Abbe coordinate again follows the patent's low-dispersion emphasis in the rear half of the lens, without implying a particular catalog melt or anomalous partial dispersion.

### L15 / L15r — H3 Rear-Aspheric Negative Assembly

**L15:** nd = 1.83400, νd = 37.2. Glass: 834372 class (vendor unresolved). Standalone f = -22.4668 mm.  
**L15r:** nd = 1.53610, νd = 41.2. Glass: Unmatched hybrid/aspheric layer. Standalone f = +615.4149 mm.  
**H3 assembly:** computed air-isolated EFL = -23.2847 mm.

H3 is a net-negative hybrid assembly placed inside the otherwise positive G4. Unlike H1 and H2, the thin aspheric layer is on the rear side of the glass body. Surface 32A is the aspheric exit surface.

The weak positive standalone power of the resin layer only slightly changes the strong negative power of the L15 glass body in first order. Its principal modeled distinction is therefore the aspheric rear interface rather than a large change in paraxial assembly power.

### L16 / L16r — H4 Rear-Aspheric Positive Assembly

**L16:** nd = 1.58144, νd = 40.8. Glass: 581408 class (vendor unresolved). Standalone f = +41.7643 mm.  
**L16r:** nd = 1.53610, νd = 41.2. Glass: Unmatched hybrid/aspheric layer. Standalone f = +401.5245 mm.  
**H4 assembly:** computed air-isolated EFL = +38.0958 mm.

The final physical lens is a positive glass body with a thin rear hybrid layer whose exit surface, 35A, is aspherical. H4 provides positive rear-group power after the negative H3 assembly. The alternation of positive L13/L14 power, negative H3 power, and positive H4 power leaves G4 net positive while retaining several surfaces for higher-order correction.

Surface 35A is followed by the modeled paraxial back focal distance rather than a patent-published final air gap. No sensor cover or filter plate is inserted between 35A and the image plane.

## Glass Identification and Selection

The patent identifies glasses only by d-line refractive index and Abbe number [1]. It does not name a vendor or catalog glass. A multi-vendor catalog audit found that most ordinary coordinates lie on families offered by several manufacturers, so a unique vendor assignment would be speculative. The data therefore use six-digit coordinate classes and reserve `Unmatched (...)` for the thin hybrid medium that has no defensible ordinary glass-catalog match.

| Data-file glass annotation | nd | νd | Modeled entries | Interpretation |
|---|---:|---:|---|---|
| 847238 class | 1.84666 | 23.8 | L1, L12 | high-index, low-Abbe coordinate class; vendor unresolved |
| 697555 class | 1.69680 | 55.5 | L2 | moderately high-index, mid/high-Abbe coordinate; vendor unresolved |
| 773496 class | 1.77250 | 49.6 | L3 | high-index, intermediate-Abbe coordinate; vendor unresolved |
| 804466 class | 1.80400 | 46.6 | L4, L5 | high-index coordinate class; source `νd` correction applied at surface 8 |
| 805254 class | 1.80518 | 25.4 | L6, L8 | high-index, low-Abbe coordinate class |
| 487702 class | 1.48749 | 70.2 | L7, L10, L13 | high-Abbe crown coordinate class |
| 497816 class | 1.49700 | 81.6 | L9, L11, L14 | very high-Abbe coordinate class; patent describes low-dispersion use |
| 834372 class | 1.83400 | 37.2 | L15 | high-index rear-group coordinate class |
| 581408 class | 1.58144 | 40.8 | L16 | moderate-index, moderate/low-Abbe rear-group coordinate class |
| Unmatched hybrid layer | 1.53610 | 41.2 | L4r, L10r, L15r, L16r | 0.2 mm aspheric laminate/resin-like medium; no defensible catalog-glass identity |

The manufacturer name includes “LD” [2], and the patent text explicitly discusses low-dispersion lenses in G3 and G4 [1]. The modeled prescription also contains several high-Abbe coordinates, most notably `nd = 1.49700, νd = 81.6`. These facts support describing the design as using low-dispersion material classes. They do **not** establish apochromatic correction or anomalous partial dispersion.

No element-specific `nC`, `nF`, `ng`, `PgF`, or `dPgF` values are published in the selected prescription, and no unique vendor Sellmeier identity is asserted in the data file. Chromatic interpretation is therefore limited to the published d-line `nd`/`νd` coordinates and the patent's qualitative material descriptions.

## Focus Mechanism

The patent states that focusing is performed by moving the negative second group G2 [1]. It does not provide close-focus variable-spacing rows. The close-focus states in the data file are therefore a **CONSTRAINED_RECONSTRUCTION**, not a transcription of a patent focus table.

The reconstruction imposes one optical degree of freedom: only G2 translates, the image plane stays fixed, and `d6 + d16` is conserved at each zoom station. The object distance is set to Tamron's published 0.33 m minimum focusing distance [2]. Under that constraint G2 moves toward the object as focus approaches the minimum distance.

| Design zoom station | G2 objectward shift | `d6` infinity → 0.33 m | `d16` infinity → 0.33 m | Computed magnification at 0.33 m |
|---|---:|---:|---:|---:|
| 28.87 mm | 1.8231 mm | 2.6940 → 0.8709 mm | 9.7820 → 11.6051 mm | 1:8.2817 |
| 49.98 mm | 2.6930 mm | 16.9850 → 14.2920 mm | 3.8280 → 6.5210 mm | 1:5.1465 |
| 72.65 mm | 3.7677 mm | 27.8140 → 24.0463 mm | 0.9850 → 4.7527 mm | 1:3.9234 |

At the telephoto design station, the reconstructed 1:3.923 magnification is close to Tamron's marketed 1:3.9 value at 75 mm and 0.33 m [2]. That agreement is a cross-check on the mechanism-constrained model; it does not convert the solved spacings into patent-published data.

The model assumes the manufacturer's 0.33 m minimum focusing distance is measured from the object plane to the fixed image/sensor plane, which is the conventional photographic reference. The A09 product page publishes the distance but does not define that reference plane explicitly, so this remains a disclosed modeling assumption.

## Aspherical Surfaces

The patent marks four aspherical surfaces, represented in the data as 7A, 20A, 32A, and 35A [1]. The first two are the object-side faces of thin hybrid layers on physical elements L4 and L10; the latter two are rear faces of thin hybrid layers on L15 and L16.

The patent uses

$$
X(H)=\frac{H^2/R}{1+\sqrt{1-(1+\epsilon)H^2/R^2}}
+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}.
$$

Because the conic term contains `1 + ε` under the square root, the LensVisualizer standard conic constant is directly `K = ε`; no `K = ε - 1` or similar conversion is required. The data file stores the patent's A4-A10 terms at source precision. Schema-required A12 and A14 entries are zero because the patent supplies no terms beyond A10.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 7A | -1.7698 | +1.51609e-5 | -2.40934e-9 | -3.81500e-11 | -3.90581e-13 |
| 20A | -0.3805 | -1.01321e-5 | +2.64212e-10 | -9.59136e-12 | -5.60310e-14 |
| 32A | -6.2476 | +2.39974e-5 | -2.88771e-8 | -1.11697e-10 | -1.02647e-12 |
| 35A | -12.8865 | +2.35429e-5 | -4.67954e-8 | -1.19880e-10 | -1.40158e-13 |

No asphere clear-aperture height is published by the patent. Departures can therefore be quoted only at the **authored model semi-diameters**, not as source apertures. At those verified model radii, the polynomial departure from the conic base is +0.180875 mm at 7A (`sd = 10.7 mm`), -0.487197 mm at 20A (`sd = 14.5 mm`), +0.299800 mm at 32A (`sd = 12.0 mm`), and +0.329425 mm at 35A (`sd = 13.0 mm`). The sign here indicates whether the polynomial terms add to or subtract from the conic-base sag at the modeled rim; it is not an assertion about a single aberration term.

No scaling is applied. With `s = 1.0`, the general scaling law `A_p,scaled = A_p,patent / s^(p-1)` leaves every coefficient unchanged, and `K` is unchanged by definition.

## Chromatic Correction Strategy and Limits

The design alternates high- and low-Abbe coordinates within the negative G2 group and places high-Abbe positive material prominently in G3 and G4. The cemented D1 and D2 pairs are especially clear examples of first-order power and dispersion being separated across different material coordinates: D1 combines `νd = 70.2` and `25.4`, while D2 combines `νd = 81.6` and `23.8`.

The patent's prose specifically calls for low-dispersion lenses in the third and fourth groups. In the data, the recurring `497816` and `487702` classes are the highest-Abbe ordinary media and occupy positive elements in those groups. The interpretation supported by the source is therefore that chromatic correction is distributed across several groups rather than confined to one cemented achromat.

The available data do not support a stronger spectral claim. Because the prescription has neither verified catalog Sellmeier assignments nor published `nC`, `nF`, `ng`, or `dPgF`, the LensVisualizer model should not be described as APO, superachromatic, or as using a proven anomalous-partial-dispersion strategy. Any wavelength-dependent simulation beyond ordinary Abbe approximation would require additional source data.

## Conditional Expressions

The patent gives a set of conditional expressions governing group power, zoom ratio, compactness, entrance-pupil position, second-group magnification, and first-group principal-plane geometry. Conditions (1)-(4) and (6)-(8) close directly from the corrected prescription. Conditions (5) and (9) additionally require a field definition that the patent does not tabulate numerically; the model evaluation below uses the data file's `135-full-frame` field, whose 21.6333 mm half-diagonal corresponds to a 36.8437° paraxial half-field at the computed wide-angle EFL.

| Condition | Patent value | Independent value | Result |
|---|---:|---:|---|
| (1) `|f2| / fT` | 0.205 | 0.205404 | within 0.18-0.24 |
| (2) `f1 / fT` | 1.329 | 1.329184 | within 1.1-1.5 |
| (3) `f4 / fT` | 0.750 | 0.749658 | within 0.6-0.9 |
| (4) `Z2 / Z` | 0.621 | 0.621255 | satisfies both printed ranges |
| (5) compactness expression | 3.124 | 3.12450 | within 2.7-3.3; 135-format model field |
| (6) `DWENP` | 30.11 mm | 30.1133 mm | `< 31 mm` |
| (7) `|β2W|` | 0.214 | 0.214069 | within 0.15-0.30 |
| (8) `e0` | 4.139 mm | 4.13850 mm | `< 5 mm` |
| (9) front-beam-height expression | 27.69 mm | 27.524 mm | `< 28 mm`; 135-format model field |

Condition (4) exposes a textual inconsistency in the patent rather than a prescription failure. Claim 1 gives a broad range of 0.57-0.9, while the descriptive language and claim 15 give approximately 0.57-0.67. The computed Example-1 value, 0.621255, satisfies both.

The 135-format model field nearly reproduces the patent's evaluated condition-(5) value without using the rounded 37.6° aberration-plot angle. Condition (9) also remains within its claimed limit but differs from the patent's evaluated 27.69 mm by about 0.17 mm. The source does not separately tabulate the exact paraxial `αW` and open-stop input used for that evaluation, so 27.524 mm is treated as a model-context check rather than an exact reconstruction of the patent's internal calculation.

## Verification Summary

Sequential height/reduced-angle tracing and an independently composed ABCD matrix give the same first-order system at all three zoom stations. From the final TypeScript arrays, the d-line effective focal lengths are 28.871898, 49.982729, and 72.653123 mm, matching the patent's 28.87, 49.98, and 72.65 mm values to well below 0.01 mm.

| State | Computed EFL | Computed BFD | Surface-1 to paraxial image track |
|---|---:|---:|---:|
| Wide | 28.871898 mm | 39.094763 mm | 134.919363 mm |
| Mid | 49.982729 mm | 52.941111 mm | 152.725711 mm |
| Tele | 72.653123 mm | 61.210424 mm | 167.569024 mm |

The BFD and full paraxial track values are calculations, not separately published patent spacings. Their reference planes are the vertex of 35A to the paraxial d-line image plane for BFD, and surface 1 to that image plane for track.

The surface-by-surface Petzval sum, computed as `φ / (n n′)`, is +0.001919616485 mm⁻¹, corresponding to a reciprocal magnitude of about 520.94 mm. This is a paraxial field-curvature quantity and is not a measured production-lens value.

The corrected surface-30 radius is load-bearing. Reinstating the patent's printed `+40.8554 mm` sign collapses the computed focal lengths to approximately 10.980, 15.909, and 21.073 mm. Using `-40.8554 mm` restores all three published focal lengths and the patent's fourth-group power condition. The correction is therefore retained as a documented source-sign error.

The inferred geometry also remains within the current project limits in all six authored infinity/close zoom endpoint states. The smallest modeled edge thickness is 0.03628 mm in the thin H3 layer, the maximum actual rim-slope angle is 41.69°, and the largest shared-band cross-gap intrusion ratio is 0.8671 against the 0.90 model limit. Using the default `offAxisFieldFrac = 0.60` as a fraction of the paraxial half-field angle, the worst sampled off-axis ray reaches 0.98302 of the authored semi-diameter at surface 32A in the telephoto infinity state. These checks validate the chosen LensVisualizer clear apertures; they do not convert those apertures into patent or production measurements.

## Sources and References

1. Yasuharu Yamada, **“Large Aperture Zoom Lens,”** US 7,075,731 B1, assigned to Tamron Co., Ltd., filed March 31, 2005, granted July 11, 2006. Numerical prescription and asphere coefficients: patent cols. 7-8; evaluated conditions and claims: cols. 9-10. `https://patents.google.com/patent/US7075731B1/en`
2. Tamron Co., Ltd., **SP AF 28-75mm F/2.8 XR Di LD Aspherical [IF] MACRO, Model A09**, official product data. The page publishes 28-75 mm, F/2.8, 14 groups/16 elements, seven diaphragm blades, 0.33 m MFD throughout the zoom range, 1:3.9 maximum magnification at 75 mm, 67 mm filter diameter, Canon/Nikon/Sony/Pentax variants, and 2003 release timing. `https://www.tamron.com/jp/consumer/lenses/data/af-lens/a09.html`
3. Tamron Co., Ltd., **Lens History**, official brand history, listing Model A09 in 2003. `https://www.tamron.com/global/consumer/brandsite/history/`
4. OHARA INC., **Optical Glass Catalog Download**, official S-/L-/special optical-glass data used for coordinate cross-checking. `https://www.ohara-inc.co.jp/en/product/catalog/`
5. HOYA Corporation, Optics Division, **Data Download**, official optical-glass catalog data used for coordinate cross-checking. `https://www.hoya-opticalworld.com/english/datadownload/index.html`
6. SCHOTT, **Downloads for Optical Glass**, including the Optical Glass Datasheet Collection and glass-type overview. `https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads`
7. HIKARI GLASS CO., LTD., **Optical Glass Catalog Download**, official HIKARI catalog data used for coordinate cross-checking. `https://www.hikari-g.co.jp/optical_glass/catalog/`
8. CDGM, **Colourless Optical Glass**, official product/catalog material used in the Stage-1 coordinate audit. `https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods`
9. SUMITA OPTICAL GLASS, Inc., **Optical Glass Data Book / Downloads**, official catalog data used for coordinate cross-checking. `https://www.sumita-opt.co.jp/en/download/`
