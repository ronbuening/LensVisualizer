# Audit Log — Canon EF 200-400mm f/4 L IS USM Extender 1.4×, EXT IN

Patent: US 2013/0308041 A1, Numerical Example 1, magnification conversion unit inserted

Passes on this configuration before 2026-10-07, and every pass on the shared analysis note, are logged in `CanonEF200400mmf4LISUSMExtender14x.audit.md`.

## 2026-10-07 — Patent-audit queue: printed stop diameter

Read against US 2013/0308041 A1, Numerical Example 1. Surfaces 1–40 come from the not-inserted surface table (publication p. 5, PDF p. 17), which the inserted-state table declares shared ("surface numbers 1 to 40 are same"); surfaces 41–56 and the inserted-state "Various kinds of data" are on publication p. 6 (PDF p. 18).

| Field      | Before          | After     | Source                                                                                                                 |
| ---------- | --------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `STO` `sd` | 19.365397314420 | 19.875000 | Surface data row `30 (stop)`: r ∞, d 22.15, effective diameter 39.75 (publication p. 5, PDF p. 17); one-half is 19.875 |

- The stored value was a paraxial solve from the EXT OUT f/4.12 states (paraxial radii 19.3656 / 19.3652 mm), not a patent number, and was the only shared row whose `sd` was not half the printed effective diameter. The file differed from the print, so this is a transcription correction and carries no `sourceErrata` entry. The EXT OUT member carries the same value, so the two files still agree on every shared row.
- In this state the printed f/5.77 needs, by real marginal ray, a stop radius of 19.8539 mm at 287.00 mm and 19.8555 mm at 545.98 mm; one radius from 19.8383 to 19.8711 mm gives 5.77 at both ends within print rounding. The printed 19.875 mm is 0.004 mm above that window: it gives f/5.7642 / f/5.7646, 0.1 % under 5.77, from the file's computed focal lengths of 286.8354 / 545.6471 mm, which are 0.06 % under the printed 287.00 / 545.98. The stop admits an axial beam of radius 24.8808 mm (wide) and 47.3271 mm (tele); the printed focal lengths over that beam give f/5.7675 / f/5.7682, which round to the printed 5.77. Paraxially the same stop gives f/5.6172 / f/5.6168. These are figures for the stop alone: the ray through its edge lies up to 0.0039 mm outside the printed half-diameters of s20, s22, s23, and s24 at 287.00 mm and under 0.001 mm outside those of s9 and s15 at 545.98 mm, and clears every extender rim. With every printed rim as a hard clip the axial beam is 24.8764 / 47.3257 mm in radius, limited at s22 and s15: f/5.7652 / f/5.7648 from the computed focal lengths and f/5.7685 / f/5.7683 from the printed ones.
- Prose brought into line: the header's stop and semi-diameter lines and the `STO` row comment. The shared note's edits are listed in the EXT OUT log.
- The trace does not change. The authored `STO` `sd` does not size the wide-open iris, which is traced from `nominalFno[0]` and stays at 19.8720 mm for both stations, the same opening the EXT OUT member traces. Stated against traced on-axis f-number: f/5.77 → f/5.77 at 287 mm (+0.0 %; the marginal ray reaches the rim of surface 22, sd 21.795) and f/5.76 → f/5.77 at 545.98 mm (+0.0 %; the iris limits).
- Confirmed unchanged on PDF p. 18: r, d, nd, and νd on rows 41–56, from s41 `431.470 / 1.99` and s42 `27.767 / 5.24 / 1.54072 / 47.2` through s48 `18.019 / 6.40 / 1.72047 / 34.7` to s55 `−105.478 / 2.00 / 1.88300 / 40.8`; their semi-diameters as halves of the printed effective diameters (s41 32.27, s48 18.16, s53 20.03, then 41.71 / 41.48 / 41.34 on s54–s56); focal length 287.00 / 545.98; F-number 5.77 / 5.77; d8 43.02 / 78.02; d18 25.57 / 3.10; d25 38.33 / 25.80; BF 68.49. Rows 1–40 are identical to the EXT OUT file, which was read against PDF p. 17 row by row.
- `zoomApertureModel: "fixed-iris"` is kept, on the same grounds as the EXT OUT member: SP sits in the fourth unit, which does not move in zooming (¶0037), and one stop diameter is printed.
- The inserted-state zoom table heads its second column "Intermediate". Its d8 / d18 / d25 of 78.02 / 3.10 / 25.80 are the telephoto values of the not-inserted table and ¶0028 calls FIG. 4B the telephoto end, so the file's "Tele" label stands.
- Open: `nominalFno` keeps 5.765010383668428 / 5.764593653737933, the paraxial f-numbers of the former 19.3654 mm radius, 0.09 % under the printed 5.77. The wide value sizes the traced iris at 19.8720 mm, 0.015 % under the printed 19.875 mm. The tele label is 0.015 % under the f/5.7655 that iris gives at 545.98 mm, which is why that station reads f/5.76 stated against f/5.77 traced. Not changed in this pass.
- Open: row 56 prints d = 68.46 and the file carries 68.49, as its header and row comment say. The same page prints BF 68.49 and total lens length 389.84 at both zoom positions, the inserted d41–d53 sum to the 45.38 they replace, and the not-inserted table prints 68.49 for the same surface. The file has no `sourceErrata` entry for it.

