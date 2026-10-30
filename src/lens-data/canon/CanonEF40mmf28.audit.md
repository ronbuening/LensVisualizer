# Audit Log — Canon EF 40mm f/2.8 STM

Patent: US 8,970,966 B2, Example 2

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US8970966.pdf`.
- Example 2 row confirmed L12 / surface 2 nd = 1.53172, vd = 48.8.

### Glass corrections

| Element / surface | Before            | After            | Disposition                                           |
| ----------------- | ----------------- | ---------------- | ----------------------------------------------------- |
| L12 / S2          | `S-TIL25 (OHARA)` | `S-TIL6 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L12 label and cross-vendor note.

## 2026-10-30 — Original shape and glass review

### Coverage and original source

- Preserve the actual **2026-05-20** date of the narrow L12 catalog relabel review above. It is not a completed
  all-element shape/glass audit; this full prescription review is fresh.
- Original `patents/US8970966.pdf`: first page confirms US 8,970,966 B2, March 3, 2015, Satoshi Maetaki, Canon.
  Numerical Example 2 is PDF page 13 / columns 13–14, with all source R/d, six media, asphere, summary and element/
  cemented-group focal lengths. Figures 2A–2B are PDF page 3 / sheet 2, source infinity Fno 2.80 and ω 29.0°.
  Definitions/asphere equation are PDF page 12 / column 12; whole-system focus statement is PDF page 9 / column 5;
  Tables 1–2 are PDF pages 14–15; condition (7) and Claim 6 use n22−n21 despite Table 2's reversed label.
- Native 2560 × 3300 one-bit pages at 300 ppi. Native Figure 2A active vertices span about 391 px / 23.51 mm = 16.63 px/mm;
  practical height reading uncertainty ±0.8 mm, independently of undimensioned schematic-outline variation. No
  upsample is presented as extra native detail. Exclude leaders, brackets, stop and image-plane ink.

### Shape, shoulders and retained constraints

- Every clear semi-diameter agrees with half the source **effective ray diameter**; keep all of them. Inspect all
  six elements, both cemented interfaces, concave ends and the asphere directly against native Figure 2A.
- S3 has a native vertical outer stroke before its concave cap begins. Add `rimExtensionSd: 8.70` while preserving
  source clear 6.81 mm. Its conservative outer anchor is the existing bonded S2 cap 8.70 mm.
- S7 has a separate vertical outer stroke before its concave front cap. Add `rimExtensionSd: 6.89` while preserving
  source clear 6.235 mm. Its conservative outer anchor is the bonded S8 cap 6.89 mm.
- Reject full ~10 mm S3 and ~7.9 mm S7 blank reconstructions that would extend outside the retained bonded caps;
  no opaque interface land is introduced to square those blanks. Retain unequal source caps and connected glass.
  No separate S1/S5/S9/S10/S11 land is resolved; do not inflate L23 clear caps from the undimensioned outer drawing.
- No hybrid/resin, source filter or rear plate is present. No inferred cut or beam exemption. All source R/d,
  source asphere/conic, stop station, aperture target and focus values remain. No tolerance or guard changes.

### Glass and synchronized public qualifications

- Verify all six source nd/νd pairs in Numerical Example 2. PDF page 12 / column 12 explicitly defines prescription
  index for the d-line. Retain all numeric pairs and six compatible curves; no unknown-reference suppression.
- No source C/F/g index values, partial dispersion or APD data are supplied. No catalog-derived per-lens spectral
  override exists or is removed. `apd:false` means no source APD designation, not a verified normal production melt.
- Existing proxies are S-LAH55V for L11/L22, S-TIL6 for L12, S-LAL14 for L13, S-TIM35 for L21 and S-BAL42 for L23,
  all OHARA. Qualify all as spectral proxies; all six historical identities remain unresolved. Preserve the prior
  L12 correction and actual date, without claiming a new production supplier identification.
- Remove unsupported analysis claims about named-glass historical use, chemistry, transition temperatures, favorable
  viscosity, manufacturing economy and production-group guesses. The GMo catalog tag is explicitly a production
  correlation, not a manufacturing conclusion from the original. No cement or annealing identity is established.

### Current runtime and SVG comparison

- Surface/image-circle checks pass, zero undersized. Infinity aperture census passes under the existing derived/
  paraxial authority; full-frame corner field check passes. Iris radius remains 6.375182 mm, rather than treating
  source diaphragm effective-ray diameter 12.84 mm as physical iris proof. Real iris-rim working f-number 2.818113 at infinity versus 2.8.
- 21 focus × seven presets: 132 traced / 15 vignetted working calls, identical baseline/candidate values. Wide open
  clips S9 at focus 0.30, S8 at 0.35–0.40, S7 at 0.45–1.00. A separate 193-sample aimed-pupil grid over 63 focus/field
  states has 193 axial passes and valid aimed chiefs throughout; corner endpoints 115/193 at infinity and 126/193 close unchanged.
  These launch conventions are separate results, not proof that the iris-rim clipping disappeared.
- First-order EFL 38.996610 mm,infinity BF 38.983486 vs source/retained 39.00 mm. The existing rounded 0.30 m unit-focus endpoint
  gives magnification magnitude 0.184286× and conjugate residual −0.004093 mm. At focus 0.55 / display 0.545455 m, sampled
  intermediate residual reaches −0.657020 mm. No finite source table or focus-preserving continuous cam is claimed.
- Compare actual generated SVG with native Figure 2A, including both shoulders and cemented connections. 21 focus
  states yield 126 finite connected closed element paths and zero hidden renderer trim. Full drawn square blanks
  remain qualified rather than forced with opaque bonded lands.
- Source fidelity, sampled runtime clearance and production correlation are independent conclusions. Full repository
  validation is coordinated for the three-review commit; no per-lens test or tolerance relaxation is added.
