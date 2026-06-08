/**
 * ChangelogBox — compact section for recent site updates.
 *
 * Entries are manually curated in src/utils/content/changelogData.ts.
 * Grouped by date (newest first) with color-coded type badges.
 * Lens names may link to their catalog pages when entries include link data.
 */

import type { Theme } from "../../types/theme.js";
import ChangelogList from "./ChangelogList.js";

interface ChangelogBoxProps {
  theme: Theme;
}

export default function ChangelogBox({ theme: t }: ChangelogBoxProps) {
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
        Changelog
      </h2>

      <ChangelogList theme={t} />
    </section>
  );
}
