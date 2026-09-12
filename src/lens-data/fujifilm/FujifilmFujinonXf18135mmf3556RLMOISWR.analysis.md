## Patent Reference and Design Identification

**Patent:** US 9,651,761 B2\
**Application Number:** US 14/690,901\
**Priority:** April 25, 2014 — JP 2014-091620\
**Filed:** April 20, 2015\
**Published:** October 29, 2015 — US 2015/0309291 A1\
**Granted:** May 16, 2017\
**Inventors:** Tetsuya Ori; Michio Cho\
**Assignee:** FUJIFILM Corporation\
**Title:** Zoom Lens and Imaging Apparatus\
**Embodiment analyzed:** Example 1

The prescription represented here is Example 1 of US 9,651,761 B2, correlated to the FUJIFILM FUJINON XF 18-135mm f/3.5-5.6 R LM OIS WR. The patent and embodiment are the fixed optical source for the model. The production
correlation is not presented as a manufacturer statement that Example 1 is the shipping prescription; it rests on
multiple convergent features:

1. FUJIFILM specifies 16 elements in 12 groups, while Example 1 contains 16 glass elements in 12 air-separated groups.
2. FUJIFILM specifies four aspherical elements; Example 1 places eight aspherical surfaces on four elements: L21, L31,
   L41, and L51.
3. The production lens is marketed as 18-135 mm f/3.5-5.6. Example 1 publishes 18.50, 49.19, and 130.78 mm states at
   f/3.61, f/4.73, and f/5.81.
4. FUJIFILM describes an inner-focus mechanism driven by a linear motor. The patent uses the single negative G3/L31 as
   the focusing group and moves it toward the object for closer focus.
5. The production lens includes OIS. The patent assigns optical stabilization to the negative G4B cemented subgroup,
   moved perpendicular to the optical axis.
6. The patent priority date, April 25, 2014, closely precedes FUJIFILM's official July 5, 2014 product release date.

The marketing and design quantities are intentionally separate. The data file stores the production focal range as
18-135 mm and the patent design range as 18.50-130.78 mm; it likewise retains the marketed f/3.5-5.6 designation while
using the exact Example 1 f-numbers for the optical model. FUJIFILM's published production field is 76.5°-12°, whereas
Example 1 publishes 81.6°, 32.6°, and 12.6° at its three design stations. No uniform scale has been applied to reconcile
those differences.

## Optical Architecture

Example 1 is a six-functional-group zoom with power sequence **positive - negative - negative - positive - positive -
positive**. The first five groups are the zooming system emphasized by the patent; G6 is the optional positive rear
group expressly permitted by the patent and present in Example 1. The 16 elements form 12 air-separated groups because
four pairs are cemented.

The following focal lengths are computed from the final prescription with each functional group's actual internal
spacing and media preserved. They are group EFLs, not sums of the standalone element focal lengths printed later.

| Functional group | Computed EFL (mm) | Structure / role |
|---|---:|---|
| G1 | 76.704985 | positive front group |
| G2 | −32.303017 | negative variator group |
| G3 | −38.757644 | negative single-element focus group |
| G4 | 34.987371 | positive relay / stabilization group |
| G5 | 44.429622 | positive rear zoom group |
| G6 | 192.520547 | positive fixed rear group |

G4 and G5 contain subgroups with deliberately opposed powers. The computed values are G4A = 24.588659
mm, G4B = −44.101883 mm, G5A = 21.602616 mm, and G5B =
−31.910989 mm. G4B is also the stabilization subgroup. The aperture stop is the patent's surface 16,
between L41 and L42 within the G4A portion of the fourth group.

The cemented-pair powers must be distinguished from both standalone-element power and complete-group power:

| Cemented set | Computed net EFL (mm) | Relation to functional subgroup |
|---|---:|---|
| L11+L12 | 367.025465 | front pair within G1 |
| L42+L43 | 120.114752 | rear pair within positive G4A |
| L44+L45 | −44.101883 | complete negative G4B / OIS subgroup |
| L52+L53 | −31.910989 | complete negative G5B subgroup |

