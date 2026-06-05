/**
 * Lens Mount SVG Specifications report generator.
 *
 * Emits the package's required `lens-mount-svg-specifications.md` plus one standalone `.svg` per
 * mount × view, from the authored `*.mount.ts` specs. Modeled on the mirror-fixture report
 * generator: it builds strings and writes files, and is deterministic (no volatile timestamps) so
 * regeneration yields clean diffs.
 *
 * Regenerate: `npm run generate:mount-svgs`
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import { MOUNT_SPECS } from "../../../../src/mounts/index.js";
import type { AngleValue, ContactFeature, LengthValue, MountSpec, ValueEnvelope } from "../../../../src/types/mount.js";
import { buildMountSvgDoc, type MountView } from "../../../../src/optics/mount/renderMount.js";
import { mountSvgDocToString } from "../../../../src/optics/mount/toSvgString.js";
import { emitMountJsonString } from "../../../../src/optics/mount/emitMountJson.js";

const REPORT_DIR = "agent_docs/generated";
const SVG_DIR = `${REPORT_DIR}/mounts`;
const REPORT_PATH = `${REPORT_DIR}/lens-mount-svg-specifications.md`;

const VIEWS: { view: MountView; label: string; file: string }[] = [
  { view: "camera_side_front", label: "Camera-side front view", file: "camera-front" },
  { view: "lens_side_rear", label: "Lens-side rear view", file: "lens-rear" },
  { view: "axial_section", label: "Axial / register schematic", file: "axial" },
];

function envText(env: ValueEnvelope<number>): string {
  const val = typeof env.value === "number" ? String(env.value) : env.value;
  return `${val} (\`${env.status}\`)`;
}

function angleText(env: AngleValue): string {
  return typeof env.value === "number" ? `${env.value}°` : env.value;
}

function lenText(env: LengthValue): string {
  return typeof env.value === "number" ? String(env.value) : env.value;
}

function statusRow(spec: MountSpec): string[] {
  const lines: string[] = [];
  lines.push(`| Field | Value |`);
  lines.push(`|---|---|`);
  lines.push(`| Mount ID | \`${spec.mountId}\` |`);
  lines.push(`| Display label | ${spec.displayLabel} |`);
  lines.push(`| Project note | ${spec.projectNote} |`);
  lines.push(`| Research status | \`${spec.researchStatus}\` |`);
  lines.push(`| MVP status | \`${spec.mvpStatus}\` |`);
  lines.push(`| Mount mechanism | \`${spec.mechanism}\` (lock \`${spec.lockType}\`) |`);
  lines.push(`| Base profile | \`${spec.mvp.profileModel.baseProfileId}\` |`);
  lines.push(`| Selected MVP profile | \`${spec.mvp.profileModel.selectedMvpProfileId}\` |`);
  lines.push(`| Variant strategy | \`${spec.mvp.profileModel.variantStrategy}\` |`);
  lines.push("");
  return lines;
}

function profileMatrix(spec: MountSpec): string[] {
  const lines: string[] = [];
  lines.push(`#### Base and variant profile matrix`);
  lines.push("");
  lines.push(`| Profile ID | Type | Applies to | Adds | Removes | Changes |`);
  lines.push(`|---|---|---|---|---|---|`);
  for (const p of spec.mvp.profileModel.variantProfiles) {
    lines.push(
      `| \`${p.profileId}\` | ${p.profileType} | ${p.appliesTo} | ${p.adds.join("; ") || "—"} | ${p.removes.join("; ") || "—"} | ${p.changes.join("; ") || "—"} |`,
    );
  }
  lines.push("");
  return lines;
}

function dimensionalSummary(spec: MountSpec): string[] {
  const cd = spec.coreDimensions;
  const lg = spec.lockGeometry;
  const lines: string[] = [];
  lines.push(`#### Dimensional summary`);
  lines.push("");
  lines.push(`| Field | Value | Unit |`);
  lines.push(`|---|---|---|`);
  lines.push(`| Flange focal distance | ${envText(cd.flangeFocalDistanceMm)} | mm |`);
  lines.push(`| Nominal throat diameter | ${envText(cd.nominalThroatDiameterMm)} | mm |`);
  lines.push(`| Effective clear aperture | ${envText(cd.effectiveClearApertureMm)} | mm |`);
  lines.push(`| Camera mount outer diameter | ${envText(cd.cameraMountOuterDiameterMm)} | mm |`);
  lines.push(`| Lens mount outer diameter | ${envText(cd.lensMountOuterDiameterMm)} | mm |`);
  lines.push(`| Contact count | ${envText(cd.contactCount)} | count |`);
  lines.push(`| Lock rotation | ${envText(lg.lockRotationDeg)} | deg |`);
  lines.push(`| Lock direction | ${lg.lockRotationDirection.value} (\`${lg.lockRotationDirection.status}\`) | — |`);
  lines.push("");
  return lines;
}

function geometryTable(
  title: string,
  rows: {
    featureId: string;
    featureType: string;
    profileId: string;
    centerAngleDeg: AngleValue;
    startAngleDeg: AngleValue;
    endAngleDeg: AngleValue;
    innerRadiusMm: LengthValue;
    outerRadiusMm: LengthValue;
  }[],
): string[] {
  const lines: string[] = [];
  lines.push(`#### ${title}`);
  lines.push("");
  lines.push(`| Feature ID | Type | Profile | Center | Start | End | Inner r | Outer r |`);
  lines.push(`|---|---|---|---|---|---|---|---|`);
  for (const r of rows) {
    lines.push(
      `| \`${r.featureId}\` | ${r.featureType} | \`${r.profileId}\` | ${angleText(r.centerAngleDeg)} | ${angleText(r.startAngleDeg)} | ${angleText(r.endAngleDeg)} | ${lenText(r.innerRadiusMm)} | ${lenText(r.outerRadiusMm)} |`,
    );
  }
  lines.push("");
  return lines;
}

function contactsTable(contacts: ContactFeature[]): string[] {
  if (contacts.length === 0) return [];
  const lines: string[] = [];
  lines.push(`#### Electrical contacts`);
  lines.push("");
  lines.push(`| Side | No. | Profile | Center angle | Radius | Function |`);
  lines.push(`|---|---|---|---|---|---|`);
  for (const c of contacts) {
    lines.push(
      `| ${c.side} | ${c.contactNo} | \`${c.profileId}\` | ${angleText(c.centerAngleDeg)} | ${lenText(c.centerRadiusMm)} | ${c.function} |`,
    );
  }
  lines.push("");
  return lines;
}

function couplingsTable(spec: MountSpec): string[] {
  if (spec.mechanicalCouplings.length === 0) return [`#### Mechanical couplings`, "", "None — fully electronic.", ""];
  const lines: string[] = [
    `#### Mechanical couplings`,
    "",
    `| Feature | Side | Profile | Function |`,
    `|---|---|---|---|`,
  ];
  for (const c of spec.mechanicalCouplings)
    lines.push(`| \`${c.featureId}\` | ${c.side} | \`${c.profileId}\` | ${c.function} |`);
  lines.push("");
  return lines;
}

function axialTable(spec: MountSpec): string[] {
  const lines: string[] = [`#### Axial stack`, "", `| Plane | z (mm) | Diameter (mm) |`, `|---|---|---|`];
  for (const p of spec.axialStack)
    lines.push(`| \`${p.planeId}\` | ${lenText(p.zPositionMm)} | ${lenText(p.diameterMm)} |`);
  lines.push("");
  return lines;
}

function sourcesTable(spec: MountSpec): string[] {
  const lines: string[] = [
    `#### Sources`,
    "",
    `| Ref | Type | Citation | Archive | Captured | Confidence |`,
    `|---|---|---|---|---|---|`,
  ];
  for (const s of spec.sourceRefs)
    lines.push(
      `| \`${s.ref}\` | ${s.sourceType} | ${s.citation} | [snapshot](${s.archiveUrl}) | ${s.archiveDate} | ${s.confidence} |`,
    );
  lines.push("");
  return lines;
}

function openQuestions(spec: MountSpec): string[] {
  if (spec.openQuestions.length === 0) return [];
  const lines: string[] = [`#### Open questions`, ""];
  for (const q of spec.openQuestions) lines.push(`- ${q.issue} _(${q.resolution})_`);
  lines.push("");
  return lines;
}

function mountSection(spec: MountSpec, svgRelPaths: Record<string, string>): string[] {
  const lines: string[] = [];
  lines.push(`### \`${spec.mountId}\` — ${spec.displayLabel}`);
  lines.push("");
  lines.push(...statusRow(spec));
  lines.push(...profileMatrix(spec));
  lines.push(...dimensionalSummary(spec));
  lines.push(`#### Figures (selected profile \`${spec.mvp.profileModel.selectedMvpProfileId}\`)`);
  lines.push("");
  for (const v of VIEWS) {
    const doc = buildMountSvgDoc(spec, spec.mvp.profileModel.selectedMvpProfileId, v.view);
    lines.push(`**${v.label}** — viewBox \`${doc.viewBox}\` ([standalone SVG](${svgRelPaths[v.file]}))`);
    lines.push("");
    lines.push(mountSvgDocToString(doc));
    lines.push("");
  }
  lines.push(...geometryTable("Camera-side front-view geometry", spec.cameraSideFeatures));
  lines.push(...geometryTable("Lens-side rear-view geometry", spec.lensSideFeatures));
  lines.push(...contactsTable(spec.contacts));
  lines.push(...couplingsTable(spec));
  lines.push(...axialTable(spec));
  lines.push(`#### Machine-readable mount block`);
  lines.push("");
  lines.push("```json");
  lines.push(emitMountJsonString(spec));
  lines.push("```");
  lines.push("");
  lines.push(...sourcesTable(spec));
  lines.push(...openQuestions(spec));
  return lines;
}

function buildReport(specs: MountSpec[], svgRelPathsByMount: Record<string, Record<string, string>>): string {
  const lines: string[] = [];
  lines.push(`# Lens Mount SVG Specifications`);
  lines.push("");
  lines.push(`Generated by \`npm run generate:mount-svgs\` from \`src/mounts/*.mount.ts\` (schema version 1.3).`);
  lines.push(
    `Coordinate convention: z = 0 at flange datum; +z toward lens; 0° at 12 o'clock as viewed from the camera front; clockwise positive.`,
  );
  lines.push("");
  lines.push(`## Methodology`);
  lines.push("");
  lines.push(
    `All angles are stored in the camera-front world frame; the lens-rear view applies the mirror θ → (360 − θ) mod 360 at render time and never writes mirrored angles back. The transform is validated against the Nikon F mounting index (left-to-right reflection) in the mount test suite. 1 SVG user unit = 1 mm; each viewBox is the feature bounding box plus a 0.1 margin, rounded outward to whole mm; coordinates are rounded to 3 decimals so regeneration is byte-stable.`,
  );
  lines.push("");
  lines.push(`## MVP Policy`);
  lines.push("");
  lines.push(
    `Headline dimensions (flange focal distance, throat, mechanism) are sourced; fine angular geometry is photo-scaled and drawn as labeled placeholders rather than guessed. Evolved mounts keep an invariant base profile plus named variant overlays; geometry is never averaged across eras.`,
  );
  lines.push("");
  lines.push(`## Coverage Matrix`);
  lines.push("");
  lines.push(`| Mount | Mechanism | Flange focal distance | Throat | MVP status | Profiles |`);
  lines.push(`|---|---|---|---|---|---|`);
  for (const spec of specs) {
    lines.push(
      `| [\`${spec.mountId}\`](#${spec.mountId}--${spec.displayLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-")}) | ${spec.mechanism} | ${lenText(spec.coreDimensions.flangeFocalDistanceMm)} mm | ${lenText(spec.coreDimensions.nominalThroatDiameterMm)} mm | \`${spec.mvpStatus}\` | ${spec.mvp.profileModel.variantProfiles.length} |`,
    );
  }
  lines.push("");
  lines.push(`## Mount Sections`);
  lines.push("");
  for (const spec of specs) lines.push(...mountSection(spec, svgRelPathsByMount[spec.mountId]));
  lines.push(`## Appendix — JSON Schema reference`);
  lines.push("");
  lines.push(
    `The machine block of each mount validates against \`src/mounts/lens-mount.schema.json\` (schema version 1.3). In this project the contract is enforced through TypeScript (\`src/types/mount.ts\` + \`satisfies MountSpecInput\` + \`validateMountSpec.ts\`); the JSON block is emitted from the typed object, so it conforms by construction.`,
  );
  lines.push("");
  return lines.join("\n");
}

describe("lens mount SVG specifications report", () => {
  it("emits the spec markdown and per-view SVG files", () => {
    const specs = Object.values(MOUNT_SPECS)
      .filter((s): s is MountSpec => s !== undefined)
      .sort((a, b) => a.mountId.localeCompare(b.mountId));

    mkdirSync(SVG_DIR, { recursive: true });
    const svgRelPathsByMount: Record<string, Record<string, string>> = {};
    for (const spec of specs) {
      const rel: Record<string, string> = {};
      for (const v of VIEWS) {
        const doc = buildMountSvgDoc(spec, spec.mvp.profileModel.selectedMvpProfileId, v.view);
        const svg = `<?xml version="1.0" encoding="UTF-8"?>\n${mountSvgDocToString(doc)}\n`;
        const fileName = `${spec.mountId}-${v.file}.svg`;
        writeFileSync(`${SVG_DIR}/${fileName}`, svg);
        rel[v.file] = `mounts/${fileName}`;
      }
      svgRelPathsByMount[spec.mountId] = rel;
    }

    const report = buildReport(specs, svgRelPathsByMount);
    writeFileSync(REPORT_PATH, report);

    expect(specs.length).toBeGreaterThanOrEqual(3);
    expect(report).toContain("# Lens Mount SVG Specifications");
    expect(report).toContain("nikon-f");
    expect(report).toContain('"schemaVersion": "1.3"');
  });
});
