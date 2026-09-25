# Optics Engine Architecture

Read this for pure optical calculations, lens building, ray tracing, aberration analysis, vignetting, distortion, bokeh,
validation, and diagram geometry.

> Mount-diagram geometry lives in `src/optics/mount/` (polar/annular path builders, deterministic SVG renderer),
> separate from this lens cross-section engine. See [`mount-diagrams.md`](mount-diagrams.md).

## Core Rule

`src/optics/` is the authoritative optics engine. Stable app and test imports should use the public files in
`src/optics/*` where practical, while engine-native work can import focused submodules such as `src/optics/trace/`,
`src/optics/field/`, and `src/optics/state/`. Per-module purposes live in `src/optics/readme.md` and each file's header
JSDoc; this document covers the conventions that span modules.

Pure optics modules have no React dependencies. Helpers accept the runtime lens object `L` or a
`PreparedOpticalState` plus slider-derived state explicitly. Do not introduce hidden module-level optical state.

State-dependent analysis must remain outside `buildLens()`. `buildLens()` constructs build-time/runtime constants from
lens data; analysis tabs use current focus, zoom, and aperture state.

## Omitted Sensor Optics

Source-listed cover/filter plates declared in `rearPlates` are traced by every analysis, including MTF, while staying
hidden in the diagram; see [Rear Plates](#rear-plates). The limitations below apply only to optics still omitted
because source data is missing, a prescription has not been migrated, or its path is unsupported.
An air-equivalent replacement preserves paraxial propagation at the reference index, not higher-order aberrations or
wavelength-dependent propagation. A converging beam through a plane-parallel plate can acquire spherical aberration,
and a prescription designed with that plate can depend on its contribution.

Consequences depend on the analysis, not just whether its numerical solver converges:

- MTF, spherical aberration, coma, real sagittal/tangential focus curves and bokeh can change substantially, particularly
  at wide apertures. The flat plate has zero Petzval surface power; that does not preserve the traced focus curves.
- Chromatic focus and lateral color omit the plate's dispersion; distortion can change through chief-ray displacement.
- A rear plate leaves the entrance pupil and upstream lens-aperture clipping unchanged at a fixed field angle, assuming
  it adds no clipping. Exit-pupil positions and off-axis behavior can change; field bounds may also change.
- Effective focal length, physical stop size and EFL-based breathing are largely preserved. Physical back-focus and
  track distances are not interchangeable with air-equivalent coordinates. Existing illumination estimates also omit
  coating/Fresnel and sensor-response effects.

These are model limitations, not corrections to apply empirically or proof of an error in the manufactured lens.
Use the source-prescription label for results. Model additional source-backed plates through the shared `rearPlates`
contract in `src/lens-data/LENS_DATA_SPEC.md`; do not add an analysis-specific stack or infer missing plate data.

## Simulated MTF

`src/optics/mtf.ts` accepts a prepared state and explicit physical aperture, method, spectrum, focus, field and
frequency options. This estimates the authored prescription; numerical convergence and source-data confidence are
separate. Sagittal frequencies run along image X, tangential along Y; the field lies in the Y/Z meridian. Both chart
views share the same computed fields, one image plane and physical lp/mm units.

**Field axis** (`mtfFields.ts`). Field fractions are fractions of a reference image height: the declared format-corner
radius (`imageCircleMm`, else the canonical format diagonal), or the modeled edge when neither is declared. The
modeled edge is the largest height whose real, stop-aimed chief ray passes every authored clear aperture. It starts
from the shared field geometry, which tests a paraxially launched chief and can stop short in wide-angle designs with
strong pupil aberration, and walks outward; a chief that passes the format corner is solved back to it, so the edge
angle always lands on the edge height. Targets map to chief angles through the shared exact inversion (infinity) or a
bracketed root solve on the aimed finite-source chief. Heights beyond the modeled edge are
`outside-modeled-field` and are not traced. Fields run center, corner, then coarse to fine.

**Pupil sampling** (`mtfFootprint.ts`, `mtfTracing.ts`). Each field scans a 20 × 20 launch-plane grid at the
reference wavelength, doubling until no transmitted sample touches its border, then traces the whole transmitted
beam; off-axis retrofocus beams can be much larger than the axial entrance pupil, as with ray aiming in lens-design
software. Launch cells are square, `gridSize` across the beam's larger dimension, with an even column count so a
meridional field of an x-symmetric lens traces one half and mirrors it. Transmitted rays in the footprint's guard
band widen it and retrace. A grid with too few transmitted rays refines rather than failing, because the footprint
scan has already found flux: near the modeled edge cat's-eye vignetting can leave a slit a few cells high. Collimated
cells carry equal launch flux; finite sources use solid-angle weights. A field with no transmitted scan sample is
`vignetted`. Full-beam results depend on authored clear apertures, so estimated semi-diameters that vignette less than
the production lens lower off-axis curves.

**Ray failures** (`mtfRayClassification.ts`). TIR and aperture clips are blocking. A failed intersection blocks only
when an independent proof shows the ray misses the next clear cap: analytic for flat and spherical caps, a Lipschitz
interval test for aspheres. Unresolved flux ε up to 0.5% of launch flux is omitted with a note bounding the geometric
MTF error at 2ε; more makes the field unavailable. Scalar diffraction needs every ray. The reference chief is traced
without aperture checks, so a clipped chief still fixes the common image reference.

**Methods.** Geometric OTF is the normalized intensity-weighted Fourier sum of exact landing points. The
diffraction-corrected method (`geometric-dl`, `mtfDiffractionLimit.ts`) multiplies each wavelength's geometric OTF by
the zero-phase OTF of the traced exit pupil: √flux autocorrelated on the regular launch lattice, with lags mapped into
image-space direction cosines by the fitted pupil scale per axis. It needs no scalar-FFT validity gates. On test
pupils it matches the analytic circular OTF within 0.005 from 32 rays across; like any geometric × diffraction-limit
product it can understate contrast where residual aberrations are comparable to a wavelength.

Scalar diffraction opts into sequential `recordOpticalPath`, which accumulates incident-medium optical length
from the input origin to the final hit without changing ordinary trace outputs. `mtfWavefront.ts` includes the
incident plane/spherical phase and signed transfer to an image-centered reference sphere whose radius is the paraxial
exit-pupil distance when positive, else the reference ray's last-surface distance; a clipped chief uses the
transmitted-flux centroid instead. Piston is removed, but wavelengths are not refocused or independently recentered.
`mtfDiffraction.ts` triangulates unwrapped path onto transverse direction-cosine coordinates; its Jacobian and
square-root transmission conserve pupil flux. A double-precision FFT of a 2× padded pupil produces linear
autocorrelation. Image frequency shifts the pupil by wavelength × frequency. The scalar approximation is restricted
to air image space, perpendicular image planes, chief incidence ≤15°, pupil cone radius ≤0.25 and blur ≤2% of
reference radius (`MTF_DIFFRACTION_LIMITS`). Folded/singular pupil maps and insufficient phase sampling are
unavailable. These are conservative suitability limits, not an accuracy guarantee; see [Ansys FFT MTF](https://ansyshelp.ansys.com/public/Views/Secured/Zemax/v251/en/OpticStudio_User_Guide/OpticStudio_Help/topics/FFT_MTF.html).
The ray-cone restriction excludes many lenses wider than approximately f/2 even when geometric tracing
succeeds. More grid samples cannot remove this domain restriction. The source-prescription result must not be
presented as the manufacturer's production MTF; the shared omitted-sensor limitations above also apply.

**Spectra.** Monochromatic runs retain native d/e indices; mixed references require usable physical conversion. C/d/F
(equal weights) and photopic (470/510/555/610/650 nm, CIE 1924 V(λ) weights on an equal-energy source, 555 nm
first) share one glass gate, `assessMtfSpectralData`. Catalog Sellmeier and d-referenced line indices qualify, and so
do d-referenced nd/νd-only glasses through the Abbe tier's normal-line estimate, which the tab notes. A glass with no
νd, an e-line glass without catalog data, or an nd/νd-only glass above νd 65 without `dPgF`
(`MTF_ESTIMATED_DISPERSION_MAX_VD`, where anomalous glasses sit) blocks spectral sampling; `resolveMtfSpectrum` then
falls back to the reference wavelength and names the reason. With about 17 % of each lens's glasses reduced to nd/νd,
the estimate's median error against full-data photopic MTF was 0.002 over 18 lenses (the reference wavelength's was
0.068), but degrading fluorite-class glasses without `dPgF` in a 400 mm telephoto cost up to 0.14. Spectral indices
are anchored: `anchoredIndexAtWavelength` (`chromatic/indexResolver.ts`) adds the catalog's wavelength dependence
to each authored index (Sellmeier offset, or a four-term Cauchy fit through C/d/F/g line indices), so a spectral run
keeps the design's focus at its reference line. Compatible catalog glass is explicitly a
spectral proxy. Complex OTFs combine, weighted by incident line weight × transmitted flux, before magnitude, which
retains lateral color. Every chromatic trace sets `wavelengthNm` beside its indices.

**Convergence and focus.** Grids refine 16 → 256 (scalar diffraction from 32) up to `maxGridSize`. Convergence is
judged at and below 50 lp/mm (absolute change ≤0.01), where a sampled geometric sum is not yet dominated by aliasing
noise; each field reports `convergedThroughLpMm`. A finer grid that fails keeps the last good curve as unconverged.
The axial bundle is re-projected without retracing to find the image plane that maximizes mean axial MTF at
10–50 lp/mm (a scan of the ray-crossing range, then golden-section refinement). It is always reported as a
diagnostic, and `focus: "best-axial"` applies the shift to every field. `mtfImagePlaneOffset` (`mtfFocus.ts`) also
compares the authored plane with the prescription's paraxial focus at infinity: beyond `MTF_IMAGE_PLANE_DEPTHS` (10)
depths of focus, 2λN² at the d line and the open f-number, the plane is flagged as inconsistent lens data.
`focus: "auto"` applies best axial focus only to flagged lenses and keeps the design plane otherwise, so the
spherical-aberration focus shift of fast classic designs stays visible. `scripts/audit-mtf.mjs --focus` lists the
flagged lenses, and Section E of `agent_docs/sd-audit-queue.md` queues them. Finite rays share one isotropic object
point and include spherical launch phase and launch-plane solid-angle weights. Only `finiteConjugates` stations are
eligible; see `src/lens-data/LENS_DATA_SPEC.md` for source requirements.

The MTF tab lazily creates a worker from serializable lens data. Worker initialization removes engine-generated
synthetic surfaces/elements from `RuntimeLens.data` and rebuilds them once from `rearPlates`, preserving physical
gaps and plate dispersion. The typed protocol (`init | compute | cancel` → `progress | result | error`) runs
`computeMtfSteps` in ~30 ms slices and posts partial results at most every 100 ms. Cancellation is cooperative, so the
built lens stays warm, and request ids reject stale replies. The worker caches finished fields and the focus search
per request minus its field list (`MtfJobCache`), so a finer field step reuses coarser fields. Completed results use
a client LRU bounded to 64 MiB, while chart changes reuse curves without tracing. The read-only census is `scripts/audit-mtf.mjs` (`--cdf`/`--photopic` for spectral
eligibility, `--fields` for center, half-height and modeled-edge availability); `scripts/benchmark-mtf.mjs` flags are
listed in `agent_docs/benchmarks/README.md`. Benchmarks retain status alongside timings so fast rejection is not
confused with a completed curve.

## buildLens.ts

`buildLens(data)` is the stable public constructor and delegates to `buildLens2` in `src/optics/compat.ts`.
The promoted runtime builder lives in `src/optics/runtimeLens.ts`. The returned `RuntimeLens` keeps the existing UI and
lens-data contract, while `engineLensFromRuntime()` and `prepareRuntimeState()` recover the engine-native `EngineLens`
and `PreparedOpticalState` for tracing and analysis.

The constructor validates lens data and constructs a frozen `RuntimeLens` with:

- Effective focal length, entrance pupil, field angle, total track, Petzval sum, and scale constants.
- Zoom metadata: positions, EFLs, EPs, half-fields, tracing half-fields, y-ratios, and back focal distances.
- Stop data: physical stop SD, blade stub fraction, stop housing SD, and f-stop series.
- Element/group/doublet/aspheric/variable maps for runtime lookup.
- Per-surface dispersion resolvers. Catalog Sellmeier substitution compares d-line-authored elements at C/d/F and
  native e-line elements at C′/e/F′. E-line matching requires an explicit catalog name or alias; six-digit codes stay
  d-line-only because their encoded coordinates are nd/νd. For d-line elements with authored `dPgF`, the catalog
  curve supplies C/d/F while the patent/source partial dispersion remains authoritative at g. The Abbe tier
  (`abbeLineIndices`) keeps the exact F−C span from `nd`/`vd` and places the d line within it with the catalog-fitted
  P_d,C normal line (`normalLinePdC`, ≈0.28–0.31 for real glasses; native e-line elements use `normalLinePeC` across
  C′–F′), extending to g with the Schott P_g,F line plus `dPgF`. A midpoint split (P_d,C = 0.5) misstates focus
  against wavelength wherever estimated glasses sit beside real ones. Anomalous-dispersion glasses without `dPgF`
  remain uncertain at g.
- Folded-path metadata: resolved `opticalPath`, explicit `imagePlane`, `isFoldedOptics`, and normalized surface/image-plane
  normals when mirror data opts into the generalized model.
- Folded entrance/exit pupil geometry derived from generalized real-ray stop and full-system basis traces, with finite
  geometric fallbacks when a folded path cannot produce reliable stop/full traces.

**`halfField` vs `tracingHalfField`.** Rectilinear lenses set both to the same slope-launch-bisected value
(real chief ray vignetting check) by default. Fisheye lenses set `halfField = projection.maxTraceFieldDeg`
(the declared coverage — the patent-stated half-field, which can be wider than what slope-launch chief rays
can traverse) and `tracingHalfField = halfFieldBisected × TRACING_SAFETY_FACTOR` (the bisection-narrowed
value with a small safety margin). The diagram's off-axis ray rendering uses `tracingHalfField` so bundle
rays actually reach the image plane on fisheyes; `halfField` drives distortion grid extent, projection
metadata, and info displays. Zoom variants use `zoomHalfFields[]` / `zoomTracingHalfFields[]` accessed via
`halfFieldAtZoom()` / `tracingHalfFieldAtZoom()`. Rectilinear lenses may opt into the declared-coverage
behavior by setting `projection: { kind: "rectilinear", fullFieldDeg, maxTraceFieldDeg }` — used for
ultrawides like the Carl Zeiss Hologon 15 mm f/8 where the paraxial chief-ray bisector under-counts the
published 120° coverage. The override only changes `halfField`; `tracingHalfField` still uses the bisected
value so rendered ray bundles stay safely within what real surfaces can carry.

`paraxialTrace()` is exported for low-level first-order tracing tests.

### Rear Plates

Source-listed cover glass and filter plates (`LensData.rearPlates`) are expanded once, in `buildLens` right after
validation, by `expandRearPlates()` in `src/optics/prescription/rearPlates.ts`. It appends two flat refracting surfaces
per plate (reserved labels `RP<n>a` / `RP<n>b`) and one element per plate, all marked `synthetic: "rearPlate"`.
Because the expansion runs before `S`, `N`, `labelIdx` and every derived constant, EFL, pupils, field limits, prepared
states, the exact tracer, chromatic dispersion and all analyses see the plate, with no per-analysis correction.
`RuntimeLens.data` holds the expanded data, so normalization stays index-aligned.

What is hidden, and where:

- `RuntimeLens.ES` and `RuntimeLens.elements` exclude synthetic elements. That covers diagram shapes, render
  diagnostics, element numbering, the inspector, the Abbe diagram and fallback construction groups.
  `RuntimeLens.data.elements` and `EngineLens.elements` keep every traced medium for dispersion lookup.
- `maxSD` ignores synthetic surfaces, whose generated rims are deliberately non-clipping.
- `RuntimeLens.lastLensSurfaceIdx` is the last authored surface. Cardinal BFD is measured from it, while the matrix
  vertex (`rearVertexZ`) stays at the plate's rear face. The Summary tab counts authored surfaces and lists plates
  separately; the last variable-gap readout is labelled "to plate".
- Rays are drawn exactly as traced, including the small refraction at the invisible plate faces.

Folded paths and perspective-control lenses reject `rearPlates`; a camera-fixed plate would otherwise tilt with the
lens. Lenses whose notes still fold a plate as t/n remain valid; see `src/lens-data/LENS_DATA_SPEC.md`.

## optics.ts

`src/optics/optics.ts` is the stable barrel for commonly consumed pure optics helpers. Continue importing from this
stable path in app code unless working inside the engine itself. Import from deeper `src/optics/**` engine modules only
for engine-native work or focused tests that need prepared-state APIs.

It groups sag/layout helpers (`sag()`, `renderSag()`, `sagSlope()`, `doLayout()`, `gapTrimHeight()`, `thick()`), the
exact trace adapters (`traceRay()`, `traceSkewRay()`, `traceToImage()`, `traceRayChromatic()`, `traceParaxialRay()`),
zoom interpolation (`eflAtZoom()`, `epAtZoom()`, `halfFieldAtZoom()`, `tracingHalfFieldAtZoom()`, `bAtZoom()`, and the
other `*AtZoom()` interpolators), and current-state pupil/field geometry (`entrancePupilAtState()`,
`computeFieldGeometryAtState()`). All trace/layout functions accept `zoomT`; prime lenses ignore it.

### Chief-Ray Solving

`solveChiefRay()` returns a typed `ChiefRaySolveResult` (`converged` / `paraxial-fallback` / `bracket-failed` /
`out-of-domain`, iteration count, and `launchSurface: "object-plane" | "bounding-sphere"`), memoized per lens via a
`WeakMap` keyed on focusT / zoomT / aberrationT / fieldAngleDeg / launchSurface. The solver dispatches on
`launchSurfaceForFieldDeg(fieldDeg, projection)`: **fisheye projections always route through
`solveChiefRayBoundingSphere`** regardless of angle, so every fisheye solve in the catalog exercises the bounding-sphere
code. Rectilinear projections keep cap-based dispatch: object-plane below `MAX_FIELD_LAUNCH_DEG` (89°), bounding-sphere
at/above. The bounding-sphere bisection varies the EP-crossing height `yEP` and traces directly via
`traceExactSurfaceStackVector`; both paths return `yLaunch` projected to z=0 for semantic consistency. Callers that only
need a scalar launch height should read `solve.yLaunch`; new analysis code should still inspect `solve.status` and
`solve.vectorLaunch` instead of assuming every field has a finite slope.

Every solve outcome is counted through `recordChiefRayStatus2()` in `src/optics/field/chiefRayCache.ts`;
`src/optics/chiefRayDiagnostics.ts` is a re-export barrel that exposes the per-lens status-count snapshot as
`getChiefRayDiagnostics()` / `resetChiefRayDiagnostics()` for audit scripts and tests.

## Exact Surface Trace

Exact tracing is the only trace path. `traceRay()`, `traceRayChromatic()`, `traceSkewRay()`,
`traceSkewRayChromatic()`, and the chief-relative skew wrappers take their full positional parameters and
have no mode/options surface — every call resolves to the exact path. The legacy vertex-plane tracer has
been removed; do not reintroduce a `RayTraceOptions` parameter or a `traceMode` flag.

The public RuntimeLens trace adapters route through the prepared-state sequential/generalized engine in
`src/optics/trace/`. Surface-intersection misses are terminal in both paths, including ghost-mode diagram
traces: the result preserves already solved hits for display and diagnostics, but does not fabricate fallback
surface points after a miss. Aperture/semi-diameter clips remain distinct from misses; ghost mode can retain
real clipped hit points, and the diagram display layer renders only the first clipped span so zoomed SVG
bounds stay finite.

The exact tracer in `internal/exactSurfaceTrace.ts` exposes these entry points:

- `traceExactSurfaceStack({ x0, y0, ux0, uy0 }, options)` — slope launch, normalizes
  `[ux0, uy0, 1]` into a `Vector3` direction and applies the configured lead distance.
- `traceExactSurfaceStackVector({ origin, direction }, options)` — vector-native launch for callers that
  already have a 3D ray. Direction must be normalized. For forward-cone rays (`direction[2] > 0`) the
  per-surface bracket bound is z-projected; for grazing or backward rays the caller must supply
  `launchBoundT` so the intersection search has a finite parametric bound (typically `2 × launchRadiusMm`
  for bounding-sphere launches). The slope entry is a thin adapter that calls into this core.
- `traceToStopViaGeneralized(lens, input, stopIdx, options)` — helper for folded callers that need a stop hit.
  It runs a full generalized trace, scans `hits` for the first unclipped requested stop occurrence by default, and
  can select a later repeated stop occurrence when the optical path intentionally crosses the same stop more than once.

Both solve each ray/sag intersection via `internal/surfaceIntersection.ts` and project the outgoing ray back
to the current surface vertex plane before returning `y`/`u` or `x`/`y`/`ux`/`uy`. `surfaceIntersection.ts`
splits its finiteness predicate into `isFiniteValueEvaluation` (used by `findBracket` endpoints and samples)
and `isFiniteEvaluation` (additionally requires non-zero derivative, used inside Newton iteration) so a
grazing meridional ray whose derivative collapses to zero at the optical axis can still anchor a bracket.
The Newton seed falls back to the bracket midpoint when the z-projected guess is non-finite.

Both intersection solvers, `math/intersection.ts` (used by the prepared-state engine in `src/optics/trace/`) and
the legacy `internal/surfaceIntersection.ts`, share the same safeguarded Newton step (rtsafe). A step is accepted
only inside the sign-changing bracket and when it moves at most half the step before last; otherwise the solver
bisects, so grazing and steep-rim roots cannot stall. A zero or non-finite derivative bisects instead of failing.

### Bulk Absorption And Apodization

`ElementData.absorptionCoefficientPerMm` opts a sequential element into broadband Beer–Lambert intensity loss.
`trace/bulkAbsorption.ts` walks exact hits in encounter order, assigns each hit-to-next-hit segment from the departing
surface's `elemId`, measures its three-dimensional chord length, and accumulates `exp(-αd)`. Coefficients are cached per
frozen runtime lens in a `WeakMap`; ordinary lenses take the constant-time transparent fast path. All meridional, skew,
scalar, and vector runtime adapters expose the result as optional `ray.transmission`, with `1` as the compatibility
default.

Keep this energy channel distinct from aperture state:

- A ray can survive every clear aperture while carrying less than unit intensity.
- Mechanical pupil footprints, vignetting survival fractions, and stop geometry must not be inferred from absorption.
- Photometric bokeh point weights, bokeh best focus, and relative illumination do consume the intensity.
- Zero total energy is a valid physical/numerical outcome and must produce an empty result rather than divisions by zero.

Validation rejects the property on folded/generalized prescriptions. Supporting those paths requires explicit
encounter-side medium accounting because a repeated or reverse surface order cannot safely infer the traversed material
from sequential `elemId` ownership alone.

The implementation is geometric-radiometric, not wave-optical. It models a source-published broadband intensity
coefficient along the actual glass path. It does not infer a product T-number or model wavelength-dependent ND response,
coatings, Fresnel loss, diffraction, scatter, or flare. The Minolta AF 135mm f/2.8 [T4.5] STF is the catalog reference:
its 0.300 mm axial L5 path at `α = 0.55 mm⁻¹` yields `exp(-0.55 × 0.300) = 0.8478937041`.

## Diffractive Phase Surfaces

`SurfaceData.diffractive` attaches a rotationally symmetric optical-path polynomial to a refracting surface. It models
Nikon PF, Canon DO, and equivalent patent-described kinoform interfaces as one authored diffraction order; the lens-data
authoring rules and a filled example live in `src/lens-data/LENS_DATA_SPEC.md`.

### Data Contract

- Authored form (`src/types/optics.ts`): `DiffractivePhaseSurface` is `{ kind: "radial-polynomial",
  referenceWavelengthNm, diffractionOrder, terms }`, each `RadialPhaseTerm` being `{ radialPower, coefficient }`. `kind`
  is a discriminator so other phase forms can be added without touching existing data.
- Runtime form (`src/optics/types.ts`): normalization calls `compileDiffractivePhase()` once per surface and stores a
  frozen `CompiledDiffractivePhase` (`quadraticCoefficient`, per-term `derivativeCoefficient`, original `source`) on
  `CompiledSurface.diffractive`, or `null` for ordinary surfaces. Tracers test that `null` first, so only phase surfaces
  evaluate the polynomial, and the hot path allocates no per-hit arrays or closures.
- `validateLensData.ts` enforces the canonical shape before any polynomial is evaluated: `referenceWavelengthNm` finite
  in `[100, 2000]`; `diffractionOrder` a non-zero integer in `[-16, 16]`; 1–16 `terms` with unique, strictly
  increasing integer `radialPower` in `[2, 32]`; every `coefficient` finite and non-zero. `diffractive` is rejected on
  `"reflect"` and `"block"` interactions, is per-surface data that is never merged as a lens-wide default, and, when
  omitted, leaves every existing lens and golden value unchanged.

### Physical Convention

`src/optics/math/diffractivePhase.ts` owns the kernel shared by every first-order and exact path:

```text
W(h)     = Σ Cp · h^p                              [mm, with h = hypot(x, y) in mm]
dW/dh    = Σ p · Cp · h^(p-1)                      [dimensionless]
scale(λ) = diffractionOrder · λ / referenceWavelengthNm
kick     = scale(λ) · dW/dh                        [tangential optical momentum]
phiD(λ)  = -2 · C2 · scale(λ)                      [equivalent paraxial power]
```

- `W(h)` is optical path, not sag. Phase data never changes intersection geometry, surface normals, element outlines,
  render trim, edge-thickness or rim-slope validation, or the material sequence. A phase surface keeps its ordinary
  spherical or aspheric profile and is not added to `asph`.
- `interactParaxialSurface2()` in `math/paraxial.ts` adds `diffractiveParaxialPower()` to the refractive surface power,
  so every `buildLens()` first-order quantity (EFL/BFD, pupils, zoom construction, focus recalculation) includes the
  phase term. `diffractivePetzvalContribution()` adds the thin-surface term `phiD / (nBefore · nAfter)` to the Petzval
  sum.
- Exact tracing applies `diffractiveRefractedDirection()`: generalized Snell adds `kick` along the tangent-plane
  projection of the global radial unit vector to the incident tangential momentum, then takes the positive transmitted
  normal component. That projection is the derivative of authored `h` on the curved interface and is not
  renormalized; it is exactly zero on axis and keeps the same global radial sign from either side, so a reversed ray
  retraces its path.
- `interactRefractiveSurface()` in `trace/interactions.ts` is the single refract-or-fail step shared by the sequential
  tracer, the generalized/folded tracer, and `internal/exactSurfaceTrace.ts`. It runs the phase kernel even when
  `nIn === nOut` (phase plates must not fall into the same-index skip), and when `|pT,out| > nOut` it returns the typed
  `nonPropagatingDiffractionOrder` failure / `non-propagating-diffraction-order` clip reason instead of fabricating a
  ray.
- Wavelength is explicit. Trace options carry `wavelengthNm`, defaulting to `DEFAULT_PHASE_WAVELENGTH_NM` (the d line)
  for monochrome construction and tracing; chromatic adapters set it from `CHROMATIC_CHANNEL_WAVELENGTH_NM[channel]`
  rather than inferring it from the index callback. A channel uniquely determines its wavelength, so the channel
  already in the trace cache identity covers it; any future arbitrary-wavelength option must extend that key.
  Diffractive power therefore scales with λ, opposite to glass dispersion, and both mechanisms act in every chromatic
  trace.

### Display And Scope

`computeElementShapes()` emits a `"diffractive-phase"` surface accent, consumed by the diagram element layer, legend,
and element inspector, so the interface is marked without drawing groove microstructure; the rendered outline stays the
authored prescription. The model is geometric-ray only: it does not simulate blaze efficiency, multi-order energy split,
interference, PSF/MTF, scatter, or characteristic PF flare, and it has no freeform, decentered, or user-selectable-order
surfaces.

## Mirror And Folded Optical Paths

Folded systems opt into the generalized exact tracer through lens data, not through a trace-mode flag:

- `SurfaceData.innerSd` defines an annular active aperture. Rays interact only inside `[innerSd, sd]`; central holes pass
  without reflecting, refracting, or blocking.
- `SurfaceData.interaction.type` selects `"refract"`, `"reflect"`, or `"block"`. Side-specific `incidentSide` /
  `inactiveSide` controls whether a surface is active from the front, rear, both sides, ignored from the inactive side,
  or treated as a blocker from the inactive side. Reflective reference fixtures annotate inactive-side blocking
  explicitly so mirror back-side opacity is visible in the data.
- `interaction.mirrorKind` documents first-surface vs second-surface mirrors. Refractive-index transitions still come
  from the physical `nd` sequence so explicit repeated orders can enter a Mangin body, reflect, and exit through the
  same front surface.
- Second-surface mirrors also emit a diagram surface accent from `computeElementShapes()` so the SVG can draw the
  coating separately from the glass substrate. This is visual-only; tracing behavior still comes from
  `SurfaceData.interaction`.
- `interaction.normal` turns a surface into a tilted meridional plane for both intersection and SVG element rendering.
  Use it for flat fold mirrors and their passive backing planes; omit it for curved mirrors so sag-derived normals are
  used.
- `LensData.opticalPath.surfaceOrder` is an explicit label sequence and may repeat labels. This is the preferred path
  for known Mangin or Cassegrain hit orders.
- `LensData.opticalPath.mode: "auto"` uses nearest-valid-surface selection with self-hit tolerance, passive same-index
  refractive-surface skipping, image-plane termination, and `maxInteractions` protection.
- `LensData.opticalPath.imagePlane` supplies arbitrary meridional image planes. `doLayout()` reports `imgZ` from this
  plane for folded systems, and ray traces terminate at the plane rather than assuming the final right-hand BFD.

`traceRay*` remains the public caller surface for diagram rays. Focused optics tests can import
`internal/exactSurfaceTrace.ts` to inspect generalized-path details such as hit labels, terminal direction, final medium,
and whether the explicit image plane was reached.

Analysis support is deliberately incremental. Spherical aberration, pupil aberration, and mirror-safe blur/bokeh helpers
use generalized image-plane intersections where valid, folded visible off-axis geometry uses generalized stop/chief-ray
solves, and axial folded reflective systems can report first-order cardinal overlays. Complex tabs that still need a
settled folded interpretation, such as coma, distortion, vignetting, and field curvature, remain guarded in the UI until
each tab has fixture-backed validation.

## Field-Launch Convention

Every analysis launch slope flows through `projectionLaunchSlopeForField(L, fieldAngleDeg)` in
`projection.ts` rather than computing `uField = -Math.tan(θ)` inline. The helper returns
`{ uField, status: "ok" | "out-of-domain" }` and applies the shared `MAX_FIELD_LAUNCH_DEG = 89` guard so
overflow cannot leak into downstream tracers. All chief-ray, vignette, distortion, pupil-aberration, and
off-axis-aberration call sites consume the helper; loops that sample across the field skip iterations whose
`status === "out-of-domain"`.

For 2D angular sampling (the distortion field grid), `projectionLaunchVectorForFieldAngles(reference, θ_x,
θ_y)` is the 2D analog. It takes azimuthal projections of a single off-axis direction and returns
`{ fieldSlopeX, fieldSlopeY, idealImageX, idealImageY, totalFieldDeg, status }`. The Distortion tab routes
non-rectilinear projections through this helper to sample angular Cartesian grids that don't suffer the
inverse-map's π/2 rejection.

For past-cap fisheye fields (θ ≥ 89°), `boundingSphereLaunchVector(epZ, θ_x, θ_y, R)` builds a vector launch
from a bounding sphere centered near the entrance pupil. The chief-ray solver auto-dispatches to this path
via `launchSurfaceForFieldDeg(fieldDeg, projection)`, and fisheye projections use the bounding-sphere path at
every field angle. Vector-aware callers consume `solve.vectorLaunch` directly: visible off-axis and chromatic
diagram rays promote to vector launch when the declared fisheye off-axis field exceeds `tracingHalfField`;
bokeh footprint sampling, vignetting, and pupil-aberration loops trace vector rays when the scalar slope is out of
domain; the distortion field grid traces vector skew rays for fisheye angular cells beyond the slope cap.
Scalar-only logic must still check `projectionLaunchSlopeForField(...).status` before using `uField`.

## Ray Sampling Policy

Lens data owns the baseline ray fans through `rayFractions` and `offAxisFractions`. `raySampling.ts` preserves
those arrays exactly for `normal`, then derives symmetric denser viewport-only samples for `dense` and
`diagnostic`. Use the helper from display/tracing hooks instead of mutating runtime lens data or adding
density-specific arrays to lens files.

For folded systems, `obstructionAwareRayFractionsForDensity()` scans usable pupil bands so visible on-axis/off-axis rays
avoid central blockers and annular mirror holes automatically. Do not work around a secondary obstruction by hand-editing
`rayFractions`; fix the physical blocker or `innerSd` data instead. `stopObstruction.ts` infers the annular stop
obstruction identically for stop display and sampling: authored `STO.innerSd` first, then folded central blockers and
annular mirror holes, ignoring ring blockers whose center stays clear.

`raySampling.ts` also exports `isHeavyLensForRayWork(L)` — the shared heaviness heuristic. `LensDiagramPanel`
uses it to downgrade interactive diagram ray density during slider drag; analysis modules use it to halve
pupil sweep / pupil-correction sample counts on heavy lenses regardless of interaction state. Reuse this
helper instead of reimplementing the criteria.

## Performance And Rollback

Focused benchmarks live under `agent_docs/benchmarks/` and run manually with `npm run benchmark:optics-rendering`. Each
real run writes one permanent JSON record under `agent_docs/benchmarks/runs/`, and
`agent_docs/benchmarks/benchmark-report.md` summarizes the latest records. The benchmark covers lens building,
current-state layout, ray tracing, generic analysis work, static SVG rendering, and aberration-panel data/rendering.

The engine-migration baseline is kept in `agent_docs/records/optics-2-stage-05-performance.md`. There is no in-tree
old-vs-new engine selector or `*Legacy.ts` fallback: performance work profiles the current `src/optics` engine
directly, and rollback is an ordinary git revert or a focused fix with regression coverage.

## Cardinal Elements

`cardinalElements.ts` computes the Tier 1 first-order overlay from the current focus and zoom state. It uses current
surface spacings, receives the visible `zPos`/image-plane positions from the diagram computation pipeline, and returns
all six cardinal points atomically plus EFL, BFD, FFD, Hiatus, and Total track spans. BFD starts at the last authored
lens vertex, so modeled rear plates count as back focus. For ordinary same-index
photographic lenses, H/N and H′/N′ are marked coincident explicitly; non-unity image-side systems compute N/N′
independently. Axial folded reflective systems share the same paraxial transfer/interaction stepper with an enabled
reflect branch; folded systems with tilted image planes still return no cardinal result until a rotated-frame reporting
convention exists.

## Off-Axis Geometry Policy

Use explicit naming:

- `computeParaxialOffAxisFieldGeometry()` - first-order/paraxial geometry for compatibility and comparisons.
- `computeStateAwareOffAxisFieldGeometry()` - current focus/zoom-aware geometry using solved chief-ray behavior.
- `computeOffAxisFieldGeometry` remains as a backward-compatible alias for paraxial geometry.

Visible off-axis rays, chromatic off-axis rays, distortion, vignetting, pupil aberration, coma, and bokeh use the
state-aware solved-chief-ray path where current focus/zoom can move pupil geometry. Folded callers that need the stop
height use generalized stop tracing rather than sequential `stopAt`, and folded image-plane coordinates use the same
plane-normal intersection helper as sequential callers. Keep paraxial behavior only where the UI or test explicitly
needs first-order comparison.

## Perspective-Control Movement

Perspective-control optics use two frames rather than moving the complete diagram:

- The **camera frame** owns the fixed sensor plane and its orthonormal basis. For an axial sensor, `u` is camera `+x`
  (right), `v` is camera `+y` (down/meridional), and the canonical normal is `+z` (imageward). The camera grid and axis
  remain fixed.
- The **intrinsic lens frame** owns the prepared prescription, stop, first-order pupils, cardinal points, and other
  lens-local quantities. `PerspectivePose` maps points, directions, rays, and planes rigidly between the two frames.

Positive shift translates the lens toward camera `-y`, matching the UI convention that optical/SVG `+y` is down.
Positive tilt is the right-handed `Rx(+tiltDeg)` rotation about a camera-fixed line parallel to `x`, followed by the
shift translation. The sensor never follows either movement. `lensMovement.ts` clamps user movement to the declared
`perspectiveControl` capability and supplies the 2D display adapters over that same rigid pose.

### Pivot Contract

Every tilt-enabled `perspectiveControl` declaration has a `tiltPivot` in the camera frame. Its
`zOffsetFromImagePlaneMm` is a finite negative distance from the fixed sensor/image plane; negative is objectward. The
offset is authored from the canonical reference layout (`focusT = zoomT = aberrationT = 0`) and remains camera-fixed as
focus or zoom moves the lens groups. It must not be recomputed from the current rear vertex.

`basis: "mechanical-axis"` is permitted only for a directly sourced physical rotation axis.
`basis: "patent-principal-point-guidance"` means a patent directs the rotation center to a principal-point region, so
the stored canonical principal point is source-guided but is not a dimensioned or measured production hinge.
`basis: "rear-vertex-fallback"` means the canonical rear vertex supplied the deterministic reference because the
mechanism axis is unpublished. The latter is deliberately a geometry fallback, not evidence about the manufactured
hinge. Shift-only lenses omit the pivot. `createPerspectivePose()` rejects non-zero tilt without one; old standalone
display helpers retain a zero-offset compatibility fallback, but lens data and the physical trace path do not rely on
it.

### Exact Trace And Field Sampling

`createPerspectiveTraceContext()` binds one camera-anchored `PreparedOpticalState`, fixed sensor and sensor basis,
clamped movement, and pivot. Its cache key includes the complete prepared geometry, sensor, basis, movement, and pivot,
so shift- or tilt-only changes invalidate diagram and analysis results. The identity pose preserves the centered fast
path.

For active movement, a camera-space launch is transformed into the lens frame, exact-traced through the intrinsic
prescription, transformed back into the camera frame, and extended to the fixed sensor. Diagram rays therefore show
physical surface hits and fixed-sensor intercepts, not a rigidly transformed centered polyline. Chief rays are solved
against the moved stop center, including a channel-specific solve for chromatic fans.

The shared `FieldSample` contract keeps every requested point in input order and reports one of `usable`,
`outside-projection-domain`, `chief-unreachable`, `clipped`, or `missed-sensor`. It carries the requested normalized
sensor coordinate/point, camera- and lens-frame scene directions, zero-pose ideal, posed ideal, actual chief intercept,
solve diagnostics, and optional pupil bundle. Normalized sensor `(u, v)` uses `[-1, +1]` at the declared image-format
edges; validated `imageFormat` metadata is therefore required for perspective field sampling.

Two field domains prevent analyses from accidentally changing the question while the lens moves:

- **Scene-locked** sampling holds an arbitrary camera-space scene direction fixed. Its zero-pose ideal point is the
  composition reference. Distortion uses this domain so movement-induced composition and residual optical distortion
  remain distinguishable.
- **Sensor-locked** sampling holds a physical point on the fixed sensor. The analytic posed-lens inversion is only a
  seed; a two-coordinate solve adjusts the camera scene direction until the actual moved chief reaches the requested
  sensor point through the moved stop. Blur, focus, bokeh, field aberrations, chromatic field behavior, vignetting, and
  apparent pupils use this domain.

The **posed ideal** is not taken from a real trace. It maps the intrinsic ideal image point and paraxial exit-pupil
center into the camera frame, joins them, and intersects that line with the fixed sensor. This supplies a stable
composition baseline between the zero-pose ideal and the exact traced intercept.

### Analysis Metric Contract

| Family | Frame and interpretation during active movement |
| --- | --- |
| EFL, cardinal elements, Petzval, focus breathing | Intrinsic lens-frame properties. They remain available and are explicitly labeled as intrinsic. |
| Classical lens-axis spherical aberration and longitudinal chromatic aberration | Intrinsic lens-axis diagnostics. They are not presented as fixed-sensor movement effects. |
| Blur, best focus, and bokeh | Sensor-locked footprints and focus offsets measured from the fixed sensor along its canonical normal. |
| Field curvature, astigmatism, and coma | Sensor-locked tangential/sagittal focus and chief-relative spot metrics in fixed-sensor axes. |
| Chromatic field analysis | Sensor-locked focus, transverse color, field blur, and retained channel-specific fans in the fixed sensor basis. |
| Distortion | Scene-locked displacement in sensor `u/v`: composition = posed ideal - zero-pose ideal; optical residual = actual - posed ideal; total = actual - zero-pose ideal. |
| Vignetting | Sensor-locked area-weighted aperture survival and transmitted flux. Active/zero comparisons use the same signed sensor coordinate and never renormalize to the active center. |
| Pupils | Intrinsic EP/XP centers and sizes stay in the lens frame; their posed centers are rigid references. Field-dependent apparent pupils come from solved chief/bundle lines and report displacement in the fixed sensor basis. |

Movement-aware reductions preserve mechanical pupil weights separately from Beer-Lambert transmission. Sensor-relative
focus uses planes parallel to the fixed sensor; a positive normal offset follows the canonical sensor normal and a
negative offset is lensward.

Fallbacks must be honest. While movement is active, no ray-based section may silently reuse centered-lens results.
Intrinsic sections stay visible with intrinsic labels. Unsolved samples retain their requested coordinate and explicit
status, and an unsupported section is suppressed by the per-section availability registry. Active full traces through
generalized/folded paths fail closed with `PerspectiveTraceUnsupportedError` rather than falling back to sequential
math.

### V1 Limits

V1 models one vertical lens translation (`shift-Y`) and one meridional tilt about camera `X` (`tilt-X`). It does not
model horizontal/independent XY shift, swing/tilt about `Y`, mechanism rotation, separately rotated shift and tilt axes,
or a complete mechanical linkage. The sensor remains fixed and untilted. Full perspective-control tracing is limited
to sequential optical paths; folded/generalized perspective-control systems are unsupported and remain guarded.

## Lens-Group Movement

`groupMovement.ts` infers display groups from `RuntimeLens.groups` and falls back to construction groups when annotations
are absent. It samples focus and zoom states through `doLayout()`, applies the same fixed-image-plane anchoring used by
the viewer, and reports each group center as a signed axial position relative to the fixed focus plane (`0` on the image
side, negative toward the object side). The overlay consumes these pure profiles; do not move the calculations into
React components or `buildLens()`.

## Aberration Analysis

`aberrationAnalysis.ts` re-exports helpers from `src/optics/aberration/`.
Because that barrel is consumed by prepared-state analysis adapters, implementation modules under
`src/optics/aberration/` should import lower-level engine sources directly (`field/`, `layout.ts`, `rayTrace.ts`,
`trace/`, and `field/projection.ts`) instead of routing through public barrels such as `optics.ts` or `projection.ts`.
Keep those public barrels stable for app/test callers, but avoid using them inside the re-exported aberration modules so
`compat.ts` and `aberrationAnalysis.ts` do not form an initialization cycle.

Entry points: `computeSphericalAberration()`, `computeSAProfile()`, and `computeSphericalAberrationBlurCharacter()` for
axial behaviour; `computeComaAnalysis()`, `computeComaPointCloudPreview()`, and `computeSagittalComa()` for
chief-ray-referenced coma; and `computeFieldCurvature()` for parabasal and real-ray tangential/sagittal curves plus the
Petzval reference, with an optional chromatic mode that adds per-channel field curves and focus spread.

Sign convention: negative spherical aberration means undercorrected; positive means overcorrected. Keep copy, tests, and
primers aligned to that convention.

## Distortion

`distortionAnalysis.ts` computes:

- `computeDistortionCurve()` - 1D distortion curve from center to edge. Residual is measured against the lens's
  declared projection (rectilinear, fisheye-equidistant, or fisheye-equisolid), not always rectilinear. The
  image-height solver uses `chiefRayImageHeightAccurate`, so it can consume vector chief rays when `solveChiefRay`
  returns a bounding-sphere launch.
- `computeDistortionFieldGrid()` - traced 2D chief-ray field grid. The internal `resolveDistortionGridLaunch`
  helper forks on `reference.projectionReference.kind`: rectilinear uses the image-space Cartesian sampler +
  inverse-map; fisheye kinds sample angular Cartesian and forward-map through
  `projectionLaunchVectorForFieldAngles`. Cells inside the slope cap use the slope/skew path; out-of-domain angular
  cells trace through `computeBoundingSphereVectorFieldLaunch` + `traceSkewRayVector`.
- `computeDistortionReference()` - near-axis reference setup; picks the projection reference from
  `L.projection.kind` via `distortionProjectionReferenceForLens()`.

The per-field pupil correction sample count halves on heavy lenses via `isHeavyLensForRayWork`. All three functions
accept an optional precomputed `FieldGeometryState`.

## Vignetting

`vignetteAnalysis.ts` computes relative illumination using solved chief rays, adaptive field spacing, and dense
meridional pupil sweeps whose per-field ray count halves for `isHeavyLensForRayWork` lenses.
`computeVignettingCurve()` accepts optional precomputed field geometry and traces `solve.vectorLaunch` for
fisheye/past-cap fields when the scalar slope helper reports `out-of-domain`.

`geometricTransmission` remains the normalized fraction of rays that survive clipping. `relativeIllumination` sums the
surviving rays' bulk-transmission weights, applies `cos⁴(θ)`, and normalizes by the on-axis intensity. This separation is
required for apodizers: absorption changes brightness without pretending that the mechanical aperture rejected a ray.

## Pupil Aberration

`pupilAberration.ts` provides `computePupilAberrationProfile()` (entrance pupil z-shift per field angle from the
solved/paraxial chief-ray launch ratio), `computeExitPupilAberrationProfile()` (exit pupil z from full-system chief-ray
back-projection), and `computeBothPupilAberrationProfiles()`, which shares one per-angle bisection across both. Prefer
the combined helper in UI code. All accept optional precomputed field geometry.
Exit-pupil back-projection uses vector chief rays when available; entrance-pupil correction ratios remain tied
to finite slope launches and fall back to neutral correction when no scalar reference exists.

## Bokeh

`aberration/bokeh.ts` traces circular pupil bundles at infinity and near focus. `computeBokehPreviewPair()` is the
paired infinity/near-focus entry point over `computeBokehPreview()`; `computeBokehFieldFootprint()` returns the
per-field point cloud, surviving pupil footprint, and radial blur profile; `buildBokehRadialProfile()` and
`buildBokehDensityGrid()` derive summaries from that cloud.

The traced image-plane point cloud is the source of truth; radial profiles are derived summaries. Off-axis bokeh
footprints use projection-aware field geometry and vector launches for fisheye/past-cap fields when available.

Each displayed bokeh point uses `equalAreaSampleWeight × ray.transmission`. Reference and near-focus planes use the same
transmission weights in their least-squares best-focus solve. The pupil-footprint inset deliberately retains the base
equal-area weights so its centroid and shift radius remain mechanical diagnostics; absorption changes photometric
density, not the reported pupil position. Point and pupil reductions guard zero total weight and return empty results
rather than usable structures containing non-finite metrics.

## Aspheric Comparison

`asphericComparison.ts` provides pure helpers for how far an aspheric surface departs from its best-fit sphere:
`computeBestFitSphereR()` (golden-section RMS-sag minimiser that falls back to the base radius for flat surfaces),
`computeAsphericDeparture()`, `computeDepartureProfile()`, `peakAbsDeparture()` / `rmsDeparture()`, and
`nearestSurfaceForClick()` for click-to-measure routing. They feed `AsphericComparisonOverlay.tsx` exclusively and must
not be called from `buildLens()`.

## Validation And Rendering Geometry

`validateLensData.ts` checks required fields, references, STO presence, the d/e `indexReference` enum, diffractive
phase-polynomial bounds/canonical ordering, element edge thickness, SD consistency, rim slope, boundary-surface
cross-gap overlap, conic limits, and zoom field consistency. Elements that span more than one surface
(via `fromSurface`/`toSurface`) and stops marked `stopPlacement: "inside-element"` are validated against tighter rules:
explicit spans must be ordered and confined to one `elemId`, internal stops must be flat with `nd` matching the
containing glass, and every interior surface inside a multi-surface element must itself be a flagged internal stop.

`diagramGeometry.ts` provides:

- `createCoordinateTransforms()` - optical mm to SVG coordinate mapping.
- `computeElementRenderDiagnostics()` - declared/rendered SD, trim amount, and trim cause.
- `computeElementShapes()` - closed SVG element paths using the same rim and boundary gap policy as validation; accepts an
  optional point transform for perspective-control movement.

Production tests treat excessive hidden render trim as a data-quality failure.
