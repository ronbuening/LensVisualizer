# Carl Zeiss Tessar 50 mm f/3.5 — A Detailed Analysis of Swiss Patent CH 314381 (Example 1)

**Inventors:** Dr. Günther Lange (Königsbronn) & Dr. phil. Robert Richter (Aalen)
**Assignee:** Firma Carl Zeiss, Heidenheim a.d. Brenz
**Priority:** Germany, 21 July 1952
**Filed (Switzerland):** 24 June 1953
**Published:** 31 July 1956

---

## 1. Executive summary

Swiss patent CH 314381 protects a refinement of the classic four-element, three-group **Tessar** photographic objective. The patent's central technical claim is a method for reaching apertures **faster than f/3.8** (the formal claim language is *"einer relativen Öffnung größer als 1:3,8"*) while keeping the design strictly inside conventional, low-cost optical glasses — every element has refractive index below 1.70 and the design uses no aspherical surfaces. The two numerical examples disclosed in the patent both target **f/3.5** specifically, with a usable half-field of approximately ±24°. The patent positions itself explicitly against contemporary efforts (specifically U.S. patent 2,158,178, cited by number in the patent text) that reached comparable apertures only by introducing extremely high-index glasses described in the text as difficult to melt and therefore costly; in the historical context of 1952, this almost certainly refers to lanthanum-bearing crowns of the kind introduced by Eastman Kodak in the late 1930s and adopted by Carl Zeiss Jena in the same period.

Example 1 of the patent — analyzed in detail in this document — corresponds (with very high probability, though without primary-source documentary confirmation) to the production **Carl Zeiss / Zeiss-Opton Tessar 50 mm f/3.5** for the post-war Contax IIa/IIIa rangefinder system, manufactured at the Oberkochen plant of the West-German Zeiss successor company from circa 1951 onward. The patent's priority date (July 1952) and filing date (June 1953) bracket exactly the period in which the corresponding production lens was being phased into manufacture. See §4 for a fuller discussion of the patent-to-production identification and §14 for the relevant caveats.

Independent computational verification of the patent prescription (paraxial ABCD ray trace, thick-lens element power computation, surface-by-surface Petzval sum, full-spectrum thick-lens chromatic trace) confirms every numerical claim made in the patent text and supports identification of all four glasses against the 1950s-era Schott catalog.

---

## 2. Historical context

The Tessar lens was first computed in 1902 by Paul Rudolph at Carl Zeiss Jena.[^1] Across the following half-century the basic four-element/three-group skeleton was re-optimized at faster and faster apertures: by 1917 a Tessar reached f/4.5, and in 1930 Ernst Wandersleb and Willy Merté at Zeiss Jena published prescriptions for f/3.5 and f/2.8 Tessars (German patent DE 603325C, 1934).[^Tessar-history] These pre-war Jena Tessars established the f/3.5 and f/2.8 speed classes that would dominate the format for the next four decades.

CH 314381 is best understood inside the broader story of the **Cold War Zeiss split**. After the Second World War, the original Carl Zeiss Jena facility lay in the Soviet zone of occupation. American forces, who had captured Jena in April 1945 and held it through June, evacuated approximately 126 senior personnel from Carl Zeiss and the sister glassworks Schott to Heidenheim in late June 1945 — just before Thuringia was handed over to Soviet administration on 8 July 1945.[^2] This contingent re-established operations in the small town of Oberkochen, about 20 km from Heidenheim, founding **Opton Optische Werke Oberkochen GmbH** in 1946 (renamed **Zeiss-Opton** in 1947). The Carl-Zeiss-Stiftung's legal domicile was formally moved to Heidenheim by ruling of the Baden-Württemberg state government on 23 February 1949, and "Carl Zeiss" was entered into the Heidenheim commercial register on 15 January 1951.

CH 314381 — filed June 1953 by *"Firma Carl Zeiss, Heidenheim a.d. Brenz"* — sits in the middle of the company's gradual reassertion of the unmarked "Carl Zeiss" name over the postwar "Zeiss-Opton" trademark. In **October 1953**, Carl Zeiss formally took over Zeiss-Opton, after which Oberkochen-built lenses transitioned from the "Zeiss-Opton" engraving to the simpler "Carl Zeiss" engraving. The trademark dispute with VEB Carl Zeiss Jena was not formally settled until the **London Agreement of April 1971**; the lawsuit that triggered eighteen years of international litigation was filed by Oberkochen against Jena in February 1954.

The contrast with the Jena side of the split is illuminating. The contemporary Tessar 50 mm f/2.8 produced by VEB Carl Zeiss Jena (French patent FR 1066698, designer **Harry Zöllner**, 1952) reached its aperture by adopting the new lanthanum-crown glasses — the very route the Oberkochen patent rejects.[^Zollner] CH 314381 is, in this sense, an explicitly *conservative* design: rather than chasing higher speed through new glass technology (as Wandersleb and Merté had done in the 1930s with aspherics, and as Zöllner did in 1952 with lanthanum), Lange and Richter set themselves the constraint of the older spherical, conventional-glass envelope and asked how fast a Tessar could be re-optimized within it. The answer they provide is f/3.5 — recovering the speed Wandersleb and Merté had reached two decades earlier, but doing so without aspherical surfaces and entirely with non-lanthanum glass.

---

## 3. The inventors

