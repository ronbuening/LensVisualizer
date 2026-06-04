import type { Theme } from "../../types/theme.js";
import type { LensMountSpec, MountSvgView } from "../../mount-data/types.js";
import MountSvgFigure from "./MountSvgFigure.js";

interface MountDiagramSetProps {
  spec: LensMountSpec;
  theme: Theme;
}

const VIEWS: Array<{ view: MountSvgView; label: string }> = [
  { view: "camera_side_front_view", label: "Camera Side" },
  { view: "lens_side_rear_view", label: "Lens Side" },
  { view: "axial_register_schematic", label: "Axial Register" },
];

export default function MountDiagramSet({ spec, theme }: MountDiagramSetProps) {
  return (
    <section style={{ margin: "1.5rem 0", borderTop: `1px solid ${theme.panelBorder}`, paddingTop: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, margin: 0 }}>Mount Reference Geometry</h2>
        <span style={{ color: theme.label, fontSize: "0.75rem" }}>
          {spec.mvpStatus.replace("_", " ")} · {spec.mvp.profileModel.selectedMvpProfileId}
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0.75rem",
          marginTop: "0.85rem",
        }}
      >
        {VIEWS.map(({ view, label }) => (
          <figure key={view} style={{ margin: 0 }}>
            <MountSvgFigure spec={spec} view={view} theme={theme} />
            <figcaption style={{ marginTop: "0.4rem", color: theme.muted, fontSize: "0.75rem" }}>{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
