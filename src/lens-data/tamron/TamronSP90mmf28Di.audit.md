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

## 2026-11-03 — Image-plane consistency (re-solve)

Source: local `patents/US9063253.pdf`, Embodiment 7 prescription and focus rows (PDF pages 84–85): infinity, 1:2 and
1:1 states, D26 = 44.5749 mm plus dummy-plane D27 = 2.1644 / 2.2044 / 2.1892 mm. LENS_DATA_SPEC § Image-Plane
Consistency: an inconsistency no single value isolates, so the air gaps are re-solved, back focus first.

| Field | Before | After | Justification |
|---|---|---|---|
| `gaps["26"]` (BF), ∞ / 1:2 / 1:1 | 46.7393 / 46.7793 / 46.7641 | 47.033197 / 47.073197 / 47.057997 | Paraxial focus at infinity; +0.293897 mm carried to the near rows |
| `gaps["7"]` 1:2 / 1:1 | 9.8415 / 19.2488 | 9.881766 / 19.171708 | G2, G3 and G4 moved together in the printed ∞→1:1 proportions until in focus at −0.5× / −1.0× |
| `gaps["13"]` 1:2 / 1:1 | 11.4085 / 2.0012 | 11.368234 / 2.078292 | Same move (D7 + D13 stays 21.25) |
| `gaps.STO` (D14) 1:2 / 1:1 | 9.2987 / 1.7 | 9.271259 / 1.752537 | Same move |
| `gaps["16"]` 1:2 / 1:1 | 1.0992 / 1.4506 | 1.087444 / 1.473108 | Same move |
| `gaps["19"]` 1:2 / 1:1 | 12.1217 / 19.369 | 12.160896 / 19.293956 | Same move |
| `focus.closeFocusM` | 0.3 | 0.2997 | Object-to-image distance of the re-solved 1:1 row (299.66 mm) |
| `focus.keyframes[1]` | 0.7976078358456278 | 0.8002367013116379 | 0.2997 / 0.374514 m, the re-solved 1:2 row's distance |
| `catalog.closeFocusM.marketing` | — | 0.3 | Tamron's figure, now distinct from the model value |

- Residual: infinity +0.293897 → 0 mm (32 depths at F2.89). The printed 1:2 row traced to −0.49428× and the 1:1 row
  to −1.00033×; the re-solved rows trace to −0.50000× and −1.00000× in paraxial focus.
- Travel ∞→1:1: G2 18.0488 → 17.971708 mm, G3 12.3000 → 12.247463 mm, G4 17.5694 → 17.494356 mm. EFL at infinity
  unchanged at 92.5564 mm (printed 92.74); 1:2 81.7477 → 81.6877 mm (printed 81.62); 1:1 64.9771 → 65.1489 mm
  (printed 64.66).
- Close focus: 0.3 → 0.2997 m; marketing 0.30 m added (0.1 % apart, so the readout does not name it).
- Evidence for the class: EFL 92.556 vs 92.74 mm and track 158.7349 vs 158.72 mm with every cell matching; trying the
  Tables 1–2 Rn1 = −92.2729 mm for R4 moves the offset to −0.389 mm and EFL to 92.25 mm, so it is not the fix. The
  real-ray axial best focus (+0.389 mm) lay beyond paraxial focus, so the printed plane was not a best-focus plane.
- Rim clearance: the smallest moved gap is D16 at 1:2, 1.087 mm at the vertex; D14 at 1:1 is 1.753 mm.

Follow-ups:

- The R4 / Rn1 contradiction stays open as before; the re-solve does not depend on it.