**Dr. phil. Robert Richter (1888–?)** is the more historically prominent of the two co-inventors. Before the war Richter had directed substantial computing work at Jena and is principally remembered today as the designer of the **Topogon** (1933) — a four-element symmetric wide-angle of remarkable speed for its era, intended initially for aerial photogrammetry.[^3] Richter relocated to the Oberkochen successor company after 1945 and continued to work on conventional photographic objectives there into the 1950s.

**Dr. Günther Lange** is less extensively documented in the standard secondary literature on Zeiss optical design. He appears in the present patent as the senior-listed co-inventor and is identified as resident of Königsbronn — a small town close enough to Heidenheim and Oberkochen to be consistent with local employment at the post-war Zeiss facility.

The two co-inventors plausibly represent a partnership between an experienced computer (Richter) and a younger collaborator handling a portion of the optimization work. The patent itself does not assign different roles to its authors.

---

## 4. The production lens this patent describes

The lens corresponding to Example 1 is the **Carl Zeiss / Zeiss-Opton Tessar 50 mm f/3.5** in Contax-rangefinder mount, a rigid (non-collapsible) lens with a 40.5 mm screw-in filter thread (and a 42 mm slip-on filter alternative listed in period Zeiss price lists), focused by helicoid driven from the camera body's rangefinder cam. According to standard collector references the production sequence runs approximately as follows:[^4]

| Era | Engraving | Approximate quantity | Notes |
|---|---|---|---|
| 1951 | "Zeiss-Opton Tessar 1:3.5 f=5cm" | ~1,500 | Early West-German production, rigid barrel |
| 1953– | "Carl Zeiss Tessar 1:3.5 f=5cm" | continued production through ~1957+ | Engraving change reflects the October 1953 Carl Zeiss takeover of Zeiss-Opton; total production quantity not precisely documented in publicly accessible records |

The patent's filing chronology — German priority July 1952, Swiss filing June 1953 — coincides closely with the engraving transition, which suggests (though does not formally prove) that the patent was prosecuted as the production design was being refreshed and that Example 1 represents the optical computation actually used in series manufacture, scaled from the patent's normalized 100 mm focal length to 50 mm production. Direct primary-source evidence linking Example 1 to a specific production batch is not available in the open literature; the identification is based on the temporal coincidence and the design philosophy (no aspherics, no lanthanum, f/3.5 four-element/three-group Tessar — exactly what Carl Zeiss / Zeiss-Opton was producing for the Contax IIa/IIIa in that period).

The Tessar 50 mm f/3.5 was the slowest of the three native 50 mm normal lens options offered for the post-war Contax IIa/IIIa system — the others being the Sonnar 50 mm f/2 (standard) and Sonnar 50 mm f/1.5 (premium). The 50/3.5 was marketed as a compact, affordable normal lens, which fits the patent's stated design philosophy of avoiding expensive glass.

---

## 5. The patent prescription (Example 1)

The patent provides numerical data normalized to a focal length of approximately 100 mm. To recover production values at 50 mm, all radii of curvature, all axial thicknesses, and all linear dimensions are scaled uniformly by the factor 50 / 99.9991 ≈ 0.500005. Refractive indices, Abbe numbers, and angular field stay invariant under such scaling.

### 5.1 Surface table (patent normalization, f ≈ 100 mm)

| Surface | Element role | Radius R (mm) | Axial thickness (mm) | n_d | ν_d |
|---|---|---|---|---|---|
| r₁ | L1 front (convex) | +30.3006 | d_I = 6.118 | 1.62041 | 60.3 |
| r₂ | L1 rear (≈ flat) | +761.119 | a = 6.347 (air) | 1.0 | — |
| r₃ | L2 front (concave) | −69.8143 | d_II = 1.778 | 1.59551 | 39.2 |
| r₄ | L2 rear (deeply concave, holds stop in gap) | +25.4943 | b = 4.933 (air, with diaphragm) | 1.0 | — |
| r₅ | L3 front (≈ flat) | +659.103 | d_III = 1.721 | 1.58144 | 40.8 |
| r₆ | L3/L4 cement (convex toward L2) | +21.7624 | d_IV = 12.427 | 1.67003 | 47.2 |
| r₇ | L4 rear (convex) | −48.7192 | — | 1.0 | — |

Sign convention is the standard one used throughout this document: R > 0 places the center of curvature to the right of the vertex; R < 0 places it to the left.

### 5.2 Independently computed paraxial properties

Using a standard ABCD paraxial ray trace from object at infinity through all seven refracting surfaces:

| Quantity | Computed (f = 100 normalization) | At 50 mm production |
|---|---|---|
| Effective focal length (EFL) | 99.9991 mm | 50.000 mm |
| Back focal distance (BFD) | 82.466 mm | 41.233 mm |
| Front-to-rear vertex (construction length) | 33.324 mm | 16.662 mm |
| Total track (front vertex → image) | 115.790 mm | 57.895 mm |
| Construction length / EFL ratio | 0.333 | 0.333 |

The agreement between the computed EFL and the patent's nominal 100 mm is to one part in 10⁵, which both confirms correct transcription of the prescription and validates the sign convention used in this analysis. The construction-length-to-EFL ratio of 0.33 means the lens itself is much shorter than its focal length — the long BFD does the rest of the work to reach the image plane, which is the canonical Tessar geometry.

### 5.3 Aperture and entrance pupil

For the f/3.5 example specifically:

| Quantity | At f = 100 normalization | At 50 mm production |
|---|---|---|
| Entrance pupil diameter | 28.571 mm | 14.286 mm |
| Physical stop diameter (in gap *b*, 71 % from r₄) | 22.912 mm | 11.456 mm |
| Entrance-pupil/stop magnification | 1.247 | 1.247 |

