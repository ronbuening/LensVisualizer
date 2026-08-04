# Nikon AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR — Patent Audit

**Audit date:** 2026-08-03  
**Patent:** WO 2019/131993 A1  
**Embodiment:** Second embodiment, Example 1  
**Figures:** Figure 7 (TC out) and Figure 9 (TC in)  
**Data files:** `NikonAFSNikkor180400mmf4ETC14.data.ts` and `NikonAFSNikkor180400mmf4ETC14TCIn.data.ts`

## Source and identity

Example 1 was checked against Tables 8–11 and the corresponding patent cross-sections. The TC-out file is the
published master-lens prescription; the hidden TC-in file uses Table 10's inserted eight-element converter and keeps
surfaces 1–45 identical as directed by the patent. The visible display name was corrected from `f/4 E` to Nikon's
official `f/4E` styling, and the hidden configuration follows the same styling.

## Semi-diameter audit

The patent does not tabulate clear apertures. Figure 7 (PDF page 88) and Figure 9 (PDF page 90) were rotated into the
optical-axis orientation and screened with the automated figure audit, then the affected rear groups were confirmed
on 300 dpi renders. Whole-figure median figure/data ratios were 1.081 for Figure 7 and 1.058 for Figure 9; dense
leaders contaminate much of the middle train, so only clean, repeatable deviations beyond the normal drawing-noise
window were changed.

| Configuration | Surfaces | Optical section | Before (mm) | After (mm) |
|---|---|---|---|---|
| TC out | 47 / 48 / 49 | L49 + L410 rear relay pair | 17.0 / 17.0 / 17.0 | 13.0 / 13.0 / 13.0 |
| TC in | 56 / 57 / 58 | Converter Lx7 + Lx8 cemented pair | 10.6 / 10.3 / 10.1 | 12.8 / 12.6 / 12.5 |
| TC in | 59 / 60 / 61 | L49 + L410 rear relay pair | 17.0 / 17.0 / 17.0 | 13.0 / 13.0 / 13.0 |

The two independent figures put the shared L49/L410 rim at 12.88–12.94 mm, so 13.0 mm replaces the oversized
17.0 mm envelope in both states. Figure 9 shows the final converter doublet near a 13 mm envelope. A larger
14.0 / 13.8 / 13.5 mm trial was rejected because Lx7 would have −0.801 mm edge thickness; the retained
12.8 / 12.6 / 12.5 mm envelope passes the full validator. The physical stop semi-diameter and all figure readings
inside the audit noise window were retained.

Both configurations report zero image-circle-floor failures after the changes.

## Glass audit

The patent publishes d-line index and Abbe number rather than production melt suppliers. Five named Hikari classes
in the prescription lacked catalog curves even though exact first-party data was available: J-SK12, J-LAK14,
J-LAK18, J-LASF016, and J-LASFH24. Their vendor power-series rows and six-digit codes were transcribed from the
Nikon/Hikari 2023-09-01 optical-glass workbook, expanding the catalog from 457 to 462 entries.

TC-out strict and trusted catalog coverage rises from 14/27 to 19/27 elements. TC-in rises from 19/35 to 25/35
because J-LAK18 occurs in the master lens and again in converter element Lx8. L17 and L21 were also corrected from
`catalog unresolved` wording to the already resolver-backed J-BK7 and HOYA TAFD33 equivalents; those label fixes do
not change the coverage count. The remaining code-only classes have no verified, tolerance-safe coefficient row and
remain explicitly unresolved.

The new J-LASFH24 row also resolves the previously reviewed `902253` element in the NIKKOR Z DX 50-250mm, raising
that lens from 15/16 to 16/16 strict and trusted coverage. Regenerated global coverage is 4993/5672 strict and
5004/5672 trusted, with zero catalog-coordinate mismatches.

## Verification

- Both stored prescriptions pass the full surface validator.
- Both image-circle audits report zero undersized surfaces.
- Catalog dispersion tests pass for all 462 entries.
- Duplicate six-digit-code precedence remains stable for J-SK12, J-LAK14, and J-LASF016 coordinate families.
- The full generated glass-report suite reports zero catalog mismatches.

## Retained sources

- WO 2019/131993 A1, Example 1, Tables 8–11, Figures 7–10.
- Nikon Imaging, official AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR specifications.
- Nikon/Hikari Optical Glass Data workbook, 2023-09-01.
