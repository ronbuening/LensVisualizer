# Audit Log — LEICA SUPER-ANGULON-M 21mm f/3.4

Primary source: DE 1,273,853 B, sole example, published 25 July 1968.

## 2026-11-20 — Deployment validation and cleanup

An independent validator compared the patent page images with all twelve radii, eleven thicknesses and air gaps, the printed back focus, eight nd/νd pairs and the diaphragm space. The verdict was valid with notes: no transcription mismatches, correct first-order values and a strong Super-Angulon product association supported by Schneider, Macher, f/3.4, 90°, 8/4 construction, the 1963 launch and the sole example. The front page, prescription and Fig. 1 images were also inspected during this pass.

### Identity, source and product metadata

- key: `leica-super-angulon-m-21-patent-tuning` → `leica-super-angulon-m-21mm-f34`; visible: false → true.
- Name and maker retained exactly as `LEICA SUPER-ANGULON-M 21mm f/3.4` and `Leica`.
- Patent number `DE 1,273,853 B`, year 1968, sole-example metadata and assignee `Jos. Schneider & Co., Optische Werke` retained. Authors remain `Karl Heinrich Macher`, the corpus and US-family form; the DE front page prints `Karl Macher`.
- `leica-m`, `135-full-frame`, element/group counts 8/4, design and marketed focal length 21 mm, and design and marketed f/3.4 retained.
- Product close focus: absent → `catalog.closeFocusM.marketing: 0.4`, supported by [35mmc's review](https://www.35mmc.com/24/06/2019/leica-21mm-f-3-4-super-angulon-review/). [CineLensWiki](https://cinelenswiki.com/lens:leicamsuper-angulon21mmf_3.4) supplies the f/22 minimum aperture and 8/4 construction.
- Focus endpoint: 1 m → 1e15 m; description → “Infinity focus only; the patent supplies no near-focus prescription or focus movement.” The patent gives no finite state.
- Aperture series: ending at 16 → ending at 22; maxFNumber: 16 → 22, following CineLensWiki.
- Subtitle: a description of estimated apertures → `DE 1,273,853 B, Sole example — Schneider Super-Angulon production correlation`.
- Specs: repeated infinity labels and internal terminology → `8 ELEMENTS / 4 GROUPS`, `DESIGN f = 21.00 mm`, `DESIGN F/3.4`, `ALL-SPHERICAL`, `90° PATENT FIELD`.

[35mmc's review](https://www.35mmc.com/24/06/2019/leica-21mm-f-3-4-super-angulon-review/) confirms Schneider design/manufacture, the 1963 launch, 0.4 m focus and early-barrel M5/CL meter-arm interference. [AllPhotoLenses c_2888](https://allphotolenses.com/lenses/item/c_2888.html) corroborates the mount, format, launch and 8/4 construction; its f/32 and 1 m entries were not used. The metadata instead follows 35mmc for close focus and CineLensWiki for f/22 and 8/4. The evidence supports a strong association, without a manufacturer statement identifying this exact patent table as the factory prescription.

### Rims and prescription

- S1 sd: 12.5 → 14.2 mm; S10 sd: 4.8 → 6.5 mm, using the validator's Fig. 1 readings. Both changes admit additional 45° meridional rays and preserve valid edge thickness and air-gap clearance.
- S3 sd: 6.0 → 7.0 mm, following Fig. 1. Its gain is at 30° (meridional ratio 1:3.41 → 1:3.17) and 40° (1:3.94 → 1:3.76); the 45° ratio stays 1:5.87. Fig. 1 shows L2's beveled rim with unequal face extents, so its partner S4 stays 6.0 mm rather than being widened to make the element square.
- S12 stays 11.0 mm. Raising it to 11.5 mm adds no meridional light at 30°, 40° or 45°; the gain occurs at the checked 46.3° corner, outside the declared 45° field.
- The validator's exact spherical trace was reused at the helium d-line. Its meridional ratio, EFL divided by the admitted incident-height interval, changes from 1:12.8645 to 1:5.8733, compared with about 1:6.0 in the patent's Fig. 2. S1 alone gives 1:11.1633; S10 alone gives 1:6.3125. All four proposed raises give the same 1:5.8733 as S1/S10 alone. These widths are not radiometric illumination measurements.
- sdSource: `heuristic` → omitted, because the rims now combine figure readings and estimates.
- Floating-point noise rounded: R1 49.337399999999995 → 49.3374; R2 8.824200000000001 → 8.8242; R3 12.963299999999998 → 12.9633; R5 −7.398299999999999 → −7.3983; d5 1.0290000000000001 → 1.029; R9 −5.9807999999999995 → −5.9808; R11 −7.975799999999999 → −7.9758. No printed value, stop position, image plane or other prescription value changed.
- The printed 8.1900 mm image gap remains distinct from the computed paraxial 8.1930 mm. The midpoint stop remains at z = 24.02715 mm, consistent with the approximately 48% position in Fig. 1.
- L5 νd remains 42.82 from the German table; the US-family claim's 42.32 is recorded as a source difference, not substituted.

### Elements and glass labels

All prior glass labels were `Unmatched (source n=…, Abbe=…; supplier unproven)`. Each new catalog label was checked with trylabel against the retained helium d-line coordinates; signed differences below are catalog minus patent.

| Element | New label                         |       Δnd |       Δνd |
| ------- | --------------------------------- | --------: | --------: |
| L1      | K5 (Sumita)                       |         0 | −0.040000 |
| L2      | Unmatched (nd 1.72372 / νd 38.09) |         — |         — |
| L3      | BAF5 (Hoya)                       | +0.000002 | +0.086899 |
| L4      | FEL3 (Hoya)                       | −0.000005 | +0.060971 |
| L5      | S-TIL26 (Ohara)                   | +0.000002 | −0.002924 |
| L6      | BACD15 (Hoya)                     |         0 |         0 |
| L7      | S-LAM3 (Ohara)                    | +0.000004 | +0.027969 |
| L8      | S-TIL2 (Ohara)                    |         0 | +0.007127 |

Every assigned row meets |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15. The resolver selects Sumita for K5 and Hoya for BAF5/FEL3, including when a misleading Schott parenthesis is supplied; the stored labels therefore name the actual resolved vendors. The catalog curves do not establish the original supplier or melt. L2 remains unresolved. No catalog-derived line indices or APD tags were present or added; explicit indexReference `d` remains correct.

- Element focalLengthMm: absent → L1 −21.51, L2 −24.97, L3 7.49, L4 −15.30, L5 −11.97, L6 5.89, L7 −15.47, L8 −19.95 mm, from probe's individual-element powers in air.
- Element labels and radius-sign shape types retained; missing roles → plain descriptions of each meniscus or triplet member.
- Cemented identifiers: T1 → C1 on L2–L4; T2 → C2 on L5–L7. Missing annotations → one C1 bracket spanning S3–S6 and one C2 bracket spanning S7–S10, each covering a complete triplet.
- File form: `const data` → `const LENS_DATA`; quoted → identifier keys; one source/assumption JSDoc; matching default export; two-space formatting; no comments inside the object.

### Optical results and document checks

Before → after: EFL 21.02057436159031 → 21.02057436159032 mm; f-number 3.400 → 3.400; paraxial BFD 8.1930 → 8.1930 mm; authored image gap 8.1900 → 8.1900 mm; total track 53.0838 → 53.0838 mm; half-field 45° → 45°; derived stop radius 3.8283868476505303 → 3.828386847650534 mm. The last-digit differences are numerical rounding only. built.mjs loads successfully, and probe confirms all eight stored element powers and both triplet spans.

The surface audit reports OK with no validation errors. The aperture audit reports one station within 3% of the stated f-number, zero rim limits, and zero trace, iris or failed stations. The image-circle audit flags S11 (7.00 versus proxy floor 10.03 mm) and S12 (11.00 versus 13.21 mm), explicitly warning that its wide-angle exit-pupil proxy is unreliable. The validator's independent chief trace clears S11 at 6.46 mm and S12 at 10.05 mm at 45°; no rim was enlarged from the proxy alone. Field coverage reports 96%, 20.72 of 21.65 mm, limited by the declared 45° half-field; the 46.3° corner is clear. Neither audit skips the visible file.

The analysis now uses the exact lens name, all four required bold metadata rows and sections covering identification, architecture, elements, glass, focus, spherical surfaces, aperture/image-plane limits and sources. Internal terminology, broken spacing, unrelated model references and ray counts were removed. Its facts and numbers reflect the final prescription. The missing audit sidecar was created as this decision log.

Open: Remaining estimated rims and stepped clear-versus-outer triplet boundaries need a later full SD review. S3 now follows Fig. 1 at 7.0 mm; S12 remains 11.0 mm because the checked gain from 11.5 mm lies at 46.3°, outside the declared field. L2's material identity and all historical glass suppliers remain unresolved. The image-circle proxy warnings and the validator's 45° chief-solver limitation remain documented. No finite-focus state or factory prescription confirmation is available.

Second review fixes: S3 increased from 6.0 to 7.0 mm, improving the 30° and 40° meridional ratios from 1:3.41 to 1:3.17 and from 1:3.94 to 1:3.76; 45° remains 1:5.87. S4 stays 6.0 mm because Fig. 1 shows a beveled L2 rim, and S12 stays 11.0 mm because its checked gain is outside the declared field. The header and analysis now distinguish the patent's yellow d line from the helium d line (587.6 nm) confirmed by exact catalog matches. Distortion is stated as −1.32% relative to nominal 21 mm and −1.42% relative to computed EFL. Unsupported Leitz citations, product-code and 92° claims were removed; metadata follows 35mmc for 0.4 m and CineLensWiki for f/22 and 8/4. EFL 21.0206 mm, f/3.400, paraxial back focus 8.1930 mm and stop radius 3.8284 mm are unchanged. Surface geometry passes, the aperture has no rim limit, and field coverage remains 96% with the existing wide-angle image-circle proxy warnings.
