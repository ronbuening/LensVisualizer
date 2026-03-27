#!/usr/bin/env node
/**
 * Simple test: validate an example lens
 * Run with: node validate-example.js
 */

import { validateLensData } from "./lens-validator.js";

// Lens defaults (from src/lens-data/defaults.ts)
const DEFAULTS = {
  svgW: 1080,
  svgH: 490,
  focusStep: 0.004,
  apertureStep: 0.004,
  maxFstop: 16,
  rayFractions: [-0.83, -0.50, -0.17, 0.17, 0.50, 0.83],
  rayLeadFrac: 0.35,
  lensShiftFrac: 0.08,
  offAxisFieldFrac: 0.60,
  offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],
  scFill: 0.55,
  clipMargin: 1.0,
  maxRimAngleDeg: 40,
  gapSagFrac: 0.90,
  maxAspectRatio: 1.6,
};

// Example valid lens
const exampleLens = {
  key: "test-example-50f2",
  name: "TEST: Example 50mm f/2.0",
  nominalFno: 2.0,
  closeFocusM: 0.5,
  scFill: 0.55,
  yScFill: 0.35,
  fstopSeries: [2.0, 2.8, 4, 5.6, 8, 11, 16],

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.9,
      vd: 35,
      fl: 100,
      glass: "LaSF35",
    },
  ],

  surfaces: [
    { label: "1", R: 100, d: 5, nd: 1.9, elemId: 1, sd: 10 },
    { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
    { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],
};

console.log("╔════════════════════════════════════════════╗");
console.log("║  Lens Data Validator — Example Test       ║");
console.log("╚════════════════════════════════════════════╝");
console.log();

// Merge defaults
const lensWithDefaults = { ...DEFAULTS, ...exampleLens };

// Validate
const errors = validateLensData(lensWithDefaults);

if (errors.length === 0) {
  console.log("✓ PASS: Example lens is valid!");
  console.log();
  console.log("Lens Details:");
  console.log(`  Key:        ${lensWithDefaults.key}`);
  console.log(`  Name:       ${lensWithDefaults.name}`);
  console.log(`  F-number:   f/${lensWithDefaults.nominalFno}`);
  console.log(`  Surfaces:   ${lensWithDefaults.surfaces.length}`);
  console.log(`  Elements:   ${lensWithDefaults.elements.length}`);
} else {
  console.log(`✗ FAIL: Found ${errors.length} error(s):`);
  console.log();
  errors.forEach((err, i) => {
    console.log(`  ${i + 1}. ${err}`);
  });
  process.exit(1);
}

console.log();
console.log("Now try these scenarios to see how the validator catches errors:");
console.log("  1. Duplicate surface label");
console.log("  2. Negative edge thickness");
console.log("  3. Missing STO surface");
console.log("  4. Invalid SD ratio");
console.log();
console.log("See example-validation.md for detailed examples.");
