import { describe, expect, it } from "vitest";
import { serializeJsonLd } from "../../../../src/utils/seo/serializeJsonLd.js";

describe("serializeJsonLd", () => {
  it("neutralizes HTML closing tags without changing the represented data", () => {
    const value = { name: "</script><script>alert(1)</script>" };
    const serialized = serializeJsonLd(value);

    expect(serialized).not.toContain("<");
    expect(JSON.parse(serialized)).toEqual(value);
  });
});
