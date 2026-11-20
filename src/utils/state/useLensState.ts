import { finiteFocusState } from "./finiteFocusState.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Custom hook wrapping useReducer for LensViewer state.
 *
 * Handles initialization from localStorage prefs + URL params,
 * merging with precedence: URL > prefs > defaults.
 */

import { useReducer, useEffect, useRef, type Dispatch } from "react";
import lensReducer, { createInitialState } from "./lensReducer.js";
import { loadPrefs } from "./preferences.js";
import { parseLensKeysFromSearch } from "./parseComparisonParams.js";
import { lensViewQueryToUrlState, parseLensViewQuery } from "./lensViewUrlState.js";
import useMediaQuery from "../useMediaQuery.js";
import type { LensState, LensAction, URLState } from "../../types/state.js";
import { LENS_CATALOG, resolveOpticalConfigurationKey } from "../catalog/lensCatalog.js";
import { resolveTeleconverterKey } from "../catalog/teleconverterCatalog.js";

function catalogFocusSource(key?: string) {
  return key !== undefined && Object.hasOwn(LENS_CATALOG, key) ? LENS_CATALOG[key] : undefined;
}

export default function useLensState(
  catalogKeys: string[],
  initialLensKey?: string,
  initialLensKeyB?: string,
  authoredDraft?: LensDataV2Input,
): [LensState, Dispatch<LensAction>, boolean] {
  /* The viewer tree mounts inside ClientOnly, so the live match is safe and required:
     this value feeds the one-shot reducer initializer (panel expansion defaults). */
  const isWide = useMediaQuery("(min-width: 900px)", { ssrDefault: false, clientOnly: true });

  const [state, dispatch] = useReducer(
    (state: LensState, action: LensAction) => {
      const next = lensReducer(state, action);
      const source = authoredDraft ?? catalogFocusSource(next.lens.selectedConfigurationKey ?? next.lens.lensKeyA);
      return finiteFocusState(next, action, source);
    },
    { catalogKeys, isWide, initialLensKey, initialLensKeyB },
    ({
      catalogKeys: keys,
      isWide: wide,
      initialLensKey: initKeyA,
      initialLensKeyB: initKeyB,
    }: {
      catalogKeys: string[];
      isWide: boolean;
      initialLensKey?: string;
      initialLensKeyB?: string;
    }) => {
      const prefs = loadPrefs();
      const search = typeof window !== "undefined" ? window.location.search : "";
      const parsedViewState = parseLensViewQuery(search);
      const viewState = lensViewQueryToUrlState(parsedViewState);
      let urlState: Partial<URLState>;
      if (initKeyA && initKeyB && keys.includes(initKeyA) && keys.includes(initKeyB)) {
        urlState = { ...viewState, comparing: true, lensKeyA: initKeyA, lensKeyB: initKeyB };
      } else if (initKeyA && keys.includes(initKeyA)) {
        urlState = { ...viewState, singleLens: initKeyA };
      } else if (initKeyA) {
        urlState = viewState;
      } else {
        urlState = { ...viewState, ...parseLensKeysFromSearch(search, keys) };
      }
      const canonicalLensKey = urlState.singleLens ?? urlState.lensKeyA ?? keys[0];
      if (urlState.comparing) {
        delete urlState.configurationKey;
        delete urlState.teleconverterKey;
        delete urlState.patentPositions;
        /* Each pane's converter is checked against that pane's own lens. */
        urlState.teleconverterKeyA = resolveTeleconverterKey(
          urlState.lensKeyA ?? "",
          parsedViewState.teleconverterKeyA,
        );
        urlState.teleconverterKeyB = resolveTeleconverterKey(
          urlState.lensKeyB ?? "",
          parsedViewState.teleconverterKeyB,
        );
      } else if (canonicalLensKey) {
        delete urlState.teleconverterKeyA;
        delete urlState.teleconverterKeyB;
        urlState.configurationKey = resolveOpticalConfigurationKey(canonicalLensKey, parsedViewState.configurationKey);
        /* A converter mounts on the prescription actually shown, so it is checked against the resolved variant. */
        urlState.teleconverterKey = resolveTeleconverterKey(
          urlState.configurationKey,
          parsedViewState.teleconverterKey,
        );
      }
      return finiteFocusState(
        createInitialState(prefs, urlState, wide, keys),
        null,
        authoredDraft ?? catalogFocusSource(urlState.configurationKey ?? canonicalLensKey),
        urlState.focus,
      );
    },
  );

  // Imports can retain their key while changing the finite domain. Ordinary edits keep their existing state.
  const draftFocusIdentity = JSON.stringify([
    authoredDraft?.key,
    authoredDraft?.focus.finiteOnly,
    authoredDraft?.focus.keyframes,
  ]);
  const draftIdentity = useRef({ identity: draftFocusIdentity, finiteOnly: Boolean(authoredDraft?.focus.finiteOnly) });
  useEffect(() => {
    const previous = draftIdentity.current;
    if (previous.identity === draftFocusIdentity) return;
    const finiteOnly = Boolean(authoredDraft?.focus.finiteOnly);
    draftIdentity.current = { identity: draftFocusIdentity, finiteOnly };
    if (previous.finiteOnly || finiteOnly) dispatch({ type: "RESET_SLIDERS" });
  }, [authoredDraft, draftFocusIdentity]);
  return [state, dispatch, isWide];
}
