# Audit — MINOLTA MC W.ROKKOR-SG 28mm f/3.5

Patent: JP1969-025743, Example 2.

## 2026-09-21 — Patent figure, glass and metadata integration

### Semi-diameters

Reviewed local `JPB 1969025743-000000.pdf, p. 6, shared FIG. 1` at 600 dpi and compared the optical outlines with the viewer. Enlarged the three front elements to reproduce the shared construction figure, with an approximate 45 micrometre/pixel axial scale at 600 dpi. Front optical rim heights are approximately 21, 19, 18.5, 18.5, 15 and 13.5 mm after excluding bevels. The rear four optical rims agree with the existing estimates; leader-contaminated automated readings are rejected. The common schematic is shape evidence, not an Example-2 manufacturing aperture table.

| Element | Previous maximum SD (mm) | New front / rear SD (mm) |
|---|---:|---|
| L1 | 15.4 | 21.0 / 19.0 |
| L2 | 12.2 | 18.5 / 18.5 |
| L3 | 10.2 | 15.0 / 13.5 |

### Glass classification

The patent reference coordinates are retained unchanged. Catalog curves are qualified spectral proxies unless the patent explicitly names the glass supplier; no production-melt identity is inferred from a coordinate match. Compatibility uses the authored d/e reference system, not a mixed-line comparison.

| Element | Before | After |
|---|---|---|
| L1 | Unmatched (source nd=1.6583, νd=58.5) | K-LaK11 class (coordinate-compatible spectral proxy; native d 1.6583/58.5; supplier/melt unproven) |
| L5 | Unmatched (source nd=1.7006, νd=30.1; SF15-class candidate not exact) | SF15 class (coordinate-compatible spectral proxy; native d 1.7006/30.1; supplier/melt unproven) |

### Metadata

Canonicalized `Minolta Camera Kabushiki Kaisha` to `Minolta Camera Co., Ltd.` without changing the patent-era entity.

### Live glass-label follow-up

Named the existing compatible spectral proxies explicitly while retaining coordinate codes and supplier/melt uncertainty: L2 → LAFN7, L3 → N-BK7, L4 → S-BAH10, L6 → LAC10, L7 → N-BK7. No spectral curve or patent reference coordinate changes.

### Live geometry and travel follow-up

Retained the enlarged first-three-element SDs after comparison with FIG. 1; the large front negative/positive/negative assembly now follows the optical rims. The four rear elements agree with the source and remain air-spaced. Focus remains explicitly not modeled. No zoom travel applies to this prime lens.

## 2026-09-25 — MTF image-plane census

Source: `patents/JPB 1969025743-000000.pdf`, Example 2 prescription on PDF page 3 and same-example Petzval coefficients on page 4, both visually inspected. Every one of the 14 optical radii, intervening thickness/gap, and seven nd/νd pairs was compared. The existing corrections of printed r9=+0.5260 to −0.5260 and r12=−5421 to −0.5421 are supported by the same-example Petzval values −0.7831 and +0.7722 respectively; retain them. No additional transcription discrepancy was found.

The f=1, F/3.5 source is uniformly scaled ×28, including BF=1.32 →36.96 mm. No aspheres, rear plate or separate close-focus station is printed. The inferred stop splits d6=0.7353×28=20.5884 into 19.46288+1.12552 without changing propagation. Independent reduced-angle tracing yields EFL 28.009933203 and BFL 36.714083215 mm. The remaining −0.245916785 mm image-plane offset is not resolved by either of the justified source emendations, and there is no evidence for another particular misprint.

**Cause/action:** residual source contradiction; preserve published dimensions and BF. Runtime offset **−0.245917 → −0.245917 mm**; Section E row deleted. No numerical data change or changelog entry.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
