# An Optical Analysis of French Patent FR 1.066.698, Example 1

**A 1952 Carl Zeiss Jena Tessar redesign, attributed to Harry Zöllner**

---

## 1. Patent provenance

| Field | Value |
|---|---|
| Patent number | FR 1.066.698 |
| Title | *Objectif à correction sphérique, chromatique et astigmatique* (objective with spherical, chromatic, and astigmatic correction) |
| Applicant | VEB Optik Carl Zeiss Jena (East Germany) |
| Filing date | 19 November 1952, 16 h 46 min, Paris |
| Grant date | 20 January 1954 |
| Publication date | 9 June 1954 |
| Industrial class | Gr. 12, Cl. 2 |
| Agent | J. Casanova (Cabinet Armengaud jeune), Paris |
| Examples disclosed | Two (Examples 1 and 2), normalized to focal length *f* = 100 |

The applicant — *Volkseigener Betrieb* Optik Carl Zeiss Jena — is the nationalised, East-German successor to the original Zeiss firm; the Jena works passed into the Soviet zone of occupation in 1945 and was nationalised as a *VEB* in 1948. By 1952, Jena's optical-design office was being rebuilt from scratch by personnel who included **Harry Zöllner**, who is reported to have transferred from Voigtländer's Brunswick *Rechensbüro* (computing office) to Jena in the immediate post-war period and would later become head of photographic-objective development. Zöllner's tenure at VEB Carl Zeiss Jena is independently documented from at least 1948 (the Biometar 80 mm f/2.8 redesign for the Rolleiflex 2.8) and August 1949 (the Flektogon 35 mm f/2.8 with Rudolf Solisch). Zöllner is the consensus attribution among lens historians for this 1952 Tessar recalculation, although the patent itself (in keeping with East-German practice) names only the firm. The reader should treat that attribution — and the specific 1946 transfer date — as strong but not formally documented inferences.

This document analyzes only **Example 1**, in line with the user's question. Example 2 is a closely related variant — same architecture, same L4 glass, but with a lower-index higher-Abbe glass for L1 (*n*<sub>d</sub> = 1.63763 instead of 1.67786) compensated by stronger curvatures (*r*<sub>1</sub> = 37.85 instead of 39.31; *r*<sub>5</sub> = 409.6 instead of 763.5) and slightly thinner L2 and L4. Both examples satisfy the same patent claim conditions (Section 9). The analysis below holds with only minor numerical changes for Example 2.

---

## 2. What the patent actually claims

Read carefully, the patent's claim is narrower than its title suggests. The opening paragraph states:

> The present invention concerns an objective for photography and projection, in which spherical, chromatic, and astigmatic aberrations are corrected, and which contains a negative lens interposed between two positive elements, the element on the object side being a single positive lens, while the element on the image side is a group of two lenses cemented at a positive cementing surface. *An objective of this form is of the type known as 'Tessar'.*

The patent's contribution is therefore not the architecture (which Paul Rudolph patented for Zeiss in 1902 and which had been in production for half a century by 1952), but a recalculation that produces a sharp f/2.8 Tessar with the new generation of post-war optical glasses. f/2.8 Tessars were not new in 1952 — Willy Merté and Ernst Wandersleb had calculated an f/2.8 Tessar in 1930, and a 24×36-coverage Tessar 50 mm f/2.8 had been in production on the Zeiss Ikon Contax I from 1932. Those earlier f/2.8 Tessars were known to be soft at full aperture, however; the f/3.5 series remained the practical "high-image-quality" Tessar in widespread production through the 1940s, and the patent text frames the improvement as raising the usable maximum aperture of the high-quality production Tessar beyond f/3.5. The text identifies the improvement as resting on a particular choice of glasses, and condenses the prescription into four numerical conditions:

1. The sum of the four refractive indices, *Σ n*<sub>d</sub> > 6.44
2. The sum of the four Abbe numbers, *Σ ν*<sub>d</sub> > 180
3. At *f* = 100, the front-element first radius *R*<sub>1</sub> > 35
4. At *f* = 100, the cementing-surface radius *R*<sub>6</sub> > 32

All four conditions are verified for Example 1 below.

The patent is **silent on focal length, on aperture (f-number), and on the focusing mechanism**. It is presented in the manner customary for the period: a normalized prescription at *f* = 100 from which the manufacturer can scale to any production focal length.

---

## 3. Identification with the production Tessar 50 mm f/2.8

The user has identified this patent with the Carl Zeiss Jena Tessar 50 mm f/2.8 — the M42-mount lens that became the standard prime on Praktica and Pentacon SLRs. That identification is consistent with everything the patent says, and consistent with a back-focal-distance check (Section 12 below), but it should be stated honestly that **the patent itself does not specify a focal length**. The same prescription scales equally well to the 80 mm f/2.8 Tessar that VEB Carl Zeiss Jena introduced for the Exakta 6×6 medium-format SLR in the same period. Both lenses are credibly traceable to this 1952 recalculation, and the patent applies generically to the family.

