/**
 * Deterministic SVG string serializer.
 *
 * Serializes a `MountSvgDoc` into a complete, self-contained `<svg>` for committed static artifacts.
 * The same doc also drives the React component, so the on-page and on-disk figures match. Output is
 * byte-stable: a fixed categorical palette (color = feature category), a fixed attribute order per
 * element kind, all coordinates already rounded by the geometry core, and a feature legend baked into
 * the empty top-left corner. Provenance is a separate axis encoded by the stroke dash (status). The
 * document carries the accessibility/metadata required by package Section 9.3: `<title>`, `<desc>`,
 * `role="img"`, `aria-labelledby`, and a `<metadata>` block mirroring the JSON metadata.
 */

import { categoryColor } from "./category.js";
import { fmt } from "./round.js";
import { strokeForStatus } from "./style.js";
import type { MountSvgDoc, MountSvgElement } from "./svgDoc.js";

function escapeXml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

interface ViewBoxNumbers {
  minX: number;
  minY: number;
  width: number;
  height: number;
}

function parseViewBox(viewBox: string): ViewBoxNumbers {
  if (viewBox === "unknown") return { minX: 0, minY: 0, width: 100, height: 100 };
  const [minX, minY, width, height] = viewBox.split(" ").map(Number);
  return { minX, minY, width, height };
}

/** Stroke attributes: color from the feature category, dash/weight from the value status. */
function strokeAttrs(el: MountSvgElement, baseWidth: number): string {
  const style = strokeForStatus(el.status);
  const width = fmt(baseWidth * style.weight);
  const dash = style.dashArray ? ` stroke-dasharray="${style.dashArray}"` : "";
  return ` stroke="${categoryColor(el.category)}" stroke-width="${width}" fill="none"${dash}`;
}

function fillAttrs(el: MountSvgElement, evenOdd: boolean): string {
  const rule = evenOdd ? ` fill-rule="evenodd"` : "";
  return ` fill="${categoryColor(el.category)}" fill-opacity="0.12"${rule}`;
}

function serializeElement(el: MountSvgElement, baseWidth: number): string {
  const stroke = strokeAttrs(el, baseWidth);
  if (el.kind === "path") {
    // When filled, lay a faint fill path underneath the stroked outline.
    const fillPath = el.fill ? `<path d="${el.attrs.d}"${fillAttrs(el, Boolean(el.fillEvenOdd))} />` : "";
    return `${fillPath}<path d="${el.attrs.d}"${stroke} />`;
  }
  if (el.kind === "circle") {
    const c = `cx="${fmt(Number(el.attrs.cx))}" cy="${fmt(Number(el.attrs.cy))}" r="${fmt(Number(el.attrs.r))}"`;
    const fill = el.fill ? `<circle ${c}${fillAttrs(el, false)} />` : "";
    return `${fill}<circle ${c}${stroke} />`;
  }
  if (el.kind === "line") {
    const l = `x1="${fmt(Number(el.attrs.x1))}" y1="${fmt(Number(el.attrs.y1))}" x2="${fmt(
      Number(el.attrs.x2),
    )}" y2="${fmt(Number(el.attrs.y2))}"`;
    return `<line ${l}${stroke} />`;
  }
  // text
  const x = fmt(Number(el.attrs.x));
  const y = fmt(Number(el.attrs.y));
  const fontSize = fmt(Number(el.attrs["font-size"]));
  const anchor = String(el.attrs["text-anchor"] ?? "start");
  return `<text x="${x}" y="${y}" font-size="${fontSize}" text-anchor="${anchor}" fill="${categoryColor(
    el.category,
  )}" font-family="sans-serif">${escapeXml(el.text ?? "")}</text>`;
}

/** Render the feature legend into the top-left corner of the viewBox (empty for circular figures). */
function serializeLegend(doc: MountSvgDoc, vb: ViewBoxNumbers): string {
  if (doc.legend.length === 0 || doc.viewBox === "unknown") return "";
  const fontSize = Math.max(2, vb.height * 0.032);
  const lineH = fontSize * 1.5;
  const swatchW = Math.max(4, vb.width * 0.06);
  const x = vb.minX + vb.width * 0.02;
  let y = vb.minY + vb.height * 0.05;
  const parts: string[] = [`<g aria-hidden="true">`];
  for (const entry of doc.legend) {
    parts.push(
      `<line x1="${fmt(x)}" y1="${fmt(y)}" x2="${fmt(x + swatchW)}" y2="${fmt(y)}" stroke="${entry.color}" stroke-width="${fmt(
        Math.max(0.4, vb.height * 0.007),
      )}" />`,
    );
    parts.push(
      `<text x="${fmt(x + swatchW + fontSize * 0.5)}" y="${fmt(y + fontSize * 0.35)}" font-size="${fmt(
        fontSize,
      )}" fill="${entry.color}" font-family="sans-serif">${escapeXml(entry.label)}</text>`,
    );
    y += lineH;
  }
  parts.push(`</g>`);
  return parts.join("");
}

/** Serialize the `<metadata>` block mirroring the JSON metadata (package Section 9.3). */
function serializeMetadata(doc: MountSvgDoc): string {
  const meta = {
    mountId: doc.mountId,
    profileId: doc.profileId,
    view: doc.view,
    schemaVersion: doc.schemaVersion,
  };
  // In XML text content only `&` and `<` must be escaped; leaving quotes intact keeps the embedded
  // JSON machine-readable.
  const json = JSON.stringify(meta).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<metadata>${json}</metadata>`;
}

/**
 * Serialize a mount SVG document to a complete, deterministic `<svg>` string.
 *
 * @param doc — fully-resolved render document
 * @returns standalone SVG markup
 */
export function mountSvgDocToString(doc: MountSvgDoc): string {
  const vb = parseViewBox(doc.viewBox);
  const baseWidth = Math.max(0.25, Math.min(vb.width, vb.height) * 0.006);
  const viewBoxAttr = doc.viewBox === "unknown" ? "0 0 100 100" : doc.viewBox;

  const body: string[] = [];
  for (const layer of doc.layers) {
    body.push(`<g data-layer="${layer.name}">`);
    for (const el of layer.elements) body.push(serializeElement(el, baseWidth));
    body.push(`</g>`);
  }

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBoxAttr}" role="img" ` +
    `aria-labelledby="${doc.titleId} ${doc.descId}">` +
    `<title id="${doc.titleId}">${escapeXml(doc.title)}</title>` +
    `<desc id="${doc.descId}">${escapeXml(doc.desc)}</desc>` +
    serializeMetadata(doc) +
    body.join("") +
    serializeLegend(doc, vb) +
    `</svg>`
  );
}
