# Patent Relationship Map — Implementation Plan

Status: **SHIPPED 2026-07-22** on branch `ronbuening/RelationMapping` (F25 in
`FEATURE_ADDITION_PLAN.md`). All six milestones landed; see the per-milestone status notes below and
the branch record `agent_docs/records/relationship-map-2026-07-22.md`. The one deviation from this
spec: `scripts/author-metadata.mjs` is backed by a hand-written `scripts/author-metadata.d.mts`
declaration file for `tsc`, which the plan did not anticipate — `buildAssigneeMetadata` and a
`patentAssignees?` field had to be added there too (M1). Optional M6 polish items (recenter
transition, decade tint, double-click reset) were intentionally skipped.

This document is a self-contained spec. Signatures and file references were verified against the
working tree on 2026-07-22; re-locate by symbol name if a line has drifted, and STOP if reality
contradicts a description here (the feature may have partially shipped — check git log first).

## What We Are Building

An interactive **relationship map** page at **`/relationships`**. The user selects an inventor
(patent author) or an assignee; the page draws a two-ring "ego graph" as inline SVG:

- **Center node** — the selected inventor or assignee.
- **Inner ring** — every unique patent that party appears on (one node per patent, sorted by
  year), connected to the center by an edge.
- **Outer ring** — every *other* inventor and assignee named on those patents (one node per
  party, deduplicated), connected by an edge to each patent they appear on.

Interactions:

- Clicking an **outer-ring party recenters the map on that party** (URL query updates, browser
  Back walks the exploration history backwards).
- Clicking a **patent node opens a detail card** below the map: patent number, year, assignees,
  inventors (each clickable → recenter), and links to the interactive lens diagram(s) derived
  from that patent.
- Hovering a node highlights its connected edges.
- Mouse-wheel zoom / drag pan via the existing `useViewBoxZoom` hook.
- With no selection, the page shows an intro + searchable entity picker (this is also the
  prerendered SEO content).

No new npm dependencies. No canvas, no d3, no force simulation — a deterministic radial layout
computed by a pure function, rendered as inline SVG with inline styles, exactly like the rest of
the site.

## Read These First