The numerical analysis that follows is performed at the patent-normalized scale (*f* = 100). Where production-relevant numbers are useful, they are reported at both 50 mm and 80 mm scale.

---

## 4. The optical prescription

Example 1, exactly as printed in the patent (page 1, right column), with surfaces numbered from the object side:

| # | Surface | Radius *r* | Thickness / gap | Glass after | *n*<sub>d</sub> | *ν*<sub>d</sub> |
|---|---|---:|---:|---|---:|---:|
| 1 | L1 front (convex) | +39.310 | *d*<sub>1</sub> = 10.30 | L1 | 1.67786 | 55.5 |
| 2 | L1 rear (plano)   | ∞       | *l*  = 6.10  | air |  |  |
| 3 | L2 front (concave)| −71.040 | *d*<sub>2</sub> = 2.90  | L2 | 1.61200 | 37.2 |
| 4 | L2 rear (concave) | +33.635 | *b*<sub>1</sub> = 3.95  | air |  |  |
|   | **STO** (diaphragm) | — | *b*<sub>2</sub> = 3.50 | air |  |  |
| 5 | L3 front          | +763.55 | *d*<sub>3</sub> = 2.39  | L3 | 1.57380 | 42.5 |
| 6 | L3/L4 cementing   | +32.967 | *d*<sub>4</sub> = 10.00 | L4 | 1.66080 | 50.8 |
| 7 | L4 rear           | −49.046 | — (image side) | air |  |  |

Sign convention: *r* > 0 when the surface's centre of curvature lies to the image side of the surface (i.e., the surface is convex toward the object). All surfaces are spherical; *r*<sub>2</sub> = ∞ is a true plano (a degenerate sphere of infinite radius).

The diaphragm (the *D* in the patent's figure) sits in the air space between L2 and L3, 3.95 normalized units behind the rear surface of L2 and 3.50 units in front of the front surface of L3.

Scaled to a 50 mm production focal length (scale factor *k* = 0.5006), the normalized values become:

| Quantity | At *f* = 100 | At 50 mm |
|---|---:|---:|
| *r*<sub>1</sub> | +39.31  | +19.68 |
| *r*<sub>3</sub> | −71.04  | −35.56 |
| *r*<sub>4</sub> | +33.64  | +16.84 |
| *r*<sub>5</sub> | +763.55 | +382.2 |
| *r*<sub>6</sub> | +32.97  | +16.50 |
| *r*<sub>7</sub> | −49.05  | −24.55 |
| Lens length (*r*<sub>1</sub> → *r*<sub>7</sub>) | 39.14  | 19.59 |
| Back focal distance | 80.55 | 40.32 |
| Total track (*r*<sub>1</sub> → image) | 119.69 | 59.91 |

---

## 5. Architecture and the ray-geometry layout

The Tessar is a four-element, three-group design — two singlets and a cemented doublet, with the diaphragm between the second and third groups:

> **L1 (singlet, +)  ··air··  L2 (singlet, −)  ··air, STO, air··  L3 + L4 (cemented doublet, +)**

Figure 1 shows the design at production scale (50 mm), with the axial marginal ray traced for f/2.8 (parallel from infinity, entering 8.93 mm above the axis) and the principal ray for the 23.4° corner field (the diagonal half-angle of a 24×36 mm frame at 50 mm focal length) traced through the centre of the diaphragm.

![Figure 1: Layout and ray trace](fig_layout.png)

*Figure 1 — Tessar layout from FR 1.066.698 Example 1, scaled to 50 mm and f/2.8. Solid blue: axial marginal ray (object at infinity, entering at the f/2.8 entrance-pupil semi-diameter of 8.93 mm). Dashed red: chief ray for a 23.4° corner field (24×36 mm frame), passing through the centre of the diaphragm. Back focal distance 40.32 mm; total track 59.91 mm. The diaphragm sits in the air space between L2 and the doublet.*

A quantitative summary of the marginal ray's height through the system (for an entering ray at unit height, *y* = 1, *u* = 0):

| At surface | *y* | After-surface *u* |
|---|---:|---:|
| 1 (r<sub>1</sub>, L1 front) | 1.0000 | −0.010277 |
| 2 (r<sub>2</sub>, L1 rear)  | 0.8941 | −0.017244 |
| 3 (r<sub>3</sub>, L2 front) | 0.7890 | −0.006481 |
| 4 (r<sub>4</sub>, L2 rear)  | 0.7702 | +0.003566 |
| **STO** | **0.7842** | +0.003566 |
| 5 (r<sub>5</sub>, L3 front) | 0.7967 | +0.001885 |
| 6 (r<sub>6</sub>, cemented) | 0.8012 | +0.000514 |
| 7 (r<sub>7</sub>, L4 rear)  | 0.8064 | −0.010011 |

The exit-side slope after r<sub>7</sub>, *u* = −0.010011, gives the system focal length 1/|*u*| = 99.8866 — agreeing with the patent's nominal *f* = 100 to within 0.11 % (the discrepancy is the patent's four-significant-figure rounding of the thicknesses). The marginal-ray height at the diaphragm, 0.78425, gives an entrance-pupil-to-stop-aperture ratio of 1.275, used in Section 12 to back out a production stop diameter.

