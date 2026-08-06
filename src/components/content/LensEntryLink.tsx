import { Link } from "react-router";
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
  meta?: string | null;
  specs?: readonly string[];
  specsCount?: number;
  hrefForLens?: (lensKey: string) => LensEntryTarget;
}

export default function LensEntryLink({
  lensKey,
  text,
  theme,
  meta,
  specs,
  specsCount = 2,
  hrefForLens,
}: LensEntryLinkProps) {
  const target = hrefForLens?.(lensKey) ?? { to: canonicalPagePath(`/lens/${lensKey}`) };
  const displayMeta = meta !== undefined ? meta : specs?.slice(0, specsCount).join(", ") || null;

  return (
    <Link to={target.to} state={target.state} style={{ ...LENS_LINK_BASE_STYLE, color: theme.descLinkColor }}>
      {text}
      {displayMeta && (
        <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>— {displayMeta}</span>
      )}
    </Link>
  );
}
