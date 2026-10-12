/**
 * Payload normalization for the engine differential harness.
 *
 * Everything the capture entry hands to a comparison passes through this module: a tagged JSON encoding that
 * round-trips under `Object.is`, a SHA-256 for content digests, the projections that turn engine results into
 * payloads (build constants, column-wise trace hits, digested trace carriers), and the semantic fingerprint of a
 * prescription. It imports nothing. Engine-derived rules arrive as arguments, so the same file gives the same answer
 * whichever ref's engine it is bundled with.
 */

/* ── Tagged JSON encoding ── */

/** JSON-safe tree produced by the encoders; `JSON.stringify` of it is the canonical text of the value. */
export type EncodedValue = null | boolean | number | string | EncodedValue[] | { [key: string]: EncodedValue };

/* Reserved strings for the values JSON cannot carry. `JSON.stringify` writes -0 as 0 and NaN and the infinities as
 * null, while a C0 comparison is `Object.is`, which tells all of them apart. A finite double other than -0 needs no
 * tag: the shortest decimal JSON prints parses back to the same bits. A real string that starts with "$" gains one
 * more "$", so no authored text can be mistaken for a tag. */
const TAG_PREFIX = "$";
const NEGATIVE_ZERO_TAG = "$-0";
const NAN_TAG = "$NaN";
const POSITIVE_INFINITY_TAG = "$+Inf";
const NEGATIVE_INFINITY_TAG = "$-Inf";
/** An `undefined` array item. An `undefined` object member is written as an absent key instead. */
const UNDEFINED_TAG = "$undef";
/**
 * Written where an engine-result walk did not follow a back-pointer member. The skip goes by member name, so the
 * marker is what shows that a result has gained a real member under one of those names.
 */
export const SKIPPED_BACK_POINTER_TAG = "$skipped";

/** What an engine-result walk leaves out or replaces. The lossless encoding applies none of it. */
interface WalkPolicy {
  /** Keys never written. */
  readonly dropKeys: ReadonlySet<string>;
  /** Keys not followed when they hold an object; the skip marker is written in their place. */
  readonly backPointerKeys: ReadonlySet<string>;
  /** Stand-in for the object held under `key` (null for an array item or the root), or `undefined` to walk it. */
  readonly replace: (value: object, key: string | null) => object | undefined;
}

function encodeNumber(value: number): EncodedValue {
  if (value !== 0 && Number.isFinite(value)) return value;
  if (value === 0) return Object.is(value, -0) ? NEGATIVE_ZERO_TAG : 0;
  if (Number.isNaN(value)) return NAN_TAG;
  return value > 0 ? POSITIVE_INFINITY_TAG : NEGATIVE_INFINITY_TAG;
}

