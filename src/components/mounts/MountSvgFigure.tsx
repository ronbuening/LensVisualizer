import type { Theme } from "../../types/theme.js";
import { buildMountSvgModel, MOUNT_SVG_STYLE_TEXT, type SvgPrimitive } from "../../mount-data/svgRenderer.js";
import type { LensMountSpec, MountSvgView } from "../../mount-data/types.js";

interface MountSvgFigureProps {
  spec: LensMountSpec;
  view: MountSvgView;
  theme: Theme;
}

function primitiveKey(primitive: SvgPrimitive, index: number): string {
  if ("label" in primitive && primitive.label)
    return `${primitive.kind}-${primitive.layer}-${primitive.label}-${index}`;
  return `${primitive.kind}-${primitive.layer}-${index}`;
}

function renderPrimitive(primitive: SvgPrimitive, index: number) {
  const key = primitiveKey(primitive, index);
  const dataLabel = "label" in primitive && primitive.label ? { "data-label": primitive.label } : {};
  if (primitive.kind === "circle") {
    return (
      <circle
        key={key}
        className={primitive.className}
        cx={primitive.cx}
        cy={primitive.cy}
        r={primitive.r}
        {...dataLabel}
      />
    );
  }
  if (primitive.kind === "line") {
    return (
      <line
        key={key}
        className={primitive.className}
        x1={primitive.x1}
        y1={primitive.y1}
        x2={primitive.x2}
        y2={primitive.y2}
        {...dataLabel}
      />
    );
  }
  if (primitive.kind === "rect") {
    return (
      <rect
        key={key}
        className={primitive.className}
        x={primitive.x}
        y={primitive.y}
        width={primitive.width}
        height={primitive.height}
        {...dataLabel}
      />
    );
  }
  if (primitive.kind === "path") {
    return <path key={key} className={primitive.className} d={primitive.d} {...dataLabel} />;
  }
  return (
    <text key={key} className={primitive.className} x={primitive.x} y={primitive.y}>
      {primitive.text}
    </text>
  );
}

export default function MountSvgFigure({ spec, view, theme }: MountSvgFigureProps) {
  const model = buildMountSvgModel(spec, view);
  const titleId = `${spec.mountId}-${view}-title`;
  const descId = `${spec.mountId}-${view}-desc`;

  return (
    <svg
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      viewBox={model.viewBox}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        backgroundColor: theme.panelBg,
        border: `1px solid ${theme.panelBorder}`,
        borderRadius: 6,
      }}
    >
      <title id={titleId}>{model.title}</title>
      <desc id={descId}>{model.desc}</desc>
      <metadata>{JSON.stringify(model.metadata)}</metadata>
      <style>{MOUNT_SVG_STYLE_TEXT}</style>
      {model.primitives.map(renderPrimitive)}
    </svg>
  );
}
