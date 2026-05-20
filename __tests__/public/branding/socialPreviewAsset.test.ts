import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("social preview asset", () => {
  it("ships a 1200 x 630 PNG social card", () => {
    const asset = readFileSync(new URL("../../../public/branding/social-dark.png", import.meta.url));
    const signature = Array.from(asset.subarray(0, 8))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    const chunkType = String.fromCharCode(...asset.subarray(12, 16));
    const width = new DataView(asset.buffer).getUint32(16);
    const height = new DataView(asset.buffer).getUint32(20);

    expect(signature).toBe("89504e470d0a1a0a");
    expect(chunkType).toBe("IHDR");
    expect(width).toBe(1200);
    expect(height).toBe(630);
  });
});
