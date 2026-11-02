/**
 * The lens-data converter's command line (`scripts/lens-data-convert/cli.mjs`), run on synthetic files in
 * a temp directory: its arguments and exit codes, the three modes, inputs left as they are, each kind of refusal with
 * the other inputs still reported, collisions, `--output`, interrupted writes and signals, line endings, the
 * type-check where a file will be written, and V2 → V1 → V2 through the V1/V2 feature fixture pairs.
 */

import * as nodeFs from "node:fs";
import { tmpdir } from "node:os";
import { Writable } from "node:stream";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";
import { USAGE, runConversion, type ConversionRun } from "../../scripts/lens-data-convert/cli.mjs";
import { convertLensDataSource, type ConversionOptions } from "../../scripts/lens-data-convert/convert.mjs";
import { evaluateLensDataSource } from "../../scripts/lens-data-ast.mjs";
import { ingestLens, ingestTeleconverter } from "../../src/optics/lensDataConversion.js";
import { FIXTURE_PAIRS } from "../src/optics/prescription/ingestV2Fixtures.js";
import { PRIME_MEMBERS, V2_SOURCE_FILE, v1LensFile } from "./convertLensDataFixtures.js";

const { chmodSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, realpathSync, rmSync } = nodeFs;
const { statSync } = nodeFs;
const { symlinkSync, writeFileSync } = nodeFs;
const TYPES = fileURLToPath(new URL("../../src/types", import.meta.url));
const V1_PRIME = v1LensFile(PRIME_MEMBERS);
/** A type-check that finds nothing, for a test about something else. */
const NO_TYPE_CHECK = (files: { path: string }[]) => ({
  byFile: new Map(files.map((file) => [file.path, []])),
  other: [],
});

const directories: string[] = [];
afterEach(() => {
  for (const directory of directories.splice(0)) rmSync(directory, { recursive: true, force: true });
});

function temp(): string {
  const directory = realpathSync(mkdtempSync(join(tmpdir(), "convert-lens-data-")));
  directories.push(directory);
  return directory;
}

