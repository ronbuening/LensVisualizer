import type { Element, Root } from "hast";

/** Own Markdown text runs before React reconciles changing rich content.
 * JSX lint cannot inspect text created by react-markdown at runtime. A span
 * gives each run the same single-string host contract as authored display JSX.
 * This transforms the Markdown tree, never the live/translated DOM.
 */
export default function rehypeOwnedText() {
  return (tree: Root) => {
    function visit(parent: Root | Element) {
      if (
        parent.type === "element" &&
        ["svg", "math", "script", "style", "textarea", "option"].includes(parent.tagName)
      )
        return;
      parent.children.forEach((child, index) => {
        if (child.type === "element") visit(child);
        if (child.type === "text" && child.value.trim() && parent.children.length > 1) {
          parent.children[index] = { type: "element", tagName: "span", properties: {}, children: [child] };
        }
      });
    }
    visit(tree);
  };
}
