# CANON EF 400mm f/2.8 L IS USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 6,115,188 A  
**Application Number:** 09/172,164  
**Filed:** October 14, 1998  
**Granted:** September 5, 2000  
**Inventors:** Akihiro Nishio; Hideki Ogawa; Makoto Misaka  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** *Optical System and Optical Apparatus Having the Same*  
**Embodiment analyzed:** Numerical Example 25  
**Production correlation:** CANON EF 400mm f/2.8 L IS USM

Numerical Example 25 is the fixed prescription used for this model. The patent gives the example as
$f = 392.15$ mm, Fno = 2.9, and $2\omega = 6.3^\circ$, while Canon marketed the EF 400mm f/2.8L IS USM as a
400 mm f/2.8 lens beginning in September 1999. The design values are retained without scaling; the marketed
400 mm and f/2.8 values remain separate product specifications rather than replacements for the patent values.
[1, PDF pp. 76–80; 2]

The production correlation rests on several convergent features rather than on a Canon statement that the released
lens is literally Numerical Example 25:

1. The patent's 392.15 mm / F/2.9 design lies directly on the marketed 400 mm / f/2.8 class without requiring a
   scale transformation.
2. The raw patent path contains 17 media elements in 13 air-separated groups when the front protection glass HG and
   rear optical filter FL are counted. Canon publishes 17 elements in 13 groups and explicitly states that its
   protection glass and rear filter are included in that total. [2]
3. Example 25 contains two elements at $n_d = 1.496999$, $\nu_d = 81.5$ and one element at
   $n_d = 1.433870$, $\nu_d = 95.1$. The data file treats the former as UD-class by manufacturer correlation and
   the latter as synthetic fluorite; Canon states that the production lens uses two UD elements and one fluorite
   element. [2]
4. The patent places focusing in the small negative L2 unit and image stabilization in the transversely movable
   negative L3b subunit. Canon's production description likewise identifies a reduced-mass focusing group and image
   stabilization. [1, cols. 27–32; 2]
5. The patent priority and filing chronology precede the lens's September 1999 market introduction. [1; 2]

The active LensVisualizer model follows the current prescription rules rather than Canon's marketed element count. It
retains the front protection glass but omits the rear optical filter and the inactive flare-cutter bookkeeping plane,
leaving 16 modeled glass elements in 12 air-separated groups. No source dimension is scaled. Example 25 is entirely
spherical, so there are no aspheric coefficients and no coefficient transformation to perform. The USPTO Certificate of
Correction does not amend Numerical Example 25; no numerical correction to the selected prescription is applied. [1,
PDF pp. 79–83]

## Optical Architecture

The design is a positive–negative–positive inner-focusing telephoto system with a centered aperture stop between the
negative L2 focus unit and the positive L3 rear unit. The patent further subdivides both major positive units into
positive–negative–positive power sequences: L1a/L1b/L1c in the front unit and L3a/L3b/L3c in the rear unit. L3b is the
image-stabilization subunit. Figure 88 shows the same hierarchy graphically, including HG, L1, L2, SP, L3, FL, FC, and
IP. [1, Fig. 88; cols. 27–32]

The following focal lengths are isolated-group values computed with each complete group placed in air. They describe
standalone group power and must not be read as the groups' in-situ contribution inside the assembled lens.

| Unit | Composition | Isolated group EFL (mm) | Sign / modeled function |
| --- | --- | ---: | --- |
| L1a | one positive element | +303.186311 | positive front subunit |
| L1b | positive + negative, air spaced | −856.133013 | negative middle subunit |
| L1c | positive + negative, air spaced | +341.654870 | positive rear subunit |
| L1 | L1a + L1b + L1c | +200.884380 | main front positive unit |
| L2 | cemented positive + negative | −137.334501 | axially moving inner-focus unit |
| L3a | cemented negative + positive | +122.300970 | positive pre-IS subunit |
| L3b | cemented positive/negative pair + separate negative | −44.513962 | transversely movable IS subunit |
| L3c | positive + cemented positive/negative pair | +63.562156 | positive rear subunit |
| L3 | L3a + L3b + L3c | +353.205477 | rear positive unit |

