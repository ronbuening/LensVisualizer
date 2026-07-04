# Semi-Diameter Patent Diagram Audits

Use this guide when a lens prescription is already entered and the `sd` values need to be tuned against the patent
figures. This is a rendering and ray-clearance audit, not a license to change radii, thicknesses, refractive indices,
or focus mechanics without a separate patent-table check.

## Successful Reference Pass

The Nikon AI wide-angle branch is the current model for this workflow:

- `NikonAINikkor24mmf2` from US 4,163,603 Embodiment III: tightened the front retrofocus group and rear positive group
  SDs to follow Fig. 3 more closely, while leaving focus gaps fixed because the production lens uses CRC and the patent
  publishes only infinity spacing. The analysis records the unit-focus bound separately: a pure extension proxy at
  Nikon's 1:8.6 reproduction ratio would be about 2.79 mm.
- `NikonAINikkor28mmf28S` from US 5,917,663 Table 2: narrowed the rear group after the stop so the rendered clear
  apertures match the patent diagram and keep the CRC interval discussion honest. L7/L8 remained explicit unmatched
  J-LAK02-class fallbacks because no coefficient-backed catalog row was close enough.
- `NikonAINikkor35mmf14S` from US 3,576,360 Embodiment 1: reshaped the middle and rear SD run to follow Fig. 1 and
  avoid excessive cross-gap sag in the tight post-stop air spaces. K10 remained explicitly unmatched because the project
  has no coefficient-backed legacy K10 entry.

## Inputs To Gather

- The patent prescription table and figure for the exact embodiment in the data file.
- Any untracked reference files under `patents/`. Treat these as local source material; do not add them unless the user
  explicitly asks.
- Manufacturer constraints that affect the barrel envelope, especially filter size, close-focus mechanism, image format,
  and reproduction ratio.
- Current glass reports when the audit also touches `glass:` labels:
  ```bash
  npm run generate:glass-reports
  ```

## SD Editing Procedure

1. Confirm the prescription identity first: embodiment, focal-length scale factor, stop split, and any normalized patent
   units. Scale all SD decisions by the same factor used for `R` and `d`.
2. Separate table truth from diagram inference. If the patent publishes semi-diameters, use those values. If it does not,
   write the data-file header as "inferred" or "estimated" and state the inputs.
3. Work by local surface neighborhoods, not isolated rows. Front and rear surfaces of the same element should usually
   change smoothly unless the element is a strong meniscus, cemented junction, or figure shows a real bevel/step.
4. Fit the visible patent silhouette first: front element mouth, narrow waists, stop-adjacent clear apertures, and rear
   element exit diameter. Preserve obvious production constraints such as a 52 mm filter thread only as an outer bound,
   not as proof that every front surface reaches that radius.
5. Check geometric clearance after every tight-gap change. Small air gaps between strongly curved surfaces can create
   sag intrusion even when the SVG looks plausible. Reduce neighboring SDs until cross-gap sag stays comfortably below
   the physical gap.
6. Keep stop SD separate from element SDs. The stop comes from the f-number, entrance-pupil behavior, or an explicit
   patent stop aperture when available; do not enlarge it just to make adjacent elements prettier.
7. Do not invent CRC, floating, or internal-focus spacings from a static patent figure. If production focusing is known
   but not tabulated, document the mechanism and either leave focus fixed or add a clearly labeled approximation based
   on manufacturer MFD/reproduction data.
8. If a diagram fit exposes suspect glass labels, audit them in the same pass only when the patent table provides enough
   information. Prefer coefficient-backed catalog entries; otherwise use future-upgrade six-digit labels or explicit
   `Unmatched` labels as described in `lens-patent-audit.md`.

## Verification

Run at least the narrow checks for the touched area:

```bash
npm run typecheck
npm run format:check
npm run lint
npm test -- buildLens elementRenderDiagnostics
```

When glass labels changed, also run:

```bash
npm run generate:glass-reports
```

For a PR-ready lens batch, the preferred gate remains:

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

## Documentation Expectations

- Update the data-file header with how SDs were determined and any patent figure used.
- Update the companion `*.analysis.md` when the SD pass changes focus assumptions, glass classification, or a previously
  stated mechanical interpretation.
- Add or update a sibling `*.audit.md` only when doing a formal patent audit pass. For a new lens still being authored,
  the data header plus analysis file can carry the SD rationale.
- Keep generated glass reports in the commit only if `npm run generate:glass-reports` changed them because of real glass
  classification edits.
