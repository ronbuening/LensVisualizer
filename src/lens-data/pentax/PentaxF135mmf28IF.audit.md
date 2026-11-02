# smc PENTAX-F 135mm F2.8 [IF] — source audit

2026-11-01. Prepared against e1414bf50b190e20541b65b16ec278c120841f70.

The first review kept the printed surfaces, indices and Abbe numbers, the figure-based clear apertures, the stop location and the computed infinity image plane. It used closeFocusM = 1e15 with only the infinity gaps, and left out calculated conjugates, near-state interpolation and alternative iris positions (closed 2026-11-02: the printed close state is authored, closeFocusM is 0.7 and Fig. 3 supports the fixed iris). The rear rim stood at 17.238 mm, not the rejected 9.77 mm first value or a contrast-selected one (closed 2026-11-02: 18.30 mm from Fig. 1). maxFNumber 32 matches the manufacturer endpoint.

The earlier optical-path reference checks and diffraction estimates were not carried as evidence, and no per-lens test was added.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read: page images of US 4,793,698, Example 1. Checked 15 R, 14 d, 8 Nd/νd pairs and 3 variable gaps at both states, all exact at ×1.35; no mismatches. The page prints the d line. The front page agrees on number, date and inventor; it prints the assignee as Asahi Kogaku Kabushiki Kaisha, and the file uses the corpus form, Asahi Kogaku Kogyo Co., Ltd.

Erratum: the table and claim 7 print νd 27.5 for L4, where nd 1.76182 is SF14 class at 26.5. Paraxial g−d at f = 100 reads +0.067 on Fig. 2 and +0.453 on Fig. 3; S-TIH14 traces +0.068 and +0.452, and νd 27.5 gives −0.164 and +0.141. Example 4 prints 1.76182/26.5; Examples 2 and 5 print 1.78470/26.2 and Example 3 prints 1.80518/25.4 for that element. Recorded as `unresolved` because `corrected` takes no `vd` field: vd stays 27.5 and S-TIH14 catalog dispersion traces it at 26.5. The other seven pairs match their catalog equivalents within 0.2 in νd. Separately, the near d8 of Examples 4 and 5 is misprinted (19.690 and 26.023): 25.100 and 31.543 close the gap sums and reach m = −0.2500. Neither example is used here.

Patent against model: f 100 scales to EFL 135.007 mm (+0.005 %), F2.8, half-field 9.4°. The five conditional values reproduce: −1.8933 (−1.893), 0.3425 (0.343), 0.600, 0.1075 (0.108), 0.1407 (0.141). Back focus is not printed; 46.385 mm and 125.800 mm are computed. The printed near gaps give m = −0.2500, object-to-image 725.00 mm, 599.20 mm from S1, EFL 112.37 mm. Real-ray spherical aberration dips to −0.43 (Fig. 3 about −0.44). Distortion traces −0.59 % at 9.4° (Fig. 2 −0.64 %) and +2.36 % at Y = 16.5 (Fig. 3 +2.53 %).

Stop: Fig. 1 has no stop symbol. At 300 dpi its S8 and S9 vertices lie at 1069 and 1169.5 px, at 13.863 px per f = 100 unit; the 75 % plane falls at 1144.4 px. Fig. 3 reads S −0.27, M −0.57 at Y = 16.5. A fixed iris at 75 % traces −0.26, −0.58; moving with unit 20, −0.40, −1.0 or worse, with about 33 mm needed at L1.

Public diagram: Pentax's FA 135mm F2.8 [IF] drawing, on the asobinet page, shows a meniscus doublet and L8 taller than L7, and carries a mark between L4 and the doublet consistent with the iris. Enlarged, the doublet's faces sweep about 15, 55 and 40 px, close to Example 1's sags at 13 mm height (0.95, 3.17, 2.12 mm) and unlike Example 3's (1.26, 0.97, 2.30 mm). The drawing is low resolution and shows the FA, so Example 1 stays a fit, not proof.

Fields changed: L1 26.52→25.15, L2 25.81→23.98, L3 23.81→21.37, S8 18.58→16.10, L7 11.69→12.27, L8 17.238→18.30; closeFocusM 1e15→0.7; `focus.published` [1]; gaps at STO, 11 and 13; `source.errata`; header, subtitle, specs, focus description, element roles, group labels; doublet and `cemented` tags D1→C1. Corner illumination at 9.2° went 63.0→64.6 and no field lost light against the first review.

Open: L1 at 25.15 costs 4.9 points at 9.2° taken alone and passes only net of the L7 and L8 raises; L1 = 26 gives 67.7 and stays on the owner's list as a restore option.
Open: the 725 mm near state is about 3.6 % over the retail 0.7 m; the patent prints no distance to settle it.
Open: the F specifications come from public listings. The maker brochure citation was carried from the first review and not re-read, and the Pentax Forums entry was read through search excerpts only.
