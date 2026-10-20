/**
 * Engine differential driver.
 *
 * Compares what the optics engine returns at a base ref with what it returns in the working tree, for one tier of
 * requests, under a declared change class. It adds a detached git worktree at the base in the system temp
 * directory, copies the working tree's `src/benchmarks/engineDiff/` into it, bundles the capture entry once per
 * side with this checkout's Vite, and then captures and compares one lens at a time, a bounded part of it at once:
 *
 * - engine drift: every head prescription on the base engine and on the head engine, under the class;
 * - a format-only data change (the prescription differs, its semantic fingerprint does not): the base and head
 *   prescriptions on the head engine, which must be bit-identical in every class;
 * - a semantic data change: the same pair as an impact report, judged path by path. It blocks only where both sides
 *   have a status, a computed number or an outcome at one path and the head data's alone is a failure, is not
 *   finite or threw, which is how a lens that no longer builds shows. What one side has alone is counted;
 * - a new lens has no base data, and blocks only by not building;
 * - a lens the base engine cannot build is uncompared, and the uncompared lenses must be exactly the exceptions
 *   declared in the file given as `--exceptions`.
 *
 * That file is a pull request description, or text in its form. Above C0 it also declares the discrete transitions
 * the change expects, under its own heading: a unit of the engine comparison that holds one and that no line there
 * declares fails the run, and so does a line that is not what the run found.
 *
 * Converter pairs are requested for every pair either engine's fit predicate permits for the head's prescriptions,
 * and the two engines must permit the same ones. A pair the base engine cannot compose and build, while the head
 * engine can, is uncompared instead, and one that only the head's prescriptions permit is compared as a new lens.
 * A record that throws on both engines fails the run in any class, as does a converter of the head catalog that
 * the head engine cannot read (ingest refuses it or its view fails).
 *
 * A tier too long for one run is split with `--shard i/n`: the tier's lenses are cost-balanced into n parts, and the run
 * covers part i, counted from 1. The parts of a tier share no lens and together hold all of them, so n runs with
 * the same base, tier and class are one comparison of the tier.
 *
 * It writes gzip NDJSON payloads under `<out>/payloads/` and the small files under `<out>/reports/`: summary.json,
 * summary.md, data-impact.md, uncompared.json and failing-records.ndjson.gz, and above C0 transitions.md, which holds
 * a line to paste for every unit with a transition that nothing declares, the units that no line can declare, and
 * every difference each matched line covers. Nothing it writes belongs in the repository. The exit code is 0 when
 * the run passes and 1 when it fails or cannot run. An unreadable declared transition or head-catalog converter
 * stops the run before it adds its base worktree. Told to stop by SIGINT or SIGTERM, it removes its base worktree
 * and its temporary directories first.
 *
 * Usage:
 *   node scripts/engine-diff.mjs --base <ref> [--tier p|s|f] [--class c0|c1|c2|c3] [--shard i/n] [--lens <id>]
 *     [--exceptions <file>] [--out <dir>]
 */

