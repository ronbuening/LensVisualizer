# Sigma 105mm F1.4 DG HSM | Art — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2019-144477 A
**Application Number:** JP 2018-030078
**Filed:** 2018-02-22
**Published:** 2019-08-29
**Inventor:** 若月 剛泰
**Applicant:** 株式会社シグマ (Sigma Corporation)
**Title:** 大口径レンズ (Large-aperture lens)
**Embodiment analyzed:** Numerical Example 1 (第1実施例)

Numerical Example 1 of JP 2019-144477 A transcribes the production optical formula of the **Sigma 105mm F1.4 DG HSM | Art** (announced 2018). The identification rests on the convergence of several independent criteria:

1. **Focal length and aperture.** The example specifies $f = 101.85\ \text{mm}$ at $F1.46$, matching the marketed 105 mm f/1.4 to within the customary rounding of nominal designations. An independent paraxial ray trace of the prescription reproduces $f = 101.85\ \text{mm}$ exactly.
2. **Format coverage.** The image height is $Y = 21.63\ \text{mm}$ and the half-field $\omega \approx 11.9°$ ($2\omega \approx 23.85°$), consistent with full-frame 135 coverage and Sigma's published angle of view of 23.3°.
3. **Element and group count.** The example contains 17 glass elements arranged in 12 air-separated groups — the exact, and unusually high, count Sigma cites for this lens.
4. **Special-element census.** Three elements share the optical constants of a fluorite-class ultra-low-dispersion glass ($n_d = 1.43700$, $\nu_d = 95.10$), two further positive elements use special-low-dispersion glasses ($\nu_d = 63.88$ and $68.63$), and exactly one element (the rearmost) carries two aspherical surfaces. This reproduces Sigma's published construction of **three FLD elements, two SLD elements, and one aspherical element**.
5. **Focus behavior and proximity performance.** The example's variable-spacing table describes a single interior group translating for focus, with the front group and image plane stationary — the internal-focus behavior Sigma describes for the production lens. A finite-conjugate trace at the patent's near-focus configuration yields a lateral magnification of $\beta = -0.121$, i.e. $1{:}8.3$, matching Sigma's published maximum reproduction ratio exactly at the published minimum focus distance of 1.0 m.

A reader who knows the lens but not the patent can verify the identification from this section alone: the focal length, aperture, element/group count, special-glass census, and proximity magnification all coincide.

---

## Optical Architecture

The design is a **two-group, positive–positive, internal-focus short-telephoto prime** rather than a true telephoto optical layout. Its physical track is longer than its focal length (about $171.92/101.85 = 1.69$ before cover-glass folding), so the term "short telephoto" is used here in the photographic focal-length sense, not in the optical-engineering sense of a telephoto ratio below unity. In the convention used by the patent, the system divides into a fixed front group **G1** (surfaces 1–14) and a moving rear group **G2** (surfaces 15–30, spanning the aperture stop). Independent paraxial slice traces give the group focal lengths

$$f_{G1} = +334.5\ \text{mm}, \qquad f_{G2} = +90.3\ \text{mm},$$

so the rear group is the dominant power-bearing assembly, and the front group acts as a weakly powered, heavily corrected collector. This is the characteristic signature of a highly corrected fast portrait-length prime: a long, large-diameter front section gathers the f/1.4 cone and pre-corrects axial color, while a compact, strongly positive rear section forms most of the image and serves as the focusing unit.

Each group subdivides further, in the composition the patent sets out for Example 1 (§0078–0084):

- **G1a** (surfaces 1–8, $f \approx +1016\ \text{mm}$) — three positive menisci convex to the object and one negative (concave) lens (§0079). The negative element here is an air-separated singlet, not a cemented member. Nearly afocal as a unit; its role is light collection at full aperture and the first stage of chromatic and spherical pre-correction.
- **G1b** (surfaces 9–11, $f \approx -421.7\ \text{mm}$) — a cemented negative doublet, concave to the object, pairing a fluorite-class positive with a short-flint negative (§0080). This is the chromatic heart of the front group.
- **G1c** (surfaces 12–14, $f \approx +203.8\ \text{mm}$) — a cemented positive doublet, convex to the object, of high-index dense lanthanum flint and short flint that restores positive power to G1 (§0081).
- **G2a** (surfaces 15–21, $f \approx +355.1\ \text{mm}$) — two positive menisci convex to the object plus a cemented negative doublet, ahead of the stop (§0083).
- **G2b** (surfaces 23–30, $f \approx +83.5\ \text{mm}$) — behind the stop: two cemented negative doublets, each concave to the object, followed by a biconvex singlet with both surfaces aspherical, which carries the bulk of the rear positive power and the spherical-aberration correction (§0084).

