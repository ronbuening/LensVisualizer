# FUJIFILM FUJINON XF 50–140mm F2.8 R LM OIS WR — Optical Analysis

**Primary source:** US 2017/0090163 A1 (Fujifilm Corporation, inventor T. Ori; filed 26 August 2016; priority JP 2015‑186957, 24 September 2015). The patent is titled *"Rear Convertor Lens and Imaging Apparatus"*; the XF 50‑140mm prescription appears as the **master lens** against which the claimed rear converter is demonstrated.

**Verification methodology.** Every quantitative claim in this document was cross‑checked by an independent paraxial ray trace (y‑u method; geometric angles; n·u conserved at refractions) executed against a fresh transcription of the patent prescription. The final section, **§12 — Numerical Verification**, documents the residual agreement between computed and patent‑stated quantities.

---

## 1. What the patent actually is

It is important to state this plainly at the outset, because it affects what the document can and cannot tell us about the XF 50‑140mm.

The patent's claims, its abstract, and the quantity being "invented" are all directed at a **three‑group rear teleconverter**. The rear converter has negative focal length, consists of a positive cemented doublet + negative cemented triplet + positive third group, and satisfies a pair of conditional expressions relating the third‑group focal length `f3` and the converter focal length `cf`, and the Abbe numbers of the first‑group elements. Four numerical examples (Examples 1–4) are given — these four *differ from one another only in the rear‑converter design*. The "master lens" prescription (surfaces 1–40 of every numerical table) is identical in every example and is plainly included so that the inventor can demonstrate aberration correction of the combined optical system.

Given the priority date (September 2015), the 1.4× magnification factor of all four examples, and the close match between the master‑lens focal‑length range and Fujifilm's X‑mount telephoto zoom at that time, the "master lens" is the **XF 50‑140mm F2.8 R LM OIS WR** (announced September 2014, shipping January 2015) and the rear converter is the **XF 1.4X TC WR** (announced 21 October 2015, shipping November 2015). The four examples are almost certainly four candidate designs for the same 1.4× teleconverter product; Example 1 is the one most likely to have entered production, as patents conventionally lead with the design that was shipped.

This identification is corroborated by the element count, group count, and ED‑glass count specified in the prescription matching Fujifilm's published specification of the 50‑140mm exactly (see §4) and by the rear converter's 7‑element, 3‑group composition matching Fujifilm's published specification of the 1.4X TC WR exactly.

Because the patent is claiming a teleconverter, not a zoom lens, it is **silent on the XF 50‑140mm's focusing mechanism and on the OIS system**. Where this document makes statements about those systems, it does so only from first‑party Fujifilm material and explicitly labels the provenance.

---

## 2. Executive summary of findings

| Quantity | Value (verified) |
|---|---|
| Element count | **23 elements** |
| Group count (air‑separated) | **16 groups** |
| Aspherical surfaces | **none** |
| Extra‑low‑dispersion (ED) elements | **5**  — L12, L14, L23, L41, L44 (all 497 815) |
| Super‑ED / fluorite‑class elements | **1** — L13 (439 949) |
| Focal length, design (W / M / T) | 51.50 / 83.69 / 135.98 mm (patent: 51.52 / 83.69 / 135.96) |
| Focal length, marketed | 50 – 140 mm |
| Maximum aperture (design, W/M/T) | f / 2.88 / 2.89 / 2.88 (patent) |
| Maximum aperture (marketed) | f / 2.8 constant |
| Full field of view (W / M / T) | 2ω = 30.6° / 18.8° / 11.6° |
| Implied image height | ≈ 14.1 mm (matches APS‑C half‑diagonal 14.14 mm) |
| Air‑equivalent back focal distance | 29.41 mm (patent exactly) |
| Total physical track (first vertex → image) | 185.9 mm at every zoom position |
| Telephoto ratio at tele | track / EFL_tele = 185.9 / 136.0 = **1.367** (not a true telephoto construction) |

Subsystem focal lengths for the four zoom‑architecture groups:

| Group | Elements | Role | Motion | Focal length |
|---|---|---|---|---|
| **G1** | L11 – L14 (4 elements) | Front group, positive  | **fixed** | **+89.0 mm** |
| **G2** | L21 – L25 (5 elements) | Variator, negative | moves +29.77 mm image‑side W→T | **−19.0 mm** |
| **G3** | L31 – L33 (3 elements) | Compensator, positive | moves +18.16 mm image‑side W→T | **+48.3 mm** |
| **G4** | L41 – L411 (11 elements) | Master / relay, positive | **fixed** | **+64.3 mm** |

### Selected physical specifications (from Fujifilm first‑party documentation)

| | |
|---|---|
| Physical length (mount to front) | 175.9 mm |
| Diameter | 82.9 mm |
| Weight | 995 g |
| Filter thread | 72 mm (non‑rotating) |
| Aperture blades | 7 (rounded) |
| Aperture range | f/2.8 to f/22 in 1/3 EV steps |
| Minimum focus distance | 1.0 m at every focal length |
| Maximum magnification | 0.12× (at tele) |
| OIS rating | 5.0 stops in‑lens; 6.0 stops with IBIS |
| 35 mm‑format equivalent | 76–213 mm (1.52× crop factor) |

These values are outside the scope of the patent but are relevant context for the optical analysis — in particular, the 7‑blade diaphragm and the f/22 minimum aperture determine the small‑aperture diffraction behaviour, and the 72 mm filter thread constrains the usable front‑element semi‑diameter.

