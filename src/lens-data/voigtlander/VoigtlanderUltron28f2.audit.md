# Audit Log - Voigtlander Ultron Vintage Line 28mm F2 Aspherical

Patent: JP2022-100641A

## 2026-06-23 - Full Voigtländer local-patent sweep

- Local patent source: `patents/JP2022100641A.pdf` (untracked local file).
- Rendered and visually rechecked Example 1, Table 1. The stored prescription and aspheric coefficients match the patent table.
- Confirmed the patent high-index condition through L3/L4 at nd=1.91082. No separate high-index flag change was needed.
- Updated L8 from `S-LAH60MQ (OHARA)` to `H-ZLAF68C (CDGM, patent nd/vd match)` for nd=1.88300, vd=40.81.
- Updated L9 label to `Unmatched (630581 crown/APD candidate; patent nd=1.62999, νd=58.12)` to preserve the patent code while avoiding a weak false catalog match.
- The patent does not list dPgF or semidiameters. L7/L9 APD status remains inferred from the manufacturer's two-APD-elements claim and glass-map position; the specific element assignment is not patent-confirmed.

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/JP2022100641A.pdf` (untracked local file).
- `pdftotext -layout` did not expose searchable table text; the local patent page image for Table 1 was rendered and visually checked.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / row 3 | 1.64769 / 33.84 | `E-F3 (HOYA) / SF2 (Schott)` | `E-FD2 (HOYA, patent nd/vd match) / SF2 (Schott)` | HOYA E-FD2 is the resolver-friendly match for the stored patent pair. |
| L3 / row 4 | 1.91082 / 35.25 | `S-LAH58 (OHARA) / N-LASF46A (Schott)` | `TAFD35 (HOYA, patent nd/vd match)` | HOYA TAFD35 clears the prior S-LAH58 mismatch. |
| L4 / row 6 | 1.91082 / 35.25 | `S-LAH58 (OHARA)` | `TAFD35 (HOYA, patent nd/vd match)` | Same glass as L3. |
| L5 / row 7 | 1.76182 / 26.61 | `E-FD15 (HOYA) / N-SF14 (Schott)` | `S-TIH14 (OHARA, patent nd/vd match)` | OHARA S-TIH14 clears the prior E-FD15 mismatch. |

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a JP2022-100641A PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for JP2022-100641A / `100641`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.

## 2026-08-18 — Element 9 J-PSKH8 coefficient assignment

- Located and visually checked `patents/JP2022100641A.pdf`, PDF page 7. Element 9 remains patent code `630581`, `nd = 1.63058`, `νd = 58.1`.
- Hikari J-PSKH8 is within the runtime catalog-equivalent window (`Δnd = -0.001530`, `Δνd = +1.05`).
- Relabeled element 9 as a J-PSKH8 optical equivalent while leaving the production supplier unspecified. No prescription or asphere geometry changed.

## 2026-09-09 — Source and live-view audit

JP2022100641A Example 1: table p.7, equation/definitions p.8 and Figure1 p.16 at600dpi. Retrieved JP7546909B2 grant to check malformed ASP18 A6; its table p.6 repeats −336E−07. Existing −3.36e−7 remains an inferred decimal repair, not a verified correction. Other source radii, thicknesses, glass coordinates, conics/polynomials and source-listed element FL retained.

- Subtitle author corrected to match verified Yoshihisa Yomogida/Yuki Shibata metadata. Removed unsupported APD headline and L7/L9 badges; qualified catalog counterparts and production/process claims. Added explicit source aperture2/full-frame format. Approximate SDs retained after original-figure review; no hidden trimming at0/.5/1, surface/image-circle checks pass.
- Source near distance430+60.2274+1.93=492.1574mm is now explicit. Printed table instead gives EFL28.579770mm, near beta−.06511085 and object-image509.816690mm; grant repeats the conflict. No gap/radius adjusted to force agreement. Source L9 FL−100 retained while noting derived−98.901619mm.
- Figure101 filter/cover omitted. Source lacks its thickness/index, so no independently documented air-equivalent conversion is possible; retained published ZD18 distance and recorded the limitation.
- Three source regressions pass. Production baseline and local infinity/near/midpoint/f22 inspected: near49cm/BF20.33, midpoint98cm/BF19.36, EFL28.58 unchanged, f22 stop1.36mm. All lenses/stop translate1.93mm together.

Follow-up: ASP18 A6, table/summary finite-conjugate mismatch and unspecified plate path. These remain qualified limitations, not fully verified patent reconstruction. Batch31–40 gates/commit pending.
