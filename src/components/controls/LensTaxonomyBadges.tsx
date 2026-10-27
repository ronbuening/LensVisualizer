import { useState, type CSSProperties } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import {
  imageFormatMetadata,
  lensMountMetadata,
  type ImageFormatId,
  type LensMountId,
} from "../../utils/catalog/lensTaxonomy.js";
import { canonicalPagePath } from "../../utils/seo/siteUrls.js";

interface LensTaxonomyBadgesProps {
  lensMounts?: readonly LensMountId[];
  imageFormat?: ImageFormatId;
  t: Theme;
  compact: boolean;
}

export default function LensTaxonomyBadges({ lensMounts = [], imageFormat, t, compact }: LensTaxonomyBadgesProps) {
  const [expanded, setExpanded] = useState(false);
  // Builder drafts reach here unvalidated, so an id outside the taxonomy gets no badge rather than a dead link.
  const mounts = lensMounts.flatMap((id) => lensMountMetadata(id) ?? []);
  // Only authored formats belong here; the optical analysis resolver supplies a default.
  const format = imageFormatMetadata(imageFormat);
  if (mounts.length === 0 && !format) return null;

  const pillStyle: CSSProperties = {
    color: t.descLinkColor,
    border: `1px solid ${t.descLinkColor}40`,
    borderRadius: 10,
    padding: compact ? "1px 6px" : "1px 7px",
    fontSize: compact ? 10 : 11,
    fontFamily: "inherit",
    lineHeight: 1.4,
    textDecoration: "none",
    maxWidth: "100%",
    overflowWrap: "anywhere",
  };

  return (
    <div
      role="group"
      aria-label="Mount and image format"
      style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 4, maxWidth: "100%" }}
    >
      {(expanded ? mounts : mounts.slice(0, 2)).map((mount) => (
        <Link
          key={mount.id}
          to={canonicalPagePath(`/mounts/${mount.id}`)}
          aria-label={`Mount: ${mount.label}`}
          style={pillStyle}
        >
          {mount.label}
        </Link>
      ))}
      {mounts.length > 2 && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          style={{ ...pillStyle, background: "none", cursor: "pointer" }}
        >
          {expanded ? "Show fewer" : `+${mounts.length - 2} more`}
        </button>
      )}
      {format && (
        <Link
          to={canonicalPagePath(`/formats/${format.id}`)}
          aria-label={`Image format: ${format.label}`}
          style={pillStyle}
        >
          {format.label}
        </Link>
      )}
    </div>
  );
}