- `agent_docs/adding_a_route.md` — route + prerender + sitemap wiring (note: `routeManifest.tsx`
  now uses `load: () => import(...)` loaders; follow the existing entries in that file, not the
  doc's "static import" phrasing).
- `agent_docs/code_conventions.md`, `agent_docs/commenting_guide.md` — module headers, naming.
- `agent_docs/testing_recipes.md` and `__tests__/testUtils.tsx` — `renderWithRouter`,
  `clearBrowserState`, `installMatchMediaMock`.
- `agent_docs/changelog.md`, `agent_docs/record_keeping.md` — ship rituals.

## Locked Design Decisions (do not re-litigate while implementing)

1. **One static route `/relationships`; focus entity in a query param** `?focus=<role>:<slug>`,
   e.g. `/relationships?focus=author:ludwig-bertele` or `?focus=assignee:canon-inc`. One
   prerendered page, no per-entity routes, no sitemap bloat, and recentering is just a
   `setSearchParams` call. Canonical URL is always `${SITE_URL}/relationships` (no query).
2. **Assignees get build-generated slugs**, exactly like authors already do, emitted as a new
   `assignees` array in `src/generated/build-metadata.json`. Runtime never invents slugs.
3. **Graph data comes from `LENS_SUMMARIES` only** (lightweight generated catalog) — never from
   the full prescription catalog. Hidden/debug lenses are excluded (visible-only `SUMMARY_KEYS`).
4. **Node identity is namespaced**: `author:<slug>`, `assignee:<slug>`, `patent:<patentNumber>`.
   A person who appears both as an inventor and as an assignee is two distinct nodes — that is
   correct, not a bug.
5. **Layout is deterministic and collision-free by construction**: evenly spaced ring slots,
   radii grow with node count. No iterative force layout.
6. **Recentering pushes history** (default `setSearchParams` behavior — do NOT pass
   `{ replace: true }`), so Back retraces the user's exploration path.
7. **Patent detail selection is component state, not URL state** (only `focus` is shareable).
8. **Reuse existing theme tokens only.** Do not add new theme tokens unless truly stuck; if you
   must, follow `agent_docs/theme_tokens.md` and update all four variants.
9. **SSR safety via a `mounted` flag** (pattern below), not via hydration-mismatch tolerance.

## Existing Infrastructure To Reuse (verified paths)

| What | Where | Use for |
| --- | --- | --- |
| Author index (name, slug, lensKeys, patentCount) | `src/utils/catalog/authorCatalog.ts` (`AUTHORS`, `getAuthorBySlug`, `getAuthorByName`, `authorPathForName`) | center/party lookup |
| Per-author unique patent records | `patentsForAuthor()` in the same file | generalize to assignees (M2) |
| Lightweight lens data incl. `patentAuthors` / `patentAssignees` / `patentNumber` / `patentYear` | `src/utils/catalog/lensSummaries.ts` (`LENS_SUMMARIES`, `SUMMARY_KEYS`) | graph assembly |
| Build-time author slug generation | `scripts/author-metadata.mjs` (`buildAuthorMetadata`, `authorSlugBase`, `stableHash`) | generalize for assignees (M1) |
| Build metadata assembly | `scripts/generate-build-metadata.mjs` (`collectRoutes`, metadata object ~line 245) | add `/relationships` + `assignees` |
| Route freshness | `buildRouteFreshness` in `scripts/build-metadata-lib.mjs` | add `/relationships` entry |
| Route table | `src/routes/routeManifest.tsx` | register page |
| SVG zoom/pan hook | `src/components/hooks/useViewBoxZoom.ts`; simplest consumer to mimic: `src/components/display/overlays/AsphericComparisonOverlay.tsx:222` | map zoom/pan |
| SSR-safe client-only rendering | `src/components/ClientOnly.tsx` (we inline the same `mounted` mechanism; read it to understand why) | avoid hydration mismatch |
| Page chrome, SEO, themes | `PageNavBar`, `SEOHead`, `usePageThemeToggle`, `PAGE_BASE_STYLE`, `structuredData.ts` — copy usage from `src/pages/AuthorsIndexPage.tsx` | page shell |
| Search text normalization | `normalizeSearchText` (exported) in `src/utils/catalog/searchCatalog.ts` | picker filtering |
| Patent card visual style | `PatentCard` inside `src/pages/AuthorPage.tsx` (local component — copy the styling, don't import) | detail card |
| Test helpers | `__tests__/testUtils.tsx`; page-test conventions in `__tests__/src/pages/pageRenders.test.tsx` (SEOHead mock, `LocationEcho`) | all tests |

---

## Milestone 1 — Build-time assignee index  ✅ DONE

(Deviation: also updated `scripts/author-metadata.d.mts` — the `.mjs` has a companion hand-written
type declaration that must export `buildAssigneeMetadata` and carry `patentAssignees?`.)

Goal: `build-metadata.json` gains `assignees: [{ name, slug, lensKeys, patentCount }]` with the
same slug rules authors already have.

**Files to touch**

- `scripts/author-metadata.mjs` — **modified**
- `scripts/generate-build-metadata.mjs` — **modified**
- `__tests__/scripts/authorMetadata.test.ts` — **modified**

**Reference to mimic**: the existing `buildAuthorMetadata` in `scripts/author-metadata.mjs` — the
assignee builder is the same function parameterized by field.

**Steps**

1. In `scripts/author-metadata.mjs`, rename the body of `buildAuthorMetadata` into a new internal
   function `buildPatentPartyMetadata(lensSummaries, field)` where `field` is
   `"patentAuthors"` or `"patentAssignees"` (the only change: `lens[field] ?? []` instead of
   `lens.patentAuthors ?? []`). Export two thin wrappers so existing imports keep working
   unchanged:
   ```js
   export function buildAuthorMetadata(lensSummaries) {
     return buildPatentPartyMetadata(lensSummaries, "patentAuthors");
   }
   export function buildAssigneeMetadata(lensSummaries) {
     return buildPatentPartyMetadata(lensSummaries, "patentAssignees");
   }
   ```
   Keep the `visible === false` skip, the slug-collision hash suffix, and the sorted output
   exactly as they are. Update the file's JSDoc.
2. In `scripts/generate-build-metadata.mjs`: import `buildAssigneeMetadata`, compute
   `const assignees = buildAssigneeMetadata(lensSummaries);` next to the existing `authors`
   line (~line 245), and add `assignees` to the `metadata` object literal. Do **not** add
   per-assignee routes to `collectRoutes` (assignees have no pages).
3. Extend `__tests__/scripts/authorMetadata.test.ts` with a `buildAssigneeMetadata` describe
   block: dedupes one assignee across lenses; skips `visible: false` lenses; counts unique
   patent numbers; two assignees whose names slugify identically get distinct hash-suffixed
   slugs. Mirror the existing author test style.
4. Run `npm run generate:metadata` and confirm `src/generated/build-metadata.json` now contains
   an `assignees` array (grep for `"assignees"`).

**Gotchas** (`agent_docs/gotchas.md`)

- `src/generated/` is gitignored and regenerated by `pretest`/`pretypecheck` hooks — never
  hand-edit the JSON; after changing the scripts run `npm run generate:metadata` before relying
  on the new field in `npm run dev`.

**Verification**: `npm run test -- authorMetadata` passes;
`grep '"assignees"' src/generated/build-metadata.json` matches;
`node -e "const m=require('./src/generated/build-metadata.json');console.log(m.assignees.length, m.assignees[0])"`
prints a count > 0 and a `{name, slug, lensKeys, patentCount}` object.

---

## Milestone 2 — Runtime catalogs + graph assembly (pure data layer)  ✅ DONE

Goal: pure functions that turn a focus party into a renderable graph object. No React yet.

**Files to touch**

- `src/utils/catalog/assigneeCatalog.ts` — **new**
- `src/utils/catalog/authorCatalog.ts` — **modified** (generalize the patent scan)
- `src/utils/catalog/relationshipGraph.ts` — **new**
- `__tests__/src/utils/catalog/relationshipGraph.test.ts` — **new**

**Data-type contract**

`assigneeCatalog.ts` mirrors `authorCatalog.ts`'s index portion:

```ts
export interface AssigneeMetadata {
  name: string;
  slug: string;
  lensKeys: string[];
  patentCount: number;
}
export const ASSIGNEES = buildMeta.assignees as AssigneeMetadata[];
export function getAssigneeBySlug(slug: string): AssigneeMetadata | undefined;
export function getAssigneeByName(name: string): AssigneeMetadata | undefined;
```

`relationshipGraph.ts`:

```ts
export type PartyRole = "author" | "assignee";

export interface PartyRef {
  role: PartyRole;
  name: string; // display name as it appears in patent metadata
  slug: string; // from AUTHORS / ASSIGNEES index
}

export interface GraphPatentNode {
  id: string; // `patent:${patentNumber}`
  patentNumber: string; // may be the fallback "Patent source for <lens name>"
  patentYear?: number;
  authors: string[];
  assignees: string[];
  lenses: { key: string; name: string; specs?: string[] }[];
}

export interface GraphPartyNode {
  id: string; // `${role}:${slug}`
  ref: PartyRef;
  patentIds: string[]; // ids of connected patents within this graph
  hasPage: boolean; // true for authors (/authors/:slug exists), false for assignees
}

export interface RelationshipGraph {
  center: GraphPartyNode;
  patents: GraphPatentNode[]; // sorted by (patentYear ?? Infinity, patentNumber)
  parties: GraphPartyNode[]; // sorted by name; NEVER contains the center
  edges: { from: string; to: string }[]; // center→patent plus patent→party
}

/** Parse "?focus=" values like "author:ludwig-bertele". Returns undefined for
 *  anything malformed or unknown so callers can fall back to the picker. */
export function resolveFocusParam(raw: string | null): PartyRef | undefined;

/** Build the two-ring ego graph for a focus party. */
export function buildRelationshipGraph(focus: PartyRef): RelationshipGraph;
```

Example: for `{role: "author", name: "…", slug: "…"}` whose two lenses share one patent with a
second inventor and one assignee, the result has 1 patent node (2 lenses listed on it), 2 party
nodes (one `author:…`, one `assignee:…`), and 3 edges.

**Steps**

1. Create `assigneeCatalog.ts` by copying the index/lookup portion of `authorCatalog.ts`
   (the `AUTHORS` constant, both `Map`s, `getAuthorBySlug`, `getAuthorByName`) and renaming to
   assignee equivalents. Do not copy `patentsForAuthor`/`groupAuthorPatents`.
2. In `authorCatalog.ts`, generalize the scan inside `patentsForAuthor` into an exported
   `patentsForParty(name: string, role: "author" | "assignee"): AuthorPatent[]` — identical
   logic except the membership test is `lens.patentAuthors?.includes(name)` for `"author"` and
   `lens.patentAssignees?.includes(name)` for `"assignee"`. Reimplement `patentsForAuthor(name)`
   as `patentsForParty(name, "author")` so `AuthorPage` behavior is untouched. Keep the fallback
   patent number `` `Patent source for ${lens.name}` `` and the merge-by-patent-number behavior
   exactly as they are.
3. Create `relationshipGraph.ts`:
   - `resolveFocusParam`: split on the FIRST `:` only; role must be exactly `author` or
     `assignee`; look the slug up via `getAuthorBySlug` / `getAssigneeBySlug`; return
     `undefined` on any failure.
   - `buildRelationshipGraph(focus)`:
     a. `const records = patentsForParty(focus.name, focus.role);` (already merged per patent,
        already sorted by year).
     b. Map each record to a `GraphPatentNode` (id `patent:` + patentNumber).
     c. Collect parties: for each patent, every name in `authors` (role `author`) and every name
        in `assignees` (role `assignee`), EXCEPT the entry equal to the center (same role AND
        same name — a co-author named on the patent as an assignee still becomes an assignee
        node). Look each name up in the matching index to get its slug; if the lookup misses
        (defensive — should not happen since both indexes are built from the same visible
        summaries), skip that name silently.
     d. Deduplicate parties by node id, accumulating `patentIds` (keep each list sorted and
        unique). `hasPage` is `role === "author"`.
     e. Edges: one `{from: center.id, to: patent.id}` per patent, plus one
        `{from: patent.id, to: party.id}` per (patent, party named on it) pair.
     f. Center node: `{id, ref: focus, patentIds: all patent ids, hasPage: role === "author"}`.
4. Tests (`relationshipGraph.test.ts`, plain vitest, no jsdom). Use the REAL catalog and assert
   invariants over every entity rather than hard-coding names (lens data changes weekly):
   - For every entry in `AUTHORS` and in `ASSIGNEES` (build the `PartyRef` from the index):
     graph center id matches; `parties` never contains the center id; every edge endpoint is a
     node id present in the graph; every party has ≥ 1 patentId; all patent ids are unique;
     patents are sorted by year-then-number. (Loop over all — it is a few hundred cheap scans.)
   - `resolveFocusParam`: valid author, valid assignee, unknown slug → undefined, bad role →
     undefined, `null`/empty/no-colon → undefined, name containing a colon after the role still
     parses (split on first colon only).
   - If any name exists in BOTH indexes, assert its two node ids differ (guard with a runtime
     find; skip the assertion if no such name exists).

**Gotchas**

- gotchas.md: "Test files are `.ts` — Vitest resolves `.js` import extensions to `.ts` sources
  automatically" — all imports in src use the `.js` suffix; copy that style.
- Do NOT import `lensCatalog.ts` (full prescriptions) anywhere in this feature — summaries only,
  or index pages start shipping the multi-megabyte chunk.

**Verification**: `npm run typecheck && npm run test -- relationshipGraph authorMetadata` green;
`npm run test` still green (AuthorPage tests unaffected by the `patentsForParty` refactor).

---

## Milestone 3 — Radial layout engine (pure geometry)  ✅ DONE

Goal: a pure function mapping a `RelationshipGraph` to SVG coordinates. No React.

**Files to touch**

- `src/components/relationshipMap/layout.ts` — **new**
- `__tests__/src/components/relationshipMap/layout.test.ts` — **new**

**Reference to mimic**: the pure-engine / renderer split used by mount diagrams
(`src/optics/mount/` computes, `src/components/mount/` renders). This layout module is the
"engine": deterministic, no React imports, unit-testable with synthetic graphs.

**Data-type contract**

```ts
export interface LayoutNode {
  id: string;
  x: number;
  y: number;
  r: number; // node circle radius
  label: string; // truncated display label
  fullLabel: string; // untruncated, for <title>
  labelX: number;
  labelY: number;
  labelAnchor: "start" | "middle" | "end";
}

export interface LayoutEdge {
  from: string;
  to: string;
  x1: number; y1: number; x2: number; y2: number;
}

export interface RelationshipLayout {
  width: number;  // viewBox width
  height: number; // viewBox height
  nodes: LayoutNode[];           // center first, then patents, then parties
  nodeById: Record<string, LayoutNode>;
  edges: LayoutEdge[];
}

export function layoutRelationshipGraph(graph: RelationshipGraph): RelationshipLayout;
export function truncateLabel(value: string, max?: number): string; // exported for tests
```

**Constants** (module-level, named):

```ts
const CENTER_R = 26;
const PATENT_R = 10;
const PARTY_R = 14;
const MIN_PATENT_ARC = 48;  // min arc length between adjacent patent nodes, SVG units
const MIN_PARTY_ARC = 56;
const MIN_RING_1 = 140;     // min patent-ring radius
const MIN_RING_GAP = 130;   // min gap between ring 1 and ring 2
const LABEL_MARGIN = 170;   // outer padding so party labels are never clipped
const LABEL_MAX_CHARS = 24;
```

**Algorithm** (all angles in radians; screen coordinates, +y down; `θ = -π/2` is the top;
increasing θ goes clockwise on screen):

1. `n = graph.patents.length` (always ≥ 1 — every lens yields a patent record, including the
   fallback pseudo-patents), `m = graph.parties.length` (can be 0).
2. Radii:
   - `R1 = Math.max(MIN_RING_1, (n * MIN_PATENT_ARC) / (2 * Math.PI))`
   - `R2 = Math.max(R1 + MIN_RING_GAP, (m * MIN_PARTY_ARC) / (2 * Math.PI))`
   - `half = R2 + LABEL_MARGIN`; `width = height = 2 * half`; center `cx = cy = half`.
   - If `m === 0`, still use `R2` for sizing (it degrades to `R1 + MIN_RING_GAP`).
3. Patent angles (input order is already year-sorted): `θi = -π/2 + (2π * i) / n`.
   Position: `x = cx + R1 * cos θi`, `y = cy + R1 * sin θi`.
4. Party ordering — compute each party's *preferred angle* as the **circular mean** of its
   connected patents' angles. Do NOT average raw angle values (the mean of 350° and 10° must be
   0°, not 180°). Correct formula:
   `pref = Math.atan2(Σ sin θp, Σ cos θp)` over the party's `patentIds`.
   Normalize to `[0, 2π)` via `prefNorm = ((pref % (2*Math.PI)) + 2*Math.PI) % (2*Math.PI)` and
   sort parties by `prefNorm` ascending, tie-break by `ref.name.localeCompare`.
5. Party positions — evenly spaced slots in that sorted order, ANCHORED at the first sorted
   party's preferred angle (do not anchor at the top: a fixed anchor can rotate every party far
   from its preferred side — e.g. two parties preferring top and bottom could land bottom and
   top): `φj = prefNorm₀ + (2π * j) / m`,
   `x = cx + R2 * cos φj`, `y = cy + R2 * sin φj`. Even slots make overlap impossible by
   construction; the preferred-angle ordering plus first-party anchor keeps parties near their
   patents (a single party lands exactly on its preferred angle).