---

## 6. Element by element

I'll walk through the four lenses in the order light meets them.

### L1 — front positive, plano-convex high-index crown

Radii **+39.31, ∞** at *f* = 100 (i.e., a flat rear surface). Thickness 10.30 — the thickest element in the design. Glass: *n*<sub>d</sub> = 1.67786, *ν*<sub>d</sub> = 55.5.

Computed thick-lens focal length when isolated in air: **+57.99 mm** (at *f* = 100). This is a single positive crown that does roughly 40% of the converging work of the system and that produces the largest single *positive* Petzval contribution in the design (+0.0103, from *r*<sub>1</sub>; see Figure 3 below).

The fact that the rear is **exactly plano** (rather than weakly biconvex, the more common Tessar choice) is unusual. It costs L1 a little degree of design freedom but simplifies one of the four critical Tessar surfaces — the rear surface of L1 sees a substantial index step (1.67786 → 1.000) and a plano face is the cheapest spherical to grind, test, and centre. It is also acceptable here because the high-index crown gives strong refraction at *r*<sub>1</sub> alone; the design does not need additional curvature at *r*<sub>2</sub> to reach the required positive power.

The choice of **lanthanum crown** for L1 — index ≈ 1.68 with a respectable Abbe number 55 — is the single most important glass choice in the patent. Pre-war Tessars (e.g., the Merté and Wandersleb f/2.8 of 1930) had to settle for ordinary borosilicate crowns of index ~1.51 and were limited to f/3.5 in series production with acceptable image quality. Post-war availability of lanthanum-bearing optical glasses — the canonical Western reference being Schott's LaK series — allowed designers to reach a given converging power with substantially less surface curvature, which in turn linearises the spherical aberration and reduces the higher-order residuals. This is the lever the 1952 patent pulls.

### L2 — biconcave flint, the negative middle

Radii **−71.04, +33.635**. Thickness 2.90. Glass: *n*<sub>d</sub> = 1.61200, *ν*<sub>d</sub> = 37.2.

Isolated thick-lens focal length: **−36.91 mm**. The rear surface (33.6) is roughly twice as strongly curved as the front (71.0); both are concave outward, making this a biconcave element with the more strongly curved face toward the diaphragm.

L2 is the field-flattening and astigmatism-correcting element of the Tessar. Its negative power is what makes the four-glass three-group form — rather than a simple symmetric doublet — possible. Its ordinary-flint glass (*ν*<sub>d</sub> = 37.2, sitting in the same region of the Abbe diagram as the Schott F2/F3 reference glasses) is a deliberate choice: it sits at high dispersion so that a small amount of negative power can do a large amount of chromatic compensation, balancing the chromatic effects of L1 and the rear doublet.

In the Petzval analysis (Section 10), L2's two surfaces together contribute −0.01663 to the Petzval sum, more than cancelling the +0.01028 contribution of L1's front surface. This is precisely how a Tessar achieves a flat field with only one negative element.

### L3 — front element of the cemented doublet

Radii **+763.55, +32.967**. Thickness 2.39. Glass: *n*<sub>d</sub> = 1.57380, *ν*<sub>d</sub> = 42.5.

The front surface of L3 is barely curved at all (R ≈ 7.6 × the focal length) — close to flat in practice. The rear of L3 *is* the cementing surface to L4, so this element has no truly independent existence; computed in isolation in air it is a weak negative meniscus of focal length about −60 mm, but inside the doublet the relevant interface is the cementing surface, where light passes from glass *n* = 1.57380 to glass *n* = 1.66080.

The patent text describes that interface as a *surface de collage positive* — a positive cementing surface — meaning that the index step is in the direction (low-to-high) that adds positive power at a convex-toward-image surface. A direct calculation gives the surface power

  *P*<sub>cement</sub> = (*n*<sub>4</sub> − *n*<sub>3</sub>) / *R*<sub>6</sub> = (1.66080 − 1.57380) / 32.967 = **+2.639 × 10⁻³ mm⁻¹**

confirming the patent's description. That positive cementing surface is one of the design's principal degrees of freedom, used both for spherical-aberration balancing and for color correction.

### L4 — rear positive, biconvex extra dense crown

Radii **+32.967, −49.046**. Thickness 10.00 — tied with L1 for thickest element. Glass: *n*<sub>d</sub> = 1.66080, *ν*<sub>d</sub> = 50.8.

L4's air-side rear surface is at *r*<sub>7</sub> = −49.05 (strongly convex toward the image). Together with its cemented front, it is the strongest converging element of the design.