The stop occupies the patent's R16 axial station and is encoded as the single `STO` surface. The patent publishes the
stop location and F/2.9 but not a physical stop diameter. The modeled stop semi-diameter of 19.938798067 mm is therefore
an inferred consistency value back-solved from the published f-number and the front-group pupil magnification, not a
source dimension.

The patent also does not publish semi-diameters for Example 25. The modeled clear semi-diameters are consequently
inferences constrained by Figure 88, the production barrel envelope, the imposed F/2.9 pupil, traced on-axis and
configured off-axis bundles, and the current edge-thickness, rim-slope, and shared-gap geometry rules. They are not
patent measurements.

Rear normalization is another explicit modeling boundary. Patent surfaces R30–R31 form the 2.20 mm rear optical filter,
and R32 is the inactive flare-cutter plane. Both are excluded from the ordinary sequential model. Replacing only the
filter with an air-equivalent path gives 70.680871512 mm from R29 to the source image plane; the rounded prescription's
independently traced infinity focus lies 0.016884094 mm farther back. The modeled R29→IMG distance is therefore
70.697755606 mm. This keeps the active model at paraxial best focus while preserving the source discrepancy as a
reported normalization rather than silently altering a patent surface.

## Element-by-Element Analysis

The focal lengths in this section are the standalone-in-air element focal lengths stored in the final data file. For
cemented groups, the net cemented-group power is separately identified so that element power is not confused with the
behavior of the bonded assembly.

### HG — Protection glass

**HG — Plane-Parallel Plate.** $n_d = 1.516330$, $\nu_d = 64.1$. Glass: `S-BSL7 coefficient proxy (patent 516641; production supplier unspecified)`. Standalone power: zero.

HG is the flat object-side protection plate shown in Figure 88. The patent expressly allows an object-side flat glass
plate or transparent member to protect the exposed optical surface and reduce focus displacement associated with
temperature-dependent expansion or contraction. Canon also states that the released lens contains protection glass and
counts it among the 17 marketed elements. [1, col. 32; 2]

The plate contributes no paraxial power in isolation. It is nevertheless retained because it is an optical medium in the
patent path and part of the production element count, unlike the rear filter that the current modeling rules require to
be omitted.

### L1a — Front positive subunit

**L1a — Biconvex Positive.** $n_d = 1.496999$, $\nu_d = 81.5$. Glass: `S-FPL51 coefficient proxy (patent 497815; production supplier unspecified; UD-class correlation)`. Standalone $f = +303.186311$ mm.

L1a is the single positive front subunit specified by the third embodiment. The patent uses the power ratio $f_{1a}/f$
and the L1a-to-L1b separation as principal constraints on the front unit: enough positive power is required to converge
the large front beam and reduce the diameter and mass demanded of subsequent components, but excessive power would
make spherical-aberration correction more difficult. [1, cols. 29–30]

Its $n_d/\nu_d$ coordinate is one of the two identical high-Abbe coordinates in the front unit. The data file calls it
UD-class only because Canon states that the production lens has two UD elements; no vendor glass name is assigned from
that correlation alone. [2]

### L1b — Negative middle subunit

**L1b-P — Plano-Convex Positive.** $n_d = 1.496999$, $\nu_d = 81.5$. Glass: `S-FPL51 coefficient proxy (patent 497815; production supplier unspecified; UD-class correlation)`. Standalone $f = +227.594019$ mm.

**L1b-N — Biconcave Negative.** $n_d = 1.834807$, $\nu_d = 42.7$. Glass: `TAFD5G coefficient proxy (patent 835427; production supplier unspecified)`. Standalone $f = -165.488385$ mm.

