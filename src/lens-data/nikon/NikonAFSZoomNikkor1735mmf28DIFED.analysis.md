# NIKON AF-S ZOOM-NIKKOR 17-35mm f/2.8 D IF-ED — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2001-083421 A
**Application Number:** JP H11-262870
**Filed:** 1999-09-17
**Published:** 2001-03-30
**Inventor:** Naoko Fukuda (福田直子)
**Applicant:** Nikon Corporation (株式会社ニコン)
**Title:** Zoom lens (ズームレンズ)
**Embodiment analyzed:** Example 1

The prescription is taken from Example 1 of JP 2001-083421 A. The source is an 11-page JPO scan; the numerical prescription,
variable-spacing table, asphere coefficients, and optical layout are on patent pages 4–7, with the Example 1 aberration plots
following on pages 8–9. The implemented prescription is retained at the patent's native dimensional scale. No uniform scaling
has been applied.

The identification with the production Nikon AF-S Zoom-Nikkor 17-35mm f/2.8D IF-ED is strong but is not manufacturer-
confirmed as a patent attribution. The correlation rests on several independent points:

1. Example 1 gives design focal-length stations of 17.50, 24.00, and 34.00 mm at a printed f/2.9, closely bracketing the
   marketed 17–35 mm f/2.8 range without rescaling the prescription (JP 2001-083421 A, Example 1, p. 5).
2. The patent normalizes to 13 physical elements in 10 air-separated groups when the thin compound-asphere resin layer is
   counted as part of its glass substrate. Nikon specifies 13 elements in 10 groups for the production lens.
3. The patent has three aspherical optical surfaces: two on glass elements and one compound resin-on-glass asphere. Nikon
   specifies two glass-molded aspherical elements plus one compound aspherical element.
4. The coordinate `nd = 1.497820, νd = 82.52` occurs twice in Example 1. Those two positions are retained as ED-class
   coordinates in the data file; Nikon specifies two ED elements in the production lens.
5. Patent ¶0017 assigns close focusing to the front subgroup of the second zoom group, while Nikon identifies the production
   lens as an internal-focusing AF-S design driven by a Silent Wave Motor.
6. Nikon's product history places the lens in 1999, the same year as the patent filing.

The remaining differences are preserved rather than reconciled. The production lens is marketed as 17–35 mm f/2.8, whereas
Example 1 is 17.50–34.00 mm and prints f/2.9. No Nikon primary source cited here explicitly states that JP 2001-083421 A is the
production prescription, so the relationship is treated as an evidence-based correlation rather than a manufacturer statement.

## Optical Architecture

Example 1 is a four-macro-group wide-angle zoom with power sequence negative-positive-negative-positive: G1− / G2+ / G3− /
G4+. The positive second group is divided into a front subgroup, G2F, and a rear subgroup, G2R. G2F is also the focusing
subgroup. The aperture stop lies between G2R and G3 and maintains a fixed 3.300 mm axial spacing ahead of surface 15 while it
moves with G3 during zooming (JP 2001-083421 A, ¶0015–0017 and Fig. 2, pp. 4, 7).

Computed from the final data revision at the wide published state, the in-situ functional powers are approximately
`fG1 = -25.510 mm`, `fG2 = +39.541 mm`, `fG3 = -52.506 mm`, and `fG4 = +40.129 mm`. G2F alone is approximately +65.998 mm
and G2R approximately +83.948 mm. These are group powers in the assembled system, not the same quantities as the standalone
focal lengths listed for individual elements.

The three published infinity states reproduce Gaussian EFLs of 17.495696 mm, 23.992732 mm, and 33.995221 mm. Their last-
lens-vertex BFDs are 38.514826 mm, 43.725748 mm, and 53.342819 mm. Because BFD exceeds EFL at all three stations, the design is
retrofocus in the project's explicit first-order sense at those states. It is not telephoto by the corresponding `TL/EFL < 1`
definition: the first-surface-to-image tracks are 150.572, 146.152, and 148.424 mm, respectively.

