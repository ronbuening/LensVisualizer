# Audit Log - Canon EF-S 18-55mm f/3.5-5.6 IS

Patent: US 2007/0058265 A1, Numerical Example 2

## 2026-06-25 - Canon folder patent audit

### Source note

- The exact patent PDF was missing from the local `patents/` tree at the start of this pass. The Google Patents PDF link was fetched to `patents/US20070058265A1.pdf` and validated with `pdfinfo` before use.

### Phase 1 - Glass corrections

- Rechecked the local PDF, data file, and analysis sidecar.
- No glass label changes were needed. L41 remains `Unmatched (583/302 flint; obsolete HOYA E-F3-class candidate)` because no coefficient-backed exact public match is known.
- High-index L14 and L22 remain correctly represented by their nd values and dense-flint labels.

### Phase 2 - Retained-information audit

- The patent does not publish clear apertures. Existing SDs remain estimates from paraxial ray envelopes, patent drawing proportions, the 58 mm filter constraint, and renderer clearance limits.
- Retained the paraxial D8 focus estimate for the production 0.25 m MFD; the patent does not publish close-focus spacing columns.

## 2026-10-30 — Original shape-and-glass review

Exact local original: `patents/US20070058265A1.pdf`, Numerical Example 2, PDF
pp. 24–25 / printed pp. 7–8; Fig. 4 / PDF p. 5, sheet 4; Figs. 5A/B / PDF p. 6;
Table 1 / PDF p. 26. The source table is interleaved across columns: R19/D19 is
at ¶0119 on PDF p. 25; R20/R21 and the aspheric block are on PDF p. 24. All 21
R rows, 17 fixed distances, three variable-gap schedules, eleven pairs and six
source A–F coefficients were checked directly. Project K=0 preserves the source's
spherical-base equation. No substitute publication was used.

The front page confirms Takeshi Nishimura, Canon Kabushiki Kaisha (normalized
Canon Inc.), filing 2006-08-22 and publication 2007-03-15. Native Fig. 4 is a
2560×3300 raster at 300 ppi. Rotation preserves its pixels. The approximately
1490 px first/last-vertex span is 81.23 mm, about 18.35 px/mm. Rim uncertainty is
±0.6 mm, or ±0.8 mm at front blanks. Enlargements add no source detail. Leaders,
brackets, rays and mechanical/filter dimensions are excluded from optical rims.

### Every element, concave end and interface

| Surfaces | Previous clear sd | Adopted clear sd | Outer extension sd |
| -------- | ----------------- | ---------------- | ------------------ |
| 1/2      | 21/19             | 20.3/19          | S2=20.3            |
| 3/4      | 15.5/12.2         | 17.2/12.2        | S4=17.2            |
| 5/6      | 13/13             | 12.6/12.6        | none               |
| 7/8      | 14.2/14           | 12.6/12.6        | none               |
| 9/10     | 8.2/8.2           | 7.1/7.1          | none               |
| 11/12/13 | 8.2/8.6/8.6       | 7.5 each         | none               |
| 15/16/17 | 8.4/8.7/8.7       | 6.5 each         | none               |
| 18/19A   | 8/8               | 8.5/8            | S19A=8.5           |
| 20/21    | 8/9.8             | 8/9              | S20=9              |

All values are millimeters. Sixteen clear caps change and four free-end shoulders
are added. Native rims support the taller L12 shoulder and narrower relay train.
Both cemented interfaces remain optical curves. No opaque bond land, unsupported
equal-height block, disconnected resin wing, mechanical flange or inferred cut
is introduced. The source prescribes no separate hybrid or cement-index layer.

Rejected trials and retained limits:

- Treating S4's 17.2 mm outer blank as an optical cap exceeds R4=14.601 mm and
  fails slope and gap guards. Clear 12.2 plus outer 17.2 gives 7.140522 mm sag
  intrusion below the unchanged 7.191 mm allowance, with 0.849478 mm physical gap.
- Raising S4 clear sd to 12.37 to pass the reconstructed finite corner is rejected
  by the same guard: 7.405 mm land intrusion exceeds 7.191 mm. Its source-supported
  shoulder improves the outline without restoring that optical aperture.
- Full 8.5 mm optical caps on S19A/S20 give 0.041760 mm intrusion across the
  printed 0.03 mm gap, physically overlapping by 0.011760 mm. Retained 8 mm caps
  plus shoulders give 0.015376 mm intrusion and 0.014624 mm physical separation,
  within the unchanged 0.027 mm allowance. The two faces remain air-separated.

Source R/d, asphere, stop placement, computed image gaps and front-group focus
reconstruction stay unchanged. No radius, spacing or tolerance is tuned to fit
an outline or make an unproved finite-focus field clear.

### Glass, metadata and source qualifications

Paragraph 0116 / PDF p. 23 explicitly defines N/ν at the d-ray. Paragraph 0066 /
PDF p. 20 identifies d/g/F plot lines but supplies no position-specific numeric
line indices, partial dispersion or APD. All eleven printed pairs are retained;
ten compatible catalog curves stay active, with unchanged selection. Labels and
analysis now qualify them as spectral proxies with historical supplier, melt and
chemistry unspecified. No unsupported override was present or added (zero
removals). N10 stays an unmatched optical medium; the 2026-06-25 unmatched finding
is reused with its actual date. The obsolete-glass candidate from that historical
note is not a fresh material identification or an active curve. No source filter,
rear plate or additional cement-index medium is omitted.

Source-supported label/aperture corrections are separate from shape fitting.
Printed focal labels 18.69/32.08/53.27 now replace calculated station labels and
catalog endpoints. Published wide/tele Fno=3.63/5.86 replace retail 3.5/5.6 targets;
the existing middle 4.5 target remains explicitly unpublished. All gaps and focus
controls remain fixed. The current paraxial rule yields 3.63/4.5/5.86; independent
real-beam values are 3.658751/4.562802/5.967194. No physical iris schedule is printed.

Source issues retained in `source.errata`: Table 1 condition (5) gives 0.59 while
the source pairs give 0.659544; condition (9)'s printed fw/f4 gives literal
0.434343, whereas table value 2.30 matches inverse f4/fw=2.302328. Broad/preferred
conditions and table consistency are distinct; no optical value is altered.

### State, field and actual SVG verification

Surface/image-circle checks pass. All 65 zoom samples pass aperture within 3%
and chief-field coverage ≥99% of the 14.175 mm format corner. The aperture census
uses the two source endpoint targets and the retained inferred middle target.
A separate 13.6 mm source-height diagnostic at the three tabulated geometries
(middle aperture inferred) requests 873 rays: all chiefs/axial bundles clear,
93 ordinary off-axis clips, zero intersection failures.

Actual Gaussian conjugate sweep: 65 zoom × seven focus × three fields × 97 pupil
rays = 132,405 rays, all real axial bundles clear, no virtual objects, no aim or
intersection failures, and 10,661 ordinary off-axis clips. Three format-corner
chiefs meet the retained S4 cap: zoom/focus 0/0.75, 0/1 and 0.015625/1. Reconstructed
close endpoints remain 250 mm from the image plane, separate from source evidence
because no finite-focus spacing table is published. A positive-object supplement
at image-plane distance 250 mm / focus traces another 132,405 rays, all axial
bundles clear, with 10,821 ordinary off-axis clips and the same three restricted
chiefs; these positive objects need not be focused. Current state-specific iris
radii and public field/chief/pupil solvers are used throughout.

The 65-position interpolation check reaches −3.027618 mm infinity BF displacement
at zoom 0.78125; continuous cam interpolation is illustrative, not demonstrated
focus-preserving source travel. Actual nine-view SVGs were compared with the
native figure. A 65 zoom × 21 focus contour census gives 1,365 sets of eleven
finite, closed, connected paths, zero hidden trimming and zero diagnostic-clone
geometry/iris difference. Only centered IS is checked; transverse IS travel and
continuous 3D/mechanical clearance remain unvalidated. Source fidelity, sampled
runtime results and production correlation remain separate conclusions.

## 2026-10-31 — Scoped unresolved-medium dispersion-source follow-up

Preserve the actual prior patent/shape review dates above. This is a dispersion-source follow-up for Numerical Example 2 N10 / R18, not another shape review. US 2007/0058265 A1, PDF page 24 / printed 7, retains 1.583060/30.2; paragraph 0116, PDF page 23, defines the d-ray reference. Source chemistry remains unspecified. The RII one-term polycarbonate fit to Sultanova 2009 evaluates νd = 27.858294, outside the source pair’s existing ±2 guard; Kasarova 2007’s PC polynomial evaluates νd = 27.564085 versus its tabulated 29.1, failing a strict catalog round trip. A permission-bearing archival Zemax POLYCARB row cites Handbook of Optics Vol. II and is coordinate compatible (nd residual +0.002409922, νd residual −0.290815), but the primary handbook coefficient table remains unverified and its name does not identify this source medium. N10 remains Unmatched. No source pair/partial, numerical prescription, iris, focus/zoom control or shape is changed.

Research sources: [primary Sultanova et al. 2009 paper](https://doi.org/10.12693/APhysPolA.116.585); [primary Kasarova et al. 2007 paper](https://doi.org/10.1016/j.optmat.2006.07.010); [permission-bearing archival Zemax MISC.AGF](https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/misc.agf). The research papers are distinct from the selected Canon patent evidence.

## 2026-10-31 — Qualified published POLYCARB curve adopted

US 2007/0058265 A1, Numerical Example 2, PDF page 24 / printed 7 R18/N10; paragraph 0116, PDF page 23 / printed 6, defines the d-ray reference. The actual June 25 unmatched-source finding and October 30 review remain dated history. The new curve does not prove the old E-F3 suggestion or identify a historical material. This follows and preserves the negative candidate-fit record above; it does not repeat the dated patent shape review.

The permission-bearing [RadiantZemax MISC.AGF archival copy](https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/misc.agf) publishes a replayable POLYCARB Schott polynomial, cited to _Handbook of Optics Vol. II_. The [official Ansys source table](https://ansyshelp.ansys.com/public/Views/Secured/Zemax/v251/en/OpticStudio_User_Guide/OpticStudio_Help/topics/Glass_Catalog_Sources.html) independently confirms that attribution. This is a published numerical material curve, not a direct material-manufacturer fetch or proof of the selected patent medium's chemistry, formulation, supplier or Canon process. The handbook coefficient table was not directly inspected; its chapter/page is not invented.

The native row uses $n^2=a_0+a_1\lambda^2+a_2\lambda^{-2}+a_3\lambda^{-4}+a_4\lambda^{-6}+a_5\lambda^{-8}$, with wavelength in µm, reference temperature 20 °C and valid range 0.365–1.014 µm. At C/d/F/g it evaluates 1.579863774 / 1.585469922 / 1.599438695 / 1.611520588; computed νd is 29.909184982. Its own-row residuals, −0.00000007757 in nd and −0.00000001834 in νd, pass strict 0.00003/0.11 guards. All 1,001 sampled wavelengths are finite and normally dispersive. Relative to the source 1.583060/30.2 pair, the comparatively large nd difference +0.002409922 and νd difference −0.290815018 fit the existing ±0.003/±2 compatibility windows. The runtime retains the authored source index; the curve supplies only qualified spectral variation. No per-lens C/F/g indices, partials, coefficients or new APD badge are authored.

Only the L41 / N10 glass annotation changes to the qualified POLYCARB proxy; the public analysis and current 11/11 curve count agree. Every other parsed data field, including source pair/partials, source qualifications, numerical prescription, iris, focus/zoom controls, physical gaps and rim geometry, is preserved. Historical supplier, actual polymer formulation and Canon manufacturing process remain unproved.
