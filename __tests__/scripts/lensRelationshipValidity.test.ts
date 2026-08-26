import { describe, expect, it } from "vitest";
import {
  assertLensRelationshipValidity,
  relationshipRouteMetadata,
} from "../../scripts/lens-relationship-validity.mjs";

const source = { label: "Official source", url: "https://example.com/lens" };

describe("lens relationship metadata", () => {
  it("accepts sourced aliases and manufacturers", () => {
    expect(() =>
      assertLensRelationshipValidity(
        [
          {
            key: "primary-lens",
            name: "PRIMARY 50mm f/2",
            lensMounts: ["nikon-z"],
            aliases: [{ maker: "Alternate", name: "ALTERNATE 50mm f/2", kind: "rebrand", sources: [source] }],
            manufacturedBy: [{ maker: "Factory", sources: [source] }],
          },
        ],
        { knownMountIds: new Set(["nikon-z"]) },
      ),
    ).not.toThrow();
  });

  it("rejects alias collisions and invalid evidence fields", () => {
    expect(() =>
      assertLensRelationshipValidity([
        { key: "first", name: "FIRST 50mm f/2" },
        {
          key: "second",
          name: "SECOND 50mm f/2",
          aliases: [
            {
              maker: "Alternate",
              name: "First 50mm F/2",
              kind: "shared-design",
              sources: [{ label: "", url: "file:///private/source" }],
            },
          ],
        },
      ]),
    ).toThrow(/collides with first[\s\S]*kind is not supported[\s\S]*label must be[\s\S]*HTTP\(S\)/);
  });

  it("merges relationship makers and mount overrides without changing the canonical identity", () => {
    const metadata = relationshipRouteMetadata(
      {
        key: "primary-lens",
        name: "PRIMARY 50mm f/2",
        lensMounts: ["sony-fe"],
        aliases: [
          {
            maker: "Nikon",
            name: "NIKON 50mm f/2",
            kind: "rebrand",
            lensMounts: ["nikon-z"],
            sources: [source],
          },
        ],
        manufacturedBy: [{ maker: "Tamron", sources: [source] }],
      },
      "primary",
      (maker) => maker.toLowerCase(),
    );

    expect(metadata).toEqual({
      makerSlugs: ["primary", "nikon", "tamron"],
      lensMountIds: ["sony-fe", "nikon-z"],
    });
  });
});
