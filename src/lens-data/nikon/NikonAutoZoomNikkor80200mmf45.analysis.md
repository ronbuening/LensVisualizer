# NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5

## Patent Reference and Design Identification

**Patent:** US 3,615,125, *Compact Telephoto Type Zoom Lens*
**Filed:** June 26, 1968
**Priority:** July 4, 1967, Japanese application 42/42,564
**Granted:** October 26, 1971
**Inventors:** Takashi Higuchi; Soichi Nakamura
**Assignee:** Nippon Kogaku K.K.
**Embodiment analyzed:** Example 1
**Design correlation used:** NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5

The prescription is the first numerical example of US 3,615,125. It specifies an 80.0-200.3 mm, f/4.5 zoom with a 195.31 mm total track, 15 elements, and the positive-negative-positive zooming section followed by a two-part relay shown in Figure 1.[1] The project treats this example as the fixed production correlation for the 1970 NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5.

The correlation rests on convergent evidence rather than an explicit manufacturer statement naming the patent:

1. Nikon identifies the 1970 ZOOM-NIKKOR Auto 80-200mm f/4.5 as a Soichi Nakamura design and describes it as an afocal-zoom type.[2]
2. The patent names Nakamura together with Takashi Higuchi, is assigned to Nippon Kogaku K.K., and predates the production lens.
3. Example 1 has the same marketed aperture and essentially the same focal range: 80.0-200.3 mm in the patent versus 80-200 mm in product naming.
4. The patent's Figure 1 and Example 1 define the same five functional sections represented in the data file: fixed positive first group, negative variator, positive compensator, relay front, and relay rear.
5. Nikon's historical account places the lens in 1970, while the patent was filed in 1968 and granted in 1971, a timing sequence consistent with a pre-production design filing.[2]

The data file keeps marketing and design quantities separate. The marketed range is 80-200 mm, while independent paraxial tracing of the normalized prescription gives 80.009-200.341 mm at the endpoints. No uniform scale factor was applied.

## Optical Architecture

Example 1 is an all-spherical, ordinary sequential refractive zoom containing 15 elements in 10 air-separated groups. Its five functional sections are:

- **G1, fixed positive front group:** L1 followed by cemented pair L2-L3.
- **G2, negative variator:** cemented pair L4-L5 followed by negative singlet L6.
- **G3, positive compensator:** cemented pair L7-L8.
- **Relay front:** L9 followed by cemented pair L10-L11.
- **Relay rear:** L12, cemented pair L13-L14, and final singlet L15.

The independently computed functional powers are approximately +121.008 mm for G1, -40.306 mm for G2, +108.266 mm for G3, +118.553 mm for the relay-front group, and +113.097 mm for the complete fixed relay. These are assembly focal lengths, not sums of the standalone element focal lengths listed later.

The zoom section has the patent's positive-negative-positive power sequence. G2 changes the system focal length by translating imageward, while G3 moves on a non-monotonic compensating path to hold the image plane fixed. The relay remains stationary. This is the central mechanism described in the patent's abstract and claims.[1]

The patent title uses “telephoto type” for the complete zoom. Under the project's strict numerical definition, however, the total-track-to-EFL ratios are 2.441 at wide, 1.545 at the reconstructed middle state, and 0.975 at tele. Only the tele endpoint satisfies `TL/EFL < 1`. The design is not retrofocus at any modeled state because its approximately 40 mm back focal distance never exceeds EFL.

### Zoom Kinematics

The patent publishes the wide and telephoto variable gaps but plots an intermediate 126.4 mm state without printing its spacing row. The data file therefore defines three infinity-focus zoom positions:

| State | D5 (mm) | D10 (mm) | D13 (mm) | Status |
|---|---:|---:|---:|---|
| 80 mm | 1.330000 | 39.400000 | 10.880000 | published |
| 126.4 mm | 24.705398 | 24.610757 | 2.293846 | constrained reconstruction |
| 200.3 mm | 39.580000 | 1.040000 | 10.990000 | published |

