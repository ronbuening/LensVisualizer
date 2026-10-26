## Patent Reference and Design Identification

**Patent:** US 7,057,830 B2
**Published:** 6 June 2006
**Inventors:** Hildegard Ebbesmeier
**Assignee:** Jos. Schneider Optische Werke GmbH
**Example details:** Figure 2, Tables 1–2.

Schneider's cinema-lens catalogue and Cinelux Première data sheet list article 10730 as 35 mm, f/1.7–4.0, seven elements and 31.9 mm back focal distance. Patent 31.898 mm rounds to that value; production correspondence is probable, while the factory prescription is unconfirmed. The maker's generic and 75 mm diagrams do not establish the exact 35 mm aspheric count or glass positions.

## Optical Architecture

Seven air-separated powered elements. This is a cinema projection prime in the source screen-to-film orientation, not a photographic 36×24 mm taking lens. No added cover/corrector plate and no reciprocal reversal.

## Element-by-Element Analysis

### L1: Meniscus Negative

nd = 1.51680, νd = 64.74399. Glass: Unmatched (source nd=1.5168, dispersion=64.14). Isolated thick-lens f = -61.92351 mm.

Negative screen-side meniscus bounded by surfaces 36 and 38. Calculated spectral anchors: nC=1.5143973726, nF=1.5223795808, ng=1.5266976749.

### L2: Meniscus Positive (Aspheric)

nd = 1.72916, νd = 55.16462. Glass: Unmatched (source nd=1.72916, dispersion=54.65). Calculated isolated thick-lens f = 115.35060 mm.

Positive meniscus bounded by surfaces 40 and 42, with the rear asphere ahead of the aperture stop. Calculated spectral anchors: nC=1.7251814433, nF=1.7383993345, ng=1.7455497491.

### L3: Biconvex Positive

nd = 1.64050, νd = 60.71642. Glass: Unmatched (source nd=1.6405, dispersion=60.15). Isolated thick-lens f = 31.55492 mm.

Positive biconvex element immediately after the stop, bounded by surfaces 44 and 46. Calculated spectral anchors: nC=1.6373247613, nF=1.6478738028, ng=1.6535804637.

### L4: Biconcave Negative

nd = 1.59270, νd = 35.63241. Glass: Unmatched (source nd=1.5927, dispersion=35.3). Isolated thick-lens f = -23.54531 mm.

First central negative biconcave element, bounded by surfaces 48 and 50. Calculated spectral anchors: nC=1.5876932824, nF=1.6043270152, ng=1.6133252803.

### L5: Biconcave Negative

nd = 1.80809, νd = 22.96423. Glass: Unmatched (source nd=1.80809, dispersion=22.75). Isolated thick-lens f = -55.59240 mm.

Second central negative biconcave element, bounded by surfaces 52 and 54, ahead of the final positive pair. Calculated spectral anchors: nC=1.7974981649, nF=1.8326872384, ng=1.8517232908.

### L6: Biconvex Positive

nd = 1.64050, νd = 60.71642. Glass: Unmatched (source nd=1.6405, dispersion=60.15). Isolated thick-lens f = 49.60766 mm.

Positive biconvex element bounded by surfaces 56 and 58, preceding the final element. Calculated spectral anchors: nC=1.6373247613, nF=1.6478738028, ng=1.6535804637.

### L7: Biconvex Positive

nd = 1.75500, νd = 52.79250. Glass: Unmatched (source nd=1.755, dispersion=52.3). Isolated thick-lens f = 40.57869 mm.

Final film-side positive biconvex element, bounded by surfaces 60 and 62. Calculated spectral anchors: nC=1.7506953471, nF=1.7649966223, ng=1.7727331096.

## Glass Identification and Selection

Both grants label nd at rounded 588 nm, but define the printed dispersion as (nd−1)/(nF′480−nC′643.8). The model preserves nd at the physical d line 587.5618 nm, treating 588 as its rounded label. A two-term Cauchy curve fitted to that mixed denominator supplies conventional νd and C/F/g line indices; these are calculated rather than printed νd or ne/νe. Factory glass and melt identities are unknown. The prescription is unoptimized; individual power signs do not establish unique aberration contributions.

## Focus Mechanism

The projection lens is modeled only at the patent's infinity conjugate, retaining the printed 31.898 mm back focus with no focusing movement. Schneider publishes no minimum projection distance; the projectionist sets the throw with the lens's FOCUS screw. Flat 22 × 16 mm cinema film is assumed; the patent performance discussion's 0.1–0.15 mm edge film bow is not modeled. The patent states f/1.7 in the text and f/1.8 in graph captions.

## Aspherical Surfaces

Standard sag uses sqrt(1−(1+K)C²h²), with polynomial coefficients in millimetres. All nonzero printed terms are retained.

Surface 42: R=-52.802 mm; K=0, A4=-5.31052e-07, A6=5.2398e-10, A8=-1.31713e-11, A10=3.19473e-14.

## Model Scope and Limitations

Both grants print C42 = +0.018939 mm⁻¹ in Table 2, conflicting with Table 1's R42 = −52.802 mm. The model uses the printed radius directly and retains every polynomial coefficient. Full source free diameters are retained; the iris radius is inferred from nominal f/1.7. Surface 42 limits traced speed to approximately f/1.7694. The printed image plane lies about 7.2 µm ahead of the paraxial infinity image plane; no best-focus refit is applied.

Infinity full-field MTF is available at f/1.7, 2.8 and 4 with reference, five-line photopic and C/d/F spectra. Numerical sampling converges through at least 50 lp/mm; convergence through 100 lp/mm is not uniform across fields, spectra and apertures. These calculated curves do not establish measured production performance.

## Sources

- https://patents.google.com/patent/US7057830B2/en
- https://patents.google.com/patent/EP1536263B1/en
- [Schneider cinema-lens catalogue, pp. 5 and 27, including article 10730](https://www.yumpu.com/en/document/view/4156290/cinema-schneider-optics)
