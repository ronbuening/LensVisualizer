# CANON RF 35 mm f/1.4 L VCM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2024/0302626 A1\
**Application Number:** 18/596,299\
**Priority:** Japanese Patent Application 2023-035919, filed March 8, 2023\
**Filed:** March 5, 2024\
**Published:** September 12, 2024\
**Inventors:** Takashi Ode, Takahiro Hatada\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** _Optical System and Image Pickup Apparatus Having the Same_

The prescription analyzed here is Numerical Example 2 of US 2024/0302626 A1, shown in Fig. 4 and tabulated in Tables 3 and 4. The production correlation is the Canon RF35mm F1.4 L VCM specified for this project. It is a correlation, not a statement by Canon that the commercial lens uses this particular patent example.

Several independent features converge on that identification:

1. Numerical Example 2 contains 14 physical elements in 11 air-separated groups, exactly matching Canon's published construction for the production RF35mm F1.4 L VCM.[1][2]
2. The patent design point is 34.0 mm at F/1.46, while the commercial identity is 35 mm f/1.4. The data file keeps these values separate: marketing 35 mm/f1.4 and source-stated design 34.0 mm/F1.46; computed EFL 33.942091880 mm is a separate runtime result.
3. The patent has three aspherical surfaces on two physical elements: source surface 2 on L1 and surfaces 22/23 on L11. Canon specifies two aspherical elements in the production lens.[1][2]
4. Two patent elements, L8 and L10, have $n_d=1.497$ and $\nu_d=81.54$. Those coordinates are consistent with the count of two low-dispersion elements in the commercial specification, although they do not identify the production melt or supplier.[1]
5. The patent moves two internal units, B2 and B4, independently toward the object during close focusing (¶0031, ¶0071). Canon describes the production lens as using separate floating- and rear-focus units driven by Nano USM and VCM actuators.[2][3] The architectural correspondence is strong, but the patent does not assign those commercial actuator names to B2 and B4.

One mismatch remains explicit rather than being normalized away. Numerical Example 2 publishes a maximum image height of 20.03 mm and a 30.5° half-angle, whereas the production lens is a full-frame RF lens and Canon quotes an approximately 63° diagonal angle of view.[1] A nominal 36 × 24 mm frame has a 21.65 mm corner radius. The model therefore records the production format as `135-full-frame` while retaining the patent's smaller published design field. No scaling or projection override is applied.

## Optical Architecture

The data file resolves the design into five patent functional units, B1 through B5, with 14 elements and 11 air-separated groups. Independent first-order decomposition gives the unit power sequence **positive — positive — negative — positive — negative**:

| Unit | Elements | Computed unit EFL | Focus behavior      |
| ---- | -------- | ----------------: | ------------------- |
| B1   | L1–L5    |    +103.917463 mm | Fixed               |
| B2   | L6       |     +85.074102 mm | Moves toward object |
| B3   | L7       |    -108.650028 mm | Fixed               |
| B4   | L8–L11   |     +41.220267 mm | Moves toward object |
| B5   | L12–L14  |    -132.323400 mm | Fixed               |

This power distribution does not justify forcing the lens into a classical named family. Under the project's quantitative definitions, it is neither telephoto nor retrofocus. Using the final data array, total track to the authored image plane divided by EFL is 3.492596, while BFD/EFL is 0.452562; neither satisfies the required telephoto (`TL/EFL < 1`) or retrofocus (`BFD > EFL`) test. The first-to-last refracting-surface length is separately 103.102 mm, or 3.037585 EFL. The architecture is more usefully described as a five-unit, internally focusing wide-angle prime with two independently translating positive units and a stop between the fixed negative B3 unit and the moving positive B4 unit.

B1 is a large front unit with mixed internal power. Its first two elements are negative, but the strong positive L3 and L5 contributions make the unit positive overall. B2 is a single positive meniscus and the first moving focus unit. B3 is a fixed negative meniscus immediately in front of the aperture stop. B4 is the dominant positive rear-middle unit and the second moving focus unit. B5 is a fixed negative rear unit that completes the image-side power distribution.

The distinction between element power, cemented-subassembly power, and complete-unit power is important. In B4, for example, L8 is a positive meniscus with a standalone EFL of +154.170372 mm and L9 is a negative meniscus with a standalone EFL of -26.841416 mm. Cemented together, C2 is net negative at -31.168461 mm. The complete spaced B4 unit, however, is strongly positive at +41.220267 mm because L10 and L11 add substantial positive power. The optical behavior of B4 cannot therefore be inferred from its first cemented pair alone.