The reconstructed row was solved for EFL = 126.4 mm, BFL = 40.0 mm, and the mechanism constraint `D5 + D10 + D13 = 51.61 mm`. It is not a patent transcription.

Relative to the 80 mm state, the front vertex of G2 moves 38.25 mm imageward by the tele endpoint. G3 moves 8.586 mm imageward to the middle state, then reverses 8.696 mm toward the object, finishing 0.11 mm objectward of its wide-position vertex. The relay-front vertex, last glass vertex, and image plane remain fixed. The full image-plane track is 195.31 mm at every modeled zoom position.

## Element-by-Element Analysis

The focal lengths in the element headings are the standalone-in-air values stored in the data file. They describe each physical element isolated from its neighbors. Cemented-pair and functional-group powers are stated separately and can differ greatly from the individual values because the elements operate in contact and within a larger optical assembly.

### G1 - Fixed Positive Front Group

#### L1 - Biconvex Positive

**nd = 1.62041, νd = 60.3. Glass: 620603 - SK16 class (vendor unresolved). Standalone f = +151.336 mm.**

L1 is the positive entrance singlet of the fixed first zoom group. Its moderate positive power begins the collection of the axial and field bundles before the weakly positive cemented pair behind it. In the complete G1 assembly, L1 supplies a substantial share of the group's +121.008 mm net power.

The class label is coordinate-based. The patent gives no manufacturer or melt name, so the data file does not assign a specific historical vendor glass.

#### L2 - Biconvex Positive, front component of D1

**nd = 1.61375, νd = 56.3. Glass: unmatched 614563 historical crown; the prior SK6 / BSM6 annotation is not coefficient-backed. Standalone f = +119.347 mm.**

L2 is cemented directly to L3. Its positive standalone power is opposed by the negative component, producing a D1 cemented-pair EFL of +634.830 mm. The pair is therefore only weakly positive in situ compared with either isolated component.

No first-party coefficient row matching both stored coordinates was located in the current vendor sources. The patent does not identify the historical glass vendor or melt.

#### L3 - Biconcave Negative, rear component of D1

**nd = 1.75520, νd = 27.5. Glass: 755275 - SF4 class (vendor unresolved). Standalone f = -143.544 mm.**

L3 provides the negative half of the front cemented pair. The large Abbe-number contrast between L2 and L3 supports primary chromatic balancing of G1, but the available data do not justify a claim about anomalous partial dispersion or apochromatic correction.

D1's weak net positive power indicates that its chief purpose within G1 is not simply to add convergence. Its opposed powers and dispersion contrast shape the front group's chromatic and monochromatic behavior while L1 and the complete group establish the required positive power.

### G2 - Negative Variator

#### L4 - Biconvex Positive, front component of D2

**nd = 1.68893, νd = 31.1. Glass: 689311 - SF8 class (vendor unresolved). Standalone f = +64.388 mm.**

L4 begins the moving negative variator. Although it is positive in isolation, its cemented combination with L5 is negative, with a computed D2 EFL of -155.462 mm. The front face is nearly plane (`R6 = 10000 mm`), a feature also governed by the patent's explicit `R6` condition.

Its relatively high index and low Abbe number make it the high-dispersion partner in the D2 pair. That interpretation follows from the stored optical coordinates; no historical melt identity is asserted.

#### L5 - Biconcave Negative, rear component of D2

**nd = 1.51728, νd = 69.6. Glass: S-APL1 (OHARA; 517696). Standalone f = -45.305 mm.**

L5 is the negative, low-dispersion member of D2. Its strong negative standalone power and high Abbe number contrast with L4's positive, more dispersive power. Together they form a negative achromatizing pair within the variator.

The data file sets `apd: false` and carries no `nC`, `nF`, `ng`, or `dPgF`. The exact S-APL1 identity is catalog-backed, but it is not evidence for anomalous-dispersion performance.

#### L6 - Biconcave Negative

**nd = 1.62041, νd = 60.3. Glass: 620603 - SK16 class (vendor unresolved). Standalone f = -55.865 mm.**

L6 is the rear negative singlet of G2. It adds strong negative power behind D2 and brings the complete variator to a computed EFL of -40.306 mm, matching the patent's rounded `f2 = -40.3 mm`.

