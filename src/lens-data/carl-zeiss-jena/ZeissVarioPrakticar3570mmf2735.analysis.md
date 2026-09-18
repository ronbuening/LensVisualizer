# Carl Zeiss Jena Vario-Prakticar 35–70 mm f/2.7–3.5 MC

## Patent Reference and Design Identification

**Patent:** DE 3602859 A1 (Offenlegungsschrift, Deutsches Patentamt)
**Application Number:** P 36 02 859.2
**Filed:** 1986-01-31
**Published:** 1986-09-18 (laid open)
**Priority:** DD WP G 02 B/273 668 2, 1985-03-01
**Inventors:** Utz Schneider, Volker Tautz, Karin Holota
**Applicant:** Jenoptik Jena GmbH, Jena, DDR
**Title:** Fotografisches Objektiv mit variabler Brennweite
**Classification:** IPC G02B 15/14 // G02B 15/22
**Embodiment analyzed:** Example 1 — the document's single *Tabelle*, printed page -2-

The document publishes exactly one worked example. There is no second embodiment to confuse it
with, and no numbered variant scheme: the *Tabelle* on printed page -2- carries all seventeen
radii, all sixteen axial spacings and all nine media rows of the design, together with the system
quantities `f' = 1.0 – 1.9`, `k = 2.7 – 3.6` and `2σ = 63.4° – 35.1°`. Everything transcribed into
the paired prescription file comes from that one table, from the four claims on printed pages -1-
and -3-, and from the description on printed pages -4- through -8-.

The correlation to the production Carl Zeiss Jena Vario-Prakticar 35–70 mm f/2.7–3.5 MC rests on
convergent secondary evidence and is **not** manufacturer-confirmed. No Jenoptik or VEB Carl Zeiss
Jena datasheet or catalogue was consulted; a scanned instruction leaflet held by an online manual
archive carries no text layer and was not read for this work. The convergent criteria are:

1. **Priority date.** The DDR priority of this DE application is 1 March 1985. The researched
   secondary record names DD 235.122 of 1 March 1985 as the patent protecting the production lens.
2. **Inventor set.** The three names on the DE front page are the three names that record
   attributes to DD 235.122.
3. **Construction.** The production optic is described as eight lenses in seven groups closed by a
   plane plate. Example 1 is exactly eight powered elements in seven air-separated groups plus a
   rear plane-parallel plate.
4. **Design task.** The description states the object as exceeding a relative aperture of 1 : 2.8
   at the wide setting without recourse to high-index lanthanum glasses (printed page -5-). The
   secondary record gives the same goal for the production design.
5. **Aperture.** The published wide `k = 2.7` matches the marketed maximum aperture of f/2.7
   exactly. An f/2.7 wide end is an unusual value for a standard zoom, and the coincidence between a
   patent's published stop ratio and a marketed engraving at that precision is strong; no survey of
   contemporary competitors was undertaken here, so no claim of uniqueness is made.

Criterion 5 is the strongest single link and criterion 1 the most nearly documentary, but a
matching priority date and a matching inventor list establish a research target, not a
manufacturer's confirmation that this table is the shipped formula. That distinction is preserved
throughout this document: every production or marketed figure below is labelled as secondary.

## Optical Architecture

A two-group zoom of the negative-lead (retrofocus-type) family: a **moving negative front group
G_I**, a **moving positive rear group G_II**, and a **fixed plane-parallel plate P** closing the
objective ahead of the image plane. Both powered groups move; the plate and the image plane stay
put. Claim 1 sets out this arrangement; claim 2 fixes the plate to the camera and makes the
group-to-plate distance the variable that holds the image plane still.

Computed group powers, from the prescription file rather than from the patent's symbols:

| Group | Surfaces | Elements | Focal length |
|---|---|---|---|
| G_I (moving, negative) | 1–6 | L1, L2, L3 | −60.16 mm |
| G_II (moving, positive) | 7–15 | K1 (= L4 + L5), L6, L7, L8 | +38.31 mm |
| P (fixed plate) | 16–17 | P | no finite power |

The element inventory is **nine elements in eight groups** as authored — eight powered elements in
seven air-separated groups, plus the plate counted as the ninth element and the eighth group. The
powered counts remain separately recoverable. The design is **all-spherical**; the document
contains no aspheric equation and no coefficient table anywhere, so the corresponding section of
this analysis is omitted rather than stubbed.

**Zoom kinematics.** Two gaps vary. The zoom gap `l3` between the groups collapses by
30.527 mm from the wide station to the tele station, and the rear gap `l7` between G_II and the
fixed plate opens by 19.260 mm to compensate. Because the plate and the image plane are fixed,
both the zoom compensation and the reconstructed focus extension land in that same rear gap. The
system is therefore physically **longest at the wide setting**: the first vertex stands
125.47 mm ahead of the image plane at wide against 114.20 mm at tele. The track is not monotonic.
It falls to a minimum of 113.95 mm near 60.2 mm and then lengthens by 0.25 mm toward the tele
station, so G_I reverses direction shortly before the long end while both gaps change monotonically.

