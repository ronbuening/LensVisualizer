# Audit Log — NIKON AI NIKKOR 600mm f/5.6 IF-ED

Patent: JP 1981-035116 A, Example 1 / Figure 1

## 2026-08-21 — Screenshot, patent-figure, diagram-metadata, and glass audit

### Phase 1 — Glass corrections

| Elements | Before | After | Justification |
|---|---|---|---|
| L1, L2 | J-FKH1-compatible proxies | explicit `J-FKH1 catalog equivalent` + inferred ED tags | The equal `1.50032 / 81.9` front pair is the strongest position-level correlation to Nikon's ED product designation; the patent publishes `nd/νd` only. |
| L3 | generic 750350 lanthanum-flint class | `H-LaF4 catalog equivalent` | Closest compatible coefficient curve; production supplier remains unspecified. |
| L4 | generic 699300 SF15 class | `SF15 catalog equivalent` | Only compatible coefficient curve inside the runtime guard. |
| L5 | generic 517642 BK7 class | `H-K9L catalog equivalent` | Explicit coordinate-compatible curve selected deterministically; production supplier remains unspecified. |
| L6 | generic 697556 lanthanum-crown class | `K-LaK14 catalog equivalent` | Only compatible coefficient curve inside the runtime guard. |
| L7 | J-PKH1-compatible proxy | explicit `J-PKH1 catalog equivalent` | Qualified curve for the documented corrected coordinate; no historical melt identity is claimed. |

### Phase 2 — Retained-information and semi-diameter audit

- Rendered the untracked local `patents/JPA 1981119109-000000.pdf` at 600 dpi and compared PDF page 3 / Figure 1 with the supplied site screenshot.
- Retained all semi-diameters. The model preserves the patent's large front group, narrowed internal-focus group, and compact rear positive element. The automated L2/L7 under-reads were caused by thin-rim and annotation interference rather than reliable optical outlines.
- `audit:surface` passes with no validation errors, and `audit:image-circle` reports zero undersized surfaces.

### Phase 3 — Diagram and movement metadata

- Added `L1`–`L7` diagram labels, inferred ED tags on the two high-Abbe front elements, and the source-facing `L4+L5` cemented-pair caption.
- Shortened the functional group captions to `G1`, `G2 FOCUS`, and `G3` so the site diagram remains legible while preserving the patent-derived power signs.
- Verified fixed-focal operation: there is no zoom travel. G2 alone moves `+10.425804 mm` imageward (rearward) from infinity to the constrained 5.5 m endpoint; G1 and G3 remain fixed.

### Phase 4 — Analysis sync

- Synchronized the explicit qualified glass labels, ED-position caveat, and unambiguous imageward/rearward focus wording in the companion analysis.

## 2026-10-30 — Fresh original-source shape and glass review

- Directly inspected the exact local `patents/JPA 1981035116-000000.pdf`: Example 1 prescription/media (PDF p.3), Figure 1 and its explicit Example 1/2 association (p.4, 600 dpi crop), and correction sheet (p.5). Native raster is approximately 347 ppi (`pdfimages -list`), not 600ppi. The historical 2026-07 figure note names a different 1981119109 file and is superseded for current provenance by this exact source review. All seven elements, the cemented L4/L5 interface, and every convex/concave face were inspected. Existing geometry is retained: shallow near-vertical arcs and adjacent leaders do not resolve into additional flat cap ends. No source-supported land or concave trim is added.
- Fresh glass-only check examines all seven material rows: six match literally; the last still visibly prints `n7=1.57,ν7=70.1`. The source correction sheet does not amend it. The inherited inferred 1.52/70.1 adoption remains explicit. Fresh independent matrix/thick-lens checks give third-group focal length 40.000722 source units / total 599.981161mm at 1.52, versus 36.480819 /547.187873mm at literal 1.57, against the stated group 40/system 100 normalization. This supports retaining the documented reconstruction; it is not an official source amendment.
- All seven retained media resolve to compatible coefficient-backed catalog curves. The two front J-FKH1 assignments are now explicitly approximate (catalog Δnd≈−0.0025 for source 1.50032/81.9). Keep their existing inferred ED-position annotations separate from source APD or supplier proof. The source defines n/ν as refractive index/Abbe number without an explicit wavelength; the conventional d-line interpretation remains qualified. No source C/F/g indices or element-specific partial ratios are printed, and none is authored. Every curve selection and RGB/V response is unchanged.
- Focused surface/image-circle/axial aperture/field checks pass. Nine actual focus/zoom SVG states were inspected with finite paths and zero hidden trim. Shared dispersion/resolver checks pass 93 tests; AST scan clean. Source R/d, prior source-error adoption, midpoint stop inference, published/reconstructed focus controls, aperture and tolerances remain unchanged.
