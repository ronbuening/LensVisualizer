# Meike85 source audit

Primary table and Figure1 were inspected as pixels. All19literal rows are preserved in source_packet.json. Source-format merging removes rows6,11,15 only as coincident zero-air duplicate interfaces. Aperture units are a disclosed diameter interpretation, with shared clear apertures taking min(36.97,37.30) and min(28.42,29.00). No radii, thicknesses, materials, source image-plane distance, or global checks are altered. Zero conics become ordinary spherical surfaces. No cover plate or finite-focus motion is invented.

Source nominalf/1.8 implies a stop0.861% smaller than printed29.75 under catalog-based paraxial computation. Conversely, diameter-derivedf/1.784507524 rounds tof/1.8, so the numerical difference does not by itself prove a source contradiction. Production draft follows source nominalf/1.8 because the engine's ordinary-prime contract derives its stop; diameter-derivedf/1.784507524 is separately tested. The source plane is deliberately retained despite paraxial and MTF discrepancy.

As delivered, the geometry passed the default 90 % gap-sag rules with no hidden trim; strong peripheral clipping at the printed rims was kept. Catalog dispersion is not factory or melt data. Integration: closed, integrated on 2026-11-09 after the deployment validation below.

## 2026-11-09 — Deployment validation

Independent check against CN 217606166 U (PDF p. 7, para. 0034): 19 rows of R, d, glass and 孔径 agree; the three
zero-air rows are merged as cemented joins, as the text says. Engine EFL 85.645 against the printed nominal f = 85
(no wavelength reaches 85.0, so the 85 is nominal). Claim values φ9/φ12 and φU3/φU1 reproduce. Front page: 深圳市慧天影视器材有限公司,
inventor Li Yunhong, granted 2022-10-18. Meike's corporate site (mkgrip.com) records that its Shenzhen company took
that name in July 2019, so the patentee is Meike's own. Attribution: the original Meike 85mm f/1.8 STM (Sony E in
June 2022, later Nikon Z, Fujifilm X and L-mount) is 9 elements / 6 groups; the Pro (11/8) and Mark II (11/7) do
not fit. Meike publishes only a stylised render, which agrees in outline.

Deployment change: `source.assignees` → "Shenzhen Huitian Film and Television Equipment Co., Ltd." (house English
form; the analysis keeps the Chinese name beside it); `focalLengthMm.design` → 85, the printed value;
`catalog.lensMounts` ["sony-fe", "nikon-z", "fujifilm-x", "l-mount"].

Open: printed rims at S3–S5 clip the f/1.8 real-ray bundle by up to 0.31 mm (the engine's paraxial stop clears);
wording. (Wording closed in the cleanup pass below, which also corrects the rim note.)

## 2026-11-09 — Cleanup and wording pass

Data file: plain header comment keeping every source fact (sole example, no scaling, 孔径 read as diameter, merged
cemented rows, stop from F/1.8, printed image plane 0.268 mm past paraxial focus, rim clipping, static focus).
`subtitle` "CN 217606166 U — qualified associated patent model" → "CN 217606166 U, Sole example — probable match to
the 2022 production lens". Added `catalog.specs` ["9 ELEMENTS / 6 GROUPS", "DESIGN f = 85 mm", "DESIGN F/1.8",
"ALL SPHERICAL"], `aperture.blades` 9 (Meike's specification table) and a `role` on every element. Focus stays static
(`closeFocusM` 1e15); the description now says what the patent prints and that the 0.85 m retail minimum focus is not
modeled. Glass labels keep the patent's names in vendor form, "<name> (CDGM; named in the patent)" and "E-FD10 (HOYA;
named in the patent)". H-LaF50B, E-FD10, H-ZF52 and H-K9L resolve to their catalog rows at the stored nd/νd;
H-ZLaF55D (L2, L8, L9) and H-LaK50A (L3) are not in the site catalog and keep the patent's names, their dispersion
coming from the stored CDGM line indices. No relabel to another vendor was made, because the patent names these
glasses. No apd: Meike publishes no special-dispersion element.

Analysis: run-together text fixed throughout; "Curvatures" corrected to radii; the Verification Summary replaced by
Model Scope and Limitations without process detail (test grids, ray counts, diagnostics); one attribution paragraph
(Meike's own patentee through the 2019 rename, 9/6 match, the stylized maker rendering, Pro and SE II excluded, the
2018 EF lens unresolved, linear motor against the retail stepping motor); product facts with sources; a glass table;
the patent's conditions checked (φ9/φ12 = 1.233, φU3/φU1 = −0.681, both index orderings); a paraxial note that the
claim-2 travel is about 8.1 mm toward the image for 1 m (L/|fU2| = 0.137), not applied; an aperture section.

Engine values before and after are identical: EFL 85.6454 mm, F/1.8, half-field 15.250°, stop radius 14.747 mm,
paraxial BFD 42.262 mm, total track 113.92 mm. Surface audit OK. Aperture audit: rim-limited at S3, f/1.80 → f/1.83
(+1.6 %), unchanged.

Correction to the deployment note above: at the engine's stop the real axial bundle is still clipped. The aperture
audit lists S3 22.02 → 22.37, S4 21.56 → 21.70, S5 19.81 → 19.94, S7 18.485 → 18.569 and S8 15.865 → 16.061 mm as
the radii that would pass the full f/1.8 bundle.

Open: the printed rims at S3–S8 trim the f/1.8 axial bundle (f/1.83 effective); kept as printed in this pass.
