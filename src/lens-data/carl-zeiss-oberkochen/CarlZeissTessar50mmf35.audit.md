# Audit Log - Carl Zeiss Tessar 50mm f/3.5

Patent: CH 314381 A, Example 1  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott labels and patent constants | Retained | CH 314381 Example 1 gives `nd`/`vd` values only. The stored prescription matches the patent table after x0.500005 scaling; F8 and LF5 remain unresolved historical rows in generated reports, while the current annotations preserve the patent constants. |

### Phase 2 - Retained-information audit

- Rechecked Example 1 radii, thicknesses, glass constants, and back-focus scaling against the Swiss patent table; no prescription edits were needed.
- Confirmed the patent does not list semi-diameters. Stored SDs remain inferred from marginal/chief rays, f/3.5 stop requirements, production filter clearance, and the front-element edge-thickness limit.
- Stop placement remains inferred within the second air gap as documented in the data header; the patent gives the gap but not a numerical iris split.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements. The patent has no line-index or partial-dispersion data.
- The design intentionally avoids very high-index lanthanum glass; the highest-index conventional BAF10 element is already called out in the data and analysis.

## 2026-07-30 - Historical F8 catalog-equivalent recovery

- Rechecked the authored CH 314381 Example 1 coordinate for L2: `nd=1.59551`, `νd=39.2`.
- Relabeled the unresolved historical Schott F8 annotation to HOYA E-F8 as a catalog-equivalent spectral model.
  HOYA's obsolete-inclusive catalog gives `nd=1.59551`, `νd=39.22`, code `596392`, and formula-3 coefficients.
- The data and analysis explicitly leave the original patent supplier unspecified; no claim is made that HOYA supplied
  the historical melt.
- No prescription geometry or authored optical constants changed.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 1 → 1.052 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 5.2 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: derived unit-focus travel; 1 m is the old (production) value.
- `catalog.closeFocusM.marketing` 1 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-10 — Metadata fill

- `catalog.fNumber.design: 3.5` from CH 314381 p. 2, right column, lines 54–56: the Rechenbeispiele, Example 1
  included, are "für ein Öffnungsverhältnis von 1:3,5 berechnet" (no text layer; read from a 110 dpi render). The
  stop's `nominalFNumber` 3.5 matches it.
- `catalog.focalLengthMm.design: 50` from the same passage, lines 58–60: the radii and spacings "gelten für eine
  Brennweite von etwa 100 mm". Times the ×0.500005 scale in the data header this is 50.0005; it is recorded as 50
  because the source states the focal length only approximately. No optical value changed.
