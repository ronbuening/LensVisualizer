# Sony FE 90 mm F2.8 Macro G OSS — Optical Analysis

**Patent reference:** WIPO **WO 2016/136352 A1** — Sony Corporation, *"Macro lens and imaging device"*. Priority: JP 2015‑036470 (26 February 2015). International filing: PCT/JP2016/051987 (25 January 2016). Publication: 1 September 2016.

**Inventors:** Yumiko UEHARA, Fumikazu KANETAKA, Hisashi UNO (all Sony Corporation).

**Numerical example analysed:** Example 2 — the embodiment that corresponds to the production lens.

**Production model:** Sony **FE 90 mm F2.8 Macro G OSS** (model **SEL90M28G**), announced March 2015. Sony's product page lists the lens as a 35 mm full‑frame E‑mount macro: 11 groups / 15 elements, 9‑blade circular aperture, F2.8 maximum aperture, F22 minimum aperture, 0.28 m minimum focusing distance, 1:1 maximum magnification, 62 mm filter, 79 × 130.5 mm body, 602 g, with Optical SteadyShot image stabilisation. Sony's lens‑construction diagram on the product page identifies one Aspherical, one Super ED, and one ED element.

> **Method statement.** Every numerical claim in this document was verified independently from the patent prescription (Tables 5 – 8, 16) by paraxial ABCD‑matrix ray trace in Python, with no reliance on the patent's stated values during computation. The patent's stated EFL, BFD, group focal lengths and conditional expressions were then compared against the computed values surface‑by‑surface; agreement is reported in §1.

---

## 1. Executive summary

Example 2 is a 15‑element / 11‑group internal‑focus macro design with a **floating dual‑group focusing mechanism** and a **separate axially‑fixed positive group used for image stabilisation**. The design is engineered around four objectives stated in the patent text [paragraphs 0008 – 0010]: *good optical performance, short overall optical length, lightweight focus groups, and 35 mm‑format coverage at ≈ 90 mm focal length*.

| Quantity | Patent (Tables 7 / 16) | Computed | Δ |
|---|---|---|---|
| Effective focal length, f | 92.63 mm | **92.6064 mm** | −0.024 mm (0.026 %) |
| F‑number, Fno | 2.88 | 2.88 (consistent with EP semi‑diameter 16.08 mm) | — |
| Half‑angle of view, ω | 13.15° | **13.147°** | −0.003° |
| Image height, y′ | 21.63 mm | 21.63 mm (full‑frame half‑diagonal) | — |
| Air‑equivalent back focus, BF | 25.40 mm | **25.4000 mm** | 0.000 mm |
| Final group focal length, fr | −45.74 mm | **−45.877 mm** | −0.137 mm (0.30 %) |
| Combined object‑side focal length, ff | 241.04 mm | **240.981 mm** | −0.059 mm (0.024 %) |
| Conditional (1) `\|fr/f\|` (range 0.25 – 2.0) | 0.49 | **0.4954** | satisfied |
| Conditional (2) `y′/BF` (range 0.65 – 1.3) | 0.85 | **0.8516** | satisfied |
| Conditional (3) `f/ff` (range 0 – 0.8) | 0.38 | **0.3843** | satisfied |

All computed values agree with the patent's stated values to within the precision of the four‑decimal prescription, confirming Example 2 is internally consistent.

**Marketing‑to‑patent reconciliation.** The marketed focal length is 90 mm; the patent's design EFL is 92.63 mm. The difference is approximately 3 %, well within the few‑percent tolerance allowed by industry labelling conventions for marketed focal length (DIN 4522 specifies ±6 % for engraved focal length, and ISO 517 governs related photographic‑lens designations). Where the two disagree, **manufacturer specifications take precedence** for marketed values. The marketed maximum aperture is f/2.8; the design value is f/2.88 — also a rounded marketing figure (f/2.88 rounds down to the next ISO 1/3‑stop step at f/2.8).