/** Assign an own enumerable member; plain assignment to `__proto__` would set the prototype instead. */
function setOwn<Value>(target: Record<string, Value>, key: string, value: Value): void {
  if (key === "__proto__") {
    Object.defineProperty(target, key, { value, enumerable: true, writable: true, configurable: true });
  } else {
    target[key] = value;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Tag a value that has no encoding where it cannot be left out. `null` is a real value, so `??` would be wrong. */
function orUndefinedTag(encoded: EncodedValue | undefined): EncodedValue {
  return encoded === undefined ? UNDEFINED_TAG : encoded;
}

/**
 * Encode one value, or return `undefined` for a value with no encoding of its own (`undefined`, a function).
 *
 * `ancestors` is the chain of objects being walked, not every object seen: engine results share sub-objects (a
 * trace's last hit point is its terminal point), and those must be written at both places.
 */
function walk(
  value: unknown,
  policy: WalkPolicy | null,
  ancestors: object[],
  key: string | null,
): EncodedValue | undefined {
  switch (typeof value) {
    case "number":
      return encodeNumber(value);
    case "string":
      return value.startsWith(TAG_PREFIX) ? TAG_PREFIX + value : value;
    case "boolean":
      return value;
    case "undefined":
    case "function":
      return undefined;
    case "object":
      break;
    default:
      throw new TypeError(`engineDiff cannot encode a ${typeof value}`);
  }
  if (value === null) return null;
  /* A stand-in is written as it is; offering it to the hook again would replace the replacement. */
  const replacement = policy?.replace(value, key);
  return walkContents(replacement ?? value, policy, ancestors);
}

/** Encode an array or an object member by member, without offering the object itself for replacement. */
function walkContents(value: object, policy: WalkPolicy | null, ancestors: object[]): EncodedValue {
  if (ancestors.includes(value)) throw new TypeError("engineDiff cannot encode a cyclic value");
  /* Their entries are not own keys, so the object walk below would write them as `{}` and lose them silently. */
  if (value instanceof Map || value instanceof Set) throw new TypeError("engineDiff cannot encode a Map or Set");

  ancestors.push(value);
  let encoded: EncodedValue;
  if (Array.isArray(value) || (ArrayBuffer.isView(value) && !(value instanceof DataView))) {
    const items = value as ArrayLike<unknown>;
    const out: EncodedValue[] = new Array<EncodedValue>(items.length);
    for (let index = 0; index < items.length; index++) {
      out[index] = orUndefinedTag(walk(items[index], policy, ancestors, null));
    }
    encoded = out;
  } else {
    const members = value as Record<string, unknown>;
    const out: { [key: string]: EncodedValue } = {};
    /* Sorted, because member order follows the engine's insertion order and a refactor may change that. */
    for (const key of Object.keys(members).sort()) {
      if (policy?.dropKeys.has(key)) continue;
      const member = members[key];
      if (policy?.backPointerKeys.has(key) && typeof member === "object" && member !== null) {
        setOwn(out, key, SKIPPED_BACK_POINTER_TAG);
        continue;
      }
      const encodedMember = walk(member, policy, ancestors, key);
      if (encodedMember !== undefined) setOwn(out, key, encodedMember);
    }
    encoded = out;
  }
  ancestors.pop();
  return encoded;
}

/**
 * Encode plain data without loss, for prescriptions and for payloads that are already projected.
 *
 * Numbers stay JSON numbers except -0, NaN and the infinities, which become tags. Object keys are sorted, a member
 * whose value is `undefined` or a function is written as an absent key, typed arrays become arrays, and array order
 * is kept.
 *
 * @param value - plain data: no cycles, Maps, Sets, bigints or symbols
 * @returns the JSON-safe tree; `decodeValue` restores a value equal to the input under `Object.is` at every leaf
 */
export function encodeValue(value: unknown): EncodedValue {
  return orUndefinedTag(walk(value, null, [], null));
}

function decodeString(text: string): unknown {
  if (!text.startsWith(TAG_PREFIX)) return text;
  if (text.startsWith(TAG_PREFIX + TAG_PREFIX)) return text.slice(TAG_PREFIX.length);
  switch (text) {
    case NEGATIVE_ZERO_TAG:
      return -0;
    case NAN_TAG:
      return Number.NaN;
    case POSITIVE_INFINITY_TAG:
      return Number.POSITIVE_INFINITY;
    case NEGATIVE_INFINITY_TAG:
      return Number.NEGATIVE_INFINITY;
    case UNDEFINED_TAG:
      return undefined;
    /* Nothing was written for the skipped member, so the marker is all there is to restore. */
    case SKIPPED_BACK_POINTER_TAG:
      return SKIPPED_BACK_POINTER_TAG;
    default:
      throw new TypeError(`engineDiff cannot decode the tag ${JSON.stringify(text)}`);
  }
}

/**
 * Restore the value an encoder wrote.
 *
 * @param encoded - a tree from `encodeValue` or a result encoder, possibly after a JSON round trip
 * @returns plain data with -0, NaN, the infinities and `undefined` array items restored; a skip marker stays as its
 *   own text
 */
export function decodeValue(encoded: EncodedValue): unknown {
  if (typeof encoded === "string") return decodeString(encoded);
  if (encoded === null || typeof encoded !== "object") return encoded;
  if (Array.isArray(encoded)) return encoded.map(decodeValue);
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(encoded)) setOwn(out, key, decodeValue(encoded[key]));
  return out;
}

/* ── SHA-256 ── */

/* FIPS 180-4 round constants: the first 32 bits of the fractional parts of the cube roots of the first 64 primes. */
const SHA256_ROUND_CONSTANTS = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
  0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
  0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
  0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
  0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
  0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
  0xc67178f2,
]);

const UTF8_ENCODER = new TextEncoder();

