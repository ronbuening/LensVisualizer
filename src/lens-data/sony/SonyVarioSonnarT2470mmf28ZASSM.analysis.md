# SONY VARIO-SONNAR T* 24-70mm f/2.8 ZA SSM

## Patent Reference and Design Identification

**Patent:** US 2008/0198475 A1
**Priority:** JP P2006-270765, October 2, 2006
**Filed:** September 25, 2007
**Published:** August 21, 2008
**Inventors:** Tetsuya Arimoto; Yasushi Yamamoto
**Assignee:** Sony Corporation
**Title:** *Zoom Lens and Image Capture Apparatus*
**Embodiment analyzed:** Example 3 / third numerical embodiment, Fig. 9 and Tables 7–9

The modeled prescription is the job-card-selected production correlation for the Sony SAL2470Z Vario-Sonnar T* 24–70mm
f/2.8 ZA SSM. The patent does not state that Example 3 became the commercial SAL2470Z, and the cited Sony product
literature does not identify a patent number. The correlation is therefore an authored identification rather than a
manufacturer confirmation.

Several independent characteristics converge on that identification:

1. Sony specifies the SAL2470Z as a 17-element, 13-group, full-frame A-mount zoom. Example 3 contains the same 17
   physical elements in 13 air-separated groups.
2. Sony markets a 24–70 mm f/2.8 range with an 84°–34° full-frame angle of view. Example 3 publishes 24.70, 37.98, and
   67.95 mm states at FNO 2.88, 2.88, and 2.90, with full fields of 83.8°, 59.1°, and 34.7°.
3. The patent organizes the prescription as four moving zoom groups with positive, negative, positive, and positive
   powers, and states that the second group performs focusing (¶0061–¶0062). The final model preserves that mechanism.
4. The selected example has two aspherical surfaces, on the front of G4 and the rear of G16 (¶0066), matching the
   two-asphere prescription represented in the data file.
5. Sony listed the Vario-Sonnar T* 24–70mm F2.8 ZA SSM among its newly introduced lenses at PMA 2008, while the patent
   claims an October 2006 Japanese priority date. The chronology is compatible with development preceding product
   introduction.

Marketing and design quantities are kept separate. Sony's nominal product values are 24–70 mm and f/2.8; the modeled
infinity endpoints recompute to 24.703341 and 67.963480 mm, and the pupil model uses the patent's FNO values
2.88/2.88/2.90 rather than substituting the rounded marketing aperture.

Several source and modeling qualifications are essential to the transcription. On the rendered Table 7 page, r7 is
clearly **+98.067 mm**; a minus sign in parsed text is an OCR error. Table 8 itself prints telephoto-state d6 as
**26.688 mm**, but that value produces a materially short focal length. The model uses **27.688 mm**, the value found
with the otherwise duplicate prescription in related Sony publication US 2008/0165428 A1; with the final cement-layer
model this gives 67.963480 mm against the selected patent's 67.95 mm table value. The raw 26.688 mm value remains a
source fact and is not silently replaced.

The patent also tabulates four 0.010 mm cementing-media layers. These are not represented as synthetic optical elements.
Their axial thicknesses are folded into the downstream physical elements G2, G9, G15, and G16, preserving subsequent
vertex positions while the cemented junction carries the downstream element's refractive index and identity. The
patent does not tabulate the final r35-to-image distance, so the rear air spacing is the independently computed paraxial
back focal distance for each infinity zoom state.

No uniform scale factor is applied; therefore no radius, spacing, image-plane coordinate, or asphere coefficient is
rescaled. The selected prescription contains no sensor cover plate, filter, inactive dummy plane, or flare-cutter plane,
so no such optical plate or dummy surface is omitted. The stop location is source-published as r15, 1.700 mm ahead of
r16; only its clear radius is inferred. All modeled semi-diameters are likewise inferred because the patent publishes no
clear-aperture table.

## Optical Architecture

