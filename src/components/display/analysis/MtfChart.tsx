/** Accessible MTF frequency/field plots; unavailable fields break paths. */
import type { MtfResult } from "../../../types/mtf.js";
import type { Theme } from "../../../types/theme.js";
import { SvgChartFrame } from "./charts/SvgChartFrame.js";
import { createPlotArea, linearScale } from "./charts/chartMath.js";

export default function MtfChart({ result, view, t }: { result: MtfResult; view: "frequency" | "field"; t: Theme }) {
  const area = createPlotArea(380, 245);
  const maxX =
    view === "frequency"
      ? Math.max(1, ...result.frequenciesPerMm)
      : Math.max(0.01, ...result.fields.map((f) => Math.abs(f.imageHeightMm ?? 0)));
  const xScale = linearScale(0, maxX, area.margin.left, area.margin.left + area.plotW);
  const yScale = linearScale(0, 1, area.margin.top + area.plotH, area.margin.top);
  const colors = [t.sliderAccent, t.rayOffWarm, t.value];
  const path = (points: Array<{ x: number; y: number } | null>) => {
    let gap = true;
    return points
      .map((p) => {
        if (!p) {
          gap = true;
          return "";
        }
        const segment = `${gap ? "M" : "L"}${xScale(p.x)},${yScale(p.y)}`;
        gap = false;
        return segment;
      })
      .join(" ");
  };
  const selectedFields = result.fields.filter((f) => [0, 0.5, 1].includes(f.fieldFraction));
  const curves =
    view === "frequency"
      ? selectedFields.map((field, i) => ({
          label: `${Math.round(field.fieldFraction * 100)}% field`,
          color: colors[i % 3],
          sagittal: result.frequenciesPerMm.map((x, j) =>
            field.status === "unavailable" ? null : { x, y: field.sagittal[j] },
          ),
          tangential: result.frequenciesPerMm.map((x, j) =>
            field.status === "unavailable" ? null : { x, y: field.tangential[j] },
          ),
        }))
      : [10, 20, 40].map((frequency, i) => {
          const j = result.frequenciesPerMm.indexOf(frequency);
          const points = (axis: "sagittal" | "tangential") =>
            result.fields.map((f) =>
              f.status === "unavailable" || f.imageHeightMm === null || j < 0
                ? null
                : { x: Math.abs(f.imageHeightMm), y: f[axis][j] },
            );
          return {
            label: `${frequency} lp/mm`,
            color: colors[i],
            sagittal: points("sagittal"),
            tangential: points("tangential"),
          };
        });
  return (
    <figure
      style={{ margin: "12px 0" }}
      aria-label={`Simulated MTF versus ${view === "frequency" ? "spatial frequency" : "image height"}`}
    >
      <SvgChartFrame
        area={area}
        t={t}
        xTicks={[0, maxX / 2, maxX]}
        yTicks={[0, 0.25, 0.5, 0.75, 1]}
        xScale={xScale}
        yScale={yScale}
        xTickLabel={(v) => v.toFixed(1)}
        yTickLabel={(v) => v.toFixed(2)}
        xLabel={view === "frequency" ? "Spatial frequency (lp/mm)" : "Image height (mm)"}
        yLabel="MTF"
      >
        {curves.map((curve) => (
          <g key={curve.label}>
            <path d={path(curve.sagittal)} fill="none" stroke={curve.color} strokeWidth={1.6} />
            <path d={path(curve.tangential)} fill="none" stroke={curve.color} strokeWidth={1.6} strokeDasharray="5,3" />
          </g>
        ))}
      </SvgChartFrame>
      <figcaption style={{ color: t.muted, fontSize: 11 }}>
        {curves.map((curve) => (
          <span key={curve.label} style={{ color: curve.color, marginRight: 12 }}>
            {curve.label}
          </span>
        ))}
        <div>Solid: sagittal · Dashed: tangential. Gaps indicate unavailable results.</div>
      </figcaption>
    </figure>
  );
}