import { once } from "node:events";
import {
  appendFileSync,
  cpSync,
  createWriteStream,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import { join, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { pathToFileURL } from "node:url";
import { createGzip } from "node:zlib";
import { build } from "vite";
import { solverProbePlugin } from "../src/benchmarks/engineDiff/probePlugin.mjs";
import {
  addBaseWorktree,
  cleanUpOnSignal,
  git as gitIn,
  lockfileUnchangedSince,
  otherBaseWorktrees,
  prepareHistoricalSeam,
  resolveBaseCommit,
} from "./base-worktree.mjs";

const ROOT = join(import.meta.dirname, "..");
/* The name that prefixes this tool's messages, and the temp-directory prefix that marks its base worktrees. */
const LABEL = "engine-diff";
const BASE_WORKTREE_PREFIX = "engine-diff-base-";
const HARNESS_DIR = join("src", "benchmarks", "engineDiff");
const CAPTURE_ENTRY = join(HARNESS_DIR, "captureEntry.ts");

const TIERS = ["p", "s", "f"];
const CHANGE_CLASSES = ["c0", "c1", "c2", "c3"];
/* Failing record pairs go to reports/, which CI uploads; past this much text the rest are counted, not written. */
const MAX_FAILING_RECORD_BYTES = 32 * 1024 * 1024;
/* Lines for undeclared transitions go to reports/ as well. Past this much text the rest are counted, not written:
 * the run has counted every one of their units by then, and fails on each whether its line is written or not. */
const MAX_TRANSITION_LINE_BYTES = 4 * 1024 * 1024;
/* What GitHub holds of a pull request description, in characters. The inputs of one workflow dispatch, which is
 * how a stage run takes its lines, are held to one character less together. */
const DESCRIPTION_CAPACITY = 65_536;
const PROGRESS_EVERY_LENSES = 100;
/* A lens is captured, compared and written this many requests at a time. One zoom has 130 authored stations, and
 * its Tier F records are over a gigabyte of text per side: held whole, on both sides, they do not fit the heap.
 * An analysis record is several megabytes, so a small part keeps the peak low and costs no time. */
const MAX_REQUESTS_PER_PART = 8;

export const USAGE =
  "usage: node scripts/engine-diff.mjs --base <ref> [--tier p|s|f] [--class c0|c1|c2|c3] [--shard i/n] " +
  "[--lens <id>] [--exceptions <file>] [--out <dir>]";

const VALUE_FLAGS = ["base", "tier", "class", "shard", "lens", "exceptions", "out"];

/**
 * Parse the command line.
 *
 * @param {readonly string[]} argv - arguments after the script name; a value follows its flag or an "="
 * @returns {{ base: string, tier: string, changeClass: string, shard: { index: number, count: number } | null,
 *   lens: string | null, exceptions: string | null, out: string | null }} the options, with tier "p" and class "c0"
 *   when not given
 * @throws when an argument is unknown, or a value is missing or invalid
 */
export function parseArgs(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index++) {
    const arg = argv[index];
    const equals = arg.indexOf("=");
    const name = arg.startsWith("--") ? arg.slice(2, equals < 0 ? undefined : equals) : "";
    if (!VALUE_FLAGS.includes(name)) throw new Error(`Unknown engine-diff argument: ${arg}\n${USAGE}`);
    const value = equals < 0 ? argv[++index] : arg.slice(equals + 1);
    if (value === undefined || value === "") throw new Error(`--${name} needs a value.\n${USAGE}`);
    values[name] = value;
  }
  const { base, tier = "p", class: changeClass = "c0", lens = null, exceptions = null, out = null } = values;
  if (!base) throw new Error(`--base <ref> is required.\n${USAGE}`);
  if (!TIERS.includes(tier)) throw new Error(`--tier must be one of ${TIERS.join(", ")}.`);
  if (!CHANGE_CLASSES.includes(changeClass)) throw new Error(`--class must be one of ${CHANGE_CLASSES.join(", ")}.`);
  let shard = null;
  if (values.shard !== undefined) {
    const [, index, count] = /^(\d+)\/(\d+)$/.exec(values.shard) ?? [];
    shard = { index: Number(index), count: Number(count) };
    if (!(shard.index >= 1 && shard.index <= shard.count)) throw new Error("--shard must be i/n with 1 <= i <= n.");
  }
  return { base, tier, changeClass, shard, lens, exceptions, out };
}

/* ── Git ── */

function git(args) {
  return gitIn(ROOT, args);
}

/**
 * Put the working tree's harness in a new base worktree.
 *
 * @param {string} commit - the base commit
 * @returns {(worktree: string) => void} what `addBaseWorktree` runs on the worktree it made
 */
function prepareBaseWorktree(commit) {
  return (worktree) => {
    /* The capture graph imports no package, so the base builds without node_modules either way. They are linked
     * when the lockfile is unchanged, so that anything resolved from the base tree finds the dependencies that
     * tree was written against. */
    const nodeModules = join(ROOT, "node_modules");
    if (existsSync(nodeModules) && lockfileUnchangedSince(ROOT, commit)) {
      symlinkSync(realpathSync(nodeModules), join(worktree, "node_modules"), "dir");
    }
    /* The base may predate the harness or hold an older one; both engines run the working tree's. */
    rmSync(join(worktree, HARNESS_DIR), { recursive: true, force: true });
    cpSync(join(ROOT, HARNESS_DIR), join(worktree, HARNESS_DIR), { recursive: true });
    prepareHistoricalSeam(worktree);
  };
}

/* ── Capture bundles ── */

/**
 * Bundle a tree's capture entry and load it.
 *
 * No config file is read: the base's own may not build under this checkout's dependencies, and the entry needs
 * none. `public/` is not copied, and every import is bundled so the output loads from a directory with no
 * node_modules.
 *
 * @param {string} root - the tree to build: this checkout, or the base worktree
 * @param {string} outDir - an empty directory for the bundle
 * @param {boolean} probes - instrument only temporary C2 bundles
 * @returns {Promise<Record<string, Function>>} the built capture module
 */
async function loadCapture(root, outDir, probes = false) {
  await build({
    configFile: false,
    plugins: probes ? [solverProbePlugin(root)] : [],
    root,
    build: {
      ssr: join(root, CAPTURE_ENTRY),
      outDir,
      emptyOutDir: true,
      copyPublicDir: false,
      rollupOptions: { output: { format: "es" } },
    },
    ssr: { noExternal: true },
    logLevel: "warn",
  });
  /* The extension follows the root's package.json ("type": "module" gives .js), so the name is read, not assumed. */
  const bundles = readdirSync(outDir).filter((name) => /\.m?js$/.test(name));
  if (bundles.length !== 1) {
    throw new Error(`engine-diff: expected one capture bundle in ${outDir}, found ${bundles.join(", ") || "none"}.`);
  }
  return import(pathToFileURL(join(outDir, bundles[0])).href);
}

/* ── Output ── */

function openGzipLines(path) {
  const gzip = createGzip();
  const written = pipeline(gzip, createWriteStream(path));
  /* A failed write is reported where it is awaited, by `close`; until then it must not count as unhandled. */
  written.catch(() => {});
  return {
    async write(lines) {
      if (lines.length > 0 && !gzip.write(`${lines.join("\n")}\n`)) await once(gzip, "drain");
    },
    async close() {
      gzip.end();
      await written;
    },
  };
}

/**
 * Write the report of a run's transitions: the lines an author pastes for the units that nothing declares, the
 * units that no line can declare, and every difference each matched line covers.
 *
 * The lines stand alone under the heading a description declares them under, so that section can be pasted whole.
 * Every later section has a heading of its own, which ends the declarations for the reader of a description.
 *
 * @param {{ breached: { units: number, samples: readonly string[] }, declared: readonly { line: string,
 *   outcome: string, differences: number, covered?: readonly { path: string, kind: string, base: string,
 *   head: string }[] }[] }} transitions - what the run found, as its summary holds it
 * @param {readonly string[]} lines - one line per unit that nothing declares, each without its reason
 * @param {number} omitted - lines past the size cap, which are counted and not written
 * @returns {string} Markdown text
 */
export function renderTransitionsReport(transitions, lines, omitted) {
  const units = lines.length + omitted;
  const characters = lines.reduce((total, line) => total + line.length + 1, 0);
  const { breached } = transitions;
  const matched = transitions.declared.filter(({ outcome }) => outcome === "matched");
  const code = (text) => `\`${text.replace(/\|/g, "\\|")}\``;
  return [
    "# Transitions",
    "",
    ...(units === 0
      ? ["No unit of the engine comparison holds a transition that nothing declares.", ""]
      : [
          `${units} ${units === 1 ? "unit of the engine comparison holds" : "units of the engine comparison hold"} a ` +
            "discrete or shape difference that no line of the description declares. Each is a line below. To declare " +
            "them, paste the section into the pull request description and write after each full stop why that " +
            "transition is expected. A line with no reason stops the run.",
          "",
          `The lines are ${characters} characters before their reasons. A pull request description holds ` +
            `${DESCRIPTION_CAPACITY} characters, and the inputs of one stage dispatch one fewer.` +
            `${omitted > 0 || characters > DESCRIPTION_CAPACITY ? " These lines do not fit either." : ""}`,
          "",
          ...(omitted > 0
            ? [
                `${omitted} of them are past the size cap of this file and are not written. The run counted every one.`,
                "",
              ]
            : []),
          "## Engine-diff transitions",
          "",
          ...lines,
          "",
        ]),
    ...(breached.units > 0
      ? [
          "## Units that no line can declare",
          "",
          `${breached.units} ${breached.units === 1 ? "unit holds" : "units hold"} a discrete or shape difference, ` +
            "and with it what no line excuses: a residual outside its tolerance or a new non-finite number on the " +
            "head side, or a hit both sides have that differs beyond its budget. The run writes no line for one" +
            `${breached.units > breached.samples.length ? `; the first ${breached.samples.length} are listed` : ""}.`,
          "",
          ...breached.samples.map((sample) => `- ${sample}`),
          "",
        ]
      : []),
    ...(matched.length > 0
      ? [
          "## What each matched line covers",
          "",
          "A line names one difference of its unit and carries the digest of all of them. These are the differences " +
            "each matched line's digest covers, in the order the digest takes them. A shape is a changed array " +
            "length or a member one side lacks.",
          "",
          ...matched.flatMap(({ line, differences, covered = [] }) => [
            line.replace(/^- /, ""),
            "",
            "| Path | Kind | Base | Head |",
            "| --- | --- | --- | --- |",
            ...covered.map(
              ({ path, kind, base, head }) => `| ${code(path)} | ${kind} | ${code(base)} | ${code(head)} |`,
            ),
            ...(differences > covered.length ? ["", `The first ${covered.length} of ${differences}.`] : []),
            "",
          ]),
        ]
      : []),
  ].join("\n");
}

/* Wall time is reported per phase in this order. The captures, the comparison and the writing alternate lens by
 * lens, so each of those is a total over the run. */
const PHASES = [
  "Base worktree",
  "Capture bundles",
  "Catalogs and fingerprints",
  "Capture on the base engine",
  "Capture on the head engine",
  "Capture of base data on the head engine",
  "Comparison",
  "C2 propagation",
  "Writing payloads",
];

function createPhaseClock() {
  const milliseconds = new Map(PHASES.map((phase) => [phase, 0]));
  const add = (phase, started) => milliseconds.set(phase, milliseconds.get(phase) + performance.now() - started);
  return {
    time(phase, work) {
      const started = performance.now();
      try {
        return work();
      } finally {
        add(phase, started);
      }
    },
    async timeAsync(phase, work) {
      const started = performance.now();
      try {
        return await work();
      } finally {
        add(phase, started);
      }
    },
    seconds: () => [...milliseconds].map(([phase, elapsed]) => [phase, elapsed / 1000]),
  };
}

/* ── Interruption ── */

/* A signal handler runs between turns of the event loop, and a capture is one long synchronous turn that the
 * awaits around it do not end: a write that needs no drain resolves in the same turn. The run therefore yields a
 * turn before each capture, and acts on a signal within the time one capture of a few requests takes. */
const nextTurn = () => new Promise((resolve) => setImmediate(resolve));

/* ── The run ── */

/**
 * Run one differential comparison and write its reports.
 *
 * @param {ReturnType<typeof parseArgs>} options - parsed command line
 * @param {(line: string) => void} [log] - progress and result lines
 * @param {(line: string) => void} [warn] - warnings, which are no part of the result
 * @returns {Promise<{ passed: boolean, outDir: string }>} the verdict and where the output is
 */
export async function runEngineDiff(options, log = console.log, warn = console.error) {
  const started = performance.now();
  const clock = createPhaseClock();
  const baseCommit = resolveBaseCommit(ROOT, options.base, LABEL);
  const headCommit = git(["rev-parse", "HEAD"]);
  const uncommittedChanges = git(["status", "--porcelain"]) !== "";
  const declaredText = options.exceptions ? readFileSync(resolve(options.exceptions), "utf8") : "";

  const outDir = options.out ? resolve(options.out) : mkdtempSync(join(os.tmpdir(), "engine-diff-"));
  const payloadsDir = join(outDir, "payloads");
  const reportsDir = join(outDir, "reports");
  mkdirSync(payloadsDir, { recursive: true });
  mkdirSync(reportsDir, { recursive: true });
  const bundlesDir = mkdtempSync(join(os.tmpdir(), "engine-diff-bundles-"));

  const scope = `tier ${options.tier}${options.shard ? ` shard ${options.shard.index}/${options.shard.count}` : ""}`;
  log(
    `engine-diff: ${scope}, base ${baseCommit.slice(0, 9)} (${options.base}) against the working tree at ` +
      `${headCommit.slice(0, 9)}`,
  );
  for (const path of otherBaseWorktrees(ROOT, BASE_WORKTREE_PREFIX)) {
    warn(
      `engine-diff: warning: the base worktree of another run is registered at ${path}. If no run is using it, ` +
        `remove it with: git worktree remove --force ${path}`,
    );
  }
  let base;
  const cleanUp = () => {
    base?.remove();
    rmSync(bundlesDir, { recursive: true, force: true });
  };
  const forgetSignals = cleanUpOnSignal(LABEL, () => {
    cleanUp();
    /* An output directory the run made for itself holds half a run, and nothing has named it yet. */
    if (!options.out) rmSync(outDir, { recursive: true, force: true });
  });
  try {
    /* The head's capture is bundled first, because the reader of the declared transitions is in it. A run reads
     * them when it is made, so one is made here for that alone: a bullet that cannot be read then stops the run
     * before a base worktree is added and anything is captured, and the job summary says which bullet.
     * Every head converter is read here too, through V2 ingest, before pair selection can hide a failure. */
    const headCapture = await clock.timeAsync("Capture bundles", () =>
      loadCapture(ROOT, join(bundlesDir, "head"), options.changeClass === "c2"),
    );
    let head;
    try {
      headCapture.createDifferentialRun({
        changeClass: options.changeClass,
        declaredExceptions: [],
        restricted: true,
        declaredTransitions: declaredText,
      });
      head = clock.time("Catalogs and fingerprints", () => headCapture.exportCatalog({ validateTeleconverters: true }));
    } catch (error) {
      if (process.env.GITHUB_STEP_SUMMARY && error instanceof Error) {
        const said = `# Engine diff: could not run\n\n\`\`\`text\n${error.message}\n\`\`\`\n`;
        appendFileSync(process.env.GITHUB_STEP_SUMMARY, said, "utf8");
      }
      throw error;
    }
    base = clock.time("Base worktree", () =>
      addBaseWorktree({
        root: ROOT,
        commit: baseCommit,
        label: LABEL,
        prefix: BASE_WORKTREE_PREFIX,
        prepare: prepareBaseWorktree(baseCommit),
      }),
    );
    log(`engine-diff: base worktree ${base.worktree}`);
    const baseCapture = await clock.timeAsync("Capture bundles", () =>
      loadCapture(base.worktree, join(bundlesDir, "base"), options.changeClass === "c2"),
    );

    /* Both catalogs are fingerprinted by the head's rules: under two sets of rules equal data could look changed. */
    const { headCatalog, baseCatalog, changes, pairs } = clock.time("Catalogs and fingerprints", () => {
      const baseSide = baseCapture.exportCatalog();
      const catalogChanges = headCapture.classifyCatalogChanges(
        baseSide,
        head,
        headCapture.fingerprintCatalog(baseSide),
        headCapture.fingerprintCatalog(head),
      );
      /* The fit predicate is engine code. Each engine answers for the head's prescriptions, and the head engine
       * for the base's as well, which shows a pair that the data gained or lost. */
      const permitted = {
        headEngine: headCapture.permittedPairs(head),
        baseEngine: baseCapture.permittedPairs(head),
        baseData: headCapture.permittedPairs(baseSide),
      };
      /* The base engine may predate the form a head prescription is written in. Each engine is asked to compose
       * and build every one of those pairs, once. A pair the base engine cannot build and the head engine can is
       * set aside as uncompared and not read as a difference between the two predicates. That is decided here, for
       * the whole tier, so a narrowed run or a shard that never meets the pair lists it as this run does. */
      const either = [...permitted.headEngine, ...permitted.baseEngine];
      const unbuilt = {
        headEngine: headCapture.unbuiltPairs(head, either),
        baseEngine: baseCapture.unbuiltPairs(head, either),
      };
      return {
        headCatalog: head,
        baseCatalog: baseSide,
        changes: catalogChanges,
        pairs: headCapture.comparePermittedPairs({ ...permitted, unbuilt }, catalogChanges),
      };
    });

    /* One request list for both engines, from the head's prescriptions and every pair either engine permits for
     * them: a pair one engine lost is still asked of both, and that engine throws on it. Tier P sends a changed or
     * new lens, and each pair of a changed or new host or converter, through every request it has. */
    const requestsByLens = new Map();
    const requestCatalog = {
      ...headCapture.requestCatalog({ ...headCatalog, pairs: pairs.requested }),
      changedLensKeys: Object.keys(changes.lenses),
      changedTeleconverterKeys: Object.keys(changes.teleconverters),
    };
    const tierRequests = headCapture.tierRequests(options.tier, requestCatalog);
    /* The shard is cut from the whole tier, before any narrowing, so a lens is in the same shard in every run. */
    const requests = options.shard
      ? headCapture.shardRequests(tierRequests, options.shard, requestCatalog)
      : tierRequests;
    for (const request of requests) {
      const id = headCapture.lensId(request.lens);
      if (options.lens !== null && id !== options.lens) continue;
      if (!requestsByLens.has(id)) requestsByLens.set(id, []);
      requestsByLens.get(id).push(request);
    }
    if (requestsByLens.size === 0) {
      throw new Error(
        options.lens === null
          ? `engine-diff: ${scope} has no lens.`
          : `engine-diff: ${scope} has no request for the lens "${options.lens}".`,
      );
    }

    const run = headCapture.createDifferentialRun({
      changeClass: options.changeClass,
      declaredExceptions: headCapture.parseDeclaredExceptions(declaredText),
      /* A shard, like a single lens, is part of a tier: a declared exception may be in another part. */
      restricted: options.lens !== null || options.shard !== null,
      pairs: pairs.differences,
      /* The same text declares the transitions, under a heading of their own. A line may name a record of another
       * part of the tier, so it is held to the whole catalog's ids and not to the lenses this run meets. */
      declaredTransitions: declaredText,
      catalogLenses: [
        ...headCatalog.lenses.map(({ key }) => key),
        ...pairs.requested.map(({ host, teleconverter }) => headCapture.lensId({ key: host, teleconverter })),
      ],
    });
    const payloads = {
      baseEngine: openGzipLines(join(payloadsDir, "base-engine.ndjson.gz")),
      headEngine: openGzipLines(join(payloadsDir, "head-engine.ndjson.gz")),
      baseData: openGzipLines(join(payloadsDir, "base-data.ndjson.gz")),
    };
    const failingRecords = openGzipLines(join(reportsDir, "failing-records.ndjson.gz"));
    const failingRecordCounts = { written: 0, bytes: 0, omitted: 0 };
    const transitionLines = [];
    const transitionLineCounts = { written: 0, bytes: 0, omitted: 0 };

    /* One lens at a time, in the order of the list, and each part of it written out before the next is captured:
     * a tier is gigabytes per side. */
    let done = 0;
    for (const [lens, lensRequests] of requestsByLens) {
      /* A pair the base's prescriptions do not permit is new: the base data has nothing to set it beside. */
      const dataChange = headCapture.dataChangeOf(changes, lensRequests[0].lens, pairs.differences.headDataOnly);
      for (let start = 0; start < lensRequests.length; start += MAX_REQUESTS_PER_PART) {
        const part = lensRequests.slice(start, start + MAX_REQUESTS_PER_PART);
        await nextTurn();
        const baseEngine = clock.time("Capture on the base engine", () =>
          baseCapture.captureRecords(headCatalog, part),
        );
        await nextTurn();
        const headEngine = clock.time("Capture on the head engine", () =>
          headCapture.captureRecords(headCatalog, part),
        );
        /* Records within C1 need no derivative. Replays are deliberately lazy: a Tier S
         * analysis may contain thousands of solves, each requiring four fresh evaluations. */
        if (options.changeClass === "c2") {
          for (let i = 0; i < part.length; i++) {
            /* The quantity table also admits chief-launch origins in traces. */
            if (!headCapture.needsPropagation(baseEngine[i], headEngine[i])) continue;
            clock.time("C2 propagation", () => {
              baseEngine[i] = baseCapture.captureRecords(headCatalog, [part[i]], true)[0];
              headEngine[i] = headCapture.captureRecords(headCatalog, [part[i]], true)[0];
            });
          }
        }
        const baseData =
          dataChange === "format" || dataChange === "semantic"
            ? clock.time("Capture of base data on the head engine", () => headCapture.captureRecords(baseCatalog, part))
            : null;
        const output = clock.time("Comparison", () =>
          run.addLens({ lens, dataChange, baseEngine, headEngine, baseData }),
        );
        for (const line of output.transitionLines) {
          if (transitionLineCounts.bytes + line.length > MAX_TRANSITION_LINE_BYTES) {
            transitionLineCounts.omitted++;
            continue;
          }
          transitionLineCounts.written++;
          transitionLineCounts.bytes += line.length;
          transitionLines.push(line);
        }
        await clock.timeAsync("Writing payloads", async () => {
          await payloads.baseEngine.write(output.lines.baseEngine);
          await payloads.headEngine.write(output.lines.headEngine);
          await payloads.baseData.write(output.lines.baseData);
          for (const line of output.failingRecords) {
            if (failingRecordCounts.bytes + line.length > MAX_FAILING_RECORD_BYTES) {
              failingRecordCounts.omitted++;
              continue;
            }
            failingRecordCounts.written++;
            failingRecordCounts.bytes += line.length;
            await failingRecords.write([line]);
          }
        });
      }
      if (++done % PROGRESS_EVERY_LENSES === 0) log(`engine-diff: ${done} of ${requestsByLens.size} lenses`);
    }
    await clock.timeAsync("Writing payloads", async () => {
      await Promise.all([...Object.values(payloads), failingRecords].map((file) => file.close()));
    });

    const summary = run.finish();
    const context = {
      tier: options.tier,
      shard: options.shard,
      base: { ref: options.base, commit: baseCommit },
      head: { commit: headCommit, uncommittedChanges },
      lens: options.lens,
      removed: [...changes.removedLenses, ...changes.removedTeleconverters],
      teleconverters: changes.teleconverters,
      phases: [...clock.seconds(), ["Total", (performance.now() - started) / 1000]],
    };
    const markdown = headCapture.renderSummaryMarkdown(summary, context);
    const report = {
      ...context,
      changes,
      failingRecords: failingRecordCounts,
      transitionLines: transitionLineCounts,
      /* Which export each engine capability resolved to, per side: a renamed seam shows here. */
      seam: { base: baseCapture.describeSeam(), head: headCapture.describeSeam() },
      ...summary,
    };
    writeFileSync(join(reportsDir, "summary.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
    writeFileSync(join(reportsDir, "summary.md"), markdown, "utf8");
    writeFileSync(join(reportsDir, "data-impact.md"), headCapture.renderDataImpactMarkdown(summary, context), "utf8");
    writeFileSync(join(reportsDir, "uncompared.json"), `${JSON.stringify(summary.uncompared, null, 2)}\n`, "utf8");
    /* Under C0 no transition is matched, so there is no line to write, and a report left by an earlier run into the
     * same directory would be read as this run's. */
    const transitionsPath = join(reportsDir, "transitions.md");
    if (options.changeClass === "c0") rmSync(transitionsPath, { force: true });
    else {
      const text = renderTransitionsReport(summary.transitions, transitionLines, transitionLineCounts.omitted);
      writeFileSync(transitionsPath, text, "utf8");
    }
    if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${markdown}\n`, "utf8");

    const { engine, counts } = summary;
    log(
      `engine-diff: ${summary.passed ? "passed" : "FAILED"} (${scope}, class ${options.changeClass}): ` +
        `${summary.lenses} lenses, ${engine.records} records and ${engine.numbers} numbers compared, ` +
        `${engine.recordsDiffering} records differ; rays ok/clipped/failed ` +
        `${counts.headEngine.rays.ok}/${counts.headEngine.rays.clipped}/${counts.headEngine.rays.failed}.`,
    );
    for (const failure of summary.failures) log(`engine-diff: ${failure}`);
    for (const warning of summary.warnings) warn(`engine-diff: warning: ${warning}`);
    const digests = engine.differences.digest;
    if (digests > 0 && (options.changeClass === "c1" || options.changeClass === "c2")) {
      warn(
        `engine-diff: warning: ${digests} changed trace digests in ${engine.digests.lenses.length} lenses were not ` +
          `budgeted under ${options.changeClass}; see "Not budgeted" in summary.md.`,
      );
    }
    if (summary.transitions.undeclared > 0) {
      log(
        `engine-diff: units with a transition that nothing declares: ${summary.transitions.undeclared}; a line to ` +
          `paste for each is in ${transitionsPath}`,
      );
    }
    if (transitionLineCounts.omitted > 0 || transitionLineCounts.bytes > DESCRIPTION_CAPACITY) {
      warn(
        `engine-diff: warning: the lines to paste are more than the ${DESCRIPTION_CAPACITY} characters a pull ` +
          "request description holds, so one description cannot declare them all.",
      );
    }
    if (summary.transitions.breached.units > 0) {
      log(
        `engine-diff: units with a transition that no line can declare: ${summary.transitions.breached.units}; ` +
          `${transitionsPath} says what each holds`,
      );
    }
    if (failingRecordCounts.omitted > 0) {
      log(
        `engine-diff: ${failingRecordCounts.omitted} failing record pairs are in the payloads only, past the size cap.`,
      );
    }
    log(`engine-diff: reports in ${reportsDir}`);
    return { passed: summary.passed, outDir };
  } finally {
    forgetSignals();
    cleanUp();
  }
}

async function main() {
  const { passed } = await runEngineDiff(parseArgs(process.argv.slice(2)));
  return passed ? 0 : 1;
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  /* The exit code is set rather than forced, so the last log lines reach a pipe before the process ends. */
  main().then(
    (exitCode) => {
      process.exitCode = exitCode;
    },
    (error) => {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    },
  );
}
