import GithubSlugger from "github-slugger";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfm } from "micromark-extension-gfm";
import { gfmFromMarkdown } from "mdast-util-gfm";
import type { Content } from "mdast";

export interface ASTHeading {
  level: 2 | 3;
  text: string;
  id: string;
}

export function extractHeadingsFromAst(markdown: string): ASTHeading[] {
  const tree = fromMarkdown(markdown, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  });

  const slugger = new GithubSlugger();
  const headings: ASTHeading[] = [];

  for (const node of tree.children) {
    if (node.type !== "heading") continue;
    if (node.depth !== 2 && node.depth !== 3) continue;

    const text = flattenText(node).trim();
    if (!text) continue;

    headings.push({
      level: node.depth,
      text,
      id: slugger.slug(text),
    });
  }

  return headings;
}

function flattenText(node: Content): string {
  switch (node.type) {
    case "text":
    case "inlineCode":
      return node.value;
    case "link":
    case "linkReference":
    case "emphasis":
    case "strong":
    case "delete":
    case "paragraph":
    case "heading":
      return node.children.map((child) => flattenText(child)).join("");
    case "html":
      return node.value.replace(/<[^>]*>/g, "");
    case "image":
      return node.alt ?? "";
    case "imageReference":
      return node.alt ?? "";
    case "break":
      return " ";
    default:
      return "";
  }
}
