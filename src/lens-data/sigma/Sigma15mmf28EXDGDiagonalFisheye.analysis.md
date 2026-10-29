# Sigma 15 mm f/2.8 EX DG Diagonal Fisheye — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP H02-248910 A (特開平2-248910)  
**Application Number:** JP H01-069310 (特願平1-69310)  
**Filed:** March 23, 1989  
**Published:** October 4, 1990  
**Inventor:** Yasunori Murata (村田 安規)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** Fish-eye lens (魚眼レンズ)  
**Example details:** Original publication page 3, Numerical Example 1 table and Fig. 1; its aberration plots are Fig. 3 on page 4.

All 14 surface rows, the thirteen printed axial spacings and the seven index/Abbe pairs are used as printed, without scaling or correction. The table headings are $n_i$ and $\nu_i$ with no spectral suffix; the d line is assumed, consistent with the d- and g-line aberration plots. The inventor's romanization follows Google Patents; the front page prints the name in Japanese.

The association with the **Sigma 15 mm F2.8 EX DG Diagonal Fisheye** is a construction-based correlation, not a published production prescription:

1. Sigma's product page (the lens is now discontinued) gives seven elements in six groups, a 15 mm F2.8 full-frame diagonal fisheye, and a 180° diagonal field. The patent gives seven elements in six components, 15.3 mm, F2.8 and 180°.
2. Sigma's construction diagram and patent Fig. 1 share two front negative menisci, a biconvex third element, an unusually thick weak-negative fourth element, the stop before the fifth element, and a rear cemented positive/negative pair.
3. The patent's distortion caption uses the equisolid reference $y=2f\sin(\omega/2)$, and the model keeps that projection.
4. Example 2 shares the headline specifications and topology, so the choice rests on spacing. A fit to the vertex positions in Sigma's diagram leaves 0.32 mm rms for Example 1 against 0.86 mm for Example 2: Example 1's L1–L2 and L2–L3 air gaps (16.88 and 3.01 mm) match the drawing, while Example 2's 14.83 and 5.27 mm do not.

Neither the 1990 patent nor the product page shows that the EX DG lens kept these exact radii, glasses or focusing method. The model represents the patent example, not a manufacturing drawing or a measured specimen.

Sigma lists Sigma SA, Canon EF, Nikon F, Pentax K and Sony A versions; one prescription serves all of them. The rear gelatin-filter holder does not imply a fixed optical plate; the patent lists none and none is modelled.

## Optical Architecture

This is an all-spherical retrofocus fisheye with a strongly negative front section and a positive rear imaging section. Two negative menisci accept the wide field before the positive L3 and thick, weak-negative L4 redistribute ray height and correct aberration. L5 and the L6–L7 cemented pair follow the stop. There is one cemented interface and six air-separated components.

The patent emphasizes the small number of elements rather than an internal focusing or stabilization scheme. Its detailed description assigns an important correction role to the thin air lens between L3 and L4, the large axial thickness of L4, and the orientation of the rear cemented interface. There are no aspheres, diffractive surfaces or moving stabilization elements in the tabulated design.

The calculated Gaussian EFL is **15.300729 mm**, consistent with the printed 15.3 mm. The first-to-last optical-vertex distance is **56.2700 mm**. No numerical image gap follows surface 14 in the source; **38.955595 mm** is calculated from the paraxial matrix as the infinity back focus. It completes an omitted distance; it is not a measured production value.

The stop lies at row 9, between L4 and L5. Its diameter is not printed; the model derives an aperture-stop semi-diameter of **6.782 mm** from the paraxial entrance pupil for 15.3 mm at F2.8. The seven-blade aperture and F22 minimum aperture come from Sigma, not the numerical table.

## Element-by-Element Analysis

### L1 — Negative Meniscus

$n_d=1.69680$, $\nu_d=55.5$. Glass: J-LAK14 (HIKARI; inferred catalog equivalent). Separate-element $f=-28.671$ mm.

The first negative meniscus is convex toward the object and strongly concave on its rear face. The front clear aperture is much larger than the rear optical rim; the published drawings show mounting lands outside the rear curved zone. Its negative power begins the retrofocus expansion and admits the hemispherical field. The model does not treat the drawn mounting lands as refracting surface extensions.

### L2 — Negative Meniscus

$n_d=1.78590$, $\nu_d=43.9$. Glass: NBFD11 (HOYA; inferred catalog equivalent). Separate-element $f=-21.836$ mm.

