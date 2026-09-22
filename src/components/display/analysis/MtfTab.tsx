/** MTF stays outside render-time optics; requests execute only in the mounted tab's worker. */
import { useEffect, useMemo, useState } from "react";
import type { RuntimeLens } from "../../../types/optics.js";
import type { MtfMethod, MtfOptions, MtfResult, MtfSpectrum } from "../../../types/mtf.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { Theme } from "../../../types/theme.js";
import { assessMtfSupport } from "../../../optics/mtf.js";
import { MtfWorkerClient } from "../../hooks/mtfWorkerClient.js";
import MtfChart from "./MtfChart.js";

interface MtfTabProps {
  L: RuntimeLens;
  t: Theme;
  preparedState: PreparedOpticalState;
  currentEPSD: number;
  currentPhysStopSD: number;
  movementActive?: boolean;
}
export default function MtfTab({
  L,
  t,
  preparedState,
  currentEPSD,
  currentPhysStopSD,
  movementActive = false,
}: MtfTabProps) {
  const [method, setMethod] = useState<MtfMethod>("geometric");
  const [spectrum, setSpectrum] = useState<MtfSpectrum>("reference");
  const [view, setView] = useState<"frequency" | "field">("frequency");
  const [maxGridSize, setMaxGridSize] = useState<128 | 256>(128);
  const [result, setResult] = useState<MtfResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const options: MtfOptions = useMemo(
    () => ({
      method,
      spectrum,
      maxGridSize,
      pupilSemiDiameterMm: currentEPSD,
      stopSemiDiameterMm: currentPhysStopSD,
      movementActive,
    }),
    [method, spectrum, maxGridSize, currentEPSD, currentPhysStopSD, movementActive],
  );
  const support = useMemo(() => assessMtfSupport(preparedState, options), [preparedState, options]);
  const client = useMemo(
    () =>
      new MtfWorkerClient(
        L.data,
        () => new Worker(new URL("../../hooks/mtf.worker.ts", import.meta.url), { type: "module" }),
      ),
    [L],
  );
  useEffect(() => () => client.dispose(), [client]);
  useEffect(() => {
    let current = true;
    setResult(null);
    setError(null);
    if (!support.available) return;
    const timer = setTimeout(() => {
      void client
        .compute({
          focusT: preparedState.focusT,
          zoomT: preparedState.zoomT,
          aberrationT: preparedState.aberrationT,
          options,
        })
        .then((value) => {
          if (current) setResult(value);
        })
        .catch((cause: Error) => {
          if (current && cause.name !== "AbortError") setError(cause.message);
        });
    }, 150);
    return () => {
      current = false;
      clearTimeout(timer);
      client.cancel();
    };
  }, [client, preparedState, options, support.available]);
  const selectStyle = { background: t.panelBg, color: t.value, border: `1px solid ${t.panelBorder}`, padding: 5 };
  return (
    <section style={{ color: t.value, fontSize: 12 }} aria-label="Simulated MTF">
      <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>Simulated MTF</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <label>
          Method{" "}
          <select
            aria-label="MTF method"
            style={selectStyle}
            value={method}
            onChange={(e) => setMethod(e.target.value as MtfMethod)}
          >
            <option value="geometric">Geometric</option>
            <option value="diffraction" disabled>
              Diffraction (coming later)
            </option>
          </select>
        </label>
        <label>
          Spectrum{" "}
          <select
            aria-label="MTF spectrum"
            style={selectStyle}
            value={spectrum}
            onChange={(e) => setSpectrum(e.target.value as MtfSpectrum)}
          >
            <option value="reference">Reference wavelength</option>
            <option value="cdf" disabled>
              C/d/F (coming later)
            </option>
          </select>
        </label>
        <label>
          Chart{" "}
          <select
            aria-label="MTF chart"
            style={selectStyle}
            value={view}
            onChange={(e) => setView(e.target.value as "frequency" | "field")}
          >
            <option value="frequency">Spatial frequency</option>
            <option value="field">Image height</option>
          </select>
        </label>
        <label>
          Sampling{" "}
          <select
            aria-label="MTF sampling"
            style={selectStyle}
            value={maxGridSize}
            onChange={(e) => setMaxGridSize(Number(e.target.value) as 128 | 256)}
          >
            <option value={128}>Standard</option>
            <option value={256}>Refine</option>
          </select>
        </label>
      </div>
      <p style={{ color: t.muted }}>
        {support.referenceWavelengthNm.toFixed(1)} nm · Physical stop radius {currentPhysStopSD.toFixed(2)} mm · Zoom{" "}
        {(preparedState.zoomT * 100).toFixed(0)}% · One fixed image plane
      </p>
      {method === "geometric" && (
        <p>Geometric MTF excludes diffraction. It can overestimate contrast near the diffraction limit.</p>
      )}
      {!support.available ? (
        <p role="status">{support.message}</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : !result ? (
        <p role="status">Calculating MTF in the background…</p>
      ) : (
        <>
          <MtfChart result={result} view={view} t={t} />
          <ul>
            {result.fields.map((f) => (
              <li key={f.fieldFraction}>
                {Math.round(f.fieldFraction * 100)}% field
                {f.imageHeightMm !== null ? ` (${Math.abs(f.imageHeightMm).toFixed(2)} mm)` : ""}: {f.message}
                {f.gridSize > 0 ? ` Grid ${f.gridSize} × ${f.gridSize}; ${f.validRays} transmitted rays.` : ""}
              </li>
            ))}
          </ul>
        </>
      )}
      <details>
        <summary>Model assumptions</summary>
        <p>{support.message}</p>
        <ul>
          {support.limitations.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <p>Field percentages refer to the modeled field angle, not necessarily a sensor corner.</p>
      </details>
    </section>
  );
}
