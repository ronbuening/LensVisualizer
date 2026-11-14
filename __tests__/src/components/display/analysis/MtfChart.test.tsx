/** Synthetic chart controls keep presentation changes independent of optical-engine results. */
// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MtfChart from "../../../../../src/components/display/analysis/MtfChart.js";
import type { MtfResult } from "../../../../../src/types/mtf.js";
import { mockTheme } from "../../../../testUtils.js";
import type { RuntimeLens } from "../../../../../src/types/optics.js";
import { DEFAULT_MTF_PREFERENCES } from "../../../../../src/utils/state/mtfPreferences.js";
import {
  buildMtfExportContext,
  mtfContextBlock,
  MTF_EXPORT_DISCLAIMER,
} from "../../../../../src/components/display/analysis/mtf/mtfExportContext.js";
import { mtfAllSamplesCsv, mtfViewCsv } from "../../../../../src/components/display/analysis/mtf/mtfExportCsv.js";
import { mtfCsv } from "../../../../../src/components/display/analysis/mtf/mtfCsv.js";
import { buildMtfSvg } from "../../../../../src/components/display/analysis/mtf/mtfExportImage.js";
import {
  downloadMtfBlob,
  mtfPngBlob,
  snapshotMtfChart,
} from "../../../../../src/components/display/analysis/mtf/mtfDownload.js";

function syntheticResult(): MtfResult {
  return {
    method: "diffraction",
    spectrum: "reference",
    support: {
      available: true,
      reason: null,
      message: "",
      referenceWavelengthNm: 550,
      useResolvedReference: false,
      spectralLines: [{ wavelengthNm: 550, weight: 1 }],
      limitations: [],
    },
    frequenciesPerMm: [0, 10, 30, 50, 100],
    fields: [0, 0.25, 0.5, 0.75, 1].map((fraction) => ({
      fieldFraction: fraction,
      targetImageHeightMm: 20 * fraction,
      imageHeightMm: 20 * fraction,
      fieldAngleDeg: 10 * fraction,
      sagittal: [1, 0.9 - 0.2 * fraction, 0.7 - 0.2 * fraction, 0.5 - 0.2 * fraction, 0.1],
      tangential: [1, 0.8 - 0.2 * fraction, 0.6 - 0.2 * fraction, 0.4 - 0.2 * fraction, 0.05],
      status: "converged",
      reason: null,
      message: "",
      notes: [],
      pupilSampling: "stop",
      gridSize: 32,
      validRays: 100,
      blockedRays: 0,
      failedRays: 0,
      unaimedRays: 0,
      unresolvedInBeamRays: 0,
      unknownFluxFraction: 0,
      maxDelta: 0,
      convergedThroughLpMm: 100,
      diffractionLimit: { sagittal: [1, 0.95, 0.85, 0.75, 0.5], tangential: [1, 0.94, 0.84, 0.74, 0.49] },
    })),
    geometry: {
      referenceHeightMm: 20,
      modeledEdgeHeightMm: 20,
      modeledEdgeAngleDeg: 10,
      chiefEdgeHeightMm: 20,
      chiefEdgeAngleDeg: 10,
      basis: "format-corner",
    },
    focus: null,
    axialVignetting: null,
  };
}

function parseCsv(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;
  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    if (char === '"') {
      if (quoted && csv[i + 1] === '"') {
        value += '"';
        i++;
      } else quoted = !quoted;
    } else if (!quoted && (char === "," || char === "\n")) {
      row.push(value);
      value = "";
      if (char === "\n") {
        rows.push(row);
        row = [];
      }
    } else value += char;
  }
  row.push(value);
  rows.push(row);
  return rows;
}

afterEach(cleanup);