6. Labels: `label = truncateLabel(name, LABEL_MAX_CHARS)` (ellipsis when longer). Placement by
   angle of the node (use the node's own θ/φ; for the center use anchor "middle" below the
   circle):
   - `cos θ > 0.35` → anchor `start`, `labelX = x + r + 6`, `labelY = y + 4`
   - `cos θ < -0.35` → anchor `end`, `labelX = x - r - 6`, `labelY = y + 4`
   - otherwise → anchor `middle`, `labelX = x`, `labelY = sin θ < 0 ? y - r - 8 : y + r + 16`
7. Edges: straight segments, endpoints at node centers (nodes are drawn on top of edges, so no
   trimming math is needed). Center→patent uses center and patent positions; patent→party uses
   patent and party positions.
8. Patent node label: the patent number (truncated); year is rendered by the component, not the
   layout.

**Steps**

1. Implement exactly the algorithm above with the constants above.
2. Tests with synthetic graphs (build minimal `RelationshipGraph` literals by hand — no catalog
   import, so tests are stable):
   - determinism: two calls with the same input are `toEqual`.
   - n = 1: single patent at the top (`x ≈ cx`, `y ≈ cy - R1` within 1e-6).
   - n = 8, m = 0: adjacent patent angular gaps all equal `2π/8` (derive angle back via
     `Math.atan2(y - cy, x - cx)`).
   - radii formulas: with n = 40, `R1 ≥ (40 * 48) / (2π) - 1e-6`; with m = 40, both
     `R2 ≥ R1 + MIN_RING_GAP - 1e-6` and `R2 ≥ (40 * 56) / (2π) - 1e-6` hold (the `max` in the
     formula guarantees both — this test catches accidental formula edits).
   - collision guarantee: for a graph with 12 parties, every pair of party nodes is at least
     `MIN_PARTY_ARC * 0.9` apart (adjacent slots sit one chord apart, `2 * R2 * sin(π/m)`,
     which comfortably exceeds `0.9 ×` the arc spacing at these sizes).
   - circular-mean placement across the wrap: n = 12; party A connected to patents 0 and 11
     (angles straddling the top — naive averaging would put it at the bottom), party B connected
     to patent 6 (bottom). Assert A's final `y < cy` and B's final `y > cy` — this catches both
     a naive non-circular mean and a wrong slot anchor.
   - m = 1: the lone party sits exactly at its preferred angle (within 1e-6).
   - `truncateLabel("short")` unchanged; a 40-char name ends with `…` and has length
     `LABEL_MAX_CHARS`.
   - every `LayoutNode` coordinate is finite (`Number.isFinite`) for graphs with n ∈ {1, 3, 50},
     m ∈ {0, 1, 60}.

