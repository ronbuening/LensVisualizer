# Nikon AF-S VR 200mm f/2 G — construction audit

The first aperture estimate was rejected at S9 before any ray tracing. The correction changed only four inferred semi-diameters and left every printed optical and image-plane value unchanged. The package's numerical records are not in this repository. S1 was changed again on 2026-11-02, below.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read. Table 3 (PDF p. 24) was read from the page image: 23 surfaces, 13 nd/νd/ng sets and the printed d1, d2 and B.f. at both states, with no mismatches. There are no aspheres. The front page agrees with the file: US 7,411,745 B2, Aug. 12, 2008, Mitsuaki Wada, Nikon Corporation.

First-order values, patent against model: f 195.000 / 195.002 mm; FNO 1.84 / 1.840; half-field 6.31° / 6.31°; B.f. 59.4575 mm printed and kept, paraxial 59.461 mm. Group values: f1 122.00 mm, f2 −41.92 mm, f1/(−f2) 2.91 against the printed 2.91. Longitudinal spherical aberration stays within ±0.014 mm, consistent with Fig. 8A. Close state: β −0.1257 against the printed −0.1258, object to image 1896.81 mm, 0.17% below Nikon's 1.9 m.

Public diagram comparison. Nikon's drawing, https://nij.nikon.com/cms/products/nikkor/fmount/af-s_vr_nikkor_200mm_f2g_if-ed/img/02.gif, was viewed in the coordinating review: ED on the first two positive elements and the rear element of the second doublet, Super ED on the meniscus, which are L1, L2, L6 and L4. Nikon lists 9 groups, 13 elements, 3 ED, 1 Super ED and 1 protective glass. Example 3 is the only example with 13/9 and three νd 82.6 plus one νd 91.0 elements. The association is family-level; Nikon's 1:8.1 sits closer to Example 6's β of −0.1235 than to Example 3's 1:7.95.

Figure scale. Arc fits of S1 and S3 give radial/axial ratios of 0.993 and 1.008, so Figure 7 is not anamorphic. L11 is drawn square-cut at 561–565 px × 0.0951 mm/px, 53.4–53.7 mm.

Fields changed. Data: S1 `sd` 57.5 → 53.5 and S2 `sd` 55 → 53.5; corner illumination at 6.3° 49.7% → 46.8%, worst loss 2.9 points (53.4 mm would cost 3.1). `gaps` for D10, D16 and BF from the printed rows; `closeFocusM` 1e15 → 1.9; `published: [1]`. Cleanup: header, subtitle, specs, `focus.description`, element roles, `apd: "inferred"` on L1, L2, L4 and L6, `cemented` tags D1–D4 → C1–C4, and new `groups` and `doublets`. The cleanup changed no optical value.

Open: S3, S5 and S6 sit about 2 mm above Figure 7 on a coarse reading; not changed or measured for light. Open: no `focus.conjugates` entry, because the patent prints β and no object distance. Open: L4's νd 91.0 glass has no public catalog row.