Zooming from wide to tele decreases the G1–G2F separation (D9), increases the stop-side separation represented by D14, and
decreases the G3–G4 separation (D17). D12, the spacing between G2F and G2R at infinity, remains 5.475 mm at the three published
zoom stations. The patent variable-spacing table prints the G3–G4 row as `d18`, although Table 1 places the variable air space
after surface 17 as D17. The data model therefore applies that row to the physical D17 gap while retaining the raw source label
in the evidence record.

The source contains no rear cover-glass or filter plate after surface 24. The final surface's state-dependent Bf therefore runs
directly to the image plane; no sensor stack or synthetic rear plate is inserted.

## Element-by-Element Analysis

The element focal lengths in this section are standalone air powers recomputed from the final prescription. Cemented assembly
powers and complete-group powers are stated separately where relevant. This distinction is important for the compound asphere
and the three cemented pairs, whose in-situ behavior cannot be inferred from the standalone signs alone.

### L1 — Front Negative Meniscus, Aspherical

`nd = 1.796681, νd = 45.37. Glass: Q-LASFPH3S — coordinate-compatible spectral proxy (supplier unresolved). f = -28.267288 mm.`

L1 forms the first physical element of the negative front group G1. Its front surface, 1A, is aspherical and carries both odd
and even radial polynomial orders in the patent convention. The directly recomputed standalone focal length closely reproduces
the patent's printed condition-(1) value `f1 = -28.267 mm`.

The glass label names a coordinate-compatible spectral proxy. No vendor or melt identity is established by the patent itself.

### L2 — Compound Aspherical Element: L2r Resin Layer + L2g Glass Substrate

`L2r: nd = 1.495210, νd = 56.34. Glass: Unmatched unnamed aspherical resin. Standalone f = +589.777136 mm.`
`L2g: nd = 1.772789, νd = 49.45. Glass: 773495 — lanthanum class (supplier unresolved). Standalone f = -601.894120 mm.`

The physical L2 element is a hybrid construction: a 0.170 mm optical resin layer is bonded to a glass substrate. LensVisualizer
therefore represents the two refractive media as separate element entries, but `elementCount` remains 13 because the resin is
not a separate production lens element. The two media are annotated as the H1 compound assembly.

The net in-situ H1 power computed from source surfaces 3–5 is extremely weak, with a power-equivalent focal length of about
+52,127.723 mm. This creates an explicit discrepancy with patent condition (1), which prints `f2 = 2125.207 mm` for the second
aspherical lens. The prescription is not altered to force that intermediate value: the complete-system EFL and BFD reproduce
the source states independently, and the stated inequality remains satisfied with either the patent's printed value or the
directly modeled H1 value.

Surface 3A is the compound asphere. Its coefficient set is discussed under Aspherical Surfaces.

### L3 — Biconcave Negative

`nd = 1.803840, νd = 33.89. Glass: E-LAFH2 class (legacy HIKARI coordinate match; supplier not proven). f = -39.289431 mm.`

L3 is the third physical lens in G1 and is separated from the compound L2 by only 0.700 mm of air. Its high-index, moderate-
dispersion coordinate is a legacy coordinate match to HIKARI E-LAFH2, but that catalog relationship is not taken as proof of
the historical supplier or exact melt.

In the assembled front group it contributes to the net negative G1 power. No more specific aberration assignment is made from
its power sign or glass class alone.

### L4 — Biconvex Positive

`nd = 1.805182, νd = 25.35. Glass: 805254 — SF6 class. f = +49.734047 mm.`

L4 is the positive rear element of G1. It follows the negative L3 across a 1.900 mm air gap and terminates the front macro group.
Its coordinate is close to the SF6 class; the file remains supplier-neutral because the patent supplies only optical constants.

The complete G1 assembly is net negative at approximately -25.510 mm equivalent focal length in the wide reference state.
That group value, rather than L4's standalone positive power, governs G1's first-order role in the zoom.

