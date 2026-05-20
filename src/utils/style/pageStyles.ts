import type { CSSProperties } from "react";

export const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 1.5rem 2rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies CSSProperties;

export const H1_STYLE: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
};

export const SECTION_HEADING_BASE_STYLE = {
  fontSize: "1.125rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  marginBottom: "0.75rem",
  paddingBottom: "0.25rem",
} satisfies CSSProperties;

export const LENS_LINK_BASE_STYLE = {
  display: "block",
  padding: "0.5rem 0.75rem",
  marginBottom: "0.25rem",
  textDecoration: "none",
  borderRadius: 4,
  fontSize: "0.875rem",
} satisfies CSSProperties;
