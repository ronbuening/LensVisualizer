# Security policy

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability. Use GitHub's private vulnerability reporting for this
repository, or contact a maintainer privately. Include the affected URL or component, reproduction steps, impact, and
any suggested mitigation. Avoid accessing data that is not yours or disrupting the public site while investigating.

Maintainers should acknowledge a report promptly, validate and prioritize it, prepare a regression test with the fix,
and coordinate disclosure after supported deployments have been updated.

## Supported version

The production deployment from the default branch is the supported version. Historical builds and forks are not
maintained by this project.

## Security controls

- The application is a static, client-rendered site and should not receive secrets in Vite environment variables or
  browser bundles.
- `public/_headers` defines the deployment security policy. Hosts must apply that file as response headers; serving it
  as a downloadable file is not sufficient.
- The Content Security Policy denies plugins, framing, cross-origin connections, and scripts not served by this origin.
  Inline styles remain enabled because the React UI currently uses inline style objects.
- JSON-LD is serialized with HTML-significant less-than characters escaped so structured data cannot terminate its
  script container.
- New external content, URLs, dependencies, HTML rendering, or browser storage usage requires a trust-boundary review
  and focused tests. Do not add raw HTML rendering or dynamic code evaluation.

## Maintainer verification

Run `npm audit`, `npm run test`, `npm run typecheck`, `npm run lint`, `npm run format:check`, and `npm run build` before a
security-sensitive release. Dependency findings should be evaluated for runtime reachability; lockfile changes require
review like source changes.