### L5 — Negative Meniscus, Front Member of G2F Cemented Pair

`nd = 1.749501, νd = 35.19. Glass: J-LAF7 — coordinate-compatible spectral proxy (supplier unresolved). f = -55.690725 mm.`

L5 begins the positive G2F focusing subgroup. It is cemented directly to L6 at source surface 11; the cemented junction carries
L6's downstream refractive index and element identity in the data model.

The standalone L5 power is negative, but the complete L5+L6 cemented assembly is positive, with an in-situ equivalent focal
length of approximately +65.998 mm. The focus mechanism translates this complete cemented pair rather than changing its internal
spacing.

### L6 — Biconvex Positive, Rear Member of G2F Cemented Pair

`nd = 1.589130, νd = 61.09. Glass: 589611/589612 — SK5 class. f = +30.072608 mm.`

L6 is the positive rear member of G2F and supplies the stronger standalone positive power within the cemented pair. Its higher
Abbe number contrasts with the lower-νd front member, but the data do not carry direct line-index or anomalous-partial-dispersion
measurements for this element. The analysis therefore does not assign an APO or special partial-dispersion function to the pair.

The rear surface of L6 is followed by D12, the air gap to G2R. D12 is the gap that contracts during the constrained close-focus
reconstruction as G2F moves toward the image.

### L7 — Biconvex Positive G2R Element

`nd = 1.716999, νd = 48.04. Glass: 717480 — LAF3 class. f = +83.947853 mm.`

L7 is the single physical element of G2R and lies immediately ahead of the stop interval. At a fixed zoom station it remains fixed while G2F alone performs the reconstructed internal-focus motion.

Together G2F and G2R form the net-positive G2 macro group, computed at approximately +39.541 mm equivalent focal length at the
wide reference state. That combined group power is distinct from both L7's standalone +83.948 mm value and the +65.998 mm G2F
cemented value.

### L8 — Biconcave Negative, Front Member of G3 Cemented Pair

`nd = 1.748099, νd = 52.30. Glass: 748523 — class unresolved. f = -24.947549 mm.`

L8 begins the cemented G3 pair immediately behind the aperture stop. Its optical constants did not support a defensible exact
catalog identity, so the file retains a six-digit class-level label rather than assigning a vendor glass.

The L8+L9 cemented pair is net negative, with an in-situ equivalent focal length of approximately -52.506 mm. The stop remains
3.300 mm in front of L8's first surface throughout the published zoom states.

### L9 — Positive Meniscus, Rear Member of G3 Cemented Pair

`nd = 1.846660, νd = 23.82. Glass: 847238 — SF57/J-SF03 class. f = +47.284028 mm.`

L9 is the positive rear member of G3 and is cemented to L8 at source surface 16. Its very high refractive index and low Abbe
number place it in a dense-flint class. The final file does not claim a unique supplier: the coordinate is compatible with the
SF57/J-SF03 class, but catalog equivalence is not historical melt identification.

Although L9 is positive as a standalone element, the complete G3 cemented assembly remains net negative. This is another case
where the assembled group power, rather than individual-element sign, determines the first-order group sequence.

### L10 — Biconvex Positive, ED-Class Element

`nd = 1.497820, νd = 82.52. Glass: 498825/498826 — J-FKH1 class (supplier unresolved). f = +48.888569 mm.`

L10 begins the final positive macro group G4. The same very-high-Abbe coordinate appears again in L12. A current HIKARI
J-FKH1 row is a close coordinate-class match, and these two positions align with Nikon's published statement that the production
lens uses two ED elements. That correlation does not establish the historical supplier or exact melt.

The exact vendor and melt are not established. The source does not publish per-element `nC`, `nF`, `ng`, or `dPgF`, and the data
file does not copy those values from a merely coordinate-compatible catalog candidate.

### L11 — Negative Meniscus, Front Member of G4 Cemented Pair

`nd = 1.805182, νd = 25.35. Glass: 805254 — SF6 class. f = -38.425800 mm.`

