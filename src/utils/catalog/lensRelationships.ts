/**
 * Normalized marketed-identity and manufacturing associations for catalog consumers.
 *
 * One lens data file remains the canonical optical prescription. These helpers expose
 * every maker and mount under which that prescription should be discoverable without
 * creating duplicate lens routes or selector entries.
 */

import type { LensAliasData, LensData, LensManufacturerData, LensRelationshipSource } from "../../types/optics.js";
import type { LensMountId } from "./lensTaxonomy.js";
import { deriveMaker } from "./lensMetadata.js";

export type LensMakerAssociationRole = "canonical" | "alias" | "manufacturer";

export interface LensMakerAssociation {
  maker: ReturnType<typeof deriveMaker>;
  role: LensMakerAssociationRole;
  /** Marketed name to show for canonical and alias associations. */
  displayName: string;
  /** Exact manufacturer entity when this is a manufacturing association. */
  entity?: string;
  aliasKind?: LensAliasData["kind"];
  lensMounts: LensMountId[];
  sources: readonly LensRelationshipSource[];
  note?: string;
}

export type LensRelationshipMetadata = Pick<LensData, "name" | "maker" | "lensMounts" | "aliases" | "manufacturedBy">;

function relationshipMounts(
  canonicalMounts: readonly LensMountId[] | undefined,
  relationship: LensAliasData | LensManufacturerData,
): LensMountId[] {
  return [...(relationship.lensMounts ?? canonicalMounts ?? [])];
}

/** Return canonical, alias, and manufacturer associations in stable display order. */
export function lensMakerAssociations(lens: LensRelationshipMetadata): LensMakerAssociation[] {
  const canonicalMounts = [...(lens.lensMounts ?? [])];
  const canonical: LensMakerAssociation = {
    maker: deriveMaker(lens.name, lens.maker),
    role: "canonical",
    displayName: lens.name,
    lensMounts: canonicalMounts,
    sources: [],
  };
  const aliases = (lens.aliases ?? []).map(
    (alias): LensMakerAssociation => ({
      maker: deriveMaker(alias.name, alias.maker),
      role: "alias",
      displayName: alias.name,
      aliasKind: alias.kind,
      lensMounts: relationshipMounts(lens.lensMounts, alias),
      sources: alias.sources,
      ...(alias.note ? { note: alias.note } : {}),
    }),
  );
  const manufacturers = (lens.manufacturedBy ?? []).map(
    (manufacturer): LensMakerAssociation => ({
      maker: deriveMaker(manufacturer.entity ?? manufacturer.maker, manufacturer.maker),
      role: "manufacturer",
      displayName: lens.name,
      entity: manufacturer.entity ?? manufacturer.maker,
      lensMounts: relationshipMounts(lens.lensMounts, manufacturer),
      sources: manufacturer.sources,
      ...(manufacturer.note ? { note: manufacturer.note } : {}),
    }),
  );
  return [canonical, ...aliases, ...manufacturers];
}

/** Every mount under which the canonical prescription should be discoverable. */
export function allRelationshipMountIds(lens: LensRelationshipMetadata): LensMountId[] {
  return [...new Set(lensMakerAssociations(lens).flatMap((association) => association.lensMounts))];
}

/** Associations belonging to one maker page, with duplicate records removed by role/name/entity. */
export function associationsForMaker(lens: LensRelationshipMetadata, makerSlug: string): LensMakerAssociation[] {
  const seen = new Set<string>();
  return lensMakerAssociations(lens).filter((association) => {
    if (association.maker.slug !== makerSlug) return false;
    const identity = `${association.role}\u0000${association.displayName}\u0000${association.entity ?? ""}`;
    if (seen.has(identity)) return false;
    seen.add(identity);
    return true;
  });
}

/** Prefer the marketed identity whose declared mount introduced a mount-specific listing. */
export function marketedNameForMount(lens: LensRelationshipMetadata, mountId: LensMountId): string {
  if (lens.lensMounts?.includes(mountId)) return lens.name;
  return (
    lensMakerAssociations(lens).find(
      (association) => association.role === "alias" && association.lensMounts.includes(mountId),
    )?.displayName ?? lens.name
  );
}

/** Human-readable compact summary for headers and catalog result metadata. */
export function compactLensRelationshipSummary(lens: LensRelationshipMetadata): string | null {
  const parts: string[] = [];
  if (lens.aliases?.length) parts.push(`Also sold as ${lens.aliases.map((alias) => alias.name).join(", ")}`);
  if (lens.manufacturedBy?.length) {
    parts.push(
      `Manufactured by ${lens.manufacturedBy
        .map((manufacturer) => manufacturer.entity ?? manufacturer.maker)
        .join(", ")}`,
    );
  }
  return parts.length > 0 ? parts.join(" · ") : null;
}
