export function movedCommentText(text: string, from: string): string;
export function movedNote(text: string): { from: string; text: string } | undefined;
export function commentKey(text: string): string;
export function placeComments(source: {
  comments: readonly object[];
  commentTarget: (
    authoredPath: string,
    leading: boolean,
    movedFrom?: string,
  ) => { path: string; moved: boolean; noted?: boolean };
  textKept: (authoredPath: string) => boolean;
  isContainer: (v2Path: string) => boolean;
}): {
  byPath: Map<string, { leading: object[]; trailing: object[]; dangling: object[] }>;
  moved: { from: string; to: string; line: number; text: string }[];
  unattached: object[];
};
export function commentNotCarried(
  sourceComments: readonly object[],
  outputComments: readonly object[],
): string | undefined;
export function commentReplaced(
  printedComments: readonly object[],
  outputComments: readonly object[],
): string | undefined;
export function commentMisplaced(
  byPath: ReadonlyMap<
    string,
    { leading: { text: string }[]; trailing: { text: string }[]; dangling: { text: string }[] }
  >,
  printedComments: readonly object[],
): string | undefined;