Because G2 is the principal focal-length-changing group, the negative power of L6 acts within a translating assembly rather than as a fixed rear corrector. The data file does not assign independent focusing motion to this element or group.

### G3 - Positive Compensator

#### L7 - Biconvex Positive, front component of D3

**nd = 1.62041, νd = 60.3. Glass: 620603 - SK16 class (vendor unresolved). Standalone f = +58.671 mm.**

L7 supplies the main positive power of the moving compensator. Cemented to L8, it forms a net-positive pair with a computed EFL of +108.266 mm, essentially the patent's rounded `f3 = 108.3 mm`.

The complete D3 group moves imageward and then reverses as focal length increases. This non-monotonic path compensates the image displacement introduced by G2 while preserving the fixed relay and image plane.

#### L8 - Negative Meniscus, rear component of D3

**nd = 1.62004, νd = 36.3. Glass: 620363 - F2 class (vendor unresolved). Standalone f = -127.185 mm.**

L8 tempers L7's positive power and introduces a substantial dispersion contrast within the cemented compensator. Its negative meniscus form leaves D3 positive overall while providing an additional degree of freedom for the aberration balance of a group that changes axial position substantially during zooming.

The description of this role is a modeling interpretation of the prescribed powers and movement. The patent directly establishes the group's compensating motion, not an element-by-element aberration allocation.

### Relay Front Group

#### L9 - Biconvex Positive

**nd = 1.54814, νd = 45.9. Glass: 548459 - LLF1 class (vendor unresolved). Standalone f = +139.235 mm.**

L9 is the positive singlet at the entrance to the fixed relay. It begins the relay's convergence before the nearly afocal L10-L11 cemented pair.

The patent explains that the relay must correct astigmatism and spherical aberration introduced by the compact zooming section without increasing total length excessively.[1] L9 participates in that fixed relay function, although the patent does not assign a unique aberration term to this singlet.

#### L10 - Biconvex Positive, front component of D4

**nd = 1.53172, νd = 48.9. Glass: 532489 - LLF6 class (vendor unresolved). Standalone f = +54.235 mm.**

L10 is the strong positive member of D4. Its power is almost cancelled by L11, leaving the cemented pair with a computed EFL of approximately +6729.981 mm. The pair is thus nearly afocal as a cemented assembly despite the strong isolated powers of both elements.

This distinction is important: a near-zero cemented net power does not make D4 optically inactive. The strong internal refractions remain available to reshape aberrations inside the +118.553 mm relay-front group.

#### L11 - Biconcave Negative, rear component of D4

**nd = 1.78470, νd = 26.1. Glass: 785261 - SFS3 / dense short-flint class (vendor unresolved). Standalone f = -47.310 mm.**

L11 opposes L10 and provides a large refractive-index and dispersion contrast. The index difference is `1.78470 - 1.53172 = 0.25298`, which lies within the patent's required 0.1-0.49 interval for the corresponding relay cemented pair.[1]

The patent associates this index contrast with the relay's astigmatism correction. The computed result supports that conditional relationship, but it does not identify a specific catalog melt or prove secondary-spectrum behavior.

### Relay Rear Group

#### L12 - Biconvex Positive

**nd = 1.51680, νd = 64.2. Glass: 517642 - BK7 class (vendor unresolved). Standalone f = +76.631 mm.**

L12 is the front positive singlet of the relay-rear section. It provides the first converging part of the patent's converging-diverging-converging rear-relay sequence.

Its BK7-class coordinate is a broad cross-vendor family identification rather than a historical supplier attribution. The data file intentionally retains the six-digit coordinate in the glass label.

#### L13 - Biconcave Negative, front component of D5

**nd = 1.74400, νd = 44.9. Glass: 744449 - LAF2 class (vendor unresolved). Standalone f = -23.358 mm.**

L13 is the strongest isolated negative element in the relay rear. Cemented to L14, it forms a net-negative D5 pair with a computed EFL of -40.032 mm.

