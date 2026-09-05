/** Equal-position interpolation; callers own clamping and validation policy. */
export function uniformInterpolationSegment(count: number, t: number) {
  const position = t * (count - 1);
  const index = Math.min(Math.floor(position), count - 2);
  return { index, fraction: position - index };
}
export function interpolateUniformSchedule(values: readonly number[], t: number): number {
  if (values.length === 1) return values[0];
  const { index, fraction } = uniformInterpolationSegment(values.length, t);
  return values[index] + (values[index + 1] - values[index]) * fraction;
}
