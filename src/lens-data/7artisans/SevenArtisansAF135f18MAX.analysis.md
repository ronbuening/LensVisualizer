# 7Artisans AF 135mm f/1.8 MAX

## Patent Reference and Design Identification

**Patent:** CN 122469500 A
**Inventors:** Liu Changjia, Luo Xiangshi, Yang Xijing
**Assignee:** Shenzhen 7Artisans Photoelectric Technology Co., Ltd.
**Filed:** June 25, 2026
**Published:** July 28, 2026
**Example details:** Table 1, paragraphs 0039–0041, original pages 5–6; Figures 1–7.

The twelve-page patent contains a single numerical example in Table 1. The [connected optical section published in Martin’s PhillipReeve review](https://phillipreeve.net/blog/wp-content/uploads/2026/05/7Artisans-AF135mm-F1.8-FF-Lens-construction.jpg), under [Specifications](https://phillipreeve.net/blog/review-7artisans-135mm-f-1-8-max/), supports the ordered shapes and all six ED/five high-index positions, including the distinctive plano-concave L7. This 400 × 265 pixel graphic leaves tiny rear air gaps, exact radii and rear contact boundaries unresolved; it omits the stop and separate camera-side plate. The official operating manual contains no internal optical section.

The [official product](https://7artisans.store/products/af-135mm-f1-8-full-frame-lens-for-e-z-l) matches the sixteen-element/thirteen-group construction, six ED and five high-index elements, f/1.8–16 aperture range, twelve-blade iris and 0.68 m minimum focus distance. The maker’s own patent application and matching ordered shapes strongly support the association, while exact manufactured prescription identity remains unproven. The numerical prescription gives approximately 132.106 mm, versus the marketed 135 mm; the patent does not print a focal length. The prescription uses scale factor 1, with radii, thicknesses and semi-diameters in millimetres and no unit conversion.

## Optical Architecture

The positive front group comprises L1–L6, followed by the tabulated iris, a single negative focusing element L7, and positive rear group L8–L16. Three cemented pairs are L2/L3 (C1), L5/L6 (C2) and L14/L15 (C3). The glass-to-glass transitions are retained. The separate 2.5 mm camera-side plate and 1 mm final air space retain their physical dimensions.

## Elements and Glass

All source radii, separations, refractive indices and Abbe numbers are retained. Catalog rows supply spectral curves for all sixteen elements and the camera-side plate, with L5 using an S-FPL55 spectral proxy. These assignments do not identify the historical glass, factory supplier or melt.

| Elements | Catalog row | Printed nd / νd |
|---|---|---|
| L1, L6, L9, L14 | CDGM H-ZF52 | 1.84666 / 23.784497 |
| L2, L10, L12 | CDGM H-FK61 | 1.497 / 81.612838 |
| L3 | Hoya E-FD13 | 1.74077 / 27.760063 |
| L4 | CDGM H-ZF6 | 1.7552 / 27.530047 |
| L5 | Ohara S-FPL55 (spectral proxy) | 1.4378 / 94.523389 |
| L7 | Schott N-LAK8 | 1.713 / 53.832974 |
| L8 | Hoya C12 | 1.52307 / 58.639792 |
| L11 | CDGM H-ZF4A | 1.72825 / 28.318797 |
| L13 | Ohara S-LAH79 | 2.0033 / 28.316305 |
| L15 | Schott N-PSK53A | 1.618 / 63.392702 |
| L16 | CDGM H-ZPK5 | 1.5928 / 68.342024 |
| Camera-side plate | CDGM H-K9L | 1.5168 / 64.198732 |

The maker marks L2/L5/L10/L12/L15/L16 as ED and L1/L6/L9/L13/L14 as high-index; the six ED positions have consistent index/Abbe values and carry inferred ED tags, with L5 using the wavelength dependence of the ED fluorophosphate row S-FPL55.

L5 retains the printed nd = 1.4378 and νd = 94.523389. The Ohara S-FPL55 catalog row has nd = 1.43875 and νd = 94.661059: catalog minus patent Δnd = +0.00095 and Δνd = +0.137670 (about +0.14). This lies within the site's spectral-proxy window of about 0.002 in index and 0.25 in Abbe number. The engine preserves the printed index at the d reference line and borrows only the catalog row's wavelength dependence; the authored nd/νd pair remains unchanged. This is a qualified spectral proxy, not an exact glass identification; supplier and melt are unspecified.

The paraxial channel calculation in `chan.mjs` gives the following focus offsets relative to d (G), comparing nd/νd-only dispersion for L5 with its S-FPL55 spectral proxy. Channels R/G/B/V correspond to C/d/F/g.

| Line | L5 nd/νd-only offset, µm | L5 S-FPL55 proxy offset, µm |
| --- | ---: | ---: |
| C (R) | +28.2 | +15.0 |
| d (G) | 0.0 | 0.0 |
| F (B) | +5.4 | −8.3 |
| g (V) | +65.2 | −4.0 |

The S-FPL55 proxy gives a much smaller violet secondary-spectrum residual: g is −4.0 µm from d, versus +65.2 µm with nd/νd-only dispersion. The maximum absolute offset from d is just under 15 µm (14.995457 µm before rounding); the full C/d/F/g focus range is 23.3 µm, versus 65.2 µm with nd/νd-only dispersion. This range agrees better with the roughly 20 µm paraxial spread of the patent's Figure 2 longitudinal-aberration curves over 0.436–0.656 µm. The comparison supports the proxy's spectral behavior without establishing the manufactured glass identity or reproducing the full aberration curves.

The prose and claims assign Abbe numbers 80–90 to L9/L11, whereas Table 1 gives them 23.784497/28.318797 and places 81.612838 at L10/L12; the model follows the table.

## Aperture and Geometry

Figure 2 prints pupil radius 36.8167 mm. Combining that with the table's paraxial focal length yields approximately f/1.794. The iris position is directly tabulated; its inferred physical radius is 20.299857 mm. Clear semi-diameters are estimates from Figure 1 rather than printed aperture dimensions. L4 has a 24.5 mm outer rim and a 22.5 mm rear optical cap followed by a 2.0 mm land. S7/S8 have 22.5 mm clear radii, passing the iris-admitted axial beam; their facing surfaces retain 0.0206 mm clearance within a 99% gap-sag allowance. S26–S30 have 18.0 mm clear radii, sufficient for the 21.70 mm image-height chief ray. Figure 1 suggests rear rims near 19.0 mm, but the spherical S28/S29 faces would cross at that height; the modeled 18.0 mm rims retain 0.2518 mm clearance. These dimensions do not establish factory edge geometry.

## Focus

Only the tabulated infinity configuration is modeled. The product's minimum focus distance (MFD) is 0.68 m and its autofocus uses a stepping motor. The patent's 0–17 mm L7 travel does not establish a complete finite-conjugate relation or endpoint datum, so the model has no finite-focus state.

## Aspherical Surfaces

The selected table lists standard spherical surfaces, including the planar front of L7. No aspheres are added.

## Model Scope and Limitations

The original graphs distinguish geometric through-focus MTF at 40 lp/mm (Figure 5) from polychromatic diffraction MTF through 60 lp/mm (Figure 6), both spanning 0.4358–0.6563 micrometers and image heights through 21.70 mm. Figure 7 reports relative illumination at 0.546074 micrometers. Method-mismatched curves must not be called reproductions.

The paraxial EFL is 132.105528 mm with the source's image plane retained; the computed back focus is 1.0101 mm versus the printed 1 mm final gap. The 147.806791 mm total track lies within claim 7's 145–150 mm interval. Pupil aberration makes the real iris-admitted pupil differ from the paraxial pupil. A separate meridional trace launched at Figure 2's full pupil requires an approximately 21.175 mm iris radius and exceeds several modeled rims; that source-pupil trace remains inconsistent with the inferred 20.299857 mm iris. The actual iris-admitted axial beam clears the modeled rims. Wide-open geometric transmission at the modeled corner is approximately 36.2%. Off-axis clipping remains substantial and depends on the estimated clear apertures; simulated transmission is not a measurement of retail relative illumination or coating transmission.

## Sources

- CN 122469500 A, Table 1, claims 1, 5 and 7, paragraphs 0012–0013, 0033–0034 and 0039–0041, Figures 1–7.
- [7Artisans official product specifications and optical diagram](https://7artisans.store/products/af-135mm-f1-8-full-frame-lens-for-e-z-l).
- [Martin’s review: specifications and connected optical section](https://phillipreeve.net/blog/review-7artisans-135mm-f-1-8-max/).
