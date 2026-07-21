export interface AuthorMetadataInput {
  key: string;
  patentNumber?: string;
  patentAuthors?: string[];
  visible?: boolean;
}

export interface GeneratedAuthorMetadata {
  name: string;
  slug: string;
  lensKeys: string[];
  patentCount: number;
}

export function buildAuthorMetadata(lensSummaries: AuthorMetadataInput[]): GeneratedAuthorMetadata[];
