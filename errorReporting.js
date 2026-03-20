/**
 * Error reporting utilities — builds pre-filled GitHub issue URLs
 * so users can report bugs with full context in one click.
 */

export const REPO_URL = 'https://github.com/ronbuening/LensVisualizer';

const MAX_BODY_LENGTH = 6000;

/**
 * Build a GitHub "New Issue" URL pre-filled with error details.
 *
 * @param {Error} error       — the caught error object
 * @param {Object} context    — optional context
 * @param {string} context.component — component/module where the error occurred
 * @param {string} context.lensKey   — active lens key(s) at time of error
 * @param {string} context.extra     — any additional info
 * @returns {string} full URL to open a new GitHub issue
 */
export function buildIssueURL(error, context = {}) {
  const comp = context.component || 'Unknown';
  const msg = error?.message || 'Unknown error';
  const title = `[Bug] ${comp}: ${msg.length > 80 ? msg.slice(0, 77) + '...' : msg}`;

  const sections = [
    '## Error',
    '```',
    msg,
    '```',
  ];

  if (error?.stack) {
    sections.push(
      '',
      '<details><summary>Stack trace</summary>',
      '',
      '```',
      error.stack,
      '```',
      '</details>',
    );
  }

  sections.push(
    '',
    '## Context',
    `- **Component:** ${comp}`,
  );
  if (context.lensKey) sections.push(`- **Lens:** ${context.lensKey}`);
  if (typeof navigator !== 'undefined') sections.push(`- **Browser:** ${navigator.userAgent}`);
  sections.push(`- **Timestamp:** ${new Date().toISOString()}`);

  if (context.extra) {
    sections.push('', '## Additional Info', context.extra);
  }

  let body = sections.join('\n');
  if (body.length > MAX_BODY_LENGTH) {
    body = body.slice(0, MAX_BODY_LENGTH - 80)
      + '\n\n_(truncated — paste full stack trace from browser console)_';
  }

  return `${REPO_URL}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}
