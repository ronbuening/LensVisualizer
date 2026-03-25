/**
 * HomeFooter — minimal footer for the homepage.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";

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
      <Link to="/lenses" style={linkStyle}>
        Lens Library
      </Link>
      <Link to="/makers" style={linkStyle}>
        Makers
      </Link>
      <Link to="/articles" style={linkStyle}>
        Articles
      </Link>
      <Link to="/articles/about-site" style={linkStyle}>
        About
      </Link>
    </footer>
  );
}
