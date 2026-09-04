/** Medium ownership follows encounter direction; reflection keeps the incident material. */
import type { SurfaceData } from "../../types/optics.js";
import type { MediumEncounterHit } from "./types.js";
import { dot } from "../math/vector.js";

export type { MediumEncounterHit } from "./types.js";

export function mediumAfterEncounter(
  surfaces: readonly Pick<SurfaceData, "nd" | "elemId" | "interaction">[],
  hit: MediumEncounterHit,
  previousMediumIndex: number | null,
): number | null {
  const index = hit.surfaceIndex ?? hit.surfaceIdx ?? -1;
  const surface = surfaces[index];
  if (!surface) return previousMediumIndex;
  if (surface.interaction?.type === "reflect") return previousMediumIndex;
  const rear = hit.normal && hit.incidentDirection && dot(hit.normal, hit.incidentDirection) < 0;
  const next = rear ? index - 1 : index;
  return next < 0 || surfaces[next].nd === 1 ? null : next;
}