**Gotchas**

- `Math.atan2(0, 0)` returns 0 — harmless here (a party always has ≥ 1 patent, so the sums are
  unit-vector sums that only vanish for exactly opposite pairs; the resulting 0 angle is an
  acceptable arbitrary preference, do not special-case it).
- Keep the module free of React/theme imports so it stays a pure engine.

**Verification**: `npm run test -- relationshipMap` green; `npm run typecheck` green.

---

## Milestone 4 — SVG map components  ✅ DONE

(The component test file adds an explicit `afterEach(cleanup)` — this repo's Testing Library setup
does not auto-clean between cases.)

Goal: the interactive SVG renderer plus the entity picker and patent detail card. Still no page.

**Files to touch**

- `src/components/relationshipMap/RelationshipMap.tsx` — **new**
- `src/components/relationshipMap/RelationshipEntityPicker.tsx` — **new**
- `src/components/relationshipMap/PatentDetailCard.tsx` — **new**
- `__tests__/src/components/relationshipMap/relationshipMap.test.tsx` — **new**

**Component contracts**

```tsx
// RelationshipMap.tsx
interface RelationshipMapProps {
  graph: RelationshipGraph;
  theme: Theme; // src/types/theme.ts
  selectedPatentId: string | null;
  onSelectPatent: (patentId: string | null) => void;
  onFocusParty: (ref: PartyRef) => void; // recenter request — parent owns URL state
}

// RelationshipEntityPicker.tsx
interface RelationshipEntityPickerProps {
  theme: Theme;
  onPick: (ref: PartyRef) => void;
  compact?: boolean; // compact = single-row search box (used above an active map)
}

// PatentDetailCard.tsx
interface PatentDetailCardProps {
  patent: GraphPatentNode;
  centerRef: PartyRef;
  theme: Theme;
  onFocusParty: (ref: PartyRef) => void;
  onClose: () => void;
}
```

