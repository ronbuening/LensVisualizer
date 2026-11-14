# Patent and viewer audit

## 2026-09-11 — Direct local-viewer review

Compared both local-viewer focus endpoints with Fig. 1, local `patents/US20200166730A1.pdf`, p.2 (600 dpi, rotated clockwise; 47.91 mm glass span, 22.76 µm/px). Refined optical rims (mm): S1 10.8→9.8; S2 10.3→8.2; S3 8.6→8.2; S5 8.5→8.2; S6 9.0→8.2; S9 10.0→9.8; S10 10.8→10.0; S13 16.0→12.4; S14 16.0→15.8. S13 stops at the end of its curved optical surface, below the patent's mechanical flange. S8 retains 9.8. S7 retains 7.5 because enlarging it to 8.2 would exceed the permitted intrusion into the 1 mm gap.

G2 moves objectward with G1, stop, and G3 fixed; DD4 + DD12 remains 12.22 mm. Focus positions are ordered infinity → published 2000 mm object distance → reconstructed 0.55 m MFD. No zoom travel. Surface/image-circle bounds pass and exact design-edge chief rays traverse the prescription at infinity, intermediate, and close states. All nine glasses resolve; no new APD identity is asserted. Synchronized the analysis assignee with Fujifilm Corporation.

## 2026-11-14 — Source-certified finite conjugates

Patent: US20200166730A1.

| Zoom / keyframe | Field | Before | After | Source and paraxial residual |
|---|---|---|---|---|
| 0 / 1 | `focus.conjugates` | No declaration | 2000 mm, `first-surface` | Example 1, Table 3, 2000 mm column; DD[4]=6.03, DD[12]=6.19 mm; ¶0086 (PDF p.21 (printed p.8); definition PDF p.20 (printed p.7)). Offset -0.002305915 mm / -0.153512 depths; alternate reference 2.6960464157710047 depths; `consistent`. |

Reference evidence: “The object distance is a distance on the optical axis from the object to the lens surface closest to the object side.”

The declared states already carry published focus flags. No prescription, gap, image-plane, or existing conjugate value changes.