The single architectural choice that most distinguishes this design from a conventional fast portrait prime is the deliberate over-provisioning of anomalous-dispersion glass in **both** groups — three fluorite-class FLD positives plus a battery of short-flint negatives in G1, and a dense-flint plus two SLD positives in G2a — so that secondary spectrum is attacked twice along the optical path rather than once. The verified conditional-expression reproduction below shows this explicitly.

The kinematics are simple at the group level: **G2 translates as a rigid body** toward the object for near focus, while G1 and the image plane remain fixed. The motion is absorbed by the two air gaps that bound G2 (the space ahead of it, surface 14, and the back-focal space behind it, surface 30). Because nothing at the front of the barrel moves and the overall length is held constant, the mechanism presents externally as internal focusing.

---

## Element-by-Element Analysis

Elements are numbered L1–L17 from object to image. Shapes are derived from the signs of both bounding radii. In-air thick-lens focal lengths are computed for each element as an isolated singlet (a standalone descriptor, independent of in-context conjugates). Glass identities are inferred from the stored $(n_d, \nu_d)$ matched against vendor catalogs — **the patent itself names no glasses** — and are discussed in detail in the following section; the most likely vendor is consistent throughout with a Japanese (Hoya/Ohara) palette.

### Group G1a — collector (surfaces 1–8)

**L1 — Positive meniscus, convex toward object.**
$n_d = 1.65844,\ \nu_d = 50.85$. Glass: BACED5 (Hoya) / N-SSK5 (Schott) class — a dense barium crown. $f = +475.6\ \text{mm}$.
The frontmost element. Its large diameter (the production lens accepts 105 mm filters) sets the entrance-pupil clearance that gives the lens its peripheral-illumination margin. Optically it is only weakly powered; its job is to begin the gentle convergence of the f/1.4 cone with minimal aberration injection. A barium-crown index near 1.66 with moderate dispersion is a conservative, low-cost choice for a surface this large.

**L2 — Positive meniscus, convex toward object.**
$n_d = 1.43700,\ \nu_d = 95.10$. Glass: FCD100 (Hoya) ≈ S-FPL53 (Ohara) — fluorite-class FLD. $f = +617.5\ \text{mm}$.
The first of the three FLD elements. Placed early in the converging cone, it contributes positive power with the lowest available dispersion and a strongly positive anomalous partial dispersion ($\Delta P_{g,F} = +0.056$), beginning the correction of axial secondary spectrum where the marginal ray is still high.

**L3 — Positive meniscus, convex toward object.**
$n_d = 1.43700,\ \nu_d = 95.10$. Glass: FCD100 (Hoya) ≈ S-FPL53 (Ohara) — fluorite-class FLD. $f = +190.8\ \text{mm}$.
The second FLD element and the strongest single positive in G1a. Together with L2 it supplies most of the front group's converging power using fluorite-class glass, so that the unavoidable longitudinal color of a fast front section is introduced with the minimum possible dispersion.

**L4 — Negative meniscus, convex toward object.**
$n_d = 1.61310,\ \nu_d = 44.36$. Glass: E-ADF10 (Hoya) / N-KZFS4 (Schott) class — short flint. $f = -105.3\ \text{mm}$.
The negative companion that balances the three FLD positives. Its short-flint character — a moderate index paired with a **negative** anomalous partial dispersion ($\Delta P_{g,F} = -0.008$) — is precisely what is required to cancel the positive $\Delta P_{g,F}$ of the fluorite crowns, suppressing secondary spectrum rather than merely first-order color. It also injects the negative power needed to flatten the field and control distortion at this height.

### Group G1b — cemented negative doublet (surfaces 9–11)

**L5 — Positive meniscus, concave toward object (FLD).**
$n_d = 1.43700,\ \nu_d = 95.10$. Glass: FCD100 (Hoya) ≈ S-FPL53 (Ohara) — fluorite-class FLD. $f = +353.9\ \text{mm}$.
The third FLD element, and the positive member of the G1b cemented doublet.