/** Fold one 64-byte block into the eight-word hash state. */
function sha256Block(state: Uint32Array, schedule: Int32Array, bytes: Uint8Array, offset: number): void {
  for (let i = 0; i < 16; i++) {
    const at = offset + i * 4;
    schedule[i] = (bytes[at] << 24) | (bytes[at + 1] << 16) | (bytes[at + 2] << 8) | bytes[at + 3];
  }
  for (let i = 16; i < 64; i++) {
    const w15 = schedule[i - 15];
    const w2 = schedule[i - 2];
    const s0 = ((w15 >>> 7) | (w15 << 25)) ^ ((w15 >>> 18) | (w15 << 14)) ^ (w15 >>> 3);
    const s1 = ((w2 >>> 17) | (w2 << 15)) ^ ((w2 >>> 19) | (w2 << 13)) ^ (w2 >>> 10);
    schedule[i] = (schedule[i - 16] + s0 + schedule[i - 7] + s1) | 0;
  }
  let a = state[0] | 0;
  let b = state[1] | 0;
  let c = state[2] | 0;
  let d = state[3] | 0;
  let e = state[4] | 0;
  let f = state[5] | 0;
  let g = state[6] | 0;
  let h = state[7] | 0;
  for (let i = 0; i < 64; i++) {
    const sigma1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
    const choose = (e & f) ^ (~e & g);
    const t1 = (h + sigma1 + choose + SHA256_ROUND_CONSTANTS[i] + schedule[i]) | 0;
    const sigma0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
    const majority = (a & b) ^ (a & c) ^ (b & c);
    h = g;
    g = f;
    f = e;
    e = (d + t1) | 0;
    d = c;
    c = b;
    b = a;
    a = (t1 + sigma0 + majority) | 0;
  }
  state[0] += a;
  state[1] += b;
  state[2] += c;
  state[3] += d;
  state[4] += e;
  state[5] += f;
  state[6] += g;
  state[7] += h;
}

/**
 * SHA-256 of a text (as UTF-8) or of raw bytes.
 *
 * Written here rather than taken from `node:crypto` because the capture bundle is built from this folder alone, with
 * no Node or package imports, and its callers are synchronous.
 *
 * @param input - text, hashed as its UTF-8 bytes, or the bytes themselves
 * @returns the digest as 64 lowercase hexadecimal digits
 */
export function sha256Hex(input: string | Uint8Array): string {
  const bytes = typeof input === "string" ? UTF8_ENCODER.encode(input) : input;
  /* The square-root fractions of the first eight primes. */
  const state = new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
  ]);
  const schedule = new Int32Array(64);
  const length = bytes.length;
  let offset = 0;
  for (; offset + 64 <= length; offset += 64) sha256Block(state, schedule, bytes, offset);

  /* Padding: one 1 bit, zeros, then the message length in bits as a 64-bit big-endian integer. */
  const remainder = length - offset;
  const tail = new Uint8Array(remainder < 56 ? 64 : 128);
  tail.set(bytes.subarray(offset));
  tail[remainder] = 0x80;
  const bitLengthHigh = Math.floor(length / 0x20000000);
  const bitLengthLow = (length << 3) >>> 0;
  for (let i = 0; i < 4; i++) {
    tail[tail.length - 8 + i] = (bitLengthHigh >>> (24 - 8 * i)) & 0xff;
    tail[tail.length - 4 + i] = (bitLengthLow >>> (24 - 8 * i)) & 0xff;
  }
  for (let tailOffset = 0; tailOffset < tail.length; tailOffset += 64) sha256Block(state, schedule, tail, tailOffset);

  let hex = "";
  for (const word of state) hex += word.toString(16).padStart(8, "0");
  return hex;
}

/* ── Engine results ── */

/* Members that point back at the owner of an engine object. Followed, each repeats a whole lens or prepared state
 * (about 67 kB) inside every result that keeps one. They are skipped only when they hold an object, so a text member
 * that shares a name (a finite conjugate's `source`) is still written. The names are common ones, so each skip
 * leaves `SKIPPED_BACK_POINTER_TAG` behind: today's analysis and MTF results trip none, and the harness tests hold
 * a representative lens to that. */
const BACK_POINTER_KEYS: ReadonlySet<string> = new Set([
  "lens",
  "runtime",
  "state",
  "preparedState",
  "data",
  "profile",
  "source",
  "base",
]);

/* Identity strings that embed formatted computed numbers. They are left out altogether rather than reduced: a cache
 * key prints inputs the request already states (every vertex position at 17 digits), and the discrete part of a loop
 * key is the `loopDetected` flag beside it. Kept, they would turn a sub-budget numeric difference into a string
 * mismatch. */
const COMPUTED_IDENTITY_KEYS: ReadonlySet<string> = new Set([
  "cacheKey",
  "contextCacheKey",
  "perspectiveCacheKey",
  "loopKey",
]);

/** The members that identify an engine trace result wherever one is nested. */
interface EngineTraceShape {
  status: string;
  hits: readonly object[];
  diagnostics: object;
  terminalPoint: readonly number[];
}

function isEngineTrace(value: unknown): value is EngineTraceShape {
  if (!isRecord(value)) return false;
  return (
    typeof value.status === "string" &&
    Array.isArray(value.hits) &&
    isRecord(value.diagnostics) &&
    Array.isArray(value.terminalPoint)
  );
}