**RelationshipMap rendering rules**

- `const layout = useMemo(() => layoutRelationshipGraph(graph), [graph]);`
- Zoom/pan: `const zoom = useViewBoxZoom(layout.width, layout.height, true);` and spread the
  handlers onto the `<svg>` exactly as `AsphericComparisonOverlay.tsx` does (wheel, pointer,
  touch, `viewBox={zoom.viewBox}`). Mount the component from the page with
  `key={graph.center.id}` so zoom state resets on every recenter. Add a small "Reset view"
  button (theme `toggleBtn` style from `src/utils/style/styles.ts`) shown only when
  `zoom.state.zoom > 1`.
- `<svg>` props: `role="img"`, `aria-label` like
  `"Relationship map centered on <name>: <n> patents, <m> related inventors and assignees"`,
  `style={{ width: "100%", height: "auto", display: "block", touchAction: "none", cursor: isPanning ? "grabbing" : "grab" }}`,
  and `viewBox` from the hook.
- Draw order: edges first, then nodes, then labels (so text is never under lines).
- Edges: `<line>` with `stroke={t.axis}`, `strokeWidth={1}`, `opacity` 0.5 normally; 1 and
  `strokeWidth` 2 when either endpoint is the hovered or selected node; `pointerEvents="none"`.
- Nodes (one `<g>` per node):
  - center: `<circle r={CENTER_R}>` fill `t.panelBg`, stroke `t.sliderAccent`, strokeWidth 2.
  - patent: `<circle r={PATENT_R}>` fill `t.panelBg`, stroke `t.stop`; when
    `selectedPatentId === id` use stroke `t.toggleActiveBorder` and strokeWidth 3.
  - party author: `<circle r={PARTY_R}>` fill `t.panelBg`, stroke `t.rayWarm`.
  - party assignee: `<rect>` (side `2 * PARTY_R * 0.85`, centered, rx 3) fill `t.panelBg`,
    stroke `t.rayCool` — the shape difference doubles as a colorblind-safe role cue.
  - hovered: strokeWidth 3.
