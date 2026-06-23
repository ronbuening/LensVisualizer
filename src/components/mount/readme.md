# src/components/mount

This folder React mount-diagram rendering panels backed by the pure mount optics renderer.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_mount["src/components/mount"]
    n_src_components_mount_src_components_mount_MountDiagram_tsx["MountDiagram.tsx"]
    n_src_components_mount_src_components_mount_MountDiagramPanel_tsx["MountDiagramPanel.tsx"]
  end
  n_external_src_optics_mount["src/optics/mount"]
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_src_components_mount_src_components_mount_MountDiagramPanel_tsx --> |4| n_external_src_optics_mount
  n_src_components_mount_src_components_mount_MountDiagram_tsx --> |3| n_external_src_optics_mount
  n_src_components_mount_src_components_mount_MountDiagramPanel_tsx --> |2| n_external_src_types
  n_src_components_mount_src_components_mount_MountDiagramPanel_tsx --> n_external_pkg_react
  n_src_components_mount_src_components_mount_MountDiagramPanel_tsx --> n_src_components_mount_src_components_mount_MountDiagram_tsx
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: src/optics/mount (7), src/types (2), package:react, same folder
- External consumers: src/pages/MountPage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `MountDiagram.tsx` | React component module | src/optics/mount (3) | same folder | default, MountDiagram |
| `MountDiagramPanel.tsx` | React component module | src/optics/mount (4), src/types (2), package:react, same folder | src/pages/MountPage.tsx | default, MountDiagramPanel |

