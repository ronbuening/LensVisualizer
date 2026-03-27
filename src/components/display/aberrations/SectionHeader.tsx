import CollapseButton from "../../controls/CollapseButton.js";
import HelpTooltipButton from "../../controls/HelpTooltipButton.js";
import type { Theme } from "../../../types/theme.js";

interface SectionHeaderProps {
  title: string;
  helpLabel: string;
  helpText: string;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
}

export default function SectionHeader({
  title,
  helpLabel,
  helpText,
  expanded,
  onToggle,
  theme,
}: SectionHeaderProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 10.5, color: theme.muted, transition: "color 0.3s" }}>{title}</span>
      <HelpTooltipButton theme={theme} label={helpLabel} text={helpText} />
      <CollapseButton expanded={expanded} onToggle={onToggle} theme={theme} style={{ marginLeft: "auto" }} />
    </div>
  );
}
