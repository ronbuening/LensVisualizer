# Adding a Teleconverter

Recipe for adding a detachable rear teleconverter. Field meaning, geometry and validation rules live in
`src/lens-data/TELECONVERTER_DATA_SPEC.md`; this doc is the workflow. A converter built into one lens is not a
teleconverter entity — it stays on `opticalConfiguration` (`src/lens-data/LENS_DATA_SPEC.md`).

## What You Get For Free

Teleconverter files are auto-discovered like lens files. Adding one `*.teleconverter.ts` file gives:

- A TC control on every compatible lens page, in the single-lens view and per pane in compare mode.
- A prerendered `/teleconverters/<key>/` page listing compatible lenses, an entry on `/teleconverters/`, sitemap and
  search entries, and a link from each compatible lens page.

No imports, catalog edits, route edits, or per-converter tests are needed.

A converter with `visible: false` is a hidden test model and gets none of the above: it mounts only from a
hand-typed `?v=1&tc=<key>` query. The `/teleconverters` section itself is built only once a published converter
exists. The standing test model is `src/lens-data/reference/ReferenceXF14xTeleconverter.teleconverter.ts`; do not
publish it or reuse its key — a production converter gets its own file
(`src/lens-data/TELECONVERTER_DATA_SPEC.md` § Test Models).

## Steps

1. Copy `src/lens-data/TEMPLATE.teleconverter.ts.template` to `src/lens-data/<maker>/<Name>.teleconverter.ts`. Author
   it directly in the maker folder; the lens organizer does not move teleconverter files.
2. Transcribe surfaces and elements as for a lens. Leave out the stop: the host's stop is the system stop.
3. Set the geometry from the source's combined master + converter table:
   - `masterImageDistanceMm` = master back focus in air − the master-to-converter gap.
   - Last surface `d` = back focus, or the gap to the first plate when the source lists plates in `rearPlates`.
4. Choose the fit: `universal: true` for a converter that fits any lens of the mount, otherwise set
   `acceptsTeleconverters: true` on each host lens file.
5. Size the semi-diameters for the fastest intended host and set `minHostFno` if faster hosts would be clipped.
6. Run the gate below. Fix what the sweeps report before reaching for `incompatibleLensKeys`.

## Adapting a Master-Plus-Converter Package

A converter authored as one lens (the patent's master lens plus the converter, in the lens format) becomes a
teleconverter file by keeping the converter and letting the catalog host supply the rest:

1. Keep the converter's surfaces and elements only, relabelled from 1, with the patent's own lens and group
   designations. Drop the master elements, the stop, zoom and focus tables, `nominalFno`, `projection` and the other
   lens-only fields.
2. `masterImageDistanceMm` = the master table's back focus in air − the gap from the master's last surface to the
   converter. Keep the converter's last gap and the plane member behind it (`rearPlates`) as printed.
3. Set `acceptsTeleconverters: true` on the catalog lens that is the patent's master, and on other hosts only after the
   sweeps and a corner-coverage check pass for them. Rims inferred on the master system can fall short on another host.
4. Record the maker's compatibility in the fit fields: `minHostFno` for a beam the rims do not pass, and
   `incompatibleLensKeys` for a converter the maker supplies for one lens only.
5. Write an `*.audit.md` sidecar beside the file: source, what was extracted and dropped, geometry, rim provenance,
   discrepancies carried, fit decisions.

## Verification

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
npm run generate:metadata && npm run build && npm run seo:audit
```

`__tests__/src/lens-data/teleconverterCompatibility.test.ts` validates every converter and composes it onto every
compatible catalog lens. Then check in the viewer, on the source's own master lens when it is in the catalog:

- Composed focal length, f-number and back focus match the source's combined specification table.
- The host's stop radius is unchanged with the converter mounted.

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| `Back focus mismatch` | `masterImageDistanceMm` or the last gap uses a physical distance through a plate where an air-equivalent one is required, or plates were folded into the last gap by hand. |
| `Magnification mismatch` | A radius, thickness or index was mistranscribed, or `masterImageDistanceMm` belongs to a different example. |
| Converter is not offered on a lens | `teleconverterCompatibility()` names the failing rule: mount, missing `acceptsTeleconverters`, clearance, or an excluded host type. |
| Sweep reports a clipped axial beam | The host is faster than the converter's rims pass; raise the semi-diameters if the source supports it, or set `minHostFno`. |
| Sweep reports the chief ray reaching less of the format corner than on the bare lens | The converter's rims stop the corner chief ray; a package's rims are often a lower bound. Re-size them from the source figure (`agent_docs/patent-figure-sd-audit-procedure.md`). |
| Sweep reports a build error at the junction | Rim contact between the host's last surface and the converter's first; exclude that host with `incompatibleLensKeys`. |

## How It Works

`attachTeleconverter()` composes the converter onto the host before `buildLens()`; see
`agent_docs/architecture/optics-engine.md` § Teleconverter Composition. State, URL and compare behaviour are in
`agent_docs/architecture/state-and-utilities.md` and `agent_docs/architecture/comparison.md`.