/** A perspective trace: one ray as two engine traces, in the lens frame and in the fixed camera frame. */
function isPosedTrace(value: object): value is { localTrace: EngineTraceShape; cameraTrace: EngineTraceShape } {
  const { localTrace, cameraTrace } = value as { localTrace?: unknown; cameraTrace?: unknown };
  return isEngineTrace(localTrace) && isEngineTrace(cameraTrace);
}

/**
 * The per-ray pupil bundle of a perspective field sample: a posed trace, a status and a sensor intercept per pupil
 * point. It is the bulk of a field sample and is digested whole. The rest of the sample is walked as usual, so its
 * status, sensor points, scene directions and its chief-ray and sensor solves stay readable.
 */
function isPupilBundle(value: object, key: string | null): boolean {
  return key === "pupilBundle" && Array.isArray((value as { samples?: unknown }).samples);
}

/**
 * What stands in for a trace carrier: its status (null for a pupil bundle, which has none of its own), the hits in
 * the traces it holds, and a digest of all of it.
 */
interface TraceCarrierDigest {
  status: string | null;
  hitCount: number;
  hash: string;
}

/**
 * Turn row objects into one array per member.
 *
 * A member missing from a row, or `undefined` there, is `null` in its column, so the sequential tracer (which writes
 * `clipReason: undefined` on every hit) and the generalized tracer (which omits the key) give the same columns.
 *
 * @param rows - objects with mostly the same members, in the order to keep
 * @returns the row count and a column per member that is defined on at least one row
 */
export function columnize(rows: readonly object[]): { count: number; columns: Record<string, unknown[]> } {
  const columns: Record<string, unknown[]> = {};
  rows.forEach((row, index) => {
    for (const [key, value] of Object.entries(row)) {
      if (value === undefined) continue;
      if (!Object.hasOwn(columns, key)) setOwn(columns, key, new Array<unknown>(rows.length).fill(null));
      columns[key][index] = value;
    }
  });
  return { count: rows.length, columns };
}

/**
 * Project one full engine trace for a payload: everything it holds, with the hit records stored column-wise.
 *
 * One object per hit repeats thirteen member names per hit; for a catalog capture that roughly doubles the text.
 *
 * @param trace - an engine trace result with its `hits`
 * @returns the same members with `hits` replaced by `{ count, columns }`
 */
export function projectTrace(trace: object): Record<string, unknown> {
  const { hits, ...summary } = trace as { hits: readonly object[] } & Record<string, unknown>;
  return { ...summary, hits: columnize(hits) };
}

/**
 * Build an encoder for engine results.
 *
 * On top of the lossless encoding it marks engine back-pointers as skipped, leaves out computed identity strings, and
 * replaces each nested trace carrier with `{ status, hitCount, hash }`. A carrier is an engine trace, a posed pair of
 * them, or the pupil bundle of a perspective field sample; `hash` is the SHA-256 of the carrier's normalized content,
 * with the carriers inside it already digested. Perspective results keep a complete trace per ray, 56 to 490 MB of
 * text per lens state. Digested, they stay comparable bit for bit at a few megabytes, and every number outside a
 * trace or a pupil bundle stays readable beside the digests: a job's statuses, sensor points and summary numbers, and
 * a field sample's own values with its chief-ray and sensor solves.
 *
 * Digests are remembered per carrier object for the life of the returned encoder, because one trace is usually
 * reachable from several places in a result.
 *
 * @returns an encoder to use for the results of one capture record
 */
export function createResultEncoder(): (value: unknown) => EncodedValue {
  const digests = new WeakMap<object, TraceCarrierDigest>();
  /* Hits behind every digest handed out so far. What a carrier's content adds to it is that carrier's count. */
  let hitsWritten = 0;
  const digestOf = (carrier: object, status: unknown, ownHits: number, content: () => EncodedValue): object => {
    let digest = digests.get(carrier);
    if (!digest) {
      const hitsBefore = hitsWritten;
      const hash = sha256Hex(JSON.stringify(content()));
      digest = {
        status: typeof status === "string" ? status : null,
        hitCount: ownHits + hitsWritten - hitsBefore,
        hash,
      };
      digests.set(carrier, digest);
      hitsWritten = hitsBefore;
    }
    hitsWritten += digest.hitCount;
    return digest;
  };
  const policy: WalkPolicy = {
    dropKeys: COMPUTED_IDENTITY_KEYS,
    backPointerKeys: BACK_POINTER_KEYS,
    replace(value, key) {
      if (isEngineTrace(value)) {
        return digestOf(value, value.status, value.hits.length, () => walkContents(projectTrace(value), policy, []));
      }
      if (isPosedTrace(value)) {
        return digestOf(value, value.cameraTrace.status, 0, () => walkContents(value, policy, []));
      }
      if (isPupilBundle(value, key)) {
        return digestOf(value, null, 0, () => walkContents(value, policy, []));
      }
      return undefined;
    },
  };
  return (value) => orUndefinedTag(walk(value, policy, [], null));
}