The sequential model includes the two source flare-cut planes: ¶0081 (PDF p16) calls source 10 and 19 **unillustrated flare-cut surfaces**, not inactive surfaces. Table 3 prescribes effective diameters34.931 and 25.550 mm, modeled as air apertures with clear radii 17.4655 and 12.775 mm. Restoring S9 d=0 then 10F d=3.800, and S18 d=.200 then 19F d=.558 preserves every powered vertex, index transition and the primary stop. These auxiliary apertures add no glass body or optical power. No source sensor plate, filter medium, folded path or synthetic cement layer is established.

## Element-by-Element Analysis

### L1 — Negative Meniscus (1× Asph)

$n_d = 1.583$, $\nu_d = 59.38$. Glass: S-BAL42 (OHARA) coordinate proxy; patent vendor unresolved. $f=-60.726202$ mm.

L1 is the large-diameter front negative meniscus. Its rear surface, `2A`, is the first of the design's three aspherical surfaces. The weakly curved front face and much stronger rear face make L1 a negative entrance element while preserving a broad front aperture. In the model, the rear asphere acts where marginal and off-axis ray heights are still large, giving it substantial leverage over peripheral ray geometry.

The S-BAL42 label is a catalog-coordinate proxy selected because its current OHARA coordinates closely reproduce the patent's rounded $n_d/\nu_d$ pair. It is not a supplier attribution. Its compatible catalog curve supplies qualified spectral behavior. Source-unsupported per-lens C/F/g and derived partial-dispersion fields were removed on 2026-10-30; no historical melt or supplier is identified.

### L2 — Biconcave Negative

$n_d = 1.516$, $\nu_d = 64.14$. Glass: S-BSL7 (OHARA) coordinate proxy; patent vendor unresolved. $f=-45.725707$ mm.

L2 adds a second negative contribution at the front of B1. Its biconcave shape and moderate-dispersion crown-like coordinate pair differ substantially from the dense positive glasses that follow. In combination with L1, it forms a negative front section before the first strongly positive cemented assembly.

The position of L2 behind the aspheric L1 rear surface allows the two negative elements to shape the chief- and marginal-ray bundles before the stronger positive power in L3. Any detailed attribution of a particular aberration to L2 alone would be stronger than the patent and calculation support; its role is best understood as part of B1's mixed-power front conditioning.

### L3 — Biconvex Positive, C1 Front Element

$n_d = 1.764$, $\nu_d = 48.49$. Glass: S-LAH96 (OHARA) coordinate proxy; patent vendor unresolved. $f=+26.222833$ mm.

L3 is one of the strongest positive elements in the lens when isolated in air. It begins cemented pair C1 and recovers much of the negative vergence introduced by L1 and L2. The high index allows substantial refractive power at the curvatures used without requiring an unusually thick element.

L3 is cemented directly to L4 at source surface 6. Its standalone focal length should not be confused with C1's net focal length: the pair as a whole computes to +44.444717 mm.

### L4 — Negative Meniscus, C1 Rear Element

$n_d = 1.855$, $\nu_d = 24.80$. Glass: S-NBH56 (OHARA) coordinate proxy; patent vendor unresolved. $f=-61.675756$ mm.

L4 is the high-index, low-Abbe negative partner in C1. Its negative standalone power partially offsets L3 while the cemented interface allows the two glasses to share a strongly curved boundary. The combination provides a much more useful chromatic and monochromatic degree of freedom than either element would provide by itself.

The C1 pair is net positive despite L4's negative standalone power. That net-positive cemented subassembly is one of the mechanisms by which B1 changes from a negative front section to a positive unit overall.

### L5 — Biconvex Positive

$n_d = 2.001$, $\nu_d = 25.46$. Glass: TAFD40 (HOYA) coordinate proxy; patent vendor unresolved. $f=+72.730770$ mm.

L5 closes B1 with positive power in a very high-index, low-Abbe material coordinate. Its placement after C1 gives the front unit another independent refractive contribution without another cemented interface . In first-order terms, B1 remains only moderately positive despite the strong standalone power of L3 because L1, L2, and L4 are all negative.

The TAFD40 name is a HOYA coordinate proxy, not a claim that Canon used HOYA TAFD40 in production. The compatible proxy curve supports spectral calculations, while the patent values remain the authoritative design $n_d$ and $\nu_d$.

