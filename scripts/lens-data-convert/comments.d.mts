export function movedCommentText(text: string, from: string): string;
export function commentKey(text: string): string;
export function placeComments(source: {
  comments: readonly object[];
  commentTarget: (authoredPath: string) => { path: string; moved: boolean };
  textKept: (authoredPath: string) => boolean;
  isContainer: (v2Path: string) => boolean;
}): {
  byPath: Map<string, { leading: object[]; trailing: object[]; dangling: object[] }>;
  moved: { from: string; to: string; line: number; text: string }[];
  emitted: string[];
  unattached: object[];
};