The negative pair follows L12 and precedes the final positive singlet, forming the diverging middle portion of the relay-rear power sequence described by the patent.

#### L14 - Plano-Convex Positive, rear component of D5

**nd = 1.69895, νd = 30.0. Glass: SF15 (Sumita coefficient-backed equivalent), 699300. Standalone f = +57.229 mm.**

L14 partially offsets L13 while leaving D5 negative overall. Its rear face is a real plane refracting surface, surface 23. It is not an inactive dummy plane and is retained in the sequential prescription.

The pair's stored Abbe values provide only primary-color information. The coefficient-backed SF15 catalog equivalent enables wavelength tracing, but does not establish the historical production melt or justify a secondary-spectrum claim.

#### L15 - Biconvex Positive

**nd = 1.70154, νd = 41.1. Glass: BASF7 (Sumita coefficient-backed equivalent), 702411. Standalone f = +86.332 mm.**

L15 is the final positive relay singlet before the 40 mm image space. It completes the converging-diverging-converging sequence of the relay rear and contributes to the complete relay's +113.097 mm EFL.

The patent requires the absolute radius of L15's front surface to be smaller than that of its rear surface. The normalized prescription gives `|R24|/|R25| = 0.029890`, well within the required relation. The patent links this bending condition to distortion control and image flatness over a total angle exceeding 20°.[1]

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not name glass manufacturers, catalog designations, melt numbers, C-, F-, or g-line indices, or anomalous partial-dispersion values. The data file therefore uses six-digit optical-coordinate codes and conservative class labels. These labels are catalog-derived approximations, not source facts about the historical production melts.

| Data-file glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| 620603 - SK16 class (vendor unresolved) | 1.62041 | 60.3 | L1, L6, L7 | medium-index crown-class coordinate |
| Unmatched 614563 historical crown | 1.61375 | 56.3 | L2 | prior SK6 / BSM6 annotation not coefficient-backed |
| 755275 - SF4 class (vendor unresolved) | 1.75520 | 27.5 | L3 | dense flint-class coordinate |
| 689311 - SF8 class (vendor unresolved) | 1.68893 | 31.1 | L4 | flint-class coordinate |
| S-APL1 (OHARA; 517696) | 1.51728 | 69.6 | L5 | catalog-backed low-dispersion crown |
| 620363 - F2 class (vendor unresolved) | 1.62004 | 36.3 | L8 | flint-class coordinate |
| 548459 - LLF1 class (vendor unresolved) | 1.54814 | 45.9 | L9 | light-flint-class coordinate |
| 532489 - LLF6 class (vendor unresolved) | 1.53172 | 48.9 | L10 | light-flint-class coordinate |
| 785261 - SFS3 / dense short-flint class (vendor unresolved) | 1.78470 | 26.1 | L11 | dense short-flint-class coordinate |
| 517642 - BK7 class (vendor unresolved) | 1.51680 | 64.2 | L12 | common crown-family coordinate |
| 744449 - LAF2 class (vendor unresolved) | 1.74400 | 44.9 | L13 | lanthanum-flint-class coordinate |
| SF15 (Sumita coefficient-backed equivalent), 699300 | 1.69895 | 30.0 | L14 | coefficient-backed dense-flint equivalent; historical vendor unresolved |
| BASF7 (Sumita coefficient-backed equivalent), 702411 | 1.70154 | 41.1 | L15 | coefficient-backed barium-flint equivalent; historical vendor unresolved |

The main chromatic strategy visible from `nd` and `νd` is the use of cemented pairs with opposed powers and substantial dispersion contrast. D1, D2, D3, D4, and D5 each combine positive and negative elements, but their net powers differ sharply: weak positive, negative, positive, nearly afocal, and negative, respectively. That diversity shows that cementing is used throughout the design for both power distribution and first-order chromatic control.

No APO designation is supported. SF15 and BASF7 now provide coefficient-backed catalog equivalents for wavelength tracing, but their historical vendor identities remain unresolved and their use does not establish the production melts.

## Focus Mechanism

