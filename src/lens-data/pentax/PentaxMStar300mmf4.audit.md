# Pentax-M★ 300mm f/4 source audit

The package shipped no audit file; this one starts with the deployment check.

## 2026-11-09 — Deployment validation

Independent check against US 4,293,197 Example 1 (PDF p. 6, claim 1 copy): 16 R, 15 d and 8 nd/νd pairs equal the
patent ×3; r10 = r11 with d10 = 0 is the cemented surface. Engine EFL 300.21 (100.07 at patent scale), F/4, half-field
4.5°, telephoto ratio 0.603 (printed 0.60); the printed condition values −0.85 / 7.16 / 2.23 reproduce. Front page:
Asahi Kogaku Kogyo, inventors Kobayashi and Okudaira, granted 1981-10-06. Attribution: the maker's booklet lists the
M★ 300mm f/4 as 8 elements / 7 groups, 8.3°, 4 m, like the A★ 300mm f/4, whose section drawing matches Example 1
element by element; Fig. 1 serves Examples 1–3, so the example itself is not proven.

Deployment change: this file.

Open: the L8 rim (16 mm) is about 2.5 mm under the patent and maker drawings; wording (closed in the cleanup pass
below).

## 2026-11-09 — Cleanup and wording pass

Data file:

- Header rewritten in plain terms; every fact kept (example, ×3 scale, printed vs derived back focus, merged 10/11
  surface, stop at 3.6 mm ahead of S9, inferred rims, 9° vs 8.3° field, no focus travel).
- `subtitle`: "US 4,293,197 A; representative patent reconstruction, 3× scale and inferred apertures" →
  "US 4,293,197 A, Example 1 — construction correlation with the 1981 production lens".
- `catalog.specs`: "8 ELEMENTS / 7 GROUPS", "ALL SPHERICAL", "QUALIFIED PATENT RECONSTRUCTION" → "8 ELEMENTS /
  7 GROUPS", "DESIGN f = 300 mm", "DESIGN F/4", "ALL SPHERICAL", "PATENT f = 100 SCALED × 3".
- `catalog.closeFocusM.marketing` 4, from the M★ row of Asahi's *SMC Pentax-A Lenses* booklet (printed p. 35).
- `focus.closeFocusM` 4 → 1e15: the patent prints infinity only and names no focusing group, so the lens is static;
  the description now says so and names the unmodeled 4 m retail figure.
- Glass, exact rows only (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15, each resolved with trylabel): L1, L2, L4 K-PFK80 (SUMITA,
  81.35); L3 S-LAH53, L5 S-LAH52, L6 S-FTM16, L7 S-LAH58, L8 S-TIM35 (OHARA). S-FPL51 and FCD1 (νd 81.55 / 81.61)
  miss the 81.3 tolerance and were not used.
- `apd: "inferred"` on L1, L2 and L4, the three ν 81.3 positions: the booklet (printed p. 33) says the A★ 300mm f/4,
  listed with the M★'s construction and specifications, uses special glass; the catalog equivalent has θgF 0.537,
  about +0.030 above the normal line. Neither source names the elements.
- Eight identical `indexReferenceNote` lines removed; `role` added to every element; group bracket text in title case.
- `cemented: "D1"` on L5 and L6 and a `doublets` entry D1 spanning surfaces 9 to 12, so the cemented pair carries its
  bracket and inspector tag (patent: r10 = r11, d10 = 0; claims call the pair cemented).

Analysis: the "Reference Plane and Qualification" section (process checks, MTF grid and sample counts, delivery
records) and the citation of a local secondary patent index file were removed. Added: the product (1981, only M★
lens, retail specifications), an attribution paragraph with its caveats (Fig. 1 serves Examples 1–3; at ×3 the front
vertex sits about 3.7 mm beyond Asahi's 132 mm barrel length, where Examples 2 and 3 fit better), the condition
table, group focal lengths (+105.6 / −46.5 / +521 mm), the glass table, image-plane and stop sections, the A★ 300mm
f/4 drawing comparison and a scope table.

Engine, before and after (identical): EFL 300.2096 mm, F/4.000, half-field 4.5°, stop radius 11.5494 mm, BFD
39.8130 mm, TL 181.1130 mm. Surface audit OK; aperture audit: 1 station within 3 % of f/4, no rim limit.

Open: the L8 rim (16 mm) is about 2.5 mm under Fig. 1 and the A★ drawing (rims unchanged in this pass). `blades` is
not set: the eight-blade figure comes from secondary listings, not from Asahi. The missing `cemented` tag and
`doublets` bracket on L5 and L6 were added in this pass (closed).