The two air-spaced elements combine to an isolated L1b EFL of −856.133013 mm. The patent deliberately makes this middle
subunit negative. Its stated purpose is to moderate spherical and longitudinal chromatic aberration generated in the
front positive subunit while the positive-then-negative ordering helps place the L1b principal point toward the object
side and preserves the required separation from L1a. [1, cols. 29–30]

The positive member repeats L1a's high-Abbe coordinate and is the second production-correlated UD-class element. The
negative member uses substantially higher index and lower Abbe number. That pairing supports the patent's broad
achromatizing intent, but the data carry only $n_d$ and $\nu_d$; no claim about anomalous partial dispersion follows from
these values alone.

### L1c — Positive rear subunit of L1

**L1c-P — Biconvex Positive.** $n_d = 1.433870$, $\nu_d = 95.1$. Glass: `Synthetic fluorite (CaF₂; manufacturer-correlated)`. Standalone $f = +212.185301$ mm.

**L1c-N — Negative Meniscus.** $n_d = 1.516330$, $\nu_d = 64.1$. Glass: `S-BSL7 coefficient proxy (patent 516641; production supplier unspecified)`. Standalone $f = -462.297887$ mm.

These elements form an isolated L1c EFL of +341.654870 mm. The patent describes L1c as the positive rear subunit that
restores positive power after L1b and uses a negative meniscus to assist correction of the first unit's spherical and
comatic aberrations. [1, col. 30]

The positive member is the only Example-25 coordinate at $n_d = 1.433870$, $\nu_d = 95.1$. The data file identifies it
as synthetic fluorite because that coordinate is fluorite-like and Canon independently specifies one fluorite element in
the production lens. This is a production correlation, not a vendor-glass lookup. [2]

### L2 — Cemented negative inner-focus unit

**L2-P — Biconvex Positive.** $n_d = 1.805181$, $\nu_d = 25.4$. Glass: `S-TIH6 coefficient proxy (patent 805254; production supplier unspecified)`. Standalone $f = +194.582241$ mm.

**L2-N — Biconcave Negative.** $n_d = 1.804000$, $\nu_d = 46.6$. Glass: `H-ZLaF50D coefficient proxy (patent 804466; production supplier unspecified)`. Standalone $f = -80.042831$ mm.

The two elements are cemented and together have an isolated EFL of −137.334501 mm. This net group power, rather than
either standalone element power, is the relevant quantity for the patent's focusing condition (26). The patent specifies
a cemented positive/negative L2 to keep the focus unit compact and to reduce the variation of longitudinal chromatic
aberration during focusing. [1, col. 31]

The assembled optical system uses L2 in a converging beam, so its actual influence cannot be inferred by simply adding
its standalone element powers. The data therefore distinguish the positive and negative component focal lengths from
the negative net power of the cemented group and from its in-situ action in the full system.

### L3a — Positive pre-stabilization subunit

**L3a-N — Negative Meniscus.** $n_d = 1.846658$, $\nu_d = 23.9$. Glass: `PBH53 coefficient proxy (patent 847239; production supplier unspecified)`. Standalone $f = -93.365654$ mm.

**L3a-P — Biconvex Positive.** $n_d = 1.772499$, $\nu_d = 49.6$. Glass: `E-LASF016 coefficient proxy (patent 772496; production supplier unspecified)`. Standalone $f = +52.930040$ mm.

Although the first member is negative in isolation, the cemented pair is strongly net positive, with an isolated L3a
EFL of +122.300970 mm. In the patent architecture L3a further converges the beam emerging from L2 before it reaches the
image-stabilization subunit. That convergence is one of the means by which the transverse L3b assembly can remain
relatively small. [1, cols. 27–28]

### L3b — Negative image-stabilization subunit

**L3b-P — Biconvex Positive.** $n_d = 1.846658$, $\nu_d = 23.9$. Glass: `PBH53 coefficient proxy (patent 847239; production supplier unspecified)`. Standalone $f = +72.402680$ mm.

