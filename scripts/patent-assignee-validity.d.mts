export interface PatentAssigneeValidityInput {
  key?: string;
  patentNumber?: string;
  patentYear?: number;
  patentAssignees?: string[];
}

export function assertPatentAssigneeValidity(lensSummaries: PatentAssigneeValidityInput[]): void;