L11 is the negative front member of the central G4 cemented pair. Its optical coordinate is the same SF6-class coordinate used
by L4, but the surrounding curvatures and cemented relationship are different.

Cementing L11 to the positive ED-class L12 produces a net-positive D3 assembly with an in-situ equivalent focal length of
approximately +130.249 mm. This cemented result should not be confused with either standalone element power.

### L12 — Biconvex Positive, ED-Class Rear Member of G4 Cemented Pair

`nd = 1.497820, νd = 82.52. Glass: 498825/498826 — J-FKH1 class (supplier unresolved). f = +31.036607 mm.`

L12 is the second occurrence of the high-Abbe ED-class coordinate. It shares the source surface 21 cemented interface with L11
and completes the D3 cemented pair.

Its standalone positive power is stronger than L10's, but no element-specific chromatic performance is inferred beyond what the
source optical constants and Nikon's published two-ED-element count support.

### L13 — Final Weak Negative Meniscus, Aspherical

`nd = 1.766840, νd = 46.80. Glass: 767468 — J-LASFH2 class (HIKARI coordinate match; supplier unresolved). f = -654.339565 mm.`

L13 is the final physical lens of G4. Its standalone power is weakly negative, while the complete G4 assembly remains net
positive at approximately +40.129 mm equivalent focal length in the wide reference state.

The front surface 23A is aspherical. Patent condition (4) also uses this glass index as `ns`; the final-data value
`ns = 1.766840` satisfies the stated requirement `1.65 < ns`.

## Glass Identification and Selection

The patent supplies d-line refractive indices and νd values, not proprietary melt names. Glass labeling therefore follows a
coordinate-audit hierarchy: exact vendor identities are used only when defensible, otherwise the file retains a six-digit
coordinate class, a broader family label, or `Unmatched (...)`. Candidate matches were checked against current OHARA, HOYA,
SCHOTT, HIKARI, CDGM, and SUMITA catalog families; a coordinate-compatible current catalog row is not treated as proof of the
supplier used in the 1999 design.

| Final data label | nd | νd | Used in | Disposition |
|---|---:|---:|---|---|
| Q-LASFPH3S spectral proxy | 1.796681 | 45.37 | L1 | supplier unresolved |
| Unmatched aspherical resin | 1.495210 | 56.34 | L2r | unnamed resin medium |
| 773495 — lanthanum class | 1.772789 | 49.45 | L2g | supplier unresolved |
| E-LAFH2 class | 1.803840 | 33.89 | L3 | legacy coordinate match; supplier not proven |
| 805254 — SF6 class | 1.805182 | 25.35 | L4, L11 | class match |
| J-LAF7 — coordinate-compatible spectral proxy (supplier unresolved) | 1.749501 | 35.19 | L5 | class match |
| 589611/589612 — SK5 class | 1.589130 | 61.09 | L6 | class match |
| 717480 — LAF3 class | 1.716999 | 48.04 | L7 | class match |
| 748523 — class unresolved | 1.748099 | 52.30 | L8 | class only |
| 847238 — SF57/J-SF03 class | 1.846660 | 23.82 | L9 | class match |
| 498825/498826 — J-FKH1 class | 1.497820 | 82.52 | L10, L12 | close coordinate match; supplier unresolved |
| 767468 — J-LASFH2 class | 1.766840 | 46.80 | L13 | close coordinate match; supplier unresolved |

The two `1.497820 / 82.52` positions are the only extremely high-Abbe coordinates in the design and correlate with Nikon's
published two-ED-element construction. That supports an ED-class identification, but not a unique glass supplier or catalog
name. No `nC`, `nF`, `ng`, or `dPgF` values are authored from the candidate catalogs, while compatible runtime catalog curves provide qualified spectral estimates. L10 and L12 use inferred APD color from the J-FKH1 proxy (catalog dPgF approximately +0.0337), without claiming measured source partial dispersion.

## Focus Mechanism