The second negative meniscus further expands the angular field before the positive section. Its smaller diameter is consistent with the converging physical envelope behind the first meniscus. Both front elements are negative despite their object-facing convex surfaces.

### L3 — Biconvex Positive

$n_d=1.76182$, $\nu_d=26.6$. Glass: FD140 (HOYA; inferred catalog equivalent). Separate-element $f=+20.028$ mm.

The high-dispersion biconvex element supplies strong positive power after the negative front pair. The patent specifically constrains its focal length and Abbe number, and describes its role in correcting the spherical and chromatic aberration of the incident bundle. Its separate-element focal length is about 1.309 times the system focal length.

### L4 — Negative Meniscus

$n_d=1.80610$, $\nu_d=33.3$. Glass: NBFD15 (HOYA; inferred catalog equivalent). Separate-element $f=-51.841$ mm.

This element has a 12.4100 mm center thickness and weak net negative power. The original description connects its thickness and the preceding thin air lens with pupil placement and off-axis aberration correction. The front radius is −35.0100 mm and the rear radius is much flatter at −249.9600 mm. No aspheric term is present.

### L5 — Biconvex Positive

$n_d=1.48749$, $\nu_d=70.4$. Glass: FK5 (SUMITA; inferred catalog equivalent). Separate-element $f=+32.235$ mm.

The positive low-dispersion crown follows the stop. Its front surface is nearly flat but remains the literal spherical radius 558.5300 mm; it is not replaced by a plane. The steep rear curvature supplies most of this element's positive refractive power.

### L6 — Biconvex Positive

$n_d=1.48749$, $\nu_d=70.4$. Glass: FK5 (SUMITA; inferred catalog equivalent). Separate-element $f=+23.643$ mm.

The rear positive crown is cemented to L7. The patent describes the cemented surface as convex toward image space and uses this orientation to modify axial and oblique incidence. Its glass coordinate matches L5, but the shape and optical position differ.

### L7 — Negative Meniscus

$n_d=1.80518$, $\nu_d=25.5$. Glass: FD60 (HOYA; inferred catalog equivalent). Separate-element $f=-32.502$ mm.

The negative high-dispersion partner completes the rear cemented pair. It shares the −13.3300 mm interface with L6 and exits through a −28.0600 mm surface. The crown/flint pairing supplies an achromatizing degree of freedom, but no apochromatic production-performance claim follows from this table.

The $n_d/\nu_d$ notation above describes the modeling convention, not a more specific heading than the source prints. The listed individual powers are calculated as separate thick lenses in air; they are not the assembled contribution of cemented elements in their surrounding media.

## Glass Identification and Spectral Limits

The patent supplies numerical index and Abbe coordinates but no commercial glass names, vendors or partial-dispersion data. The following modern catalog matches are **inferred equivalents**, chosen for coordinate compatibility. They do not identify the historical melts, suppliers or exact EX DG glasses.

| Elements | Printed index / Abbe coordinate | Inferred catalog equivalent |
| -------- | ------------------------------- | --------------------------- |
| L1       | 1.69680 / 55.5                  | HIKARI J-LAK14              |
| L2       | 1.78590 / 43.9                  | HOYA NBFD11                 |
| L3       | 1.76182 / 26.6                  | HOYA FD140                  |
| L4       | 1.80610 / 33.3                  | HOYA NBFD15                 |
| L5, L6   | 1.48749 / 70.4                  | SUMITA FK5                  |
| L7       | 1.80518 / 25.5                  | HOYA FD60                   |

The catalog curves provide a qualified dispersion model consistent with the printed coordinates. The nearest catalog Abbe values differ slightly from the printed one-decimal coordinates. The model assigns no anomalous-dispersion designation, and the patent supplies no $n_C$, $n_F$, $n_g$ or $\Delta P_{g,F}$ values.

Numerical MTF is unavailable at infinity and finite focus because the MTF calculation does not support this fisheye optical path. This computational limitation does not establish an optical failure or a resolution limit.

## Focus Mechanism and Finite-Distance Qualification

The manufacturer states a 0.15 m minimum focusing distance and 1:3.8 maximum magnification. The patent gives only one infinity prescription for each example and does not state its focusing mechanism, finite spacings or finite object distance. The model therefore uses an explicitly **inferred rigid unit-focus approximation**, not an asserted production mechanism.

Only the final image gap changes. Nine controls at normalized focus 0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875 and 1 are calculated from the source paraxial matrix for object-to-image distance $150/\text{focus}$ mm. The inferred image gap grows from 38.955595 mm to 42.689041 mm. This is equivalent to moving the complete lens objectward by 3.733446 mm relative to a fixed image plane; all glass separations and the physical stop remain rigid.

