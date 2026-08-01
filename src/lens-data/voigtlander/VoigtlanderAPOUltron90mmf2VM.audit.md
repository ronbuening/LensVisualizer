# VoigtlanderAPOUltron90mmf2VM — Stage 4 Independent Audit

## Job card and scope

- **PATENT:** JP2026008235A
- **LENS:** Voigtlander APO-Ultron 90mm f2 VM
- **EMBODIMENT:** Example 1
- **OUTPUT STEM:** `VoigtlanderAPOUltron90mmf2VM`
- **Stage:** 4 — independent audit and clean delivery
- **Repository status:** `/mnt/project` was not mounted. No batch integration, metadata generation, full corpus test, build, Git operation, or publication action was performed.

JP 2026-8235 A, Example 1, remained fixed throughout the audit. The first pass used the patent, a new manual transcription, new calculations, and a fresh numerical glass search. The previous audit was consulted only after this pass had reached independent results.

## Independent source extraction

The critical source material was re-read from rendered patent pages rather than accepted from the existing pair:

- Patent page 9, Table 1: all 16 modeled planes, radii, spacings, d-line indices, Abbe numbers, and the two ZD16 focus values.
- Patent page 15, Figures 1–2: architecture, summary quantities, conditions, and the isolated Example 1 `νdn = 26.74` contradiction.
- Patent paragraphs 0047–0062: Example 1 structure, published values, and the confirming `νdn = 29.74` in paragraph 0059.
- Patent page 6: the exact anomalous-dispersion convention, `ΔθgF = θgF - (-1.61783e-3 × νd + 0.6414625)`.
- Patent Claim 7 and paragraph 0042: whole-system extension toward the object for close focus.

The fresh Table 1 transcription agrees with every radius, base spacing, index, and element boundary in the clean data file. The stop remains a neutral plane splitting the published surface-11-to-13 air space into 7.00 mm and 9.01 mm. Surface 10 correctly carries downstream `elemId: 6` and the L16 index; no synthetic cement layer is present.

## Production correlation and source discipline

Cosina's official product data were rechecked for the production identity: 90 mm f/2, 8 elements in 7 groups, 27.4° full angle, six abnormal-partial-dispersion elements, VM mount, full-frame coverage, 12 blades, and 0.9 m minimum focus. The official lens diagram was inspected independently. Its colored APD positions map to L11, L12, L13, L15, L16, and L31 when overlaid on Example 1's distinctive topology.

The correlation remains convergent rather than explicit: neither the patent nor Cosina names the other. Marketing values remain separate from the unscaled prescription quantities. The 63.3 mm product length is a mount-plane mechanical value, not the 60.39 mm first-to-last optical-surface track.

## Corrections made

| Item | Old value or wording | Corrected value or wording | Source location | Independent evidence | Downstream consequences |
|---|---|---|---|---|---|
| Production APD allocation | `L11.apd: false`; `L14.apd: "inferred"`; prose inferred six positions mainly from glass class and the six-of-eight statement | `L11.apd: "inferred"`; `L14.apd: false`; final mapped positions are L11, L12, L13, L15, L16, and L31 | Cosina official product-page lens diagram and six-of-eight statement; JP 2026-8235 A, Example 1 optical topology | The product diagram marks positions 1, 2, 3, 5, 6, and 8. Example 1 has an exact positional/topological match, including the cemented J1 pair | Updated element metadata, APD notes, glass table, correlation evidence, and chromatic-strategy prose. Prescription, EFL, powers, focus, Petzval, and geometry are unchanged |
| Production-correlation header | Header listed “whole-lens extension” among production-correlation evidence | Header now lists the matching all-spherical topology. Unit focus remains explicitly a patent-published model property | Patent Claim 7 and paragraph 0042; Cosina product/manual documentation | The patent publishes whole-system extension, while the manufacturer material checked does not explicitly state the internal optical motion | Header wording only. `focusDescription`, focus status, and the published surface-16 spacing states remain unchanged |
| Figure-derived semi-diameters | Front elements tapered too gradually in the rendered diagram | Revised the element envelopes to 23.0 / 21.0 / 18.5 / 16.5 / 16.0 / 12.3 / 12.0 mm from L11 through L31 | JP 2026-8235 A, Figure 1 | High-resolution relative rim-height measurements, checked against the supplied current diagram | The silhouette now follows Figure 1's progressively stronger front-group taper; first-order optics are unchanged |

No radius, spacing, index, Abbe number, surface label, element/group count, stop position, focal-length field, focus spacing, or patent attribution required correction. The first high-resolution check treated the element-envelope differences as drawing noise, but comparison with the supplied rendered diagram showed that their sequence accumulated into a visibly shallower taper. A second relative-height pass therefore adopted the Figure 1 proportions listed above.

## Source contradiction retained