Patent ¶0017 states that focusing from infinity toward a shorter object distance moves only G2F and reduces the G2F–G2R
separation. Nikon specifies a 0.28 m minimum focus distance for the production lens and defines SLR focus distance from the
camera focal/image plane to the subject. Those facts create one mechanical degree of freedom per published zoom station.

The final model therefore uses `CONSTRAINED_RECONSTRUCTION`, not a claim that the patent publishes close-focus spacing rows.
At each 17.5, 24, and 34 mm design station, the verifier translates the complete G2F cemented pair toward the image, conserves
D9+D12 so the adjacent fixed groups remain at their published zoom positions, holds Bf fixed, and solves the object-to-image
ABCD conjugacy condition for a subject 280 mm in front of the image plane.

| Design station | D9 at infinity (mm) | D9 at 0.28 m (mm) | D12 at infinity (mm) | D12 at 0.28 m (mm) | G2F travel (mm) |
|---:|---:|---:|---:|---:|---:|
| 17.5 mm | 21.825000 | 26.016056 | 5.475000 | 1.283944 | 4.191056 |
| 24.0 mm | 9.781000 | 13.854351 | 5.475000 | 1.401649 | 4.073351 |
| 34.0 mm | 0.938000 | 5.249353 | 5.475000 | 1.163647 | 4.311353 |

A 1001-sample scan of the physically allowed G2F shift interval found exactly one conjugate root at each station. The tele
solution gives paraxial magnification `m = -0.217251`, whose magnitude falls between Nikon Japan's rounded 0.21× and Nikon USA's
0.22× maximum-reproduction figures. Those production magnification values were not solver inputs; they are an external
corroboration of the reconstruction.

The physical cam law between infinity and the 0.28 m endpoint is not published. Intermediate slider positions are therefore a
model interpolation between the code-solved endpoints and must not be read as additional patent-published prescriptions.

## Aspherical Surfaces

Example 1 uses three aspherical source surfaces: 1A on L1, 3A on the L2 compound resin layer, and 23A on L13. The patent writes
the base sag with a denominator containing `sqrt(1 - κ(Y/R)^2)`. LensVisualizer uses the standard `1 + K` form, so the
conversion is `K = κ - 1`. The source κ values 20, 99, and -10 therefore become `K = 19`, `98`, and `-11` in the data file
(JP 2001-083421 A, ¶0018–0019, pp. 4–5).

Surface 1A is unusual in that its polynomial contains odd as well as even powers of the radial height. Odd radial powers remain
rotationally symmetric because the independent variable is radial magnitude rather than a signed Cartesian coordinate.

### Surface 1A — L1 Front Asphere

Patent equation/orders: C3 through C10. Implemented coefficients at native scale:

- `A3 = -9.5109e-6 mm^-2`
- `A4 = +1.6820e-5 mm^-3`
- `A5 = -3.2312e-7 mm^-4`
- `A6 = -6.3775e-9 mm^-5`
- `A7 = +7.6231e-11 mm^-6`
- `A8 = +6.3872e-12 mm^-7`
- `A9 = +9.6455e-14 mm^-8`
- `A10 = -5.9857e-15 mm^-9`

The source coefficient table prints `C9` twice. Because the surface-1 equation explicitly runs in order from C3 through C10,
the second printed `C9 = -5.98570×10^-15` is implemented as C10 while the raw duplicate label remains preserved in the
evidence record.

At the final modeled semi-diameter `h = 24.5 mm`, the polynomial terms add `+2.762259 mm` of sag relative to the base conic.
That aperture is a modeled clear radius, not a dimension published by the patent.

### Surface 3A — L2 Compound Resin Asphere

Implemented native-scale coefficients:

- `A4 = -9.5504e-6 mm^-3`
- `A6 = +2.7475e-8 mm^-5`
- `A8 = -3.5095e-11 mm^-7`
- `A10 = +4.8894e-14 mm^-9`

At the modeled `h = 16.0 mm` semi-diameter, the polynomial departure from the base conic is `-0.261913 mm`.

