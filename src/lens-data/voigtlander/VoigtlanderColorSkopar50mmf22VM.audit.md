# Private authoring audit

Literal acquired-source transcription; scale 1; 13.99 mm final gap frozen before tracing. Geometry and twelve combined source-field diffraction results passed their native gates, with substantial wide-open edge clipping retained. No SD changed after native tracing; no refocus or commercial-glass substitution.

Color-Skopar 18 E1 is a separate source hold and is not included as an authored lens.

Additive independent qualification: Color50 rows31/38 remain aimed native noBracket failures. Separate analytical saved-state S9 sphere roots place them at radius10.39306722949 mm, outside frozen9.25 mm cap by1.14306722949 mm. Other8 raw failures carry native aim-blocked status. Native clipEvent alone is not used as independent proof; inferred-cap miss is not factory clipping. Original data, arrays, failures and archives remain unchanged; no native rerun.

## 2026-11-09 — Deployment validation

Independent check against the full JP 2025-187904 A (J-PlatPat, 17 pp.; page 8 table): 13 surfaces plus STO, the
cemented pair at S8–S10 and D14 at both printed states agree with the file; all surfaces spherical (para. 0040).
Engine EFL 48.447 (printed 48.455), F/2.254, ω 23.797°, f1/f2/f21/f22/f23 reproduce Table 1. Front page: Cosina Co.,
Ltd., inventor Tatsuya Moriyama, filed 2024-06-14, published 2025-12-25. Attribution: Cosina's VM construction
diagram is 7 elements / 6 groups with three APD elements at the patent's positions 2, 3 and 6; Embodiments 2 (8/7)
and 3 (8/6) do not fit. The maker drawing's air spacings differ by up to 3 mm, so the match is design-family level.

Deployment change: `maker` → "Voigtländer" to match the other Voigtländer files.

