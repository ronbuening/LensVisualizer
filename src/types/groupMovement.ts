export const GROUP_MOVEMENT_MODES = ["focus", "zoom", "combined"] as const;

export type GroupMovementMode = (typeof GROUP_MOVEMENT_MODES)[number];

export function isGroupMovementMode(value: unknown): value is GroupMovementMode {
  return typeof value === "string" && (GROUP_MOVEMENT_MODES as readonly string[]).includes(value);
}
