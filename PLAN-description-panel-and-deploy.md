# Plan: Lens Description Panel + GitHub Pages Deployment

## Part 1 — Markdown Description Panel

### 1.1 Add `react-markdown` dependency

```bash
npm install react-markdown
```

No additional plugins (remark-gfm, etc.) unless the markdown uses GFM features like tables or task lists — can add later if needed.

### 1.2 Markdown file convention

Create `lens-data/*.md` alongside existing `*.js` data files, keyed by the same lens `key`:

```
lens-data/
├── ApoLanthar50f2.data.js
├── ApoLanthar50f2.md          ← new
├── Nokton50f1.data.js
├── Nokton50f1.md              ← new
├── NikkorZ50mmf18S.js
├── NikkorZ50mmf18S.md         ← new
```

Auto-load via a second `import.meta.glob`:

```js
const MD_MODULES = import.meta.glob('./lens-data/*.md', { eager: true, query: '?raw', import: 'default' });
```

This gives us a `{ './lens-data/Foo.md': '# raw markdown string…' }` map. We'll build a lookup keyed by filename stem so each lens can find its description. No manual imports needed — same auto-registration pattern already used for lens data.

### 1.3 Restructure page layout

**Current structure:**
```
┌─────────────────────────────────┐
│  Header (title + selector)      │
├─────────────────────────────────┤
│  SVG lens diagram               │
├─────────────────────────────────┤
│  Control panel (focus/apt/info) │
└─────────────────────────────────┘
```

**New structure — desktop / landscape tablet (≥900px wide):**
```
┌──────────────────────────────────────────┐
│  Lens selector dropdown (full width)     │
├──────────────────────┬───────────────────┤
│                      │                   │
│  Lens Diagram Panel  │  Description      │
│  (header, SVG,       │  Panel            │
│   controls)          │  (rendered MD)    │
│                      │                   │
└──────────────────────┴───────────────────┘
```

- Two-column flexbox layout, `gap: 0`
- Left panel: the existing `LensVisualization` content (header, SVG, control strip) — essentially what the component renders today
- Right panel: scrollable markdown prose, styled to match the active theme
- Relative widths: roughly 60/40 or 55/45 — will tune visually. Both panels scroll independently.

**New structure — portrait tablet / phone (<900px wide):**
```
┌──────────────────────────────────┐
│  Lens selector dropdown          │
├──────────────────────────────────┤
│  [Diagram] [Description] toggle  │
├──────────────────────────────────┤
│                                  │
│  (whichever panel is active)     │
│                                  │
└──────────────────────────────────┘
```

- Toggle bar with two buttons (styled like the existing ray-toggle buttons)
- Only one panel visible at a time, controlled by a `view` state (`'diagram' | 'description'`)
- Default to `'diagram'` view on load

### 1.4 Responsive detection approach

Use a `useMediaQuery` hook (custom, ~10 lines) or `window.matchMedia('(min-width: 900px)')` with a `useEffect` listener. No CSS media queries since the project uses inline styles exclusively.

Breakpoint: **900px** — wide enough to give both panels breathing room. Below that, switch to toggle mode.

### 1.5 Component refactoring approach

The goal is minimal disruption to `LensViewer-v4.jsx`:

1. **Extract the lens selector dropdown** from the header into its own small section that sits above both panels. It currently lives in the header's right-side flex column (lines 517–535). Move it up to a new top-level bar.

2. **Create a new `DescriptionPanel` component** — either inline in `LensViewer-v4.jsx` (keeping the one-file pattern) or in a small separate file. It receives `{ markdown, theme }` and renders `<ReactMarkdown>` with inline styles derived from the theme.

3. **Wrap the existing diagram + controls** in a "left panel" `<div>` — no logic changes, just a container wrapper.

4. **Add layout logic** in the main component's return JSX: check viewport width, render side-by-side or toggle mode accordingly.

### 1.6 Markdown styling

Style the rendered markdown to match each theme. `react-markdown` allows a `components` prop to override every element (`h1`, `p`, `code`, `table`, etc.) with custom styled versions. We'll define these inline-styled overrides using theme tokens — e.g., heading color = `t.fg`, code background = `t.selectorBg`, link color = `t.rayWarm`.

### 1.7 Theme additions

Add a few new tokens to each theme in `themes.js` for the description panel:

- `descBg` — panel background (slightly offset from main bg)
- `descBorder` — divider between panels
- `descCodeBg` — code block background
- `descLinkColor` — link color

Keep these minimal — reuse existing tokens where possible.

### 1.8 Graceful fallback

If a lens has no corresponding `.md` file, the description panel shows a simple placeholder: "No description available for this lens." The toggle still appears on mobile (so the UI doesn't shift), but the description tab shows the placeholder.

---

## Part 2 — GitHub Pages Deployment

### 2.1 Vite base path config

Update `vite.config.js` to set the `base` option for the subpath:

```js
export default defineConfig({
  plugins: [react()],
  base: '/LensVisualizer/',
});
```

This ensures all asset paths (JS, CSS, images) are prefixed correctly when served from `ronbuening.github.io/LensVisualizer/`.

### 2.2 GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:        # manual trigger

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

This uses the modern GitHub Pages deployment via Actions (no `gh-pages` branch needed). Deploys automatically on every push to `main`, plus manual dispatch.

### 2.3 Enable GitHub Pages in repo settings

Manual step (cannot be automated): Go to **Settings → Pages → Source** and select **"GitHub Actions"** as the source. This is a one-time setup.

### 2.4 Future CloudFlare migration notes

When ready to migrate to CloudFlare Pages:
- Change `base` back to `'/'` (CloudFlare serves at root of subdomain)
- Connect the repo to CloudFlare Pages dashboard
- Set build command: `npm run build`, output dir: `dist`
- Configure DNS for the subdomain
- The GitHub Actions workflow can be kept or removed

---

## Implementation Order

| Step | Task | Depends on |
|------|------|------------|
| 1 | Add `react-markdown` dependency | — |
| 2 | Set up `import.meta.glob` for `.md` files + lookup map | — |
| 3 | Add placeholder `.md` files (or wait for real content) | — |
| 4 | Add `useMediaQuery` hook | — |
| 5 | Add theme tokens for description panel | — |
| 6 | Lift lens selector dropdown to top-level bar | — |
| 7 | Create `DescriptionPanel` component | 1, 5 |
| 8 | Implement side-by-side layout (desktop) | 6, 7 |
| 9 | Implement toggle mode (mobile/portrait) | 4, 7, 8 |
| 10 | Style markdown rendering with theme tokens | 5, 7 |
| 11 | Test responsive behavior + all 4 themes | 8, 9, 10 |
| 12 | Configure Vite `base` path | — |
| 13 | Add GitHub Actions deploy workflow | 12 |
| 14 | Enable Pages in repo settings (manual) | 13 |

Steps 1–5 and 12 are independent and can be done in parallel. Steps 6–11 are the core layout work. Steps 12–14 are independent of the description panel work.

---

## Open Questions / Decisions for Later

- **Split ratio**: 60/40 vs 55/45 for side-by-side — will tune once real content is in place
- **900px breakpoint**: may need adjustment based on how the diagram looks at that width
- **Markdown features needed**: if the descriptions use GFM tables, we'll add `remark-gfm` plugin
- **Description panel scroll**: independent scroll with sticky header, or scroll with page? Recommend independent scroll so the diagram stays visible while reading.
- **Markdown file naming**: filenames must match the `.js` data file stems. We could alternatively add a `descriptionFile` field to `LENS_DATA`, but auto-matching by filename is simpler and consistent with the auto-registration pattern.