### The cemented doublet as a whole

Treated as a single thick-lens unit, the L3+L4 doublet has focal length **+60.35 mm** at *f* = 100. The whole-system focal length is 99.89, the front singlet L1 is +57.99, and L2 is −36.91; the doublet and L1 each carry roughly comparable shares of the converging work, with the doublet slightly the stronger of the two. A useful way to think of this is: L1 and the rear doublet together act as a near-balanced pair of positive groups straddling the diaphragm, with L2 inserted between them as the negative correction member that flattens the field and absorbs higher-order residuals.

The two glasses of the doublet, *ν*<sub>3</sub> = 42.5 and *ν*<sub>4</sub> = 50.8, are not far apart on the Abbe diagram; the doublet alone is **not** fully achromatized. Computing the standard thin-lens achromat residual,

  *P*<sub>3</sub> / *ν*<sub>3</sub> + *P*<sub>4</sub> / *ν*<sub>4</sub>  = (−1.665 × 10⁻²) / 42.5 + (3.352 × 10⁻²) / 50.8  = **+2.68 × 10⁻⁴**

which is roughly 1.6 % of the doublet's thin-lens power sum *P*<sub>3</sub> + *P*<sub>4</sub> = 1.687 × 10⁻² (the doublet's actual paraxial power, computed thick-lens, is 1.657 × 10⁻², which gives the same percentage to the precision quoted here). This residual is intentional: in a Tessar the doublet is *not* sized to be self-achromatic; it is sized so that its residual cancels the residuals from L1 and L2 at the system level. Section 10 shows the system-level result.

---

## 7. Aspheric surfaces — there are none, and that is the point

Every radius listed in the patent is the radius of a **spherical** surface. The only "infinity" in the prescription is *r*<sub>2</sub> = ∞, which is a true plano — not an aspheric base curve, not a vertex radius for a polynomial sag — simply a flat surface. There are no conic constants, no aspheric expansion coefficients, no figure terms in the prescription at all.

That absence is historically significant. The Tessar's image quality at large apertures was an open optical-design problem in the 1930s and 1940s. Earlier Zeiss work by Willy Merté and Ernst Wandersleb produced a non-aspheric f/2.8 Tessar in 1930, but it was known to be soft at full aperture; Merté's later 1930s prototypes pushing toward f/2 in 50 mm focal length showed the architecture *could* be opened up further, but only by introducing aspheric surfaces — surfaces that were uneconomical to produce in series with the manufacturing technology of the period (computer-controlled aspheric grinding was decades away; aspheres in this era were either hand-figured one piece at a time or molded with significant figure error).

Zöllner's 1952 redesign — the present patent — is interesting precisely because it produces a sharp f/2.8 Tessar without any aspheres, exceeding the image quality of the 1930 f/2.8 design without resorting to the aspheric figure terms that Merté's faster prototypes had needed. It does so by substituting glass for figure: where Merté's f/2 prototypes used aspheric departures to linearise the spherical aberration, the 1952 design uses high-index lanthanum crown (L1) and dense crown (L4) to do the same job by reducing the surface curvatures required for a given power. A weaker-curved spherical surface produces less higher-order spherical aberration than a stronger-curved spherical surface; substituting index for curvature at L1 and L4, and combining that with the negative biconcave flint L2 to absorb residuals, suffices to bring the design to a sharp f/2.8 with all-spherical surfaces and series-producible glasses.

This is also why the patent's central claim is a glass condition (Σ*n*<sub>d</sub> > 6.44, Σ*ν*<sub>d</sub> > 180) and not a geometric one — the glass *is* the invention.

---

## 8. Glass identification

The patent reports the four glasses by their dispersion data only — the standard practice for European patents of the period — and does not name the manufacturer or catalogue. The four glasses and their families are summarised below, with approximate modern reference glasses for orientation. The figure shows them on the Abbe diagram alongside several plausible modern equivalents.

![Figure 2: Abbe diagram of the four patent glasses](fig_abbe.png)

*Figure 2 — Abbe diagram of the four glasses of FR 1.066.698 Example 1 (filled circles), with modern Schott reference glasses (gray crosses) overlaid for orientation. The shaded regions denote the conventional optical-glass families (LaK, SSK, BaSF/BaF, LF/F, etc.). L1 (1.67786, 55.5) sits essentially on top of Schott N-LaK12 (1.67790, 55.20); L4 (1.66080, 50.8) sits very close to Schott N-SSK5 (1.65844, 50.88). L2 and L3 fall in the F and LF regions respectively, without exact modern catalog matches.*