Figure 2 prints Example 1 `νdn = 26.74`. Table 1 and paragraph 0059 independently print `29.74`. The clean pair continues to use 29.74 and explicitly identifies 26.74 as the rejected isolated contradiction. This was re-established from the patent rather than inherited from the prior audit.

## Independent paraxial verification

A fresh sequential height/reduced-angle trace and an explicit ABCD multiplication were run from the clean TypeScript arrays and cross-checked against the independent patent transcription.

| Quantity | Independent result | Source/reference | Result |
|---|---:|---:|---|
| Matrix cross-check maximum delta | `7.105e-15` | Independent implementations | PASS |
| Matrix determinant | `1.000000000000` | Unity for air-to-air centered system | PASS |
| Effective focal length | `87.264935507674 mm` | 87.28 mm | PASS |
| Front focal length from surface 1, signed | `-105.320513734933 mm` | Independent calculation | PASS |
| First principal plane from surface 1 | `-18.055578227259 mm` | Independent calculation; negative is objectward | PASS |
| Second principal plane from surface 16 | `-59.882332726043 mm` | Independent calculation; negative is objectward | PASS |
| Infinity BFD | `27.382602781631 mm` | 27.39997 mm stored/source plane | PASS within source precision |
| Surface 1 to surface 16 track | `60.390000000000 mm` | 60.38 mm rounded summary | PASS |
| Surface 1 to published infinity image | `87.789970000000 mm` | 87.78 mm rounded summary | PASS |

The unrounded prescription gives `TL/EFL = 1.006016557387` and `BFD/EFL = 0.313787005311`. It is therefore neither telephoto under `TL/EFL < 1` nor retrofocus under `BFD > EFL`.

## Pupils and f-number

| Quantity | Independent result |
|---|---:|
| Physical stop semi-diameter | `11.423277000 mm` |
| Entrance-pupil semi-diameter | `21.284129857562 mm` |
| Entrance-pupil plane from surface 1 | `57.426793900476 mm` |
| Exit-pupil semi-diameter | `11.412528086289 mm` |
| Exit-pupil plane from surface 16 | `-19.408764029906 mm` |
| Modeled f-number | `2.050000072629` |

Positive pupil-plane coordinates are imageward; negative coordinates are objectward of the stated vertex. The inferred stop radius reproduces the modeled F/2.05 to better than 1e-6.

## Focus verification

| State | Stored rear gap | Exact rear conjugate from rounded prescription | Stored-plane residual | Exact magnification magnitude |
|---|---:|---:|---:|---:|
| Infinity | `27.39997000 mm` | `27.382602781631 mm` | `+0.017367218369 mm` | 0 |
| 800 mm object | `38.36529000 mm` | `38.344735851231 mm` | `-0.163622942304 mm` | `0.125618990100` |

The normalized close object-to-image distance is `0.898755290 m`. The small residuals against the source planes are consistent with three-decimal radii/spacings, five-decimal indices, and separately rounded summary values. No internal or floating group was reconstructed.

## Power audit

| Unit | Classification | Focal length |
|---|---|---:|
| L11 | standalone positive | `+173.870249191 mm` |
| L12 | standalone positive | `+99.997912191 mm` |
| L13 | standalone positive | `+90.127289472 mm` |
| L14 | standalone negative | `-125.236730796 mm` |
| L15 | standalone positive | `+63.344277047 mm` |
| L16 | standalone negative | `-22.791322240 mm` |
| J1 | cemented net negative | `-36.602764196 mm` |
| G1 | in-situ group positive | `+214.990565326 mm` |
| G2 / L21 | positive | `+44.257818648 mm` |
| G3 / L31 | negative | `-77.161259361 mm` |
| G2+G3 | net positive | `+78.885191608 mm` |

The clean analysis correctly distinguishes L15 and L16 standalone powers, J1 cemented net power, and G1's positive in-situ behavior.

## Petzval and conditions

Petzval was recomputed at every refracting interface as `φ/(n·n′)`, including the real L15-to-L16 cemented junction. The sum is `+0.002358551155721 mm^-1`, with reciprocal `+423.989107709 mm` under the stored sign convention.

| Condition | Independent value | Requirement | Result |
|---|---:|---:|---|
| 1: `ndp` | `1.92286` | `> 1.85` | PASS |
| 2: `ΔθgF` | `0.031317790400` | `> 0.02` | PASS |
| 3: `ndp - ndn` | `0.15239` | `> 0` | PASS |
| 4: `νdn - νdp` | `8.86` | `> 0` | PASS |
| 5: `LB/Lf` | `0.798648648649` | `> 0.6` | PASS |
| 6: `f23/f` | `0.903973527844` | `0.75 < value < 1.3` | PASS |

## Geometry and rendering gate

