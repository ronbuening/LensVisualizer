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

Retain `leica-summilux-m-35f14`, remove the source-edition suffix from its name, carry over explicit `apertureDesign: 1.4`, and remove the duplicate US-based entry. No redirect is needed because that entry was never published in production. Preserve the French-based inferred stop and SDs: its sampled on-axis rays at 95%, 99%, and 100% pupil radius pass; the former US model clipped near-marginal rays at surface 5. Neither stop split is a published dimension. Four of seven elements retain catalog dispersion proxies; the three unresolved e-line elements remain unresolved.

## 2026-09-16 — Local-site diagram and controls review

Reviewed the live SVG against the exact local patent figure cited above, including glass bodies, cemented interfaces, element identifiers, dispersion colors, and aperture/stop annotations. The model is a prime; no zoom travel is authored. Infinity prescription only; the patent gives no focus travel. The production lens focuses to 1.0 m.

Glass labels now name the actual selected catalog curve and explicitly separate the dispersion proxy from historical supplier identity. The selected curves have no positive ΔPgF large enough to justify an inferred APD tag; unsupported APD tags were not added.

Additional compatible curves (catalog minus source coordinates):

| Element | Patent index / Abbe | Runtime curve | Δn | Δν |
|---|---|---|---|---|
| L2 | 1.7899 / 48 (e) | TAF4 | 0.002048 | -0.741 |
| L4 | 1.7899 / 48 (e) | TAF4 | 0.002048 | -0.741 |
| L6 | 1.7899 / 48 (e) | TAF4 | 0.002048 | -0.741 |

## 2026-09-25 — MTF image-plane census

Classification: small source prescription/image-distance mismatch; no transcription fix supported.

Opened and visually compared local `patents/FR_1233449_A.pdf`, all three pages, especially Tableau 1 (p. 1), its repeated claim table (p. 2), and Fig. 1. Every one of the 12 radii, seven glass thicknesses, five air spaces and seven native ne/ve coordinates agrees after uniform ×35 scaling. R1=0.84171 and R12=−0.8417 intentionally differ in the last digit. The a2=0.2309 stop gap is merely split 75%/25%; its sum is unchanged. L7 retains the primary FR ve=47.69, as already documented, instead of the discrepant US family 47.59. All surfaces are spherical, with no cover/filter plate, scaling of refractive indices, or separate close-focus prescription.

The final a5=0.5469 scales to 19.1415 mm. Native-e paraxial EFL is 1.004090767 normalized (35.143176829 mm) rather than printed 1.0; BFL is 0.546183354 normalized (19.116417375 mm). Offset remains **−0.025082625 mm**, just over the census's d-line depth threshold of 0.023032423 mm; the propagation uses the source's native e indices. No single source misprint is identified.

The source discusses sagittal field and coma correction, but does not define the image distance as a best-focus compromise. A native-reference, axial geometric MTF diagnostic (812 rays, pupil grid 32, 10/20/40 lp/mm) selects −0.143916125 mm, score 0.146621 → 0.517552. That substantial finite-aperture shift does not establish that the printed image plane was chosen by a designer-best-focus criterion. Keep the published geometry and explicitly qualify the mismatch; remove the completed Section E row. No changelog entry.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
