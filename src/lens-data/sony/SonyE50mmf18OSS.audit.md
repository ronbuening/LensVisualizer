# Audit Log - Sony E 50mm F1.8 OSS

Patent: JP 2012-242690 A, Example 2

## 2026-08-13 - Initial patent-figure, identity, and glass audit

- Reviewed ignored local `patents/JP2012242690A.pdf`, especially Example 2 Figure 8, against the new data and analysis sidecar.
- Corrected the inventor metadata to the required romanized names, Toshihide Hayashi and Naoki Miyagawa. This was the root cause of the failing patent-metadata test.
- Figure 8 showed that the initial L211 and L212 envelopes were materially oversized. Tightened surfaces 1-2 from 15.7/14.9 mm to 10.7/10.1 mm and surfaces 3-4 from 14.2/12.2 mm to 9.8/8.4 mm, preserving each element's internal rim taper.
- Confirmed the display name `SONY E 50mm f/1.8 OSS` and SEL50F18 production correlation.
- All nine physical glass media already resolve to trusted catalog curves, so no glass-catalog addition or relabel was needed.

## 2026-08-13 - Screenshot-led diagram and catalog-completeness review

- Re-rendered Example 2 Figure 8 from the ignored patent PDF and compared its oriented silhouette directly with the supplied site screenshot.
- Retained the first-element 10.7/10.1 mm envelope, revised L212 to 10.0/9.6 mm, tightened L213 and L214 to 9.0 mm, L215-L216 to 9.6 mm, L221 to 8.5 mm, and L232 to 9.8 mm. These are conservative figure-matching changes that still contain the f/1.85 and focus/OSS ray envelopes.
- Added the patent's L211-L216, L221, and L231-L232 identifiers to the diagram, plus an explicit OSS annotation over L214. The displayed name remains the verified `SONY E 50mm f/1.8 OSS`.
- Replaced opaque coordinate-only inspector text with the resolver-selected S-LAH55, TAFD35, H-ZF4A, NBFD15, J-SF03, J-SK16, TAC8, and J-SF6 catalog equivalents. Every one of the nine media remains covered by an existing trusted curve; supplier wording remains explicitly non-production-specific.
- Added no catalog glass: the current catalog already covers every medium, and the patent supplies no evidence for APD/ED tags or authored partial dispersion.