### L6 — Positive Meniscus, B2 Focus Unit

$n_d = 1.595$, $\nu_d = 67.74$. Glass: S-FPM2 (OHARA) coordinate proxy; patent vendor unresolved. $f=+85.074102$ mm.

L6 is the complete B2 unit and therefore has the same standalone and unit focal length. The patent identifies B2 as one of the two units that moves toward the object when focusing closer (¶0031, ¶0071). Because B2 is positive, its translation changes the vergence presented to the fixed B3/stop region without requiring movement of the large B1 front assembly.

The relatively high Abbe number reduces the chromatic cost of putting positive focus power in this moving element. The current data file does not supply a close-focus position because the patent does not publish the numerical B2 travel for Example 2.

### L7 — Negative Meniscus, B3 Fixed Unit

$n_d = 1.770$, $\nu_d = 29.74$. Glass: NBFD29 (HOYA) coordinate proxy; patent vendor unresolved. $f=-108.650028$ mm.

L7 is the entire fixed B3 unit. It lies between the moving B2 unit and the aperture stop, and its negative power reverses the sign of the local unit sequence before the strongly positive B4 section. This location makes B3 important to the angular transformation of rays entering the stop region.

B3 does not move during the patent's focus operation. Its fixed position also means that the spacing from B3 toward the stop is part of the stable central reference structure while B2 and B4 translate on opposite sides of that region in the published mechanism.

### L8 — Positive Meniscus, C2 Front Element

$n_d = 1.497$, $\nu_d = 81.54$. Glass: S-FPL51 (OHARA) coordinate proxy; patent vendor unresolved. $f=+154.170372$ mm.

L8 begins B4 immediately after the stop and is cemented to L9. Its very high Abbe number is the clearest low-dispersion coordinate in the patent prescription. Canon states that the production lens contains two UD elements; L8 and L10 are the two patent elements whose $n_d/\nu_d$ pair most naturally corresponds to that count.[1][2] That correspondence is evidence for the production correlation, not a glass-melt identification.

L8 is only weakly positive by itself. The optical importance of the pair comes from its interaction with the much stronger negative L9 and with the following positive elements in B4.

### L9 — Negative Meniscus, C2 Rear Element

$n_d = 1.770$, $\nu_d = 29.74$. Glass: NBFD29 (HOYA) coordinate proxy; patent vendor unresolved. $f=-26.841416$ mm.

L9 is the strong negative member of cemented pair C2. The contrast between L8's high Abbe number and L9's much lower value gives the pair a large dispersion difference at a shared interface . The isolated C2 pair is net negative, with a computed EFL of -31.168461 mm.

That negative cemented result must not be mistaken for the behavior of B4 as a whole. Once L10 and L11 are included at their actual spacings, B4 becomes strongly positive at +41.220267 mm.

### L10 — Biconvex Positive

$n_d = 1.497$, $\nu_d = 81.54$. Glass: S-FPL51 (OHARA) coordinate proxy; patent vendor unresolved. $f=+43.211274$ mm.

L10 is the second element with the patent's $1.497/81.54$ low-dispersion coordinate. Unlike L8, it is an air-spaced biconvex element and contributes strong positive standalone power. It therefore supplies both positive vergence and a second low-dispersion positive contribution inside B4.

The use of two elements with the same high-Abbe coordinate, one in C2 and one air-spaced, is consistent with a design that distributes chromatic correction across the moving rear-middle unit rather than concentrating it at one interface . The exact production glass remains unresolved.

### L11 — Biconvex Positive (2× Asph)

$n_d = 1.804$, $\nu_d = 46.53$. Glass: S-LAH65VS (OHARA) coordinate proxy; patent vendor unresolved. $f=+43.854817$ mm.

L11 is a strong positive biconvex element whose two surfaces, `22A` and `23A`, are both aspherical. It closes B4 and provides two independent high-order surface profiles at the rear of the moving unit. This is the most concentrated aspheric correction in the design.

Because L11 follows the low-dispersion positive L10 and sits near the rear of B4, its aspherical pair can alter peripheral ray geometry without changing the glass sequence. The patent does not identify the manufacturing process for these aspheres, so the analysis does not classify them as molded, polished, or hybrid.

### L12 — Biconvex Positive, C3 Front Element

$n_d = 2.001$, $\nu_d = 29.13$. Glass: TAFD55 (HOYA) coordinate proxy; patent vendor unresolved. $f=+32.796527$ mm.

