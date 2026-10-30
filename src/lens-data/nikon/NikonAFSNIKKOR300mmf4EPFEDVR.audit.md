# Audit Log - Nikon AF-S NIKKOR 300mm f/4E PF ED VR

Patent: JP 2015-102852 A, Example 1, Fig. 1 (PDF page 16)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Compared the current diagram and every element band directly with Fig. 1. The front G1a taper, smaller G1b pair, LF waist, rear LC1/VR/LC2 train, and final L30 opening agree with the source silhouette.
- The automated photogrammetry screen is contaminated by the dense radius leaders and group brackets on this figure, so its outlier values were rejected in favor of the zoomed visual check as required by the SD audit procedure.
- No element shows strong figure evidence beyond the approximately 25% change threshold. No SD was changed.

### Materials, labels, and movement

- Retained the production-correlated one-ED and one-PF classification. L12 is marked inferred ED; the two unpublished DOE resins remain unresolved and uncolored.
- Added first-party HIKARI J-LLF1 Sellmeier coverage for L28 (`548455`) and resolved the compatible L14 substrate to a disclosed J-BK7A catalog-equivalent proxy.
- Shortened diagram annotations to the source roles D1, D2, LF, LC1, D3, and LC2 to prevent label collisions.
- Confirmed the single rigid LF doublet moves 13.489772 mm imageward from infinity toward the reconstructed near state. This prime lens has no zoom travel.

## 2026-10-29 — Fresh original-patent shape and glass reinspection

- Directly viewed `patents/JP2015102852A.pdf`: PDF page 16 Fig. 1 at 600 dpi, Table 1 on PDF pages 9–10, and ¶0042–0045 on PDF pages 8–9 (contact UV-curing DOE resins; d = 587.6 nm; θgF definition). Native figure raster is 300 ppi. S1–S29 vertex span gives approximately 5.39 native px/mm. Every exterior, cemented boundary and both resin/DOE interfaces was inspected. Source R/d, all 18 media coordinates, phase coefficients/order/reference-wavelength qualification and reconstructed LF motion remain unchanged.
- Approximate source cap/edge shares (one-native-pixel band ±(1+q)/edge): S5 q ≈ 0.91, edge 192 px, ±0.0100; S12 q ≈ 0.74, edge 104 px, ±0.0168; S15 q ≈ 0.84, edge 87 px, ±0.0211; S22 q ≈ 0.80, edge 54 px, ±0.0333. Figures are illustrative; these are endpoint estimates, not source clear-aperture dimensions.
- S5 retains cap 36.5 mm with land to 37.5 mm (adopted q .97333). S12 retains 19.6 mm with land to 20.7 mm (q .94686). These outward caps preserve the previous clear apertures. A 20.8 mm S12 rim crosses L16's edge by 0.080 mm; a 23 mm trial crosses by 1.799 mm. The full source-like height is therefore not forced. S15 inferred depth 2.66 mm gives cap 14.789045 mm / outer 17 mm (q .86994). A 2.55 mm trial failed: reach 14.6522 + .05 requires cap ≥14.7022 mm. S22 depth 1.23 mm gives cap 8.480454 mm / outer 8.6 mm (q .98610), deliberately outward of the source endpoint: the source-sized .80 mm trial requires ≥8.4436 mm after beam clearance. Its .11955 mm land exceeds the .1 mm minimum.
- Rejected/retained: S23 needs cap ≥8.4839 mm; 0.54 mm depth gives too small a cap, while 0.55 mm leaves a land shorter than .1 mm. S24 beams reach its full 8.6 mm cap, requiring ≥8.65 mm, so no inferred trim fits. S19's nearly plane profile changes sag by only about 1–3 native pixels; a passing trial is insufficient source evidence for an endpoint break, so its original face remains. No other eligible resolved land was adopted. The DOE interfaces receive no cut/extension and the full compound outline remains connected.
- Fresh glass verdict: all 18 printed nd/νd pairs retained (16 physical glass elements plus two modeled source-stated resins). All 16 printed θgF ratios are now authored through ΔPgF = θgF − (0.6438 − 0.001682νd): L11/L12/L13/L14/L15/L16/L21/L22/L23/L24/L25/L26/L27/L28/L29/L30 = .5291/.5386/.5764/.5359/.5822/.5291/.5877/.5430/.5822/.5764/.6069/.5442/.5442/.5684/.5559/.5291. Conversion digits do not add precision to the rounded source values. L12 changes catalog Δ .0327→source-converted .0337332; the ED position remains a production-correlation inference. Removed 48 catalog nC/F/g overrides; no source line datum discarded. Sixteen compatible curves remain qualified proxies. The two resins have source θ dashes and remain unresolved material fallbacks, without invented supplier/chemistry or line data.
- Validation: focused surface/image-circle/aperture audits pass, no axial raise proposal. Dense cut probes (41×41 grid, .5° fields, .05 focus steps): S15 and S22 clear their margins with zero clipped/within-margin rays. All nine focus/zoom SVGs are finite, hidden trim zero, and visually inspected including the substrate/resin compound. No aspheres occur. Independent 47-media batch source/curve invariants and all 16 runtime θ ratios pass; shared dispersion/resolver parity tests pass (2 files / 93 tests).