Example 3 is a four-group positive–negative–positive–positive zoom. Its 17 elements form 13 air-separated physical
groups, which are then collected into the four moving zoom groups Gr1 through Gr4. The architecture follows the patent's
stated scheme: Gr1 is positive, Gr2 negative, Gr3 positive, and Gr4 positive (¶0027, ¶0061). The aperture stop lies
between Gr2 and Gr3 and moves with Gr3 (¶0062).

Independent first-order reduction of the final prescription gives the following functional group focal lengths:

| Zoom group | Net focal length | Net power | Principal function in the model |
|---|---:|---:|---|
| Gr1 | +102.787404 mm | +9.728819 D | Front positive collector / zoom group |
| Gr2 | −16.036063 mm | −62.359445 D | Strong negative variator and focus group |
| Gr3 | +55.284600 mm | +18.088220 D | Positive relay group carrying the stop |
| Gr4 | +50.786714 mm | +19.690189 D | Positive rear group containing the negative cemented triplet |

These are in-situ group reductions of the modeled group blocks, not sums of the standalone element powers. In particular,
individual element focal lengths quoted below describe each isolated thick lens in air; they should not be read as the
power that the same element contributes after immersion, cementing, and separation inside the complete zoom.

Zooming is accomplished by changes in d6, d14, and d23, with the rear image plane held fixed by the state-specific
paraxial BFD. From wide to tele, d6 increases while d14 and d23 decrease, as the patent requires. The three published
states also reveal a small kinematic detail that is easy to lose if the motion is simplified: after image-plane
normalization, the front of Gr2 moves about 0.857 mm toward the image from wide to the intermediate state, then about
7.501 mm toward the object from intermediate to tele. The model therefore preserves a slight Gr2 reversal rather than
forcing a monotonic trajectory from the patent's schematic arrows.

Under the project's first-order classification, this is not a telephoto-form system at any modeled state: total-track to
EFL ratios are approximately 6.132, 4.232, and 2.693 from wide through tele, all greater than unity. The wide and
intermediate states do satisfy the project's retrofocus criterion because BFD exceeds EFL there; the tele state does not.
"Tele" below therefore denotes the long-focal-length zoom position, not a telephoto structural classification.

The distinguishing rear-group feature is the cemented negative triplet G14–G16. The patent makes that triplet central
to its design rationale. It argues that a negative triplet in the fourth group increases the available freedom for
chromatic and Petzval correction, while its cemented interfaces and rear aspherical surface help balance higher-order
aberrations in a fast four-group zoom (¶0029–¶0036). The final prescription follows that arrangement exactly.

## Element-by-Element Analysis

### G1–G2 — Cemented front doublet

**G1:** nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA) — 847238 class. Standalone f = −99.165442 mm.

**G2:** nd = 1.83481, νd = 42.72. Glass: S-LAH55V (OHARA) — 835427 class representative. Standalone f = +97.461059 mm.

The patent describes G1 and G2 as a cemented positive lens made from a negative meniscus followed by a positive meniscus
(¶0062). The isolated element powers are nearly opposed. Once the cement layer is collapsed according to the data model,
the cemented D1 block has a computed net focal length of +10093.841565 mm, only +0.099070 D. It is therefore a very weak
positive cemented unit in isolation rather than the main source of Gr1's positive power.

That near cancellation lets the front pair shape a large wide-angle bundle without requiring the doublet itself to carry
most of the group's converging work. The data's catalog representatives also place G1 at much lower Abbe number than G2,
providing a strong dispersion contrast within the pair. Because the patent names no glass vendor, the OHARA identities
are catalog-derived representatives rather than source facts.

### G3 — Positive meniscus

**nd = 1.83481, νd = 42.72. Glass: S-LAH55V (OHARA) — 835427 class representative. Standalone f = +103.038849 mm.**

G3 is the rear positive meniscus of Gr1 (¶0062). Its isolated focal length is close to the computed +102.787404 mm focal
length of Gr1 as a whole, while the G1–G2 cemented block is nearly neutral. That comparison shows that G3 supplies much
of the first group's net positive power, although its exact in-situ contribution also depends on the preceding doublet
and internal separations.

