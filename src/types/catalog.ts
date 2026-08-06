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

export interface PatentLensRef {
  key: string;
  name: string;
  specs?: string[];
}
