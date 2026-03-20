# Analysis: Ludwig Bertele's Sonnar f/1.5 — US Patent 1,975,678

**Patent:** US 1,975,678 — "Objective"  
**Filed:** July 3, 1933 (Priority: Germany, July 8, 1932)  
**Granted:** October 2, 1934  
**Inventor:** Ludwig Bertele, Dresden, Germany  
**Assignee:** Zeiss Ikon, Aktiengesellschaft Dresden  

---

## 1. Historical Context

Ludwig Bertele (1900–1985) was among the most significant optical designers of the twentieth century. His career arc — from apprentice at Rodenstock in Munich at age 16, through his groundbreaking work at Ernemann and then Zeiss Ikon in Dresden — produced a lineage of high-speed photographic objectives that fundamentally shaped the field.

The Sonnar design evolved directly from Bertele's earlier Ernostar, itself a modification of Charles Minor's 1916 Ultrastigmat (a modified Cooke triplet). The key evolutionary step that distinguished the Ernostar was the use of cemented doublets in place of single positive elements, increasing correction while maintaining a manageable element count. The Ernostar f/2 (1923) and f/1.8 (1924) established Bertele's reputation and enabled the Ermanox camera to pioneer available-light photojournalism.

When Ernemann merged into Zeiss Ikon in 1926, Bertele continued his work in Dresden with access to the full Schott Jena glass catalog — a resource that proved essential to his next breakthrough. The first Sonnar (f/2, six elements in three groups) was patented in 1929 and released with the Zeiss Contax I rangefinder camera in 1932. By filling in air spaces between elements with low-index glass, Bertele eliminated two air-glass interfaces relative to the Ernostar, dramatically improving transmission and contrast in an era before anti-reflective coatings.

The present patent, US 1,975,678, represents the f/1.5 evolution of the Sonnar: seven elements in three groups, achieved by splitting the rear cemented doublet of the f/2 design into a cemented triplet. This is the first optical calculation of the 50mm f/1.5 Sonnar, designated "v1b" in the production chronology documented by Thiele's Fabrikationsbuch. Bertele subsequently recalculated the design at least three more times (the second calculation within months of the first release, the third in April 1935, and the fourth in 1950 with post-war glass availability). The basic formula — particularly this seven-element, three-group architecture — remained in production across Zeiss Jena, Zeiss Oberkochen, KMZ (as the Jupiter-3), and various other manufacturers for decades.

---

## 2. Design Overview

The patent prescribes a seven-element lens in three groups with the following architecture:

- **Group 1 (Front):** Single positive element L1
- **Group 2 (Middle):** Cemented triplet L2–L3–L4 (positive–positive–negative)
- **Group 3 (Rear):** Cemented triplet L5–L6–L7 (negative–positive–negative)

The aperture stop (iris diaphragm *y*) is located in the air space between the front component (L1 through L4) and the rear component (L5 through L7).

The stated specifications for the numerical example are:

- Focal length: f = 100 mm (patent scale; production lenses were f ≈ 50 mm)
- Maximum aperture: 1:1.5
- Picture angle: approximately 42° (at f = 100 scale)

Note that the patent's single claim describes "a great-rapidity objective having an aperture of about 1:1.4," while the numerical example prescribes 1:1.5. This is typical of patent drafting: the claim covers a range of designs broader than the specific worked example. The production 50mm Contax Sonnar was rated at f/1.5.

The patent's "picture angle about 42°" refers to the image circle covered at f = 100 (approximately ø77 mm diameter). When the prescription is scaled to f ≈ 50 mm for the 24×36 mm format, the diagonal field angle is 2ω ≈ 46.8° — consistent with normal-lens coverage.

The total optical track from the first surface to the last is 80.3 mm, giving a track-to-focal-length ratio of 0.803 — remarkably compact for a lens of this speed. Only six air-glass interfaces exist across the entire system, compared to twelve or more in a contemporary Double Gauss design of similar aperture.

