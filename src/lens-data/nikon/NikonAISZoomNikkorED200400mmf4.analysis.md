## Patent Reference and Design Identification

- **Patent:** US 4,452,513 A
- **Filed:** June 11, 1982
- **Priority:** June 19, 1981 (Japan 56-93728)
- **Granted:** June 5, 1984
- **Inventor:** Yoshinari Hamanishi
- **Assignee:** Nippon Kogaku K.K.
- **Title:** *Zoom Lens Capable of Close Range Photography and Method of Focusing the Same to a Short Distance*
**Embodiment analyzed:** Example 3 / Third Embodiment

The data model represents the project-selected correlation between the NIKON ZOOM-NIKKOR ED 200-400mm f/4 and
Example 3 of US 4,452,513 A. The patent itself does not identify a production lens by trade name, and the consulted Nikon
material does not state that this patent is the production prescription. The correlation is therefore treated as the
fixed project identification rather than as a manufacturer-confirmed attribution. [1]

The display name follows the Nikon 1984 brochure's supported 200-400 mm f/4 ED identification and omits the AI-S
qualifier that appeared only in the job card. [2]

Several independent features make the correlation unusually close:

1. Example 3 is explicitly a 200-400 mm, f/4 zoom. The finalized paraxial model gives effective focal lengths of
   200.0013 mm and 400.0021 mm at the two published endpoints. [1]
2. The patent prescription contains 15 glass elements in 10 air-separated lens components, matching the 15-element,
   10-group specification in Nikon's 1984 Nikkor brochure. In the patent these ten components are organized into four
   functional zoom groups, G1 through G4. [1][2]
3. The patent aberration figures use an image height of 21.6 mm. With the verified endpoint focal lengths, that height
   corresponds to paraxial full fields of about 12.33° and 6.18°, closely matching Nikon's published 12°20′-6°10′
   angle-of-view range for the production lens. [1][2]
4. Four elements use the unusually low-dispersion coordinate pair nd = 1.49782, νd = 82.3. The final data file labels
   this only as a very-low-dispersion crown class because the patent does not identify a vendor or melt; the coordinate
   region is nevertheless consistent with the production lens's ED designation. [1]
5. Patent timing and manufacturer documentation overlap closely: the application was filed in 1982 and granted in 1984,
   while a Nikon 1984 brochure documents the 200-400 mm f/4 ED production lens. No more precise manufacturer-verified
   launch date is asserted here. [1][2]

One production divergence is retained rather than concealed. Example 3 demonstrates first focusing to 2.5 m and special
second-focus solutions at 1.4 m, whereas Nikon's 1984 brochure specifies a 4 m minimum focusing distance. The data model
therefore does not copy the patent's 1.4 m state into the production lens. Instead, the 4 m endpoint is a disclosed,
mechanism-constrained reconstruction described under **Focus Mechanism**. [1][2]

The prescription is unscaled: all radii, thicknesses, air spaces, and the 69.828 mm published back-focus spacing are
retained at scale s = 1. No aspherical surfaces are present, so there is no conic conversion or asphere-coefficient
scaling. The selected patent example also publishes no sensor cover glass, filter plate, inactive dummy surface, or
mechanical plane; none is added to the optical sequence.

The transcription follows the rendered patent tables rather than ambiguous machine-parsed text. In particular, the
printed prescription establishes r23 = +168.000 mm, and the rendered/repeated Table 6 values resolve the infinity D1
spacing as 73.1132 mm and the close-focus entries used in the verification. These are OCR resolutions, not corrections
of the printed patent. [1, Table 5; Table 6; claim 7]

## Optical Architecture

Example 3 is a four-functional-group zoom with power sequence **positive-negative-positive-positive**. The patent labels
these groups G1, G2, G3, and G4 and assigns them distinct focusing, variator, compensator, and relay functions. The final
data file contains 15 physical glass elements in 10 air-separated components, matching Nikon's production element/group
count, while the four functional brackets describe the zoom mechanism rather than the catalog group count. [1][2]

