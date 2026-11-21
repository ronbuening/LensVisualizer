/**
 * Shared article dateline for cards, series landings, and article pages.
 * Date selection stays in the pure display helper; each text run owns its element.
 */

import type { CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";
import { articleUpdatedOn, formatDisplayDate } from "../../utils/content/changelogHelpers.js";

interface ArticleDatelineProps {
  publishedOn: string;
  lastModified?: string;
  theme: Theme;
  style?: CSSProperties;
}

export default function ArticleDateline({ publishedOn, lastModified, theme: t, style }: ArticleDatelineProps) {
  const updatedOn = articleUpdatedOn(publishedOn, lastModified);

  return (
    <div style={{ fontSize: "0.7rem", color: t.label, ...style }}>
      <time dateTime={publishedOn}>{formatDisplayDate(publishedOn)}</time>
      {updatedOn && (
        <span>
          <span>{" (Updated: "}</span>
          <time dateTime={updatedOn}>{formatDisplayDate(updatedOn)}</time>
          <span>{")"}</span>
        </span>
      )}
    </div>
  );
}