// Export controls use distinct synthetic values so withheld and overlay cells cannot be confused.
describe("MTF export builders", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });
  const lens = {
    source: {
      name: "Control & Lens",
      key: "control-lens",
      catalog: { fNumber: { design: 4.1, marketing: 4 } },
      source: { patentNumber: "US 123 A", example: { label: "Example 2", id: "2" } },
    },
    FOPEN: 4.1,
    isZoom: false,
  } as unknown as RuntimeLens;
  const zoomLens = (marketing: number | readonly number[]) =>
    ({
      ...lens,
      isZoom: true,
      FOPEN: 4.6,
      zoomFOPENs: [4.6, 5.2, 5.8],
      source: { ...lens.source, catalog: { fNumber: { design: 4.6, marketing } } },
    }) as unknown as RuntimeLens;
  const contextFor = (result: MtfResult, overrides: Partial<Parameters<typeof buildMtfExportContext>[0]> = {}) =>
    buildMtfExportContext({
      lens,
      result,
      preferences: DEFAULT_MTF_PREFERENCES,
      focalLengthMm: 50,
      fNumber: 5.6,
      zoomT: 0.25,
      focusT: 0,
      link: "https://example.com/lens/control/?v=1&tab=mtf&mtf=1",
      spectrumNote: "Missing spectral data\nfor a glass",
      date: new Date("2026-11-13T23:30:00-05:00"),
      ...overrides,
    });
  const captionResult = () => {
    const result = syntheticResult();
    result.spectrum = "photopic";
    result.support.spectralLines = Array.from({ length: 9 }, (_, i) => ({
      wavelengthNm: 470 + i * 22.5,
      weight: 1 / 9,
    }));
    result.geometry!.referenceHeightMm = 20.123456789;
    result.focus = {
      requestedMode: "best-axial",
      mode: "best-axial",
      appliedShiftMm: -0.05105684538361473,
      bestAxialShiftMm: -0.05105684538361473,
      designScore: 0.1,
      bestScore: 0.2,
      imagePlaneOffsetMm: 0,
      imagePlaneInconsistent: false,
    };
    return result;
  };
  const captionFor = (context: ReturnType<typeof contextFor>) => {
    const image = buildMtfSvg({ content: "", width: 600, height: 300, legend: [] }, context, mockTheme);
    const doc = new DOMParser().parseFromString(image.svg, "image/svg+xml");
    expect(doc.querySelector("parsererror")).toBeNull();
    const lines = [...doc.querySelectorAll('[aria-label="MTF export caption"] text')].map((node) => node.textContent!);
    return { image, doc, lines };
  };
  const dataRows = (csv: string) => parseCsv(csv).filter((row) => !row[0].startsWith("# "));

  // Catalog aperture metadata must describe the same station as the chart.
  it.each([
    [0, 4.6, 4.5],
    [0.25, 4.9, 4.5],
    [1, 5.8, 5.6],
  ])("exports the charted zoom aperture at zoom %s", (zoomT, design, marketing) => {
    const context = contextFor(captionResult(), { lens: zoomLens([4.5, 5.6]), zoomT, fNumber: 8 });
    const expected = `selected f/8; design wide-open f/${design}; marketed wide-open f/${marketing}`;
    expect(context.aperture).toBe(expected);
    expect(mtfContextBlock(context)).toContain(`# aperture: ${expected}`);
    const { doc, lines } = captionFor(context);
    expect(doc.querySelector("desc")!.textContent).toContain(`# aperture: ${expected}`);
    expect(lines[1]).toContain(`f/8.0 (design f/${design}, marketed f/${marketing})`);
  });

  it.each([
    [
      [4.5, 5.6],
      [
        [0.5, 4.5],
        [0.5001, 5.6],
      ],
    ],
    [
      [4.5, 5, 5.6],
      [
        [0.25, 4.5],
        [0.2501, 5],
        [0.5, 5],
        [0.75, 5],
        [0.7501, 5.6],
      ],
    ],
  ] as const)("selects the nearest marketed aperture from %j, with ties toward wide", (marketing, stations) => {
    for (const [zoomT, expected] of stations) {
      const context = contextFor(syntheticResult(), { lens: zoomLens(marketing), zoomT });
      expect(context.aperture.split("; ").at(-1)).toBe(`marketed wide-open f/${expected}`);
    }
  });

  it.each([0, 1])("qualifies a single marketed zoom aperture as a catalog value at zoom %s", (zoomT) => {
    const context = contextFor(captionResult(), { lens: zoomLens(4.5), zoomT });
    expect(context.aperture).toContain("; catalog marketed f/4.5");
    expect(context.aperture).not.toContain("; marketed wide-open");
    const { doc, lines } = captionFor(context);
    expect(doc.querySelector("desc")!.textContent).toContain("; catalog marketed f/4.5");
    expect(lines[1]).toContain(", catalog marketed f/4.5)");
  });

  it("preserves prime design and marketed apertures and omits a redundant marketed value", () => {
    const prime = { ...lens, FOPEN: 4.125 };
    expect(contextFor(syntheticResult(), { lens: prime }).aperture).toBe(
      "selected f/5.6; design wide-open f/4.1; marketed wide-open f/4",
    );
    const sameAperture = {
      ...prime,
      source: { ...prime.source, catalog: { fNumber: { design: 4.1, marketing: 4.1 } } },
    };
    expect(contextFor(syntheticResult(), { lens: sameAperture }).aperture).toBe(
      "selected f/5.6; design wide-open f/4.1",
    );
  });

  it("records source, optical station, actual spectrum/plane, fallback, UTC date and disclaimer", () => {
    const result = syntheticResult();
    result.focus = {
      requestedMode: "auto",
      mode: "best-axial",
      appliedShiftMm: -0.125,
      bestAxialShiftMm: -0.125,
      designScore: 0.1,
      bestScore: 0.2,
      imagePlaneOffsetMm: 1,
      imagePlaneInconsistent: true,
    };
    const context = contextFor(result);
    expect(context).toMatchObject({
      site_name: "Surface & Stop",
      lens_name: "Control & Lens",
      lens_key: "control-lens",
      source: "US 123 A; Example 2",
      station: "50 mm; infinity; zoom 0.25; focus 0",
      aperture: "selected f/5.6; design wide-open f/4.1; marketed wide-open f/4",
      method: "Diffraction-corrected",
      spectrum: "reference; 550 nm (weight 1)",
      preferred_spectrum: "photopic",
      focus: "best-axial; shift -0.125 mm from authored plane (requested auto)",
      grid_cap: "256 cells across pupil",
      reference_image_height: "20 mm; format-corner",
      generation_date: "2026-11-14",
      shared_link: "https://example.com/lens/control/?v=1&tab=mtf&mtf=1",
      disclaimer: MTF_EXPORT_DISCLAIMER,
      status: "complete",
    });
    const block = mtfContextBlock(context);
    expect(parseCsv(block)).toHaveLength(Object.keys(context).length);
    expect(block).toContain('"# spectrum_fallback_reason: Missing spectral data\nfor a glass"');
    expect(block).toContain("# shared_link: https://example.com/");
    result.fields[0].status = "pending";
    result.support.conjugate = {
      focusT: 1,
      zoomT: 0.25,
      objectDistanceMm: 500,
      distanceReference: "image-plane",
      source: "Table 2",
    };
    expect(contextFor(result)).toMatchObject({
      status: "partial",
      station: "50 mm; 500 mm from image-plane; zoom 0.25; focus 0",
    });
  });

  it("prints a short default caption while retaining every metadata key and spectral weight in desc", () => {
    const context = contextFor(captionResult(), { focalLengthMm: 51.28923234165664 });
    const { doc, lines } = captionFor(context);
    expect(lines).toHaveLength(6);
    expect(lines.slice(0, 4)).toEqual([
      "Control & Lens — US 123 A, Example 2",
      "f/5.6 (design f/4.1, marketed f/4.0) · 51.3 mm · infinity · reference height 20.12 mm",
      "Diffraction-corrected · photopic, 9 lines 470–650 nm · best axial focus estimate, −0.051 mm · grid cap 256",
      `${context.shared_link} · 2026-11-14`,
    ]);
    expect(lines.slice(4).join(" ")).toBe(MTF_EXPORT_DISCLAIMER);
    expect(lines.join(" ")).not.toMatch(/weight|lens key|status:|zoom 0.25/);
    const metadata = doc.querySelector("desc")!.textContent!;
    expect(parseCsv(metadata).map(([line]) => line.slice(2, line.indexOf(": ")))).toEqual(Object.keys(context));
    for (const line of captionResult().support.spectralLines) {
      expect(metadata).toContain(`${line.wavelengthNm} nm (weight ${line.weight})`);
    }
  });

  it("identifies a held-plane comparison, finite station and enabled reference markers", () => {
    const result = captionResult();
    result.support.conjugate = {
      focusT: 1,
      zoomT: 0.25,
      objectDistanceMm: 500.123456789,
      distanceReference: "first-surface",
      source: "Synthetic station",
    };
    const comparison = captionResult();
    comparison.focus!.mode = "held";
    const { lines } = captionFor(
      contextFor(result, {
        comparison,
        preferences: { ...DEFAULT_MTF_PREFERENCES, view: "frequency", diffractionLimit: true, pixelPitchUm: 5 },
      }),
    );
    expect(lines).toHaveLength(7);
    expect(lines[1]).toContain("500.1 mm from first surface");
    expect(lines[3]).toBe(
      "f/8 comparison: held plane, −0.051 mm · diffraction-limit reference · Nyquist marker, 5 µm pixels",
    );
  });

  it("wraps long lens names and truncates long links while preserving their full metadata", () => {
    const name = `${"X".repeat(300)} & <Control>`;
    const link = `https://example.com/?mtf=${"settings".repeat(50)}`;
    const context = contextFor(captionResult(), { lens: { ...lens, source: { ...lens.source, name } }, link });
    const { image, doc, lines } = captionFor(context);
    expect(lines).toHaveLength(8);
    expect(lines.slice(0, 3).join("")).toBe(`${name} — US 123 A, Example 2`);
    expect(lines.every((line) => line.length <= 128)).toBe(true);
    expect(lines[5]).toMatch(/^https:\/\/example.com\/\?mtf=.+… · 2026-11-14$/);
    expect(doc.querySelector("desc")!.textContent).toContain(`# shared_link: ${link}`);
    expect(doc.querySelector("desc")!.textContent).toContain(`# lens_name: ${name}`);
    for (const node of doc.querySelectorAll('[aria-label="MTF export caption"] text')) {
      expect(Number(node.getAttribute("y"))).toBeLessThan(image.height - 16);
    }
  });

  // User-authored names must survive both XML serialization and caption line breaks.
  it.each([
    ["emoji", `${"A".repeat(127)}${"🔭".repeat(20)}`, "A".repeat(127)],
    ["CJK", "望遠鏡".repeat(50), "望遠鏡".repeat(21) + "望"],
    ["combining marks", "e\u0301".repeat(140), "e\u0301".repeat(128)],
    ["joined emoji", "👩🏽‍🔬".repeat(70), "👩🏽‍🔬".repeat(64)],
  ])("wraps %s names at grapheme boundaries with wider glyphs taking two columns", (_, name, firstLine) => {
    const context = contextFor(captionResult(), { lens: { ...lens, source: { ...lens.source, name } } });
    const { doc, lines } = captionFor(context);
    expect(lines[0]).toBe(firstLine);
    expect(lines.join("")).toContain(name);
    expect(doc.querySelector("title")!.textContent).toBe(`Simulated MTF — ${name}`);
    expect(doc.querySelector("desc")!.textContent).toContain(`# lens_name: ${name}`);
  });

  it.each([
    ["emoji", `${"A".repeat(113)}${"🔭".repeat(20)}`, `${"A".repeat(113)}…`],
    ["CJK", "望".repeat(140), `${"望".repeat(57)}…`],
    ["combining marks", "e\u0301".repeat(140), `${"e\u0301".repeat(114)}…`],
    ["joined emoji", "👩🏽‍🔬".repeat(70), `${"👩🏽‍🔬".repeat(57)}…`],
  ])("truncates %s links at grapheme boundaries within the caption width", (_, link, shortened) => {
    const { doc, lines } = captionFor(contextFor(captionResult(), { link }));
    expect(lines).toContain(`${shortened} · 2026-11-14`);
    expect(doc.querySelector("desc")!.textContent).toContain(`# shared_link: ${link}`);
  });

  it("replaces lone surrogates and XML-invalid characters in names, links and legend text", () => {
    const name = `🔭\ud800X\udc00\u0000\u000b\ufffe\uffff & <Lens>`;
    const safeName = "🔭�X����� & <Lens>";
    const context = contextFor(captionResult(), { lens: { ...lens, source: { ...lens.source, name } }, link: name });
    const image = buildMtfSvg({ content: "", width: 600, height: 300, legend: [{ text: name }] }, context, mockTheme);
    const doc = new DOMParser().parseFromString(image.svg, "image/svg+xml");
    expect(doc.querySelector("parsererror")).toBeNull();
    expect(doc.querySelector("title")!.textContent).toBe(`Simulated MTF — ${safeName}`);
    expect(doc.querySelector("desc")!.textContent).toContain(`# lens_name: ${safeName}`);
    expect(doc.querySelector("desc")!.textContent).toContain(`# shared_link: ${safeName}`);
    expect([...doc.querySelectorAll("text")].map((node) => node.textContent)).toContain(safeName);
  });

  it("keeps code points intact when grapheme segmentation is unavailable", () => {
    const name = `${"A".repeat(127)}${"🔭".repeat(20)}`;
    const link = `${"A".repeat(113)}${"🔭".repeat(20)}`;
    const context = contextFor(captionResult(), { lens: { ...lens, source: { ...lens.source, name } }, link });
    const intl = Object.create(Intl);
    Object.defineProperty(intl, "Segmenter", { value: undefined });
    vi.stubGlobal("Intl", intl);
    const { doc, lines } = captionFor(context);
    expect(lines[0]).toBe("A".repeat(127));
    expect(lines.join("")).toContain(name);
    expect(lines).toContain(`${"A".repeat(113)}… · 2026-11-14`);
    expect(doc.querySelector("desc")!.textContent).toContain(`# shared_link: ${link}`);
  });

  it("labels a partial result and diagnostic estimates without listing unavailable focus diagnostics", () => {
    const result = captionResult();
    result.fields[0].status = "pending";
    result.focus = null;
    const { lines } = captionFor(contextFor(result, { diagnostic: true }));
    expect(lines).toHaveLength(7);
    expect(lines[2]).toContain("image plane not yet available");
    expect(lines[3]).toBe("diagnostic estimates shown · partial result");
    expect(lines.join(" ")).not.toContain("requested best-axial");
  });

  it.each(["design", "held"] as const)("labels the applied %s plane with the tab's precision", (mode) => {
    const result = captionResult();
    result.focus!.mode = mode;
    result.focus!.appliedShiftMm = -0.0514996;
    const { lines } = captionFor(contextFor(result));
    expect(lines[2]).toContain(mode === "design" ? "design plane" : "held plane, −0.051 mm");
  });

  it("rounds derived context lengths to six decimals in both CSV scopes and desc without rounding weights or links", () => {
    const result = captionResult();
    result.support.conjugate = {
      focusT: 1,
      zoomT: 0.25,
      objectDistanceMm: 500.123456789,
      distanceReference: "image-plane",
      source: "Synthetic station",
    };
    result.support.spectralLines[0].wavelengthNm = 470.123456789;
    const comparison = captionResult();
    comparison.focus!.mode = "held";
    comparison.focus!.appliedShiftMm = 1.23456789e-7;
    const link = "https://example.com/?distance=51.28923234165664";
    const context = contextFor(result, { focalLengthMm: 51.28923234165664, comparison, link });
    const options = { result, context, view: "field" as const, frequencies: [10] };
    const description = captionFor(context).doc.querySelector("desc")!.textContent;
    for (const text of [mtfViewCsv(options), mtfAllSamplesCsv(options), description]) {
      expect(text).toContain("# station: 51.289232 mm; 500.123457 mm from image-plane;");
      expect(text).toContain("# focus: best-axial; shift -0.051057 mm");
      expect(text).toContain("# reference_image_height: 20.123457 mm; format-corner");
      expect(text).toContain(`470.123457 nm (weight ${1 / 9})`);
      expect(text).toContain("# comparison: f/8; held; shift 0 mm");
      expect(text).toContain(`# shared_link: ${link}`);
    }
  });

  it("exports the selected image-height table with quoted notes and f/8 notes", () => {
    const result = syntheticResult();
    result.fields[0].notes = ['Aim, with "qualification"'];
    const comparison = syntheticResult();
    comparison.fields[0].notes = ["Overlay note"];
    const csv = mtfViewCsv({
      result,
      comparison,
      context: contextFor(result),
      view: "field",
      frequencies: [10],
      diffractionLimit: true,
    });
    const [header, first, ...rest] = dataRows(csv);
    expect(header.slice(2, 4)).toEqual(["10 lp/mm sagittal", "10 lp/mm tangential"]);
    expect(header).not.toContain("30 lp/mm sagittal");
    expect(header.slice(-3)).toEqual(["f/8 10 lp/mm diffraction limit tangential", "Notes", "f/8 notes"]);
    expect(first.slice(-2)).toEqual(['Aim, with "qualification"', "Overlay note"]);
    expect(rest).toHaveLength(4);
  });

  it.each([
    "=1+1",
    "+1+1",
    "-1+1",
    "@SUM(1)",
    "\t=1+1",
    "\tNote",
    "\rNote",
    "  =1+1",
    "  +1+1",
    "  -1+1",
    "  @SUM(1)",
    "  \tNote",
    "  \rNote",
    '\n=HYPERLINK("https://example.com", "caption")',
  ])("neutralizes formula-capable notes and messages before CSV quoting: %j", (text) => {
    const result = syntheticResult();
    result.fields[0].notes = [text];
    const comparison = syntheticResult();
    comparison.fields[0].message = text;
    const options = { result, comparison, context: contextFor(result), view: "field" as const, frequencies: [10] };
    for (const csv of [mtfViewCsv(options), mtfViewCsv({ ...options, view: "frequency" }), mtfAllSamplesCsv(options)]) {
      const [header, ...rows] = dataRows(csv);
      expect(rows.every((row) => row.length === header.length)).toBe(true);
      expect(rows[0][header.indexOf("Notes")]).toBe(`'${text}`);
      expect(rows[0][header.findIndex((name) => name.toLowerCase() === "f/8 notes")]).toBe(`'${text}`);
    }
  });

  it("keeps negative numeric cells numeric while guarding numeric-looking free text", () => {
    const result = syntheticResult();
    result.fields[0].imageHeightMm = -1.25;
    result.fields[0].sagittal[1] = -0.25;
    result.fields[0].notes = ["-1.25"];
    const options = { result, context: contextFor(result), view: "field" as const, frequencies: [10] };
    const [header, first] = dataRows(mtfViewCsv(options));
    expect(first[header.indexOf("Image height (mm)")]).toBe("-1.250");
    expect(first[header.indexOf("10 lp/mm sagittal")]).toBe("-0.2500");
    expect(first[header.indexOf("Notes")]).toBe("'-1.25");
    for (const csv of [mtfViewCsv({ ...options, view: "frequency" }), mtfAllSamplesCsv(options)]) {
      const [header, ...rows] = dataRows(csv);
      const row = rows.find((row) => row[0] === "0" && row[1] === "10")!;
      expect(row[header.indexOf("Image height (mm)")]).toBe("-1.25");
      expect(row[header.indexOf("Sagittal")]).toBe("-0.2500");
      expect(row[header.indexOf("Notes")]).toBe("'-1.25");
    }
  });

  it("round-trips single-cell context records by decoding CSV, stripping '# ', then splitting the first ': '", () => {
    const result = syntheticResult();
    const context = {
      ...contextFor(result, { lens: { ...lens, source: { ...lens.source, name: "Lens,=1+1" } } }),
      source: '  @SUM(1): "source",\r\n# embedded line\n\t=1+1  ',
      spectrum_fallback_reason: "",
    };
    const options = { result, context, view: "field" as const, frequencies: [10] };
    const block = mtfContextBlock(context);
    expect(block).toContain('"# lens_name: Lens,=1+1"');
    expect(block).toContain('""source""');
    for (const csv of [block, mtfViewCsv(options), mtfAllSamplesCsv(options)]) {
      const rows = parseCsv(csv).filter((row) => row[0].startsWith("# "));
      expect(rows.every((row) => row.length === 1)).toBe(true);
      const parsed = Object.fromEntries(
        rows.map(([line]) => {
          const entry = line.slice(2);
          const separator = entry.indexOf(": ");
          return [entry.slice(0, separator), entry.slice(separator + 2)];
        }),
      );
      expect(parsed).toMatchObject(context);
    }
  });

  it("keeps Copy CSV bytes unchanged when free-text notes and messages contain formulas", () => {
    const result = syntheticResult();
    result.fields = result.fields.slice(0, 1);
    result.fields[0].notes = ["=1+1"];
    result.fields[0].message = "@SUM(1)";
    expect(mtfCsv(result, [10])).toBe(
      "Image height (mm),Field (%),10 lp/mm sagittal,10 lp/mm tangential,Status,Values,Stable through (lp/mm)\n" +
        "0.000,0,0.9000,0.8000,converged,converged band only,100",
    );
  });

  it("exports each frequency of the shown fields, including independent overlay edges", () => {
    const result = syntheticResult();
    const comparison = syntheticResult();
    comparison.fields[4].status = "unavailable";
    const rows = dataRows(
      mtfViewCsv({ result, comparison, context: contextFor(result), view: "frequency", frequencies: [10] }),
    );
    expect(rows).toHaveLength(1 + 4 * 5);
    expect(rows[0]).toContain("Frequency (lp/mm)");
    expect(rows.slice(1).map((row) => row.slice(0, 2))).toEqual(
      [0, 50, 75, 100].flatMap((f) => [0, 10, 30, 50, 100].map((v) => [String(f), String(v)])),
    );
    const overlayOnly = rows.find((row) => row[0] === "75" && row[1] === "10")!;
    expect(overlayOnly.slice(2, 8)).toEqual(["", "", "", "", "", ""]);
    expect(overlayOnly.slice(8, 12)).toEqual(["15", "0.7500", "0.6500", "converged"]);
  });

  it("withholds out-of-band, unconverged, unavailable and pending cells, with explicit diagnostic statuses", () => {
    const result = syntheticResult();
    result.fields[1].status = "unconverged";
    result.fields[1].convergedThroughLpMm = 30;
    result.fields[2].status = "pending";
    result.fields[3].convergedThroughLpMm = 30;
    result.fields[4].status = "unavailable";
    const options = {
      result,
      comparison: result,
      context: contextFor(result),
      view: "frequency" as const,
      frequencies: [10],
      frequencyField: 0.25,
      diffractionLimit: true,
    };
    const [header, ...rows] = dataRows(mtfViewCsv(options));
    expect(rows).toHaveLength(5);
    expect(rows[1]).toEqual([
      "25",
      "10",
      "5",
      "",
      "",
      "unconverged",
      "30",
      "",
      "5",
      "",
      "",
      "unconverged",
      "30",
      "",
      "",
      "",
      "",
      "",
    ]);
    expect(header.slice(-4)).toEqual([
      "Diffraction limit sagittal",
      "Diffraction limit tangential",
      "f/8 Diffraction limit sagittal",
      "f/8 Diffraction limit tangential",
    ]);
    const diagnostic = dataRows(mtfViewCsv({ ...options, diagnostic: true }));
    expect(diagnostic[2].slice(2, 6)).toEqual(["5", "0.8500", "0.7500", "unconverged; diagnostic estimates included"]);
    expect(diagnostic[2].slice(-4)).toEqual(["0.9500", "0.9400", "0.9500", "0.9400"]);
    const fieldView = dataRows(mtfViewCsv({ ...options, view: "field", diagnostic: true }));
    expect(fieldView[2][fieldView[0].indexOf("Status")]).toBe("unconverged; diagnostic estimates included");
    expect(fieldView[2][fieldView[0].indexOf("f/8 status")]).toBe("unconverged; diagnostic estimates included");
    const all = dataRows(mtfAllSamplesCsv({ ...options, diagnostic: true }));
    expect(all).toHaveLength(26);
    for (const fraction of ["50", "100"]) {
      expect(
        all.filter((row) => row[0] === fraction).every((row) => row[3] === "" && row[4] === "" && row.at(-1) === ""),
      ).toBe(true);
    }
    const normal = dataRows(mtfAllSamplesCsv(options));
    expect(normal.find((row) => row[0] === "75" && row[1] === "50")?.slice(3, 5)).toEqual(["", ""]);
  });

  it("falls back to the chart overview for an absent saved field", () => {
    const result = syntheticResult();
    const options = { result, context: contextFor(result), view: "frequency" as const, frequencies: [10] };
    expect(mtfViewCsv({ ...options, frequencyField: 0.1 })).toBe(mtfViewCsv(options));
    expect(dataRows(mtfAllSamplesCsv({ ...options, frequencyField: 0.25 }))).toHaveLength(26);
  });

  it("wraps actual chart series, legend and captions in valid standalone themed SVG", () => {
    const result = syntheticResult();
    const ref = { current: null as HTMLElement | null };
    render(
      <MtfChart
        result={result}
        comparison={result}
        view="frequency"
        frequencyField={0.25}
        frequencies={[10]}
        t={mockTheme}
        exportRef={ref}
        diffractionLimit
        pixelPitchUm={5}
      />,
    );
    const snapshot = snapshotMtfChart(ref.current!);
    const image = buildMtfSvg(snapshot, contextFor(result), mockTheme);
    const document = new DOMParser().parseFromString(image.svg, "image/svg+xml");
    expect(document.querySelector("parsererror")).toBeNull();
    expect(image.svg).toContain(snapshot.content);
    expect(
      [...document.querySelectorAll('path[stroke-width="2"]')].filter((path) => path.getAttribute("d")),
    ).toHaveLength(2);
    expect(
      [...document.querySelectorAll('path[stroke-width="1.1"]')].filter((path) => path.getAttribute("d")),
    ).toHaveLength(2);
    expect(document.querySelectorAll('[data-testid="mtf-diffraction-limit"]')).toHaveLength(2);
    expect(document.documentElement.getAttribute("font-family")).toContain("JetBrains Mono");
    expect(document.querySelector("rect")?.getAttribute("fill")).toBe(mockTheme.panelBg);
    expect(document.documentElement.textContent).toContain("Control & Lens");
    expect(document.documentElement.textContent).toContain(MTF_EXPORT_DISCLAIMER);
    expect(document.documentElement.textContent).toContain("25 % · 5.0 mm (circle markers)");
    expect(document.documentElement.textContent).toContain("Nyquist, 5 µm pixels: 100 lp/mm");
    expect(image.svg).not.toContain("foreignObject");
    expect(image.svg).not.toContain("var(--");
  });

  it("removes the temporary download anchor and revokes its URL after browser dispatch", () => {
    vi.useFakeTimers();
    const revokeObjectURL = vi.fn();
    vi.stubGlobal(
      "URL",
      class extends URL {
        static createObjectURL = vi.fn(() => "blob:mtf-download");
        static revokeObjectURL = revokeObjectURL;
      },
    );
    const click = vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function (this: HTMLAnchorElement) {
      expect(this.isConnected).toBe(true);
      expect(this.download).toBe("control-frequency-2026-11-13.csv");
    });
    downloadMtfBlob(new Blob(["data"], { type: "text/csv" }), "control-frequency-2026-11-13.csv");
    expect(click).toHaveBeenCalledOnce();
    expect(document.querySelector("a[download]")).toBeNull();
    expect(revokeObjectURL).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(revokeObjectURL).toHaveBeenCalledExactlyOnceWith("blob:mtf-download");
  });

  it("requests a 2× canvas raster and rejects unavailable canvas or PNG encoding", async () => {
    // jsdom has no rasterizer: exercise image decoding dispatch, dimensions and canvas calls with stubs.
    const revokeObjectURL = vi.fn();
    vi.stubGlobal(
      "URL",
      class extends URL {
        static createObjectURL = vi.fn(() => "blob:mtf-chart");
        static revokeObjectURL = revokeObjectURL;
      },
    );
    vi.stubGlobal(
      "Image",
      class {
        onload: (() => void) | null = null;
        set src(_value: string) {
          queueMicrotask(() => this.onload?.());
        }
      },
    );
    const drawImage = vi.fn();
    const getContext = vi
      .spyOn(HTMLCanvasElement.prototype, "getContext")
      .mockReturnValue({ drawImage } as unknown as CanvasRenderingContext2D);
    const png = new Blob(["stub"], { type: "image/png" });
    const toBlob = vi.spyOn(HTMLCanvasElement.prototype, "toBlob").mockImplementation((callback) => callback(png));
    const image = { svg: "<svg/>", width: 100, height: 50 };
    expect(await mtfPngBlob(image)).toBe(png);
    const canvas = getContext.mock.instances[0] as HTMLCanvasElement;
    expect([canvas.width, canvas.height]).toEqual([200, 100]);
    expect(drawImage).toHaveBeenCalledWith(expect.anything(), 0, 0, 200, 100);
    expect(toBlob).toHaveBeenCalledWith(expect.any(Function), "image/png");
    getContext.mockReturnValueOnce(null);
    await expect(mtfPngBlob(image)).rejects.toThrow("Canvas unavailable");
    toBlob.mockImplementationOnce((callback) => callback(null));
    await expect(mtfPngBlob(image)).rejects.toThrow("PNG encoding unavailable");
    expect(revokeObjectURL).toHaveBeenCalledTimes(3);
  });
});

