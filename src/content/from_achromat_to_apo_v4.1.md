---
slug: achromat-apochromat
title: "From Achromat to APO: Chromatic Correction, Optical Glass, and the Evolution of Color-Corrected Lenses"
summary: The evolution of chromatic control in lenses
tag: article
toc: true
---

# From Achromat to APO: Chromatic Correction, Optical Glass, and the Evolution of Color-Corrected Lenses

*A Monograph for OpticalBench.net — v4.1*

---

## 1. Introduction: Color, Refraction, and an Old Problem in Optics

Refraction is the bending of light at a boundary between two media of different refractive indices. The refractive index, however, is not a single number. It is a wavelength-dependent function $n(\lambda)$, so any optical interface that bends light necessarily bends red, green, and blue rays by different amounts. This is the physical origin of *chromatic aberration*: a defect that is not introduced by manufacturing error but is intrinsic to the act of refraction itself [3], [8]. A perfectly polished, perfectly figured singlet lens illuminated with white light will still refuse to bring all wavelengths to a single focus.

Working photographers and amateur astronomers tend to encounter chromatic aberration as visible "color fringing" — a magenta or green halo around high-contrast edges. This is, however, only one observable consequence of a deeper, more general phenomenon. Because the refractive index varies with wavelength, every quantity that depends on $n$ varies with wavelength: the focal length $f$, the back focal distance, the principal-plane locations, the position and size of the image of any object point, and the magnitude of every Seidel aberration [2], [6]. A lens designer therefore distinguishes at least four manifestations of the same root cause:

1. **Wavelength-dependent focal length / paraxial axial color** (longitudinal chromatic aberration, LCA): different wavelengths focus at different distances along the optical axis.
2. **Wavelength-dependent magnification** (transverse or lateral chromatic aberration, TCA): different wavelengths form images of different sizes at the same focal plane, producing color separation that grows with field height.
3. **Wavelength-dependent Seidel aberrations**, especially *spherochromatism* — the variation of spherical aberration with wavelength — and chromatic variation of coma, astigmatism, and distortion.
4. **Color fringing** as the visible outcome of the above on the image plane, modulated by the spectral content of the scene and the sensor's color filter array.

Chromatic aberration is one of the oldest persistent problems of refractive optics. Newton, in his *Opticks* (1704), examined the spreading of white light through prisms and concluded — incorrectly — that the angular dispersion of any refracting medium is strictly proportional to its mean deviation, so that no compound refracting system could be simultaneously refractive and free from chromatic dispersion [11]. From this Newton inferred that the colored fringes of refracting telescopes could not be eliminated by any combination of lenses and that the only practical path forward lay in the reflecting telescope. Newton's authority entrenched this view for nearly half a century. The achromatic doublet, when it eventually emerged, was at once a technological breakthrough and a quiet rebuke to a Newtonian dogma [13], [14]. Apochromatic correction, which would not be realized until the late nineteenth century, was the second such rebuke: it required not only a new theoretical framework but also new glass [19], [20].

This monograph traces the path from Newton's pessimism to the modern apochromat and superachromat. It proceeds in five stages: first, the optical theory of dispersion and color correction; second, the eighteenth-century achromat and its contested invention; third, the migration of achromatism into photographic objectives; fourth, the Abbe–Schott–Zeiss revolution that made true apochromatism practical; and fifth, the modern photographic APO as both optical achievement and marketing label.

> **OpticalBench Note.** Throughout this article, references to the OpticalBench.net interface use the site's standard terminology: **EFL** (effective focal length), **f-number**, **STO** (aperture stop), **IMG** (image plane), **nd** and **νd** (refractive index and Abbe number per element), **FL** (focal length), **LCA** and **TCA** (longitudinal and transverse chromatic aberration), **APD** (anomalous partial dispersion), **COLOR** overlay, **FROM ∞** mode (infinite-conjugate ray trace), and **TRACKS FOCUS** mode (variable conjugate). Readers can use the COLOR overlay on any patent prescription to visualize the chromatic behavior discussed here at the level of individual surfaces and glasses.

---

## 2. Optical Foundations: Dispersion, Glass, and the Mathematics of Color Correction

### 2.1 Wavelength-dependent power and the lensmaker's equation

In the thin-lens limit, the optical power of a single element of refractive index $n$ with surface curvatures $c_1$ and $c_2$ is

$$\Phi(\lambda) = [n(\lambda) - 1](c_1 - c_2).$$

The geometry $(c_1 - c_2)$ is fixed at fabrication, so $\Phi$ varies with wavelength solely through $n(\lambda)$ [2], [3]. For the standard visible reference wavelengths — F (486.1 nm, blue hydrogen), d (587.6 nm, yellow-green helium), and C (656.3 nm, red hydrogen) — the difference $\Phi_F - \Phi_C$ is the lens's *primary axial color*. For a positive singlet, $\Phi_F > \Phi_C$: blue light is focused closer to the lens than red light. This is the residual that Newton declared irreducible [11].

### 2.2 The Abbe number

To compress a glass's dispersive behavior into a single scalar, optical designers use the *Abbe number* (also called V-number or constringence):

$$V_d = \frac{n_d - 1}{n_F - n_C}.$$

A high $V_d$ corresponds to low dispersion (a "crown" glass); a low $V_d$ corresponds to high dispersion (a "flint" glass) [3], [17]. The Abbe number captures only the average slope of $n(\lambda)$ across the visible band; it does not describe the *shape* of the $n(\lambda)$ curve. Two glasses can have nearly identical $V_d$ and yet differ measurably in how they distribute their dispersion between the blue and the red halves of the spectrum [17]. This finer-grained behavior is what apochromatism turns out to require.

> **OpticalBench Note.** In the OpticalBench cross-section viewer, the **nd** and **νd** values are displayed for each element. Comparing νd across elements shows immediately which elements are high-dispersion flints and which are low-dispersion crowns.

### 2.3 Partial dispersion ratios and the normal line

To capture the shape of the dispersion curve, optical engineers define *partial dispersion ratios*. The most commonly tabulated is

$$P_{g,F} = \frac{n_g - n_F}{n_F - n_C},$$

where $g$ is the mercury g-line at 435.8 nm. Other partial dispersions — $P_{C,t}$, $P_{F,e}$, etc. — are defined analogously [3], [17]. Plotting $P_{g,F}$ against $V_d$ for the catalog of ordinary optical glasses produces a remarkable result: most glasses cluster tightly around a straight line, the so-called *normal line* (also referred to as the Abbe–Buchdahl line) [17]. This empirical linear relationship is the analytical signature of glasses dominated by SiO₂ networks with garden-variety modifier oxides.

A glass that lies measurably off the normal line is said to exhibit *anomalous partial dispersion*. Such glasses are what made practical apochromatic correction feasible and economical. They include:

- **Fluorite (CaF₂)**, an ionic crystal rather than a glass, with very low dispersion ($V_d \approx 95$) and pronounced anomalous behavior in the blue.
- **Phosphate, fluorophosphate, and fluoroborate crowns** (Schott FK and PK series, e.g. N-FK51A, N-PK52A; Ohara FPL series, e.g. S-FPL-51, S-FPL-53, S-FPL-55) [17], [33].
- **Short-flint and lanthanum-borate glasses** that depart from the normal line in the opposite direction.
- **ED ("extra-low-dispersion") glasses** in the photographic-industry vernacular — a marketing term that approximately corresponds to the FPL family.

The term "anomalous" is somewhat misleading. There is nothing thermodynamically odd about these materials; they are simply not silicate-dominated and so do not lie on the silicate-glass line. From the lens designer's point of view, however, they are what makes three-color correction economically feasible.

> **Figure 1.** *The P–V diagram: partial dispersion $P_{g,F}$ plotted against Abbe number $V_d$ for selected optical glasses.* The diagonal line is the "normal line" defined by ordinary silicate crowns and flints. Glasses on this line (e.g., BK7, F2) can form achromats but cannot eliminate secondary spectrum. Glasses departing below the line — fluorite (CaF₂), Schott N-FK51A, Ohara S-FPL-53 — exhibit anomalous partial dispersion and are the materials that make apochromatic correction possible. Short flints (e.g., KZF series) depart above the line and are sometimes paired with anomalous crowns to form apochromatic triplets. In OpticalBench, each element's **nd** and **νd** values can be checked against published glass-catalog data to determine whether a design's materials fall on or off the normal line.
>
> *[Figure to be produced as SVG, generated from selected Schott/Ohara catalog glasses. Caption should note: "Generated from published glass-catalog data; included to illustrate relative partial-dispersion positions rather than to reproduce a complete glass map."]*

### 2.4 The thin-lens achromat condition

For a contact doublet of two thin elements with powers $\Phi_1$, $\Phi_2$ and Abbe numbers $V_1$, $V_2$, the standard derivation of the longitudinal color in the paraxial regime yields the *achromatic condition* [2], [3]:

$$\frac{\Phi_1}{V_1} + \frac{\Phi_2}{V_2} = 0,$$

subject to the system-power constraint $\Phi_1 + \Phi_2 = \Phi$. Solving simultaneously gives

$$\Phi_1 = \Phi \cdot \frac{V_1}{V_1 - V_2}, \qquad \Phi_2 = -\Phi \cdot \frac{V_2}{V_1 - V_2}.$$

