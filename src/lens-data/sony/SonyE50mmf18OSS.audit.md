# Audit Log - Sony E 50mm F1.8 OSS

Patent: JP 2012-242690 A, Example 2

## 2026-08-13 - Initial patent-figure, identity, and glass audit

- Reviewed ignored local `patents/JP2012242690A.pdf`, especially Example 2 Figure 8, against the new data and analysis sidecar.
- Corrected the inventor metadata to the required romanized names, Toshihide Hayashi and Naoki Miyagawa. This was the root cause of the failing patent-metadata test.
- Figure 8 showed that the initial L211 and L212 envelopes were materially oversized. Tightened surfaces 1-2 from 15.7/14.9 mm to 10.7/10.1 mm and surfaces 3-4 from 14.2/12.2 mm to 9.8/8.4 mm, preserving each element's internal rim taper.
- Confirmed the display name `SONY E 50mm f/1.8 OSS` and SEL50F18 production correlation.
- All nine physical glass media already resolve to trusted catalog curves, so no glass-catalog addition or relabel was needed.