/** A computation's value, or what it threw. A failure is an outcome to compare, never a record to drop. */
export type Outcome<Value> =
  | { ok: true; value: Value }
  | { ok: false; error: { name: string; message: string; reason?: string; section?: string } };

/**
 * Run one computation and record how it ended.
 *
 * @param compute - the engine work
 * @returns the value, or the thrown error's name, message and discriminating member
 */
export function outcomeOf<Value>(compute: () => Value): Outcome<Value> {
  try {
    return { ok: true, value: compute() };
  } catch (thrown) {
    if (!(thrown instanceof Error)) return { ok: false, error: { name: "NonError", message: String(thrown) } };
    /* The engine's error classes tell their cases apart by `reason` (state preparation) or `section` (analysis). */
    const { reason, section } = thrown as { reason?: unknown; section?: unknown };
    return {
      ok: false,
      error: {
        name: thrown.name,
        message: thrown.message,
        ...(typeof reason === "string" ? { reason } : {}),
        ...(typeof section === "string" ? { section } : {}),
      },
    };
  }
}

/* ── Build constants ── */

/**
 * Project a runtime lens to its build-constants payload.
 *
 * Every field is kept: a field the engine copies from the prescription is still one it chose, defaulted or filtered
 * (`elements` loses the synthetic plates, `maxFstop` and its like take a lens default). Some fields change form:
 * - `data`, the prescription after defaults and rear-plate expansion, and `elements`, the authored elements the lens
 *   shows, are written through `normalizeAuthoredData`, as a composed prescription is, so a respelling the
 *   fingerprint ignores cannot move them;
 * - `S` keeps every member of every surface, the engine's own inner radius, stop placement, interaction and
 *   diffractive phase among them, and writes `R` as the authority rules do: a flat radius as its marker, because
 *   the engine hands a flat radius back as it was spelled and the spellings share a fingerprint;
 * - `varLabels`, and those of the aberration-control ring, are in surface order: the engine keeps the file's order,
 *   which the canonical prescription does not hold;
 * - `asphByIdx` becomes the list of aspheric surface indices: which surfaces resolved an entry is the engine's doing,
 *   and the coefficients are in `data.asph`, zero terms dropped;
 * - each `indexByIdx` closure is evaluated at the given channels.
 *
 * @param lens - the frozen runtime lens `buildLens` returned
 * @param channels - chromatic channels at which to evaluate each surface's index
 * @param flatRadiusThreshold - the engine's flat-radius threshold, for the authority rules
 * @returns plain data for `encodeValue`
 */
export function projectBuildConstants(
  lens: object,
  channels: readonly string[],
  flatRadiusThreshold: number,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(lens)) {
    if (key === "data" && isRecord(value)) {
      out.data = normalizeAuthoredData(value, flatRadiusThreshold);
    } else if (key === "elements" && Array.isArray(value)) {
      out.elements = value.map(withoutElementDefaults);
    } else if (key === "S" && Array.isArray(value)) {
      out.S = value.map((surface: unknown) =>
        isRecord(surface) && typeof surface.R === "number"
          ? { ...surface, R: radiusOrFlat(surface.R, flatRadiusThreshold) }
          : surface,
      );
    } else if (key === "varLabels" && Array.isArray(value)) {
      out.varLabels = byFirstMember(value);
    } else if (key === "aberrationControl" && isRecord(value) && Array.isArray(value.varLabels)) {
      out.aberrationControl = { ...value, varLabels: byFirstMember(value.varLabels) };
    } else if (key === "asphByIdx" && isRecord(value)) {
      out.asphericSurfaceIndexes = Object.keys(value).map(Number);
    } else if (key === "indexByIdx" && isRecord(value)) {
      out.indexByIdx = Object.fromEntries(
        Object.entries(value).map(([surfaceIndex, entry]) => {
          const dispersion = entry as {
            fn: (channel: string) => number;
            quality: unknown;
            glassEntry?: { name?: unknown } | null;
          };
          return [
            surfaceIndex,
            {
              /* The catalog entry carries its Sellmeier coefficients; the name says which one was resolved. */
              glass: dispersion.glassEntry?.name,
              indices: Object.fromEntries(channels.map((channel) => [channel, dispersion.fn(channel)])),
              quality: dispersion.quality,
            },
          ];
        }),
      );
    } else {
      out[key] = value;
    }
  }
  return out;
}

