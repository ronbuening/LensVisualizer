/** Explicit axial scalar diffraction controls and convergence-qualified output. */
import { useMemo, useState } from "react";
import useImageQualityJob, { type ImageQualityRequest } from "./useImageQualityJob.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { ImageQualityOptions, ImageQualityResult } from "../../../types/imageQuality.js";
import type { ThroughputModel } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import { IMAGE_QUALITY_LIMITS } from "../../../optics/constants.js";

export function ImageQualityOutput({ result, t }: { result: ImageQualityResult; t: Theme }) {
  const psf = result.psf;
  const buckets = Array<string>(32).fill("");
  if (psf) {
    const peak = psf.intensity.reduce((maximum, v) => Math.max(maximum, v), 0);
    psf.intensity.forEach((v, i) => {
      const level = peak > 0 ? Math.round(31 * Math.sqrt(v / peak)) : 0;
      buckets[level] += `M${i % psf.size},${Math.floor(i / psf.size)}h1v1h-1z`;
    });
  }
  const maximum = result.mtf.at(-1)?.frequencyPerMm ?? 1;
  return (
    <section aria-label="Image quality results">
      <p role="status">
        {result.status}: {result.reason}
      </p>
      {result.convergence && (
        <p>
          Pupil difference {(100 * result.convergence.pupilDifference).toFixed(2)}%; window difference{" "}
          {(100 * result.convergence.windowDifference).toFixed(2)}%; sensor-grid difference{" "}
          {(100 * result.convergence.imageSamplingDifference).toFixed(2)}%. Maximum radial phase step{" "}
          {result.convergence.maxOpdStepWaves.toFixed(3)} waves. Limits: 3% for each comparison and 0.25 waves per
          radial step.
        </p>
      )}
      {psf && (
        <figure style={{ margin: 0 }}>
          <svg
            role="img"
            aria-label="Axial scalar PSF"
            viewBox={`0 0 ${psf.size} ${psf.size}`}
            width="100%"
            style={{ maxWidth: 260 }}
          >
            {buckets.map((d, i) => (
              <path
                key={i}
                d={d}
                fill={`rgb(${Math.round((i * 255) / 31)},${Math.round((i * 255) / 31)},${Math.round((i * 255) / 31)})`}
              />
            ))}
          </svg>
          <figcaption>
            {((psf.size - 1) * psf.pixelPitchMm * 1000).toFixed(2)} µm across, centered on axis. Square-root intensity
            display. {result.status !== "converged" && "Provisional PSF."} Base sensor spacing{" "}
            {(psf.pixelPitchMm * 2000).toFixed(3)} µm; refined spacing {(psf.pixelPitchMm * 1000).toFixed(3)} µm.
          </figcaption>
        </figure>
      )}
      {result.status === "converged" && result.mtf.length > 0 ? (
        <svg
          role="img"
          aria-label="Axial modulation transfer function"
          viewBox="0 0 340 210"
          width="100%"
          style={{ maxWidth: 420 }}
        >
          <path d="M40,20V170H320" fill="none" stroke={t.muted} />
          {[0, 0.5, 1].map((v) => (
            <text key={v} x="32" y={173 - 150 * v} textAnchor="end" fill={t.body} fontSize="11">
              {v}
            </text>
          ))}
          {(["horizontal", "vertical"] as const).map((axis, index) => (
            <path
              key={axis}
              d={result.mtf
                .map((p, i) => `${i ? "L" : "M"}${40 + (280 * p.frequencyPerMm) / maximum},${170 - 150 * p[axis]}`)
                .join(" ")}
              fill="none"
              stroke={index ? t.body : t.sliderAccent}
              strokeDasharray={index ? "4 3" : undefined}
            />
          ))}
          <text x="40" y="187" fill={t.body} fontSize="11">
            0
          </text>
          <text x="320" y="187" textAnchor="end" fill={t.body} fontSize="11">
            {maximum.toFixed(1)}
          </text>
          <text x="180" y="205" textAnchor="middle" fill={t.body} fontSize="11">
            Spatial frequency (cycles/mm)
          </text>
          <text x="40" y="12" fill={t.body} fontSize="11">
            Modulation · horizontal solid / vertical dashed
          </text>
        </svg>
      ) : (
        <p>
          {result.status === "undersampled"
            ? "MTF unavailable until all sampling checks pass."
            : "MTF unavailable because the wavefront or PSF could not be calculated."}
        </p>
      )}
    </section>
  );
}

