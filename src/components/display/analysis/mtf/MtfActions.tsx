/** Clipboard and download actions stay available independently of chart results. */
import { useEffect, useId, useRef, useState, type KeyboardEvent, type RefObject } from "react";
import type { MtfSweepSample, MtfResult } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import type { MtfChartFrequency, MtfChartView, MtfFrequencyField } from "../../../../utils/state/mtfPreferences.js";
import { mtfCsv } from "./mtfCsv.js";
import type { MtfExportContext } from "./mtfExportContext.js";
import { mtfSweepCsv, mtfAllSamplesCsv, mtfViewCsv } from "./mtfExportCsv.js";
import { buildMtfSvg } from "./mtfExportImage.js";
import { downloadMtfBlob, mtfPngBlob, snapshotMtfChart } from "./mtfDownload.js";

interface MtfActionsProps {
  result: MtfResult | null;
  sweepSamples?: readonly MtfSweepSample[];
  sweepFields?: readonly number[];
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  diagnostic?: boolean;
  stale?: boolean;
  /** A blocking warning or unavailable chart prevents data copying and downloads. */
  disabledReason?: string;
  comparison?: MtfResult | null;
  comparisonFNumber?: number;
  diffractionLimit?: boolean;
  getMtfLink?: () => string;
  getExportContext?: () => MtfExportContext;
  chartRef?: RefObject<HTMLElement | null>;
  view?: MtfChartView;
  frequencyField?: MtfFrequencyField;
  /** Chart overlays may still be pending while the clipboard table omits their empty arrays. */
  exportComparison?: MtfResult | null;
}

