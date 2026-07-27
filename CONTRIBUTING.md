# Contributing to Surface & Stop

Contributions can improve the application, its optical models, or its documentation. This guide covers the shared
workflow; specialized authoring guides contain the domain-specific requirements.

## Before you begin

- Search [open issues](https://github.com/ronbuening/LensVisualizer/issues) before starting a large change.
- Open an issue first when a proposal would change optical behavior, data formats, routes, or the public interface.
- Small bug fixes, documentation corrections, tests, and well-scoped lens-data fixes can go directly to a pull request.

For a new lens request that you do not plan to implement yourself, use the
[pre-filled request form](https://github.com/ronbuening/LensVisualizer/issues/new?labels=new+lens&title=New%20Lens%3A%20&body=Patent%20%23%3A%20).
Include a patent or prescription source when possible.

## Development setup

Surface & Stop requires Node.js 24.15.0 or newer within the Node 24 release line. The repository provides `.nvmrc` and
`.node-version` files for compatible version managers.

```bash
git clone https://github.com/ronbuening/LensVisualizer.git
cd LensVisualizer
nvm use # Optional: if you use nvm
npm ci
npm run dev
```

The development server runs at `http://localhost:5173`.

## Choose the relevant guide

- **Lens prescription:** [Adding a New Lens](agent_docs/adding_a_lens.md) and the
  [lens data specification](src/lens-data/LENS_DATA_SPEC.md)
- **Lens write-up:** [Lens analysis format](src/lens-data/LENS_ANALYSIS_SPEC.md)
- **Article:** [Adding an Article](agent_docs/adding_an_article.md)
- **Analysis drawer tab:** [Adding an Analysis Tab](agent_docs/adding_an_analysis_tab.md)
- **URL-shareable state:** [Adding URL State](agent_docs/adding_url_state.md)
- **Route:** [Adding a Route](agent_docs/adding_a_route.md)
- **UI control:** [Adding UI Controls](agent_docs/adding_ui_controls.md)
- **Mount diagram:** [Mount SVG specification](src/mounts/MOUNT_SVG_SPEC.md)

The [developer docs index](agent_docs/README.md) links to architecture notes, testing recipes, and focused workflow
guides.

## Project conventions

- Keep optics helpers pure and pass the runtime lens object explicitly.
- Use exact surface tracing and the shared projection/chief-ray paths; do not add alternate trace modes.
- Keep state-dependent analysis outside `buildLens()`.
- Reuse shared controls, renderers, utilities, and theme tokens before adding another abstraction.
- Keep lens diagrams as inline SVG and component styling inline; the project does not use CSS files or a UI library.
- Add tests at the same level as the change. See [testing recipes](agent_docs/testing_recipes.md) for existing patterns.
- Keep changes focused and do not include generated or unrelated local files.

## Adding or correcting lens data

Patent data needs more than a transcription pass. Record the source, preserve the selected embodiment, validate glass
and aspheric conventions, and compare the rendered section with published figures when available. Do not present
inferred values as patent values.

Start from [`src/lens-data/TEMPLATE.data.ts.template`](src/lens-data/TEMPLATE.data.ts.template). Lens files are
auto-registered, and `npm run generate:metadata` or `npm run build` moves a root-level draft into its maker folder.
The detailed [lens authoring guide](agent_docs/adding_a_lens.md) covers validation, companion analysis files, mount and
format metadata, folded systems, and semi-diameter troubleshooting.

## Verification

Run the standard checks before opening a pull request:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
```

Also run `npm run build` and `npm run seo:audit` for route, metadata, article, lens-data organization, sitemap, or SEO
changes. The quality workflow runs the typecheck, formatting check, lint, dependency audit, tests, and production build.

## Pull-request checklist

- Explain the user-visible result and the reason for the change.
- Link the relevant issue, patent, specification, or other source.
- Include screenshots for meaningful interface or rendering changes.
- Add or update tests for behavior changes.
- List the verification commands you ran and any known limitations.
- Confirm that generated metadata and reports were refreshed when the relevant authoring guide requires them.
