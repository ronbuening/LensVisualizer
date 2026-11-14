/** Self-contained SVG captions wrap the rendered chart without rebuilding its series. */
import type { Theme } from "../../../../types/theme.js";
import { mtfCaptionLines, mtfContextBlock, type MtfExportContext } from "./mtfExportContext.js";

export interface MtfChartSnapshot {
  content: string;
  width: number;
  height: number;
  legend: ReadonlyArray<{ text: string; icon?: string }>;
}

export interface MtfSvgExport {
  svg: string;
  width: number;
  height: number;
}

function xmlSafeText(text: string): string {
  // XML 1.0 excludes unpaired surrogates, most controls and U+FFFE/U+FFFF.
  return Array.from(text, (character) => {
    const point = character.codePointAt(0)!;
    return point === 0x9 ||
      point === 0xa ||
      point === 0xd ||
      (point >= 0x20 && point <= 0xd7ff) ||
      (point >= 0xe000 && point <= 0xfffd) ||
      point >= 0x10000
      ? character
      : "�";
  }).join("");
}

function xml(text: string): string {
  return xmlSafeText(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fallbackGraphemes(text: string): string[] {
  const clusters: string[] = [];
  let joinNext = false;
  let regionalIndicators = 0;
  for (const point of Array.from(text)) {
    const regional = /\p{Regional_Indicator}/u.test(point);
    // Marks include both BMP and supplementary variation selectors.
    if (
      clusters.length > 0 &&
      (joinNext || /\p{M}|\p{Emoji_Modifier}|\u200d/u.test(point) || (regional && regionalIndicators % 2 === 1))
    ) {
      clusters[clusters.length - 1] += point;
    } else {
      clusters.push(point);
    }
    joinNext = point === "\u200d";
    regionalIndicators = regional ? regionalIndicators + 1 : 0;
  }
  return clusters;
}

function graphemes(text: string): string[] {
  const safe = xmlSafeText(text);
  return typeof Intl.Segmenter === "function"
    ? Array.from(new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(safe), ({ segment }) => segment)
    : fallbackGraphemes(safe);
}

function graphemeWidth(grapheme: string): number {
  // Approximate monospace columns: East Asian wide glyphs and emoji occupy two.
  // A joined emoji or accented letter occupies the width of one grapheme.
  const point = grapheme.codePointAt(0)!;
  return /\p{Extended_Pictographic}|\p{Regional_Indicator}|\u20e3/u.test(grapheme) ||
    (point >= 0x1100 && point <= 0x115f) ||
    (point >= 0x2329 && point <= 0x232a) ||
    (point >= 0x2e80 && point <= 0xa4cf) ||
    (point >= 0xac00 && point <= 0xd7a3) ||
    (point >= 0xf900 && point <= 0xfaff) ||
    (point >= 0xfe10 && point <= 0xfe6f) ||
    (point >= 0xff01 && point <= 0xff60) ||
    (point >= 0xffe0 && point <= 0xffe6) ||
    (point >= 0x20000 && point <= 0x3fffd)
    ? 2
    : 1;
}

function textWidth(segments: string[]): number {
  return segments.reduce((width, segment) => width + graphemeWidth(segment), 0);
}

function prefixEnd(segments: string[], width: number, start = 0): number {
  let end = start;
  let used = 0;
  while (end < segments.length && used + graphemeWidth(segments[end]) <= width) {
    used += graphemeWidth(segments[end]);
    end++;
  }
  return end;
}

function truncate(text: string, width: number): string {
  const segments = graphemes(text);
  return prefixEnd(segments, width) === segments.length
    ? segments.join("")
    : `${segments.slice(0, prefixEnd(segments, width - 1)).join("")}…`;
}

function wrap(text: string, width: number): string[] {
  const segments = graphemes(xmlSafeText(text).replace(/\s+/g, " "));
  const lines: string[] = [];
  let start = 0;
  let end = prefixEnd(segments, width, start);
  while (end < segments.length) {
    const space = segments.lastIndexOf(" ", end);
    if (space > start && textWidth(segments.slice(start, space)) > width / 2) end = space;
    lines.push(segments.slice(start, end).join(""));
    start = end;
    while (segments[start] === " ") start++;
    end = prefixEnd(segments, width, start);
  }
  return [...lines, segments.slice(start).join("")];
}

/**
 * Add an explicit theme, font, legend and reproducibility caption to serialized chart contents.
 * @param chart - trusted SVG inner markup and legend from the rendered MTF figure
 * @param context - same metadata carried by CSV downloads
 * @param theme - resolved active theme tokens, without page CSS dependencies
 * @returns standalone SVG text and logical dimensions for rasterization
 */
export function buildMtfSvg(chart: MtfChartSnapshot, context: MtfExportContext, theme: Theme): MtfSvgExport {
  const width = 1000;
  const chartHeight = Math.round((chart.height / chart.width) * (width - 32));
  let y = chartHeight + 38;
  const legend = chart.legend
    .map(({ text, icon }) => {
      const lines = wrap(text, 127);
      const markup = `${icon ? `<svg x="16" y="${y - 9}" width="20" height="10" viewBox="0 0 20 10">${icon}</svg>` : ""}${lines.map((line, i) => `<text x="${icon ? 44 : 16}" y="${y + i * 16}">${xml(line)}</text>`).join("")}`;
      y += lines.length * 16;
      return markup;
    })
    .join("");
  y += 16;
  // At 12 px, 128 Latin monospace columns fit inside the chart's 16 px margins.
  const captionContext = {
    ...context,
    shared_link: truncate(context.shared_link, 128 - textWidth(graphemes(context.generation_date)) - 3),
  };
  // The image owns display-width truncation; keep the logical caption's code-unit cap disabled.
  const caption = mtfCaptionLines(captionContext, Infinity)
    .flatMap((line) => wrap(line, 128))
    .map((line) => {
      const markup = `<text x="16" y="${y}">${xml(line)}</text>`;
      y += 17;
      return markup;
    })
    .join("");
  const height = y + 16;
  return {
    width,
    height,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="'JetBrains Mono','SF Mono','Fira Code',monospace" font-size="12" fill="${xml(theme.value)}" color="${xml(theme.value)}"><title>Simulated MTF — ${xml(context.lens_name ?? "")}</title><desc>${xml(mtfContextBlock(context))}</desc><rect width="100%" height="100%" fill="${xml(theme.panelBg)}"/><svg x="16" y="16" width="${width - 32}" height="${chartHeight}" viewBox="0 0 ${chart.width} ${chart.height}">${chart.content}</svg><g fill="${xml(theme.muted)}">${legend}</g><g aria-label="MTF export caption">${caption}</g></svg>`,
  };
}
