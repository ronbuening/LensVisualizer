## Patent Reference and Design Identification

**Patent:** JP 1987-249119 A
**Filed:** 1986-04-21
**Published:** 1987-10-30
**Inventor:** Tetsuya Arimoto
**Applicant:** Minolta Camera Co., Ltd.
**Title:** 逆望遠型広角レンズ (inverse-telephoto wide-angle lens)
**Embodiment analyzed:** Example 4

The selected correlation is JP 1987-249119 A Example 4 to the MINOLTA AF 20mm f/2.8. This is the fixed project correlation; it should not be read as a claim that Minolta or Sony publicly identified this patent as the production prescription. The evidence is convergent rather than documentary. Example 4 is a 10-element, 9-group, all-spherical f/2.8 design with a 94° full field and a rear group that translates toward the object for close focusing. Its tabulated focal length is 100.0 patent units. Uniform scaling by 0.2 produces a 20 mm model without changing refractive indices, Abbe numbers, or power ratios.

Sony's official specification for the later A-mount 20mm F2.8, model SAL20F28, gives the same principal production-side identifiers: 20 mm focal length, f/2.8 maximum aperture, 94° angle of view on 35 mm, 9 groups / 10 elements, 0.25 m minimum focus, 0.13× maximum magnification, and Sony A-mount. Those marketed values are used only for product identity and the constrained close-focus endpoint. The patent and the verified final data file remain the authority for the optical prescription and exact design quantities.

The final data model stores the marketed focal length as 20 mm and the independently recomputed design focal length as 19.99986 mm. The design is represented on the LensVisualizer `sony-a` mount taxonomy and `135-full-frame` image format.

## Optical Architecture

Example 4 is an inverse-telephoto, or retrofocus, wide-angle design. The patent divides it into a divergent front functional group `Gf` and a convergent rear functional group `Gr`. In the final scaled data, `Gf` comprises L1-L2 and has an independently computed EFL of −60.242652 mm. `Gr` comprises L3-L10 and has an EFL of +22.216211 mm. The complete prescription has an EFL of 19.999860 mm and a back focal distance of 35.829816 mm from the last refracting surface, so `BFD/EFL = 1.791503`; under the project definition, the design is retrofocus because BFD exceeds EFL.

The front group obtains most of its divergence from L2 while L1 supplies weak positive power. The rear group alternates negative and positive elements around an internal aperture stop, then ends in the cemented L9-L10 pair. This arrangement allows a relatively long rear clearance behind a 20 mm optical system while keeping the strong positive imaging power concentrated in the rear group.

The aperture stop is source-resolved only by ordinal location. Figure 10 on printed patent page 94 places it in the air space between L6 and L7, corresponding to the published `d12` gap. The data model inserts one `STO` at the midpoint of that gap because the patent gives neither an exact axial coordinate nor a physical stop diameter. The physical stop semi-diameter is then solved from the published f/2.8. Both the stop coordinate and its diameter are therefore modeling inferences rather than patent-tabulated values.

The design is all-spherical. No aspheric surfaces, conic constants, polynomial coefficients, folded-path surfaces, filters, sensor cover plates, or inactive dummy/flare-cutter planes occur in Example 4. The final image plane is also not a numbered patent surface; its infinity position is set from the independently solved back focal distance.

Close focusing is rear-group focusing. `Gf` remains fixed while the complete `Gr` block moves toward the object. The internal spacings inside `Gr` remain fixed, so the movement is represented by the air gap ahead of `Gr` decreasing while the rear gap to the fixed image plane increases by the same amount.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.51680, νd = 64.20. Glass: BSC7 (Hoya; exact coordinate equivalent, patent vendor unresolved). f = +260.847995 mm.

L1 is a weak positive meniscus at the front of the divergent `Gf` group. Its standalone air-to-air power is small compared with L2, so it moderates rather than determines the sign of the front group. The broad front element also supplies the large clear aperture required by the 94° field in the inferred semi-diameter model.

The BSC7 label is a catalog-coordinate equivalence, not a statement that Minolta procured Hoya BSC7 for the production lens. The patent publishes only nd and νd for this element.

### L2 — Negative Meniscus

nd = 1.61800, νd = 63.45. Glass: PCD4 coefficient proxy (supplier unspecified; patent 618635). f = −47.482699 mm.

L2 supplies the dominant negative standalone power in `Gf`. Together with the much weaker positive L1, it yields the verified negative functional-group EFL of −60.242652 mm. This front-group divergence is the defining first-order feature of the retrofocus architecture.

