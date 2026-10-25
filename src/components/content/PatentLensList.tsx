import type { CSSProperties } from "react";
import LensEntryLink from "./LensEntryLink.js";
import type { PatentLensRef } from "../../types/catalog.js";
import type { Theme } from "../../types/theme.js";

interface PatentLensListProps {
  lenses: readonly PatentLensRef[];
  theme: Theme;
  style?: CSSProperties;
}

/**
 * The lens links under one patent: each entry leads with the patent example it is taken from, in the example order
 * `aggregatePatentRecords` already gives `lenses`.
 */
export default function PatentLensList({ lenses, theme, style }: PatentLensListProps) {
  return (
    <div style={style}>
      {lenses.map((lens) => (
        <LensEntryLink
          key={lens.key}
          lensKey={lens.key}
          text={lens.name}
          prefix={lens.example?.label}
          specs={lens.specs}
          theme={theme}
          metaStyle={{ fontSize: "0.68rem" }}
        />
      ))}
    </div>
  );
}
