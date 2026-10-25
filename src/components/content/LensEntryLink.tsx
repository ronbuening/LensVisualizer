import { Link } from "react-router";
import type { CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";
import { canonicalPagePath } from "../../utils/seo/siteUrls.js";
import { LENS_LINK_BASE_STYLE } from "../../utils/style/pageStyles.js";

interface LensEntryTarget {
  to: string;
  state?: unknown;
}

interface LensEntryLinkProps {
  lensKey: string;
  text: string;
  theme: Theme;
  /** Muted lead-in shown before the name, e.g. the patent example a lens is taken from. */
  prefix?: string;
  meta?: string | null;
  specs?: readonly string[];
  specsCount?: number;
  hrefForLens?: (lensKey: string) => LensEntryTarget;
  style?: CSSProperties;
  metaStyle?: CSSProperties;
}

export default function LensEntryLink({
  lensKey,
  text,
  theme,
  prefix,
  meta,
  specs,
  specsCount = 2,
  hrefForLens,
  style,
  metaStyle,
}: LensEntryLinkProps) {
  const target = hrefForLens?.(lensKey) ?? { to: canonicalPagePath(`/lens/${lensKey}`) };
  const displayMeta = meta !== undefined ? meta : specs?.slice(0, specsCount).join(", ") || null;

  return (
    <Link to={target.to} state={target.state} style={{ ...LENS_LINK_BASE_STYLE, color: theme.descLinkColor, ...style }}>
      {prefix && <span style={{ color: theme.label, fontSize: "0.68rem", marginRight: "0.5rem" }}>{prefix}</span>}
      {text}
      {displayMeta && (
        <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem", ...metaStyle }}>
          — {displayMeta}
        </span>
      )}
    </Link>
  );
}
