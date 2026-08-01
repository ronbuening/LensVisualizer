import { describe, expect, it } from "vitest";
import {
  lensLinkFromFormat,
  lensLinkFromLibrary,
  lensLinkFromMount,
} from "../../../../src/pages/lensIndex/clusterLinks.js";

describe("lens cluster links", () => {
  it("keeps library navigation context out of the crawlable URL", () => {
    expect(
      lensLinkFromLibrary("example", "/lenses?group=mount&mounts=nikon-z", { type: "mount", id: "nikon-z" }),
    ).toEqual({
      to: "/lens/example/",
      state: {
        lensBreadcrumb: {
          type: "lenses",
          returnTo: "/lenses/?group=mount&mounts=nikon-z",
          context: { type: "mount", id: "nikon-z" },
        },
      },
    });
  });

  it("uses router state for mount and format breadcrumb context", () => {
    expect(lensLinkFromMount("example", "nikon-z")).toEqual({
      to: "/lens/example/",
      state: { lensBreadcrumb: { type: "mount", id: "nikon-z" } },
    });
    expect(lensLinkFromFormat("example", "aps-c")).toEqual({
      to: "/lens/example/",
      state: { lensBreadcrumb: { type: "format", id: "aps-c" } },
    });
  });
});