L12 begins fixed rear unit B5 with strong positive standalone power in a very high-index glass coordinate. It is cemented to the negative L13. The combination is nearly power-balanced compared with either element alone: C3 computes to a weak net negative EFL of -352.546527 mm.

This is a clear example of why the rear unit cannot be described by standalone element signs alone. L12 is strongly positive, yet C3 is slightly negative and B5 becomes more distinctly negative after L14 is included.

### L13 — Biconcave Negative, C3 Rear Element

$n_d = 1.770$, $\nu_d = 29.74$. Glass: NBFD29 (HOYA) coordinate proxy; patent vendor unresolved. $f=-27.984110$ mm.

L13 is the strong negative partner of L12. Its standalone power nearly cancels L12 inside the cemented pair, leaving C3 only weakly negative. The shared interface at source surface 25 therefore works primarily as a balanced compound correction rather than as a large net-power generator.

The data model reduces the authored semi-diameter of L13's rear surface `26` to 16.85 mm from the patent's $\Phi/2=17.0725$ mm effective-radius value. This is a modeling clearance adjustment, not a change to radius, thickness, or refractive index; it is discussed in the verification section below.

### L14 — Negative Meniscus

$n_d = 1.613$, $\nu_d = 44.27$. Glass: S-NBM51 (OHARA) coordinate proxy; patent vendor unresolved. $f=-201.545627$ mm.

L14 is the final physical element and is a comparatively weak negative meniscus when isolated. Together with the slightly negative C3 pair, it brings the complete B5 unit to -132.323400 mm. The image plane follows its rear surface by the patent's 15.444 mm air-equivalent back-focus distance.

Its moderate index and Abbe number differ from both the dense C3 front element and the recurring NBFD29-coordinate negative glasses. That gives the fixed rear unit a final independent material degree of freedom before the image plane.

## Glass Identification and Selection

The source publishes fourteen rounded $n_d/\nu_d$ pairs, with $n_d$ to three decimals and $\nu_d$ to two decimals. Paragraph 0078 (PDF p15) explicitly defines d 587.6 nm, F 486.1 nm and C 656.3 nm and the Abbe equation. Every medium now records that d-line provenance. Tables 3/4 (PDF pp 16–17) publish no numerical C/F/g line indices, partial ratio, partial deviation or normal line.

| Elements    | Published $n_d/\nu_d$ | Unchanged compatible spectral proxy |
| ----------- | --------------------- | ----------------------------------- |
| L1          | 1.583/59.38           | S-BAL42 (OHARA)                     |
| L2          | 1.516/64.14           | S-BSL7 (OHARA)                      |
| L3          | 1.764/48.49           | S-LAH96 (OHARA)                     |
| L4          | 1.855/24.80           | S-NBH56 (OHARA)                     |
| L5          | 2.001/25.46           | TAFD40 (HOYA)                       |
| L6          | 1.595/67.74           | S-FPM2 (OHARA)                      |
| L7, L9, L13 | 1.770/29.74           | NBFD29 (HOYA)                       |
| L8, L10     | 1.497/81.54           | S-FPL51 (OHARA)                     |
| L11         | 1.804/46.53           | S-LAH65VS (OHARA)                   |
| L12         | 2.001/29.13           | TAFD55 (HOYA)                       |
| L14         | 1.613/44.27           | S-NBM51 (OHARA)                     |

The 2026-10-30 source review removes42 catalog-derived C/F/g overrides and 14 derived `dPgF` annotations (56 fields). Fourteen existing compatible curve choices remain identical, with all source pairs unchanged. Catalog dispersion is an approximate spectral proxy; historical supplier, melt, composition and manufacturing process remain unidentified. The earlier 2026-10-08 audit records how its then-active annotations were derived; those historical values are not current source data.

L8/L10 retain **inferred** APD tags. Paragraph 0065 (PDF p14) describes low/anomalous dispersion for Example 1 G10 at a different material coordinate, not selected Example 2's1.497/81.54 medium. Example 2's own paragraphs 0071–0072 (PDF p15) do not independently identify an anomalous glass or chemistry. The product-correlated two-UD count and compatible curve are qualified in the labels/notes; no source numerical partial dispersion or APO status is asserted.

## Focus Mechanism

