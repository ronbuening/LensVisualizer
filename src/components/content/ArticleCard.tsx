/**
 * ArticleCard — reusable summary card for a single article.
 *
 * Used on both the homepage (limited list) and the articles archive page.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { formatDisplayDate } from "../../utils/content/changelogHelpers.js";
import type { HomepageArticle } from "../../utils/content/homepageContent.js";

interface ArticleCardProps {
  article: HomepageArticle;
  theme: Theme;
}

const TAG_COLORS: Record<string, string> = {
  guide: "#2a7",
  article: "#58c",
  announcement: "#c84",
};

export default function ArticleCard({ article, theme: t }: ArticleCardProps) {
  return (
    <Link
      to={article.linkTo}
      style={{
        display: "block",
        padding: "0.875rem 1rem",
        marginBottom: "0.5rem",
        borderRadius: 6,
        border: `1px solid ${t.panelBorder}`,
        background: t.panelBg,
        textDecoration: "none",
        transition: "border-color 0.2s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
        <span style={{ fontSize: "0.875rem", fontWeight: 600, color: t.descLinkColor }}>{article.title}</span>
        {article.tag && (
          <span
            style={{
              fontSize: "0.6rem",
              padding: "1px 6px",
              borderRadius: 3,
              background: `${TAG_COLORS[article.tag] ?? t.toggleActiveBg}22`,
              color: TAG_COLORS[article.tag] ?? t.toggleActiveText,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {article.tag}
          </span>
        )}
      </div>
      <div style={{ fontSize: "0.7rem", color: t.label, marginBottom: "0.3rem" }}>
        {formatDisplayDate(article.date)}
      </div>
      <div style={{ fontSize: "0.8rem", color: t.muted, lineHeight: 1.5 }}>{article.summary}</div>
    </Link>
  );
}
