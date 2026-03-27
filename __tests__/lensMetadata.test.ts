import { describe, it, expect } from "vitest";
import {
  deriveMaker,
  allMakerSlugs,
  makerDisplayName,
  lensPageTitle,
  lensPageDescription,
  lensCanonicalURL,
  makerCanonicalURL,
  lensJsonLd,
  comparePageTitle,
  comparePageDescription,
  compareCanonicalURL,
  SITE_NAME,
  SITE_URL,
} from "../src/utils/lensMetadata.js";
import type { LensData } from "../src/types/optics.js";

/* ── helpers ── */

function makeLens(overrides: Partial<LensData> = {}): LensData {
  return {
    name: "NIKON NIKKOR Z 50mm f/1.8 S",
    specs: ["50mm", "f/1.8", "9 elements"],
    subtitle: "US Patent 2019/0234567",
    ...overrides,
  } as unknown as LensData;
}

/* ── deriveMaker ── */

describe("deriveMaker", () => {
  it("derives maker from known prefix in lens name", () => {
    const info = deriveMaker("NIKON NIKKOR Z 50mm f/1.8 S");
    expect(info.display).toBe("Nikon");
    expect(info.slug).toBe("nikon");
  });

  it("derives Carl Zeiss from CARL ZEISS prefix", () => {
    const info = deriveMaker("CARL ZEISS Otus 55mm f/1.4");
    expect(info.display).toBe("Carl Zeiss");
    expect(info.slug).toBe("carl-zeiss");
  });

  it("derives Voigtländer from VOIGTLÄNDER prefix", () => {
    const info = deriveMaker("VOIGTLÄNDER Nokton 50mm f/1.2");
    expect(info.display).toBe("Voigtländer");
    expect(info.slug).toBe("voigtlander");
  });

  it("falls back to first word for unknown maker", () => {
    const info = deriveMaker("TAMRON 28-75mm f/2.8");
    expect(info.display).toBe("TAMRON");
    expect(info.slug).toBe("tamron");
  });

  it("uses explicit maker field when provided (known maker)", () => {
    const info = deriveMaker("Some Lens Name", "Nikon");
    expect(info.display).toBe("Nikon");
    expect(info.slug).toBe("nikon");
  });

  it("uses explicit maker field when provided (unknown maker)", () => {
    const info = deriveMaker("Some Lens Name", "Sigma Corp");
    expect(info.display).toBe("Sigma Corp");
    expect(info.slug).toBe("sigma-corp");
  });

  it("prefers maker field over name-based derivation", () => {
    const info = deriveMaker("NIKON NIKKOR Z 50mm", "Ricoh");
    expect(info.display).toBe("Ricoh");
    expect(info.slug).toBe("ricoh");
  });
});

/* ── allMakerSlugs ── */

describe("allMakerSlugs", () => {
  it("returns an array of known maker slugs", () => {
    const slugs = allMakerSlugs();
    expect(slugs).toContain("canon");
    expect(slugs).toContain("nikon");
    expect(slugs).toContain("carl-zeiss");
    expect(slugs).toContain("voigtlander");
    expect(slugs).toContain("ricoh");
    expect(slugs).toContain("fujifilm");
    expect(slugs.length).toBe(7);
  });
});

/* ── makerDisplayName ── */

describe("makerDisplayName", () => {
  it("returns display name for known slug", () => {
    expect(makerDisplayName("nikon")).toBe("Nikon");
    expect(makerDisplayName("carl-zeiss")).toBe("Carl Zeiss");
  });

  it("returns null for unknown slug", () => {
    expect(makerDisplayName("unknown-maker")).toBeNull();
  });
});

/* ── lensPageTitle ── */

describe("lensPageTitle", () => {
  it("returns formatted title with lens name and site name", () => {
    const lens = makeLens();
    const title = lensPageTitle(lens);
    expect(title).toBe(`NIKON NIKKOR Z 50mm f/1.8 S — Interactive Lens Diagram | ${SITE_NAME}`);
  });
});

/* ── lensPageDescription ── */