Its rear surface r6 borders the first zoom-variable gap d6, so motion of the following negative group changes the strong
positive-to-negative group separation directly. The semi-diameter at this end of Gr1 is modeled smaller than the front
pair, following the converging wide-angle bundle and the proportions of Fig. 9.

### G4 — Aspherical negative meniscus

**nd = 1.77250, νd = 49.36. Glass: 773496 — S-LAH66 coordinate model (supplier unresolved; source νe = 49.36). Standalone f = −25.115016 mm.**

G4 begins the strong negative Gr2 focus/zoom group. The patent describes it as a negative meniscus convex toward the
object, with its object-side surface r7 aspherical (¶0062, ¶0066). In the data file this surface is labeled **7A** and
uses the rendered-page radius +98.067 mm.

Its −25.115 mm isolated focal length makes it one of the strongest negative individual elements in the design. Placing an
asphere at the front of the high-power negative group gives the design a high-leverage surface before the strongly curved
rear surface r8. The patent does not publish a manufacturing method for this Example 3 asphere, so it is not identified
as molded, polished, or resin-composite in the model.

An independent catalog check explains the unusual source pair: code 773496 identifies the TAF1/S-LAH66/J-LASF016
optical family, and S-LAH66 has nd = 1.77250, νd = 49.60, and νe = 49.36. The patent's 1.77250/49.36 row therefore mixes
the d-line index with the e-line Abbe number while labeling the table as d-line data. The authored values remain exactly
as printed, but the code-family evidence supports the S-LAH66 representative curve without asserting a production
vendor. G4 carries catalog nC, nF, ng, and dPgF = -0.0092.

### G5 — Biconcave negative

**nd = 1.80420, νd = 46.50. Glass: N-LASF44 (SCHOTT) — 804465 class. Standalone f = −26.635109 mm.**

G5 follows the aspherical meniscus with another strong negative element. Its biconcave form and −26.635 mm isolated focal
length reinforce Gr2's negative power. The short 0.290 mm air space after G5 places it close to the positive G6, so the
pairing should be interpreted as part of the complete four-element negative group rather than as independent separated
powers.

The N-LASF44 annotation is catalog-resolved at the stored d-line coordinates and supplies explicit line-index and dPgF
data to the dispersion model. That catalog match is a modeling annotation; the patent itself gives only nd and νd.

### G6 — Biconvex positive

**nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA) — 847238 class. Standalone f = +28.471182 mm.**

G6 is the positive element embedded inside the net-negative Gr2. Its isolated +28.471 mm focal length is comparable in
magnitude to the negative powers of G4 and G5. The group nevertheless reduces to −16.036063 mm because the complete
sequence, separations, and rear negative G7 retain strong negative power.

The 1.84666/23.78 coordinate gives G6 a high-index, low-Abbe catalog representative. In conjunction with the higher-Abbe
negative elements around it, this creates dispersion contrast inside the moving focus group without requiring the group
to change sign. The statement concerns the catalog-resolved model; the patent does not name S-TIH53.

### G7 — Rear negative meniscus of Gr2

**nd = 1.77250, νd = 49.62. Glass: N-LAF34 (SCHOTT) — 773496 class. Standalone f = −62.350909 mm.**

G7 closes Gr2 as a negative meniscus convex toward the image side, matching the patent's element description (¶0062).
Its power is weaker than G4 or G5 in isolation, but it completes the negative group immediately before the variable d14
space leading to the stop.

Unlike G4, the 1.77250/49.62 coordinates round-trip directly to the N-LAF34 catalog annotation. The data therefore carry
catalog nC, nF, ng, and dPgF values for G7. These spectral fields improve dispersion modeling but do not establish that
Sony used a SCHOTT melt in the production lens.

### G8–G9 — Cemented positive doublet at the front of Gr3

**G8:** nd = 1.88300, νd = 40.80. Glass: 883408 — S-LAH58 coordinate model (supplier unresolved). Standalone f = −53.948959 mm.

