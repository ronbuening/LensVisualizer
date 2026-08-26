export interface LensRelationshipRouteInput {
  key: string;
  name: string;
  maker?: string;
  lensMounts?: string[];
  aliases?: Array<{
    maker: string;
    name: string;
    kind: string;
    lensMounts?: string[];
    sources: Array<{ label: string; url: string }>;
    note?: string;
  }>;
  manufacturedBy?: Array<{
    maker: string;
    entity?: string;
    lensMounts?: string[];
    sources: Array<{ label: string; url: string }>;
    note?: string;
  }>;
}

export function assertLensRelationshipValidity(
  lensSummaries: LensRelationshipRouteInput[],
  options?: { knownMountIds?: Set<string> },
): void;

export function relationshipRouteMetadata(
  lensSummary: LensRelationshipRouteInput,
  canonicalMakerSlug: string,
  deriveMakerSlug: (maker: string) => string,
): { makerSlugs: string[]; lensMountIds: string[] };
