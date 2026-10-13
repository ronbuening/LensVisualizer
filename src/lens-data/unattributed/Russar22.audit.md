# Audit Log — Russar-22 70mm f/8

Patent: US 2,516,724 A, Example II; exact local `patents/US2516724.pdf`.

## 2026-10-01 — Glass consistency, source rims, and maker grouping

### Phase 1 — Glass

Changed L2/L5 from code/SK4 annotations and L3/L4 from LLF1 annotations to explicit Unmatched historical Lenzos
glasses. Those strings previously selected BACD4/LLF1 despite the analysis explicitly disclaiming a known reference
wavelength. This now follows the same policy as Example I. L1 remains unresolved; L6's unsupported F5 class was removed.
E-F1 is a nearby L6 comparison but does not establish historical identity or reference line. All comparison curves already
exist in the catalog, so duplicate or invented historical entries would not resolve the evidence gap.

### Phase 2 — Retained information

Retained the source-sag-derived rims after inspecting Fig. 13 at 600 dpi and the Example II table on PDF page 5.
The figure is shared with Example I and is schematic; automated ink-envelope estimates are contaminated by labels.
Central full radii near 15 mm agree with the printed 30 mm full diameters. Surface 6 retains the sag-derived 6.828189 mm
radius; the conflicting 11 mm printed free diameter remains disclosed. Surfaces 2/9 retain only the near-equatorial
single-valued branch; the post-equator lip cannot be represented. No standard image-format coverage is asserted.

### Phase 3 — Metadata

Added the common Russar design-family grouping and patent-model display qualifier. No manufacturing company or
corporate founding date is invented. The maker profile cites ITMO's institutional histories and distinguishes the later
research/production center from early lens manufacture.

### Phase 4 — Analysis sync

Aligned the glass table and prose with runtime fallback behavior and removed the erroneous F5 claim.

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

Example II's existing rims remain source-supported. Its h6/free-diameter conflict and omitted
post-equator portions remain disclosed. Four of six elements resolve to catalog curves; L-67 and
L-3 remain unmatched. The nearby E-F1 row does not establish a defensible L-3 proxy.

Focus is visibly disabled, correctly reflecting the absence of source travel; there is no zoom.
`maker: null` replaces the incorrect Russar manufacturer field. The Unattributed page explains the
unknown factory; Roossinov's author page now holds the design-family history. The grant has no named
organizational assignee, so its empty array is retained. The 72 catalog assignee names were reviewed:
no additional spelling consolidation was needed, and legal successors remain separate entities.
No additional changelog entry was made.