- **G1, positive focusing group:** a cemented front doublet L11 followed by positive singlet L12; three elements total.
- **G2, negative variator:** cemented negative triplet L21 followed by negative singlet L22; four elements total.
- **G3, positive compensator:** cemented doublet L3; two elements total.
- **G4, positive relay:** singlets L41, L42, L43, and L44 followed by cemented doublet L45; six elements total.

Independent paraxial reduction of the finalized arrays gives group focal lengths of +274.6520 mm for G1,
-80.2756 mm for G2, +200.0003 mm for G3, and +220.0002 mm for G4. These are standalone equivalent focal lengths
of the four functional groups, reduced in air. They are not whole-system in-situ powers and should not be confused with
the standalone focal lengths of individual elements or with the net powers of the cemented components listed below.

At infinity focus, zooming is produced by relative motion of G2 and G3 while G1 and G4 define the front and rear
references. The patent publishes only two numerical zoom positions. From 200 mm to 400 mm, the G1-to-G2 air gap D5
increases from 50.635 to 111.267 mm, the G2-to-G3 gap D11 contracts from 56.297 to 3.155 mm, and the G3-to-G4 gap D14
contracts from 15.464 to 7.975 mm. With G1 held as the axial reference, those endpoint spacings correspond to about
60.632 mm imageward motion of G2 and 7.490 mm imageward motion of G3; the 0.001 mm track closure is attributable to
source rounding. [1, Table 5]

Because no intermediate spacing table is published, LensVisualizer has only the 200 mm and 400 mm control points and
linearly interpolates between them. That interpolation is a display model, not a recovered mechanical cam. A diagnostic
trace shows that the interpolated path remains monotonic in effective focal length but is not exactly parfocal between the
endpoints; the reconstructed back focal distance peaks near 82.31 mm around 60% zoom while the authored image spacing
remains 69.828 mm. Only the two source-defined endpoints are treated as quantitatively authoritative.

The patent discusses the class as a four-group telephoto zoom, but the project's quantitative definition is stricter:
first-vertex-to-image track divided by EFL is about 1.798 at 200 mm and 0.899 at 400 mm. The design is therefore
telephoto by the project definition only at the tele endpoint, not across the entire zoom range. Back focal distance is
less than EFL at both endpoints, so the design is not retrofocus under the project's BFD > EFL criterion.

## Element-by-Element Analysis

### L11 — Cemented front component in G1

**L11a:** nd = 1.75692, νd = 31.7. Glass: 757317 — E-LAF11 catalog equivalent (production supplier unspecified). Standalone f = -457.263 mm.

**L11b:** nd = 1.49782, νd = 82.3. Glass: 498823 — J-FKH1 catalog equivalent (production supplier unspecified). Standalone
f = +214.862 mm.

L11 combines a weak negative meniscus with a substantially stronger low-dispersion positive element. When the pair is
reduced as a cemented component in air, its net focal length is +405.960 mm. This is a computed component value, not the
power of the complete focusing group. L11 is followed by L12 with only a 0.2 mm air space, and the complete G1 assembly
has the much stronger equivalent focal length of +274.652 mm.

The low-dispersion positive member carries much of the chromatic burden in the front focusing group without requiring the
front element itself to be a strongly positive high-dispersion lens. The exact historical glass is not established; the
data file therefore retains the patent coordinates and a neutral class label rather than promoting a modern catalog
candidate to source fact.

### L12 — Positive meniscus completing G1

nd = 1.49782, νd = 82.3. Glass: 498823 — J-FKH1 catalog equivalent (production supplier unspecified). Standalone
f = +850.330 mm.

L12 is a relatively weak positive meniscus compared with the cemented L11 component. Its optical importance is therefore
not captured by its standalone focal length alone. In combination with L11 and the short internal air space, it completes
G1's +274.652 mm focal length and sets the principal-plane position that governs both the zoom spacing D5 and the
first-focus translation described by the patent.

