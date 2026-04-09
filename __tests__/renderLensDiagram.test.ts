/**
 * Tests for renderLensDiagram — the portable SVG renderer.
 *
 * These tests serve two purposes:
 *   1. Regression safety: verify the renderer produces valid, expected output.
 *   2. Visual preview: each "writes preview" test saves an SVG to /tmp/ so it
 *      can be opened in a browser to inspect the diagram.
 *
 * ──────────────────────────────────────────────────────────────────────
 * HOW TO USE FOR A NEW LENS DATA FILE
 * ──────────────────────────────────────────────────────────────────────
 * When preparing a new lens.data.ts from a patent, add a test like this:
 *
 *   import MyLensRaw from "../src/lens-data/MyNewLens.data.js";
 *
 *   describe("MyNewLens preview", () => {
 *     it("renders and writes SVG to /tmp/", () => {
 *       const svg = renderLensDiagram(MyLensRaw);
 *       writePreview(MyLensRaw.key, svg);          // opens in browser
 *       expect(svg).toContain('<path');             // has element shapes
 *       expect(svg).toContain('<polyline');         // has rays
 *     });
 *   });
 *
 * Then run:  npm test -- renderLensDiagram
 * Open:      /tmp/lens-preview-<key>.svg  in your browser
 * ──────────────────────────────────────────────────────────────────────
 */

import { describe, it, expect } from "vitest";
import { writeFileSync } from "node:fs";
import { renderLensDiagram } from "../src/utils/renderLensDiagram.js";

/* Production lenses used as test fixtures */
import NikonZ35f18SRaw from "../src/lens-data/NikonZ35f18S.data.js";
import VoigtlanderApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
import NikonNikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import ZeissTessarRaw from "../src/lens-data/ZeissTessar144f55.data.js";

/* ── Helper ── */

/**
 * Write an SVG preview file to /tmp/ for visual inspection.
 * File path: /tmp/lens-preview-<key>.svg
 */
function writePreview(key: string, svg: string): void {
  try {
    writeFileSync(`/tmp/lens-preview-${key}.svg`, svg, "utf-8");
  } catch {
    // Non-fatal: test environment may not have /tmp/ write access
  }
}

/* ═══════════════════════════════════════════════════════════════════
 * §1  SVG structure validation
 * ═══════════════════════════════════════════════════════════════════ */

describe("renderLensDiagram – SVG structure", () => {
  it("returns a string starting with <svg and ending with </svg>", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    expect(typeof svg).toBe("string");
    expect(svg.trimStart()).toMatch(/^<svg /);
    expect(svg.trimEnd()).toMatch(/<\/svg>$/);
  });

  it("includes consistent viewBox/width/height attributes", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    // svgW is always 1080 (from defaults); svgH is computed from lens geometry
    // via ENABLE_UNIFORM_SCALING so we only assert it is a positive integer.
    expect(svg).toContain('width="1080"');
    const viewBoxMatch = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
    expect(viewBoxMatch).not.toBeNull();
    const vbW = parseInt(viewBoxMatch![1], 10);
    const vbH = parseInt(viewBoxMatch![2], 10);
    expect(vbW).toBe(1080);
    expect(vbH).toBeGreaterThan(0);
    // width/height attributes must match the viewBox
    expect(svg).toContain(`width="${vbW}"`);
    expect(svg).toContain(`height="${vbH}"`);
  });

  it("includes the SVG namespace", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
  });

  it("contains glass element paths (filled shapes)", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    // Each element produces a <path> with a fill color
    expect(svg).toContain("<path ");
    // NikonZ35f18S has 11 elements — count closed SVG paths
    const pathCount = (svg.match(/<path /g) ?? []).length;
    // At minimum 11 glass elements; aspheric accent paths add more
    expect(pathCount).toBeGreaterThanOrEqual(11);
  });

  it("contains ray polylines when showRays is true (default)", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    expect(svg).toContain("<polyline ");
  });

  it("contains no ray polylines when showRays is false", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw, { showRays: false });
    expect(svg).not.toContain("<polyline ");
  });

  it("contains STO aperture stop label", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    expect(svg).toContain("STO");
  });

  it("contains IMG image plane label", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    expect(svg).toContain("IMG");
  });

  it("contains element number annotations by default", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    // Element 1 through 11 should appear
    expect(svg).toContain(">1<");
    expect(svg).toContain(">11<");
  });

  it("omits element number annotations when showAnnotations is false", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw, { showAnnotations: false });
    // Should not have standalone digit text elements
    expect(svg).not.toContain(">1<");
  });

  it("contains group labels for lenses that declare groups", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    // NikonZ35f18S declares groups: "Gr1 (+) Fixed", "Gr2 (+) Focus", "Gr3 (−) Focus"
    expect(svg).toContain("Gr1");
    expect(svg).toContain("Gr2");
    expect(svg).toContain("Gr3");
  });

  it("contains doublet labels for lenses that declare doublets", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    // NikonZ35f18S declares doublets: "D1", "D2"
    expect(svg).toContain("D1");
    expect(svg).toContain("D2");
  });

  it("contains aspheric 'A' labels for lenses with aspheric surfaces", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    // NikonZ35f18S has aspherical elements — should show 'A' accent labels
    expect(svg).toContain(">A<");
  });
});

