# Audit Log - MINOLTA AF 400mm f/4.5 APO G

Patent: JP 1996-327896 A, Example 1

## 2026-08-11 - Glass opportunity audit

- Visually rechecked Table 1 in local `patents/JPA 1996327896-000000.pdf`; L1/L2 are `1.49310 / 83.6` and L3 is
  `1.72100 / 33.4`. The patent names no supplier and publishes no secondary line indices or partial dispersion.
- The repeated `493836` coordinate has no public coefficient row inside the project compatibility guard. Its nearest
  reviewed fluorophosphate candidates miss the d-line limit by about `0.0039`, so L1/L2 now carry explicit unmatched
  dispositions while retaining their independently supported Minolta AD/APD family classification.
- Relabeled L3 to coefficient-backed SCHOTT N-KZFS8 as a catalog equivalent. Its evaluated coordinate differs from
  the patent by about `-0.000530 / +1.30`; the annotation leaves the production supplier unspecified.
- No geometry, authored patent constants, or APD numeric fields changed.

## 2026-11-14 — Source-backed finite conjugates

Patent: JP 1996-327896 A.

| Zoom / keyframe | Added distance | Source locator and matching gaps | Paraxial residual |
| --- | --- | --- | --- |
| 0 / 1 | 3000 mm, image-plane | PDF p. 4; ¶0017 defines the right-hand Table 1 endpoints (PDF p. 3): T6=43.262, T12=8.028 mm | +0.217910443 mm; +8.777903 diffraction depths; alternate -268.758106 depths. |

- Zoom 0: the patent prints “撮影距離３ｍ” without an explicit reference definition. The conjugate audit identifies the image-plane reference (`audit-resolved`).
- The authored gaps and image plane are retained.
