# Source and numerical audit

- Whole US 6,618,197 B1 Numerical Example 2; probable family, not factory-exact.
- Literal prescription and frozen infinity plane retained; computed finite conjugates explicitly labeled where present.
- Stop/SD hypotheses selected before MTF; rejected shapes and all clipping/raw failures retained.
- Normal scalar native convergence is not independent phase/factory certification.
- Self-contained source/rebuild/report provenance and final integration receipts accompany private package.
- Model SHA256 `86d0c9959c3ffa7b44e408a8c76723b7ea2ba2f4f68c3b10a4921695bb62de5c`.

## 2026-11-03 — Deployment validation and cleanup

Source re-read: all 24 R, 23 D, 14 N and 14 ν of the Second Numerical Example were checked against the page image (col. 9, PDF p. 18). No mismatches; no aspheres; no printed near-focus spacings. The certificate of correction (PDF p. 22) changes only Example 3's D7. All fourteen N/ν pairs equal d-line catalog values.

First order: EFL 300.0225 mm against the printed 300.02301 mm; F/4.1 and 2ω = 8.4° as printed. Back focus 80.0042 mm and track 250.004 mm are computed, not printed. Table 1 values for Example 2 are reproduced: f1/f 0.486, |f2/f| 0.522, f3/f 0.446, |f4/f| 0.109, f5/f 0.186, f123/f 0.50; conditions (7) −0.24, (8) −3.21, (9) −0.48. LSA −0.026 mm at full pupil and distortion +1.24% at 4.15° agree with Fig. 5A.

Maker comparison: the Canon Camera Museum section (15 elements / 11 groups with a front protective glass; UD at the 2nd and 5th elements, E1 and E4 here; IS elements 11–13, E10–E12 here; 1.5 m, 0.24×) matches the topology, cemented pairs, element shapes and iris position. Measured gaps behind L2 and L3 (about 25.6 and 6.5 mm) favour Example 2 (25.50/7.00) over Example 1 (30.00/2.00). Glass differs at E4: FK5-class in Example 2, UD in Canon's section.

Fields changed, data step: S17 and S18 sd 12.7 → 15.0 and S21 12.7 → 14.5 (Fig. 4A reading; corner transmission at 4.1° 61.3% → 69.6%); `rimExtensionSd` 15.0 on S19 and 14.5 on S20, whose clear sd stays 12.7; `catalog.acceptsTeleconverters: true` (Extender EF 2x composes to f = 600.76 mm, F/8.21, 30.9 mm junction gap, no axial clipping); `focus.closeFocusM` 1e15 → 3.0 with derived gaps STO "D10b" 4.4 → 15.997638 and "13" "D13" 25.5 → 13.902362 (11.598 mm L2 travel, β = −0.109, not published).