This forces one element to be positive and the other negative, and — because the sum $(V_1 - V_2)$ appears in the denominator — it forces the two glasses to differ substantially in dispersion. The classical solution is the crown–flint pair: a strong positive crown (high $V$) cemented to a weaker negative flint (low $V$). Only red and blue (the chosen control wavelengths, traditionally C and F) are forced to focus together; intermediate wavelengths are not [3], [18].

### 2.5 Primary spectrum, secondary spectrum, and the achromat's residual color

Because the achromatic condition only matches focal lengths at two wavelengths, a residual axial color survives between them. At the green wavelength (typically d or e), the doublet's focus deviates from the F = C focus by an amount called the *secondary spectrum* [3], [18]. For ordinary crown–flint pairs, the secondary spectrum amounts to a residual focus offset on the order of $f/2000$ to $f/2500$ — small, but stubborn, and not reducible by any rearrangement of normal-line glasses. Specifically,

$$\frac{\Delta f_{\text{secondary}}}{f} \approx \frac{P_1 - P_2}{V_1 - V_2},$$

where $P_i$ is the relevant partial dispersion ratio [3], [17]. If the two glasses lie on the normal line, the numerator $(P_1 - P_2)$ varies almost linearly with $(V_1 - V_2)$, so the ratio is nearly the same for any normal-line pair. This is why secondary spectrum is, for ordinary glasses, a *property of glass families* rather than a parameter the designer can dial out. Smith, in *Modern Optical Engineering*, makes this point forcefully: the ordinary achromat's secondary spectrum is a hard floor, not a tunable parameter [3].

> **OpticalBench Note.** When the **COLOR** overlay is enabled in OpticalBench, the viewer traces rays at multiple wavelengths simultaneously. In an ordinary achromatic doublet, the red and blue ray fans converge to the same axial point while the green fan focuses slightly in front or behind — this is the secondary spectrum made visible.

> **Figure 2.** *Longitudinal chromatic aberration: achromat vs. apochromat.* Left panel: in a standard crown–flint achromat, the back-focal-distance curve $\text{BFD}(\lambda)$ crosses the zero axis at two wavelengths (typically C and F). Between them, a residual hump — the secondary spectrum — displaces the green focus by approximately $f/2000$. Right panel: in an apochromat using anomalous-dispersion glass, the curve crosses zero at three wavelengths, and the residual between crossings is reduced by roughly an order of magnitude. The residual between the outermost crossings is the *tertiary spectrum*, which in a well-designed apochromat sits within the diffraction-limited depth of focus.
>
> *[Schematic figure to be produced as SVG pair showing representative $\text{BFD}(\lambda)$ curves, with C, d, F, and g wavelengths marked. Not computed from a specific lens prescription.]*

### 2.6 Longitudinal vs. lateral chromatic aberration

LCA arises from the variation of focal length with wavelength on the axis. TCA arises from the variation of *transverse magnification* with wavelength; it appears off-axis and grows with field height [2], [6]. The two are not the same and, importantly, are not corrected by the same operations. In nearly symmetrical photographic lenses, especially those used near conjugate conditions favorable to the design, symmetry strongly suppresses distortion, coma, and lateral color [1], [9]. The cancellation is not a universal guarantee, because focus distance, stop position, field angle, and group asymmetry can reintroduce residual errors. But symmetric designs do nothing automatic for axial color, which must still be addressed by glass choice. Conversely, a telephoto with strong rear-group power can have excellent axial color and disastrous lateral color if the secondary spectrum of the front group fails to match the rear group [3].

### 2.7 Spherochromatism

Spherochromatism is the variation of spherical aberration with wavelength [6], [7]. At fast apertures, even a doublet whose paraxial axial color has been zeroed at F and C may show different amounts of spherical aberration in red, green, and blue marginal rays. The result is that the LCA observed at the *edge of the aperture* is not the LCA observed at the center. In a fast normal lens, spherochromatism is usually the single largest residual color contribution, and modern "APO" branding on fast standard primes typically advertises the suppression of spherochromatism rather than just the suppression of paraxial axial color [18].

Photographers encounter spherochromatism most directly as *bokeh chromatism*: the colored fringing of out-of-focus highlights. Because spherochromatism shifts the best-focus position differently for marginal and paraxial rays at each wavelength, the defocused disc produced by a point source in front of the focal plane has a different color profile from the disc produced by a source behind it. In a typical under-corrected fast lens, out-of-focus highlights on the near side of focus show green-fringed edges while those on the far side show magenta-fringed edges (or vice versa, depending on the sign of the residual). In a well-corrected APO, both discs are nearly neutral. This is one of the most visually obvious differences between a fast APO and a fast non-APO lens at wide apertures, and it is observable in OpticalBench's **COLOR** overlay as the differential spread of the wavelength-specific ray fans at the marginal zone versus the paraxial zone.

### 2.8 The path to apochromatic correction

To bring three wavelengths to a common focus while maintaining a finite power, the designer needs an extra degree of freedom. The thin-lens analysis can be extended to three elements with the system [2], [3]:

$$\sum \Phi_i = \Phi$$
$$\sum \frac{\Phi_i}{V_i} = 0$$
$$\sum \frac{\Phi_i \cdot P_i}{V_i} = 0,$$

where $P_i$ is the appropriate partial dispersion ratio. The third equation cannot be satisfied by glasses lying on the normal line; the determinant of the system collapses [3], [17]. Therefore a true apochromat *requires* either (a) a glass that departs from the normal line (anomalous partial dispersion), or (b) more than three elements with carefully arranged powers, or — in practice — both. This is the algebraic reason why fluorite, FK/FPL crowns, KZF short flints, and similar materials are indispensable to apochromatic design, and why nineteenth-century opticians, working with silicate crowns and lead flints alone, could not achieve it without Schott's new glasses [1], [17].

The full apochromatic prescription must then go further still. It must control spherochromatism (fast lenses), correct lateral color across the field (wide-field lenses), and hold focus invariance across distances (macro lenses) [5], [10]. Each additional control variable corresponds to either an additional element, an aspheric surface, or both.

---

## 3. The Achromat: Definition, History, and Practical Consequences

### 3.1 Technical definition

An *achromat*, in the strict optical sense, is a lens corrected so that two wavelengths share a common focus [2], [3]. The remaining wavelengths form their images on either side of that common plane, and the spread is the secondary spectrum. The most common practical embodiment is the *achromatic doublet*: a positive crown-glass element cemented (or air-spaced) to a negative flint-glass element. The achromatic-doublet form is nearly ubiquitous in microscope objectives, refracting telescope objectives, binocular objectives, riflescope erectors, and the front and rear groups of innumerable photographic lenses [1].

The two-color choice is not unique. Visual telescopes traditionally use the C–F pair, weighted toward the eye's sensitivity. Photographic lenses for color film and digital sensors typically use d-line as the central reference and bring the F and C lines to match. Process lenses for graphic arts and microscope objectives sometimes use entirely different wavelength pairs to suit the spectral output of mercury or sodium illumination [3].

### 3.2 Why crown + flint works

The crown supplies the positive power, low dispersion, and modest refractive index. The flint supplies the negative power and the high dispersion needed to satisfy $\Phi_1/V_1 + \Phi_2/V_2 = 0$ [2]. Since the negative element does not contribute net positive power, the combined system retains a net positive focal length but at the cost of slightly increased curvatures on the crown. Spherical correction is improved as a side effect because the doublet's surfaces can be balanced to cancel third-order spherical aberration at the achromatized wavelength, leading to near-diffraction-limited monochromatic on-axis performance at moderate apertures (f/8 and slower, in nineteenth-century glasses) [1], [9].

### 3.3 The contested invention: Hall, Bass, and Dollond

The eighteenth-century history of the achromatic doublet is one of the great priority disputes in optical history, and it cannot be told as a simple "Dollond invented the achromat in 1758" narrative [13], [14].

The first known achromatic objectives were made for **Chester Moor Hall** (1703–1771), an English barrister and amateur optician, around 1729–1733. Hall, reasoning by analogy from the human eye's combination of refractive humours, conjectured that two glasses of different dispersions could be combined to yield a color-corrected image [14]. To preserve secrecy he commissioned the crown and flint elements from two different London opticians, Edward Scarlett and James Mann. Both subcontracted the work to the same workman — **George Bass** — who realized that the two lenses were destined for the same client and, by combining them, recognized their achromatizing function [13], [14]. Bass continued to produce achromatic objectives quietly for clients in the 1730s and 1740s, but Hall never published.

In the late 1750s Bass mentioned Hall's design to **John Dollond** (1706–1761), a London optician who had read Leonhard Euler's 1747–1753 papers on theoretical color correction and, crucially, Samuel Klingenstierna's 1754 mathematical demonstration that Newton's proportionality between dispersion and refraction is inconsistent with the law of refraction when the two media have different dispersive powers [15]. Dollond performed his own experiments, published "An Account of some Experiments concerning the different Refrangibility of Light" in *Philosophical Transactions* in 1758, and in the same year obtained a patent (granted 19 April 1758, valid for fourteen years) on a new refracting telescope whose objective was a crown–flint achromatic doublet [12]. The Royal Society awarded him the Copley Medal.