The patent describes a two-unit internal focusing mechanism. B2 and B4 move independently toward the object as focus shifts from infinity toward close range (¶0031, ¶0071). B1, B3, and B5 remain fixed relative to the image plane under the published mechanism. The aperture stop lies between B3 and B4 at the infinity state.

Canon's production documentation describes a Nano USM driving a floating-focus unit and a VCM driving a rear-focus unit, with the two units controlled independently or together.[2][3] This is consistent with the patent's two moving units, but the commercial motor labels are not assigned directly to B2 and B4 in the patent, so no one-to-one motor mapping is asserted here.

Example 2 publishes only its infinity prescription. It provides no numerical close-focus spacing table, no total travel for B2 or B4, and no intermediate focus states. The data file therefore authors no variable gaps; its focus status is **NO_INTERNAL_RECONSTRUCTION**. No internal close-focus geometry is invented from the commercial minimum focusing distance. The group captions identify both published directions as `OBJECTWARD FOCUS`, but the viewer correctly exposes neither a focus slider nor a zoom slider for this prime.

The stored `closeFocusM = 0.28` m is Canon production metadata only.[1] It does not imply that the modeled infinity prescription has been solved to 0.28 m, nor does it provide enough information to determine two independent internal translations uniquely.

## Aspherical Surfaces

Numerical Example 2 has three aspherical surfaces: `2A` on the rear face of L1, and `22A`/`23A` on the two faces of L11. Table 4 provides the more precise base radii used in the data file.

Paragraph 0080 prints the sag form as

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}
+ A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.
$$

The patent's $k$ therefore already corresponds to the standard conic constant used by the data model; no conversion is required. All three Example 2 surfaces have $K=0$.

A direct source inconsistency must be retained. The printed equation stops at $A_{12}$, but Table 4 includes an $A_{14}$ column and gives a non-zero $A_{14}$ value for source surface 2. The data file therefore includes the tabulated $A_{14}$ term. Omitting it would materially change the edge departure of `2A` and would not faithfully reproduce the table.

| Surface | Base radius (mm) |   K |           A4 |           A6 |            A8 |           A10 |          A12 |           A14 |
| ------- | ---------------: | --: | -----------: | -----------: | ------------: | ------------: | -----------: | ------------: |
| `2A`    |         32.17448 |   0 |  1.697231e-6 | -9.598092e-9 |  1.251928e-10 | -6.393750e-13 | 1.679648e-15 | -1.671035e-18 |
| `22A`   |         89.50277 |   0 | -4.587706e-6 |  1.115432e-9 | -8.943226e-12 | -4.870968e-15 |            0 |             0 |
| `23A`   |        -56.11754 |   0 |  3.931361e-6 |  1.682398e-9 | -8.682252e-12 |  5.837280e-15 |            0 |             0 |

At the authored semi-diameters, the independently evaluated polynomial departures are +0.177606767 mm for `2A`, -0.653366490 mm for `22A`, and +0.477361480 mm for `23A`. On `22A`, the negative fourth-order term reduces the positive base sag toward the rim. On `23A`, the positive polynomial departure reduces the magnitude of the negative base sag. The two L11 surfaces therefore reshape both sides of the same positive element rather than concentrating all high-order correction on a single face.

The patent does not identify the fabrication method for these aspheres. No molded-glass, polished-glass, or hybrid construction is asserted.

## Chromatic Correction Strategy

The patent prescription combines very high-Abbe positive materials with lower-Abbe negative partners in the rear-middle and rear units. The clearest example is C2: L8 has $n_d=1.497$, $\nu_d=81.54$, while L9 has $n_d=1.770$, $\nu_d=29.74$. The pair is net negative, but it creates a large dispersion contrast at a cemented interface . L10 then adds a second positive element at the same $1.497/81.54$ coordinate without cementing it to a low-Abbe partner.

This layout is consistent with Canon's statement that the commercial RF35mm F1.4 L VCM contains two UD elements.[1][2] The data file's S-FPL51 labels on L8 and L10 are catalog proxies chosen because their coordinates essentially coincide with the patent pair; they are not supplier identifications. The unchanged compatible catalog curves provide approximate spectral behavior after removal of unsupported per-lens C/F/g and partial overrides. That capability does not establish production chemistry or an APO claim.

Earlier in the lens, C1 combines the positive L3 coordinate ($1.764/48.49$) with the much lower-Abbe negative L4 coordinate ($1.855/24.80$). In B5, the high-index positive L12 ($2.001/29.13$) is paired with the negative L13 ($1.770/29.74$), but their Abbe numbers are much closer; that cemented pair is nearly power-balanced rather than functioning like the pronounced high-/low-Abbe pairing in C2. The chromatic strategy is therefore distributed, not reducible to one ED doublet.