**L6 — Negative meniscus, concave toward object.**
$n_d = 1.61340,\ \nu_d = 44.27$. Glass: S-NBM51 (Ohara) / N-KZFS4 (Schott) class — short flint. $f = -193.6\ \text{mm}$.
Cemented to the rear of L5. The L5+L6 pair acts as a net negative doublet ($f_{G1b} = -421.7\ \text{mm}$): a fluorite-class positive bonded to a short-flint negative. This is the canonical secondary-spectrum-corrected achromatic interface — the high-$\nu_d$, positive-$\Delta P_{g,F}$ crown and the short-flint, negative-$\Delta P_{g,F}$ flint together drive both the primary and secondary chromatic residuals of the front group toward zero. The patent (§0023–0024) describes this sub-group's purpose explicitly: housing the low-index, low-dispersion, high-positive-anomalous-dispersion ("fluorite-like") glass on a convex element *inside* a negative sub-group lets it correct axial color without the Petzval-sum degradation that such glass causes when used freely on the front positives. The cemented junction (the shared radius at surface 10) also provides a steep, color-correcting refraction without an exposed air–glass surface that would add spherical aberration.

### Group G1c — cemented positive doublet (surfaces 12–14)

**L7 — Biconvex positive.**
$n_d = 1.83481,\ \nu_d = 42.72$. Glass: S-LAH55V (Ohara) / TAFD5G (Hoya) class — high-index dense lanthanum flint. $f = +62.7\ \text{mm}$.
The most strongly powered single positive in the front group. Its function is power, not color: a high-index dense lanthanum flint supplies convergence with a comparatively gentle surface curvature, holding down both spherical-aberration generation and Petzval contribution. Although its $\nu_d$ is moderate and its $\Delta P_{g,F}$ slightly negative, the design counts it among the front-group positive lenses for the purpose of the averaged anomalous-dispersion condition (below).

**L8 — Biconcave negative.**
$n_d = 1.61340,\ \nu_d = 44.27$. Glass: S-NBM51 (Ohara) / N-KZFS4 (Schott) class — short flint. $f = -83.1\ \text{mm}$.
Cemented to the rear of L7. The L7+L8 pair is a net positive doublet ($f_{G1c} = +203.8\ \text{mm}$) that returns positive power to G1 after the negative excursion of G1b, while the short-flint negative continues the negative-$\Delta P_{g,F}$ bookkeeping that balances the fluorite crowns.

### Group G2a — front of rear group (surfaces 15–21)

**L9 — Positive meniscus, convex toward object.**
$n_d = 1.92286,\ \nu_d = 20.88$. Glass: E-FDS1 (Hoya) ≈ N-SF66 (Schott) — dense flint. $f = +128.1\ \text{mm}$.
The most object-side positive of the rear group, and a deliberately unusual choice: a **positive** element made of a very dense, very high-dispersion flint. Its purpose is twofold. First, the high index ($n_d = 1.923$) supplies positive power with low surface curvature and a favorable Petzval sign — the patent (§0058) notes that a high-index glass here eases astigmatism and field-curvature correction. Second — and this is the design's most pointed chromatic move — its large **positive** anomalous partial dispersion ($\Delta P_{g,F} = +0.028$) on a positive element corrects rear-group secondary spectrum, complementing the fluorite work done in G1; the patent stresses (§0058) that a high-index glass with merely *small* positive anomalous dispersion would under-correct secondary spectrum, which is why both conditions 8 ($n_d > 1.85$) and 9 ($\Delta P_{g,F} > 0.020$) are imposed on this single element.

**L10 — Positive meniscus, convex toward object (SLD).**
$n_d = 1.61997,\ \nu_d = 63.88$. Glass: PCD40 (Hoya) — special low dispersion. $f = +229.5\ \text{mm}$.
The first of the two SLD elements. A low-dispersion positive with mildly positive $\Delta P_{g,F}$, it reinforces the rear-group axial-color correction without the cost or curvature limits of a full fluorite crown.

**L11 — Positive meniscus, convex toward object (SLD).**
$n_d = 1.59282,\ \nu_d = 68.63$. Glass: FCD515 (Hoya) — special low dispersion. $f = +79.7\ \text{mm}$.
The second SLD element, and the positive member of the G2a cemented doublet. Its $\nu_d$ of 68.6 and clearly positive $\Delta P_{g,F}$ ($+0.019$) make it the strongest SLD contributor to rear-group secondary-spectrum control.

