# Patent Relationship Map (F25)

Branch: `ronbuening/RelationMapping`
Ship date: 2026-07-22

Implements the F25 patent relationship map per `agent_docs/relationship-map-plan.md`. New static route
`/relationships` draws a two-ring ego graph (center party → their patents → other named
inventors/assignees) as inline SVG, with query-param focus, recentering, and a patent detail card.

## What shipped, by milestone

| Milestone | Result |
|---|---|
| M1 — build-time assignee index | `buildAssigneeMetadata` (parameterized from `buildAuthorMetadata`); `assignees[]` in `build-metadata.json`. |
| M2 — runtime data layer | `assigneeCatalog.ts`, `patentsForParty(name, role)`, `relationshipGraph.ts` (`buildRelationshipGraph`, `resolveFocusParam`). |
| M3 — layout engine | `src/components/relationshipMap/layout.ts` — pure radial geometry, circular-mean party placement. |
| M4 — SVG components | `RelationshipMap.tsx`, `RelationshipEntityPicker.tsx`, `PatentDetailCard.tsx`. |
| M5 — page + wiring | `RelationshipMapPage.tsx`, route manifest, `collectRoutes`, `buildRouteFreshness`, entry links from IndexNavBar/AuthorPage/AuthorsIndexPage. |
| M6 — docs/ship | changelog, CLAUDE.md, architecture docs, this record, F25 box checked. |

## Deviations from the plan

- **`scripts/author-metadata.d.mts`** — the plan did not mention that a hand-written `.d.mts`
  declaration file backs `author-metadata.mjs` for `tsc`. Adding `buildAssigneeMetadata` to the
  `.mjs` alone left typecheck failing (`no exported member`); the declaration file had to gain the
  new export + a `patentAssignees?` field on `AuthorMetadataInput`.
- Otherwise implemented as specced. Optional M6 polish items (recenter transition animation, decade
  tint, double-click reset) were intentionally skipped — the plan marks them skippable.

## Verification (2026-07-22)

- `npm run typecheck` — clean.
- `npm run lint` — 0 errors (3 pre-existing warnings in unrelated files).
- `npm run format:check` — clean.
- `npm run test` — 202 files / 2383 tests pass (adds `authorMetadata` assignee cases,
  `relationshipGraph`, `relationshipMap/layout`, `relationshipMap` components, `relationshipMapPage`).
- `npm run build` — 929 routes prerendered; `dist/relationships/index.html` contains the intro and
  `/relationships?focus=` links; sitemap includes the route.
- `npm run seo:audit` — 0 errors, 0 warnings.

Manual browser QA (interactive recenter/Back/zoom/theme sweep) not run in this non-interactive
session; covered indirectly by the prerender output and the page/component tests.