L12 uses the same high-Abbe coordinate pair as L11b. That repeated low-dispersion material choice gives the front group
two positive low-dispersion elements, but the available data contain no line indices or partial-dispersion measurements
from which an apochromatic or anomalous-dispersion claim could be made.

### L21 — Cemented negative-positive-negative triplet in G2

**L2a:** nd = 1.78797, νd = 47.5. Glass: 788475 — lanthanum-flint class (vendor unresolved). Standalone
f = -130.363 mm.

**L2b:** nd = 1.75520, νd = 27.6. Glass: 755276 — SF4 class (vendor unresolved). Standalone f = +83.901 mm.

**L2c:** nd = 1.51680, νd = 64.1. Glass: 517641 — BK7 class (vendor unresolved). Standalone f = -101.464 mm.

L21 is the most explicitly analyzed component in the patent. The three elements are cemented in negative-positive-negative
order, and the patent attributes specific chromatic and off-axis correction functions to the two cemented interfaces.
The first interface uses a relatively modest index difference but a large dispersion difference; the second uses a larger
index step. The stated purpose is to balance chromatic correction while retaining control of coma, astigmatism, and
field curvature through zooming, particularly on the short-focal-length side. [1, printed pp. 5-8]

Reduced as a standalone cemented component, L21 has f = -183.938 mm. That number is not the variator-group focal length.
L21 works with the air-separated negative singlet L22, and the complete G2 group is substantially stronger at
f = -80.2756 mm. This distinction matters because the patent's conditions use both the cemented-component focal length
and the complete G2 focal length in different expressions.

### L22 — Negative meniscus completing G2

nd = 1.80218, νd = 44.7. Glass: 802447 — M-TAF31 catalog equivalent (production supplier unspecified). Standalone f = -150.242 mm.

L22 is separated from L21 by a 7.5 mm air gap and adds negative power to the variator. The combined G2 group is the
principal negative-power section of the zoom, and its axial motion produces most of the focal-length change. The patent's
condition involving f2/r6 evaluates the complete G2 focal length against the radius of its first surface; the finalized
model gives 0.21921, inside the stated 0 to 0.4 interval. [1]

No defensible public glass identity was established for the exact 1.80218/44.7 coordinate pair, so the final data avoids a
specific vendor or catalog name.

### L3 — Cemented positive compensator in G3

**L3a:** nd = 1.49782, νd = 82.3. Glass: 498823 — J-FKH1 catalog equivalent (production supplier unspecified). Standalone
f = +101.431 mm.

**L3b:** nd = 1.75692, νd = 31.7. Glass: 757317 — E-LAF11 catalog equivalent (production supplier unspecified). Standalone f = -204.846 mm.

The two elements form a positive cemented component whose independently computed net focal length is +200.0003 mm,
essentially identical to the patent's f3 = 200.0000 mm after allowing for source precision. G3 is the compensator that
moves relative to G2 during zooming so the source-defined endpoint image plane remains fixed. [1, Table 6]

The positive element again uses the 1.49782/82.3 low-dispersion coordinate pair, while the negative member repeats the
1.75692/31.7 pair found at the front of L11. This pairing gives G3 a chromatic balance broadly analogous to the front
cemented component, but its in-system role is the zoom compensator rather than the focusing group.

### L41 — Front positive singlet of the relay

nd = 1.49782, νd = 82.3. Glass: 498823 — J-FKH1 catalog equivalent (production supplier unspecified). Standalone
f = +93.453 mm.

L41 is the strongest standalone positive element in G4 and begins the fixed positive relay. Its high-Abbe coordinate pair
is the fourth occurrence of 1.49782/82.3 in the design. The relay as a whole has f = +220.0002 mm, but L41's
standalone focal length shows that a substantial share of the relay's positive power is concentrated near its front.

