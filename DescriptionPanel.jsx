import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function DescriptionPanel({ markdown, theme: t }) {
  if (!markdown) {
    return (
      <div style={{ padding: 32, color: t.muted, fontSize: 12, fontStyle: "italic" }}>
        No description available for this lens.
      </div>
    );
  }
  const components = {
    h1: ({ children }) => <h1 style={{ fontSize: 18, fontWeight: 700, color: t.descH1, margin: "24px 0 12px", fontFamily: "'DM Sans','Helvetica Neue',sans-serif", lineHeight: 1.3, borderBottom: `1px solid ${t.descBorder}`, paddingBottom: 8 }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: 15, fontWeight: 600, color: t.descH2, margin: "20px 0 8px", fontFamily: "'DM Sans','Helvetica Neue',sans-serif", lineHeight: 1.3 }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: 13, fontWeight: 600, color: t.descH2, margin: "16px 0 6px", fontFamily: "'DM Sans','Helvetica Neue',sans-serif", lineHeight: 1.3 }}>{children}</h3>,
    p: ({ children }) => <p style={{ fontSize: 12, color: t.descText, lineHeight: 1.7, margin: "8px 0" }}>{children}</p>,
    a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: t.descLinkColor, textDecoration: "none", borderBottom: `1px solid ${t.descLinkColor}40` }}>{children}</a>,
    em: ({ children }) => <em style={{ color: t.muted, fontStyle: "italic" }}>{children}</em>,
    strong: ({ children }) => <strong style={{ color: t.descH1, fontWeight: 600 }}>{children}</strong>,
    code: ({ children, className }) => {
      const isBlock = className?.startsWith('language-');
      if (isBlock) return <code style={{ fontSize: 11 }}>{children}</code>;
      return <code style={{ background: t.descCodeBg, padding: "1px 5px", borderRadius: 3, fontSize: 11, color: t.descLinkColor }}>{children}</code>;
    },
    pre: ({ children }) => <pre style={{ background: t.descCodeBg, padding: 12, borderRadius: 6, overflow: "auto", margin: "10px 0", fontSize: 11, lineHeight: 1.5 }}>{children}</pre>,
    ul: ({ children }) => <ul style={{ paddingLeft: 20, margin: "6px 0", fontSize: 12, color: t.descText, lineHeight: 1.7 }}>{children}</ul>,
    ol: ({ children }) => <ol style={{ paddingLeft: 20, margin: "6px 0", fontSize: 12, color: t.descText, lineHeight: 1.7 }}>{children}</ol>,
    li: ({ children }) => <li style={{ marginBottom: 3 }}>{children}</li>,
    blockquote: ({ children }) => <blockquote style={{ borderLeft: `3px solid ${t.descLinkColor}`, paddingLeft: 14, margin: "10px 0", color: t.muted }}>{children}</blockquote>,
    table: ({ children }) => <div style={{ overflowX: "auto", margin: "10px 0" }}><table style={{ borderCollapse: "collapse", width: "100%", fontSize: 11 }}>{children}</table></div>,
    thead: ({ children }) => <thead style={{ background: t.descTableHeaderBg }}>{children}</thead>,
    th: ({ children }) => <th style={{ border: `1px solid ${t.descTableBorder}`, padding: "6px 10px", textAlign: "left", color: t.descH2, fontWeight: 600, fontSize: 10.5 }}>{children}</th>,
    td: ({ children }) => <td style={{ border: `1px solid ${t.descTableBorder}`, padding: "5px 10px", color: t.descText, fontSize: 10.5 }}>{children}</td>,
    hr: () => <hr style={{ border: "none", borderTop: `1px solid ${t.descBorder}`, margin: "16px 0" }} />,
  };
  return (
    <div style={{ padding: "16px 24px 24px", fontSize: 12, lineHeight: 1.7 }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