| Element | Six-digit code | *n*<sub>d</sub> | *ν*<sub>d</sub> | Family | Approx. modern reference |
|---|---|---:|---:|---|---|
| L1 | 678555 | 1.67786 | 55.5 | Lanthanum crown (LaK) | **Schott N-LaK12** (1.67790, 55.20) — essentially exact match (Δ*n* = 0.00004, Δ*ν* = 0.30) |
| L2 | 612372 | 1.61200 | 37.2 | Light/ordinary flint (F) | Schott F2 (1.62004, 36.37) / legacy F3 (1.61293, 36.97) — close in family, not exact |
| L3 | 574425 | 1.57380 | 42.5 | Light flint (LF) | HOYA legacy LF6 (1.57125, 42.83) — closest historic match; Schott LF5 (1.58144, 40.85) is the modern in-family reference |
| L4 | 661508 | 1.66080 | 50.8 | Extra dense crown (SSK family) | **Schott N-SSK5** (1.65844, 50.88) — very close (Δ*n* = 0.0024, Δ*ν* = 0.08) |

Following the project's three-tier confidence framework for glass identification:

- **Family-level identification (high confidence)**: All four glasses sit cleanly in their named families on the Abbe diagram. L1 is unambiguously a lanthanum crown; L2 is unambiguously a light/ordinary flint; L3 is unambiguously a light flint; L4 sits squarely in the extra-dense-crown (SSK) region.
- **Catalog-level identification (mixed)**: Two of the four glasses *do* have essentially exact modern catalog matches — L1 ↔ Schott N-LaK12 (Δ*n* = 0.00004, Δ*ν* = 0.30) and L4 ↔ Schott N-SSK5 (Δ*n* = 0.0024, Δ*ν* = 0.08). Both are within ordinary catalog tolerance. The OHARA cross-reference table maps the six-digit code 678555 directly to HOYA LAC12, with N-LaK12 (Schott code 678552) listed as the very-close Schott analog in the same code group; this is the same "spot" on the Abbe diagram that L1 occupies. L2 and L3 have no exact modern match in any major Western catalog; the closest historic equivalents are legacy Schott F3 (for L2) and legacy HOYA LF6 (for L3), both family-correct but several Δν units off.
- **Manufacturer identification (not attempted)**: The four glasses themselves were almost certainly Jena house glasses from the Jena-Glaswerk Schott & Genossen successor firm in the Soviet zone, not from any Western catalog. Importantly, in 1952 — the exact year of the patent — the original Schott firm was relocating from Jena to Mainz (the first glass casting at the new Mainz works was on 10 May 1952), splitting the German optical-glass industry into a West-German Schott (Mainz) and an East-German VEB Jenaer Glaswerk (Jena). VEB Carl Zeiss Jena's design office would have used the East-German Jena-house glass inventory.

The historical importance of L1 and L4 deserves emphasis. **L1 is a lanthanum-bearing crown.** Lanthanum oxide as an optical-glass component was a 1930s discovery (the foundational work is Morey at Eastman Kodak, with parallel work in Jena and at Schott itself), but mass production sufficient to support photographic objectives only became reliable post-war. The first widely-available high-index, low-dispersion crowns — the property combination that makes a glass land in the upper-left of the Abbe diagram, the so-called "rare-earth corner" — were realised in the late 1940s. Using one for L1 is what makes the entire 1952 redesign possible.

**L4 is an extra dense crown (SSK family)** — also a relatively high-index (1.66) glass with moderate Abbe number (50.8). Like the lanthanum crown of L1, it provides strong refraction at low curvature. The pairing of a lanthanum crown (front) and an extra-dense crown (rear positive) across a negative middle element is a signature of post-war Zeiss design and would also appear, in different proportions, in the contemporaneous CZJ Biotar and Pancolar designs.

---

## 9. Patent claim conditions, verified

The patent makes four numerical claims about the prescription. All four are verified for Example 1:

| Condition | Patent threshold | Example 1 value | Status |
|---|---|---|---|
| *R*<sub>1</sub> > 35 (at *f* = 100) | 35 | 39.310 | ✓ |
| *R*<sub>6</sub> > 32 (at *f* = 100) | 32 | 32.967 | ✓ |
| Σ *n*<sub>d</sub> > 6.44 | 6.44 | 6.52446 | ✓ |
| Σ *ν*<sub>d</sub> > 180 | 180 | 186.0  | ✓ |

The two radius conditions are bounds — *R*<sub>1</sub> is the front radius of L1 (kept large to limit its contribution to spherical aberration), and *R*<sub>6</sub> is the cementing surface (kept large enough that the cementing-surface power, equation in Section 6, stays in the right range).

For completeness, Example 2 also satisfies all four conditions, with *R*<sub>1</sub> = 37.85, *R*<sub>6</sub> = 32.23, Σ*n*<sub>d</sub> = 6.47968, Σ*ν*<sub>d</sub> = 185.9.

---

## 10. Field correction (Petzval)

The Petzval sum was computed surface by surface using the standard formula

  *P* = Σ<sub>surfaces</sub> (*n*′ − *n*) / (*n* · *n*′ · *R*)

(thin-air refraction omitted, only refracting surfaces summed). The result is in Figure 3 below.