No catalog match establishes a defensible historical vendor identity for this coordinate pair, so the six-digit class is retained.

### L3 — Negative Meniscus

nd = 1.69680, νd = 56.47. Glass: H-LaK12 coefficient proxy (supplier unspecified; patent 697565). f = −28.542051 mm.

L3 is the first element of the translating rear group `Gr`. Its negative standalone power precedes the positive and negative elements that follow before the stop. Because L3 moves rigidly with the rest of `Gr`, its axial relationship to every later rear-group element is unchanged during focus.

H-LaK12 is used only as a compatible dispersion proxy for the 697565 coordinate. It does not establish the patent supplier, and no line-index or anomalous-partial-dispersion data are available from the patent for this glass.

### L4 — Plano-Convex Positive

nd = 1.68300, νd = 31.52. Glass: 683315 — flint class (catalog unresolved). f = +168.097511 mm.

L4 is a weak positive plano-convex element in the pre-stop portion of `Gr`. Its standalone power is modest, and its placement between the negative L3 and L5 means its contribution must be understood as part of the complete rear-group matrix rather than by adding isolated element powers.

The relatively low νd identifies a dispersive flint-class coordinate, but the source does not provide enough spectral data to support a specific anomalous-dispersion interpretation.

### L5 — Negative Meniscus

nd = 1.78560, νd = 42.81. Glass: NBFD11 coefficient proxy (supplier unspecified; patent 786428). f = −27.593404 mm.

L5 is another strong negative meniscus before the stop. Its high refractive index allows substantial negative standalone power within a compact axial thickness. In the verified prescription it is followed by the strongest positive standalone element, L6, so the pair forms a pronounced local negative-positive power transition immediately ahead of the aperture stop.

HOYA NBFD11 is used only as a compatible spectral proxy. Its catalog coordinate, 1.78590/43.93, differs from the
patent by Δn = +0.00030 and Δν = +1.12, within the project's guarded proxy window. This does not establish Minolta's
historical supplier or replace the patent coordinate.

### L6 — Biconvex Positive

nd = 1.83400, νd = 37.05. Glass: S-LAH60 coefficient proxy (supplier unspecified; patent 834371). f = +15.841755 mm.

L6 has the strongest positive standalone power in the prescription and lies immediately before the stop gap. Its location makes it a major contributor to the convergent behavior of `Gr`, but its optical effect is not equivalent to its isolated air-to-air EFL because the surrounding elements strongly alter the in-situ ray vergence.

The patent's Figure 10 places the stop after this element. The exact distance from L6 to the stop is not published; the final model uses the disclosed midpoint split of the source air gap.

### L7 — Biconcave Negative

nd = 1.84666, νd = 23.83. Glass: SF57 (Schott; exact coordinate equivalent, patent vendor unresolved). f = −36.410699 mm.

L7 is the first element behind the stop and is a high-index, low-Abbe biconcave negative element. Its standalone power counteracts the strong positive L6 and contributes to the alternating power structure through the rear half of `Gr`.

SF57 reproduces the patent nd/νd coordinates exactly in the audited Schott catalog. That makes SF57 a defensible optical equivalent for modeling, but not proof of Minolta's historical glass supplier.

### L8 — Positive Meniscus

nd = 1.61800, νd = 63.45. Glass: PCD4 coefficient proxy (supplier unspecified; patent 618635). f = +32.048601 mm.

L8 restores positive standalone power after L7. It uses the same source nd/νd coordinate pair as L2, but it operates in a different part of the system and with the opposite standalone power sign. The repeated coordinate therefore does not imply repeated optical function.

In the inferred aperture model, L8 has the smallest positive edge-thickness margin, but it remains valid under the current edge-thickness and rim-slope criteria.

### L9 — Negative Meniscus, Front Component of D1

nd = 1.83400, νd = 37.05. Glass: S-LAH60 coefficient proxy (supplier unspecified; patent 834371). f = −29.699386 mm.

L9 is the negative component of the rear cemented pair `D1`. The listed f value is its standalone air-to-air EFL and should not be confused with the power of the cemented pair. At surface 18, L9 is cemented directly to L10; the interface transitions to L10's lower-index glass without an intervening air layer.

The shared 834371 coordinate with L6 again reflects source glass coordinates, not identical optical role. L9's negative contribution substantially weakens the positive power of L10 when the two are treated as a cemented unit.

### L10 — Biconvex Positive, Rear Component of D1

