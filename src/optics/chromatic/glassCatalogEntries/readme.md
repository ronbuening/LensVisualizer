# src/optics/chromatic/glassCatalogEntries

This folder src/optics/chromatic/glassCatalogEntries source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_chromatic_glassCatalogEntries["src/optics/chromatic/glassCatalogEntries"]
    n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_cdgm_ts["cdgm.ts"]
    n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_hikari_ts["hikari.ts"]
    n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_hoya_ts["hoya.ts"]
    n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_nhg_ts["nhg.ts"]
    n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_ohara_ts["ohara.ts"]
    n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_schott_ts["schott.ts"]
    n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_special_ts["special.ts"]
    n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_sumita_ts["sumita.ts"]
  end
  n_external_src_optics_chromatic["src/optics/chromatic"]
  n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_cdgm_ts --> n_external_src_optics_chromatic
  n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_hikari_ts --> n_external_src_optics_chromatic
  n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_hoya_ts --> n_external_src_optics_chromatic
  n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_nhg_ts --> n_external_src_optics_chromatic
  n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_ohara_ts --> n_external_src_optics_chromatic
  n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_schott_ts --> n_external_src_optics_chromatic
  n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_special_ts --> n_external_src_optics_chromatic
  n_src_optics_chromatic_glassCatalogEntries_src_optics_chromatic_glassCatalogEntries_sumita_ts --> n_external_src_optics_chromatic
```

## Directory Overview

- Direct source files: 8
- Direct subfolders: 0
- Main outbound areas: src/optics/chromatic (8)
- External consumers: src/optics/chromatic

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `cdgm.ts` | Cdgm helper module | src/optics/chromatic | src/optics/chromatic | CDGM_GLASS_ENTRIES |
| `hikari.ts` | Hikari helper module | src/optics/chromatic | src/optics/chromatic | HIKARI_GLASS_ENTRIES |
| `hoya.ts` | Hoya helper module | src/optics/chromatic | src/optics/chromatic | HOYA_GLASS_ENTRIES |
| `nhg.ts` | Nhg helper module | src/optics/chromatic | src/optics/chromatic | NHG_GLASS_ENTRIES |
| `ohara.ts` | Ohara helper module | src/optics/chromatic | src/optics/chromatic | OHARA_GLASS_ENTRIES |
| `schott.ts` | Schott helper module | src/optics/chromatic | src/optics/chromatic | SCHOTT_GLASS_ENTRIES |
| `special.ts` | Special helper module | src/optics/chromatic | src/optics/chromatic | SPECIAL_GLASS_ENTRIES |
| `sumita.ts` | Sumita helper module | src/optics/chromatic | src/optics/chromatic | SUMITA_GLASS_ENTRIES |
