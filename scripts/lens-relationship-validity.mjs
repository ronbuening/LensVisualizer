/** Build-time validation and route metadata for lens aliases/manufacturers. */

const ALIAS_KINDS = new Set(["rebrand", "regional-name", "cosmetic-variant"]);

function normalizedIdentity(value) {
  return value
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function validateSources(sources, label, errors) {
  if (!Array.isArray(sources) || sources.length === 0) {
    errors.push(`${label}.sources must be a non-empty array`);
    return;
  }
  const seen = new Set();
  sources.forEach((source, index) => {
    const sourceLabel = `${label}.sources[${index}]`;
    if (!source || typeof source !== "object" || Array.isArray(source)) {
      errors.push(`${sourceLabel} must be an object`);
      return;
    }
    if (typeof source.label !== "string" || source.label.trim() === "") {
      errors.push(`${sourceLabel}.label must be a non-empty string`);
    }
    if (typeof source.url !== "string") {
      errors.push(`${sourceLabel}.url must be an HTTP(S) URL`);
      return;
    }
    try {
      const parsed = new URL(source.url);
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new Error("unsupported protocol");
    } catch {
      errors.push(`${sourceLabel}.url must be an HTTP(S) URL`);
    }
    if (seen.has(source.url)) errors.push(`${label}.sources repeats ${source.url}`);
    seen.add(source.url);
  });
}

function validateMounts(mounts, label, knownMountIds, errors) {
  if (mounts === undefined) return;
  if (!Array.isArray(mounts) || mounts.length === 0) {
    errors.push(`${label} must be a non-empty array when provided`);
    return;
  }
  const seen = new Set();
  mounts.forEach((mount, index) => {
    if (typeof mount !== "string" || (knownMountIds && !knownMountIds.has(mount))) {
      errors.push(`${label}[${index}] must be a known canonical mount id`);
    }
    if (seen.has(mount)) errors.push(`${label} repeats mount id ${mount}`);
    seen.add(mount);
  });
}

/** Reject invalid records and name collisions across the complete catalog. */
export function assertLensRelationshipValidity(lensSummaries, { knownMountIds } = {}) {
  const errors = [];
  const claimedNames = new Map();

  for (const lens of lensSummaries) {
    const normalizedName = normalizedIdentity(lens.name ?? "");
    if (normalizedName) {
      const existing = claimedNames.get(normalizedName);
      if (existing && existing !== lens.key) errors.push(`${lens.key}: canonical name collides with ${existing}`);
      else claimedNames.set(normalizedName, lens.key);
    }
  }

  for (const lens of lensSummaries) {
    for (const [index, alias] of (lens.aliases ?? []).entries()) {
      const label = `${lens.key}.aliases[${index}]`;
      if (!alias || typeof alias !== "object" || Array.isArray(alias)) {
        errors.push(`${label} must be an object`);
        continue;
      }
      if (typeof alias.maker !== "string" || alias.maker.trim() === "") {
        errors.push(`${label}.maker must be a non-empty string`);
      }
      if (typeof alias.name !== "string" || alias.name.trim() === "") {
        errors.push(`${label}.name must be a non-empty string`);
      } else {
        const normalizedName = normalizedIdentity(alias.name);
        const existing = claimedNames.get(normalizedName);
        if (existing) errors.push(`${label}.name collides with ${existing}`);
        else claimedNames.set(normalizedName, lens.key);
      }
      if (!ALIAS_KINDS.has(alias.kind)) errors.push(`${label}.kind is not supported`);
      if (alias.note !== undefined && (typeof alias.note !== "string" || alias.note.trim() === "")) {
        errors.push(`${label}.note must be a non-empty string when provided`);
      }
      validateMounts(alias.lensMounts, `${label}.lensMounts`, knownMountIds, errors);
      validateSources(alias.sources, label, errors);
    }

    for (const [index, manufacturer] of (lens.manufacturedBy ?? []).entries()) {
      const label = `${lens.key}.manufacturedBy[${index}]`;
      if (!manufacturer || typeof manufacturer !== "object" || Array.isArray(manufacturer)) {
        errors.push(`${label} must be an object`);
        continue;
      }
      if (typeof manufacturer.maker !== "string" || manufacturer.maker.trim() === "") {
        errors.push(`${label}.maker must be a non-empty string`);
      }
      if (
        manufacturer.entity !== undefined &&
        (typeof manufacturer.entity !== "string" || manufacturer.entity.trim() === "")
      ) {
        errors.push(`${label}.entity must be a non-empty string when provided`);
      }
      if (
        manufacturer.note !== undefined &&
        (typeof manufacturer.note !== "string" || manufacturer.note.trim() === "")
      ) {
        errors.push(`${label}.note must be a non-empty string when provided`);
      }
      validateMounts(manufacturer.lensMounts, `${label}.lensMounts`, knownMountIds, errors);
      validateSources(manufacturer.sources, label, errors);
    }
  }

  if (errors.length > 0) throw new Error(`Invalid lens relationship metadata:\n- ${errors.join("\n- ")}`);
}

/** Merge canonical and relationship-specific maker/mount memberships for route generation. */
export function relationshipRouteMetadata(lensSummary, canonicalMakerSlug, deriveMakerSlug) {
  const makerSlugs = new Set([canonicalMakerSlug]);
  const lensMountIds = new Set(lensSummary.lensMounts ?? []);
  for (const relationship of [...(lensSummary.aliases ?? []), ...(lensSummary.manufacturedBy ?? [])]) {
    makerSlugs.add(deriveMakerSlug(relationship.maker));
    for (const mount of relationship.lensMounts ?? lensSummary.lensMounts ?? []) lensMountIds.add(mount);
  }
  return { makerSlugs: [...makerSlugs], lensMountIds: [...lensMountIds] };
}
