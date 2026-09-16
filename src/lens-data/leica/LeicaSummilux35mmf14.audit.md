# Audit Log — LEICA SUMMILUX-M 35mm f/1.4 (FR patent)

Patent: FR 1.233.449; FR 1.233.449 Example 1 — strong correlation to the 1961 Summilux-M 35 f/1.4; attribution not manufacturer-confirmed

## 2026-09-16 — Patent geometry, glass, and metadata

### Retained-information and optical-rim review

Exact local source: `patents/FR_1233449_A.pdf`, PDF page 3, Fig. 1; Tableau 1 on page 1.

Front/rear outer rims are approximately 11.3/10.4 mm from the 32.42 mm glass track. Surfaces 1/2 change 16.2/16.2 → 13/13 mm; surfaces 11/12 change 14.8/14.8 → 10.4/10.4 mm. Inner cemented rims and the tight 7–8 gap retain their geometry-constrained values. The 0.985 gapSagFrac remains necessary for the retained 7.56 mm rim.

| Surface | Previous SD (mm) | Revised SD (mm) |
|---|---:|---:|
| 1 | 16.2 | 13 |
| 2 | 16.2 | 13 |
| 11 | 14.8 | 10.4 |
| 12 | 14.8 | 10.4 |

### Glass classification

Native e-line coordinates are preserved; catalog curves are evaluated at C′/e/F′. Six-digit d-line codes alone do not resolve these elements.

| Element | Patent index / Abbe | Runtime curve |
|---|---|---|
| L1 | 1.72341 / 50.1 (e) | LAC10 |
| L2 | 1.7899 / 48 (e) | Unresolved |
| L3 | 1.70444 / 29.84 (e) | SF15 |
| L4 | 1.7899 / 48 (e) | Unresolved |
| L5 | 1.76167 / 27.34 (e) | SF4 |
| L6 | 1.7899 / 48 (e) | Unresolved |
| L7 | 1.72056 / 47.69 (e) | S-LAM3 |

The listed curves are catalog proxies; production identities remain unproven. Unresolved coordinates were checked against the current catalog and public glass-code/index searches; no sufficiently evidenced new curve was recovered for them. Source coordinates, spectral reference, radii, and axial spacings are retained.

### Metadata and analysis

Display labels distinguish the FR and US patent records without implying different production generations. Native e-line coordinates and the publication-specific inferred stop model remain intact.

Companion analysis now lists the actual runtime glass curves and preserves source-versus-model limitations.

The front rim is retained at 13 mm rather than the drawing-only estimate: the modeled f/1.4 entrance-pupil radius is 12.5511 mm. A literal 11.3 mm rim clips the on-axis marginal bundle. The 13 mm choice balances the patent outline with the modeled aperture.

## 2026-09-16 — Consolidation of duplicate patent-family entries

Rechecked FR 1.233.449 PDF p. 1 and US 2,975,673 PDF pp. 1–2. FR filing (24 August 1959) precedes US filing (26 August 1959); FR publication (12 October 1960) precedes US grant (21 March 1961). Both share German priority of 30 August 1958. France granted its patent on 2 May 1960.

Both Example 1 tables give the same radii, spacings, indices, aperture ratio and field; L7's printed Abbe value differs (FR 47.69, US 47.59). Retain the French value as the primary source and preserve the discrepancy in the analysis. The US diaphragm drawing and inventor metadata supplement the same model, not a second catalog lens.

Retain `leica-summilux-m-35f14`, remove the source-edition suffix from its name, carry over explicit `apertureDesign: 1.4`, and redirect the retired US-based URL. Preserve the French-based inferred stop and SDs: its sampled on-axis rays at 95%, 99%, and 100% pupil radius pass; the former US model clipped near-marginal rays at surface 5. Neither stop split is a published dimension. Four of seven elements retain catalog dispersion proxies; the three unresolved e-line elements remain unresolved.