The use of the same low-dispersion positive material in G1, G3, and G4 distributes chromatic correction across the lens
rather than confining it to one corrective component. This is a prescription-level observation; the patent does not name
the historical glass vendor.

### L42 — Negative meniscus in the relay

nd = 1.78797, νd = 47.5. Glass: 788475 — lanthanum-flint class (vendor unresolved). Standalone f = -136.851 mm.

L42 follows L41 across a 10 mm air gap and introduces negative power within the otherwise positive G4 relay. Its glass
coordinates repeat L2a in the variator. The air separation and opposite power signs allow the relay's principal planes and
aberration balance to be adjusted without forcing the rear component to carry all of the negative correction.

The final data file retains only the class-level lanthanum-flint description. Although modern catalogs contain close
coordinate neighbors, the patent does not identify the melt and the analysis does not assign one retroactively.

### L43 — Positive meniscus ahead of the modeled stop gap

nd = 1.51680, νd = 64.1. Glass: 517641 — BK7 class (vendor unresolved). Standalone f = +435.818 mm.

L43 is a weak positive meniscus separated from L42 by only 0.6 mm. Its rear surface r20 is followed by the patent's long
66 mm air interval before L44. The patent does not place or dimension the diaphragm in this interval; the finalized model
inserts the single required STO there as an explicit inference, described separately below.

The element shares the 1.51680/64.1 coordinate pair with L2c. Its standalone power is modest relative to the surrounding
relay elements, so its principal contribution is through the relay's combined spacing and aberration balance rather than
through strong isolated focal power.

### L44 — Strong rear negative singlet

nd = 1.77279, νd = 49.4. Glass: 773494 — M-TAF1 catalog equivalent (production supplier unspecified). Standalone f = -52.443 mm.

L44 is the strongest standalone negative element in G4. It lies behind the modeled stop and immediately ahead of the
final cemented component. Its compact 19.5 mm modeled semi-diameter also marks the contraction of the clear aperture in the
rear relay visible in patent Fig. 15. That semi-diameter is a modeling result rather than a patent dimension. [1, Fig. 15]

The selected M-TAF1 curve reproduces the patent coordinates within the catalog guard. It is retained only as a
supplier-neutral spectral equivalent, not as a historical production-glass attribution.

### L45 — Rear cemented component

**L45a:** nd = 1.73350, νd = 51.1. Glass: 734511 — lanthanum-crown class (vendor unresolved). Standalone
f = -173.307 mm.

**L45b:** nd = 1.58144, νd = 40.8. Glass: 581408 — light-flint class (vendor unresolved). Standalone
f = +54.900 mm.

Although L45a is negative as a standalone element, the much stronger positive L45b makes the cemented pair positive with
net f = +79.355 mm. This rear component closes G4, whose complete equivalent focal length is +220.0002 mm. The last patent
surface r25 is followed by the published 69.828 mm back-focus spacing to the image plane. [1, Table 5]

The rear pair illustrates why standalone element power should not be used as a substitute for cemented or group power:
L45a and L45b have opposite signs, the cemented pair is strongly positive, and the complete relay is much weaker than the
pair because the preceding relay elements and air spaces redistribute the net power and principal planes.

## Glass Identification and Selection

The patent supplies refractive index and Abbe number but no manufacturer names, melt codes, Sellmeier coefficients,
C/F/g-line indices, or partial-dispersion values. The final data file therefore stores the patent nd/νd coordinates and
uses catalog names only as supplier-neutral spectral equivalents. A six-vendor audit screened OHARA, HOYA, SCHOTT,
HIKARI, CDGM, and Sumita material; every physical-glass position now has a coefficient-backed curve inside the strict
coordinate guard, without treating a modern catalog neighbor as proof of the historical glass. [3][4][5][6][7][8]