nd = 1.51728, νd = 69.68. Glass: PCS1 (Hoya; near-exact coordinate equivalent, patent vendor unresolved). f = +22.684972 mm.

L10 is the positive rear component of `D1` and the final glass element in the system. PCS1 is a near-exact catalog-coordinate equivalent: the coordinate residuals are Δn = +0.000004 and Δν = −0.00131 relative to the patent pair. As with BSC7 and SF57, the catalog match supports optical modeling but does not establish historical procurement.

The isolated L10 element is strongly positive, whereas isolated L9 is negative. The complete cemented L9-L10 pair has a verified air-to-air EFL of +77.342898 mm, so the pair has positive but much weaker net power than L10 alone. The larger rear functional group `Gr`, which includes L3-L10 and their intervening spacings, has a much stronger +22.216211 mm EFL. These are distinct quantities: standalone element power, cemented-pair net power, and in-situ functional-group behavior are not interchangeable.

## Glass Identification and Selection

The patent supplies nd and νd only. It does not identify glass manufacturers and does not publish nC, nF, ng, PgF, or dPgF. The final data uses compatible catalog curves as supplier-neutral coefficient proxies while preserving the patent coordinates; unmatched rows remain conservative six-digit coordinate classes.

| Data label | nd | νd | Elements | Identification status |
|---|---:|---:|---|---|
| BSC7 (Hoya) | 1.51680 | 64.20 | L1 | Exact coordinate equivalent; patent vendor unresolved |
| PCD4 coefficient proxy | 1.61800 | 63.45 | L2, L8 | Compatible curve; patent supplier unresolved |
| H-LaK12 coefficient proxy | 1.69680 | 56.47 | L3 | Compatible curve; patent supplier unresolved |
| 683315 | 1.68300 | 31.52 | L4 | Coordinate class; vendor unresolved |
| NBFD11 coefficient proxy | 1.78560 | 42.81 | L5 | Compatible curve; Δn = +0.00030, Δν = +1.12; patent supplier unresolved |
| S-LAH60 coefficient proxy | 1.83400 | 37.05 | L6, L9 | Near-exact curve; patent supplier unresolved |
| SF57 (Schott) | 1.84666 | 23.83 | L7 | Exact coordinate equivalent; patent vendor unresolved |
| PCS1 (Hoya) | 1.51728 | 69.68 | L10 | Coefficient-backed near-exact proxy; Δn = +0.000004, Δν = −0.00131; patent supplier unresolved |

The design spans high- and low-Abbe glasses across both positive and negative elements, but nd/νd coordinates alone do not establish anomalous partial dispersion or apochromatic correction. No APO, ED, or anomalous-dispersion claim is made from this prescription. Any Sellmeier-based chromatic tracing that uses the named catalog equivalents is catalog-derived modeling rather than a patent-published spectral specification.

## Focus Mechanism

The patent explicitly describes rear-group focusing: `Gf` is fixed and the complete `Gr` group moves toward the object for close focusing. This makes the internal movement kinematically constrained. The source publishes one finite-conjugate check at β = 1/10, but it does not publish a 0.25 m production endpoint.

The final data stores the patent's β = 0.1 row as an exact keyframe and uses a **CONSTRAINED_RECONSTRUCTION** for minimum focus. The manufacturer's rounded 0.25 m minimum-focus distance supplies the single scalar endpoint constraint, while the patent supplies the single mechanical degree of freedom. The image plane remains fixed, and the two variable air gaps change by equal and opposite amounts:

| Variable gap | Infinity | Patent β = 0.1 | 0.25 m reconstructed endpoint |
|---|---:|---:|---:|
| `D4` after surface 4 | 9.349000000 mm | 7.009400000 mm | 6.411157394 mm |
| `BF` after surface 19 | 35.829815933 mm | 38.169415933 mm | 38.767658539 mm |

The rigid rear group therefore moves 2.937842606 mm toward the object. The front-vertex-to-image station remains 93.261215933 mm at both endpoints. Independent tracing of the reconstructed close state gives a 250.000000010 mm object-to-image distance and a magnification magnitude of 0.124254284. The latter is consistent with Sony's rounded 0.13× production specification but was not used as a second fitting constraint.

At the patent keyframe, scaling the published `d4 = 35.047` by 0.2 gives `D4 = 7.0094 mm`; the corresponding rigid-group shift reproduces a magnification magnitude of 0.099997764. This supports the movement model without treating the published β state as the production minimum-focus endpoint. Interpolation between keyframes is a visualization approximation.

## Conditional Expressions