At infinity focus, the published inter-group spacings vary as follows:

| Gap | Wide 18.50 mm | Middle 49.19 mm | Telephoto 130.78 mm | Trend at infinity |
|---|---:|---:|---:|---|
| DD5 | 0.698 | 18.892 | 35.203 | increases |
| DD11 | 3.091 | 4.902 | 8.085 | increases |
| DD13 | 20.999 | 9.091 | 0.956 | decreases |
| DD22 | 4.000 | 2.524 | 1.922 | decreases |
| DD27 | 2.000 | 22.476 | 44.781 | increases |

The final model therefore reproduces the patent's zoom directions: G1-G2 and G2-G3 separations increase toward the
telephoto end, G3-G4 and G4-G5 separations decrease, and G5-G6 separation increases. In an image-plane-anchored
coordinate system, independent computation from the final arrays places G1, G2, G3, G4, and G5 progressively objectward
from wide to telephoto, while G6 remains fixed to numerical precision. None of the three published stations introduces
a movement reversal.

The ordinary active model ends at L61. Patent surfaces 30-31 form the plane-parallel member PP, which the patent
explicitly uses to represent cover glass, a prism, or filters between the lens and image plane. PP is excluded from the
LensVisualizer lens-element model. Its on-axis paraxial effect is retained by replacing the physical rear sequence
2.000 mm air + 2.850 mm at nd=1.5168 + 16.080 mm air with a single 19.958955696203 mm air-equivalent rear distance.

By the project's strict taxonomy, the zoom should not be described as a telephoto-form lens merely because it has a
"telephoto end": the computed total-track/EFL ratio at 130.78 mm is 1.300717, not less than one. The wide endpoint does
meet the project's retrofocus criterion because its computed BFD, 19.962301 mm, exceeds its 18.499552 mm EFL.

## Element-by-Element Analysis

The focal length on each first line below is the **standalone element focal length in air** computed from the element's
two radii, center thickness, and refractive index. It is not the cemented-pair or in-situ group power unless the element
itself constitutes the complete subgroup.

### L11 — Negative Meniscus, G1

**nd = 1.92286, νd = 20.88. Glass: 923209 — high-index flint class (N-SF66/FDS1 coordinate). Standalone f = −147.481889 mm.**

L11 is the object-side negative meniscus of G1 and is cemented to L12. The patent attributes the object-side negative meniscus to control of lateral chromatic aberration toward the wide-angle side, while the complete G1 positive group supplies the strong front-group power needed for the zoom. The standalone focal length above describes L11 isolated in air; it is not the focal length of the cemented L11+L12 pair or of G1.

### L12 — Plano-Convex Positive, G1 / D1

**nd = 1.59282, νd = 68.63. Glass: FCD505 (HOYA). Standalone f = 104.500523 mm.**

L12 is the positive member of the front cemented pair D1. Its high νd relative to L11 creates a strong dispersion contrast inside the pair. HOYA's historical FCD505 product note lists nd = 1.59282 and νd = 68.63, matching the patent row; HOYA's 2019 catalog revision changed the listed νd to 68.62, a current-catalog residual of −0.01 with no change to the patent prescription. The computed net focal length of L11+L12 with the cemented interface retained is +367.025465 mm; G1 as a whole, after adding L13 and the internal air spacing, is much stronger at +76.704985 mm.

### L13 — Positive Meniscus, G1

**nd = 1.75500, νd = 52.32. Glass: 755523 — lanthanum crown class. Standalone f = 95.669341 mm.**

L13 is the rear positive meniscus of G1. The patent explains that two positive lenses in G1 permit the group to carry positive power while limiting spherical aberration at the telephoto end; the combination with the negative front element also supports longitudinal chromatic correction. L13 is air-spaced from the cemented L11/L12 pair.

### L21 — Negative Meniscus, 2× Aspherical, G2

**nd = 1.85135, νd = 40.23. Glass: M-TAFD305 (catalog equivalent; supplier unresolved). Standalone f = −19.913719 mm.**

