## Patent Reference and Design Identification

**Patent:** JP 2009-058817 A  
**Title:** Fisheye lens  
**Inventor:** Ai Hoshina (PAJ: HOSHINA AI)  
**Assignee:** Sigma Corporation  
**Filed:** 31 August 2007  
**Published:** 19 March 2009  
**Embodiment:** Example 3, printed page 8 / complete-PDF page 9; Figure 7.

The probable production pairing is the Sigma 4.5 mm F2.8 EX DC CIRCULAR FISHEYE HSM. Sigma's product page confirms 13 elements in nine groups, a 180-degree circular field on APS-C, six diaphragm blades and 13.5 cm minimum focus. Example 3's 13/9 arrangement and source 4.4463 mm focal length support this pairing. The factory prescription is not independently certified.

## Optical Construction and Projection

The source contains 23 rows, including stop 16, with 13 spherical elements in nine components. The front unit is negative and the rear unit positive. Four cemented pairs are retained. All literal radii, thicknesses and nd/νd values remain unchanged.

Paragraph 0028 explicitly defines equisolid projection, y = 2f sin(ω/2). The source full field is 180 degrees; the corresponding ideal equisolid image-circle diameter is approximately 12.576 mm. This is a projection convention, not an assertion that every exact traced image coordinate equals the ideal law.

The native back focus is 40.8599 mm. A Gaussian replay gives 40.862767626 mm, an explicit +0.002867626 mm image-plane adjustment; source optical length 121.8599 mm remains preserved in evidence. The independent paraxial focal length is 4.445768583 mm. No curvature or glass optimization was used.

## Element and Glass Analysis

| Element | Shape | nd | νd | Catalog equivalent |
|---|---|---:|---:|---|
| L1 | Negative Meniscus | 1.8042 | 46.5 | N-LASF44 (Schott equivalent) |
| L2 | Negative Meniscus | 1.8042 | 46.5 | N-LASF44 (Schott equivalent) |
| L3 | Biconcave Negative | 1.8042 | 46.5 | N-LASF44 (Schott equivalent) |
| L4 | Biconvex Positive | 1.6727 | 32.17 | E-FD5 (Hoya equivalent) |
| L5 | Biconcave Negative | 1.7725 | 49.62 | N-LAF34 (Schott equivalent) |
| L6 | Biconvex Positive | 1.5481 | 45.82 | E-FEL1 (Hoya equivalent) |
| L7 | Negative Meniscus | 1.7725 | 49.62 | N-LAF34 (Schott equivalent) |
| L8 | Biconvex Positive | 1.62 | 36.3 | E-F2 (Hoya equivalent) |
| L9 | Biconcave Negative | 1.7725 | 49.62 | N-LAF34 (Schott equivalent) |
| L10 | Biconvex Positive | 1.4875 | 70.44 | H-QK3L (CDGM equivalent) |
| L11 | Biconcave Negative | 1.834 | 37.35 | NBFD10 (Hoya equivalent) |
| L12 | Biconvex Positive | 1.497 | 81.61 | FCD1 (Hoya equivalent) |
| L13 | Biconvex Positive | 1.4875 | 70.44 | H-QK3L (CDGM equivalent) |

Native nd/νd values control. Catalog names are equivalent-material assumptions, not recovered supplier or melt identities. The highlighted SLD member in Sigma's drawing is consistent with the source rear positive low-dispersion glass; no unmeasured partial dispersion is asserted.

## Focus Scope

This deliverable is infinity-only. The model's 1e15 m focus value is an infinity sentinel, not a physical minimum focusing distance. Sigma specifies 0.135 m minimum focus, but the patent provides only an infinity prescription and does not establish the production focusing motion.

A derived unit-focus trial was evaluated and rejected for release: it produced substantial pupil clipping/TIR at finite focus despite Gaussian focus convergence. Its source, matrices and exact-ray diagnostics are retained. It has not been promoted to a validated factory or reconstructed close-focus model. The source infinity model is unchanged by that investigation.

## Aspherical Surfaces

No asphere is present in Example 3 and none is introduced.

## Clear Apertures and Geometry

Clear apertures are inferred from the patent and manufacturer sections, with edge-geometry checks. The large front surface uses a 21.5 mm semi-diameter; its steep rear surface uses 12.5 mm. Other inferred values are present explicitly in the data file.

The ordinary 64.2-degree rim-angle guard forced the front rear surface to an undersized cap and prevented the last field chiefs from converging. A lens-level 71-degree rim allowance, motivated by surface 2 (actual rim angle 70.0263 degrees), retains the source-consistent 12.5 mm cap. This is a disclosed rim-slope allowance, not a gap-sag increase: the ordinary 90% gap-sag limit remains. No negative edge thickness, surface crossing or hidden geometry trim remains in the canonical model. The earlier rejected geometry and field trials are preserved.

## Validation and Limits

At infinity, all 37 sampled chief rays from 0 to 90 degrees in 2.5-degree steps converge and trace. Of 333 field-fan rays across three pupil ratios, 291 complete and 42 have recorded modeled-aperture clipping: 27 at the stop and 15 at authored surface rims. Replaying the same infinity geometry at five slider positions gives the same 185 chief outcomes and 1,665-ray totals; these are repeated interface checks, not five validated object distances.

All 1,353 default axial/off-axis rays across 41 infinity-sentinel slider positions complete, with zero hidden trim. This validates the source-infinity runtime scope, not full-pupil illumination or finite-focus behavior. Targeted type/lint, source comparisons, corpus and metadata outcomes are retained separately. Full repository CI/browser integration and manufacturer MTF reproduction are not certified.

## Sources

- [JP2009058817A](https://patents.google.com/patent/JP2009058817A/en), complete original plus PAJ cover preserved; Example 3 and Figure 7.
- [Sigma product specifications](https://www.sigma-global.com/en/lenses/45_28/), complete HTML and linked manufacturer optical section preserved.
