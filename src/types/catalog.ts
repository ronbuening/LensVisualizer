/**
 * Shared catalog contracts for generated patent-party metadata and lightweight lens references.
 *
 * Runtime catalog modules alias these types so generator declarations and the author, patent,
 * and relationship subsystems cannot silently drift into parallel shapes.
 */

export interface PatentPartyMetadata {
  name: string;
  slug: string;
  lensKeys: string[];
  patentCount: number;
}

/** A dated one-time change in an assignee's corporate history. */
export interface CorporateRelationshipEvent {
  organization: string;
  /** ISO date at the precision supported by the source: YYYY, YYYY-MM, or YYYY-MM-DD. */
  effectiveDate: string;
  sourceUrl: string;
  note?: string;
}

/** A dated parent/subsidiary relationship, optionally bounded when it ended. */
export interface CorporateRelationshipPeriod {
  organization: string;
  /** ISO date at the precision supported by the source: YYYY, YYYY-MM, or YYYY-MM-DD. */
  effectiveFrom: string;
  effectiveTo?: string;
  sourceUrl: string;
  note?: string;
}

/** Membership in a named corporate family or documented business lineage. */
export interface CorporateFamilyPeriod {
  family: string;
  /** ISO date at the precision supported by the source: YYYY, YYYY-MM, or YYYY-MM-DD. */
  effectiveFrom: string;
  effectiveTo?: string;
  sourceUrl: string;
  note?: string;
}

export interface AssigneeCorporateRelationships {
  successorOf: CorporateRelationshipEvent[];
  acquiredBy: CorporateRelationshipEvent[];
  subsidiaryOf: CorporateRelationshipPeriod[];
  corporateFamily: CorporateFamilyPeriod[];
}

/** Assignee-only metadata enriched with curated, dated corporate history. */
export interface AssigneeMetadata extends PatentPartyMetadata, AssigneeCorporateRelationships {}

export interface PatentLensRef {
  key: string;
  name: string;
  specs?: string[];
}

export type PatentPartyRole = "author" | "assignee";
