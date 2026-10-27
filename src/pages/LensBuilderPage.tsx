import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import ClientOnly from "../components/ClientOnly.js";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import SingleLensContent from "../components/layout/SingleLensContent.js";
import BuilderErrorBoundary from "../components/lensBuilder/BuilderErrorBoundary.js";
import { restoreDraft, STORAGE_KEY, BACKUP_KEY } from "../lensBuilder/storage.js";
import { parseUntrustedDraft } from "../lensBuilder/untrusted.js";
import BuilderEditor from "../components/lensBuilder/BuilderEditor.js";
import { createTemplate, copyCatalogInput, validateDraft } from "../lensBuilder/draft.js";
import type { DraftValidation } from "../lensBuilder/draft.js";
import { exportJson } from "../lensBuilder/serialize.js";
import type { LensDataV2Input } from "../types/lensDataV2.js";
import { authoredInputForKey } from "../utils/catalog/lensCatalog.js";
import { setGlobalErrorTelemetryId } from "../utils/errorBeacon.js";
import useLensState from "../utils/state/useLensState.js";
import usePreferences from "../utils/state/usePreferences.js";
import { SET_DARK, SET_HIGH_CONTRAST } from "../utils/state/lensReducer.js";
import { LensStateContext, LensDispatchContext, PanelStateContext } from "../utils/state/LensContext.js";
import useMediaQuery from "../utils/useMediaQuery.js";
import {
  darkPreferenceFromThemeMode,
  nextThemeMode,
  resolveActiveTheme,
  resolveDarkPreference,
  themeModeFromDarkPreference,
} from "../utils/theme/themePreferences.js";
import { useActiveHoliday } from "../utils/theme/useActiveHoliday.js";

const NO_URL_UPDATE = () => {};

export function LensBuilder() {
  const [revision, setRevision] = useState(0);
  const [resetNotice, setResetNotice] = useState("");
  const reset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(BACKUP_KEY);
      setResetNotice("");
    } catch {
      setResetNotice("Draft reset, but browser storage could not be cleared.");
    }
    setRevision((value) => value + 1);
  };
  return (
    <BuilderErrorBoundary key={revision} onReset={reset}>
      <LensBuilderEditor skipRestore={revision > 0} onReset={reset} resetNotice={resetNotice} />
    </BuilderErrorBoundary>
  );
}