export default function MtfActions({
  result,
  sweepSamples = [],
  sweepFields = [],
  frequencies,
  t,
  diagnostic = false,
  stale = false,
  disabledReason,
  comparison = null,
  comparisonFNumber = 8,
  diffractionLimit = false,
  getMtfLink,
  getExportContext,
  chartRef,
  view = "field",
  frequencyField = "overview",
  exportComparison = comparison,
}: MtfActionsProps) {
  const dataDisabledReason =
    disabledReason ||
    (stale ? "Values are updating for the current settings." : !result ? "No current MTF result." : undefined);
  const isSweep = view === "aperture" || view === "zoom";
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [exportOpen, setExportOpen] = useState(false);
  const [exportBusy, setExportBusy] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const menuOpen = exportOpen && !dataDisabledReason && !!getExportContext;
  const menuId = useId();
  const exportButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const openAtEnd = useRef(false);
  useEffect(() => {
    if (!exportOpen) return;
    const items = menu.current?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)");
    items?.[openAtEnd.current ? items.length - 1 : 0]?.focus();
  }, [exportOpen]);
  const menuKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab") {
      setExportOpen(false);
      exportButton.current?.focus();
      return;
    }
    if (event.key === "Escape") {
      setExportOpen(false);
      exportButton.current?.focus();
      event.preventDefault();
      return;
    }
    const items = [...(menu.current?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)") ?? [])];
    const current = items.indexOf(document.activeElement as HTMLButtonElement);
    const index =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? items.length - 1
          : event.key === "ArrowDown"
            ? (current + 1) % items.length
            : event.key === "ArrowUp"
              ? (current - 1 + items.length) % items.length
              : null;
    if (index !== null) {
      event.preventDefault();
      items[index]?.focus();
    }
  };
  const exportChart = async (kind: "view" | "all" | "svg" | "png") => {
    if (dataDisabledReason || !result || exportBusy || !getExportContext) return;
    setExportOpen(false);
    exportButton.current?.focus();
    setExportError(null);
    setExportBusy(true);
    try {
      const context = getExportContext();
      const options = {
        result,
        context,
        view,
        frequencies,
        frequencyField,
        diagnostic,
        comparison: exportComparison,
        comparisonFNumber,
        diffractionLimit,
        sweepSamples,
        sweepFields,
      };
      const stem = `${context.lens_key.replace(/[^a-zA-Z0-9_-]/g, "-")}-${view === "field" ? "image-height" : view}-${context.generation_date}`;
      if (kind === "view" || kind === "all") {
        const csv = kind === "view" ? mtfViewCsv(options) : mtfAllSamplesCsv(options);
        downloadMtfBlob(
          new Blob([csv], { type: "text/csv;charset=utf-8" }),
          `${stem}-${kind === "all" ? "all-sampled-values" : "this-view"}.csv`,
        );
      } else {
        if (!chartRef?.current) throw new Error("Chart unavailable");
        const image = buildMtfSvg(snapshotMtfChart(chartRef.current), context, t);
        const blob =
          kind === "png" ? await mtfPngBlob(image) : new Blob([image.svg], { type: "image/svg+xml;charset=utf-8" });
        downloadMtfBlob(blob, `${stem}.${kind}`);
      }
    } catch {
      setExportError(
        kind === "png" ? "PNG export unavailable in this browser. Try SVG." : "Export unavailable in this browser.",
      );
    } finally {
      setExportBusy(false);
    }
  };
  const copy = async () => {
    if (dataDisabledReason || !result) return;
    try {
      await navigator.clipboard.writeText(
        isSweep
          ? mtfSweepCsv({ sweepSamples, sweepFields, frequencies, diagnostic, diffractionLimit })
          : mtfCsv(result, frequencies, diagnostic, comparison, diffractionLimit, comparisonFNumber),
      );
      setCopyStatus("Copied");
    } catch {
      setCopyStatus("Copy unavailable in this browser");
    }
  };
  const copyLink = async () => {
    if (!getMtfLink) return;
    try {
      await navigator.clipboard.writeText(getMtfLink());
      setCopyStatus("Copied");
    } catch {
      setCopyStatus("Copy unavailable in this browser");
    }
  };
  return (
    <div style={{ color: t.muted, fontSize: 11, minWidth: 0 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginTop: 6 }}>
        <button
          type="button"
          disabled={!!dataDisabledReason}
          title={dataDisabledReason}
          onClick={() => void copy()}
          style={{
            background: "none",
            border: `1px solid ${t.panelBorder}`,
            borderRadius: 4,
            color: t.value,
            cursor: "pointer",
            font: "inherit",
            padding: "2px 8px",
          }}
        >
          Copy CSV
        </button>
        {getMtfLink ? (
          <button
            type="button"
            onClick={() => void copyLink()}
            style={{
              background: "none",
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 4,
              color: t.value,
              cursor: "pointer",
              font: "inherit",
              padding: "2px 8px",
            }}
          >
            Copy MTF link
          </button>
        ) : null}
        <div
          style={{ position: "relative" }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setExportOpen(false);
          }}
        >
          <button
            ref={exportButton}
            type="button"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            disabled={!!dataDisabledReason || !getExportContext || exportBusy}
            title={dataDisabledReason}
            onClick={() => {
              openAtEnd.current = false;
              setExportOpen(!exportOpen);
            }}
            onKeyDown={(event) => {
              if (dataDisabledReason || !getExportContext || exportBusy) return;
              if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
              event.preventDefault();
              openAtEnd.current = event.key === "ArrowUp";
              setExportOpen(true);
            }}
            style={{
              background: "none",
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 4,
              color: t.value,
              cursor: "pointer",
              font: "inherit",
              padding: "2px 8px",
            }}
          >
            {exportBusy ? "Exporting…" : "Export"}
          </button>
          <div
            ref={menu}
            id={menuId}
            hidden={!menuOpen}
            role="menu"
            aria-label="MTF exports"
            onKeyDown={menuKeys}
            style={{
              position: "absolute",
              bottom: "100%",
              right: 0,
              zIndex: 2,
              padding: 4,
              minWidth: 210,
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 4,
              background: t.panelBg,
            }}
          >
            {(
              [
                ["view", "CSV — this view"],
                ["all", "CSV — all sampled values"],
                ["svg", "SVG"],
                ["png", "PNG"],
              ] as const
            ).map(([kind, label]) => (
              <button
                key={kind}
                type="button"
                role="menuitem"
                tabIndex={-1}
                disabled={
                  !!dataDisabledReason || !getExportContext || ((kind === "svg" || kind === "png") && !chartRef)
                }
                title={dataDisabledReason}
                onClick={() => void exportChart(kind)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  borderRadius: 3,
                  color: t.value,
                  cursor: "pointer",
                  font: "inherit",
                  padding: "6px 8px",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <span aria-live="polite">{copyStatus}</span>
      </div>
      {exportError ? <p role="alert">{exportError}</p> : null}
      {stale ? <p>Previous settings: values are updating. CSV export is disabled. Downloads are disabled.</p> : null}
    </div>
  );
}
