# Patent figure and glass audit

## 2026-10-02 UTC

Source: local `patents/US3336094A.pdf, PDF page 1 Fig. 2 / Table B`. The original PDF was preserved and is excluded from the commit. Figures were reviewed at page scale and, for changed rims, at 600 dpi. Optical curve endpoints were distinguished from rays, leaders, group brackets and mechanical outlines.

### Semi-diameters

| Surface | Before (mm) | After (mm) | Evidence / constraint |
| --- | --- | --- | --- |
| 6 | 16 | 18 | Enlarged front rim of the first moving doublet toward Fig. 2. |
| 7, 8 | 15 | 17 | Enlarged shared/rear rims with positive edge thickness and gap clearance. |

The Figure 2 embodiment was used; Figure 1 is a different prescription and was excluded. High-DPI review confirms the first moving doublet is taller than the following moving doublet. Automatic axial mapping is contaminated by leaders and the schematic spacing, so no outlying RIM measurements were copied. Source-constrained reconstructed zoom gaps are retained.

### Glass and display metadata

L6 uses TAC4 as a compatible spectral proxy. L2 retains raw source nd 1.50378 / νd 76.7, which has no accepted current catalog curve; PK1 shares the index but its Abbe number is near 67, not 76.7. Final compatible catalog coverage: **13/14 visible glass bodies**. Curves are spectral proxies, not evidence of production supplier, melt identity or APO performance. Patent indices and Abbe values were preserved; no measured line indices were invented and no compatibility tolerance was relaxed.

Display names were reviewed against the documented product correlations. Schneider maker/assignee spelling was normalized to the established catalog convention; COOLPIX capitalization was aligned. Marketing focal lengths remain distinct from source/model design focal lengths.

### Retained limits

The source/analysis notes retain static-focus, rounded-prescription and pupil-coverage limits. Production-format metadata is a nominal frame reference and does not establish full-field coverage.

### Diagram and travel review

The local viewer was compared with Fig. 2 rather than the different Fig. 1 embodiment: the first moving doublet is taller than the second, and I′–V′ and L1′–L14′ retain their source identifiers. Reconstructed stations are ordered 80 → 240 mm, with the two negative components moving according to the source-constrained zoom solution; this remains reconstructed intermediate motion, not a patent-tabulated cam law. Focus stays disabled without published finite-focus spacings. L2′ retains the source’s repeated 76.7 Abbe value and remains unmatched; it is not replaced by the 66.7 value of the other embodiment.

The rendered field audit still exposes front-aperture vignetting: the reachable image radius at 240 mm is about 15.69 mm of the nominal 21.65 mm full-frame diagonal. A 35.5 mm front singlet and 33 mm front doublet pass geometry checks, but their absolute scale depends on schematic axial spacing; that alone does not justify increasing the original rims to fill the nominal format. The source-fit relative rim ordering and explicit full-field limitation are retained.

## 2026-10-30 — Fresh F-mount rim and glass review

- Reopened original `patents/US3336094A.pdf`: Figure 2 on PDF p. 1 at native/page resolution and 600 dpi; Table B and all zoom rows on p. 3, definition context p. 2. Figure 1/Table A is a different example and excluded. Every 14 nd/νd pair checked directly. Table B really prints L2′ 1.50378/76.7, versus 66.7 in Table A; retain 76.7 unresolved. The other 13 retain compatible coefficient proxies. The nd table convention is retained as d-line; no individual C/F/g index, PgF or coefficient source is supplied. Historical supplier/melt remains unresolved.
- Raise continuous front S1/S2 31→35.5 mm and S3–S5 29→33 mm. Figure 2 independently supports a substantially taller fixed front group: first singlet half-height about 289 px and first doublet about 280 px, versus roughly 130 px for the fixed middle singlets in the 600 dpi crop. Their relative heights are near 2.2/2.1, compared with old 1.88/1.76 and adopted 2.15/2.0 using the retained 16.5 mm middle group. This supports the conservative enlargement without treating the compressed, nonuniform axial spacing as an exact scale. It supersedes the previous blanket retention of those two small front envelopes. No other rim growth is forced by the source's nominal 24×36 claim.
- Moving/rear concave ends and all compounds were inspected. Their few-pixel corners and oblique bevels do not independently resolve flat lands. No rim extension, interface land or inferred cut added. Preserve the shared-band moving rims and every constrained reconstructed zoom gap, inferred stop location, focus restriction and existing tolerances.
- Canonical/surface validation passes and image-circle zero undersized. Actual production SVGs at 9 focus/zoom views inspected; 387 source/intermediate control states have finite geometry and zero hidden trim. All 65 axial aperture stations remain within 3%. Source-appropriate field audit remains 77–99% of centered full-frame corner across zoom; tele improves about 15.69→17.99 mm (72%→83% of 21.65 mm). This is a qualified vignetting limit, not full production coverage. The source does not determine reliable apertures sufficient to remove it.
- Common-field 16×16 stop lattice at 3 focus × 3 zoom × 5 field fractions: 7098 retained, 0 lost, 402 gained rays, sampled counts rather than flux. New rays follow source-supported continuous-cap growth; no stop move or f-number fit. R/d/nd/νd, stop/aperture/focus/zoom controls and tolerances unchanged.
