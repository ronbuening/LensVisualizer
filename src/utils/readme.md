# src/utils

This folder shared app utilities for config, catalog, content, error reporting, feature flags, media queries, performance probes, SEO, state, style, and themes.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_utils["src/utils"]
    n_src_utils_src_utils_catalog["catalog/"]
    n_src_utils_src_utils_content["content/"]
    n_src_utils_src_utils_seo["seo/"]
    n_src_utils_src_utils_state["state/"]
    n_src_utils_src_utils_style["style/"]
    n_src_utils_src_utils_theme["theme/"]
    n_src_utils_src_utils_appConfig_ts["appConfig.ts"]
    n_src_utils_src_utils_chunkLoadRetry_ts["chunkLoadRetry.ts"]
    n_src_utils_src_utils_errorBeacon_ts["errorBeacon.ts"]
    n_src_utils_src_utils_errorReporting_ts["errorReporting.ts"]
    n_src_utils_src_utils_featureFlags_ts["featureFlags.ts"]
    n_src_utils_src_utils_holidays_ts["holidays.ts"]
    n_src_utils_src_utils_mediaQuery_ts["mediaQuery.ts"]
    n_src_utils_src_utils_perfProbe_ts["perfProbe.ts"]
    n_src_utils_src_utils_text_ts["text.ts"]
    n_src_utils_src_utils_useMediaQuery_ts["useMediaQuery.ts"]
    n_src_utils_src_utils_usePrefersReducedMotion_ts["usePrefersReducedMotion.ts"]
  end
  n_external_pkg_react["pkg:react"]
  n_src_utils_src_utils_useMediaQuery_ts --> n_external_pkg_react
  n_src_utils_src_utils_useMediaQuery_ts --> n_src_utils_src_utils_mediaQuery_ts
  n_src_utils_src_utils_usePrefersReducedMotion_ts --> n_src_utils_src_utils_useMediaQuery_ts
```

## Directory Overview

- Direct source files: 11
- Direct subfolders: 6
- Main outbound areas: package:react, src/utils/mediaQuery.ts, src/utils/useMediaQuery.ts
- External consumers: src/benchmarks, src/components/content, src/components/controls, src/components/diagram, src/components/display, src/components/errors, src/components/HolidayFavicon.tsx, src/components/homepage, +23 more

## Subfolders

| Folder | Role |
| --- | --- |
| [catalog/](catalog/readme.md) | lens, maker, mount, image-format, and metadata catalog helpers |
| [content/](content/readme.md) | article/changelog/homepage content registries and display helpers |
| [seo/](seo/readme.md) | shared structured-data and freshness helpers for route metadata |
| [state/](state/readme.md) | LensViewer reducer, contexts, preferences, URL parsing/sync, and zoom conversions |
| [style/](style/readme.md) | inline-style fragments and shared control styling helpers |
| [theme/](theme/readme.md) | theme variants, page theme hooks, constants, and persisted theme preferences |

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `appConfig.ts` | App Config helper module | none | src/utils/state | DEFAULT_COLOR_TRACING |
| `chunkLoadRetry.ts` | Chunk Load Retry helper module | none | src/router.tsx, src/utils/catalog | loadChunkWithReload |
| `errorBeacon.ts` | Error Beacon helper module | none | src/components/errors (3), src/main.tsx | sanitizeErrorMessage, errorBeaconKey, reportErrorBeacon, installGlobalErrorBeacons, resetErrorBeaconSessionForTests |
| `errorReporting.ts` | Error Reporting helper module | none | src/components/errors | REPO_URL, buildIssueURL |
| `featureFlags.ts` | Feature Flags helper module | none | src/components/layout (5), src/components/controls (2), src/components/diagram (2), src/components/display (2), src/components/hooks (2), +3 more | ENABLE_UNIFORM_SCALING, ENABLE_ASPH_DIAMOND_FILL, ENABLE_EDGE_PROJECTION, ENABLE_REAL_RAY_LSA_DIAGNOSTIC, ENABLE_ANALYSIS_VIEW, ENABLE_CARDINAL_ELEMENTS |
| `holidays.ts` | Holidays helper module | none | src/utils/theme (2), src/components/HolidayFavicon.tsx | HolidayId, HOLIDAY_IDS, isHolidayId, nthWeekdayOfMonth, computeEaster, getActiveHoliday, HolidayOverride, holidayOverrideFromSearch |
| `mediaQuery.ts` | Media Query helper module | none | src/utils/useMediaQuery.ts | subscribeToMediaQuery |
| `perfProbe.ts` | Perf Probe helper module | none | src/components/display (6), src/benchmarks | probe, resetPerfProbe |
| `text.ts` | Text helper module | none | src/components/relationshipMap (2), src/components/search (2), src/pages/AuthorPage.tsx, src/pages/AuthorsIndexPage.tsx, src/pages/FormatPage.tsx, +7 more | pluralize |
| `useMediaQuery.ts` | React hook module | package:react, src/utils/mediaQuery.ts | src/components/homepage (3), src/components/layout (3), src/components/content (2), src/pages/HomePage.tsx, src/pages/UpdatesPage.tsx, +3 more | default, useMediaQuery |
| `usePrefersReducedMotion.ts` | React hook module | src/utils/useMediaQuery.ts | src/components/layout (4), src/components/diagram (2) | REDUCED_MOTION_QUERY, default, usePrefersReducedMotion |
