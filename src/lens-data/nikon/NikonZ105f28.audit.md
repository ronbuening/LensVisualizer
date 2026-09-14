# Audit Log — NIKON NIKKOR Z MC 105mm f/2.8 VR S

Patent: WO 2022/097401 A1, expected source for the current prescription

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2022097401A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / surface | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / S4 | 1.59319 / 67.90 | `S-FPM3 (OHARA)` | `J-PSKH1 (Hikari, patent nd/vd match)` | Hikari catalog entry round-trips the stored patent pair. |
| L3 / S6 | 1.59319 / 67.90 | `S-FPM3 (OHARA)` | `J-PSKH1 (Hikari, patent nd/vd match)` | Same glass as L2. |
| L8 / S17 | 1.59319 / 67.90 | `S-FPM3 (OHARA)` | `J-PSKH1 (Hikari, patent nd/vd match)` | Same glass as L2. |
| L9 / S19 | 1.95375 / 32.33 | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA, patent nd/vd match)` | OHARA S-LAH98 clears the prior S-LAH79 mismatch. |

## 2026-06-04 — Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD25 from HOYA's first-party optical-glass PDF (`NBFD25`, code 855-252, nd=1.85451, vd=25.15, PgF=0.6103, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L12 and L32 from code-only `855252` annotations to `NBFD25 (HOYA, 855252)`.
- The local patent PDF is still absent from `patents/`; this pass did not use it for geometry/table verification.

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- The referenced patent was not present in `patents/`; searches for `097401` found no local file.
- A nearby file, `patents/US20220026670A1-2.pdf`, was checked and is unrelated to this Nikon macro prescription.
- Because the source patent was unavailable locally, no table rows were promoted from the current data alone.

### Glass disposition

| Element | Before | After | Disposition |
|---|---|---|---|
| L12 | `High-index APD flint (glass code 855252)` | `855252 — high-index APD flint...` | Kept unresolved in this May pass; resolved later as HOYA NBFD25 on 2026-06-04. |
| L32 | `High-index APD flint (glass code 855252)` | `855252 — high-index APD flint...` | Same glass as L12; resolved later as HOYA NBFD25 on 2026-06-04. |

### Catalog-search disposition

- Public catalog search did not produce a coefficient-backed exact `855252` match during this May pass; the June source pass found first-party HOYA NBFD25 data.
- Updated the analysis glass table to flag the local patent-source blocker rather than implying the row was reverified from the absent patent.

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- The referenced patent `WO 2022/097401 A1` is still not present in `patents/`.
- Local searches for `097401` / `97401` found no patent file.
- Because the source patent was unavailable locally, the current queue rows were not promoted from data-file values alone.

### Glass disposition

| Element / surface | Current label | Disposition |
|---|---|---|
| L2 / S4 | `S-FPM3 (OHARA)` | No change; source-patent blocker. |
| L3 / S6 | `S-FPM3 (OHARA)` | No change; source-patent blocker. |
| L8 / S17 | `S-FPM3 (OHARA)` | No change; source-patent blocker. |
| L9 / S19 | `S-LAH79 (OHARA)` | No change; source-patent blocker. |

### Catalog-search disposition

- Public lookup was not used to override labels without the local patent table.
- This lens remains unresolved until `WO2022097401A1` or an equivalent local patent source is available.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for WO 2022/097401 A1 / `097401`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.

## 2026-07-29 - Incompatible named-label audit

- Located and rendered the now-present `patents/WO2022097401A1.pdf`. Example 1, Table 1 confirms
  surface 11 (`R=28.6090`, `d=2.660`) and surface 22 (`R=23.8970`, `d=3.210`) at
  `nd=1.94595`, `νd=17.98`, matching L23 and L43.
- Replaced the incompatible `E-FDS3HT (Hikari)` annotations with HOYA FDS18 catalog equivalents
  (946180), while retaining the patent's unspecified supplier. HOYA E-FDS3 is 2.10420 / 17.02;
  FDS18 exactly matches 1.94595 / 17.98.
- Synchronized the glass-identification table. No prescription geometry changed.

## 2026-09-08 — First-hosted audit, lens 17

The source PDF is now present; earlier missing-source blockers are superseded.
WO2022097401A1 original PDF title1, equation(B)25, Table1 pp27–29,
Figure1 p55 inspected (figure600dpi).

- All28surface radii/thicknesses/indices and the full asphere retained after
  source verification. Source κ1 mapsstandardK0. All three source focus
  states retained; close distance0.29→0.287563m and middle coordinate revised
  using sourceD0 plus149.375mm optical track. Magnifications independently
  reproduced−0.500011/−1.000009.
- SourceθgF0.6103 onL12/L32 converted to engine dPgF0.0088023; copied
  patent deviation0.0095 used a different normal line. Removed unsupported
  third-ED/APD badge fromL44. All catalog labels qualified as inferred;
  existing numerical-compatible curves named and source nd/νd preserved.
- All16isolated focal lengths recomputed, correcting numerous stale values
  (includingL43+138.6→+107.2mm). Gap labels identify groups.
- Fig1 rims recalibrated: front23.2mm, internalrims refined, rear asphere18.3mm.
  Surface and imagecircle audits pass. Source infinity aperture2.89 replaces2.8;
  unreachable22/32shortcuts removed. Finite sourceFNO3.68/4.65 documented
  separately from the viewer's approximate effective-aperture calculation.
- Public analysis rewritten with source/model distinctions and no unverified
  production ED, glass supplier, manufacturing or working-distance assertions.
- Liveproductionbaseline and local∞/life-size/nearhalf-life-size/f16 inspected.
  Focuschart4groups/max20.74mm, G2/G3opposed and G1/G4fixed; stopfixed.
  EFL49.28 at29cm; EFL70.48 at38cm; f16iris4.63mm diameter.

Four focused physical regressions and TypeScript pass. Full batch gates due at20.