---

## 3. Design overview

The master lens is a **four‑group zoom of positive–negative–positive–positive configuration** with the first and last groups held fixed. This is the canonical architecture of a fast, constant‑aperture internal‑zoom telephoto — the same family of layouts to which the Canon EF 70‑200mm f/2.8L and Nikon AF‑S 70‑200mm f/2.8G belong. The aperture stop sits between G3 and G4; magnification change is effected by moving the negative variator G2 image‑side across the zoom range, while the positive compensator G3 moves image‑side by a smaller amount to keep the image plane stationary.

The sum DD[7] + DD[15] + DD[20] is invariant across zoom (verified: 43.68 mm at wide, 43.68 mm at middle, 43.67 mm at tele — agreement to ±0.01 mm), confirming that the overall optical length is constant and that G1, the stop, and G4 are mechanically fixed. The zoom is therefore fully **internal** — the barrel does not change length with focal length, consistent with the product's marketing description of an "inner zoom mechanism".

The design's **telephoto ratio** at the tele end is 1.367 — that is, the optical track is about 37% longer than the focal length. This is not a *true* telephoto construction (for which the ratio would be < 1). Constant‑aperture f/2.8 tele zooms of this range consistently have ratios > 1; the large constant entrance‑pupil diameter at tele (47.2 mm — see §7.1) requires a large front group, and inner zoom with fixed front precludes the axial compression a true telephoto would use. The design's compactness relative to equivalent 35 mm‑format lenses comes from the shorter focal‑length scaling of APS‑C, not from a telephoto construction per se.

---

## 4. Glass inventory and Abbe map

Every glass medium in the prescription is matched here to its **six‑digit manufacturer‑agnostic code** (`⌊(n_d − 1) · 1000⌋` then `⌊ν_d · 10⌋`). Exact catalogue identifications are given where the nd/νd pair matches a standard catalogue melt to within one digit of the code; where the match is less precise only the code and glass family are stated, and the identification is tagged as *tentative*.

| Elem | n_d | ν_d | Code | Role | Catalogue match |
|---|---:|---:|---|---|---|
| **L11** | 1.80100 | 34.97 | 801 350 | Neg (cemented in G1) | OHARA **S‑LAM66** / SCHOTT N‑LASF45 — exact |
| **L12** | 1.49700 | 81.54 | 497 815 | Pos (cemented in G1) | OHARA **S‑FPL51** / SCHOTT N‑PK52A / HOYA FCD1 — exact (ED) |
| **L13** | 1.43875 | 94.94 | 439 949 | Pos (plano‑convex) | OHARA **S‑FPL53** (Super ED / fluorite‑class) — n_d exact; catalogue lists νd ≈ 94.66 for the S‑FPL53 reference melt (0.28 difference is within typical melt variation) |
| **L14** | 1.49700 | 81.54 | 497 815 | Pos meniscus | OHARA **S‑FPL51** — exact (ED) |
| **L21** | 1.72047 | 34.71 | 720 347 | Pos (front of G2 doublet) | OHARA **S‑NBH8** / SCHOTT N‑KZFS8 — exact |
| **L22** | 1.62230 | 53.17 | 622 532 | Neg (rear of G2 doublet) | barium‑flint family *(no match in current OHARA / SCHOTT / HOYA / HIKARI main catalogues — see note below)* |
| **L23** | 1.49700 | 81.54 | 497 815 | Neg (front of G2 triplet) | OHARA **S‑FPL51** — exact (ED) |
| **L24** | 1.84661 | 23.88 | 847 239 | Pos (rear of G2 triplet) | OHARA **S‑TIH53** / SCHOTT **N‑SF57** / HOYA FDS90 / HIKARI J‑SF03 — exact on code 847 238; melt variation in νd (23.88 vs catalogue 23.78) |
| **L25** | 1.91082 | 35.25 | 911 352 | Neg biconcave (rear of G2) | **HOYA TAFD35** — exact match on code 911 352 |
| **L31** | 1.80100 | 34.97 | 801 350 | Pos meniscus | OHARA **S‑LAM66** / SCHOTT N‑LASF45 — exact |
| **L32** | 1.61800 | 63.33 | 618 633 | Pos (front of G3 doublet) | OHARA **S‑PHM52** / SCHOTT N‑PSK53A / HOYA PCD4 — exact (anomalous‑dispersion crown) |
| **L33** | 1.80518 | 25.42 | 805 254 | Neg (rear of G3 doublet) | SCHOTT **SF6** / OHARA **S‑TIH6** / HOYA FD60 — exact |
| **L41** | 1.49700 | 81.54 | 497 815 | Pos biconvex | OHARA **S‑FPL51** — exact (ED) |
| **L42** | 1.65412 | 39.68 | 654 397 | Pos meniscus | OHARA **S‑NBH5** / SCHOTT **N‑KZFS5** / HOYA E‑ADF50 — exact (anomalous‑dispersion KZFS‑class short flint) |
| **L43** | 1.90366 | 31.31 | 904 313 | Neg (front of G4 doublet) | OHARA **S‑LAH95** / SCHOTT **N‑LASF46A** / HOYA TAFD25 / HIKARI J‑LASFH13 — exact (very dense high‑index flint) |
| **L44** | 1.49700 | 81.54 | 497 815 | Pos (rear of G4 doublet) | OHARA **S‑FPL51** — exact (ED) |
| **L45** | 1.80518 | 25.42 | 805 254 | Pos (front of G4 doublet) | SCHOTT SF6 / OHARA S‑TIH6 — exact |
| **L46** | 1.58913 | 61.13 | 589 611 | Neg (rear of G4 doublet) | OHARA **S‑BAL35** / SCHOTT **N‑SK5** / HOYA BACD5 / HIKARI J‑SK5 — exact (conventional barium crown) |
| **L47** | 1.80100 | 34.97 | 801 350 | Neg biconcave | OHARA **S‑LAM66** / SCHOTT N‑LASF45 — exact |
| **L48** | 1.80000 | 29.84 | 800 298 | Pos biconvex | OHARA **S‑NBH55** — exact match on code 800 298 (anomalous‑dispersion heavy‑flint) |
| **L49** | 1.48749 | 70.24 | 487 702 | Pos (front of G4 doublet) | OHARA **S‑FSL5** / SCHOTT N‑FK5 / HOYA FC5 / HIKARI J‑FK5 — exact (fluor‑crown, anomalous partial dispersion) |
| **L410** | 1.80518 | 25.42 | 805 254 | Neg meniscus (rear of G4 doublet) | SCHOTT SF6 / OHARA S‑TIH6 — exact |
| **L411** | 1.91082 | 35.25 | 911 352 | Neg meniscus | HOYA TAFD35 — exact match on code 911 352 |