Open: Table 3 prints a close state (D0 642.00, D14 17.96; 0.70 m, the rangefinder-coupling limit) that the file
does not model; glass labels; wording. (All three closed in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Fields changed. The header comment was rewritten in plain English with every fact kept: printed versus derived
values, the stop row, how the rims were set, the Table 1/Table 2 nd and track differences, and the patent's L6–L8
naming. `subtitle` is now "JP 2025-187904 A, Embodiment 1 — probable match to the 2024 production lens". `specs`
are now 7 ELEMENTS / 6 GROUPS, DESIGN f = 48.455 mm, DESIGN F/2.254, ALL SPHERICAL and 3 APD GLASS ELEMENTS.
`catalog.closeFocusM.marketing` is 0.5, from Cosina's product page.

Focus. The Table 3 close state is added as printed: gap "14" (D14) holds [13.99, 17.96] and replaces surface 14's
`d`. `focus.closeFocusM` is 0.70245, the sum 642.00 + 42.49 + 17.96 mm from object to image. `focus.published` is
[1], with one conjugate at 642 mm to the first surface citing Table 3. The description says the printed close state
is the 0.7 m rangefinder-coupling limit and that Cosina's 0.5 m minimum focus is not printed or modeled.

Glass. Labels are exact catalog matches (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15), each confirmed with the label resolver:
L1 TAFD55, L2 FCD1, L3 FD225, L4 E-FD4, L5 TAFD25 and L7 E-FEL1 (HOYA), and L6 S-NBM51 (OHARA). L3 matches OHARA
S-NPH1 equally well; HOYA was chosen to keep one supplier where possible. The labels change only the modeled
secondary dispersion. `apd: "inferred"` stays on L2, L3 and L6, Cosina's coloured positions, with new notes giving
the catalog evidence. On the patent's own normal line (¶0010), FCD1 gives ΔPgF = +0.0375, matching the printed
Gr1P-ΔPgF = 0.0374. Roles were rewritten from the patent's paragraphs.

Analysis. The file was rewritten to the spec skeleton. It now carries the product facts, the attribution and its
caveats, the Cosina diagram comparison and a glass table with θgF and ΔPgF. The stop statement is corrected: the
13.45 mm stop station is the sum of the printed 4.28/6.31 mm spacings, not a printed value. Private Drive links,
hashes, native ray-count tables and MTF grid tables were removed. In this file, the baseline-hash and archive
sentences were removed from the first entry.

Engine numbers before and after are identical: EFL 48.4468 mm, F/2.254, half-field 23.797°, stop radius 8.1111 mm,
paraxial BFD 13.9809 mm, track 56.48 mm. The close row was infinity only (closeFocusM 1e15). It now focuses
paraxially 641.46 mm ahead of S1 with the image plane held at the infinity offset: 701.90 mm object to image at
−0.0819×, 0.08 % from the authored 702.45 mm. audit:surface reports no errors. audit:aperture reports the lens within
3 % of its f-number, with no rim, trace or iris limit.

Open: at f/4 and the 23.8° edge, the rims of S11–S14 trim 38–80 % of one side of the beam, and S13's 9.25 mm cap is
slightly under the roughly 9.45 mm read from Fig. 1. Rims were left unchanged in this pass. (Rim item closed in the
semi-diameter pass below: S11/S12 match Fig. 1 exactly and S13/S14 lie 4–5 % under it, so that vignetting is
kept.) Cosina's section draws the stop space about 3.2 mm shorter, S10–S11 about 3.5 mm longer and S12–S13 about
2.1 mm shorter than Embodiment 1, so the production spacing is unconfirmed.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/JP2025187904A.pdf` (J-PlatPat, 17 pp.), page 16, Fig. 1 (Embodiment 1, infinity). The native raster
is 301 × 300 ppi, rendered at 300 dpi. The axis is vertical with the object at the bottom, at x = 726.5 px. Vertex
crossings sit at y = 1368.5 (S1) to 566.5 (S14), 802 px for the 42.49 mm prescription, giving 18.875 px/mm. The
S14–S13 span (18.9 px/mm) and the S3–S9 span (18.86 px/mm) agree. Arc fits of S1 and S14 give a transverse scale
of 18.6–18.8 px/mm, so the drawing is isotropic within about 1 %; 18.8 px/mm was used across the axis. Rims were
read from both sides with figprofile and per-row ink runs; leader lines were excluded by hand. Left and right
agree within 1 px.

| Surface | Start sd | Fig. 1 | Final sd | Evidence |
|---|---:|---:|---:|---|
| S1 / S2 (L1) | 12.0 / 11.5 | 11.65 square | 12.0 / 11.5 | within 3 %; S1 at 11.7 costs 1.8 points mid-field |
| S3 / S4 (L2) | 11.25 | 10.9 square | 11.25 | within 3 % |
| S5 (L3) | 10.25 | 10.0 | 10.25 | within 3 % |
| S6 (L3) | 9.25 | 9.0, flat land to 10.0 | 9.25 | within 3 % |
| S8 (L4) | 9.5 | 8.56 | 8.7 | figure; step order with L6 |
| S9 (cemented) | 9.25 | about 8.3 | 8.7 | figure, held up for wide-open light |
| S10 (L5) | 9.25 | 8.26 | 8.7 | figure, held up for wide-open light; square with S9 |
| S11 / S12 (L6) | 8.75 | 8.75 | 8.75 | exact |
| S13 (L7) | 9.25 | 9.7, flat land to 12.7 | 9.25 | 4.6 %, noise |
| S14 (L7) | 12.25 | 12.7 | 12.25 | 3.7 %, noise |

The cemented pair was the one clear departure. The file drew it 0.5–0.75 mm larger than L6, but Fig. 1 draws it
0.2–0.5 mm smaller (L4 8.56, L5 8.26, L6 8.75 mm), a difference of about 10 %. At the figure's values the pair costs
6.2 points of wide-open light at 11.9° (infinity) and 5.9 at 10.9° (near state). S9 has to stay at 8.7 mm or above
to keep the loss within 3 points, and S10 at 8.6 mm or above. L5 is drawn square, so S10 follows S9, and L4 is not
drawn smaller than its cemented face, so S8 takes the same 8.7 mm. The result is level with L6 rather than 0.2 mm
inside it, and the 0.3 mm step between L4 and L5 in the figure is not reproduced.

Light, wide open, against the starting rims: the corner is unchanged at 32.5 % (23.8°, infinity) and 48.0 % (21.7°,
near state). The worst loss is 2.6 points at 11.9° (95.9 → 93.3 %) and 2.7 points at 10.9° at the near state
(98.6 → 95.9 %). There is no loss at f/2.8, f/4 or f/5.6 at either state. Clearance: the axial marginal ray reaches
7.85 / 7.53 / 7.06 mm at S8 / S9 / S10, under the 8.7 mm rims. The real-ray check flags no clipped axial ray or
blocked chief ray at either printed state. Engine EFL 48.447 mm, F/2.254, half-field 23.797°, stop radius 8.111 mm
and the traced 21.64 mm corner are unchanged. audit:surface, audit:image-circle and audit:aperture report no
errors, undersized surfaces or rim limits.

Cosina's section (`cc-VM-50_22-LDyutr.svg`, scaled to the same S1–S14 length) was used as a second check. It agrees
on 7 elements / 6 groups, the cemented pair behind the stop and APD glass at elements 2, 3 and 6. Its proportions
relative to L1 are L2 0.93, L3 0.85, L4 0.78, L5 0.76, L6 0.73 and L7 1.01; Fig. 1 gives 0.94, 0.86, 0.73, 0.71,
0.75 and 1.09. The two drawings disagree on the cemented pair against L6: Cosina draws the pair larger, the patent
smaller. Fig. 1 governs.

Open: S13/S14 sit 4–5 % inside Fig. 1 (9.7 / 12.7 mm), so the last element reads slightly small against L1. L1 is
drawn square at 11.65 mm against 12.0 / 11.5 mm. Both are within noise and were kept.