The source dimensions **two** states and only two. Figs. 2 to 4 add a third setting at
`f' = 1.4`, `k = 3.1` and a half-field of 23.2°, but publish no spacing row for it. Two published
rows are not enough for a usable zoom model. The viewer interpolates spacings linearly between
stations, and interpolating `l3` and `l7` straight from wide to tele would defocus the model by up to
2.97 mm near 48 mm. That contradicts the description's statement that the image plane stays fixed
(printed page -8-). The prescription file therefore carries eight further stations at
35 × `f'` = 1.1 through 1.8 mm, the `f' = 1.4` figure state among them. They are **calculated, not
published**. At each one, `l3` is solved for the target focal length and `l7` for image-plane
closure under the same first-order equations that reproduce the two printed rows. The residual
interpolation defocus between adjacent stations is at most 0.053 mm. The stations are not cam data,
and focal lengths between them remain interpolations.

**Conjugate ratios, per state and per reference plane.** The back focal distance is measured from
the plate's rear vertex and the total track from the first vertex, both to the authored image
plane:

| State | EFL | Total track | BFD | TL/EFL | BFD/EFL |
|---|---|---|---|---|---|
| wide, infinity | 34.998 mm | 125.47 mm | 37.749 mm | 3.5850 | 1.0786 |
| tele, infinity | 65.241 mm | 114.20 mm | 37.749 mm | 1.7504 | 0.5786 |

The **retrofocus** label is earned at the wide station and only there: BFD exceeds EFL by a ratio
of 1.0786, and the same ratio falls to 0.5786 at the tele station, where the design is no longer
retrofocus in any verified sense. **Neither station is telephoto** — TL/EFL never approaches unity.
Labels of this kind are stated here per state with their reference planes named, because in a zoom
of this type the ratio reverses across the range and an unqualified label would be wrong at one end.

**The concentric construction.** The description repeatedly uses the word *konzentrisch*: the three
front elements are said to be arranged concentrically with respect to the positive group, the
cemented interface concentrically with respect to the front group, and L6 concentrically with
respect to the aperture stop (printed pages -5- and -8-). Tested literally — coincidence of a
centre of curvature with the named reference — the picture is mixed, and it is reported here as
measured rather than as the source phrases it:

- All six front-group radii are **positive**, so the three front elements are genuinely nested
  shells bowing the same way. That much is unambiguous from the prescription.
- The four power-carrying front-group surfaces (r1, r2, r4, r5) have centres of curvature between
  27.74 mm and 49.14 mm behind the first vertex, a span of 21.40 mm bracketing the wide-station
  entrance pupil at 37.47 mm, with an RMS deviation of 9.38 mm. The arrangement is approximately,
  not exactly, concentric about the wide-setting pupil.
- The cemented interface is the one literal case. Its radius is the exact negative of the
  preceding surface's, and at the wide station its centre of curvature falls within **0.19 mm** of
  the rear vertex of G_I. Against a 31.05 mm group separation that is a deliberate construction,
  not an accident, and it holds at the wide setting only — at tele the same centre sits 30.71 mm
  away, ahead of the front vertex entirely.
- L6's two centres lie 20.45 mm and 92.24 mm behind the stop plane at both stations. This element
  is a meniscus bent around the stop region, but it is not concentric about the stop in the strict
  sense.

The reading offered here — that *konzentrisch* in this document describes nested, similarly-bowed
shells, tightened into a literal concentricity only at the cemented interface and only at the wide
end — is the author's interpretation of a qualitative source word, supported by the computed
centres above. The patent supplies the word, not the criterion.

## Element-by-Element Analysis

The prescription file stores the patent's native **e-line** data unconverted: its `nd` and `vd`
fields carry `n_e` and `ν_e`, and every element declares `indexReference: "e"`. The values below
are therefore e-line values throughout and are written as such. Element focal lengths are thick-lens
standalone values in air, computed from the parsed prescription at the resolved scale; they are not
in-situ contributions, and for the two cemented members they are not the net power of the pair.

### L1 — Negative Meniscus, convex to object

`n_e = 1.68101, ν_e = 54.74. Glass: S-LAL12 (compatible spectral proxy; Jena melt unconfirmed). f = −82.01 mm.`

The front element, and the weaker of the front group's two negative elements. Its second surface is
the most steeply curved in the design — at its modelled semi-diameter the rim slope reaches 55.42°,
the highest in the lens — and that surface, not the front one, is what actually limits the front
group's clear aperture. The rear rim of L1 sags 7.08 mm into the 8.24 mm air gap that follows,
leaving 1.166 mm of real clearance at the shared band; this is the binding cross-gap of the whole
prescription at a ratio of 0.954 of its allowance. The sag follows from the published radii, while
the ratio also depends on the modelled semi-diameters. The element is also the wide-station vignetting aperture, which is discussed under
pupils below.

Condition (6) of the patent, `d1 > 0.17`, applies directly to this element's centre thickness and
is satisfied at 0.1801 in normalized units. It is the only condition in the document that
constrains a single thickness. The description groups it with condition (7) as the pair that secures
good overall correction across the focal-length range (printed page -7-). It gives no separate
manufacturing rationale.

### L2 — Negative Meniscus

`n_e = 1.69649, ν_e = 53.29. Glass: LAC13 (compatible spectral proxy; Jena melt unconfirmed). f = −48.96 mm.`

