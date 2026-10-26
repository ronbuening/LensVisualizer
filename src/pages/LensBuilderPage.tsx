import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import ClientOnly from "../components/ClientOnly.js";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import SingleLensContent from "../components/layout/SingleLensContent.js";
import BuilderEditor from "../components/lensBuilder/BuilderEditor.js";
import { createTemplate, copyCatalogInput, validateDraft } from "../lensBuilder/draft.js";
import type { DraftValidation } from "../lensBuilder/draft.js";
import { exportJson } from "../lensBuilder/serialize.js";
import type { LensDataV2Input } from "../types/lensDataV2.js";
import { authoredInputForKey } from "../utils/catalog/lensCatalog.js";
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

const STORAGE_KEY = "surface-stop-lens-builder-v2";
const NO_URL_UPDATE = () => {};

function savedDraft(): LensDataV2Input | undefined {
  try {
    const text = localStorage.getItem(STORAGE_KEY);
    if (text) {
      const parsed: LensDataV2Input = JSON.parse(text);
      // Check the records the form reads, while retaining unfinished references (for example duplicate labels).
      // Full ingest/geometry diagnostics belong to validateDraft so a reload does not discard invalid edits.
      if (
        parsed?.schema === 2 &&
        typeof parsed.key === "string" &&
        typeof parsed.name === "string" &&
        Array.isArray(parsed.elements) &&
        parsed.elements.every(
          (e) =>
            e &&
            typeof e.id === "number" &&
            typeof e.name === "string" &&
            typeof e.label === "string" &&
            typeof e.nd === "number",
        ) &&
        Array.isArray(parsed.surfaces) &&
        parsed.surfaces.every((s) => s && typeof s.label === "string" && (typeof s.R === "number" || s.R === "flat")) &&
        Array.isArray(parsed.aperture?.fStops) &&
        parsed.aperture.fStops.every((n) => typeof n === "number") &&
        typeof parsed.focus?.closeFocusM === "number" &&
        typeof parsed.layout?.yScFill === "number" &&
        (parsed.media === undefined ||
          (Array.isArray(parsed.media) && parsed.media.every((m) => m && typeof m.id === "string")))
      )
        return parsed;
    }
  } catch {
    /* Storage may be blocked, malformed or from an older schema. */
  }
  return undefined;
}

export function LensBuilder() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const [initial] = useState(() => {
    const saved = savedDraft();
    const from = new URLSearchParams(search).get("from");
    const input = from ? authoredInputForKey(from) : undefined;
    return { draft: saved ?? (input ? copyCatalogInput(input) : createTemplate()), saved: !!saved };
  });
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
      const next = copyCatalogInput(input);
      setDraft(next);
      setBaseline(exportJson(next));
      setLocalEdits(false);
      setEditorRevision((revision) => revision + 1);
    }
  }, [search, pathname, hash, navigate, initial.saved]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result: DraftValidation = validateDraft(draft);
      setBuild((previous) => ({ result, lens: result.ok ? result.lens : previous.lens, draft }));
    }, 250);
    return () => clearTimeout(timer);
  }, [draft]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, exportJson(draft));
    } catch {
      /* Quotas and privacy settings must not disable editing. */
    }
  }, [draft]);

  const replace = (next: LensDataV2Input) => {
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
              </PageNavBar>
            </div>
            <main style={isWide ? { flex: "1 1 auto", minHeight: 0, overflow: "hidden" } : undefined}>
              <SingleLensContent
                theme={theme}
                isWide={isWide}
                effectiveDesktopView="both"
                showDesktopToggle={false}
                mobileView="diagram"
                lensKey={build.lens.source.key}
                runtimeLens={build.lens}
                markdown={null}
                showPhotoSearch={false}
                sidePanel={
                  <BuilderEditor
                    key={editorRevision}
                    onDirty={() => setLocalEdits(true)}
                    draft={draft}
                    theme={theme}
                    validation={build.result}
                    pending={draft !== build.draft}
                    onChange={setDraft}
                    onReplace={replace}
                  />
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
