/** Browser-only adapters capture an MTF figure and download local Blobs; no network is used. */
import type { MtfChartSnapshot, MtfSvgExport } from "./mtfExportImage.js";

/**
 * Snapshot inline chart markup and its legend, including every currently shown reference.
 * @param figure - mounted MTF chart figure
 * @returns chart markup in its native viewBox coordinates
 */
export function snapshotMtfChart(figure: HTMLElement): MtfChartSnapshot {
  const svg = figure.querySelector("svg");
  if (!svg) throw new Error("Chart unavailable");
  const [, , width, height] = (svg.getAttribute("viewBox") ?? "").split(/\s+/).map(Number);
  if (!(width > 0 && height > 0)) throw new Error("Chart unavailable");
  return {
    content: svg.innerHTML,
    width,
    height,
    legend: [...(figure.querySelector("figcaption")?.children ?? [])].map((item) => ({
      text: item.textContent ?? "",
      icon: item.querySelector("svg")?.innerHTML,
    })),
  };
}

/**
 * Download a local Blob through a temporary anchor, retaining its URL through browser dispatch.
 * @param blob - CSV, SVG or PNG contents
 * @param filename - suggested descriptive download name
 * @returns nothing
 */
export function downloadMtfBlob(blob: Blob, filename: string): void {
  const objectUrls = URL;
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  try {
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
  } finally {
    anchor.remove();
    // Downloads may consume their object URL after the click handler returns.
    setTimeout(() => objectUrls.revokeObjectURL(url), 1000);
  }
}

/**
 * Rasterize the same standalone SVG at twice its logical resolution.
 * @param image - SVG text and logical dimensions
 * @returns PNG Blob, rejecting unsupported image/canvas/encoding paths for the UI to disclose
 */
export async function mtfPngBlob(image: MtfSvgExport): Promise<Blob> {
  const url = URL.createObjectURL(new Blob([image.svg], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const bitmap = new Image();
    await new Promise<void>((resolve, reject) => {
      bitmap.onload = () => resolve();
      bitmap.onerror = () => reject(new Error("SVG could not be loaded"));
      bitmap.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = image.width * 2;
    canvas.height = image.height * 2;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas unavailable");
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("PNG encoding unavailable"))), "image/png");
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}
