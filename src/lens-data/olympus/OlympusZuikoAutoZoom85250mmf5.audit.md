# Audit Log - Olympus Zuiko Auto-Zoom 85-250mm f/5

Patent: US 4,025,167, Embodiment 2

## 2026-06-24 - Local patent unavailable

### Patent evidence

- The data file cites US 4,025,167, but no matching local PDF was found under `patents/`.

### Disposition

- No prescription, glass, APD, high-index, or SD changes were made.
- A full patent audit remains blocked until `patents/US4025167.pdf` or an equivalent local source is added.

## 2026-07-30 - F8 coordinate-equivalent recovery

- The local patent remains unavailable, so the prescription itself was not re-audited.
- The existing authored L13 coordinate (`nd=1.59551`, `νd=39.2`) exactly matches coefficient-backed HOYA E-F8
  (`nd=1.59551`, `νd=39.22`, code `596392`) from the official obsolete-inclusive catalog.
- Relabeled L13 to E-F8 as a catalog equivalent while leaving the patent supplier unspecified.
- Synchronized the analysis; no prescription geometry or authored optical constants changed.

## 2026-07-30 — Primary-source and legacy-catalog recovery

### Patent evidence

- Retrieved the primary Google Patents scan of US 4,025,167 to ignored `tmp/pdfs/US4025167.pdf`, then rendered and
  visually checked PDF page 11.
- Embodiment 2 prints L4 and L7 at `nd = 1.56873`, `νd = 63.2`, and L10 at `nd = 1.49831`, `νd = 65.0`, matching
  the stored prescription. The source names no glass supplier and supplies no secondary line index or
  partial-dispersion value.
- The full Embodiment 2 prescription on that page also confirms the neighboring rows and zoom constants. No
  prescription geometry changed.

### Catalog additions and relabels

- Added discontinued OHARA BAL22 from the vendor's official 2026-07-01 all-products AGF. Its formula-3 polynomial
  round-trips to `1.5687286 / 63.162358`, and its published code is the patent's exact `569632`.
- Added discontinued OHARA BSL3 from the same source. Its polynomial round-trips to
  `1.4983080 / 65.026785`, and its published code is the patent's exact `498650`.
- Relabeled L4/L7 to BAL22 and L10 to BSL3 as coefficient-backed catalog equivalents. Each annotation explicitly
  leaves Olympus's production supplier unspecified.

### Analysis sync

- Updated both element discussions, the glass inventory, and the source list to replace the obsolete source-blocker
  and code-only wording with the verified catalog-equivalent evidence.

### Verification

- `npm run generate:glass-reports` — passed (8 files / 10 tests); the active source queue is empty, and this lens is
  now 15/15 strict and trusted.
- `npm test -- dispersion.test.ts lensDataTyping.test.ts validateLensData.test.ts buildLens.test.ts` — passed
  (4 files / 239 tests).
- `npm run typecheck`, `npm run format:check`, and `git diff --check` — passed.
