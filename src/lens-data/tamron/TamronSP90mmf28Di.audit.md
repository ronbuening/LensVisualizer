# Tamron SP 90mm F004 — patent audit

## 2026-09-25 — MTF image-plane census

Exact local source: `patents/US9063253.pdf`, Embodiment 7, PDF pages 84–85 (columns 20–21), visually checked against the data. All 26 radii, thicknesses/gaps, 14 glass nd/νd pairs and the infinity, half-macro and full-macro variable distances agree. No scaling, aspheres or rear glass plate is specified. Infinity gaps are D7=1.2, D13=20.05, D14=14, D16=6.7201 and D19=1.7996 mm.

The terminal surface 27 is a zero-power air reference. D26=44.5749 plus D27=2.1644 gives the correctly authored 46.7393 mm; its other D27 values are 2.2044 and 2.1892. Independent reduced-angle tracing gives EFL 92.556418526 and BFL 47.033196600 mm, whereas the patent reports f=92.74 and a total track of 158.72 (the surface sum is 158.7349). The previously documented R4/derived-table inconsistency also remains: replacing −90.2962 with −92.2729 helps one group but worsens whole-system EFL. No single supported emendation reconciles these quantities.

**Cause/action:** source contradiction; retain the repeated prescription and published image path. Runtime offset **+0.293897 → +0.293897 mm**. Section E row deleted; continued census inclusion is expected. No user-visible numerical change or changelog entry.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-10-06 — Glass label canonicalization

The labels of L6 and L12 were written with OHARA's spaced typography (`S-FSL 5`, `S-TIH 6`), which the glass resolver
does not tokenize, so the two labels matched no catalog row and the elements were covered only through their
authored C/F/g line indices. They now read `S-FSL5` and `S-TIH6` in the data and analysis files and resolve to the
existing OHARA catalog rows (1.48749 / 70.24 and 1.80518 / 25.43, equal to the stored pairs within 0.01 in νd). No
index, Abbe number, line index or identification changed, and the authored line indices still drive tracing; all
fourteen labels now match a catalog row.

## 2026-10-30 — Fresh original shape and glass reinspection

`patents/US9063253.pdf` Embodiment7: complete source14media/prescription PDF84 and remainingfocusrows85, d-line definitions81, Figure25/PDF27 directly viewed afresh. Figure inspected at600dpi;, native300dpi;111.9956mm firstlastvertices≈3134px600→≈14nativepx/mm. Each convex/concaveface and cement boundary checked.

S5continuouscap20.5→22.5mm extends to its established doubletbody. S10/S11preserve12.8mm clearcaps with lands13/14.5mm. Sourcefull14.5mm frontlandfails neighbor intrusion5.078mm versus4.421allowed;13.1mm stillfails4.445mm. Adopt13mm connected conservativefrontbound,14.5mm rearsourcebody. No inwardcaptrim. Other weak corners/compound differences retained rather than inventing cementinterface features. All9 actualstates connected/maxtrim0.

All14nd/νd exact from original d-linetable, noactualadditionalindices/partialratio. Remove28catalog-onlyC/F/g/dPgF fields on7glasses; all14labels now resolvecompatiblecoefficients directly. Existing XLD/LDtagsremain inferred; FCD515 chemistry corrected to qualifiedfluorophosphateproxy, production supplier/melt unproved. The2026-10-06 historicalclaim authoredindices drive tracing is superseded. Preserve all R/d/sourceconjugates and+.293897mm paraxialimage residual, dummyairreference normalization and sourceR4/derivedtable contradiction. Identical-launch shape counts73335retained/0lost/495gained/70575bothblocked.

Verification: all52 modeled nd/νd pairs freshly source-checked(48physical glass substrates+4explicit hybrid layers); source R/d/asphere coefficients/focus/stop positions/tolerances invariant. Focused surface/image-circle/field/aperture pass:17stations≥99% source-format corner, all17apertures within3%; full shared inferred-cut guard0errors/no untracedfields. Actual nine-state SVGs per lens rasterized and viewed: connected compounds, max hidden trim0. Existing dispersion/resolver/partial-line3suites94tests pass. Exact identical collimated sample comparisons use144405rays/lens and the same baseline iris to isolate shape; not flux or a finite-conjugate transmission certificate. Updated B028 aperture is independently checked by its source-FNO guard/aperture run.