![Figure 3: Per-surface Petzval contributions](fig_petzval.png)

*Figure 3 — Per-surface Petzval-sum contributions for FR 1.066.698 Example 1, at f = 100. Blue bars: positive contributions; red bars: negative. The horizontal dashed line marks the system total Σ = 3.245 × 10⁻³ mm⁻¹, which corresponds to a Petzval radius of 308 mm — about 3.08 × the system focal length.*

**Petzval radius / EFL = 3.08** is a textbook flat-field result for a Tessar — sufficient that, combined with adequate astigmatism correction, the design produces an acceptably flat tangential and sagittal field at full aperture across a 24×36 frame. The two surfaces of L2 (red bars) together contribute Δ*P* = −0.01663, more than cancelling the +0.01028 contribution of L1's front surface. The doublet's *r*<sub>7</sub> rear face (+0.00811) is the second-largest positive contributor; the cementing surface itself contributes very little (+0.00101) because the index step there is small.

This is the canonical Tessar Petzval-balancing: two strongly-curved positive air-side surfaces (*r*<sub>1</sub> and *r*<sub>7</sub>) and a strongly-curved negative element (L2) trading their contributions until the residual is small.

---

## 11. Chromatic correction

Tracing the marginal ray separately at three wavelengths — the Fraunhofer F line (486.1 nm), d line (587.6 nm), and C line (656.3 nm), with index dispersion modelled from the patent (*n*<sub>d</sub>, *ν*<sub>d</sub>) values via the standard normal-line approximation — gives back focal distances of:

| Wavelength | BFD (at *f* = 100) | EFL |
|---|---:|---:|
| F (486 nm) | 80.331 | 99.674 |
| d (587 nm) | 80.546 | 99.887 |
| C (656 nm) | 80.683 | 100.023 |

The longitudinal axial color **(F − C) = −0.352 mm at *f* = 100**, i.e., 0.35 % of the focal length. Scaled to a 50 mm production lens, that is **−176 µm of total spread** — but the spread is *not* symmetric about the d-line image plane. F (486 nm) focuses ~108 µm closer to the lens than d, and C (656 nm) focuses ~69 µm farther. The asymmetry is intrinsic to the dispersion of these glasses (the normal-line model places the F line further from the d line than the C line is from the d line, by a factor of 0.6 / 0.4 — and that asymmetry propagates through the system). For comparison, the depth of focus at f/2.8 for a 30 µm circle of confusion is ±84 µm, so the F image sits just past the boundary of acceptable defocus from d, while the C image stays comfortably inside it. This is the familiar Tessar behaviour at full aperture: well-corrected at d, with secondary spectrum just at the edge of visibility on a 35 mm frame; stopping down by one or two stops brings everything well inside the depth of focus. The sign — F focusing closer than C — is the normal direction of residual primary chromatic aberration in a glass system.

The doublet alone is *not* responsible for this correction — recall (Section 6) that the doublet has a 1.6 % achromatic residual on its own. The system-level chromatic correction comes from balancing that residual against the chromatic effects of L1 and L2; the patent's two glass-sum conditions (Σ*n*<sub>d</sub> and Σ*ν*<sub>d</sub>) are the constraints that keep this balance achievable across the four-element form.

---

## 12. Aperture and back-focus check, and the production-mount question

The patent does not state the f-number. However, it can be backed out by combining the patent's framing of an improvement beyond the f/3.5 production baseline (Section 2), the patent's stated improvement ("increased luminosity"), and the production lens identification.

The marginal-ray height at the diaphragm is *y* = 0.78425 (per unit entering height), so the entrance-pupil-to-stop-aperture ratio is 1.275. At candidate f-numbers the required stop semi-diameter (at *f* = 100) is:

| Aperture | Entrance-pupil semi-Ø | Required stop semi-Ø |
|---|---:|---:|
| f/3.5 | 14.27 | 11.19 |
| f/3.2 | 15.61 | 12.24 |
| f/2.8 | 17.84 | 13.99 |
| f/2.5 | 19.98 | 15.67 |

Scaled to a 50 mm production lens at f/2.8, the required stop semi-diameter is **7.0 mm** — physically realisable in the air space available between L2 and L3.

The **back focal distance** scales to **40.3 mm at 50 mm focal length**, which is consistent with the Praktica/Pentacon M42 mount (flange focal distance 45.46 mm, leaving a few mm of clearance for the rear lens cell inside the throat) and with the Exakta SLR mount (FFD 44.7 mm). At **80 mm focal length**, the BFD is 64.5 mm, comfortably accommodating the Exakta 6×6 medium-format SLR mount used by VEB Carl Zeiss Jena's 80 mm Tessar of the same period.

Both the M42 50 mm f/2.8 and the medium-format 80 mm f/2.8 production lenses are therefore consistent with this patent. The patent should be read as the architectural and glass-selection basis for that family of lenses, not specifically as the 50 mm f/2.8 alone.

