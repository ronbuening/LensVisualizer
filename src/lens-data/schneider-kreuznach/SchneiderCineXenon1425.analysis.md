## Patent Reference and Design Identification

**Patent:** US 3,005,379
**Filed:** October 15, 1958
**Priority:** October 22, 1957 (Germany)
**Granted:** October 24, 1961
**Inventor:** Günter Klemt
**Assignee:** Jos. Schneider & Co., Optische Werke
**Title:** *High-Speed Gaussian Dual Objective*
**Embodiment analyzed:** Table A, the first numerical example (job designation: Example 1)

US 3,005,379 describes a high-speed Gaussian dual objective with four air-spaced lens members. The selected Table A prescription is the first numerical example and is repeated in claim 1. The patent normalizes the overall focal length to 100, gives a back focal length of 57.99 and total lens thickness of 89.07, and states an aperture ratio of 1:1.4. These source values are read from PDF page 2, Table A and the accompanying prose; Figure 1 on PDF page 1 supplies the qualitative optical layout and diaphragm location.

The identification with a Schneider Cine-Xenon 25 mm f/1.4 is a convergent production correlation, not a manufacturer statement that Table A is the production prescription. The correlation rests on several independent points:

1. The patent assignee is Jos. Schneider & Co., Optische Werke, while archival Schneider literature identifies a 25 mm (1 inch) f/1.4 Cine-Xenon.
2. Uniformly scaling the Table A prescription by 0.25 gives a verified design EFL of 25.014518 mm.
3. The patent explicitly states 1:1.4, matching the marketed f/1.4 aperture designation.
4. Table A contains seven elements in four air-spaced members; archival Schneider and ARRIFLEX literature also describes the 25 mm f/1.4 Cine-Xenon as a seven-element lens.
5. An ARRIFLEX 16 catalog identifies a Schneider Cine Xenon 1:1.4, 25 mm, catalog no. 1117, with a 23° horizontal field and a 0.5 m-to-infinity focusing range.

No reviewed primary source states that US 3,005,379 Table A is the production prescription for catalog no. 1117 or for every 25 mm f/1.4 Cine-Xenon mechanical variant. The patent itself does not name Cine-Xenon, 25 mm, C-thread, ARRIFLEX, or a product catalog number. The data file therefore treats the product match as an inference and does not assign a mount or image-format identifier from the patent.

## Optical Architecture

The patent calls the design a Gaussian dual objective and describes four air-spaced members: collective outer members and two inner meniscus-shaped dispersive members whose concave faces turn toward one another (US 3,005,379, PDF p. 2). In the selected example those four members are built from seven spherical glass elements:

- Member I: cemented L1/L2.
- Member II: cemented L3/L4.
- Member III: cemented L5/L6.
- Member IV: single L7.

From the final parsed data, the isolated air-bounded member EFLs are +35.271484 mm, -66.562444 mm, -76.831156 mm, and +20.770738 mm respectively. These isolated-member powers agree with the patent's qualitative positive-negative-negative-positive architecture, but they are not the same thing as each member's in-situ contribution inside the complete objective.

The uniformly scaled model has a verified overall EFL of 25.014518 mm and a first-to-last refracting-surface track of 22.267500 mm. The 0.25 scale is a modeling transformation from the patent's f = 100 normalization to the 25 mm production correlation; the patent radii, axial spacings, and image-plane distance are scaled by 0.25, while the modeled semi-diameters are authored directly on the resulting 25 mm branch. There are no aspheric surfaces or coefficients.

Figure 1 places diaphragm D inside the large central air space d6, between r6 and r7, but gives no dimension for its axial split or physical diameter. The model places `STO` at 60% of the scaled d6 measured from r6 as a geometry-constrained inference consistent with the qualitative drawing. The stop semi-diameter is then calibrated to reproduce the published f/1.4 aperture ratio. The resulting f/1.400000081 is therefore a model calibration result, not independent evidence of the manufactured diaphragm diameter.

The patent also publishes no clear apertures. All authored surface semi-diameters are modeled geometry values. They were checked against exact spherical ray envelopes, element edge thickness, actual rim slope, shared-gap intrusion, and representative off-axis containment; they are not patent dimensions.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element EFLs with each element placed in air, recomputed from the final parsed prescription. They describe the isolated element, not its effective power after cementing or its in-situ behavior inside the complete lens.

### L1 — Biconvex Positive

nd = 1.6779, νd = 55.5. Glass: LAC12 — 678555 coordinate; compatible spectral proxy (supplier unconfirmed). Standalone f = +23.808148 mm.