L21 is the front negative member of G2 and carries aspheric surfaces 6A and 7A. Its two aspherical faces provide shape freedom within the negative variator. The patent assigns the two negative members of G2 to suppression of spherical aberration and distortion while the group performs most of the variator function.

### L22 — Biconcave Negative, G2

**nd = 1.83481, νd = 42.73. Glass: 835427 — lanthanum glass class (S-LAH55V coordinates). Standalone f = −24.579757 mm.**

L22 is a biconcave negative lens following L21. Together, L21 and L22 establish the negative character of G2; the complete functional group has a computed EFL of −32.303017 mm. Its 835427 coordinate is catalog-compatible with S-LAH55V-class glass, but the data deliberately retains a class label rather than asserting an undocumented melt vendor.

### L23 — Biconvex Positive, G2

**nd = 1.92286, νd = 20.88. Glass: 923209 — high-index flint class (N-SF66/FDS1 coordinate). Standalone f = 20.249667 mm.**

L23 is the positive rear element of G2. The patent identifies this positive element as useful for correcting telephoto-side overcorrection of spherical aberration and for longitudinal chromatic correction. Its standalone +20.249667 mm power is therefore embedded within a group whose net power remains negative.

### L31 — Biconcave Negative, 2× Aspherical, G3 Focus Group

**nd = 1.79839, νd = 45.28. Glass: Unmatched (798453; nd=1.79839, νd=45.28). Standalone f = −38.757644 mm.**

L31 is the sole element of G3, so its standalone focal length is also the functional-group EFL: −38.757644 mm. Both surfaces are aspherical. The patent makes G3 the focusing group and states that it moves toward the object for closer focus; using a single negative element keeps the moving mass small and limits the focus travel required at the long end.

### L41 — Biconvex Positive, 2× Aspherical, G4A

**nd = 1.56867, νd = 58.50. Glass: Unmatched (569585; nd=1.56867, νd=58.50). Standalone f = 30.138473 mm.**

L41 is the front positive element of G4A and is aspherical on both faces. It lies ahead of the aperture stop. G4A as a whole has a computed EFL of +24.588659 mm and is completed by the L42/L43 cemented pair behind the stop.

### L42 — Biconvex Positive, G4A / D2

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). Standalone f = 26.564491 mm.**

L42 is the positive member of cemented pair D2 and has the highest νd in the active prescription. The stored glass label is an exact coordinate match to OHARA S-FPL51. This catalog identification supports use of Sellmeier dispersion in the project when available, but it does not by itself identify L42 as one of the production lens's two marketed ED elements.

### L43 — Negative Meniscus, G4A / D2

**nd = 1.92286, νd = 20.88. Glass: 923209 — high-index flint class (N-SF66/FDS1 coordinate). Standalone f = −32.376553 mm.**

L43 is the negative member cemented to L42. The L42+L43 pair has a computed net focal length of +120.114752 mm, while the surrounding G4A subgroup is substantially stronger because of L41 and the intervening geometry. The high-index, high-dispersion 923209-class material gives the pair a large refractive and dispersive contrast.

### L44 — Positive Meniscus, G4B / D3

**nd = 2.00069, νd = 25.46. Glass: 001255 — high-index flint class (TAFD40 coordinates). Standalone f = 33.812402 mm.**

L44 is the positive member of G4B and is cemented to L45. Its refractive index, 2.00069, is the highest in the prescription. The patent specifically couples the positive and negative glasses of G4B through index and Abbe-number inequalities intended to control astigmatism and chromatic behavior while the subgroup is decentered for stabilization.

### L45 — Biconcave Negative, G4B / D3

**nd = 1.67300, νd = 38.15. Glass: 673382 — dense flint class (S-NBH52 coordinates). Standalone f = −19.462679 mm.**

L45 is the negative member of G4B. The cemented L44/L45 pair is the complete G4B subgroup and has a computed EFL of −44.101883 mm. The patent further specifies that this cemented interface be convex toward the image side and have the smallest absolute radius among the G4B surfaces, a geometry intended to reduce decenter sensitivity and higher-order aberration changes during stabilization.

### L51 — Biconvex Positive, 2× Aspherical, G5A