| Data-file glass label | nd | νd | Elements | Interpretation used in the model |
| --- | ---: | ---: | --- | --- |
| 757317 — E-LAF11 catalog equivalent | 1.75692 | 31.7 | L11a, L3b | High-index, higher-dispersion partner; production supplier unspecified |
| 498823 — J-FKH1 catalog equivalent | 1.49782 | 82.3 | L11b, L12, L3a, L41 | Very-low-dispersion positive class; production supplier unspecified |
| 788475 — lanthanum-flint class | 1.78797 | 47.5 | L2a, L42 | High-index medium-dispersion negative glass class |
| 755276 — SF4 class | 1.75520 | 27.6 | L2b | High-dispersion positive middle element of the G2 triplet |
| 517641 — BK7 class | 1.51680 | 64.1 | L2c, L43 | Crown-class coordinate pair used in G2 and G4 |
| 802447 — M-TAF31 catalog equivalent | 1.80218 | 44.7 | L22 | High-index negative singlet; production supplier unspecified |
| 773494 — M-TAF1 catalog equivalent | 1.77279 | 49.4 | L44 | High-index rear negative element; production supplier unspecified |
| 734511 — lanthanum-crown class | 1.73350 | 51.1 | L45a | Negative member of final cemented pair despite crown-class dispersion |
| 581408 — light-flint class | 1.58144 | 40.8 | L45b | Strong positive rear partner in L45 |

The chromatic architecture is most explicit in G2. The patent deliberately combines the 47.5, 27.6, and 64.1 Abbe
numbers across the two cemented interfaces of L21 and states that the dispersion and index differences are used to
balance chromatic correction with coma and astigmatism through zooming. Conditions (5) and (6) quantify that balance.
[1, printed pp. 5-8]

The four 1.49782/82.3 elements constitute a second notable pattern. They place very-low-dispersion positive material in
G1, G3, and G4. This is consistent with the production lens's ED designation, but it does not establish an exact
historical glass identity, an anomalous partial-dispersion value, or an apochromatic correction level. `nC`, `nF`, `ng`,
and `dPgF`
are intentionally absent because Example 3 does not publish them and no catalog candidate has been elevated to a proven
historical identity.

## Focus Mechanism

The patent defines two focusing regimes. From infinity to a predetermined near distance, **first focusing** moves only
the positive G1 group toward the object. At still shorter distances, **second focusing** moves G1 and the negative G2
variator together while G3 remains fixed relative to the image plane. The purpose of adding G2 motion is to control the
short-distance growth of astigmatism and field curvature while limiting the front-group aperture required for marginal
illumination. [1, abstract; printed pp. 2-5]

Example 3 numerically demonstrates the first-focus state at R = 2.5 m and three R = 1.4 m alternatives. At 1.4 m, the
patent compares G1-only focusing with two second-focus paths, ΔD1/ΔD2 = 1 and ΔD1/ΔD2 = 0, and states that the latter
curve-c strategy is the most desirable for this embodiment. Those states remain verification references; they are not the
production close-focus state stored in the data file. [1, Figs. 18-21; Table 6]

Nikon's 1984 brochure gives the production minimum focusing distance as 4 m. Because 4 m is longer than the patent's
demonstrated 2.5 m first-focus state, the production state is modeled by G1-only motion. The status is therefore
**CONSTRAINED_RECONSTRUCTION**, not `PUBLISHED`. [2]

The code-solved physical G1 translation is approximately 22.539 mm toward the object at both zoom endpoints. In the
sequential data representation, downstream groups remain at their endpoint stations and the equivalent relative motion is
stored in D5:

| Zoom endpoint | D5 at infinity | D5 at 4 m | D11 at 4 m | D14 at 4 m |
| --- | ---: | ---: | ---: | ---: |
| 200 mm | 50.635 mm | 73.1738734442 mm | 56.297 mm | 15.464 mm |
| 400 mm | 111.267 mm | 133.8047587663 mm | 3.155 mm | 7.975 mm |

Direct paraxial tracing of those authored close-focus states gives image-condition residuals below 7 × 10^-10 mm and
magnifications of approximately -0.05976 at 200 mm and -0.11951 at 400 mm. These are computed results from the final data
arrays, not manufacturer specifications.

