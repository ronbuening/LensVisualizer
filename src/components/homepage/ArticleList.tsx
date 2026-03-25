/**
 * ArticleList — section heading + list of ArticleCards.
 *
 * Shows a "View all articles" link when there are more articles
 * than the displayed slice.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type { HomepageArticle } from "../../utils/homepageContent.js";
import ArticleCard from "./ArticleCard.js";

interface ArticleListProps {
  articles: HomepageArticle[];
  theme: Theme;
  showMoreLink?: boolean;
}

export default function ArticleList({ articles, theme: t, showMoreLink }: ArticleListProps) {
  if (articles.length === 0) return null;

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.125rem",
          fontWeight: 600,
          color: t.body,
          marginBottom: "1rem",
          paddingBottom: "0.25rem",
          borderBottom: `1px solid ${t.panelBorder}`,
        }}
      >
        Articles &amp; Guides
      </h2>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} theme={t} />
      ))}
      {showMoreLink && (
        <Link
          to="/articles"
          style={{
            display: "inline-block",
            marginTop: "0.75rem",
            fontSize: "0.8rem",
            color: t.descLinkColor,
            textDecoration: "none",
          }}
        >
          View all articles →
        </Link>
      )}
    </section>
  );
}
