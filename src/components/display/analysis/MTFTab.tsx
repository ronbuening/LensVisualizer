/**
 * MTFTab — Analysis drawer tab content for the diffraction-limited MTF.
 *
 * Computes per-channel Airy MTF curves at the current working F-number.
 * For catadioptric lenses with a central obstruction the curves include
 * the annular-pupil mid-frequency suppression. The curve is the *upper
 * bound* on the lens's real MTF — aberrations only reduce it.
 */

import { useMemo } from "react";
import { analysisJobs } from "../../../optics/analysisJobs.js";
import { probe } from "../../../utils/perfProbe.js";
import MTFChart from "./MTFChart.js";
import { AnalysisMetricRow } from "./analysisUi.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";

interface MTFTabProps {
  L: RuntimeLens;
  t: Theme;
  fNumber: number;
}

export default function MTFTab({ L, t, fNumber }: MTFTabProps) {
  const data = useMemo(() => probe("computeMTFCurves", () => analysisJobs.computeMTFCurves(L, fNumber)), [L, fNumber]);

  if (!data) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: "8px 0", transition: "color 0.3s" }}>
        Unable to compute MTF for this lens state.
      </div>
    );
  }

  /* MTF50 in the green channel — the canonical "MTF at 50% modulation"
   * cutoff frequency. Approximated by interpolating into the green curve's
   * samples. */
  const greenCurve = data.curves.find((c) => c.channel === "green");
  const mtf50Cycles = (() => {
    if (!greenCurve) return null;
    for (let i = 1; i < greenCurve.samples.length; i++) {
      const [, prevMtf] = greenCurve.samples[i - 1];
      const [, curMtf] = greenCurve.samples[i];
      if (prevMtf >= 0.5 && curMtf < 0.5) {
        const [prevF] = greenCurve.samples[i - 1];
        const [curF] = greenCurve.samples[i];
        const t01 = (prevMtf - 0.5) / (prevMtf - curMtf);
        return prevF + t01 * (curF - prevF);
      }
    }
    return null;
  })();

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>
          Diffraction-limited MTF{data.obstructionRatio > 0 ? " (annular pupil)" : ""}
        </span>
      </div>
      <MTFChart data={data} t={t} />
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          fontSize: 9.5,
          marginTop: 10,
        }}
      >
        <AnalysisMetricRow label="F-number" value={`f/${fNumber.toFixed(1)}`} t={t} />
        {mtf50Cycles !== null && (
          <AnalysisMetricRow label="MTF50 (g)" value={`${mtf50Cycles.toFixed(0)} cyc/mm`} t={t} />
        )}
        {data.obstructionRatio > 0 && (
          <AnalysisMetricRow label="Obstruction" value={`${(data.obstructionRatio * 100).toFixed(0)}%`} t={t} />
        )}
      </div>
    </div>
  );
}