### Surface 23A — L13 Front Asphere

Implemented native-scale coefficients:

- `A4 = -7.8998e-6 mm^-3`
- `A6 = -1.4880e-8 mm^-5`
- `A8 = +3.1034e-11 mm^-7`
- `A10 = -9.5600e-14 mm^-9`

At the figure-audited `h = 16.3 mm` semi-diameter, the polynomial departure from the base conic is `-0.808661 mm`.

The data schema also contains zero A12/A14 slots. These are modeled zero extensions required by the current asphere structure;
they are not additional nonzero coefficients published by the patent.

## Chromatic Correction Strategy

The source coordinate set spans dense high-index flint/lanthanum classes, moderate-dispersion crowns, and two very high-Abbe
ED-class positions. Nikon independently specifies two ED elements for the production lens, which supports the identification of
the two `1.497820 / 82.52` positions as ED-class coordinates. Specific chromatic-correction duties are not assigned from `nd`
and `νd` alone.

The available evidence does not support a stronger apochromatic claim. Example 1 does not publish per-element C/F/g line
indices or anomalous partial-dispersion values, and the final data intentionally do not import candidate-catalog `dPgF` values.
Consequently, any chromatic analysis based on these proprietary coordinates must be understood as Abbe-level unless a future
runtime catalog resolution is independently validated.

The cemented pairs also illustrate why glass labels alone do not establish a specific aberration function. D1 is net positive,
D2 net negative, and D3 net positive in situ, but their detailed chromatic and monochromatic behavior depends on the complete
curvatures, thicknesses, spacings, and spectral properties rather than on νd or power sign in isolation.

## Conditional Expressions

The patent gives four explicit design conditions. They are retained as source constraints and checked against the final model.

1. **Condition (1):** `1.0 > |f1/f2| > 0.0`. The final model reproduces L1 at `f1 = -28.267288 mm`. The directly modeled H1
   compound asphere has `f2 ≈ +52127.723 mm`, giving `|f1/f2| = 0.00054227`, which satisfies the inequality. The patent instead
   prints `f2 = 2125.207 mm` and a ratio near 0.0133. The discrepancy is retained; the source prescription is not altered.
2. **Condition (2):** `0.9 < n1/n2 < 1.1`. Using the source-defined first-element and compound-substrate indices gives
   `1.796681 / 1.772789 = 1.013477`, which lies inside the stated range.
3. **Condition (3):** `0.4 < (LaaT/LaiT)/(LaaW/LaiW) <= 1.0`. Direct arithmetic from the printed distances gives
   `0.670870`, whereas the patent prints `0.674`. Both values satisfy the inequality. The same four distances also locate the
   stop consistently 3.300 mm ahead of surface 15 at the wide and tele endpoints.
4. **Condition (4):** `1.65 < ns`. Surface 23's glass has `ns = 1.766840`, satisfying the condition.

The condition-(1) intermediate focal-length mismatch and condition-(3) arithmetic mismatch are source discrepancies, not
reasons to widen numerical tolerances or silently edit the prescription.

## Verification Summary

The final model reproduces the three published infinity stations with EFL residuals below 0.008 mm and BFD residuals below
0.0003 mm relative to the patent's rounded tables. Sequential height/reduced-angle tracing and an independently assembled ABCD
matrix agree to floating-point precision at all three states. Surface-by-surface Petzval summation using `φ/(n·n′)` gives
`0.004909091515 mm^-1`, corresponding to `RP = -203.703679 mm` under the stated `RP = -1/sum` convention.

The patent does not publish a physical stop diameter. The model therefore calibrates the zoom-dependent iris schedule to the
printed f/2.9 design value. The inferred stop semi-diameters are approximately 8.0683, 8.7884, and 10.4863 mm at 17.5, 24, and
34 mm. Reproduction of f/2.9 verifies the calibration target; it is not independent evidence that those are Nikon's physical
diaphragm dimensions.