L1 is the positive front element of cemented member I. It is cemented directly to L2 at r2. The patent requires the refractive-index difference across this interface to lie between 0.008 and 0.02; the rounded Table A values give 0.0110, matching the patent's cited value of about 0.011. This is a source-defined index relationship; the available data do not justify assigning a specific historical glass maker or a more particular aberration role to L1 by itself.

### L2 — Biconcave Negative

nd = 1.6889, νd = 31.2. Glass: E-FD8 — 689312 coordinate; compatible spectral proxy (supplier unconfirmed). Standalone f = -65.129966 mm.

L2 completes member I. Although L2 is negative as an isolated element, the complete cemented air-bounded member I has an isolated EFL of +35.271484 mm. This distinction is important: the member power includes the actual cemented interface and should not be reconstructed by simply adding the standalone element powers.

### L3 — Positive Meniscus

nd = 1.6700, νd = 47.2. Glass: H-ZBaF52 — 670472 coordinate; compatible spectral proxy (supplier unconfirmed). Standalone f = +32.669806 mm.

L3 begins the second cemented member and is followed immediately by L4. The r4-r6 member is negative as an isolated air-bounded assembly, with EFL -66.562444 mm, despite L3 itself being positive in air. The member's position ahead of the diaphragm space follows the patent's four-member Gaussian arrangement.

### L4 — Negative Meniscus

nd = 1.6166, νd = 36.6. Glass: F4 — 617366 coordinate; compatible spectral proxy (supplier unconfirmed). Standalone f = -18.566004 mm.

L4 is the negative rear component of member II and directly precedes the large d6 diaphragm space. The cemented r5 interface has an index difference of 0.0534 from the rounded Table A values, inside the patent's specified 0.04-0.06 range. The patent makes this larger index discontinuity a deliberate condition of the second doublet; the present analysis does not infer a more specific aberration correction from the glass coordinates alone.

### L5 — Biconcave Negative

nd = 1.6727, νd = 32.2. Glass: H-ZF2 — 673322 coordinate; compatible spectral proxy (supplier unconfirmed). Standalone f = -10.022118 mm.

L5 is the first element after the diaphragm space and the negative component at the front of member III. Its placement opposite member II across the central air space is part of the patent's paired inner-member architecture. The complete L5/L6 member remains negative in isolation, with EFL -76.831156 mm.

### L6 — Biconvex Positive

nd = 1.6583, νd = 57.3. Glass: K-LaK11 — 658573 coordinate; compatible spectral proxy (supplier unconfirmed). Standalone f = +13.998349 mm.

L6 completes member III at cemented surface r8. The rounded Table A indices give an absolute r8 index difference of 0.0144. The patent prose describes this as about 0.015 and requires a value between 0.008 and 0.02. The 0.0006 difference between the prose approximation and the table-derived value is retained as a source-rounding discrepancy; both satisfy the stated condition.

### L7 — Biconvex Positive

nd = 1.7440, νd = 44.9. Glass: H-LaF3B — 744449 coordinate; compatible spectral proxy (supplier unconfirmed). Standalone f = +20.770738 mm.

L7 is the single positive rear member IV. Unlike the first three members, it is not cemented to another element. Its standalone EFL is therefore also the isolated EFL of member IV. Together with the positive front member, it forms the patent's collective outer pair around the two negative inner members.

## Glass Identification / Selection

Table A publishes only d-line refractive index and νd. It does not publish glass maker, melt name, C/F/g line indices, partial dispersion, or Sellmeier coefficients. The final data names the runtime catalog proxies alongside the six-digit coordinate classes; those names describe the color model, not historical glass identities.

| Element | nd | νd | Authored glass label |
|---|---:|---:|---|
| L1 | 1.6779 | 55.5 | LAC12 — 678555 coordinate; compatible spectral proxy (supplier unconfirmed) |
| L2 | 1.6889 | 31.2 | E-FD8 — 689312 coordinate; compatible spectral proxy (supplier unconfirmed) |
| L3 | 1.6700 | 47.2 | H-ZBaF52 — 670472 coordinate; compatible spectral proxy (supplier unconfirmed) |
| L4 | 1.6166 | 36.6 | F4 — 617366 coordinate; compatible spectral proxy (supplier unconfirmed) |
| L5 | 1.6727 | 32.2 | H-ZF2 — 673322 coordinate; compatible spectral proxy (supplier unconfirmed) |
| L6 | 1.6583 | 57.3 | K-LaK11 — 658573 coordinate; compatible spectral proxy (supplier unconfirmed) |
| L7 | 1.7440 | 44.9 | H-LaF3B — 744449 coordinate; compatible spectral proxy (supplier unconfirmed) |

