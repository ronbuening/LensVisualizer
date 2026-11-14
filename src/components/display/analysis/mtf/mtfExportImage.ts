/** Self-contained SVG captions wrap the rendered chart without rebuilding its series. */
import type { Theme } from "../../../../types/theme.js";
import { mtfContextBlock, type MtfExportContext } from "./mtfExportContext.js";

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

function xml(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function wrap(text: string, length: number): string[] {
  const lines: string[] = [];
  let rest = text.replace(/\s+/g, " ");
  while (rest.length > length) {
    const space = rest.lastIndexOf(" ", length);
    const end = space > length / 2 ? space : length;
    lines.push(rest.slice(0, end));
    rest = rest.slice(end).trimStart();
  }
  return [...lines, rest];
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
  const caption = wrap(
    Object.entries(context)
      .map(([key, value]) => `${key.replaceAll("_", " ")}: ${value}`)
      .join(" · "),
    134,
  )
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
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="'JetBrains Mono','SF Mono','Fira Code',monospace" font-size="12" fill="${xml(theme.value)}" color="${xml(theme.value)}"><title>Simulated MTF — ${xml(context.lens_name ?? "")}</title><desc>${xml(mtfContextBlock(context))}</desc><rect width="100%" height="100%" fill="${xml(theme.panelBg)}"/><svg x="16" y="16" width="${width - 32}" height="${chartHeight}" viewBox="0 0 ${chart.width} ${chart.height}">${chart.content}</svg><g fill="${xml(theme.muted)}">${legend}</g><g>${caption}</g></svg>`,
  };
}