**L12 — Negative meniscus, convex toward object.**
$n_d = 1.85478,\ \nu_d = 24.80$. Glass: S-NBH56 (Ohara) — dense flint. $f = -37.2\ \text{mm}$.
Cemented to the rear of L11. The L11+L12 pair is a net negative doublet ($f \approx -80.8\ \text{mm}$) seated immediately ahead of the stop: a low-dispersion SLD positive bonded to a dense flint negative, forming a strong achromatizing interface at the point where the marginal-ray height is falling toward the pupil.

### Aperture stop

A conventional iris stop sits in the air space following surface 21, ahead of G2b. The production lens uses a rounded nine-blade diaphragm, a choice Sigma ties to the lens's bokeh rendering.

### Group G2b — rear of rear group (surfaces 23–30)

**L13 — Biconcave negative.**
$n_d = 1.65412,\ \nu_d = 39.68$. Glass: S-NBH5 (Ohara) / E-ADF50 (Hoya) — short flint. $f = -28.4\ \text{mm}$.
The first element behind the stop and the strongest single negative in the lens. With a mildly negative $\Delta P_{g,F}$, it continues the secondary-spectrum bookkeeping into the rear group.

**L14 — Biconvex positive.**
$n_d = 1.87071,\ \nu_d = 40.73$. Glass: TAFD32 (Hoya) — dense lanthanum. $f = +29.9\ \text{mm}$.
Cemented to the rear of L13. The L13+L14 pair is a net weakly negative doublet that begins re-collimating the strongly diverging bundle leaving the stop; the high-index lanthanum positive holds Petzval down.

**L15 — Positive meniscus, concave toward object.**
$n_d = 1.91082,\ \nu_d = 35.25$. Glass: TAFD35 (Hoya) — dense lanthanum. $f = +68.9\ \text{mm}$.
The positive member of the second rear cemented doublet. A dense lanthanum at $n_d = 1.911$, again selected for high-index positive power at low surface curvature.

**L16 — Biconcave negative.**
$n_d = 1.64769,\ \nu_d = 33.84$. Glass: E-FD2 (Hoya) ≈ N-SF2 (Schott) — flint. $f = -42.3\ \text{mm}$.
Cemented to the rear of L15. The L15+L16 pair is a net negative doublet ($f \approx -103.9\ \text{mm}$); the flint negative achromatizes the lanthanum positive and shapes the exit cone.

**L17 — Biconvex positive (2× aspherical).**
$n_d = 1.84915,\ \nu_d = 40.00$. Glass: M-TAFD305 (Hoya)-class — moldable lanthanum (soft match, $\Delta n_d = +0.0022$; see below). $f = +47.1\ \text{mm}$.
The rearmost element, carrying both aspherical surfaces, and the single largest positive contribution to the rear group. The patent places this aspherical lens on the image side of the stop deliberately (§0064): ahead of the stop the axial ray height is large, so an object-side asphere would have to be large in diameter and costly to fabricate, whereas an image-side asphere can be made small. Its two aspheres carry the lens's principal spherical-aberration correction (§0062); by absorbing that correction they reduce the negative power the rear group must otherwise supply, which lets the most object-side concave surface of the G2b doublets be made gentler and thereby suppresses sagittal coma flare (§0063) — the mechanism behind the production lens's clean rendering of point sources such as stars. The matched glass (Hoya M-TAFD305 class) is a moldable lanthanum, consistent with a glass-molded asphere.

---

## Glass Identification and Selection

The patent publishes refractive index, Abbe number, and partial dispersion ratio $P_{g,F}$ for every surface but **names no glass**. The identifications below were obtained by matching each stored $(n_d, \nu_d)$, and where possible the published $P_{g,F}$, against vendor catalogs (Hoya, Ohara, Schott, with CDGM/Sumita/Hikari cross-checks), independently of the patent values. The patent (§0020) defines its dispersion quantities at the wavelengths g = 435.84 nm, F = 486.13 nm, d = 587.56 nm, C = 656.27 nm, with

$$\nu_d = \frac{N_d - 1}{N_F - N_C}, \qquad P_{g,F} = \frac{N_g - N_F}{N_F - N_C}, \qquad \Delta P_{g,F} = P_{g,F} - 0.64833 + 0.00180\,\nu_d.$$

This $\Delta P_{g,F}$ definition reproduces the patent's tabulated Example-1 anomalous-dispersion figures exactly and is used throughout this document. (Note the sign on the $\nu_d$ term: the patent writes $+0.00180\,\nu_d$, so glasses *above* the normal line carry positive $\Delta P_{g,F}$.) The companion data file stores `dPgF` in the project engine's Schott-normal-line convention, so those structured values differ slightly from the patent-condition figures in this analysis.

