import { Link } from "react-router";
import type { CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";
import { authorPathForName } from "../../utils/catalog/authorCatalog.js";
import PatentPartyList from "./PatentPartyList.js";

interface InventorLinksProps {
  names: readonly string[];
  theme: Theme;
  currentAuthor?: string;
  linkStyle?: CSSProperties;
  titleForName?: (name: string) => string;
}

export default function InventorLinks({ names, theme, currentAuthor, linkStyle, titleForName }: InventorLinksProps) {
  return (
    <PatentPartyList
      names={names}
      renderName={(name) => {
        const path = name === currentAuthor ? undefined : authorPathForName(name);
        return path ? (
          <Link
            to={path}
            title={titleForName?.(name)}
            style={{ color: theme.descLinkColor, textDecoration: "none", ...linkStyle }}
          >
            {name}
          </Link>
        ) : (
          name
        );
      }}
    />
  );
}