---

## 13. Focusing mechanism

The patent is silent on focusing. It gives the optical prescription only — nothing about helicoid, mounts, or moving elements.

By every available source — manufacturer service documentation for the production CZJ Tessar 50 mm f/2.8 and 80 mm f/2.8, contemporaneous reviews, and the surviving design records summarized in third-party references (Lens Collectors' Vade Mecum, the Carl Zeiss historical archive at Jena) — the production lenses identified with this patent use **unit focusing**: the entire optical assembly translates as a single rigid block, driven by the lens helicoid, between the infinity stop and the close-focus stop. **No element moves relative to the others** during focusing. There is no "focusing element" in the sense that, e.g., a rear-focus zoom lens has one. (Tessars more broadly were not universally unit-focusing — Zeiss Ikon's Contaflex Super B and a number of midrange fixed-lens cameras used front-element-focusing Tessars, where only L1 translates and the rest of the lens is fixed. The CZJ M42 and Exakta production lenses identified with this patent are not in that category.)

This is the simplest possible focusing scheme and is appropriate for a fixed prime that does not need to maintain corrections at high magnifications. For the production CZJ 50 mm f/2.8 Tessar (M42 mount), close focus is typically 0.35 m (a magnification of about 0.18×); for the 80 mm version, close focus is typically 1.0 m. At those magnifications the residual loss of correction from unit focusing — principally a small increase in spherical aberration and a small worsening of field curvature — is acceptable and is well-known to users of the lens.

A Tessar optimised for high-magnification close-up work would require either a different prescription or an internal-focus or floating-element mechanism, and is outside the scope of the 1952 patent.

---

## 14. Summary

What the patent contributes — what makes it interesting beyond being "another Tessar" — is the demonstration that a four-element three-group Tessar can be calculated to f/2.8 with all-spherical surfaces by exploiting then-newly-available high-index glasses. The architectural moves (a positive front singlet, a negative biconcave middle, a positive cemented doublet behind the diaphragm) are Rudolph's. The numerical recalculation, the choice to use a lanthanum crown for L1 and an extra dense crown (SSK) for L4, and the avoidance of aspheric surfaces are this patent's contribution.

In quantitative summary for Example 1:

| Property | Value |
|---|---|
| Architecture | Four elements, three groups, Tessar form |
| Aspheric surfaces | None |
| Element 1 (L1) | +57.99 mm plano-convex (convex toward object), lanthanum crown (LaK family, ≈ Schott N-LaK12), n<sub>d</sub>=1.67786 |
| Element 2 (L2) | −36.91 mm biconcave, ordinary flint (F2/F3 family), n<sub>d</sub>=1.61200 |
| Cemented doublet (L3 + L4) | +60.35 mm, light flint (LF) cemented to extra dense crown (SSK family, ≈ Schott N-SSK5) at a positive cementing surface |
| System EFL | 99.89 (verified vs. nominal *f* = 100) |
| Back focal distance | 80.55 (at *f* = 100) → 40.32 mm (at 50 mm) → 64.51 mm (at 80 mm) |
| Petzval radius | 308 mm = 3.08 × EFL (flat field) |
| Longitudinal axial color (F−C) | 0.35% of EFL total spread; asymmetric (F closer than d by ≈108 µm at 50 mm; C farther by ≈69 µm) |
| Stop diameter at f/2.8, 50 mm | 14.0 mm full Ø |
| Focusing | Unit (entire lens block translates) |
| Patent claim conditions | All four satisfied (Σn=6.524, Σν=186.0, R<sub>1</sub>=39.31, R<sub>6</sub>=32.967) |
| Production correspondence | Compatible with both 50 mm f/2.8 (M42) and 80 mm f/2.8 (Exakta 6×6) |

The patent is, in short, the optical heart of the post-war Carl Zeiss Jena Tessar f/2.8 family — a textbook demonstration that a clever choice of glasses can substitute for both a faster aperture *and* the absence of aspheric surfaces, both of which had previously been thought necessary to achieve this level of performance in this form.

---

## Appendix A — Computational methodology

All numerical results in this document were independently computed in Python from the patent prescription. The calculations used the following conventions:

