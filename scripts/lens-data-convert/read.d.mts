export interface ReadComment {
  text: string;
  pos: number;
  end: number;
  line: number;
  path: string | undefined;
  placement: "leading" | "trailing" | "dangling" | "inner" | "header" | "unattached";
  blankBefore: boolean;
  withinText?: boolean;
}

export function readLensDataFile(
  content: string,
  fileName: string,
  paths: { childPath: (base: string, key: string | number) => string },
): { value: unknown; comments: ReadComment[] };
