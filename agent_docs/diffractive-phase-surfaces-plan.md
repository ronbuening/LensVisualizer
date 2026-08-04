# Diffractive Phase-Surface Implementation Plan

- Status: **shipped — implemented and production-verified 2026-08-03**
- Initial target: Nikon AF-S NIKKOR 500mm f/5.6E PF ED VR, JP2018017857A Example 2
- Reusable target: rotationally symmetric Nikon PF, Canon DO, and equivalent patent-described kinoform surfaces

## Why This Is An Engine Feature

JP2018017857A Example 2 places a rotationally symmetric phase polynomial on surface 8 of a bonded three-medium
stack. The patent supplies

```text
W(h) = C2 h^2 + C4 h^4
C2 = -4.25304e-5 mm^-1
C4 =  3.00000e-10 mm^-3
lambda0 = 587.6 nm
diffraction order = +1
```

Independent Stage 1 tracing gives EFL 489.709445 mm with the phase term and 538.940703 mm with the same refractive
media but no phase term. Treating this as glass, an aspheric sag, or a marketing-only annotation would therefore miss
49.231258 mm of first-order focal-length contribution and would give the wrong chromatic behavior. A diffractive
surface's power scales with wavelength, opposite the usual trend of refractive glass dispersion.

The extraction, equations, raw prescription, glass audit, focus table, and independent verifier live in the untracked
`in_progress/NikonAFSNikkor500mmf56EPFEDVR/` work package. They are evidence for this implementation, not production
runtime inputs.

## Acceptance Criteria

The feature is ready for this lens when all of the following are true:

1. A lens data file can attach a validated, vendor-neutral radial optical-path polynomial to any refracting surface.
2. The d-line runtime EFL and BFD for Example 2 agree with the independent extraction to within 0.02 mm.
3. Paraxial, exact meridional, exact skew, sequential, and generalized trace paths apply the same phase-gradient sign
   and wavelength scaling.
4. Chromatic traces use both wavelength-dependent glass indices and `lambda / referenceWavelength`; disabling only the
   phase term reproduces the independently measured refractive-only control.
5. Existing lenses without a phase surface retain their current golden values, and the ordinary trace loop performs no
   polynomial work for them.
6. The production lens reports 19 physical elements / 11 groups while preserving the two additional optically distinct
   bonded PF media needed by the prescription.
7. The full quality gate and production build pass, including metadata, prerender, SEO, render diagnostics, and corpus
   exact-trace tests.

## Completion Evidence

- JP2018017857A Example 2 builds at EFL 489.709445 mm, BFD 64.398175 mm, F/5.75019, and 279.32418 mm track.
- Removing only the phase field produces the independent controls EFL 538.940703 mm and BFD 79.501045 mm.
- Focused coverage pins phase math/validation, equal-index handling, forward/reverse reciprocity, typed non-propagating
  orders, paraxial construction, exact meridional/skew compatibility, every displayed chromatic channel, SVG accent,
  inspector disclosure, and physical element-count semantics.
- The full suite passed 220 files / 2,579 tests; typecheck, format, lint (zero errors), production build, 996-route
  prerender, sitemap/RSS generation, and SEO audit all passed.
- An alternating 9-sample benchmark of 12,000 exact rays per sample measured 202.253 ms phase-on versus 200.438 ms
  phase-off median on the same 33-surface prescription: 0.91% overhead. The temporary measurement harness was removed.

## Data-Type Contract

Add the following input types to `src/types/optics.ts` and an optional `diffractive` field to `SurfaceData`:

```ts
export interface RadialPhaseTerm {
  radialPower: number;
  coefficient: number;
}

export interface DiffractivePhaseSurface {
  kind: "radial-polynomial";
  referenceWavelengthNm: number;
  diffractionOrder: number;
  terms: RadialPhaseTerm[];
}

export interface SurfaceData {
  // existing fields...
  diffractive?: DiffractivePhaseSurface;
}
```

One filled value from the initial Nikon lens is:

```ts
diffractive: {
  kind: "radial-polynomial",
  referenceWavelengthNm: 587.6,
  diffractionOrder: 1,
  terms: [
    { radialPower: 2, coefficient: -4.25304e-5 },
    { radialPower: 4, coefficient: 3e-10 },
  ],
},
```

`h` and all optical-path coefficients use millimeters:

```text
W(h) = sum(Cp * h^p)                         [mm]
dW/dh = sum(p * Cp * h^(p - 1))             [dimensionless]
scale(lambda) = diffractionOrder * lambda / referenceWavelength
phase-gradient kick = scale(lambda) * dW/dh [reduced-angle / optical-momentum units]
```

The quadratic paraxial surface power is