---

## 3. Verified Prescription Data

The following prescription was transcribed from the patent and verified computationally using a paraxial transfer-matrix ray trace. The computed effective focal length is **100.33 mm**, confirming the prescription's internal consistency against the patent's stated f = 100.

One sign ambiguity existed in the patent text: the radius r₈ appears with an indeterminate sign in available reproductions of the 1934 printing. Both values were tested computationally: r₈ = +59.85 yields EFL = 100.33 mm (consistent with the patent's stated f = 100), while r₈ = −59.85 yields EFL = 120.0 mm (inconsistent). The resolution is independently confirmed by the patent's Figure 1, which clearly depicts L6 as biconvex — requiring a positive front radius (r₈ > 0) and negative rear radius (r₉ < 0). The patent text's description of L6 as "biconvex" further confirms: **r₈ = +59.85 is the correct reading.**

| Surface | R (mm) | d (mm) | n_d | Element | Medium |
|---------|--------|--------|-----|---------|--------|
| r₁ | +65.00 | 10.5 | 1.6375 | L1 | Glass → |
| r₂ | +416.77 | 0.5 | 1.0 | — | Air |
| r₃ | +37.26 | 11.7 | 1.6727 | L2 | Glass → |
| r₄ | +104.34 | 7.6 | 1.4075 | L3 | Glass (cement) |
| r₅ | −247.00 | 1.9 | 1.6890 | L4 | Glass (cement) |
| r₆ | +22.14 | 13.9 | 1.0 | — | Air (stop) |
| r₇ | +1904.0 | 3.4 | 1.5481 | L5 | Glass → |
| r₈ | +59.85 | 22.4 | 1.6578 | L6 | Glass (cement) |
| r₉ | −22.06 | 8.4 | 1.5488 | L7 | Glass (cement) |
| r₁₀ | −89.06 | — | 1.0 | — | Air (to image) |

---

## 4. Glass Identification

Glass identification for a 1930s patent is necessarily inferential. Bertele had access to the full Schott Jena catalog of the period, which included many types since discontinued. The identifications below are based on matching the patent's n_d and ν_d values against known Schott types, noting that the 1932 catalog included specialty glasses no longer in production.

### L1 — n_d = 1.6375, ν_d = 56.1

**Probable type: Dense crown (SK/SSK family)**

The patent explicitly describes L1 as made of "a very strongly refractive kind of glass." In 1932, n_d = 1.6375 was indeed high-index for a crown glass. The closest modern Schott equivalents are SSK4 (n_d = 1.6177, ν_d = 55.0) and SK16 (n_d = 1.6204, ν_d = 60.3), neither of which matches exactly. This likely represents a historical dense crown or very dense crown type available from Schott Jena in the early 1930s that has since been superseded. The Abbe number of 56.1 places it firmly in crown territory (low dispersion), while the refractive index exceeds typical barium crowns of the era.

The high index in L1 serves a specific purpose: as the first element the light encounters, a high-index glass reduces the surface curvatures needed to achieve a given refractive power, which in turn reduces both spherical aberration and the Petzval contribution of the front surface.

### L2 — n_d = 1.6727, ν_d = 47.3

**Probable type: Barium flint — very close match to Schott BaF10 (n_d = 1.6700, ν_d = 47.2)**

This is the most confident identification in the prescription. The match to BaF10 is excellent: Δn_d = 0.0027, Δν_d = 0.1. BaF10 is a barium flint glass with moderately high index and intermediate dispersion — neither a strong crown nor a strong flint. Its position on the glass map makes it useful as a positive element in a cemented group where chromatic correction requires careful balancing of partial dispersions across multiple elements.

In the context of the front triplet, L2's intermediate Abbe number means it introduces moderate chromatic undercorrection in the converging pencils — a deliberate part of Bertele's spherochromatic correction strategy (discussed in Section 6).

### L3 — n_d = 1.4075, ν_d = 65.7

**Probable type: Historical specialty — possibly a fluoride-bearing crown or experimental low-index glass**

This is the most enigmatic glass in the prescription. The refractive index of 1.4075 is lower than any standard optical glass in modern catalogs. To appreciate how anomalous this value is, it helps to locate it on the index scale of known low-index optical materials:

- MgF₂ (crystal): n_d = 1.378
- LiF (crystal): n_d = 1.392
- **L3 (patent): n_d = 1.408**
- CaF₂ / Fluorite (crystal): n_d = 1.434
- N-FK58 (Schott, modern lowest-index glass): n_d = 1.456
- Fused silica (SiO₂): n_d = 1.458

The patent value falls *between* lithium fluoride and calcium fluoride — a gap populated only by crystalline fluoride compounds, not by any known optical glass. CaF₂ was used in microscopy by the 1930s but cementing fluoride crystals into photographic lens triplets would have been extremely challenging: their high thermal expansion coefficients, sensitivity to thermal shock, and poor cement adhesion make them unsuitable for mass-production cemented groups.

The computational verification is unambiguous: the patent's stated value of n_d = 1.4075 produces EFL = 100.33 mm, consistent with f = 100. Systematically testing OCR misreads shows that only values very near 1.4075 reproduce the stated focal length: n_d = 1.4130 gives exactly f = 100.0, while n_d = 1.4975 gives f = 95.4 (off by 4.6%) and n_d = 1.4575 gives f = 97.5 (off by 2.5%). The prescription is internally consistent with 1.4075.

Given that no known glass or practical cemented-lens material matches this index, **deliberate patent obfuscation is the most probable explanation.** It was standard practice in the 1930s for patent filings to modify one or more prescription parameters — particularly glass indices — to prevent competitors from exactly reproducing the production design while still demonstrating a working example. A plausible production glass might have been an FK-type fluor crown in the n_d ≈ 1.46–1.49 range; the obfuscation would preserve the *functional role* of a low-index, low-dispersion spacer element while rendering the exact prescription unreproducible. Alternatively, Bertele may have had access to an experimental or limited-production Schott Jena glass type that was never commercially catalogued — though even this would not easily explain an index below CaF₂.

The Abbe number of 65.7 provides a partial clue: it matches FK3 (ν_d = 65.8) almost exactly, suggesting the glass falls in the fluorite-crown region of the glass map, likely a fluoride-bearing borosilicate or phosphate glass. Whatever its exact identity, its optical role is clear: as a low-index, low-dispersion element cemented between L2 and L4, it creates a large refractive index step at both cement interfaces (r₄ and r₅), which is essential for the chromatic correction strategy.

### L4 — n_d = 1.6890, ν_d = 31.0

**Probable type: Dense flint (SF family)**

The patent explicitly describes L4 as having "a very high refractive index" and "very strong color separating capacity" (i.e., high dispersion / low Abbe number). The n_d/ν_d pair places this squarely in the dense flint region. The closest Schott match is SF5 (n_d = 1.6727, ν_d = 32.2), but the patent values are somewhat higher in index and lower in Abbe. This likely represents a historical dense flint melt available from Schott in 1932 and since discontinued.

The combination of high index and high dispersion makes L4 the chromatic "engine" of the front triplet: the large index difference between L3 (1.4075) and L4 (1.6890) at the cemented surface r₅ creates strong chromatic dispersion in the opposite sense to the chromatic effect at r₄, enabling spherochromatic correction.

### L5 — n_d = 1.5481, ν_d = 45.9

**Probable type: Light flint or barium light flint**

The n_d/ν_d pair falls in the light-flint to barium-light-flint region. No exact modern match exists; the closest candidates are KzFS2 (n_d = 1.5584, ν_d = 54.0) and PSK3 (n_d = 1.5520, ν_d = 63.5), neither particularly close. This is likely another historical Schott glass type from the 1930s catalog. As the first element of the rear triplet (a thin negative meniscus), its precise glass type is less critical than its role in the cemented group's overall correction.

### L6 — n_d = 1.6578, ν_d = 51.2

**Probable type: Very dense crown — virtually exact match to Schott SSK51 (n_d = 1.6577, ν_d = 51.2)**

This is the second-most confident identification. The match to SSK51 (or its modern equivalent N-SSK5) is essentially exact: Δn_d = 0.0001, Δν_d = 0.0. SSK51 is a very dense crown glass — high index with moderate Abbe number, placing it on the boundary between crown and flint territory. It was historically available from Schott and is still in production.

L6 is the powerful biconvex positive core of the rear triplet, and its high-index crown character is essential for achieving the strong positive power needed at this position (f ≈ +27.5 mm) without excessive surface curvatures.

### L7 — n_d = 1.5488, ν_d = 63.0

**Probable type: Phosphate dense crown or borosilicate crown — close to Schott PSK3 (n_d = 1.5520, ν_d = 63.5)**

The n_d/ν_d values suggest a crown glass with moderate index and low dispersion. PSK3 is the closest modern equivalent, though the match is approximate (Δn_d = 0.0032, Δν_d = 0.5). The high Abbe number means L7 contributes minimal chromatic aberration of its own, acting primarily as a field-flattening and coma-correcting negative element in the rear triplet.

---

## 5. Element-by-Element Analysis

### L1 — Front Positive Element

| Property | Value |
|----------|-------|
| Type | Positive meniscus (nearly plano-convex; r₂ = +416.77 ≈ flat) |
| Focal length | f ≈ +119.4 mm (thick lens) |
| Glass | Dense crown, n_d = 1.6375, ν_d = 56.1 |
| Role | Primary converging element; collects and begins focusing the incoming light |

The patent describes L1 as "plano-convex," which is an approximation — r₂ = +416.77 mm is a very large radius but not infinite. The front radius r₁ = +65.0 mm provides most of the element's positive power. This single element constitutes the entire first group.

L1 is noteworthy for using a high-index glass. As Bertele's patent states, this is deliberate: high index reduces the curvature needed for a given power, which reduces both the spherical aberration introduced and the Petzval contribution (since the Petzval sum at a surface is proportional to φ/(n·n'), and higher n values in the denominator reduce the contribution). The Petzval contribution of r₁ is +0.00599, the second-largest positive contribution in the system.