The optical focus mechanism is **not internally reconstructed**. US 3,615,125 publishes infinity-focus zoom kinematics but no close-focus prescription, object-distance table, focusing-group identification, focus travel, or close-focus magnification.

The data file carries `closeFocusM: 1.8` as production catalog metadata.[4] It does not use that value to infer group motion. Every zoom `var` entry has identical infinity and close values, so moving the focus control does not create a fabricated optical state.

Accordingly, the model does not classify the production lens as unit focus, front-group focus, inner focus, or floating focus. Those mechanisms cannot be distinguished from the selected patent example alone. The only modeled movements are the published zoom motions of G2 and G3 and the constrained intermediate zoom state.

## Modeling Inferences and Source Normalization

### Corrected source contradictions

Two prescription values differ between the Example 1 table and the claim-1 repetition:

- Surface 5 uses `R = +357.269 mm`, rather than the Example table's `+357.629 mm`.
- Surface 15 uses `R = -1347.294 mm`, rather than claim 1's `-1317.294 mm`.

All four combinations were independently traced. The selected pair gave the smallest combined endpoint EFL and BFL residual. These are documented source normalizations, not silent edits.

The patent's rounded relay-front focal length `fm1 = 117.8 mm` does not exactly match the computed 118.553 mm result. No prescription value was altered to force that rounded subassembly number. The complete relay computes to 113.097 mm against the patent's `fm = 113.1 mm`.

### Aperture stop and pupils

The patent states f/4.5 but provides neither a physical iris station nor a stop diameter. The data file inserts exactly one inferred `STO` at the midpoint of the 38.1 mm air space between surfaces 18 and 19, 19.05 mm from either boundary.

The modeled stop semi-diameter is 7.821202 mm, corresponding to a 15.642403 mm diameter. With this fixed stop, the computed paraxial maximum apertures are f/4.49977, f/4.49976, and f/4.50047 at the three zoom positions. The position and physical diameter are modeling choices; the f/4.5 result alone does not uniquely determine either one.

### Semi-diameters and omitted planes

The patent has no clear-aperture table. Semi-diameters were measured from Figure 1 and checked against the f/4.5 marginal bundle, the published field angles, the 135-format field, and the period Nikon cross-section’s 52 mm front-element envelope.[4] Surfaces 8 and 9 retain the smaller validator-safe clearance required by their opposing curvatures. Local edge-thickness, actual-rim-slope, and shared-gap checks pass at every defined zoom state. Exact meridional tracing at the patent’s extreme fields nevertheless shows substantial clipping by the inferred apertures, so the stored semi-diameters are not a reconstruction of the production clear-aperture schedule and cannot support photometric-vignetting claims.

No sensor cover glass, filter, inactive dummy plane, flare cutter, blocker, or mechanical component is included. None is required by the selected patent example. Surface 23 is retained because it is the real plane rear surface of L14.

### Scaling and aspheres

No dimensional scaling was applied. The design is entirely spherical, `asph` is empty, and no aspheric coefficient transformation was required.

## Aberration-Correction Strategy and Design Philosophy

The patent's principal architectural problem is to keep a long-focal-length zoom compact without allowing the reduced zoom section to impose excessive astigmatism, spherical aberration, and chromatic error. Its solution separates focal-length variation from relay correction: the compact positive-negative-positive zooming system creates the variable conjugate, and a fixed two-part relay restores image quality and supplies the final imaging power.[1]

The relay-front group is especially revealing. D4 has strongly opposed standalone powers but almost zero cemented net power. This allows large refractive changes at the internal cemented interface without requiring the pair to dominate relay focal length. The patent's index-difference condition for the pair supports its role in astigmatism correction.

The relay rear uses a positive singlet, a net-negative cemented pair, and a final positive singlet. The last element's strong bending satisfies the patent's distortion condition. This distributes field and distortion correction across the fixed relay rather than requiring the moving variator and compensator to perform all corrections at every zoom position.

The calculated Petzval sum is `+0.001298741376 mm^-1`, with a reciprocal first-order curvature scale of approximately +769.976 mm under the project's `φ/(n·n′)` convention. This number is a paraxial Petzval measure, not a prediction that the real best-focus surface is a sphere of that radius.

