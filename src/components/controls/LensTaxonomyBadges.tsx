import { useState, type CSSProperties } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import {
  IMAGE_FORMAT_BY_ID,
  LENS_MOUNT_BY_ID,
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
  // Only authored formats belong here; the optical analysis resolver supplies a default.
  const format = imageFormat ? IMAGE_FORMAT_BY_ID[imageFormat] : undefined;
  if (lensMounts.length === 0 && !format) return null;

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
      {(expanded ? lensMounts : lensMounts.slice(0, 2)).map((id) => (
        <Link
          key={id}
          to={canonicalPagePath(`/mounts/${id}`)}
          aria-label={`Mount: ${LENS_MOUNT_BY_ID[id].label}`}
          style={pillStyle}
        >
          {LENS_MOUNT_BY_ID[id].label}
        </Link>
      ))}
      {lensMounts.length > 2 && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          style={{ ...pillStyle, background: "none", cursor: "pointer" }}
        >
          {expanded ? "Show fewer" : `+${lensMounts.length - 2} more`}
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