**L3b-N1 — Biconcave Negative.** $n_d = 1.622992$, $\nu_d = 58.2$. Glass: `S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)`. Standalone $f = -53.607318$ mm.

**L3b-N2 — Biconcave Negative.** $n_d = 1.804000$, $\nu_d = 46.6$. Glass: `H-ZLaF50D coefficient proxy (patent 804466; production supplier unspecified)`. Standalone $f = -53.979361$ mm.

L3b-P and L3b-N1 are cemented; a strongly curved air gap then separates that pair from L3b-N2. The complete
L3b subunit has isolated EFL −44.513962 mm. This is the subunit marked `LT` in Figure 88 and identified by the patent as moving perpendicular to the
optical axis for image stabilization. [1, Fig. 88; cols. 28, 31–32]

The three-element composition also matches the patent's stated preference that L3b contain a plurality of negative
lenses and one positive lens. Its strong negative power is intentional: with positive L3a before it and positive L3c
after it, the design can obtain useful image-displacement sensitivity from a relatively small transverse movement while
retaining the total focal length and controlling decentering aberrations. [1, col. 32]

### L3c — Positive rear subunit

**L3c-P1 — Biconvex Positive.** $n_d = 1.622992$, $\nu_d = 58.2$. Glass: `S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)`. Standalone $f = +117.502293$ mm.

**L3c-P2 — Biconvex Positive.** $n_d = 1.677900$, $\nu_d = 55.3$. Glass: `S-LAL12 coefficient proxy (patent 678553; production supplier unspecified)`. Standalone $f = +53.972822$ mm.

**L3c-N — Biconcave Negative.** $n_d = 1.882997$, $\nu_d = 40.8$. Glass: `S-LAH58 coefficient proxy (patent 883408; production supplier unspecified)`. Standalone $f = -80.893950$ mm.

L3c-P2 and L3c-N form the final cemented pair. Together with L3c-P1, the complete L3c subunit has isolated EFL
+63.562156 mm. The patent places this positive subunit behind the
negative stabilizer so that L3b can be made sufficiently negative for image-displacement sensitivity without sacrificing
the positive net power required of L3. [1, cols. 28, 31–32]

The final powered surface is R29. The rear filter and flare-cutter planes shown in Figure 88 lie after it in the patent
source path but are not represented as modeled elements or surfaces in the final data file.

## Glass Identification and Selection

The patent does not name historical glass vendors. Its numerical table gives only refractive index and Abbe number.
A six-vendor coordinate audit finds compatible coefficient-backed catalog equivalents for every non-fluorite
coordinate, often under several manufacturer names. The final data preserves the patent coordinates and uses those
curves as supplier-neutral spectral proxies; the names do not identify Canon's historical production melts. [4–9]

| Source coordinate $n_d/\nu_d$ | Modeled elements | Data annotation / identification status |
| --- | --- | --- |
| 1.516330 / 64.1 | HG, L1c-N | `S-BSL7 coefficient proxy (patent 516641; production supplier unspecified)` |
| 1.496999 / 81.5 | L1a, L1b-P | `S-FPL51 coefficient proxy (patent 497815; production supplier unspecified; UD-class correlation)` |
| 1.834807 / 42.7 | L1b-N | `TAFD5G coefficient proxy (patent 835427; production supplier unspecified)` |
| 1.433870 / 95.1 | L1c-P | `Synthetic fluorite (CaF₂; manufacturer-correlated)` |
| 1.805181 / 25.4 | L2-P | `S-TIH6 coefficient proxy (patent 805254; production supplier unspecified)` |
| 1.804000 / 46.6 | L2-N, L3b-N2 | `H-ZLaF50D coefficient proxy (patent 804466; production supplier unspecified)` |
| 1.846658 / 23.9 | L3a-N, L3b-P | `PBH53 coefficient proxy (patent 847239; production supplier unspecified)` |
| 1.772499 / 49.6 | L3a-P | `E-LASF016 coefficient proxy (patent 772496; production supplier unspecified)` |
| 1.622992 / 58.2 | L3b-N1, L3c-P1 | `S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)` |
| 1.677900 / 55.3 | L3c-P2 | `S-LAL12 coefficient proxy (patent 678553; production supplier unspecified)` |
| 1.882997 / 40.8 | L3c-N | `S-LAH58 coefficient proxy (patent 883408; production supplier unspecified)` |

