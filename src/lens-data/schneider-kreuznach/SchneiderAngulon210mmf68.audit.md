# Audit — Schneider-Kreuznach Angulon 210mm f/6.8

## 2026-09-17 — Patent figure and sodium-D glass review

Source: exact local `patents/US1882530.pdf`, p. 1 optical section, p. 2 prescription and p. 3 glass table.
The 1.05× scaling of the 200 mm example, two cemented triplets, and central stop split are retained.

The 600-dpi figure confirms the stepped outer menisci and smaller cemented clear apertures. The approximately
21 mm outside radius agrees with the patent's 0.20f diameter statement. Internal 15.538 mm / 14 mm rims are retained:
leader lines and overhanging outer blanks contaminate automated internal estimates near 21–22 mm. Enlarging
cemented r2/r3/r6/r7 to those estimates would exhaust the positive middle-element edge thickness.
The display name correctly identifies Angulon, not Super-Angulon. No particular image format is established for this
fixed scaled construction; image-format metadata remains unset rather than inferring one from focal length alone.

| Elements | Before | After | Catalog sodium-D coordinates |
|---|---|---|---|
| L1 / L6 | Unmatched F5 class | F5 spectral proxy | nD 1.603281 / νD 38.021 |
| L2 / L5 | Unmatched S-BAL2 candidate | S-BAL2 spectral proxy | nD 1.570889 / νD 50.791 |
| L3 / L4 | Unmatched 1.4631 / 64.9 | FK3 spectral proxy | nD 1.464437 / νD 65.760 |

The existing vendor curves were evaluated at 589.2938 nm with νD=(nD−1)/(nF−nC), and separately at the runtime
d-line reference. Both comparisons satisfy unchanged Δn ±0.003 / Δν ±2 guards. These are approximate spectral
proxies, not sodium-D-to-d conversions or historical melt identifications. Source nd/ν values remain unchanged;
no nC/nF/ng/dPgF data were invented. The analysis retains the reference-wavelength caveat and names the proxies.


## 2026-09-17 — Local-site diagram and inspector follow-up

Direct local-site review against US1882530 p. 1 confirms the paired cemented triplets and stepped outer rims. Retained the constrained 21 / 15.538 / 14 mm rim structure; no further SD change is justified. The six inspector cards correctly report TRIPLET T1/T2 and the existing F5 / S-BAL2 / FK3 spectral proxies. These are sodium-D-compatible approximations, not historical supplier identities or measured patent color data. The fixed cell has no modeled focus or zoom travel. Removed the schema placeholder distance and internal reconstruction code from the user-facing focus caption; no minimum focus distance is asserted.