The strongest negative in the front group and the front group's largest negative Petzval
contributor at −0.0121 mm⁻¹ (standalone surface sum). It is also the **only element in the design that violates the
patent's own condition (8)**: its `n_e` exceeds the limit `4.40244/ν_e + 1.60059` by 0.013287. That
finding is discussed under Conditional Expressions below, where the evidence bearing on whether the
exception was deliberate is set out.

The identification of this element's glass as Jena LaK 75n, substituted for an SSK10, comes from
a researched secondary source and is attributed as such. It is consistent with the computed
condition-(8) result — the one element the patent's glass-map line excludes is the one element the
secondary record says was a lanthanum crown — but consistency between a calculation and a
third-party attribution is corroboration, not catalogue verification.

### L3 — Positive Meniscus

`n_e = 1.65221, ν_e = 33.62. Glass: SF2 (compatible spectral proxy; Jena melt unconfirmed). f = +64.80 mm.`

The single positive element in the negative front group, and its only low-dispersion-number glass
at ν_e = 33.62 against 54.74 and 53.29 for its neighbours. Its function is chromatic and can be
stated quantitatively rather than inferred from the glass class: in the thin-lens sum Σφ/ν_e the two
negatives contribute −6.061 × 10⁻⁴ mm⁻¹ between them and L3 returns +4.590 × 10⁻⁴ mm⁻¹, cancelling
**75.7** per cent of the group's uncorrected axial colour and leaving a residual of
−1.471 × 10⁻⁴ mm⁻¹. Because this group's marginal ray heights do not change with zoom, that
residual is a fixed quantity that the rear group must work against at every focal length.

The element also carries the smallest edge thickness in the model, 0.798 mm at its modelled
semi-diameter. That figure is a property of the semi-diameter modelling, not a published dimension,
and it is one of the limits that capped the modelled front-group aperture.

### K1 (L4 + L5) — Biconvex Cemented Member

The leading component of the positive rear group, and the component the description explicitly
credits with the design's chromatic behaviour: *the uniform chromatic correction over the whole
focal-length range is achieved by the arrangement and design of the cemented member and by the
glasses used with their `n_e` and `ν_e` values* (printed page -7-). Net power of the pair is
**+46.88 mm**, against the individual standalone values below.

- **L4 — Biconvex Positive.** `n_e = 1.60588, ν_e = 60.71. Glass: N-SK14 (compatible spectral proxy; Jena melt unconfirmed). f = +31.99 mm.`
  The strongest positive element in the lens and the first surface the converging bundle from G_I
  meets. Its front radius is the exact positive of the cemented interface behind it.
- **L5 — Negative Meniscus.** `n_e = 1.76167, ν_e = 27.33. Glass: E-FD4 (compatible spectral proxy; Jena melt unconfirmed). f = −98.67 mm.`
  The flint mate. In the height-weighted axial colour sum at the wide station it returns
  −1.0004 × 10⁻³ against L4's +1.4287 × 10⁻³, removing 70.0 per cent of its partner's contribution.

The pair is therefore a **partial** achromat carrying a deliberate positive residual of
+4.284 × 10⁻⁴ at the wide station, not a self-contained achromatic doublet. Describing K1 as "the
achromat" would misstate what the numbers show; the cemented member starts the correction and L7
finishes it. The cemented interface is also the design's one literal concentricity, discussed
above.

### L6 — Positive Meniscus

`n_e = 1.6664, ν_e = 56.14. Glass: Unmatched (Jena melt; the worst-matched coordinate in the design). f = +52.00 mm.`

A positive meniscus standing immediately ahead of the aperture stop, separated from the cemented
member by the thinnest air gap in the prescription — 0.098 mm at the modelled scale. That gap is
not a geometric hazard despite its thinness, because both bounding surfaces curve away from it, so
the clearance opens rather than closes toward the rim. Its rear rim sag of 0.548 mm at the modelled
semi-diameter is what sets the forward limit on where the iris can physically sit.

This element's glass coordinates are the least well matched in the design: the nearest row in any
of the six vendor catalogues audited differs by 0.0126 in `n_e` (combined coordinate distance
0.0129), with nothing inside the close band. That is discussed under glass selection.

### L7 — Biconcave Negative

`n_e = 1.66885, ν_e = 35.62. Glass: J-BASF2 (compatible spectral proxy; Jena melt unconfirmed). f = −22.93 mm.`

The strongest single power in the entire lens and the element the patent singles out for its own
condition, (7): `−0.7 < f'_7/f'_min < −0.6`, satisfied at −0.655225. It sits immediately behind the
stop and does two things at once. It is the dominant negative Petzval contributor at
−0.0257 mm⁻¹, about 1.28 times the next-largest standalone element magnitude (L4, +0.0201 mm⁻¹), and it is the
dominant over-correcting chromatic element, returning −1.8544 × 10⁻³ in the height-weighted axial
colour sum at the wide station. The rear group's entire chromatic and field-curvature balance turns
on this one element, which is presumably why the patent constrains its power explicitly while
leaving every other element's power free.

### L8 — Biconvex Positive

`n_e = 1.66151, ν_e = 50.57. Glass: N-SSK5 (compatible spectral proxy; Jena melt unconfirmed). f = +41.56 mm.`

