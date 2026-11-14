/** Field status counts with a collapsible per-field table that copies as CSV. */
import { useState } from "react";
import type { MtfResult } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import type { MtfChartFrequency, MtfPixelPitch } from "../../../../utils/state/mtfPreferences.js";
import { mtfCsv } from "./mtfCsv.js";
import MtfValueTable from "./MtfValueTable.js";

interface MtfFieldSummaryProps {
  result: MtfResult;
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  diagnostic?: boolean;
  stale?: boolean;
  comparison?: MtfResult | null;
  comparisonLabel?: string;
  mainLabel?: string;
  diffractionLimit?: boolean;
  pixelPitchUm?: MtfPixelPitch | null;
  advanced?: boolean;
}

export default function MtfFieldSummary({
  result,
  frequencies,
  t,
  diagnostic = false,
  stale = false,
  comparison = null,
  comparisonLabel = "f/8",
  mainLabel = "Main aperture",
  diffractionLimit = false,
  pixelPitchUm = null,
  advanced = false,
}: MtfFieldSummaryProps) {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const copy = async () => {
    if (stale) return;
    try {
      await navigator.clipboard.writeText(mtfCsv(result, frequencies, diagnostic, comparison, diffractionLimit));
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
      {stale ? <p>Previous settings: values are updating. CSV export is disabled.</p> : null}
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
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
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
        <span aria-live="polite">{copyStatus}</span>
      </div>
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
