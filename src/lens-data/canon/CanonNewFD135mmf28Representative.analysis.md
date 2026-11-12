## Patent Reference / Design Identification

**Patent:** [US 4,206,976](https://patents.google.com/patent/US4206976A/en)
**Filed:** July 28, 1978
**Granted:** June 10, 1980
**Inventor:** Nozomu Kitagishi
**Assignee:** Canon Kabushiki Kaisha
**Title:** Compact telephoto lens
**Example details:** Table 1 and Figure 1, complete literal prescription scaled by 1.35 from nominal f = 100 to a 135 mm representative.

[Canon's museum](https://global.canon/en/c-museum/product/nfd220.html) and the [maker-branded guide, printed SG2-A20](https://www.galimbertipaolo.it/CanonFD/FDLensGuide1.pdf) establish the New FD135mm f/2.8 retail product and six-element/five-group construction. The [named MIR optical section](http://www.mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/135mmf28optic.jpg), in its [product-page context](https://www.mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/135mm.htm), supplies a secondary illustration matching the distinctive patent layout. MIR is not treated as primary maker evidence. Together these support a probable product-family association, not an identified factory prescription or exact production glass selection.

Table 1 is selected by an explicit first-embodiment convention, not by choosing the best computed performance. Tables 2–4 remain separate complete alternatives, not components of a combined prescription. Table 4 has a retained discrepancy: its printed total length implies native back focus 30.285, versus approximately 31.19699 from its literal table. No Table 4 value is substituted or silently repaired in this model.

## Optical Architecture

The six spherical elements form five components: a broad positive front singlet, a positive meniscus, a cemented positive/negative pair, a long air space, a rear negative meniscus and a final positive singlet. This sequence, rather than the element count alone, is the basis of the optical-section association. The patent discusses compact Ernostar-type construction and an intermediate focal length extending to 135 mm.

All eleven radii, ten internal thicknesses/spacings and six index/Abbe pairs are literal Table 1 values scaled uniformly by 1.35 where dimensional. Scaling is a nominal product-family hypothesis, not renormalization to calculated focal length. Computed EFL is approximately 135.0081 mm. The printed total length fixes the image plane at 119.1645 mm; the resulting image gap is 40.54725 mm. The computed native BFL of 30.04450 differs slightly from the source-derived 30.035. The source plane is retained without refocusing. Patent full field 18.2° is distinguished from the maker's rounded 18° specification.

Approximate optical rims were read from original Figure 1, not tuned to ray results. A 1700-pixel-high rendering gives first-to-last axial vertex span approximately 449 pixels for native track 58.235; optical half-rims about 140, 125, 110, 78 and 84 pixels yield rounded native semi-diameters 18.2, 16.2, 14.3, 10.1 and 10.9. The original v1 used the middle component’s outer rim for all three faces; independent review found that this overextended R7 through its bevel. Additive v2 instead uses R7’s optical endpoint at approximately 96 pixels from the axis, giving a rounded native semi-diameter of 12.4 (16.74 mm scaled). Only R7’s cap changes; the cemented interface and other faces retain their original estimates. These schematic estimates carry approximately ±0.6 native-unit uncertainty and are not certified clear apertures.

The patent figure supplies no numerical iris coordinate. The named secondary drawing suggests an iris around 32% along the large gap, measured from the third component toward the rear pair. That explicit inference divides native 34.133 into 10.92256 and 23.21044, preserving the total. It is neither a published patent coordinate nor factory mechanical metrology. The initial boundaries were frozen before v1 tracing. The source-grounded R7-only reduction was separately frozen before v2 tracing; no boundary was enlarged and the iris was not relocated.

## Element-by-Element Analysis

### L1: Positive front singlet
nd = 1.60311, νd = 60.7. Glass: Unmatched literal sodium-D/Abbe pair; no melt identity. Isolated-element focal length is not asserted.
The strongly curved front and weakly curved rear form the main forward positive component. Patent column 3 discusses the front-component power as part of the compactness conditions.

### L2: Positive meniscus
nd = 1.60311, νd = 60.7. Glass: Unmatched literal sodium-D/Abbe pair; no melt identity. Isolated-element focal length is not asserted.
The air-spaced second positive component is forwardly convex. Its thickness and neighboring air gaps are retained without replacing them with another embodiment's values.

### L3: Positive member of the cemented pair
nd = 1.80518, νd = 25.4. Glass: Unmatched literal sodium-D/Abbe pair; no melt identity. Isolated-element focal length is not asserted.
The positive member meets L4 at the literal R6 interface. Patent columns 3–4 discuss the doublet's index, dispersion and cemented-curvature relations in correction of chromatic residuals.

### L4: Negative cemented member
nd = 1.74000, νd = 28.3. Glass: Unmatched literal sodium-D/Abbe pair; no melt identity. Isolated-element focal length is not asserted.
The biconcave member completes the negative doublet component. No air space is introduced at the cemented interface.

### L5: Rear negative meniscus
nd = 1.60311, νd = 60.7. Glass: Unmatched literal sodium-D/Abbe pair; no melt identity. Isolated-element focal length is not asserted.
The forward-concave meniscus follows the long gap. The patent associates the combined power of the rear pair with coma/distortion and compactness tradeoffs; this is source design rationale, not a fresh performance validation.

### L6: Rear positive singlet
nd = 1.72342, νd = 38.0. Glass: Unmatched literal sodium-D/Abbe pair; no melt identity. Isolated-element focal length is not asserted.
The nearly flat front and more strongly curved rear complete the system. The final image gap is source-derived, not adjusted to improve focus.

## Glass Identification / Selection

The original patent explicitly calls the spectral line sodium. The model therefore uses native sodium D, despite the source's lower-case typographic d. Values are not converted to helium d. The six index/Abbe pairs remain literal; factory melt identities, anomalous partial dispersion and manufacturing substitutions are unknown. Dispersion modeling from these pairs alone cannot establish factory MTF equivalence.

## Focus Mechanism

The retail near-focus specification does not provide a numerical mechanical travel law. This representative is infinity-only with the supported static sentinel. No finite-focus translations, floating groups or undocumented interpolation are invented. The fixed printed image plane remains unchanged at infinity.

## Aspherical Surfaces

The selected embodiment is entirely spherical. No aspherical coefficients, extra optical plates, gap-sag overrides or source repairs are introduced. Hidden status denotes a qualified research draft, not delivery readiness; scoped diagnostics and unperformed integration checks are recorded in the audit.

Fresh scoped checks pass strict TypeScript, actual exported-module equality and native construction at f/2.8. A 25-point pupil grid plus a separately counted chief ray gives 26 transmitted at 0° and 4.55°, 21 transmitted/5 clipped at 6.825°, and 16 transmitted/9 clipped/1 blocked launch at 9.1°. Chief rays and sparse bundles are available at all four sampled fields. These are sparse diagnostic counts, not throughput percentages, dense-field certification or MTF validation. Off-axis loss and inferred boundary uncertainty remain explicit qualifications. Full integration, compiled-viewer and rendered comparisons have not been performed.

The additive R7 optical-face correction leaves the reported sparse counts unchanged. This does not remove schematic-boundary uncertainty or establish full optical acceptance.