As a practical matter, the high-index dense crown used for L1 is a "hard" glass — mechanically durable and resistant to scratching. This is a significant advantage for the exposed front element of a camera lens, and historical sources note that the f/1.5 Sonnar's front element survives much better over decades than the softer glass used in the f/2 version's front element.

### L2 — Front Triplet: First Element (Positive Meniscus)

| Property | Value |
|----------|-------|
| Type | Positive meniscus |
| Focal length | f ≈ +80.5 mm (thick lens) |
| Glass | Barium flint (BaF10 type), n_d = 1.6727, ν_d = 47.3 |
| Cemented to | L3 at surface r₄ |
| Role | Primary positive power of the middle group; introduces controlled chromatic undercorrection |

L2 is the first and most powerful element in the front cemented triplet. Its positive meniscus form (both radii positive — the steeper front surface r₃ = +37.26 mm and the gentler rear surface r₄ = +104.34 mm — with both surfaces convex as seen from the object side) provides the bulk of the middle group's converging power. The Petzval contribution of r₃ (+0.01079) is the largest single positive contribution in the entire system.

The use of a barium flint glass (intermediate between crown and flint in dispersion) rather than a pure crown is deliberate. In combination with L3's very low-index glass, the cemented interface r₄ creates a controlled degree of chromatic undercorrection in the converging light — setting up the spherochromatic correction that is one of Bertele's two key innovations.

