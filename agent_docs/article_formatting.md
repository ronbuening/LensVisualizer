# Article Formatting - LensVisualizer

Use this guide when polishing existing articles or preparing a new article for
`src/content/**/*.md`. For routing, frontmatter, series behavior, and build
verification, see `agent_docs/adding_an_article.md`.

## What Is Necessary

### Frontmatter

Every article needs YAML frontmatter at the top of the file:

```yaml
---
slug: article-slug
title: Article Title
summary: One short sentence for cards and SEO.
tag: article
toc: true
---
```

- `slug` and `title` are required.
- `summary` is strongly recommended because it appears in article cards and SEO metadata.
- `tag` should be one of the existing article categories unless the UI is being extended.
- `toc: true` is appropriate for long articles with several H2/H3 sections.
- Series fields belong only on series articles. Use `series` plus `seriesOrder`, with `seriesOrder: 0` for the landing page.

### Visible Title

The frontmatter `title` drives metadata, cards, breadcrumbs, and JSON-LD, but it
does not automatically render a visible article heading inside the markdown body.

Include a top-level H1 near the start of the article when the article should show
its title on the page:

```md
# From Achromat to APO
```

Keep exactly one main H1 unless there is a deliberate editorial reason to do
otherwise.

### Section Structure

- Use H2 headings for major sections.
- Use H3 headings for subsections.
- Avoid skipping heading levels.
- Keep heading text plain and stable, because the table of contents and anchor IDs are generated from it.
- Long articles should have enough H2/H3 headings for scanning; short announcements can stay simple.

### Prose

- Write in normal Markdown paragraphs, separated by blank lines.
- Use italics for titles, terms of art, and mild emphasis.
- Use bold only when the phrase should stand out during scanning.
- Prefer concise explanatory notes in blockquotes when the article needs an aside, such as an OpticalBench-specific note.
- Avoid visible instructions about how the Markdown renderer works; the article should read as an article, not as implementation documentation.

### Links

Use regular Markdown links:

```md
[Lens Library](/lenses)
[Sonnar 5.6/250 datasheet](https://example.com/file.pdf)
```

The renderer handles behavior:

- `/lens/...` opens in a new tab.
- Other internal `/...` links use React Router.
- `#...` links scroll to in-page anchors.
- External links render as normal anchors.

Do not write raw `<a>` tags unless Markdown cannot represent the needed content.

### Footnotes

Use GFM footnotes when a citation or aside would interrupt the paragraph:

```md
This is cited in the prose.[^1]

[^1]: Full citation text.
```

The colon after the footnote label is required. `[^1] Full citation text` is not
a valid footnote definition and will leave references unlinked in the article text.

Footnotes can be numbered to match a bibliography, but the rendered footnote
numbers are assigned by order of first reference. That is normal GFM behavior.

### Math

Use KaTeX-compatible Markdown math:

```md
Inline math uses $V_d = (n_d - 1)/(n_F - n_C)$.

$$
\Phi = (n - 1)(c_1 - c_2)
$$
```

- Use `$...$` for inline math.
- Use `$$...$$` display blocks for equations that need their own line.
- Do not use unsupported LaTeX features such as `\label`, `\ref`, or `align` environments.
- Escape literal currency dollars as `\$`.

### Images And Diagrams

Use Markdown image syntax:

```md
![Short descriptive caption](/diagrams/example.svg)
```

- Put static assets in `public/` when they need stable public URLs.
- The image alt text is also rendered as a caption, so write it as reader-facing caption text.
- Prefer diagrams that directly support the article's argument.
- Do not add HTML figure wrappers by hand unless the Markdown renderer cannot express the layout.

### Tables

Use GFM tables for compact comparisons:

```md
| Term | Meaning |
|---|---|
| APO | Apochromatic correction |
```

Keep tables narrow enough to scan on mobile. Wide reference data usually belongs
in prose, a smaller table, or a dedicated visual.

## What Is Not Necessary

- No manual imports or route registration are needed for article Markdown files.
- Do not edit `src/utils/homepageContent.ts` for a new article; it is populated from generated metadata.
- Do not edit `src/generated/build-metadata.json` by hand.
- Do not add CSS files for article formatting; article styling lives in `ThemedMarkdown.tsx` and theme tokens.
- Do not wrap ordinary Markdown content in raw HTML for styling.
- Do not manually add anchor IDs to headings unless there is a compatibility reason.
- Do not add a changelog entry for typo fixes, source edits, or documentation-only article maintenance.
- Do not run the lens-data organizer just for article prose changes unless another command already does so as part of build verification.

## When Formatting Is Enough

Formatting-only article work usually means:

- Fixing heading hierarchy.
- Converting raw URLs into Markdown links.
- Converting bibliography lines into valid GFM footnotes.
- Improving table readability.
- Splitting long paragraphs.
- Adding or removing `toc: true`.
- Correcting Markdown syntax so existing renderer support works.

These changes should not require React component edits.

## When Code Changes May Be Needed

Consider code changes only when the article needs behavior that Markdown and the
shared renderer do not already support:

- A new reusable diagram component.
- A new article-specific image substitution rule in `ThemedMarkdown.tsx`.
- A new frontmatter field.
- A route or archive behavior change.
- A renderer bug affecting valid Markdown.

If the article uses valid Markdown but renders incorrectly, fix the renderer or
add a focused regression test. If the Markdown itself is invalid, prefer fixing
the content.

## Verification

For content-only formatting changes:

```bash
npm run test -- __tests__/pageRenders.test.tsx
npm run typecheck
```

For new articles, route changes, series changes, frontmatter changes, or anything
that affects generated metadata:

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
npm run build
```

After footnote or anchor changes, inspect the rendered article or add a targeted
test that checks for the expected `href="#user-content-fn-..."` or heading anchor.