## Aperture Stop and Clear-Aperture Model

Example 3 has no tabulated aperture-stop station or diaphragm diameter. LensVisualizer nevertheless requires exactly one
`STO`, so the stop in the final data is a modeling inference rather than a patent surface. It is inserted within the
66 mm air space between r20 and r21, 9.0498951219 mm after r20 and 56.9501048781 mm before r21.

The stop station was constrained by two patent quantities at the 200 mm infinity state: image height y = 21.6 mm and
front-group principal-ray incidence h∞ = -25.966 mm. Placing the stop at the solved station makes the chief ray through
the stop center reproduce that h∞ value. The physical stop semi-diameter, 19.3048822919 mm, was then chosen as the
single best-fit value for the rounded prescription: the mean of the two endpoint modeled f-numbers is exactly 4.0. The
resulting endpoint values are 4.00000985 at 200 mm and 3.99999015 at 400 mm. [1, Fig. 16; Table 6]

The patent also publishes no surface semi-diameters. The data-file semi-diameters are inferred from f/4 ray envelopes,
a 600-dpi review of the relative clear-aperture proportions in Fig. 15, and the current geometry constraints. G2-G4
were enlarged toward the drawn rims where validation allowed: roughly 27-32 mm through those groups and 19.5 mm across
L44/L45. Larger figure-derived candidates would cross element edges or overlap the r9-r10 air gap, so the front doublet
and that gap remain geometry-limited. These values are modeling dimensions, not patent measurements. [1, Fig. 15]

The inferred apertures preserve physical clipping rather than enlarging elements solely to pass every extreme ray. At the
tele endpoint, the outer off-axis pupil sample vignettes in the front group, and the full physical stop is partly
front-group-limited at 400 mm / 4 m. Full-field chief rays, the infinity on-axis aperture bundle, and the central pupil
samples used for the authored containment check remain within the modeled clear apertures.

No filter, sensor cover, flare cutter, or dummy plane is inserted. The production lens may contain mechanical and filter
features outside the patent prescription, but they are not part of Example 3's sequential refracting model.

## Chromatic Correction Strategy

The patent's chromatic strategy centers on the G2 cemented triplet. It specifies a negative-positive-negative L21
component followed by negative singlet L22 and explains why two cemented interfaces are used rather than a single
achromatizing boundary. The first interface between L2a and L2b emphasizes dispersion contrast; the second between L2b
and L2c uses a larger index difference and is described as contributing to coma and astigmatism control while the two
interfaces jointly balance chromatic correction. [1, printed pp. 5-8]

The finalized element focal lengths also show why the triplet must be interpreted as a system. The standalone values
(-130.363, +83.901, and -101.464 mm) combine to a cemented L21 focal length of -183.938 mm. After the 7.5 mm air gap and
L22 are included, the complete G2 group is much stronger at -80.2756 mm. Patent conditions (5) and (6) use the cemented
and standalone powers to constrain chromatic balance, while condition (4) uses the complete G2 power.

Outside G2, the repeated 1.49782/82.3 positive elements distribute low dispersion through G1, G3, and G4. That pattern is
consistent with a design intended to suppress longitudinal and zoom-dependent color, but no stronger claim is made.
Without verified line indices, partial dispersion, or a historical Sellmeier identity, the data do not support an APO
label or a quantified anomalous-dispersion statement.

## Conditional Expressions

The patent gives six explicit design conditions. Independent calculations from the finalized prescription satisfy all
applicable bounds. For condition (1), the patent's two second-focus comparison paths have ratios 1 and 0; the G1-only
comparison is the limiting infinity-ratio case rather than a second-focus solution. [1]