## 2026-10-30 — Shared-prefix shoulders only; full inserted-state review pending

This is a partial synchronization with the [EXT OUT review](./CanonEF200400mmf4LISUSMExtender14x.audit.md), not a
completed shape-and-glass review of EXT IN. Independently inspected the [local original](../../../patents/US20130308041A1.pdf):
the Numerical Example 1 prescription on PDF p. 17 (printed p. 5), the explicit shared-surface declaration on PDF p. 18
(printed p. 6), and inserted-state Fig. 3 on PDF p. 4 (sheet 3). The figure is a native 2560 × 3300 raster at 300 ppi;
the reading crops preserve native pixels. Only optical outlines were read, excluding unit brackets, rays and leaders.

Three resolved rear shoulders of unchanged shared lenses now use `rimExtensionSd`: surface 4, 48.875 mm with clear
sd 47.445 mm; surface 11, 23.675 mm with clear sd 21.5 mm; surface 14, 20.32 mm with clear sd 19.955 mm. The latter
two stop at existing bonded-cap heights; no new opaque interface land is added. Every clear sd, source R/d,
material and control is retained. Shared-prefix parity is restored; the complete 56-surface inserted configuration,
its additional media and its renderer/state constraints remain pending the separate complete review.

## 2026-10-30 — Complete inserted-configuration shape and glass review

### Source, reused coverage and native resolution

Read the original local `patents/US20130308041A1.pdf` anew. Numerical Example 1's non-inserted table is on PDF
p. 17 (printed p. 5, ¶0061); the inserted table on PDF p. 18 (printed p. 6) explicitly reuses surfaces 1–40 and
prints replacement rows 41–56. The inserted cross-section is Fig. 3 on PDF p. 4 (sheet 3); ¶0028 identifies its
corresponding Fig. 4A/B plots as the wide/tele infinity states. The inserted table's second column says Intermediate,
but its 545.98 mm endpoint uses the shared tele gaps; that label ambiguity does not justify another configuration.

The unchanged prefix's completed [EXT OUT shape/glass review](./CanonEF200400mmf4LISUSMExtender14x.audit.md) is
reused with its actual 2026-10-30 date. This pass independently confirms the shared table and Fig. 3 prefix, then
reviews all inserted/rear rows and media in their distinct configuration. The earlier partial-prefix note above was
only the synchronization checkpoint, not a completed IN review at that time.