Confidence is **high** for twelve of the thirteen distinct glasses (catalog $n_d$ reproduced to $\le 5\times10^{-4}$ with small $\Delta P_{g,F}$ residuals). The exception is the aspherical element L17, which is a **soft** match.

| Glass (vendor) | $n_d$ | $\nu_d$ | $\Delta P_{g,F}$ | Elements | Role / class |
|---|---|---|---|---|---|
| FCD100 (Hoya) ≈ S-FPL53 (Ohara) | 1.43700 | 95.10 | $+0.056$ | L2, L3, L5 | FLD — fluorite-class crown; primary secondary-spectrum corrector |
| BACED5 (Hoya) ≈ N-SSK5 (Schott) | 1.65844 | 50.85 | $+0.001$ | L1 | Dense barium crown; large front collector |
| E-ADF10 (Hoya) / N-KZFS4 class | 1.61310 | 44.36 | $-0.008$ | L4 | Short flint; negative-$\Delta P_{g,F}$ balancer |
| S-NBM51 (Ohara) / N-KZFS4 class | 1.61340 | 44.27 | $-0.005$ | L6, L8 | Short flint; negative-$\Delta P_{g,F}$ balancer |
| S-LAH55V (Ohara) ≈ TAFD5G (Hoya) | 1.83481 | 42.72 | $-0.007$ | L7 | High-index dense lanthanum flint; power / low Petzval |
| E-FDS1 (Hoya) ≈ N-SF66 (Schott) | 1.92286 | 20.88 | $+0.028$ | L9 | Dense flint; high-index positive + rear secondary spectrum |
| PCD40 (HOYA) | 1.61997 | 63.88 | $+0.009$ | L10 | SLD — special low dispersion |
| FCD515 (Hoya) | 1.59282 | 68.63 | $+0.019$ | L11 | SLD — special low dispersion |
| S-NBH56 (Ohara) | 1.85478 | 24.80 | $+0.009$ | L12 | Dense flint; pre-stop achromatizer |
| S-NBH5 (Ohara) ≈ E-ADF50 (Hoya) | 1.65412 | 39.68 | $-0.003$ | L13 | Short flint; rear negative |
| TAFD32 (Hoya) | 1.87071 | 40.73 | $-0.007$ | L14 | Dense lanthanum; high-index positive |
| TAFD35 (Hoya) | 1.91082 | 35.25 | $-0.003$ | L15 | Dense lanthanum; high-index positive |
| E-FD2 (Hoya) ≈ N-SF2 (Schott) | 1.64769 | 33.84 | $+0.005$ | L16 | Flint; rear achromatizer |
| M-TAFD305 (Hoya), *soft* | 1.84915 | 40.00 | $-0.007$ | L17 | Moldable lanthanum; aspherical singlet |

**Uncertainty note on L17.** The project catalog now contains Hoya's moldable lanthanum **M-TAFD305** ($n_d = 1.85135$, $\nu_d = 40.10$), but it does not reproduce L17's stored $n_d = 1.84915$ to transcription tolerance. The residual is $\Delta n_d = +0.0022$ — outside the $5\times10^{-4}$ threshold used for the confident identifications but well within the spread expected for a molded melt, and the **M-** designation independently supports a moldable (hence aspherically formable) glass. The identification should be read as *probable class* (moldable lanthanum), not as a confirmed catalog part.

**The FLD / SLD / aspherical census is an inference, and a well-supported one.** The patent names no glasses, but the optical constants force the assignment: exactly three elements (L2, L3, L5) carry the $\nu_d = 95.10$ fluorite-class index that defines Sigma's FLD grade; exactly two further positive elements (L10, L11) carry special-low-dispersion indices in the $\nu_d \approx 64$–69 band that defines SLD; and exactly one element (L17) is aspherical. This reproduces Sigma's published "three FLD, two SLD, one aspherical" construction with no ambiguity in the count.

**Display-key note.** The patent publishes $P_{g,F}$ for every glass row, so the data file retains `dPgF` on all 17 elements for chromatic tracing. The `apd` display flag is intentionally narrower: the diagram visually keys the three FLD elements (L2, L3, L5), the two SLD elements (L10, L11), and the high-index positive APD flint L9 singled out by conditions 8–9. The ordinary crown, lanthanum, and flint partners retain their measured partial-dispersion data but are not colored as APD elements.

