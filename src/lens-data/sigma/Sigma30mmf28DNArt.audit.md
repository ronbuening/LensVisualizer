# Source and geometry audit

**Patent:** JP 2012-234169 A
**Filed:** April 18, 2012
**Published:** November 29, 2012
**Inventor:** Noriyuki Ogasawara
**Assignee:** Sigma Corporation
**Title:** Imaging optical system with anti-vibration mechanism
**Example details:** Physical PDF pages 21–22; Figure 1 and aberration Figure 2 on page 32.

The DN Art product association is qualified. The PhotonsToPhotos index maps Example 1 to this lens, while Sigma lists seven elements in five groups and a field near 50.7°, consistent with the 50.49° example. However, the patent explicitly includes stabilization and the marketed DN Art lacks OS. The model is the centered patent design, not a certified factory prescription, and is not the unrelated DP2 Merrill 30mm design already in the catalog.

The stop is at printed S4; its radius is derived from f/2.89. All lens semi-diameters are illustrative figure-proportion estimates: S1–3 8.0, S5–7 7.5, S8–9 8.5, S10–11 9.5, S12–13 11.0 mm. None are patent-listed clear apertures.

Default geometry checks pass without gap-sag overrides, rim cuts or hidden rendering trims. Eleven focus states have zero trim. Literal radii, axial distances, glass constants and aspheric coefficients round-trip to the source packet. Normalized radius/index fingerprints find no duplicate among the other 1,096 catalog prescriptions.

At infinity, full-pupil 64×64 sampling gives center/mid/edge transmitted fractions 1.000, 1.000, 0.656, with zero unaimed/failed samples. Edge angle is 25.180°. These are model-dependent pupil fractions, not measured illumination. The APS-C format corner falls slightly inside the printed 25.245° half-field.

Reference-line diffraction MTF was calculated at center, mid field and edge at the literal image plane, with a maximum grid of 128. All fields report converged. A separate best-axial-focus diagnostic shifts the plane -0.073494 mm; that shift is not baked into the model. Source-plane paraxial offset is 0.000250 mm. No agreement with empirical review charts is asserted. Near/intermediate MTF is not certified.

## 2026-11-09 — Deployment validation

Independent check of JP 2012-234169 A Example 1 (PDF pp. 21–22, page images): 13 surfaces, stop at S4, the L1/L2 and
L3/L4 cemented pairs, both aspheres (A4–A10; no K printed in any example, so K = 0), d4 and d9 at both states and Bf
agree. Engine EFL 30.826 (30.83), F2.89, half-field 25.245°, Bf 20.4048 (20.4045); the close state is 500.07 mm object
to image (patent: 500 mm) and all six conditional values reproduce. Different design from the catalog's DP2 Merrill
(JP 2013-156459 A).

Attribution probable: 7/5, aspheres on L5 and L7 as Sigma's drawing marks them, cemented pairs and stop agree, priority
April 2011 before the January 2012 EX DN announcement (the Art version shares its optics). Against: Sigma describes
"two glass mold aspherical lenses including a double-sided aspherical lens", where Example 1 has two single-sided
aspheres, and Sigma draws L7 nearly plano-convex. Example 1 still fits best of the patent's 14 examples. No deployment
changes.
Open: production MFD 0.30 m is not in `catalog.closeFocusM`; package wording remains for the cleanup pass. (Closed
2026-11-09 by the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file: plain header comment with the same facts (example, no scaling, K = 0 assumption, printed stop and Bf,
estimated rims, centred L6, production differences). Subtitle "JP 2012-234169 A — qualified product association" →
"JP 2012-234169 A, Example 1 — closest patent design; production adds a double-sided asphere". Added `catalog.specs`
(7 ELEMENTS / 5 GROUPS, DESIGN f = 30.83 mm, DESIGN F/2.89, 2 ASPHERICAL SURFACES / 2 ELEMENTS, INNER FOCUS) and
`catalog.closeFocusM.marketing` 0.3 (Sigma product page: 30 cm, 1:8.1). The printed 500 mm close state is kept;
the focus description now states the printed spacings, the moving group and that 0.30 m is not modeled. Aperture:
`fStops` extended to 22, `maxFNumber` 16 → 22, `blades` 7 (Sigma: F22, 7 rounded blades). Element roles added. The
seven `Unmatched` labels are replaced by exact HOYA catalog rows (TAFD30, E-FL5, E-FD15, TAF3, TAF1 ×2, E-FL6); each
resolves to its row with Δnd = 0 and Δνd ≤ 0.01. Added `groups` (G1, G2 IF, G3) and `doublets` (DB1 S1–3, DB2 S5–7) for
the two `cemented` pairs, which had no drawn bracket.

Analysis rewritten to the skeleton: product history (EX DN 2012, DN | Art 2013, same optics), the evidence for and
against Example 1 (double-sided production asphere, L7 bending in Sigma's drawing, no stabilizer, 0.30 m MFD),
element roles with patent paragraphs, glass table, focus table, asphere equation and departures, the six conditional
values, and model limits. Removed the duplicate-fingerprint, browser-UI, archive, test-suite, MTF-grid and per-element
boilerplate text. The unverified PhotonsToPhotos mapping claim was dropped from the prose; the link stays in Sources.

Engine before → after: EFL 30.8257, FOPEN 2.89, half-field 25.245°, stop radius 4.6099 mm, BFD 20.4048 mm,
TL 52.2666 mm, close state 500.07 mm object to image (−0.0689×): all unchanged; only the aperture slider maximum moved
from 16 to 22. Geometric transmission wide open at infinity: 100% to 11.2°, 87% at 19.6°, 65.6% at 25.2°.
Open: the estimated L6 rim (S10–11, 9.5 mm) is about 1 mm smaller than Sigma's drawing shows; rims were left as
authored.
