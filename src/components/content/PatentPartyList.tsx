import { Fragment, type ReactNode } from "react";

interface PatentPartyListProps {
  names: readonly string[];
  renderName: (name: string) => ReactNode;
}

export default function PatentPartyList({ names, renderName }: PatentPartyListProps) {
  // Translators replace text nodes. Separators and plain-text names get their own elements so the list can change
  // without React touching a detached Text node; a rendered link already owns its text, so it needs no wrapper
  // (patent and author indexes render thousands of these).
  return names.map((name, index) => {
    const rendered = renderName(name);
    return (
      <Fragment key={`${name}-${index}`}>
        {index > 0 && <span>, </span>}
        {typeof rendered === "string" || typeof rendered === "number" ? <span>{rendered}</span> : rendered}
      </Fragment>
    );
  });
}
