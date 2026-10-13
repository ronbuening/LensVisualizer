# Audit Log - Ricoh GR III 18.3mm f/2.8

Patent: US 2019/0154946 A1

## 2026-06-23 - Patent table, Pg,F, and SD review

- Local `patents/` did not contain the cited US 2019/0154946 A1 PDF. For this audit, the publication was downloaded to `tmp/pdfs/US20190154946A1.pdf` from Google Patents and rendered for visual verification.
- Verified Example 5 / FIG. 23: f = 18.28 mm, F = 2.87, half-field = 38.2 deg. The table rows match the data file radii, spacings, glass names, nd/vd values, and Pg,F values. The filter row is correctly omitted from `surfaces` and included in the back-focus path.

| Element | Patent glass / Pg,F | Data-file disposition |
|---|---|---|
| L11 | OHARA L-BSL7 / 0.5333 | Backfilled `dPgF: -0.00275`; not APD; PGM by L-prefix. |
| L12 | OHARA S-TIM27 / 0.5922 | Backfilled `dPgF: +0.00638`; not APD. |
| L13, L21 | HOYA TAFD33 / 0.5701 | Backfilled `dPgF: -0.00618`; not APD; high-index glass retained. |
| L22 | OHARA S-TIM35 / 0.6030 | Backfilled `dPgF: +0.00988`; not APD. |
| L23 | HOYA M-TAFD307 / 0.5769 | Labeled `882372 - HOYA M-TAFD307` as a future-upgrade code; backfilled `dPgF: -0.00430`; not APD; PGM status retained. |

- The patent does not publish semi-diameters. Existing SDs remain estimates. They were checked against FIG. 5 / FIG. 23 proportions: compact front group, matched cemented doublet apertures, smaller stop, and larger rear double-asphere apertures are consistent with the drawing and the known APS-C field.
- No analysis-file correction was required for the prescription, but the data file now exposes the patent Pg,F-derived dPgF values.

## 2026-09-08 — First-hosted audit, lens 13

Primary source: ignored `patents/US20190154946A1.pdf`, Example 5, Fig. 5
(PDF p4), Fig. 23 (p16), equation p26, coefficients p27. Grant
`patents/US10948683.pdf` downloaded from Google Patents, Fig. 23 p17 and
coefficients p28, independently confirms the findings.

- S02 A6 corrected 5.30767e−6 → 5.30767e−7; the previous inference from
  neighboring examples was wrong. Both PDF originals have a legible −7.
- All other optical R/d/nd/νd and aspheric coefficients checked; retained.
  Named OHARA/HOYA glasses and PgF are actually printed in Fig. 23; retained.
  Isolated-element powers independently checked and agree with rounded labels.
- Both sources literally print final gaps 0.70 / 12.807 (glass) / 1.40.
  Fig. 5 depicts a thin filter near the image. Literal equivalent BF10.546051
  conflicts with independent BF14.431291. The inferred reordered sequence
  12.807 air / 1.40 glass / 0.70 air gives BF14.430282 (0.00101 mm agreement).
  Replaced incorrect physical-total air gap14.907 with14.430281871360455.
  This is explicitly an inferred source-table repair, not a literal source fact.
- Source ¶0132 supports integral focus, no numerical close station. Full
  paraxial 0.10 m object-to-image conjugate gives20.739542810277094 BF,
  6.309260938916639 mm travel. Removed unsupported normal/macro mode claims;
  labeled finite scenario and BF modeled. Design f18.3→18.28, shortcut2.8→2.87.
- Fig. 5 optical rims inspected at600dpi, calibrated against14.59 mm vertex
  length: S1/2=5.9/5.8; S3/4=4.9; S5=4.6; S7/8/9=4.4;
  S10/11=4.9 mm. These are drawing estimates, no tabulated clear apertures.
- Rewrote public analysis to expose source/model distinctions; removed
  unsupported production-identical and manufacturing assertions.
- Production live∞/10cm before; local∞/10cm/20cm midpoint and f2.87/f16
  after. BF14.43/20.74/17.58; movement chart two source optical groups,
  both objectward6.31 mm, zoom disabled, labels readable. Stop6.88/1.23 mm.
- Surface and image-circle checks pass; focused4 tests pass: source exponent,
  equivalent gap, full finite conjugate, rigid movement, no hidden rim trims.
  Full gates/commit pending batch11–20.
- Follow-up: source filter-row permutation remains inferred in both inspected
  publications; seek an independently corrected family table if available.