Fig. 3 is a native 2560 × 3300 raster at 300 ppi. Native crops were inspected without substituting an enlarged
render for evidence. The optical cross-section is about 3.8 px/mm; one native pixel represents about 0.26 mm.
Ink, schematic blank margins and vertex ambiguity warrant roughly ±0.8 mm for outer-rim readings. The adopted
shoulders are anchored to existing caps rather than claiming precise blank dimensions. Leaders, rays, IS/EXT unit
brackets, the image-plane stroke and movement arrows are excluded from optical-rim measurements.

### Shape, source constraints and rejected changes

All 56 radii, 55 refracting clear caps, the source variable-gap pairs and all fixed spacings were compared with the
native prescription pages. Surface 38 is visibly +174.462 mm; the OCR reading +74.462 is rejected. There are no
aspheres or hybrid resin layers in this configuration. Every concave end and every cemented junction, including the
inserted EXTa pair, EXTb triplet and pair, and L44 rear doublet, was inspected against Fig. 3 and the actual SVG.

The three shared shoulders remain: 4 outer 48.875 with clear sd 47.445 mm, 11 outer 23.675 with clear sd 21.5 mm,
and 14 outer 20.32 with clear sd 19.955 mm. No additional land or inferred cut is added. The 11/14 outer radii stop at
their existing bonded-cap heights; completing the full schematic blocks to 24.05/21.32 mm would require unsupported
notch or interface geometry. Those larger blank trials are rejected, as the OUT review records.

The inserted optics' 42/43, 44/45/46, 47/48/49/50, 51/52/53 and 54/55/56 caps remain literal. Their drawing strokes
do not support changing the published optical caps or filling the unequal bonded boundaries with opaque lands.
The smaller rear differences approach one or two native pixels. No unsupported equal-height block, extrapolated
optical sphere or disconnected bonded extension is introduced. The same constraint retains the other shared
singlets and bonded outlines beyond the three resolved shoulders.

No new numeric R/d, stop, source glass coordinate, focus/zoom control or image gap is changed. The prior d56
correction now has the required structured record and two independent source evidence kinds. The native row on
PDF p. 18 prints 68.46 mm, but its BF summary gives 68.49 and total track 389.84 mm. Literal d56 gives rounded track
389.82 mm; the existing 68.49 gives 389.85 mm, matching the rounded OUT track. Both corrected configurations
retain the existing 0.01 mm row-rounding residual against the stated 389.84 mm total. Claim 1 on PDF p. 23 (printed p. 11), read
from a native rendered crop, independently requires total lens length constant before/after extender insertion.
This `source-summary` plus `claims` evidence supports the existing correction, now recorded in `source.errata`.
It resolves the missing-errata issue left open on 2026-10-07. Source endpoints still retain about 0.08–0.09 mm
paraxial focus residual; no image-gap fit is made to remove it. The source has no rear-filter/cover-plate row. A production rear filter lacks a supplied
prescription and is not invented or described as a source-listed plate removed from the model.

### Glass and spectral qualification

All 32 modeled media, including every inserted cemented member, match the original nd/νd pairs. The actual table
headers identify the d-line reference by notation; no separate numeric wavelength definition, individual nC/nF/ng,
partial-dispersion table or APD evidence is printed. The d-line interpretation permits the existing compatible
catalog curves; it does not identify historical glass chemistry, supplier or melt. No per-lens spectral override is
authored. No APD annotation is added from Canon's fluorite/UD production counts.

All 32 existing curve selections remain compatible after label qualification. The shared 22-media coverage is reused
from the OUT review; the ten rear media were checked directly here. They resolve to S-TIL2, J-F5, J-LASFH13,
S-LAH58, N-KZFS8, S-LAH58, S-NBM51, FCD515, J-LF7 and S-LAH58 in order. These are qualified spectral proxies,
not ten identified production melts. The class labels now state that historical supplier and melt are unspecified.
The CaF2 label likewise identifies a spectral proxy: Canon's one-fluorite product specification is a separate
correlation and does not prove the patent element's historical chemistry. The public common analysis carries these
same qualifications, coordinated with the OUT review rather than edited concurrently here.

### Iris convention, runtime samples and limitations

The existing fixed-iris rule gives a live radius of 19.3653973144 mm at both endpoints. This supersedes the stale
19.872 mm runtime statement in the historical 2026-10-07 note. Current paraxial f-numbers are 5.765010/5.764594;
EFL divided by the real transmitted collimated-beam diameter gives 5.907995/5.908677. A diagnostic iris at half the
printed effective diameter, 19.875 mm, gives real-beam 5.765213/5.764806 (limited at 22/15) but paraxial
5.617193/5.616787. That convention-dependent correspondence does not prove a physical iris schedule. The existing
rule and nominal values remain unchanged.

Published endpoints pass the surface, image-circle and aperture checks, and full-frame chief coverage is clear.
The final actual SVG was compared directly with native Fig. 3 at wide, with middle/tele and both focus-control ends
also rendered. Across 65 sampled zoom positions and three focus-control values, each state has 32 finite, closed,
connected outlines with zero hidden renderer trimming. Focus does not move any optic: the source publishes no
finite-distance spacing schedule. The transverse IS motion is also outside this axial reconstruction.

A dense diagnostic copy exactly reproduces the current runtime geometry at all 65 sampled zoom positions, with
zero geometry difference, while leaving the two authored source endpoints unchanged. Every full-frame chief clears,
but only 5/65 aperture states fall within 3% of the nominal f-number: 42 intermediate states are rim-limited at 46,
and 18 are iris-limited. At t = 0.578125 the aperture check gives f/7.465879 versus nominal f/5.764769 (+29.51%).
Its actual paraxial EFL is 504.698 mm versus the displayed linear 436.723 mm; computed BF is 100.0205 mm versus
image gap 68.49 mm, a 31.5305 mm defocus. The source supplies only two zoom states and describes a compensator
locus that their linear gap interpolation cannot recover. These interpolated states remain illustrative, not
focus-preserving or certified quantitative optical states. No source cap or R/d is tuned, and no unpublished cam is
invented to obtain an intermediate pass.

There are no inferred cuts to require a cut-beam exemption or probe. The shape/material source review is complete
for this configuration, with no missing-original blocker. Source fidelity, sampled endpoint clearance, intermediate
runtime limitations and production correlation remain separate conclusions.

## 2026-10-31 — Shared E18 catalog-proxy followup

The complete 2026-10-30 shape/glass source review retains its date; no fresh shape inspection is claimed. Rechecked Numerical Example 1 in the controlling original `patents/US20130308041A1.pdf`: paragraph 0059 and nd/νd headers on PDF p. 17 (printed p. 5), row 32 = 1.51633 / 64.1, and the PDF p. 18 shared-row declaration for EXT IN. The source publishes no material name, individual line indices, partial dispersion or APD constraint for E18.

The existing S-BSL7 coefficients match the [official OHARA 25-04 detailed sheet](https://www.ohara-gmbh.com/fileadmin/user_upload/export-data/pdf/product_datasheets/S-BSL7_English_.pdf), checked 2026-10-31. Evaluated nd/νd = 1.516329925 / 64.142022, with residuals −0.000000075 / +0.042022, improve on N-BK7's +0.000470035 / +0.067336. Both distinct configurations now name S-BSL7 as a qualified spectral proxy; supplier, material and melt remain unproved. This is a curve selection, not a source-pair replacement or a new catalog row. The [shared analysis](./CanonEF200400mmf4LISUSMExtender14x.analysis.md) records the common source/coefficient evidence once for both configurations.

All source numeric/spectral/APD fields, geometry and controls remain unchanged under parsed-data and d-line runtime comparison. Coverage remains 24/24 EXT OUT and 32/32 EXT IN. Existing source errata, endpoint-only optical conclusions and interpolation/focus/IS limitations are retained.