Fields changed, wording step: header comment, `subtitle`, `specs`, element names L1–L14 → E1–E14 (the patent's L1–L5 are units), element roles, `indexReferenceNote` removed from all elements (the table passes the d-line coordinate test), focus description typography. Analysis rewritten in plain terms: patent title corrected to "Image Stabilizing System", per-element glass named as OHARA catalog equivalents, focus and rim statements updated, test-run text and the semi-diameter table removed.

Open: production glass at E4 (Canon UD) differs from Example 2. L2 alone reaches only about 1.60 m at 0.22× against Canon's 1.5 m and 0.24×. Example 1 remains a close alternative. The front protective glass is not modeled.

## 2026-11-03 — Semi-diameter pass against the patent figure

Source: US 6,618,197 B1, PDF p. 5 (sheet 4), Fig. 4A (Example 2 at infinity) and Fig. 4B (Example 2 focused at ten times the focal length, per col. 3); Fig. 6A (p. 7) transverse aberration at h = 15 mm and 0 mm. Measured on the native 72 dpi CCITT raster (1 px = 1 pt).

Scale: axial 5.618 px/mm from S1 vertex to the image-plane line (1404.5 px for 250.004 mm); S1 to S24 gives 5.638 and S7 to S22 5.606. Vertical: the image-plane line is 243 px tall, 43.2 mm against 2Y′ = 43.26 mm, and circle fits to the eight most curved surfaces give vertical/axial 0.97 to 1.06 (mean about 1.02), so the sheet is not anamorphic. The drawn axis drifts about 8 px across the sheet and the rear units sit 3 to 5 px above it, so each rim is half the top-to-bottom ink extent at the element's columns, independent of the axis line.

| Surfaces | Drawn rim | sd | Fig. 4A, mm | Ratio | Ray floor (axial F/4.1), mm | Result |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| S1/S2 (E1) | pointed | 37.5 | 36.5 | 0.97 | 36.59 at S1 | kept |
| S3/S4 (E2) | pointed | 35.6 | 34.4 | 0.97 | 34.62 at S3 | kept |
| S5/S6 (E3) | square | 35.6 | 33.9 | 0.95 | 33.82 at S5 | kept |
| S7/S8 (E4) | square | 27.8 | 27.3 | 0.98 | 27.22 at S7 | kept |
| S9/S10 (E5) | slanted end | 26.0 | 25.0 | 0.96 | 24.80 at S9 | kept |
| S11–S13 (L2) | square | 19.6 | 19.9 | 1.01 | 19.37 at S11 | kept |
| S14–S16 (L3) | square | 16.0 | 15.5 | 0.97 | 14.91 at S14 | kept |
| S17/S18 (E10/E11) | square | 15.0 | 14.75 | 0.98 | 11.92 at S17 | kept |
| S19 (12.7, land 15.0) | square edge, faces cross | — | edge 14.7, crossing 12.2–13.3 | — | 10.36 | kept |
| S20 (12.7, land 14.5), S21 (E12) | square | 14.5 | 14.15 | 0.98 | 10.03 at S20 | kept |
| S22–S24 (L5) | square | 17.3 | 16.6 | 0.96 | 10.15 at S22 | kept |

No value changed. The ratios cluster at a median 0.97 with no element more than 2 % off that median, inside measurement noise. The drawn size order E1 > E2 > E3 > E4 > E5 > L2 > L5 > L3 > E10/E11 > E12 is the file's order; the 0.5 mm the figure draws E2 above E3 is inside the noise, and the file's equal values are not a reversed step. Every square-cut element is square in the file. The drawn S19/S20 crossing agrees with the computed meeting of the two faces near 13.5 mm. Rims smaller than the file at E3, E5 and L5 would cut the corner beam further; the stored S5 already trims 20 % of one side of the full-field bundle and S24 9 %.

Fan check: in Fig. 6A the h = 15 mm meridional fan ends at −0.816 and +0.802 of the full-aperture fan width. The model at ω = 2.845° passes −0.828 (limited by S1) and +0.868 (limited by S20, with S14 just beyond). The S1 side agrees. The model passes slightly more on the rear side, but the figure does not support a smaller S14, S19 or S20 and a cut would cost corner light, so this stays a note.

Near state: Fig. 4B puts S10 to S11 at 33.2 mm and S13 to S14 at 13.3 mm, an L2 travel of 11.1 to 11.9 mm against the derived 11.598 mm (33.60 and 13.90 mm). No surface clips the F/4.1 axial beam or the corner chief ray at infinity or at 3.0 m.

Clearance and light, unchanged: half-field 4.20°, F/4.1, the traced chief ray reaches 21.65 mm at 4.1°, the validator passes, and no surface is under the image-circle floor. Wide open, geometric transmission at the corner is 69.6 % at infinity (4.1°) and 80.7 % at 3.0 m (3.9°).

Maker check: the Canon Camera Museum section draws 15/11 with a flat front protective glass larger than E1, UD at its 2nd and 5th elements (E1 and E4 here), the iris between E5 and L2, and the same cemented pairs. Rim heights relative to E1 agree with Fig. 4A and the file to about 0.03 (E4 0.74, E5 0.66, L3 0.44, E10/E11 0.40), except that the museum drawing shows L5 at 0.49 against 0.46 in Fig. 4A and the file; it is not drawn to scale, and the patent figure governs.

Fig. 4A draws the thin cemented members 0.3 to 1.4 mm thicker than printed (E7, E8, E11, E14), a drafting effect; the front vertices of E4, L2, L3, L4 and L5 sit within 0.25 mm of the table.

## 2026-11-03 — Second review: diagram, labels and movement

Compared: the local page at infinity, at the 3.0 m close state, with the focus-movement overlay and with the Extender EF 2x, against Fig. 4A and Fig. 4B (PDF p. 5, native 72 dpi raster) and the Canon Camera Museum section. Each rim was re-measured as half the top-to-bottom ink extent over the element's columns, at 5.618 px/mm (S1 vertex to the image-plane line, 1404 px for 250.004 mm).

| Element | Fig. 4A, mm | sd | Ratio | Ratio to E1, figure / file |
| --- | ---: | ---: | ---: | --- |
| E1 | 36.6 | 37.5 | 0.98 | 1 / 1 |
| E2 | 34.5 | 35.6 | 0.97 | 0.944 / 0.949 |
| E3 | 33.9 | 35.6 | 0.95 | 0.927 / 0.949 |
| E4 | 27.3 | 27.8 | 0.98 | 0.747 / 0.741 |
| E5 | 25.0 | 26.0 | 0.96 | 0.684 / 0.693 |
| L2 (E6/E7) | 19.9 | 19.6 | 1.02 | 0.545 / 0.523 |
| L3 (E8/E9) | 15.6 | 16.0 | 0.97 | 0.426 / 0.427 |
| E10/E11 | 14.8 | 15.0 | 0.98 | 0.404 / 0.400 |
| E12 | 14.15 | 14.5 | 0.98 | 0.387 / 0.387 |
| L5 (E13/E14) | 16.6 | 17.3 | 0.96 | 0.455 / 0.461 |

Every element is within 4 % of the figure's proportions and the height order matches; E1 and E2 are drawn pointed with a narrow land, E3 to L5 square, as on the page. The S19 and S20 face lines meet in the figure near 13.0 mm, above the 12.7 mm clear radius and below the square edges at 14.8 and 14.15 mm. No rim changed.

| Face | Kind | Baseline | Final | Figure | Light vs baseline | Verdict |
| --- | --- | ---: | ---: | --- | ---: | --- |
| All faces | cut | as baseline | unchanged | — | 0.0 pts | no cuts |
| S19 | land 15.0 over sd 12.7 | 12.7 + 15.0 | unchanged | edge 14.8, faces meet near 13.0 | 0.0 pts | keep: spacing |
| S20 | land 14.5 over sd 12.7 | 12.7 + 14.5 | unchanged | edge 14.15 | 0.0 pts | keep: spacing |

Removing either land wins back nothing. The 12.7 mm clear radius under them is the spacing limit: at 13.0 mm the validator refuses the 19→20 gap (combined sag 4.83 mm against 4.68 mm allowed of 5.20 mm), 12.8 mm is the last passing value and gains 0.4 points at 4.1°, and the Fig. 6A fan already ends slightly inside the model's on the S20 side, so the rim stays. Final worst loss against baseline: 0.0 points at every field.

Clearance and light: half-field 4.20° and F/4.1 before and after; validator, image-circle floor and corner coverage pass; no surface clips the axial beam or the chief ray at infinity or at 3.0 m. Wide open at infinity the corner (4.1°) passes 69.6 %. With a real object point 3.0 m from the image plane imaging to 21.63 mm (object height 195 mm), the corner passes 79.4 %, unchanged.

Labels: groups L1 (S1–S10), L2 (S11–S13), L3 (S14–S16), L4 (S17–S21) and L5 (S22–S24) are the patent's units with the right ranges; cemented brackets CD1–CD4 cover the four cemented pairs and do not clash with the D10b and D13 gap labels. Elements are E1–E14 because the patent uses L for units. Every `type` agrees with the signs of R, every element shows a focal length in the inspector, and there are no aspheric faces, as in the patent. The iris sits between E5 and E6 at 0.80 of D10; the museum section puts it at about 0.81. E1 carries the inferred APD tag at Canon's first UD position, and the inspector shows S-FPL53 and APD (INFERRED). E4 stays untagged: Canon marks it UD, but the modeled 1.48749/70.2 is an FK5-class crown.

Movement: the patent (cols. 3–4) focuses by moving L2 toward the image along arrow LF, and Fig. 4B shows it. The overlay shows only L2 moving, 11.60 mm toward the image, with keyframe 0 at infinity and the far end labelled 3.00 m. Fig. 4B measures 33.1 mm from S10 to S11 and 13.1 mm from S13 to S14, a travel of 11.4 to 12.0 mm against the derived 11.598 mm.

Colour and field against Fig. 5A: the d-line curve agrees (paraxial 0, 0.7 zone −0.053 plotted and −0.055 modeled, full aperture −0.031 and −0.026 mm). The model's g-line focus lies about 0.04 mm farther back than plotted in every zone (paraxial +0.148 against +0.11, full aperture +0.085 against +0.044 mm), beyond the 0.01 mm reading error. Every glass label resolves to a catalog curve within 0.07 of the printed νd, and the patent prints no partial dispersions, so no label stands out; the g focus is most sensitive to E3 and E8 (about +0.009 mm per +0.001 of θgF) and to E9 and E10 (about −0.007 mm). Distortion at 4.15° is +1.24 % modeled and about +1.28 % plotted; ΔS and ΔM are −0.009 and −0.025 mm modeled, inside the plot's line width around zero.

Open: the 0.04 mm g-line offset against Fig. 5A is unexplained by the printed data.
