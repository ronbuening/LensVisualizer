/**
 * Lens-data converter command line — converts lens and teleconverter files between versions, checking every output
 * before it writes any (OPTICS_ENGINE_REWRITE_SPEC.md, S2.P3.T2). `scripts/convert-lens-data.mjs` runs it.
 *
 * A run:
 * 1. collects the inputs (a file, or every `*.data.ts` and `*.teleconverter.ts` under a directory, in path order) and
 *    refuses, before converting any, a directory it cannot list, a file input that is a symbolic link, or a
 *    collision: two destinations that are one path
 *    without regard to case, an `--output` destination that exists, an `--output` directory inside the input or the
 *    input inside it (compared after resolving symbolic links, as directories), or a backup a run left beside an
 *    input;
 * 2. reads each input and asks its version by the engine's rule (`lensDataVersion`); an input already at the target
 *    version is left as it is and gets no line, and a file of no version is refused;
 * 3. converts the others through the library (`convert.mjs`), reading a CR LF source as LF and refusing a lone CR;
 *    a refusal, or a throw from the library, is that file's line, and the run goes on so the report covers every file;
 * 4. type-checks every converted text where it will be written (`typecheck.mjs`); a diagnostic refuses its file;
 * 5. under `--write`, and only when no input was refused, writes each converted text to a temp file beside its
 *    destination, keeps each input's bytes beside it, renames the temp files over the inputs (or links each to its
 *    `--output` destination), and removes the backups. A failure or a signal in that phase puts back every input
 *    already replaced (or removes every destination already written), removes what the run created, and exits 2. A
 *    backup that cannot be removed once every input is replaced is a warning, and stays.
 *
 * Stdout is the conversion report and nothing else, the same bytes in every mode; status lines and the closing count
 * go to stderr.
 */

import * as nodeFs from "node:fs";
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { evaluateLensDataSource } from "../lens-data-ast.mjs";
import { loadLensDataConversion } from "../lens-summaries.mjs";
import { convertLensDataSource } from "./convert.mjs";
import { formatConversionReport } from "./report.mjs";
import { typeCheckConvertedFiles } from "./typecheck.mjs";

/** The repository root: report paths are relative to it, and converted files import their types from it. */
const ROOT = fileURLToPath(new URL("../../", import.meta.url));

/** The directory that declares the lens-data types. */
const TYPES_DIRECTORY = join(ROOT, "src", "types");

/** Each kind of lens-data file, by its name's ending. */
const KINDS = [
  [".data.ts", "lens"],
  [".teleconverter.ts", "teleconverter"],
];

export const USAGE = `Usage: npm run convert:lens-data -- --input <file|dir> [--to-version 1|2]
                                  [--dry-run | --check | --write] [--output <dir>]

Converts lens-data files (*.data.ts, *.teleconverter.ts) to a version of the format, checking that every converted
file ingests to its source's prescription and type-checks where it will be written. An input already at the target
version is left as it is. Stdout is the conversion report; status lines go to stderr.

  --input <file|dir>  a file, or every lens-data file under a directory
  --to-version 1|2    the version to convert to (default 2)
  --dry-run           convert and check, and write nothing (the default)
  --check             convert and check, write nothing, and exit 1 when an input would convert
  --write             convert, check, and write every converted file, in place or under --output
  --output <dir>      with --write: write each converted file under <dir>, at its path below --input (a file input:
                      its name); the directory holds only the converted files

Exit codes:
  0  every input converts and passes its checks, or is already at the target version; with --write, every converted
     file is written
  1  --check: an input would convert, and none is refused
  2  an input is refused: unreadable, of no version, refused by the converter, or failing its type-check; or a type
     diagnostic outside the converted files, or a failure of the type-check itself
  2  a collision, refused before anything converts: two destinations one path without regard to case, an --output
     destination that exists, --output inside --input or --input inside --output, or a backup
     (.<name>.<pid>.convert-bak) a run left beside an input; or a directory under --input that cannot be listed,
     or an --input file that is a symbolic link
  2  with --write, a failed write or rename, after every input already replaced is put back (under --output, every
     file already written is removed)
  2  SIGINT or SIGTERM while writing, after the same restore
  2  an error writing stdout or stderr, other than a reader closing its pipe, once the run is over
  2  a usage error: an unknown, repeated or valueless flag, a value given to --dry-run, --check or --write, an
     argument that is no flag, no --input, an --input that does not exist or is a file but no *.data.ts or
     *.teleconverter.ts, two of --dry-run, --check and --write, --output without --write, or a --to-version other
     than 1 or 2

SIGINT or SIGTERM before the write phase stops the run as it stops any process (a shell reports 130 or 143), with
nothing written.
`;

