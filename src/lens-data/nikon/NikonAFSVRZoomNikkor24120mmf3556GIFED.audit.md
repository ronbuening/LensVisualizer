# Audit Log — Nikon AF-S VR Zoom-Nikkor 24-120mm f/3.5-5.6G IF-ED

Patent: US 2004/0218274 A1, Example 2, Figure 5

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

- Figure 5 was compared directly with the supplied site screenshot. The reduced L33 aperture from integration matches the compact rear G3 member; no additional reliable deviation exceeds the action threshold.
- No additional SD change was justified. The image-circle audit remains clean.

### Labels and glass

- Added L11–L53 source identifiers as `diagramLabel` values and shortened the group annotations to G1–G5, matching Figure 5 and eliminating the screenshot's label collisions.
- Corrected the displayed product designation from `f/3.5-5.6 G` to `f/3.5-5.6G`.
- Marked L3AP and L51 as inferred ED/APD because the two `497816` elements match Nikon's two-ED production specification.
- Fifteen physical glasses resolve to Sellmeier curves. The only uncovered modeled medium is the unidentified bonded aspheric resin layer; it is intentionally not represented as optical glass.

## 2026-10-30 — Fresh original-patent shape and glass reinspection

- Directly viewed `patents/US20040218274A1.pdf`: Example 2 Fig. 5 on PDF page 6 at 600 dpi; Table 2 with all 16 media, aspheres and zoom rows on PDF pages 18–19; source asphere equation/κ convention and d-line definition on PDF page 17 (¶0077–0080). Native figure raster is 300 ppi. S1–S29 vertex span gives approximately 16.54 native px/mm. All external, cemented and modeled bonded-layer faces were inspected; no layer interface is cut/extended.
- Two clearly resolved long vertical concave-end strokes: S8 rear of L21 has approximate measured q ≈ .696 (edge 273 native pixels; one-native-pixel band ±(1+q)/edge ≈ .0062); S28 front of L53 q ≈ .895 (edge 243.5 pixels; ±.0078). Endpoint selection also carries visible ink-width uncertainty; these are figure estimates, not published clear apertures. S8 retains its 10.4 mm optical cap with land to 10.8 mm, adopted q .96296. A full source-like 14.4 mm rim would intrude 6.046 mm into the unchanged 6.5 mm S8–S9 gap, exceeding its 5.850 mm policy bound; the smaller supported land is the bounded partial height correction. The front aspheric layer and substrate interface retain their 14.4 mm caps; the compound stays connected with no detached wing.
- S28 inferred depth 4.35 mm gives cap 13.398351 / outer 14.0 mm (adopted q .95703). Measured-q depth 3.75 mm (cap 12.530 mm) failed the full-beam guard: reach 13.3094 plus .05 mm requires at least 13.3594 mm. The adopted cut is deliberately outward of the measured source cap; no source-depth bypass is used. Independent dense probe: 21 zoom × 21 focus states, grid 41, field step .5°, 9,714,791 rays. Refined reach 13.3087 mm at zoom 0/focus .95/field 42.398°, zero clipped or within margin.
- L33 S18A/S19 clear caps grow 7.2→8.0 mm, retaining a square element and removing the inherited nominal axial shortage. All source R/d, κ/K conversion, polynomial coefficients, focus/zoom/stop/aperture controls and check tolerances remain unchanged. Current public cap metrics: S18A at 8 mm −1.734078 µm departure /17.067320° slope; S6A unchanged at 14.4 mm +144.821169 µm /8.866914°. All other faces retain their geometry; no further eligible endpoint was established.
- Fresh glass verdict: all 16 d-line nd/νd source pairs retained; 15 physical lens materials resolve to compatible catalog curves, and the printed .2 mm, 1.55389/38.09 aspheric medium remains unresolved. Resin/composite technology and chemistry are explicitly inferred, not source-stated identities. L3AP/L51 labels now name the actual H-FK61 curve as a qualified low-dispersion proxy, removing an unqualified fluorophosphate chemistry assertion; source indices and runtime spectra are unchanged. The source prints no individual C/F/g or partial-dispersion datum. Existing ED/APD-inferred flags remain production correlations, without a source APD or APO claim.
- Validation: focused surface/image-circle audits pass and all three nominal aperture stations reproduce 3.604/5.4/5.903 within 3%; dense cut probe above passes. All nine SVG states finite/hidden trim zero and viewed, including the full compound outline. Independent 62-media batch source/curve/unchanged-channel guards and shared dispersion/resolver parity tests pass (2 files / 93 tests). Public cap/departure/supplier/chemistry prose synchronized.
