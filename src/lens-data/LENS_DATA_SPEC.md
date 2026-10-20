# Lens Data Specification

Reference for writing `*.data.ts` lens files in `src/lens-data/`, in lens-data format V2 (`schema: 2`). The sections
follow the order a file is written in. Teleconverters have their own spec,
[TELECONVERTER_DATA_SPEC.md](TELECONVERTER_DATA_SPEC.md); the optional `*.analysis.md` companion follows
[LENS_ANALYSIS_SPEC.md](LENS_ANALYSIS_SPEC.md).

The code behind each rule:

- the types: `src/types/lensDataV2.ts` (`LensDataV2Input`);
- ingest, which reads a file into the canonical prescription and refuses what it cannot hold:
  `src/optics/prescription/ingestV2.ts`, with the rules both versions share in `ingestCommon.ts`;
- the schema defaults: `src/optics/prescription/defaults.ts`;
- the validator: `src/optics/prescription/validate/`.

The app reads only `schema: 2` files. V1 ingest is confined to the permanent converter behind
`src/optics/lensDataConversion.ts`; app ingest refuses V1 with its file path and the
`npm run convert:lens-data -- --input <file> --write` command.
[Reading V1 audits](#reading-v1-audits) maps each V1 field name, as audit logs
and analyses use them, to its V2 path.

## Quick Start

1. Copy `TEMPLATE.data.ts.template` to the `src/lens-data/` root as `YourLens.data.ts`.
2. Fill it in following this spec, section by section.
3. Optionally add `YourLens.analysis.md` for the description panel.
4. Run `npm run generate:metadata`. The organizer moves the root-level data/analysis pair into the derived maker
   folder and rewrites the type import.
5. Run `npm run typecheck && npm run test`. Auto-registration picks the file up: no imports or catalog edits.

File naming: `src/lens-data/**/*.data.ts` is the auto-discovery glob. Each file ends with
`satisfies LensDataV2Input` for compile-time checking, importing the type from `../types/lensDataV2.js` at the root
or `../../types/lensDataV2.js` in a maker folder. The root-first workflow is the least error-prone because the
template's import is right there. The organizer moves only a root-level `.data.ts` file and its same-stem
`.analysis.md`; create or move an `.audit.md` separately once the maker folder is known.

An archived V1 file (from an archive or an older branch) is converted before it is added:
`npm run convert:lens-data -- --input <file> --write`. Review the conversion report it prints.

Ordinary photographic lenses are front-to-rear sequential prescriptions. Mirror lenses and telescope-style reference
fixtures opt into the generalized optical-path model with `opticalPath` and per-surface `interaction` fields
([Folded Paths](#folded-paths)).

Per-lens patent audit logs use `*.audit.md` beside the data file. No build script, runtime catalog or test scanner
reads them. See [../../agent_docs/lens-patent-audit.md](../../agent_docs/lens-patent-audit.md) for the audit procedure
and log format.

## Scope: What to Include

**Include:**

- All glass elements (air-separated groups and cemented elements).
- All optical surfaces from the front lens element to the final image plane.
- The aperture stop (diaphragm).
- Variable air gaps for focus and zoom.
- Mirror or blocking surfaces that take part in a folded path.
- Annular clear apertures or central obstructions where they are optically meaningful.
- **Required drop-in / slip-in filters**: a plane plate the source prescription lists at the lens's own filter holder,
  ahead of the last lens surface or behind it, when the lens is computed with a filter in place (super-telephoto
  holders shipped with an NC or clear filter, a mirror lens's plug-in filter). It belongs to the lens: a
  teleconverter mounts behind it. Author it at the source position as two flat surfaces and a drawn
  `Plane-Parallel Plate` element with the source's physical gaps; never fold t/n into a neighbouring air gap. When the
  source gives no clear aperture, or only a ray-envelope "effective diameter" that would limit bundles the rest of the
  model passes, size the semi-diameter by ray trace (the largest height on the plate of any ray that reaches the image
  format or the diagram's off-axis field, at every focus and zoom end, plus 5%, rounded up to 0.5 mm) and log the
  estimate in the `*.audit.md` sidecar. Count it in `catalog.elementCount` only when the maker's published count
  includes it.

**Model through `rearPlates`, not as surfaces or elements:**

- **Camera-side plates** the source prescription lists behind the last lens surface: sensor cover glass and IR-cut /
  low-pass stacks, which sit a few millimetres ahead of the image and stay with the camera when the lens or a
  teleconverter changes. See [Rear Plates](#rear-plates). A drop-in filter in the lens's own holder is not one of
  these, even when it is the last glass in the prescription.

**Do not include:**

- **Optional front or mid-lens filters**: accessory UV, ND, polarizing or protection plates mounted ahead of or inside
  the lens, and any plate the source does not list (required drop-in filters are included; see above). A listed filter
  that the source itself calls optional, removable or free to sit elsewhere is also left out, as several fisheye
  patents do: keep its air-equivalent spacing (gap before + t/n + gap after) where it stood, so the published
  first-order values hold, and quote the source's wording in the file header and the `*.audit.md` sidecar.
- **Dummy / flare-cutter planes**: source-table bookkeeping surfaces that do not change medium and are not active
  blockers in the modeled path.
- **Mechanical components**: focus motors, aperture blades (mechanical detail), barrel, mounts.
- **Parent/donor designs**: if the lens descends from another design, transcribe only the final production or patent
  design shown, not intermediate parent elements.

For telescope and mirror-lens fixtures, include the optical surfaces that rays can hit, not the full mechanical tube.
A secondary baffle or obstruction that clips rays belongs in `surfaces`; a spider vane, cell, barrel or mount detail
does not.

Older files may fold a listed rear plate into the last air gap as the air-equivalent distance (gap before + t/n + gap
after). New work uses `rearPlates` with source-backed physical gaps and glass values. Where usable plate data is
missing or the path is unsupported, keep the documented omission and any source-backed spacing conversion; do not
invent plate parameters. An air-equivalent replacement preserves paraxial propagation, not higher-order or chromatic
behavior; see [`Omitted Sensor Optics`](../../agent_docs/architecture/optics-engine.md#omitted-sensor-optics).

## File Shape

A file is one object in a fixed order of groups. Each group serves one consumer: identity, catalog, source,
prescription (elements, media, surfaces), states (zoom, focus, gaps), aperture, the special-path groups, annotations,
then display (layout, rays, checks).

```ts
import type { LensDataV2Input } from "../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "…",
  maker: "…",
  name: "…",
  subtitle: "…",

  catalog: { … },
  source: { … },

  elements: [ … ],
  media: [ … ],
  surfaces: [ … ],

  zoom: { … },
  focus: { … },
  gaps: { … },
  aperture: { … },
  aberrationControl: { … },
  projection: { … },
  opticalPath: { … },
  perspectiveControl: { … },
  rearPlates: [ … ],

  groups: [ … ],
  doublets: [ … ],

  layout: { … },
  rays: { … },
  checks: { … },
} satisfies LensDataV2Input;

export default LENS_DATA;
```

- **Required:** `schema: 2`, `key`, `name`, `elements`, `surfaces`, `focus` (with `closeFocusM`), `aperture` (with
  `fStops`, and the design f-number on the aperture or on the zoom stations) and `layout` (with `yScFill`). `zoom`
  is present on a zoom lens alone.
- **Order:** write each record's members in the declaration order of `src/types/lensDataV2.ts`, which this spec and
  the template follow, and open each group with a blank line. `npm run convert:lens-data` writes that order.
- **Defaults** belong to the schema: a field with a default may be left out, and ingest fills it in and records that
  it did. Never spread an object of defaults into a file. The table is in
  [Layout, Rays and Checks](#layout-rays-and-checks).
- **Units:** `R`, `d`, `sd` and `innerSd` are millimetres, in optical notation. Every other dimensional field carries
  its unit in its name (`focalLengthMm`, `closeFocusM`, `thicknessMm`). F-numbers are spelled `fNumber`.
- **One fact, one place.** A value the engine reads is written once. A variable gap's thickness lives in `gaps`, not
  also on its surface; a per-station fact lives on its zoom station.

## Identity and Catalog

### Identity

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schema` | `2` | required | Required format discriminator; app ingest accepts only 2. |
| `key` | `string` | required | Unique identifier and catalog key, e.g. `"nokton-50f1"`. Lowercase `a-z`/`0-9` words separated by single hyphens, with no periods or other punctuation: the key becomes the `/lens/` URL and the `cfg` query value, so write f-numbers like `f14` or `f35-56`. |
| `maker` | `string \| null` | inferred | Canonical maker-page name (`"Nikon"`, `"Voigtländer"`), used for maker pages and SEO. Left out, it is inferred from `name` by prefix matching. `null` records an unconfirmed maker: the lens goes to the Unattributed category and the SEO manufacturer claim is omitted. |
| `name` | `string` | required | Display name, following the convention below. |
| `subtitle` | `string` | | Compact patent / example / design-correlation context. The UI header uses it when structured patent metadata is unavailable, and several corpus reports read it for source matching. |
| `visible` | `boolean` | `true` | `false` hides the lens from the catalog without removing its file. |
| `publishedAt` | `string` | Git-derived | Explicit UTC ISO timestamp (`YYYY-MM-DDTHH:mm:ssZ`) for a newly published replacement model. It overrides inherited file publication history in recent lenses, feeds and SEO; last-modified stays Git-derived but cannot precede publication. Omit for ordinary additions and routine corrections. |

### Display Name Convention

`name` is the user-facing lens title used in the lens picker, page headings, SEO metadata and generated catalog
views. Keep it normalized even when the product's official styling varies by source:

- Start with the public-facing manufacturer in all caps, e.g. `CANON`, `FUJIFILM`, `NIKON`, `CARL ZEISS` or
  `VOIGTLÄNDER`. Keep `maker` as the canonical maker-page value even when it is more specific than the display prefix.
- Put lens branding or optical line names after the manufacturer, also in all caps: `NIKON NIKKOR`,
  `FUJIFILM FUJINON`, `OLYMPUS M.ZUIKO`, `LEICA SUMMICRON`, `CARL ZEISS PLANAR`.
- Separate mount, system and series tokens from the focal length. Use `CANON RF 24-105mm`, `FUJIFILM FUJINON XF 23mm`,
  `NIKON NIKKOR Z DX 16-50mm`, not `RF24-105mm`, `XF23mm` or `ZDX16-50mm`.
- Write focal lengths as `<number>mm` or `<wide>-<tele>mm` with a plain hyphen, never an en dash, followed by a space
  and the aperture as `f/<number>`. Keep characteristics separated after the aperture, single suffix letters included:
  `f/2.8 L`, `f/1.4 G`, `f/2.8 D IF-ED`, `f/5.6 R LM OIS WR`.
- For fixed-lens cameras, put the camera body name, with its maker, in parentheses after the lens name and leave the
  camera name in normal product-title case, e.g. `FUJIFILM SUPER EBC FUJINON 60mm f/4 (Fujifilm GA645 Professional)`.

### Catalog (`catalog`)

Everything the catalog, header and index read about the product, as opposed to the prescription.

| Field | Type | Description |
| --- | --- | --- |
| `lensMounts` | `LensMountId[]` | Canonical mount ids for the production variants this optical formula represents. See [Mounts and image formats](#mounts-and-image-formats). |
| `imageFormat` | `ImageFormatId` | The one canonical image-circle / format id. Required with `perspectiveControl`. |
| `imageCircleMm` | `number` | Published circular image diameter in mm, independent of projection law. Positive and finite; it overrides the format diagonal for analysis-field bounds and the image-circle audit. It implies no projection law and certifies no reconstructed edge performance. |
| `specs` | `string[]` | Spec strings shown in the header. |
| `elementCount` | `number` | Physical glass elements in the design: the published count, even when `elements` holds an extra modelling entry (a shared-blank plug, a bonded thin medium). |
| `groupCount` | `number` | Air-separated groups. |
| `acceptsTeleconverters` | `boolean` | `true` when the lens takes dedicated rear teleconverters made for one of its `lensMounts`. Universal converters ignore it. See [TELECONVERTER_DATA_SPEC.md](TELECONVERTER_DATA_SPEC.md). |
| `opticalConfiguration` | `object` | Links complete prescriptions that are switchable optical states of one catalog lens. See below. |
| `focalLengthMm` | `{ marketing?, design? }` | Each a number for a prime or `[wide, tele]` for a zoom. `marketing` is the marketed focal length; `design` the source's stated design focal length at the file's scale, which may differ. A sequential rectilinear lens's traced EFL must lie within 0.8 to 1.25 times `design` (its first value on a zoom), or `buildLens()` refuses it ([Validation Rules](#validation-rules)). A folded system takes its EFL from `design` ([Folded Paths](#folded-paths)). |
| `fNumber` | `{ marketing?, design? }` | `marketing` is the marketed maximum f-number (`1.8` for an "f/1.8" lens), shown beside the wide-open readout when it differs from the design value. `design` is the source's stated design maximum f-number (`1.85`). |

`catalog.fNumber.design` and the f-number the stop opens to must agree: the design f-number on the aperture (or the
first station's) may not be faster than `catalog.fNumber.design` by more than 0.5%. A corpus sweep enforces this
(`__tests__/src/lens-data/patentMetadata.test.ts`), except for the lenses on its shrink-only list
`NOMINAL_FASTER_THAN_DESIGN`, each queued in `agent_docs/sd-audit-queue.md` Section H.

#### Mounts and image formats

Use canonical ids from `src/utils/catalog/lensTaxonomy.ts`; do not free-type labels such as `"Full Frame"` or
`"Nikon Z mount"`. [LENS_MOUNT_FORMAT_OPTIONS.md](LENS_MOUNT_FORMAT_OPTIONS.md) lists the allowed ids. They drive
lens-index filtering, catalog grouping and image-field-aware analysis.

```ts
catalog: {
  lensMounts: ["nikon-z", "sony-fe"],
  imageFormat: "135-full-frame",
},
```

- `lensMounts`, when present, is a non-empty list of unique known ids.
- `imageFormat`, when present, is one known id.
- A lens may have several mounts, but one image format.
- Fixed-lens cameras use `lensMounts: ["fixed-lens-camera"]` plus the appropriate `imageFormat`.

Source these fields from official specs, patent examples or documented production variants. Leave uncertain metadata
unset and record the question in `agent_docs/lens-mount-format-backfill.md`.

#### Alternate optical configurations

Use `catalog.opticalConfiguration` when one catalog lens has several complete prescriptions a viewer switches
between, such as an integrated teleconverter, a removable optical module or another reconfigurable optical path:

```ts
catalog: {
  opticalConfiguration: { groupKey: "stable-family-identifier", label: "TC OUT", order: 0 },
},
```

- Every member uses the same non-empty `groupKey`, a compact non-empty `label` and a unique non-negative integer
  `order`. The viewer derives the toggle from these records; lenses that leave the field out are unchanged.
- Author each member as a complete, independently valid prescription. Do not store only a surface delta or combine
  numerical groups from different patent examples unless the source defines that combination.
- Keep exactly one member catalog-visible. Set `visible: false` on alternate data-only members so they do not appear as
  separate lenses, patents, debug fixtures or index/SEO entries. The visible member stays the canonical single-lens
  page and supplies the shared analysis prose; hidden members may appear as noindex compare-route identities so two
  configurations can be selected independently.
- Record material source differences between configurations in each file's header and `subtitle`. A shared
  `groupKey` states a UI relationship, not that the source publishes a matched before/after pair.
- This is for converters built into one lens. A detachable teleconverter is its own `*.teleconverter.ts` entity that
  the viewer composes onto any compatible host; never author a host + converter copy as a hidden configuration member.
  See [TELECONVERTER_DATA_SPEC.md](TELECONVERTER_DATA_SPEC.md).

## Source and Errata

### Patent metadata (`source`)

| Field | Type | Description |
| --- | --- | --- |
| `patentNumber` | `string` | The publication or grant transcribed, with jurisdiction and kind code when the source prints them, e.g. `"US 10,571,651 B2"`. No example, embodiment, table or figure label. |
| `patentYear` | `number` | Year the publication or grant named by `patentNumber` was published or granted. |
| `authors` | `string[]` | Inventors named by the source, in source order, one complete personal name per entry. `[]` means the source names no individual inventor. |
| `assignees` | `string[]` | Organizational assignees, or organizational applicants where the jurisdiction publishes applicants. One canonical display name per historical legal entity. `[]` means no organizational attribution is supported. |
| `errata` | `SourceErratum[]` | See [Source errata](#source-errata-sourceerrata). |

Patent-backed lens files declare `patentNumber`, `authors` and `assignees` together. Synthetic, reference or
independently measured prescriptions with no patent source leave all three out. These structured fields supplement
`subtitle`: keep worked-example and design-correlation prose in `subtitle`, not in `patentNumber`. The UI displays
`patentNumber` followed by the names in `authors`; it uses `subtitle` only when the structured fields are unavailable.

```ts
source: {
  patentNumber: "US 10,571,651 B2",
  patentYear: 2020,
  authors: ["Hideki Sakai"],
  assignees: ["Canon Inc."],
},
```

- Record the exact publication or grant used to transcribe the prescription, rather than silently substituting a
  related US, EP, WO or national-family publication. Keep its jurisdiction prefix and kind code when the source prints
  one.
- Separate the jurisdiction and kind code from the number with spaces (`"CN 103823292 B"`). Keep native serial
  punctuation and Japanese era notation. The shared link parser also accepts compact identifiers pasted from sources.
- `authors` holds inventors only. Keep the source order and put each person in a separate entry; never collapse
  further inventors into `"et al."`. Normalize Latin-script display names to `Given Middle Family` order with
  conventional capitalization, reliable diacritics, and no honorifics, credentials, locations or source-database
  artifacts. Use one canonical spelling and romanization for the same person across the corpus, even when family
  publications vary in capitalization or name order. Prefer the published Latin-script form when the patent or an
  official family front page provides one; otherwise establish a reliable romanization from source evidence.
  Author names must use Latin script. Use `authors: []` when a historical or corporate application names only the
  applicant and no individual inventor; do not substitute a later secondary attribution.
- Both party lists require unique, non-empty, trimmed entries, explicit names (no `"et al."`), NFKC-normalized
  Unicode and no parenthetical source annotations.
- `assignees` records ownership at the source publication or grant. For WO, JP, CN and other documents that label the
  party as an applicant rather than an assignee, record the applicant here. Normalize capitalization, punctuation,
  reliable diacritics and corporate suffixes to the entity's conventional official form, and use the same display
  name for that entity across the corpus. Omit locations, translated-name duplicates and source-database artifacts.
  Keep distinct historical legal entities, subsidiaries and reorganized companies apart rather than merging them into
  the current product maker or a modern successor.
- If the selected front page omits an organization, `assignees` may use assignment history for the **same
  application**, provided the assignment predates the selected publication. Document the source URL, assignment dates
  and front-page omission in the analysis/audit, and explain the evidence in a data comment. Do not infer ownership
  from the lens maker, a database's current-owner field or an undated family association.
- `assignees` lists organizations only. When the source names a person as applicant or patent holder, including
  inventor-applicant publications, keep the person in `authors`; use `assignees: []` unless documented
  same-application assignment evidence identifies an organization.
- Empty lists are source statements, not placeholders for unfinished research: `authors: []` only when the source names
  no individual inventor, and `assignees: []` when neither the source nor documented assignment evidence identifies an
  organizational assignee or applicant.
- Do not add filing dates, priority numbers, attorneys, agents, examiners, translators or current patent owners.
- Build metadata generation checks curated historical assignee aliases and legal-form start years derived from the
  corporate-history registry's successor dates, plus a short list of curated overrides. These checks flag impossible
  or non-canonical values for source review; they never infer or rewrite an assignee.

### Source errata (`source.errata`)

A source can contradict itself: a printed coefficient whose sign disagrees with the patent's own field angle,
distortion and aberration plots, or a table whose focal length differs from the stated one. `source.errata` records
both cases in a form the validator checks and the MTF tab discloses. The evidence standard for a correction is in
`agent_docs/lens-patent-audit.md`.

```ts
source: {
  // …
  errata: [
    {
      status: "corrected",
      surface: "27A", // surface label
      field: "A10", // an asphere term, or R, d or nd
      printed: -1.29299e-13, // as the source prints it
      applied: 1.29299e-13, // the value this file carries
      evidence: ["source-summary", "sibling-example", "aberration-figure"],
      note: "Printed sign gives 2ω 23.08° against the stated 24.06°; Example 2 carries the positive sign.",
    },
    { status: "unresolved", note: "Table traces to f = 82.22 mm; the summary states 83.00 mm." },
  ],
},
```

- `corrected`: the file must carry `applied` at `surface` / `field`, and `evidence` must cite at least two of
  `source-summary` (stated f, F-number, field angle, back focus, total length), `sibling-example` (another example of
  the same source), `aberration-figure` (the source's own aberration plots), `claims` and `family-publication` (another
  publication of the same application prints the applied value). A manufacturer chart, a measured lens or "the trace
  looks better" is never evidence.
- `field` names an asphere term (`K`, `A4`, …), `R`, `d` or `nd`. `nd` is the index of the medium the surface opens
  into; `d` on a gap surface is the gap's first thickness.
- `unresolved`: the source disagrees with itself and the cause is not isolated. Keep the printed values and state the
  contradiction in `note`.
- Every entry has a non-empty `note`. Explain each erratum in the file header and the `*.audit.md` sidecar as well.

## Elements and Media

### Elements (`elements`)

Each entry describes one physical glass or mirror element. Ordinary lenses list elements front to rear; folded models
document their stable model order.

```ts
{
  id: 1, // REQUIRED: unique positive integer, named by surfaces' medium
  name: "L1", // REQUIRED: short name
  label: "Element 1", // REQUIRED: display label
  type: "Biconvex Positive", // REQUIRED: optical shape/type description
  nd: 1.90525, // REQUIRED: index at indexReference (d-line by default)
  vd: 35.04, // recommended: Abbe number at indexReference
  indexReference: "d", // optional: "d" (default) or "e" for retained patent ne / νe values
  focalLengthMm: 119.3, // recommended: element focal length, shown in the inspector
  glass: "S-LAH58 (OHARA)", // recommended: catalog glass; see Glass Identification
  apd: false, // optional: false (default) | "patent" | "inferred"
  apdNote: "dPgF = +0.0376", // optional: prose
  role: "Front positive meniscus…", // optional: optical role
  diagramLabel: "L11", // optional: source identifier drawn below the element
  cemented: "D1", // optional: cemented group name
  dPgF: 0.0376, // optional: partial-dispersion deviation from the normal line; drives APO behavior
  nC: 1.89822, // optional: measured index at C (656.3 nm), when published
  nF: 1.92131, // optional: measured index at F (486.1 nm), when published
  ng: 1.93525, // optional: measured index at g (435.8 nm), when published
  span: ["3", "4"], // optional: drawn span; see below
}
```

- `id` is a positive integer, unique across elements; 0 would read as air in a V1 view. Every element is the medium of
  at least one surface.
- `maxSdRatio` optionally overrides the 3:1 front/rear clear-aperture ratio sanity limit for one element. Use it only
  with cited source dimensions in the data comment and analysis; it does not relax the rim-slope or edge-thickness
  checks. Never shrink a source-backed aperture just to satisfy this heuristic.
- `diagramLabel` is for a source that identifies physical elements differently from the runtime sequence, e.g. `L11`
  through `L213`, `L5a` / `L5b`, or a primed `1′`. Left out, the diagram shows the element's `id`. Keep it short
  enough for the cross-section; dense groups are packed into two rows.
- **Drawn span.** Without `span`, an element is drawn from the first surface whose `medium` is that element to the
  surface after it. Write `span: [from, to]` (two surface labels, in order) where that is not the element's outline:
  an element around an embedded stop, and the folded-mirror shapes in [Folded Paths](#folded-paths). Ordinary
  refractive elements never need one.

**Common `type` values:** `"Biconvex Positive"`, `"Biconcave Negative"`, `"Positive Meniscus"`,
`"Negative Meniscus"`, `"Pos. Meniscus (1× Asph)"`, `"Neg. Meniscus (2× Asph)"`, `"Plano-Convex"`,
`"Plano-Concave"`.

**Spectral data (chromatic modeling).** Store `nC`, `nF`, `ng` and `dPgF` directly on the element; there is no
`spectral` wrapper. The chromatic trace uses data in this order of preference: air → complete explicit
`nC`/`nF`/`ng` → catalog Sellmeier resolved from a coordinate-compatible `glass` name → partial explicit `nC`/`nF` →
`dPgF`-corrected Abbe → plain Abbe (`nd` + `vd`), then a constant index when `vd` is unavailable. Each level falls back
to the next. For apochromatic designs where the source publishes partial dispersion or line indices, transcribe them.

**Index reference.** `indexReference` says what `nd` / `vd` hold. Leave it out (or write `"d"`) for ordinary d-line
data. Use `"e"` only when the stored values keep a source's native `ne` / `νe` coordinates. Native e-line elements can
use catalog Sellmeier data only when an explicit glass name or alias reproduces their `ne` / `νe` pair at C′/e/F′.
Six-digit catalog codes are d-line only because they encode `nd` / `νd`. Do not mark an element merely because the
source also publishes an e-line anchor, or when the file already converted the source values to d-line coordinates.
E-line color channels are traced at C′/e/F′/g on every dispersion tier, so naming only some of a lens's e-line glasses
is safe; do not add d-line `nC` / `nF` to an e-line element. Writing `indexReference: "d"` or `apd: false` explicitly
records that the author checked; both may also be left out.

For a historical source whose spectral line is unspecified, keep an explicit `Unmatched (...)` glass disposition and
add `indexReferenceNote` explaining the uncertainty and the approximate tracing reference. The inspector then labels
the values `n (source)` / `ν (source)` instead of asserting d/e identity. The note does not change the tracing
convention or enable catalog resolution.

### Bulk absorption (`absorptionCoefficientPerMm`)

Use `absorptionCoefficientPerMm` on an element only when the source publishes a bulk Beer-Lambert intensity
coefficient for an absorbing element. It is α in `I / I0 = exp(-α · distance)`, in inverse millimetres. Exact tracing
measures the three-dimensional path length through the element: the element must be the medium the absorbing segment
is traced in, so it owns the surface immediately before that segment. Cemented compensators stay separate elements and
do not repeat the coefficient unless the source says they also absorb.

Every exact ray result carries its accumulated intensity as `transmission` (1 for transparent prescriptions). The
consumers keep geometric and photometric quantities apart:

- Bokeh point weights multiply the equal-area pupil-sample weight by the traced transmission. The mechanical pupil
  footprint and its centroid keep the unattenuated equal-area weights, so radial absorption cannot pose as pupil shift
  or clipping.
- The bokeh best-focus plane minimizes the transmission-weighted ray error. If all traced energy underflows to zero,
  the result is empty rather than `NaN`.
- Vignetting reports surviving-ray fraction as geometric transmission. Relative illumination uses the summed surviving
  intensity, applies the `cos⁴` factor and normalizes to the on-axis value.

The coefficient is a broadband **intensity** scalar: not an amplitude coefficient, and it models no wavelength-dependent
absorption, Fresnel or coating loss, scatter, diffraction or flare. Do not derive it from a T-number, a coating loss or
an unspecified ND description. The validator requires a finite non-negative number. Folded and generalized optical
paths refuse authored absorption, because repeated or reverse encounters need incident-side medium accounting. A new
absorbing prescription gets a focused public-trace regression (an axial ray against `exp(-α · axialThickness)`, one
oblique ray against its hit-to-hit distance, and unit transmission without the coefficient);
`__tests__/src/optics/bulkAbsorption.test.ts` and the Minolta STF 135mm are the reference.

### Media (`media`)

A medium is an index-bearing layer that belongs to no drawn element: a cement layer listed with its own index, or
water ahead of the lens.

```ts
media: [{ id: "cement", name: "Cement layer", nd: 1.56732 }],
```

- `id` is a non-empty string, so it cannot collide with an element id; `name` is optional; `nd` is the index. A
  medium carries no other field: the engine traces no dispersion or absorption in an undrawn medium.
- Every medium is used by a surface, has an index other than air's, and does not repeat another medium's index.

## Surfaces

Each entry in `surfaces` is one optical surface. Ordinary refractive lenses use physical front-to-rear axial order.
Folded systems may use a stable physical/model order or the source's transmission order: signed `d` values set the
axial stations, and `opticalPath` sets the ray-hit order. Document any departure from front-to-rear order in the file
header and the companion analysis.

```ts
{
  label: "3A", // REQUIRED: unique label
  R: 50.421, // REQUIRED: radius of curvature in mm, or "flat"
  d: 3.46, // axial step to the next surface in mm; left out on a variable gap
  sd: 14.5, // clear semi-diameter in mm; left out on a stop whose radius is not authored
  innerSd: 4.0, // optional: inner semi-diameter of an annular active aperture
  medium: 2, // the medium AFTER this surface: an element id, a media id, or left out for air
  asphere: { K: -0.62, A4: 1.2e-5 }, // optional: sparse aspheric terms
  interaction: { type: "reflect" }, // optional: folded-path behavior
  stopPlacement: "inside-element", // optional: only on a stop inside glass
}
```

### Geometry and sign conventions

| Value | Meaning |
| --- | --- |
| `R > 0` | Center of curvature to the right. |
| `R < 0` | Center of curvature to the left. |
| `R: "flat"` | A flat surface. Ingest also reads a number past `1e10` as flat and keeps the number as provenance; new files write `"flat"`. |
| `d` | Axial displacement to the next listed surface. Non-negative for ordinary sequential lenses; folded models may use negative values for a return toward object space and `0` for coincident or passive planes. |
| `sd` | Clear semi-diameter: a hard clip. A ray beyond it is clipped, with no margin. |
| `medium` left out | Air after the surface. |
| `medium: <element id>` | That element's glass after the surface. |
| `medium: "<media id>"` | That undrawn medium after the surface. |
| `innerSd` | Inner inactive radius for annular surfaces; non-negative and smaller than `sd`. |

A surface on a variable gap leaves `d` out: the gap's first thickness supplies it, and writing both is refused even
when they agree. Every other surface writes `d`.

**The last surface:** for an ordinary sequential lens its `d` (or its gap) is the back focal distance to the image
plane, or the physical gap to the first plate when `rearPlates` is present. Folded systems declare
`opticalPath.imagePlane`; their last `d` need not be a conventional back focus.

### Labels

- Sequential numbers: `"1"`, `"2"`, `"3"`, …; append `"A"` for aspherical surfaces: `"1A"`, `"3A"`, `"18A"`.
- The aperture stop is labelled `"STO"`, and there is exactly one.
- Mirror fixtures may use descriptive labels such as `"M1"`, `"SEC"`, `"MG1"` or `"OBS"` where they make an explicit
  `surfaceOrder` easier to read.
- Labels are unique strings. Reserved: `RP<n>a` / `RP<n>b` (generated rear plates), the `TC` prefix (composed
  teleconverters) and `IMG`.

### Media and element runs

`medium` names what light travels in after the surface, so an element is the run of surfaces that open into it:

- **Element entry:** the surface where light enters the glass: `medium: <element id>`.
- **Element exit to air:** `medium` left out.
- **Cemented interface:** the junction opens into the next element, so it carries the next element's id; there is no
  air surface between them. A cemented triplet continues the pattern:

  ```ts
  { label: "3", R: …, d: …, sd: …, medium: 2 }, // L2 front
  { label: "4", R: …, d: …, sd: …, medium: 3 }, // L2 → L3 junction
  { label: "5", R: …, d: …, sd: …, medium: 4 }, // L3 → L4 junction
  { label: "6", R: …, d: …, sd: … }, // L4 rear → air
  ```

- **Hybrid composite (glass + resin):** a glass body with a thin aspherical resin layer bonded to one surface is
  treated as a cemented doublet: the body and the resin layer are separate elements with a junction surface, and both
  carry the same `cemented` name (`"H1"`). The resin layer is very thin (typically 0.1–0.2 mm at the center), so the
  edge-thickness check may pass only where the aspherical departure at the rim compensates for the curvature mismatch
  between the junction and the outer surface.

  ```ts
  { label: "9", R: "flat", d: 6.55, sd: …, medium: 5 }, // glass front
  { label: "10", R: -17.503, d: 0.14, sd: …, medium: 6 }, // glass → resin junction
  { label: "11A", R: -16.276, d: …, sd: …, asphere: { … } }, // resin rear (asph) → air
  ```

- **Embedded stop inside glass:** see [Stop and Aperture](#stop-and-aperture).
- **Mirrors, backing planes, blockers and annular elements:** see [Folded Paths](#folded-paths).

### Aspheres (`asphere`)

An aspherical surface carries its terms on the surface, sparsely: a term left out is zero.

```ts
{ label: "3A", R: 50.421, d: 3.46, sd: 14.5, medium: 2, asphere: { K: -0.62, A4: -1.6435e-6, A6: 7.0442e-10 } },
```

Sag equation, with `h` the radial height (`h ≥ 0`):

```text
Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + Σ Aₙ·hⁿ,   n = 3…20
```

- Terms are `K` and `A3`–`A20`, odd and even. Write every term the source prints as non-zero. A zero may be written as
  an explicit `0` where an audit relies on it; it changes no sum. Since `h ≥ 0`, odd powers stay rotationally
  symmetric; they imply no decentered or anamorphic surface.
- `asphere: {}` is an aspherical surface whose terms are all zero; an all-spherical surface leaves `asphere` out.
- **Conic constant:** `K = 0` sphere; `−1 < K < 0` prolate ellipsoid; `K = −1` paraboloid; `K < −1` hyperboloid;
  `K > 0` oblate ellipsoid. For `K > 0` the sag has a real limit at `h = |R| / √(1+K)`, and the validator requires
  `sd ≤ 0.98 × |R| / √(1+K)`.
- **Patent conic conversion:** some patents (notably Fujifilm) write the conic denominator as √(1 − KA·(h/R)²),
  without the (1+K) factor. Convert with `K = KA − 1` before entering the file (`KA = 1` → `K = 0`, a spherical base).
- **Scaling:** for a uniformly scaled prescription, rescale each term as `Aₙ(scaled) = Aₙ(patent) / s^(n−1)`; `K` is
  unchanged (see [Data Sourcing Checklist](#data-sourcing-checklist), item 9).

**Replacing an even-order refit with exact patent coefficients.** A file that predates odd-order support (July 2026)
may still hold a least-squares even-order refit of an odd-term patent surface. To replace one:

1. Transcribe the full coefficient table for the exact example: from the `*.analysis.md` if it kept it, else from the
   patent. Never backfill from a "leading coefficients" summary.
2. Convert the conic (`K = KA − 1`) and apply any scale factor as above.
3. Replace the refit terms with the source's, odd ones included.
4. Update the data-file header note and remove any "renderer is even-order only" / refit statements from the analysis,
   keeping the patent tables there as the canonical source.
5. Recompute every rim departure the analysis quotes with `npm run audit:surface -- <file> --scan <label> <sd>`, record
   the values in the analysis prose and the `*.audit.md` log, then run `npm run typecheck && npm run test`. The catalog
   validation and render-diagnostics sweeps cover the new coefficients; do not add a per-lens test.
6. Visually check the lens page: cross-section, wide-open rays and the aspheric-compare overlay.

### Diffractive phase surfaces (`diffractive`)

Use `diffractive` when a patent supplies a rotationally symmetric optical-path/phase polynomial for a Nikon PF, Canon
DO or equivalent kinoform surface. This is surface-interaction data, not geometric sag: it changes ray direction and
first-order power but not the surface outline, normal, edge thickness or rim-slope checks.

```ts
{
  label: "8",
  R: 159.3794,
  d: 0.3,
  sd: 35.5,
  medium: 9,
  diffractive: {
    kind: "radial-polynomial",
    referenceWavelengthNm: 587.6,
    diffractionOrder: 1,
    terms: [
      { radialPower: 2, coefficient: -4.25304e-5 },
      { radialPower: 4, coefficient: 3e-10 },
    ],
  },
}
```

The coefficient convention is `W(h) = Σ Cp h^p` in millimetres, with radial height `h` in millimetres and `Cp` in
`mm^(1-p)`. The engine applies `diffractionOrder × wavelength/referenceWavelengthNm × dW/dh` as a tangential
optical-momentum kick, so the paraxial quadratic power is
`phiD = -2 × C2 × diffractionOrder × wavelength/referenceWavelengthNm`. Keep coefficients, wavelength and order exactly
as published; do not convert them to aspheric terms or fold diffractive power into a glass index.

- `kind` is exactly `"radial-polynomial"`.
- `referenceWavelengthNm` is finite and in `[100, 2000]`.
- `diffractionOrder` is a non-zero integer in `[-16, 16]`.
- `terms` holds 1–16 non-zero finite coefficients with unique, strictly increasing integer `radialPower` values in
  `[2, 32]`. Leave zero-valued terms out.
- Phase data sits on refracting surfaces only; do not combine it with `reflect` or `block`.
- The data models the design order geometrically. It does not model blaze efficiency, phase wrapping, energy split into
  other orders, diffraction-limited MTF/PSF, coatings, scatter or flare.
- Bonded PF/DO stacks may need extra `elements` entries for optically distinct thin media. Keep the published physical
  count in `catalog.elementCount`, and document the modelling entries in the header and the analysis.
- If the prescription is scaled by a linear factor `s`, scale a term of radial power `p` as `Cp/s^(p-1)`; wavelength
  and diffraction order do not scale.

### Interactions and annuli

Surfaces refract by default. `interaction` and `innerSd` are for mirrors, blockers, side-specific behavior, tilted
planes and annular apertures; they are described with the folded-path model in [Folded Paths](#folded-paths). Leave
them off ordinary refractive lenses.

## Stop and Aperture

### The stop

Exactly one surface is labelled `"STO"`. It is normally flat (`R: "flat"`) in an air gap (no `medium`).

**Stop radius.** Each lens has one authority for its stop radius: the first row of this table that applies
(`stopRadiusAuthority` in `canonical.ts`).

| Order | Authority | When | Where it is written |
| --- | --- | --- | --- |
| 1 | Authored | A folded system: one with `opticalPath`, or with a surface that reflects or blocks. | `sd` on the `STO` surface |
| 2 | Published schedule | A zoom whose source prints the stop diameter at each station. | `zoom.stations[i].stopSemiDiameter` on every station |
| 3 | Authored | A stop inside an element (`stopPlacement: "inside-element"`). | `sd` on the `STO` surface |
| 4 | Derived | Every other lens. The radius is the height at the stop of a real marginal ray launched at the entrance-pupil radius the design f-number implies, traced per zoom station. | `aperture.nominalFNumber`, or `zoom.stations[i].nominalFNumber` |

- A stop whose radius is not authored leaves `sd` out; ingest refuses an `sd` there, because the engine would never
  read it. An authored stop requires one. A scheduled zoom's stop inside glass is therefore written without `sd`.
- **A prime never takes its radius from a published diameter:** an ordinary prime derives it from its design f-number,
  and a folded or inside-glass prime authors it. For an ordinary prime, a published stop diameter that agrees with the
  f-number is recorded in a comment. One that disagrees beyond rounding is a source-consistency question under the
  source-errata standard (`agent_docs/lens-patent-audit.md`), not settled by letting the diameter override the
  f-number.
- The entrance pupil comes from the design f-number for every lens; the stop radius above is what the traced
  geometry needs to give it.

**Stop position:**

- **The source specifies the stop:** use the exact surface or gap from the table.
- **The source does not (common in older patents):** estimate from the patent figure. Split the air gap at the
  inferred iris location: the preceding surface's `d` is the distance to the stop, and the stop's `d` the rest of the
  gap. Document the estimate in a comment ("STO position inferred from Fig. 1 iris placement").
- **The source puts the stop inside a glass element:** set `stopPlacement: "inside-element"` on `STO`, keep the stop
  flat, give it the containing element as its `medium` (the glass continues past the stop), give it its authored
  `sd` unless a published schedule decides the radius (row 2 above), and give the containing element
  `span: [front, rear]` over its real outer surfaces so the outline is drawn around the stop. Do not use the flag for
  an ordinary air stop.
- **Annular or obstructed stop:** use `innerSd` only when the stop itself has a real central hole. For a separate
  secondary obstruction, prefer a distinct `block` surface, so ray clipping and sampling can identify the obstruction
  on its own.

### Aperture (`aperture`)

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `nominalFNumber` | `number` | | The f-number the stop opens to: the source's design value, never the faster marketed number (that is `catalog.fNumber.marketing`). A prime or a constant-aperture zoom writes it here; a variable-aperture zoom writes one per station instead (`zoom.stations[i].nominalFNumber`). Exactly one of the two. |
| `fStops` | `number[]` | required | F-stop values for the quick-select buttons. |
| `maxFNumber` | `number` | `16` | Largest f-number on the aperture slider. |
| `step` | `number` | `0.004` | Aperture slider step. |
| `blades` | `number` | | Number of aperture blades (reserved for polygonal bokeh). |
| `bladeRoundedness` | `number` | | Blade roundedness 0–1 (reserved; 0 straight polygon, 1 circular). |

Semi-diameters are physical clear radii: a ray beyond one is clipped, with no margin. When a station's stated beam
does not fit through a rim, the lens traces slower than its label there; `npm run audit:aperture` lists those stations
(`agent_docs/sd-audit-queue.md`, Section I). Do not enlarge a rim to pass the beam.

### Zoom apertures

A zoom's wide-open iris follows the zoom. Under the default `zoom.apertureModel: "from-nominal-fno"`, at every zoom
station the builder traces the entrance-pupil radius the station's design f-number names (the aperture's single value
applies to every station) to the stop and keeps that radius, so each station traces at its stated f-number. Radii
between stations are interpolated, and focus keeps the current zoom radius. These radii are calculated, not read from
the source.

- **`zoom.apertureModel: "fixed-iris"`** keeps the first station's radius at every station. Declare it only when the
  source states that the stop diameter does not change with zoom, or when the file's own stop model is one iris radius
  whose traced f-numbers are what the stations state. The station f-numbers then label the readout without sizing the
  iris, so they must be the ones that radius gives: a corpus sweep
  (`__tests__/src/lens-data/zoomApertureModel.test.ts`) fails when a station's traced radius differs from the fixed one
  by more than 3%, except for the files on its shrink-only list `FIXED_IRIS_OFF_STATED`.
- **A published schedule** (`zoom.stations[i].stopSemiDiameter` on every station) supplies the physical iris radii
  instead: positive and finite, the first being the baseline iris, intermediate radii interpolated, and focus keeping
  the current zoom iris. Do not combine a schedule with `apertureModel`.
- **A variable-aperture zoom** (e.g. f/4.5–5.6) states `nominalFNumber` on every station and none on `aperture`. The
  aperture slider clamps to the zoom-dependent wide-open f-number, so f/8 stays at f/8 while zooming, and quick-select
  buttons faster than the current wide-open value are hidden. A constant-aperture zoom keeps one value on `aperture`.
- A stop inside drawn glass (`stopPlacement: "inside-element"`) keeps its authored radius at every station, unless the
  zoom publishes a schedule, which comes first ([Stop and Aperture](#stop-and-aperture)).

## States

A lens's states are its zoom stations, its focus keyframes and, optionally, an aberration-control setting. Every
variable gap holds one thickness per zoom station and focus keyframe; between authored states thicknesses are
interpolated piecewise-linearly.

### Zoom (`zoom`)

Present on a zoom lens only; a lens without it is a prime.

```ts
zoom: {
  stations: [
    { focalLengthMm: 24.726, nominalFNumber: 4.08, label: "Wide" },
    { focalLengthMm: 34.711, nominalFNumber: 5.115 },
    { focalLengthMm: 48.503, nominalFNumber: 6.337, label: "Tele" },
  ],
  step: 0.004,
},
```

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `stations` | `ZoomStationV2Input[]` | required | Two or more stations, monotonically increasing in `focalLengthMm`. |
| `apertureModel` | `"from-nominal-fno" \| "fixed-iris"` | `"from-nominal-fno"` | See [Zoom apertures](#zoom-apertures). |
| `step` | `number` | `0.004` | Zoom slider step. |

Each station:

| Field | Type | Description |
| --- | --- | --- |
| `focalLengthMm` | `number` | Required. The station's focal length in mm. |
| `nominalFNumber` | `number` | The design f-number at this station, on a variable-aperture zoom. On every station or on none. |
| `stopSemiDiameter` | `number` | Published physical stop semi-diameter in mm. On every station or on none. |
| `closeFocusM` | `number` | Object-to-image close distance in metres at this station, overriding `focus.closeFocusM`. On every station or on none. |
| `label` | `string` | Station label: on every station, or on the first and last alone. |
| `published` | `boolean` | Whether the source tabulates this station's infinity row. Default `true`. |
| `publishedFocus` | `number[]` | Focus keyframe indices (≥ 1) the source tabulates at this station, beyond infinity. Default `[]`. |

- Stations are interpolation control points, not discrete stops. The zoom slider is continuous: between two stations
  the spacings are interpolated linearly, so the slider moves smoothly through every intermediate focal length. Station
  i of n sits at `zoomT = i/(n−1)`.
- **Reversing groups:** a group that moves forward and then back (`[2.0, 5.0, 3.0]` across three stations) is handled
  by the piecewise-linear interpolation. Include enough stations to bracket every reversal; standard zoom patents give
  3–5, which is enough.
- **Station `closeFocusM`** keeps zoom-dependent near-focus conjugates where a source publishes different object
  distances at its zoom stations (for example states at about constant magnification). Distances between stations
  interpolate in the same zoom coordinate; labels at intermediate focus use inverse-distance interpolation and stay
  estimates. Source-derived endpoints are identified as calculated in the analysis. Single-lens labels, breathing,
  the summary, effective-f-number estimates and comparison focus mapping use the current zoom endpoint.
- **Station labels** are compiled into the runtime lens (`L.zoomLabels`). Nothing displays them today; the zoom
  slider shows the station focal lengths.
- **Computed by `buildLens`**, per station: the EFL (`zoomEFLs`), entrance-pupil semi-diameter (`zoomEPs`),
  vignetting-limited and trace-safe half-fields (`zoomHalfFields`, `zoomTracingHalfFields`), the wide-open f-number
  (`zoomFOPENs`) and the pupil geometry (`zoomEpZRelStops`, `zoomXpZRelLastSurfs`, `zoomXpSDs`).

### Focus (`focus`)

```ts
focus: {
  closeFocusM: 0.45,
  keyframes: [0, 0.72, 1],
  description: "Internal focus via G3, which moves toward the image.",
},
```

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `closeFocusM` | `number` | required | Minimum focus distance in metres, object to image. |
| `keyframes` | `number[]` | `[0, 1]` | Normalized focus coordinate of each authored thickness: `0` is infinity, `1` is `closeFocusM`. At least two, beginning at `0`, ending at `1`, strictly increasing. |
| `step` | `number` | `0.004` | Focus slider step. |
| `description` | `string` | | The focus mechanism, shown in the UI. |
| `conjugates` | `ConjugateV2Input[]` | | Source-certified finite conjugates; see below. |
| `published` | `number[]` | `[]` | On a prime: the focus keyframe indices (≥ 1) the source tabulates beyond infinity. A zoom's stations carry theirs. |

- When a published object-to-image distance is available, its keyframe coordinate is `closeFocusM / distanceM`.
  Values between keyframes are interpolated piecewise-linearly and are not source-published mechanical positions.
- For a prime or zoom with three or more published focus states, add the keyframes and keep every published spacing
  row. This supports non-linear and reversing focus travel without changing the zoom or aberration-control axes.

| Gaps that vary with focus | Focus type |
| --- | --- |
| 1 | Unit focus: the whole lens moves; only the back focus changes. |
| 2 | Inner focus: an internal group moves, so two gaps change. |
| 3+ | Floating focus: several groups move independently. |

### Gaps (`gaps`)

Each air gap that changes with focus or zoom is one entry, keyed by the label of the surface it follows. That surface
leaves `d` out; the gap's first thickness (first station, infinity focus) supplies it.

```ts
gaps: {
  "10": { label: "D10", values: [[5.49, 5.89]] }, // prime: one row, one thickness per focus keyframe
  "19A": { label: "BF", values: [[15.0, 20.53]] }, // "BF" is the conventional label of the last gap
},
```

```ts
gaps: {
  "5": { label: "D5", values: [[2.0, 2.0], [5.0, 5.0], [3.5, 3.5]] }, // zoom only: the same at every keyframe
  "10": { label: "D10", values: [[8.0, 6.5], [5.0, 3.2], [6.5, 5.0]] }, // zoom and focus
},
```

- `values` is always `[zoomStation][focusKeyframe]`: one row per zoom station (one row on a prime), each row one
  thickness per `focus.keyframes` entry (two with the default keyframes).
- Every thickness is finite and non-negative. Keys name existing surfaces.
- `label` is the gap's display label.
- A gap that changes only with zoom repeats its thickness at every keyframe; document in the header which gaps move
  with zoom only and which with focus too.

### Finite conjugates (`focus.conjugates`)

A conjugate certifies one authored state for finite-distance MTF:

```ts
focus: {
  closeFocusM: 0.7,
  conjugates: [
    {
      zoomStation: 0,
      keyframe: 1,
      objectDistanceMm: 700,
      distanceReference: "image-plane",
      source: "Patent publication, example and tables identifying this finite configuration",
    },
  ],
},
```

- `zoomStation` indexes `zoom.stations` (0 on a prime); `keyframe` indexes `focus.keyframes` and is never 0
  (infinity). Each pair names an authored state, and no state is certified twice.
- `objectDistanceMm` is positive and axial, from the object plane to the current first vertex
  (`distanceReference: "first-surface"`) or to the fixed image plane (`"image-plane"`). `source` is non-empty and
  identifies the evidence for both the distance and the focus spacings.
- MTF never infers conjugates from `closeFocusM`, a production MFD or interpolated slider labels; undocumented
  intermediate states stay unavailable. Do not certify calculated focus travel as a published configuration.
- Every conjugate also counts as a published state (below).
- Source-rounded prescriptions may keep residual defocus: MTF evaluates the authored image plane by default, reports the
  axial best-focus shift as a diagnostic, and moves the plane only when the viewer asks. Do not edit the authored image
  distance to improve simulated MTF.

### Published Stations

Authored stations are interpolation control points; not all of them come from the source. The published flags record
which ones the cited patent or publication tabulates, so the viewer's patent-positions mode steps through source
configurations only. "Published" means the source tabulates that configuration, not that its values are verbatim: a
station whose rounded source row was re-solved for paraxial consistency is still published.

- **Zoom stations:** `zoom.stations[i].published` (default `true`) says whether the source tabulates the station's
  infinity row. At least one station is published.
- **Focus keyframes:** `zoom.stations[i].publishedFocus` on a zoom, or `focus.published` on a prime, lists the keyframe
  indices (≥ 1, strictly increasing) the source tabulates beyond infinity; `[]` by default. Infinity (keyframe 0) is
  implied at every published station and is never listed.
- Leave the flags out when the defaults are right: every authored zoom station is a source row, and only the
  infinity-focus spacings are tabulated.
- A zoom with more than three stations writes `published` on its stations, `false` on each solved or sampled one,
  even when every station is a source row: dense station lists usually mix source rows with solved or sampled cam
  points, so the corpus test (`__tests__/src/lens-data/publishedStations.test.ts`) asks for an explicit answer. A
  zoom whose stations write no `published` flag has not answered, even when they write `publishedFocus`.
- Each listed focus keyframe moves at least one gap away from its infinity value at that station. A station that
  publishes focus keyframes is itself published, and a conjugate may not sit on an unpublished station.
- Do not publish a reconstructed close-focus endpoint, a production minimum-focus distance or a code-solved keyframe.
- A teleconverter has no stations. A composed host + converter keeps the host's; its focal lengths and f-numbers there
  are computed, not tabulated.

### Aberration control (`aberrationControl`)

Declare this only for a lens with an independent optical control for spherical aberration or soft focus. Ordinary
floating focus groups stay in `gaps`.

```ts
aberrationControl: {
  label: "SA CONTROL", // slider label
  description: "Varies d_B0 for spherical-aberration control.",
  minLabel: "UNDER", // optional endpoint label
  centerLabel: "SHARP", // optional; enables signed travel
  maxLabel: "OVER", // optional endpoint label
  step: 0.001, // optional normalized slider step
  gaps: {
    "9": { label: "D(B0)", values: [1.8, 2.074, 6.962] }, // [minimum, center, maximum]
    "11": { label: "BF", values: [65.0, 64.427, 53.951] },
  },
},
```

- Without `centerLabel`, each range is a `[normal, maximum]` pair, the slider runs `0..1`, and the gap's thickness
  without the control (its surface's `d`, or its focus gap's first value) matches the first value. With `centerLabel`,
  every range is a `[minimum, center, maximum]` triple, the slider runs `-1..1`, and that thickness matches the center
  value, so the sharp center sits at the default control value `0`.
- For a zoom lens, supply one pair or triple per zoom station, in the same form throughout.
- The runtime thickness combines the current focus/zoom spacing with the control's delta from that base thickness, so
  the control layers on top of focus travel.
- The URL parameter is `aberration` (`0..1`, or `-1..1` for the centered form). It is single-lens state only;
  comparison mode leaves it out because each lens's control scale is mechanism-specific.

## Projection

Most lenses leave `projection` out: they are rectilinear, and `catalog.focalLengthMm.design` is expected to be close
to the computed Gaussian EFL. Add projection metadata for non-rectilinear lenses when the published focal length is the
imaging/projection constant used for f-number and image-circle descriptions. For unusual rectilinear ultrawides, it may
also declare the published coverage when the paraxial chief-ray estimate is known to undercount the design.

```ts
projection: { kind: "rectilinear", fullFieldDeg: 120, maxTraceFieldDeg: 60 },
```

```ts
projection: {
  kind: "fisheye-equidistant",
  focalLengthMm: 6.3,
  fullFieldDeg: 220,
  imageCircleMm: 23,
  maxTraceFieldDeg: 110,
},
```

- `kind: "rectilinear"` is the implicit default; leave it out for ordinary lenses. When declared, `fullFieldDeg` is the
  published full field and `maxTraceFieldDeg` the authoritative half-field. Rectilinear launch slopes stay `tan(θ)`,
  and per-ray tracing still clips rays that miss the physical surfaces. Both are single numbers, not zoom arrays;
  `maxTraceFieldDeg` is below 89° and at most half of `fullFieldDeg`.
- `kind: "fisheye-equidistant"` (r = f·θ) uses `focalLengthMm` for aperture sizing while keeping the separately
  computed Gaussian EFL for optical diagnostics. Distortion residuals are measured against the equidistant reference.
- `kind: "fisheye-equisolid"` (r = 2f·sin(θ/2)) is the common photographic fisheye projection (Sigma 15mm, Nikkor AF
  8mm, Olympus 8mm). It behaves like `fisheye-equidistant` for aperture and EFL handling but evaluates distortion
  residuals against the equal-area reference.
- Zoom fisheyes may give `focalLengthMm`, `fullFieldDeg`, `imageCircleMm` and `maxTraceFieldDeg` as lists, interpolated
  evenly across the zoom range as the stations are.
- `fullFieldDeg` and `imageCircleMm` describe the published circular fisheye projection.
- `maxTraceFieldDeg` sets a fisheye's authoritative half-field. The validator accepts values up to (not including) 180°;
  chief rays past 89° (`MAX_FIELD_LAUNCH_DEG`) launch through the bounding-sphere arm. The diagram's off-axis rays use
  a separate, bisected tracing half-field, so bundle rays land on the image plane whatever the declared coverage.

## Folded Paths

Use `opticalPath` only when the sequential model is insufficient: first-surface mirrors, second-surface mirrors,
repeated surface hits, annular mirrors, central obstructions, automatically resolved folded paths, or an image plane
that is not the ordinary right-hand `IMG` plane. A lens without `opticalPath` is an ordinary sequential refractive
system; ordinary refractive lenses do not add `opticalPath`, `interaction` or `innerSd`.

When `opticalPath` is present, provide either a non-empty `surfaceOrder` or `mode: "auto"`. Do not set only
`imagePlane` on an otherwise ordinary lens: that opts into the generalized tracer without telling it which surfaces to
visit.

```ts
opticalPath: {
  mode: "auto", // optional: "sequential" (default) or "auto"
  surfaceOrder: ["STO", "MG1", "MG2", "MG1"], // optional explicit hit order; labels may repeat
  imagePlane: {
    z: 35, // a point on the plane, in lens-data millimetres
    y: 25, // optional; 0 when left out
    normal: { z: 0, y: 1 }, // optional; { z: 1, y: 0 } when left out
    label: "IMG", // optional; "IMG" when left out
  },
  maxInteractions: 8, // optional safety cap; surfaces.length + 1 when left out
},
```

A folded system's stop keeps its authored radius ([Stop and Aperture](#stop-and-aperture)), so its `STO` carries
`sd`. Its EFL, entrance pupil and default half-field are not traced: they come from `catalog.focalLengthMm.design`,
else `catalog.focalLengthMm.marketing`, else the system's axial extent (`lensConstants.ts`). Write a `design` focal
length the prescription gives, so that the f-number the entrance pupil implies is the one `aperture` states.

### Path modes

- `mode: "sequential"` keeps the sequential behavior unless `surfaceOrder` is present. With a `surfaceOrder`, the
  generalized tracer follows that label list exactly and then intersects the image plane. This is the safest choice for
  Mangin mirrors and other designs whose physical surface order is not the optical hit order.
- `mode: "auto"` lets the tracer choose the nearest valid surface at each step. It skips passive same-index refracting
  surfaces, respects side-specific reflection and blocking, avoids immediate self-hits, stops at the image plane when it
  is the next intersection, and stops at `maxInteractions` if a path does not end.
- `surfaceOrder` entries are surface labels, not indices; each must exist, and a label repeats when a ray re-enters or
  leaves through the same physical surface.
- `maxInteractions` should be high enough for the expected path plus the image plane, but not so high that an invalid
  folded system loops for many interactions. With an explicit `surfaceOrder` the validator requires at least the
  number of listed hits, plus one for the image plane when `imagePlane` is declared.

### Image plane

`opticalPath.imagePlane` is a point plus a meridional normal:

- Default: `{ z: <total track>, y: 0, normal: { z: 1, y: 0 }, label: "IMG" }`, the ordinary vertical right-hand plane.
- Front-focus mirror: set `z` in front of the mirror, usually near or before the stop.
- Side-focus Newtonian: a horizontal plane such as `normal: { z: 0, y: 1 }` with `y` above or below the axis.
- `buildLens()` normalizes the normal. `{ z: 1, y: 0 }` is a vertical plane of constant z; `{ z: 0, y: 1 }` a
  horizontal side plane of constant y.
- The validator probes reachability with a conservative folded-path ray only for a declared plane on a path that is
  not `mode: "auto"` and whose `surfaceOrder` names no surface twice. Every Mangin path repeats a label, so no probe
  runs there: check by tracing that the plane you declare is where the rays end.

Diagram layout, ray termination, off-axis folded pupil/chief-ray geometry and mirror-safe spherical aberration use this
plane. Analysis tabs that still assume a sequential right-hand image plane stay guarded in the UI rather than show
misleading results.

### Surface interactions (`interaction`)

Surfaces refract by default. Add `interaction` only when a surface does something other than ordinary refraction, has
side-specific behavior, or is a tilted meridional plane.

```ts
{
  label: "SEC",
  R: "flat",
  d: 0.5,
  sd: 10,
  medium: 2,
  interaction: {
    type: "reflect", // "refract" | "reflect" | "block"
    incidentSide: "rear", // optional: "front" | "rear" | "both" (default)
    inactiveSide: "block", // optional: "ignore" | "block"; reference mirrors block
    mirrorKind: "first-surface", // optional: "first-surface" | "second-surface"
    normal: { z: 1, y: 1 }, // optional tilted meridional plane normal
  },
}
```

- `type: "refract"` applies Snell refraction. It also serves a passive backing plane that needs the same tilted
  geometry as its mirror face.
- `type: "reflect"` reflects about the solved surface normal. Use `mirrorKind: "first-surface"` for front-coated
  mirrors and `"second-surface"` for substrate-backed reflective surfaces. `"second-surface"` also draws a dashed,
  labelled silvered-surface accent so the coating shows apart from the glass; it is display-only. On annular mirrors the
  accent is split into the upper and lower material bands and leaves the clear center unmarked.
- `type: "block"` clips rays within the surface's active aperture: central obstructions, baffles and synthetic
  regression fixtures.
- `incidentSide` limits which side is active, relative to the solved surface normal, not the list position. A ray that
  hits a reflecting surface from its inactive side is blocked by default inside the active disk or annulus; reference
  mirror fixtures declare `inactiveSide: "block"` explicitly so back-side opacity is clear in the data. Refracting and
  blocking surfaces ignore inactive-side hits unless `inactiveSide: "block"` is written.
- `normal` turns the surface into a tilted meridional plane for tracing and drawing: use it for flat fold mirrors.
  Curved mirrors normally leave it out, so sag and local normal come from `R` and `asphere`. A tilted flat mirror's
  backing plane repeats the reflective face's normal.

Choosing `incidentSide`:

- For a beam travelling left to right into a concave primary whose sag-derived normal faces the object side, start
  with `incidentSide: "front"`, the usual first-surface primary.
- For a beam returning right to left toward a diagonal flat after the primary reflection, use `incidentSide: "rear"`
  and `inactiveSide: "block"` on the diagonal, so the incoming beam is obstructed inside the secondary aperture and the
  returning beam reflects from the active side.
- For a Mangin or other second-surface mirror, set `incidentSide` on the coating side reached after the ray enters the
  substrate. Keep the refractive front surface ordinary, and repeat its label in `surfaceOrder` for the exit path.
- When the diagram looks right but every ray is blocked or ignored, flip only `incidentSide` first. If the design then
  works, leave the surface normal alone unless it is a flat fold plane whose drawn tilt is wrong.

### Annular apertures and obstructions

Any surface may declare `innerSd` for an annular active aperture:

```ts
{ label: "M1", R: -200, d: 0, sd: 30, innerSd: 8, medium: 1, interaction: { type: "reflect" } },
```

- The active radial band is `[innerSd, sd]`. Rays below `innerSd` pass through the central hole without interacting
  with the surface, including from an inactive mirror side that would otherwise block. Rays above `sd` clip.
- Validation and render diagnostics use the same radial-material reading: a solid surface occupies `[0, sd]`, an
  annular one `[innerSd, sd]`, and cross-gap sag checks compare only the shared occupied band. A rear corrector inside
  a primary's clear center therefore does not fail or trim against the surrounding mirror shell when their bands do
  not overlap.
- A solid central obstruction leaves `innerSd` out and is a `block` surface:
  `{ label: "OBS", R: "flat", d: 10, sd: 6, interaction: { type: "block" } }`.
- An annular blocker combines `innerSd` with `type: "block"`: only the ring clips, and the hole passes.
- On-axis and off-axis ray sampling is obstruction-aware for folded systems: the sampler scans the usable pupil bands
  and avoids the blocked center, so mirror fixtures do not hand-tune `rays.rayFractions` around a secondary
  obstruction.
- If a tilted or paired backing surface belongs to the same annular mirror element, keep `innerSd` the same on the
  reflective face and its backing plane; the validator refuses mismatched paired annular faces.

### Mirror elements, nesting and shared blanks

- **Mirror element:** a first-surface mirror can use one reflective face with a passive backing surface for its drawn
  thickness. The reflective face opens into the mirror element (`medium: <id>`); the backing surface normally opens
  into air. A tilted flat fold mirror puts the same `interaction.normal` on both faces so the element is drawn tilted.
- **Annular mirror:** add `innerSd` to the active surface; for an element with a central hole, add it to both faces if
  both should draw as annular, and the element path uses even-odd fill.
- **Blocker:** `interaction: { type: "block" }` with no `medium`. Give it a medium only if the blocker is drawn as a
  physical element with a front and back surface.
- **Nested correctors:** an element `span` normally contains no surface but an embedded `STO`. Mirror lenses get two
  narrow exceptions, both only when `opticalPath` is present (`isAllowedFoldedSpanInternalSurface` in
  `validate/aperture.ts`):
  - a span whose endpoints have matching `innerSd` and at least one reflective endpoint may contain non-stop surfaces
    that fit wholly inside that central opening. Use it only where a corrector group physically occupies the empty
    center of an annular mirror;
  - in a lens with a reflective surface, a span may contain an annular surface whose `innerSd`–`sd` band shares no
    radius with either endpoint's material band (from its `innerSd`, or 0, to its `sd`): the radially split blank of
    the next bullet.
- **Shared blanks:** some reflex patents use one physical blank in two radial roles, a silvered annular shell and a
  clear central plug. Model them as complementary drawn elements, not by stretching a small corrector across the full
  primary diameter:
  - the annular mirror element keeps the reflective surface, `innerSd` and the full outer `sd`;
  - the plug gets its own element and unique surface labels at the same axial stations and curvatures, with
    `sd ≤ innerSd` and no reflective interaction; give the plug `sd` equal to the shell's `innerSd` so the zones tile
    each face, since a gap between them is a ring where rays cross no surface;
  - both carry the same `nd`, `vd` and glass identification when they are the same blank;
  - `catalog.elementCount` reports the physical count; document the split in the header and the analysis;
  - do not use `stopPlacement: "inside-element"` to hide these correctors: it is only for a stop inside glass.

  A reverse crossing takes its entered medium from the last earlier surface whose radial band overlaps the crossed
  surface, so the plug's glass does not leak into the annular path.

### Authoring patterns

First-surface concave primary with an image plane in front:

```ts
surfaces: [
  { label: "STO", R: "flat", d: 100, sd: 25 },
  {
    label: "M1",
    R: -200,
    d: 0,
    sd: 25,
    medium: 1,
    interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
  },
],
opticalPath: { surfaceOrder: ["STO", "M1"], imagePlane: { z: 0, label: "IMG" } },
```

Second-surface Mangin path through a glass front surface, a reflective rear surface, then back out the front: see the
folded example in [Examples](#examples).

Newtonian-style automatic folded path with a diagonal secondary and a side image plane:

```ts
opticalPath: {
  mode: "auto",
  imagePlane: { z: 35, y: 25, normal: { z: 0, y: 1 }, label: "IMG" },
  maxInteractions: 8,
},
surfaces: [
  { label: "STO", R: "flat", d: 35, sd: 30 },
  {
    label: "SEC",
    R: "flat",
    d: 0.5,
    sd: 10,
    medium: 2,
    interaction: {
      type: "reflect",
      incidentSide: "rear",
      inactiveSide: "block",
      mirrorKind: "first-surface",
      normal: { z: 1, y: 1 },
    },
  },
  { label: "SECB", R: "flat", d: 64.5, sd: 10, interaction: { type: "refract", normal: { z: 1, y: 1 } } },
  {
    label: "M1",
    R: -200,
    d: 2,
    sd: 30,
    medium: 1,
    interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
  },
  { label: "M1B", R: "flat", d: 0, sd: 30 },
],
```

The backing plane (`SECB`) is optically passive but carries the same `normal` as the reflective face, so the element
draws as a tilted flat mirror rather than a vertical plate.

### Reference fixtures

Mirror and telescope regression fixtures live in `src/lens-data/reference/`, normally hidden with `visible: false`:

- `ReferenceSphericalPrimaryMirror.data.ts`: first-surface mirror and front image plane.
- `ReferenceAnnularObscuredMirror.data.ts`: annular primary and obstruction-aware sampling.
- `ReferenceManginSecondSurfaceMirror.data.ts`: repeated front-surface hit around a second-surface mirror.
- `ReferenceNewtonianSideFocus.data.ts`: auto path selection, tilted secondary and side image plane.
- `ReferenceCassegrainBackFocus.data.ts`: obstruction and folded back-focus behavior.
- `ReferenceGregorianSecondary.data.ts`: Gregorian-style secondary and declared back focus.
- `ReferenceMaksutovCassegrainMeniscus.data.ts`: refractive meniscus and folded mirror path.
- `ReferenceAnnularRingBlocker.data.ts`: an annular blocker that clips the ring and passes the center.

Use them as authoring examples and regression anchors, not as public catalog entries. For a compact audit of their
metadata, run `npm run generate:mirror-reports` and review `agent_docs/generated/mirror-fixtures.generated.md`.

## Perspective Control

Declare `perspectiveControl` only for a lens with a real perspective-control mechanism. The UI then shows the
supported signed SHIFT and/or TILT sliders and stores them in the URL as `shift` and `tilt`. The camera frame, camera
axis and sensor/`IMG` plane stay fixed; the whole intrinsic lens stack moves relative to that frame, and active diagram
rays are retraced through the moved stop and lens to the fixed sensor.

```ts
perspectiveControl: {
  shiftRangeMm: [-11.5, 11.5], // [min, max] lens shift in mm; includes 0
  tiltRangeDeg: [-8.5, 8.5], // [min, max] lens tilt in degrees; includes 0
  shiftStepMm: 0.1, // optional; 0.1 mm when left out
  tiltStepDeg: 0.1, // optional; 0.1° when left out
  tiltPivot: {
    // required whenever tiltRangeDeg has non-zero travel
    frame: "camera",
    basis: "rear-vertex-fallback",
    zOffsetFromImagePlaneMm: -56.5,
  },
},
```

- Both ranges are finite ordered `[min, max]` tuples that include `0`. Use `[0, 0]` to disable an axis on a shift-only
  or tilt-only lens; at least one axis has non-zero travel. Comment the official movement limits in the file.
- `catalog.imageFormat` is required with `perspectiveControl`: movement-aware sensor sampling needs the sensor size.
- Not with `opticalPath` (folded or generalized paths) or with `rearPlates`.

### Frames and pivot

The **camera frame** owns the sensor and its `u`/`v` axes. For the ordinary axial sensor, `u` is camera-right and `v`
is down in the meridional diagram. The **intrinsic lens frame** owns the prescription surfaces, stop, first-order
pupils, cardinal elements and other lens-axis quantities. Shift and tilt form one rigid transform between the frames;
they tilt neither the sensor nor the whole diagram.

For a tilt-enabled lens, `tiltPivot` defines the rotation reference in the camera frame. Tilt is a meridional rotation
about camera `X`; `zOffsetFromImagePlaneMm` is a finite negative millimetre offset from the fixed sensor/image plane,
negative toward the object. Author it from the canonical reference state (`focusT = 0`, `zoomT = 0`,
`aberrationT = 0`); it stays camera-fixed at other focus and zoom positions and does not follow the current rear
vertex.

- `basis: "mechanical-axis"` only when a reliable source publishes enough to locate the physical axis.
- `basis: "patent-principal-point-guidance"` when a patent directs the rotation center to an optical principal point or
  nearby region but does not dimension or verify the production hinge. Store the canonical reference-state principal
  point explicitly and cite the patent paragraph or figure next to the data. This is stronger than a geometry fallback
  but is not a measured mechanical axis.
- `basis: "rear-vertex-fallback"` when the canonical reference-state rear vertex supplies the offset because the actual
  mechanism axis is unpublished. A fallback is a deterministic visualization and tracing reference, not a claim about
  the hinge; say so in the source comment.
- A tilt-enabled lens declares a pivot; a shift-only lens leaves it out.

### Field and analysis meaning

Movement-aware analysis uses two field domains:

- **Scene-locked** holds a camera-space scene direction fixed while the lens moves. Distortion uses it and separates
  composition displacement (posed ideal minus zero-pose ideal), optical residual (traced intercept minus posed ideal)
  and their total on the fixed sensor.
- **Sensor-locked** holds a requested physical sensor point fixed and solves the scene direction whose exact chief ray
  passes through the moved stop and reaches it. Blur/bokeh, best focus, field curvature/astigmatism/coma, chromatic
  field behavior, vignetting and apparent-pupil measurements use it.

EFL, cardinal elements, Petzval, focus breathing, classical lens-axis spherical aberration and classical longitudinal
chromatic aberration stay intrinsic lens-frame properties and are labelled so. Sensor-relative results use the fixed
sensor basis and normal. Intrinsic pupil positions and sizes stay lens-frame values; field-dependent apparent pupils
are solved from the moved chief and pupil bundles. Unsupported traces, field points or metrics report unavailable,
clipped or missed rather than substitute centered-lens results.

### Movements modelled

The data represents vertical lens translation (`shift-Y`) and meridional tilt about camera `X` (`tilt-X`) only: no
mechanism rotation, swing, horizontal or independent XY movements, separately rotated shift and tilt axes, or complete
mechanical linkage.

Official-source references used by existing lens records:

- Nikon PC-NIKKOR 35mm f/2.8: shift ±11 mm, no production tilt, from Nikon Imaging's official PC-NIKKOR history:
  <https://imaging.nikon.com/imaging/information/story/0017/>
- Nikon PC NIKKOR 19mm f/4E ED: shift ±12 mm, tilt ±7.5°, from Nikon Imaging's official product page:
  <https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/pc_pce/pc_19mmf_4e_ed/>
- Nikon PC-E NIKKOR 24mm f/3.5D ED: shift ±11.5 mm, tilt ±8.5°, from Nikon USA's launch release:
  <https://www.nikonusa.com/press-room/nikons-new-wide-angle-pc-e-ni>
- Nikon PC-E Micro-NIKKOR 45mm f/2.8D ED: shift ±11.5 mm, tilt ±8.5°, from Nikon Imaging's official product page:
  <https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/pc_pce/pce_45mmf_28ed/index.html>

## Rear Plates

Use `rearPlates` when the source prescription lists camera-side plane-parallel plates between the last lens surface
and the image plane: sensor cover glass and IR-cut or low-pass stacks. Copy the source values as printed:

```ts
surfaces: [
  // …
  { label: "26", R: 107.45414, d: 13.858, sd: 17.5 }, // physical gap to the first plate
],
rearPlates: [
  {
    label: "FL",
    thicknessMm: 1.6,
    nd: 1.5168,
    vd: 64.1,
    glass: "J-BK7A",
    gapAfterMm: 0.1, // last plate: distance to the image plane
    source: "WO 2019/049372 A1, Example 1 Table 1 surfaces 27–28",
  },
],
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `thicknessMm` | `number` | ✓ | Physical plate thickness (> 0). |
| `nd` | `number` | ✓ | Plate index (> 1) at the `indexReference` line. |
| `vd` | `number` | ✓ | Abbe number, so the plate never traces as dispersion-free. |
| `gapAfterMm` | `number` | ✓ | Physical air after the plate (≥ 0); for the last plate, the distance to the image plane. |
| `glass` | `string` | | Catalog glass label, resolved like an element's `glass`. Leave it out when no catalog glass matches; the plate then uses the Abbe-number estimate. |
| `indexReference`, `nC`, `nF`, `ng`, `dPgF` | | | As on an element. `indexReference` defaults to `"d"`. |
| `label` | `string` | | Source designation (`"CG"`, `"FL"`, `"GB"`, `"LPF"`). |
| `sd` | `number` | | Published clear semi-diameter. Left out, the generated rim never clips rays. |
| `source` | `string` | | Source citation (publication, example, surface numbers). |

- The last surface's `d` (or its gap) is the **physical gap to the first plate**, not a back focus. Focus and zoom
  variation stays on that gap; plate thicknesses and trailing gaps are fixed camera-side distances. If a source prints
  a trailing gap that varies by rounding (0.100 / 0.101), keep one `gapAfterMm` and carry the difference in the
  variable gap, noting it in the header.
- `buildLens()` appends two flat surfaces per plate (reserved labels `RP<n>a` / `RP<n>b`) and one generated element.
  Tracing, pupils, field limits, aberration and chromatic analyses and the image-plane position all include the plate;
  the diagram, element numbering, inspector, Abbe diagram and element counts do not show it.
- Paraxially a plate equals the old fold (gap before + t/n + gap after). Replacing a fold with `rearPlates` moves the
  drawn image plane back by t(1 − 1/n) and leaves EFL and paraxial defocus unchanged; check both when migrating.
- BFD in the Summary tab and the cardinal overlay is measured from the last lens vertex, so it includes the plates.
- Not with `opticalPath`, non-refracting surfaces or `perspectiveControl`: keep the air-equivalent fold for those
  lenses. A plate ahead of the last lens surface cannot use `rearPlates`, and a drop-in filter in the lens's own holder
  is a drawn element wherever it sits ([Scope: What to Include](#scope-what-to-include)).
- Do not invent a camera stack: `rearPlates` holds only plates the source lists.

## Annotations

Brackets drawn on the cross-section, by surface label.

```ts
groups: [
  { text: "FRONT (101)", fromSurface: "1", toSurface: "10" },
  { text: "REAR (102)", fromSurface: "12", toSurface: "19A" },
],
doublets: [
  { text: "Jb", fromSurface: "12", toSurface: "14" },
  { text: "Ja", fromSurface: "15", toSurface: "17" },
],
```

- `fromSurface` and `toSurface` are existing surface labels.
- `doublets` are drawn only.
- `groups` are drawn, and the group-movement analysis also reads them: authored groups are the moving groups it
  tracks (`inferLensMovementGroups` in `src/optics/groupMovement.ts`), and only a lens without them falls back to
  contiguous element runs. Author them as the source's mechanical groups.

## Layout, Rays and Checks

`layout` frames the diagram; `rays` sets the ray fans the diagram draws and several analyses read; `checks` relaxes
validation. Every member has a schema default except `layout.yScFill`, which each lens sets.

### Schema defaults

Ingest fills every field below that a file leaves out (`src/optics/prescription/defaults.ts`). Override one only when
the default does not serve the lens.

| Field | Default | Meaning |
| --- | --- | --- |
| `visible` | `true` | Catalog visibility. |
| `zoom.apertureModel` | `"from-nominal-fno"` | Zoom stop radius per station. |
| `zoom.step` | `0.004` | Zoom slider step. |
| `focus.keyframes` | `[0, 1]` | Infinity and close focus. |
| `focus.step` | `0.004` | Focus slider step. |
| `zoom.stations[i].published`, `.publishedFocus`; `focus.published` | `true`, `[]`; `[]` | Every station published, at infinity alone. |
| `aperture.maxFNumber` | `16` | Largest f-number on the aperture slider. |
| `aperture.step` | `0.004` | Aperture slider step. |
| `layout.svgW` | `1080` | Diagram width (px). |
| `layout.svgH` | `490` | Diagram height (px). |
| `layout.scFill` | `0.55` | Horizontal fill fraction (0–1). |
| `layout.maxAspectRatio` | `1.6` | Largest vertical/horizontal scale ratio; keeps long lenses from being squashed. |
| `layout.lensShiftFrac` | `0.08` | Horizontal lens shift, as a fraction of the diagram width. |
| `rays.rayFractions` | `[-0.83, -0.5, -0.17, 0.17, 0.5, 0.83]` | On-axis ray fan heights. |
| `rays.rayLeadFrac` | `0.35` | Ray lead distance, as a fraction of the total track. |
| `rays.offAxisFieldFrac` | `0.6` | Off-axis field angle, as a fraction of the maximum half-field. |
| `rays.offAxisFractions` | `[-0.75, -0.375, 0, 0.375, 0.75]` | Off-axis ray fan heights. |
| `checks.gapSagFrac` | `0.9` | Largest cross-gap sag intrusion, as a fraction of the gap; > 0 and ≤ 1. Validation and rendering share it. |
| `checks.maxRimAngleDeg` | `≈ 64.2` | Largest rim-slope angle, spherical or aspherical; the default equals the old `sd/\|R\| = 0.9` threshold for a sphere. |
| `elements[].indexReference`, `rearPlates[].indexReference` | `"d"` | d-line coordinates. |
| `elements[].apd` | `false` | No anomalous partial dispersion claim. |

`layout.yScFill` (vertical fill fraction, 0–1) has no default.

## Validation Rules

A lens file goes through three gates, and `buildLens()` adds one guard of its own. A gate's message that names a field
names it at its V2 path (`surfaces[5].medium: unknown element 13`).

1. **Ingest** (`ingestLensV2` in `src/optics/prescription/ingestV2.ts`, shared rules in `ingestCommon.ts`) refuses a
   file whose shape it cannot read, or whose content the canonical prescription cannot hold, and reports every reason
   at once in a `PrescriptionIngestError`.
2. **The validator** (`validateCanonicalLens` in `src/optics/prescription/validate/index.ts`) checks the ingested
   prescription and translates its messages to the authored paths (`authoredMessages`, `validate/paths.ts`).
3. **Corpus sweeps** in `__tests__/` hold catalog-wide policies that are not per-file validation.

`buildLens()` throws on any refusal from the first two, listing them all. It also refuses a sequential rectilinear lens
whose traced Gaussian EFL, at the first zoom station and infinity focus, lies outside 0.8 to 1.25 times
`catalog.focalLengthMm.design` (its first value on a zoom; no check without one): `assertRectilinearFocalReference`
in `src/optics/first-order/lensConstants.ts`. A fisheye whose projection constant departs from the EFL declares
`projection` instead. The guard is the exception to V2 paths: it reads the lens's V1 view, so its message names
`focalLengthDesign`, which is `catalog.focalLengthMm.design` ([Reading V1 audits](#reading-v1-audits)).

### Ingest

Code: `src/optics/prescription/ingestV2.ts` unless noted. The full list, with a test case for each, is in the S2.P2.T1
As built of `OPTICS_ENGINE_REWRITE_SPEC.md`.

| Rule | Function |
| --- | --- |
| `schema` is 2; no field outside the V2 types, and none only the engine writes, except inside a record ingest copies whole (below); required fields present; records are objects and lists are lists, with no holes | `ingestLensV2`, `refuseUnknownFields` and `requireFields` (`ingestCommon.ts`) |
| An `asphere` is an object of known terms; `rearPlates` is a list of objects | `ingestCommon.ts` |
| Element ids are positive integers; a span is two surface labels, in order | `ingestElements` |
| A surface `medium` names an element or a media id; media have a non-empty unique `id`, a numeric `nd`, at most a `name` besides, are used, differ from air and from each other | `declareMedia`, `ingestSurfaces`, `finishMedia` |
| Surface labels are unique strings | `labelIndexOf` |
| `gaps` and `aberrationControl.gaps` are keyed by surface labels; entries have `values` (and `aberrationControl` has `gaps`); rows match the station and keyframe counts | `ingestGaps`, `ingestAberrationControl` |
| A gap surface leaves `d` out, even when it would agree; every other surface writes `d` | `ingestSurfaces` |
| At least two zoom stations, each with `focalLengthMm`; `nominalFNumber`, `stopSemiDiameter` and `closeFocusM` on every station or none; labels on all stations or the first and last | `ingestZoom` |
| `focus.keyframes` is a list of at least two numbers; `focus.published` only on a prime; published keyframes and conjugate stations/keyframes name real ones; at least one station published | `ingestLensV2`, `ingestPublishedStations`, `ingestConjugates` |
| The design f-number is on `aperture` or on the stations, not both and not neither | `ingestLensV2` |
| The stop carries `sd` exactly when its radius is authored | `ingestSurfaces`, with the authority from `stopRadiusAuthority` (`canonical.ts`) |

Ingest copies some records whole and refuses no member inside them: `catalog.opticalConfiguration`, the `source.errata`
entries, a surface's `diffractive` (and its `terms`) and `interaction` (and its `normal`), `projection`,
`perspectiveControl` (and its `tiltPivot`), `opticalPath` (and its `imagePlane` and `imagePlane.normal`), and the `groups`
and `doublets` entries. An unknown member in one of them is refused by the file's `satisfies LensDataV2Input` when it is
type-checked, not by ingest.

### Validator

Code: `src/optics/prescription/validate/`.

| Rule | Function |
| --- | --- |
| `key` matches `LENS_KEY_PATTERN`; required strings and numbers present and finite; `checks.gapSagFrac` in (0, 1]; `zoom.apertureModel` valid; station close-focus distances positive; design f-numbers finite and consistent with the stations; `visible` and `catalog.acceptsTeleconverters` booleans; `catalog.imageCircleMm` positive | `validateTopLevel` (`schema.ts`) |
| `catalog.lensMounts` and `catalog.imageFormat` known canonical ids, no duplicate mount | `validateLensMounts`, `validateImageFormat` (`schema.ts`) |
| `catalog.opticalConfiguration` fields | `validateOpticalConfiguration` (`schema.ts`) |
| `projection` kind, fields and field-angle bounds | `validateProjection` (`schema.ts`) |
| `perspectiveControl` ranges, steps and pivot; `catalog.imageFormat` present; not with `opticalPath` | `validatePerspectiveControl` (`schema.ts`), `validateTopLevel` |
| `rearPlates` field bounds; not with folded paths or `perspectiveControl` | `validateRearPlates` (`schema.ts`) |
| Labels unique and not reserved; `R`, `d`, `sd` present; `sd` positive; `innerSd` non-negative and below `sd`; `interaction` enums and normals; `diffractive` only on refracting surfaces; `stopPlacement` only on `STO`; exactly one `STO` | `validateSurfaces` (`schema.ts`) |
| Element ids unique; `maxSdRatio` ≥ 1; `indexReference`, `apd` and `absorptionCoefficientPerMm` valid; no absorption on folded paths | `validateElements` (`schema.ts`) |
| Every surface medium names an element, and every element is some surface's medium; asphere terms finite and known | `validateReferences` (`references.ts`) |
| Patent metadata completeness, publication-number formatting, party-name rules and no inventor repeated as an assignee | `validatePatentMetadata` (`patent.ts`) |
| `source.errata` entries | `validateSourceErrata` (`references.ts`) |
| Element spans: both ends, in order; internal surfaces only an embedded stop or the folded exceptions | `validateSpans` (`references.ts`) |
| `groups` and `doublets` name existing surfaces | `validateAnnotations` (`references.ts`) |
| Stations increasing; keyframes begin at 0, end at 1, strictly increasing; conjugates name distinct authored states | `validateStations` (`controls.ts`) |
| A zoom's authored `catalog.focalLengthMm.design` pair matches the first and last stations' `focalLengthMm` within 1% of each station value (absolute difference divided by station focal length) | `validateStations` (`controls.ts`) |
| Gap rows and thicknesses; aberration-control ranges and their base thickness | `validateControls` (`controls.ts`) |
| Published stations and keyframes, and their focus travel | `validatePublishedStations` (`controls.ts`) |
| An embedded stop is flat, opens into its containing element and needs `stopPlacement`; a glass-side stop needs the flag | `validateStop` (`aperture.ts`) |
| Paired annular faces share `innerSd` | `validatePairedInnerSdConsistency` (`aperture.ts`) |
| `opticalPath` mode, `surfaceOrder` labels, `imagePlane` fields and `maxInteractions` | `validateOpticalPath`, `validateImagePlane` (`folded.ts`) |
| A tilted flat mirror's backing plane repeats its normal; a declared image plane is reached by a probe ray, on a path that is not `"auto"` and names no surface twice | `validateTiltedMirrorBackingNormals`, `validateFoldedImagePlaneReachability` (`folded.ts`) |
| Diffractive kind, wavelength, order and terms | `validateDiffractivePhase` (`diffractive.ts`) |
| Edge thickness positive at the smaller clear aperture; front/rear clear-aperture ratio ≤ 3 (or `maxSdRatio`); rim slope ≤ `checks.maxRimAngleDeg`; `sd ≤ 0.98 × \|R\| / √(1+K)` for `K > 0`; cross-gap sag ≤ `checks.gapSagFrac` × gap over the shared radial band, at every zoom station | `validateGeometry` (`geometry.ts`) |

A patent declaration (a number or named parties) requires a non-empty, trimmed publication number and both party
arrays. Empty arrays retain their source meaning above. A year alone or empty party lists without a patent number
can describe a non-patent source and do not require patent metadata. These rules run through canonical validation
for V2 files.

### Corpus sweeps

Separate from validation, these run over every catalog file in `npm run test`:

- cross-lens author spelling/name order and assignee spelling, reference fixtures without patent metadata, converter
  publication-number formatting, and the design f-number against `catalog.fNumber.design`
  (`__tests__/src/lens-data/patentMetadata.test.ts`);
- the fixed-iris rule (`__tests__/src/lens-data/zoomApertureModel.test.ts`) and published stations
  (`__tests__/src/lens-data/publishedStations.test.ts`);
- catalog integrity, the analysis-file structural floor, and production element-render diagnostics: a production lens
  fails when slope, conic or cross-gap limits would hide more than 0.25 mm of material in render trim.

### Glass-annotation audits (non-blocking)

A `glass` string that resolves to a catalog entry outside the round-trip window (Δn ±0.003, Δν ±2) is not an error: the
dispersion engine falls through to the next dispersion tier without reporting it. The catalog-mismatch report lists
these annotations (`npm run generate:glass-reports`, written to `agent_docs/generated/catalog-mismatches.generated.md`),
with the relabel-candidate scans beside it. Keep the annotation honest: relabel to a matching glass, or use the
`Unmatched (...)` form ([Glass Identification](#glass-identification)).

## Glass Identification

The `glass` string on each element is read by the chromatic dispersion engine and shown in the inspector. Its format is
conventional rather than syntactic (no parser requires a shape), but a small set of forms work reliably.

### Canonical forms

| Form | Example | Use when |
| --- | --- | --- |
| Vendor catalog name | `"S-FPL51 (OHARA)"` | The element is a public catalog glass; the name resolves to a published Sellmeier source. |
| Vendor name plus class hint | `"S-FPL51 / FCD1 class (ED fluorophosphate, νd = 82.6)"` | Several vendors publish equivalent glasses and the patent names none; pick the most likely vendor and include the cross-reference. |
| Generic class with code | `"670571 — lanthanum crown (catalog unresolved)"` | The glass is identified only by its six-digit code; vendor unknown. Keep the six digits unbroken for reports and future catalog matching. |
| Schott legacy name | `"SF6 (Schott)"`, `"N-BK7 (Schott)"` | A Schott legacy or N-series entry with stable public Sellmeier data. |
| Sumita / Hoya / CDGM name | `"FCD1 (Hoya)"`, `"K-GFK68 (Sumita)"` | The patent or vendor literature names the glass directly. |
| Unmatched / proprietary | `"Unmatched (vintage Leitz proprietary, no public catalog)"` | A custom melt, vintage proprietary glass, or designer-attributed approximation no public catalog will match. |

### The `Unmatched` convention

When stored `nd`/`νd` cannot be matched to any catalog entry within reasonable tolerance, prefer the explicit form:

```ts
glass: "Unmatched (lanthanum flint, designer attribution to S-LAH79 inconsistent with stored nd=1.95375)",
```

This is better than leaving a wrong vendor name in place. A labelled glass whose catalog coordinates disagree with the
stored prescription is not resolved, and the element falls through to a lower-quality dispersion path. An explicit
`Unmatched` annotation:

- tells readers the glass is not catalog-resolvable;
- stops the relabel-candidate scans from flagging the element again;
- states the data-quality limit in any dispersion-quality readout the viewer shows.

### Round-trip verification

When the dispersion engine resolves a `glass` string against a Sellmeier catalog, it rejects the resolution if the
catalog coordinates disagree with the element's stored reference pair by more than Δn ±0.003 or Δν ±2. D-line rows are
compared at C/d/F; native e-line rows at C′/e/F′, and they need an explicit name or alias. This catches accidental
relabels, but it does not replace the author's own check.

Before committing a `glass` change, verify:

1. The catalog entry exists for the named glass, and its stored Sellmeier coefficients reproduce the catalog's listed
   `nd` to high precision (typically 1e-4; a property of the catalog, enforced in CI).
2. The element's stored reference pair agrees with the catalog coefficients within the runtime window (Δn ≤ 0.003,
   Δν ≤ 2.0). For a confident named match, prefer much smaller residuals and document any family-level assignment that
   is not exact.
3. The source reference is identified correctly. If the prescription keeps `ne` / `νe`, set `indexReference: "e"` and
   use only an explicit name or alias that round-trips at C′/e/F′. Do not rely on a six-digit d-line code for an
   e-line row.

When these do not hold, prefer the `Unmatched` form to a speculative match.

### Anomalous partial dispersion

For elements with anomalous partial dispersion, fill the structured numeric fields when the patent or vendor
publishes them:

```ts
{
  // …
  dPgF: 0.0376, // P_g,F deviation from the Schott normal line; drives APO behavior
  nC: 1.49234, // C-line index (656.3 nm), when published
  nF: 1.49978, // F-line index (486.1 nm), when published
  ng: 1.50387, // g-line index (435.8 nm); recommended for APO designs
  apdNote: "dPgF = +0.0376; secondary-spectrum corrector at L23", // optional prose
}
```

The chromatic engine reads the structured fields (`dPgF`, `nC`, `nF`, `ng`); the prose `apdNote` is for readers and the
engine ignores it. When both are present, keep them consistent: the structured number is authoritative.

If the source defines a different normal line, recover its absolute `P_g,F` first and store
`dPgF = P_g,F − normalLinePgF(vd)` using the engine's baseline in
[`materialResolver.ts`](../optics/chromatic/materialResolver.ts). Do not copy a patent-specific deviation directly.
Keep the source's own deviation separately in the analysis when evaluating its conditions. A catalog deviation is on
its maker's own line too (HOYA's runs near 0.6483 − 0.0018·vd) and is converted the same way. Where a source prints a
deviation without stating its line, take the line from the same applicant's stated formula or from printed figures that
equal a maker's catalog deviations; if neither settles it, keep the printed figure and queue the element in
[`glass-relabel-followup.md`](../../agent_docs/glass-relabel-followup.md). Where the source prints nothing, use the
resolved catalog glass's `P_g,F` and say so in `apdNote`. A stored value within 0.0003 of the correct one is left as
written. `npm run audit:dpgf` lists stored values that fit a source line and miss the engine's. A published
partial-dispersion ratio alone does not justify `apd: "patent"`; that tag requires the source to identify the material
as anomalous.

### Cross-vendor equivalents

Several glasses have catalog equivalents across vendors:

- N-BK7 (Schott) ≈ S-BSL7 (Ohara) ≈ BSC7 (Hoya) ≈ H-K9L (CDGM)
- S-FPL51 (Ohara) ≈ FCD1 (Hoya)
- S-FPL53 (Ohara) ≈ FCD100 (Hoya)
- N-LAK8 (Schott) ≈ S-LAL14 (Ohara): close, but not identical Sellmeier coefficients
- SF6 (Schott) ≈ S-TIH6 (Ohara)
- N-KZFS5 (Schott) and S-NBH-class (Ohara): KZFS-family negative-ΔPgF glasses, different vendors

When a patent does not name the vendor, prefer the vendor whose name matches the rest of the lens (Japanese patents
typically use Ohara codes, German patents Schott, Hoya for some Fuji and Pentax designs, Sumita for some Voigtländer
K-prefix designs). When the patent names one, use it, even if another vendor's equivalent would be easier to source.

## Data Sourcing Checklist

When transcribing from an optical patent:

1. **Surfaces.** Copy the prescription table exactly (R, d, nd). Watch sign conventions: some patents use the opposite
   R sign convention.
2. **Semi-diameters.** Use patent values where listed; otherwise estimate from entrance-pupil geometry with 8–12%
   mechanical clearance. If the manufacturer publishes a cross-section diagram, use it to refine front-group clear
   apertures: compare each element's average (front + rear)/2 semi-diameter ratio against the diagram's proportions
   and adjust conservatively. The front group diverges most often, especially elements 2 and 3, which the marginal-ray
   method tends to over-size. The validator checks the rim slope (≤ `checks.maxRimAngleDeg`, ≈ 64.2° by default,
   including aspheric terms, so near-paraboloid surfaces with K ≈ −1 can exceed sd/|R| = 0.9), the front/rear ratio
   (≤ 3) and the cross-gap intrusion over the shared radial band (≤ `checks.gapSagFrac` × gap, which keeps visible
   clearance rather than accepting rim contact; often the binding constraint for thin air gaps). The renderer uses the
   same rim and gap policy, and production lenses fail when they would need more than 0.25 mm of hidden render trim:
   reduce the boundary clear aperture, or document and test an intentional exception. The stop's radius is not a
   semi-diameter to estimate unless it is authored ([Stop and Aperture](#stop-and-aperture)).
3. **Aspherical coefficients.** Copy from the asphere table, watching for notation differences between patents and the
   conic convention ([Aspheres](#aspheres-asphere)).
4. **Variable gaps.** Look for variable-spacing tables at different object distances.
5. **Elements.** Derive from the surface data: consecutive surfaces in the same glass (nd > 1) form one element, and
   cemented elements share a boundary surface.
6. **Glass identification.** See [Glass Identification](#glass-identification) for the `glass` forms, the
   `Unmatched (...)` convention and round-trip verification. Confirm whether the source coordinates are d-line or
   e-line before matching vendor catalogs; set `indexReference: "e"` when `nd`/`vd` keep native `ne`/`νe`, and not
   after an explicit e-to-d conversion. Match d-line pairs at C/d/F and explicit e-line names or aliases at C′/e/F′
   against vendor catalogs (Ohara, Schott, Hoya, Sumita, CDGM); six-digit codes are d-line only. Prefer the vendor the
   patent names; when it names none, the one consistent with the rest of the lens. When the patent publishes anomalous
   partial dispersion (`PgF`/`ΔPgF`) or per-element line indices (`nC`, `nF`, `ng`), transcribe them on the element.
7. **Focal length.** Record the patent's stated EFL, at the file's scale (item 9), in `catalog.focalLengthMm.design`,
   and check it against the computed one (item 10).
8. **F-number.** Use the patent's stated design f-number for `aperture.nominalFNumber` (or the stations'). If the
   patent gives only the stop diameter, compute `f/# = EFL / (2 × EP_SD)` and record the diameter in a comment.
9. **Scaling.** If the patent prescription is at a different focal length than production (f = 100 in the patent,
   f = 50 production), apply one scale factor `s` to all `R`, `d`, `sd`, image-plane coordinates and other lengths.
   Transform each aspheric term as `Aₙ(scaled) = Aₙ(patent) / s^(n−1)`, keep `K`, and scale diffractive terms as in
   [Diffractive phase surfaces](#diffractive-phase-surfaces-diffractive). Document the scale factor and the transforms
   in the file header.
10. **EFL verification.** After transcribing, check that the computed EFL (`buildLens()`, or the Summary tab) matches
    the patent's stated focal length, scaled if applicable. A mismatch usually means a sign error in R or a wrong nd.
11. **Cross-reference the patent text.** Compare the patent's prose element descriptions ("plano-convex",
    "biconcave") against the transcribed R values. Older patents use approximate language: "plane" may mean "very
    weakly curved" if the numerical example has a finite but large R.

### Zoom-specific sourcing

12. **Variable spacing tables at several focal lengths.** Look for gap values at 3–5 focal lengths (wide, middle,
    tele). The column headers become the stations' `focalLengthMm`, and each gap row supplies that station's row in
    `gaps`. Every station is published unless it writes `published: false`, so if you add solved or sampled stations
    between the source columns, set `published: false` on each added station.
13. **Zoom-only versus zoom-and-focus gaps.** Identify which gaps change only with zoom (the infinity spacing varies
    across focal lengths, but the close-focus table shows the same change) and which change with zoom and focus
    (different infinity and close values at each station). Document which is which in the file header.
14. **Reversing groups.** Check whether a gap's spacing goes up then down across stations (`[28.12, 22.59, 27.71]`).
    The interpolation handles it, but include enough stations to bracket each reversal, and note it in the header.
15. **EFL at each station.** After transcribing, check the computed EFL at each station (`buildLens()` →
    `zoomEFLs`) against the patent's stated focal lengths. A mismatch usually means a transcription error in the
    variable-gap table.

For a prime or zoom with three or more published focus states, use `focus.keyframes` and keep every published spacing
row; mark the rows the source tabulates as published ([Published Stations](#published-stations)).

## Examples

Three complete files: a prime, a zoom and a folded mirror. They are synthetic, with no patent source, and
`__tests__/docDrift.test.ts` ingests and builds each one.

**Prime:** a Cooke triplet with unit focus. The stop's radius is derived from `aperture.nominalFNumber`; the last
surface's gap is the back focus.

```ts
import type { LensDataV2Input } from "../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "example-triplet-50mm-f4",
  maker: "Reference",
  name: "REFERENCE TRIPLET 50mm f/4",
  subtitle: "Synthetic Cooke triplet",

  catalog: {
    specs: ["3 ELEMENTS / 3 GROUPS", "f = 50.0 mm", "F/4", "1 ASPHERICAL SURFACE"],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: { marketing: 50, design: 50.02 },
    fNumber: { design: 4 },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.32,
      focalLengthMm: 33.9,
      glass: "N-SK16 (Schott)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.37,
      focalLengthMm: -17.0,
      glass: "N-F2 (Schott)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.62041,
      vd: 60.32,
      focalLengthMm: 24.4,
      glass: "N-SK16 (Schott)",
    },
  ],

  surfaces: [
    { label: "1", R: 22.014, d: 3.259, sd: 9.5, medium: 1 }, // L1 front
    { label: "2", R: -435.76, d: 6.008, sd: 9.0 }, // L1 rear → air
    { label: "3", R: -22.213, d: 1.0, sd: 7.0, medium: 2 }, // L2 front
    { label: "4", R: 20.292, d: 2.0, sd: 6.5 }, // L2 rear → air
    { label: "STO", R: "flat", d: 2.75 }, // radius derived from aperture.nominalFNumber
    { label: "5", R: 79.684, d: 2.952, sd: 7.5, medium: 3 }, // L3 front
    { label: "6A", R: -18.395, sd: 7.5, asphere: { A4: 2.4e-6, A6: -1.1e-9 } }, // L3 rear → air; d from gaps
  ],

  focus: { closeFocusM: 0.45, description: "Unit focus: the whole lens moves toward the object." },

  gaps: {
    "6A": { label: "BF", values: [[42.436, 49.69]] }, // [infinity, close focus]
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 6 },

  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
```

**Zoom:** a two-group negative-positive zoom with three stations, a variable aperture, front-group focus and a cemented
doublet. Each station's stop radius is derived from its own design f-number.

```ts
import type { LensDataV2Input } from "../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "example-zoom-30-55mm-f35-56",
  maker: "Reference",
  name: "REFERENCE ZOOM 30-55mm f/3.5-5.6",
  subtitle: "Synthetic two-group zoom",

  catalog: {
    specs: ["3 ELEMENTS / 2 GROUPS", "f = 30.0–55.0 mm", "F/3.5–5.6"],
    elementCount: 3,
    groupCount: 2,
    focalLengthMm: { marketing: [30, 55], design: [30, 55] },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.32,
      focalLengthMm: -49.7,
      glass: "N-SK16 (Schott)",
      role: "Negative front group G1; moves forward to focus",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.32,
      focalLengthMm: 25.0,
      glass: "N-SK16 (Schott)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.37,
      focalLengthMm: -64.9,
      glass: "N-F2 (Schott)",
      cemented: "D1",
    },
  ],

  surfaces: [
    { label: "1", R: -62, d: 2.0, sd: 16.0, medium: 1 }, // L1 front
    { label: "2", R: 62, sd: 14.0 }, // L1 rear → air; d from gaps
    { label: "STO", R: "flat", d: 1.0 }, // radius derived from each station's f-number
    { label: "3", R: 30, d: 5.0, sd: 10.5, medium: 2 }, // L2 front
    { label: "4", R: -30, d: 1.5, sd: 10.2, medium: 3 }, // L2 → L3 cemented junction
    { label: "5", R: -120, sd: 10.2 }, // L3 rear → air; d from gaps
  ],

  zoom: {
    stations: [
      { focalLengthMm: 30, nominalFNumber: 3.5, label: "Wide" },
      { focalLengthMm: 40, nominalFNumber: 4.5 },
      { focalLengthMm: 55, nominalFNumber: 5.6, label: "Tele" },
    ],
  },

  focus: { closeFocusM: 0.5, description: "Front-group focus: G1 moves toward the object." },

  gaps: {
    "2": {
      label: "D2",
      values: [
        [52.327, 58.16], // wide: [infinity, close focus]
        [36.053, 41.772],
        [22.739, 28.438], // tele
      ],
    },
    "5": {
      label: "BF",
      values: [
        [59.816, 59.816], // zoom only: the same at both focus keyframes
        [67.735, 67.735],
        [79.612, 79.612],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (+)", fromSurface: "3", toSurface: "5" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  layout: { scFill: 0.5, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
```

**Folded:** a Mangin mirror. Light passes the stop, enters the glass, reflects at the silvered rear face and leaves
through the entrance face again, to an image plane in front of the mirror. A folded system's stop keeps its authored
`sd`, and its EFL is `catalog.focalLengthMm.design`, which must be the one the prescription gives: a concave silvered
face of radius 220 mm in glass of index 1.5 has focal length 220 / (2 × 1.5) ≈ 73.33 mm. The example writes the
surfaces, stop, f-number and folded path of the reference fixture `reference/ReferenceManginSecondSurfaceMirror.data.ts`
in V2, with that focal length: its paraxial focus is at z ≈ 33.33, and its image plane at z = 35.

```ts
import type { LensDataV2Input } from "../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "example-mangin-mirror-73mm-f4",
  maker: "Reference",
  name: "REFERENCE MANGIN MIRROR 73mm f/4",
  subtitle: "Synthetic second-surface mirror",

  catalog: {
    specs: ["SECOND-SURFACE MIRROR", "REPEATED FRONT SURFACE", "n = 1.5", "f = 73.3 mm"],
    elementCount: 1,
    groupCount: 1,
    focalLengthMm: { marketing: 73, design: 73.33 },
    fNumber: { marketing: 4, design: 4 },
  },

  elements: [
    {
      id: 1,
      name: "MG",
      label: "Mangin mirror",
      type: "Plano-Concave Second-Surface Mirror",
      nd: 1.5,
      vd: 60,
      focalLengthMm: 73.33,
      glass: "Unmatched (synthetic crown, nd = 1.5)",
      role: "Glass body whose silvered rear surface reflects rays back out through the entrance surface",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 100, sd: 25 }, // authored: a folded system keeps its stop radius
    { label: "MG1", R: "flat", d: 10, sd: 25, medium: 1 }, // entrance face, crossed twice
    {
      label: "MG2",
      R: -220,
      d: 0,
      sd: 25,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "second-surface" },
    }, // silvered rear face
  ],

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16] },

  projection: { kind: "rectilinear", fullFieldDeg: 8, maxTraceFieldDeg: 4 },
  opticalPath: {
    surfaceOrder: ["STO", "MG1", "MG2", "MG1"],
    imagePlane: { z: 35, label: "IMG" },
    maxInteractions: 5,
  },

  layout: { scFill: 0.62, yScFill: 0.55 },
  rays: { rayLeadFrac: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
```

## Reading V1 Audits

Audit logs (`*.audit.md`), analyses (`*.analysis.md`) and older agent records were written against lens-data V1. They
are historical records and are not rewritten, so they keep V1's field names. The app accepts only V2.
`npm run convert:lens-data -- --input <file> --write` permanently supports conversion of archived V1 files to V2
(and `--to-version 1` back). The organizer converts V1 files on arrival, including files inside maker folders;
the map below gives each of its fields' V2 paths.

### Field map

| V1 | V2 |
| --- | --- |
| *(none)* | `schema: 2` |
| `key`, `maker`, `name`, `subtitle`, `visible`, `publishedAt` | unchanged, first in the file |
| `lensMounts`, `imageFormat`, `imageCircleMm`, `specs`, `elementCount`, `groupCount`, `acceptsTeleconverters`, `opticalConfiguration` | `catalog.*`, same names |
| `focalLengthMarketing`, `focalLengthDesign` | `catalog.focalLengthMm.marketing`, `.design` |
| `apertureMarketing`, `apertureDesign` | `catalog.fNumber.marketing`, `.design` |
| `patentNumber`, `patentYear`, `patentAuthors`, `patentAssignees`, `sourceErrata` | `source.patentNumber`, `.patentYear`, `.authors`, `.assignees`, `.errata` |
| `surfaces[].nd` + `surfaces[].elemId` | `surfaces[].medium`: the element id, a `media` id, or left out for air (`elemId: 0`, `nd: 1`) |
| an air surface with `nd ≠ 1` | an entry in `media` |
| `elements[].fromSurface` / `toSurface` | `elements[].span: [from, to]` |
| `elements[].fl` | `elements[].focalLengthMm` |
| `R: 1e15` | `R: "flat"` |
| `asph[label]` | `surfaces[i].asphere`, sparse; `asph: {}` is left out |
| `var[label]`, `varLabels` | `gaps[label] = { label, values }` |
| a gap surface's `d` | left out; `gaps[label].values[0][0]` supplies it |
| `zoomPositions`, `nominalFno[]`, `zoomStopSemiDiameters`, `zoomCloseFocusM`, `zoomLabels` | `zoom.stations[i].focalLengthMm`, `.nominalFNumber`, `.stopSemiDiameter`, `.closeFocusM`, `.label` |
| `zoomApertureModel`, `zoomStep` | `zoom.apertureModel`, `zoom.step` |
| `nominalFno` (a number) | `aperture.nominalFNumber` |
| `closeFocusM`, `focusPositions`, `focusStep`, `focusDescription` | `focus.closeFocusM`, `.keyframes`, `.step`, `.description` |
| `publishedStations.zoom` / `.focus` | `zoom.stations[i].published` / `.publishedFocus`; on a prime, `focus.published` |
| `finiteConjugates[]` (`focusT`, `zoomT`) | `focus.conjugates[]` (`keyframe`, `zoomStation`) |
| `fstopSeries`, `maxFstop`, `apertureStep`, `apertureBlades`, `apertureBladeRoundedness` | `aperture.fStops`, `.maxFNumber`, `.step`, `.blades`, `.bladeRoundedness` |
| `STO` `sd` | kept only where the radius is authored (folded systems and stops inside glass); otherwise left out |
| `aberrationControl.var` / `.varLabels` | `aberrationControl.gaps` |
| `svgW`, `svgH`, `scFill`, `yScFill`, `maxAspectRatio`, `lensShiftFrac` | `layout.*` |
| `rayFractions`, `rayLeadFrac`, `offAxisFieldFrac`, `offAxisFractions` | `rays.*` |
| `gapSagFrac`, `maxRimAngleDeg` | `checks.*` |
| teleconverter `minHostFno` | `minHostFNumber` |

Names not listed keep their name and place: `projection`, `opticalPath`, `perspectiveControl`, `rearPlates`,
`groups`, `doublets`, every element field but `fl` and the span, and every surface field but `nd`, `elemId` and the
aspheres.

### V1 conventions an audit may assume

- **Surface media:** V1 wrote each surface's `nd` (index after the surface) and `elemId` (0 for air). A cemented
  junction carried the next element's `elemId`, as a V2 junction carries its `medium`.
- **Aspheres:** V1 kept them in a separate `asph` object keyed by surface label, with `K` and `A4`–`A14` required on
  every entry, so a printed zero could not be told from padding. Conversion drops zero terms; an audit that relies on a
  printed zero gets it back as an explicit `0`.
- **Variable gaps:** V1 wrote `var[label]` as `[d_infinity, d_close]` on a prime (one value per `focusPositions` entry)
  and as one such vector per zoom station on a zoom, with labels in `varLabels` pairs. The surface's own `d` repeated
  the first value: the converter requires the two to be exactly equal and refuses a file where they differ.
- **Stop radius:** V1 required `sd` on every surface, the stop included. For a stop whose radius is derived or comes
  from a schedule, the engine never read that value: it replaced it with the radius traced from the design f-number,
  or with the schedule. A V1 audit's comment on a stop `sd` (a hand calibration to an f-number, a figure reading)
  describes a value the engine did not use; conversion drops it and lists it in its report.
- **Stations:** V1 kept per-station facts in parallel arrays (`zoomPositions`, `nominalFno[]`, `zoomCloseFocusM`,
  `zoomStopSemiDiameters`) and addressed conjugates by normalized coordinates (`focusT`, `zoomT`); V2 holds them on the
  station record and addresses conjugates by index.
- **Defaults:** V1 files relied on a spread of catalog defaults; V2 ingest applies the same values from the schema
  table ([Schema defaults](#schema-defaults)).
