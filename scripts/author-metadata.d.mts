import type { PatentPartyMetadata } from "../src/types/catalog.js";

export interface AuthorMetadataInput {
  key: string;
  patentNumber?: string;
  patentAuthors?: string[];
  patentAssignees?: string[];
  visible?: boolean;
}

export type GeneratedAuthorMetadata = PatentPartyMetadata;

export function buildAuthorMetadata(lensSummaries: AuthorMetadataInput[]): GeneratedAuthorMetadata[];
export function buildAssigneeMetadata(lensSummaries: AuthorMetadataInput[]): GeneratedAuthorMetadata[];