Likewise, Example 1 publishes no clear semi-diameters. The modeled rims were reviewed against Figure 2 on PDF page 7.
G4 was undersized relative to the optical outline: surfaces 18–19 now use 15.2 mm, 20–22 use 15.5 mm, and 23A–24 use
16.3 mm. The cemented L11/L12 pair is capped below the figure's approximately 16 mm rim because 16 mm produces negative
L12 edge thickness with the published prescription. Radii, thicknesses, and aspheric coefficients remain source-faithful.
Repository surface validation and production render diagnostics pass; 15 sampled zoom/focus combinations have no hidden
rim trims. Corner chief rays reach the full-frame image height at all three source zoom stations. These finite checks do
not establish clearance over every continuous pupil, field, and focus state.

The runtime glass audit resolves 13 of 14 modeled material regions to coefficient-backed catalog proxies. L1 uses
Q-LASFPH3S (catalog 1.795256/45.25, versus patent 1.796681/45.37), and L5 uses J-LAF7 (1.74950/35.25, versus
1.749501/35.19). Both satisfy the existing compatibility limits; neither identifies Nikon's production supplier. The
unnamed L2 resin at 1.495210/56.34 remains on the Abbe fallback. No new catalog curve or anomalous-dispersion tag is inferred.

The production correlation, glass identities, stop diameter, semi-diameters, and reconstructed close-focus endpoints therefore
carry different evidence grades. The patent governs the prescription and optical mechanism; Nikon sources govern the marketed
product facts; catalog matching governs only the stated glass classes; and the numerical quantities above are results of the
final modeled prescription.

## Sources and References

1. **Japan Patent Office.** JP 2001-083421 A, *Zoom lens* (ズームレンズ), Naoko Fukuda, applicant Nikon Corporation,
   published 2001-03-30. Primary prescription source: front page; ¶0015–0019; Example 1 Table 1 and variable-spacing/asphere
   tables on pp. 4–5; layout and group definitions on p. 7; Example 1 aberration plots on pp. 8–9.
2. **Nikon Imaging Japan.** “AI AF-S Zoom-Nikkor 17-35mm f/2.8D IF-ED — specifications.”
   https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af-s_zoom-nikkor_17-35mm_f28d_if-ed/spec.html
3. **Nikon USA.** “AF-S Zoom-Nikkor 17-35mm f/2.8D IF-ED — overview/specifications.”
   https://www.nikonusa.com/p/af-s-zoom-nikkor-17-35mm-f28d-if-ed/1960/overview
4. **Nikon.** *AF-S Zoom-Nikkor 17-35mm f/2.8D IF-ED User’s Manual.*
   https://downloadcenter.nikonimglib.com/en/products/270/AF-S_Zoom-Nikkor_17-35mm_f_28D_IF-ED.html
5. **Nikon Imaging Japan.** “Lens basics — minimum focus distance.”
   https://nij.nikon.com/learn/phototech/manual/19/04.html
6. **Nikon Consumer.** “Our Product History: 1990s — 1999.”
   https://imaging.nikon.com/imaging/information/products_history/1990/
7. **Nikon Consumer.** “NIKKOR — The Thousand and One Nights No. 68.”
   https://imaging.nikon.com/imaging/information/story/0068/
8. **HIKARI GLASS / Nikon Business.** *HIKARI Optical Glass Catalog 2023.*
   https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
9. **OHARA.** Optical-glass catalog downloads. https://www.ohara-inc.co.jp/en/product/catalog/
10. **HOYA Optics Division.** Optical-glass data downloads. https://www.hoya-opticalworld.com/english/datadownload/index.html
11. **SCHOTT.** Optical Glass portfolio and data. https://www.schott.com/en-us/products/optical-glass-p1000267
12. **CDGM GLASS.** Optical Glass Database. https://www.cdgmgd.com/database/toWebDatabase.htm?url=database
13. **SUMITA OPTICAL GLASS.** Optical Glass Data downloads. https://www.sumita-opt.co.jp/en/download/