/** `[surfaceIndex, text]` pairs in surface order. */
function byFirstMember(pairs: readonly unknown[]): unknown[] {
  return [...pairs].sort((a, b) =>
    Array.isArray(a) && Array.isArray(b) && typeof a[0] === "number" && typeof b[0] === "number" ? a[0] - b[0] : 0,
  );
}

/* ── Semantic fingerprint ── */

/** Where the engine takes the wide-open stop radius from. */
export type StopRadiusAuthority = "authored" | "schedule" | "derived";

/**
 * Decide from authored data alone whether the engine uses the authored `STO` semi-diameter.
 *
 * `buildLens` holds this rule inline and exports no predicate for it: a folded lens keeps the authored radius; any
 * other lens takes `zoomStopSemiDiameters[0]` when a schedule is present, keeps the authored radius when the stop
 * sits inside an element, and otherwise replaces it with the marginal-ray height traced at the stop. The canonical
 * prescription states the same rule (`stopRadiusAuthority` in `src/optics/prescription/canonical.ts`); this copy
 * runs on engines that predate it.
 *
 * @param prescription - lens data, before or after defaults
 * @returns `"authored"` when the engine reads the authored value, else where the radius comes from
 */
export function stopRadiusAuthority(prescription: object): StopRadiusAuthority {
  const data = prescription as {
    opticalPath?: unknown;
    zoomStopSemiDiameters?: unknown;
    surfaces?: readonly { label?: unknown; stopPlacement?: unknown; interaction?: { type?: unknown } }[];
  };
  const surfaces = data.surfaces ?? [];
  const folded = Boolean(
    data.opticalPath || surfaces.some((surface) => surface.interaction && surface.interaction.type !== "refract"),
  );
  if (folded) return "authored";
  if (data.zoomStopSemiDiameters) return "schedule";
  return surfaces.find((surface) => surface.label === "STO")?.stopPlacement === "inside-element"
    ? "authored"
    : "derived";
}

/** Rewrite -0 as 0 at every depth; the fingerprint compares numbers bit for bit apart from the sign of zero. */
function withUnsignedZeros(value: unknown): unknown {
  if (typeof value === "number") return value === 0 ? 0 : value;
  if (Array.isArray(value)) return value.map(withUnsignedZeros);
  if (isRecord(value))
    return Object.fromEntries(Object.entries(value).map(([key, member]) => [key, withUnsignedZeros(member)]));
  return value;
}

/** What stands for a flat radius: the engine reads neither the magnitude nor the sign of one. */
export const FLAT_RADIUS_MARKER = "flat";

/**
 * Record a radius the way the engine reads it.
 *
 * @param radius - a radius of curvature in mm
 * @param flatRadiusThreshold - the engine's threshold; a radius beyond it is a flat surface
 * @returns the radius, or `FLAT_RADIUS_MARKER` for a flat one
 */
export function radiusOrFlat(radius: number, flatRadiusThreshold: number): number | typeof FLAT_RADIUS_MARKER {
  return Math.abs(radius) > flatRadiusThreshold ? FLAT_RADIUS_MARKER : radius;
}

/** One schema default the engine applies where V1 data leaves the field out, in its V1 spelling. */
export interface EchoDefault {
  readonly v1Field: string;
  readonly value: unknown;
  /** The engine reads the field as `value || default`, so any falsy authored value is the default too. */
  readonly falsyIsDefault?: true;
}

/**
 * The schema defaults the engine applies inline, by the V1 record they belong to: a copy of the `engine` rows of
 * `src/optics/prescription/defaults.ts`, which a tooling test holds equal. The harness keeps a copy because it runs
 * against engines that predate that module. The `catalog` rows need none: the engine merges them before any record
 * hands data back.
 */
export const ECHO_DEFAULTS: Readonly<Record<"lens" | "element" | "rearPlate", readonly EchoDefault[]>> = {
  lens: [
    { v1Field: "zoomApertureModel", value: "from-nominal-fno" },
    { v1Field: "zoomStep", value: 0.004, falsyIsDefault: true },
    { v1Field: "focusPositions", value: [0, 1] },
  ],
  element: [
    { v1Field: "indexReference", value: "d" },
    { v1Field: "apd", value: false },
  ],
  rearPlate: [{ v1Field: "indexReference", value: "d" }],
};

/** How far a finite conjugate may sit from the station it names: the validator's tolerance. */
const STATION_COORDINATE_TOLERANCE = 1e-8;

function isDefaultValue(row: EchoDefault, value: unknown): boolean {
  if (row.falsyIsDefault && !value) return true;
  return JSON.stringify(value) === JSON.stringify(row.value);
}

