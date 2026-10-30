# Nikon AF-S Zoom-Nikkor 17–35mm f/2.8D IF-ED audit

## 2026-09-29 — Initial repository integration

**Evidence:** exact local `patents/JP_2001083421_A.pdf`, Example 1, Table 1 on pp. 4–5 and Figure 2 on p. 7.
The Figure 2 crop was inspected at 600 dpi. Its 112.06 mm glass span gives approximately 0.1052 mm/pixel.
Automatic ENV/RIM readings around G1 and G3 include neighboring outlines/brackets and were rejected there.
Direct optical-rim measurements put G4 near 15.2–16.5 mm; original 12.4–13.0 mm rims visibly undersized it.

| Surfaces | Before sd (mm) | After sd (mm) | Reason |
|---|---|---|---|
| 18 / 19 | 12.4 / 12.7 | 15.2 / 15.2 | Figure 2 L10 optical extent |
| 20 / 21 / 22 | 12.7 / 12.5 / 12.7 | 15.5 / 15.5 / 15.5 | Shared cemented rim; 16.0 mm rejected with -0.200 mm L12 edge thickness |
| 23A / 24 | 12.7 / 13.0 | 16.3 / 16.3 | Final asphere optical extent, no turnover at revised rim |

Other rims and stop retained. At 23A's new 16.3 mm rim, polynomial departure from the conic is -0.808661 mm;
departure from the sphere is approximately -0.7450 mm. The analysis was updated using the former convention.

**Glass:** Table 1 coordinates retained. L1 now names Q-LASFPH3S (catalog 1.795256/45.25) as a qualified proxy for
1.796681/45.37; this is the closest-index compatible existing row and does not establish molding process or supplier.
L5 now names J-LAF7 (1.74950/35.25) for 1.749501/35.19 instead of unresolved `750352 — LAF7`.
Coverage improves 11/14 → 13/14 modeled material regions. L2's 1.495210/56.34 resin remains unmatched: exact-coordinate
source searches found no reusable published coefficients. No catalog additions or APD assertions are justified.
All other regions already resolve within the unchanged compatibility guard.

**Display:** removed the space between `f/2.8` and `D`, matching Nikon's
[official product name](https://downloadcenter.nikonimglib.com/fr/products/270/AF-S_Zoom-Nikkor_17-35mm_f_28D_IF-ED.html).
Marketed f/2.8 remains separate from the patent's modeled f/2.9.

## 2026-09-29 — Local diagram follow-up

**Local diagram review:** re-compared the live wide/tele silhouettes, cemented rims and aspheric outlines with
Example 1 Figure 2 (PDF p. 7). Retained the revised G4 rims; the remaining apparent differences do not establish a
clear-aperture error beyond figure-reading uncertainty. The oversized first blank's mechanical edge is not an optical
rim target. Explicit L1–L13 labels now preserve physical numbering around the L2r/L2g split instead of displaying
material-entry ids 1–14.

**Motion:** source-ordered wide/mid/tele stations remain 17.5/24/34 mm. Relative to the fixed image plane, G1 moves
imageward then reverses; G2F, G2R, G3 and G4 move objectward overall. At fixed zoom, near focus moves only G2F
imageward by 4.1911/4.0734/4.3114 mm. The direction agrees with ¶0017; those travel magnitudes remain constrained
reconstructions, not published focus rows. The live focus and zoom chart order is G1, G2F, G2R, G3, G4.

**Glass and color:** L10 and L12 now use explicitly inferred APD color, justified by the compatible J-FKH1 curve
(catalog dPgF approximately +0.0337) and the production two-ED-element correlation. No source line indices or numeric
partial-dispersion fields were added. Coverage remains 13/14 regions; L2r has no supported coefficient-backed material.

**Assignee:** the exact patent front page lists 株式会社ニコン, already represented by the canonical Nikon Corporation.
The catalog keeps Nippon Kogaku K.K. as the historically distinct predecessor linked to the same corporate family;
no duplicate assignee spelling in this batch requires consolidation.

## 2026-10-29 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/JP_2001083421_A.pdf`: Example 1 Fig. 2 PDF p. 7 at 600 dpi; Table 1 prescription pp. 4–5; explicit d-line (588 nm rounded) definitions in ¶0017 p. 4. Every convex/concave face, all three aspheres, and the resin/glass boundary were checked. Fig. 2 clearly shows a rear vertical land on the first glass blank, not an external mechanical flange. The 1062 working pixels over the 112.06 mm first/last-vertex span give **9.48 working px/mm**, or **3.16 native px/mm** at 200 dpi (one native pixel ≈0.32 mm). The source reads L1 outer/front cap ≈26.7 mm and rear curved endpoint ≈18.8 mm. Raised continuous front aspheric cap S1A 24.5→26.7 mm and rear cap S2 18.0→18.8 mm, and extended S2's vertical land to the full 26.7 mm outer rim. This replaces the provisional shorter extension to 24.5; no arbitrary partial land remains. All R/d/coefficients are unchanged. At h 26.7, S1A complete sag 4.287899559 mm, polynomial departure 3.622170611 mm, spherical departure 3.629947168 mm; updated the quoted public rim. Other air caps end at the source rims without a separately resolved inward trim. Existing compound-interface limitations remain.
- Freshly checked all **13 physical glass/substrate positions plus one resin layer** against every source nd/vd row. All values and the d-line convention are retained. Source does not publish θgF or C/F/g, so none is invented; source index/Abbe conditions are preserved independently. Current coefficient curves cover 13/14 media, with L2r 1.495210/56.34 still unresolved and no strict current catalog candidate. Its resin construction is stated in ¶0015; chemistry and supplier remain unasserted.
- L8's stale unresolved-glass wording is corrected to its actual compatible E-LAKH1 coefficient proxy; production identity is not asserted. Retained Q-LASFPH3S for L1 as a qualified nonidentical proxy (1.795256/45.25 versus source 1.796681/45.37), and M-TAF1 for L2g (1.7725/49.46 versus source 1.772789/49.45). L5 J-LAF7 and all other current coordinates remain compatible without relaxed tolerances. Two ED/APD tags stay inference-qualified from Nikon's count and the proxy, not a source θgF measurement.
- Actual final verification: focused surface and image-circle audits pass all three zooms plus the revised B2 35mm candidate (zero undersized/skipped). Aperture and format-field audits pass all 10 source stations; all reach at least 99% of the format corner with no unresolved field. Native SVGs were inspected at nine focus/zoom states per lens, zero renderer trims, with the hybrid compound connected. Source/cap-derived aspheric departures and current glass resolver/catalog consistency pass; no shared engine or tolerance change.