### L3 — Front Triplet: Second Element (Biconvex, Low-Index)

| Property | Value |
|----------|-------|
| Type | Biconvex positive |
| Focal length | f ≈ +181.1 mm (thick lens) |
| Glass | Specialty low-index crown, n_d = 1.4075, ν_d = 65.7 |
| Cemented between | L2 (at r₄) and L4 (at r₅) |
| Role | Creates large refractive index steps at both cemented interfaces; enables spherochromatic correction |

L3 is optically the most unusual element in the design. Its refractive index of 1.4075 is extraordinarily low — lower than any standard optical glass in modern catalogs. Its primary function is not to provide power (its focal length of +181 mm means it contributes relatively little convergence) but rather to create a large refractive index differential at both cement surfaces:

- At r₄ (L2→L3): The index drops from 1.6727 to 1.4075, a step of −0.2652.
- At r₅ (L3→L4): The index rises from 1.4075 to 1.6890, a step of +0.2815.

These large index steps, combined with the low-dispersion character of L3 (ν_d = 65.7) versus the high dispersion of L4 (ν_d = 31.0), generate the chromatic correction that is central to the Sonnar's performance at f/1.5. Without this unusually low-index spacer, the cement surfaces would have smaller index steps and correspondingly less leverage for chromatic and spherochromatic control.

