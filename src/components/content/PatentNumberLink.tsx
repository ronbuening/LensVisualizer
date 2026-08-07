/**
 * PatentNumberLink — shared outbound link for catalog patent numbers.
 *
 * Author and relationship records can include local fallback labels when a
 * patent number is not yet known. Those labels remain plain text instead of
 * opening an invalid Espacenet search.
 */

import type { CSSProperties } from "react";
import { espacenetPatentUrl, isPatentPublicationNumber } from "../../utils/catalog/patentRecords.js";

interface PatentNumberLinkProps {
  patentNumber: string;
  color: string;
  linkStyle?: CSSProperties;
}

export default function PatentNumberLink({ patentNumber, color, linkStyle }: PatentNumberLinkProps) {
  if (!isPatentPublicationNumber(patentNumber)) return <>{patentNumber}</>;

  return (
    <a
      href={espacenetPatentUrl(patentNumber)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${patentNumber} in Espacenet (opens in a new tab)`}
      title={`View ${patentNumber} in Espacenet`}
      style={{ color, textDecoration: "none", ...linkStyle }}
    >
      {patentNumber}
      <span aria-hidden="true" style={{ fontSize: "0.72rem", marginLeft: "0.25rem" }}>
        ↗
      </span>
    </a>
  );
}
