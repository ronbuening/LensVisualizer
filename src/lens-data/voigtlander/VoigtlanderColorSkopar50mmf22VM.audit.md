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
slightly under the roughly 9.45 mm read from Fig. 1. Rims were left unchanged in this pass. Cosina's section draws
the stop space about 3.2 mm shorter, S10–S11 about 3.5 mm longer and S12–S13 about 2.1 mm shorter than
Embodiment 1, so the production spacing is unconfirmed.