**nd = 1.66630, νd = 55.16. Glass: Unmatched (666552; nd=1.66630, νd=55.16). Standalone f = 21.602616 mm.**

L51 is the biconvex positive element of G5A and is aspherical on both faces. As G5A contains only this element, its standalone focal length and subgroup EFL are both +21.602616 mm. It is followed by the negative cemented G5B pair, producing a complete G5 EFL of +44.429622 mm rather than simply adding the isolated element powers.

### L52 — Biconcave Negative, G5B / D4

**nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA). Standalone f = −18.347056 mm.**

L52 is the biconcave negative member of cemented pair D4. The patent explicitly favors cementing the biconcave and biconvex members of G5B to suppress higher-order aberrations and sensitivity to relative decentering while allowing substantial negative power.

### L53 — Biconvex Positive, G5B / D4

**nd = 1.72825, νd = 28.46. Glass: S-TIH10 (OHARA). Standalone f = 45.835931 mm.**

L53 is the positive biconvex partner in D4. The L52+L53 cemented pair has a computed net focal length of −31.910989 mm, despite L53's positive standalone power. This pair forms the negative G5B subgroup behind the positive aspheric L51.

### L61 — Positive Meniscus, G6

**nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA). Standalone f = 192.520547 mm.**

L61 is the most image-side positive element and the only element of G6. Its standalone and group EFL are +192.520547 mm. The patent describes the optional positive sixth group as a means of moderating image-plane incidence at the wide end and assisting distortion and lateral-chromatic control toward the telephoto end; in the final model G6 is fixed relative to the image plane while the preceding groups move with zoom.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not name glass manufacturers. The data-file
glass labels therefore distinguish exact catalog-coordinate matches from generic coordinate classes and unresolved
pairs. A catalog coordinate match is evidence that a public glass can reproduce the patent's nd/νd point; it is not
evidence that FUJIFILM physically used that vendor's melt in the production lens.

| Element(s) | nd / νd | Data-file glass label | Identification status |
|---|---:|---|---|
| L11, L23, L43 | 1.92286 / 20.88 | 923209 — high-index flint class (N-SF66/FDS1 coordinate) | Exact coordinate class; vendor not asserted |
| L12 | 1.59282 / 68.63 | FCD505 (HOYA) | Historical HOYA coordinate match; current catalog Δνd = −0.01 |
| L13 | 1.75500 / 52.32 | 755523 — lanthanum crown class | Exact coordinate class; vendor not asserted |
| L21 | 1.85135 / 40.23 | M-TAFD305 catalog equivalent | Δnd ≈ −0.000002; Δνd ≈ −0.126; supplier unresolved |
| L22 | 1.83481 / 42.73 | 835427 — lanthanum glass class (S-LAH55V coordinates) | Exact coordinate class; vendor not asserted |
| L31 | 1.79839 / 45.28 | Unmatched (798453) | No exact adopted public match |
| L41 | 1.56867 / 58.50 | Unmatched (569585) | No exact adopted public match |
| L42 | 1.49700 / 81.54 | S-FPL51 (OHARA) | Exact OHARA coordinate match |
| L44 | 2.00069 / 25.46 | 001255 — high-index flint class (TAFD40 coordinates) | Exact coordinate class; historical vendor not asserted |
| L45 | 1.67300 / 38.15 | 673382 — dense flint class (S-NBH52 coordinates) | Exact coordinate class; vendor not asserted |
| L51 | 1.66630 / 55.16 | Unmatched (666552) | No exact adopted public match |
| L52 | 1.88300 / 40.76 | S-LAH58 (OHARA) | Exact OHARA coordinate match |
| L53 | 1.72825 / 28.46 | S-TIH10 (OHARA) | Exact OHARA coordinate match |
| L61 | 1.48749 / 70.23 | S-FSL5 (OHARA) | Exact OHARA coordinate match |

The palette alternates high-index/high-dispersion materials with higher-νd positive glasses at several correction
nodes. G1 contrasts the 923209-class negative L11 with the much higher-νd L12; G4A contrasts S-FPL51-coordinate L42
with the 923209-class L43; and the OIS subgroup G4B deliberately pairs the very high-index L44 with lower-index L45.
The latter pairing is explicitly constrained by the patent's conditions (3) and (4), discussed below.