**G9:** nd = 1.72000, νd = 50.34. Glass: J-LAK10 (HIKARI) — 720503 class representative. Standalone f = +26.122620 mm.

The patent describes G8 as a negative meniscus and G9 as a biconvex positive element cemented together at the front of
Gr3 (¶0062). Their isolated powers do not suggest the behavior of the assembly by simple addition: the modeled D2
cemented block has a net focal length of +49.821001 mm, or +20.071857 D.

This is the first powered assembly after the stop, and the stop moves with Gr3. The large positive contribution from G9,
moderated by G8, establishes a positive front section for the third group while providing index and dispersion contrast
at the cemented interface. G8's stored catalog-derived C/F/g indices and dPgF reproduce S-LAH58, not N-LASF31A; the
annotation now names that runtime coordinate model while keeping the production supplier unresolved. J-LAK10 is a
representative 720503-class assignment; vendor identity is not a patent fact.

### G10 — Biconvex positive

**nd = 1.83481, νd = 42.72. Glass: S-LAH55V (OHARA) — 835427 class representative. Standalone f = +88.728173 mm.**

G10 is the second positive component of Gr3. Its weaker isolated power than the G8–G9 cemented unit extends the positive
relay action through the middle of the group rather than concentrating all convergence at the stop-adjacent doublet.
The 2.020 mm air space behind it separates G10 from the closing negative meniscus G11.

The material annotation is the same 835427-class representative used for G2 and G3. Reusing the same optical coordinate
at several positions is a prescription fact; assigning it to S-LAH55V is catalog-derived.

### G11 — Rear negative meniscus of Gr3

**nd = 1.90366, νd = 31.32. Glass: N-LASF46B (SCHOTT) — 904313 class. Standalone f = −67.581251 mm.**

G11 closes the positive third group with a negative meniscus, as stated in ¶0062. It reduces the net power of the
preceding positive components while leaving Gr3 positive at +55.284600 mm. The following variable gap d23 is the
Gr3-to-Gr4 separation and contracts sharply toward the long end of the zoom.

The 1.90366 index is the highest in the prescription and recurs in G14. The N-LASF46B catalog match is exact at the
stored nd/νd pair and supplies line data in the modeled element record.

### G12 — First low-dispersion positive element of Gr4

**nd = 1.49700, νd = 81.61. Glass: S-FPL51 (OHARA) — 497816 class representative. Standalone f = +44.455813 mm.**

G12 is a strong biconvex positive lens at the front of the fourth group. Its very high Abbe number is a source-prescribed
property; the S-FPL51 identity is a catalog representative. In the model it is the strongest positive standalone element
in Gr4 before the cemented triplet.

Its positive power is important in the context of the patent's stated rear-group strategy. The patent explicitly argues
that the fourth group can use stronger positive lenses to compensate the negative Petzval contribution of the second
group when a negative cemented triplet is available to control the resulting aberration balance (¶0030).

### G13 — Second low-dispersion positive element of Gr4

**nd = 1.49700, νd = 81.61. Glass: S-FPL51 (OHARA) — 497816 class representative. Standalone f = +75.253008 mm.**

G13 repeats the same low-dispersion optical coordinate as G12 with a weaker positive biconvex form. The two separate
positive lenses place substantial positive power ahead of the negative triplet while keeping the source-prescribed Abbe
number high.

The catalog model gives both G12 and G13 S-FPL51 line indices and dPgF = +0.0280. Those data support explicit partial-
dispersion tracing for the representative glass, but they do not justify describing the complete lens as apochromatic or
proving that the production elements were made from OHARA S-FPL51.

### G14–G16 — Cemented negative triplet

**G14:** nd = 1.90366, νd = 31.32. Glass: N-LASF46B (SCHOTT) — 904313 class. Standalone f = −46.772272 mm.

**G15:** nd = 1.48749, νd = 70.44. Glass: N-FK5 (SCHOTT) — 487704 class representative. Standalone f = +37.356356 mm.

