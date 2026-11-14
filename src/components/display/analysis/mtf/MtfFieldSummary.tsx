/** Field status counts, the legacy clipboard table and contextual chart downloads. */
import { useEffect, useId, useRef, useState, type KeyboardEvent, type RefObject } from "react";
import type { MtfResult } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import type {
  MtfChartFrequency,
  MtfChartView,
  MtfFrequencyField,
  MtfPixelPitch,
} from "../../../../utils/state/mtfPreferences.js";
import { mtfCsv } from "./mtfCsv.js";
import type { MtfExportContext } from "./mtfExportContext.js";
import { mtfAllSamplesCsv, mtfViewCsv } from "./mtfExportCsv.js";
import { buildMtfSvg } from "./mtfExportImage.js";
import { downloadMtfBlob, mtfPngBlob, snapshotMtfChart } from "./mtfDownload.js";
import MtfValueTable from "./MtfValueTable.js";

interface MtfFieldSummaryProps {
  result: MtfResult;
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  diagnostic?: boolean;
  stale?: boolean;
  comparison?: MtfResult | null;
  comparisonLabel?: string;
  comparisonFNumber?: number;
  mainLabel?: string;
  diffractionLimit?: boolean;
  pixelPitchUm?: MtfPixelPitch | null;
  advanced?: boolean;
  getMtfLink?: () => string;
  getExportContext?: () => MtfExportContext;
  chartRef?: RefObject<HTMLElement | null>;
  view?: MtfChartView;
  frequencyField?: MtfFrequencyField;
  /** Chart overlays may still be pending while the legacy table omits their empty arrays. */
  exportComparison?: MtfResult | null;
}

export default function MtfFieldSummary({
  result,
  frequencies,
  t,
  diagnostic = false,
  stale = false,
  comparison = null,
  comparisonFNumber = 8,
  comparisonLabel = `f/${comparisonFNumber}`,
  mainLabel = "Main aperture",
  diffractionLimit = false,
  pixelPitchUm = null,
  advanced = false,
  getMtfLink,
  getExportContext,
  chartRef,
  view = "field",
  frequencyField = "overview",
  exportComparison = comparison,
}: MtfFieldSummaryProps) {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [exportOpen, setExportOpen] = useState(false);
  const [exportBusy, setExportBusy] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
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
    if (stale || exportBusy || !getExportContext) return;
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
      };
      const stem = `${context.lens_key.replace(/[^a-zA-Z0-9_-]/g, "-")}-${view === "field" ? "image-height" : "frequency"}-${context.generation_date}`;
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
    if (stale) return;
    try {
      await navigator.clipboard.writeText(
        mtfCsv(result, frequencies, diagnostic, comparison, diffractionLimit, comparisonFNumber),
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
  const count = (test: (field: MtfResult["fields"][number]) => boolean) => result.fields.filter(test).length;
  const parts = [
    [count((f) => f.status === "converged"), "converged"],
    [count((f) => f.status === "unconverged"), "unconverged"],
    [count((f) => f.status === "unavailable" && f.reason !== "outside-modeled-field"), "unavailable"],
    [count((f) => f.reason === "outside-modeled-field"), "outside model"],
    [count((f) => f.status === "pending"), "pending"],
  ] as const;
  const noted = result.fields.filter((f) => f.notes.length || (f.status === "unavailable" && f.reason));
  return (
    <details open={advanced || undefined} style={{ color: t.muted, fontSize: 11 }}>
      <summary style={{ cursor: "pointer" }}>
        {parts
          .filter(([n], i) => n > 0 || i < 3)
          .map(([n, label]) => `${n} ${label}`)
          .join(" · ")}
      </summary>
      {stale ? <p>Previous settings: values are updating. CSV export is disabled. Downloads are disabled.</p> : null}
      <MtfValueTable
        result={result}
        frequencies={frequencies}
        t={t}
        diagnostic={diagnostic}
        comparison={comparison}
        comparisonLabel={comparisonLabel}
        mainLabel={mainLabel}
        diffractionLimit={diffractionLimit}
        pixelPitchUm={pixelPitchUm}
        advanced={advanced}
      />
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginTop: 6 }}>
        <button
          type="button"
          disabled={stale}
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
        {getExportContext ? (
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
              aria-expanded={exportOpen}
              aria-controls={menuId}
              disabled={stale || exportBusy}
              onClick={() => {
                openAtEnd.current = false;
                setExportOpen(!exportOpen);
              }}
              onKeyDown={(event) => {
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
            {exportOpen && !stale ? (
              <div
                ref={menu}
                id={menuId}
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
                    disabled={(kind === "svg" || kind === "png") && !chartRef}
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
            ) : null}
          </div>
        ) : null}
        <span aria-live="polite">{copyStatus}</span>
      </div>
      {exportError ? <p role="alert">{exportError}</p> : null}
      {!advanced && noted.length ? (
        <ul style={{ margin: "6px 0 0", paddingLeft: 16 }}>
          {[...new Set(noted.flatMap((f) => (f.status === "unavailable" ? [f.message] : f.notes)))].map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      ) : null}
    </details>
  );
}
