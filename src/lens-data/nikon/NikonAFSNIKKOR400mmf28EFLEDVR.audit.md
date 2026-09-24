# Audit Log - Nikon AF-S NIKKOR 400mm f/2.8E FL ED VR

Patent: JP 2015-215559 A, Example 1, Fig. 1 (PDF page 45)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Compared the current diagram directly with Fig. 1. The dominant L11 front element, L12/L13 front pair, G1b doublet, compact focus group, stop, and four rear cemented-pair labels reproduce the source's relative silhouette.
- Figure leaders, group brackets, and crossing rays contaminate the automated rim screen. The zoomed source figure does not support any further SD adjustment above the audit's approximately 25% evidence threshold.
- No SD was changed.

### Materials, labels, and movement

- Added the official `2 FLUORITE + 2 ED` display specification. L11/L12 are the source-and-production-correlated fluorite elements; L15/L31 are the two inferential ED positions in this embodiment.
- Restored the source group labels G2 and G3b; focus and VR roles remain in group metadata rather than crowding the diagram.
- Confirmed published G2 travel is 15.400 mm imageward toward near focus. The source's +0.024 mm Bf endpoint change remains preserved and documented. This prime lens has no zoom travel.

## 2026-09-23 - Inventor romanization

- The JP 2015-215559 A front-page continuation names 三輪 哲史 at Nikon, the same Nikon inventor as the US front pages of US 2010/0220400 A1, US 2018/0031811 A1, and US 2021/0026133 A1, which all publish `Satoshi Miwa`. Normalized the inventor from Tetsushi Miwa to the corpus-canonical Satoshi Miwa in lens metadata and analysis prose.

## 2026-09-24 — Rear filter FL modeled as `rearPlates`

- Replaced the air-equivalent surface-31 gap (81.938849 mm) with Table 1's physical rear stack (PDF p. 24): the printed
  9.00 mm gap to FL, `rearPlates` surfaces 32–33 at 2.00 mm, nd 1.51680, νd 63.88 (J-BK7 catalog equivalent), then the
  printed Bf 71.551 mm. The +0.0692839947 mm FLG-removal refocus and the +0.024 mm close-focus Bf change stay on the gap
  ahead of FL (9.069284 → 9.093284 mm). FLG itself remains omitted.
- Nikon's user's manual says a filter must be inserted in the slip-in holder (40.5 mm NC filter supplied); FL sits behind
  the last lens, so it is a rear plate rather than a drawn element.
- EFL and paraxial defocus are identical at infinity and close focus. Physical track grows by 2.00 × (1 − 1/1.5168) =
  0.681435 mm to 391.019284 mm from surface 3 (patent TL 396.95 less FLG's 6.00 mm, plus the refocus); TL/EFL 0.998781
  stays telephoto. The close object-to-image distance becomes 2.590861 m; β is unchanged.
