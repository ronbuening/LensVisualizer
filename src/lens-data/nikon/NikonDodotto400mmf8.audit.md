# Audit Log — Nikon Dodotto 400mm f/8

Patent: JP H9-105860 A, Example 1 / Table 1.

## 2026-08-11 — Patent glass follow-up

- Visually checked the retained local patent PDF. Table 1 confirms L2 at `nd = 1.75692`, `νd = 31.62`.
- Compared that coordinate with the coefficient-backed Hikari E-LAF11 row (`1.75692 / 31.591329`, code `757316`).
  The index is exact and the `-0.029` Abbe residual is inside ordinary patent rounding and the runtime safety window.
- Relabeled L2 as an E-LAF11 catalog equivalent. This supplies wavelength-dependent tracing without asserting that
  HOYA supplied the production glass.
- All four elements now have strict catalog dispersion coverage.

## 2026-10-30 — Fresh retained source section, glass and edge review

- Directly inspected the retained `patents/JP97105860.pdf`: four-media Table 1 on PDF p. 3; Example 1 section on p. 2 and its horizontal counterpart on p. 5 at 600 dpi; corresponding d/g aberration plot on p. 6. The 10-page local file contains extracted 300-dpi image strips, not the publication's complete prose. Its table labels n/Abbe and its plots distinguish d/g; the omitted prose does not permit fresh confirmation of an explicit numeric reference wavelength or a partial-dispersion definition. No fuller matching local PDF was found. Preserve the existing d-line interpretation, source values and this limitation without inventing a definition.
- All four source n/Abbe pairs directly agree: 1.62280/57.03, 1.75692/31.62, 1.62004/36.27, 1.51680/64.10. Four compatible coefficient curves are retained; explicit proxy labels avoid historical-supplier claims. Corrected unsupported rounding/melt explanations: S-BSM10 νd 57.05 versus 57.03 and E-LAF11 31.591329 versus 31.62 exceed the source's two-decimal rounding interval. No source C/F/g or numeric partial-dispersion data is supplied in the extract, and no anomaly is inferred as a measured zero.
- Reviewed all six glass faces, including both cemented boundaries. The front doublet's source outline has a common outer height. Restore S3's continuous cap 27.5→28.0 mm, matching the retained S1/S2 inferred height. The source resolves no separate concave cap-end land; no new trim/opaque extension is added. Keep the conservative front aperture, the 18.6 mm rear group and the stated 645 peripheral-illumination limitation rather than force a fully unvignetted front bundle through invalid edge thickness.
- Source R/d, inferred focus, stop and f/8.13 design/marketing f/8 separation remain unchanged. Focused surface, image-circle, stated-aperture and field checks pass; catalog consistency passes. Nine actual SVG focus/zoom-grid views were inspected with connected compound outlines and no automatic rim trim (zoom columns repeat this fixed-focal-length lens).
