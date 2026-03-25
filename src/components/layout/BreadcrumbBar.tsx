/**
 * Breadcrumb navigation bar — Home / Makers / {Maker} / {Lens Name}
 *
 * Renders above the TopBar in the LensViewer, matching the breadcrumb
 * pattern used on the multipage layout pages (LensPage, MakerPage, etc.).
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { headerStrip } from "../../utils/styles.js";
import { LENS_CATALOG } from "../../utils/lensCatalog.js";
import { deriveMaker } from "../../utils/lensMetadata.js";

interface BreadcrumbBarProps {
  theme: Theme;
  isWide: boolean;
  lensKey: string;
}

export default function BreadcrumbBar({ theme: t, isWide, lensKey }: BreadcrumbBarProps) {
  const lens = LENS_CATALOG[lensKey];
  if (!lens) return null;

  const maker = deriveMaker(lens.name, lens.maker);

  const linkStyle: React.CSSProperties = {
    color: t.descLinkColor,
    textDecoration: "none",
  };

  const separatorStyle: React.CSSProperties = {
    color: t.muted,
    margin: "0 0.35em",
  };

  return (
    <nav
      style={{
        ...headerStrip(t, { padding: isWide ? "6px 24px" : "6px 12px" }),
        fontSize: isWide ? 11 : 10,
        fontFamily: "inherit",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <span style={separatorStyle}>/</span>
      <Link to="/makers" style={linkStyle}>
        Makers
      </Link>
      <span style={separatorStyle}>/</span>
      <Link to={`/makers/${maker.slug}`} style={linkStyle}>
        {maker.display}
      </Link>
      <span style={separatorStyle}>/</span>
      <span style={{ color: t.body }}>{lens.name}</span>
    </nav>
  );
}
