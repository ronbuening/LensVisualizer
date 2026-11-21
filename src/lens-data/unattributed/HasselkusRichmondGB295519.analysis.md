## Patent Reference and Design Identification

**Patent:** [GB295519A](https://patents.google.com/patent/GB295519A/en), improvements in objectives suitable for photographic purposes
**Inventors:** John William Hasselkus and George Arthur Richmond
**Filed:** September7,1927
**Published:** August16,1928
**Example details:** Sole100-unit numerical example, originalpage2table and page4diagram

This hidden reconstruction is a **Ross-associated patent-only D-line reference**, not an exact production lens or a new retail identification. No organization is asserted as assignee; corporate ownership is not inferred from the historical association. The inventors use the established canonical personal-name spelling in the retained corpus. No production mount, film format, lens barrel, baffle or finite focusing mechanism is authored.

The upstream specialist visually inspected all four pages of the [official original scan](https://depatisnet.dpma.de/DepatisNet/depatisnet?window=1&space=menu&content=treffer&action=pdf&docid=GB000000295519A). This executor uses the attributed exact transcription and independently reproduces its optics. The official PDF did not open in the local web tool; no local pixel inspection or scan-byte custody is claimed. The accessible patent abstract independently supports the doublet/meniscus topology and nominal f/4,70° field. No denied source transfer was retried.

## Qualification and Scope

**Qualified as an explicitly vignetted, infinity-only D-line patent reference.** The70° source image field has propagated chief/interior rays, not a fully transmitted f/4 pupil. At35° all eight sampled aperture-edge azimuths are blocked. This is retained rather than clipped out of the report, fitted away or claimed as factory vignetting. Numerical ray/MTF checks establish the scoped model's consistency, not a reproduction of all qualitative chromatic/comatic correction claims in the patent.

The100-unit source scale is represented as100mm in this model, solely a modeling choice. Original radii/thicknesses/indices and source iris station are unchanged. There is no rescaling to a presumed manufactured focal length. The image distance and physical aperture/clear radii are derived or estimated and are not source dimensions.

## Optical Architecture

Six elements form four components: cemented front doublet, front positive meniscus, rear positive meniscus, cemented rear doublet. Source R2 and R9 are cemented interfaces. The only iris is centered in the literal4.64-unit gap after R5, split exactly2.32+2.32; its axial station is z14.63 from R1. Inserting STO does not change that optical gap.

The literal sequence R1–R10 is +22.66,−95.51,+16.73,+24.25,+37.77,−43.64,−27.61,−19.95,+81.96,−26.48. All nine intersurface distances remain5.48,1.91,1.45,3.47,4.64,3.47,1.45,3.13,5.92. The glass track is30.92 model units. Independent first-order D-line EFL100.082354233 and BFD85.734920677 define a derived paraxial infinity plane at z116.654920677. The image distance is not printed, and no real-ray best-focus optimization replaces it.

## Element-by-Element Analysis and Spectrum

| Element | Faces | Literal nD | Literal source g index |
|---|---|---:|---:|
| L1 positive front doublet | R1–R2 | 1.61071 | 1.62501 |
| L2 negative front doublet | R2–R3 | 1.55065 | 1.56616 |
| L3 positive meniscus | R4–R5 | 1.51776 | 1.52839 |
| L4 positive meniscus | R6–R7 | 1.51776 | 1.52839 |
| L5 negative rear doublet | R8–R9 | 1.55065 | 1.56616 |
| L6 positive rear doublet | R9–R10 | 1.61071 | 1.62501 |

No F/C indices, Abbe number, catalog glass, full dispersion curve or source-g wavelength conversion is invented. The literal g column remains source evidence, not a substitute for F/C or a fabricated Abbe fit. The authored elements carry nD and native `indexReference:"D"`; native reference tracing uses the documented sodium-doublet center589.2938nm convention. Quantitative claims here apply only at that reference. Missing-dispersion channels can fall back to constant index in the application; they are placeholders, not source-calibrated color/MTF predictions. Do not interpret a flat chromatic panel as evidence of zero color error. The source's broader chromatic statements are not validated by this D-only model.

## Iris and Clear-Aperture Assumptions

The source supplies iris position but no physical diameter. The source f/4 paraxial entrance radius is12.510294279; native ordinary-prime pupil magnification derives iris radius10.289058363 (diameter20.578116726). The independently traced physical f/4 marginal instead meets the published iris plane at radius10.217243681 (diameter20.434487361). Both are derived diagnostics, neither factory aperture data. The saved model retains source nominal f/4 and the application's ordinary-prime iris convention.

Estimated optical clear semidiameters R1–R10 are16,13.4,10.64,10.65,12.9,13.5,12,13,14,15.5 model units. They are conditional optical envelopes, not measured outer mechanical diameters. They retain full axial source f/4 and explicit off-axis vignetting. Side-specific clear radii may differ within a glass component; no source-measured shoulder/bevel/retainer dimensions are claimed. Native render geometry needs no hidden trimming.

The accepted axial input radius is12.525225856, a finite entrance equivalent f/3.995231519, limited by R3. This tiny faster-than-nominal difference is disclosed rather than changing the source f-number. All865 axial samples, including the source f/4 marginal and its full azimuth ring, complete. The iris opening stays physically in air, with sampled front/rear clearance approximately0.89155/1.08973 units.

## Necessary Local Gap-Sag Control

Default90% was tested first and fails. The R3/R4 spherical contact radius is10.898895125. The actual source f/4 marginal requires R3/R4 radii10.628191597/10.631075221; its shared-band sag intrusion is93.5565678%, leaving real clearance0.093429767. The largest shared radius allowed by90% is10.471616717, too small to retain that marginal. A default-limit aperture would silently cut the source f/4 pupil; unsupported cuts, altered glass/gaps or a slower f-number were not substituted.

Initial on-axis and broader estimates were tested at90/92/94/95/96/96.5/96.9/96.95/97%. Higher95% and96.9% trials were physically viable but are not the retained setting. A tighter source-marginal-derived clear pair10.64/10.65 passes at94%;90%,92% and93% fail for that same pair. **The saved lens-local `checks.gapSagFrac` is0.94**, the lowest whole-percent stage that retains the source marginal with the documented small clear-radius margin. No shared validator/tracer is changed, and no trial exceeds97%.

Final maximum sampled intrusion is93.8297292%, leaving R3/R4 clearance0.089468927 units. All other occupied air bands are also physically positive; the combined meniscus gap across STO has90.9789800% intrusion at its shared outer band, with0.418575329 clearance, while its actual iris opening is in air as above. The R7/R8 gap retains0.181573634. Minimum glass edge is0.148679523. Estimated radii ±0.005 retain native geometry and zero trim. These ideal-envelope tests do not establish manufacturing tolerance.

## Native and Independent Field Checks

Native physical3D input-disc sampling covers0°,8.75°,17.5°,26.25°,30°,32.5°,35° using the existing bounding-sphere chief solve and twelve square-root-radius rings ×72 azimuths plus the axis. All seven chief solves converge and complete. The6,055 samples produce4,479 arrivals and1,576 blocked samples, with zero unresolved samples. Nine raw native noBracket misses at35° remain explicitly recorded and are proven aperture/vertex-branch exclusions by the existing classifier; they are not counted as arriving rays. Independent analytic spherical/vector-Snell completed surface hits agree within2.7e−13 model units.

At35°,408/865 input samples arrive; none of the eight sampled outer-ring azimuths arrives. At26.25°,622/865 arrive. These are conditional counts under estimated clear apertures, not irradiance/throughput fractions. Earlier uncapped upstream diagnostics found physical R10 vertex-branch misses and unresolved pre-stop aims. This model does not deny those observations: its explicit conservative rims change the admissible sampled mask, and the native aimed metric grids report their own blocking/unknown data. No full-pupil70° or global solver cure is claimed.

## Reference-Line Metrics and Application Checks

Geometric MTF at the derived Gaussian plane uses image heights0,31.53598,49.33632,57.74584,63.77280,70.07994 model-mm. These correspond approximately to0°,17.49245°,26.24607°,29.98697°,32.50445°,34.99292°. With0/10/20/40lp/mm requests, all six fields converge using the unchanged128/256-grid ladder and0.01 tolerance: center and second field at128, the others at256. Unknown flux, failed rays and unaimed rays are0 in those requests. The earlier unconverged128 estimates are retained and are not labeled passes. The140.16-unit image-circle reference is derived from the nominal field/focal-scale relationship, not a printed diameter or production format. Physical35° was tested separately as above.

No diffraction-OTF, polychromatic metric, spectral correction, factory performance, finite focus or mechanical mount qualification accompanies these reference-line results. Exact native JSON export/import, strict private-model and main type checks, formatting and five existing native/Builder suites (319 tests) pass. Desktop1440px/mobile390px Builder import and rendering of aperture/off-axis/dense controls and analysis panels pass without page errors. Rendering uncalibrated spectral panels is a UI-health check only. Full catalog integration/regression remains outside this unregistered private pass.

## Provenance, Dedup and Reproduction

Fresh main66c7570fb6eb3c31534b7191267a95c85d5ee590 and all20current openPR heads are checked through2,369 distinct evaluated source bodies plus2,438 retained historical numerical profiles. Normalized source identifiers and forward/reversed-negated uniform-scale ten-boundary sequences have no match. Readable ZIPs are separately inventoried/hashed and literal-radius-screened; computed-expression and inaccessible-history limits are explicit. US2116264 in PR1005 is a different design and was not substituted. This is bounded available-body clearance, not an exhaustive assertion about every inaccessible private archive.

Source JSON, independent/native scripts, staged geometry failures, rejected higher allowances, metric outputs, test/browser logs and byte hashes are retained in the local private checkpoint. The held Nikon checkpoint is rechecked unchanged. No count, archive shipment, direct delivery, catalog edit, commit/push/PR/merge/deployment or shared engine change is performed.