## Conditional Expressions

The patent defines eight normalized quantities governing the relationship among unit focal lengths, inter-unit separations, and unit thicknesses (¶0038). It also provides two successively tighter sets of preferred ranges (¶0047–¶0048). Independent computation from the final data arrays retains all eight quantities inside the three range sets. Some rounded-source computations differ from the Table 9 figures (notably $f_2/f$ and $f_5/f$ below); no parameter is fitted to erase those residuals.

| Quantity     |     Computed | Table 9 | Primary range   | Tighter (a)     | Tighter (b)    |
| ------------ | -----------: | ------: | --------------- | --------------- | -------------- |
| $f_4/f$      |  1.214429186 |   1.214 | 0.30–4.80       | 0.50–3.20       | 0.90–1.80      |
| $f_2/f$      |  2.506448412 |   2.502 | 0.70–26.80      | 1.20–17.90      | 2.20–9.90      |
| $f_4/f_2$    |  0.484521916 |   0.485 | 0.05–1.50       | 0.08–1.00       | 0.10–0.60      |
| $f_5/f$      | -3.898504559 |  -3.881 | -25.80 to -0.90 | -17.20 to -1.50 | -9.50 to -2.70 |
| $D_{12}/D_T$ |  0.036857062 |   0.037 | 0.008–0.210     | 0.010–0.140     | 0.020–0.080    |
| $D_{34}/D_T$ |  0.175808188 |   0.176 | 0.020–0.530     | 0.040–0.360     | 0.070–0.200    |
| $T_2/TTL$    |  0.039191868 |   0.039 | 0.004–0.120     | 0.007–0.079     | 0.014–0.044    |
| $T_4/TTL$    |  0.194879582 |   0.195 | 0.040–0.590     | 0.070–0.390     | 0.120–0.220    |

The verified dimensional terms are $D_{12}=3.800$ mm, $D_{34}=18.126$ mm, $T_2=4.646$ mm, $T_4=23.102$ mm, $D_T=103.101$ mm, and $TTL=118.545$ mm. These are used only for the patent conditions and should not be confused with the commercial barrel length.

## Verification Summary

The final data arrays were independently evaluated with sequential height/reduced-angle tracing and a separate ABCD matrix calculation. The two methods agree to a maximum matrix-element difference of $7.1054\times10^{-15}$.

The computed effective focal length is 33.942091880 mm, compared with the patent's rounded 34.0 mm. The computed back focal distance is 15.360904237 mm, compared with the patent's 15.444 mm. Rounding of three-decimal indices is a possible contributor, not an established cause. Paragraph 0079 explicitly defines infinity paraxial quantities. Structured unresolved source errata retain these discrepancies and the 103.102 versus 103.101 mm optical-track residual; no index/radius or unsupported rear plate is fitted to force agreement.

The aperture stop is source surface 15, labeled `STO` in the data model. Patent $\Phi$ is defined as an effective diameter (¶0078); its relationship to a manufactured iris is not established here. If the published stop $\Phi=27.298$ mm were treated as the physical aperture, the rounded prescription would model approximately F/1.425 rather than F/1.46. Under the canonical ordinary-prime rule, the modeled primary stop semi-diameter is an inferred value of 13.324145 mm, solved from the final prescription to reproduce the design F-number. The independently recomputed value is F/1.459999950.

The optical-surface semi-diameters otherwise begin from patent $\Phi/2$ as source-derived effective radii . One surface is intentionally adjusted: source surface 26 uses `sd = 16.85` mm rather than $17.0725$ mm. At the full source-derived value, the 26→27 gap remained physically open but exceeded the current 0.90 shared-band sag-intrusion policy. At the authored value, the 6.839 mm vertex gap retains 0.697420218 mm minimum sampled clearance and an intrusion fraction of 0.898023071. This retained constraint reduces the active clear cap; it is not a source-supported correction to the printed effective diameter and does not change optical power. Full printed 17.0725 mm gives sag intrusion 6.314351527 mm versus allowed6.1551 mm despite positive physical air0.524648473 mm. A resolved-looking rear shoulder trial to 18.831 mm also fails the same guard (6.195671758 mm); it was rejected without a cut, radius fit, adjacent-cap change or tolerance relaxation.