/** A usage error: the message, then the usage text, on stderr, and exit 2. */
class UsageError extends Error {}

/** A collision found before anything converts. */
class CollisionError extends Error {}

/** An input that cannot be converted where it is: a directory that cannot be listed, or a link to a file. */
class InputError extends Error {}

/** A signal that arrived while the run was writing. */
class SignalError extends Error {}

const VALUE_FLAGS = ["input", "to-version", "output"];
const MODE_FLAGS = ["dry-run", "check", "write"];

/**
 * Parse the command line.
 *
 * @param {readonly string[]} argv - the arguments after the script's path
 * @returns {{ input: string, toVersion: 1 | 2, mode: "dry-run" | "check" | "write", output: string | undefined }}
 * @throws UsageError naming what is wrong
 */
export function parseConversionArgs(argv) {
  const values = {};
  const modes = [];
  for (let index = 0; index < argv.length; index++) {
    const arg = argv[index];
    if (!arg.startsWith("--")) throw new UsageError(`unexpected argument ${JSON.stringify(arg)}`);
    const equals = arg.indexOf("=");
    const name = arg.slice(2, equals < 0 ? undefined : equals);
    if (MODE_FLAGS.includes(name)) {
      if (equals >= 0) throw new UsageError(`--${name} takes no value`);
      if (modes.includes(name)) throw new UsageError(`--${name} is given twice`);
      modes.push(name);
      continue;
    }
    if (!VALUE_FLAGS.includes(name)) throw new UsageError(`unknown flag ${arg}`);
    if (Object.hasOwn(values, name)) throw new UsageError(`--${name} is given twice`);
    const value = equals < 0 ? argv[++index] : arg.slice(equals + 1);
    if (value === undefined || value === "" || (equals < 0 && value.startsWith("--"))) {
      throw new UsageError(`--${name} needs a value`);
    }
    values[name] = value;
  }
  if (values.input === undefined) throw new UsageError("--input is required");
  if (modes.length > 1) throw new UsageError(`--${modes[0]} and --${modes[1]} cannot be given together`);
  const mode = modes[0] ?? "dry-run";
  if (values.output !== undefined && mode !== "write") throw new UsageError("--output is only for --write");
  const toVersion = values["to-version"] ?? "2";
  if (toVersion !== "1" && toVersion !== "2") throw new UsageError(`--to-version must be 1 or 2, not ${toVersion}`);
  return { input: values.input, toVersion: Number(toVersion), mode, output: values.output };
}

/** The kind of a lens-data file by its name, or `undefined` for another file. */
function kindOf(path) {
  return KINDS.find(([ending]) => basename(path).endsWith(ending))?.[1];
}

/** A path with its existing part resolved through symbolic links; the part that does not exist yet kept as given. */
function realPath(fs, path) {
  const absolute = resolve(path);
  const missing = [];
  for (let at = absolute; ; at = dirname(at)) {
    try {
      return join(fs.realpathSync(at), ...missing.reverse());
    } catch (error) {
      if (error?.code !== "ENOENT" || dirname(at) === at) throw error;
      missing.push(basename(at));
    }
  }
}

/**
 * Whether one directory path is the other or lies inside it, as directories, not as strings, and without regard to
 * case, as collisions are compared: on a file system that ignores case, `casein/out` lies inside `CaseIn`.
 */
function within(path, directory) {
  const rest = relative(directory.toLowerCase(), path.toLowerCase());
  return rest === "" || (rest !== ".." && !rest.startsWith(`..${sep}`) && !isAbsolute(rest));
}