- Labels: `<text>` with `fontSize={11}`, `fill` — center `t.title`, patents `t.label`, parties
  `t.body`; `fontFamily` inherits from the page (JetBrains Mono via `PAGE_BASE_STYLE`); include
  `<title>{fullLabel}</title>` inside each node `<g>` for hover tooltips. For patent nodes append
  a second `<tspan>` (or second text line) with the year in `t.muted` when present.
- Interaction per node `<g>`:
  - party: `role="button"`, `tabIndex={0}`,
    `aria-label={"Recenter map on " + name + (role === "assignee" ? " (assignee)" : " (inventor)")}`,
    `onClick={() => onFocusParty(ref)}`, `onKeyDown` Enter/Space → same, `cursor: "pointer"`.
  - patent: same pattern → `onSelectPatent(selectedPatentId === id ? null : id)`.
  - center: not clickable in the SVG (its page link renders next to the map header, see M5).
  - hover: `onPointerEnter/Leave` set `hoveredNodeId` component state.
- A legend row under the SVG (plain flexbox divs, 0.7rem, `t.muted`): circle-outline swatches for
  Inventor / Assignee / Patent using the same stroke colors.

**RelationshipEntityPicker rules**

- Build the option list once with `useMemo`: authors mapped to
  `{ ref: {role:"author", name, slug}, patentCount, lensCount: lensKeys.length }` merged with
  assignees likewise; sort by `patentCount` desc then name asc.
- A text `<input>` (styles copied from an existing input — see `CatalogSearchBox.tsx` for the
  look: `t.selectorBg`, `t.selectorBorder`, `t.selectorText`) filters by
  `normalizeSearchText(name).includes(normalizeSearchText(query))`.
