import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { ARTICLES } from "../../utils/homepageContent.js";
import useMediaQuery from "../../utils/useMediaQuery.js";

interface TrustStripProps {
  theme: Theme;
}

export default function TrustStrip({ theme: t }: TrustStripProps) {
  const isWide = useMediaQuery("(min-width: 720px)");

  const stats = ["Patent-derived optical models", `${ARTICLES.length} articles & guides on numerous topics`];

  const links: { label: string; to: string }[] = [
    { label: "About Optical Bench", to: "/articles/about-site" },
    { label: "About the Author", to: "/articles/about-author" },
  ];

  return (
    <section
      style={{
        textAlign: "center",
        padding: isWide ? "1rem 1rem 1.25rem" : "0.75rem 0.5rem 1rem",
        marginBottom: isWide ? "1.5rem" : "1rem",
        borderRadius: 8,
        border: `1px solid ${t.panelBorder}`,
        background: t.panelBg,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isWide ? "1.25rem" : "0.5rem 0.75rem",
          fontSize: isWide ? "0.75rem" : "0.7rem",
          color: t.muted,
          lineHeight: 1.5,
        }}
      >
        {stats.map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.25rem",
          marginTop: "0.6rem",
          fontSize: "0.7rem",
        }}
      >
        {links.map(({ label, to }) => (
          <Link key={to} to={to} style={{ color: t.descLinkColor, textDecoration: "none" }}>
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