FUJIFILM's production specification states that the commercial lens contains two anomalous-dispersion/ED elements.
The patent does not identify which Example 1 slots correspond to those marketed elements, and the final data file does
not author `nC`, `nF`, `ng`, `dPgF`, or `apd` fields from the patent. Consequently, this analysis does not assign the
two production ED designations to specific prescription elements and makes no APO claim. Named catalog matches such as
S-FPL51, S-LAH58, S-TIH10, S-FSL5, FCD505, and N-SF66-class coordinates may support catalog Sellmeier resolution in
the application, but that catalog behavior remains distinct from a patent-stated melt identity.

## Focus Mechanism

The patent makes G3 a single negative focusing group and states that G3 moves **toward the object** when focusing on a
closer subject. FUJIFILM separately describes the production lens as an inner-focus design using a light focus lens and a
linear motor. Those source statements establish the mechanism qualitatively, but the patent publishes only
infinity-focus zoom spacings for Example 1.

The finite-focus states in the data file are therefore a **CONSTRAINED_RECONSTRUCTION**, not source-published spacing
rows. The reconstruction uses only the G3 degree of freedom, conserves `DD11 + DD13` at each zoom station, and solves
the image condition at the production macro minimum focus distance of 0.45 m measured from the physical sensor plane.
The resulting endpoint states are:

| Zoom state | DD11 infinity → 0.45 m (mm) | DD13 infinity → 0.45 m (mm) | G3 objectward travel (mm) | Paraxial m at 0.45 m |
|---|---:|---:|---:|---:|
| Wide | 3.091000 → 1.941319 | 20.999000 → 22.148681 | 1.149681 | −0.050308 |
| Middle | 4.902000 → 2.616626 | 9.091000 → 11.376374 | 2.285374 | −0.125976 |
| Telephoto | 8.085000 → 2.436240 | 0.956000 → 6.604760 | 5.648760 | −0.273929 |

The telephoto close-state magnitude, |m| = 0.273929×, is consistent with FUJIFILM's rounded 0.27× maximum-magnification
specification. That agreement is a cross-check on the reconstruction; it does not convert the reconstructed DD11/DD13
values into patent-published data.

## Aspherical Surfaces

Example 1 has eight aspherical surfaces on four elements: L21 (6A, 7A), L31 (12A, 13A), L41 (14A, 15A), and L51
(23A, 24A). The patent defines the sag with radial height `h`:

`Z(h) = C h² / [1 + sqrt(1 − KA C² h²)] + Σ A_m h^m`, for `m = 3...20`, with `C = 1/R`.

LensVisualizer uses the standard conic denominator containing `1 + K`; accordingly, the conversion is `K = KA − 1`.
Every Example 1 asphere has `KA = 1`, so every authored conic constant is `K = 0`. Odd radial powers are intentional:
because `h` is radial distance, terms such as A3 and A5 remain rotationally symmetric.

No uniform scale is applied to the prescription. Therefore the dimensional asphere coefficients are transcribed at
their source scale; the project scaling transform `A_p,scaled = A_p,source / s^(p−1)` is not invoked. The only
parameter conversion is the patent `KA` to project `K`.

The complete coefficient sets stored in the final data file are:

| Coefficient | 6A | 7A | 12A | 13A |
|---|---:|---:|---:|---:|
| K | 0 | 0 | 0 | 0 |
| A3 | −3.3258659E−05 | −1.3257457E−06 | −2.5716568E−04 | −2.4949403E−04 |
| A4 | 1.0879994E−04 | 1.0274592E−04 | −3.1477418E−05 | −3.5725409E−05 |
| A5 | −4.7885502E−06 | −3.8403367E−06 | −5.8230201E−07 | 2.1839917E−06 |
| A6 | −1.0759633E−06 | 4.2461037E−09 | 1.3471177E−06 | 4.3156603E−07 |
| A7 | 6.1277394E−08 | −1.0911228E−07 | −6.6131579E−08 | 4.6890150E−08 |
| A8 | 4.4147811E−09 | 3.6932216E−09 | −1.1914342E−09 | −2.7142956E−09 |
| A9 | −3.4318863E−11 | 9.9033512E−10 | −2.4884705E−09 | −1.3765897E−09 |
| A10 | −1.6729044E−11 | −1.4923235E−11 | 2.7859801E−10 | −1.1766821E−10 |
| A11 | −9.9458644E−13 | 7.5628602E−12 | 9.3821157E−12 | 9.5832042E−12 |
| A12 | 3.6090358E−15 | −1.1009805E−12 | 4.7688895E−13 | 2.4935568E−12 |
| A13 | 2.0883127E−15 | −4.1239435E−14 | −3.7218163E−14 | 2.8498926E−13 |
| A14 | 2.1746094E−16 | 2.3398595E−15 | −1.5438437E−14 | 8.7246413E−15 |
| A15 | 1.1722253E−17 | 4.1733591E−16 | −2.1576117E−15 | 6.5806925E−16 |
| A16 | 1.5033988E−19 | 2.2479475E−17 | −2.3652804E−16 | −2.7329827E−16 |
| A17 | −4.0529382E−20 | −8.7519908E−19 | −2.0527067E−17 | −1.7352286E−16 |
| A18 | −4.5240895E−21 | −3.2736360E−19 | 6.8754879E−18 | −6.9614104E−17 |
| A19 | −1.9098322E−22 | −3.0000033E−20 | 1.2534597E−18 | 1.7448607E−17 |
| A20 | 2.1242397E−23 | 3.6292592E−21 | −1.3017061E−19 | −9.1035356E−19 |

| Coefficient | 14A | 15A | 23A | 24A |
|---|---:|---:|---:|---:|
| K | 0 | 0 | 0 | 0 |
| A3 | −2.5260169E−05 | −3.2153387E−05 | −3.5430903E−05 | −3.8587863E−05 |
| A4 | 7.5611598E−06 | 3.5024607E−05 | −3.0748443E−06 | 3.4605942E−05 |
| A5 | −8.8679250E−06 | −1.4415764E−05 | −7.9498260E−06 | −2.2352878E−06 |
| A6 | 1.3986681E−06 | 2.0048636E−06 | 5.3530373E−07 | −1.5966209E−07 |
| A7 | −3.8239999E−08 | 8.5395147E−08 | 9.9676262E−08 | 2.7115440E−08 |
| A8 | −6.2990664E−09 | −2.7593537E−08 | −6.5293589E−09 | 3.9965050E−09 |
| A9 | −1.6339604E−11 | −1.5824477E−09 | −1.1113069E−09 | −1.1028928E−09 |
| A10 | 3.5819503E−11 | 9.7508883E−11 | −2.8251173E−10 | 1.3092306E−10 |
| A11 | −8.8035859E−12 | 2.7671017E−11 | 1.2613768E−11 | −4.5416954E−12 |
| A12 | −5.7183112E−13 | 3.2754768E−12 | 4.5611890E−12 | −1.9602695E−12 |
| A13 | 8.6147165E−14 | 4.6387406E−14 | 4.4996069E−13 | −1.1855210E−13 |
| A14 | 3.2149749E−14 | −3.6779862E−14 | 1.7771658E−15 | 1.2366695E−14 |
| A15 | 3.9749647E−15 | −6.2819774E−15 | −4.9618221E−15 | 3.9780095E−15 |
| A16 | −1.5337120E−17 | −5.7196441E−16 | −8.9926075E−16 | 2.7200359E−16 |
| A17 | −1.4810442E−16 | −2.6177942E−17 | −2.2844918E−16 | −1.6159957E−17 |
| A18 | −3.1323886E−17 | 9.2927985E−18 | −3.1031128E−17 | −1.8700513E−18 |
| A19 | 7.9878135E−18 | 4.4727344E−18 | 1.6555816E−17 | −1.5981389E−18 |
| A20 | −4.0881988E−19 | −4.2439516E−19 | −1.0768819E−18 | 1.4631615E−19 |

