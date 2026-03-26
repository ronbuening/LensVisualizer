# LensVisualizer

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses derived from optical patents, with real-time ray tracing, focus and aperture adjustment, element inspection, chromatic dispersion visualization, and multiple themes.

**Live app:** [opticalbench.net](https://opticalbench.net/)

Created by **Ron Buening** — see [About This Site](src/content/AboutSite.md) for background on how the project is built.

## Features

- **SVG cross-section rendering** — Vector lens diagrams computed in real-time from optical prescription data
- **Real-time ray tracing** — Visualize on-axis and off-axis light paths through the optical system
- **Chromatic ray tracing** — RGB wavelength-separated rays showing longitudinal chromatic aberration (LCA) with inset display
- **Focus control** — Adjust focus distance with an interactive slider; see how variable air gaps shift
- **Aperture control** — Change f-number from wide open to stopped down with clickable f-stop presets
- **Zoom control** — For zoom lenses, adjust focal length with a continuous slider
- **Ray modes** — Toggle between parallel rays (from infinity) and converging rays that track focus distance
- **Element inspection** — Hover or click elements to view refractive index, Abbe number, focal length, glass type, dispersion data, and optical role
- **Abbe diagram** — Glass map plotting each element on standard Vd × Nd axes
- **Petzval sum display** — SVG badge and expandable overlay showing field curvature
- **LCA overlay** — Expandable lateral chromatic aberration visualization with description
- **Lens comparison** — Side-by-side comparison of two lenses with shared focus/aperture/zoom controls and normalized scale mode
- **Design analysis** — Each lens includes a detailed markdown write-up of its optical design, rendered in-app
- **Multipage layout** — Individual lens pages, maker pages, and browsable lens index with SEO-friendly URLs
- **SSR pre-rendering** — Static HTML generation for search engine indexing
- **4 themes** — Dark, Light, and high-contrast variants of each
- **Responsive layout** — Side-by-side diagram and analysis on desktop; tabbed view on mobile
- **URL deep links** — Shareable URLs preserve lens selection, comparison state, and slider positions
- **Persistent preferences** — Theme, lens selection, and ray settings saved to localStorage

## Available Lenses

| Lens | Elements | Notes |
|------|----------|-------|
| Voigtländer Heliar f/4 (1902) | 5 | Classic symmetric triplet; US 716,035 |
| Carl Zeiss Tessar 144mm f/5.5 (1903) | 4 | Original Rudolph design; US 721,240 |
| Carl Zeiss Sonnar 50mm f/1.5 | 7 | Two cemented triplets |
| Carl Zeiss Jena Sonnar 50mm f/2 | 6 | Bertele's original; US 1,998,704 |
| NIKKOR-N Auto 24mm f/2.8 | 9 | CRC (Close Range Correction) |
| NIKON AI NIKKOR 85mm f/1.4S | 7 | Double Gauss; US 4,396,256 |
| NIKON AF NIKKOR 85mm f/1.4D IF | 10 | Internal focus; US 5,041,863 |
| NIKON AF-S NIKKOR 58mm f/1.4G | 9 | Design candidate; all-spherical |
| NIKON AF-S NIKKOR 85mm f/1.4G | 10 | All-spherical; US 7,760,444 B2 |
| NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED | 12 | Macro; 2 aspherics; 1 ED element; US 7,898,744 B2 |
| NIKON AF-S NIKKOR 105mm f/1.4E ED | 14 | All-spherical; APD for secondary spectrum |
| NIKON NIKKOR Z 26mm f/2.8 | 8 | 4 aspherics; WO 2023/190222 A1 |
| NIKON NIKKOR Z 50mm f/1.8 S | 12 | 2 aspherics + 2 ED elements |
| NIKON NIKKOR Z 50mm f/1.2 S | 17+filter | 3 aspherics; multi-group AF; 6 APD elements |
| NIKON NIKKOR Z 85mm f/1.8 S | 12 | 2 aspherics; 5 APD elements |
| NIKON NIKKOR Z MC 105mm f/2.8 VR S | 16 | Macro; 1 aspheric; 3 APD elements; WO 2022/097401 A1 |
| NIKON NIKKOR Z 135mm f/1.8 S Plena | 16 | 1 aspheric; 7 APD elements; WO 2024/147268 A1 |
| NIKON NIKKOR Z 24-70mm f/2.8 S | 17 | Internal zoom; 4 aspherics; 4 APD elements; WO 2020/136749 A1 |
| NIKON NIKKOR Z 70-200mm f/2.8 VR S | 21 | Internal zoom; 2 aspherics; 7 APD elements; WO 2020/105104 A1 |
| VOIGTLÄNDER NOKTON 50mm f/1.0 | 9 | Ultra-fast; 3 aspheric surfaces |
| VOIGTLÄNDER APO-LANTHAR 50mm f/2.0 | 10 | Floating focus; 2 double-sided aspherics; APD elements |
| RICOH GR 28mm f/2.8 | 7 | Retrofocus; 1 aspheric; US 5,760,973 |
| RICOH GR III 18.3mm f/2.8 | 6 | Compact retrofocus; US 2019/0154946 A1 |
| RICOH GR IV 18.3mm f/2.8 | 7 | Compact retrofocus; JP2025-069516A |
| NIKON AF NIKKOR 28mm f/1.4D | 11 | US 5,315,441 |
| NIKON AF-S NIKKOR 28mm f/1.4E ED | 14 | JP2017-227799A |
| NIKON NIKKOR Z 28mm f/2.8 | 9 | WO 2022/071249 A1 |
| NIKON NIKKOR Z 58mm f/0.95 S Noct | 17 | WO2019/229849 A1 |
| Voigtländer Ultron 50mm f/2 | 6 | US 2,627,204 |
| Voigtländer Ultron Vintage Line 28mm f/2 | 10 | JP2022-100641A |

New lenses are auto-registered — just add a `.data.ts` file to `src/lens-data/`. See [Adding a New Lens](#adding-a-new-lens) below.

## Getting Started

```bash
npm install           # Install dependencies
npm run dev           # Start dev server at http://localhost:5173
npm run build         # Production build → dist/ (includes prerender + sitemap)
npm run preview       # Preview production build
npm run test          # Run Vitest unit tests
npm run test:coverage # Run Vitest with v8 coverage report
npm run typecheck     # Run TypeScript type checking (tsc --noEmit)
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run seo:audit     # Run SEO audit on built output
```

Requires Node.js 18+.

## Adding a New Lens

1. Copy `src/lens-data/TEMPLATE.data.ts.template` to `src/lens-data/YourLens.data.ts`
2. Fill in the lens data following the template's field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run typecheck && npm run test` to verify types and validation pass
5. That's it — `import.meta.glob` auto-registers all `src/lens-data/*.data.ts` files

See `src/lens-data/LENS_DATA_SPEC.md` for the full data format specification.

## Request a Lens

Want to see a specific lens added? [Open an issue](https://github.com/ronbuening/LensVisualizer/issues/new) with the lens name and, if available, a link to the patent or optical prescription data.

## Tech Stack

- React 18 + TypeScript + Vite 6
- React Router 7 — multipage routing with SSR pre-rendering
- Inline SVG rendering (no canvas)
- react-helmet-async — per-page SEO meta tags and JSON-LD
- Vitest for unit testing
- react-markdown + remark-gfm for in-app analysis rendering
- Deployed to GitHub Pages via GitHub Actions

## Project Structure

```
LensVisualizer/
├── index.html                          # HTML entry point
├── scripts/                            # Build utilities
│   ├── prerender.mjs                   # Static HTML pre-rendering for SEO
│   ├── generate-sitemap.mjs            # Sitemap generation
│   ├── generate-build-metadata.mjs    # Build metadata (lens dates, article data)
│   └── seo-audit.mjs                   # SEO audit script
├── src/
│   ├── main.tsx                        # React client entry (RouterProvider)
│   ├── router.tsx                      # React Router route definitions
│   ├── routes/routeManifest.tsx        # Single source of truth for routes
│   ├── entry-server.tsx                # SSR entry for pre-rendering
│   ├── pages/                          # Page-level route components
│   │   ├── HomePage.tsx                # Interactive LensViewer + legacy redirects
│   │   ├── LensPage.tsx                # Individual lens page (/lens/:slug)
│   │   ├── LensIndexPage.tsx           # Browsable lens library (/lenses)
│   │   ├── MakerPage.tsx               # Maker lens list (/makers/:maker)
│   │   ├── MakersIndexPage.tsx         # Maker index (/makers)
│   │   ├── ComparePage.tsx            # Lens comparison (/compare/:slugA/:slugB)
│   │   ├── ArticlePage.tsx            # Individual article (/articles/:slug)
│   │   ├── ArticlesPage.tsx           # Articles index (/articles)
│   │   └── NotFoundPage.tsx            # 404 catch-all
│   ├── types/                          # Shared TypeScript type definitions
│   ├── components/
│   │   ├── ClientOnly.tsx              # SSR-safe hydration wrapper
│   │   ├── SEOHead.tsx                 # Per-page meta tags via react-helmet-async
│   │   ├── layout/                     # Orchestration + top-level layout
│   │   │   ├── LensViewer.tsx          # State, context, layout composition
│   │   │   ├── TopBar.tsx              # Lens selectors, compare/about buttons
│   │   │   ├── BreadcrumbBar.tsx       # Breadcrumb navigation for lens pages
│   │   │   ├── ControlsBar.tsx         # Theme/ray/chromatic/scale toggles
│   │   │   ├── ViewToggleBar.tsx       # View-mode toggle (mobile + desktop)
│   │   │   ├── ComparisonLayout.tsx    # Side-by-side / stacked comparison panels
│   │   │   ├── OverlayModal.tsx        # Generic backdrop + modal overlay
│   │   │   ├── PanelOverlay.tsx        # Panel-scoped overlay for LCA/Petzval
│   │   │   ├── LensDiagramPanel.tsx    # Diagram composition layer
│   │   │   ├── DescriptionPanel.tsx    # Themed markdown renderer
│   │   │   ├── SharedSlidersBar.tsx    # Comparison mode shared controls
│   │   │   ├── PrimerToggleButton.tsx  # Shared primer level toggle button
│   │   │   ├── PageNavBar.tsx          # Navigation bar for static pages
│   │   │   ├── SingleLensContent.tsx   # Single-lens diagram + description
│   │   │   ├── DiagramControlPanel.tsx # Sliders, inspector, legend panel
│   │   │   └── DropdownPanel.tsx       # Portal-based dropdown panel
│   │   ├── diagram/                    # SVG rendering
│   │   │   ├── DiagramSVG.tsx          # Full SVG rendering
│   │   │   ├── RayPolylines.tsx        # Consolidated ray segment rendering
│   │   │   ├── ApertureStop.tsx        # Aperture stop blades + STO label
│   │   │   ├── ElementAnnotations.tsx  # Element numbers, Abbe badges, labels
│   │   │   ├── LCAInsetWidget.tsx      # Magnified LCA inset
│   │   │   ├── LCAOverlayContent.tsx   # Enlarged LCA overlay with description
│   │   │   ├── PetzvalOverlayContent.tsx # Petzval sum overlay with description
│   │   │   └── PetzvalSumBadge.tsx     # Petzval sum SVG badge
│   │   ├── controls/                   # Sliders, toggles, header controls
│   │   │   ├── DiagramControls.tsx     # Zoom, focus, aperture sliders
│   │   │   ├── DiagramHeader.tsx       # Title, specs, controls header
│   │   │   ├── SliderControl.tsx       # Reusable slider component
│   │   │   ├── LensSelector.tsx        # Portal-based custom dropdown
│   │   │   ├── RayToggles.tsx          # On-axis/off-axis toggle buttons
│   │   │   ├── ChromaticControls.tsx   # COLOR toggle + R/G/B channels
│   │   │   └── CollapseButton.tsx     # Shared LESS/MORE toggle pill
│   │   ├── display/                    # Data display
│   │   │   ├── ElementInspector.tsx    # Selected element property display
│   │   │   ├── DiagramLegend.tsx       # Legend with aberration readouts
│   │   │   ├── AbbeDiagram.tsx         # Abbe glass map (Vd × Nd)
│   │   │   ├── AboutButtonRow.tsx      # Shared about button group
│   │   │   └── AboutFooter.tsx         # Mobile-only footer about buttons
│   │   ├── errors/                     # Error boundaries
│   │   │   ├── ErrorBoundary.tsx       # App-level error boundary
│   │   │   └── PanelErrorBoundary.tsx  # Panel-level error boundary
│   │   └── hooks/                      # Custom React hooks
│   │       ├── useLensComputation.ts   # Lens building, layout, shapes
│   │       ├── useRayTracing.ts        # Ray tracing orchestrator
│   │       ├── useOnAxisRays.ts        # On-axis ray fan
│   │       ├── useOffAxisRays.ts       # Off-axis field rays
│   │       ├── useChromaticRays.ts     # Chromatic tracing + spread
│   │       ├── useFlashOverlay.ts      # Flash animation state machine
│   │       ├── useSideLayoutDetection.ts # Overflow-based side layout
│   │       ├── useOverlays.ts         # Overlay state + dispatch adapters
│   │       ├── useOverlayState.ts     # Abbe/LCA/Petzval overlay state
│   │       ├── useDispatchAdapters.ts # Context dispatch callback wiring
│   │       ├── useHeaderHeight.ts     # Header height tracking
│   │       └── raySegmentUtils.ts     # Shared ray segment compilation
│   ├── optics/
│   │   ├── optics.ts                   # Ray tracing, sag curves, layout math
│   │   ├── buildLens.ts                # Lens construction, EFL/pupil/field
│   │   ├── validateLensData.ts         # Schema validation
│   │   ├── diagramGeometry.ts          # Coordinate transforms, element shapes
│   │   └── lcaScaling.ts              # LCA bar offset computation
│   ├── utils/                          # Themes, styles, feature flags, catalog, state hooks
│   ├── content/                        # AboutMe.md, AboutSite.md, OpticsPrimer*.md, AberrationsPrimer*.md
│   └── lens-data/                      # Lens prescriptions + analyses
├── agent_docs/                         # Documentation for AI coding assistants
└── __tests__/                          # Vitest unit tests (TypeScript)
```