Authoritative SUMITA, OHARA, HOYA, HIKARI, CDGM, and SCHOTT catalog material contains coordinate-compatible families for these positions, but multiple vendors can occupy the same or nearly the same nd/νd coordinates. Those catalog comparisons support the qualified spectral-proxy labels; they do not establish Schneider's historical supplier or melt. Candidate catalog `nC`, `nF`, and `ng` values retained in the audit evidence are therefore not promoted into the lens data.

No apochromatic, anomalous-partial-dispersion, or ED-glass claim is made. The patent data provide insufficient spectral information for such a statement.

## Focus Mechanism

The selected patent embodiment publishes one optical prescription state and no focus movement table. The lens data therefore uses `NO_INTERNAL_RECONSTRUCTION`: no `var` gaps, focus keyframes, floating groups, or inferred internal motion are authored.

Archival Schneider literature describes helical focusing for documented 16 mm variants, and the ARRIFLEX catalog gives 0.5 m to infinity for the 25 mm f/1.4 Cine Xenon. The data field `closeFocusM = 0.5` records that production-variant metadata. It does not drive any optical spacing change and does not establish that every C-thread, ARRIFLEX, or other Cine-Xenon variant used the same focusing mechanics.

## Conditional Expressions

The patent places explicit refractive-index conditions on the selected design (US 3,005,379, PDF p. 2). Recalculation from the rounded Table A coordinates gives:

| Patent condition | Table A result | Disposition |
|---|---:|---|
| All refractive indices greater than 1.6 | minimum nd = 1.6166 | satisfied |
| abs(Δn) at r2 between 0.008 and 0.02 | 0.0110 | satisfied |
| abs(Δn) at r5 between 0.04 and 0.06 | 0.0534 | satisfied |
| abs(Δn) at r8 between 0.008 and 0.02 | 0.0144 | satisfied |

The patent prose gives approximately 0.015 at r8, whereas the rounded Table A indices yield 0.0144. The difference is not corrected away; it is treated as a source-precision discrepancy within the same stated limiting range.

## Verification Summary

Independent sequential y-ν tracing and ABCD multiplication of the implemented prescription agree numerically. The resulting design EFL is 25.014518 mm.

The patent's printed back focal length scales to 14.4975 mm from the r11 vertex, and that source image-plane spacing is retained in the data. The rounded prescription independently computes a paraxial BFD of 14.516614 mm, a difference of 0.019114 mm. The analysis preserves both quantities rather than silently refocusing the source model.

Surface-by-surface Petzval evaluation using φ/(n·n′) gives a sum of +0.010083751 mm⁻¹ for the scaled model. Its reciprocal is about 99.169445 mm; no field-curvature sign convention is inferred from that reciprocal alone.

The modeled stop and clear apertures are construction inferences. The stop is placed 3.4815 mm after r6 and 2.3210 mm before r7, preserving the scaled d6 air space exactly. At the calibrated stop radius, the modeled aperture plane clears both neighboring curved surfaces, and the portable geometry checks pass for the authored semi-diameters. Representative off-axis clearance was sampled using ±11.5°, derived from half of the ARRIFLEX catalog's 23° horizontal field; that field is product-correlation context, not a Table A field specification.


## Sources / References

- Günter Klemt, *High-Speed Gaussian Dual Objective*, US Patent 3,005,379, filed October 15, 1958, German priority October 22, 1957, granted October 24, 1961. Figure 1: PDF p. 1; descriptive text and Table A: PDF p. 2; claim prescription: PDF p. 3.
- Jos. Schneider & Co., archival *16mm and 35mm Movie Camera Lenses* brochure scan, Pacific Rim Camera Reference Library, https://www.pacificrimcamera.com/rl/00068/00068.pdf (reviewed September 15, 2026).
- Arnold & Richter / ARRIFLEX, archival *ARRIFLEX 16* 20-page color catalog, https://doczz.net/doc/1273662/arriflex-16-20-page-color-catalog (reviewed September 15, 2026).
- Deutsches Technikmuseum Berlin, *Film Technology* permanent exhibition, https://technikmuseum.berlin/en/program/permanent-exhibitions/translate-to-english-filmtechnik (reviewed September 15, 2026).
- SUMITA Optical Glass, *Optical Glass Data Book* ver. 14.02.00; OHARA optical-glass catalog; HOYA optical-glass product/cross-reference data; HIKARI *Optical Glass Catalog 2023*; CDGM colourless optical-glass catalog; SCHOTT optical-glass catalog/search. These were used only for coordinate-equivalence checks, not to assign historical supplier identity.
