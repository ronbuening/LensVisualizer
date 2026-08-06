import type { CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";
import type { PatentPartyRole } from "../../types/catalog.js";

export default function roleChip(t: Theme, role: PatentPartyRole): CSSProperties {
  return {
    display: "inline-block",
    fontSize: "0.6rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    padding: "0.1rem 0.35rem",
    borderRadius: 3,
    border: `1px solid ${role === "assignee" ? t.rayCool : t.rayWarm}`,
    color: t.muted,
    marginLeft: "0.4rem",
    verticalAlign: "middle",
  };
}