Rendered Table 4 shows surface 24A A20 as **+1.4631615E−19**. Some machine-extracted text drops the leading `1.`, so the data file retains the value visible in the patent table.

The patent does not publish clear apertures. The semi-diameters in the data file are modeling inferences derived from
the final prescription's ray envelopes and then checked against edge thickness, actual aspheric rim slope, shared-band
cross-gap intrusion, conic domain, and sampled off-axis containment. Because those semi-diameters were independently
validated, the aspheric departures can be stated at the modeled rims:

| Surface | Verified inferred sd (mm) | Departure from K=0 base sphere at sd (mm) |
|---|---:|---:|
| 6A | 14.800 | 0.828377774 |
| 7A | 11.300 | 0.930278723 |
| 12A | 8.500 | −0.148966056 |
| 13A | 8.400 | −0.148132050 |
| 14A | 8.400 | −0.079963553 |
| 15A | 8.200 | −0.004550845 |
| 23A | 8.300 | −0.229558231 |
| 24A | 8.200 | 0.019479098 |

These departures are geometric properties of the final modeled apertures, not aperture dimensions published by the
patent.

## Image Stabilization

The patent divides G4 into positive G4A and negative G4B and states that **only G4B** is moved perpendicular to the
optical axis for image stabilization. In Example 1, G4B is the cemented L44/L45 doublet. The centered prescription in
the data file represents the neutral optical state; no transverse OIS displacement amplitude is authored because the
patent provides no decenter table or stabilization travel value for Example 1.

The choice of G4B is structurally important. Its complete subgroup EFL is −44.101883 mm, and its
two glasses differ by 12.69 in νd while the positive member exceeds the negative member in nd by 0.32769. The patent
connects these differences to control of chromatic and astigmatic changes during stabilization. It also specifies a
cemented interface convex toward the image side with the smallest absolute radius in the subgroup, reducing sensitivity
to relative decenter between L44 and L45.

FUJIFILM's production materials independently confirm that the commercial lens has OIS, but they do not identify the
production stabilizer as the patent's G4B subgroup. The subgroup identification therefore comes from the selected patent
correlation, not from manufacturer confirmation.

## Conditional Expressions

US 9,651,761 B2 defines five principal conditions and gives tighter preferred ranges. Recalculation from the final data
file reproduces Example 1 Table 21 to its published precision and places all five values inside the preferred ranges.

| Condition | Patent range | Preferred range | Computed from final data | Table 21 |
|---|---|---|---:|---:|
| (1) | −4 < f5/f5B < −0.7 | −4 < f5/f5B < −1 | −1.392298473019 | −1.392 |
| (2) | 0.22 < fW/f1 < 0.27 | 0.23 < fW/f1 < 0.26 | 0.241177966900 | 0.241 |
| (3) | 11.5 < νd4Bn−νd4Bp < 20 | 12 < νd4Bn−νd4Bp < 18 | 12.690000000000 | 12.69 |
| (4) | 0.15 < Nd4Bp−Nd4Bn < 0.5 | 0.15 < Nd4Bp−Nd4Bn < 0.4 | 0.327690000000 | 0.32769 |
| (5) | −8 < f1/f23T < −5.5 | −6.4 < f1/f23T < −5.5 | −5.875097167452 | −5.875 |

Condition (1) controls the balance between the positive complete G5 group and its negative G5B subgroup. Condition (2)
sets the front-group power relative to the wide-end system focal length. Conditions (3) and (4) constrain the dispersion
and index contrast within the stabilization doublet G4B. Condition (5) constrains G1 against the combined G2+G3 power
at the telephoto end. These are patent design constraints; the computed column above is an independent evaluation of the
final prescription.

## Verification Summary

First-order recomputation from the final TypeScript surface and variable-spacing arrays gives:

| State | Patent design f (mm) | Computed EFL (mm) | Computed BFD (mm) | Patent Bf (mm) | nominalFno |
|---|---:|---:|---:|---:|---:|
| Wide | 18.50 | 18.499552375 | 19.962300501 | 19.96 | 3.61 |
| Middle | 49.19 | 49.187288717 | 19.961239990 | 19.96 | 4.73 |
| Telephoto | 130.78 | 130.780127725 | 19.956703537 | 19.96 | 5.81 |