The 2026-08-20 figure comparison is preserved in the audit. The fresh 2026-10-30 review uses the native 300 ppi 2560×3300 image, rather than treating a600 dpi render as additional resolution. Figure 4 supports the resolved L1 rear shoulder and C2 front shoulder now represented by `rimExtensionSd`:2A clear 16.7705/outer 19.195, and 16 clear 11.829/outer 12.607 mm. Clear apertures remain separate. The cemented interfaces 6/17/25 receive no opaque shoulder lands, and no disconnected hybrid/resin layer or inferred concave cut is introduced.

All 14 sampled element edge thicknesses remain positive, all active air gaps avoid physical contact, and the maximum actual rim-slope angle is 42.036998°. All three aspheres have $K=0$, so no positive-$K$ conic-height limit is active. The surface-by-surface Petzval sum, using $\phi/(nn')$ at every refracting interface, is +0.001820226987 mm$^{-1}$, corresponding to a radius magnitude of 549.382031 mm under the project's sign convention.

The patent's 20.03 mm maximum image height maps to a computed paraxial half-angle of approximately 30.546°, consistent with the published 30.5° to source precision. Exact d-line tracing also retains transmitted off-axis bundles at 30.5°. These checks support the patent field itself; they do not erase the difference between the 20.03 mm patent image height and the larger nominal full-frame corner .

No uniform scale is applied: $s=1$. Consequently all radii, spacings, semi-diameters, and asphere coefficients remain at the patent/model scale. The marketed 35 mm and f/1.4 values are metadata and are not used to rescale the 34.0 mm, F/1.46 patent design.

## Sources

1. Canon U.S.A., **RF35mm F1.4 L VCM — Support / Technical Specifications**. https://www.usa.canon.com/support/p/rf35mm-f1-4-l-vcm
2. Canon U.S.A., **RF35mm F1.4 L VCM — Product Page**. https://www.usa.canon.com/shop/p/rf35mm-f1-4-l-vcm
3. Canon U.S.A., **Canon Announces First Lens in Series of Fixed Focal Length RF Hybrid Lenses — RF35mm F1.4 L VCM**, June 5, 2024. https://www.usa.canon.com/newsroom/2024/20240605-lens-flash
4. OHARA, **Optical Glass — Detailed Data**, catalog PDF used for the coordinate-proxy and line-index checks. https://oharacorp.com/wp-content/uploads/2025/04/all-detailed-data-20250418.pdf
5. HOYA Optical World, **Optical Glass Data**, catalog spreadsheet used for the coordinate-proxy and line-index checks. https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx
6. Takashi Ode and Takahiro Hatada, **Optical System and Image Pickup Apparatus Having the Same**, US 2024/0302626 A1, published September 12, 2024; Numerical Example 2, Fig. 4, Tables 3–4 and 9, ¶0031, ¶0038, ¶0047–¶0048, ¶0071, ¶0078–¶0081.

## Image-plane source audit (2026-09-25)

MTF source audit: all Example 2 Table 3/4 values match, including the more
precise aspheric base radii . EFL 33.942092 vs printed 34.0 and BFL
15.360904 vs 15.444 leave −0.083096 mm offset. Paragraph 0079 defines
back focus as paraxial, not a designer best-focus convention. Keep the
printed prescription; no rear plate or supported single misprint explains it.

## Original shape/glass and runtime review — 2026-10-30

The exact local original is `patents/US20240302626A1.pdf`, Numerical Example 2 paragraph 0083, Tables 3/4 PDF pp 16–17; Figure 4 PDF p4/Sheet 3, source infinity/close aberration Figures 5/6 PDF p5/Sheet 4. Front-page parties and dates match the metadata above. The PDF is a usable image-only scan:20 pages at native 2560×3300,300 ppi. The earlier 600 dpi display is 2× upsampling. Native Figure 4 axial calibration is approximately 14.6 px/mm; optical endpoints carry about ±2–3 px (±.14–.21 mm), plus the prior roughly 4.3% schematic scale offset. Leaders, arrows, unit brackets and primary-stop artwork are excluded. The S16 outer shoulder is a resolved roughly 11-native-pixel break; its adopted outer radius uses the already tabulated opposite cap, not a false claim of a new precision measurement.

Every element and all three cemented interfaces were compared with actual generated SVG paths. Source clear radii are retained on both ends of every element except the explicitly constrained S26. All concave ends were checked: no additional source-dimensioned cut or justified inferred trim was found. L1 and C2 front outer shoulders are restored as described above; the C2 shared interface remains optical, with a small tapered blank margin rather than an opaque equal-height block. The actual 14 SVG bodies are finite, closed and connected; maximum hidden renderer trim is 0 mm in all 21 identical focus geometries and the nine duplicate zoom/focus display combinations.

The only distinct modeled geometry is source infinity. Twenty-one focus probes 0:.05:1 and their zoom duplicates are byte-for-byte equal in optical positions; the published objectward directions lack numerical close-focus gaps. All 1,029/1,029 sampled axial rays and 63/63 chiefs pass, with no failed pupil seeds. Unique collimated bundles at 0/.6/1 of the modeled maximum angle pass 49/31/10 of 49 pupil points. These are angular-field fractions, not finite-object sensor corners. No actual close-focus clearance is claimed.

A denser collimated probe uses 71 distinct angles from 0 through 34.5 degrees in .5-degree increments plus the inverse generic-corner angle 34.8, with 49 disk-pupil points each (3,479 rays before and after). Restored 19F changes survivors at 28 degrees 21→19 and 29.5 degrees 18→17; at 34.5/34.8 it also becomes the first clip for two previously downstream-clipped samples without changing survivors. 10F causes no newly lost sample in this grid. At the published 30.5-degree field the bundle remains 17/49. No missing flare aperture is declared harmless solely because the axial bundle passes .

Generic inverse image-height field coverage reaches 21.65 mm at 34.8 degrees and passes 100%; the direct published 30.5-degree chief reaches 18.752021 mm,86.6144% of the generic corner and 93.6197% of the published 20.03 mm image-height reference. These are different field conventions. Native Figure 5 distortion at the source field is approximately −7.2±.2%, versus the literal model's−6.2090%; it is retained as a source/model residual, not proof of a unique prescription error. Source fidelity, sampled clearance and the commercial full-frame correlation remain separate conclusions.

Narrow source/surface, image-circle, wide-open aperture and inverse field audits pass; image-circle reports 0 undersized and the full cut probe reports no inferred cuts. Source/table residuals, retained S26 policy constraint and absent numerical close-focus reconstruction remain explicit limitations. Source metadata now records printed 34.0 mm rather than computed EFL, and the first aperture menu option is printed F1.46 rather than marketedf1.4; the existing inferred primary iris, stops, media, aspheres and controls are unchanged.

## Scoped d-reference display correction — 2026-10-31

The actual complete original shape/glass review remains **2026-10-30**, with all earlier dated records preserved. Direct selected original **US20240302626A1**, Numerical Example 2 ¶0083, Table 3/PDF p. 16 and Table 4/pp. 16–17, was rechecked with ¶0078/p. 15 (printed p. 5). The definition explicitly states d-reference index and Abbe number, d 587.6/F 486.1/C 656.3 nm and νd=(Nd−1)/(NF−NC). Table 3 supplies all 14 nd/νd pairs and no numerical C/F/g or partial ratios. Source precision and all prior spectral-provenance dispositions remain unchanged.

Remove only the 14 repeated positive `indexReferenceNote` citations while preserving every explicit d reference. The exact text moves to the data header and this note: “US20240302626A1 ¶0078 PDF p15 defines nd/vd at d 587.6 nm with F 486.1/C 656.3 nm; Table 3/4 pp 16–17 supplies nd/vd only, not numerical C/F/g or partial ratios.” A confirmed reference belongs in source documentation; the uncertainty-only field selects n(source)/ν(source) in the Inspector. Removing these positive citations restores nd/νd without changing a curve, source number or modeled spectrum. Actual uncertainty and rounding qualifications remain.

Figure 4/PDF p. 4 (sheet 3) was rechecked in its native 2560×3300 px, 300 ppi page image, including the three cemented interfaces and free-air ends. No extra source medium or plate is inferred. The reading renders of the scanned table/definition at 170 dpi are below native resolution; no upsampling precision is claimed. Exact whitelist parity protects all values, source.errata, inferred APD, the two source flare planes, cap/shoulder constraints, stops and controls. All 14 curve identities and every C/d/F/g channel remain identical; nine sampled prepared layouts, finite SVG paths and render diagnostics are equal. Existing infinity-only focus duplication, source iris/paraxial/field conflicts and S26 cap limitation remain; no additional full source-shape review or production certification is claimed.