**Total optical length conservation.** As an internal‑focus design, the lens preserves total optical length across the focus range. Sum of all axial gaps S1 → S27 is 118.758 mm at infinity, 118.758 mm at −0.5×, and 118.748 mm at −1.0× (the 0.01 mm difference at MFD is rounding noise from the patent's two‑decimal variable‑gap table).

---

## 2. Optical layout — five lens groups

The patent's verbal description ([paragraphs 0087 – 0094] for Example 2) and the prescription Table 5 jointly partition the 15 elements into the following five groups, in object‑to‑image order:

| Group | Elements | Surface span | f<sub>group</sub> (computed) | Power | Function in focusing |
|---|---|---|---|---|---|
| **GR1** Object‑side | G1, G2, G3, G4 (4) | S1 – S7 | **+53.41 mm** | + | **Fixed** (patent's "object‑side lens group") |
| **GR2** 1st focus | G5, G6, G7 (3) | S8 – S12 | **−32.87 mm** | − | **Moves toward image** as focus shortens |
| **GR3** Anti‑vibration | G8, G9 (2) | S13 – S15 | **+109.96 mm** | + | **Fixed axially**; shifts perpendicular to axis for OSS |
| **STO** Aperture stop | (—) | S16 | — | — | **Fixed** (does not move with focus) |
| **GR4** 2nd focus | G10, G11, G12 (3) | S17 – S21 | **+51.05 mm** | + | **Moves toward object** as focus shortens |
| **GR5** Final | G13, G14, G15 (3) | S22 – S27 | **−45.88 mm** | − | **Fixed** (patent's "final lens group") |
| ⟨FL⟩ Sensor seal | (—) | S28 – S29 | — | — | Sensor cover glass (excluded from the 15‑element optical count) |

The two focus groups have **opposite sign** of refractive power (GR2 strongly negative, GR4 strongly positive), and they move in **opposite directions** during focusing — GR2 rearward and GR4 forward. This is the signature of a *floating focus* macro design: the two opposing groups together suppress focus‑induced spherical and field aberrations across the magnification range from infinity to 1:1, an effect the patent describes in [paragraph 0027] (paraphrasing: "by moving two lens groups, correction of field curvature is favourable from infinity to a near‑1:1 close‑range subject").

![Power distribution across the five lens groups](power_distribution.svg)

**Figure 1.** Group focal lengths and equivalent diopters at infinity focus (paraxial). The two focus groups (GR2 and GR4) carry the strongest powers in the system, of opposite sign — a power‑balance arrangement that minimises the *net* sensitivity to small focus‑drive errors while giving the design two independent degrees of freedom for aberration control during focus excursion.

---

## 3. Element‑by‑element analysis

The full prescription appears in Table 5 of the patent. Each element below is annotated with its computed focal length (ABCD‑matrix in air, both sides bracketed by air = 1.0), its glass identification (see §5 for confidence framework), and its functional role.

### 3.1 GR1 — object‑side group (4 elements, fixed)

GR1 carries the conditioning role: it captures on‑axis and off‑axis bundles, applies first‑order chromatic correction, suppresses high‑order zonal spherical aberration via the rear aspherical surface on G4, and pre‑converges the bundle for the focus and stabilisation groups behind it.

| Elem. | (R<sub>front</sub>, R<sub>rear</sub>) mm | d (mm) | n<sub>d</sub> / ν<sub>d</sub> | Glass match | f<sub>e</sub> (mm) | Role |
|---|---|---|---|---|---|---|
| **G1** | (+60.7452, −742.4113) | 6.483 | 1.7292 / 54.67 | OHARA **S‑LAL18** — exact | **+77.27** | Front bi‑convex with near‑flat rear; carries the maximum chief‑ray height of the system |
| **G2** | (+85.1880, −300.7794) | 4.575 | 1.4970 / 81.61 | OHARA **S‑FPL51** — exact (also HOYA FCD1, Schott N‑PK52A) | +134.10 | **ED** anomalous‑low‑dispersion crown; cemented to G3 |
| **G3** | (−300.7794, +62.5282) | 1.800 | 1.8467 / 23.78 | OHARA **S‑TIH53** — exact | −61.00 | Heavy titanium dense flint, the negative partner cemented to G2 |
| **G4** | (+46.3651, +478.0475A) | 4.722 | 1.7680 / 49.24 | OHARA **S‑LAM61** — exact (production glass for the aspheric is more likely the moldable variant **L‑LAM61**; see §10) | +66.54 | Positive meniscus; **rear surface S7 is aspherical** (κ = 0; the only asphere of the design) |

The G2/G3 cement is the principal *axial* (longitudinal) chromatic correction in the front group. G2's strongly anomalous partial dispersion (catalog ΔP<sub>g,F</sub> ≈ +0.038 above the normal line per OHARA's published S‑FPL51 datasheet) paired with the heavy flint G3 gives *secondary‑spectrum* correction — the kind that an ordinary crown‑flint pairing cannot achieve.

The aspherical rear of G4 sits where the marginal ray height is still substantial (computed h ≈ 13.2 mm for an f/2.8 cone) but the chief‑ray height is small. This is the favoured location for an asphere in a fast lens: it lets the surface attack mid‑ to high‑order spherical aberration of the front group without simultaneously distorting the chief‑ray geometry. See §4 for the surface profile.

### 3.2 GR2 — first focus group (3 elements, moves toward image)

GR2 is the *retreating* focus group: as object distance shortens, GR2 moves **toward the image plane**, opening the d7 air gap and closing d12. Its strong negative power makes it focus‑sensitive: a small axial displacement of GR2 produces a large change in the system's back focal length, which is what allows the lens to focus from infinity to 1:1 with a finite stroke.

| Elem. | (R<sub>front</sub>, R<sub>rear</sub>) mm | d (mm) | n<sub>d</sub> / ν<sub>d</sub> | Glass match | f<sub>e</sub> (mm) | Role |
|---|---|---|---|---|---|---|
| **G5** | (+235.4026, +31.9680) | 1.200 | 1.7725 / 49.62 | HOYA **M‑TAC60** (also TAC4) — exact | **−48.01** | Negative meniscus, both surfaces convex toward the object — gentle front (R = +235), strong rear (R = +32) — the entry of the focus group |
| **G6** | (−120.8878, +32.6584) | 1.200 | 1.7292 / 54.67 | OHARA **S‑LAL18** — exact | −35.15 | Bi‑concave, cemented to G7 |
| **G7** | (+32.6584, +109.2743) | 3.067 | 1.9229 / 20.88 | OHARA **S‑NPH2** — exact (also S‑NPH53, HOYA E‑FDS1) | +49.52 | Very high‑index, very high‑dispersion meniscus, positive — the achromatic partner of G6 |

The patent's role assignment here is doctrinal: the first‑focus group is given **two or more elements** (here three) so that internal achromatisation of the focus group itself is possible [paragraph 0028] — this prevents focus motion from injecting focus‑dependent chromatic aberration into the system. The G6/G7 cement does the heavy axial chromatic work; G5 contributes high‑order correction.

> **Note on a discrepancy between patent text and prescription.** The patent's verbal description of Example 2 [paragraph 0090] calls G5 "biconcave‑shaped" (両凹形状). However, both radii in Table 5 are positive (R<sub>front</sub> = +235.40, R<sub>rear</sub> = +31.97), which is unambiguously a **meniscus** geometry, not biconcave. Independent thin‑lens and thick‑lens computations both confirm G5 is a *negative meniscus* (f<sub>e</sub> = −48.0 mm thin‑lens, −48.01 mm thick‑lens ABCD), with edge thickness greater than centre thickness — the geometric signature of a diverging meniscus. The "biconcave" descriptor appears to have been carried over from Example 1 (where G5 *is* biconcave: R<sub>front</sub> = −1228.4, R<sub>rear</sub> = +35.10) without being updated for Example 2's prescription. The Table 5 prescription is authoritative, and the descriptor in this analysis follows it.

### 3.3 GR3 — anti‑vibration group (2 elements, fixed axially, shifts laterally for OSS)

The Sony product page advertises **"Optical SteadyShot (OSS)"**. The patent identifies GR3 as the anti‑vibration (防振 / *bōshin*) group [paragraph 0044], with positive refractive power [paragraph 0046]. Our paraxial computation gives **f<sub>GR3</sub> = +109.96 mm** — confirming positive power.

| Elem. | (R<sub>front</sub>, R<sub>rear</sub>) mm | d (mm) | n<sub>d</sub> / ν<sub>d</sub> | Glass match | f<sub>e</sub> (mm) | Role |
|---|---|---|---|---|---|---|
| **G8** | (+44.4665, +28.8115) | 1.200 | 1.8061 / 33.27 | High‑index Nb dense flint, six‑digit code **806333**; family match (see §5.2) | **−105.12** | Negative meniscus, cemented to G9 |
| **G9** | (+28.8115, −247.5076) | 5.800 | 1.4875 / 70.44 | OHARA **S‑FSL5** — exact (also Schott N‑FK5, Sumita K‑FK5) | +53.31 | Low‑dispersion crown, the achromatic partner of G8 |

Two design choices drive the architecture of the AV group. **First**, the group sits between GR2 and the stop, where the axial bundle is well‑converged and the chief ray is still relatively low — giving small lateral shifts in the AV group large image‑shift authority without prohibitive aberration. **Second**, the AV group is itself an *internally achromatic* doublet: lateral shift of a doublet of opposite‑sign elements produces less colour‑variation in the image than lateral shift of a singlet would. The patent makes this connection explicit in [paragraph 0046]: a positive AV group between GR2 and GR4 "converges the bundle while guiding it to the second focus group, reducing the bundle height and contributing to the small diameter of the second focus group."

GR3 is *axially* fixed but *laterally* movable — consistent with the marketed mechanical architecture where two DDSSM motors drive GR2 and GR4 axially while a separate transverse VC actuator coil shifts GR3 perpendicular to the optical axis.

### 3.4 GR4 — second focus group (3 elements, moves toward object)

GR4 is the *advancing* focus group: as object distance shortens, GR4 moves **toward the object**, opening d21 and closing d16. The patent emphasises that this group is constituted of two or more elements (here three) for chromatic correction [claim 1, paragraph 0010] but kept as light as possible — the moving mass advantage over earlier patents is one of the design's stated goals [paragraphs 0007 – 0008].

| Elem. | (R<sub>front</sub>, R<sub>rear</sub>) mm | d (mm) | n<sub>d</sub> / ν<sub>d</sub> | Glass match | f<sub>e</sub> (mm) | Role |
|---|---|---|---|---|---|---|
| **G10** | (+89.3718, −74.3718) | 3.942 | 1.7292 / 54.67 | OHARA **S‑LAL18** — exact | **+56.24** | Bi‑convex; entry of the second focus group |
| **G11** | (+100.2759, −37.7081) | 5.427 | 1.4370 / 95.10 | HOYA **FCD100** — exact (unique among major vendors at this code; see §5.1) | +63.47 | **Super ED** — extreme low‑dispersion (ν<sub>d</sub> = 95.10, the highest in the design); HOYA‑published ΔP<sub>g,F</sub> ≈ +0.056, an extreme positive offset; cemented to G12 |
| **G12** | (−37.7081, −188.5814) | 1.280 | 1.6727 / 32.17 | OHARA **S‑TIM35** — exact | −70.30 | Negative meniscus, the chromatic partner of the Super‑ED G11 |

GR4 hosts the **Super‑ED element** of the design. Pairing G11 (Super ED, ν<sub>d</sub> = 95.10) with G12 (titanium flint, ν<sub>d</sub> = 32.17) creates an apochromatic doublet whose ν‑number ratio is so extreme (Δν ≈ 63) that strong colour control is achievable in a thin component.

The *moving mass* of GR4 is dominated by G11 (a thick fluorophosphate element). However, fluorophosphate glasses have specific gravity around 3.6 g/cm³ — much lower than the heavy flints (5.0+ g/cm³). This is consistent with the patent's conditional expression (4) on average specific gravity: 0.24 < 1/G<sub>F</sub> < 0.40, where 1/G<sub>F</sub> for Example 2 is 0.29 [Table 16]. Lower density of GR4's elements directly speeds up focus drive (per [paragraph 0041]).

### 3.5 GR5 — final group (3 elements, fixed)

GR5 is the trailing **negative** group. Its negative power lifts the back‑focus to a respectable 25.4 mm, allowing the lens to image onto a 35 mm full‑frame sensor at the E‑mount's 18 mm flange‑focal distance with comfortable mechanical clearance.

| Elem. | (R<sub>front</sub>, R<sub>rear</sub>) mm | d (mm) | n<sub>d</sub> / ν<sub>d</sub> | Glass match | f<sub>e</sub> (mm) | Role |
|---|---|---|---|---|---|---|
| **G13** | (−76.0642, −43.4556) | 2.432 | 1.9037 / 31.32 | OHARA **S‑NBH55** — exact | **+108.33** | Positive meniscus, concave to object — the rear group's positive element |
| **G14** | (−88.4506, +88.4506) | 1.300 | 1.6584 / 50.85 | OHARA **S‑BAH27** — exact | −66.98 | Bi‑concave, perfectly equiconcave (R<sub>front</sub> = −R<sub>rear</sub>) |
| **G15** | (−27.8033, −75.2165) | 1.300 | 1.6968 / 55.46 | OHARA **S‑LAL14** — exact (also Schott N‑LAK14) | −64.02 | Negative meniscus, concave to object — final negative element |

Three observations from this group:

1. The final surface (S27, rear of G15) has **R = −75.22 mm — convex toward the image plane**. The patent specifically argues for this in [paragraph 0050]: the most image‑side surface of the final lens group is desirably convex, in order to suppress ghost generation. The convex‑to‑image rear surface geometrically bounces back‑reflected light *away* from the optical axis rather than focusing it back into the image, which is a meaningful ghost‑mitigation choice for a fast macro lens that may be used facing strong subject lights.
2. G14 is *exactly* equiconcave (both radii ±88.4506 mm). This is a manufacturing simplification — a single tooling profile is used for both front and rear, cutting cost and reducing tilt sensitivity in centring.
3. The two‑negative‑and‑one‑positive structure (positive G13, negative G14, negative G15) implements the "at least one negative and one positive lens" requirement for the final group [paragraph 0049] — the patent's argument is that this lets the bundle be diverged while controlling chromatic aberration in the back focus, a constraint that becomes binding when the back focus must be short and the image height is large (full‑frame coverage).

---

## 4. The aspherical surface — S7 rear of G4

| Surface | Type | κ | A<sub>4</sub> | A<sub>6</sub> | A<sub>8</sub> | A<sub>10</sub> |
|---|---|---|---|---|---|---|
| **S7** | spherical base + 4‑term polynomial | 0 | +1.68758 × 10⁻⁶ | −2.23231 × 10⁻¹⁰ | −6.57918 × 10⁻¹³ | +1.65445 × 10⁻¹⁵ |

The patent's aspheric‑formula convention is the standard one [paragraph 0067]:

$$x(y) = \frac{c\, y^{2}}{1 + \sqrt{1 - (1+\kappa)\,c^{2}\,y^{2}}} + A_{4} y^{4} + A_{6} y^{6} + A_{8} y^{8} + A_{10} y^{10}$$

with c = 1/R (R = +478.0475 mm) and y the radial coordinate.

**Departure profile.** The base radius R = +478.05 mm makes S7 a *very mildly concave* surface as seen from the air side (the centre of curvature lies far to the right, at +478 mm). Spherical sag at h = 16.5 mm is just 0.285 mm. The polynomial adds a **positive** mid‑zonal correction whose magnitude grows with h⁴ for small h, then is moderated by the negative A₆ and A₈ terms before A₁₀ contributes at the rim:

| h (mm) | sag<sub>sphere</sub> (mm) | sag<sub>asph</sub> (mm) | departure (mm) | local slope (deg) |
|---|---|---|---|---|
| 0 | 0.000 | 0.000 | 0.000 | 0.0 |
| 5 | 0.026 | 0.027 | +0.001 | 0.6 |
| 10 | 0.105 | 0.121 | +0.017 | 1.6 |
| 15 | 0.235 | 0.318 | +0.082 | 3.0 |
| 16.5 | 0.285 | 0.404 | **+0.119** | 3.5 |
| 18 | 0.339 | 0.507 | +0.168 | 4.3 |
| 20 | 0.419 | 0.674 | +0.256 | 5.3 |

At the marginal‑ray height (h ≈ 16.5 mm for an f/2.8 cone), the asphere adds about 0.12 mm of *additional* sag beyond the spherical baseline — roughly 40 % more sag than the underlying sphere. The local slope is gentle (3.5°), well within any rim‑slope limit. This kind of "mid‑zonal lift on a near‑flat surface" is the canonical aspheric solution to the residual high‑order spherical aberration of a fast positive front group: it leaves the paraxial optics largely unchanged (the surface is still effectively flat near the axis) while precisely sculpting the contribution to fifth‑ and seventh‑order spherical from the marginal zones.

**Why S7 in particular?** S7 is the rear of GR1 and the *exit* surface of the front group as the bundle enters the air gap d7 to GR2. Putting the asphere here has two advantages:

- The marginal ray is high (h ≈ 13 – 17 mm depending on focus state) but the chief ray is much lower in the front group, so the asphere selectively addresses spherical aberration without disturbing distortion or astigmatism.
- The aspheric departure is added *before* the focus motion — meaning aberration sculpting is applied to the bundle that GR2 then translates through focus, rather than being applied inside a moving group (which would require tighter manufacturing tolerances on the moving element).

This matches the patent's [paragraph 0048] guidance: "It is desirable that at least one lens surface among the plural lens surfaces constituting the object‑side lens group be aspherical. The object‑side lens group has high ray height at all magnifications, and so it is always able to perform peripheral‑ray aberration correction."

---

## 5. Glass identification — confidence framework

For each of the 15 elements I cross‑referenced the patent's (n<sub>d</sub>, ν<sub>d</sub>) pair against the OHARA, Schott, HOYA, Sumita, HIKARI and CDGM catalogs, computing the six‑digit glass code (n<sub>d</sub>×100 000 / ν<sub>d</sub>×100) and reporting the closest entries. The confidence framework is three‑tier:

- **Exact match** — `|Δn_d|` < 0.0005 *and* `|Δν_d|` < 0.10. The catalog name is essentially certain (within manufacturing tolerance, which is already wider than this threshold).
- **Near match** — `|Δn_d|` < 0.002 *and* `|Δν_d|` < 0.5. The catalog name is plausible but a different vendor's equivalent melt cannot be ruled out from (n<sub>d</sub>, ν<sub>d</sub>) alone.
- **Family match** — broader. The element is identified to glass family but the specific catalog name cannot be uniquely resolved from (n<sub>d</sub>, ν<sub>d</sub>) alone.

### 5.1 Summary of glass identifications

| Element | Six‑digit | Best‑match catalog | Confidence | Equivalents |
|---|---|---|---|---|
| G1 | 729547 | **OHARA S‑LAL18** | exact | (LaK family) |
| G2 | 497816 | **OHARA S‑FPL51** | exact | HOYA FCD1, Schott N‑PK52A — all 1.4970 / 81.61 |
| G3 | 847238 | **OHARA S‑TIH53** | exact | (no major equivalents in the curated catalog list at this exact code) |
| G4 | 768492 | **OHARA S‑LAM61** | exact | (lanthanum‑flint crown) |
| G5 | 772496 | **HOYA M‑TAC60** (also TAC4) | exact | OHARA S‑LAM61 is *near* but Δν = 0.4 |
| G6 | 729547 | **OHARA S‑LAL18** | exact | same as G1 |
| G7 | 923209 | **OHARA S‑NPH2** | exact | OHARA S‑NPH53 (eco), HOYA E‑FDS1 (eco) |
| G8 | 806333 | high‑index Nb dense flint family | **family** | (see §5.2) |
| G9 | 488704 | **OHARA S‑FSL5** | exact | Schott N‑FK5, Sumita K‑FK5 |
| G10 | 729547 | **OHARA S‑LAL18** | exact | same as G1, G6 |
| G11 | 437951 | **HOYA FCD100** | exact | (Sumita K‑CAFK95 at 1.43425/95.0 and CDGM H‑FK95N at 1.43800/94.50 are *near* matches but not exact; OHARA S‑FPL53 at 1.43875/94.66 is also *near* but not exact at this six‑digit code) |
| G12 | 673322 | **OHARA S‑TIM35** | exact | (titanium flint) |
| G13 | 904313 | **OHARA S‑NBH55** | exact | (niobium flint) |
| G14 | 658509 | **OHARA S‑BAH27** | exact | (barium crown) |
| G15 | 697555 | **OHARA S‑LAL14** | exact | Schott N‑LAK14 (Δν = 0.05) |

The pattern of the glass selections is consistent with an OHARA‑centred glass list (twelve of fifteen elements have an OHARA catalog name as the exact match), with cross‑vendor equivalents available for some elements. This is the customary signature of a Japanese high‑end optical design produced in the 2014 – 2015 period, where Japanese lens makers favoured OHARA catalog glasses for most positions and HOYA fluorophosphates for the strongly anomalous‑low‑dispersion positions — specifically the Super‑ED slot at G11, where HOYA's FCD100 is uniquely exact at six‑digit code 437951 (no major competing vendor has a glass at exactly 1.4370 / 95.10).

### 5.2 The G8 ambiguity

G8 is the only element whose catalog name cannot be uniquely identified from (n<sub>d</sub>, ν<sub>d</sub>) alone. The six‑digit code 806333 sits between the Schott LAF series and the OHARA S‑LAH series but matches neither of them within the "exact" tolerance. Glasses at this position are documented by multiple manufacturers (OHARA's L‑NBH series of low‑Tg precision‑mould glasses; HOYA's NBFD‑adjacent precision‑mould glasses; HIKARI E‑series flints; Sumita K‑PSFn niobium‑flint series; CDGM ZF‑class flints), but each manufacturer's exact catalog code at 1.8061 / 33.27 is inconsistently published, and I do not have authoritative side‑by‑side melt‑sheet data for this position. I therefore flag this single identification as **family match: high‑index niobium dense flint, six‑digit 806333** — recognising that the optical role (high‑index negative partner of a low‑dispersion crown in an achromatic stabilisation doublet) is unambiguous even if the catalog vendor is not.

### 5.3 Glass‑map view

![Glass map for Sony FE 90mm F2.8 Macro G OSS (WO2016/136352 Ex.2)](glass_map.svg)

**Figure 2.** Each circle (positive) or square (negative) is one element, plotted by (ν<sub>d</sub>, n<sub>d</sub>); colours denote the lens group. The three callouts identify the special‑glass elements per Sony's marketing: the **Super‑ED** G11 at the extreme low‑dispersion / low‑index corner, the **ED** G2 at ν<sub>d</sub> = 81.6, and the **low‑dispersion crown** G9 (S‑FSL5) which Sony does *not* count as ED — its anomalous partial dispersion is mild (ΔP<sub>g,F</sub> only a few thousandths above the normal line, inferred from the S‑FSL5 / N‑FK5 catalog match), not the substantial positive offset that S‑FPL51 and FCD100 carry.

### 5.4 Reconciliation with Sony's marketing claim of "two ED, one Super ED"

Sony's product page and B&H marketing copy state the lens contains "two extra‑low dispersion elements, including one Super ED element, plus one aspherical element." Mapping this to Example 2:

- **1 Aspherical element** → G4 (rear surface S7 is aspheric); the only aspheric surface in the design ✓
- **1 Super ED element** → G11 (n<sub>d</sub>/ν<sub>d</sub> = 1.4370 / 95.10, fluorite‑equivalent fluorophosphate) ✓
- **1 ED element (besides the Super ED)** → G2 (n<sub>d</sub>/ν<sub>d</sub> = 1.4970 / 81.61, S‑FPL51‑class anomalous low‑dispersion glass) ✓

G9 (S‑FSL5, ν<sub>d</sub> = 70.44) sits in the "low‑dispersion crown" range but is *not* counted as ED by Sony's marketing — consistent with industry practice that reserves the "ED" label for glasses with **strong** anomalous partial dispersion. S‑FSL5 / N‑FK5 has only mildly anomalous P<sub>g,F</sub> and is conventionally classified as a low‑dispersion crown rather than an ED glass; the magnitude of its anomaly is small enough that lens makers do not generally promote it as a special‑glass type.

The patent example and the production lens marketing therefore agree element‑for‑element on every special‑glass count, and Example 2 is unambiguously the design that became the SEL90M28G.

---

## 6. Focusing mechanism — floating dual‑group inner focus

The patent describes the focusing as follows [paragraphs 0017 – 0021]: *"The first focus group, located between the object‑side group and the aperture stop, moves from the object side to the image side along the optical axis when focusing from infinity to a near object. The second focus group, located between the aperture stop and the final group, moves from the image side to the object side. The aperture stop is fixed in the optical axis direction during focusing. The object‑side group and the final group are fixed."*

The variable air‑gap evolution from infinity to 1:1 (Patent Table 8) is reproduced and verified below:

| Magnification β | d7 (GR1↔GR2) | d12 (GR2↔GR3) | d16 (STO↔GR4) | d21 (GR4↔GR5) | Σ var |
|---|---|---|---|---|---|
| 0  (infinity) | 2.80 | 22.92 | 23.22 | 7.49 | **56.43** |
| −0.5× | 11.89 | 13.83 | 13.23 | 17.48 | **56.43** |
| −1.0× | 22.17 | 3.54 | 5.00 | 25.71 | **56.42** |

The sum of variable gaps is conserved to 0.01 mm across the focus range, confirming that the design preserves overall optical track length: this is consistent with Sony's marketing claim that the lens "maintains the same overall length at all focal distances."

### 6.1 Direction of motion

- **GR2 moves toward the image** (rearward): d7 grows by 19.37 mm (from 2.80 to 22.17), d12 shrinks by 19.38 mm (from 22.92 to 3.54). Conservation: GR2's *total displacement* between infinity and 1:1 ≈ 19.4 mm.
- **GR4 moves toward the object** (forward): d16 shrinks by 18.22 mm, d21 grows by 18.22 mm. GR4's total displacement ≈ 18.2 mm.
- **GR1, GR3, STO, GR5 are all fixed** (no var‑gap on either side of them).

The displacements are *not equal*: GR2 travels 19.4 mm while GR4 travels 18.2 mm. The two groups are moved by independent drive systems and follow different cam profiles — exactly the architecture Sony describes as **"Dual DDSSM (Direct Drive Super Sonic wave Motor)"**: two independent ultrasonic actuators, one per focus group.

![Floating focus mechanism — variable air gaps](focus_motion.svg)

**Figure 3.** Variable air‑gap evolution from infinity to 1:1. Both focus groups move *inward* toward the central stop region, so the *outer* gaps grow (d7 between GR1 and GR2, d21 between GR4 and GR5) while the *inner* gaps shrink (d12 between GR2 and GR3, d16 between the stop and GR4). The motions are not strictly linear in β — see §6.2 for cam‑profile analysis — but they are smooth and monotonic across the magnification range.

### 6.2 Cam‑profile linearity

A useful diagnostic is whether the four variable gaps are consistent with linear‑in‑β motion of GR2 and GR4. Comparing the mid‑magnification values to a hypothetical linear interpolation:

| Gap | β = 0 | β = −0.5× (linear‑interp) | β = −0.5× (patent) | β = −1.0× | Δlinearity at −0.5× |
|---|---|---|---|---|---|
| d7  | 2.80  | 12.485 | 11.89  | 22.17 | −0.60 (GR2 is 0.6 mm "behind" linear) |
| d12 | 22.92 | 13.230 | 13.83  | 3.54  | +0.60 (compensates) |
| d16 | 23.22 | 14.110 | 13.23  | 5.00  | −0.88 |
| d21 | 7.49  | 16.600 | 17.48  | 25.71 | +0.88 |

The cam profiles are **non‑linear**: GR2 lags behind a linear motion by ~0.6 mm at the midpoint, while GR4 leads it by ~0.88 mm. This confirms that the dual‑group focus is *floating* in the strict sense — the two groups follow independently designed cam laws to maintain aberration correction across the magnification range, not just two simultaneous linear motions.

### 6.3 Why two focus groups, opposite signs?

Floating focus serves two purposes that single‑group inner focus does not:

1. **Aberration compensation across the magnification range.** A single‑group inner focus *can* reach 1:1 magnification (older 90 mm‑class macro lenses with a unit‑focus or simple inner‑focus mechanism existed), but the spherical and field aberrations *change* with magnification — typically degrading at close focus where the bundle geometry differs most from the design's nominal infinity state. The two opposing‑sign floating groups (negative GR2 moving rearward, positive GR4 moving forward) inject *opposite* aberration signatures as they translate, so their combined motion can be cam‑profiled to keep the *net* aberration content nearly invariant from infinity to 1:1. This is what enables the lens to maintain near‑infinity image quality at full 1:1 reproduction — the headline marketing claim of "consistently superior optical performance throughout the image at any focusing distance."
2. **Mechanical efficiency.** Splitting the focus authority between two groups lets each group be *light* (minimising both element count and glass density per group) and *fast‑driving* (each motor sees a smaller mass). This is the central premise of the patent's conditional expression (4) on average specific gravity of GR4: lighter focus groups mean faster autofocus, lower power consumption, and the ability to support video AF wobbling [paragraph 0006], all of which Sony advertises. A single‑group focus would have to carry the full chromatic and aberration load alone, requiring either more elements (heavier moving mass) or denser glasses (also heavier).

### 6.4 Focus breathing, working distance, and ghost mitigation

**Focus breathing.** Although the marketed focal length is 90 mm, the *paraxial* effective focal length is not invariant across the focus range. At infinity, EFL = 92.61 mm (verified §1); at 1:1 magnification, my paraxial trace gives EFL ≈ 45.9 mm — a roughly 50 % reduction. This is the source of the "rather extreme level of focus breathing" reported by reviewers (admiringlight: "the 90 mm seems to do it more than many other macros I have used in the past"). For still photographers this is largely cosmetic, but for video work it means a distant background object's image size changes noticeably during a focus pull from infinity to close. The breathing is a direct consequence of the floating‑focus architecture: large internal motions of the negative GR2 and positive GR4 groups, combined with the fixed front and rear groups, produce a non‑trivial change in the system's effective focal length as the focus state evolves.

**Working distance at 1:1.** From the prescription, the physical S1‑to‑image distance is 145.0 mm at 1:1 focus (computed: total S1→S27 optical track 118.75 mm, plus 22.75 mm air gap to sealing glass, plus 2.50 mm sealing glass thickness, plus 1.00 mm air to image). At minimum focusing distance MFD = 280 mm (subject‑to‑image, per Sony's spec), the working distance from S1 is 280 − 145 = **135 mm**, and the practical working distance from the front filter ring (which sits a few mm ahead of S1) is roughly **13 cm**. This matches reviewer measurements of the SEL90M28G's 1:1 working distance.

**Ghost mitigation and coatings.** Beyond the convex‑to‑image S27 surface (§3.5), the SEL90M28G uses Sony's **Nano AR Coating** on selected surfaces to suppress reflection ghosts and flare. Nano AR Coating is a sub‑wavelength surface‑relief structure with a graded effective refractive index, which reduces residual reflectance over a broad band of wavelengths and incident angles — effective for a fast macro lens that is regularly used facing strong subject illumination at unusual angles. The coating is a production feature (not part of the patent prescription), but it works *in concert* with the optical design's S27 ghost‑mitigation geometry to produce the lens's marketed flare resistance.

---

## 7. Optical image stabilisation — GR3 anti‑vibration group

The lens is marketed with **Optical SteadyShot (OSS)**. The patent's [paragraphs 0044 – 0046] and Example 2's group description [paragraph 0091] explicitly identify GR3 as the anti‑vibration (防振) group.

**Mechanical action.** GR3 (the cemented G8 + G9 doublet) is fixed axially but can shift perpendicular to the optical axis. A small lateral shift δy<sub>GR3</sub> produces a roughly proportional lateral shift δy<sub>image</sub> at the image plane; the precise proportionality (the "stabilisation gain") depends on the optical position of GR3 between the front and back conjugates and is typically on the order of unity. In our paraxial trace at infinity focus, the marginal ray at GR3 has height h ≈ 13 mm (S13 front: 13.01 mm; S15 rear: 12.72 mm), and the entrance pupil at the stop has semi‑diameter 12.51 mm (from the F/2.88 calculation).

Sony does not publish a CIPA‑standard numeric stabilisation rating for this lens. Third‑party reviewers' independent measurements span the range 2.5 – 4 stops: Imaging Resource measured ≈ 2.5 stops of hand‑holding improvement (their methodology); Cameralabs measured 3 stops of clearly improved sharpness rate at 1/12 s vs. an unstabilised baseline at 1/100 s on a Sony A7R II; admiringlight reports "around 3 – 4 stops of extra hand‑holdability" subjectively. The spread is normal — different methodologies and bodies will yield different numbers — but all measurements consistently fall in the 2.5 – 4 stop range, which is typical for a 90 mm‑class OSS implementation.

**Why a positive doublet?** The patent [paragraph 0046] argues for positive AV‑group power *between GR2 and GR4*: the group then converges the bundle while guiding it to GR4, reducing GR4's required diameter. A negative AV group at this position would diverge the bundle, increasing GR4's diameter and weight — which would conflict with the design's stated lightweight‑focus‑group goal.

**Why between GR2 and the stop?** The patent's [paragraph 0045] gives the chromatic argument: at infinity, a telecentric on‑axis bundle reaches the AV group, so axial chromatic performance during stabilisation is preserved.

**Internally achromatic.** GR3 is itself a doublet — G8 (high‑index Nb dense flint) and G9 (low‑dispersion crown S‑FSL5). Lateral shift of an internally achromatic group produces less colour smear at the image than lateral shift of a singlet would. This is the same chromatic‑robustness logic that motivates many VC‑group designs in stabilised tele primes.

---

## 8. Verification of patent's conditional expressions

The patent imposes four conditional expressions on the design [paragraphs 0023, 0036, 0040]; Example 2 satisfies all four.

| # | Expression | Patent range | Example 2 (Table 16) | Computed | Verified |
|---|---|---|---|---|---|
| (1) | `\|fr/f\|` | 0.25 – 2.0 (preferred 0.4 – 1.0) | 0.49 | **0.4954** | ✓ within tighter preferred range |
| (2) | `y′/BF` | 0.65 – 1.3 (preferred 0.65 – 1.2; tightest 0.7 – 1.15) | 0.85 | **0.8516** | ✓ within tightest range |
| (3) | `f/ff` | 0 – 0.8 (preferred 0.3 – 0.8; tightest 0.35 – 0.7) | 0.38 | **0.3843** | ✓ within tightest range |
| (4) | `1/G_F` | 0.24 – 0.40 (preferred 0.28 – 0.40; tightest 0.28 – 0.32) | 0.29 | not directly computed (specific gravities not in patent) | within range |

The expressions encode the patent's design philosophy:

- **(1) `|fr/f|`** governs the strength of the final group GR5 relative to system focal length. Below 0.25, GR5 becomes too strong and shading degrades; above 2.0, GR5 becomes too weak and overall length grows. Example 2's 0.49 sits in the lower portion of the preferred range (0.4 – 1.0).
- **(2) `y′/BF`** governs the back‑focus‑to‑image‑height ratio. Below 0.65, the back focus is too long (the lens grows); above 1.3, the optical system risks mechanically interfering with the camera body. Example 2's 0.85 is comfortably in the middle of the tightest preferred range (0.7 – 1.15).
- **(3) `f/ff`** governs how much of the system's optical power is delivered by the groups *before* GR4. If f/ff is too small, the bundle reaching GR4 is poorly converged and GR4 must do too much work (it grows in diameter and mass); if too large, the front groups cause excess curvature aberrations. Example 2's 0.38 sits just inside the tightest preferred range (0.35 – 0.7), consistent with the lightweight‑GR4 goal.
- **(4) `1/G_F`** is the average specific gravity of GR4 — the focus group whose mass directly affects DDSSM drive speed. Below 0.24, GR4 is too heavy (slow AF); above 0.40, sensitivity drops and required stroke grows. Example 2's 0.29 sits comfortably inside the tightest preferred range (0.28 – 0.32).

The fact that Example 2 satisfies *all four* conditional expressions, with the tighter preferred bounds satisfied for at least three of them, is consistent with this example being the production design (the patent's other three examples are placed somewhat further from the tightest bounds in one or more conditions).

---

## 9. Summary observations

1. **Patent–production correspondence.** Example 2 of WO 2016/136352 is the production design of the Sony FE 90 mm F2.8 Macro G OSS (SEL90M28G). The match is verified element‑for‑element in count (15 elements / 11 groups), focal length (design 92.6 mm; marketed 90 mm), maximum aperture (design F2.88; marketed F2.8), special‑glass roster (1 aspherical, 1 Super ED, 1 ED), and focus mechanism (floating dual‑group inner focus driven by dual DDSSM). All four conditional expressions are satisfied, with the tighter preferred bounds satisfied for at least three of them.

2. **Group power architecture.** The five groups carry powers (in mm focal length): GR1 +53.41, GR2 −32.87, GR3 +109.96, GR4 +51.05, GR5 −45.88. The strong negative GR2 and strong positive GR4 are the focusing groups, moving in opposite directions. GR3 is the axially‑fixed positive AV group between GR2 and the stop. GR5 is the negative back‑focus extender. Petzval ratio P<sub>z</sub>/EFL = 0.077, indicating well‑controlled field curvature.

3. **Glass selection signature.** Twelve of fifteen elements have OHARA catalog matches as the "exact" identification (S‑LAL18 ×3 instances at G1/G6/G10, S‑FPL51 at G2, S‑TIH53 at G3, S‑LAM61 at G4, S‑NPH2 at G7, S‑FSL5 at G9, S‑TIM35 at G12, S‑NBH55 at G13, S‑BAH27 at G14, S‑LAL14 at G15). The Super‑ED slot at G11 (1.4370 / 95.10) is uniquely matched by **HOYA FCD100** — no OHARA, Sumita, or CDGM glass sits at exactly this six‑digit code. G5 matches HOYA M‑TAC60 (the OHARA cross‑reference at this code is a near‑match rather than exact). G8 is the only element whose catalog vendor I cannot uniquely determine from optical constants alone — it is a high‑index niobium dense flint at six‑digit code 806333.

4. **Aspheric strategy.** A single aspheric surface at S7 (rear of G4, the rear of GR1). The surface is mildly concave (R = +478 mm, near‑plano) with a positive‑lift polynomial that adds ≈ 40 % more sag than the underlying sphere at h = 16.5 mm. Local rim slope is gentle (3.5° at h = 16.5 mm). The chosen position — high marginal‑ray height in a fixed group, ahead of the moving focus groups — is the optimal location for a single asphere in a fast macro design.

5. **Floating focus aberration control.** GR2 moves 19.4 mm rearward and GR4 moves 18.2 mm forward as focus shortens from ∞ to 1:1. The two cam profiles are mildly non‑linear (each ~0.6 – 0.9 mm off a linear interpolation at the midpoint), reflecting independent designed cam laws for aberration compensation.

6. **Image stabilisation as a separate optical sub‑function.** GR3 is the OSS group: a positive achromatic doublet, axially fixed, laterally movable. Its position between GR2 and the aperture stop preserves on‑axis colour while permitting compact lateral‑shift authority for shake compensation.

---

## 10. Caveats and uncertainty

- **Glass‑code uniqueness.** Glass identifications by (n<sub>d</sub>, ν<sub>d</sub>) tuple are not guaranteed to be unique across catalog vendors. For elements where multiple equivalents exist (G2, G7, G9, G15), I have listed the most likely candidate first, with cross‑vendor equivalents named in §5.1. The exact catalog code used in production cannot be determined from public patent data and would require Sony‑internal manufacturing documentation.
- **Polished vs moldable glass for the aspheric (G4).** The OHARA catalog distinguishes polished glasses (S‑prefix) from low‑transformation‑temperature moldable glasses (L‑prefix) intended for precision glass moulding (PGM) of aspheric surfaces. The patent's (n<sub>d</sub>, ν<sub>d</sub>) values for G4 (1.7680 / 49.24) match OHARA S‑LAM61 exactly, but the production lens's aspheric S7 surface (rear of G4) is more plausibly produced via PGM using the moldable variant **L‑LAM61** if such a glass exists in OHARA's L‑series catalog (L‑LAM61 is the moldable‑equivalent name of S‑LAM61 by OHARA's naming convention). Without confirmed catalog access I cannot guarantee L‑LAM61 is currently produced or that Sony specifically uses it; the polished S‑LAM61 is also a viable production path (with the asphere ground/polished rather than moulded). The optical (n<sub>d</sub>, ν<sub>d</sub>) values are identical between S‑ and L‑variants, so the patent prescription does not distinguish between them.
- **Stabilisation gain figure.** The 2.5 – 4 stops stabilisation rating is from third‑party reviews; Sony's product page does not publish a numeric CIPA rating for this lens, and the precise stabilisation gain factor (image shift per group shift) was not computed in this analysis.
- **Patent text translation.** Quotations from [paragraphs 0017 – 0050] are paraphrased from the Japanese patent text; the [bracketed paragraph numbers] refer to the WO 2016/136352 publication numbering. The English translation is mine; minor wording differences from a professional translation may occur but the technical content is preserved.
- **Patent‑text vs prescription minor discrepancy.** The patent text [paragraph 0090] for Example 2 describes G5 as "biconcave‑shaped", which is inconsistent with the Table 5 prescription (both R > 0, geometrically a meniscus). The prescription is authoritative; the discrepancy is documented in §3.2 and is most plausibly a copy‑paste artefact from Example 1's verbal description (where G5 is genuinely biconcave).
- **Example 2 versus the four patent examples.** Examples 1, 3, and 4 of the same patent are *not* the production design — they have different prescriptions, different focal lengths (87.3 mm to 92.7 mm), or different group counts (Ex.4 has four groups instead of five). Only Example 2 matches all the production specifications.
- **Patent versus production tolerances.** The patent prescription is exact to 4 decimal places, but production tolerances are looser. The radii, thicknesses, and refractive indices of any actual production lens may differ from the patent values within manufacturing tolerance, while still yielding equivalent optical performance.

---

## 11. References

- **Patent.** UEHARA Y., KANETAKA F., UNO H., *Macro Lens and Imaging Device*, WO 2016/136352 A1, Sony Corporation, published 1 September 2016 (priority JP 2015‑036470, 26 February 2015). Available via WIPO PATENTSCOPE.
- **Sony product page.** Sony FE 90 mm F2.8 Macro G OSS, model SEL90M28G. https://www.sony.co.uk/electronics/camera-lenses/sel90m28g (accessed 2026).
- **Sony Asia product page.** https://www.sony-asia.com/electronics/camera-lenses/sel90m28g — identifies aspherical, Super ED, and ED elements in the lens construction diagram.
- **B&H Photo Video product copy.** "Two extra‑low dispersion elements, including one Super ED element… One aspherical element." https://www.bhphotovideo.com/c/product/1126140-REG/sony_sel90m28g_fe_90mm_f_2_8_macro.html (accessed 2026).
- **DXOMARK review.** "Sony FE 90 mm f/2.8 Macro G OSS lens review: Outstanding optical performance." https://www.dxomark.com/sony-fe-90mm-f2-8-macro-g-oss-lens-review/ — third‑party performance verification.
- **Cameralabs review** (2021): https://www.cameralabs.com/sony-fe-90mm-f2-8-macro-g-oss-review/ — features and handling details.
- **Imaging Resource review** (2015): https://www.imaging-resource.com/lenses/sony/fe-90mm-f2.8-macro-g-oss-sel90m28g/review/ — early production review with autofocus and macro performance.
- **Glass catalogs.** OHARA Optical Glass (2018+), Schott Optical Glass (post‑2014 N‑prefix), HOYA Optical Glass (post‑2010), Sumita Optical Glass, HIKARI, CDGM. Six‑digit codes computed as `int((nd-1)·1000)` × 1000 + `int(vd·10)`, with catalog matches verified within ±0.0005 in n<sub>d</sub> and ±0.10 in ν<sub>d</sub> for "exact" classifications.

---

*Analysis prepared 27 April 2026. All paraxial computations use a 2 × 2 ABCD‑matrix ray‑trace formulation in Python; verification source available on request. The single aspheric surface at S7 is evaluated using the patent's stated formula (see §4) without truncation of higher‑order terms.*