At the close endpoint the paraxial magnification is approximately −0.2440, or 1:4.10, rather than the marketed 1:3.8. This discrepancy shows that the simple unit-focus approximation does not exactly reproduce the production lens's close-focus specifications.

Between the nine controls the model interpolates the image gap. On a fine sampling grid, the largest additional paraxial image-plane refocus required at the indicated axial distance is about 0.046 mm, and the largest relative distance discrepancy is about 7.3%. These sampled interpolation bounds do not establish universal accuracy or sharpness. All finite-focus spacings are inferred.

Sampled finite-object on-axis bundles transmit at normalized focus 0.25/0.5/0.75/1. Finite off-axis behavior at 22.5°, 45°, 67.5° and 90° is qualified by a **spherical object-surface approximation**: the sphere is centered on the entrance-pupil reference and only its axial point has the indicated object-to-image distance. This differs from a flat object field. At close focus, the 90° field suffers strong physical clipping, and some pupil-target ray directions remain unresolved. Finite full-field coverage remains uncertain.

## Aspherical Surfaces

There are none. Every optical surface retains its printed spherical radius; the stop is a plane. The model contains no conic terms, polynomial aspheres or cover plates.

## Source Conditions and Aberration Strategy

The patent imposes four design conditions involving L3 and L4:

- $1.1f < f_3 < 1.6f$;
- $\nu_3 < 30$;
- $1.8f < |R_4| < 2.6f$, where $R_4$ is the object-side radius of L4;
- $0.7f < D_4 < 0.9f$, where $D_4$ is L4's center thickness.

The prescription gives $f_3/f\approx 1.309$, $\nu_3=26.6$, $|R_4|/f\approx 2.288$ and $D_4/f\approx 0.811$, satisfying the stated inequalities. These are architectural constraints, not independent measured resolution specifications. The source's d/g aberration plots show its design intent; they do not supply numerical MTF.

## Clear Apertures, Full Field and Model Limits

No clear diameters are tabulated. The model's semi-diameters are approximate optical-curve extents inferred from patent Fig. 1 and the manufacturer's construction diagram, consistent with ray footprints and geometric constraints. The first meniscus carries 29.0 mm front and 15.0 mm rear clear radii. The other component rims are 10.5 mm for L2, 8.7 mm for L3, 8.5 mm for L4, and 8.3 mm for the rear elements. These values are not mechanically dimensioned source apertures.

The first-rear sphere requires a 74.581645° rim slope at 15.0 mm, within the model's 75° rim limit. A 14.7 mm rear rim would clip the 90° chief, which requires a radius of 14.909367 mm; the 15.0 mm rim admits it. The steep concave curve and unequal rims are consistent with the drawings.

Sampled focus geometries have positive material and air clearance, minimum 0.98 mm and 0.10 mm respectively. The maximum sampled cross-gap sag fraction is 0.595134, within the model's 0.90 limit. These geometric clearances do not establish manufacturing tolerances.

The fisheye model uses vector ray directions for every field, including the 90° edge. Parallel-direction chief rays transmit through 90° at every focus keyframe. At infinity the 90° chief reaches image radius 21.686512 mm, compared with the equisolid reference 21.637468 mm, a roughly 0.23% deviation. The image coordinate follows the terminal surface intersection and outgoing direction. The full-frame 43.2 mm image circle is a format reference, not a diameter tabulated in the patent. Thus the transmitted 90° chief lies slightly outside that format-reference radius; this does not establish that every marketed mount records precisely 180° on its sensor.

The modeled infinity pupil is partially clipped, producing geometric vignetting rather than uniform pupil transmission.

The diagram displays a smaller tracing half-field than the declared optical half-field. Parallel-direction rays through finite-focus geometry do not represent finite-object conjugates.

## Sources

- [Original J-PlatPat publication JP H02-248910 A](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-H02-248910/11/ja), four-page original scan; numerical table and Fig. 1 on page 3, Fig. 3 on page 4.
- [Google Patents index for JPH02248910A](https://patents.google.com/patent/JPH02248910A/en), searchable metadata and inventor Roman spelling.
- [Sigma 15 mm F2.8 EX DG Diagonal Fisheye product page](https://www.sigma-global.com/en/lenses/15_28/), product specifications and mounts.
- [Sigma official optical construction diagram](https://www.sigma-global.com/lenses/15_28_specification_01.jpg), vertex-spacing, architectural and approximate clear-rim comparison.
