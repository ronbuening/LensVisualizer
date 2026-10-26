import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { Theme } from "../../types/theme.js";
import { ALL_CATALOG_KEYS, lensNameForKey, authoredInputForKey } from "../../utils/catalog/lensCatalog.js";
import { createTemplate, copyCatalogInput, type DraftValidation } from "../../lensBuilder/draft.js";
import { exportDataTs, exportJson, importJson, draftFilename } from "../../lensBuilder/serialize.js";
import { LENS_KEY_PATTERN } from "../../optics/validation.js";
import { toggleBtn, toggleGroup, VISUALLY_HIDDEN } from "../../utils/style/styles.js";
import CommitInput, { builderCaptionStyle, builderInputStyle } from "./CommitInput.js";
import PrescriptionEditor, { sectionTitle } from "./PrescriptionEditor.js";

interface BuilderEditorProps {
  draft: LensDataV2Input;
  theme: Theme;
  validation: DraftValidation;
  pending: boolean;
  onChange: (draft: LensDataV2Input) => void;
  onReplace: (draft: LensDataV2Input) => boolean;
  onDirty: () => void;
}

const STARTING_LENSES = ALL_CATALOG_KEYS.map((key) => ({ key, name: lensNameForKey(key) }))
  .map((lens) => ({ ...lens, search: `${lens.key} ${lens.name}`.toLowerCase() }))
  .sort((a, b) => a.name.localeCompare(b.name));

function download(text: string, filename: string, type: string): void {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  // Give the browser time to start reading before releasing the object URL.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function Section({ title, theme, children }: { title: string; theme: Theme; children: ReactNode }) {
  return (
    <section aria-label={title} style={{ marginTop: 18 }}>
      <h2 style={sectionTitle(theme)}>{title}</h2>
      {children}
    </section>
  );
}

