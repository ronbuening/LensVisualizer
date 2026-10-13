# Patent and viewer audit

## 2026-09-11 — Direct local-viewer review

Compared both local-viewer focus endpoints with Fig. 1, local `patents/US20210231930A1.pdf`, p.2 (600 dpi, rotated clockwise; 98.40 mm glass span, 42.51 µm/px). Retained SDs: mechanical rim steps and ray/group annotations account for apparent envelope discrepancies. G2 and its stop move objectward; G1/G3 remain fixed, and DD8 + DD17 stays 11.410 mm. The three authored focus positions are ordered infinity → 1.2 m → reconstructed 0.32 m. This prime has no zoom travel.

Added **inferred**, not patent-listed, APD coloring to L12/L24 (H-FK61 equivalent, catalog ΔPgF ≈ +0.03149), L31 (E-FDS2, +0.03381), and L33 (FDS18, +0.04101). The last two are high-dispersion anomalous partners, not ED elements. Catalog curves support these classifications; vendor identities remain unresolved and no catalog partial dispersion is promoted to a patent value. All thirteen elements retain compatible dispersion. Synchronized the analysis assignee with Fujifilm Corporation.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Table 1 (continued), Example 1, on PDF page 25 (printed page 8) from the local `patents/US20210231930A1.pdf`:
  S24 d = 20.812; S25–S26 are the optional parallel plate PP, 3.200 mm, nd 1.51680, νd 64.20; S26 → Sim is 0.020 mm.
  The S24 gap is not a focus variable, so it is the same at infinity, 1.2 m and the reconstructed 0.32 m state.
- S24 now stores the patent's 20.812 mm, with `rearPlates` PP (N-BK7, exact 1.51680 / 64.2 class) and gapAfter
  0.020 mm, replacing the air-equivalent 22.941704641350 mm fold. Paraxial check against the previous data: EFL and
  defocus identical at all three focus keyframes (worst difference 2×10⁻¹³ mm). Physical track grows by 1.090 mm, to
  122.432 mm from S1 to the image plane.
