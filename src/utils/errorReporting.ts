/**
 * Error reporting utilities — builds pre-filled GitHub issue URLs
 * so users can report bugs with full context in one click.
 */

export const REPO_URL: string = "https://github.com/ronbuening/LensVisualizer";

const MAX_BODY_LENGTH: number = 6000;

interface IssueContext {
  component?: string;
  lensKey?: string;
  /** React component stack from ErrorInfo.componentStack */
  componentStack?: string;
  extra?: string;
}

/**
 * Build a GitHub "New Issue" URL pre-filled with error details.
 *
 * @param error    — the caught error object
 * @param context  — optional context
 * @returns full URL to open a new GitHub issue
 */
export function buildIssueURL(error: Error, context: IssueContext = {}): string {
  const comp: string = context.component || "Unknown";
  const msg: string = error?.message || "Unknown error";
  const title: string = `[Bug] ${comp}: ${msg.length > 80 ? msg.slice(0, 77) + "..." : msg}`;

  const sections: string[] = ["## Error", "```", msg, "```"];

  if (error?.stack) {
    sections.push("", "<details><summary>Stack trace</summary>", "", "```", error.stack, "```", "</details>");
  }

  if (context.componentStack) {
    sections.push(
      "",
      "<details><summary>Component stack</summary>",
      "",
      "```",
      context.componentStack.trim(),
      "```",
      "</details>",
    );
  }

  sections.push("", "## Context", `- **Component:** ${comp}`);
  if (context.lensKey) sections.push(`- **Lens:** ${context.lensKey}`);
  if (typeof navigator !== "undefined") sections.push(`- **Browser:** ${navigator.userAgent}`);
  sections.push(`- **Timestamp:** ${new Date().toISOString()}`);

  if (context.extra) {
    sections.push("", "## Additional Info", context.extra);
  }

  let body: string = sections.join("\n");
  if (body.length > MAX_BODY_LENGTH) {
    body = body.slice(0, MAX_BODY_LENGTH - 80) + "\n\n_(truncated — paste full stack trace from browser console)_";
  }

  return `${REPO_URL}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}