export default function BuilderEditor({
  draft,
  theme: t,
  validation,
  pending,
  onChange,
  onReplace,
  onDirty,
}: BuilderEditorProps) {
  const [search, setSearch] = useState("");
  const [advanced, setAdvanced] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [actionError, setActionError] = useState("");
  const [importFocused, setImportFocused] = useState(false);
  const matches = useMemo(() => {
    const query = search.trim().toLowerCase();
    return query ? STARTING_LENSES.filter((lens) => lens.search.includes(query)) : STARTING_LENSES;
  }, [search]);
  const run = (action: () => void) => {
    try {
      action();
      setActionError("");
    } catch (e) {
      setActionError(e instanceof Error ? e.message : String(e));
    }
  };
  const replace = (next: LensDataV2Input) => {
    if (onReplace(next)) setAdvanced(null);
  };
  const exportBlocked = !validation.ok || pending;
  const segment = (last = false): CSSProperties => ({
    ...toggleBtn(t, false, { hasRightBorder: !last, padding: "4px 9px", flex: 0 }),
    fontSize: 10,
    minHeight: 26,
  });
  const segmentLabel: CSSProperties = {
    ...builderCaptionStyle(t),
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    borderRight: `1px solid ${t.toggleBorder}`,
    background: t.panelBg,
  };
  const disabledStyle = (disabled: boolean): CSSProperties =>
    disabled ? { opacity: 0.45, cursor: "not-allowed" } : {};

  return (
    <aside
      onChangeCapture={(e) => {
        if ((e.target as HTMLElement).hasAttribute("data-draft-edit")) onDirty();
      }}
      aria-label="Lens editor"
      style={{
        background: t.panelBg,
        color: t.body,
        padding: "14px 12px 0",
        fontSize: 12,
        minHeight: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: t.title,
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: "0.04em",
          margin: 0,
          fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
        }}
      >
        Build your own lens
      </h1>
      <p style={{ margin: "4px 0 0", color: t.muted, fontSize: 11, lineHeight: 1.5 }}>
        Experimental. Drafts stay in this browser; downloads are not added to the catalog.
      </p>

      <section aria-label="Builder toolbar" style={{ display: "grid", gap: 10, marginTop: 14 }}>
        <div style={{ display: "grid", gap: 4 }}>
          <span style={builderCaptionStyle(t)} aria-hidden>
            Start from · template or {matches.length} catalog lenses
          </span>
          <div style={{ display: "flex", gap: 6, minWidth: 0 }}>
            <input
              type="search"
              aria-label="Search starting lenses"
              placeholder="Filter…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ ...builderInputStyle(t), flex: "1 1 35%", width: "auto" }}
            />
            <select
              aria-label="Start from"
              value=""
              style={{ ...builderInputStyle(t), flex: "1 1 65%", width: "auto", cursor: "pointer" }}
              onChange={(e) =>
                run(() => {
                  if (!e.target.value) return;
                  if (e.target.value === "template") replace(createTemplate());
                  else {
                    const input = authoredInputForKey(e.target.value);
                    if (input) replace(copyCatalogInput(input));
                  }
                })
              }
            >
              <option value="">
                {search.trim() ? `${matches.length} matching lenses…` : "Template or catalog lens…"}
              </option>
              <option value="template">Template — experimental triplet</option>
              {matches.map((lens) => (
                <option key={lens.key} value={lens.key}>
                  {lens.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "stretch" }}>
          <div role="group" aria-label="TypeScript export" style={toggleGroup(t)}>
            <span style={segmentLabel} aria-hidden>
              .data.ts
            </span>
            <button
              type="button"
              aria-label="Download .data.ts"
              disabled={exportBlocked}
              style={{ ...segment(), ...disabledStyle(exportBlocked) }}
              onClick={() => run(() => download(exportDataTs(draft), draftFilename(draft), "text/typescript"))}
            >
              ↓ Download
            </button>
            <button
              type="button"
              aria-label="Copy .data.ts"
              disabled={exportBlocked}
              style={{ ...segment(true), ...disabledStyle(exportBlocked) }}
              onClick={() => {
                void (async () => {
                  try {
                    await navigator.clipboard.writeText(exportDataTs(draft));
                    setMessage("Copied .data.ts");
                    setActionError("");
                  } catch (e) {
                    setActionError(`Copy failed: ${e instanceof Error ? e.message : String(e)}`);
                  }
                })();
              }}
            >
              Copy
            </button>
          </div>
          <div role="group" aria-label="JSON transport" style={toggleGroup(t)}>
            <span style={segmentLabel} aria-hidden>
              JSON
            </span>
            <button
              type="button"
              aria-label="Export JSON"
              style={segment()}
              onClick={() => run(() => download(exportJson(draft), draftFilename(draft, "json"), "application/json"))}
            >
              ↓ Export
            </button>
            <label
              style={{
                ...segment(true),
                position: "relative",
                outline: importFocused ? `2px solid ${t.sliderAccent}` : undefined,
                outlineOffset: -2,
              }}
            >
              ↑ Import
              <input
                type="file"
                accept=".json,application/json"
                aria-label="Import JSON"
                style={{ ...VISUALLY_HIDDEN, opacity: 0, left: 0, top: 0 }}
                onFocus={() => setImportFocused(true)}
                onBlur={() => setImportFocused(false)}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  e.target.value = "";
                  if (file)
                    void file
                      .text()
                      .then((text) => run(() => replace(importJson(text))))
                      .catch((error) => setActionError(String(error)));
                }}
              />
            </label>
          </div>
          <button
            type="button"
            title="Replace the draft with the template"
            style={{ ...segment(true), border: `1px solid ${t.toggleBorder}`, borderRadius: 5 }}
            onClick={() => run(() => replace(createTemplate()))}
          >
            Reset
          </button>
        </div>
      </section>

      <div
        role="status"
        aria-live="polite"
        style={{
          marginTop: 12,
          padding: "6px 8px",
          border: `1px solid ${!pending && !validation.ok ? t.error : t.panelBorder}`,
          borderRadius: 5,
          fontSize: 11,
          lineHeight: 1.45,
        }}
      >
        {pending ? (
          <p style={{ margin: 0, color: t.muted }}>Rebuilding…</p>
        ) : validation.ok ? (
          <p style={{ margin: 0 }}>
            <span aria-hidden style={{ color: t.sliderAccent }}>
              ●{" "}
            </span>
            <span>Valid prescription</span>
          </p>
        ) : (
          <>
            <p style={{ margin: 0, color: t.error }}>Showing the last valid version</p>
            <ul style={{ color: t.error, margin: "4px 0 0", paddingLeft: 16, overflowWrap: "anywhere" }}>
              {validation.issues.map((issue, i) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>
          </>
        )}
        {message && <p style={{ margin: "2px 0 0", color: t.muted }}>{message}</p>}
      </div>

      <Section title="Identity" theme={t}>
        <div style={{ display: "grid", gap: 4 }}>
          <CommitInput
            label="Key"
            labelMode="side"
            value={draft.key}
            theme={t}
            invalid={!LENS_KEY_PATTERN.test(draft.key)}
            onCommit={(key) => onChange({ ...draft, key })}
          />
          <CommitInput
            label="Name"
            labelMode="side"
            value={draft.name}
            theme={t}
            onCommit={(name) => onChange({ ...draft, name })}
          />
          <CommitInput
            label="Maker"
            labelMode="side"
            value={draft.maker ?? ""}
            theme={t}
            onCommit={(maker) => onChange({ ...draft, maker })}
          />
        </div>
      </Section>

      <div style={{ marginTop: 18 }}>
        <PrescriptionEditor
          draft={draft}
          theme={t}
          background={t.panelBg}
          onChange={onChange}
          onAction={run}
          issues={validation.ok ? [] : validation.issues}
        />
      </div>

      <Section title="Aperture and focus" theme={t}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
          <CommitInput
            label="Nominal f-number"
            value={draft.aperture.nominalFNumber ?? ""}
            theme={t}
            numeric
            optional
            onCommit={(s) => {
              if (draft.zoom?.stations.some((station) => station.nominalFNumber !== undefined))
                throw new Error("Variable-aperture zoom: edit station f-numbers in Advanced JSON");
              const aperture = { ...draft.aperture };
              if (!s.trim()) delete aperture.nominalFNumber;
              else aperture.nominalFNumber = Number(s);
              onChange({ ...draft, aperture });
            }}
          />
          <CommitInput
            label="Close focus (m)"
            value={draft.focus.closeFocusM}
            theme={t}
            numeric
            onCommit={(s) => onChange({ ...draft, focus: { ...draft.focus, closeFocusM: Number(s) } })}
          />
          <CommitInput
            label="Vertical fill"
            title="layout.yScFill: the share of the diagram height the largest element fills"
            value={draft.layout.yScFill}
            theme={t}
            numeric
            onCommit={(s) => onChange({ ...draft, layout: { ...draft.layout, yScFill: Number(s) } })}
          />
          <div style={{ gridColumn: "1 / -1" }}>
            <CommitInput
              label="F-stops"
              value={draft.aperture.fStops.join(", ")}
              theme={t}
              onCommit={(s) => {
                const stops = s.split(",").map((x) => x.trim());
                if (stops.some((x) => !x || !Number.isFinite(Number(x))))
                  throw new Error("Use comma-separated finite f-numbers");
                onChange({ ...draft, aperture: { ...draft.aperture, fStops: stops.map(Number) } });
              }}
            />
          </div>
        </div>
      </Section>

      <details style={{ marginTop: 18, marginBottom: 18 }}>
        <summary style={{ ...sectionTitle(t), cursor: "pointer", margin: 0 }}>Advanced JSON</summary>
        <p style={{ color: t.muted, fontSize: 11, lineHeight: 1.5, margin: "6px 0" }}>
          The full authored V2 input, including zoom and focus spacing schedules, rear plates, and source and catalog
          metadata. Apply requires a valid prescription.
        </p>
        <textarea
          data-draft-edit
          aria-label="Advanced JSON"
          value={advanced ?? exportJson(draft)}
          rows={20}
          spellCheck={false}
          style={{ ...builderInputStyle(t), resize: "vertical", fontSize: "0.7rem", lineHeight: 1.4 }}
          onChange={(e) => setAdvanced(e.target.value)}
        />
        <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
          {[
            {
              text: "Apply JSON",
              action: () => {
                onChange(importJson(advanced ?? exportJson(draft)));
                setAdvanced(null);
              },
            },
            { text: "Reload JSON from draft", action: () => setAdvanced(null) },
          ].map(({ text, action }) => (
            <button
              key={text}
              type="button"
              style={{ ...segment(true), border: `1px solid ${t.toggleBorder}`, borderRadius: 5 }}
              onClick={() => run(action)}
            >
              {text}
            </button>
          ))}
        </div>
      </details>

      {actionError && (
        <div
          style={{
            position: "sticky",
            bottom: 0,
            marginTop: "auto",
            padding: "8px 0 10px",
            background: t.panelBg,
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              border: `1px solid ${t.error}`,
              borderRadius: 5,
              padding: "6px 8px",
              background: t.panelBg,
            }}
          >
            <p role="alert" style={{ color: t.error, whiteSpace: "pre-wrap", margin: 0, flex: 1, fontSize: 11 }}>
              {actionError}
            </p>
            <button
              type="button"
              aria-label="Dismiss message"
              style={{ ...toggleBtn(t, false, { hasRightBorder: false, padding: "0 6px", flex: 0 }), minHeight: 20 }}
              onClick={() => setActionError("")}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
