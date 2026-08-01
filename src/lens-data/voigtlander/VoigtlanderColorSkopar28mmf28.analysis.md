# VOIGTLÄNDER COLOR-SKOPAR 28mm f/2.8 Aspherical

## Patent Reference and Design Identification

**Patent:** JP 2024-107941 A\
**Application Number:** P2023-12149\
**Filed:** January 30, 2023\
**Published:** August 9, 2024\
**Inventors:** Yoshihisa Yomogida; Yuki Shibata\
**Applicant:** Cosina Co., Ltd.\
**Title:** 撮像レンズ (*Imaging Lens*)
**Embodiment analyzed:** Example 3

JP 2024-107941 A describes a compact wide-angle imaging lens for interchangeable-lens cameras. Its common architecture places a three-element front group before the aperture stop and a five-element rear group after it, with dimensional and index conditions intended to preserve a full-frame image circle while controlling chief-ray incidence and aberrations (¶0008–¶0017). Example 3 is the prescription transcribed in the data file; its numerical table appears in Table 3 on patent page 12, and its optical section appears in Figure 6 on page 17 (¶0055–¶0063).

Example 3 is identified with the production VOIGTLÄNDER COLOR-SKOPAR 28mm f/2.8 Aspherical optical family on convergent, rather than manufacturer-confirmed, evidence:

1. Cosina specifies the VM Type I, VM Type II, and L(L39) products as 28mm f/2.8 full-frame lenses with eight elements in five groups and a 74.6° angle of view.
2. Example 3 is an eight-element, five-group design with a published focal length of 28.90mm, F-number 2.85, full field of 74.8°, and maximum image height of 21.63mm.
3. The production optical section and Example 3 share three cemented doublets in the same sequence and a final negative meniscus with both surfaces aspherical.
4. Cosina's section marks two extraordinary-partial-dispersion elements in positions corresponding to L3 and L4. HOYA catalog entries matching the patent's stored optical constants provide line indices and $dP_{gF}$ values for those positions; the data records the APD identification as an inference because Cosina does not name the production melts.
5. The patent filing preceded the product family's August 8, 2023 release, while the publication followed it in 2024.

Cosina does not identify JP 2024-107941 A on the product pages. The production relationship is therefore an optical-design correlation fixed for this record, not a claim of explicit manufacturer confirmation.

## Optical Architecture

The prescription contains eight glass elements in five air-spaced groups. The front group Gf consists of the weak negative singlet L1 followed by the cemented positive-negative doublet J1 (L2+L3). The aperture stop follows Gf. The rear group Gr consists of the cemented negative-positive doublet J2 (L4+L5), the cemented positive-negative doublet J3 (L6+L7), and the isolated, double-sided-aspherical negative meniscus L8.

Independent first-order calculation gives Gf a positive isolated focal length of 60.3302mm and Gr a positive isolated focal length of 43.4483mm. These group values describe the groups in air; they are not additive substitutes for the complete-system focal length because the stop and inter-group separations materially affect the system matrix. The complete prescription has an effective focal length of 28.900239mm.

The design is best described as a compact asymmetric rangefinder wide-angle. Its first-surface-to-image track is 46.729mm, so `TL/EFL = 1.616907`; it is not telephoto under the `TL/EFL < 1` definition. Its back focal distance is 19.545058mm, so `BFD/EFL = 0.676294`; it is not retrofocus under the `BFD > EFL` definition. The negative front element is therefore a local power-distribution feature rather than evidence that the complete system is retrofocus.

The patent places the stop explicitly between surfaces 5 and 7. Its diameter is not published. The data file uses a physical stop semi-diameter of 4.740662mm, inferred from the modeled F/2.85 entrance pupil. The patent also publishes no clear-aperture or semi-diameter table. All surface semi-diameters in the model are inferred from the calibrated stop, exact marginal and chief-ray envelopes through 60% of the verified field, Cosina's optical-section proportions, and the geometry constraints of the validator. In particular, the 8.1mm L1 rim and equal 6.2mm J1 rims reproduce Figure 6's approximately 1.31:1 height ratio. They are modeling values, not patent facts.

Paragraph 0022 states that wavelength-cut filters, dust-protection glass, and similar sensor-side plates are omitted from the numerical examples. No plate or dummy surface has been inserted, and the final 19.545mm air spacing remains the image-side spacing in the data. No scale factor is applied: the marketed 28mm designation remains separate from the 28.900239mm design EFL, and the asphere coefficients are unscaled.

## Element-by-Element Analysis

### L1 — Biconcave Negative Front Element

**Data:** $n_d = 1.51633$, $\nu_d = 64.14$. Glass: S-BSL7 (OHARA). Standalone $f = -42.5185\ \text{mm}$.