export default function ImageQualityTab({
  preparedState,
  stopSemiDiameterMm,
  movementActive = false,
  t,
}: {
  preparedState: PreparedOpticalState;
  stopSemiDiameterMm: number;
  movementActive?: boolean;
  t: Theme;
}) {
  const [weights, setWeights] = useState([0, 1, 0, 0]);
  const [model, setModel] = useState<ThroughputModel>("ideal");
  const [distance, setDistance] = useState(0);
  const [rings, setRings] = useState(32);
  const [azimuths, setAzimuths] = useState(64);
  const [size, setSize] = useState(41);
  const [pitch, setPitch] = useState(0);
  const options = useMemo<ImageQualityOptions>(
    () => ({
      stopSemiDiameterMm,
      movementActive,
      spectrum: (["R", "G", "B", "V"] as const).map((channel, i) => ({ channel, weight: weights[i] })),
      throughputModel: model,
      objectDistanceMm: distance === 0 ? Infinity : distance,
      radialStrata: rings,
      azimuthalSamples: azimuths,
      imageSize: size,
      pixelPitchMm: pitch === 0 ? undefined : pitch / 1000,
    }),
    [stopSemiDiameterMm, movementActive, weights, model, distance, rings, azimuths, size, pitch],
  );
  const [request, setRequest] = useState<ImageQualityRequest | null>(null);
  const current = request?.state === preparedState && request.options === options;
  const result = useImageQualityJob(current ? request : null);
  const inputStyle = { width: 70, background: t.bg, color: t.body, border: `1px solid ${t.panelBorder}` };
  return (
    <div style={{ color: t.body, fontSize: 12, lineHeight: 1.6 }}>
      <p>
        Axial scalar PSF and MTF at the current sensor plane. Centered sequential refractive lenses in air only. Focus
        controls change the lens; source distance is set separately here.
      </p>
      <fieldset style={{ border: `1px solid ${t.panelBorder}` }}>
        <legend>Relative incident spectral intensity</legend>
        {["C · 656.27 nm", "d · 587.56 nm", "F · 486.13 nm", "g · 435.83 nm"].map((label, i) => (
          <label key={label} style={{ display: "block" }}>
            {label}{" "}
            <input
              aria-label={`${label} weight`}
              type="number"
              min="0"
              step="0.1"
              value={weights[i]}
              style={inputStyle}
              onChange={(e) => setWeights(weights.map((v, j) => (i === j ? Number(e.target.value) : v)))}
            />
          </label>
        ))}
        <p>Incoherent intensity sum. These weights do not assume an illuminant or sensor response.</p>
      </fieldset>
      <label style={{ display: "block" }}>
        Throughput model{" "}
        <select
          aria-label="Throughput model"
          value={model}
          onChange={(e) => setModel(e.target.value as ThroughputModel)}
        >
          <option value="ideal">Ideal lossless</option>
          <option value="uncoated">Illustrative uncoated dielectric</option>
          <option value="authored">Sourced transmission</option>
        </select>
      </label>
      <p>
        {model === "authored"
          ? "Missing wavelength, angle or material evidence makes the result unavailable."
          : model === "uncoated"
            ? "Fresnel interfaces and known bulk absorption; unknown bulk absorption is assumed zero. This is not a production coating model."
            : "Ideal interfaces and materials; no transmission loss."}
      </p>
      <label style={{ display: "block" }}>
        Source distance from first vertex (mm; 0 = infinity){" "}
        <input
          aria-label="Source distance"
          type="number"
          min="0"
          value={distance}
          style={inputStyle}
          onChange={(e) => setDistance(Number(e.target.value))}
        />
      </label>
      <label style={{ display: "block" }}>
        Pupil radial samples{" "}
        <select aria-label="Pupil radial samples" value={rings} onChange={(e) => setRings(Number(e.target.value))}>
          {[16, 32, 64, 128, 256, IMAGE_QUALITY_LIMITS.radialStrata].map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </label>
      <label style={{ display: "block" }}>
        Pupil angular samples{" "}
        <select
          aria-label="Pupil angular samples"
          value={azimuths}
          onChange={(e) => setAzimuths(Number(e.target.value))}
        >
          {[32, 64, 128, IMAGE_QUALITY_LIMITS.azimuthalSamples].map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </label>
      <label style={{ display: "block" }}>
        Base window samples{" "}
        <select aria-label="Base window samples" value={size} onChange={(e) => setSize(Number(e.target.value))}>
          {[17, 33, 41, 49, 65, 97, IMAGE_QUALITY_LIMITS.imageSize].map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </label>
      <label style={{ display: "block" }}>
        Sensor spacing (µm; 0 = automatic){" "}
        <input
          aria-label="Sensor spacing"
          type="number"
          min="0"
          step="0.1"
          value={pitch}
          style={inputStyle}
          onChange={(e) => setPitch(Number(e.target.value))}
        />
      </label>
      <p>
        Radial and angular samples refine the pupil. More window samples enlarge the image area at the chosen spacing.
        Highest settings can take several minutes; you can cancel a running calculation.
      </p>
      <button type="button" disabled={current && !result} onClick={() => setRequest({ state: preparedState, options })}>
        {current && !result ? "Computing…" : "Calculate image quality"}
      </button>
      {current && !result && (
        <button type="button" onClick={() => setRequest(null)}>
          Cancel calculation
        </button>
      )}
      {result ? (
        <ImageQualityOutput result={result} t={t} />
      ) : (
        <p>Calculate after choosing the lens state and sampling settings. Larger settings take longer.</p>
      )}
    </div>
  );
}