The L1 group magnifies the physical stop into the entrance pupil by a factor of 1.247: the front element of the lens "sees" the stop as if it were 24.7% larger than its physical size. This is the natural consequence of the front group being a positive collecting element.

The stop is placed 71 % of the way through gap *b* (3.50 mm from r₄, 1.43 mm from r₅ at f = 100 normalization; 1.75 mm / 0.72 mm at production). This position — closer to the rear cemented doublet than to L2 — is forced by the strongly curved rear surface of L2 (r₄ = +25.49 at f = 100, +12.75 at production), whose surface sag at the marginal-ray height would otherwise encroach into the gap and physically interfere with the iris blades. This non-centred placement is consistent with the iris mark in patent Fig. 1, which shows the diaphragm noticeably closer to the rear group than to L2.

### 5.4 Field-of-view coverage

The patent specifies a usable half-field of approximately ±24°. Independently:

| Image height (corner) | At f = 100 | At 50 mm production |
|---|---|---|
| At ±24° half-field | 44.52 mm | 22.26 mm |

For 35 mm full-frame format (24 × 36 mm; corner-to-corner half-diagonal 21.63 mm), the half-field needed at f = 50 mm is exactly arctan(21.63/50) = 23.40°, slightly less than the patent's claimed 24°. The lens therefore covers 35 mm full-frame format with a 0.6° angular margin per side — a tight but adequate coverage entirely consistent with its production role as the standard normal lens for the Contax IIa/IIIa rangefinder.

### 5.5 Front-element diameter estimate

A combined-ray estimate (entrance pupil plus the chief-ray excursion at the field corner, with mechanical clearance for the front mount) gives a front-element clear-aperture diameter of approximately 17 mm at production scale. However, this theoretical diameter is constrained in practice by edge-thickness limits on L1: the strongly convex front surface (R₁ = +15.15 mm at production) requires that the front-element semi-diameter not exceed approximately 8.5 mm (diameter 17 mm) to maintain a minimum edge thickness of about 0.5 mm. As a consequence, the lens vignettes progressively from about 40 % of the half-field outward — a behaviour typical of compact Tessars at this speed. The 40.5 mm filter thread on the production lens accommodates this diameter comfortably.

---

## 6. Element-by-element analysis

Figure 1 shows the lens drawn to scale at the 50 mm production size. Glasses are identified by Schott designation (see §7); the diaphragm sits in the central air gap *b* between L2 and L3.

![Figure 1: Layout cross-section](fig1_layout.png)
*Figure 1 — Layout cross-section of the four elements at production scale (f = 50 mm). L1 (blue, SK16): front positive meniscus. L2 (orange, historical F8): asymmetric biconcave middle element. L3 (yellow, LF5) + L4 (green, BAF10): cemented rear doublet. Axial dimensions are in millimeters from the L1 front vertex; the dashed center line marks the optical axis. The diaphragm is shown at its inferred position in the second air gap *b*, placed 71 % of the way from r₄ toward r₅ to clear the strongly curved r₄ surface.*

### 6.1 L1 — positive front meniscus (Schott N-SK16, n_d = 1.62041, ν_d = 60.3)

L1 is the lens's collecting element. With R₁ = +30.30 (strongly convex toward the object) and R₂ = +761.12 (essentially flat — only weakly convex toward the object), the element is a *positive meniscus* of focal length **+50.70 mm at f = 100, i.e. +25.35 mm at f = 50 production**. Its center thickness is 6.118 mm at f = 100 (3.06 mm at production scale).

Two design choices are notable here. First, the positive meniscus form is a refinement over the original 1902 Tessar's biconvex L1; the meniscus form yields better off-axis performance because the chief ray strikes both surfaces at smaller angles of incidence, reducing oblique aberrations.[^5] Second, R₂ is large enough to make L1's rear surface virtually flat — but not exactly flat. The patent's prose description in older Tessar variants sometimes uses the word "plane" loosely; here the numerical example shows that the rear surface still carries a small finite curvature that the designers used as an additional optimization variable.

The glass — a moderately dense crown with a high Abbe number near 60 — is chosen to give L1 enough refractive power without dispersing the chromatic budget unnecessarily.

### 6.2 L2 — asymmetric biconcave middle element (Schott "F8" historical, n_d = 1.59551, ν_d = 39.2)

L2 is the diverging middle element, the optical heart of any Tessar. It is *biconcave* with strongly asymmetric radii: R₃ = −69.81 (only weakly concave toward the object) and R₄ = +25.49 (strongly concave toward the image, and the most strongly curved air-contact surface in the entire prescription — the cement surface R₆ = +21.76 is slightly tighter still, but it is internal to the doublet rather than at an air-glass interface). The ratio |R₃|/|R₄| = 2.74 is a quantity the patent claims explicitly (see §10): R₃ must be at least 2.2 times more weakly curved than R₄.

L2's computed thick-lens focal length is **−31.14 mm at f = 100, i.e. −15.57 mm at production**. Its center thickness is small (1.778 mm at f = 100; 0.89 mm at production scale) — typical for the middle Tessar element, which derives its strong negative power from large surface curvature differences rather than from glass thickness.

The choice of F8 — a conventional flint glass of relatively high dispersion (ν_d = 39.2) — pairs naturally with the higher-Abbe crown of L1 to balance primary chromatic aberration across the object/image conjugate.

