# Nikon AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Patent Audit

## 2026-06-24 Source Availability Recheck

The data file cites `US 10,690,896 B2`, First Example / Table 1. I checked the local untracked `patents/` folder for `US10690896`, `10690896`, and related filename forms, and no matching PDF is present.

### Outcome

- No data or analysis changes were made in this pass.
- The generated coverage report currently flags only the patent-specific resin/aspherical layer and optical-plastic element as Abbe-only rows, which is expected for non-glass materials.
- A full patent recheck still needs the cited `US10690896B2` PDF added to `patents/`.

## 2026-10-29 — Fresh source, shape and glass reinspection

- The exact local `patents/US_10690896_B2.pdf` is now available. Directly viewed First Example Figure 1 on PDF page 3 at 600 dpi, material descriptions on page 18, and Table 1 / d-line 587.6 nm definition on page 19. Rechecked all 13 material nd/νd pairs, including the resin layer and plastic element. All coordinates are retained; 11 catalog curves resolve. Qualified labels now identify the actual S-BSM15 / E-FD4 / BAFD7 selections, and other compatible proxies, with production suppliers unproven. Resin formulation and plastic polymer remain unresolved; the source gives no C/F/g indices or partial dispersion.
- Corrected design nominal apertures 3.5/4.5/5.6→3.64/4.62/5.88 from Table 1's FNO row; added catalog design 3.64 while retaining marketing 3.5, the marketed 3.5–5.6 name, and useful user stop choices. Radii, spacings, nd/vd, aspheric coefficients and focus motion are unchanged.
- Inspected all 23 faces, including compound/cemented boundaries. Figure 1's hybrid cap has q≈0.78±0.005 at an approximately 20 mm outer rim (300 dpi original; ≈20.1 native px/mm from the 91.01 mm vertex span; edge ≈402 native px). A 20 mm front/S3A extension trial passed geometry but produced a tapered substrate and narrow resin wing in actual SVG. A faithful compound land requires terminating cemented S2; that interface does not support a land, and its spherical |R|=18.88 mm cannot reach the 20 mm outer rim. Rejected the compound-land trial. A separate S1-only raise 15.3→17.8 mm is adopted: the wide chief ray for source Y=14.25 mm needs 17.76944 mm at 39.22279° (format corner Y=14.175 needs 17.68101 mm at 39.05816°). The 17.7 mm trial cleared the format corner but clipped source Y, so it was rejected. All three source-Y chief rays now converge and clear every aperture. The former front rim limited coverage to34.5° /12.19 mm (86%); the source continuous front curve supports the minimal raise. Every other SD remains unchanged. L12/L13 steps are cemented, and no further exposed concave land is independently resolved.
- Surface and image-circle audits pass; corrected aperture states trace f/3.640/4.620/5.880, iris-limited, and --raise finds no undersized inferred axial rim. Nine final SVG focus/zoom states have 13 finite paths and zero trim diagnostics; raster inspected. Source-coordinate and catalog-consistency checks pass. Fresh field coverage reaches >=99% at all three zoom stations after the S1-only raise. The published infinity zoom tables and existing inferred close-focus reconstruction remain separately qualified.
