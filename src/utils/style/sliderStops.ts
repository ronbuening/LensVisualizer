const DEFAULT_ZERO_STOP_STEP_MULTIPLIER = 1.5;

export function snapToStop(rawValue: number, stopValue: number, snapRange: number): number {
  if (!Number.isFinite(rawValue) || !Number.isFinite(stopValue) || !Number.isFinite(snapRange) || snapRange <= 0) {
    return rawValue;
  }
  return Math.abs(rawValue - stopValue) < snapRange ? stopValue : rawValue;
}

export function snapToZeroStop(rawValue: number, step: number): number {
  const snapRange = Number.isFinite(step) && step > 0 ? step * DEFAULT_ZERO_STOP_STEP_MULTIPLIER : 0;
  return snapToStop(rawValue, 0, snapRange);
}