**G16:** nd = 1.77250, νd = 49.36. Glass: 773496 — S-LAH66 coordinate model (supplier unresolved; source νe = 49.36). Standalone f = −27.939396 mm.

This triplet is the defining structural feature of the patent. The patent specifies a negative–positive–negative cemented
triplet in Gr4 and places the aspherical surface on the image-side face of its final negative member (¶0031, ¶0035,
¶0062). The final modeled triplet has a net focal length of −32.400882 mm, or −30.863357 D, so the assembly is indeed
negative in isolation despite the positive G15 center member.

The first cemented interface has an unusually large index contrast: G14 uses nd = 1.90366 while G15 uses nd = 1.48749.
Their difference, 0.41617, is the quantity constrained by the patent's first conditional. The large Abbe contrast between
31.32 and 70.44 also gives the cemented pair substantial chromatic leverage. G16 then returns the triplet to negative
power and carries the rear asphere 33A.

G16 uses the same 1.77250/49.36 mixed-reference source pair as G4. The repeated coordinate and exact S-LAH66 νe match
support the same 773496 family classification while leaving the production supplier unresolved. Its catalog line indices
and dPgF = -0.0092 now give the repeated family coefficient-backed dispersion at both occurrences.

### G17 — Rear positive meniscus

**nd = 1.83400, νd = 37.34. Glass: NBFD10 (HOYA) — 834373 class. Standalone f = +76.441470 mm.**

G17 is the final positive meniscus of Gr4, with its convex surface toward the image side as described by the patent
(¶0062). It follows the negative triplet after a 5.000 mm air space and restores positive power at the rear of the system.
Together with G12 and G13, it leaves the complete Gr4 block positive at +50.786714 mm even though the internal triplet is
strongly negative.

The NBFD10 annotation matches the stored 1.83400/37.34 coordinate and provides catalog line indices and dPgF. The rear
surface r35 then opens into the computed state-dependent BFD rather than a patent-tabulated image gap.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number at the d line but does not identify glass makers. The glass names
in the data file are therefore catalog-derived representatives selected by coordinate matching. They are not statements
that the production lens used those exact commercial melts.

| Catalog annotation in the data | Stored nd / νd | dPgF in model | Elements | Status |
|---|---:|---:|---|---|
| S-TIH53 (OHARA) — 847238 class | 1.84666 / 23.78 | +0.0175 | G1, G6 | Exact coordinate match |
| S-LAH55V (OHARA) — 835427 class representative | 1.83481 / 42.72 | −0.0075 | G2, G3, G10 | Representative; catalog νd differs slightly |
| 773496 — S-LAH66 coordinate model | 1.77250 / 49.36 | -0.0092 | G4, G16 | Mixed d-index/e-Abbe source pair; coefficient-backed family, supplier unresolved |
| N-LASF44 (SCHOTT) — 804465 class | 1.80420 / 46.50 | −0.0084 | G5 | Exact coordinate match |
| N-LAF34 (SCHOTT) — 773496 class | 1.77250 / 49.62 | −0.0085 | G7 | Exact coordinate match |
| 883408 — S-LAH58 coordinate model | 1.88300 / 40.80 | −0.0085 | G8 | Coefficient-backed model; supplier unresolved |
| J-LAK10 (HIKARI) — 720503 class representative | 1.72000 / 50.34 | −0.0073 | G9 | Representative class match |
| N-LASF46B (SCHOTT) — 904313 class | 1.90366 / 31.32 | +0.0045 | G11, G14 | Exact coordinate match |
| S-FPL51 (OHARA) — 497816 class representative | 1.49700 / 81.61 | +0.0280 | G12, G13 | Representative low-dispersion match |
| N-FK5 (SCHOTT) — 487704 class representative | 1.48749 / 70.44 | +0.0036 | G15 | Close catalog match |
| NBFD10 (HOYA) — 834373 class | 1.83400 / 37.34 | −0.0021 | G17 | Exact coordinate match |

