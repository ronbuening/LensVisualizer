import { Fragment, type ReactNode } from "react";

interface PatentPartyListProps {
  names: readonly string[];
  renderName: (name: string) => ReactNode;
}

export default function PatentPartyList({ names, renderName }: PatentPartyListProps) {
  return names.map((name, index) => (
    <Fragment key={`${name}-${index}`}>
      {index > 0 && ", "}
      {renderName(name)}
    </Fragment>
  ));
}