describe("lensPageDescription", () => {
  it("includes specs and subtitle", () => {
    const lens = makeLens();
    const desc = lensPageDescription(lens);
    expect(desc).toContain("50mm, f/1.8, 9 elements");
    expect(desc).toContain("US Patent 2019/0234567");
    expect(desc).toContain("Interactive ray tracing");
  });

  it("handles missing specs gracefully", () => {
    const lens = makeLens({ specs: undefined });
    const desc = lensPageDescription(lens);
    expect(desc).toContain("Explore the  lens.");
  });

  it("handles missing subtitle", () => {
    const lens = makeLens({ subtitle: undefined });
    const desc = lensPageDescription(lens);
    expect(desc).not.toContain("From");
  });

  it("truncates to 160 characters with ellipsis", () => {
    const lens = makeLens({
      specs: ["very long spec one that goes on and on", "another very long spec", "and a third one too"],
      subtitle: "A Very Long Patent Title That Makes The Description Exceed The Limit",
    });
    const desc = lensPageDescription(lens);
    expect(desc.length).toBeLessThanOrEqual(160);
    if (desc.length === 160) {
      expect(desc).toMatch(/\.\.\.$/);
    }
  });
});

/* ── lensCanonicalURL ── */

describe("lensCanonicalURL", () => {
  it("returns SITE_URL/lens/<key>", () => {
    expect(lensCanonicalURL("nikkor-z-50mm")).toBe(`${SITE_URL}/lens/nikkor-z-50mm`);
  });
});

/* ── makerCanonicalURL ── */

describe("makerCanonicalURL", () => {
  it("returns SITE_URL/makers/<slug>", () => {
    expect(makerCanonicalURL("nikon")).toBe(`${SITE_URL}/makers/nikon`);
  });
});

/* ── lensJsonLd ── */

describe("lensJsonLd", () => {
  it("returns valid JSON-LD structure", () => {
    const lens = makeLens();
    const ld = lensJsonLd(lens, "nikkor-z-50mm");
    expect(ld["@context"]).toBe("https://schema.org");
    expect(ld["@type"]).toBe("TechArticle");
    expect(ld.headline).toBe(lens.name);
    expect(ld.url).toBe(`${SITE_URL}/lens/nikkor-z-50mm`);
    expect((ld.author as Record<string, unknown>).name).toBe("Ron Buening");
    expect((ld.publisher as Record<string, unknown>).name).toBe(SITE_NAME);
  });

  it("includes manufacturer derived from lens name", () => {
    const lens = makeLens();
    const ld = lensJsonLd(lens, "nikkor-z-50mm");
    const about = ld.about as Record<string, unknown>;
    const manufacturer = about.manufacturer as Record<string, unknown>;
    expect(manufacturer.name).toBe("Nikon");
  });

  it("description matches lensPageDescription", () => {
    const lens = makeLens();
    const ld = lensJsonLd(lens, "nikkor-z-50mm");
    expect(ld.description).toBe(lensPageDescription(lens));
  });
});

/* ── comparePageTitle ── */

describe("comparePageTitle", () => {
  it("returns 'Lens A vs Lens B' title", () => {
    const lensA = makeLens({ name: "NIKON NIKKOR Z 50mm f/1.2 S" });
    const lensB = makeLens({ name: "Voigtländer Nokton 50mm f/1.0" });
    const title = comparePageTitle(lensA, lensB);
    expect(title).toContain("NIKON NIKKOR Z 50mm f/1.2 S vs Voigtländer Nokton 50mm f/1.0");
    expect(title).toContain(SITE_NAME);
  });
});

/* ── comparePageDescription ── */

describe("comparePageDescription", () => {
  it("mentions both lens names", () => {
    const lensA = makeLens({ name: "Lens A" });
    const lensB = makeLens({ name: "Lens B" });
    const desc = comparePageDescription(lensA, lensB);
    expect(desc).toContain("Lens A");
    expect(desc).toContain("Lens B");
    expect(desc).toContain("Compare");
  });

  it("does not exceed 160 characters", () => {
    const lensA = makeLens({ name: "A Very Long Lens Name That Goes On And On" });
    const lensB = makeLens({ name: "Another Very Long Lens Name That Also Goes On" });
    const desc = comparePageDescription(lensA, lensB);
    expect(desc.length).toBeLessThanOrEqual(160);
  });
});

/* ── compareCanonicalURL ── */

describe("compareCanonicalURL", () => {
  it("returns SITE_URL/compare/<slugA>/<slugB>", () => {
    expect(compareCanonicalURL("nikkor-z-50mm", "nokton-50mm")).toBe(`${SITE_URL}/compare/nikkor-z-50mm/nokton-50mm`);
  });
});