**Chromatic strategy.** The design distributes anomalous-dispersion correction across both groups, following the logic the patent sets out in §0039–0044: positive elements carry glass of large positive anomalous dispersion to correct secondary spectrum, but relying on positive elements alone would force more of them, enlarging the system and worsening the Petzval sum, so the concave elements of G1 are given glass of large *negative* anomalous dispersion to correct secondary spectrum while minimizing the Petzval penalty. Concretely, in G1 the three fluorite-class FLD positives (strongly positive $\Delta P_{g,F}$) are balanced by the short-flint negatives L4, L6, and L8 (negative $\Delta P_{g,F}$); in the rear group the dense flint L9 contributes a large positive $\Delta P_{g,F}$ on a positive element, reinforced by the two SLD positives L10 and L11. The patent ties uncorrected secondary spectrum directly to color fringing at the edges of out-of-focus highlights and to purple fringing on high-contrast subjects (§0039) — the chromatic basis for the production lens's "bokeh master" positioning. The averaged-$\Delta P_{g,F}$ conditions 5–7 quantify this division of labor.

---

## Focus Mechanism

The lens uses **single-group internal focusing**. The rear group **G2** (elements L9–L17, surfaces 15–30, including the aperture stop) translates as a rigid body toward the object for near focus; the front group **G1** and the image plane remain fixed, and the external barrel length does not change.

The motion appears in the prescription as two coupled variable air spacings — the gap ahead of G2 (surface 14) and the back-focal gap behind it (surface 30). Because G2 moves as a unit, these are not independent floating elements: one gap closes by very nearly the amount the other opens.

| Configuration | $d_{14}$ (mm) | $d_{30}$ (mm) | G2 displacement |
|---|---|---|---|
| Infinity | 15.87 | 37.56 | reference |
| Near focus (β = −0.121) | 3.00 | 50.49 | $\approx 12.9$ mm toward object |

A finite-conjugate axial ray trace confirms the design intent: with G2 advanced and the front group and image plane held fixed, the image re-forms at the same plane to within $1\times10^{-3}$ mm of the infinity back focus. The same trace gives a near-focus lateral magnification of $\beta = -0.121$, i.e. **$1{:}8.3$**, which matches Sigma's published maximum reproduction ratio at the published 1.0 m minimum focus distance.

The motivation for focusing on the rear group rather than the whole lens is mechanical, and the patent states it directly (§0022): the comparatively large, heavy front group G1 is held fixed while the comparatively small, light rear group G2 is moved along the axis, which makes focusing faster and the focusing mechanism simpler. In the production lens this motion is driven by Sigma's HSM ring-type ultrasonic motor. Holding the large front group stationary also preserves the front-element clearance that underpins the lens's peripheral illumination.

---

## Aspherical Surfaces

The design has a single aspherical element, **L17**, with **both** of its surfaces aspherical (surfaces 29 and 30 in the prescription). The patent expresses the surface sag in the standard form

$$z(y) = \frac{y^2 / R}{1 + \sqrt{\,1 - (1+K)\,(y/R)^2\,}} + A_4 y^4 + A_6 y^6 + A_8 y^8,$$

with the conic constant $K$ tabulated in the convention where $K = 0$ denotes a spherical base — i.e. it coincides directly with the standard conic constant, requiring no $\kappa \rightarrow K$ offset. The patent (§0070) tabulates only the 4th-, 6th-, and 8th-order coefficients ($A_4$, $A_6$, $A_8$); both surfaces of L17 are listed with $K = 0$, so the asphericity is carried entirely by the polynomial terms.

| Surface | Base $R$ (mm) | $K$ | $A_4$ | $A_6$ | $A_8$ |
|---|---|---|---|---|---|
| 29 (L17 front) | $+68.853$ | 0 | $-1.27386\times10^{-6}$ | $-1.15209\times10^{-10}$ | $0$ |
| 30 (L17 rear) | $-92.269$ | 0 | $+1.98113\times10^{-6}$ | $+1.20129\times10^{-10}$ | $+1.65076\times10^{-12}$ |

The aspherical departures from the spherical base, evaluated radially, are sizeable, smooth, and monotonic — the profile of a surface doing real spherical-aberration work rather than cosmetic edge tuning:

