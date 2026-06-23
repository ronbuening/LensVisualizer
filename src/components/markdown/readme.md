# src/components/markdown

This folder shared markdown rendering and heading extraction for articles and lens notes.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_markdown["src/components/markdown"]
    n_src_components_markdown_src_components_markdown_extractHeadingsFromAst_ts["extractHeadingsFromAst.ts"]
    n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx["ThemedMarkdown.tsx"]
  end
  n_external_src_components_diagram["src/components/diagram"]
  n_external_pkg_react["pkg:react"]
  n_external_pkg_github_slugger["pkg:github-slugger"]
  n_external_pkg_mdast["pkg:mdast"]
  n_external_pkg_mdast_util_from_markdown["pkg:mdast-util-from-markdown"]
  n_external_pkg_mdast_util_gfm["pkg:mdast-util-gfm"]
  n_external_pkg_micromark_extension_gfm["pkg:micromark-extension-gfm"]
  n_external_pkg_react_markdown["pkg:react-markdown"]
  n_external_pkg_react_router["pkg:react-router"]
  n_external_pkg_rehype_katex["pkg:rehype-katex"]
  n_external_pkg_rehype_slug["pkg:rehype-slug"]
  n_external_pkg_remark_gfm["pkg:remark-gfm"]
  n_external_pkg_remark_math["pkg:remark-math"]
  n_external_src_types["src/types"]
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> |7| n_external_src_components_diagram
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> |2| n_external_pkg_react
  n_src_components_markdown_src_components_markdown_extractHeadingsFromAst_ts --> n_external_pkg_github_slugger
  n_src_components_markdown_src_components_markdown_extractHeadingsFromAst_ts --> n_external_pkg_mdast
  n_src_components_markdown_src_components_markdown_extractHeadingsFromAst_ts --> n_external_pkg_mdast_util_from_markdown
  n_src_components_markdown_src_components_markdown_extractHeadingsFromAst_ts --> n_external_pkg_mdast_util_gfm
  n_src_components_markdown_src_components_markdown_extractHeadingsFromAst_ts --> n_external_pkg_micromark_extension_gfm
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> n_external_pkg_react_markdown
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> n_external_pkg_react_router
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> n_external_pkg_rehype_katex
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> n_external_pkg_rehype_slug
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> n_external_pkg_remark_gfm
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> n_external_pkg_remark_math
  n_src_components_markdown_src_components_markdown_ThemedMarkdown_tsx --> n_external_src_types
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: src/components/diagram (7), package:react (2), package:github-slugger, package:mdast, package:mdast-util-from-markdown, package:mdast-util-gfm, package:micromark-extension-gfm, package:react-markdown, +6 more
- External consumers: src/components/content, src/components/layout, src/pages/ArticlePage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `extractHeadingsFromAst.ts` | Extract Headings From Ast helper module | package:github-slugger, package:mdast, package:mdast-util-from-markdown, package:mdast-util-gfm, package:micromark-extension-gfm | src/components/content | ASTHeading, extractHeadingsFromAst |
| `ThemedMarkdown.tsx` | React component module | src/components/diagram (7), package:react (2), package:react-markdown, package:react-router, package:rehype-katex, +4 more | src/components/layout, src/pages/ArticlePage.tsx | default, ThemedMarkdown |