Marco Cavina's analysis of the Sonnar design family identifies this as one of Bertele's two foundational innovations: the use of a cemented triplet where "the first and second [collective] elements together acted a chromatic undercorrection for the entering pencils of light, while the second and third lens in tandem accomplished an opposite chromatic overcorrection to the outgoing light pencils," achieving "a previously unreached sphero-chromatic correction for such apertures as large as f/1.5."

### L4 — Front Triplet: Third Element (Biconcave, High-Dispersion)

| Property | Value |
|----------|-------|
| Type | Biconcave negative |
| Focal length | f ≈ −29.4 mm (thick lens) |
| Glass | Dense flint, n_d = 1.6890, ν_d = 31.0 |
| Cemented to | L3 at surface r₅ |
| Role | Dominant negative element of the front component; provides chromatic overcorrection to balance L2–L3 undercorrection; controls Petzval curvature |

L4 is the most powerful individual element in the system in terms of absolute power — its thick-lens focal length of −29.4 mm gives it roughly three times the power of any other single element (in magnitude). Its rear surface, r₆ = +22.14 mm, is extremely steeply curved and makes the single largest Petzval contribution in the system: −0.01843 (negative, meaning it curves the field away from the lens — opposing the positive Petzval contributions from the converging elements and helping to flatten the image).

The combination of high refractive index and high dispersion (low Abbe number) is exactly what the patent specifies: "a kind of glass that has likewise a very high refractive index... [and] its color separating capacity is very strong." The steep r₆ surface also serves as the exit surface of the front component, launching the light across the 13.9 mm air gap that contains the aperture stop.

### The Front Cemented Triplet as a Unit (L2 + L3 + L4)

Computed as a cemented group, the front triplet has an effective focal length of **f ≈ −110.2 mm** — it is net negative. This is counterintuitive for a "middle member" that the patent describes as "meniscal," but it is correct: the powerful negative L4 (f ≈ −29.4 mm) dominates the weaker positives L2 (f ≈ +80.5 mm) and L3 (f ≈ +181 mm). The entire front component (L1 + air + L2–L3–L4) has a combined focal length of **f ≈ +267.6 mm** — weakly positive, with L1 providing enough power to overcome the triplet's net negative contribution.

### L5 — Rear Triplet: First Element (Negative Meniscus, Nearly Plano-Concave)

| Property | Value |
|----------|-------|
| Type | Negative meniscus (nearly plano-concave; r₇ = +1904 ≈ flat) |
| Focal length | f ≈ −112.8 mm (thick lens) |
| Glass | Light flint, n_d = 1.5481, ν_d = 45.9 |
| Cemented to | L6 at surface r₈ |
| Role | First negative element of the rear triplet; controls entrance angle of light into the powerful L6 element |