The line indices nC, nF, and ng stored on the named elements are likewise catalog-derived rather than patent data. They
permit dispersion calculations above the plain-Abbe tier for the resolved representatives. The repeated 773496 family
on G4 and G16 now follows the same code-backed policy used elsewhere in the catalog while preserving the patent's printed
coordinates unchanged.

The palette uses two different kinds of dispersion contrast. In Gr2, high-index/low-Abbe G6 is bracketed by higher-Abbe
negative elements; in Gr4, the two 1.49700/81.61 positive lenses precede a negative cemented triplet whose members span
νd = 31.32, 70.44, and 49.36. The latter arrangement is consistent with the patent's explicit statement that the cemented
triplet increases freedom for chromatic correction (¶0029, ¶0032). The data support discussion of this chromatic
strategy, but not an APO designation for the complete lens.

## Focus Mechanism

The patent states that Gr2 moves along the optical axis for focusing (¶0061) but supplies only infinity-focus zoom
spacings. Sony's production specification gives a 0.34 m minimum focus distance and a rounded 0.25× maximum
magnification. The finite-distance model is therefore a **CONSTRAINED_RECONSTRUCTION**, not a published patent focus
table.

The reconstruction holds Gr1, Gr3, Gr4, and the image plane fixed at each zoom state and translates only Gr2. Because
Gr2 lies between d6 and d14, its motion is represented by equal and opposite changes to those two air gaps, conserving
`d6 + d14` at each focal-length state. The solve uses the 0.34 m sensor-to-object distance as the focus constraint; it
does not force the 0.25× magnification value.

| Zoom state | d6 at infinity | d6 at 0.34 m | d14 at infinity | d14 at 0.34 m | Computed magnification |
|---|---:|---:|---:|---:|---:|
| 24.70 mm | 2.778000 mm | 0.605423 mm | 15.202000 mm | 17.374577 mm | −0.105903× |
| 37.98 mm | 12.920000 mm | 10.162859 mm | 7.708000 mm | 10.465141 mm | −0.153445× |
| 67.95 mm | 27.688000 mm | 23.501529 mm | 1.000000 mm | 5.186471 mm | −0.245636× |

At the long end, the reconstructed magnitude of 0.245636× is close to Sony's rounded 0.25× production specification.
That agreement is an external consistency check on the constrained mechanism, not proof that the production lens uses
exactly the reconstructed internal spacings.

The focus group is internally complex: G4, G5, and G7 are negative, while G6 is a strong positive biconvex element. The
complete Gr2 block remains strongly negative at −16.036063 mm. Focusing therefore moves a compound negative variator
rather than a single weak corrective lens.

## Aspherical Surfaces

Example 3 has exactly two aspherical surfaces: r7 on the object side of G4 and r33 on the image side of G16 (¶0066).
They are labeled **7A** and **33A** in the data file.

The patent writes the sag in the form

$$
x = \frac{c y^2}{1 + \sqrt{1 - \varepsilon c^2 y^2}} + \sum A_i y^i,
$$

with $c = 1/R$. LensVisualizer uses the conventional denominator
$1 + \sqrt{1 - (1+K)(h/R)^2}$, so the conversion is

$$
K = \varepsilon - 1.
$$

Both Example 3 surfaces have $\varepsilon = 1.0000$, giving **K = 0** in the data. No scale transformation is applied,
so every polynomial coefficient is copied at its source dimensional scale; there is no $A_p/s^{p-1}$ transformation.

| Data surface | Patent surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 7A | r7 | 0 | 1.2736009e−5 | −6.7365016e−9 | −7.1808301e−11 | 7.8825874e−13 | −2.6948768e−15 | 3.7189316e−18 |
| 33A | r33 | 0 | 1.7495023e−5 | 3.8801483e−9 | −1.1234198e−10 | 1.0535738e−12 | −4.6012946e−15 | 7.3037374e−18 |

At the **inferred**, geometry-validated semi-diameters used by the model, the net polynomial departure from the K = 0
base conic is +0.789370 mm at h = 16.000 mm for 7A and +0.660556 mm at h = 14.000 mm for 33A. These are computed
model-rim values, not patent-published clear-aperture departures; the patent provides no physical aperture height at
which to quote an asphere departure.