Canon's product description supplies the special-material count—one fluorite and two UD elements—but it does not name
vendor melts or publish the patent's material coordinates. That source is therefore used only to classify the unique
fluorite-coordinate element and the two identical high-Abbe front elements; the remaining class labels come from
coordinate comparison against current optical-glass catalogs rather than from a production bill of materials. [2]

No element in the final data carries `nC`, `nF`, `ng`, or `dPgF`. Example 25's aberration figure plots d-, C-, F-, and
g-line performance, but the numerical prescription does not publish those line indices by element. Consequently the
analysis does not claim apochromatic correction, anomalous partial dispersion, or vendor-Sellmeier behavior from the
$n_d/\nu_d$ pairs alone. [1, Fig. 92]

## Focus Mechanism

The patent makes L2 the axial inner-focus unit and states that it moves toward the image side as object distance is
reduced. It does not publish a finite-distance spacing table, focus travel, or close-focus state for Numerical Example
25. The data therefore carries focus status `CONSTRAINED_RECONSTRUCTION`, not `PUBLISHED`. [1, cols. 27–32]

The reconstruction preserves the patent-defined single translating cemented group and varies only the two adjacent air
gaps:

| Gap | Infinity (mm) | Reconstructed 3.0 m state (mm) | Change (mm) |
| --- | ---: | ---: | ---: |
| D12 / pre-L2 | 24.360000000 | 43.154827332 | +18.794827332 |
| D15 / post-L2 | 98.830000000 | 80.035172668 | −18.794827332 |

The sum D12 + D15 remains 123.190000000 mm, so L2 translates rigidly without introducing a second internal degree of
freedom. Canon's marketed 3.0 m closest-focus distance is the external constraint used to solve the translation. [2]

At that reconstructed state, independent paraxial tracing of the final arrays gives 0.154382970× magnification, compared
with Canon's rounded 0.15× specification, and an effective focal length of 341.501817 mm. The latter differs materially
from the 392.139126 mm infinity EFL, so the model exhibits substantial focus breathing. These are computed results of the
reconstruction, not manufacturer-published close-focus optical constants.

Canon identifies the released lens as USM-equipped and attributes its high autofocus speed in part to reducing the mass
of the focusing group. That product statement is consistent with the patent's choice of the small L2 unit for inner
focus, but it is product metadata rather than a patent prescription parameter. [2]

## Image Stabilization

The patent assigns image stabilization to L3b, the negative subunit between positive L3a and positive L3c. During
stabilization L3b moves perpendicular to the optical axis, shown by the `LT` arrow in Figure 88. The patent's design
rationale is that a converged beam at L3b allows a smaller moving unit, while sufficiently strong negative power in L3b,
followed by positive L3c, raises image-displacement sensitivity for a given transverse movement. [1, Fig. 88; cols.
27–32]

The final LensVisualizer prescription represents the centered optical state only. It does not encode a transverse
decentering range or a separate IS control state, because Example 25 does not publish a numerical L3b displacement table
that can be transcribed into the sequential data. Thus the presence and identity of the stabilization group are patent
facts, whereas any numerical IS displacement would be unsupported by the selected example.

Canon independently identifies the production lens as image stabilized. That supports the production correlation but
does not convert the patent's unquantified transverse motion into a published production travel value. [2]

## Chromatic Correction Strategy

The patent's third embodiment distributes chromatic correction across several distinct mechanisms rather than relying on
a single special-material doublet. L1a and the positive element of L1b use the same high-Abbe coordinate, and condition
(22)–(25) explicitly constrains those positive elements to high Abbe number and adequate refractive index. The negative
L1b power is then used to moderate longitudinal chromatic aberration generated by the front positive subunit. [1, cols.
29–30]