L5 is a thin, weakly negative element that the patent describes as "plano-concave" — its front surface r₇ = +1904 mm is effectively flat. Its rear surface r₈ = +59.85 mm carries all the curvature. As a light flint glass, L5 has moderate dispersion that contributes to the chromatic balance of the rear triplet.

### L6 — Rear Triplet: Second Element (Biconvex Positive, Core Power)

| Property | Value |
|----------|-------|
| Type | Biconvex positive |
| Focal length | f ≈ +27.5 mm (thick lens) |
| Glass | Very dense crown (SSK51 type), n_d = 1.6578, ν_d = 51.2 |
| Cemented between | L5 (at r₈) and L7 (at r₉) |
| Role | Primary positive power of the rear group; the dominant converging element that forms the image |

L6 is the optical heart of the lens. Its thick-lens focal length of +27.5 mm gives it by far the strongest positive power of any element. The axial thickness of 22.4 mm (the largest in the system) reflects the deep meniscus-like cross-section needed to contain the strongly converging marginal rays at f/1.5.

The use of a high-index very dense crown (SSK51 type) allows the steep surface curvatures (r₈ = +59.85 mm, r₉ = −22.06 mm) to be achieved without the dispersion penalty that a lower-index glass would impose. The rear cemented surface r₉ = −22.06 mm is the subject of the patent's central claim (see Section 6).

### L7 — Rear Triplet: Third Element (Negative Meniscus)

| Property | Value |
|----------|-------|
| Type | Negative meniscus |
| Focal length | f ≈ −55.9 mm (thick lens) |
| Glass | Crown (PSK3 type), n_d = 1.5488, ν_d = 63.0 |
| Cemented to | L6 at surface r₉ |
| Role | Final negative element; corrects coma and field curvature; contributes to the "strongly curved cemented face" innovation |

L7 is the last optical element and forms the image-side boundary of the rear triplet. Its high Abbe number (63.0) means it introduces minimal chromatic aberration of its own, serving primarily as an aberration-correcting element for higher-order monochromatic aberrations (coma, astigmatism, Petzval curvature). The exit surface r₁₀ = −89.06 mm launches the converging light toward the image plane across the back focal distance.

### The Rear Cemented Triplet as a Unit (L5 + L6 + L7)

The rear triplet has an effective focal length of **f ≈ +79.0 mm** — strongly positive. This is the primary image-forming group of the lens. Its negative–positive–negative (−/+/−) architecture is the signature of the f/1.5 Sonnar: the f/2 version used a simpler negative–positive cemented doublet in this position, but the addition of L7 as a third cemented element allowed Bertele to achieve the extra half-stop of aperture while controlling the spherical and comatic aberrations that would otherwise overwhelm the image.

---

## 6. The Patent's Central Innovation: Surface r₉

The patent's claim focuses specifically on "a cemented surface very strongly curved towards the film and having a radius of curvature which is smaller than one-half of the focal length of the objective."

This surface is r₉ = −22.06 mm, the cemented interface between L6 (biconvex positive, SSK51) and L7 (negative meniscus, PSK3-type crown). The claim's condition is readily verified: |r₉| = 22.06 mm, which is less than f/2 = 50 mm.

The patent's Figure 2 illustrates the effect dramatically. Curve I shows the spherical aberration of the system without the strongly curved cementing surface — it exhibits severe undercorrection at the marginal rays (the outer zones of the aperture focus significantly short of the paraxial focus). Curve II shows the system with the strongly curved r₉ surface — the aberration curve is vastly improved, with the marginal rays brought much closer to the paraxial focus.

