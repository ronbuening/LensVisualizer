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

import { useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Theme } from "../types/theme.js";

interface DescriptionPanelProps {
  markdown: string | null | undefined;
  theme: Theme;
}

const WRAPPER_STYLE: CSSProperties = { padding: "16px 24px 24px", fontSize: 12, lineHeight: 1.7 };
const EMPTY_STATE_STYLE: CSSProperties = { padding: 32, fontSize: 12, fontStyle: "italic" };

export default function DescriptionPanel({ markdown, theme: t }: DescriptionPanelProps) {
  /* Override every markdown element with theme-colored inline styles.
   * react-markdown passes each tag through these custom renderers.
   * Memoized on `t` so the 15 render functions aren't recreated every render.
   * Hook must be called before any early return to satisfy rules-of-hooks. */
  const components = useMemo(
    () => ({
      h1: ({ children }: { children?: ReactNode }) => (
        <h1
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: t.descH1,
            margin: "14px 0 6px",
            fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          {children}
        </h1>
      ),
      h2: ({ children }: { children?: ReactNode }) => (
        <h2 style={{ fontSize: 13, fontWeight: 600, color: t.descH2, margin: "14px 0 4px", letterSpacing: "0.06em" }}>
          {children}
        </h2>
      ),
      h3: ({ children }: { children?: ReactNode }) => (
        <h3 style={{ fontSize: 12, fontWeight: 600, color: t.descH2, margin: "10px 0 3px", letterSpacing: "0.04em" }}>
          {children}
        </h3>
      ),
      p: ({ children }: { children?: ReactNode }) => (
        <p style={{ margin: "6px 0", fontSize: 12, color: t.descText, lineHeight: 1.7 }}>{children}</p>
      ),
      strong: ({ children }: { children?: ReactNode }) => (
        <strong style={{ color: t.descH2, fontWeight: 600 }}>{children}</strong>
      ),
      a: ({ href, children }: { href?: string; children?: ReactNode }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: t.descLinkColor, textDecoration: "none", borderBottom: `1px solid ${t.descLinkColor}40` }}
        >
          {children}
        </a>
      ),
      /* Distinguish fenced code blocks (language-*) from inline `code` spans */
      code: ({ className, children }: { className?: string; children?: ReactNode }) => {
        const isBlock = className?.startsWith("language-");
        if (isBlock) return <code style={{ fontSize: 11 }}>{children}</code>;
        return (
          <code
            style={{
              background: t.descCodeBg,
              padding: "1px 5px",
              borderRadius: 3,
              fontSize: 11,
              color: t.descLinkColor,
            }}
          >
            {children}
          </code>
        );
      },
      pre: ({ children }: { children?: ReactNode }) => (
        <pre
          style={{
            background: t.descCodeBg,
            padding: 12,
            borderRadius: 6,
            overflow: "auto",
            margin: "10px 0",
            fontSize: 11,
            lineHeight: 1.5,
          }}
        >
          {children}
        </pre>
      ),
      ul: ({ children }: { children?: ReactNode }) => (
        <ul style={{ paddingLeft: 20, margin: "6px 0", fontSize: 12, color: t.descText, lineHeight: 1.7 }}>
          {children}
        </ul>
      ),
      ol: ({ children }: { children?: ReactNode }) => (
        <ol style={{ paddingLeft: 20, margin: "6px 0", fontSize: 12, color: t.descText, lineHeight: 1.7 }}>
          {children}
        </ol>
      ),
      li: ({ children }: { children?: ReactNode }) => <li style={{ marginBottom: 3 }}>{children}</li>,
      blockquote: ({ children }: { children?: ReactNode }) => (
        <blockquote
          style={{ borderLeft: `3px solid ${t.descLinkColor}`, paddingLeft: 14, margin: "10px 0", color: t.muted }}
        >
          {children}
        </blockquote>
      ),
      table: ({ children }: { children?: ReactNode }) => (
        <div style={{ overflowX: "auto", margin: "10px 0" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 11 }}>{children}</table>
        </div>
      ),
      thead: ({ children }: { children?: ReactNode }) => (
        <thead style={{ background: t.descTableHeaderBg }}>{children}</thead>
      ),
      th: ({ children }: { children?: ReactNode }) => (
        <th
          style={{
            border: `1px solid ${t.descTableBorder}`,
            padding: "6px 10px",
            textAlign: "left",
            color: t.descH2,
            fontWeight: 600,
            fontSize: 10.5,
          }}
        >
          {children}
        </th>
      ),
      td: ({ children }: { children?: ReactNode }) => (
        <td
          style={{ border: `1px solid ${t.descTableBorder}`, padding: "5px 10px", color: t.descText, fontSize: 10.5 }}
        >
          {children}
        </td>
      ),
      hr: () => <hr style={{ border: "none", borderTop: `1px solid ${t.descBorder}`, margin: "16px 0" }} />,
    }),
    [t],
  );
  if (!markdown) {
    return <div style={{ ...EMPTY_STATE_STYLE, color: t.muted }}>No description available for this lens.</div>;
  }
  return (
    <div style={WRAPPER_STYLE}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
