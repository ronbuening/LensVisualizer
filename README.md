# LensVisualizer

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses derived from optical patents, with real-time ray tracing, focus and aperture adjustment, element inspection, and multiple themes.

**Live app:** [ronbuening.github.io/LensVisualizer](https://ronbuening.github.io/LensVisualizer/)

## Features

- **SVG cross-section rendering** — Vector lens diagrams computed in real-time from optical prescription data
- **Real-time ray tracing** — Visualize on-axis and off-axis light paths through the optical system
- **Focus control** — Adjust focus distance with an interactive slider; see how variable air gaps shift
- **Aperture control** — Change f-number from wide open to stopped down with clickable f-stop presets
- **Element inspection** — Hover or click elements to view refractive index, Abbe number, focal length, glass type, and optical role
- **Design analysis** — Each lens includes a detailed markdown write-up of its optical design
- **4 themes** — Dark, Light, and high-contrast variants of each
- **Responsive layout** — Side-by-side diagram and analysis on desktop; tabbed view on mobile

## Available Lenses

| Lens | Elements / Groups | Notes |
|------|-------------------|-------|
| NOKTON 50mm f/1.0 | 8 / 6 | Ultra-fast; 3 aspheric surfaces |
| APO-LANTHAR 50mm f/2.0 | 10 / 8 | Floating focus; 2 double-sided aspherics; APD elements |
| NIKKOR Z 50mm f/1.8 S | 12 / 9 | 2 aspherics + 2 ED elements |
| NIKKOR 105mm f/1.4E ED | 14 / 9 | All-spherical; APD for secondary spectrum |

## Getting Started

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run test       # Run unit tests
```

Requires Node.js 18+.

## Request a Lens

Want to see a specific lens added? [Open an issue](https://github.com/ronbuening/LensVisualizer/issues/new) with the lens name and, if available, a link to the patent or optical prescription data.

## Tech Stack

- React 18 + Vite 6
- Inline SVG rendering (no canvas)
- Vitest for unit testing
- Deployed to GitHub Pages via GitHub Actions