The mechanism is straightforward in principle: at the cemented surface r₉, light passes from a medium of higher index (L6, n_d = 1.6578) to lower index (L7, n_d = 1.5488). Because the surface is strongly curved (R = −22.06 mm) and the index step is relatively small (Δn = −0.1090), the surface acts as a weakly diverging corrector. The key insight is that this surface's correction is strongly height-dependent: it has very little effect on paraxial rays (which cross near the axis where the surface sag is minimal) but a progressively larger effect on marginal rays (which cross the surface at larger heights where the sag difference between spherical and planar is significant). This is precisely the behavior needed to correct zonal and marginal spherical aberration at f/1.5 without disturbing the paraxial properties of the system.

The Petzval contribution of r₉ is +0.00192 — positive but modest. The surface's primary function is aberration correction at the higher orders, not Petzval control.

---

## 7. System-Level Optical Properties

### Petzval Field Curvature

The computed Petzval sum is **P = +0.00267**, giving a Petzval radius of **+374.8 mm** (3.75× the focal length). A positive Petzval sum indicates inward (toward the lens) field curvature — meaning off-axis image points focus slightly closer to the lens than the paraxial image plane.

The dominant Petzval contributions, in surface order:

| Surface | Element | Contribution | Running Sum |
|---------|---------|-------------|-------------|
| r₁ | L1 front | +0.00599 | +0.00599 |
| r₂ | L1 rear | −0.00093 | +0.00506 |
| r₃ | L2 front | **+0.01079** | +0.01585 |
| r₄ | L2→L3 | −0.00108 | +0.01477 |
| r₅ | L3→L4 | −0.00048 | +0.01429 |
| r₆ | L4 rear | **−0.01843** | −0.00414 |
| r₇ | L5 front | +0.00019 | −0.00395 |
| r₈ | L5→L6 | +0.00071 | −0.00324 |
| r₉ | L6→L7 | +0.00192 | −0.00131 |
| r₁₀ | L7 rear | +0.00398 | **+0.00267** |

The running sum reveals the design's field-flattening strategy: the front positive elements (r₁ through r₃) build up a large positive Petzval sum (+0.01585 by r₃), which the powerful negative surface r₆ then overcorrects to −0.00414. The rear triplet gradually adds back positive curvature, landing at a final sum of +0.00267 — a well-controlled balance.

### Entrance Pupil and F-Number

