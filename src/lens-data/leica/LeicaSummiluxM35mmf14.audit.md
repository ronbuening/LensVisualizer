# Audit Log — LEICA SUMMILUX-M 35mm f/1.4 (US patent)

Patent: US 2,975,673; US 2,975,673 — Example 1; strong 1961 production correlation

## 2026-09-16 — Patent geometry, glass, and metadata

### Retained-information and optical-rim review

Exact local source: `patents/US_2975673_A.pdf`, PDF page 1, Fig. 1; Table 1 on page 2.

At 600 dpi the front/rear optical rims measure approximately 10.3/9.5 mm; the front f/1.4 pupil floor and rear scan uncertainty motivate conservative 13/10.4 mm modeled rims. Surfaces 1/2 change 15.5/15.2 → 13/13 mm; surfaces 11/12 change 13.7/14.4 → 10.4/10.4 mm. Cemented and stop-adjacent rims remain unchanged.

| Surface | Previous SD (mm) | Revised SD (mm) |
|---|---:|---:|
| 1 | 15.5 | 13 |
| 2 | 15.2 | 13 |
| 11 | 13.7 | 10.4 |
| 12 | 14.4 | 10.4 |

### Glass classification

Native e-line coordinates are preserved; catalog curves are evaluated at C′/e/F′. Six-digit d-line codes alone do not resolve these elements.

| Element | Patent index / Abbe | Runtime curve |
|---|---|---|
| L1 | 1.72341 / 50.1 (e) | LAC10 |
| L2 | 1.7899 / 48 (e) | Unresolved |
| L3 | 1.70444 / 29.84 (e) | SF15 |
| L4 | 1.7899 / 48 (e) | Unresolved |
| L5 | 1.76167 / 27.34 (e) | SF4 |
| L6 | 1.7899 / 48 (e) | Unresolved |
| L7 | 1.72056 / 47.59 (e) | S-LAM3 |

The listed curves are catalog proxies; production identities remain unproven. Unresolved coordinates were checked against the current catalog and public glass-code/index searches; no sufficiently evidenced new curve was recovered for them. Source coordinates, spectral reference, radii, and axial spacings are retained.

### Metadata and analysis

Display labels distinguish the FR and US patent records without implying different production generations. Native e-line coordinates and the publication-specific inferred stop model remain intact.

Companion analysis now lists the actual runtime glass curves and preserves source-versus-model limitations.

The front rim is retained at 13 mm rather than the drawing-only estimate: the modeled f/1.4 entrance-pupil radius is 12.5511 mm. A literal 11.3 mm rim clips the on-axis marginal bundle. The 13 mm choice balances the patent outline with the modeled aperture.

The imported US model already clips on-axis near-marginal rays at surface 5 (for example at 95% of the paraxial pupil). The outer-rim changes do not introduce this event; nominal f/1.4 is a stop calibration rather than proof of full-pupil transmission.