/** Write a source text at `path`, its type import pointing at this repository's types from there. */
function put(path: string, text: string): string {
  mkdirSync(dirname(path), { recursive: true });
  const types = relative(dirname(path), TYPES).split("\\").join("/");
  writeFileSync(path, text.replace(/from "(\.\.\/)+types\//, `from "${types}/`));
  return path;
}

/** Every file under a directory, by relative path, with its bytes. */
function snapshot(directory: string): Record<string, string> {
  const files: Record<string, string> = {};
  const walk = (at: string) => {
    for (const name of readdirSync(at).sort()) {
      const path = join(at, name);
      if (statSync(path).isDirectory()) walk(path);
      else files[relative(directory, path)] = readFileSync(path, "utf8");
    }
  };
  walk(directory);
  return files;
}

/** Run the command line, collecting its output; the engine loads under Vitest. */
async function cli(argv: string[], extra: Partial<ConversionRun> = {}) {
  let stdout = "";
  let stderr = "";
  const code = await runConversion({
    argv,
    stdout: { write: (text: string) => (stdout += text) },
    stderr: { write: (text: string) => (stderr += text) },
    loadConversion: () => import("../../src/optics/lensDataConversion.js"),
    loadBuildLens: () => import("../../src/optics/buildLens.js"),
    ...extra,
  });
  return { code, stdout, stderr };
}

/** The prescription a file on disk ingests to. */
function prescriptionAt(path: string) {
  const data = evaluateLensDataSource(readFileSync(path, "utf8")) as never;
  return path.endsWith(".teleconverter.ts") ? ingestTeleconverter(data).prescription : ingestLens(data).prescription;
}

/** A directory with a V1 prime (`a`), a hand-written V2 prime (`b`) and a second V1 prime (`c`). */
function catalog(): string {
  const directory = temp();
  put(join(directory, "a.data.ts"), V1_PRIME);
  put(join(directory, "b.data.ts"), V2_SOURCE_FILE);
  put(join(directory, "c.data.ts"), V1_PRIME.replace('key: "fixture-prime"', 'key: "fixture-prime-c"'));
  return directory;
}

describe("arguments", () => {
  it.each([
    ["no --input", []],
    ["a flag without its value", ["--input"]],
    ["a repeated flag", ["--input", "a", "--input", "b"]],
    ["two modes", ["--input", "a", "--check", "--write"]],
    ["--output without --write", ["--input", "a", "--output", "b"]],
    ["another version", ["--input", "a", "--to-version", "3"]],
    ["an unknown flag", ["--input", "a", "--force"]],
    ["a value on a mode", ["--input", "a", "--write=yes"]],
    ["a stray argument", ["a"]],
    ["an input that does not exist", ["--input", "/nonexistent/fixture.data.ts"]],
    [
      "an input file that is no lens-data file",
      ["--input", fileURLToPath(new URL("../../package.json", import.meta.url))],
    ],
  ])("%s: exit 2, the usage text on stderr", async (_case, argv) => {
    const run = await cli(argv);
    expect(run.code).toBe(2);
    expect(run.stdout).toBe("");
    expect(run.stderr).toMatch(/^convert-lens-data: .+\n\n/);
    expect(run.stderr.endsWith(USAGE)).toBe(true);
  });

  it("lists every flag and the exit code of each outcome in the usage text", () => {
    for (const flag of ["--input", "--to-version", "--dry-run", "--check", "--write", "--output"]) {
      expect(USAGE).toContain(flag);
    }
    for (const outcome of [
      "a usage error",
      "a collision",
      "SIGINT or SIGTERM",
      "a failed write or rename",
      "refused",
      "a value given to --dry-run, --check or --write",
      "an\n     argument that is no flag",
      "an --input that does not exist or is a file but no *.data.ts",
      "SIGINT or SIGTERM before the write phase",
    ]) {
      expect(USAGE).toContain(outcome);
    }
  });
});

describe("modes", () => {
  it("prints the same report in every mode, writes only under --write, and converts only the inputs not at the target", async () => {
    const directory = catalog();
    const before = snapshot(directory);
    const dry = await cli(["--input", directory]);
    const check = await cli(["--input", directory, "--check"]);
    expect([dry.code, check.code]).toEqual([0, 1]);
    expect(snapshot(directory)).toEqual(before);
    expect(check.stdout).toBe(dry.stdout);
    expect(dry.stdout).toContain("stop radius dropped: surfaces[0].sd = 12.5");
    expect(dry.stderr).toContain("would convert");
    expect(dry.stderr).not.toContain("b.data.ts");
    expect(dry.stderr).toMatch(/3 inputs: 2 would convert to V2, 1 already V2 and left as it is, 0 refused\n$/);

    const a = prescriptionAt(join(directory, "a.data.ts"));
    const write = await cli(["--input", directory, "--write"]);
    expect(write.code).toBe(0);
    expect(write.stdout).toBe(dry.stdout);
    expect(write.stderr).toMatch(/3 inputs: 2 converted to V2, 1 already V2 and left as it is, 0 refused\n$/);
    const after = snapshot(directory);
    expect(Object.keys(after)).toEqual(["a.data.ts", "b.data.ts", "c.data.ts"]);
    expect(after["b.data.ts"]).toBe(before["b.data.ts"]);
    expect(after["a.data.ts"]).toContain("schema: 2,");
    expect(prescriptionAt(join(directory, "a.data.ts"))).toEqual(a);

    const again = await cli(["--input", directory, "--check"]);
    expect(again.code).toBe(0);
    expect(again.stdout).toBe("");
    expect(again.stderr).toMatch(/3 inputs: 0 would convert to V2, 3 already V2 and left as they are, 0 refused\n$/);
  });

  it("--check exits 2 rather than 1 when an input is refused", async () => {
    const directory = catalog();
    put(join(directory, "d.data.ts"), V2_SOURCE_FILE.replace("schema: 2,", "schema: 3,"));
    const check = await cli(["--input", directory, "--check"]);
    expect(check.code).toBe(2);
    expect(check.stderr).toMatch(/refused [^\n]*d\.data\.ts: /);
  });
});

describe("refusals", () => {
  /** Run `--write` over the catalog with one more input, and check nothing was written and the others reported. */
  async function refusedWith(name: string, text: string | undefined, extra: Partial<ConversionRun> = {}) {
    const directory = catalog();
    if (text !== undefined) put(join(directory, name), text);
    const before = snapshot(directory);
    const run = await cli(["--input", directory, "--write"], extra);
    expect(run.code).toBe(2);
    expect(snapshot(directory)).toEqual(before);
    expect(run.stderr).toContain("would convert");
    expect(run.stderr).toMatch(/; nothing written\n$/);
    return run;
  }

  it.each([
    [
      "a file the reader cannot evaluate",
      V1_PRIME.replace("nominalFno: 2", "nominalFno: Math.sqrt(4)"),
      /the file cannot be read/,
    ],
    ["a file of no version", V2_SOURCE_FILE.replace("schema: 2,", "schema: 3,"), /schema 3 is no lens-data version/],
    [
      "a file the converter refuses",
      V1_PRIME.replace('{ label: "1", R: 50, d: 5, nd: 1.5168', '{ label: "1", R: 50, d: 5, nd: 1.6'),
      /ingest refuses it:/,
    ],
    [
      "a lone carriage return",
      V1_PRIME.replace("closeFocusM: 0.5,", "closeFocusM:\r0.5,"),
      /line \d+ holds a carriage return without a line feed/,
    ],
  ])("%s", async (_case, text, reason) => {
    const run = await refusedWith("z.data.ts", text);
    expect(run.stderr).toMatch(/refused [^\n]*z\.data\.ts: /);
    expect(run.stderr).toMatch(reason);
  });

  it("a file that cannot be read is that file's refusal, and the other inputs are still reported", async () => {
    const directory = catalog();
    const unreadable = join(directory, "a.data.ts");
    const read = nodeFs.readFileSync as (...args: unknown[]) => unknown;
    const fs = {
      ...nodeFs,
      readFileSync: (path: string, ...rest: unknown[]) => {
        if (path === unreadable) throw new Error("injected EACCES");
        return read(path, ...rest);
      },
    };
    const run = await cli(["--input", directory, "--write"], { fs, typeCheck: NO_TYPE_CHECK });
    expect(run.code).toBe(2);
    expect(run.stderr).toMatch(/refused [^\n]*a\.data\.ts: the file cannot be read: injected EACCES\n/);
    expect(run.stderr).toMatch(/would convert [^\n]*c\.data\.ts\n/);
    expect(run.stderr).toContain("3 inputs: 1 would convert to V2, 1 already V2 and left as it is, 1 refused");
  });

  it("a file input in a directory that cannot be listed refuses the run before anything converts", async () => {
    const directory = catalog();
    const before = snapshot(directory);
    const list = nodeFs.readdirSync as (...args: unknown[]) => unknown;
    const fs = {
      ...nodeFs,
      readdirSync: (path: string, ...rest: unknown[]) => {
        if (path === directory) throw new Error("injected EACCES");
        return list(path, ...rest);
      },
    };
    const run = await cli(["--input", join(directory, "a.data.ts"), "--write"], { fs, typeCheck: NO_TYPE_CHECK });
    expect(run.code).toBe(2);
    expect(run.stdout).toBe("");
    expect(run.stderr).toBe(
      `convert-lens-data: refused before converting anything: ${directory} cannot be read: injected EACCES\n`,
    );
    expect(snapshot(directory)).toEqual(before);
  });

  it("a directory under --input that cannot be listed refuses the run before anything converts", async () => {
    const directory = catalog();
    const sub = join(directory, "sub");
    put(join(sub, "d.data.ts"), V1_PRIME);
    const list = nodeFs.readdirSync as (...args: unknown[]) => unknown;
    const fs = {
      ...nodeFs,
      readdirSync: (path: string, ...rest: unknown[]) => {
        if (path === sub) throw new Error("injected EACCES");
        return list(path, ...rest);
      },
    };
    const run = await cli(["--input", directory, "--write"], { fs, typeCheck: NO_TYPE_CHECK });
    expect(run.code).toBe(2);
    expect(run.stderr).toBe(
      `convert-lens-data: refused before converting anything: ${sub} cannot be listed: injected EACCES\n`,
    );
  });

  it("a converted text that does not type-check where the file on disk does: the check reads the converted text", async () => {
    const convert = async (content: string, options: ConversionOptions) => {
      const result = await convertLensDataSource(content, options);
      if (!options.file.endsWith("a.data.ts")) return result;
      return { ...result, text: result.text!.replace('name: "Fixture 50mm f/2"', "name: 50") };
    };
    const run = await refusedWith("", undefined, { convert });
    expect(run.stderr).toMatch(
      /refused [^\n]*a\.data\.ts: the converted file does not type-check:\n {2}\d+:\d+ TS2322: /,
    );
  });

  it("a fault in the library is that file's refusal, and the run goes on", async () => {
    const convert = async (content: string, options: ConversionOptions) => {
      if (options.file.endsWith("a.data.ts")) throw new Error("injected fault");
      return convertLensDataSource(content, options);
    };
    const run = await refusedWith("", undefined, { convert, typeCheck: NO_TYPE_CHECK });
    expect(run.stderr).toMatch(/refused [^\n]*a\.data\.ts: the converter failed: injected fault/);
    expect(run.stderr).toMatch(/would convert [^\n]*c\.data\.ts/);
  });

  it("a fault in the type-check refuses the run", async () => {
    const typeCheck = () => {
      throw new Error("injected fault");
    };
    const run = await refusedWith("", undefined, { typeCheck });
    expect(run.stderr).toContain("the type-check failed: injected fault");
  });
});

describe("collisions, refused before anything converts", () => {
  async function collides(argv: string[], pattern: RegExp, extra: Partial<ConversionRun> = {}) {
    const run = await cli(argv, { typeCheck: NO_TYPE_CHECK, ...extra });
    expect(run.code).toBe(2);
    expect(run.stdout).toBe("");
    expect(run.stderr).toMatch(/^convert-lens-data: refused before converting anything: /);
    expect(run.stderr).toMatch(pattern);
  }

  it("two destinations that are one path without regard to case", async () => {
    const directory = temp();
    put(join(directory, "Fixture.data.ts"), V1_PRIME);
    /* A file system that ignores case cannot hold both names, so the listing gives the second one. */
    const list = nodeFs.readdirSync as unknown as (...args: unknown[]) => { name: string }[];
    const twin = { name: "fixture.data.ts", isFile: () => true, isDirectory: () => false };
    const fs = {
      ...nodeFs,
      readdirSync: (path: string, options?: { withFileTypes?: boolean }) =>
        path === directory && options?.withFileTypes ? [...list(path, options), twin] : list(path, options),
    };
    await collides(["--input", directory], /Fixture\.data\.ts and .*fixture\.data\.ts would be written to one path/, {
      fs,
    });
  });

  it("an --output destination that exists", async () => {
    const directory = catalog();
    const output = temp();
    put(join(output, "a.data.ts"), V1_PRIME);
    await collides(
      ["--input", directory, "--write", "--output", output],
      /a\.data\.ts, where .*a\.data\.ts would be written, exists/,
    );
  });

  it("--output inside --input, --input inside --output, and either through a symbolic link", async () => {
    const directory = catalog();
    await collides(["--input", directory, "--write", "--output", join(directory, "out")], /lie one inside the other/);
    await collides(
      ["--input", join(directory, "a.data.ts"), "--write", "--output", directory],
      /lie one inside the other/,
    );
    const link = join(temp(), "link");
    symlinkSync(directory, link);
    await collides(["--input", directory, "--write", "--output", join(link, "out")], /lie one inside the other/);
  });

  it("--output inside --input, and a backup beside an input, without regard to case", async () => {
    const base = temp();
    const input = join(base, "CaseIn");
    put(join(input, "a.data.ts"), V1_PRIME);
    await collides(["--input", input, "--write", "--output", join(base, "casein", "out")], /lie one inside the other/);
    writeFileSync(join(input, ".A.data.ts.4242.convert-bak"), "kept bytes");
    await collides(["--input", input], /\.A\.data\.ts\.4242\.convert-bak, a backup a run left, sits beside/);
  });

  it("an --input file that is a symbolic link, which a write would replace with a file", async () => {
    const directory = temp();
    const target = put(join(directory, "target", "a.data.ts"), V1_PRIME);
    const link = join(directory, "link.data.ts");
    symlinkSync(target, link);
    const before = readFileSync(target, "utf8");
    const run = await cli(["--input", link, "--write"], { typeCheck: NO_TYPE_CHECK });
    expect(run.code).toBe(2);
    expect(run.stderr).toBe(
      `convert-lens-data: refused before converting anything: --input ${link} is a symbolic link; ` +
        "give the file it points to\n",
    );
    expect(readFileSync(target, "utf8")).toBe(before);
  });

  it("but not a sibling whose name begins with the input's", async () => {
    const base = temp();
    const directory = join(base, "in");
    put(join(directory, "a.data.ts"), V1_PRIME);
    const run = await cli(["--input", directory, "--write", "--output", join(base, "in-2")], {
      typeCheck: NO_TYPE_CHECK,
    });
    expect(run.code).toBe(0);
  });

  it("a backup a run left beside an input, named", async () => {
    const directory = catalog();
    writeFileSync(join(directory, ".a.data.ts.4242.convert-bak"), "kept bytes");
    await collides(
      ["--input", directory],
      /\.a\.data\.ts\.4242\.convert-bak, a backup a run left, sits beside .*a\.data\.ts/,
    );
  });
});

describe("--output", () => {
  it("writes each converted file at its path below --input, importing its types from that depth, and nothing else", async () => {
    const base = temp();
    const input = join(base, "catalog");
    put(join(input, "maker", "a.data.ts"), V1_PRIME);
    put(join(input, "b.data.ts"), V2_SOURCE_FILE);
    const before = snapshot(input);
    const output = join(base, "converted", "deeper", "still");
    const run = await cli(["--input", input, "--write", "--output", output]);
    expect(run.code).toBe(0);
    expect(snapshot(input)).toEqual(before);
    const written = snapshot(output);
    expect(Object.keys(written)).toEqual(["maker/a.data.ts"]);
    const types = relative(join(output, "maker"), TYPES).split("\\").join("/");
    expect(written["maker/a.data.ts"]).toContain(`import type { LensDataV2Input } from "${types}/lensDataV2.js";`);
    expect(run.stderr).toMatch(/2 inputs: 1 converted to V2, 1 already V2 and left as it is, 0 refused\n$/);
  });

  it("type-checks a converted file at its destination, where the input's own import does not resolve", async () => {
    const base = temp();
    const input = join(base, "catalog");
    put(join(input, "a.data.ts"), V1_PRIME);
    const convert = (content: string, options: ConversionOptions) =>
      convertLensDataSource(content, { ...options, typesDirectory: undefined });
    const output = join(base, "converted", "deeper");
    const run = await cli(["--input", input, "--write", "--output", output], { convert });
    expect(run.code).toBe(2);
    expect(run.stderr).toMatch(
      /refused [^\n]*a\.data\.ts: the converted file does not type-check:\n {2}\d+:\d+ TS2307: /,
    );
    expect(existsSync(output)).toBe(false);
  });
});

describe("interrupted writes", () => {
  /**
   * A file system whose `count`th write to a file named `*<suffix>` writes part of its bytes and throws, as a full disk
   * or a file-size limit does after the file is open.
   */
  function partialWrite(suffix: string, count: number) {
    let calls = 0;
    const names = new Map<number, string>();
    const open = nodeFs.openSync as unknown as (...args: unknown[]) => number;
    const write = nodeFs.writeFileSync as unknown as (...args: unknown[]) => void;
    return {
      ...nodeFs,
      openSync: (path: string, ...rest: unknown[]) => {
        const descriptor = open(path, ...rest);
        names.set(descriptor, String(path));
        return descriptor;
      },
      writeFileSync: (target: unknown, data: string | Uint8Array, ...rest: unknown[]) => {
        if (typeof target === "number" && names.get(target)?.endsWith(suffix) && ++calls === count) {
          nodeFs.writeSync(target, typeof data === "string" ? data.slice(0, 64) : data.subarray(0, 64));
          throw Object.assign(new Error("injected EFBIG part way through a write"), { code: "EFBIG" });
        }
        write(target, data, ...rest);
      },
    };
  }

  /** A file system that fails the `count`th call of one function on a temp file, or runs `after` on each. */
  function failing(name: "renameSync" | "linkSync", count: number, after?: () => void) {
    let calls = 0;
    const original = nodeFs[name] as (...args: unknown[]) => void;
    return {
      ...nodeFs,
      [name]: (...args: unknown[]) => {
        if (String(args[0]).endsWith(".convert-tmp") && ++calls === count) throw new Error(`injected ${name} failure`);
        original(...args);
        after?.();
      },
    };
  }

  it.each([
    ["the second temp file", ".convert-tmp"],
    ["the second backup", ".convert-bak"],
  ])(
    "a write that fails part way through %s leaves every input as it was, and no part of a file",
    async (_, suffix) => {
      const directory = catalog();
      const before = snapshot(directory);
      const run = await cli(["--input", directory, "--write"], {
        fs: partialWrite(suffix, 2),
        typeCheck: NO_TYPE_CHECK,
      });
      expect(run.code).toBe(2);
      expect(snapshot(directory)).toEqual(before);
      expect(run.stderr).toContain("writing failed: injected EFBIG part way through a write");
      expect(run.stderr).toContain("no converted file is written, and every input is as it was");
    },
  );

  it("under --output, a write that fails part way through a temp file removes every file and directory the run wrote", async () => {
    const directory = catalog();
    const output = join(temp(), "out", "deeper");
    const run = await cli(["--input", directory, "--write", "--output", output], {
      fs: partialWrite(".convert-tmp", 2),
      typeCheck: NO_TYPE_CHECK,
    });
    expect(run.code).toBe(2);
    expect(existsSync(dirname(output))).toBe(false);
  });

  it("a reader that closes the pipe the report goes to stops nothing: every input is written, and nothing is left beside it", async () => {
    const directory = catalog();
    const closed = new Writable({
      write: (_chunk: unknown, _encoding: string, done: (error?: Error | null) => void) =>
        done(Object.assign(new Error("write EPIPE"), { code: "EPIPE" })),
    });
    const run = await cli(["--input", directory, "--write"], { stdout: closed, typeCheck: NO_TYPE_CHECK });
    expect(run.code).toBe(0);
    const written = snapshot(directory);
    expect(Object.keys(written)).toEqual(["a.data.ts", "b.data.ts", "c.data.ts"]);
    for (const text of Object.values(written)) expect(text).toContain("schema: 2");
  });

  it("a failed rename restores original bytes even when conversion normalizes the source in memory", async () => {
    const directory = catalog();
    const before = snapshot(directory);
    const run = await cli(["--input", directory, "--write"], {
      fs: failing("renameSync", 2),
      normalizeSource: (source, path) => {
        expect(readFileSync(path, "utf8")).toBe(source);
        return source.replace("A synthetic lens.", "Normalized in memory.");
      },
      typeCheck: (files) => {
        expect(snapshot(directory)).toEqual(before);
        for (const file of files) expect(file.text).toContain("Normalized in memory.");
        return NO_TYPE_CHECK(files);
      },
    });
    expect(run.code).toBe(2);
    expect(snapshot(directory)).toEqual(before);
    expect(run.stderr).toContain("put back 1 of the 1 inputs already replaced");
    /* Each file still gets its line, and the run its closing count. */
    expect(run.stderr).toMatch(/would convert [^\n]*a\.data\.ts\n/);
    expect(run.stderr).toContain(
      "3 inputs: 2 would convert to V2, 1 already V2 and left as it is, 0 refused; " +
        "no converted file is written, and every input is as it was\n",
    );
  });

  it("a converted file, and an input put back from its backup, keep the input's permissions", async () => {
    const directory = catalog();
    const [a, c] = [join(directory, "a.data.ts"), join(directory, "c.data.ts")];
    chmodSync(a, 0o600);
    chmodSync(c, 0o444);
    const failed = await cli(["--input", directory, "--write"], {
      fs: failing("renameSync", 2),
      typeCheck: NO_TYPE_CHECK,
    });
    expect(failed.stderr).toContain("put back 1 of the 1 inputs already replaced");
    expect(statSync(a).mode & 0o777).toBe(0o600);
    expect((await cli(["--input", directory, "--write"], { typeCheck: NO_TYPE_CHECK })).code).toBe(0);
    expect([statSync(a).mode & 0o777, statSync(c).mode & 0o777]).toEqual([0o600, 0o444]);
    expect(readFileSync(c, "utf8")).toContain("schema: 2");
  });

  it("a signal during the renames puts back every input already replaced, and exits 2", async () => {
    const directory = catalog();
    const before = snapshot(directory);
    const handlers = new Map<string, (signal: string) => void>();
    const signals = {
      on: (signal: string, handler: (signal: string) => void) => handlers.set(signal, handler),
      off: (signal: string) => handlers.delete(signal),
    };
    const fs = failing("renameSync", 0, () => handlers.get("SIGTERM")?.("SIGTERM"));
    const run = await cli(["--input", directory, "--write"], { fs, signals, typeCheck: NO_TYPE_CHECK });
    expect(run.code).toBe(2);
    expect(snapshot(directory)).toEqual(before);
    expect(run.stderr).toContain("stopped: SIGTERM arrived while writing");
    expect(handlers.size).toBe(0);
  });

  it("a backup that cannot be removed once every input is replaced is a warning, and stays beside its input", async () => {
    const directory = catalog();
    const before = snapshot(directory);
    const backup = join(directory, ".a.data.ts.7.convert-bak");
    const fs = {
      ...nodeFs,
      unlinkSync: (path: string) => {
        if (path === backup) throw new Error("injected unlink failure");
        nodeFs.unlinkSync(path);
      },
    };
    const run = await cli(["--input", directory, "--write"], { fs, pid: 7, typeCheck: NO_TYPE_CHECK });
    expect(run.code).toBe(0);
    expect(run.stderr).toContain(
      `could not remove ${backup}, the backup of ${join(directory, "a.data.ts")}, which is converted: injected unlink failure`,
    );
    const after = snapshot(directory);
    expect(Object.keys(after)).toEqual([".a.data.ts.7.convert-bak", "a.data.ts", "b.data.ts", "c.data.ts"]);
    expect(after[".a.data.ts.7.convert-bak"]).toBe(before["a.data.ts"]);
    for (const file of ["a.data.ts", "c.data.ts"]) expect(after[file]).toContain("schema: 2");
    expect((await cli(["--input", directory])).stderr).toContain("a backup a run left, sits beside");
  });

  it("under --output, a failed link removes every file and directory the run wrote", async () => {
    const directory = catalog();
    const output = join(temp(), "out", "deeper");
    const run = await cli(["--input", directory, "--write", "--output", output], {
      fs: failing("linkSync", 2),
      typeCheck: NO_TYPE_CHECK,
    });
    expect(run.code).toBe(2);
    expect(existsSync(dirname(output))).toBe(false);
    expect(run.stderr).toContain("removed the 1 files already written");
  });
});

describe("line endings", () => {
  it("reads a CR LF source as LF, says so, and writes LF", async () => {
    const directory = temp();
    put(join(directory, "a.data.ts"), V1_PRIME.replaceAll("\n", "\r\n"));
    const run = await cli(["--input", directory, "--write"]);
    expect(run.code).toBe(0);
    expect(run.stderr).toMatch(/converted [^\n]*a\.data\.ts \(CR LF line endings read as LF\)/);
    const written = readFileSync(join(directory, "a.data.ts"), "utf8");
    expect(written).not.toContain("\r");
    expect(written).toContain("schema: 2,");
  });
});

describe("V2 → V1 → V2", () => {
  it("gives every V1/V2 feature pair's prescription back through V1 text that type-checks, and back through V2", async () => {
    const base = temp();
    const v2 = join(base, "v2");
    for (const pair of FIXTURE_PAIRS) {
      const kind = pair.kind === "lens" ? "data" : "teleconverter";
      const type = pair.kind === "lens" ? "LensDataV2Input" : "TeleconverterDataV2Input";
      const name = `${pair.family.replace(/[^a-z0-9]+/gi, "-")}.${kind}.ts`;
      put(
        join(v2, name),
        `import type { ${type} } from "../../types/lensDataV2.js";\n\nconst DATA = ${JSON.stringify(pair.v2, null, 2)} satisfies ${type};\n\nexport default DATA;\n`,
      );
    }
    const v1 = join(base, "v1");
    const toV1 = await cli(["--input", v2, "--to-version", "1", "--write", "--output", v1]);
    expect(toV1.code).toBe(0);
    expect(toV1.stderr).toMatch(new RegExp(`${FIXTURE_PAIRS.length} inputs: ${FIXTURE_PAIRS.length} converted to V1`));
    const again = join(base, "again");
    const toV2 = await cli(["--input", v1, "--write", "--output", again]);
    expect(toV2.code).toBe(0);
    for (const name of Object.keys(snapshot(v2))) {
      const prescription = prescriptionAt(join(v2, name));
      expect(prescriptionAt(join(v1, name)), name).toEqual(prescription);
      expect(prescriptionAt(join(again, name)), name).toEqual(prescription);
    }
  });
});
