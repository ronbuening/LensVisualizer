## Patent Reference and Design Identification

**Patent:** US 1,741,947 A  
**Granted:** 1929  
**Inventor:** Willy Merté  
**Assignee:** Carl-Zeiss-Stiftung (canonical corpus entity; source attribution Carl Zeiss)  
**Example details:** Original typed specification p. 2 and drawing p. 1; 1 optical unit represented as 1 mm, without focal rescaling.

This is a hidden, patent-only 4-element/3-group infinity reference. Tessar-type describes its architecture; no retail Tessar identity, mount, format, finite focusing mechanism or manufactured performance is asserted. The source nominal values are 100 optical units, f/3.5 and 55° full field. The literal D-line calculation gives EFL 100.0474679294 mm and rear-vertex BFD 85.2844286897 mm; the unpublished image distance is derived, not a source reading.

The complete table and topology were visually verified upstream by the source scout, including the official original's byte count and hash recorded in `source/LITERAL.json`. This executor did not inspect pixels: its ordinary official PDF request failed at the proxy with HTTP 403, and was not retried. These notes distinguish upstream primary-source verification from locally executed numerical/native checks. [Original official patent](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/1741947).

## Optical Architecture

The front positive singlet, middle negative singlet and rear cemented negative/positive doublet form 4E/3G. Both R2 and R5 are flat optical faces. R6 is the sole cemented interface; it is not an additional air surface. A separate iris is inserted into the R4–R5 airspace, at the published 4.42/2.29 split. The powered-vertex track is 29.99 mm and stop z is 18.20 mm. There are seven refracting boundaries and one separate air stop, with no plate or baffle added.

## Element-by-Element Analysis

### L1 — Plano-convex positive singlet

nD = 1.60717, νD = 59.5. Glass: unmatched historical index/Abbe pair; no exact catalog identification. The +32.08 front curvature and flat rear supply positive power. Estimated clear radii are 16.2/15.8 mm; the smaller rear radius imposes some off-axis vignetting. These are model assumptions, not measured outer diameters.

### L2 — Biconcave negative singlet

nD = 1.57596, νD = 41.3. Glass: unmatched. The −71.13/+28.85 surfaces contribute negative power ahead of the source iris. Clear radii 16.0/15.2 mm are estimated; thickness remains exactly 3.73 mm.

### L3 — Plano-concave negative component of the rear doublet

nD = 1.52648, νD = 51.4. Glass: unmatched. The typed specification prints 51.4 while the drawing rounds to 51; typed 51.4 is retained. The front optical plane R5 is 2.29 mm behind the iris. Its 1.50 mm glass thickness ends at cemented R6 (+28.50). Estimated radii are 15.2/15.7 mm.

### L4 — Biconvex positive component of the rear doublet

nD = 1.62377, νD = 56.9. Glass: unmatched. The shared +28.50 cemented interface and −47.22 rear surface provide positive power. Thickness is 8.00 mm; estimated rear clear radius is 16.5 mm. Element focal lengths are not separately sourced or used as validation targets.

## Glass Identification and Spectral Scope

All four source D indices and typed Abbe values are retained literally. `indexReference: "D"` selects the program's sodium-D reference (589.2938 nm). No vendor glass, measured dispersion curve or additional spectral index is invented. Optical qualification and quantitative MTF are D-line only. Native Abbe-based chromatic or polychromatic panels can render but are approximations, not validated historical spectral performance.

## Focus Mechanism

Only the static infinity reference is qualified. No finite-conjugate state, continuous focus travel or production minimum focus distance is inferred. `closeFocusM: 1e15` prevents a substantive finite-focus claim within the existing schema. The detector is at z = 115.2744286897 mm, the independently derived Gaussian infinity plane, with no best-focus fitting.

## Aperture, Clear Radii and Sensitivity

The source specifies the iris station, not its diameter. The unchanged source nominal f/3.5 drives the app's ordinary-prime paraxial stop rule, yielding radius 11.9000851779 mm (diameter 23.8001703558 mm). The measured accepted axial launch radius is 14.0951317500 mm, a finite entrance equivalent f/3.5490079023. Thus the nominal f/3.5 outer ray is clipped by this modeled iris; it is not claimed to be a measured factory opening.

An independent finite trace of the nominal f/3.5 marginal requires iris radius 12.0719984377 mm. The ordinary viewer cannot open beyond its nominal maximum, and ordinary primes cannot directly author `STO.sd`. In a separate Builder tuning copy, the tested Nominal f-number 3.4501576800 makes the native rule derive that physical radius; retain source f/3.5 separately and update the tuning copy's stop list consistently. This is a labeled tuning route, not a change to this canonical file.