After John Dollond's death in November 1761, his son **Peter Dollond** began to enforce the patent aggressively. Thirty-five London opticians, supported by the Worshipful Company of Spectacle Makers, petitioned the Privy Council in June 1764 to annul the patent, citing Hall's prior art and the unbroken practice of London opticians. Bass himself, by then in his seventies, testified [13]. The Privy Council dismissed the petition. The decisive test case, *Dollond v. Champneys* (1766), was heard before Lord Camden, Chief Justice of the Court of Common Pleas. The court accepted that Hall, not Dollond, was the original *inventor* but ruled that the patent was valid because Dollond had reduced the invention to public practice — Hall having, in Camden's phrase, locked his invention in his scrutoire. The patent stood until expiration in 1772, after which the price of achromatic doublets in England fell roughly by half [13].

The historiographical reading of this episode, refined by Sorrenson [13] and Willach [14] in the 1990s, treats the achromat not as a single act of invention by one man but as a combination of (a) Hall's conceptual insight, (b) Bass's tacit fabrication knowledge, (c) Klingenstierna's theoretical demolition of Newton's dispersion law [15], and (d) Dollond's experimental verification, publication, patenting, and commercial scaling. The lesson is recurring in optics: a working object is not the same as a published, manufactured, distributed, and protected object.

### 3.4 Practical consequences of achromatic correction

The achromatic doublet enabled three transformative outcomes:

1. **Refracting telescopes shrank.** An eighteenth-century non-achromatic refractor compensated for color by extreme focal ratios — Hevelius's tube lengths exceeded fifty meters. The achromatic doublet permitted f/10 to f/15 refractors of one or two meters with less color than a Hevelius tube [1].
2. **Microscope objectives became useful at higher magnifications.** Achromatic correction transformed microscopy, but later than it transformed telescopes. The decisive compound-microscope developments belong mainly to the early nineteenth century, especially the work of **Joseph Jackson Lister**. In 1830, Lister published his seminal paper in *Philosophical Transactions*, demonstrating that a doublet objective composed of two cemented achromatic pairs separated by the correct distance has two aplanatic foci, eliminating both chromatic and spherical aberration simultaneously [16]. The principle was reduced to practice by William Tulley, and from 1837 by James Smith (later Smith & Beck), and underpinned the cellular and bacteriological microscopy of the mid- to late nineteenth century [32].
3. **Photographic lenses became possible at all.** Daguerreotype materials, with their blue-sensitive emulsions and slow speeds, demanded both light-gathering power and rough color correction; the achromatic landscape lens (ca. 1812 onward, building on Wollaston's meniscus designs) and the Petzval portrait lens were both pieces of achromatic architecture [1].

---

## 4. From Telescope Objective to Photographic Objective

### 4.1 Migration of the achromat into photography

When daguerreotypy was announced in 1839, the existing achromatic doublet objective was the obvious starting point. **Charles Chevalier**'s landscape lens of 1839 — a single cemented achromatic doublet with the stop in front — was installed in the original Daguerre cameras at f/14 to f/17 [1]. It worked because the daguerreotype's emulsion was effectively monochromatic (sensitive almost exclusively to blue and ultraviolet); residual chromatic aberration in the green and red did not register on the plate. Exposure times of ten minutes to half an hour were typical for portraits.

### 4.2 The Petzval Portrait lens (1840)

The next leap was driven by speed, not color. **Joseph Petzval**, professor of higher mathematics at the University of Vienna, was urged by Andreas von Ettingshausen to compute a faster portrait objective [1]. Petzval's solution, calculated analytically rather than empirically tweaked — assisted by a team of artillery cadets who carried out the heavy ray-tracing arithmetic — used four elements arranged as a cemented achromatic doublet in front and an air-spaced achromatic group in the rear, with an aperture stop between them. The lens was first manufactured in 1840 by Peter Wilhelm Friedrich von Voigtländer in Vienna [1]. With an original focal length of approximately 150 mm (sources vary; 160 mm is also reported) and a maximum aperture of approximately f/3.6, the Petzval gathered approximately fifteen to twenty times the light of Chevalier's lens [1]. Daguerreotype portrait exposures dropped from minutes to tens of seconds.

The Petzval form was *achromatic but not flat-field*. Its characteristic off-axis rendering — and the modern "swirly bokeh" reputation that revival manufacturers now market as a feature — arises from residual field curvature, astigmatism, vignetting, and off-axis aberration behavior, not from chromatic correction alone [1], [6]. Petzval himself did not patent the design effectively, and it was widely copied; he and Voigtländer fell out over royalties.

### 4.3 The Dallmeyer Triple Achromatic Lens (1861)

The term *triple achromatic* in nineteenth-century usage does **not** denote apochromatic correction in the modern sense. Dallmeyer's Triple Achromatic Lens (introduced 1861) is a non-distorting copying objective of approximately f/10 and roughly 60° angle of view, comprising three cemented achromatic doublets — a positive front doublet, a smaller negative achromatic doublet at the stop (which flattens the field), and a positive rear doublet — i.e., six elements in three cells [1]. "Triple" referred to the three cemented achromatic components, not to the number of colors corrected. Modern readers should resist the temptation to retroject the apochromatic meaning of "triple" onto these period designs. The genuine three-color correction was still twenty-five years in the future.

### 4.4 The Rapid Rectilinear / Aplanat (1866)

A photographic lens's job is not, generally, just to focus the axis. It must cover an extended field. Distortion, lateral color, astigmatism, field curvature, and uniformity of illumination across the plate become first-order concerns [1]. The Petzval form failed conspicuously on distortion when used away from portrait subject distances.

The next significant step was the symmetric *Rapid Rectilinear*, introduced by **John Henry Dallmeyer** in London in 1866, and the optically near-identical *Aplanat*, introduced almost simultaneously by **Hugo Adolph Steinheil** in Munich (with theoretical guidance from Ludwig von Seidel, who had recently published the third-order aberration theory) [1]. Both designs comprise two cemented achromatic doublets placed symmetrically about a central aperture stop. Symmetry strongly suppresses coma, distortion, and lateral color when operating near the conjugate conditions the design was optimized for; the achromatic doublets handle axial color [1], [9]. The cancellation is not a universal guarantee, because focus distance, stop position, field angle, and group asymmetry can reintroduce residual errors. The designs were so similar that Dallmeyer and Steinheil engaged in a public priority dispute in the technical press; in retrospect, Steinheil had priority by a few weeks. Both forms were scalable across focal lengths and remained dominant general-purpose moderate-aperture lenses for half a century, working at f/6 to f/8.

### 4.5 The general lesson

Each successive generation of photographic objective — Chevalier landscape, Petzval portrait, Dallmeyer triplet, Rapid Rectilinear/Aplanat, Anastigmat (Zeiss Protar 1890, Goerz Dagor 1893), Cooke triplet (1893), Tessar (1902), double Gauss (Planar 1896, Biotar 1927) — was an attempt to add field coverage, speed, or flatness to the achromatic baseline [1], [4]. Color was treated as solved — or, more honestly, as the residual that nobody yet knew how to remove without new glass.

Kingslake, in *A History of the Photographic Lens*, treats this period as a quasi-Darwinian adaptive radiation in which the achromatic doublet is the conserved core and the surrounding architecture mutates to suit new applications [1].

---

## 5. The Apochromat: Definition and Technical Requirements

### 5.1 Strict definition

An *apochromat* is a lens corrected for chromatic aberration at three (or more) wavelengths and corrected for spherical aberration at two wavelengths [3], [18]. Three-color correction reduces the secondary spectrum to a small fraction of its achromatic value — commonly to a tenth or less. Two-color spherical correction limits spherochromatism, which would otherwise dominate the residual color at fast apertures.

This two-part definition — three wavelengths for chromatic aberration, two for spherical aberration — originates with Abbe's microscope-objective work in the 1880s and remains the strict technical standard in microscopy [19], [20]. In photographic usage, "APO" is applied more loosely: some lenses labeled APO meet Abbe's full definition on-axis; others meet only the three-wavelength chromatic condition without the two-wavelength spherical condition; still others simply use anomalous-dispersion materials and achieve reduced secondary spectrum without formal verification of the three-wavelength crossing. The reader should therefore treat "APO" in photographic contexts as a claim of *degree*, not a binary certification.

The third condition — and the source of the ambiguity that infects the term in photographic marketing — is that the wavelength range of correction is itself a parameter. Abbe's microscope apochromats operated across the visible [19], [20]. Modern Hasselblad/Zeiss superachromats and the CoastalOpt 60mm f/4 push correction into the UV and near-IR, requiring still more anomalous-dispersion material [27], [31].

### 5.2 Why apochromatism is harder than achromatism

For a contact doublet, two unknowns ($\Phi_1$, $\Phi_2$) match one constraint (achromatism) plus one constraint (system power). To match three wavelengths simultaneously, the designer needs at least one more degree of freedom — a third element with its own glass type — and the partial dispersion equations require that not all three glasses lie on the normal line [3], [17]. In practice, this means at least one element must be drawn from a class such as fluorite, FK/FPL low-dispersion crowns, KZF short flints, or — since the late twentieth century — newly-developed photographic ED, UD, and SLD glasses. Computational lens design enables more complex multi-element solutions, but the underlying glass-chemistry constraint cannot be relaxed [5].

### 5.3 Fluorite and ED glasses

**Calcium fluoride (CaF₂)** is a single-crystal ionic material with $V_d \approx 95$ and an $n_d$ of 1.434. It departs from the silicate normal line significantly in the blue and is therefore the canonical apochromatic crown [17]. Its drawbacks are mechanical (it is softer than ordinary optical glass and more prone to scratching; it cleaves along crystallographic planes), thermal (it has a high coefficient of thermal expansion), and historical (natural fluorite specimens of optical quality are small). The breakthrough at Canon was the controlled growth of large synthetic CaF₂ boules [22].

**ED glasses** are silicate or fluorophosphate glasses formulated to approach fluorite's anomalous behavior without fluorite's fragility. Schott's N-FK51A, N-PK51, and N-PK52A; Ohara's S-FPL-51, S-FPL-53, and S-FPL-55; HOYA's FCD-100 and FCD-1 — all sit measurably off the normal $P_{g,F}$ vs. $V_d$ line [17], [33]. The marketing terminology in the photographic industry diverges across manufacturers — Nikon's ED, Canon's UD/Super-UD, Sigma's FLD, Sony's Super ED, Tamron's XLD — but optically these designations cluster on the same off-normal-line region.

### 5.4 The superachromat

A *superachromat* corrects axial color at four or more wavelengths and is typically extended into the near-IR or UV. The Carl Zeiss Sonnar 5.6/250 Superachromat for the Hasselblad system, introduced at Photokina 1972, was the first widely-known photographic example [31]. Zeiss specified the correction as extending from approximately 400 nm to 1000 nm, with residual chromatic aberration within the Rayleigh limit across that range — meaning that visual focusing in visible light yielded optimum sharpness on infrared-sensitive film without an IR-correction index [31]. In ordinary visible-light photographic use, the difference between a good apochromat and a superachromat is rarely apparent in the print.

### 5.5 Which lenses benefit most from apochromatic correction

- **Telephotos.** The longitudinal chromatic aberration of an achromatic doublet scales with focal length; a 50 mm lens's secondary spectrum may sit safely inside the depth of focus, while a 500 mm lens's secondary spectrum is readily visible [1], [3]. Telephotos are therefore the natural first home of fluorite and ED glass.
- **Macro lenses.** Close-focus operation re-balances the aberrations of a lens originally optimized for infinity. A lens that is achromatic at infinity can be visibly chromatic at 1:1 magnification, and vice versa. Apochromatic macros use multi-configuration optimization plus floating elements [5], [10].
- **Fast standard lenses.** Spherochromatism is the dominant residual at large apertures; apochromatic correction here is mostly about *zonal axial color*, not paraxial axial color [6], [18].
- **Wide-angle lenses for high-resolution sensors.** Lateral color is exacerbated by the off-axis ray bundles of wide angles; apochromatic correction across the field is harder than apochromatic correction on axis [3].

---

## 6. Abbe, Schott, Zeiss, and the Rise of the Modern Apochromat

The modern apochromat is not the work of one person. It is the work of one place — Jena — across roughly two decades, in which three figures and two industries converged [1], [19].

### 6.1 Ernst Abbe and the optical theory of image formation

**Ernst Abbe** (1840–1905) joined Carl Zeiss's optical workshop in Jena in 1866 as research director [19]. Between 1866 and 1876 he developed a coherent theory of microscope image formation, including the diffraction-based resolution limit (the *Abbe sine condition* and the *Abbe diffraction limit*) and the homogeneous immersion objective (1877) [8], [19]. From 1872 onward, Zeiss microscopes were computed objects, not empirically tweaked artifacts. Abbe's central insight — articulated in his 1876 report on the London scientific instrument exposition — was that further progress in resolution depended not on better grinding but on better glass [19], [20].

### 6.2 Otto Schott and the new glass chemistry

**Otto Schott** (1851–1935) was a young glass chemist who in 1879 sent a sample of an experimental lithium glass to Abbe [1], [19]. Abbe recognized that systematic variation of glass chemistry could yield materials with hitherto inaccessible ($n$, $V$) combinations and, crucially, with *anomalous partial dispersion*. He persuaded Schott to relocate to Jena in 1882 and set up a glass research laboratory. In 1884, Schott, Abbe, Zeiss, and Roderich Zeiss formalized a partnership as *Glastechnisches Laboratorium Schott & Genossen* (later *Jenaer Glaswerk Schott & Genossen*, today's Schott AG) [19].

By the late 1880s the Jena catalog had grown to roughly forty optical glass types, including phosphate crowns, barium crowns, and short flints with partial-dispersion ratios that departed from the normal line [17]. These were the materials Abbe needed. Without them, practical high-performance apochromatism would have remained severely constrained.

### 6.3 Carl Zeiss and the manufacturing infrastructure

**Carl Zeiss** himself (1816–1888) was the businessman who funded and held together the enterprise. The Zeiss workshop's scaling from artisanal microscope manufacturing in the 1860s to industrial production by the 1890s was the third leg of the Jena triangle: theory + materials + manufacturing [19].

### 6.4 The 1886 apochromatic objective

In 1886, Zeiss produced its first *apochromatic microscope objective*, computed by Abbe and built from new Schott glasses (and, in the highest-NA versions, from natural fluorite) [19], [20]. A detailed scholarly reconstruction of Abbe's design programme by Bociort and Braat reproduces the surviving construction drawing for one such apochromatic objective (focal distance 16.0 mm, numerical aperture 0.3), dated 9 March 1886, signed "v.A." (von Abbe), now held in the Archive of Carl Zeiss Jena [20].

The 1886 apochromat corrected axial color for three wavelengths and spherical aberration for two. In ordinary use it required a *compensating eyepiece* whose residual lateral color was deliberately tuned to cancel the lateral color left by the objective — a system-level rather than element-level correction, foreshadowing the modern attitude that color correction is a property of the optical *system*, not of individual glasses [9], [20].

### 6.5 The Abbe–Rudolph apochromatic photographic experiments

**Paul Rudolph**, working at Zeiss in the 1890s, attempted to translate the apochromatic concept from microscopy to photography [1]. The early experiments used glasses departing from the normal line and produced what is sometimes called the *Abbe–Rudolph apochromatic triplet*. Kingslake treats these designs as transitional and microscope-adjacent rather than fully successful photographic apochromats [1]. They were not commercially significant photographic lenses; their importance lies in the demonstration that the microscope-apochromat formula could not be picked up unchanged and dropped into a photographic application. Rudolph's productive line ran instead through the Zeiss Anastigmat (1890, later renamed Protar), the Planar (1896), the Unar (1899), and the Tessar (1902), all of which improved field flatness and astigmatism using new Jena glasses but stopped short of full three-color correction [1].

### 6.6 Microscope vs. photographic regime

The reason the migration was difficult is structural. Microscope objectives operate at high numerical apertures (NA up to 1.4), short conjugate distances (working distance < 1 mm for high-NA), small fields, and tightly defined illumination conditions [8]. Photographic objectives operate at moderate apertures (f/2 to f/16, NA 0.03 to 0.3) but across angular fields of 30° to 100°, with infinite-conjugate operation, sometimes at multiple distances, and — critically — must be insensitive to focus shifts with wavelength because the photographic plate or sensor accepts everything in one capture [1], [5]. Distortion, manufacturability, and uniformity of illumination across the field matter to photographic users in a way that they do not matter to microscopists. The result is that the term "apochromat" underwent a slow drift in meaning as it migrated from microscopy to photography.

---

## 7. Apochromatism Enters Photographic Lens History

### 7.1 Process and reproduction lenses

One of the earliest photographic applications to demand apochromatic correction in a practical commercial sense was *photomechanical reproduction*: the copying of original artwork or color separations at fixed conjugate ratios for halftone printing plates. Process lenses face fixed magnifications, flat fields, narrow apertures, and uncompromising color fidelity — the same conditions that microscope apochromats are optimized for, but at photographic field sizes [1]. The Apochromat-Artar, designed by Walter Zschokke at Goerz and introduced circa 1904, is a four-element air-spaced apochromatic dialyte process lens that became the dominant graphic-arts process lens of the twentieth century [1]. The Zeiss Apo-Tessar and the Schneider Apo-Symmar are later members of the same family. These lenses were among the first to wear "Apo" branding seriously in the photographic world and they wore it because they had to: a four-color halftone separation made through a non-apochromatic camera lens registers visibly off in print [1].

### 7.2 Fluorite in photography: the Canon FL-F 300mm f/5.6 (1969)

Outside the special case of process work, the entry of fluorite into mainstream photography is closely associated with Canon. The *Canon F Plan* began in August 1966 with the explicit goal of synthesizing optical-grade calcium fluoride at sizes useful for camera lenses [22]. Canon researchers grew their first synthetic fluorite crystal in an electric furnace in March 1967 and established a production process by February 1968 [22]. The Canon FL-F 300mm f/5.6, released in **May 1969**, was, in Canon's own framing, "the world's first lens for interchangeable-lens cameras targeting ordinary consumers" to employ synthetic fluorite [21], [22]. Two fluorite elements were used. The "F" in "FL-F" stands for "Fluorite" [21]. Canon Optron, the subsidiary established in December 1974, eventually mass-produced fluorite for the entire EF telephoto line [22].

The FL-F 300mm f/5.6 addressed the same practical problem that any telephoto apochromat addresses: suppressing secondary spectrum in long lenses. Canon's documentation does not appear to claim formal three-wavelength correction in the strict apochromatic sense, but the use of anomalous-dispersion material systematically reduced the residual color that all-glass telephotos of the period could not avoid [21], [22].

### 7.3 Nikon and ED glass

Nikon's path was different. Nikon developed *ED (Extra-low Dispersion) glass* internally in the early 1970s [23]. The **NIKKOR-H 300mm f/2.8**, introduced in January 1972 as a press-only product for the Sapporo Winter Olympics, was Nikon's first ED-glass telephoto [23]. The lens used a three-cemented-element apochromatic-style front group with two ED elements; Nikon's designers describe the front group explicitly as "an apochromatic objective lens" in the company's published history [23], [24]. The ED designation was formalized retrospectively; only later was it applied as a naming convention.

A full series of consumer ED super-telephotos — 300mm f/4.5, 600mm f/5.6, 800mm f/8, 1200mm f/11, all using common focusing units — followed in 1975 for the 1976 Innsbruck and Montreal Olympics [24]. The Nikon ED telephoto lineage continued through the AI Nikkor 300mm f/2.8 IF-ED (February 1978, Nikon's first internal-focus implementation), the AI 200mm f/2 IF-ED (1982), the AI 300mm f/2 IF-ED (1984), and the AI 400mm f/2.8 IF-ED (1986) [24]. Throughout this lineage, Nikon generally used ED as its principal camera-lens designation for anomalous-dispersion color correction rather than adopting APO as a broad photographic-lens brand label [23], [24].

### 7.4 The Leica APO-Telyt-R 180mm f/3.4 (1975)

The Leica APO-Telyt-R 180mm f/3.4 was made available to the public in 1975 [25]. Designed by **Walter Mandler** at the Leitz facility in Midland, Ontario (Leitz Canada), the lens originated as part of a U.S. Navy High Resolution Small Format Camera System in the early 1970s, intended for use in surveillance at long distances [25]. The military designation was Elcan-R 180mm f/3.4; it was part of a system that included Leicaflex SL2 bodies, a 35mm Summicron-R, a 75mm f/2 Elcan-R, and a 450mm f/5.6 Elcan-R [25].

Its seven-element-in-four-groups optical formula uses two extra-low-dispersion elements — often called "apo glass" in the Leica community — drawn from Leitz Wetzlar's in-house glass research rather than fluorite [25]. Leica describes the lens as its first apochromatically corrected lens and claims color correction extending into the near-infrared, eliminating the focus-shift step normally needed for IR photography [25].

Leica produced approximately 17,051 lenses across the production run from 1975 to 1998 in two variants — the early 11240 (Series 7.5 filters) and the later 11242 (E60 filters, from approximately 1980). The lens was eventually replaced by the APO-Elmarit-R 180mm f/2.8 [25].

### 7.5 The proliferation of "APO" branding from the 1980s onward

Through the 1980s and 1990s, every major manufacturer extended apochromatic branding into telephoto and macro lines. Leica added the APO-Summicron-R 180mm f/2 (1994) and the APO-Summicron-M series. Zeiss issued the **Apo Sonnar T\* 2/135** for SLR mounts (announced September 2012, delivered from December 2012; 11 elements in 8 groups with anomalous partial dispersion glass and a floating-element system; manufactured in Oberkochen) [34]. Canon launched the EF 200mm f/1.8L USM and later the EF 200mm f/2L IS USM with fluorite elements. Nikon offered the AF Micro-Nikkor 200mm f/4D IF-ED as its apochromatic-class macro lens of the F-mount era.

### 7.6 Modern mirrorless-era apochromats

The combination of mirrorless cameras (with no mirror box constraint on rear-element placement), high-resolution sensors that ruthlessly expose residual color, and modern optimization software (multi-configuration global search, tolerancing in the loop) has produced a new generation of small-batch apochromats marketed for image quality alone.

**Voigtländer APO-Lanthar lenses (Cosina, 1999–present).** The original Voigtländer Apo-Lanthar was designed by **Albrecht Wilhelm Tronnier** in 1954 as a five-element-in-three-groups Heliar-type redesign using new lanthanum-bearing optical glass — hence "Lanthar" — and was produced until 1972 [26]. Cosina, which has manufactured lenses under the Voigtländer brand since 1999, revived the APO-Lanthar name for a modern line of apochromatic primes. Current members include:

- **Macro APO-Lanthar 65mm f/2 Aspherical** (Sony FE, 2017; Nikon Z, 2022): 10 elements in 8 groups, one double-sided aspherical element, five elements with abnormal partial dispersion, 1:2 maximum magnification at 31 cm minimum focusing distance, 10-blade aperture [28].
- **Macro APO-Lanthar 110mm f/2.5** (Sony FE, 2019): 14 elements in 12 groups, three-group floating optical system, 1:1 life-size maximum magnification at 0.35 m, 10-blade aperture [29].
- **APO-Lanthar 50mm f/2 Aspherical** (Sony FE, Nikon Z): two aspherical elements, five elements with abnormal partial dispersion, integrated floating-focus system, 12-blade aperture [30].

Cosina's published specifications for the modern APO-Lanthar lenses show unusually aggressive use of abnormal-partial-dispersion glass (five such elements in both the 65mm f/2 and the 50mm f/2) and floating groups, making them strong candidates for APO verification through patent-prescription reconstruction and wavelength-resolved ray tracing in OpticalBench [28].

> **OpticalBench Note.** For APO-Lanthar and similar modern APO designs that appear in the OpticalBench patent corpus, users can examine the **nd** and **νd** values per element to identify anomalous-dispersion glasses, then enable the **COLOR** overlay to visualize the degree of chromatic correction. The **TRACKS FOCUS** mode can also reveal whether chromatic correction holds at different conjugate distances — a critical distinction for macro APO lenses.

**CoastalOpt 60mm f/4 UV-VIS-IR APO Macro.** Designed by **Brian Caldwell** for Coastal Optical Systems (Jupiter, FL), launched in 2008 and now produced by Jenoptik [27]. The lens has 10 elements in 9 groups, of which five are calcium fluoride. Its specified apochromatic range runs from 315 nm (atmospheric UV cutoff) to 1100 nm (silicon-sensor cutoff), with usable transmission from 290 nm to 1500 nm [27]. It is parfocal across that band: a focus made in visible light is correct for ultraviolet and near-infrared. The 12-layer broadband AR coating is matched to the 315–1100 nm window. The lens is a Nikon F-mount macro with 1:1.5 maximum magnification, an aperture range f/4 to f/45, covering the 24×36 full-frame format [27]. It has no autofocus, no stabilization, and no electronic aperture; it is sold for forensic, scientific, and fine-art technical work. It represents one of the most rigorously specified apochromats ever offered as an off-the-shelf photographic lens.

### 7.7 Computational lens design

Modern apochromats are products of *global optimization*: the designer specifies error functions over multiple wavelengths, multiple field heights, and multiple object distances simultaneously, and the optimizer searches a configuration space large enough to discover non-obvious solutions [5], [10]. Multi-configuration optimization is what makes today's macro APO lenses — which must perform from 1:1 to infinity — possible. Aspheric surfaces, once expensive, are now routinely molded in glass; floating-element groups address focus-distance-dependent residuals; and tolerancing inside the optimization loop ensures that the solution is manufacturable, not merely mathematically optimal [5]. The practical meaning of "APO" has shifted accordingly: designers now have tools that were unavailable in the Abbe era, and the boundary between achromatic and apochromatic is no longer a binary step function but a continuum of correction quality.

> **OpticalBench Note.** The patent prescriptions rendered on OpticalBench contain the full glass list ($n_d$, $\nu_d$) and surface specifications for each element, permitting readers to independently assess whether a design's material content is consistent with an APO claim. Comparing the **FROM ∞** ray trace against the **TRACKS FOCUS** (near-distance) ray trace in the **COLOR** overlay reveals whether chromatic correction holds at multiple conjugate distances — a hallmark of well-optimized multi-configuration APO design.

---

## 8. APO as Optical Fact vs. APO as Marketing Label

There is no regulatory body in the photographic industry that defines or audits the term "apochromat." A manufacturer may apply "APO" to any lens it wishes, and the absence of "APO" on a lens does not preclude apochromatic performance [18]. The reader of an OpticalBench cross-section is therefore obliged to apply optical-design judgment rather than nameplate inspection.

### 8.1 Evidence standards

Reasonable evidence for an apochromatic claim, in roughly increasing order of strength:

1. **Manufacturer marketing copy.** Lowest weight. Canon, Nikon, Leica, and Zeiss are generally truthful in technical claims but selective in what they choose to specify; lesser brands sometimes use "APO" decoratively.
2. **Glass-content disclosure.** A lens with one or more fluorite elements, multiple ED/UD/FPL elements, or both, has the *materials* requirement for apochromatism. This is necessary but not sufficient.
3. **Manufacturer-published longitudinal-color and lateral-color plots.** Zeiss, Leica, and Schneider routinely publish such plots; Canon and Nikon do so for their flagship telephotos.
4. **Patent prescriptions.** A patent gives the full glass list ($n_d$, $V_d$) and surface specifications, permitting independent reconstruction of the chromatic aberration curves. This is the gold standard for design-level inspection — and it is the evidence that OpticalBench's architecture is built around.
5. **Independent laboratory measurement.** Bench MTF measured at multiple wavelengths, focus-shift-vs.-wavelength measured at multiple distances, and residual lateral color measured across the field. Few outlets publish such measurements systematically.

> **Figure 3.** *Wavelength-resolved through-focus MTF: APO vs. non-APO.* Left panel: a lens with residual axial color shows the red, green, and blue MTF peaks displaced along the focus axis — the peaks do not coincide, and the polychromatic MTF (white light) is lower than any single-wavelength peak because the colors cannot all be sharp at the same focus position. Right panel: in a well-corrected apochromat, the three peaks nearly overlap, and the polychromatic MTF approaches the monochromatic value. The difference between the two panels is what "APO correction" means in measurable terms. In OpticalBench, the **COLOR** overlay provides a qualitative version of this test: tightly converging ray fans at the image plane correspond to overlapping MTF peaks, while spread fans correspond to displaced peaks.
>
> *[Schematic figure to be produced as SVG pair showing representative through-focus MTF curves at 486 nm, 546 nm, and 656 nm, with polychromatic envelope. Not computed from a specific lens prescription.]*

### 8.2 Levels of correction that may be conflated

A lens may be optically distinguishable from another lens labeled "APO" along several axes:

- *Reduced axial color only* vs. *reduced axial color + reduced lateral color*.
- *On-axis APO* vs. *full-field APO*. Many fast normal lenses are nearly apochromatic on-axis but show rising color at the edge of the frame.
- *Single-distance APO* vs. *multi-distance APO*. A lens whose chromatic correction is optimized at infinity may show rising axial color at closer focus distances, because element spacings, ray heights, and glass-path lengths all change with conjugate. The aberration balance that produces three-wavelength crossing at infinity does not automatically hold at 1:2 or 1:1 magnification. Floating-element designs — mechanically coupled internal groups whose spacings shift during focusing — are the standard solution: the Voigtländer APO-Lanthar 110mm f/2.5 uses a three-group floating system [29], and the CoastalOpt 60mm f/4 uses an advanced floating formula to maintain apochromatic correction from infinity to its 1:1.5 close limit [27]. A lens corrected only at infinity is a single-distance APO; a lens that holds correction across the focus range is a multi-distance APO, and the distinction is directly observable in OpticalBench's **TRACKS FOCUS** mode.
- *Visible-band APO* (400–700 nm) vs. *broadband APO* (e.g., the CoastalOpt 60mm f/4 at 315–1100 nm [27]).
- *Apochromatic in axial color* vs. *also corrected for spherochromatism*. The latter matters most at f/1.4 to f/2 apertures.

Many modern lenses occupy a middle ground that is not well served by the achromat/apochromat binary. For editorial purposes, OpticalBench uses *semi-apochromat* (sometimes "quasi-APO" or, informally, "ED-corrected") to describe lenses whose residual secondary spectrum is substantially reduced below ordinary achromatic correction but where strict three-wavelength correction is not demonstrated. This is an interpretive category for design analysis, not a manufacturer designation or an industry standard. A semi-apochromat typically uses one or two anomalous-dispersion elements to reduce secondary spectrum measurably below the ordinary achromatic floor — often by a factor of two to four — without achieving the strict three-wavelength crossing that defines a true apochromat. Most consumer telephoto lenses branded "ED" but not "APO" fall into this category, as do many wide-angle and normal primes that use a single FPL or fluorite element alongside otherwise conventional glass. The semi-apochromat is an honest and useful design class: for a 200 mm f/4 telephoto, halving the secondary spectrum may be all that is needed to place the residual inside the diffraction-limited depth of focus. In OpticalBench's **COLOR** overlay, a semi-apochromat typically shows partial but incomplete convergence of the three wavelength ray fans — tighter than an ordinary achromat, but with a visible residual spread that a full apochromat would eliminate.

A modest editorial proposal — not enforceable, but useful — is that the OpticalBench gloss for a given lens should annotate which of these conditions hold *based on the patent prescription and any available bench data*, rather than echoing the manufacturer's APO label.

---

## 9. Chronological Reference Table

| Year (approx.) | Designer / Maker | Lens / Object | Significance |
|---|---|---|---|
| 1729–1733 | Chester Moor Hall (design); George Bass (fabrication) | Achromatic doublet objective | First known crown–flint achromatic objective; not published or patented [13], [14] *(a)* |
| 1747–1753 | Leonhard Euler | Theoretical achromatism papers | Theoretical framework for color correction *(b)* |
| 1754 | Samuel Klingenstierna | Critique of Newton's dispersion law | Demonstrated mathematically that Newton's proportionality was wrong [15] |
| 1758 | John Dollond | Achromatic telescope objective; UK patent 19 Apr. 1758 | First publication, patent, and commercial scaling [12] *(c)* |
| 1766 | (legal) | *Dollond v. Champneys* | Patent upheld; Hall recognized as inventor in fact [13] |
| ca. 1812 | Wollaston / Chevalier | Meniscus and achromatic landscape lenses | Carry achromatic doublet into early photography [1] *(d)* |
| 1830 | Joseph Jackson Lister | Achromatic compound microscope objective | First practical achromatic + spherically corrected microscope [16] |
| 1840 | J. Petzval (calc.) / Voigtländer (mfg.) | Petzval portrait, ~f/3.6, ~150 mm | First mathematically computed photographic lens [1] *(e)* |
| 1861 | J. H. Dallmeyer | Triple Achromatic Lens, f/10 | "Triple" = three achromatic cells, not three colors [1] |
| 1866 | J. H. Dallmeyer (UK); H. A. Steinheil (DE) | Rapid Rectilinear / Aplanat | Symmetric achromatic doublet pair [1] |
| 1879–1884 | Otto Schott + Ernst Abbe | New Jena glasses; Schott & Genossen founded 1884 | Anomalous partial dispersion glasses become available [19] |
| 1886 | Ernst Abbe / Carl Zeiss | Apochromatic microscope objective | First true three-wavelength correction [19], [20] |
| 1890s | Paul Rudolph (Zeiss) | Abbe–Rudolph apo. photographic experiments | Transitional; microscope-adjacent [1] |
| ca. 1904 | Walter Zschokke / Goerz | Apochromat-Artar (process lens) | First widely-used photographic apochromat [1] *(f)* |
| 1954–1972 | Albrecht W. Tronnier / Voigtländer | Apo-Lanthar large-format lenses | Lanthanum-bearing crowns; redesigned Heliar form [26] |
| 1969 (May) | Canon | FL-F 300mm f/5.6 | First synthetic-fluorite consumer interchangeable lens [21], [22] *(g)* |
| 1972 (Jan.) | Nikon | NIKKOR-H 300mm f/2.8 | First Nikon ED-glass telephoto, Sapporo Olympics [23] *(h)* |
| 1972 | Carl Zeiss / Hasselblad | Sonnar 5.6/250 Superachromat | First photographic superachromat; 400–1000 nm [31] *(i)* |
| 1975 | Walter Mandler / Leitz Canada | APO-Telyt-R 180mm f/3.4 | First Leica APO; originated as Elcan-R for U.S. Navy [25] *(j)* |
| 1978 (Feb.) | Nikon | AI Nikkor 300mm f/2.8 IF-ED | First Nikon internal-focus ED telephoto [24] |
| 2008 | Brian Caldwell / Coastal Optical Systems | 60mm f/4 UV-VIS-IR APO Macro | True 315–1100 nm apochromat [27] *(k)* |
| 2012 | Carl Zeiss | Apo Sonnar T* 2/135 ZE/ZF.2 | Modern photographic apochromat for SLR [34] |
| 2017 | Cosina / Voigtländer | Macro APO-Lanthar 65mm f/2 (FE) | Mirrorless-era APO macro [28] |
| 2019 | Cosina / Voigtländer | Macro APO-Lanthar 110mm f/2.5 (FE) | 1:1 macro APO for FE mount [29] |

**Table notes:**

*(a)* Hall's priority is established through the legal record of the 1764 Privy Council petition and the 1766 *Dollond v. Champneys* ruling, not through any publication by Hall himself. Bass's testimony and the subcontracting chain through Scarlett and Mann are the primary evidence. No surviving Hall-era achromatic doublet has been definitively identified in a museum collection.

*(b)* Euler's contributions were theoretical papers arguing from the apparent achromatism of the human eye that achromatic refraction must be possible. He did not produce a working achromatic doublet. His work influenced Klingenstierna and, indirectly, Dollond.

*(c)* Dollond's claim rests on both peer-reviewed publication (*Philosophical Transactions*, 1758) and patent grant (19 April 1758). He received the Copley Medal from the Royal Society. This is the strongest combination of primary evidence for any entry in the table.

*(d)* "ca. 1812" is approximate. Wollaston's meniscus lens dates to 1812; Chevalier's achromatic landscape lens for the Daguerre camera dates specifically to 1839. The range covers the transition from Wollaston's non-achromatic meniscus to Chevalier's achromatic adaptation.

*(e)* Focal length variously reported as approximately 150 mm or 160 mm across sources. The f/3.6 aperture is consistent across Kingslake, the Voigtländer corporate record, and surviving museum specimens. Petzval's computation was assisted by artillery cadets; refractive-index data was supplied by Voigtländer.

*(f)* "ca. 1904" follows Kingslake's attribution to Walter Zschokke at Goerz. The exact introduction year is not pin-pointed in primary sources; the Goerz serial-number tables place production serials in the 1903–1908 range, consistent with a circa 1904 introduction.

*(g)* "First synthetic-fluorite consumer interchangeable lens" is Canon's own framing (Canon Camera Museum and 2019 50th-anniversary press release). This is a manufacturer claim; it is not independently contested in the published literature, but the qualifier "targeting ordinary consumers" is Canon's.

*(h)* The NIKKOR-H 300mm f/2.8 was initially a press-only product; the "ED" designation was applied retrospectively. Nikon's *Thousand and One Nights* (Tales 11 and 66) is the primary source. The designers describe the front group as "an apochromatic objective lens," but Nikon as a corporation did not brand the complete lens as "APO."

*(i)* "400–1000 nm" spectral range and "superachromat" designation are from the Zeiss/Hasselblad product datasheet. "Residual chromatic aberration within the Rayleigh limit" is Zeiss's specification; independent bench verification at this level of detail has not been published.

*(j)* Military origin and Walter Mandler attribution from Carl Merkin's article on the Leica Camera Blog — a Leica-affiliated source, not an independent historical study. Production figures (17,051 units) and variant details (11240/11242) are from Leica Wiki and lens-db.com, which aggregate known serial-number data.

*(k)* All specifications from the Jenoptik product brochure. "World's first fully corrected UV-VIS-NIR lens" appears in the original Coastal Optical Systems press materials; this is a manufacturer claim. Designer attribution (Brian Caldwell) is widely reported but not sourced to a patent or published design paper in the current bibliography.

---

## 10. Conclusion: The Evolving Meaning of Color Correction

Achromats and apochromats are not simply old and new versions of the same idea. They represent successive levels of control over dispersion, enabled by theory, optical glass, manufacturing, and changing imaging requirements.

The achromatic doublet — Hall's concept, Dollond's patent, Chevalier's photographic adaptation, Petzval's f/3.6 architecture — was a correction class adequate for two centuries of telescope making and nearly a century of photographic lens design. Its secondary spectrum is a fixed consequence of normal-line glasses and cannot be reduced without anomalous-dispersion material [3], [17]. The apochromat — Abbe's theory, Schott's glass, Zeiss's manufacturing, Rudolph's failed photographic translation, the process-lens success, the fluorite telephoto, the modern ED prime — is a correction class that became practical only when the glass catalog expanded beyond the silicate normal line and when designers acquired the mathematical and computational tools to exploit that expansion [1], [5], [19].

The important modern question is not simply whether a lens says "APO," but:

- What kind of chromatic aberration remains?
- Where does it appear in the image?
- Is the residual color axial, lateral, spherochromatic, or field-dependent?
- Is the correction maintained at different focus distances?
- Is the design evidence consistent with the label?
- Is the correction appropriate for the lens's intended use?

Modern computational design tools have shifted the landscape: optimization across multiple configurations and wavelengths is routine, and the boundary between "achromatic" and "apochromatic" is no longer a binary step function but a continuum of correction quality [5], [10]. The history of achromats and apochromats is therefore not the history of color being "solved" once and for all, but the history of increasingly disciplined compromises between wavelength, glass, geometry, field, speed, and use.

OpticalBench's mission — visualizing optical lens cross-sections from patent data, with the full glass list and surface prescriptions available for inspection — is one way of joining that conversation at the level where the truth of any APO claim resides: at the surfaces and glasses themselves.

---

## Bibliography

[1] R. Kingslake, *A History of the Photographic Lens*. San Diego, CA, USA: Academic Press, 1989.

[2] R. Kingslake and R. B. Johnson, *Lens Design Fundamentals*, 2nd ed. Bellingham, WA, USA: SPIE Press, 2010.

[3] W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2008.

[4] W. J. Smith, *Modern Lens Design*, 2nd ed. New York, NY, USA: McGraw-Hill, 2005.

[5] J. M. Sasian, *Introduction to Lens Design*. Cambridge, U.K.: Cambridge University Press, 2019.

[6] V. N. Mahajan, *Optical Imaging and Aberrations, Part I: Ray Geometrical Optics*. Bellingham, WA, USA: SPIE Press, 1998.

[7] V. N. Mahajan, *Optical Imaging and Aberrations, Part II: Wave Diffraction Optics*, 2nd ed. Bellingham, WA, USA: SPIE Press, 2011.

[8] M. Born and E. Wolf, *Principles of Optics*, 7th (expanded) ed. Cambridge, U.K.: Cambridge University Press, 1999.

[9] A. E. Conrady, *Applied Optics and Optical Design*, Parts 1 and 2. New York, NY, USA: Dover, 1957 (orig. pub. 1929–1960).

[10] R. E. Fischer, B. Tadic-Galeb, and P. R. Yoder, *Optical System Design*, 2nd ed. New York, NY, USA: McGraw-Hill, 2008.

[11] I. Newton, *Opticks: Or, A Treatise of the Reflections, Refractions, Inflections and Colours of Light*, orig. pub. London, U.K., 1704. New York, NY, USA: Dover, 1952.

[12] J. Dollond, "An account of some experiments concerning the different refrangibility of light," *Phil. Trans. R. Soc. Lond.*, vol. 50, pp. 733–743, 1758.

[13] R. Sorrenson, "Dollond & Son's pursuit of achromaticity, 1758–1789," *Hist. Sci.*, vol. 39, no. 1, pp. 31–55, 2001.

[14] R. Willach, "New light on the invention of the achromatic telescope objective," *Notes Rec. R. Soc. Lond.*, vol. 50, no. 2, pp. 195–210, 1996.

[15] S. Klingenstierna, "Anmärkning vid brytnings-lagen af särskilta slags ljus-strålar," *Kungl. Sv. Vetenskapsakad. Handl.*, vol. 15, pp. 297–306, 1754.

[16] J. J. Lister, "On some properties in achromatic object-glasses applicable to the improvement of the microscope," *Phil. Trans. R. Soc. Lond.*, vol. 120, pp. 187–200, 1830.

[17] Schott AG, "Technical Information TIE-29: Refractive Index and Dispersion," Mainz, Germany. [Online]. Available: https://www.schott.com/shop/medias/tie-29-refractive-index-and-dispersion-eng.pdf. Accessed: Apr. 28, 2026.

[18] H. H. Nasse, "Achromat and Apochromat — What is the Difference?" Carl Zeiss AG, Camera Lens Division, Oberkochen, Germany, 2000. [Online]. Available: https://lenspire.zeiss.com/photo/en/article/achromat-and-apochromat-what-is-the-difference. Accessed: Apr. 28, 2026.

[19] Carl Zeiss AG, "Ernst Abbe — Physicist, Inventor, Entrepreneur, and Social Reformer," Oberkochen, Germany. [Online]. Available: https://www.zeiss.com/corporate/en/about-zeiss/past/history/ernst-abbe.html. Accessed: Apr. 28, 2026.

[20] F. Bociort and J. Braat, "Ernst Abbe's research program (1878–1886)," *Wiley Analytical Science*, 2021. [Online]. Available: https://analyticalscience.wiley.com/content/article-do/ernst-abbe-s-research-program-1878-1886. Accessed: Apr. 28, 2026.

[21] Canon Inc., "FL-F300mm f/5.6," Canon Camera Museum. [Online]. Available: https://global.canon/en/c-museum/product/fl117.html. Accessed: Apr. 28, 2026.

[22] Canon Inc., "Canon celebrates 50th anniversary of lens employing synthetic fluorite," Canon Global, Nov. 7, 2019. [Online]. Available: https://global.canon/en/news/2019/20191107.html. Accessed: Apr. 28, 2026.

[23] Nikon Corp., "NIKKOR — The Thousand and One Nights, Tale 11," Nikon Imaging. [Online]. Available: https://imaging.nikon.com/imaging/information/story/0011/. Accessed: Apr. 28, 2026.

[24] Nikon Corp., "NIKKOR — The Thousand and One Nights, Tale 66," Nikon Imaging. [Online]. Available: https://imaging.nikon.com/history/story/0066/index.htm. Accessed: Apr. 28, 2026.

[25] C. Merkin, "The Spy Who Came in From the Cold — The 180mm f/3.4 APO-Telyt-R," Leica Camera Blog, Aug. 28, 2012. [Online]. Available: https://leica-camera.com/en-int/blog/photography/carl-merkin-180mm-f34-apo-telyt-r. Accessed: Apr. 28, 2026.

[26] A. Cröll, "Voigtländer Large Format Lenses from 1949–1972," arnecroell.com. [Online]. Available: https://www.arnecroell.com/voigtlaender.pdf. Accessed: Apr. 28, 2026.

[27] Jenoptik AG, "CoastalOpt UV-VIS-IR 60 mm 1:4 APO Macro," Jena, Germany. [Online]. Available: https://www.jenoptik.com/-/media/websitedocuments/optics/optics/product-brochure-multispectral-lenses-60mm.pdf. Accessed: Apr. 28, 2026.

[28] Cosina Co., Ltd., "65 mm / 1:2.0 MACRO APO-Lanthar Aspherical," Voigtländer. [Online]. Available: https://www.voigtlaender.de/z-mount/65mm-120-macro-apo-lanthar-aspherical/?lang=en. Accessed: Apr. 28, 2026.

[29] Cosina Co., Ltd., "110 mm / 1:2.5 MACRO APO-Lanthar," Voigtländer. [Online]. Available: https://www.voigtlaender.de/lenses/e-mount/110-mm-12-5-macro-apo-lanthar/?lang=en. Accessed: Apr. 28, 2026.

[30] Cosina Co., Ltd., "50 mm / 1:2.0 APO-Lanthar," Voigtländer. [Online]. Available: https://www.voigtlaender.de/lenses/e-mount/50-mm-120-apo-lanthar-e/?lang=en. Accessed: Apr. 28, 2026.

[31] Carl Zeiss AG, "Sonnar T* 5.6/250 Superachromat," Oberkochen, Germany. [Online]. Available: https://www.zeiss.com/content/dam/consumer-products/downloads/historical-products/photography/hasselblad-c/en/datasheet-zeiss-sonnar-superachromat-56250-en.pdf. Accessed: Apr. 28, 2026.

[32] Whipple Museum of the History of Science, "The Problems with Lenses, and the 19th-century Solution," University of Cambridge, Cambridge, U.K. [Online]. Available: https://www.whipplemuseum.cam.ac.uk/explore-whipple-collections/microscopes/problems-lenses-and-19th-century-solution. Accessed: Apr. 28, 2026.

[33] Ohara Inc., *Optical Glass Catalog*, Kanagawa, Japan. [Online]. Available: https://www.ohara-inc.co.jp/en/product/optical/. Accessed: Apr. 28, 2026.

[34] Carl Zeiss AG, "Apo Sonnar T* 2/135 Product Datasheet," Oberkochen, Germany, 2012. [Online]. Available: https://www.zeiss.com/content/dam/consumer-products/downloads/historical-products/photography/classic-lenses/en/datasheet-zeiss-classic-apo-sonnar-2135.pdf. Accessed: Apr. 28, 2026.

---

## Appendix A: OpticalBench Terminology

The following terms appear throughout this article and correspond to specific features or data fields in the OpticalBench.net lens cross-section viewer.

**EFL (Effective Focal Length).** The focal length of the complete optical system, computed from the patent prescription's surface data. Displayed in the lens header.

**f-number.** The ratio of EFL to the entrance pupil diameter; determines the lens's light-gathering power and diffraction limit. Displayed in the lens header alongside EFL.

**STO (Stop).** The aperture stop surface in the patent prescription. In the cross-section viewer, STO marks the physical location of the iris diaphragm within the lens.

**IMG (Image).** The image plane — the surface at which the sensor or film sits. Ray fans are traced from the object through the lens to IMG.

**nd (Refractive Index at d-line).** The refractive index of each glass element at the helium d-line (587.6 nm). Displayed per element in the cross-section viewer. Higher nd generally indicates a denser glass.

**νd (Abbe Number).** The constringence of each glass element, measuring its dispersion. Displayed per element alongside nd in the OpticalBench viewer. This is the same quantity denoted $V_d$ in the equations throughout this article; OpticalBench uses the Greek-letter convention νd. Low νd indicates a high-dispersion flint; high νd indicates a low-dispersion crown. A high Abbe number alone does not confirm anomalous partial dispersion; APD must be verified against partial-dispersion data (see §2.3).

**FL (Focal Length).** Used interchangeably with EFL in single-group contexts. In multi-group systems, individual group focal lengths may differ from the system EFL.

**LCA (Longitudinal Chromatic Aberration).** Axial color — the wavelength-dependent shift in focus position along the optical axis. Visible in the COLOR overlay as the axial separation between ray-fan convergence points at different wavelengths.

**TCA (Transverse Chromatic Aberration).** Lateral color — the wavelength-dependent shift in image height. Visible in the COLOR overlay as the transverse separation of ray-fan endpoints at the image plane, increasing with field angle.

**APD (Anomalous Partial Dispersion).** A flag or annotation indicating that a glass element departs from the normal line on the $P_{g,F}$ vs. $V_d$ diagram. Elements with APD are the materials that enable apochromatic correction.

**COLOR overlay.** A visualization mode that traces rays at multiple wavelengths (typically C, d, and F lines, shown in red, green, and blue) simultaneously through the lens cross-section. Enables visual assessment of chromatic correction: tightly converging multi-color ray fans indicate good correction; spread fans indicate residual chromatic aberration.

**FROM ∞ mode.** The default ray-trace configuration, in which the object is at infinite conjugate. Ray fans enter the lens as collimated bundles. This is the standard condition for evaluating a lens's performance at infinity focus.

**TRACKS FOCUS mode.** A variable-conjugate ray-trace mode that allows the user to change the object distance and observe how aberrations — including chromatic aberrations — shift as the lens is focused at different distances. Essential for evaluating whether a lens's APO correction holds from infinity to close focus.

**K, A4, A6, A8 (Aspheric Coefficients).** The conic constant and even-order polynomial coefficients describing an aspheric surface profile. Displayed for aspheric elements in the prescription data. Aspheric surfaces provide additional degrees of freedom for aberration correction, including spherochromatism control in APO designs.

**sd (Semi-Diameter).** The clear aperture radius of each surface in the prescription, defining the physical extent of each lens element through which rays pass.

---

## Appendix B: Chromatic Correction Classes

The following table summarizes the correction continuum from achromat to superachromat. The numerical ranges are heuristic, not formal definitions; actual classification depends on wavelength selection, aperture, focal length, field position, focus distance, and the accepted tolerance criterion. The table is intended as a guide for interpreting patent prescriptions and OpticalBench visualizations.

| Correction Class | Chromatic Correction | Spherical Correction | Typical Secondary Spectrum | Typical Materials | Representative Example |
|---|---|---|---|---|---|
| **Achromat** | Two wavelengths brought to common focus (e.g., C and F lines) | Spherical aberration corrected at one wavelength | ~f/2000 to f/2500 | Normal-line crown + flint (e.g., BK7 + F2; K5 + KF9) | Rapid Rectilinear; telescope doublet objectives |
| **Semi-apochromat** | Two wavelengths corrected; secondary spectrum measurably reduced below the ordinary achromatic floor | Spherical correction at one wavelength; spherochromatism partially reduced | Reduced, typically by a factor of 2–4× vs. achromat | One or two anomalous-dispersion elements (e.g., one S-FPL-53 or one fluorite) alongside conventional glass | Most consumer ED telephotos; Canon FL-F 300mm f/5.6; normal primes with a single FPL or fluorite element |
| **Apochromat** | Three wavelengths brought to common focus; secondary spectrum substantially eliminated | Spherical aberration corrected at two wavelengths; spherochromatism substantially controlled | Greatly reduced (often within diffraction-limited depth of focus at working aperture) | Typically two or more anomalous-dispersion elements (e.g., multiple FPL crowns, fluorite, or KZF short flints) | Goerz Apochromat-Artar; Leica APO-Telyt-R 180mm f/3.4; Voigtländer Macro APO-Lanthar 65mm f/2; Zeiss Apo Sonnar T* 2/135 |
| **Superachromat** | Four or more wavelengths brought to common focus; correction extended into UV and/or near-IR | Spherical aberration corrected at two or more wavelengths across extended spectral range | Within Rayleigh limit across 400–1000+ nm | Multiple fluorite elements plus anomalous-dispersion glass; broadband AR coatings | Carl Zeiss Sonnar 5.6/250 Superachromat; CoastalOpt 60mm f/4 UV-VIS-IR APO |

**Reading this table with OpticalBench:**

- **Achromat vs. semi-apochromat:** In the COLOR overlay, an achromat shows a clear axial gap between the green ray-fan convergence and the coincident red/blue convergence. A semi-apochromat narrows this gap but does not close it.
- **Semi-apochromat vs. apochromat:** An apochromat shows all three ray fans (red, green, blue) converging to essentially the same axial point. A semi-apochromat shows partial convergence — tighter than an achromat, but with a visible residual spread.
- **Apochromat vs. superachromat:** The difference is primarily visible outside the standard visible band. A superachromat maintains its tight convergence into the near-UV and near-IR — observable if OpticalBench traces rays at extended wavelengths.
- **Materials identification:** A high Abbe number ($V_d$) indicates low dispersion, but anomalous partial dispersion is determined by deviation from the partial-dispersion normal line, not by $V_d$ alone. An element with $V_d$ above approximately 80 is a candidate for closer inspection, but APD must be confirmed against partial-dispersion data (e.g., Schott TIE-29 [17] or Ohara catalog [33] $P_{g,F}$ values). The count and placement of confirmed anomalous-dispersion elements in a design are the strongest predictors of which correction class the lens belongs to.

Note that these classes are not sharply bounded. Real lenses fall on a continuum, and a given lens may be apochromatic on-axis but only semi-apochromatic across the full field, or apochromatic at infinity but semi-apochromatic at close focus. The table describes the best-case correction level the design achieves under favorable conditions.
