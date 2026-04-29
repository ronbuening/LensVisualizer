import { useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import EntrancePupilDiagram from "../diagram/EntrancePupilDiagram.js";
import ExitPupilDiagram from "../diagram/ExitPupilDiagram.js";
import TelecentricityDiagram from "../diagram/TelecentricityDiagram.js";
import WorkingFNumberDiagram from "../diagram/WorkingFNumberDiagram.js";
import PVDiagram from "../diagram/PVDiagram.js";
import LCADiagram from "../diagram/LCADiagram.js";
import MTFDiagram from "../diagram/MTFDiagram.js";
import type { Theme } from "../../types/theme.js";

type MarkdownVariant = "article" | "description";

interface ThemedMarkdownProps {
  markdown: string;
  theme: Theme;
  variant: MarkdownVariant;
  isDark?: boolean;
  isStartHere?: boolean;
}

export default function ThemedMarkdown({
  markdown,
  theme: t,
  variant,
  isDark = false,
  isStartHere = false,
}: ThemedMarkdownProps) {
  const article = variant === "article";
  const components = useMemo(
    () => ({
      h1: ({ children, id }: { children?: ReactNode; id?: string }) => (
        <h1
          id={id}
          style={{
            fontSize: article ? 20 : 16,
            fontWeight: 700,
            color: t.descH1,
            margin: article ? "18px 0 8px" : "14px 0 6px",
            fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
            letterSpacing: "0.02em",
            scrollMarginTop: article ? 88 : undefined,
          }}
        >
          {children}
        </h1>
      ),
      h2: ({ children, id }: { children?: ReactNode; id?: string }) => (
        <h2
          id={id}
          style={{
            fontSize: article ? 16 : 13,
            fontWeight: 600,
            color: t.descH2,
            margin: article ? "16px 0 6px" : "14px 0 4px",
            letterSpacing: article ? "0.04em" : "0.06em",
            scrollMarginTop: article ? 88 : undefined,
          }}
        >
          {children}
        </h2>
      ),
      h3: ({ children, id }: { children?: ReactNode; id?: string }) => (
        <h3
          id={id}
          style={{
            fontSize: article ? 14 : 12,
            fontWeight: 600,
            color: t.descH2,
            margin: article ? "12px 0 4px" : "10px 0 3px",
            letterSpacing: "0.04em",
            scrollMarginTop: article ? 88 : undefined,
          }}
        >
          {children}
        </h3>
      ),
      p: ({ children }: { children?: ReactNode }) => (
        <p
          style={{
            margin: article ? "8px 0" : "6px 0",
            fontSize: article ? 13 : 12,
            color: t.descText,
            lineHeight: 1.7,
          }}
        >
          {children}
        </p>
      ),
      strong: ({ children }: { children?: ReactNode }) => (
        <strong style={{ color: t.descH2, fontWeight: 600 }}>{children}</strong>
      ),
      a: ({ href, id, children }: { href?: string; id?: string; children?: ReactNode }) => {
        const linkStyle: CSSProperties = {
          color: t.descLinkColor,
          textDecoration: "none",
          borderBottom: `1px solid ${t.descLinkColor}40`,
        };

        if (article && href?.startsWith("/lens/")) {
          return (
            <a id={id} href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {children}
            </a>
          );
        }
        if (article && href?.startsWith("/")) {
          const state = isStartHere && href.startsWith("/articles/") ? { fromStartHere: true } : undefined;
          return (
            <Link id={id} to={href} state={state} style={linkStyle}>
              {children}
            </Link>
          );
        }
        if (article && href?.startsWith("#")) {
          return (
            <a id={id} href={href} style={{ ...linkStyle, scrollMarginTop: 88 }}>
              {children}
            </a>
          );
        }
        return (
          <a id={id} href={href} target={article ? undefined : "_blank"} rel="noopener noreferrer" style={linkStyle}>
            {children}
          </a>
        );
      },
      code: ({ className, children }: { className?: string; children?: ReactNode }) => {
        const isBlock = className?.startsWith("language-");
        if (isBlock) return <code style={{ fontSize: article ? 12 : 11 }}>{children}</code>;
        return (
          <code
            style={{
              background: t.descCodeBg,
              padding: "1px 5px",
              borderRadius: 3,
              fontSize: article ? 12 : 11,
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
            padding: article ? 14 : 12,
            borderRadius: 6,
            overflow: "auto",
            margin: article ? "12px 0" : "10px 0",
            fontSize: article ? 12 : 11,
            lineHeight: 1.5,
          }}
        >
          {children}
        </pre>
      ),
      ul: ({ children }: { children?: ReactNode }) => (
        <ul
          style={{
            paddingLeft: article ? 22 : 20,
            margin: article ? "8px 0" : "6px 0",
            fontSize: article ? 13 : 12,
            color: t.descText,
            lineHeight: 1.7,
          }}
        >
          {children}
        </ul>
      ),
      ol: ({ children }: { children?: ReactNode }) => (
        <ol
          style={{
            paddingLeft: article ? 22 : 20,
            margin: article ? "8px 0" : "6px 0",
            fontSize: article ? 13 : 12,
            color: t.descText,
            lineHeight: 1.7,
          }}
        >
          {children}
        </ol>
      ),
      li: ({ children, id }: { children?: ReactNode; id?: string }) => (
        <li id={id} style={{ marginBottom: article ? 4 : 3, scrollMarginTop: article ? 88 : undefined }}>
          {children}
        </li>
      ),
      blockquote: ({ children }: { children?: ReactNode }) => (
        <blockquote
          style={{
            borderLeft: `3px solid ${t.descLinkColor}`,
            paddingLeft: article ? 16 : 14,
            margin: article ? "12px 0" : "10px 0",
            color: t.muted,
          }}
        >
          {children}
        </blockquote>
      ),
      table: ({ children }: { children?: ReactNode }) => (
        <div style={{ overflowX: "auto", margin: article ? "12px 0" : "10px 0" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: article ? 12 : 11 }}>{children}</table>
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
            fontSize: article ? 11.5 : 10.5,
          }}
        >
          {children}
        </th>
      ),
      td: ({ children }: { children?: ReactNode }) => (
        <td
          style={{
            border: `1px solid ${t.descTableBorder}`,
            padding: "5px 10px",
            color: t.descText,
            fontSize: article ? 11.5 : 10.5,
          }}
        >
          {children}
        </td>
      ),
      hr: () => (
        <hr style={{ border: "none", borderTop: `1px solid ${t.descBorder}`, margin: article ? "18px 0" : "16px 0" }} />
      ),
      img: ({ src, alt }: { src?: string; alt?: string }) => renderMarkdownImage(src, alt, t, isDark),
    }),
    [article, t, isDark, isStartHere],
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={article ? [rehypeSlug, rehypeKatex] : [rehypeKatex]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
}

function renderMarkdownImage(src: string | undefined, alt: string | undefined, t: Theme, isDark: boolean) {
  const caption = alt ? (
    <figcaption style={{ marginTop: 6, fontSize: 11, color: t.muted, fontStyle: "italic" }}>{alt}</figcaption>
  ) : null;

  if (src?.includes("entrance-pupil")) {
    return (
      <figure style={{ margin: "24px 0", textAlign: "center" }}>
        <EntrancePupilDiagram isDark={isDark} />
        {caption}
      </figure>
    );
  }
  if (src?.includes("exit-pupil")) {
    return (
      <figure style={{ margin: "24px 0", textAlign: "center" }}>
        <ExitPupilDiagram isDark={isDark} />
        {caption}
      </figure>
    );
  }
  if (src?.includes("telecentricity")) {
    return (
      <figure style={{ margin: "24px 0", textAlign: "center" }}>
        <TelecentricityDiagram isDark={isDark} />
        {caption}
      </figure>
    );
  }
  if (src?.includes("working-fnumber")) {
    return (
      <figure style={{ margin: "24px 0", textAlign: "center" }}>
        <WorkingFNumberDiagram isDark={isDark} />
        {caption}
      </figure>
    );
  }
  if (src?.includes("pv-diagram")) {
    return (
      <figure style={{ margin: "24px 0", textAlign: "center" }}>
        <PVDiagram isDark={isDark} />
        {caption}
      </figure>
    );
  }
  if (src?.includes("lca-diagram")) {
    return (
      <figure style={{ margin: "24px 0", textAlign: "center" }}>
        <LCADiagram isDark={isDark} />
        {caption}
      </figure>
    );
  }
  if (src?.includes("mtf-diagram")) {
    return (
      <figure style={{ margin: "24px 0", textAlign: "center" }}>
        <MTFDiagram isDark={isDark} />
        {caption}
      </figure>
    );
  }

  return (
    <figure style={{ margin: "24px 0", textAlign: "center" }}>
      <img
        src={src}
        alt={alt ?? ""}
        style={{ maxWidth: "100%", height: "auto", borderRadius: 6, border: `1px solid ${t.descTableBorder}` }}
      />
      {caption}
    </figure>
  );
}