The locations of the two aspheres follow the patent's stated correction strategy. Surface 7A acts at the entrance of the
strong negative Gr2, while 33A is the image-side surface of the negative cemented triplet. The patent specifically notes
that placing the triplet's asphere on its image-side face separates the on-axis and off-axis bundles there and increases
freedom for correcting aberrations (¶0035–¶0036). No manufacturing technology is specified for these Example 3 surfaces,
so none is inferred.

## Chromatic Correction Strategy

The source prescription combines strong index contrast with a broad spread of Abbe numbers. This is especially evident
in Gr4. G12 and G13 use the source coordinate 1.49700/81.61, while the following triplet combines 1.90366/31.32,
1.48749/70.44, and 1.77250/49.36. The patent explicitly identifies the cemented triplet as a way to increase freedom in
correcting chromatic aberration while controlling the power of the cemented surfaces (¶0029, ¶0032).

The catalog annotations make the low-dispersion role of G12 and G13 more explicit: their representative S-FPL51 records
include nC, nF, ng, and dPgF = +0.0280. The named glasses elsewhere likewise carry catalog line data. Those fields allow
the model to represent non-Abbe dispersion for the catalog-resolved elements. Because the patent does not name the
vendors, these annotations should be treated as a plausible spectral realization of the published prescription rather
than a recovered production bill of materials.

No APO claim follows from the presence of low-dispersion glass alone. The available line data support discussion of
partial-dispersion choices for the representative glasses, but they do not establish an apochromatic performance class
for the complete production lens.

## Aberration Correction Strategy and Design Philosophy

The patent's most explicit design argument concerns Petzval balance in a fast positive–negative–positive–positive zoom.
It states that the fourth group bears correction burdens generated by the second and third groups, and that strengthening
positive lenses in Gr4 can improve the Petzval sum but may disturb other aberrations. A negative cemented triplet is then
used to recover correction freedom, including spherical aberration, astigmatism, and chromatic balance (¶0029–¶0030).