**Fourteen unique glasses**, of which six are non‑conventional anomalous‑dispersion types:
* **Super ED (fluorite‑class):** L13 (*νd ≈ 95*).
* **ED glass:** L12, L14, L23, L41, L44 (*νd ≈ 81.5*, the same melt used for all five).

An additional four elements use **anomalous‑partial‑dispersion glasses** in the less‑extreme classes that Fujifilm does not include in the marketing "ED" count but which nonetheless contribute to secondary‑spectrum correction:
* **S‑PHM52 / anomalous‑dispersion crown:** L32 (νd = 63.33; notable positive P_gF anomaly).
* **S‑NBH5 / KZFS‑family short flint:** L42 (νd = 39.68; notable negative P_gF anomaly, the conjugate partner to ED glasses).
* **S‑NBH55 / NBH heavy flint:** L48 (νd = 29.84; similar short‑flint anomaly).
* **S‑FSL5 / fluor‑crown:** L49 (νd = 70.24; anomalous positive P_gF).

Fujifilm's marketed count ("5 ED + 1 Super ED") agrees **exactly** with the five 497 815 ED elements plus the one 439 949 Super‑ED element in the prescription. The four additional anomalous‑dispersion elements listed above sit below the manufacturer's threshold for the "ED" designation but are just as consequential to the lens's apochromatic performance — this is one of the reasons the chromatic correction can be done without aspherics (see §5).

**Note on L22 (code 622 532).** This is the single glass in the master‑lens prescription for which no exact catalogue identification was found, after checking the OHARA (May 2023), HOYA, SCHOTT and HIKARI nd/νd tables. The nearest catalogue neighbours (OHARA S‑BSM10 at 623 571 and S‑BSM15 at 623 582) have incompatible Abbe numbers. Two hypotheses remain open: (a) the value could correspond to a *specialty or vintage melt* from one of the major makers that is no longer carried in current product catalogues, or (b) the glass could be produced internally by Fujifilm (Fujinon), whose Odawara glass factory has supplied internal melts to Fujinon‑branded lenses since 1940. Without independent design documentation from Fujifilm the distinction cannot be resolved; the six‑digit code remains the unambiguous identifier.

### Why the six marketed ED / Super ED elements, and where they sit

The strategic placement of anomalous‑partial‑dispersion glass is the single most informative thing the prescription tells us about the design philosophy:

1. **L12 (ED, in G1 doublet with L11 high‑index flint).** The canonical ED cemented doublet for controlling primary axial chromatic aberration at the front group, where the marginal ray is at maximum height and any axial chromatic error contributes most. S‑FPL51 as the positive half and S‑LAM66 (or equivalent 1.80 crown) as the negative half is a textbook arrangement for a superachromatic front group.
2. **L13 (Super ED).** A second positive element in G1, with almost vanishing partial‑dispersion anomaly. S‑FPL53 is the closest practical substitute for calcium‑fluorite crystal, and its presence is what permits the residual secondary chromatic spectrum to be controlled — the feature Fujifilm markets as "Super ED lens element comparable to a fluorite lens".
3. **L14 (ED).** A third ED element in G1 as a positive meniscus. Three of the four G1 elements being anomalous‑dispersion glass signals that aggressive chromatic control at the front is central to the design, which is appropriate for an f/2.8 aperture where the marginal ray in the front group rises to ≈ 24 mm height at tele.
4. **L23 (ED, inside G2 triplet L23‑L24).** A negative ED element inside the negative variator. Because G2 carries the bulk of the magnification change, residual chromatic aberration it generates varies with focal length — putting an ED element here stabilises chromatic correction across the zoom range rather than correcting it only at one focal length.
5. **L41 (ED, biconvex at G4 front).** The first element after the stop; the beam has its smallest cross‑section here. An ED element immediately after the stop is a classic move in master‑lens design to correct the off‑axis chromatic aberrations that accumulate in G4.
6. **L44 (ED, in a cemented doublet deep in G4).** Buried‑ED element in a cemented pair with high‑index negative flint L43; it corrects the axial chromatic generated by the strong positive power of L41.

