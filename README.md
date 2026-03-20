# LensVisualizer

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses derived from optical patents, with real-time ray tracing, focus and aperture adjustment, element inspection, chromatic dispersion visualization, and multiple themes.

**Live app:** [ronbuening.github.io/LensVisualizer](https://ronbuening.github.io/LensVisualizer/)

Created by **Ron Buening** — see [About This Site](src/content/AboutSite.md) for background on how the project is built.

## Features

- **SVG cross-section rendering** — Vector lens diagrams computed in real-time from optical prescription data
- **Real-time ray tracing** — Visualize on-axis and off-axis light paths through the optical system
- **Chromatic ray tracing** — RGB wavelength-separated rays showing longitudinal chromatic aberration (LCA) with inset display
- **Focus control** — Adjust focus distance with an interactive slider; see how variable air gaps shift
- **Aperture control** — Change f-number from wide open to stopped down with clickable f-stop presets
- **Ray modes** — Toggle between parallel rays (from infinity) and converging rays that track focus distance
- **Element inspection** — Hover or click elements to view refractive index, Abbe number, focal length, glass type, dispersion data, and optical role
- **Design analysis** — Each lens includes a detailed markdown write-up of its optical design, rendered in-app
- **4 themes** — Dark, Light, and high-contrast variants of each
- **Responsive layout** — Side-by-side diagram and analysis on desktop; tabbed view on mobile
- **Persistent preferences** — Theme, lens selection, and ray settings saved to localStorage

## Available Lenses

| Lens | Elements | Notes |
|------|----------|-------|
| Voigtländer Heliar f/4 (1902) | 5 | Classic symmetric triplet; US 716,035 |
| Carl Zeiss Tessar 144mm f/5.5 (1903) | 4 | Original Rudolph design; US 721,240 |
| Carl Zeiss Sonnar 50mm f/1.5 | 7 | Two cemented triplets |
| Carl Zeiss Jena Sonnar 50mm f/2 | 6 | Bertele's original; US 1,998,704 |
| NIKKOR-N Auto 24mm f/2.8 | 9 | CRC (Close Range Correction) |
| VOIGTLÄNDER NOKTON 50mm f/1.0 | 9 | Ultra-fast; 3 aspheric surfaces |
| VOIGTLÄNDER APO-LANTHAR 50mm f/2.0 | 10 | Floating focus; 2 double-sided aspherics; APD elements |
| NIKKOR Z 50mm f/1.8 S | 12 | 2 aspherics + 2 ED elements |
| NIKON NIKKOR Z 50mm f/1.2 S | 17+filter | 3 aspherics; multi-group AF; 6 APD elements |
| NIKKOR 105mm f/1.4E ED | 14 | All-spherical; APD for secondary spectrum |

New lenses are auto-registered — just add a `.data.js` file to `src/lens-data/`. See [Adding a New Lens](#adding-a-new-lens) below.

## Getting Started

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run test       # Run Vitest unit tests
```

Requires Node.js 18+.

## Adding a New Lens

1. Copy `src/lens-data/TEMPLATE.data.js.template` to `src/lens-data/YourLens.data.js`
2. Fill in the lens data following the template's field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run test` to verify validation passes
5. That's it — `import.meta.glob` auto-registers all `src/lens-data/*.data.js` files

See `src/lens-data/LENS_DATA_SPEC.md` for the full data format specification.

## Request a Lens

Want to see a specific lens added? [Open an issue](https://github.com/ronbuening/LensVisualizer/issues/new) with the lens name and, if available, a link to the patent or optical prescription data.

## Tech Stack

- React 18 + Vite 6
- Inline SVG rendering (no canvas)
- Vitest for unit testing
- react-markdown + remark-gfm for in-app analysis rendering
- Deployed to GitHub Pages via GitHub Actions

## Project Structure

```
LensVisualizer/
├── index.html                          # HTML entry point
├── src/
│   ├── main.jsx                        # React root mount
│   ├── components/
│   │   ├── LensViewer.jsx              # Orchestration: top bar, comparison, overlays
│   │   ├── LensDiagramPanel.jsx        # SVG diagram renderer with ray tracing
│   │   ├── DescriptionPanel.jsx        # Themed markdown renderer
│   │   ├── SharedSlidersBar.jsx        # Comparison mode controls
│   │   └── ErrorBoundary.jsx           # Error boundary with retry UI
│   ├── optics/
│   │   ├── optics.js                   # Ray tracing, sag curves, layout math
│   │   ├── buildLens.js                # Lens construction, EFL/pupil/field
│   │   └── validateLensData.js         # Schema validation
│   ├── utils/                          # Themes, feature flags, catalog, hooks
│   ├── content/                        # AboutMe.md, AboutSite.md
│   └── lens-data/                      # 10 lens prescriptions + analyses
└── __tests__/                          # Vitest unit tests (6 files)
```