The last powered element. It restores the positive power L7 removed (+0.0146 mm⁻¹ of Petzval
against L7's −0.0257 mm⁻¹) and returns +6.6823 × 10⁻⁴ to the chromatic sum. Together with L7 it
forms the strongly-curved negative-positive pair behind the stop that is the usual recipe for
keeping the exit pupil far enough forward in a compact rear group. The exit pupil geometry that
results is given under pupils below.

### P — Plane-Parallel Plate

`n_e = 1.51859, ν_e = 63.87. Glass: N-BK7 (compatible spectral proxy; Jena melt unconfirmed). No finite power.`

A 3.878 mm plate closing the objective. It belongs to the lens, not to the camera: claim 1 makes it
part of the optical system, claim 2 fixes it and makes the group-to-plate distance variable, and
claim 3 offers the alternative of moving it with the rear group. Claim 4 offers a variant built
without it altogether.

The description gives it **one** rationale and that rationale is **mechanical**: a fixed plate
yields advantages for the mechanical construction of the objective, shielding the moving cells from
the camera side so that telescoping tubes can be omitted as separate components (printed page -7-).
No optical function is claimed for it anywhere in the document. A researched secondary source does
additionally describe the plate as a field flattener; that characterisation is **not corroborated
by the patent and is not supportable from the model**. Both faces are flat, so the plate's
surface-by-surface Petzval contribution is exactly zero — it cannot flatten the field in the
Petzval sense, whatever it contributes in plate spherical, longitudinal chromatic and oblique
astigmatic terms. The **field flattening** attribution has accordingly been removed from the
prescription file at this stage, and the patent's mechanical rationale carried in its place.

What the plate does contribute paraxially is an axial image shift of `d(1 − 1/n_e)` = 1.324 mm,
which is inside the back-focus bookkeeping and is why the plate cannot simply be deleted without
re-solving the rear spacing.

## Glass Identification and Selection

Nine media, audited against 1 087 rows drawn from six vendor catalogues — Ohara, Hoya, Schott,
Sumita, Hikari and CDGM — with every row evaluated at e/F′/C′ from its own dispersion formula and
`ν_e` recomputed rather than compared at C/d/F. The e-line evaluation matters: comparing these
coordinates against d-line catalogue columns would produce different and wrong nearest neighbours.

| Element | n_e / ν_e | Nearest catalogue candidate | Coordinate distance¹ | Character |
|---|---|---|---|---|
| L1 | 1.68101 / 54.74 | CDGM D-LaK5 | 0.00176 | close |
| L2 | 1.69649 / 53.29 | CDGM H-LaK6A | 0.00273 | close; documented as Jena LaK 75n |
| L3 | 1.65221 / 33.62 | CDGM H-ZF1A | 0.00017 | SF2 type |
| L4 | 1.60588 / 60.71 | Hikari J-SK14 | 0.00538 | SK14 type |
| L5 | 1.76167 / 27.33 | CDGM ZF6 | 0.00017 | SF4 type |
| L6 | 1.6664 / 56.14 | Ohara S-LAL54Q | 0.01287 | nothing inside the close band |
| L7 | 1.66885 / 35.62 | Hikari J-BASF2 | 0.00037 | BaSF2 type |
| L8 | 1.66151 / 50.57 | Hoya BACED5 | 0.00002 | SSK5 type |
| P | 1.51859 / 63.87 | CDGM D-K9 | 0.00035 | BK7 type |

¹ Combined distance √(Δn_e² + (Δν_e/50)²), evaluated at e/F′/C′. It is not an `n_e` difference alone;
L6's nearest row, for example, differs by 0.0126 in `n_e`.

**Runtime spectral proxies.** The integration audit assigned S-LAL12, LAC13, SF2,
N-SK14, E-FD4, J-BASF2, N-SSK5 and N-BK7 to L1–L5, L7–L8 and P respectively.
Each published curve was evaluated at the native e/F′/C′ wavelengths and passed the
existing index and Abbe compatibility limits. These are supplier-neutral spectral
approximations, not identifications of the historical Jena melts. L6 remains
unresolved. The table above records the original authoring survey; it is not the
runtime selection order.

**The palette is the point of the invention.** The description's stated object is a lens faster
than 1 : 2.8 at the wide end that avoids high-index, technologically demanding lanthanum glasses
(printed pages -4- and -5-), and condition (8) is the mechanism: every element is required to sit
on or below the line `n_e ≤ 4.40244/ν_e + 1.60059` in the (1/ν_e, n_e) plane. The highest index in
the design is L5's 1.76167 — a conventional dense flint, not a lanthanum crown — and the only
element above the line is L2. The avoidance is of *high-index* lanthanum glass, not of the family.
L1's coordinates fall among modern LaK12-type lanthanum crowns, and L1 lies exactly on the line.

**Spectral limits.** The source publishes `n_e` and `ν_e` and nothing else: no `n_C`, `n_F`, `n_g`,
`P_gF` or `ΔP_gF`. The prescription file accordingly carries no partial dispersion data on any
element, no six-digit glass code (which would be a d-line construct and inadmissible for e-line
rows), and **no apochromatic**, ED or anomalous-dispersion claim is made anywhere in this document.
The proxy curves supply approximate chromatic behavior; the source alone does not establish
the historical melts’ secondary spectrum.

## Focus Mechanism

**The patent publishes no focus data of any kind** — no object distance, no focusing group, no
finite-conjugate spacing row, no magnification. The focus behaviour in the prescription file is a
**constrained reconstruction**, labelled as such in the file header, in `focusDescription`, in the
evidence record and here.

**Mechanism.** A rigid unit extension of the complete powered system against the plate that claim 2
fixes to the camera, so the only quantity that changes is the rear gap `l7`. The alternative of
front-group focusing was rejected: it would require inventing a travel law whose direction and
magnitude the source does not constrain, and it changes the effective focal length at every focus
setting. The unit-extension mechanism introduces no internal motion of the published groups at all,
reuses the freedom the zoom compensation already exercises, and is the only candidate both solvable
and checkable against the one production observable that exists.

**Solution.** Solved numerically by bisection on the paraxial conjugate equation, separately at each
station, for a minimum object-to-image distance of 0.80 m taken from secondary sources:

| Station | `l3` | `l7` at infinity | `l7` at 0.80 m | Extension | Magnification |
|---|---|---|---|---|---|
| Wide | 31.052 mm | 1.000 mm | 2.7818 mm | 1.7818 mm | 1 : 18.6 |
| Tele | 0.525 mm | 20.2601 mm | 26.845 mm | 6.5849 mm | 1 : 9.55 |

The same extension was solved at each of the eight calculated intermediate stations. It rises
monotonically from 2.163 mm at 38.5 mm to 6.101 mm at 63.0 mm.

**Scope and limits.** The reconstruction is solved at each of the ten zoom stations, two published
and eight calculated. Positions between stations interpolate and are not source-published mechanical
states. A single
distance scale is only approximately valid across the range under this mechanism, and the model
solves each station exactly rather than asserting a common scale. The separate 1 : 3 macro mode
that secondary sources describe as switchable at the long end lies well outside this range and is
**not** modelled. A production minimum focus distance is not by itself permission to invent an
underdetermined focus law, and nothing here should be read as recovering the real mechanism.

## Conditional Expressions

The patent states eight conditions on printed pages -5- and -6-, with the symbols defined on
printed page -6-. All eight were re-evaluated from the parsed prescription file:

| # | Condition | Computed | Satisfied |
|---|---|---|---|
| (1) | −1.75 < f'_I/f'_II < −1.35 | −1.570264 | yes |
| (2) | s'_I/f'_I < 1.2 | +1.170494 | yes |
| (3) | s_II/f'_II < −0.9 | −0.929602 | yes |
| (4) | d1+l1+d2+l2+d3 < 0.7 | 0.692100 | yes |
| (5) | d4+d5+l4+d6+l5+d7+l6+d8 < 0.8 | 0.787600 | yes |
| (6) | d1 > 0.17 | 0.180100 | yes |
| (7) | −0.7 < f'_7/f'_min < −0.6 | −0.655225 | yes |
| (8) | n_e ≤ 4.40244/ν_e + 1.60059, every element | violated at L2 by +0.013287 | **no** |

One source defect sits behind conditions (2) and (3). The symbol table on printed page -6- defines
`s'_I` as the image-side focal intercept of the moving **positive** group — word for word the same
definition it gives for `s_II`. Taken literally the two symbols would name the same quantity, which
the subscripts contradict. It is treated here as a typographical error in the source and `s'_I` is
read as belonging to the negative group, which is the only reading under which condition (2) is
about the front group at all. The reading is recorded as a modelling decision rather than presented
as the patent's text.

Conditions (4) and (5) are satisfied with very little room: the front-group axial sum lands at
0.6921 against a limit of 0.7, and the rear-group sum at 0.7876 against 0.8. The design sits hard
against its own compactness constraints, which is consistent with the description's account of
what (4) and (5) are for — holding the front element's diameter down and the overall length in
check.

**Condition (8) and its one exception.** The example violates its own glass-map condition at L2 and
nowhere else. The printed constants were independently reconstructed: the straight line through the
L1 and L5 coordinates in the (1/ν_e, n_e) plane has slope 4.402442 and intercept 1.600585, against
the printed 4.40244 and 1.60059. The condition was therefore fitted to two of the design's own
glasses, and L1 and L5 lie on the limit line to within 5 × 10⁻⁶. One reading follows: the line was
drawn through glasses the design already used, and L2 was admitted above it knowingly. The secondary
record that names element 2 as a lanthanum glass is consistent with that reading. The patent itself
says nothing about the exception, so the reading is interpretation, not source fact. The discrepancy is carried
visibly rather than reconciled, and it affects no modelled quantity.

## Chromatic Correction Strategy

The description makes one substantive chromatic claim — that uniform correction across the whole
focal-length range is achieved through the cemented member and the glasses chosen (printed page -7-)
— and that claim can be tested rather than repeated. Because the two groups sit far apart and move,
the meaningful quantity is the height-weighted first-order sum Σ y² φ/ν_e, not an in-contact
thin-lens sum. Expressed dimensionlessly as Σ y² φ/ν_e × EFL:

| Station | Front group | Rear group | System |
|---|---|---|---|
| Wide | −2.53 × 10⁻⁴ | +2.57 × 10⁻³ | +2.32 × 10⁻³ |
| Tele | −4.71 × 10⁻⁴ | −4.15 × 10⁻⁶ | −4.75 × 10⁻⁴ |

For comparison, a bare singlet in a ν_e ≈ 55 glass would return 1/ν_e ≈ 1.8 × 10⁻² on the same
scale. The system residual is therefore roughly an order of magnitude below a singlet's at the wide
station and a further factor of five below that at tele, which is a quantitative version of the
description's claim and supports it.

The structure behind that result is worth stating because it is not what the patent's sentence
alone suggests. The front group's contribution is fixed — its marginal ray heights do not depend on
the zoom gap — so the whole of the variation across the range comes from the rear group, whose
marginal heights fall from 1.67 to 1.17 (normalized to unit height at the first surface) as the
lens zooms in. Within the rear group the cemented member is a **partial** achromat leaving a
positive residual, L6 and L8 add further positive residuals, and L7 alone over-corrects hard enough
to bring the total back through zero. The cemented member is the largest single piece of the
correction, as the description says, but it is not the whole of it, and calling it an achromatic
doublet would be wrong.

Two limits apply to everything in this section. The calculation is an Abbe model at the e-line, so
it describes axial colour only; it carries no **partial dispersion** content and supports no
statement about secondary spectrum. And the sign of the small tele residual is sensitive to the
height-weighting convention used for a thick element, so no significance is attached to it — only
the magnitudes, and the fact that they stay small at both ends, are being claimed.

## Field Curvature

The Petzval sum, computed surface by surface as φ/(n·n′) over the parsed prescription, is
**0.0028597** mm⁻¹, a Petzval radius of **349.69 mm**. The sum is state-independent, as it must be
for a design whose zoom acts only through air spacings; expressed as sum × EFL it is 0.1001 at the
wide station and 0.1866 at tele, so the field is relatively flatter, in units of focal length, at
the wide end where the field angle is largest.

Partitioned by group range, with the cemented interface attributed once:

| Group | Petzval contribution |
|---|---|
| G_I (surfaces 1–6) | −0.011483 mm⁻¹ |
| G_II (surfaces 7–15) | +0.014343 mm⁻¹ |
| P (surfaces 16–17) | 0.000000 mm⁻¹ |

The negative front group buys back 80 per cent of the rear group's positive Petzval, which is the
structural reason a negative-lead zoom can carry a flat field without a dedicated flattener. The
plate contributes exactly zero, as two flat surfaces must.

## Aperture, Pupils and Vignetting

**The stop position and diameter are both unpublished.** The description places the aperture stop B
inside the `l5` air space between L6 and L7 (printed page -8-) but gives neither its axial position
within that space nor its diameter. The position in the prescription file is **inferred**: the
3.9760 mm space is divided 1.0000 / 2.9760 mm, placing the iris as far forward as the rear rim sag
of L6 mechanically allows, because forward placement best reproduces the published `k` pair. This
departs from the drawing. The schematic Fig. 1 shows B at roughly 0.58 of `l5` behind r11, by pixel
measurement of the scan, and the description labels that figure schematic (printed page -7-). An
iris at the drawn position, calibrated the same way, would give about f/3.70 at tele rather than
f/3.668.

**The stop semi-diameter of 9.2413 mm is calibrated**, not measured: it is set so the wide station
returns the patent's published `k = 2.7`. Agreement at that station is therefore calibration and
carries no independent information about the physical diaphragm. The independent consequence
appears at the other end:

| Station | Modelled f-number | Published `k` | Marketed |
|---|---|---|---|
| Wide | 2.700 | 2.7 | f/2.7 |
| f' = 1.4 (49.0 mm, calculated station) | 3.148 | 3.1 (Figs. 2–4) | — |
| Tele | 3.668 | 3.6 | f/3.5 |

The tele value stands +1.88 per cent above the printed 3.6 and +4.80 per cent above the marketed
3.5. The cause is structural rather than an artefact of the calibration: the geometric ratio
`k_tele/k_wide` = 1.35845 is a property of the prescription and the stop position, while the
published pair implies 3.6/2.7 = 1.33333. Moving the iris through the entire available space varies
`k_tele` only between 3.6477 and 3.7375, and the position that would satisfy both printed values
lies inside L6 — not a physical air-space position. **No single fixed iris reproduces both
published f-numbers**, and this document does not claim that the patent's `k` pair is reproduced.

**Pupils.** The entrance pupil radius is 6.481 mm at the wide station, 37.47 mm behind the first
vertex, and 8.893 mm at tele, 25.50 mm behind it. The exit pupil is the stop imaged by the four
surfaces behind it: radius 9.950 mm at a pupil magnification of 1.0767, standing 53.73 mm ahead of
the image plane at the wide station and 72.99 mm ahead at tele, for corner chief-ray angles of
21.93° and 16.51° respectively. Both pupil figures inherit the stop calibration and scale with it.

**Vignetting.** No semi-diameter is published, so all eighteen are **modelled** from marginal- and
chief-ray geometry at the four defined states. The front group is sized to the bundle at 0.60 of
the half-field within its own edge-thickness, rim-slope and cross-gap limits; the stop, the rear
group and the plate are then sized to pass whatever the front group transmits. The result
reproduces the behaviour expected of a fast wide zoom. The first surface to bite is L3's front face
at 0.6 of the half-field; from 0.8 outward the **front element dominates**, and at the extreme
corner L8's rear rim joins it. The stop is never the limiter off-axis, and the plate never limits
at all:

| Field fraction | 0.0 | 0.3 | 0.6 | 0.8 | 1.0 |
|---|---|---|---|---|---|
| Wide, surviving pupil | 100 % | 100 % | 99.2 % | 64.3 % | 27.3 % |
| Tele, surviving pupil | 100 % | 100 % | 100 % | 100 % | 100 % |

Stated plainly: this is paraxial bundle geometry. Paraxial chief-ray heights in the front group of
a retrofocus wide setting exceed real-ray heights, so the modelled wide-end vignetting is
**pessimistic**, and this is not a production render-trim diagnostic.

## Verification Summary

Every quantitative statement above was recomputed from the parsed prescription file by an
accompanying verification program, using a sequential height/reduced-angle trace and a separately
implemented ray-transfer product that agree to better than 1 × 10⁻⁹ at every state, with a
two-group closed form as a third cross-check on the source branch.

| Quantity | Model | Source / marketed | Disposition |
|---|---|---|---|
| EFL, wide | 34.998 mm | `f' = 1.0` × scale; marketed 35 mm | agrees within source precision |
| EFL, tele | 65.241 mm | printed `f' = 1.9`; marketed 70 mm | see below |
| f-number, wide | 2.700 | printed 2.7 | calibrated, not independent |
| f-number, tele | 3.668 | printed 3.6 | visible mismatch, carried openly |
| Δ`l7`, wide → tele | 0.550289 normalized | claim 2: 0.5611 ± 10 % | inside the claim's own tolerance |
| Full field, wide | 63.44° | printed 63.4° | see caveat below |
| Full field, tele | 36.69° | printed 35.1° | 1.59° high |
| Zoom ratio | 1.864 | printed ratio 1.9 | see below |
| Image-plane closure | ≤ 1 × 10⁻⁴ mm, all twenty station states | — | passes at 5 × 10⁻⁴ mm |
| Defocus between adjacent stations | ≤ 0.053 mm | fixed image plane (p. -8-) | below the ±0.081 mm depth of focus at f/2.7, c = 0.030 mm |

**The three published tele-end quantities are mutually inconsistent, and this is a property of the
source.** The printed tele spacing `l3 = 0.0150` gives a normalized EFL of 1.864039 and a rear-gap
change of 0.550289. The printed `f' = 1.9` is unreachable at any non-negative `l3` — the ceiling
with the groups in contact is 1.892160. The printed Δ`l7 = 0.5611` corresponds to `l3 = 0.005891`,
which would give 1.881. The printed spacing is retained because it is the only published spacing;
`l3` was not tuned to manufacture agreement, and both comparisons remain visible.

The field-angle rows carry a caveat that keeps them from being over-read. The published 2σ values
are real, distorted object-space angles — Fig. 4 shows roughly −3 per cent distortion at the wide
setting and under −1 per cent at tele — whereas the modelled values are undistorted paraxial
angles. They are not the same quantity. The close wide-end agreement is therefore partly
coincidental and is **not** evidence that the resolved scale factor is correct.

## Modelling Decisions, Deviations and Limitations

This section records where the prescription file departs from, or goes beyond, what the patent
published. Each departure is labelled in the file itself as well as here.

**Scale.** The source is normalized to `f'_min = 1.0` and publishes no millimetre dimension at all.
A single scale factor **s = 35.0** mm per normalized unit is applied to every radius, thickness, air
gap, modelled semi-diameter and image-plane distance, anchoring the wide design EFL to the
manufacturer's marketed 35 mm. Two alternatives were rejected: 36.2, from applying the Fig. 4
barrel distortion to the published 63.4° field, and 36.5, from a secondary-source barrel length.
Both rest on a figure read by eye or on a third-party dimension, neither of which outranks a
manufacturer specification. No aspheric or diffractive coefficients exist, so no coefficient
transform applies. The **consequence is carried openly: the tele design EFL is 65.24 mm against a
marketed 70 mm**, a shortfall of 6.8 per cent that this scale choice does not resolve and does not
hide. Every millimetre figure in this document is conditional on that scale.

**Zoom stations.** Two stations are published, and eight intermediate ones are calculated from the
fixed-image-plane condition. They are first-order states, not cam data, and they exist so that
interpolation between stations does not defocus the model by millimetres.

**Semi-diameters.** None are published. All eighteen are modelled paraxial estimates, not exact ray
results.

**Stop.** Position inferred within the published air space; diameter calibrated to the published
wide `k`. Neither is evidence of the physical diaphragm.

**Rear gap split.** The source publishes only `l7 > 0` plus the change between settings. The
absolute division between `l7` and the plate-to-image distance is **paraxially degenerate** —
the plate is plane-parallel and wholly inside the converging beam, so any split preserving the sum
yields identical EFL, back focus, pupils and f-number. The chosen split gives 1.0000 mm of running
clearance at the closest extreme and puts the plate's rear face 37.7488 mm ahead of the image
plane. It affects rendered geometry and mechanical plausibility only.

**Focus.** Constrained reconstruction, as described above.

**Glass.** Every element uses the `Unmatched (…)` form; no supplier or melt identity is asserted.

**Plate rationale.** The **field flattening** function previously attributed to the plate has been
removed and the patent's **mechanical** rationale carried in its place, on two independent grounds:
the description states no optical function for it, and both faces being flat its Petzval
contribution is exactly zero. The secondary source that makes the claim is recorded as
uncorroborated.

**Mount.** The production lens uses the Praktica B bayonet, which has no canonical identifier in the
current taxonomy revision, so the mount field is omitted rather than mislabelled. Declaring
only the M42 identifier would have been true of the sibling but would have implied that the named
lens is an M42 lens. The same formula was sold in M42 as the Vario-Pancolar 35–70 mm
f/2.7–3.5 MC. The image format is 24 × 36 mm.

**Marketed specifications.** All production figures — 35–70 mm, f/2.7–3.5 to f/22 in half stops,
0.80 m close focus with a switchable 1 : 3 macro mode at the long end, 58 mm filter thread, 480 g,
74.5 mm long at the 70 mm setting, produced July 1987 to October 1990 — rest on secondary sources.

**Repository verification.** The integrated data pass schema, surface, image-circle and renderer checks. The fixed plate semi-diameters are estimated at 12.9 mm from its approximately 0.95 rim ratio to L4 in local Fig. 1; the schematic does not supply manufacturing apertures. Live wide/tele and infinity/close-focus review confirms the stated travel directions.

## Design Heritage and Context

The description positions the design against two lines of prior art it names directly (printed
page -4-): zooms whose front group leads with a positive element — DE-OS 2557547 and DE-OS 2720986
are cited — which correct evenly but drive the front element's diameter up; and zooms leading with
a negative element — US 4155629 and DE-OS 2727636 — which it faults for strong aberration variation
across the range, excessive length, insufficient aperture, heavy wide-end distortion, or reliance
on high-index lanthanum glasses. DE-OS 2601499 and US 4266860 are cited as the general
negative-positive two-group form.

The document's own framing puts its contribution against the last item in that list. It offers a
negative-lead two-group zoom faster than 1 : 2.8 at the wide end whose glass palette is bounded by an
explicit index-versus-dispersion line, condition (8), so that high-index lanthanum glasses the
description calls technologically demanding are not needed (printed pages -5- and -7-). The
design admits one exception to that line. The description also notes
that the construction and its aberration correction make the objective useful in the macro range,
particularly at intermediate focal lengths (printed page -7-) — a remark that fits the production
lens's switchable close-focus mode, though the patent publishes no data for it.

## Sources and References

**Primary.**

- DE 3602859 A1, *Fotografisches Objektiv mit variabler Brennweite*. Deutsches Patentamt,
  Offenlegungsschrift, application P 36 02 859.2 filed 1986-01-31, laid open 1986-09-18. Applicant
  Jenoptik Jena GmbH, Jena, DDR. Inventors Utz Schneider, Volker Tautz, Karin Holota. Priority
  DD WP G 02 B/273 668 2 of 1985-03-01. IPC G02B 15/14 // G02B 15/22. Prescription table on printed
  page -2-; claims on printed pages -1- and -3-; description on printed pages -4- to -8-; Fig. 1
  cross-section and Figs. 2–4 aberration plots on the two drawing sheets. The supplied copy is a
  raster-only scan with no text layer; all values were read from high-resolution crops.

**Secondary.** Used only where labelled, and never to override the patent.

- Marco Kroeger, "Vario-Prakticar", zeissikonveb.de,
  <https://zeissikonveb.de/start/objektive/wechselobjektive-1980er/carl_zeiss_jena/vario-prakticar.html>,
  retrieved 2026-09-17. Cites Volker Tautz in *Jenaer Jahrbuch* 2/1989; Koch et al., "Variables aus
  der DDR", *Photo Antiquaria* 141 (12/2019), p. 33; Jehmlich, *Pentacon* (2009), p. 131. Supplies
  the DD 235.122 identity, the designer attribution, the element and group count, the element-2
  glass name, and the plate characterisation this document declines to adopt.
- "Carl Zeiss Jena Vario-Prakticar 35-70mm f2.7-3.5", nikolaus-burgard.de,
  <https://www.nikolaus-burgard.de/objektivvorstellungen-lens-reviews/carl-zeiss-jena/carl-zeiss-jena-vario-prakticar-35-70mm-f2-7-3-5/>,
  retrieved 2026-09-17. Marketed specification block.
- "Carl Zeiss Jena Vario-Prakticar 2.7-3.5/35-70", scanned instruction leaflet, butkus.org,
  <https://butkus.org/chinon/praktica/praktica_lenses/b-lenses/cz-vario-prakticar-2-7_3-5_35-70.pdf>,
  located 2026-09-18. The scan has no text layer; its content was not read for this work.
- "Carl Zeiss Jena DDR Vario-Prakticar 35-70mm F/2.7-3.5 MC", LENS-DB.COM,
  <https://lens-db.com/carl-zeiss-jena-ddr-vario-prakticar-35-70mm-f27-35-mc-1987/>, retrieved
  2026-09-17. Production window and the M42 Vario-Pancolar sibling.

**Glass catalogue data.** Ohara, Hoya, Schott, Sumita, Hikari and CDGM vendor tables as distributed
with the `opticalglass` package, version 2.0.2, 1 087 rows evaluated at e/F′/C′. Catalogue revision
dates are those of the package release and were not independently re-verified against vendor sites.
No historical **Jenaer** Glaswerk catalogue was available. The modern names in the data identify compatible spectral proxies; none establishes a historical production-glass identity.
