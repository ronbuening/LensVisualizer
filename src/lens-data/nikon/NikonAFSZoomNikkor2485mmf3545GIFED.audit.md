# Nikon AF-S Zoom-Nikkor 24–85mm f/3.5–4.5G IF-ED audit

## 2026-09-29 — Initial repository integration

**Evidence:** exact local `patents/JP_2003241093_A.pdf`, Example 2, Table 4 on p. 5 and Figure 3 on p. 8.
Figure 3 was measured at 600 dpi and independently inspected at 300 dpi. Its approximately 78.21 mm glass span
corresponds to 0.0466 mm/pixel at 600 dpi. The scan axis slopes slightly; direct top-to-bottom rim readings take
precedence over automatic ENV/RIM values contaminated by the L1–L4 leader lines and G2 brackets.

| Surfaces | Before sd (mm) | After sd (mm) | Reason |
|---|---|---|---|
| 9 / 10 / 11 | 7.6 / 7.0 / 6.9 | 9.4 / 9.4 / 9.4 | Figure 3 G2 cemented-pair optical rim, approximately 9.5 mm |
| 12 / 13 | 7.1 / 7.3 | 8.8 / 8.8 | Following meniscus optical rim, approximately 9 mm; smooth group silhouette |

Other rims retained, including the stepped hybrid substrate. No stop or asphere sd change. The narrow G4 gap still
limits its optical rims; do not enlarge those to hide the documented outer-pupil vignetting.

**Glass:** all Table 4 coordinates checked; 15/16 material regions already resolve to compatible coefficient-backed
catalog proxies. The 1.55389/38.1 thin layer remains unmatched. Exact-coordinate source searches return unnamed resin
in other patents (for example [JP4900787B2](https://patents.google.com/patent/JP4900787B2/en)), not a transferable
commercial material with coefficients. No new catalog entry, production chemistry, or APD flag was inferred.

**Display:** retained Nikon's IF-ED name to distinguish this model from ED VR. Added explicit marketed f/3.5 and design
f/3.6 aperture metadata; the patent's 25.0–82.5 mm stations and f/3.6–4.7 calibration remain distinct from marketing.

**Lint root cause:** the derived close-focus D13 literal `13.829655105893672` exceeds JavaScript decimal precision.
Its round-trippable spelling is `13.829655105893671`; both parse to the same binary64 value, so this correction changes
no focus spacing at runtime.

## 2026-09-29 — Local diagram follow-up

**Local diagram review:** re-compared the live wide/tele silhouettes and cemented rims with Example 2 Figure 3
(PDF p. 8). The enlarged G2 rims remain closer to the optical outline; further changes lack strong figure evidence.
Explicit L1–L15 labels now preserve physical numbering around L4r/L4 instead of counting the thin hybrid layer as an
extra physical element. The figure's local G2 labels L1–L4 are distinct from this model's whole-lens numbering.

**Motion:** retained source order 25/50/82.5 mm. At infinity, G1, G3 and G5 move objectward as focal length increases;
G2 moves slightly imageward and G4 stays fixed. Near focus moves only G2 objectward by 1.4297/2.3129/3.9248 mm at
those stations. The patent specifies G2 focusing (¶0045); the direction and magnitude here are the constrained
0.38 m reconstruction, not a published close-focus cam. The live chart keeps G1–G5 in optical order.

**Glass and color:** L13 now names J-FKH1 explicitly as a supplier-unresolved compatible spectral proxy and receives
inferred APD color from that curve (catalog dPgF approximately +0.0337), consistent with the production single-ED
correlation. Patent coordinates and spectral behavior are unchanged. Coverage remains 15/16 regions; no supported
coefficient source was found for the unnamed 1.55389/38.1 hybrid layer.

**Assignee:** the exact patent front page lists 株式会社ニコン, already represented by the canonical Nikon Corporation.
The catalog keeps Nippon Kogaku K.K. as the historically distinct predecessor linked to the same corporate family;
no duplicate assignee spelling in this batch requires consolidation.
