# Audit Log — NIKON NIKKOR-O 2.1cm f/4

Patent: JP 1968-030782 Y1, Example 2 / Figure 2.

## 2026-07-26 — Figure-matched SDs, glass coverage, identity, and inferred focus

### Patent and identity evidence

- Reviewed the local publication `patents/JPY 1968030782-000000.pdf`.
- Measured the Example 2 section in Figure 2 on PDF page 4 after scaling the `f = 100` prescription by 0.21.
- Nikon's official historical title uses **NIKKOR-O 2.1cm F4**. The display name now preserves that period focal-length style.

### Semi-diameter audit

The patent has no clear-aperture table. Figure measurements were rounded to 0.1 mm and then checked with the surface
validator. `STO` was not changed.

| Surfaces | Before `sd` (mm) | After `sd` (mm) | Disposition |
|---|---|---|---|
| 1–2 | 13.0, 10.2 | unchanged | Already matched the outer front singlet in Figure 2. |
| 3–6 | 7.5, 6.4, 4.75, 4.0 | 7.7, 7.7, 4.3, 4.3 | Matched the front cemented triplet silhouette. |
| 7–10 | 3.85, 4.55, 6.1, 7.5 | 3.8, 4.2, 6.7, 6.7 | Matched the rear cemented triplet silhouette. |
| 11–12 | 9.5, 12.6 | 8.8, 12.0 | Matched the rear negative singlet envelope. |

### Glass audit

| Element | Before | After | Disposition |
|---|---|---|---|
| L4 | `582420 — QF5 class` | `LF3 (Sumita coefficient-backed equivalent), 582420` | Added the exact-code LF3 polynomial from Sumita's official all-glass catalog. |
| L8 | `643581 — LaK6 class` | `LAK6 (Sumita coefficient-backed equivalent), 643581` | Added the exact-code LAK6 polynomial from the same catalog. |

These are wavelength-tracing equivalents, not claims about Nikon's historical melt supplier.

### Focus audit

- The patent publishes only an infinity prescription and keeps every internal spacing rigid.
- Nikon documents manual distance-scale focusing for the production lens. Conventional unit focus is therefore a
  defensible inference, but is not claimed as patent-published movement.
- A finite-conjugate paraxial solve changes only final BF: 7.346549773 mm at infinity to 7.875785504 mm at the 0.9 m
  catalog endpoint, an inferred extension of 0.529235731 mm.
- The data and analysis explicitly label this state **inferred unit focus**.


## 2026-10-30 — Fresh patent shape and glass reinspection

Directly inspected local `JPY 1968030782-000000.pdf`, Example 2/PDF2 and Figure 2/PDF4, including all12 curved faces and four cement interfaces. Native347 ppi, rendered 600 dpi: the 47.4978 mm scaled vertex span gives approximately 20 native px/mm. Both singlet concavities have real flat end strokes: source cap/outer q≈.74 on S2/S11, with one-native-pixel bands about ±.007 before ink ambiguity. S2 keeps 10.2 mm clear height and gains a land to 13 mm (adopted q=.784615, outward from the source endpoint); S11 keeps 8.8 and gains a land to 12 (q=.733333). Every source optical cap is retained. No further concave trim is justified on the nearly planar inner faces. The triplet shoulders contain steps at powered cement interfaces; opaque glass/air land fields cannot reproduce those buried boundaries, so their guarded tapered approximation remains.

All eight printed n/ν pairs were checked directly and retained. The source uses n/ν without an explicit spectral-line definition; the conventional d-line interpretation is retained and qualified. Eight existing compatible coefficient curves are retained, now labeled as the actual spectral proxies: BACD16; J-BASF8×2; J-SF2×2; LF3; S-NSL3; LAK6. J-BASF8 is approximate (catalog-minus-source Δnd≈−.002980, Δvd≈+.23), as are the other historical coordinate matches; no production supplier or melt is identified. No partial dispersion or C/F/g data are supplied. All R/d, scale, inferred midpoint stop, unit-focus motion, image-plane solve and tolerances remain unchanged.

Surface and nominal aperture checks pass. The image-circle exit-pupil proxy flags the unchanged S11/S12 caps, explicitly warning that the wide-angle proxy is unreliable; the direct field-coverage trace reports≥99%, zero unsolved/skipped stations. No unsupported cap increase is forced to satisfy that proxy. All nine actual SVG states were inspected: finite continuous outlines and zero hidden trim. Shared glass suites pass 2 files/93 tests, with exact source-pair/curve invariants and a clean duplicate-key scan.