L1c adds the unique $\nu_d = 95.1$ fluorite-coordinate positive element, followed by a negative meniscus. In the
production correlation, this corresponds to Canon's single fluorite element, while the two $\nu_d = 81.5$ front elements
correspond to the two marketed UD elements. [2]

The focus group uses a cemented positive/negative pair with markedly different Abbe numbers, and the patent specifically
states that this cemented construction reduces variation of longitudinal chromatic aberration with focusing. The rear
L3 groups continue the alternating high-/lower-dispersion pairing around the strongly negative stabilization subunit.
[1, col. 31]

These observations establish a deliberate chromatic-correction architecture, but not an apochromatic classification.
The final data contains no per-element C/F/g indices, no `dPgF`, and no validated vendor Sellmeier assignments from which
secondary-spectrum behavior could be quantified.

## Conditional Expressions

Numerical Example 25 is the fourth example of the patent's third embodiment. The final data arrays independently
reproduce the Table 3 design factors. For negative-power groups, the signed ratios are shown below while the patent's
inequalities apply to their magnitudes. Every general condition (18)–(29) and every narrower preferred condition
(18a)–(29a) is satisfied by the recomputed values.

| Condition | Quantity | General range | Computed from final data | Preferred range | Result |
| --- | --- | --- | ---: | --- | --- |
| (18) | $f_{1a}/f$ | 0.4–1.1 | 0.773139 | 0.5–0.9 | pass |
| (19) | $D_{1ab}/f$ | 0.035–0.15 | 0.056968 | 0.05–0.11 | pass |
| (20) | $f_{1b}/f$ | $|\cdot|$ = 1.0–3.0 | −2.183177 | $|\cdot|$ = 1.2–2.5 | pass |
| (21) | $f_{1c}/f$ | 0.4–1.2 | 0.871235 | 0.55–1.0 | pass |
| (22) | $\nu_{1ap}$ | > 70 | 81.5 | > 80 | pass |
| (23) | $N_{1ap}$ | > 1.43 | 1.496999 | > 1.49 | pass |
| (24) | $\nu_{1bp}$ | > 70 | 81.5 | > 80 | pass |
| (25) | $N_{1bp}$ | > 1.43 | 1.496999 | > 1.49 | pass |
| (26) | $f_2/f$ | $|\cdot|$ = 0.2–0.6 | −0.350209 | $|\cdot|$ = 0.3–0.45 | pass |
| (27) | $f_{3a}/f$ | 0.15–0.5 | 0.311873 | 0.2–0.45 | pass |
| (28) | $f_{3b}/f$ | $|\cdot|$ = 0.05–0.15 | −0.113513 | $|\cdot|$ = 0.06–0.13 | pass |
| (29) | $f_{3c}/f$ | 0.08–0.2 | 0.162086 | 0.1–0.18 | pass |

Conditions (18)–(21) govern the positive–negative–positive subdivision of L1 and its spacing; (22)–(25) constrain the
high-Abbe positive elements in L1a and L1b; (26) limits the negative focus-group power; and (27)–(29) set the
positive–negative–positive distribution inside L3. The calculated agreement with the patent's printed Example-25 values
is a prescription cross-check rather than an independent claim about production tolerances. [1, cols. 29–35, Table 3]

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD matrix calculation applied to the final modeled arrays
give an infinity EFL of 392.139125629 mm. The residual relative to the patent's stated 392.15 mm is −0.010874371 mm,
consistent with the rounded radii, spacings, and indices in the published numerical table. The two matrix methods agree
to a maximum absolute matrix difference of approximately $7.69\times10^{-18}$. With R1 as the front-vertex origin,
the front principal plane is at $H_1=-25.422054384$ mm. The rear principal plane is 321.441370024 mm objectward of R29
($z=-20.681370024$ mm in the same R1-referenced coordinate system).