| Height $y$ | Surface 29 departure | Surface 30 departure |
|---|---|---|
| 10 mm | $-12.9\ \mu\text{m}$ | $+20.1\ \mu\text{m}$ |
| 15 mm | $-65.8\ \mu\text{m}$ | $+105.9\ \mu\text{m}$ |
| 20 mm | $-211.2\ \mu\text{m}$ | $+366.9\ \mu\text{m}$ |

On the object-side convex surface 29, the negative $A_4$ produces a negative departure that grows toward the rim, weakening the surface's positive power off-axis. This is one of the two profile types the patent prescribes for the correcting asphere (§0065): a surface that *weakens positive power away from the axis*, or equivalently one that *strengthens negative power away from the axis*. On the image-side surface 30 the departure is positive and larger still. Acting together, the two aspheres remove the spherical aberration of the rearmost positive element so that the strongly curved concave surfaces of the G2b cemented doublets can be made gentler than full aberration balance would otherwise require — the patent's stated route to suppressing sagittal coma flare (§0063), which underlies the lens's clean rendering of point sources. The matched glass (Hoya M-TAFD305 class) is a moldable lanthanum, consistent with a glass-molded asphere.

---

## Conditional Expressions

The patent (claims 1–5; §0012–0016) states a set of design inequalities. Their definitions are reproduced verbatim from the patent below, with Example 1's value for each obtained independently from the transcribed prescription (group focal lengths by paraxial slice trace; anomalous-dispersion averages from the published $P_{g,F}$ values via the §0020 formula). Every computed value falls within the patent's stated bounds.

| # | Patent definition | Patent bound | Example 1 | Status |
|---|---|---|---|---|
| 1 | $\Phi_{G1b}/\Phi_{G1}$ | $-3.8 < \cdot < -0.5$ | $-0.793$ | ✓ |
| 2 | $\Phi_{G1}/\Phi$ | $0.18 < \cdot < 0.50$ | $+0.305$ | ✓ |
| 3 | $\Phi_{G2}/\Phi_{G1}$ | $3.0 < \cdot < 7.5$ | $+3.706$ | ✓ |
| 4 | $\nu_{d,L1bp1}\cdot\Delta P_{g,F,L1bp1}$ (highest-index convex of G1b) | $0.8 < \cdot$ | $5.35$ | ✓ |
| 5 | $\Delta P_{g,F}$, mean over convex lenses of G1 | $0.015 < \cdot$ | $+0.0326$ | ✓ |
| 6 | $\Delta P_{g,F}$, mean over concave lenses of G1 | $\cdot < -0.0020$ | $-0.0063$ | ✓ |
| 7 | $\Delta P_{g,F}$, mean over convex lenses of G2a | $0.010 < \cdot$ | $+0.0188$ | ✓ |
| 8 | $N_d$ of most object-side convex lens of G2 | $1.85 < \cdot$ | $1.92286$ | ✓ |
| 9 | $\Delta P_{g,F}$ of that lens | $0.020 < \cdot$ | $+0.0281$ | ✓ |

Here $\Phi$ denotes optical power (reciprocal focal length), so power ratios equal the inverse of the focal-length ratios. The governing lenses follow unambiguously from the prescription: G1b's only convex element is L5 (the FLD), so it is the "highest-index convex lens of G1b" in condition 4; and the most object-side convex lens of G2 is L9, the subject of conditions 8 and 9.

The patent's rationale, paraphrased: conditions 1–3 fix the power balance so that small size and high performance coexist. Condition 1 (§0023–0024) sizes the negative sub-group G1b so that placing the fluorite-class low-index, low-dispersion, high-positive-anomalous-dispersion glass on G1b's *convex* element corrects secondary spectrum without the Petzval-sum penalty that such glass would otherwise impose. Condition 3's lower bound (§0032) exists to preserve sufficient back focus — explicitly, to clear the quick-return mirror of an SLR — confirming the design's DSLR-mount target. Conditions 4–9 govern the chromatic palette: the convex lenses of each group must carry net positive anomalous dispersion (4, 5, 7, 9) while the concave lenses of G1 carry net negative anomalous dispersion (6), so that secondary spectrum is corrected within each group while the negative glasses also hold down the Petzval sum (§0039–0044). Condition 8 requires the leading rear positive (L9) to use a high-index glass ($n_d > 1.85$) to ease astigmatism and field-curvature correction, and condition 9 then requires that high-index glass *also* to have strong positive anomalous dispersion, since a high-index glass with weak anomalous dispersion would under-correct secondary spectrum (§0058).