/** A copy of `record` without the members that hold their default. */
function withoutDefaults(record: Record<string, unknown>, rows: readonly EchoDefault[]): Record<string, unknown> {
  const out = { ...record };
  for (const row of rows) {
    if (Object.hasOwn(out, row.v1Field) && out[row.v1Field] !== undefined && isDefaultValue(row, out[row.v1Field])) {
      delete out[row.v1Field];
    }
  }
  return out;
}

function withoutElementDefaults(element: unknown): unknown {
  return isRecord(element) ? withoutDefaults(element, ECHO_DEFAULTS.element) : element;
}

/** The coordinate in `stations` within the tolerance of `value`, or `value` itself. */
function snapToStation(value: unknown, stations: readonly number[]): unknown {
  if (typeof value !== "number") return value;
  return stations.find((station) => Math.abs(station - value) < STATION_COORDINATE_TOLERANCE) ?? value;
}

/**
 * A finite conjugate with its coordinates on the station they name, within the validator's tolerance. The canonical
 * prescription addresses a conjugate by station, and the engine only ever matches it within that tolerance, but it
 * hands the authored record back: in lens data, and as the conjugate an MTF result reports.
 *
 * @param conjugate - a `FiniteConjugate` as the engine holds it
 * @param keyframes - the lens's focus keyframes
 * @param stationCount - its zoom stations, 1 on a prime
 * @returns a copy with `focusT` and `zoomT` snapped, or the value itself when it is no record
 */
export function snapConjugate(conjugate: unknown, keyframes: readonly number[], stationCount: number): unknown {
  if (!isRecord(conjugate)) return conjugate;
  const stations =
    stationCount <= 1 ? [0] : Array.from({ length: stationCount }, (_, station) => station / (stationCount - 1));
  return {
    ...conjugate,
    focusT: snapToStation(conjugate.focusT, keyframes),
    zoomT: snapToStation(conjugate.zoomT, stations),
  };
}

/** `publishedStations` with an every-station zoom list left out and one focus list spread per zoom station. */
function normalizePublishedStations(declared: Record<string, unknown>, stationCount: number): Record<string, unknown> {
  const out = { ...declared };
  const every = Array.from({ length: stationCount }, (_, station) => station);
  const zoom = Array.isArray(out.zoom) ? (out.zoom as unknown[]) : every;
  const focus = out.focus;
  if (stationCount >= 2 && Array.isArray(focus) && focus.every((entry) => typeof entry === "number")) {
    out.focus = every.map((station) => (zoom.includes(station) ? [...focus] : []));
  }
  if (Array.isArray(out.zoom) && JSON.stringify(out.zoom) === JSON.stringify(every)) delete out.zoom;
  return out;
}

/** `[label, text]` pairs ordered by the surface each label names. */
function bySurface(pairs: unknown, surfaceLabels: readonly unknown[]): unknown {
  if (!Array.isArray(pairs)) return pairs;
  const position = (pair: unknown) => (Array.isArray(pair) ? surfaceLabels.indexOf(pair[0]) : -1);
  return [...pairs].sort((a, b) => position(a) - position(b));
}

/**
 * Rewrite authored lens or teleconverter data so the spellings that share a semantic fingerprint come out identical.
 *
 * Every record that hands authored data back goes through it: the `data` and `elements` of a built lens and the
 * composed prescription of a converter pair. Otherwise a format-only change, which the fingerprint lets through,
 * would still change a record that only echoes the file. The canonical prescription holds each of these as one:
 * - a radius beyond the flat threshold is `FLAT_RADIUS_MARKER`;
 * - a zero asphere term is dropped, and an empty `asph` with it. An entry itself stays, even when that leaves it
 *   empty: an entry makes the surface aspheric to the engine and the UI whatever its coefficients;
 * - the `STO` semi-diameter is dropped where the engine derives or schedules the stop radius;
 * - a default the engine applies inline (`ECHO_DEFAULTS`) is dropped, on the lens, its elements and its plates;
 * - an empty `var`, `varLabels` or ring `varLabels` is dropped, and label pairs are put in surface order;
 * - a `publishedStations.zoom` naming every station is dropped, and one focus list is spread over the zoom stations;
 * - a finite conjugate's coordinates are snapped to the station they name within the validator's tolerance;
 * - -0 becomes 0.
 *
 * @param prescription - lens or teleconverter data, with whatever defaults the engine merged
 * @param flatRadiusThreshold - the engine's flat-radius threshold
 * @returns a rewritten copy; the input is not changed
 */