/** Every lens-data file under a directory, in path order; hidden entries and symbolic links are not followed. */
function lensDataFiles(fs, directory) {
  const files = [];
  const walk = (at) => {
    let entries;
    try {
      entries = fs.readdirSync(at, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1));
    } catch (error) {
      throw new InputError(`${at} cannot be listed: ${error.message}`);
    }
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const path = join(at, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (entry.isFile() && kindOf(path)) files.push(path);
    }
  };
  walk(directory);
  return files.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

/** The temp file or backup a run keeps beside a file. */
function besidePath(path, pid, suffix) {
  return join(dirname(path), `.${basename(path)}.${pid}.${suffix}`);
}

/** Whether a name is a backup some run kept of the file `name`, without regard to case. */
function isBackupOf(entry, name) {
  const prefix = `.${name}.`.toLowerCase();
  return entry.toLowerCase().startsWith(prefix) && /^\d+\.convert-bak$/.test(entry.slice(prefix.length));
}

/**
 * The inputs of a run and where each would be written, refusing every collision.
 *
 * @returns {{ path: string, file: string, kind: string, destination: string }[]} each input: its absolute path, its
 *   repository-relative path, its kind and its destination
 * @throws UsageError for an input that does not exist or is no lens-data file
 * @throws CollisionError naming the paths that collide
 */
function collectInputs(fs, args, cwd) {
  const input = resolve(cwd, args.input);
  let stat;
  try {
    stat = fs.statSync(input);
  } catch {
    throw new UsageError(`--input ${args.input} does not exist`);
  }
  const isDirectory = stat.isDirectory();
  if (!isDirectory && !kindOf(input)) {
    throw new UsageError(`--input ${args.input} is no *.data.ts or *.teleconverter.ts file`);
  }
  /* A write renames over the path, which would replace a link with a file and leave the file it points to as it was. */
  if (!isDirectory && fs.lstatSync(input).isSymbolicLink()) {
    throw new InputError(`--input ${args.input} is a symbolic link; give the file it points to`);
  }
  const output = args.output === undefined ? undefined : resolve(cwd, args.output);
  if (output !== undefined) {
    const [realInput, realOutput] = [realPath(fs, input), realPath(fs, output)];
    if (within(realOutput, realInput) || within(realInput, realOutput)) {
      throw new CollisionError(`--output ${output} and --input ${input} lie one inside the other`);
    }
  }
  const paths = isDirectory ? lensDataFiles(fs, input) : [input];
  const inputs = paths.map((path) => ({
    path,
    file: relative(ROOT, path).split(sep).join("/"),
    kind: kindOf(path),
    destination: output === undefined ? path : join(output, isDirectory ? relative(input, path) : basename(path)),
  }));

  const seen = new Map();
  for (const entry of inputs) {
    const key = realPath(fs, entry.destination).toLowerCase();
    const other = seen.get(key);
    if (other) {
      throw new CollisionError(`${other.path} and ${entry.path} would be written to one path: ${entry.destination}`);
    }
    seen.set(key, entry);
  }
  const listings = new Map();
  for (const entry of inputs) {
    if (output !== undefined && fs.existsSync(entry.destination)) {
      throw new CollisionError(`${entry.destination}, where ${entry.path} would be written, exists`);
    }
    const directory = dirname(entry.path);
    if (!listings.has(directory)) {
      try {
        listings.set(directory, fs.readdirSync(directory));
      } catch (error) {
        throw new InputError(`${directory} cannot be read: ${error.message}`);
      }
    }
    const backup = listings.get(directory).find((name) => isBackupOf(name, basename(entry.path)));
    if (backup !== undefined) {
      throw new CollisionError(
        `${join(dirname(entry.path), backup)}, a backup a run left, sits beside ${entry.path}; put it back or remove it`,
      );
    }
  }
  return inputs;
}

/** The directory, relative to a destination's own and ending in `/`, from which it imports its types. */
function typesDirectoryFor(destination) {
  const path = relative(dirname(destination), TYPES_DIRECTORY).split(sep).join("/");
  return `${path.startsWith(".") ? path : `./${path}`}/`;
}

/**
 * A source's text as the library reads it: CR LF read as LF, a lone CR refused.
 *
 * @returns {{ text: string, crlf: boolean } | { refusal: string }} the text and whether it had CR LF line endings
 */
