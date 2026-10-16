/**
 * `npm run convert:lens-data -- --input <file|dir> [--to-version 1|2] [--dry-run | --check | --write]
 * [--output <dir>]` — converts lens and teleconverter files between versions of the lens-data format
 * (OPTICS_ENGINE_REWRITE_SPEC.md, S2.P3.T2). The command line lives in `lens-data-convert/cli.mjs`; the exit codes
 * are listed in its usage text.
 */

import { runConversion } from "./lens-data-convert/cli.mjs";

try {
  process.exitCode = await runConversion({
    argv: process.argv.slice(2),
    stdout: process.stdout,
    stderr: process.stderr,
  });
} catch (error) {
  process.stderr.write(`convert-lens-data: ${error?.stack ?? error}\n`);
  process.exitCode = 2;
}