At f/1.5, the entrance pupil diameter is 100/1.5 = 66.7 mm (for the patent's 100mm focal length), giving an entrance pupil semi-diameter of 33.3 mm. This is larger than the semi-diameter of any individual element in the rear group, which means the marginal rays at full aperture are being refracted through steeply curved surfaces at significant heights — exactly the condition where higher-order spherical aberration becomes problematic, and exactly the condition that the r₉ innovation was designed to address.

### Air-Glass Interfaces

The Sonnar's most celebrated practical advantage is its minimal count of air-glass interfaces. With only three groups, the system has exactly six air-glass surfaces:

- L1 front and rear (r₁, r₂)
- Front triplet front and rear (r₃, r₆)
- Rear triplet front and rear (r₇, r₁₀)

In 1932, before the development of practical anti-reflective coatings, each uncoated air-glass interface reflected a percentage of incident light that depended on the glass's refractive index: approximately 2.9% for n = 1.41 (L3), 4.0% for n = 1.50, and up to 6.6% for n = 1.69 (L4). Averaging across the six interfaces with their actual glass types yields roughly 5% mean reflection per surface. A Double Gauss design of comparable aperture might have twelve or more air-glass surfaces. The transmission advantage is substantial: six surfaces at 5% mean loss transmit approximately 0.95⁶ ≈ 73.5% of incident light, while twelve surfaces transmit only 0.95¹² ≈ 54.0%. This roughly 20-percentage-point advantage translates directly to better contrast, less flare, and lower veiling glare — qualities for which the Sonnar was renowned.

---

## 8. Focus Mechanism

This is a 1932 design for the Zeiss Contax rangefinder camera system. The patent contains no variable air gap data, and the design uses **unit focusing** — the entire optical assembly translates forward as a unit to focus at closer distances. Only the back focal distance (the air gap between r₁₀ and the image plane) changes.

The Contax inner-bayonet mount has a registration distance (flange-to-film) of approximately 34.85 mm. The computed BFD at f = 50 scale is 35.20 mm, leaving a clearance margin of only 0.35 mm for the rear element's protrusion behind the mount flange. This extremely tight margin is characteristic of Sonnar designs and one reason why the Sonnar formula was ultimately incompatible with SLR cameras, which require much longer back focal distances to clear the reflex mirror.

The Contax lens mount incorporated a helicoid mechanism coupled to the camera's rangefinder. The minimum focus distance for production 50mm f/1.5 Sonnar lenses was approximately 0.9 m (3 feet).

Unit focusing has the advantage of simplicity and the disadvantage that aberrations change as focus distance decreases (since the lens was optimized for infinity focus). At f/1.5, the depth of focus is extremely thin, and Sonnar lenses are well-known for exhibiting **focus shift** when stopped down — the plane of best focus moves as the aperture changes, because stopping down preferentially clips the marginal rays while leaving the zonal rays (which have a different focus point due to residual spherical aberration). Modern re-implementations of the Sonnar formula, such as the Zeiss C Sonnar ZM, use modified aperture blade shapes to mitigate this effect.

---

## 9. Sources and Methodology

### Primary Sources
- US Patent 1,975,678: Complete patent text and prescription data
- Patent drawings (Figures 1 and 2)

### Computational Verification
- System EFL computed via paraxial transfer-matrix ray trace: **100.33 mm** (vs. patent's stated f = 100)
- r₈ sign ambiguity resolved computationally: r₈ = +59.85 confirmed, r₈ = −59.85 ruled out (EFL = 120.0)
- Patent's claim condition verified: |r₉| = 22.06 < f/2 = 50
- Individual element focal lengths computed via thick-lens matrix method
- Petzval sum computed surface by surface: P = +0.00267

### Glass Identification Sources
- Schott current optical glass catalog (for modern equivalents)
- Historical Schott glass type nomenclature (SK, SSK, BaF, SF, FK families)
- Cross-references with discussions in the optical design community (Cloudy Nights, Marco Cavina's Sonnar analysis)

### Historical Context Sources
- Wikipedia articles on the Zeiss Sonnar and Ludwig Bertele
- Brian Sweeney, "Zeiss Jena 5cm Sonnars: The Magic of the Prewar Uncoated Sonnar" (35mmc, 2020)
- Räuber, "Zeiss Sonnar 50mm f/1.5 Versions and Specs" (vividlyfading.blogspot.com, 2024)
- Marco Cavina, "Zeiss Tipo Sonnar" (marcocavina.com)
- Camera-wiki.org, "Ludwig Bertele"
- Erhard Bertele, "Ludwig J. Bertele, Ein Pionier der geometrischen Optik" (ETH Zürich, 2017) — referenced but not directly consulted

### Notes on Evidentiary Basis
- Glass identifications for L2 (BaF10) and L6 (SSK51) are high-confidence matches based on n_d/ν_d proximity
- Glass identifications for L1, L4, L5, and L7 are approximate, reflecting the use of historical Schott types no longer in production
- The L3 glass (n_d = 1.4075, ν_d = 65.7) has no match in any modern catalog or among known crystalline optical materials at this index. Its value falls between lithium fluoride and calcium fluoride — a gap not occupied by any practical optical cement-compatible material. Deliberate patent obfuscation is the most probable explanation (see Section 4); the prescription is computationally self-consistent with this value regardless of the glass's physical identity
- Focus mechanism is inferred from the camera system (Contax rangefinder) and the absence of variable-gap data in the patent
- Semi-diameters are not stated in the patent and would need to be estimated from entrance pupil geometry for any detailed rendering

---

*Analysis prepared March 2026. Prescription data transcribed from US Patent 1,975,678 and independently verified by paraxial ray trace.*
