export interface PatentAssigneeValidityInput {
  key?: string;
  patentNumber?: string;
  patentYear?: number;
  patentAssignees?: string[];
}

export interface AssigneeStartYearHistoryEntry {
  successorOf?: Array<{ effectiveDate: string }>;
}

export const ASSIGNEE_START_YEARS: Map<string, number>;

export function deriveAssigneeStartYears(
  history: Partial<Record<string, AssigneeStartYearHistoryEntry>>,
  overrides?: Map<string, number>,
): Map<string, number>;

export function assertPatentAssigneeValidity(lensSummaries: PatentAssigneeValidityInput[]): void;