- Render at most 40 rows; footer line "Showing 40 of N — type to narrow" (`t.muted`) when
  truncated. Each row is a `<button>` (grid cards like `AuthorsIndexPage.tsx`'s grid) showing
  name, a small role chip ("inventor" / "assignee"), and "X patents · Y lenses".
  `onClick={() => onPick(ref)}`.
- `compact` variant: just the input plus an absolutely-positioned dropdown list (max 8 rows) —
  if this proves fiddly, ship the full-size picker in both spots; compact is cosmetic.

**PatentDetailCard rules**

- Copy the visual structure of `PatentCard` in `src/pages/AuthorPage.tsx` (panel background,
  patent number + year header, assignee line, inventors line, divider, lens link list using
  `LENS_LINK_BASE_STYLE`). Deliberately a separate component — the AuthorPage card links names to
  author pages, this one recenters the map; do NOT refactor AuthorPage.
- Inventors and assignees render as buttons that call
  `onFocusParty({role, name, slug})` — resolve slug via `getAuthorByName` / `getAssigneeByName`;
  names that fail to resolve render as plain text. Skip the button for the party that IS the
  current center (render plain text, like AuthorPage does for `currentAuthor`).
- Lens links are real `<Link to={"/lens/" + key}>` items.
- A small "Close" button top-right calling `onClose`.

**Tests** (`relationshipMap.test.tsx`; `renderWithRouter`; `HelmetProvider` not needed here
since no SEOHead). Every `.test.tsx` file MUST start with `// @vitest-environment jsdom` as its
literal first line — `__tests__/testConventions.test.ts` fails the suite otherwise (this applies
to the M5 page test too):

- Pick a real focus programmatically: find the first author in `AUTHORS` whose graph has ≥ 1
  party (`AUTHORS.map(a => buildRelationshipGraph(...)).find(g => g.parties.length > 0)`), and
  fail the test with a clear message if none exists.
- Render `RelationshipMap` with spy callbacks: clicking a party node calls `onFocusParty` with
  that ref; keyboard Enter on a focused party node does the same; clicking a patent node calls
  `onSelectPatent` with its id; clicking again with `selectedPatentId` set calls it with `null`.
- `PatentDetailCard`: renders lens links with correct `href`; clicking a non-center inventor
  name calls `onFocusParty`; the center's own name is not a button.
- Picker: typing a fragment of a known author name filters the list; clicking the row calls
  `onPick` with the right `PartyRef`; empty query shows at most 40 rows.
- Every interactive node has an accessible name (`getAllByRole("button", { name: /Recenter/ })`).

**Gotchas**

- Inline styles only — no CSS files, no `<style>` tags (site-wide constraint).
- gotchas.md: "Theme colors use semantic names … update all 4 themes when changing colors" — we
  only READ existing tokens, so no theme edits should be needed.
- SVG `<text>` does not wrap; the layout already truncates — never render `fullLabel` as the
  visible text.
- Do not use HTML `<a>`/react-router `<Link>` INSIDE the `<svg>` — use `role="button"` `<g>`
  elements and let the parent translate to navigation/state. `<Link>` is fine in the picker,
  legend, and detail card (normal HTML).

**Verification**: `npm run test -- relationshipMap` green; `npm run typecheck`,
`npm run lint`, `npm run format:check` green.

---

## Milestone 5 — Page, route, build wiring, entry links  ✅ DONE

Goal: `/relationships` live end-to-end: prerendered intro/picker state, client-side map, links
from existing pages.

**Files to touch**

- `src/pages/RelationshipMapPage.tsx` — **new**
- `src/routes/routeManifest.tsx` — **modified** (one entry)
- `scripts/generate-build-metadata.mjs` — **modified** (`collectRoutes` static list)
- `scripts/build-metadata-lib.mjs` — **modified** (`buildRouteFreshness`)
- `src/components/homepage/IndexNavBar.tsx` — **modified** (one link)
- `src/pages/AuthorPage.tsx` — **modified** (one link)
- `src/pages/AuthorsIndexPage.tsx` — **modified** (one link)
- `__tests__/src/pages/relationshipMapPage.test.tsx` — **new**

**Reference to mimic**: `src/pages/AuthorsIndexPage.tsx` for the page shell (SEOHead + PageNavBar
+ PAGE_BASE_STYLE + usePageThemeToggle); `src/components/ClientOnly.tsx` for the mounted-flag
rationale.

**Page behavior spec**

```
URL                                   → rendered content
/relationships                        → intro + full picker + "most connected" link columns
/relationships?focus=author:<slug>    → compact picker + map centered on that author
/relationships?focus=assignee:<slug>  → compact picker + map centered on that assignee
/relationships?focus=<garbage>        → same as no focus (silent fallback to picker)
```

**SSR-safety pattern (copy exactly; this is Locked Decision 9).** The prerenderer renders
`/relationships` with NO query string. If the first client render read the query directly, a
shared link with `?focus=` would hydrate different content than the server HTML and React would
log a mismatch and re-render. Gate all query-dependent content behind a mounted flag:

```tsx
const [searchParams, setSearchParams] = useSearchParams();
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
/* Server render and first client render agree (no focus); the real focus
 * appears one paint after hydration. Same mechanism as ClientOnly.tsx. */
const focus = mounted ? resolveFocusParam(searchParams.get("focus")) : undefined;
const graph = useMemo(() => (focus ? buildRelationshipGraph(focus) : undefined), [focus]);
```

- Recenter handler: `setFocusParty(ref)` does
  `setSearchParams({ focus: ref.role + ":" + ref.slug })` (NO `replace` option) and clears the
  selected patent state. Picker `onPick` uses the same handler.
- Selected patent: `useState<string | null>(null)`; render `PatentDetailCard` below the map when
  set (look the node up in `graph.patents`).
- Map header row when focused: `<h2>` with the center name, a role chip, and — when
  `center.hasPage` — a `<Link to={"/authors/" + slug}>View patent list page →</Link>`. Also a
  "Change focus" affordance: render the picker in `compact` mode above the map.
- No-focus intro (THIS is the prerendered SEO content — keep it real):
  - `<h1>` "Patent Relationship Map", one explanatory paragraph.
  - Full picker.
  - Two link columns: "Most-connected inventors" and "Most-connected assignees" — top 12 of
    each index by `patentCount`, each an ordinary
    `<Link to={"/relationships?focus=author:" + slug}>` (crawlable, and they exercise the
    query-param path).
- SEO: `SEOHead` with title `Patent Relationship Map — ${SITE_NAME}`, description mentioning
  the inventor/assignee counts, `canonicalURL = ${SITE_URL}/relationships`,
  `collectionPageJsonLd` + `breadcrumbJsonLd` (Home → Relationships), copying
  `AuthorsIndexPage.tsx` usage. The head does NOT change with `focus` (canonical stays static).
- PageNavBar breadcrumb: Home / Relationship map.

**Wiring steps**

1. Create the page as specced. Module header comment per `agent_docs/commenting_guide.md`.
2. `routeManifest.tsx`: add
   `{ path: "/relationships", load: () => import("../pages/RelationshipMapPage.js") },` above the
   `*` catch-all (mimic neighbors; the manifest uses loader entries, NOT `React.lazy`).
3. `generate-build-metadata.mjs` → `collectRoutes`: add `"/relationships"` to the static-route
   array (next to `"/authors"`).
4. `build-metadata-lib.mjs` → `buildRouteFreshness`: add
   `routeFreshness["/relationships"] = combineFreshnessEntries(allLensFreshness, fallbackDate);`
   (same inputs as `/authors` — the map derives from all lens data).
5. `IndexNavBar.tsx`: add `{ label: "Relationships", to: "/relationships" }` after the Authors
   entry.
6. `AuthorPage.tsx`: under the patent-count paragraph, add
   `<Link to={"/relationships?focus=author:" + author.slug}>View in relationship map →</Link>`
   styled with `t.descLinkColor`, fontSize 0.75rem.
7. `AuthorsIndexPage.tsx`: one sentence in the intro paragraph linking to `/relationships`.
8. Page tests (`relationshipMapPage.test.tsx`) following `pageRenders.test.tsx` conventions
   (mock `SEOHead`, use `clearBrowserState`, `installMatchMediaMock`, `renderWithRouter`, and the
   `LocationEcho` trick):
   - `/relationships` renders the h1, picker input, and both "most-connected" columns.
   - `/relationships?focus=author:<real slug from AUTHORS[0]>` — after `waitFor`, the map
     `role="img"` element appears with an aria-label containing the author name.
   - `?focus=nonsense` renders the intro (no `role="img"`).
   - Clicking a party node updates the location query (assert via `LocationEcho`) and renders
     the new center's aria-label after rerender.
   - Clicking a patent node shows the detail card; its lens link href starts with `/lens/`.

**Gotchas**

- gotchas.md line 51: "`prerender.mjs` validates that every route pattern in `routeManifest.tsx`
  is covered by routes in `src/generated/build-metadata.json` — adding a new route pattern
  without updating `generate-build-metadata.mjs` will fail the build." Steps 2 and 3 must land
  together. `__tests__/src/generated/buildRouteSync.test.ts` also enforces this — run it.
- Do NOT add `/relationships` to `CLIENT_ONLY_PATTERNS` in `scripts/prerender.mjs` — the
  no-focus state prerenders fine; only query-dependent content is client-gated.
- `react-helmet-async` pages need `HelmetProvider` in tests — mock `SEOHead` instead, as
  `pageRenders.test.tsx` does.
- The generated metadata is gitignored; run `npm run generate:metadata` after step 3/4 before
  `npm run dev`.

**Verification**

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
npm run build   # REQUIRED — route change
```

After `npm run build`, ALL of these must hold:

- `grep '"/relationships"' src/generated/build-metadata.json` → present in `routes` and
  `routeFreshness`.
- `dist/relationships/index.html` exists and contains `Patent Relationship Map` and at least one
  `href="/relationships?focus=` link.
- `grep -c "relationships" dist/sitemap.xml` ≥ 1.
- `npm run seo:audit` passes.
- Manual QA on `npm run dev`: open `/relationships`, pick an inventor → map renders; click an
  outer node → recenters and the URL updates; browser Back returns to the previous center; click
  a patent → card with working lens links; wheel-zoom and drag-pan work; theme toggle keeps
  everything legible in all four variants (dark/light × normal/high-contrast).

---

## Milestone 6 — Polish, docs, ship rituals  ✅ DONE (optional polish skipped)

**Files to touch**

- `src/utils/content/changelogData.ts` — **modified** (entry per `agent_docs/changelog.md`)
- `CLAUDE.md` — **modified**: add one line under the `src/components/` map:
  `relationshipMap/       - patent relationship map (radial layout engine + SVG renderer + picker)`
- `agent_docs/architecture/ui-components.md` and
  `agent_docs/architecture/routing-and-content.md` — **modified**: one short paragraph each
  (new component family; new static route + query-param focus pattern).
- `FEATURE_ADDITION_PLAN.md` — check the F25 box.
- Branch record under `agent_docs/records/` per `agent_docs/record_keeping.md`.

Optional polish, ONLY if the gate is already green (each is skippable without follow-up):

- Recenter transition: render node `<g transform={translate(x,y)}>` with inline
  `style={{ transition: "transform 300ms ease" }}` — nodes that persist across recenters (same
  node id) glide to their new slots. Requires rendering nodes keyed by id and NOT remounting the
  SVG on recenter, which conflicts with the `key={graph.center.id}` zoom-reset strategy — if you
  attempt this, reset zoom via `useEffect` on center change instead. Skip if it takes more than
  an hour; the feature is complete without it.
- Patent-year decade tint on patent node strokes.
- Double-click background to reset zoom.

## Out of Scope (deliberately — do not gold-plate)

- No force-directed / multi-hop network view (only the two-ring ego graph).
- No dedicated assignee pages (`hasPage: false` renders no page link; a future
  `/assignees/:slug` feature can flip that bit).
- No URL state for the selected patent, zoom, or hover.
- No extraction/sharing of AuthorPage's `PatentCard`.
- No changes to search (`searchCatalog.ts`) — assignee search can come later.
- No new theme tokens, npm packages, canvas, or CSS files.
- No patent-office external links.

## Rollback

Revert the branch. `src/generated/` artifacts are gitignored and rebuilt by the next
`npm run generate:metadata` / `npm run build`, so no generated files need manual cleanup. The
`assignees` field in build metadata is additive and unused elsewhere; reverting M1 alone cannot
break authors.