```text
phiD(lambda) = -2 * C2 * diffractionOrder * lambda / referenceWavelength
```

so the reduced meridional angle changes by `qOut = qIn - phiD*y`, equivalently
`qOut = qIn + scale(lambda)*dW/dy`. The exact tracer adds that same signed gradient to tangential optical momentum
before solving the outgoing normal component. The physical surface gradient keeps the same global radial sign from
either side; applying it to the reversed ray restores the original path and preserves reciprocity.

Contract constraints:

- `kind` is a discriminator so other phase forms can be added without changing existing data.
- `referenceWavelengthNm` is finite and in `[100, 2000]`.
- `diffractionOrder` is a non-zero integer in `[-16, 16]`.
- `terms` contains 1–16 entries, sorted by strictly increasing unique integer `radialPower` values in `[2, 32]`.
- Every coefficient is finite. Zero terms are rejected or omitted so the representation stays canonical.
- The feature models one authored/design diffraction order. Efficiency, energy split among orders, blaze profile,
  phase wrapping, and flare are deliberately not implied by this geometric-ray contract.
- `diffractive` is valid only on the default/refracting interaction. Reflection and blocking cannot silently combine
  with it in the first release.
- Omitting `diffractive` preserves all existing behavior and data compatibility.

At normalization time, compile and freeze a `CompiledDiffractivePhase` with an immutable term array, the quadratic
coefficient (or zero), and the reference scale. The trace loop first checks `surface.diffractive === null`; only the
rare phase surface evaluates the polynomial. Use a small loop over compiled sparse terms and exponentiation by integer
power; do not allocate arrays or closures per ray hit.

## Physical And Numerical Conventions

- The polynomial is an optical-path/phase function, not geometric sag. It does not change intersection geometry,
  surface normals, element outlines, edge-thickness validation, or the material sequence.
- The radial coordinate is `h = hypot(x, y)` on the surface. The surface gradient is the tangent-plane projection of
  the global radial derivative; it is not renormalized, because that projection is the derivative of authored `h` on
  the curved interface. On axis the gradient is exactly zero.
- Exact refraction uses generalized Snell tangential momentum in one operation:
  `pT,out = pT,in + signedScale * grad(W)`. The outgoing normal component is the positive transmitted root in the
  oriented surface-normal direction. If `|pT,out| > nOut`, the requested order is non-propagating; return a typed
  `nonPropagatingDiffractionOrder` failure instead of fabricating a ray.
- A surface applies its phase even when `nIn === nOut`. This matters for phase plates and must not be hidden behind the
  existing same-index refraction fast path.
- Monochrome and first-order construction default to the helium d line (587.6 nm). Chromatic adapters pass the actual
  channel wavelength from `CHROMATIC_CHANNEL_METADATA`; wavelength is not inferred from the refractive index callback.
- Surface 8 in the initial Nikon lens is ordinary spherical geometry plus the phase field. It is not added to `asph`.
- First-order Petzval includes the equivalent thin-surface term `phiD / (nBefore*nAfter)`. This convention must be
  isolated in a named helper and pinned against an analytic thin-phase fixture before the production lens relies on it.

## Stage 1 — Schema, Validation, And Phase Kernel

Files to touch:

- **Modified:** `src/types/optics.ts`, `src/optics/types.ts`
- **New:** `src/optics/math/diffractivePhase.ts`
- **Modified:** `src/optics/prescription/normalizeLensData.ts`, `src/optics/validateLensData.ts`
- **Modified:** `__tests__/src/optics/validateLensData.test.ts`
- **Phase-kernel coverage (as shipped):** `__tests__/src/optics/opticsEngineMath.test.ts` — the planned standalone
  `diffractivePhase.test.ts` was never created; the kernel tests live in the shared engine-math suite instead.

Reference to mimic: `AsphericCoefficients`, `compileAspheres()`, and the asphere validation block, while keeping phase
data surface-local because it changes interaction physics rather than profile geometry.

Steps:

1. Add the public authored types and compiled immutable form.
2. Add pure helpers for `W(h)`, `dW/dh`, wavelength scaling, paraxial power, and a no-allocation compiled evaluator.
3. Compile/freeze phase data during normalization; use `null` on ordinary surfaces.
4. Validate the constraints above and emit field-specific errors including surface index/label and term index.
5. Test the Nikon coefficients at `h = 34.9262 mm`: `W = -0.0514339 mm` within `2e-7`, d-line kick
   `-0.00291973` within `2e-8`, and paraxial phase focal length `11756.29667 mm` within `0.02 mm`.

Gate after Stage 1:

```bash
npm test -- diffractivePhase validateLensData
npm run typecheck
```

