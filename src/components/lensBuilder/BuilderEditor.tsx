import { useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { Theme } from "../../types/theme.js";
import { ALL_CATALOG_KEYS, lensNameForKey, authoredInputForKey } from "../../utils/catalog/lensCatalog.js";
import { createTemplate, copyCatalogInput, type DraftValidation } from "../../lensBuilder/draft.js";
import { exportDataTs, exportJson, importJson, draftFilename } from "../../lensBuilder/serialize.js";
import { requireUntrustedDraft, MAX_DRAFT_BYTES } from "../../lensBuilder/untrusted.js";
import { LENS_KEY_PATTERN } from "../../optics/validation.js";
import { toggleBtn, toggleGroup, VISUALLY_HIDDEN } from "../../utils/style/styles.js";
import CommitInput, {
  BuilderTouchContext,
  builderCaptionStyle,
  builderInputStyle,
  sectionTitle,
} from "./CommitInput.js";
import OpticalTrain, { deriveElementModel } from "./OpticalTrain.js";

interface BuilderEditorProps {
  draft: LensDataV2Input;
  theme: Theme;
  validation: DraftValidation;
  pending: boolean;
  storageMessage?: string;
  hasBackup?: boolean;
  onDiscardBackup?: () => void;
  onChange: (draft: LensDataV2Input) => void;
  onReplace: (draft: LensDataV2Input) => boolean;
  onDirty: () => void;
  /** False below the wide breakpoint, where fields grow to 16 px for touch. */
  isWide?: boolean;
  /** The diagram's selected element, whose card the train marks and scrolls to. */
  selectedElementId?: number | null;
  /** Highlights an element in the diagram while its card is hovered or focused. */
  onHighlight?: (elementId: number | null) => void;
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
    <section aria-label={title} style={{ marginTop: 14 }}>
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
  onChange: commitDraft,
  storageMessage,
  hasBackup,
  onDiscardBackup,
  onReplace,
  onDirty,
  isWide = true,
  selectedElementId,
  onHighlight,
}: BuilderEditorProps) {
  const onChange = (next: LensDataV2Input) => commitDraft(requireUntrustedDraft(next));
  const touch = !isWide;
  const [search, setSearch] = useState("");
  const [advanced, setAdvanced] = useState<string | null>(null);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [actionError, setActionError] = useState("");
  const [importFocused, setImportFocused] = useState(false);
  const advancedRef = useRef<HTMLDetailsElement>(null);
  const model = useMemo(() => deriveElementModel(draft), [draft]);
  /* A draft the train cannot show opens Advanced JSON once, when it arrives; the reader may close it again. */
  const [handledOk, setHandledOk] = useState<boolean | null>(null);
  if (handledOk !== model.ok) {
    setHandledOk(model.ok);
    if (!model.ok) setAdvancedOpen(true);
  }
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
  const openAdvanced = () => {
    setAdvancedOpen(true);
    requestAnimationFrame(() => {
      const details = advancedRef.current;
      if (typeof details?.scrollIntoView === "function") details.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  };
  const exportBlocked = !validation.ok || pending;
  const segment = (last = false): CSSProperties => ({
    ...toggleBtn(t, false, { hasRightBorder: !last, padding: touch ? "6px 10px" : "4px 9px", flex: 0 }),
    fontSize: 10,
    minHeight: touch ? 34 : 26,
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
  const field = builderInputStyle(t, false, touch);

  return (
    <BuilderTouchContext.Provider value={touch}>
      <aside
        onChangeCapture={(e) => {
          if ((e.target as HTMLElement).hasAttribute("data-draft-edit")) onDirty();
        }}
        aria-label="Lens editor"
        style={{
          background: t.panelBg,
          color: t.body,
          padding: touch ? "14px 16px 0" : "12px 12px 0",
          fontSize: 12,
          minHeight: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
          <h1
            style={{
              color: t.title,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.04em",
              margin: 0,
              fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
            }}
          >
            Build your own lens
          </h1>
          <span style={{ color: t.muted, fontSize: 10.5 }}>Experimental · drafts stay in this browser</span>
        </div>

        <section aria-label="Builder toolbar" style={{ display: "grid", gap: 6, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 6, minWidth: 0 }}>
            <input
              maxLength={200}
              type="search"
              aria-label="Search starting lenses"
              title={`Filter the template and ${STARTING_LENSES.length} catalog lenses`}
              placeholder="Filter…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ ...field, flex: "1 1 35%", width: "auto" }}
            />
            <select
              aria-label="Start from"
              value=""
              style={{ ...field, flex: "1 1 65%", width: "auto", cursor: "pointer" }}
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
                {search.trim() ? `Start from: ${matches.length} matching lenses…` : "Start from template or catalog…"}
              </option>
              <option value="template">Template — experimental triplet</option>
              {matches.map((lens) => (
                <option key={lens.key} value={lens.key}>
                  {lens.name}
                </option>
              ))}
            </select>
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
                    if (file && file.size > MAX_DRAFT_BYTES) {
                      setActionError("JSON must be at most 1 MB");
                      return;
                    }
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
            marginTop: 8,
            padding: "5px 8px",
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
          {storageMessage && <p style={{ margin: "2px 0 0", color: t.error }}>{storageMessage}</p>}
          {hasBackup && (
            <button type="button" onClick={onDiscardBackup}>
              Discard backup
            </button>
          )}
          {message && <p style={{ margin: "2px 0 0", color: t.muted }}>{message}</p>}
        </div>

        <section
          aria-label="Identity"
          style={{ marginTop: 10, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 4 }}
        >
          <div style={{ gridColumn: "1 / -1" }}>
            <CommitInput
              label="Name"
              labelMode="side"
              stringRule="name"
              value={draft.name}
              theme={t}
              onCommit={(name) => onChange({ ...draft, name })}
            />
          </div>
          <CommitInput
            label="Key"
            stringRule="key"
            labelMode="side"
            value={draft.key}
            theme={t}
            invalid={!LENS_KEY_PATTERN.test(draft.key)}
            onCommit={(key) => onChange({ ...draft, key })}
          />
          <CommitInput
            label="Maker"
            stringRule="maker"
            labelMode="side"
            value={draft.maker ?? ""}
            theme={t}
            onCommit={(maker) => onChange({ ...draft, maker })}
          />
        </section>

        <div style={{ marginTop: 14 }}>
          {model.ok ? (
            <OpticalTrain
              draft={draft}
              model={model.model}
              theme={t}
              touch={touch}
              issues={validation.ok ? [] : validation.issues}
              onChange={onChange}
              onAction={run}
              onOpenAdvanced={openAdvanced}
              selectedElementId={selectedElementId}
              onHighlight={onHighlight}
            />
          ) : (
            <section
              aria-label="Optical train"
              style={{ border: `1px solid ${t.panelBorder}`, borderRadius: 6, padding: "8px 10px" }}
            >
              <h2 style={sectionTitle(t)}>Optical train</h2>
              <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                This draft uses structure the element editor cannot show, so edit it in Advanced JSON below:
              </p>
              <ul style={{ margin: "4px 0 0", paddingLeft: 16, fontSize: 11, lineHeight: 1.5, color: t.label }}>
                {model.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <button
                type="button"
                style={{ ...segment(true), border: `1px solid ${t.toggleBorder}`, borderRadius: 5, marginTop: 8 }}
                onClick={openAdvanced}
              >
                Go to Advanced JSON
              </button>
            </section>
          )}
        </div>

        <Section title="Aperture and focus" theme={t}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 6 }}>
            <CommitInput
              label="Nominal f-number"
              caption="f-number"
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
                labelMode="side"
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

        <details
          ref={advancedRef}
          open={advancedOpen}
          onToggle={(e) => setAdvancedOpen(e.currentTarget.open)}
          style={{ marginTop: 14, marginBottom: 18 }}
        >
          <summary style={{ ...sectionTitle(t), cursor: "pointer", margin: 0 }}>Advanced JSON</summary>
          <p style={{ color: t.muted, fontSize: 11, lineHeight: 1.5, margin: "6px 0" }}>
            The full authored V2 input, including zoom and focus spacing schedules, rear plates, and source and catalog
            metadata. Apply requires a valid prescription.
          </p>
          <textarea
            data-draft-edit
            aria-label="Advanced JSON"
            maxLength={MAX_DRAFT_BYTES}
            value={advanced ?? exportJson(draft)}
            rows={20}
            spellCheck={false}
            style={{ ...field, resize: "vertical", fontSize: touch ? "16px" : "0.7rem", lineHeight: 1.4 }}
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
                style={{
                  ...toggleBtn(t, false, { hasRightBorder: false, padding: "0 6px", flex: 0 }),
                  minHeight: 20,
                }}
                onClick={() => setActionError("")}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </aside>
    </BuilderTouchContext.Provider>
  );
}