- **Paraxial (first-order) ray trace**, surface-by-surface, using the standard refraction equation *n*′ *u*′ = *n* *u* − *y* (*n*′ − *n*) / *R* and a free-space translate *y*′ = *y* + *u*′ *t*.
- **Petzval sum** by direct surface summation of (*n*′ − *n*) / (*n* · *n*′ · *R*).
- **Element focal lengths** by 2×2 ABCD matrix, treating each element thick (translation in glass at index *n*); thin-lens results reported only as a sanity check and noted as such.
- **Chromatic trace**: index at F and C wavelengths estimated from (*n*<sub>d</sub>, *ν*<sub>d</sub>) by the normal-line model *n*<sub>F</sub> = *n*<sub>d</sub> + 0.6 (*n*<sub>d</sub> − 1) / *ν*<sub>d</sub>, *n*<sub>C</sub> = *n*<sub>d</sub> − 0.4 (*n*<sub>d</sub> − 1) / *ν*<sub>d</sub>. This is sufficient for primary axial color estimation at the level of accuracy the patent itself supports (its glass data are reported to four significant figures in *n*<sub>d</sub> and three in *ν*<sub>d</sub>).
- **Diaphragm position**: the patent places the stop in the air gap between L2 rear (*r*<sub>4</sub>) and L3 front (*r*<sub>5</sub>), 3.95 normalized units behind L2 and 3.50 ahead of L3. The diaphragm refracts no rays; it only limits the marginal-ray height.
- **Sign convention**: radii positive when the centre of curvature is on the image side; ray slopes positive measured from the optical axis upward toward the image side; surface-spaced thicknesses positive in the direction of light propagation.
- **Cross-check**: the system EFL was computed three ways (single ray trace giving 99.8866, ABCD-matrix systemic trace giving 99.8866, and thin-lens four-element addition giving 137.0 — *with* the thin-lens result correctly disagreeing because thin-lens addition cannot account for finite thicknesses). The first two agree exactly and are the trusted values; the third is reported in the analysis only as an inadequate-baseline comparison.

The patent's nominal *f* = 100 is recovered to within 0.11 %, which is accounted for entirely by the patent's rounding of thicknesses to two decimals.

---

## Appendix B — Open questions and admitted uncertainties

In keeping with scholarly practice, the following points are flagged as inferential or unresolved in the analysis above:

1. **Designer attribution and biography**. Harry Zöllner is the consensus attribution and is supported by his independently documented presence at VEB Optik Carl Zeiss Jena by 1948 (Biometar redesign) and August 1949 (Flektogon, with Solisch). The specific reported transfer date of 1946 from Voigtländer Brunswick has not been independently verified in this analysis. The patent itself names only the firm. Both the Zöllner attribution to this 1952 Tessar and the 1946 transfer date should be regarded as strong but not formally documented inferences.
2. **Glass identification**. Family-level identification (LaK, F, LF, SSK) is supported with high confidence by the (*n*<sub>d</sub>, *ν*<sub>d</sub>) data alone. Catalog-level identification was attempted in §8 and yielded essentially exact matches for two of the four glasses: L1 ↔ Schott N-LaK12 (Δ*n* = 0.00004, Δ*ν* = 0.30) and L4 ≈ Schott N-SSK5 (Δ*n* = 0.0024, Δ*ν* = 0.08). L2 and L3 do not match any single modern catalog glass to within tolerance. Even where modern catalog matches exist, they should not be read as identifications of the *physical* glass used in 1952 — that would have been a Jena house glass from the East-German Jenaer Glaswerk inventory rather than an entry from any modern Western catalog. The modern Schott analogs are useful primarily as orientation glasses on the Abbe diagram and as design-substitution candidates for any modern reproduction of the prescription.
3. **F-number**. Inferred from the patent's claim of "increased luminosity" beyond f/3.5 and from the production lens identification, not stated by the patent. The f/2.8 identification is consistent with the geometry but is not patent-documented.
4. **Production identification**. The patent applies generically to the family of post-war CZJ f/2.8 Tessars; the 50 mm f/2.8 (M42) and 80 mm f/2.8 (Exakta 6×6) are both plausible production realizations of this prescription. The patent itself is silent on focal length.
5. **Focusing mechanism**. The unit-focusing assertion in Section 13 applies specifically to the production CZJ 50 mm f/2.8 (M42) and 80 mm f/2.8 (Exakta 6×6) lenses identified with this patent; it is supported by manufacturer service documentation for those specific lenses, but is not stated in the patent. Tessars in general were not universally unit-focusing — front-element-focusing Tessars also existed in the Zeiss Ikon line.

---

## References and sources

Primary:

- French Patent FR 1.066.698, *Objectif à correction sphérique, chromatique et astigmatique*, VEB Optik Carl Zeiss Jena, filed 19 November 1952, granted 20 January 1954, published 9 June 1954. Agent: J. Casanova, Cabinet Armengaud jeune, Paris. Two examples disclosed; this analysis covers Example 1.

Secondary (used for historical context and identification):

- Lens Collectors' Vade Mecum, entries on Carl Zeiss Jena Tessar f/2.8 and on the post-war Jena design office.
- VEB Carl Zeiss Jena company history materials, including the firm's transition into a *Volkseigener Betrieb* in 1948.
- General references on optical-glass families (Schott Optical Glass Catalog; Zöllner and others on the post-war introduction of lanthanum and barium glasses).
- Wikipedia article on the Tessar lens design (general background and Rudolph 1902 prior art only).

The author has not been able to locate a primary-source attribution of this patent to Zöllner specifically; the attribution given in Section 1 is the consensus among lens historians but should be regarded as inferential.
