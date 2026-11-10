# Changelog — Maintenance Guide

## Overview

The site changelog is a curated list of user-facing changes shown on `/updates` and published as
`/feeds/changelog.xml`. Each entry is one small text file under `src/content/changelog/`, so pull requests that are open
at the same time add separate files instead of editing one shared list.

`scripts/changelog-lib.mjs` validates the files and `npm run generate:metadata` (also run by `dev`, `build`, `test` and
`typecheck`) compiles them, newest first, into `src/generated/changelog.json`. The Updates page, RSS feed and SEO audit
all read that file. No other file needs to change when you add an entry.

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

## Entry Files

```text
src/content/changelog/<YYYY-MM>/<YYYY-MM-DD>-<type>-<subject>.txt
```

The path carries the metadata and the file carries the text:

- **Month folder:** the entry's year and month. A folder holds about a month of entries.
- **Date:** the merge date, or a package's scheduled publication date (UTC calendar day). Future dates are allowed.
- **Type:** one of the types below.
- **Subject:** what changed, in 2–6 lowercase ASCII words joined by hyphens, at most 48 characters. Name the thing, not
  the action; the type already says whether it was added or fixed. It is for people browsing the folder and appears on
  no public page.
- **Text:** the summary exactly as the page shows it, on one line, followed by a newline.

Examples:

```text
src/content/changelog/2026-11/2026-11-06-feature-curved-image-surfaces.txt
src/content/changelog/2026-11/2026-11-07-article-om-system.txt
src/content/changelog/2026-11/2026-11-08-fix-sto-label-overlapping-flat-rim-element.txt
src/content/changelog/2026-11/2026-11-08-lens-canon-pentax-sigma-vivitar.txt
src/content/changelog/2026-09/2026-09-07-lens-canon-ef-70-200mm.txt
```

For a lens entry, the subject lists the makers in alphabetical order, using the maker folder names under
`src/lens-data/` reduced to ASCII kebab-case (`carl-zeiss-jena`, `p-angenieux`). If the entry covers only one maker,
name the models instead. When the makers do not fit in 48 characters, keep as many as fit and end with `-and-more`.

A file named `2026-11-08-fix-sto-label-overlapping-flat-rim-element.txt` contains:

```text
Fixed the STO label overlapping the flat rim of an element beside the aperture stop
```

The folder listing reads in page order: dates sort oldest to newest on disk and newest first on the page, and within a
day entries keep file-name order (`article`, `feature`, `fix`, `improvement`, `lens`, then subject).

`scripts/changelog-lib.mjs` owns the format rules and fails `generate:metadata` with the path of every invalid file. Run
`npm run generate:metadata` to see a new entry while `npm run dev` is already running.

---

## Entry Types

| Type | Color | Use for |
|------|-------|---------|
| `feature` | blue (`#5588cc`) | New capability the user can interact with |
| `fix` | red-orange (`#cc6655`) | Corrects incorrect behavior or rendering |
| `lens` | green (`#22aa77`) | New lens added to the catalog |
| `improvement` | amber (`#cc8844`) | Enhancement to an existing feature, SEO, or performance |
| `article` | purple (`#aa55cc`) | New article or guide published in Articles & Guides |

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

## Changing an Entry

Before it ships, change anything. Re-dating or re-typing an entry is a rename (`git mv`); move it to the matching month
folder if the month changes.

Once an entry has shipped, its date, type and text are permanent: `changelogEntryId` hashes `date|type|summary` into the
public `/updates#…` anchor and the RSS GUID, so changing any of them breaks existing feed links. Never edit the text,
re-date, re-type or delete a shipped file. The subject is not part of the anchor, so renaming only the subject is safe.

---

## Consolidating Multiple PRs

When several small PRs address the same conceptual change, write one entry
describing the combined outcome rather than one per PR.

> **Example:** PRs #308–318 all adjusted Nikon Z semidiameter values →
> one entry: `"Corrected semi-diameter values across the Nikon Z lens lineup"`

When two PRs implement the same feature in stages (initial engine + UI), write
one entry describing what the user can now do.