/* ═══════════════════════════════════════════════════════════════════
 * §2  Multiple lenses — rendering doesn't throw
 * ═══════════════════════════════════════════════════════════════════ */

describe("renderLensDiagram – multiple lens types", () => {
  it("renders the Zeiss Tessar (simple 4-element, no aspherics, no groups)", () => {
    const svg = renderLensDiagram(ZeissTessarRaw);
    expect(svg).toContain("<svg ");
    expect(svg).toContain("<path ");
    // Tessar has 4 elements
    const pathCount = (svg.match(/<path /g) ?? []).length;
    expect(pathCount).toBeGreaterThanOrEqual(4);
  });

  it("renders the Voigtlander APO-Lanthar (doublet, no variable gaps)", () => {
    const svg = renderLensDiagram(VoigtlanderApoLantharRaw);
    expect(svg).toContain("<svg ");
    expect(svg).toContain("<path ");
  });

  it("renders the Nikon Z 70-200 zoom lens (variable gaps, zoom positions)", () => {
    const svg = renderLensDiagram(NikonNikkorZ70200Raw);
    expect(svg).toContain("<svg ");
    expect(svg).toContain("<path ");
  });

  it("renders the zoom lens at tele end (zoomT=1) without throwing", () => {
    const svg = renderLensDiagram(NikonNikkorZ70200Raw, { zoomT: 1 });
    expect(svg).toContain("<svg ");
  });
});

/* ═══════════════════════════════════════════════════════════════════
 * §3  Slider positions
 * ═══════════════════════════════════════════════════════════════════ */

describe("renderLensDiagram – slider positions", () => {
  it("produces different SVG at close focus vs infinity focus", () => {
    const atInfinity = renderLensDiagram(NikonZ35f18SRaw, { focusT: 0 });
    const atClose = renderLensDiagram(NikonZ35f18SRaw, { focusT: 1 });
    // The element positions differ — SVGs will not be identical
    expect(atInfinity).not.toBe(atClose);
  });

  it("produces different SVG at different aperture stop-down positions", () => {
    const wideOpen = renderLensDiagram(NikonZ35f18SRaw, { stopdownT: 0 });
    const stoppedDown = renderLensDiagram(NikonZ35f18SRaw, { stopdownT: 1 });
    // The aperture blade inner position changes, altering the stop lines
    expect(wideOpen).not.toBe(stoppedDown);
  });

  it("renders correctly at all boundary slider values", () => {
    for (const focusT of [0, 0.5, 1]) {
      for (const stopdownT of [0, 0.5, 1]) {
        expect(() => renderLensDiagram(NikonZ35f18SRaw, { focusT, stopdownT })).not.toThrow();
      }
    }
  });
});

/* ═══════════════════════════════════════════════════════════════════
 * §4  Error handling
 * ═══════════════════════════════════════════════════════════════════ */

describe("renderLensDiagram – error handling", () => {
  it("throws a descriptive error for lens data with no surfaces", () => {
    const badInput = {
      ...NikonZ35f18SRaw,
      surfaces: [],
    };
    expect(() => renderLensDiagram(badInput)).toThrow();
  });

  it("throws a descriptive error for lens data missing required fields", () => {
    // `closeFocusM` is required and has no default — omitting it should throw
    const { closeFocusM: _omitted, ...withoutClose } = NikonZ35f18SRaw;
    expect(() => renderLensDiagram(withoutClose as typeof NikonZ35f18SRaw)).toThrow();
  });
});

/* ═══════════════════════════════════════════════════════════════════
 * §5  Visual previews — write SVG files to /tmp/ for inspection
 * ═══════════════════════════════════════════════════════════════════ */

describe("renderLensDiagram – visual previews", () => {
  it("writes NikonZ35f18S SVG to /tmp/lens-preview-nikkor-z-35f18s.svg", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw);
    writePreview(NikonZ35f18SRaw.key, svg);
    expect(svg.length).toBeGreaterThan(100);
  });

  it("writes NikonZ35f18S at close focus to /tmp/lens-preview-nikkor-z-35f18s-closefocus.svg", () => {
    const svg = renderLensDiagram(NikonZ35f18SRaw, { focusT: 1 });
    writePreview(`${NikonZ35f18SRaw.key}-closefocus`, svg);
    expect(svg.length).toBeGreaterThan(100);
  });

  it("writes ZeissTessar SVG to /tmp/ (simple lens sanity check)", () => {
    const svg = renderLensDiagram(ZeissTessarRaw);
    writePreview(ZeissTessarRaw.key, svg);
    expect(svg.length).toBeGreaterThan(100);
  });

  it("writes Nikon Z 70-200 zoom SVG at wide end to /tmp/", () => {
    const svg = renderLensDiagram(NikonNikkorZ70200Raw, { zoomT: 0 });
    writePreview(`${NikonNikkorZ70200Raw.key}-wide`, svg);
    expect(svg.length).toBeGreaterThan(100);
  });

  it("writes Nikon Z 70-200 zoom SVG at tele end to /tmp/", () => {
    const svg = renderLensDiagram(NikonNikkorZ70200Raw, { zoomT: 1 });
    writePreview(`${NikonNikkorZ70200Raw.key}-tele`, svg);
    expect(svg.length).toBeGreaterThan(100);
  });
});