The initial 19 mm front-cap trial and final 16.2 mm cap have identical sampled valid counts at every tested field. The tighter cap exceeds the maximum valid front hit (15.985877 mm), keeps its spherical edge ahead of the rear plane, and avoids an unnecessary overhang. All other assumed caps remain [15.8,16,15.2,15.2,15.7,16.5] mm. Rims were chosen from bounded ray footprints and conservative mechanical constraints; no promise of a factory envelope or full-pupil coverage follows. ±0.1 mm common clear-radius perturbations pass native geometry without trimming. A second physical field-sensitivity grid (217 rays each at0°,13.75°,27.5°) retains valid chiefs and zero unresolved losses for all five radius/iris variants. The corner arrivals are135/217 at baseline,135/217 for−0.1mm radii,139/217 for+0.1mm,133/217 for−2% iris and135/217 for+2% iris. These counts are a sampled sensitivity, not throughput. ±2% iris-radius diagnostics give finite equivalents f/3.619284, f/3.549008 and f/3.481536. These bounds quantify assumption sensitivity, not manufacturing tolerance.

Default geometry is sufficient: no local override, no render trimming, no source spacing/radius/index changes. Independent shared-band scans give minimum glass thickness 0.469284 mm and minimum air clearance 2.381062 mm; maximum cross-gap sag intrusion 64.5148% is below the default 90%. Iris-to-glass clearance is at least 1.851371 mm in front and 2.29 mm behind over its opening. Native element/rim diagnostics also validate the unequal-cap edge joins.

## Physical Ray and Field Validation

At each field, 865 rays use 12 area-radius rings × 72 azimuths plus the central chief, launched about the native converged chief at the first-vertex plane. This is a physical skew-ray diagnostic; its counts are not a solid-angle throughput or illumination estimate. Each field has a valid chief and a nonempty image-forming pupil. Ordinary vignetting is retained:

| Half field | Valid detector arrivals | Modeled blocks | Raw native misses included in blocks |
| --- | ---: | ---: | ---: |
| 0° | 793 | 72 | 0 |
| 6.875° | 818 | 47 | 0 |
| 13.75° | 769 | 96 | 7 |
| 20.625° | 688 | 177 | 72 |
| 25° | 622 | 243 | 130 |
| 27.5° | 566 | 299 | 180 |

Every raw miss is independently located outside its authored clear cap; all 389 proofs record surface, field, pupil coordinate and radius. There are zero unresolved physical sampling losses or failed classifications in this grid. For all 4256 valid rays, the independent vector Snell/sphere/plane tracer reproduces every native optical hit to within 2.11e-13 mm. The 27.5° chief image height is 51.640938 mm; the 103.281876 mm modeled image circle is derived from that hit, not a published format. Some edge azimuths are clipped, so 55° is a usable vignetted field, not a full-pupil acceptance assertion. Unexamined continuous pupil/field positions and actual specimen apertures remain unverified.

## Sampled D-line MTF

Native geometric MTF uses the derived Gaussian detector, reference spectrum, source nominal aperture and the current modeled clear apertures. Sampling converges within the engine's 0.01 MTF criterion through 40 lp/mm; unknown flux, failed and unaimed counts are zero. This is geometric ray MTF, without diffraction, measured coatings or calibrated polychromatic claims. No primary MTF curve was available for comparison; low MTF and side lobes are reported rather than optimized away.

| Half field | Converged grid | 10 lp/mm S/T | 20 lp/mm S/T | 40 lp/mm S/T |
| --- | ---: | --- | --- | --- |
| 0.00000° | 128 | 0.0762/0.0762 | 0.1752/0.1752 | 0.0343/0.0343 |
| 14.49245° | 128 | 0.1215/0.3517 | 0.0636/0.0290 | 0.0292/0.0779 |
| 27.49997° | 256 | 0.3417/0.0918 | 0.1540/0.0415 | 0.0299/0.0207 |

## Deduplication and Native Application Checks

At pinned main `66c7570fb6eb3c31534b7191267a95c85d5ee590`, all 1,182 main bodies including hidden models and all 20 current PR-head source bodies were covered by the retained verified inventory: 2,369 distinct evaluated bodies. Another 2,438 retained historical numerical profiles were verified against their body hashes. Positive uniform-scale, signed forward/reversed optical-order profiles and normalized source aliases found no match. A separate recursive local ZIP screen hashed 41 archives and inspected 24,349 TS members with literal-radius parsing, also without a match. Computed-expression limits apply to the archive screen; inaccessible remote/private archives are not claimed. DE649112/GB278338 is a different, already-built US1792917 design and was not authored.

Exact V2 JSON roundtrip passes; strict standalone model types, repository typecheck, formatting and 319 existing tests in five targeted Builder/aperture/geometry suites pass. Desktop (1440×1100) and mobile (390×844) Builder import, valid-prescription rendering, export availability, aperture changes and analysis-panel health pass without page errors. Desktop off-axis/dense controls are exercised; those controls are not exposed in the mobile layout. Browser panel health is not a spectral or image-quality qualification. No full corpus run, production integration, deployment or continuous-performance guarantee is claimed.