The patent further specifies that the diaphragm sits in the second air gap *b* — i.e., between L2 and the rear cemented doublet — and that this gap is small in absolute terms (b/f ≤ 7.5 %). This places the stop close enough to L2's rear vertex to keep the chief ray angles compatible with the strongly curved R₄ surface.

### 6.3 L3 — weak negative element (Schott LF5, n_d = 1.58144, ν_d = 40.8)

L3 is the front element of the rear cemented doublet. With both R₅ = +659.10 (essentially plano) and R₆ = +21.76 positive, both centers of curvature lie to the *right* of their respective vertices, so both surfaces curve in the same direction. Geometrically L3 is therefore a *negative meniscus, weakly convex toward the object*, with the front face nearly flat and the rear face strongly curved (the rear forms the cement junction with L4). Because |R₅| ≫ |R₆|, the rear surface dominates the element's optical behaviour: as a stand-alone element evaluated in air, L3 has a computed thick-lens focal length of **−38.74 mm at f = 100, i.e. −19.37 mm at production**, despite its almost-flat front face. Its center thickness is small (1.721 mm at f = 100; 0.86 mm at production scale) — L3 is genuinely thin, since most of the doublet's thickness budget is given to L4.

L3 should not be thought of as an independent element with that isolated power; it is a partner in the cement. Its job, optically speaking, is to provide a *steeply curved cement surface* (R₆) — the cement surface and the chosen index step from LF5 to BAF10 together do most of the chromatic correction of the doublet, while L4 provides the bulk of the positive power.

LF5 itself is a venerable lead-silicate light flint that has been a staple of the Schott catalog for over a century. Its choice here is squarely in the conservative-glass spirit of the patent.

### 6.4 L4 — thick biconvex positive (Schott N-BAF10, n_d = 1.67003, ν_d = 47.2)

L4 is the workhorse of the design. It is biconvex, with R₆ = +21.76 (the cement surface, convex toward the object/middle group) and R₇ = −48.72 (convex toward the image). At 12.427 mm of center thickness in the patent normalization (6.21 mm at production), L4 is by far the thickest element in the design — accounting for **87.84 %** of the cemented doublet's combined glass thickness. The patent's subordinate claim states that this fraction must exceed 80 %.

L4's computed isolated thick-lens focal length is **+24.16 mm at f = 100, i.e. +12.08 mm at production**, making it the strongest single element in the lens.

The choice of BAF10 (n_d ≈ 1.670) is the highest-index glass in the design and the closest the patent dares come to its 1.70 ceiling. BAF10 is a *barium flint* — moderately high index with a moderate Abbe number around 47 — and is the highest-index conventional glass available without entering the lanthanum families. Putting the most powerful element in the highest-index glass that the patent allows is what permits f/3.5 to be reached without aspherical surfaces or lanthanum crowns.

### 6.5 The cemented doublet as a unit

L3 and L4 together form a cemented achromat with combined thick-lens focal length **+55.00 mm at f = 100, i.e. +27.50 mm at production** — within 1 % of the *system* focal length. It is illuminating that, in this design, the rear cemented doublet by itself has approximately the same focal length as the whole system; the front L1 and the central L2 together have nearly compensating power, with L1's positive contribution slightly exceeding L2's negative.

---

## 7. Glass identification

Cross-referencing the patent's tabulated (n_d, ν_d) pairs against the principal optical-glass catalogs of the mid-1950s and against modern equivalents yields exact identifications for all four elements:

| Element | Patent n_d | Patent ν_d | Schott (modern) | Status | Cross-catalog matches |
|---|---|---|---|---|---|
| L1 | 1.62041 | 60.3 | **N-SK16** (dense crown) | In current production | HOYA BACD16; OHARA S-BSM16; Sumita K-VC78; Hikari Q-SK16 |
| L2 | 1.59551 | 39.2 | **F8** (historical / discontinued) | Withdrawn from Schott catalog | HOYA FF8 / E-FL5 / FD140; OHARA PBL35Y |
| L3 | 1.58144 | 40.8 | **LF5** (light flint) | In current production | HOYA E-FL2 / FF5; OHARA PBL26Y |
| L4 | 1.67003 | 47.2 | **N-BAF10** (barium flint) | In current production | HOYA BAF11 (close, Δn_d ≈ 0.003); OHARA S-BAH11; Sumita K-BAF11 |

For all four elements the match between the patent value and the modern catalog refractive index is at the fifth decimal place or better. The single case requiring a footnote is L2: Schott's historical "F8" was a current-production conventional flint in 1952 but was eventually withdrawn from the catalog in favor of more environmentally compliant successors. The cross-catalog matches (HOYA FF8, OHARA PBL35Y) preserve both n_d and ν_d to within the customary ±0.0005 / ±0.2 catalog tolerance, so a faithful reproduction of the design is straightforward in modern glass.

Figure 2 places the four glasses on the standard Abbe diagram alongside other Schott catalog glasses, with the patent's two explicit constraints — n_d < 1.70 (per element) and mean n_d < 1.62 (across the whole design) — drawn as dashed limits.

![Figure 2: Glass identification on the Schott Abbe diagram](fig2_glass_map.png)
*Figure 2 — Schott Abbe diagram (n_d vs ν_d) showing the four glasses of CH 314381 Example 1 in their context. The red dashed line marks the patent's per-element ceiling at n_d = 1.70 (no lanthanum crowns); the blue dotted line marks the mean-index limit at 1.62 across the design. The four chosen glasses are distributed across crowns (SK16), conventional flints (F8 hist., LF5), and the barium flint (BAF10), and stay clear of the lanthanum families (LASF, LAF, LAK) plotted for reference at upper right.*

