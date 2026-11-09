# Meike85 source audit

Primary table and Figure1 were inspected as pixels. All19literal rows are preserved in source_packet.json. Source-format merging removes rows6,11,15 only as coincident zero-air duplicate interfaces. Aperture units are a disclosed diameter interpretation, with shared clear apertures taking min(36.97,37.30) and min(28.42,29.00). No radii, thicknesses, materials, source image-plane distance, or global checks are altered. Zero conics become ordinary spherical surfaces. No cover plate or finite-focus motion is invented.

Source nominalf/1.8 implies a stop0.861% smaller than printed29.75 under catalog-based paraxial computation. Conversely, diameter-derivedf/1.784507524 rounds tof/1.8, so the numerical difference does not by itself prove a source contradiction. Production draft follows source nominalf/1.8 because the engine's ordinary-prime contract derives its stop; diameter-derivedf/1.784507524 is separately tested. The source plane is deliberately retained despite paraxial and MTF discrepancy.

Native tests: default90%geometry passes; zero hidden trim; reference and C/d/F MTF at source plane and labeled best-axial diagnostic, wide-open andf/4; strong peripheral clipping and one64-grid unconverged geometric field are retained. Catalog dispersion is not factory/melt certification. Interactive UI unverified. Integration gate remains separate.

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
wording.
