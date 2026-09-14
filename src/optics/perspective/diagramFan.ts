/** Scene-locked pupil-fan adapter shared by physical diagram ray families. */

import type { ChromaticChannel } from "../../types/optics.js";
import type { Vec3 } from "../types.js";
import { sampleSceneLockedFields, type FieldSample, type PerspectiveFieldStatus } from "./fieldSampling.js";
import { perspectiveTraceToDiagram, perspectiveVectorLeadPoint, type PerspectiveDiagramTrace } from "./diagramTrace.js";
import type { PerspectiveTraceContext } from "./trace.js";

export interface PerspectiveDiagramFanSample {
  fraction: number;
  status: Extract<PerspectiveFieldStatus, "usable" | "clipped" | "missed-sensor">;
  diagramTrace: PerspectiveDiagramTrace;
}

export interface PerspectiveDiagramFan {
  field: FieldSample;
  samples: PerspectiveDiagramFanSample[];
}

export interface TracePerspectiveDiagramFanParams {
  context: PerspectiveTraceContext;
  sceneDirectionCamera: Vec3;
  pupilSemiDiameterMm: number;
  stopSemiDiameterMm: number;
  fractions: readonly number[];
  channel?: ChromaticChannel;
  leadDistanceMm?: number;
}

/** Solve the moved-stop chief ray, then trace an ordered meridional pupil fan around it. */
export function tracePerspectiveDiagramFan({
  context,
  sceneDirectionCamera,
  pupilSemiDiameterMm,
  stopSemiDiameterMm,
  fractions,
  channel,
  leadDistanceMm = context.state.lens.runtime.rayLead,
}: TracePerspectiveDiagramFanParams): PerspectiveDiagramFan | null {
  const field = sampleSceneLockedFields(context, [sceneDirectionCamera], {
    pupilBundle: {
      kind: "meridional",
      pupilSemiDiameterMm,
      stopSemiDiameterMm,
      fractions,
      channel,
    },
  })[0];
  if (!field?.pupilBundle || field.pupilBundle.kind !== "meridional") return null;

  return {
    field,
    samples: field.pupilBundle.samples.map((sample, index) => ({
      fraction: fractions[index] ?? sample.pupilUv.v,
      status: sample.status,
      diagramTrace: perspectiveTraceToDiagram(sample.trace, {
        leadPoint: perspectiveVectorLeadPoint(sample.trace, leadDistanceMm),
      }),
    })),
  };
}

/** Camera-frame meridional direction for the existing positive image-side field convention. */
export function cameraDirectionForDiagramField(fieldAngleDeg: number): Vec3 {
  const theta = (fieldAngleDeg * Math.PI) / 180;
  return [0, -Math.sin(theta), Math.cos(theta)];
}