## Conditional Expressions

The normalized prescription satisfies all explicit design conditions evaluated independently:

| Patent condition | Computed result | Status |
|---|---:|---|
| `0.8 fm < fm1 < 1.1 fm` | `fm1 = 118.553 mm`; allowed 90.478-124.407 mm | pass |
| `0.1 < n11 - n10 < 0.49` | 0.25298 | pass |
| `R6 > 0` | 10000 mm | pass |
| `10|f2| < R6 < infinity` | 10000 mm > 403.059 mm | pass |
| `|R24| < |R25|` | `|R24|/|R25| = 0.029890` | pass |
| `0.7 < f1/fm < 1.8` | 1.069949 | pass |
| `D < maximum focal length` | `D/fmax = 0.975087` | pass |

The first relay condition is evaluated with the independently computed relay focal lengths rather than the patent's rounded group labels. The small mismatch between computed and printed `fm1` is retained as source precision, not corrected by altering the prescription.

## Verification Summary

The prescription was independently re-entered from the patent table and traced before its values were compared with the final TypeScript surface and zoom arrays.

| Modeled state | EFL (mm) | BFL (mm) | Total track (mm) | Modeled f-number |
|---|---:|---:|---:|---:|
| 80 mm | 80.009124 | 40.000174 | 195.310000 | 4.499771 |
| 126.4 mm constrained | 126.400000 | 40.000000 | 195.310000 | 4.499760 |
| 200.3 mm | 200.340821 | 40.011227 | 195.310000 | 4.500469 |

The endpoint EFL and BFL residuals are compatible with the precision of the patent's rounded radii and spacings. The patent's field-angle labels correspond to paraxial image heights of 21.603, 21.515, and 21.658 mm, consistent with an approximately 43.1-43.3 mm image circle and the modeled 135 format.

The reduced-angle matrix, an independent unreduced-angle ABCD model, and direct basis-ray propagation agree to a maximum matrix difference of `5.684e-14`. Each air-to-air determinant is unity within floating-point precision.

The figure-matched geometry passed the locally reproducible checks at all three zoom positions, including the constrained surface 8-to-9 gap.

On-axis exact meridional tracing admitted all 201 sampled stop coordinates at each zoom state. At the patent’s extreme field angles, only 16.4%, 21.4%, and 13.9% of those sampled coordinates both retained a continuous sequential path and remained within the inferred semi-diameters at wide, middle, and tele, respectively. These are one-dimensional model-aperture diagnostics, not measured photometric vignetting data for the production lens.

## Sources

1. [Takashi Higuchi and Soichi Nakamura, “Compact Telephoto Type Zoom Lens,” US 3,615,125, Example 1 and Figures 1-5, granted October 26, 1971](https://patents.google.com/patent/US3615125A/en).
2. [Nikon, *NIKKOR - The Thousand and One Nights No. 15*](https://imaging.nikon.com/imaging/information/story/0015/index.html), historical note identifying the 1970 ZOOM-NIKKOR Auto 80-200mm f/4.5 as a Soichi Nakamura afocal-zoom design.
3. [Nikon, *Debut of Nikon F2*](https://imaging.nikon.com/imaging/information/chronicle/history-f2/), historical chronology noting the Zoom-NIKKOR Auto 80-200mm f/4.5 among period Nikon F-system zoom lenses.
4. [Nikon / Nikkormat, *Sales Manual: Zoom Nikkor Lenses*, L-59, March 1972](https://www.pacificrimcamera.com/rl/00771/00771.pdf), period manufacturer specification for the 80-200mm f/4.5 Zoom Nikkor Auto.
5. [OHARA, *Optical Glass Catalog and numerical-data downloads*](https://oharacorp.com/glass-catalog/), including legacy and special-order coordinate references.
6. [HIKARI, *Optical Glass Catalog*](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), used for current class-coordinate checks.
7. [SCHOTT, *Datasheets and downloads for optical glass*](https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads), used for cross-vendor class checks. The patent itself does not identify historical vendors or melts.