| Condition | Patent bound | Final computed value | Result |
| --- | --- | ---: | --- |
| (1), path b | -1 < ΔD1/ΔD2 < 2 | 1.0000 | Satisfies |
| (1), path c | -1 < ΔD1/ΔD2 < 2 | 0.0000 | Satisfies |
| (2) | 0.5 < fw/f1 < 0.8 | 0.7281943 | Satisfies |
| (3) | 0.5 < D2·γ/fw < 1.5 | 0.6658204 | Satisfies |
| (4) | 0 < f2/r6 < 0.4 | 0.2192125 | Satisfies |
| (5) | -0.1 < expression < -0.03 | -0.0497276 | Satisfies |
| (6) | -0.07 < expression < -0.03 | -0.0511507 | Satisfies |

Conditions (2) and (3) constrain the power and pupil geometry of the four-group zoom. Condition (4) constrains the
complete negative variator relative to its first surface. Conditions (5) and (6) specifically govern the two cemented
interfaces in L21 and are the most direct mathematical expression of the patent's chromatic-correction argument.

## Verification Summary

The final data arrays reproduce the two published zoom endpoints without scaling. The 25 patent refracting surfaces plus
the one inferred neutral stop give the following independently recomputed first-order results:

| Quantity | 200 mm endpoint | 400 mm endpoint | Patent/source reference |
| --- | ---: | ---: | --- |
| Effective focal length | 200.0013176 mm | 400.0021084 mm | 200 / 400 mm |
| Back focal distance from r25 | 69.8285756 mm | 69.8279398 mm | 69.828 mm |
| First vertex to image track | 359.524 mm | 359.525 mm | Derived from Table 5 |
| Modeled f-number | 4.00000985 | 3.99999015 | f/4 published; stop inferred |

The wide-end computed principal-plane spacings are D1 = 73.11303 mm, D2 = 66.58204 mm,
D3 = -88.64718 mm, and D4 = 220.00041 mm. These reproduce Table 6 within the precision implied by the rounded radii,
indices, and tabulated spacings. The surface-by-surface Petzval sum, using φ/(n·n′), is
+5.2932824 × 10^-4 mm^-1; its reciprocal is 1889.187 mm. These are computed diagnostic quantities, not patent claims.

The inferred clear-aperture geometry also passes the available independent checks: minimum positive element edge
thickness is 0.6321 mm at L11b, maximum spherical rim slope is 48.008° at r19, and the worst shared-band cross-gap
intrusion is 0.89157 of the 7.5 mm r9-to-r10 air gap, below the configured 0.90 limit. No conic check applies because all
surfaces are spherical.


## Sources and References

1. Yoshinari Hamanishi, **US 4,452,513 A**, *Zoom Lens Capable of Close Range Photography and Method of Focusing the
   Same to a Short Distance*, Nippon Kogaku K.K., granted June 5, 1984. Example 3 / Third Embodiment, especially
   Figs. 15-21 and Tables 5-6. https://patents.google.com/patent/US4452513A/en
2. Nikon Inc., **Nikkor Lenses** brochure, 1984, manufacturer-origin brochure consulted in archival scan. The 200-400 mm
   f/4 ED entry gives 15 elements in 10 groups, 12°20′-6°10′ angle of view, f/32 minimum aperture, and 4 m minimum focus.
   https://www.base2photo.com/pdf/Nikkor_Lenses_Sales_Brochure_1984/Nikon_Nikkor_Lenses_Sales_Brochure_1984.pdf
3. OHARA optical-glass catalogs and discontinued-glass resources. https://www.ohara-inc.co.jp/en/product/catalog/
4. HOYA optical-glass data downloads. https://www.hoya-opticalworld.com/english/datadownload/index.html
5. SCHOTT optical-glass catalog and datasheets. https://www.schott.com/en-us/products/optical-glass-p1000267
6. HIKARI optical-glass catalog resources. https://www.hikari-g.co.jp/optical_glass/catalog/
7. CDGM optical-glass database. https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
8. Sumita optical-glass catalog and discontinued-glass downloads. https://www.sumita-opt.co.jp/en/download/