function lineFeedText(text) {
  if (!text.includes("\r")) return { text, crlf: false };
  const lf = text.replaceAll("\r\n", "\n");
  const lone = lf.indexOf("\r");
  if (lone >= 0) {
    const line = lf.slice(0, lone).split("\n").length;
    return { refusal: `line ${line} holds a carriage return without a line feed` };
  }
  return { text: lf, crlf: true };
}

/**
 * Create a file that must not exist yet, with the given permissions whatever the umask, and write its bytes. The path
 * is recorded as soon as the file exists, before any byte is written, so a write that fails part way (a full disk, a
 * file-size limit) leaves a file the run knows it created and removes.
 */
function writeNewFile(fs, path, data, mode, record) {
  const descriptor = fs.openSync(path, "wx", mode);
  record(path);
  try {
    fs.fchmodSync(descriptor, mode);
    fs.writeFileSync(descriptor, data);
  } finally {
    fs.closeSync(descriptor);
  }
}

/** Yield to the event loop, so a signal that arrived is handled before the next write. */
function yieldToSignals() {
  return new Promise((resolveYield) => setImmediate(resolveYield));
}

/**
 * Write the converted files: temp files beside their destinations, then backups of the inputs and renames in place,
 * or links to the `--output` destinations. On a failure or a signal, put back what was replaced or written, remove
 * what the run created, and throw.
 *
 * @param {object} fs - the file system
 * @param {{ entry: object, text: string, bytes: Uint8Array, mode: number }[]} converted - each converted file, and its
 *   input's bytes and permissions
 * @param {boolean} inPlace - whether the destinations are the inputs
 * @param {object} context - the process id, the signal source and the stderr writer
 * @returns {Promise<void>}
 */
async function writeConverted(fs, converted, inPlace, { pid, signals, warn }) {
  const temps = new Map();
  const backups = new Map();
  const replaced = [];
  const published = [];
  const createdDirectories = [];
  let signal;
  const onSignal = (name) => {
    signal ??= name;
  };
  const checkSignal = async () => {
    await yieldToSignals();
    if (signal) throw new SignalError(`${signal} arrived while writing`);
  };
  for (const name of ["SIGINT", "SIGTERM"]) signals.on(name, onSignal);
  try {
    for (const { entry, text, mode } of converted) {
      if (!inPlace) {
        for (let at = dirname(entry.destination); !fs.existsSync(at); at = dirname(at)) createdDirectories.push(at);
        fs.mkdirSync(dirname(entry.destination), { recursive: true });
      }
      writeNewFile(fs, besidePath(entry.destination, pid, "convert-tmp"), text, mode, (temp) => temps.set(entry, temp));
      await checkSignal();
    }
    if (inPlace) {
      for (const { entry, bytes, mode } of converted) {
        writeNewFile(fs, besidePath(entry.path, pid, "convert-bak"), bytes, mode, (backup) =>
          backups.set(entry, backup),
        );
        await checkSignal();
      }
      for (const { entry } of converted) {
        fs.renameSync(temps.get(entry), entry.path);
        temps.delete(entry);
        replaced.push(entry);
        await checkSignal();
      }
    } else {
      for (const { entry } of converted) {
        fs.linkSync(temps.get(entry), entry.destination);
        published.push(entry);
        fs.unlinkSync(temps.get(entry));
        temps.delete(entry);
        await checkSignal();
      }
    }
  } catch (error) {
    const unrestored = [];
    for (const entry of replaced) {
      try {
        fs.renameSync(backups.get(entry), entry.path);
        backups.delete(entry);
      } catch (restoreError) {
        unrestored.push(`${entry.path} (its backup ${backups.get(entry)}: ${restoreError.message})`);
      }
    }
    for (const entry of published) {
      try {
        fs.unlinkSync(entry.destination);
      } catch (removeError) {
        unrestored.push(`${entry.destination} (${removeError.message})`);
      }
    }
    for (const path of [...temps.values(), ...(unrestored.length > 0 ? [] : backups.values())]) {
      try {
        fs.unlinkSync(path);
      } catch {
        /* Already gone: nothing of this run's is left there. */
      }
    }
    for (const directory of createdDirectories.sort((a, b) => b.length - a.length)) {
      try {
        fs.rmdirSync(directory);
      } catch {
        /* Not empty, or already gone: left as it is. */
      }
    }
    if (inPlace && replaced.length > 0) {
      warn(`put back ${replaced.length - unrestored.length} of the ${replaced.length} inputs already replaced`);
    }
    if (!inPlace && published.length > 0) warn(`removed the ${published.length} files already written`);
    if (unrestored.length > 0) warn(`could not restore: ${unrestored.join("; ")}`);
    error.restored = unrestored.length === 0;
    throw error;
  } finally {
    for (const name of ["SIGINT", "SIGTERM"]) signals.off(name, onSignal);
  }
  /*
   * Every input is replaced, so the run is done: a backup that cannot be removed is a warning, and stays beside its
   * input, which the next run refuses to touch until it is removed. Putting the inputs back for it would undo the
   * run only part way, the other backups being gone.
   */
  for (const [entry, backup] of backups) {
    try {
      fs.unlinkSync(backup);
    } catch (removeError) {
      warn(`could not remove ${backup}, the backup of ${entry.path}, which is converted: ${removeError.message}`);
    }
  }
}

