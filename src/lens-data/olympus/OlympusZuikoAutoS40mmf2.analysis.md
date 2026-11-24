## Patent Reference and Design Identification

**Patent:** US 4,396,255 A
**Granted:** 1983-08-02
**Inventor:** Toshihiro Imai
**Assignee:** Olympus Optical Co., Ltd.
**Example details:** Embodiment 1; PDF page 6, right column, continuing on page 7. All printed lengths are scaled ×40 from f = 1 to 40 mm.

The design is a probable match to the Olympus Zuiko Auto-S 40mm f/2. The [maker's section](https://esif.world-traveller.org/om-sif/lensgroup/images/40mmf2_diagram.jpg) and the [MIR section](https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/images/40mmoptic.gif) show six separate elements and a central iris, consistent with both Embodiments 1 and 2. Neither source uniquely identifies the production prescription. Embodiments 3 and 4 have a cemented pair and fit less well.

## Optical Architecture

Six separate spherical elements form six air-separated groups, with a positive–negative–positive front section and a negative–positive–positive rear section. The central stop separates L3 from L4. The narrow d7-prime air gap between L4 and L5 preserves the separate r8-prime face. Every radius, thickness and glass pair comes from Embodiment 1.

## Element-by-Element Analysis

### L1: Positive Meniscus

nd = 1.72, νd = 50.25. Glass: LAC10 (HOYA catalog equivalent). Isolated thick-element paraxial f = +74.944350 mm. The front positive meniscus begins the converging section; its focal power is calculated from the prescription, not measured on the production lens.

### L2: Negative Meniscus

nd = 1.60729, νd = 49.29. Glass: BAF5 (HOYA catalog equivalent). Isolated thick-element paraxial f = −53.310751 mm. This negative meniscus lies between the front positive elements.

### L3: Positive Meniscus

nd = 1.6825, νd = 44.65. Glass: BAF22 (HOYA catalog equivalent). Isolated thick-element paraxial f = +83.253824 mm. This positive meniscus completes the front section immediately before the stop.

### L4: Negative Meniscus

nd = 1.76182, νd = 26.55. Glass: FD140 (HOYA catalog equivalent). Isolated thick-element paraxial f = −19.817297 mm. The strongest negative element lies immediately behind the stop, facing L5 across a narrow air gap.

### L5: Positive Meniscus

nd = 1.726, νd = 53.56. Glass: LAL60 (OHARA catalog equivalent). Isolated thick-element paraxial f = +27.831985 mm. This positive meniscus is air-separated from L4; the pair is not cemented.

### L6: Biconvex Positive

nd = 1.757, νd = 47.87. Glass: S-LAM54 (OHARA catalog equivalent). Isolated thick-element paraxial f = +37.703910 mm. The final biconvex element supplies positive rear power.

## Glass and Dispersion

The patent's n/v definitions do not state a numerical reference wavelength. The d/F plot labels and catalog comparisons support treating the printed pairs as helium-d values. LAC10, BAF5, BAF22, FD140, LAL60 and S-LAM54 provide catalog dispersion curves within 0.0001 in nd and 0.15 in νd of the printed pairs. These are spectral equivalents, not identifications of the historical supplier or melt. No element is identified as extra-low dispersion or anomalous partial dispersion by the maker or patent.

The catalog curves predict an F-minus-d paraxial focus separation of −0.0762 mm, consistent with approximately −0.08 mm in Figure 3 after ×40 scaling. At the actual d-line iris edge, the d/F longitudinal focus shifts relative to paraxial d focus are +0.0337 / +0.0916 mm; the scanned plot suggests roughly +0.07 / +0.13 mm, with about ±0.02–0.03 mm reading uncertainty. The marginal separation agrees, but a shared offset of about 0.04 mm remains. The inferred stop and schematic plot do not support identifying a single glass as its cause or retuning the prescription. The patent supplies no named glasses, individual spectral-line indices or partial-dispersion values.

## Focus and Operating Limits

The [Olympus handbook mirror](https://esif.world-traveller.org/om-sif/lensgroup/40mmf2.htm) documents a straight helicoid, 0.30 m minimum focus and an f/2–16 aperture range. The model is fixed at infinity with no variable gaps; the patent supplies no finite-focus prescription. The 1e15 m focus value is an infinity-only placeholder, not a physical close-focus endpoint.

### Embodiment Differences and Image Plane

Compared with Embodiment 2, Embodiment 1 has normalized L2 thickness 0.033 instead of 0.040, d4 of 0.043 instead of 0.035, L3 thickness 0.089 instead of 0.061, central d6 of 0.235 instead of 0.234, and rear d7-prime of 0.008 instead of 0.013. Multiple radii and three glass pairs also differ. The model follows Embodiment 1 throughout.

The stored image plane retains printed BF: 36.72 mm, giving an image coordinate of 65.48 mm. The printed L = 1.64 corresponds to 65.6 mm; the difference is consistent with rounding because the sum of normalized thicknesses and BF is 1.637. Likewise Embodiment 2's 1.614 rounds to its printed 1.61. Independent first-order calculation gives EFL 40.0006738713 mm, BFL 36.6520614099 mm and image coordinate 65.4120614099 mm. The calculated BF is 0.0679385901 mm shorter than the printed BF, a separate issue from L rounding.

### Stop, Rims and Field Limits

The stop is inferred at z = 14.18 mm, the midpoint of the central gap from 9.48 to 18.88 mm. Its exact coordinate and diameter are not printed. The model's f/2 stop radius is 8.090841 mm. Clear apertures are also absent from the patent. The modeled semi-diameters are [13.5, 13.5, 11.2, 10, 9.5, 9.5, 9, 9, 9.7, 9.7, 13.5, 13.5] mm. Figure 1 supplies approximate optical cap heights, at about 18.5 native pixels per scaled lens millimetre. Its shared Embodiment 1/2 drawing is schematic; bevels and leader lines are excluded from cap measurements. The 9.0 mm L4 and 9.7 mm L5 rims accommodate the actual engine-derived f/2 iris beam. These dimensions are modeling assumptions, not factory measurements.

L4 and L5 nearly touch at their outer edges across the 0.32 mm axial air gap, leaving about 0.0173 mm at the common 9.0 mm height. Their near-contact geometry limits a literal fit to the larger rear outline in Figure 1. L2's front optical cap extends beyond its rear cap, which ends before the drawn bevel. The section model joins cap endpoints directly and does not reproduce every bevel. The maker's 25 mm barrel length is not the optical vertex track.

The patent and maker both state a 56° full field. At the declared 28° half-field, the modeled image height is about 20.87 mm against the 21.65 mm full-frame corner, or 96.4% radial coverage. The corner chief is reachable near 28.9°, corresponding to a 57.8° full field, beyond the declared field limit. This difference reflects the field declaration rather than rim clipping. At f/2 and infinity, the engine's 64-cell-across stop lattice gives 50.8% geometric transmission and 39.4% relative illumination at the declared 28° edge. A separate calculation at the 28.898° full-frame corner gives 47.0% geometric transmission and 35.7% relative illumination; this diagnostic extends beyond the declared field. These are simulated pupil throughput and illumination, not measured production performance or coating transmission.

## Aspherical Surfaces and Special Components

All 12 interfaces are spherical. No cemented interface, camera plate or stabilization group is prescribed. The separate r8-prime face and d7-prime airspace are retained. The historical glass melts and finite-focus motion remain unknown.

### Sources

- [Original patent](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4396255).
- [Olympus handbook mirror: Zuiko 40mm/F2 specifications](https://esif.world-traveller.org/om-sif/lensgroup/40mmf2.htm) and [optical section](https://esif.world-traveller.org/om-sif/lensgroup/images/40mmf2_diagram.jpg).
- [MIR: Zuiko AUTO-S 40mm f/2.0 specifications and section](https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/40mm.htm).
