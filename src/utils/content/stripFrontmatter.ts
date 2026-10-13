/** Strip YAML frontmatter without importing the eager article registry. */
export function stripFrontmatter(raw: string): string {
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n*/, "");
}