/**
 * Run the converter's command line.
 *
 * @param {object} run - what to run, and where its output goes
 * @param {readonly string[]} run.argv - the arguments after the script's path
 * @param {string} [run.cwd] - the directory relative paths start from
 * @param {{ write(text: string): unknown }} run.stdout - receives the report
 * @param {{ write(text: string): unknown }} run.stderr - receives status lines, errors and the usage text
 * @param {object} [run.fs] - the file system, `node:fs` unless a test fails a write or a rename
 * @param {{ on: Function, off: Function }} [run.signals] - the source of SIGINT and SIGTERM, `process` by default
 * @param {number} [run.pid] - the id temp files and backups carry, `process.pid` by default
 * @param {typeof convertLensDataSource} [run.convert] - the library, unless a test injects a fault
 * @param {typeof typeCheckConvertedFiles} [run.typeCheck] - the type-check, unless a test injects a fault
 * @param {(source: string, path: string) => string} [run.normalizeSource] - in-memory import normalization for ingest
 * @param {() => Promise<object>} [run.loadConversion] - loads the engine's conversion seam
 * @param {() => Promise<{ default: Function }>} [run.loadBuildLens] - loads `buildLens`
 * @returns {Promise<0 | 1 | 2>} the exit code
 */
export async function runConversion(run) {
  const { stdout, stderr } = run;
  const fs = run.fs ?? nodeFs;
  const warn = (line) => stderr.write(`convert-lens-data: ${line}\n`);
  /*
   * A reader that closes its end of a pipe (`| head`) fails the next write to it, which a stream reports as an `error`
   * event that, unheard, would end the process part way through the write phase. The run hears every such event: a
   * closed pipe is ignored, the report's reader having gone, and any other stream error turns the exit code to 2 once
   * the run is over, never part way through it.
   */
  const streamErrors = [];
  const onStreamError = (error) => {
    if (error?.code !== "EPIPE" && error?.code !== "ERR_STREAM_DESTROYED") streamErrors.push(error);
  };
  for (const stream of [stdout, stderr]) stream.on?.("error", onStreamError);
  let args;
  let inputs;
  try {
    args = parseConversionArgs(run.argv);
    inputs = collectInputs(fs, args, run.cwd ?? process.cwd());
  } catch (error) {
    if (error instanceof UsageError) {
      stderr.write(`convert-lens-data: ${error.message}\n\n${USAGE}`);
      return 2;
    }
    if (error instanceof CollisionError || error instanceof InputError) {
      warn(`refused before converting anything: ${error.message}`);
      return 2;
    }
    throw error;
  }

  const conversion = await (run.loadConversion ?? loadLensDataConversion)();
  const convert = run.convert ?? convertLensDataSource;
  const target = `V${args.toVersion}`;
  const inPlace = args.output === undefined;
  const converted = [];
  const refused = [];
  let left = 0;

  for (const entry of inputs) {
    let bytes;
    let mode;
    let version;
    let source;
    try {
      bytes = fs.readFileSync(entry.path);
      /* A converted file, and the backup of its input, keep the input's permissions. */
      mode = fs.statSync(entry.path).mode & 0o777;
      source = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(bytes);
      version = conversion.lensDataVersion(evaluateLensDataSource(source, entry.file));
    } catch (error) {
      refused.push({ entry, reason: `the file cannot be read: ${error.message}` });
      continue;
    }
    if (version === args.toVersion) {
      left++;
      continue;
    }
    const lines = lineFeedText(source);
    if (lines.refusal) {
      refused.push({ entry, reason: lines.refusal });
      continue;
    }
    let result;
    try {
      // Keep the original bytes for refusal and rollback; normalize only the conversion's in-memory source.
      const text = run.normalizeSource ? run.normalizeSource(lines.text, entry.path) : lines.text;
      result = await convert(text, {
        file: entry.file,
        kind: entry.kind,
        toVersion: args.toVersion,
        typesDirectory: inPlace ? undefined : typesDirectoryFor(entry.destination),
        loadConversion: run.loadConversion,
        loadBuildLens: run.loadBuildLens,
      });
    } catch (error) {
      refused.push({ entry, reason: `the converter failed: ${error?.message ?? error}` });
      continue;
    }
    if (result.refusal !== undefined) {
      refused.push({ entry, reason: result.refusal });
      continue;
    }
    converted.push({ entry, text: result.text, bytes, mode, crlf: lines.crlf, report: result.report });
  }

  let typeFailure;
  if (converted.length > 0) {
    try {
      const checked = (run.typeCheck ?? typeCheckConvertedFiles)(
        converted.map(({ entry, text }) => ({ path: entry.destination, text })),
      );
      for (const item of [...converted]) {
        const diagnostics = checked.byFile.get(item.entry.destination) ?? [];
        if (diagnostics.length === 0) continue;
        converted.splice(converted.indexOf(item), 1);
        refused.push({
          entry: item.entry,
          reason: `the converted file does not type-check:\n  ${diagnostics.join("\n  ")}`,
        });
      }
      if (checked.other.length > 0) {
        typeFailure = `type diagnostics outside the converted files:\n  ${checked.other.join("\n  ")}`;
      }
    } catch (error) {
      typeFailure = `the type-check failed: ${error?.message ?? error}`;
    }
  }

  stdout.write(formatConversionReport(converted.map((item) => item.report)));
  const failed = refused.length > 0 || typeFailure !== undefined;
  let written = false;
  let writeFailure;
  if (args.mode === "write" && !failed && converted.length > 0) {
    try {
      await writeConverted(fs, converted, inPlace, {
        pid: run.pid ?? process.pid,
        signals: run.signals ?? process,
        warn,
      });
      written = true;
    } catch (error) {
      warn(`${error instanceof SignalError ? "stopped" : "writing failed"}: ${error.message}`);
      writeFailure =
        error.restored === false
          ? "some inputs or outputs could not be restored; see above"
          : "no converted file is written, and every input is as it was";
    }
  }

  const verb = written ? "converted" : "would convert";
  for (const { entry, crlf } of converted) {
    const where = inPlace ? "" : ` → ${entry.destination}`;
    warn(`${verb} ${entry.file}${where}${crlf ? " (CR LF line endings read as LF)" : ""}`);
  }
  for (const { entry, reason } of [...refused].sort((a, b) => (a.entry.file < b.entry.file ? -1 : 1))) {
    warn(`refused ${entry.file}: ${reason}`);
  }
  if (typeFailure) warn(typeFailure);
  const inputCount = `${inputs.length} input${inputs.length === 1 ? "" : "s"}`;
  const leftAsIs = `${left} already ${target} and left as ${left === 1 ? "it is" : "they are"}`;
  const count = `${inputCount}: ${converted.length} ${verb} to ${target}, ${leftAsIs}, ${refused.length} refused`;
  if (failed) {
    warn(`${count}; nothing written`);
    return 2;
  }
  if (writeFailure) {
    warn(`${count}; ${writeFailure}`);
    return 2;
  }
  warn(count);
  if (streamErrors.length > 0) return 2;
  return args.mode === "check" && converted.length > 0 ? 1 : 0;
}