The modeled surface-by-surface Petzval calculation, using $\phi/(n n')$, is consistent with that stated strategy:

| Group | Petzval contribution |
|---|---:|
| Gr1 | +0.005148359 mm⁻¹ |
| Gr2 | −0.032969688 mm⁻¹ |
| Gr3 | +0.011289922 mm⁻¹ |
| Gr4 | +0.018305703 mm⁻¹ |
| **Total** | **+0.001774296 mm⁻¹** |

The strong negative contribution of Gr2 is therefore substantially opposed by the positive rear groups, leaving a much
smaller total. This does not by itself predict the final sagittal and tangential field curves, but it quantitatively
illustrates the Petzval-balancing role described in the patent.

The cemented triplet is not merely a weak corrector. Its isolated net focal length is −32.400882 mm, while the complete
Gr4 remains positive at +50.786714 mm because G12, G13, and G17 supply positive power around it. This is the specific
power distribution the patent describes: a strongly negative internal block embedded within a positive fourth group.

## Conditional Expressions

The patent gives two design inequalities and tabulates Example 3 as satisfying both (¶0037–¶0040, Table 10).
Independent evaluation from the final data gives the same result.

### Conditional (1): index contrast in the cemented triplet

$$
0.3 < L_{d1} - L_{d2} < 0.6
$$

For G14 and G15,

$$
1.90366 - 1.48749 = 0.41617.
$$

The patent's Table 10 rounds this to 0.42. The value lies comfortably within the required interval. The patent explains
this condition as a balance between the power of the cemented interfaces, sagittal flare, and axial chromatic correction.

### Conditional (2): negative second-group power

$$
-0.8 < \frac{f_2}{f_w} < -0.2.
$$

Using the final modeled Gr2 focal length of −16.036063 mm and the computed wide-state EFL of 24.703341 mm gives

$$
\frac{f_2}{f_w} = -0.649146,
$$

which agrees with the patent's rounded −0.65. The patent associates this range with balancing wide-angle field curvature
against the need for sufficient lens back.

## Verification Summary

Independent sequential height/reduced-angle tracing and a separate height/slope ABCD formulation agree to within
5.684e−14 in the final system matrices. The first-order results at the three infinity states are:

| State | Patent focal length | Computed EFL | Difference | Computed BFD | First-vertex to image track |
|---|---:|---:|---:|---:|---:|
| Wide | 24.70 mm | 24.703341 mm | +0.003341 mm | 36.835196 mm | 151.479196 mm |
| Intermediate | 37.98 mm | 37.985368 mm | +0.005368 mm | 48.345846 mm | 160.763846 mm |
| Tele | 67.95 mm | 67.963480 mm | +0.013480 mm | 65.305075 mm | 183.033075 mm |

The rear air gaps in the data are these paraxial BFDs rounded to six decimal places. They are computed image-plane
closures, not values printed in Table 7 or Table 8.

Because the patent publishes no clear apertures, the surface semi-diameters and stop radius are modeling inferences.
They were constrained by the patent's Y′ = 21.6 mm image height, wide-open marginal and chief-ray envelopes, Fig. 9
proportions, and the geometry of the actual spherical/aspherical surfaces. Across all defined infinity and reconstructed
close-focus states, the minimum sampled element axial thickness is 0.950 mm, the maximum actual rim-slope angle is
55.037°, and the worst shared-band cross-gap intrusion is 0.706332 of the gap against a 0.90 limit. The largest computed
full-published-field chief-ray clear-aperture ratio from exact meridional Snell tracing is 0.959451. These checks
establish internal geometric consistency of the inferred apertures; they do not turn those apertures into patent-published dimensions.

The physical stop position is not inferred: the patent places it at r15, with 1.700 mm to r16. The effective wide-open
stop radii required by the modeled FNO values are 9.253019, 10.505057, and 12.429422 mm from wide through tele; only the
wide-state value is stored as the base `STO.sd`, with the zoom-dependent pupil behavior derived from the f-number model.

## Sources and References

1. Tetsuya Arimoto and Yasushi Yamamoto, **US 2008/0198475 A1**, *Zoom Lens and Image Capture Apparatus*, Sony
   Corporation, published August 21, 2008. Example 3 is Fig. 9 and Tables 7–9; the design description and conditional
   rationale appear principally in ¶0027–¶0040 and ¶0060–¶0069.
2. Tetsuya Arimoto and Yasushi Yamamoto, **US 2008/0165428 A1**, *Zoom Lens and Image Capture Apparatus*, Sony
   Corporation, published July 10, 2008. Its fifth numerical embodiment reproduces the selected prescription and
   asphere table but gives telephoto d6 = 27.688 mm in Table 14.
3. Sony, **SAL2470Z Specifications**, official Sony support page for the Vario-Sonnar T* 24–70 mm F2.8 ZA SSM:
   https://www.sony.com/electronics/support/lenses-a-mount-lenses/sal2470z/specifications
4. Sony Group Corporation, **Sony to Showcase Latest DI Products at “PMA 2008” Exhibition**, February 1, 2008:
   https://www.sony.com/en/SonyInfo/News/Press/200802/08-0201E/
5. OHARA, optical-glass catalog data used for the S-TIH53, S-LAH55V, S-LAH58, and S-FPL51 representative annotations
   and the S-LAH66 nd/νe cross-pair check:
   https://www.ohara-inc.co.jp/en/product/01000/
6. SCHOTT Advanced Optics, individual optical-glass product data for N-LASF44, N-LAF34, N-LASF46B, and N-FK5.
   Representative catalog entry: https://us.shop.schott.com/advanced-optics/en/Optical-Glass/N-LAF34/c/glass-N-LAF34
7. Nikon / HIKARI optical-glass catalog, J-LAK family data used for the 720503-class representative:
   https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lak.html
8. HOYA optical-glass catalog and cross-reference data used for the NBFD10 annotation and class comparisons:
   https://www.hoyaoptics.eu/glass-cross-reference-index
