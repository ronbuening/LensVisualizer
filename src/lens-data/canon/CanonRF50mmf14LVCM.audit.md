# Audit Log - CANON RF 50mm f/1.4 L VCM

Patent: US 2025/0251576 A1, Numerical Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US-20250251576-A1.pdf`. The Numerical Example 1 table publishes surface number, radius, thickness, refractive index, and Abbe number only; no clear-aperture or semi-diameter data are provided.
- Fig. 1 shows a fast normal-lens layout with a large front collector group, smaller moving focus units near the stop, and a broad positive rear group followed by a smaller field-flattening tail element.
- Stored SDs match that hierarchy: the front collector begins at 28.8 mm and tapers to the 18-23 mm range, the stop is 13.55 mm, the rear positive group returns to about 17-20.8 mm, and the final tail surfaces are 16 mm.
- No SD values changed. Current values remain inferred from the patent image height, computed entrance-pupil geometry, the production 67 mm filter thread, edge thickness, cross-gap sag, and per-element SD-ratio constraints.

## 2026-10-30 — Original shape, hybrid and glass review

**Source:** exact local `patents/US-20250251576-A1.pdf`, Numerical Example 1, PDF p16/printed p6 (surface, asphere, infinity/near gap and summary tables); Figure 1 p2; aberration Figures 2A/B p3. Front page p1 verifies Tomohiro Ino, Canon, publication 2025-08-07, filing 2024-12-05 and priority 2024-02-07. Definitions 0061–0070 p15; hybrid paragraphs 0024–0025 p12; Table 1 p20. Selected original is usable although image-only. Native pages 2560×3300 at≈300/301 ppi;600 dpi would upsample about 2×. Optical scale≈1,500px/102.85mm=14.58px/mm; endpoints±2–3native pixels (±.14–.21mm), plus schematic/calibration uncertainty. Brackets/arrows/leaders excluded.

### Every element, concave end and bond

Fresh native Figure 1 and actual SVG comparison replaces the earlier retained-information-only review. Adopted outline caps: S1/2=23; hybrid 3A/4=21.7; D1 shared/rear7/8=20.2; E6 9/10=21.2; E7 11/12=17.7; E8 13/14=16.2; E11 19/20=16.9; E12 21A/22A=18.4; D3 23/24/25=18.7mm. These are figure-inferred radii, not source dimensions or production apertures. Every powered R/d, all source index pairs and three K0/A4–A12 sets, primary stop, iris and focus controls remain unchanged. Prepared vertex parity is exact across 65 focus states.

The hybrid layer is genuine source resin on glass, center thickness .11mm. Its front 3A/shared4 caps now coextend at 21.7 rather than 24/23.5, removing the unsupported resin wing. Sampled minimum layer thickness is +.04707976mm at radius 15.273706mm. Shared resin/glass and cemented boundaries 4/7/17/24 remain optical, without opaque lands or extra cement chemistry. All concave ends were inspected; no justified source or inferred cut is added.

Resolved outer shoulders are S5 clear 18.2/outer 21.7 and S6 clear 18.2/outer 20.2. Their retained clear caps reflect a real constraint: native-inferred 20.2 caps fail the unchanged 9.65mm gap/.90 sag policy, intrusion 10.829173mm versus 8.685 allowed and physical overlap. Existing 18.2 caps give 8.665970mm intrusion. Tail S26 remains 16: native 18.7 gives 10.060026mm intrusion versus 8.181 allowed in 9.09mm, with physical overlap. An outer-only 18.7 trial retaining clear 16 also fails guard at 8.277722mm despite positive air. Actual scratch surface trials reject all three. No R/d/neighbor cap/guard/cut is tuned to hide those drawing/model conflicts.

D2's native common blank is≈14.4±.14–.21mm; the literal published −400mm axial beam reaches S18 radius14.791466724mm and clips 4/49 pupil samples at 14.4. Adopted common 14.8 is an explicitly beam-supported inferred floor (Gaussian near supplement 14.791818751mm), preserving the square blank form rather than adding bonded-interface lands. S27 increases 16→16.1 because the published infinity 24.04° chief reaches 16.097947211mm; sampled margin is a tight .002052789mm. Source tail≈18.7 is not falsely claimed as adopted. Baseline near SVG secretly trimmed S14 by 1.036637653mm and S16 by .836637642mm; corrected caps remove all trim without changing source powers or cams.

### Every modeled medium and spectral qualification

Checked all 15 nd/vd pairs directly in p16, including the resin. Paragraphs 0061–0063 p15 explicitly define d 587.6 nm/F 486.1 nm/C 656.3 nm; plot g 435.8 nm is in 0070. Added explicit d provenance to all 15 media. Table 1 p20 genuinely prints E1 vd1=20.881, consistent with prescription 20.9 rounding; the literal prescription pair remains 20.9 and the summary value is recorded separately.

The selected original gives no numerical C/F/g indices, partial ratio/deviation or normal line: removed 24 catalog-derived line overrides from eight media. Fourteen compatible curves remain exactly identical (E-FDS1, S-NBH5, NBFD29×2, S-LAH96, TAFD35, TAFD37A, S-FPM2, NBFD32, FCD1, S-LAH65VS, S-LAH99, S-TIL25, S-TIH10). Resin remains unidentified with no compatible catalog curve. Curves are approximate spectral proxies, never production supplier/melt/chemistry proof. Source supports resin construction, not UV curing; neither its table nor the reviewed material paragraphs establish E12 glass molding or catalog-derived fluorophosphate/lanthanum chemistry. Actual labels, roles and analysis now carry those qualifications. No source APD or numerical partial override is invented; production UD placement remains inferred.

### Published states, interval supplements and SVG

Source infinity and near gaps remain literal: d10 3.76→1.46, d12 3.66→5.96, d15 11.67→7.27, d22 2.68→7.08 mm. Paragraph 0068 defines object distance from image plane; source near −400 mm means object 282.49 mm ahead of S1 in the literal model. Actual finite-object source-plane rays pass 49/49 axial samples. Gaussian near gives 399.791635 mm object-to-image and m −.155179252; literal 400 mm plane has paraxial residual B −.032333865 mm. No focus spacing is fitted to erase that residual.

Separate 65-position grids: collimated focus-adjusted geometry, and Gaussian actual finite-object supplements at every nonzero focus. Both pass 3,185/3,185 axial samples and 195/195 chiefs, 0 failed seeds, 0 hidden trim. Gaussian angular/paraxial bundles at 0/.6/1: infinity 49/38/6, half 49/36/8, near 49/36/10. Collimated near 49/38/17. Linear intervals and their Gaussian distances are illustrative, not published rows.

Finite fields use paraxial object heights (21.65×fraction)/A, not inverse-solved distorted corners. Literal source 400 mm plane with 21.64 mm paraxial reference gives .6/1 chief image heights 13.052354/21.896866 mm and bundles 36/10. An additional first-vertex 24.04° finite object-angle probe gives 19.755399 mm and 19/49 at its largest point; that convention is not an independently printed source object-field height. No true finite-corner reach follows. Source infinity 24.04° chief reaches 21.921115 mm, bundle 4/49, with≈+1.33% distortion versus native Figure 2A≈+1.3±.1%. Generic inverse 21.65 mm field audit passes 100%; source paraxial image reference 21.64 mm remains distinct.

All 15 material SVG paths (14 counted physical elements) are finite, closed, connected across 65 focus states and nine duplicate zoom/focus display combinations; no hidden trimming or disconnected resin wing. Narrow canonical surface/image-circle/aperture/inverse-field audits pass: 0 undersized, 0 raises; full cut probe reports no inferred cuts. Source fidelity, sampled runtime clearance and production correlation are separate conclusions.

Infinity EFL 48.499053489/BFL 14.659917138 mm agree closely with source 48.50/14.66. Literal sum 117.51 differs from printed overall 117.49; paragraph 0065 includes back focus, so structured unresolved source.errata retains the .02 mm contradiction without a unique correction or invented plate. Retained S5/S6/S26 cap constraints, tight S27 floor, uncertain inferred rims/iris and finite-field convention limit production/physical-fidelity claims. Original 2026-07-04 review date is preserved. Full validation/report generation remains coordinator-owned.