## Stage 2 — Paraxial Construction, Cardinals, Pupils, And Petzval

Files to touch:

- **Modified:** `src/optics/math/paraxial.ts`, `src/optics/internal/traceSurfaces.ts`
- **Modified:** `src/optics/runtimeLens.ts`
- **Modified:** focused paraxial/build tests under `__tests__/src/optics/`

Reference to mimic: `paraxialSurfaceInteraction2()` and `traceSurfaceInteractionParaxial()`; both paths must remain in
lockstep while `buildLens()` still uses the compatibility constructor path.

Steps:

1. Extend both paraxial surface steps with the d-line phase power, including same-index phase surfaces.
2. Route the term through every `buildLens()` first-order calculation: EFL/BFD, principal solutions, pupil setup,
   per-zoom construction, focus-state recalculation, and recorded ray heights.
3. Add the named Petzval contribution helper and combine refractive plus phase terms without changing ordinary sums.
4. Create a minimal analytic thin phase-plate fixture, then an Example 2 first-order fixture transcribed directly from
   the Stage 1 table.
5. Assert EFL `489.709445 ± 0.02 mm`, BFD `64.398175 ± 0.02 mm`, track `279.32418 ± 0.001 mm`, and the no-phase
   controls EFL `538.940703 ± 0.02 mm` / BFD `79.501045 ± 0.02 mm`.

Gate after Stage 2:

```bash
npm test -- opticsEngineMath buildLens diffractive
npm run typecheck
```

## Stage 3 — Exact Sequential, Skew, Generalized, And Chromatic Tracing

Files to touch:

- **Modified:** `src/optics/trace/types.ts`, `src/optics/trace/interactions.ts`
- **Modified:** `src/optics/trace/sequentialTrace.ts`, `src/optics/trace/generalizedTrace.ts`
- **Modified:** `src/optics/trace/rayAdapters.ts`
- **Modified:** `src/optics/internal/exactSurfaceTrace.ts` while it remains the constructor compatibility path
- **Modified:** trace and chromatic tests under `__tests__/src/optics/`

Reference to mimic: `refractedDirection()`, `orientedRefractionNormal()`, `resolvedNextIndex()`, and the channel metadata
flow in `rayAdapters.ts` / `chromatic/channels.ts`.

Steps:

1. Add optional `wavelengthNm` to trace options, default it to the d line, and have chromatic adapters derive it from
   the selected channel. Keep the existing channel in the trace-options cache key; it uniquely determines wavelength.
2. Implement a pure generalized-Snell interaction that combines refractive and radial phase gradients in one solve.
   Refractive-only surfaces retain the existing fast helper.
3. Use the combined interaction in sequential and generalized prepared-state tracers, applying phase even across equal
   indices and using the same physical radial-gradient sign for rear incidence.
4. Mirror the behavior in `internal/exactSurfaceTrace.ts` until the runtime constructor no longer depends on that path.
5. Add exact meridional/skew small-angle convergence tests, rotational-symmetry tests, front/rear reciprocity tests,
   a same-index phase-plate test, a typed non-propagating-order test, and sequential/generalized parity tests.
6. Add a two-wavelength fixture proving phase power ratio equals wavelength ratio, then a glass-plus-phase fixture
   proving both dispersion mechanisms are active. Pin Example 2 C/d/F/g ray results after independent comparison.

Gate after Stage 3:

```bash
npm test -- exactSurfaceTrace skewRay chromatic diffractive mirrorOptics
npm run typecheck
```

## Stage 4 — Nikon Lens Integration And User-Facing Disclosure

Files to touch:

- **New:** `src/lens-data/nikon/NikonAFSNikkor500mmf56EPFEDVR.data.ts`
- **New:** `src/lens-data/nikon/NikonAFSNikkor500mmf56EPFEDVR.analysis.md`
- **New:** focused lens regression test under `__tests__/src/lens-data/nikon/`
- **Modified:** diagram/inspector files only where needed for a small `PF/DO` phase-surface accent and disclosure
- **Modified:** corresponding component tests and changelog data

Reference to mimic: existing bonded resin/media stacks in `SonyFE24mmf28G.data.ts` and
`NikonAFSNikkor24mmf18GED.data.ts`, which preserve extra optically distinct media while `elementCount` reports the
physical marketed count.

Steps:

1. Author the unscaled patent Example 2 prescription with 33 active surfaces. Omit the source's surface 20 neutral
   air-air bookkeeping plane unless a blocking role is independently established; omitting it preserves optical track
   by adding its 0.5 mm to the preceding air gap.
2. Represent the L14/PF assembly as the physical substrate plus two optically distinct bonded media entries. Set
   `elementCount: 19` and `groupCount: 11`; do not pretend the two phase media are separately marketed elements.