L1 is a weak negative singlet at the object side. In the modeled power distribution it expands the entering wide-angle bundle before J1 and reduces the burden placed on the strongly powered front doublet. Its very weak first surface and much stronger second surface make the element visibly asymmetric despite its biconcave classification.

The stored index and Abbe number exactly match OHARA S-BSL7. The catalog-derived C-, F-, and g-line indices are stored on the element; the catalog match does not by itself establish the melt used in production.

### L2 — Biconvex Positive Member of J1

**Data:** $n_d = 1.91082$, $\nu_d = 35.25$. Glass: TAFD35L (HOYA catalog match). Standalone $f = +13.2557\ \text{mm}$.

L2 supplies the dominant positive power in the front cemented doublet. Its high index permits substantial surface power without requiring still steeper curvatures. The patent makes the high-index positive members part of condition 3 and specifically requires the index of L2 to exceed that of L3 in condition 6 (¶0024–¶0025, ¶0033–¶0034).

### L3 — Biconcave Negative Member of J1

**Data:** $n_d = 1.84666$, $\nu_d = 23.78$. Glass: FDS90/FDS90-SG (HOYA 847-238 class; process variant unresolved). Standalone $f = -24.8557\ \text{mm}$.

L3 is the strongly dispersive negative partner of L2. The cemented interface allows the pair to combine a large positive-negative power exchange with no intervening air gap. The patent attributes the first cemented pair to reduced spherical-aberration variation and simplified retention, and it links the L2-to-L3 index relation to Petzval and astigmatism control (¶0013–¶0014, ¶0023–¶0025).

J1 has a computed net focal length of $+25.4439\ \text{mm}$ when treated as a standalone cemented assembly in air. That net value is distinct from the standalone focal lengths of L2 and L3 and from their in-situ contribution inside the full lens.

### L4 — Biconcave Negative Member of J2

**Data:** $n_d = 1.68893$, $\nu_d = 31.16$. Glass: E-FD8 (HOYA catalog match). Standalone $f = -13.1490\ \text{mm}$.

L4 is the strongly negative front member of the first rear doublet. Its object-side surface is deeply concave. The patent specifically associates this surface placement with coma correction and associates the cemented J2 interface with spherical-aberration or Petzval control (¶0015, ¶0026).

### L5 — Biconvex Positive Member of J2

**Data:** $n_d = 1.88300$, $\nu_d = 40.81$. Glass: TAFD30 (HOYA catalog match). Standalone $f = +14.8205\ \text{mm}$.

L5 nearly balances L4's negative power. Condition 7 requires the positive member's index to exceed the negative member's index, which the Example 3 pair satisfies by a margin of 0.19407 (¶0029–¶0030).

J2 has a computed standalone net focal length of $-599.1405\ \text{mm}$. It is therefore nearly afocal and only weakly negative as an assembly, even though its two elements are individually strong. Its principal function is the internal redistribution of ray bending and aberration contributions rather than the addition of large net vergence.

### L6 — Biconvex Positive Member of J3

**Data:** $n_d = 1.88300$, $\nu_d = 40.81$. Glass: TAFD30 (HOYA catalog match). Standalone $f = +15.0851\ \text{mm}$.

L6 begins the second rear cemented pair and restores positive power after J2. It uses the same stored glass class as L5, but its curvatures and thickness give it a slightly different standalone focal length.

### L7 — Biconcave Negative Member of J3

**Data:** $n_d = 1.64769$, $\nu_d = 33.84$. Glass: E-FD2 (HOYA catalog match). Standalone $f = -24.1265\ \text{mm}$.

L7 moderates L6 and prepares the ray bundle for the final aspherical meniscus. Example 3 differs from the first embodiment specifically by cementing L6 and L7 into J3 rather than leaving them as separate singlets (¶0056–¶0057).

J3 has a computed standalone net focal length of $+36.8218\ \text{mm}$. As with the other cemented groups, this value characterizes the isolated pair and should not be confused with either element's standalone power or its in-situ effect in Gr.

### L8 — Double-Sided-Aspherical Negative Meniscus

**Data:** $n_d = 1.80610$, $\nu_d = 40.73$. Glass: HOYA 806-407 class, matching NBFD13 and M-NBFD130; process variant unresolved. Standalone $f = -197.7419\ \text{mm}$.

L8 is a weak negative meniscus with aspherical surfaces 13A and 14A. Its low standalone power shows that its significance is not primarily gross focal power. Located at the largest modeled ray heights near the image side, it provides a high-leverage surface pair for controlling field behavior and chief-ray geometry.

