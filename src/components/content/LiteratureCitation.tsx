/**
 * LiteratureCitation — the source line of a literature reconstruction: the published work that prints its
 * prescription, with the title in italics and linked to the cited scan when the citation records one.
 */

import type { CSSProperties } from "react";
import type { LiteratureSource } from "../../types/optics.js";
import { literatureCitationParts } from "../../utils/catalog/lensPatentMetadata.js";

interface LiteratureCitationProps {
  literature: LiteratureSource;
  color: string;
  linkStyle?: CSSProperties;
}

export default function LiteratureCitation({ literature, color, linkStyle }: LiteratureCitationProps) {
  const { lead, title, tail } = literatureCitationParts(literature);
  return (
    <span>
      <span>{lead}</span>
      {literature.url ? (
        <a
          href={literature.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title}, scan of the cited page (opens in a new tab)`}
          title="View the cited page"
          style={{ color, textDecoration: "none", ...linkStyle }}
        >
          <cite>{title}</cite>
          <span aria-hidden="true" style={{ fontSize: "0.72rem", marginLeft: "0.25rem" }}>
            ↗
          </span>
        </a>
      ) : (
        <cite>{title}</cite>
      )}
      <span>{tail}</span>
    </span>
  );
}