The patent additionally states tighter preferred bounds, which Example 1 also satisfies: (1) $-3.1$ to $-0.6$ (§0026); (2) $0.20$ to $0.35$ (§0030); (3) $3.3$ to $6.8$ (§0034); (4) $\ge 1.2$ (§0037); (5) $\ge 0.02$ (§0042); (9) $\ge 0.025$ (§0060).

---

## Petzval Analysis

The Petzval sum, computed surface-by-surface as

$$P = \sum_k \frac{n'_k - n_k}{R_k\, n_k\, n'_k},$$

evaluates to $P = 1.243\times10^{-3}\ \text{mm}^{-1}$, a Petzval radius of $1/P \approx 804\ \text{mm}$, and a normalized $P\cdot f \approx 0.127$. For a 105 mm f/1.4 design this is well controlled: field curvature is held flat without the use of a dedicated field-flattener group. The mechanism is the heavy reliance on high-index positive elements, including dense lanthanum / dense-flint glasses (L7 at $n_d=1.835$, L9 at $1.923$, L14 at $1.871$, L15 at $1.911$, L17 at $1.849$), which contribute positive power with reduced Petzval cost, offset against the moderate-index negatives. The fast aperture is thus achieved without trading away field flatness.

---

## Verification Summary

All quantitative claims in this document were checked against an independent paraxial model of the Example-1 prescription:

- **Effective focal length:** computed $101.85$ mm vs. patent $101.85$ mm.
- **Total track:** computed $171.92$ mm vs. patent $171.92$ mm when the patent's flat cover plate is retained. The companion `.data.ts` file excludes that cover plate, per project convention, and folds it into an air-equivalent final back-focus distance.
- **Telephoto ratio check:** physical track / EFL $\approx 1.69$, so the optical prescription is not a true telephoto construction despite the 105 mm short-telephoto focal length.
- **Group focal lengths:** all seven (G1, G2, G1a, G1b, G1c, G2a, G2b) reproduce the patent's lens-group table to rounding.
- **Element powers and shapes:** all 17 element signs and meniscus/biconvex/biconcave classifications follow directly from the transcribed radii.
- **Conditional expressions:** all nine reproduce the patent's Example-1 column.
- **Petzval sum, focus motion, and proximity magnification ($1{:}8.3$):** reproduced and consistent with Sigma's published specifications.

Where the patent and the manufacturer's published specifications could differ, the manufacturer's hard specifications (105 mm f/1.4, 17 elements / 12 groups, 1.0 m minimum focus, $1{:}8.3$ maximum magnification, three FLD / two SLD / one aspherical) are taken as authoritative; the patent's Example 1 is consistent with all of them.

---

## Design Heritage and Context

The Sigma 105mm F1.4 DG HSM | Art, introduced in 2018, was one of the largest full-frame f/1.4 Art-line primes of its generation. Its defining design decision is the use of an unusually large element count (17 in 12 groups) and a heavy anomalous-dispersion glass budget to reduce secondary spectrum at a very fast aperture.

The lens belongs to a small class of fast short-telephoto primes designed for the high-resolution digital era, contemporaneous with designs such as the Nikon AF-S 105mm f/1.4E ED. Where some peers reach correction with fewer, more aggressive elements, this design's distinguishing trait is its redundancy: secondary spectrum is addressed by three fluorite-class FLD positives and a bank of short-flint negatives in the front group, and again by a dense-flint plus two SLD positives in the rear group, while a single doubly-aspherical moldable-lanthanum element behind the stop carries the spherical-aberration load. The result is a design that prioritizes wide-open correction and point-source control over compactness — a trade-off the production lens's considerable size and weight reflect.

---

## Sources

- JP 2019-144477 A, Sigma Corporation, Numerical Example 1 — prescription, lens-group data, anomalous-dispersion table, and conditional expressions (primary source for all optical data).
- Sigma Corporation product page for the 105mm F1.4 DG HSM | Art, https://www.sigma-global.com/en/lenses/a018_105_14/ — production specifications: 17 elements / 12 groups, 23.3° angle of view, nine-blade rounded diaphragm, 1.0 m minimum focus, 1:8.3 maximum magnification, 105 mm filter, and mount variants.
- Vendor optical-glass catalogs (Hoya, Ohara, Schott; CDGM, Sumita, Hikari cross-checks) for the glass identifications and anomalous-dispersion figures.