function LensBuilderEditor({
  skipRestore,
  onReset,
  resetNotice,
}: {
  skipRestore: boolean;
  onReset: () => void;
  resetNotice: string;
}) {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const [initial] = useState(() => {
    const saved = skipRestore ? { notice: "", hasBackup: false } : restoreDraft(localStorage);
    const from = new URLSearchParams(search).get("from");
    const input = !skipRestore && from ? authoredInputForKey(from) : undefined;
    let copied: LensDataV2Input | undefined;
    let notice = saved.notice;
    if (!saved.draft && !saved.hasBackup && input) {
      try {
        copied = copyCatalogInput(input);
      } catch {
        notice = "Catalog copy failed the draft input rules. Started from the template.";
      }
    }
    return { ...saved, notice, draft: saved.draft ?? copied ?? createTemplate(), saved: !!saved.draft };
  });
  const [storageMessage, setStorageMessage] = useState(resetNotice);
  const [recoveryNotice, setRecoveryNotice] = useState(initial.notice);
  const [hasBackup, setHasBackup] = useState(initial.hasBackup);
  const [preserveOriginal, setPreserveOriginal] = useState(!!initial.preserveOriginal);
  const discardBackup = () => {
    try {
      localStorage.removeItem(BACKUP_KEY);
      if (preserveOriginal) localStorage.removeItem(STORAGE_KEY);
      setPreserveOriginal(false);
      setHasBackup(false);
      setRecoveryNotice("");
    } catch {
      setStorageMessage("Could not discard backup: browser storage is unavailable.");
    }
  };
  const [draft, setDraft] = useState(initial.draft);
  const [localEdits, setLocalEdits] = useState(false);
  const [editorRevision, setEditorRevision] = useState(0);
  const [baseline, setBaseline] = useState(initial.saved ? "" : exportJson(initial.draft));
  const [build, setBuild] = useState(() => {
    const result = validateDraft(initial.draft);
    const fallback = validateDraft(createTemplate());
    if (!fallback.ok) throw new Error(fallback.issues.join("\n"));
    return { result, lens: result.ok ? result.lens : fallback.lens, draft: initial.draft };
  });
  const [state, dispatch, isWide] = useLensState([initial.draft.key], initial.draft.key);
  /* The element whose editor card is hovered or focused; the diagram highlights it like its own hover. */
  const [highlight, setHighlight] = useState<number | null>(null);
  /* Theme and ray-toggle preferences are shared with the lens pages, as on any viewer route. */
  usePreferences(state);
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)", { ssrDefault: true, clientOnly: true });
  const holiday = useActiveHoliday();
  const themeMode = themeModeFromDarkPreference(state.display.dark);
  const theme = resolveActiveTheme(
    themeMode,
    resolveDarkPreference(state.display.dark, systemDark),
    state.display.highContrast,
    holiday,
  );
  const handledSearch = useRef<string | null>(null);

  useEffect(() => {
    if (handledSearch.current === search) return;
    const first = handledSearch.current === null;
    handledSearch.current = search;
    const params = new URLSearchParams(search);
    const key = params.get("from");
    if (key === null) return;
    /* Drop the one-shot parameter so a reload restores the autosave instead of asking again. */
    params.delete("from");
    const rest = params.toString();
    void navigate({ pathname, search: rest ? `?${rest}` : "", hash }, { replace: true });
    const input = authoredInputForKey(key);
    if (!input || (first && !initial.saved)) return;
    if (window.confirm("Replace the current draft with a copy of this catalog lens?")) {
      let next: LensDataV2Input;
      try {
        next = copyCatalogInput(input);
      } catch {
        setStorageMessage("Catalog copy failed the draft input rules.");
        return;
      }
      setDraft(next);
      setBaseline(exportJson(next));
      setLocalEdits(false);
      setEditorRevision((revision) => revision + 1);
    }
  }, [search, pathname, hash, navigate, initial.saved]);

  // Uncaught errors here may quote draft text; window-level reports carry only the builder's constant id.
  useEffect(() => {
    setGlobalErrorTelemetryId("lens-builder");
    return () => setGlobalErrorTelemetryId(undefined);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result: DraftValidation = validateDraft(draft);
      setBuild((previous) => ({ result, lens: result.ok ? result.lens : previous.lens, draft }));
    }, 250);
    return () => clearTimeout(timer);
  }, [draft]);

  useEffect(() => {
    // Reset clears storage until the next edit; never immediately recreate the removed autosave.
    if (preserveOriginal || (skipRestore && draft === initial.draft)) return;
    try {
      localStorage.setItem(STORAGE_KEY, exportJson(draft));
      setStorageMessage("");
    } catch {
      setStorageMessage("Autosave failed: browser storage is unavailable or full. Export JSON to keep your changes.");
    }
  }, [draft, preserveOriginal, skipRestore, initial.draft]);

  const replace = (next: LensDataV2Input) => {
    const parsed = parseUntrustedDraft(next);
    if (!parsed.ok) {
      setStorageMessage(parsed.issues.join("\n"));
      return false;
    }
    next = parsed.draft;
    if (
      (localEdits || exportJson(draft) !== baseline) &&
      !window.confirm("Replace the modified draft? Unsaved edits will be lost.")
    )
      return false;
    setDraft(next);
    setBaseline(exportJson(next));
    setLocalEdits(false);
    setEditorRevision((revision) => revision + 1);
    return true;
  };
  return (
    <LensStateContext.Provider value={{ state, theme, isWide, updateURLWithSliders: NO_URL_UPDATE }}>
      <PanelStateContext.Provider value={state.panels}>
        <LensDispatchContext.Provider value={dispatch}>
          <div
            style={{
              background: theme.bg,
              color: theme.body,
              fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
              minHeight: "100vh",
              ...(isWide ? { height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" } : {}),
              transition: "background 0.3s,color 0.3s",
            }}
          >
            <div style={isWide ? { flex: "0 0 auto" } : undefined}>
              <PageNavBar
                theme={theme}
                themeMode={themeMode}
                highContrast={state.display.highContrast}
                onToggleTheme={() =>
                  dispatch({ type: SET_DARK, dark: darkPreferenceFromThemeMode(nextThemeMode(themeMode)) })
                }
                onToggleHC={() => dispatch({ type: SET_HIGH_CONTRAST, highContrast: !state.display.highContrast })}
              >
                <Link to="/" style={{ color: theme.descLinkColor, textDecoration: "none" }}>
                  Home
                </Link>
                <span style={{ color: theme.muted, margin: "0 0.35em" }}>/</span>
                <span style={{ color: theme.body }}>Lens builder</span>
                <button type="button" onClick={onReset}>
                  Reset draft
                </button>
              </PageNavBar>
            </div>
            <main style={isWide ? { flex: "1 1 auto", minHeight: 0, overflow: "hidden" } : undefined}>
              <SingleLensContent
                theme={theme}
                isWide={isWide}
                effectiveDesktopView="both"
                showDesktopToggle={false}
                mobileView="diagram"
                telemetryId="lens-builder"
                lensKey={build.lens.source.key}
                runtimeLens={build.lens}
                markdown={null}
                showPhotoSearch={false}
                highlightElementId={highlight}
                sidePanel={
                  <BuilderErrorBoundary key={editorRevision} onReset={onReset}>
                    <BuilderEditor
                      key={editorRevision}
                      onDirty={() => setLocalEdits(true)}
                      draft={draft}
                      theme={theme}
                      validation={build.result}
                      pending={draft !== build.draft}
                      storageMessage={[recoveryNotice, storageMessage].filter(Boolean).join(" ")}
                      hasBackup={hasBackup}
                      onDiscardBackup={discardBackup}
                      onChange={setDraft}
                      onReplace={replace}
                      isWide={isWide}
                      selectedElementId={state.panels.selectedElementId}
                      onHighlight={setHighlight}
                    />
                  </BuilderErrorBoundary>
                }
              />
            </main>
          </div>
        </LensDispatchContext.Provider>
      </PanelStateContext.Provider>
    </LensStateContext.Provider>
  );
}

export default function LensBuilderPage() {
  return (
    <>
      <SEOHead
        title="Build your own lens"
        description="Experimental optical prescription editor"
        robots="noindex,nofollow"
      />
      <ClientOnly>
        <LensBuilder />
      </ClientOnly>
    </>
  );
}