export function normalizeAuthoredData(prescription: object, flatRadiusThreshold: number): Record<string, unknown> {
  const data = withoutDefaults({ ...prescription }, ECHO_DEFAULTS.lens);
  const stopRadiusIsRead = stopRadiusAuthority(data) === "authored";
  const surfaceLabels = Array.isArray(data.surfaces)
    ? data.surfaces.map((surface: unknown) => (isRecord(surface) ? surface.label : undefined))
    : [];

  if (Array.isArray(data.surfaces)) {
    data.surfaces = data.surfaces.map((authored: unknown) => {
      if (!isRecord(authored)) return authored;
      const surface = { ...authored };
      if (typeof surface.R === "number") surface.R = radiusOrFlat(surface.R, flatRadiusThreshold);
      if (surface.label === "STO" && !stopRadiusIsRead) delete surface.sd;
      return surface;
    });
  }
  if (isRecord(data.asph)) {
    const entries = Object.entries(data.asph).filter(([, entry]) => entry !== undefined);
    if (entries.length === 0) delete data.asph;
    else {
      data.asph = Object.fromEntries(
        entries.map(([label, entry]) => [
          label,
          isRecord(entry) ? Object.fromEntries(Object.entries(entry).filter(([, term]) => term !== 0)) : entry,
        ]),
      );
    }
  }
  if (Array.isArray(data.elements)) data.elements = data.elements.map(withoutElementDefaults);
  if (Array.isArray(data.rearPlates)) {
    data.rearPlates = data.rearPlates.map((plate: unknown) =>
      isRecord(plate) ? withoutDefaults(plate, ECHO_DEFAULTS.rearPlate) : plate,
    );
  }
  if (isRecord(data.var) && Object.values(data.var).every((range) => range === undefined)) delete data.var;
  if (Array.isArray(data.varLabels)) {
    if (data.varLabels.length === 0) delete data.varLabels;
    else data.varLabels = bySurface(data.varLabels, surfaceLabels);
  }
  if (isRecord(data.aberrationControl) && Array.isArray(data.aberrationControl.varLabels)) {
    const { varLabels, ...control } = data.aberrationControl;
    data.aberrationControl =
      varLabels.length === 0 ? control : { ...control, varLabels: bySurface(varLabels, surfaceLabels) };
  }

  const stationCount = Array.isArray(data.zoomPositions) ? data.zoomPositions.length : 1;
  if (isRecord(data.publishedStations)) {
    data.publishedStations = normalizePublishedStations(data.publishedStations, stationCount);
  }
  if (Array.isArray(data.finiteConjugates)) {
    const keyframes = Array.isArray(data.focusPositions) ? (data.focusPositions as number[]) : [0, 1];
    data.finiteConjugates = data.finiteConjugates.map((conjugate: unknown) =>
      snapConjugate(conjugate, keyframes, stationCount),
    );
  }
  return withUnsignedZeros(data) as Record<string, unknown>;
}

/**
 * The engine's canonical semantic projection: the prescription a file ingests to, without its provenance. It throws
 * on a file the engine cannot ingest.
 */
export type SemanticProjection = (prescription: object) => object;

/**
 * Semantic fingerprint of a prescription: a digest of its canonical semantic projection.
 *
 * The projection is the engine's (`ingestLensV1` and `ingestTeleconverterV1` in `src/optics/prescription/`), so the
 * rules are the canonical prescription's: schema defaults applied, a default written out equal to one left out, a
 * flat radius at any magnitude, zero asphere terms absent, a derived or scheduled stop radius left out, a conjugate
 * addressed by its station, and the V1 spellings the canonical form holds once (see `normalizeAuthoredData`, which
 * keeps the records that echo authored data in step). Provenance never reaches the projection: comments, layout,
 * key order, `undefined` members, authored-or-default flags and authored values the engine ignores. Numbers compare
 * bit for bit, -0 as 0.
 *
 * A file the projection refuses still gets a fingerprint, a digest of its refusal and its data, so a run classifies
 * it as a semantic change instead of stopping. Two files that differ always differ there.
 *
 * @param prescription - evaluated lens or teleconverter data, as authored
 * @param project - the engine's semantic projection for this kind of file
 * @returns the fingerprint as 64 hexadecimal digits
 */
export function semanticFingerprint(prescription: object, project: SemanticProjection): string {
  let semantic: object;
  try {
    semantic = project(prescription);
  } catch (thrown) {
    const reason = thrown instanceof Error ? `${thrown.name}: ${thrown.message}` : String(thrown);
    return sha256Hex(JSON.stringify(["unreadable", reason, encodeValue(prescription)]));
  }
  return sha256Hex(JSON.stringify(encodeValue(withUnsignedZeros(semantic))));
}
