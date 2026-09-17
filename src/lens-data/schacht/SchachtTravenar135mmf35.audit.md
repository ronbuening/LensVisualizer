# Audit — Schacht Travenar 135mm f/3.5

## 2026-09-17 — Patent geometry, glass, and catalog identity

Source: exact local `patents/DE_843305_C.pdf`, p. 2 Example 2 table and p. 4 Fig. 2.
The table's radii, thicknesses, nd and νd agree with the retained 1.35× prescription.

| Field | Before | After | Source / reason |
|---|---|---|---|
| Surface 7 / 8 SD | 11.03 / 11.02 mm | 15.5 / 15.5 mm | Fig. 2 rear meniscus optical rims, excluding leaders |
| L1 glass | Explicit unmatched 552626 class | N-PSK3 spectral proxy | SCHOTT nd 1.55232 / νd 63.46 versus patent 1.5516 / 62.6 |
| L3 glass | Unresolved 722293 code | S-TIH18 spectral proxy | Existing OHARA curve 1.721507 / 29.23 versus patent 1.7215 / 29.3 |
| L4 glass | Explicit unmatched 747349 class | LAFN7 spectral proxy | Existing SCHOTT curve 1.74950 / 34.95 versus patent 1.7470 / 34.9 |
| Maker / name prefix | Albert Schacht / ALBERT SCHACHT | Schacht / SCHACHT | Existing maker identity used by both sibling Travenar records |

The 600-dpi figure was checked directly. First/last optical vertices are approximately x=1485/2570 px;
59.98 mm across that span gives about 0.0553 mm/px. The rear rim spans approximately 560 px,
or 15.5 mm semi-diameter. Automated mapping was contaminated by the d1 label and rear leader lines;
its 17.4 mm rear estimate was rejected. Front-three-element rims remain within drawing uncertainty.
The rear enlargement improves off-axis clearance without changing radii, spacings, or the calibrated stop.

N-PSK3 is a new catalog row sourced from the [SCHOTT datasheet](https://media.schott.com/api/public/content/d2ffcfdb186243899d40a9454e3b88a4?v=9a79cc5b).
LAFN7's +0.00250 index residual is near the existing compatibility boundary and remains explicitly approximate.
All four elements now resolve to compatible spectral proxies, including the retained 620603 crown.
No supplier identity, patent line indices, or anomalous-dispersion property is inferred from these matches.
The analysis now distinguishes runtime spectral proxies from historical melt identification and describes the revised rim.

## 2026-09-17 — Individual patent-holder metadata correction

The title page of local `patents/DE_843305_C.pdf` names Ludwig Bertele twice, as inventor and as individual
applicant/patent holder. It names no Schacht organization. Changed `patentAssignees` from `["Ludwig Bertele"]`
to `[]` to follow the catalog's organizations-only rule, while preserving the inventor credit and explaining
individual ownership in the analysis. This also avoids a second Bertele node in the assignee layer of the map.

For comparison, local `patents/US_2721501_A.pdf` p. 2 names Ludwig Bertele with no organizational assignee,
and `patents/CH_479879_A.pdf` p. 1 names Ludwig and Jürgen Bertele as individual holders and inventors.
The sibling Travenar 90mm f/2.8 and S-Travenar 135mm f/2.8 therefore correctly retain empty organizational
assignee arrays. Product correlation with Schacht is not evidence of an assignment or license.