The patent states that the final asphere is used to set the incoming and outgoing ray characteristics of the last element and to improve aberrations including field curvature. It also links the rear-element sequence to compact back focus and control of the distance $X$ used in condition 4 (¶0017, ¶0027–¶0028).

## Glass Identification and Selection

The patent supplies only $n_d$ and $\nu_d$ and does not name glass vendors. A fresh catalog search found that the complete L2-L7 sequence matches current HOYA codes at the patent's printed precision, while L1 matches OHARA S-BSL7. These are catalog-derived identifications, not proof of the production melts.

| Element(s) | Stored glass identification | Catalog code | $n_d$ | $\nu_d$ | Match status |
|---|---|---:|---:|---:|---|
| L1 | S-BSL7 (OHARA) | 517-642 | 1.51633 | 64.14 | Exact public-catalog pair |
| L2 | TAFD35L (HOYA) | 911-353 | 1.91082 | 35.25 | Exact at source precision |
| L3 | FDS90/FDS90-SG (HOYA) | 847-238 | 1.84666 | 23.78 | Optical constants identical; process variant unresolved |
| L4 | E-FD8 (HOYA) | 689-312 | 1.68893 | 31.16 | Exact at source precision |
| L5, L6 | TAFD30 (HOYA) | 883-408 | 1.88300 | 40.81 | Exact at source precision |
| L7 | E-FD2 (HOYA) | 648-338 | 1.64769 | 33.84 | Exact at source precision |
| L8 | NBFD13/M-NBFD130 class (HOYA) | 806-407 | 1.80610 | 40.73 | Nominal pair exact; process variant unresolved |

The data stores catalog line indices for L1-L7 and HOYA $dP_{gF}$ values for L2-L7. L8 remains at $n_d/\nu_d$ level because the NBFD13 and M-NBFD130 entries share the nominal pair but differ slightly in line data and $dP_{gF}$; selecting one would overstate the available evidence.

Cosina's production diagram marks the L3 and L4 positions as extraordinary-partial-dispersion elements. The matched HOYA entries give $dP_{gF}=+0.0137$ for the 847-238 class and $+0.0067$ for E-FD8. The data therefore records `apd: "inferred"` for L3 and L4, explicitly tying that inference to the product diagram and catalog match. No APO claim is made, and the catalog matches are not treated as manufacturer confirmation of the production melts.

## Focus Mechanism

Example 3 is an infinity-only optical prescription. It contains no object-distance table, variable spacing, focus magnification, moving-group diagram, or mechanical constraint from which a unique focus model can be reconstructed. The data therefore uses `NO_INTERNAL_RECONSTRUCTION`, with an empty `var` object and no modeled focus motion.

The production family has different minimum-focus endpoints. Cosina specifies 0.5m for VM Type II and 0.7m for VM Type I and L(L39); rangefinder coupling is limited to 0.7m. The data's `closeFocusM: 0.5` records the shortest marketed endpoint across the represented optical family. It does not imply that the Type I or L39 variants focus to 0.5m, nor does it impose a unit-focus, inner-focus, or floating-focus law on the patent prescription.

The presence of a manual helicoid and rangefinder coupling establishes the mechanical user interface, not the internal optical motion. A rigid-unit-focus diagnostic can be made mathematically, but the patent does not establish it, so no such reconstruction is included.

## Aspherical Surfaces

Both surfaces of L8 are aspherical. The patent uses the standard even-asphere convention

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}
+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}+\cdots,
$$

where $c=1/R$ and $h$ is radial height. The published $K$ is already the standard conic constant, so no convention conversion is required. Both surfaces use $K=0$, a spherical base conic (¶0038–¶0040).

| Surface | $K$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ | $A_{12}$ | $A_{14}$ |
|---|---:|---:|---:|---:|---:|---:|---:|
| 13A | 0 | $-5.44398\times10^{-5}$ | $+8.91290\times10^{-8}$ | $+1.02105\times10^{-9}$ | $-6.55705\times10^{-12}$ | 0 | 0 |
| 14A | 0 | $+8.38722\times10^{-6}$ | $+1.42099\times10^{-7}$ | $+1.61890\times10^{-9}$ | $-1.25184\times10^{-11}$ | $+2.04616\times10^{-14}$ | 0 |

The blank $A_{12}$ cell for 13A is stored as zero. $A_{14}=0$ is schema padding; the patent publishes terms only through $A_{12}$. No uniform scale is applied, so the coefficients are transcribed without the $A_p/s^{p-1}$ transformation that a scaled prescription would require.

At the validated modeling semi-diameter of 11.2mm, surface 13A departs from its $K=0$ base sphere by $-0.631540$mm and surface 14A by $+0.504202$mm. These are independently computed model values at the inferred semi-diameter, not manufacturer or patent clear-aperture specifications. The opposite-sign departures reshape the two faces of the final meniscus as a coupled correction rather than simply adding net lens power.

