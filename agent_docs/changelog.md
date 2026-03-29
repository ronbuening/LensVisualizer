# Changelog — Maintenance Guide

## Overview

The homepage changelog is a manually curated list of user-facing changes
displayed in the `ChangelogBox` section on the home page. The data lives in
`src/utils/changelogData.ts` as a flat array of `ChangelogEntry` objects.

The component (`src/components/homepage/ChangelogBox.tsx`) groups entries by
date automatically and renders them with color-coded type badges. No other
file needs to be updated when adding entries.

---

## When to Add Entries

Add an entry when merging a PR that does any of the following:

- Adds a new lens to the catalog
- Adds or changes a user-visible feature (new analysis tab, new control, new chart)
- Fixes a visible bug or incorrect rendering
- Improves performance, SEO, or UI in a way the user would notice

**Do not add entries for:**

- Internal refactors with no behavior change
- Test additions or test infrastructure changes
- Build tooling updates (Vite config, scripts, CI)
- Dependency bumps (unless they fix a user-visible issue)
- Documentation-only PRs

---

## Entry Types

| Type | Color | Use for |
|------|-------|---------|
| `feature` | blue (`#58c`) | New capability the user can interact with |
| `fix` | red-orange (`#c65`) | Corrects incorrect behavior or rendering |
| `lens` | green (`#2a7`) | New lens added to the catalog |
| `improvement` | amber (`#c84`) | Enhancement to an existing feature, SEO, or performance |
| `article` | purple (`#a5c`) | New article or guide published in Articles & Guides |

---

## Writing Summaries

- Write from the user's perspective, not the developer's
- Use past tense: "Added X", "Fixed Y", "Improved Z"
- Avoid PR jargon: "implement", "refactor", "hook into", "wire up"
- Keep to one sentence, under ~90 characters
- Name the specific lens, tab, or feature affected when helpful

**Good:** `"Added coma analysis with 2D point-cloud preview to aberrations drawer"`
**Bad:** `"Implement coma computation module and integrate with aberration panel"`

---

## Adding an Entry

Open `src/utils/changelogData.ts` and **prepend** a new object to the top of
the `CHANGELOG` array (before the first existing entry):

```ts
{
  date: "2026-04-10",         // ISO merge date (YYYY-MM-DD)
  type: "feature",            // see table above
  summary: "Added chromatic aberration chart to analysis drawer",
},
```

The array must remain sorted **newest-first**. The component handles grouping
by date — no other code needs updating.

---

## Consolidating Multiple PRs

When several small PRs address the same conceptual change, write one entry
describing the combined outcome rather than one per PR.

> **Example:** PRs #308–318 all adjusted Nikon Z semidiameter values →
> one entry: `"Corrected semi-diameter values across the Nikon Z lens lineup"`

When two PRs implement the same feature in stages (initial engine + UI), write
one entry describing what the user can now do.

---

## Pruning Old Entries

The changelog renders with a `max-height: 28rem` scrollable container and does
not paginate. There is no hard expiry policy, but entries older than ~60 days
can be removed if the list grows unwieldy. Prune from the **bottom** of the array
(oldest entries first).

---

## Existing History (seeded from PRs #291–#350)

The initial entries cover **2026-03-26 through 2026-03-28** and include:

- **2026-03-28**: Real sagittal ray analysis; field curvature and astigmatic difference analysis
- **2026-03-27**: SEO improvements; Fujifilm maker + lenses; Canon and Nikon lens additions;
  full aberrations analysis suite (spherical aberration engine, analysis drawer, coma,
  distortion, vignetting, longitudinal SA chart); Nikon Z semidiameter fixes
- **2026-03-26**: Variable-aperture zoom lens support; Nikon Z close-focus collision fixes

---

## Component Reference

| File | Role |
|------|------|
| `src/utils/changelogData.ts` | Data — `CHANGELOG` array, `ChangelogEntry` type |
| `src/components/homepage/ChangelogBox.tsx` | UI — renders grouped entries with badges |
| `src/pages/HomePage.tsx` | Layout — places ChangelogBox in right column (desktop) or page bottom (mobile) |

**Desktop layout**: ChangelogBox appears in the right column below "Recently Added".
**Mobile layout**: ChangelogBox appears below "Articles & Guides", before the footer.
