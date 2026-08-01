/**
 * HomeFooter — minimal footer for the homepage.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { ARTICLE_FEED_PATH, LENS_FEED_PATH } from "../../utils/content/feedMetadata.js";

interface HomeFooterProps {
  theme: Theme;
}

export default function HomeFooter({ theme: t }: HomeFooterProps) {
  const linkStyle: React.CSSProperties = {
    color: t.descLinkColor,
    textDecoration: "none",
    fontSize: "0.75rem",
  };

  return (
    <footer
      style={{
        borderTop: `1px solid ${t.panelBorder}`,
        paddingTop: "1.5rem",
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      <Link to="/lenses/" style={linkStyle}>
        Lens Library
      </Link>
      <Link to="/makers/" style={linkStyle}>
        Makers
      </Link>
      <Link to="/articles/" style={linkStyle}>
        Articles
      </Link>
      <Link to="/updates/" style={linkStyle}>
        Updates
      </Link>
      <Link to="/articles/about-site/" style={linkStyle}>
        About Surface & Stop
      </Link>
      <a href={LENS_FEED_PATH} type="application/rss+xml" style={linkStyle}>
        New Lenses RSS
      </a>
      <a href={ARTICLE_FEED_PATH} type="application/rss+xml" style={linkStyle}>
        New Articles RSS
      </a>
      <a href="/sitemap.xml" style={linkStyle}>
        Sitemap
      </a>
    </footer>
  );
}