3. Put the phase polynomial only on surface 8, retain the three published focus rows as endpoint/interpolation evidence,
   and document any small rigid-group compromise instead of silently correcting the patent.
4. Use canonical `lensMounts: ["nikon-f"]`, `imageFormat: "135-full-frame"`, official 500mm f/5.6 / 3.0m / nine-blade
   product metadata, and the patent's 489.70405 mm / f/5.75019 design metadata.
5. Use conservative `Unmatched (...)` glass labels for the two custom PF media and any pair without a defensible
   catalog assignment; never turn a nearest-neighbor audit candidate into a claimed patent fact.
6. Estimate semi-diameters from the verified pupil/marginal trace, then audit the patent section per
   `agent_docs/patent-figure-sd-audit-procedure.md`. Required tests cover validation, hidden render trim, full-frame
   image-circle floor, focus movement, focal/BFD targets, and representative exact/chromatic golden rays.
7. Add a subtle semantic phase-surface accent and inspector row if it can reuse the existing surface-accent system.
   The geometry remains the spherical prescription; no grooved microstructure is drawn to scale.
8. Add the analysis file with source/example identity, PF modeling disclosure, focus behavior, aberration interpretation,
   glass uncertainty, and the distinction between geometric tracing and diffraction efficiency/flare.

Gate after Stage 4:

```bash
npm test -- NikonAFSNikkor500mmf56EPFEDVR
npm run generate:metadata
npm run typecheck
npm run format:check
npm run lint
npm run test
npm run build
```

## Stage 5 — Regression And Compute-Burden Gate

Files to touch:

- **Modified only if needed:** exact-trace corpus tests and optics/rendering benchmark documentation/results

Steps:

1. Run the full exact-trace catalog corpus and compare existing golden values. No ordinary lens value may change beyond
   its current tolerance.
2. Benchmark an ordinary representative lens and the new PF lens with identical ray workloads. Ordinary-lens median
   time must stay within run-to-run noise (target <2%); the PF lens target is <10% added trace time and no added
   per-hit allocations visible in profiling.
3. Confirm metadata names the physical 19/11 design, the SVG accessible description uses physical `elementCount`, and
   generated catalog files contain the new route.
4. Re-run the full quality/build gate after benchmark-only instrumentation is removed.

## Gotchas

- `agent_docs/gotchas.md:3` — “Optical calculations use paraxial approximation”: first-order results and exact rays
  both need phase support; fixing only the visible ray path leaves cardinal/pupil construction wrong.
- `agent_docs/gotchas.md:8` — “Exact surface tracing is the only trace path”: do not add a DOE rollout toggle or revive
  a vertex-plane trace. The internal compatibility implementation must agree with the exact engine.
- `agent_docs/gotchas.md:33` — “Runtime trace adapters cache prepared state”: wavelength must be represented in trace
  options/cache identity. A channel already identifies its wavelength; arbitrary future wavelengths must extend the key.
- `agent_docs/gotchas.md:36` — “buildLens() calls validateLensData() internally”: the schema must fail malformed phase
  terms before polynomial evaluation.
- `agent_docs/gotchas.md:40` — “defaults are merged under each lens”: `diffractive` belongs on individual surfaces and
  must never become a lens-wide default.
- `agent_docs/gotchas.md:42` — “data files use satisfies LensDataInput”: update the public input type before integrating
  the production lens.
- `agent_docs/gotchas.md:64` — “Chromatic mode replaces the monochrome ray layers”: phase wavelength scaling belongs in
  shared tracing, not a separate visual overlay.
- `agent_docs/gotchas.md:76` — “SD validation uses slope-based rim check”: the optical phase polynomial does not alter
  physical sag, rim slope, or render trim.

## Out Of Scope

- Scalar/Fourier propagation, diffraction-limited MTF, PSF, Strehl, wavefront-error maps, or interference.
- Groove pitch/depth visualization, blaze efficiency, coating transmission, scatter, PF flare, multi-order ghosts, or
  wavelength-dependent energy allocation.
- Freeform, decentered, anamorphic, grating-vector-table, binary-zone, or user-selectable diffraction-order surfaces.
- Claiming the two custom PF media are public catalog glasses without stronger primary evidence.
- Scaling the patent to a nominal 500.000 mm prescription; the first integration preserves the published Example 2.

## Rollback

Revert the implementation commits. Because `diffractive` is optional and no default is introduced, reverting the Nikon
lens data first removes all production use; the engine/schema commits can then be reverted without migrating existing
lenses or generated metadata. The untracked Stage 1 package is not part of git rollback.
