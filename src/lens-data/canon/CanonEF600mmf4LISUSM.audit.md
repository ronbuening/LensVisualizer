# Audit Log - CANON EF 600mm f/4 L IS USM

Patent: US 6,115,188 A, Numerical Example 22 / Figure 85

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 56, Figure 85, at 600 dpi after rotating the vertical optical axis and excluding the omitted front
  protection glass and rear filter:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF600mmf4LISUSM.data.ts patents/US6115188.pdf 56 0.15,0.39,0.69,0.76 --rot90 --axis=0.578 --dpi=600`.
- Reliable optical-rim rows agree with the modeled silhouette: L1b is about 57.3 mm versus 60.5-63.8 mm, L2 is
  31.3 mm versus 33.0 mm, and L3a is 19.4 mm versus 20.0 mm. The front L1a ENV/RIM readings disagree at
  72.9/65.6 mm versus 77.0 mm, so they do not support a change.
- Figure labels and subunit brackets contaminate several rear automated rows. The uncontaminated rear optical rims are
  within about 18% of the modeled values, below the strong-evidence threshold.
- Retained all surface and stop semi-diameters. The image-circle floor reports zero undersized surfaces and the surface
  validator reports no geometry errors.

### Glass classification

- Numerical Example 22 publishes d-line index/Abbe coordinates but no production glass suppliers.
- Retained vendor-neutral coordinate-class labels and all 15 compatible Sellmeier curves. No new catalog row or
  source-defensible production-material identity was needed for this generation.
- The lens remains 15/15 strict Sellmeier and trusted-chromatic covered with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 600mm f/4 L IS USM` against Canon's official product identity and the repository's
  spacing policy.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling; the analysis retains the patent's
  printed Canon Kabushiki Kaisha wording.

## 2026-08-21 - Diagram-label and movement follow-up

### Patent-figure review

- Re-inspected Figure 85 at 600 dpi against the site screenshot. Optical rims remain within the accepted figure-reading
  uncertainty, so no semi-diameter change is supported.
- Replaced numeric element tags with the source-derived L1a/L1b/L1c/L2/L3a/L3b/L3c element identifiers already used
  by the prescription analysis.

### Glass and motion metadata

- Added inferred special-dispersion tags to the two production-correlated UD positions and the fluorite-coordinate
  position. No `dPgF` was invented because Example 22 publishes no partial-dispersion row.
- Confirmed that L2 translates 18.829163964 mm imageward from infinity to the modeled 5.5 m state, while L1/L3 remain
  fixed. This prime lens has no zoom travel.

## 2026-09-25 — MTF image-plane census

Source: local `patents/US6115188.pdf`, Numerical Example 22, PDF pp.78–79 (columns 32–33). Visually checked every R3–R29 radius, thickness and index, all 15 powered-element Abbe values, infinity D12=45.86/D15=98.91, and stop R16. All match, without scaling or aspheres. The source correction certificate does not amend Example 22. The declared finite-focus reconstruction is outside this infinity comparison.

**Cause: folded filter plus source image-distance contradiction.** Restored source FL surfaces 30–31 in rearPlates: 2.00 mm, nd=1.516330, νd=64.4 (the actual printed filter value), with D29=12.00 and trailing D31+D32=64.77+39.01=103.78 mm across inactive FC. The front HG plate remains omitted under existing rules; it adds no infinity optical power. No inferred glass identity was assigned to FL. Independent EFL 585.327789123 mm differs from printed 585.20, air BFL is 116.605717247, and physical BFL is 117.286743145 versus source image distance 117.78. No single source-backed misprint resolves the discrepancy. Preserve the source values. Runtime offset **-0.493257 → -0.493257 mm**. Section E row deleted; changelog records physical filter restoration.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