The mean refractive index across the four elements is (1.62041 + 1.59551 + 1.58144 + 1.67003)/4 = **1.61685**, which sits just under the patent's stated 1.62 ceiling — the design is right at the bound, not comfortably below it. The patent does not explicitly claim that f/3.5 is the fastest aperture reachable within this glass envelope, but the worked Examples both target f/3.5, and the formal claim only guarantees apertures faster than f/3.8; pushing meaningfully faster than the Examples' f/3.5 would likely force the use of higher-index materials.

---

## 8. Geometric proportions and aspherical surfaces

### 8.1 Asphericity

**The design contains no aspherical surfaces.** Every one of the seven refracting surfaces in Example 1 is a sphere, fully described by a single radius of curvature. The patent prescription gives only single radii, with no aspherical coefficients of any order — and this implicit absence reflects an explicit design choice: aspherics in the early 1950s required high-skill manual figuring and were rare in volume photographic production. Pre-war Tessar work by Wandersleb and Merté at Jena had reached f/2 by introducing aspherical surfaces, but those designs were not economically suitable for mass manufacture. The patent's value proposition is precisely that f/3.5 is reachable *without* any aspherical surfaces.

### 8.2 Construction proportions

Two geometric proportions are claimed explicitly in the patent text and have been independently verified:

| Proportion | Computed | Patent constraint | Status |
|---|---|---|---|
| Vertex distance r₁→r₄ as fraction of total construction length | 42.74 % | < 46 % | satisfied |
| Second air gap *b* as fraction of focal length | 4.933 % | < 7.5 % | satisfied |

The first of these constraints captures the front-loaded balance of the design — most of the construction-length budget sits behind L2, in the second air gap *b* and the rear cemented doublet (and especially in the thick L4). The second constraint keeps the diaphragm and L3 close to L2's strongly curved rear surface, which is essential for managing oblique aberrations through that highly curved interface.

### 8.3 Element thickness asymmetry

Within the rear cemented doublet, L4 carries 87.84 % of the combined glass thickness (12.427 mm out of 14.148 mm in the patent normalization). The patent claims this fraction must exceed 80 %, and the verified computation confirms it. Putting most of the doublet's glass into the high-index BAF10 element — rather than splitting the thickness more evenly between L3 and L4 — is what concentrates the doublet's positive power in the higher-index material and helps the design reach f/3.5.

---

## 9. Optical performance — power distribution, Petzval, and chromatic correction

Figure 3 summarizes the power distribution and field-flatness contributions of the four elements at production scale.

![Figure 3: Element powers and Petzval contributions](fig3_power.png)
*Figure 3 — (Left panel) Element-by-element thick-lens focal lengths at f = 50 mm production scale. L1 alone contributes about +25.4 mm of power; the L3+L4 cemented doublet contributes about +27.5 mm — close to the 50 mm system focal length. L2 (negative) sits between them at −15.6 mm. (Right panel) Petzval-sum contribution per surface group, in units of 10⁻³ mm⁻¹. L1 (positive crown) contributes +12.13; L2 (negative flint) contributes −19.99 — the largest single contribution, providing the field-flattening; the L3+L4 doublet contributes +10.33. The system Petzval sum of +2.48 × 10⁻³ mm⁻¹ corresponds to a Petzval radius of approximately −201 mm at the production focal length.*

### 9.1 Power balance

The "two halves" structure of the design is striking:

* L1 alone has a focal length close to half of the system EFL.
* The cemented doublet (L3+L4) has a focal length within 1 % of the system EFL.
* L2's negative power (−15.57 mm at production) approximately offsets a fraction of L1's power, leaving the doublet to set the system focal length.

This is *not* the power balance of an arbitrary four-element lens; it is a Tessar-class signature in which the front group provides initial convergence, the middle element diverges to lengthen the back focal distance and flatten the field, and the rear cemented doublet recombines the rays to a sharp focus.

### 9.2 Petzval sum and field flatness

The surface-by-surface Petzval sum, Σ (n′ − n)/(n n′ R), evaluates at production scale to **+2.481 × 10⁻³ mm⁻¹**, corresponding to a Petzval radius of approximately **−201 mm** — about four times the system focal length in magnitude. The negative sign reflects the standard convention that, for a net-positive lens, the natural (Petzval) image surface is concave toward the lens — off-axis ray bundles focus slightly in front of the paraxial focal plane on a flat sensor. Per-element contributions are:

| Group | Petzval × 1000 (units mm⁻¹) | Sign and role |
|---|---|---|
| L1 (SK16) | +12.13 | Positive — natural for a positive crown |
| L2 (F8 hist.) | −19.99 | Strongly negative — the principal field-flattener |
| L3+L4 doublet | +10.33 | Positive — natural for net-positive doublet |
| **System** | **+ 2.48** | **Net positive but small** |

The sum is positive but small relative to the individual element contributions: L2 contributes a Petzval of −19.99, which by itself would give a Petzval radius of only −50 mm. L1 and the rear doublet each contribute around +10 to +12 in the opposite sign; together they almost (but not quite) cancel L2's negative contribution. The residual is what the photographic image actually sees as field curvature.

A Petzval radius of approximately 4 × f_sys is in the moderate-flatness range for a Tessar-class objective. Designs that incorporate lanthanum crowns can typically achieve flatter fields, because the higher-index glass families allow the negative middle element to do its field-flattening work with weaker surface curvatures and less Petzval cost; the price of staying within the present patent's glass envelope is correspondingly some degradation in field flatness compared to those alternatives.

