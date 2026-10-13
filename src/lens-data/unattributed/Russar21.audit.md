# Audit Log — Russar-21 60mm f/18

Patent: US 2,516,724 A, Example I; exact local `patents/US2516724.pdf`.

## 2026-10-01 — Source apertures, glass limits, and maker grouping

### Phase 1 — Glass

Retained all six explicit Unmatched dispositions. The local PDF page 6 glass table gives Lenzos L-67/L-24/L-28/L-15
and index/Abbe coordinates but no spectral reference. Nearby existing rows include S-BAM12/BAF12, BACD4,
LLF1, and H-BaF8; none proves the historical melt or its wavelength convention. The 1936 Kachalov/Voano glassmaking
reference corroborates L-24/SK4 and L-28/LLF1 class names, not modern coefficients. No new entry is justified.

### Phase 2 — Retained information

| Surface | Before sd (mm) | After sd (mm) | Evidence |
|---|---|---|---|
| 3 | 8.37 | 10 | Example I full-diameter/sag table, PDF page 5. |
| 4 | 4.62 | 10 | Same published 20 mm full diameter of the central assembly. |
| 5 | 2.75 | 5 | Published 10 mm free diameter. |
| 7 | 4.36 | 6.8 | Bounded active-rim estimate toward the published 10 mm full radius; see limit below. |
| 8 | 8.19 | 10 | Published 20 mm full diameter. |
| L3/L4 type | Negative Meniscus | Biconcave Negative | Opposed surface-radius signs. |

Fig. 13, PDF page 2, is expressly shared by Examples I/II and was inspected at 600 dpi. Labels contaminate automated
rim readings; source dimensions take precedence. The rear cemented interface cannot reach the full 10 mm radius within
the supported 3:1 front/rear radius bound with the 2.2671 mm face. Its 6.8 mm active approximation is disclosed.
Outer active rims and the omitted over-hemispherical lips remain model limits, not source changes. No image-format
floor can be inferred because the source does not establish a standard format. The declared field remains 133 degrees.

### Phase 3 — Metadata

Registered the Russar design family and grouped both lenses under it without claiming a particular factory. Added
patent-model qualification to the display name; retained the source inventor spelling and empty organizational assignee.

### Phase 4 — Analysis sync

Recorded aperture decisions and representation limits. Historical glass remains on the Abbe fallback.

## 2026-10-01 — Second local-site review

Rechecked the exact local Fig. 13 and Example tables against the live SVG. The figure is shared by
both examples; the tabulated diameters/sag remain the dimensional authority. Numeric element labels,
cemented pairs and spherical tags agree with the source. Index colors correctly distinguish the
mid-index exterior/crown elements from the low-index L-28 pair; no unsupported ED/APD tags are added.

The 1936 Kachalov/Voano reference, p. 13 and Table 6 on p. 74, supplies the historical yellow D/d
convention and L-24/SK4, L-28/LLF1, L-15/BaSF1 cross-references. The analysis now explicitly qualifies
BACD4/LLF1 (and Example I's H-BaF8) as modern spectral proxies. The earlier blanket refusal of these
proxies is superseded; historical melt identity remains unconfirmed. No new coefficient rows are
invented. Catalog mismatch report: zero. The inspector distinguishes polynomial from Sellmeier curves.

Example I surfaces 1/10 increase to the published 32.5 mm full radius, and surface 7 to 10 mm.
The previous 6.8 mm bound was a validation heuristic, not an optical or source restriction. A scoped
L4 `maxSdRatio: 4.5` admits the published unequal apertures; slope and crossing checks still apply.
Five of six elements now resolve to catalog curves; L-67 remains unmatched.

Focus is visibly disabled, correctly reflecting the absence of source travel; there is no zoom.
`maker: null` replaces the incorrect Russar manufacturer field. The Unattributed page explains the
unknown factory; Roossinov's author page now holds the design-family history. The grant has no named
organizational assignee, so its empty array is retained. The 72 catalog assignee names were reviewed:
no additional spelling consolidation was needed, and legal successors remain separate entities.
No additional changelog entry was made.
