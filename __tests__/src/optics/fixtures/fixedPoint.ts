/**
 * Decimal fixed-point arithmetic on BigInt — the reference arithmetic behind the high-precision
 * fixtures in this folder.
 *
 * A value is a BigInt counting units of 10^-digits. Every operation truncates toward zero, so one
 * operation is wrong by less than one unit. A float64 enters through its bit pattern as the exact
 * rational it represents, which is what lets a reference be computed for the same inputs the engine
 * receives instead of for their decimal spellings.
 *
 * Dependency-free, and free of engine imports, so a value computed on it stands outside the engine.
 */

/** Fixed-point operations at one precision. */
export interface FixedPoint {
  /** Decimals carried by every value. */
  readonly digits: number;
  /** The value 1. */
  readonly one: bigint;
  /** Exact value of a finite float64, truncated below 10^-digits. */
  of(x: number): bigint;
  /** a * x, with the finite float64 x taken exactly. */
  times(a: bigint, x: number): bigint;
  /** a / x, with the finite non-zero float64 x taken exactly. */
  over(a: bigint, x: number): bigint;
  /** a * b. */
  mul(a: bigint, b: bigint): bigint;
  /** a / b, for non-zero b. */
  div(a: bigint, b: bigint): bigint;
  /** Square root of a non-negative value. */
  sqrt(a: bigint): bigint;
  /** a rounded half away from zero to the given decimals, kept at full scale. */
  round(a: bigint, decimals: number): bigint;
  /** Plain decimal text of a, rounded to the given decimals, trailing zeros trimmed. */
  toDecimal(a: bigint, decimals: number): string;
}

const FLOAT64_VIEW = new DataView(new ArrayBuffer(8));

/**
 * Split a float64 into the integers of its exact value, mantissa * 2^exponent.
 *
 * @param x - finite float64
 * @returns signed integer mantissa and binary exponent
 */
function decomposeFloat64(x: number): { mantissa: bigint; exponent: number } {
  if (!Number.isFinite(x)) throw new RangeError(`not a finite float64: ${x}`);
  FLOAT64_VIEW.setFloat64(0, x);
  const bits = FLOAT64_VIEW.getBigUint64(0);
  const biased = Number((bits >> 52n) & 0x7ffn);
  const fraction = bits & ((1n << 52n) - 1n);
  // Subnormals have no implicit leading bit and share the smallest normal exponent.
  const magnitude = biased === 0 ? fraction : fraction | (1n << 52n);
  return { mantissa: bits >> 63n ? -magnitude : magnitude, exponent: (biased === 0 ? 1 : biased) - 1075 };
}

/**
 * Floor of the square root of a non-negative integer, by Newton's iteration from above.
 *
 * @param n - non-negative integer
 * @returns the largest integer whose square does not exceed n
 */
function integerSqrt(n: bigint): bigint {
  if (n < 0n) throw new RangeError("square root of a negative value");
  if (n < 2n) return n;
  // Starting at or above the root makes the iterates decrease monotonically onto its floor.
  let x = 1n << BigInt((n.toString(2).length + 1) >> 1);
  for (;;) {
    const next = (x + n / x) >> 1n;
    if (next >= x) return x;
    x = next;
  }
}

/**
 * Build the fixed-point operations for one precision.
 *
 * @param digits - decimals carried by every value
 * @returns arithmetic whose values count units of 10^-digits
 */
export function createFixedPoint(digits: number): FixedPoint {
  const one = 10n ** BigInt(digits);
  // The float64 multiplies or divides as an exact rational, so only the result is truncated: a
  // coefficient of 1e-23 costs one unit like any other operand, not 23 of the digits carried.
  const times = (a: bigint, x: number): bigint => {
    const { mantissa, exponent } = decomposeFloat64(x);
    return exponent >= 0 ? (a * mantissa) << BigInt(exponent) : (a * mantissa) / (1n << BigInt(-exponent));
  };
  const over = (a: bigint, x: number): bigint => {
    const { mantissa, exponent } = decomposeFloat64(x);
    return exponent >= 0 ? a / (mantissa << BigInt(exponent)) : (a << BigInt(-exponent)) / mantissa;
  };
  const round = (a: bigint, decimals: number): bigint => {
    const unit = 10n ** BigInt(digits - decimals);
    const magnitude = ((a < 0n ? -a : a) + unit / 2n) / unit;
    return (a < 0n ? -magnitude : magnitude) * unit;
  };
  const toDecimal = (a: bigint, decimals: number): string => {
    const rounded = round(a, decimals);
    const magnitude = rounded < 0n ? -rounded : rounded;
    const fraction = (magnitude % one).toString().padStart(digits, "0").replace(/0+$/, "");
    return `${rounded < 0n ? "-" : ""}${magnitude / one}${fraction ? `.${fraction}` : ""}`;
  };
  return {
    digits,
    one,
    of: (x) => times(one, x),
    times,
    over,
    mul: (a, b) => (a * b) / one,
    div: (a, b) => (a * one) / b,
    sqrt: (a) => integerSqrt(a * one),
    round,
    toDecimal,
  };
}
