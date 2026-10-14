/**
 * DescriptionPanel — renders lens analysis markdown with theme-aware styling.
 *
 * Each lens can ship an optional `.analysis.md` file (loaded by lensCatalog.js).
 * This component renders that markdown via react-markdown with GFM support,
 * overriding every HTML element with inline-styled equivalents so the output
 * follows the active theme without any external CSS.
 *
 * Used by LensViewer in the "analysis" pane (desktop right column / mobile tab).
 */

import type { CSSProperties } from "react";
import ThemedMarkdown from "../markdown/ThemedMarkdown.js";
import type { Theme } from "../../types/theme.js";
import type { LensData } from "../../types/optics.js";
import LensIdentityRelations from "../content/LensIdentityRelations.js";

interface DescriptionPanelProps {
  markdown: string | null | undefined;
  theme: Theme;
  lens?: LensData;
}

const WRAPPER_STYLE: CSSProperties = { padding: "16px 24px 24px", fontSize: 12, lineHeight: 1.7 };
const EMPTY_STATE_STYLE: CSSProperties = { padding: 32, fontSize: 12, fontStyle: "italic" };

export default function DescriptionPanel({ markdown, theme: t, lens }: DescriptionPanelProps) {
  /* undefined = analysis exists but its code-split chunk is still loading */
  if (!lens && markdown === undefined) {
    return <div style={{ ...EMPTY_STATE_STYLE, color: t.muted }}>Loading analysis…</div>;
  }
  if (!lens && !markdown) {
    return <div style={{ ...EMPTY_STATE_STYLE, color: t.muted }}>No description available for this lens.</div>;
  }
  return (
    <div style={WRAPPER_STYLE}>
      {lens && <LensIdentityRelations lens={lens} theme={t} />}
      {markdown === undefined ? (
        <div style={{ ...EMPTY_STATE_STYLE, color: t.muted, padding: 0 }}>Loading analysis…</div>
      ) : markdown ? (
        <ThemedMarkdown markdown={markdown} theme={t} variant="description" />
      ) : (
        <div style={{ ...EMPTY_STATE_STYLE, color: t.muted, padding: 0 }}>No description available for this lens.</div>
      )}
    </div>
  );
}
