# Surface & Stop

[![Quality checks](https://github.com/ronbuening/LensVisualizer/actions/workflows/quality.yml/badge.svg)](https://github.com/ronbuening/LensVisualizer/actions/workflows/quality.yml)

Surface & Stop is an interactive reference for exploring the optical designs behind real camera lenses. It turns
patent-derived prescriptions into responsive SVG cross-sections, traces rays through the current optical state, and
provides analysis tools that make complex designs easier to inspect and compare.

LensVisualizer is the source repository for the site.

<p align="center">
  <a href="https://surfaceandstop.com/">
    <img src="public/branding/social-dark.png" alt="Surface & Stop — lens patent analysis and optical decomposition" width="760">
  </a>
</p>

<p align="center">
  <a href="https://surfaceandstop.com/"><strong>Open the live app</strong></a>
  ·
  <a href="https://surfaceandstop.com/lenses">Browse the lens library</a>
  ·
  <a href="https://surfaceandstop.com/articles/start-here">Read the beginner's guide</a>
</p>

## Start exploring

No installation is needed to use the site:

1. Open the [lens library](https://surfaceandstop.com/lenses) and choose a design.
2. Move the focus, aperture, and, when available, zoom controls to see the prescription update.
3. Select a glass element to inspect its surfaces, material data, and role.
4. Open **Aberrations & Distortions** for summary, chromatic, coma, bokeh, distortion, breathing, vignetting, and
   pupil views.
5. Copy the page URL to share the current lens and view state.

New to lens design? [Start Here](https://surfaceandstop.com/articles/start-here) introduces the viewer and links to
plain-language optics primers.

## Highlights

| Area | What Surface & Stop provides |
| --- | --- |
| Interactive diagrams | Inline SVG lens sections with real surface sag, element selection, zoom and pan, and responsive focus, aperture, and zoom state |
| Ray tracing | Exact spherical and aspheric surface intersections for on-axis, off-axis, and chromatic ray bundles |
| Optical analysis | First-order summaries plus spherical aberration, field curvature, coma, bokeh, distortion, focus breathing, vignetting, pupil, and chromatic diagnostics |
| Design comparison | Side-by-side lenses with shared controls and shareable comparison URLs |
| Catalog research | Browsing and filtering by maker, focal length, patent year, inventor, assignee, mount, and image format |
| Specialized systems | Projection-aware fisheyes, perspective-control movement, aspheric comparison, and reference models for folded or obstructed optical paths |
| Supporting references | Articles, optics primers, patent relationships, glass data, and programmatic camera/lens mount diagrams |

## Catalog scope

- `692` visible lens pages are currently published from [`src/lens-data/`](src/lens-data/).
- Lens and article content is auto-discovered; generated metadata keeps routes, search data, sitemap entries, and the
  catalog count in sync.
- The site is prerendered so lens, maker, inventor, patent, mount, format, comparison, and article pages remain
  crawlable and directly linkable.

## How accurate is this?

The models are reconstructions of published patent embodiments. A patent may describe multiple examples, an
experimental design, or a prescription that differs from the final production lens. Analysis in the viewer is computed
from the published data and the selected state; it is not a measurement of a physical sample or a substitute for
laboratory testing.

Every lens page carries its source metadata (patent number, embodiment, inventors, assignee), and each prescription is
re-checked against its patent using the procedure in [`agent_docs/lens-patent-audit.md`](agent_docs/lens-patent-audit.md),
with the findings kept beside the data as `*.audit.md` logs. Where a value is inferred rather than published, the lens
notes say so. Glass identities are resolved against a dispersion catalog and labelled as unmatched when the stored
values cannot support a public name.

## Run it locally

### Prerequisites

- Node.js 24.15.0 or newer within the Node 24 release line
- npm

The repository includes [`.nvmrc`](.nvmrc) and [`.node-version`](.node-version) files for compatible version managers.

```bash
git clone https://github.com/ronbuening/LensVisualizer.git
cd LensVisualizer
nvm use # Optional: if you use nvm
npm ci
npm run dev
```

Open `http://localhost:5173`.

### Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Generate metadata and start the Vite development server |
| `npm run build` | Organize lens data, generate metadata, build, prerender, and create the sitemap |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run strict TypeScript checks |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check formatting with Prettier |
| `npm run test` | Run the Vitest suite |
| `npm run seo:audit` | Audit the built site for metadata, links, sitemap coverage, and 404 behavior |

The full script inventory, including audits, report generation, and benchmarks, is in
[`agent_docs/workflow.md`](agent_docs/workflow.md).

## Architecture at a glance

The application uses React and TypeScript with a Vite build. A pure optics layer validates patent prescriptions,
prepares the current focus/zoom/aperture state, traces rays, and computes analysis data. React components render that
data as inline SVG and synchronize shareable state with the URL. The production build prerenders public routes and
generates the sitemap for deployment to Cloudflare Pages.

The directory map and per-subsystem notes live in the [architecture index](agent_docs/architecture.md).

## Contributing

Bug reports, documentation fixes, lens corrections, and new prescriptions are welcome.

- [`CONTRIBUTING.md`](CONTRIBUTING.md) covers setup, the per-task guides, quality checks, and the pull-request checklist.
- [`agent_docs/README.md`](agent_docs/README.md) is the tagged index of every architecture, recipe, policy, and queue doc.
- [`SECURITY.md`](SECURITY.md) explains how to report a vulnerability.
- [Request a lens](https://github.com/ronbuening/LensVisualizer/issues/new?labels=new+lens&title=New%20Lens%3A%20&body=Patent%20%23%3A%20)
  or [report a bug](https://github.com/ronbuening/LensVisualizer/issues/new).

## Guides on the site

- [Getting Started](https://surfaceandstop.com/articles/start-here)
- [About Surface & Stop](https://surfaceandstop.com/articles/about-site)
- [How Camera Lenses Work](https://surfaceandstop.com/articles/optics-primer)
- [Understanding Aberrations](https://surfaceandstop.com/articles/aberrations-primer)

Surface & Stop was created by [Ron Buening](https://ronbuening.com/).