## Conditional Expressions

The patent defines seven conditions. The values below are recomputed from the final data file unless identified as a published value.

| Condition | Example 3 value | Result |
|---|---:|---|
| $1.5 < LA/f < 1.9$ | 1.616907 | Satisfied |
| $1.7 < T_r/T_f < 2.3$ | 2.159921 | Satisfied |
| Positive-element $n_d > 1.83$ | 1.91082, 1.88300, 1.88300 | Satisfied |
| $X > 32\ \text{mm}$ | 32.85mm patent value; 32.456286mm stop-center proxy | Patent condition satisfied; proxy also clears the bound |
| $BF > 17\ \text{mm}$ | 19.545058mm | Satisfied |
| $n_{dpf} > n_{dnf}$ | 1.91082 > 1.84666 | Satisfied |
| $n_{dpr} > n_{dnr}$ | 1.88300 > 1.68893 | Satisfied |

The patent's published 32.85mm value is the authoritative result for condition 4. The independent calculation traces a ray through the stop center to the published maximum image height; it is a diagnostic proxy, not a second implementation of the patent's edge-bundle center-line definition. Its 32.456286mm result independently clears the same lower bound.

## Verification Summary

| Quantity | Patent or marketing value | Recomputed from final data |
|---|---:|---:|
| Marketed focal length | 28mm | — |
| Design EFL | 28.90mm | 28.900239mm |
| Marketed maximum aperture | f/2.8 | — |
| Modeled F-number | 2.85 | 2.84999997 |
| First surface to image plane | 46.73mm | 46.729mm |
| Back focal distance | 19.54mm narrative; 19.545mm table spacing | 19.545058mm |
| Full field | 74.8° patent; 74.6° manufacturer | 74.361944° exact stop-center field |
| Maximum image height | 21.63mm | 21.630000mm |
| Petzval sum | — | $+0.004137223\ \text{mm}^{-1}$ |

Sequential height/reduced-angle tracing and an independent ABCD basis reconstruction produce identical first-to-last matrices to machine precision, with determinant 1. The Petzval sum is evaluated surface by surface as $\phi/(n n')$; its sign and equivalent radius depend on the stated project convention.

The inferred geometry passes the applicable surface and image-circle checks at the single defined infinity state. All element edge thicknesses remain positive, the modeled rims stay within the slope and conic-domain limits, the shared-band air gaps pass the cross-gap intrusion test, and no surface falls below the image-circle floor. These checks establish model validity, not a claim that the patent publishes or guarantees those clear apertures.

No source prescription value was corrected. The narrative BFD of 19.54mm is treated as a rounded or truncated presentation of the 19.545mm table spacing. No sensor plate, filter, inactive dummy plane, close-focus row, or scale transformation has been added.

## Sources

1. **JP 2024-107941 A**, original Japanese publication supplied with the record; especially Table 3 and Figure 6, pp. 12 and 17, and ¶0008–¶0017, ¶0022–¶0034, ¶0038–¶0040, ¶0055–¶0063.
2. Cosina, **COLOR-SKOPAR 28mm F2.8 Aspherical (Type I)**, official product page: https://www.cosina.co.jp/voigtlander/en/vm-mount/color-skopar-28mm-f2-8-aspherical-type-i/
3. Cosina, **COLOR-SKOPAR 28mm F2.8 Aspherical (Type II)**, official product page: https://www.cosina.co.jp/voigtlander/en/vm-mount/color-skopar-28mm-f2-8-aspherical-type-ii/
4. Cosina, **COLOR-SKOPAR 28mm F2.8 Aspherical L(L39)**, official discontinued-product page: https://www.cosina.co.jp/discontinued/color-skopar-28mm-f2-8-aspherical-ll39
5. Cosina, **Release date announcement for COLOR-SKOPAR 28mm F2.8 Aspherical VM/L(L39)**, July 27, 2023: https://www.cosina.co.jp/news/%E3%83%95%E3%82%A9%E3%82%AF%E3%83%88%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC-color-skopar-28mm-f2-8-aspherical-vm-ll39-%E7%99%BA%E5%A3%B2%E6%97%A5%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/
6. OHARA, **Glass Type**, official catalog listing for S-BSL7: https://www.ohara-inc.co.jp/en/product/01000/
7. HOYA Optics Division, **List of Glass Types**, official polished-lens glass catalog: https://www.hoya-opticalworld.com/english/products/kenma.html
8. HOYA Optics Division, **Glass Data**, official workbook dated June 1, 2026: https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx
