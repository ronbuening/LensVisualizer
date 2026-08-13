# Audit Log - Sony DT 16-50mm F2.8 SSM

Patent: US 2012/0307129 A1, Example 1

## 2026-08-13 - Initial patent-figure, identity, and glass audit

- Reviewed ignored local `patents/US20120307129A1.pdf`, especially Figure 2, against the new data and analysis sidecar.
- The stored semi-diameters reproduce the patent section's front-to-rear taper within the figure-measurement threshold, so no SD was changed.
- Confirmed the SAL1650 display name as `SONY DT 16-50mm f/2.8 SSM` and retained the unscaled Example 1 correlation.
- Reclassified G1 from an unresolved `847237` coordinate to the existing HIKARI J-SF03 catalog-equivalent curve. The patent rounds its Abbe value to 23.7; J-SF03 is 1.84666/23.78. This is an optical-equivalent assignment, not a production-supplier claim.
- The two patent-specified compound-asphere layers remain unmatched because their material identities are unpublished.

## 2026-08-13 - Screenshot-led diagram and catalog-completeness review

- Compared the supplied site screenshot with the rendered patent Figure 2 and retained all SDs: the front taper, compact GR2/GR3 region, and expanding rear group already match the source without violating ray or rim constraints.
- Replaced optical-media indexes 1-18 with Figure 2's G1-G16 identifiers plus explicit G4r/G13r compound-layer labels. The display name remains the verified `SONY DT 16-50mm f/2.8 SSM`.
- Extended the prior G1 catalog assignment across every physical glass using resolver-selected equivalents from HIKARI, SCHOTT, SUMITA, OHARA, HOYA, and CDGM. Coverage is 16/18 modeled media: all 16 physical glass pieces have trusted curves, while the two unpublished compound layers remain intentionally unmatched.
- Correlated Sony's three-ED production count to the repeated 1.49700/81.6 positions G10, G12, and G15 with `apd: "inferred"`; no patent partial-dispersion values were added.
- Added no catalog glass because every source-identifiable physical medium is already covered and assigning a glass to either proprietary compound layer would be speculative.