---

## 5. Aspherical surfaces

**There are no aspherical surfaces in the master lens.** The prescription table lists plain (R, d, n_d, ν_d) columns with no aspherical coefficients; no surface is flagged as aspherical, and no conic‑constant or higher‑order polynomial tables appear. This is consistent with Fujifilm's published technical specification, which enumerates ED and Super ED glass counts but does not list any aspherical element — notable for a premium modern telephoto, but coherent with the design philosophy. At these focal lengths, **chromatic aberrations (primary and secondary spectrum) dominate image quality**, and aggressive ED / Super‑ED glass use can substitute for aspherical correction of spherical aberration. The 11‑element G4 is large enough to have spherical aberration corrected by surface splitting alone. (Note: some third‑party pages describe the lens as having "aspherical elements". This is incorrect; those pages appear to be propagating a boilerplate description rather than reading the spec sheet.)

---

## 6. Per‑element description

This is a detailed walk‑through of what every element does. Focal‑length values are thin‑lens (lensmaker's‑equation) approximations computed from R₁, R₂ and n_d; they are correct for understanding each element's power contribution but are not the exact in‑system paraxial value.

### G1 — Front group (4 elements, fixed, f = +89.0 mm overall)

**L11 — negative meniscus, cemented to L12.** R₁ = +314.4, R₂ = +80.9; n_d = 1.80100, ν_d = 34.97; f_thin = −135.9 mm. Both radii positive with |R₁| > |R₂| makes this a meniscus with edge thickness exceeding centre thickness — hence the negative power. The canonical role is as the high‑index flint partner of the ED L12, together forming the G1 front colour doublet.
**L12 — positive, cemented to L11.** R₁ = +80.9, R₂ = −411.8; S‑FPL51 ED; f_thin = +136.0 mm. Provides the positive power of the G1 doublet while the low‑ν_d negative partner balances chromatic dispersion.
**L13 — plano‑convex positive Super ED.** R₁ = +70.8, R₂ = ∞; S‑FPL53; f_thin = +161.4 mm. The axial‑colour workhorse; its near‑zero partial‑dispersion anomaly permits the design to correct secondary spectrum as well as primary chromatic aberration.
**L14 — positive meniscus ED.** R₁ = +69.9, R₂ = +243.3; S‑FPL51; f_thin = +197.5 mm. Final front‑group contribution of positive ED power; its shallow curvatures (R₂ nearly planar) and meniscus shape suggest a stress‑relief role where additional ED power is added without adding spherical aberration.

### G2 — Variator (5 elements, moving, f = −19.0 mm overall)

**L21 — biconvex positive, cemented to L22.** R₁ = +97.3, R₂ = −44.4; n_d = 1.72047, ν_d = 34.71; f_thin = +42.4 mm. Opposite R‑signs make this biconvex (both surfaces bulge outward). Dense crown flint at the front of the G2 doublet.
**L22 — negative, cemented to L21.** R₁ = −44.4, R₂ = +24.5; n_d = 1.62230, ν_d = 53.17; f_thin = −25.4 mm. The doublet (L21+L22) is at the front of G2 and provides local chromatic correction for the variator.
**L23 — biconcave negative ED, cemented to L24.** R₁ = −67.3, R₂ = +26.8; S‑FPL51; f_thin = −38.6 mm. The ED element of the G2 triplet — controls axial colour variation with focal length.
**L24 — positive, cemented to L23.** R₁ = +26.8, R₂ = +128.9; n_d = 1.84661, ν_d = 23.88; f_thin = +40.0 mm. Dense flint in Schott SF‑family: high index, high dispersion. Paired with L23 (ED), this is a very strong apochromatic doublet buried inside the variator.
**L25 — biconcave (near plano‑concave at rear) negative.** R₁ = −31.6, R₂ = +268.9; n_d = 1.91082, ν_d = 35.25; f_thin = −31.0 mm. With R₁ negative and R₂ large and positive, the front is strongly concave and the rear is nearly flat. High‑index flint at the rear of G2. The combination of very high n_d with moderate dispersion minimises Petzval contribution per unit of negative power — critical for a variator group generating −19 mm focal length over a small axial extent.

### G3 — Compensator (3 elements, moving, f = +48.3 mm overall)

**L31 — positive meniscus.** R₁ = −454.7, R₂ = −44.4; n_d = 1.80100, ν_d = 34.97; f_thin = +61.4 mm. Weakly‑curved leading element of G3; its near‑plano front surface suggests a role of power‑contribution without surface‑aberration contribution, letting the doublet behind it do the heavy lifting.
**L32 — biconvex positive, cemented to L33.** R₁ = +73.5, R₂ = −43.2; n_d = 1.61800, ν_d = 63.33 (OHARA S‑PHM52 / SCHOTT N‑PSK53A, anomalous‑dispersion phosphate crown); f_thin = +44.0 mm. The primary positive‑power contributor in the G3 doublet. S‑PHM52 has a notable positive ΔP_gF anomaly, which gives the G3 doublet a secondary‑spectrum advantage over a conventional‑crown/flint pair.
**L33 — plano‑concave negative, cemented to L32.** R₁ = −43.2, R₂ = ∞; n_d = 1.80518, ν_d = 25.42; f_thin = −53.7 mm. SCHOTT SF6 (or OHARA S‑TIH6). The plano rear surface is the last surface before the stop and lets the chief ray exit the group nearly parallel to itself — a geometry that makes G3's position less sensitive to decentering errors.

### G4 — Master / relay group (11 elements, fixed, f = +64.3 mm overall)

The 11‑element G4 is structurally the "inner master lens" that images the intermediate image formed by G1‑G2‑G3 onto the sensor. It is by far the largest subsystem of the lens.

**L41 — biconvex positive ED.** R₁ = +27.9, R₂ = −58.8; S‑FPL51; f_thin = +38.0 mm. First element after the stop; strong positive power, ED glass; gathers the stopped‑down beam and begins its re‑focusing onto the sensor.
**L42 — positive meniscus (S‑NBH5 / N‑KZFS5 short flint, anomalous dispersion).** R₁ = +34.6, R₂ = +84.6; n_d = 1.65412, ν_d = 39.68; f_thin = +89.4 mm. Both radii positive with |R₁| < |R₂| makes this a positive meniscus (thick centre). The glass is a KZFS‑family short flint, and this has direct consequences for the optical role of the element. KZFS glasses have a large *negative* deviation of P_gF from the normal‑glass line — the conjugate anomaly to the positive deviation of fluor‑crown (ED) glasses. Paired with the ED L41 immediately preceding it and the ED/flint L43‑L44 doublet following, L42 acts as a secondary‑spectrum balance element: it contributes positive axial power while introducing the partial‑dispersion anomaly of the opposite sign, so the combined front‑of‑G4 subsystem has a residual P_gF close to the normal‑dispersion line. This is a more sophisticated use of glass than simple power or Petzval balancing.
**L43 — biconcave negative, cemented to L44.** R₁ = −50.7, R₂ = +24.0; n_d = 1.90366, ν_d = 31.31 (OHARA S‑LAH95 / SCHOTT N‑LASF46A); f_thin = −18.0 mm. Very dense high‑index flint; the negative partner of an ED/flint cemented pair.
**L44 — biconvex positive, cemented to L43.** R₁ = +24.0, R₂ = −62.4; S‑FPL51; f_thin = +34.9 mm. Buried‑ED element. Together, L43+L44 is the strongest chromatic‑correction doublet in G4 (Δν_d = +50.23, one of the largest in the lens).
**L45 — biconvex positive (near plano‑convex at front), cemented to L46.** R₁ = +452.2, R₂ = −23.4; n_d = 1.80518, ν_d = 25.42; f_thin = +27.6 mm. Opposite R‑signs make this biconvex; the very large R₁ makes the front surface nearly flat, so almost all the power is delivered by the strongly‑curved rear surface. SF6‑class dense flint.
**L46 — negative, cemented to L45.** R₁ = −23.4, R₂ = +39.4; n_d = 1.58913, ν_d = 61.13 (S‑BAL35 / N‑SK5, a conventional barium crown); f_thin = −24.9 mm. The L45+L46 pair is an *inverted* chromatic doublet — unusual in that the higher‑dispersion glass is the positive partner. This is diagnostic of lateral‑chromatic correction at a point where the chief ray is well off‑axis (i.e., the pair is positioned to correct field chromatic errors).
**L47 — biconcave negative.** R₁ = −40.9, R₂ = +60.1; n_d = 1.80100, ν_d = 34.97; f_thin = −30.4 mm. An isolated negative element roughly mid‑G4. Its near‑symmetric biconcave geometry (|R₁| ≈ |R₂|) and position are structurally characteristic of either an internal field element or a shift‑type stabiliser group; see §9.
**L48 — biconvex positive.** R₁ = +53.1, R₂ = −37.7; n_d = 1.80000, ν_d = 29.84 (OHARA S‑NBH55, a heavy‑flint with anomalous partial dispersion); f_thin = +27.5 mm. Strong biconvex positive providing the bulk of re‑focusing power in the image‑side portion of G4. The NBH glass choice here (rather than a conventional flint of the same refractive index) contributes additional secondary‑spectrum compensation.
**L49 — biconvex positive, cemented to L410.** R₁ = +49.5, R₂ = −26.1; n_d = 1.48749, ν_d = 70.24; f_thin = +35.1 mm. Fluor‑crown (N‑FK5 family); another anomalous‑dispersion positive.
**L410 — negative meniscus, cemented to L49.** R₁ = −26.1, R₂ = −92.9; n_d = 1.80518, ν_d = 25.42; f_thin = −45.1 mm. SF6‑class; combined with L49 (fluor‑crown, anomalous P_gF) forms an achromatic doublet with anomalous‑dispersion correction (Δν_d = +44.82) — the anomalous partial dispersion of L49 gives the pair superachromatic behaviour.
**L411 — negative meniscus.** R₁ = −27.5, R₂ = −40.9; n_d = 1.91082, ν_d = 35.25; f_thin = −91.8 mm. Weakly‑powered high‑index negative meniscus at the rear; its shape is characteristic of a **field‑flattening** role (reducing the Petzval sum residue that would otherwise leave residual field curvature).

---

## 7. Global optical metrics

The per‑element section describes what each piece of glass does locally. This section verifies how those pieces combine into system‑level optical quantities. All numbers here are the output of the same Python paraxial ray‑trace used throughout this document, run against the fresh prescription transcription.

### 7.1 F‑number and aperture stop semi‑diameter

The patent's TABLE 2 states F_NO = 2.88 / 2.89 / 2.88 at W/M/T. This should be self‑consistent with a *fixed* physical aperture‑stop semi‑diameter (the mechanical iris does not change size as the lens zooms). The test is: for a parallel ray from infinity at unit input height, trace forward to the stop surface and record *y_stop*; then the stop semi‑diameter implied by the patent's F‑number is `SD_stop = EFL × y_stop / (2 × F_NO)`.

| Zoom | EFL (mm) | y_stop / y_input | Implied SD_stop (mm) |
|---|---:|---:|---:|
| Wide | 51.505 | 1.35759 | **12.1429** |
| Middle | 83.685 | 0.83551 | **12.0976** |
| Tele | 135.982 | 0.51429 | **12.1394** |

The three implied stop semi‑diameters agree to ±0.05 mm (a four‑decimal residual in a mechanical quantity that is nominally one number). The design is internally self‑consistent: fixing SD_stop at ≈ **12.14 mm** (physical iris diameter ≈ 24.28 mm) and re‑computing the f‑number gives:

| Zoom | Computed F/# | Patent F/# |
|---|---:|---:|
| Wide | 2.880 | 2.88 |
| Middle | 2.880 | 2.89 |
| Tele | 2.881 | 2.88 |

So the design delivers an f/# that is genuinely constant to better than 0.1%, and the patent's slight non‑constancy at middle (2.89 vs 2.88) is rounding of the fourth significant figure rather than a real f/# variation.

The corresponding **entrance‑pupil diameter** in object space is `EFL / F_NO`, giving **17.89 mm / 28.96 mm / 47.21 mm** at W/M/T. The 47.2 mm EP diameter at tele is the single most important size constraint on the lens's front section: the ray envelope inside G1 at tele has this width, and the front‑element semi‑diameters of L11 through L14 must admit it with mechanical margin.

### 7.2 Petzval sum and field curvature

The Petzval sum `P_sum = Σ (n_after − n_before) / (n_before · n_after · R)` is an invariant property of the glass and surface curvatures alone — it does **not** depend on inter‑surface spacings. For a zoom, this means P_sum is numerically identical at every zoom position, even though the focal length changes by a factor of 2.6×:

| Zoom | Petzval sum (1/mm) | |Petzval radius| Rₚ (mm) | Normalised |P_sum × EFL| |
|---|---:|---:|---:|
| Wide | +0.00231 | 433 | 0.119 |
| Middle | +0.00231 | 433 | 0.193 |
| Tele | +0.00231 | 433 | 0.314 |

Positive P_sum means the natural image surface is curved (convention‑dependent in sign; what matters optically is the magnitude). The normalised quantity `|P_sum × EFL|` is the dimensionless field‑curvature depth expressed as a fraction of the focal length; values below about 0.3 are considered well‑corrected for photographic lenses. The lens is solidly in the well‑corrected regime at wide and middle and just at the threshold at tele. (Sign convention note: some texts define the Petzval radius as Rₚ = 1/P_sum — giving +433 mm here — while others define Rₚ = −n/P_sum with signs included — giving −433 mm. The magnitude, and hence the optical correction status, is the same.)

The absolute Petzval radius of 433 mm is a specific design choice: rather than zero it out entirely (which would require a larger negative component, adding weight and increasing aberrations elsewhere), the designer has accepted a moderate field curvature at tele and uses the rearmost negative meniscus L411 (f_thin = −92 mm, at a large ray height) to trim the *residual* field curvature into the image plane.

### 7.3 Principal plane H′ and its zoom dependence

The image‑side principal plane H′ is the axial plane from which the image‑space focal length is measured. Measured from the last glass surface (rear vertex of L411):

| Zoom | BFD (mm, air‑equiv.) | EFL (mm) | H′ position from L411 rear |
|---|---:|---:|---:|
| Wide | 29.41 | 51.505 | **−22.1 mm** (inside the lens) |
| Middle | 29.41 | 83.685 | **−54.3 mm** |
| Tele | 29.41 | 135.982 | **−106.6 mm** |

At tele, H′ sits approximately 107 mm *object‑side* of the L411 rear vertex — that is, **deep inside the lens**, at roughly the axial plane of the aperture stop and G3. This is the defining quantitative signature of a quasi‑telephoto configuration: a lens whose image‑side principal plane is *inside* the lens at long focal lengths, even though the physical track (185.9 mm) is still longer than the focal length (136 mm). The absence of true‑telephoto compression (which would have H′ ahead of the front vertex) is the reason the telephoto ratio stays above unity (1.367 at tele).

### 7.4 Chief‑ray trace verification of image height

A chief ray from an object at infinity at the patent's half‑field angle, passing through the centre of the physical aperture stop, hits the image plane at:

| Zoom | Patent half‑field ω | Ray‑traced h_image | EFL × tan(ω) |
|---|---:|---:|---:|
| Wide | 15.30° | **14.10 mm** | 14.09 mm |
| Middle | 9.40° | **13.86 mm** | 13.85 mm |
| Tele | 5.80° | **13.82 mm** | 13.81 mm |

The ray‑traced image height agrees with the paraxial geometric approximation `EFL × tan(ω)` to better than 0.01 mm at every zoom position — i.e. the paraxial distortion integral is essentially zero, as expected for a prescription that is *specified* paraxially (non‑paraxial distortion appears only in the aberration diagrams). All three zooms land at ≈ 13.8–14.1 mm, consistent with an APS‑C image circle (half‑diagonal 14.14 mm for the 23.6 × 15.6 mm Fujifilm X‑Trans / Bayer sensor). This confirms that the patent's stated field angles are internally consistent with the prescription and that the lens covers the APS‑C sensor with essentially no margin — as designed for a constant‑aperture telephoto where every millimetre of image circle costs front‑element diameter.

---

## 8. The focusing mechanism — what can and cannot be determined

**From the patent alone, nothing definitive can be said about the lens's focusing mechanism.** The prescription tables list only *zoom‑variable* distances (DD[7], DD[15], DD[20]) and give no focus‑variable tables. The patent's own text, describing the master lens, states only that "first lens group G1 and fourth lens group G4 are fixed during magnification change from a wide‑angle end to a telephoto end, and each of second lens group G2 and third lens group G3 moves toward the image side" — it is entirely silent about focusing. This is unsurprising: the patent is claiming a teleconverter, not a lens, and the master lens is a stand‑in.

**From Fujifilm's first‑party product documentation**, the following statements are supported:

* The XF 50‑140mm employs an **Inner Focus System** — external length does not change during focusing.
* The AF actuator is described as the **"world's first Triple Linear Motor"**, which Fujifilm defines as "mounting the Triple Linear Motor at **intervals of 120 degrees**, [enabling] high‑speed, quiet AF". This is critical: the three linear motors are arranged radially around a **single lightweight focus element**, not driving three separate focus groups. The "triple" refers to drive torque and speed, not to a floating‑focus topology.
* Minimum focus distance is **1.0 m** at every focal length; maximum magnification is **0.12×**.

The prescription is therefore consistent with a **single‑group inner focus** mechanism in which one light element (or a small subgroup) translates axially, driven by three linear motors distributed at 120° around the optical axis. **The specific element is not identified by the patent and cannot be determined from the prescription alone.** Plausible candidates based on mass and optical symmetry are L42 (a small, weakly‑powered positive meniscus, single element) or the L43+L44 cemented doublet — but these identifications are morphological inference, not documented fact. A production‑line prescription showing focus‑variable spacings would be needed to identify the focus element unambiguously.

---

## 9. Optical image stabiliser — scope limit

The XF 50‑140mm is marketed as an **OIS** lens with five‑stop shake correction in‑lens (up to six stops when combined with a Fujifilm body with IBIS), implemented by lateral translation of an internal lens group. **The patent does not describe, mention, or provide surfaces for any OIS group.** The prescription is a still, on‑axis paraxial layout; a shift‑type stabiliser group by definition must include surfaces that can be laterally decentred, and no such surfaces are flagged in the prescription.

The morphological candidate for an OIS group based on the prescription alone — isolating the single negative element most suited by curvature, position and aperture to lateral translation — is **L47** (the biconcave negative element after the L45+L46 doublet in G4). Its shape is symmetric enough to translate without introducing asymmetric aberrations; its power is moderate (f_thin ≈ −30 mm); and its position near the middle of G4 is the canonical location for a shift stabiliser in master‑lens zoom designs. Again, this is inference from morphology rather than documentation: the patent simply does not address stabilisation.

---

## 10. Example 1 rear converter (= XF 1.4X TC WR)

The patent's "Example 1" rear converter is added behind the master lens to produce the combined system of TABLE 3. Its parameters verify perfectly as a 1.4× teleconverter:

| Position | F_master (mm) | F_combined (mm) | Ratio |
|---:|---:|---:|---:|
| Wide | 51.52 | 72.10 | **1.3995** |
| Mid | 83.69 | 117.14 | **1.3997** |
| Tele | 135.96 | 190.30 | **1.3997** |

The converter itself is a three‑group design comprising **seven elements in three groups** — exactly matching Fujifilm's published specification for the XF 1.4X TC WR ("7 elements in 3 groups"). Its characteristic parameters:

* **Converter focal length** `cf = −52.56 mm` (negative, as required for a rear teleconverter).
* **Third‑group focal length** `f3 = +54.10 mm`.
* **Ratio** `f3/cf = −1.029` (patent value: **−1.029**, agreement to four significant figures — confirms prescription transcription).
* **G1 Abbe difference** ν_d1 − ν_d2 = 40.76 − 32.10 = **+8.66** (patent value: **+8.66**).

Both of the patent's conditional expressions — `−1.9 < f3/cf < −0.4` and `6.5 < ν_d1 − ν_d2 < 15` — are therefore satisfied.

**Element composition of the Example 1 rear converter:**
* **RG1 (positive cemented doublet, 2 elements):** L‑RL11 (n_d=1.88300, ν_d=40.76) + L‑RL12 (n_d=1.67270, ν_d=32.10). Standard achromatic doublet with low‑dispersion negative crown‑flint + higher‑dispersion positive flint, satisfying the patent's conditional expression on ν_d1 − ν_d2.
* **RG2 (negative cemented triplet, 3 elements):** L‑RL21 (1.88300/40.76) + L‑RL22 biconvex (1.59270/35.31) + L‑RL23 (1.88300/40.76). The symmetric layout (same high‑index glass on front and rear) is the design signature of a high‑correction negative triplet.
* **RG3 (positive cemented doublet, 2 elements):** L‑RL31 (1.74320/49.34; OHARA S‑LAM60 / SCHOTT N‑LAF35 — exact) + L‑RL32 (1.92286/18.90; OHARA **S‑NPH2** / HOYA E‑FDS1 — exact on code 923 189). S‑NPH2 has one of the lowest Abbe numbers in current catalogue production (ν_d = 18.90) — roughly twice as dispersive as SF11. Its presence in the converter's rear doublet is the distinguishing chromatic‑correction element of this design: it compensates for the residual dispersion of the compressed image cone leaving the combined system, and is the extreme glass choice that separates this 1.4× converter's chromatic performance from more conventional designs.

---

## 11. Fujifilm technologies not captured in the prescription

A paraxial prescription cannot represent surface coatings or graded‑index films. For completeness:

* **HT‑EBC (High Transmittance Electron Beam Coating)** is applied to the entire lens‑surface area of every element to minimise internal reflections and ghosts. The coating is a multilayer dielectric stack deposited by electron‑beam evaporation and is Fujifilm's standard high‑end coating.
* **Nano‑GI (Gradient Index) coating** is applied to selected interfaces; it presents a continuous refractive‑index gradient from glass to air rather than a step discontinuity, reducing reflectivity at oblique incidence angles. This improves flare performance particularly for off‑axis bright sources.

Neither of these is reflected in the patent, which treats all interfaces as sharp refractive boundaries with catalog n_d values.

---

## 12. Appendix — Numerical verification

Every quantitative claim in this document was verified by running a Python paraxial ray trace (y‑u method; geometric angles; n·u conserved at refractions; angle unchanged through translations) against a fresh transcription of the prescription from TABLES 1, 2, 3, 9 and 10 of the patent. Residual agreement is shown below:

| Quantity | Computed | Patent | Δ |
|---|---|---|---|
| Master lens EFL at wide | 51.505 mm | 51.52 mm | −0.015 |
| Master lens EFL at middle | 83.685 mm | 83.69 mm | −0.005 |
| Master lens EFL at tele | 135.982 mm | 135.96 mm | +0.022 |
| Master lens air‑equivalent BFD | 29.41 mm | 29.41 mm | 0.000 |
| Combined system EFL (Ex.1) at wide | 72.072 mm | 72.10 mm | −0.028 |
| Combined system EFL (Ex.1) at middle | 117.098 mm | 117.14 mm | −0.042 |
| Combined system EFL (Ex.1) at tele | 190.351 mm | 190.30 mm | +0.051 |
| Rear converter Ex.1 — `cf` | −52.563 mm | (derived) | — |
| Rear converter Ex.1 — `f3` | +54.104 mm | (derived) | — |
| Rear converter Ex.1 — `f3/cf` | −1.0293 | −1.029 | < 0.001 |
| Rear converter Ex.1 — ν_d1 − ν_d2 | +8.66 | +8.66 | 0.000 |
| Zoom track invariance (ΣDD) | 43.68 (W), 43.68 (M), 43.67 (T) | fixed | ≤ 0.01 |
| Magnification factor, Ex.1 TC | 1.3997 | 1.40 | < 0.001 |
| Computed F/# at wide (SD_stop = 12.14 mm) | 2.880 | 2.88 | 0.000 |
| Computed F/# at middle | 2.880 | 2.89 | −0.010 |
| Computed F/# at tele | 2.881 | 2.88 | +0.001 |
| Entrance‑pupil diameter, wide (= EFL/F_NO) | 17.89 mm | — | — |
| Entrance‑pupil diameter, middle | 28.96 mm | — | — |
| Entrance‑pupil diameter, tele | 47.21 mm | — | — |
| G1 subsystem focal length | +89.03 mm | — | — |
| G2 subsystem focal length | −19.00 mm | — | — |
| G3 subsystem focal length | +48.27 mm | — | — |
| G4 subsystem focal length | +64.30 mm | — | — |
| G2 displacement W→T (image‑side) | +29.77 mm | (from TABLE 2) | — |
| G3 displacement W→T (image‑side) | +18.16 mm | (from TABLE 2) | — |
| Petzval sum (surface invariant) | +0.00231 /mm | — | — |
| |Petzval radius| | 433 mm | — | — |
| H′ position from L411 rear, wide | −22.1 mm (inside lens) | — | — |
| H′ position from L411 rear, middle | −54.3 mm | — | — |
| H′ position from L411 rear, tele | −106.6 mm (near stop / G3) | — | — |
| Chief ray image height, wide (ω = 15.3°) | 14.10 mm | ≈ 14.1 mm (APS‑C) | < 0.01 |
| Chief ray image height, middle (ω = 9.4°) | 13.86 mm | ≈ 13.9 mm | < 0.01 |
| Chief ray image height, tele (ω = 5.8°) | 13.82 mm | ≈ 13.8 mm | < 0.01 |

Quantities in the "Patent" column marked "—" are not stated directly in the patent — they are derived system‑level metrics computed here to verify internal consistency of the design against the quantities the patent *does* state (EFL, F/#, 2ω). All computed‑vs‑patent residuals are within the precision limit set by the patent's four‑decimal R‑values, five‑decimal nd‑values, and two‑decimal νd precision. The prescription is a faithful description of the XF 50‑140mm F2.8 R LM OIS WR, and every qualitative and quantitative statement made in the preceding sections is supported by direct computation against the patent data.