describe("MTF chart presentation", () => {
  it("identifies frequency-view fields by distinct curve and legend marker shapes", () => {
    const result = syntheticResult();
    const props = { result, view: "frequency" as const, frequencies: [10] as const, t: mockTheme };
    const { container, rerender } = render(
      <MtfChart {...props} comparison={result} diffractionLimit pixelPitchUm={5} />,
    );
    const groups = screen.getAllByTestId("mtf-frequency-markers");
    expect(groups.map((group) => group.getAttribute("data-field"))).toEqual(["Center", "50 %", "Edge"]);
    for (const [i, tag, shape] of [
      [0, "circle", "circle"],
      [1, "rect", "square"],
      [2, "path", "triangle"],
    ] as const) {
      expect(groups[i].querySelectorAll(tag)).toHaveLength(6);
      const legend = screen.getByText(new RegExp(`\\(${shape} markers\\)$`));
      expect(legend.parentElement!.querySelector(`svg ${tag}`)).toBeTruthy();
    }
    // Markers add no end labels beside the Nyquist label and preserve the axis/reference strokes.
    const drawnPaths = (selector: string) =>
      [...container.querySelectorAll(selector)].filter((path) => path.getAttribute("d"));
    expect(drawnPaths('path[stroke-width="2"][stroke-dasharray="5,3"]')).toHaveLength(3);
    expect(drawnPaths('path[stroke-width="1.1"]')).toHaveLength(6);
    expect(drawnPaths('path[stroke-width="0.9"][stroke-dasharray="1,3"]')).toHaveLength(6);
    expect(drawnPaths('path[stroke-width="0.9"][stroke-dasharray="5,3,1,3"]')).toHaveLength(6);
    expect(screen.getByTestId("mtf-nyquist").textContent).toBe("Nyquist, 5 µm pixels: 100 lp/mm");

    rerender(<MtfChart {...props} frequencyField={0.25} />);
    expect(screen.getAllByTestId("mtf-frequency-markers")).toHaveLength(1);
    expect(screen.getByTestId("mtf-frequency-markers").getAttribute("data-field")).toBe("25 %");
    expect(screen.getByText("25 % · 5.0 mm (circle markers)")).toBeTruthy();
  });

  it("uses lighter dotted bridges only across pending fields for every curve pair", () => {
    const result = syntheticResult();
    const pending: MtfResult = {
      ...result,
      fields: result.fields.map((field, i) => (i === 1 || i === 2 ? { ...field, status: "pending" } : field)),
    };
    const props = { view: "field" as const, frequencies: [10] as const, t: mockTheme, diffractionLimit: true };
    const { container, rerender } = render(<MtfChart {...props} result={pending} comparison={pending} />);
    const bridges = screen.getAllByTestId("mtf-provisional");
    expect(bridges).toHaveLength(4);
    for (const bridge of bridges) {
      expect(Number(bridge.getAttribute("opacity"))).toBeLessThan(1);
      expect(bridge.querySelectorAll("path")).toHaveLength(2);
      for (const path of bridge.querySelectorAll("path")) {
        expect(path.getAttribute("stroke-dasharray")).toBe("1,3");
        expect(path.getAttribute("d")).toMatch(/^M40\.0,[\d.]+ L272\.5,[\d.]+$/);
      }
    }
    const solid = container.querySelector('path[stroke-width="2"]:not([stroke-dasharray])')!;
    expect(solid.getAttribute("d")).toBe("M40.0,35.3 M272.5,64.3 L350.0,73.9");
    expect(screen.getByText("Lighter dotted spans bridge fields still calculating.")).toBeTruthy();

    // Overlay-only progress also needs the disclosure after the main aperture finishes.
    rerender(<MtfChart {...props} result={result} comparison={pending} />);
    expect(screen.getAllByTestId("mtf-provisional")).toHaveLength(2);
    expect(screen.getByText("Lighter dotted spans bridge fields still calculating.")).toBeTruthy();
    rerender(<MtfChart {...props} result={result} comparison={result} />);
    expect(screen.queryByTestId("mtf-provisional")).toBeNull();
    expect(screen.queryByText("Lighter dotted spans bridge fields still calculating.")).toBeNull();
  });

  it.each(["unavailable", "unconverged"] as const)("keeps %s gaps even beside pending fields", (status) => {
    const result = syntheticResult();
    result.fields[1].status = "pending";
    result.fields[2].status = status;
    result.fields[3].status = "pending";
    const { container } = render(
      <MtfChart result={result} comparison={result} view="field" frequencies={[10]} t={mockTheme} diffractionLimit />,
    );
    expect(screen.queryByTestId("mtf-provisional")).toBeNull();
    for (const path of container.querySelectorAll('svg path[fill="none"]')) {
      expect(path.getAttribute("d")).not.toContain("L");
    }
  });

  it("keeps pending-field and exact-value readouts available to the keyboard", () => {
    const result = syntheticResult();
    result.fields[1].status = "pending";
    const { container } = render(<MtfChart result={result} view="field" frequencies={[10]} t={mockTheme} />);
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    const live = container.querySelector('[aria-live="polite"]')!;
    expect(chart.tabIndex).toBe(0);
    fireEvent.keyDown(chart, { key: "Home" });
    expect(live.textContent).toBe("0.00 mm — 10 lp/mm S 0.900 T 0.800");
    fireEvent.keyDown(chart, { key: "ArrowRight" });
    expect(live.textContent).toBe("5.00 mm: still calculating");
    expect(screen.getByTestId("mtf-crosshair").querySelector("line")!.getAttribute("x1")).toBe("117.5");
    fireEvent.keyDown(chart, { key: "End" });
    expect(live.textContent).toBe("20.00 mm — 10 lp/mm S 0.700 T 0.600");
    fireEvent.keyDown(chart, { key: "Escape" });
    expect(live.textContent).toBe("");
    expect(screen.queryByTestId("mtf-crosshair")).toBeNull();
  });

  it("adds active-field stability only in Advanced without disclosing withheld values", () => {
    const result = syntheticResult();
    result.fields[1].status = "unconverged";
    result.fields[1].convergedThroughLpMm = 30;
    const comparison = syntheticResult();
    comparison.fields[0].sagittal[1] = 0.95;
    const props = {
      result,
      comparison,
      comparisonLabel: "f/8",
      view: "field" as const,
      frequencies: [10] as const,
      t: mockTheme,
    };
    const { container, rerender } = render(<MtfChart {...props} />);
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    const live = container.querySelector('[aria-live="polite"]')!;
    fireEvent.keyDown(chart, { key: "Home" });
    const comparisonReadout = " · f/8 at 0.00 mm: 10 lp/mm S 0.950 T 0.800";
    expect(live.textContent).toBe(`0.00 mm — 10 lp/mm S 0.900 T 0.800${comparisonReadout}`);
    rerender(<MtfChart {...props} advanced />);
    expect(live.textContent).toBe(
      `0.00 mm (converged; stable through: 100 lp/mm) — 10 lp/mm S 0.900 T 0.800${comparisonReadout}`,
    );
    fireEvent.keyDown(chart, { key: "ArrowRight" });
    expect(live.textContent).toBe(
      "5.00 mm (unconverged; stable through: 30 lp/mm) — 10 lp/mm — · f/8 at 5.00 mm: 10 lp/mm S 0.850 T 0.750",
    );
    rerender(<MtfChart {...props} advanced={false} />);
    expect(live.textContent).toBe("5.00 mm (unconverged) — 10 lp/mm — · f/8 at 5.00 mm: 10 lp/mm S 0.850 T 0.750");
  });

  it.each(["pending", "unavailable"] as const)("includes absent stability for an Advanced %s field", (status) => {
    const result = syntheticResult();
    result.fields[0] = {
      ...result.fields[0],
      status,
      convergedThroughLpMm: null,
      message: "No usable rays",
    };
    const { container } = render(<MtfChart result={result} view="field" frequencies={[10]} t={mockTheme} advanced />);
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "Home" });
    expect(container.querySelector('[aria-live="polite"]')!.textContent).toBe(
      `0.00 mm (${status}; stable through: Not established): ${status === "pending" ? "still calculating" : "No usable rays"}`,
    );
  });

  it("uses each frequency-view field's status rather than the crosshair's frequency index", () => {
    const result = syntheticResult();
    result.fields[2].status = "unconverged";
    result.fields[2].convergedThroughLpMm = 30;
    const { container } = render(
      <MtfChart result={result} view="frequency" frequencies={[10]} t={mockTheme} advanced diagnostic />,
    );
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    fireEvent.keyDown(chart, { key: "End" });
    expect(container.querySelector('[aria-live="polite"]')!.textContent).toBe(
      "100 lp/mm — diagnostic estimates — Center · 0.0 mm (converged; stable through: 100 lp/mm) S 0.100 T 0.050 · 50 % · 10.0 mm (unconverged; stable through: 30 lp/mm) S 0.100 T 0.050 · Edge · 20.0 mm (converged; stable through: 100 lp/mm) S 0.100 T 0.050",
    );
  });

  it("mirrors pointer-selected field stability in the polite readout", () => {
    const result = syntheticResult();
    result.fields[1].status = "unconverged";
    result.fields[1].convergedThroughLpMm = 30;
    const { container } = render(<MtfChart result={result} view="field" frequencies={[10]} t={mockTheme} advanced />);
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    const svg = chart.querySelector("svg")!;
    vi.spyOn(svg, "getBoundingClientRect").mockReturnValue({ left: 0, width: 380 } as DOMRect);
    // MouseEvent supplies coordinates in environments without a native PointerEvent constructor.
    fireEvent(chart, new MouseEvent("pointermove", { bubbles: true, clientX: 40 }));
    const live = container.querySelector('[aria-live="polite"]')!;
    expect(live.textContent).toBe("0.00 mm (converged; stable through: 100 lp/mm) — 10 lp/mm S 0.900 T 0.800");
    fireEvent(chart, new MouseEvent("pointermove", { bubbles: true, clientX: 118 }));
    expect(live.textContent).toBe("5.00 mm (unconverged; stable through: 30 lp/mm) — 10 lp/mm —");
  });

  it("preserves completed image-height path data, including comparison and pupil limits", () => {
    const result = syntheticResult();
    const { container } = render(
      <MtfChart result={result} comparison={result} view="field" frequencies={[10]} t={mockTheme} diffractionLimit />,
    );
    // Fixed SVG coordinates also guard comparison widths and pupil-limit dash patterns.
    expect(
      [...container.querySelectorAll('svg path[fill="none"]')].map((path) => ({
        d: path.getAttribute("d"),
        width: path.getAttribute("stroke-width"),
        dash: path.getAttribute("stroke-dasharray"),
      })),
    ).toMatchInlineSnapshot(`
      [
        {
          "d": "M40.0,25.7 L117.5,25.7 L195.0,25.7 L272.5,25.7 L350.0,25.7",
          "dash": "1,3",
          "width": "0.9",
        },
        {
          "d": "M40.0,27.6 L117.5,27.6 L195.0,27.6 L272.5,27.6 L350.0,27.6",
          "dash": "5,3,1,3",
          "width": "0.9",
        },
        {
          "d": "",
          "dash": "1,3",
          "width": "0.9",
        },
        {
          "d": "",
          "dash": "5,3,1,3",
          "width": "0.9",
        },
        {
          "d": "M40.0,25.7 L117.5,25.7 L195.0,25.7 L272.5,25.7 L350.0,25.7",
          "dash": "1,3",
          "width": "0.9",
        },
        {
          "d": "M40.0,27.6 L117.5,27.6 L195.0,27.6 L272.5,27.6 L350.0,27.6",
          "dash": "5,3,1,3",
          "width": "0.9",
        },
        {
          "d": "",
          "dash": "1,3",
          "width": "0.9",
        },
        {
          "d": "",
          "dash": "5,3,1,3",
          "width": "0.9",
        },
        {
          "d": "M40.0,35.3 L117.5,45.0 L195.0,54.6 L272.5,64.3 L350.0,73.9",
          "dash": null,
          "width": "1.1",
        },
        {
          "d": "M40.0,54.6 L117.5,64.3 L195.0,73.9 L272.5,83.5 L350.0,93.2",
          "dash": "5,3",
          "width": "1.1",
        },
        {
          "d": "M40.0,35.3 L117.5,45.0 L195.0,54.6 L272.5,64.3 L350.0,73.9",
          "dash": null,
          "width": "2",
        },
        {
          "d": "M40.0,54.6 L117.5,64.3 L195.0,73.9 L272.5,83.5 L350.0,93.2",
          "dash": "5,3",
          "width": "2",
        },
      ]
    `);
  });
});
