import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { authorPathForName } from "../../utils/catalog/authorCatalog.js";
import PatentPartyList from "./PatentPartyList.js";

interface InventorLinksProps {
  names: readonly string[];
  theme: Theme;
  currentAuthor?: string;
}

export default function InventorLinks({ names, theme, currentAuthor }: InventorLinksProps) {
  return (
    <PatentPartyList
      names={names}
      renderName={(name) => {
        const path = name === currentAuthor ? undefined : authorPathForName(name);
        return path ? (
          <Link to={path} style={{ color: theme.descLinkColor, textDecoration: "none" }}>
            {name}
          </Link>
        ) : (
          name
        );
      }}
    />
  );
}