- The final 23.0-to-12.0 mm rim sequence passes the repository surface validator with no edge-thickness, rim-slope, shared-gap, or stop-split errors.
- The image-circle audit reports no undersized surfaces.
- Every sampled 0.6-field and full-field bundle avoids first clipping at the cemented interface.
- The all-spherical design has no conic-domain or asphere-departure check.
- The supplied rendered diagram and patent Figure 1 were compared directly for the second-pass relative-height adjustment.

## Fresh glass audit

The numerical search was repeated by `(nd, νd)` without using the existing labels as the starting query. All stored labels remain defensible. L16 and L21 retain single-vendor names because the fresh current-catalog search found exact named matches; the other entries remain cross-vendor classes with supplier unresolved. Equal catalog pairs do not establish the actual production melt.

The corrected APD flags are separate from catalog identity. Only L15 carries a patent-published numerical `dPgF`. The other five positive APD flags are product-diagram mappings and do not supply line indices or prove three-wavelength apochromatic correction.

## Data/analysis consistency

The final analysis passes the current section order, patent metadata block, eight front-to-rear element subsections, glass labels, indices, focal lengths, focus states, source contradiction, conditional results, APD mapping, and verification-summary checks. No asphere section is present because `asph` is empty. Marketing and design quantities remain distinct.

## Targeted final gate

| Check | Result |
|---|---|
| Patent PDF rendered and critical pages visually inspected | PASS |
| Fresh prescription extraction against clean data | PASS, 16/16 planes |
| Python syntax compilation | PASS |
| Fresh Stage 4 verification script | PASS |
| Sequential height/reduced-angle / ABCD cross-check | PASS |
| Strict local TypeScript syntax/type check with a current-field stub | PASS |
| Exactly one STO / element references / cemented junction | PASS |
| Both published focus states | PASS within source precision |
| Pupil and modeled f-number | PASS |
| Standalone/cemented/group powers | PASS |
| Surface-by-surface Petzval | PASS |
| Conditions 1–6 | PASS |
| Edge thickness / rim slope / cross-gap / off-axis containment | PASS |
| Fresh glass candidate audit and corrected APD mapping | PASS |
| Analysis structure and shared claims | PASS |
| Prettier executable | NOT AVAILABLE; manual conformance checked against the supplied configuration |
| Repository `buildLens()` / `validateLensData()` | NOT AVAILABLE — `/mnt/project` absent |
| Repository production render diagnostics | NOT AVAILABLE — `/mnt/project` absent |
| Repository glass mismatch command | NOT AVAILABLE — `/mnt/project` absent |
| `generate:metadata`, full corpus tests/build, Git | NOT RUN by instruction |

The absent repository checks are integration checks rather than unresolved optical contradictions. The clean pair and the complete independent script are included so those checks can be run without reconstructing this audit.

## Sources

1. JP 2026-8235 A, “Imaging Lens,” Example 1, especially Table 1, Figure 2, and paragraphs 0047–0062.
2. Cosina, APO-ULTRON 90mm F2 product page: https://www.cosina.co.jp/voigtlander/en/vm-mount/apo-ultron-90mm-f2/
3. Cosina product optical-section diagram: https://www.cosina.co.jp/wp/wp-content/uploads/2024/12/VM-90_20-LDe-lkoq.svg
4. Cosina, APO-ULTRON 90mm F2 VM release notice: https://www.cosina.co.jp/news/%E3%83%95%E3%82%A9%E3%82%AF%E3%83%88%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BCapo-ultron-90mm-f2-vm-%E7%99%BA%E5%A3%B2%E6%97%A5%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/
5. Cosina, APO-ULTRON 90mm F2 VM instruction manual, Version 1.0: https://www.cosina.co.jp/wp-content/uploads/2025/01/VM-90_20-JPN-V1_0.pdf
6. HOYA, Glass Cross Reference Index and current optical-glass data: https://www.hoyaoptics.eu/glass-cross-reference-index
7. HIKARI, complete optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx
8. SUMITA, Optical Glass Data Book Version 14.01: https://www.sumita-opt.co.jp/download_files/ja/data/glassdatabook_ver14.01.00.pdf
9. SCHOTT, N-PK52A datasheet: https://media.schott.com/api/public/content/a2a92fcce8144b9eaa7f5dcd2666d258?v=09326c27
10. SCHOTT, N-SF66 datasheet: https://media.schott.com/api/public/content/c2e0c3a77dcb4c94b349424ee621ee32?v=3320661c
11. CDGM, H-ZF10 and H-ZF62 optical-glass datasheets: https://www.cdgmgd.com/

## 2026-08-01 Repository Integration Gate

This final integration gate supersedes the earlier environment-availability notes. The stored prescription passes the repository surface and image-circle audits, and refreshed glass reports retain 8/8 strict and trusted chromatic coverage with zero catalog mismatches. Typecheck, format check, all 2,528 tests in 213 files, and the 990-route production build pass. Lint reports only the repository's three pre-existing type-assertion warnings and no errors.