With the rear filter and inactive flare-cutter omitted and R29→IMG normalized as described above, the active R1→IMG
track is 371.457755606 mm. The track/EFL ratio is 0.947260, below unity, so the modeled prescription is telephoto under
the project's explicit `TL/EFL < 1` definition. Its R29 back focus is far below the EFL, so it is not retrofocus under the
project's `BFD > EFL` test.

The authored stop radius reproduces F/2.9 to numerical precision: the inferred entrance-pupil diameter is
135.220388151 mm and the recovered f-number is 2.89999999994. This is only an internal consistency test because the
patent does not publish the physical stop diameter.

Surface-by-surface Petzval summation using $\phi/(n n')$ gives
$+1.899841003770\times10^{-4}\ \mathrm{mm}^{-1}$, corresponding to a conventional image-surface radius of
−5263.598364 mm. This result is computed from the source-precision prescription; it is not a patent-tabulated field
curvature value.

The inferred semi-diameter model also passes the independent spherical geometry preflight at both defined focus states:
minimum modeled element edge thickness is 0.773590768 mm, the largest actual rim-slope angle is 63.488585°, and the
smallest remaining clearance to the configured shared-gap intrusion limit is 0.030738156 mm. These values validate the
internal geometry of the authored clear apertures but do not convert the inferred semi-diameters into source facts.

## Sources and References

1. Akihiro Nishio, Hideki Ogawa, and Makoto Misaka, **US 6,115,188 A**, *Optical System and Optical Apparatus Having
   the Same*, Canon Kabushiki Kaisha, filed October 14, 1998, granted September 5, 2000. Numerical Example 25 is on the
   patent's pp. 33–35 / supplied PDF pp. 79–80; the corresponding block diagram is Fig. 88 on supplied PDF p. 59 and
   the aberration plots are Fig. 92 on supplied PDF p. 61. The third-embodiment design discussion appears on supplied
   PDF pp. 76–78. <https://patents.google.com/patent/US6115188A/en>
2. Canon Camera Museum, **EF400mm f/2.8L IS USM**. Manufacturer source for September 1999 marketing date, 17 elements
   in 13 groups, eight diaphragm blades, 3.0 m closest focus, 0.15× maximum magnification, one fluorite element, two UD
   elements, and the statement that protection glass and the rear filter are included in the lens count.
   <https://global.canon/en/c-museum/product/ef354.html>
3. Canon Camera Museum, **EOS 650 / EOS 650 QD**. Manufacturer source for the EF mount and 24 × 36 mm 35 mm image
   format used to map the production lens to `canon-ef` and `135-full-frame`.
   <https://global.canon/en/c-museum/product/film122.html>
4. OHARA INC., **Optical Glass — All Detailed Data** (April 18, 2025) and current individual glass datasheets.
   Used for independent $n_d/\nu_d$ coordinate checks, including the S-/L-prefix ambiguity at the 1.516330 / 64.1
   coordinate. <https://oharacorp.com/wp-content/uploads/2025/04/all-detailed-data-20250418.pdf>
5. HOYA GROUP Optics Division, **Optical Glass Data Download**. ZEMAX catalog including obsolete glasses, updated
   July 7, 2026. <https://www.hoya-opticalworld.com/english/datadownload/index.html>
6. SCHOTT, **Optical Glass** technical information and catalog, June 2025.
   <https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f4adcbf1>
7. HIKARI GLASS CO., LTD., **HIKARI Catalog — Optical Glass**.
   <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>
8. CDGM, **Optical Glass Catalog / ZEMAX Data**, official March 2026 catalog dataset used for the coordinate audit.
   <https://cdgmglass.com/>
9. SUMITA OPTICAL GLASS, Inc., **Optical Glass Data**. ZEMAX catalog including discontinued glasses, updated
   November 7, 2025. <https://www.sumita-opt.co.jp/en/download/>