### 9.3 Chromatic correction

A full thick-lens trace through the prescription using modern Schott Sellmeier coefficients (N-SK16, N-BAF10, and LF5; LF5 also serves as the dispersion-curve stand-in for L2's historical F8, which is no longer in catalog) yields:

| Aberration | Computed (production scale) |
|---|---|
| Primary chromatic (focus shift F-line to C-line) | ≈ −0.14 mm (≈ −0.27 % of EFL) |
| Secondary spectrum (focus shift g-line to d-line) | ≈ −0.58 mm (≈ −1.17 % of EFL) |

These are approximate values: the modern N-prefix Schott versions are designed to match their lead-bearing 1950s predecessors on n_d and ν_d to within standard catalog tolerance (typically Δn_d < 0.001 across the visible), but the full dispersion curves can differ slightly, and substituting LF5 for the historical F8 introduces an additional small error. Both numbers are nevertheless typical of a well-corrected achromat built from conventional (non-anomalous-dispersion, non-fluorite) glasses. The achromatic balance here is a *system* property: the rear cemented doublet alone has a thin-lens residual Σ φ_i/ν_i of about 1.7 % of its own power (it does not by itself satisfy the standard achromatic condition Σ φ_i/ν_i = 0), and the front L1 + middle L2 combination contributes the compensating chromatic correction in the opposite direction so that the whole-system primary chromatic comes out small. The secondary spectrum is the irreducible residual at this glass complement and is what the lanthanum-crown designs of the same era could partially improve on.

---

## 10. Summary verification of the patent's numerical claims

### 10.1 The formal patent claim

The PATENTANSPRUCH (formal patent claim, page 3 of the published Swiss patent) describes a "spherically, comatically, chromatically, and astigmatically corrected photographic objective" (in the original German: *"Sphärisch, komatisch, chromatisch und astigmatisch korrigiertes photographisches Objektiv"*) of the Tessar genus, with relative aperture faster than f/3.8 (*"einer relativen Öffnung größer als 1:3,8"*). The four characterizing conditions are then:

1. The front lens has the form of a meniscus.
2. The vertex distance from the front of L1 to the rear of L2 is less than 46 % of the construction length.
3. The second air gap is less than 7.5 % of the focal length.
4. The biconcave middle lens is asymmetric, with |R₃| ≥ 2.2 × |R₄|.

The single subordinate claim (UNTERANSPRUCH) adds: the converging element of the rear cemented doublet (L4) must carry at least 80 % of the doublet's combined thickness.

### 10.2 Independent verification of every numerical claim

Independent paraxial computation confirms every quantitative claim made in the patent text:

| Claim | Patent statement | Computed (Example 1) | Verdict |
|---|---|---|---|
| Aperture | faster than f/3.8 | f/3.5 | ✓ |
| All n_d below 1.70 | n_d < 1.70 (every element) | max n_d = 1.67003 (L4) | ✓ |
| Mean n_d below 1.62 | (Σ n_d)/4 < 1.62 | 1.61685 | ✓ |
| L1 form | Positive meniscus, convex toward object | R₁ = +30.30, R₂ = +761.12 (both positive); f_L1 = +50.7 mm | ✓ |
| Vertex r₁→r₄ short | < 46 % of construction length | 42.74 % | ✓ |
| Diaphragm gap small | b < 7.5 % of EFL | 4.933 % | ✓ |
| Middle-element asymmetry | \|R₃\|/\|R₄\| ≥ 2.2 | 2.7384 | ✓ |
| L4 dominates the doublet | L4 thickness ≥ 80 % of doublet | 87.84 % | ✓ |
| Cement-surface curvature | Convex side toward middle lens (L2) | R₆ = +21.76 mm (positive → convex toward L2) | ✓ |
| Aberration correction | Spherical, comatic, chromatic, astigmatic | Cannot verify without finite-aperture trace; primary chromatic ≈ 0.27 % of EFL is consistent with the claim (see §9.3) | ✓ (within scope verifiable here) |

Every quantitative claim of the patent thus stands up to independent computational verification. The aberration-correction claims of the formal claim language (spherical, coma, astigmatism beyond chromatic) would require finite-aperture ray tracing at multiple field positions to verify with full rigor; that work is outside the scope of this paraxial analysis. The chromatic component, which can be computed from paraxial data, is in the range expected for a well-corrected achromat using conventional glass.

---

## 11. The design thesis: "no aspherics, no lanthanum"

The intellectual argument of CH 314381 can be restated compactly. The patent claims that the four parameters

1. all n_d < 1.70,
2. mean n_d < 1.62,
3. small front-vertex distance (r₁→r₄ < 46 % of construction),
4. small post-stop gap (b < 7.5 % of f), with |R₃|/|R₄| ≥ 2.2 and L4 carrying ≥ 80 % of the doublet thickness,

together delimit a region of Tessar parameter space inside which **apertures faster than f/3.8** are achievable using only conventional (pre-lanthanum) glasses and only spherical surfaces. The contrasting prior art — U.S. patent 2,158,178, cited by number in the German priority application and reproduced in the Swiss publication — had reached comparable apertures only by reaching outside this glass envelope. Both Examples 1 and 2 in the patent target f/3.5 specifically, and Example 1's match to the production Carl Zeiss / Zeiss-Opton Tessar 50/3.5 is what this document analyzes.

The design's commercial significance follows directly: extremely high-index glasses such as the lanthanum crowns introduced by Eastman Kodak in the late 1930s were difficult to melt, expensive, and supply-constrained in the early 1950s. A design that delivered f/3.5 in conventional glass could be manufactured in volume at a moderate price point, which is exactly the role the production Tessar 50 mm f/3.5 played in the Contax IIa/IIIa system: the affordable normal lens, paired with the more expensive Sonnar 50 mm f/2 and f/1.5.

It is worth noting, in fairness to the design's narrower historical position, that the f/3.5 speed achieved here had already been reached in the 1930s by Wandersleb and Merté at Jena (DE 603325C, 1930) — but those pre-war designs leaned on glass and surface-shape options that the post-war Oberkochen team chose not to use. CH 314381 is therefore best read not as a speed advance over the historical Tessar baseline, but as a *re-derivation* of the f/3.5 working point under a new and self-imposed manufacturability envelope: spherical surfaces only, no lanthanum, mean refractive index ≤ 1.62. Within that envelope, the patent's claim is that f-numbers down to (faster than) f/3.8 are achievable, and the worked Examples demonstrate f/3.5 specifically.

---

## 12. Focusing mechanism

The Tessar 50 mm f/3.5 in Contax-rangefinder mount is a **rigid (non-collapsible) lens that focuses by unit translation**: the entire optical assembly — all four elements together, in fixed mutual relationship — moves axially as a single rigid body, driven by a helicoid in the lens barrel and coupled to the camera body's rangefinder cam.[^4]

Concretely, this means:

* No element moves relative to any other element during focusing.
* All four spacings d_I, a, d_II, b, d_III, d_IV are *fixed* — they take the values listed in the patent prescription regardless of the focused conjugate.
* The only quantity that changes during focusing is the lens-to-film axial separation; the diaphragm position relative to the optical assembly is also fixed.

This is the simplest possible focusing mechanism — mechanically robust, optically transparent (no aberration variation with focus distance, to the extent the design is well-corrected at infinity), and entirely consistent with the patent's overall conservatism. The patent itself does not mandate a focusing mechanism; the unit-focus arrangement is a property of the Contax production lens, not of the optical design as such, and Example 1 of the patent could in principle be implemented with any focusing scheme.

The minimum focus distance of the Contax production unit is set by the rangefinder cam's mechanical range — typically of order one meter for a Contax-coupled normal lens — rather than by any optical limitation in the design itself.

---

## 13. Comparison to the contemporary Jena Tessar f/2.8

A useful frame of reference for understanding what CH 314381 is *not* is the contemporary Tessar 50 mm f/2.8 produced by VEB Carl Zeiss Jena (East-German Zeiss successor) and protected by French patent FR 1066698 (Carl Zeiss Jena, designer Harry Zöllner, priority 1952 — almost exactly contemporary with CH 314381).[^Zollner] The Jena design reached f/2.8 — half a stop faster than the Oberkochen patent — by adopting **lanthanum-bearing crowns** (LaK-class glass with n_d in the range 1.74–1.78). The two designs thus represent two distinct answers to the same engineering question:

| | Oberkochen (CH 314381, this patent) | Jena (FR 1066698, contemporary) |
|---|---|---|
| Aperture | f/3.5 | f/2.8 |
| Glass envelope | All n_d < 1.70 | Includes lanthanum crown(s) |
| Aspherics | None | None |
| Field flatness (Petzval radius / f) | ≈ −4× | typically flatter |
| Cost-of-manufacture posture | Low | Higher (lanthanum-glass cost) |

Neither design is "better" on absolute grounds; they reflect different priorities. The Oberkochen design is the choice for a manufacturer who wants to keep glass cost down and is willing to give up half a stop. The Jena design is the choice for a manufacturer with access to lanthanum supplies and a customer base that values the extra speed.

---

## 14. Caveats and limits of the analysis

This document represents a thorough but inevitably partial reading of the patent. The following items deserve explicit caveats:

* **Focal length and f-number of Example 1.** The patent does not explicitly state the focal length of Example 1 in millimeters; it normalizes to f ≈ 100 mm and gives radii and thicknesses in units of f. The patent body does explicitly state the example's aperture ratio (1:3.5) and field (±24°), and the formal claim states the broader aperture criterion (faster than 1:3.8). The 50 mm production identification rests on the historical match between this patent and the Contax production Tessar 50/3.5, with the 50/3.5 designation taken from Zeiss production records rather than from the patent text itself.
* **L2 glass identification.** The historical "F8" listed in 1952 Schott data was discontinued and removed from later catalog editions. The modern equivalents (HOYA FF8 / E-FL5; OHARA PBL35Y) preserve n_d and ν_d to within standard catalog tolerance, but a precise reproduction of the original glass's full Sellmeier dispersion behavior (and any minor anomalous-partial-dispersion characteristics) would require access to historical Schott manufacturing data not used in this analysis.
* **Stop position within the air gap *b*.** The patent body text states that the diaphragm sits in the second air gap but does not give an exact axial position within that gap. Independent cross-gap sag analysis shows that the strongly curved r₄ surface (R = +25.49 at f = 100) requires the iris to be placed no closer than approximately 3.2 mm from r₄ (at the f = 100 normalization) to avoid physical interference between the surface sag and the iris mechanism at full aperture. The stop is accordingly placed at 71 % of the gap — 3.50 mm from r₄ and 1.43 mm from r₅ — which is consistent with the iris mark in patent Fig. 1. The actual production iris placement may differ by a small fraction of a millimeter from this estimate.
* **Aberration analysis is paraxial.** This document verifies the patent's paraxial claims (focal length, BFD, element powers, Petzval sum, primary chromatic, secondary spectrum) and infers from them what can be inferred. Verifying the patent's full formal claim of *spherical, comatic, chromatic, and astigmatic* correction would require finite-aperture ray tracing at multiple field positions and multiple wavelengths, which is outside the scope of this analysis. The chromatic component is verified explicitly (§9.3); the other three corrections are taken on the patent's own assertion, which is consistent with the design's known production reputation and with the form-factor analysis presented here.
* **Robert Richter's biographical details.** Richter's role at the post-war Oberkochen company is well-established in the secondary literature on Zeiss optical design, but a primary-source document confirming the precise dates of his post-war reassignment to Oberkochen was not consulted for this analysis. The patent itself confirms that he was at the Heidenheim/Oberkochen operation by mid-1953.
* **Production-vs-patent identification.** The match between Example 1 and the production Tessar 50 mm f/3.5 is highly probable based on the chronological coincidence and the design philosophy, but the production lens may have been refined in details (e.g., final element-thickness optimization to 0.01 mm tolerance) that would not show up in the patent text.
* **Identification of US 2,158,178.** The patent text cites U.S. patent 2,158,178 by number as prior art representative of the high-index-glass approach the present design avoids; the specific authorship and detailed prescription of US 2,158,178 itself were not directly examined for this analysis. The qualitative description in CH 314381 (high-index, expensive-to-melt glasses for similar Tessar-type purpose, 1939-era publication) places it within the lanthanum-glass photographic-objective patent family of that period.

None of these caveats affects any of the quantitative claims verified in §10 or the qualitative element-by-element analysis of §6.

---

## 15. References

[^1]: H. H. Nasse, "Tessar," *Camera Lens News* technical article, Carl Zeiss AG Camera Lens Division, March 2011. Standard reference on the history and optical principles of the Tessar family.

[^2]: Arne Croell, *Carl Zeiss Oberkochen Large Format Lenses* (technical history compilation), available at https://www.arnecroell.com/zeissoberkochen.pdf — covers the post-1945 Foundation reorganization at Heidenheim and the Oberkochen production facility's establishment. See also the official Zeiss corporate history at https://www.zeiss.com/corporate/en/about-zeiss/past/history.html.

[^3]: For the Topogon (1933) and Robert Richter's pre-war design work at Jena, see the technological-milestones page of the Carl Zeiss corporate history (https://www.zeiss.com/corporate/en/about-zeiss/past/history/technological-milestones/camera-and-cine-lenses.html). The Topogon entered series production for aerial photogrammetry use and is the design Richter is principally remembered for.

[^4]: Production-history details for the Carl Zeiss / Zeiss-Opton Tessar 50 mm f/3.5 in Contax IIa/IIIa mount draw on John Keesing, *Contax Rangefinder Lenses 1932–1962* (referenced in collector forums and trade catalogs); Pacific Rim Camera, "Zeiss-Ikon Contax 50mm f/3.5 Tessar" (https://www.pacificrimcamera.com/pp/zicontax50f35.htm); and Lens-DB, "Carl Zeiss Zeiss-Opton Tessar 50mm f/3.5 T (1950)" (https://lens-db.com/carl-zeiss-zeiss-opton-tessar-50mm-f35-t-1950/). Production quantities are approximate and consolidated from these collector-reference sources.

[^5]: The optical-aberration argument for the meniscus-form L1 over the older biconvex-form L1 is standard textbook material in the Tessar literature; see e.g. Rudolf Kingslake, *Lens Design Fundamentals* (Academic Press, 1978), chapter on triplets and Tessars.

[^Tessar-history]: For the historical evolution of the Tessar from f/6.3 (1902) through f/4.5 (Wandersleb, 1917) to f/3.5 and f/2.8 (Wandersleb & Merté, 1930; German patent DE 603325C, published 29 September 1934), see the Tessar entry on HandWiki / Wikipedia (https://handwiki.org/wiki/Engineering:Tessar; https://en.wikipedia.org/wiki/Tessar) and the references therein. The 1930 Wandersleb-Merté Tessars achieved f/3.5 and f/2.8 using high-index glasses but at the cost of design constraints CH 314381 explicitly avoids.

[^Zollner]: The attribution of the post-war Jena Tessar 50 mm f/2.8 redesign (FR 1066698, priority 1952) to Harry Zöllner is well-established in the standard lens-collector and lens-history literature; see the data sheet for the Carl Zeiss Jena Tessar 50 mm f/2.8 at JAPB (https://japb.net/gear/gear-review-index/ds_jarlzeissjena-tessar-50f2-8/) and references therein. The Zöllner attribution rests on contemporaneous Zeiss biographical records and Zeiss-historian secondary literature; the present analysis did not directly examine the FR 1066698 patent text to verify which name (if any) is given as the inventor on the patent itself.

**Patent itself:** Swiss Patent CH 314381, "Photographisches Objektiv," Carl Zeiss, Heidenheim a.d. Brenz; inventors G. Lange and R. Richter; priority Germany 21 July 1952; Swiss filing 24 June 1953; published 31 July 1956. The German priority application underlies the published Swiss patent text used in this analysis.

**Glass-catalog data:** Refractive-index and dispersion data for Schott N-SK16, N-BAF10, and LF5 are taken from the Schott optical-glass catalog as compiled in the public-domain Sellmeier-coefficient tables maintained at https://refractiveindex.info. Cross-references to HOYA, OHARA, Sumita, and Hikari catalogs are drawn from those manufacturers' published 2020s glass-equivalence tables.