The reduced-angle `y-ν` result and an independent basis-ray ABCD construction agree to machine precision at all three
zoom stations. The total surface-by-surface Petzval sum, using `φ/(n·n′)`, is
0.002095855683528 mm⁻¹, corresponding to a reciprocal magnitude of
477.132088750 mm.

The aperture stop **position** is source data: it is patent surface 16. Its physical diameter is not published. The
data-file `STO.sd = 7.31862 mm` is therefore an inferred maximum wide-open stop radius, selected from the final
per-zoom f-number back-solves. Similarly, all ordinary surface semi-diameters are inferred model apertures rather than
patent table values.

The final geometry checks place the largest modeled rim angle at 7A
(56.119915°), the minimum element edge thickness at
L13 (0.691900 mm), the
tightest shared-band cross-gap margin at 7A->8
(0.069183 mm), and the tightest sampled ray clearance at surface
8 (0.066536 mm).
These are validation results for the modeled semi-diameters, not manufacturer mechanical dimensions.

No uniform scaling is present. The patent PP plate is omitted with its paraxial effect folded into the
19.958955696203 mm rear air-equivalent spacing, and no other dummy, filter, sensor-cover, or mechanical plane is included
in the active sequential model.

## Sources / References

1. [US 9,651,761 B2, *Zoom Lens and Imaging Apparatus*](https://patents.google.com/patent/US9651761B2/en) — selected
   patent; Example 1, FIGS. 1-2, Tables 1-4 and 21.
2. [FUJIFILM XF18-135mmF3.5-5.6 R LM OIS WR specifications](https://www.fujifilm-x.com/en-us/products/lenses/xf18-135mmf35-56-r-lm-ois-wr/specifications/)
   — production 18-135 mm f/3.5-5.6 identity, 16/12 construction, four aspherical elements, two
   anomalous-dispersion elements, 0.45 m macro MFD, 0.27× maximum magnification, seven-blade diaphragm, and f/22 minimum
   aperture.
3. [FUJIFILM product overview](https://www.fujifilm-x.com/en-ca/products/lenses/xf18-135mmf35-56-r-lm-ois-wr/) —
   manufacturer description of inner focusing, linear-motor drive, and OIS.
4. [FUJIFILM Mall product listing](https://mall-jp.fujifilm.com/shop/g/g16432853/) — official July 5, 2014 release date.
5. [SCHOTT N-SF66 optical-glass data](https://www.schott.com/shop/advanced-optics/en/search/) — reference coordinate
   `nd = 1.92286`, `νd = 20.88` for the 923209 class.
6. [HOYA FCD505 product note](https://www.hoya-opticalworld.com/english/news/past01.html) and [HOYA 2019 catalog update](https://www.hoya-opticalworld.com/english/datadownload/data_up2019.html) — historical FCD505 `nd = 1.59282`, `νd = 68.63`, with the current catalog revising `νd` to 68.62.
7. [OHARA optical-glass catalog](https://www.ohara-inc.co.jp/en/product/01000/) and [OHARA S-NBH catalog](https://oharacorp.com/glass-type/s-nbh/) — coordinate checks for S-FPL51, S-LAH55V, S-NBH52, S-LAH58, S-TIH10, and S-FSL5-class matches.

### Patent-rim review — 2026-09-12 UTC

US9651761.pdf, page 2, Fig. 1 was inspected at 600 dpi. The wide-panel glass span gives approximately 0.0719 mm/pixel. The L52/L53 cemented pair has optical half-heights near 134–138 pixels (about 9.6–9.9 mm), excluding the L61 leader line. Surfaces 25/26/27 were enlarged from 7.4/7.6/7.9 mm to 9.4/9.6/9.9 mm, preserving the stepped pair while approaching the figure. Surface and image-circle checks pass; no aspheric aperture changed. Other readings were within drawing uncertainty or contaminated by brackets and leaders.
