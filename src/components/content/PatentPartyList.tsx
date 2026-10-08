import { Fragment, type ReactNode } from "react";

interface PatentPartyListProps {
  names: readonly string[];
  renderName: (name: string) => ReactNode;
}

export default function PatentPartyList({ names, renderName }: PatentPartyListProps) {
  // Translators replace text nodes. Keep removable separators and names inside React-owned elements.
  return names.map((name, index) => (
    <Fragment key={`${name}-${index}`}>
      {index > 0 && <span>, </span>}
      <span>{renderName(name)}</span>
    </Fragment>
  ));
}
