export function typeCheckConvertedFiles(files: readonly { path: string; text: string }[]): {
  byFile: Map<string, string[]>;
  other: string[];
};