The patent states seven design conditions. All remain satisfied after uniform 0.2 scaling because the dimensional ratios are scale-invariant and νd is unchanged.

| Patent condition | Verified value | Result |
|---|---:|---|
| `10.0 < f1/f < 17.0` | 13.04249126 | PASS |
| `1.90 < \|f2\|/f < 3.10` | 2.37415162 | PASS |
| `1.15 < r4/d4 < 1.62` | 1.40053482 | PASS |
| `1.5 < r6/d7 < 3.5` | 3.03248284 | PASS |
| `1.3 < d4/d6 < 3.50` | 2.39496875 | PASS |
| `0.50 < r11/\|r12\| < 0.80` | 0.75812888 | PASS |
| `57.0 < ν1 < 70.0` | 64.20 | PASS |

Example 4 contains two internal summary discrepancies. The patent prints `f1 = 12.6 f` and `|f2| = 2.29 f`, whereas direct thick-lens calculations from the listed L1 and L2 radii, thicknesses, and indices give 13.042491 f and 2.374152 f. Both independent values still satisfy the stated inequalities, so no prescription value has been altered to force the printed summaries.

## Verification Summary

The final data preserves the 19 refracting surfaces of Example 4, inserts only the inferred `STO`, and applies a uniform scale factor of 0.2 to every dimensional prescription quantity. Because the design is entirely spherical, there are no aspheric coefficients requiring the usual `A_p / s^(p-1)` transformation and no conic constants to preserve.

Independent first-order reconstruction from the final TypeScript arrays gives an EFL of 19.9998596545 mm, BFD of 35.8298159335 mm, and front-vertex-to-image track of 93.2612159330 mm. The modeled f-number is 2.7999999998, but this is not an independent measurement of the patent's f/2.8: the stop diameter was solved from f/2.8 at the inferred Figure-10 stop coordinate. The surface-by-surface Petzval sum is +0.004435569584 mm⁻¹.

The patent publishes no semi-diameters. The data file's clear apertures are therefore modeling inferences derived from exact spherical ray envelopes at infinity and at the reconstructed 0.25 m endpoint, then independently checked for positive edge thickness, actual rim slope, cross-gap intrusion, and off-axis containment. The inferred set passes those model-level geometry checks. Full-field chief rays fit at both focus endpoints; four opposite-edge marginal rays at the extreme 47° field do not reach the inferred f/2.8 stop and are retained as natural pupil vignetting rather than hidden by enlarging the stop or using layout controls.

The source's tabulated Example-4 spacings sum to 287.157 patent units, while the printed summary gives `Σd = 287.156`. The final data preserves every listed interval and records the one-thousandth discrepancy rather than silently modifying a spacing. No radius sign, thickness sign, or glass coordinate required correction. The image-plane distance is computed because the patent does not tabulate a numbered image-plane surface.

No sensor cover glass, filter, inactive dummy plane, flare cutter, or other nonparticipating optical plane is present in Example 4, so the sequential model requires no omitted-plate compensation. The only non-tabulated optical-plane insertion is the disclosed aperture stop.

## Sources and References

1. **JP 1987-249119 A**, `逆望遠型広角レンズ`, Minolta Camera Co., Ltd., inventor Tetsuya Arimoto, filed 1986-04-21 and published 1987-10-30. Example 4 is on printed page 92; Figure 10 and the 47° aberration plot for Example 4 are on printed page 94.
2. **Sony SAL20F28 Specifications**, Sony USA. Manufacturer-side source for 20 mm focal length, f/2.8 maximum aperture, 94° angle of view on 35 mm, 9 groups / 10 elements, Sony A-mount, 0.25 m minimum focus, 0.13× maximum magnification, and f/22 minimum aperture: https://www.sony.com/electronics/support/lenses-a-mount-lenses/sal20f28/specifications
3. **HOYA Optical Glass Data Downloads**, consulted in the glass-coordinate audit for BSC7 and PCS1: https://www.hoya-opticalworld.com/english/datadownload/index.html
4. **SCHOTT Optical Glass Downloads**, consulted in the glass-coordinate audit for SF57: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
5. **Cross-vendor coordinate audit:** OHARA optical-glass catalogs (https://oharacorp.com/), HIKARI optical-glass catalogs (https://www.hikari-g.co.jp/optical_glass/catalog/), CDGM optical-glass data (https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database), and SUMITA optical-glass downloads (https://www.sumita-opt.co.jp/en/download/). These checks did not justify replacing the unresolved six-digit coordinate classes with specific historical vendor assignments.
