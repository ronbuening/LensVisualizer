# Audit Log - Panasonic Lumix G 14mm f/2.5 II ASPH

Patent: US 2013/0148006 A1, Numerical Example 1

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Re-extracted `patents/US20130148006A1.pdf` and checked Numerical Example 1 surface data, aspheres, conditional-expression table, and the patent effective-diameter column.
- Patent surface 6 remains omitted as an optically neutral flare-cut diaphragm, and the patent's 0.01 mm adhesive medium remains modeled explicitly as C1.

### Disposition

| Area | Disposition |
|---|---|
| Prescription | No numeric changes. Current radii/thicknesses/aspheres match the patent-derived model. |
| Glass labels | No relabels. The unmatched 684313 rear dense flint remains conservative because nearby S-TIM28 / M-FD80 candidates do not match nd exactly. |
| APD | No APD changes. The design uses conventional glass classes and molded aspheres rather than ED/APD elements. |
| High-index status | L2 and L4 remain high-index lanthanum-class rows supported by the patent nd values. |
| SDs | No changes. Patent effective diameters are already used as semi-diameters, with surface 7 padded only enough to satisfy the renderer's element-SD-ratio guard while preserving downstream patent apertures. |
