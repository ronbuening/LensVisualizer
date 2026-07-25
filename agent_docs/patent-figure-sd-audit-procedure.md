# Procedure — Semi-Diameter Audit Against a Patent Figure

A step-by-step runbook for auditing one lens's semi-diameters (`sd`) and cross-section proportions against its
patent. Follow it in order. Each step says what to run, what the output means, and when to stop.

Worked example of the whole thing: [patent-figure-sd-audit.md](patent-figure-sd-audit.md).
Work queue: [sd-audit-queue.md](sd-audit-queue.md).

## What you are deciding

`sd` is the outer semi-diameter (half clear aperture) of one surface, in mm. The renderer draws each element's
silhouette out to it, so `sd` controls both the physics (where rays clip) and the picture.

Almost no patent publishes a per-surface effective-radius column, so nearly every `sd` in this repo is an estimate.
Your job is to find the ones that are **wrong**, not to repaint the ones that are merely approximate.

Change an `sd` only when you have one of these:

- **Proof** — the surface fails the image-circle floor (Step 1). Always fix these.
- **Strong figure evidence** — the patent drawing disagrees by more than ~25%, both measurements agree, and you
  confirmed it on a zoomed render (Steps 3–4).

Anything inside ~15% is noise. Leave it and say so in the log.

## Prerequisites

- The patent PDF in `patents/`. If it is not there, **stop** and record that as a blocker — do not substitute a
  different publication or a web copy.
- `pdftoppm` (poppler) on PATH: `which pdftoppm`.
- Know which embodiment the lens is: the `subtitle` field says e.g. `US 2014/0247506 A1 EXAMPLE 1`. Example 3 means
  you need Example 3's cross-section sheet, not Example 1's.

## Step 1 — Image-circle floor (always do this first)

```bash
npm run audit:image-circle -- ./src/lens-data/<maker>/<Lens>.data.ts
```

A chief ray reaching image semi-height *Y′* passes a surface *t* mm ahead of the image plane at height
*Y′* − *t*·tanθ. The script bounds tanθ conservatively, so a surface it reports is short by **at least** the stated
amount. This needs no patent and has no measurement error — it is the strongest evidence you will get.

- **No output** → nothing is provably wrong. Continue to Step 2 only if the lens is on the queue for figure review.
- **Rows printed** → those surfaces must be enlarged. The printed `floor` is a *minimum*, not a target; use the
  figure (Steps 2–4) to pick the actual value, and only fall back to `floor` + ~0.5 mm if the figure is unusable.
- **Row marked `wide — verify by trace`** → the lens's half-field is past ~42°, where the script's exit-pupil
  approximation breaks down. Symmetric ultra-wides really do have small rear elements. **Do not change these on the
  strength of this check alone.** Note it and move on.

## Step 2 — Find the right figure sheet

US applications put drawings before the text; JP publications put them at the end. Cross-section sheets carry few
words, so list the leading text of each page:

```bash
pdftotext -layout patents/<PATENT>.pdf - | head -c 4000
```

For a page-by-page map, render candidates and look:

```bash
pdftoppm -png -r 110 -f 2 -l 2 patents/<PATENT>.pdf /tmp/fig && open /tmp/fig-02.png
```

(Read the PNG with the Read tool rather than `open` when working headless.)

Notes that save time:

- Many patents interleave `FIG. n` cross-section / `FIG. n+1` aberrations, so Example *k* is often
  `FIG. 2k − 1`. Confirm by looking; do not assume.
- JP-family sheets usually print the optical axis **vertically**. You will need `--rot90` (object at the bottom of
  the page) or `--rot270` (object at the top) in Step 3.
- Zoom lenses draw several panels (wide / middle / tele). Use the **wide** panel — surface `d` values in the data
  file are the first zoom position.
- If the PDF has no text layer (`pdftotext` returns nothing), you can still render pages; you just have to find the
  sheet by eye.

## Step 3 — Measure the figure

```bash
npm run audit:patent-figure -- ./src/lens-data/<maker>/<Lens>.data.ts patents/<PATENT>.pdf <page> <x0,y0,x1,y1>
```

The crop is four fractions of the page (**after** rotation) and must bracket **the glass and nothing else**: no image
plane, no cover-glass plate, no adjacent panel, no title block. Estimate it from the rendered PNG: divide the pixel
coordinates you read off by the PNG's width and height.

Reading the output:

| Column | Meaning |
|---|---|
| `sd(data)` | what the file stores |
| `ENV` | outermost ink — never under-reads, over-reads on rays and brackets |
| `RIM` | vertical element edges — never over-reads, under-reads on thin edges |
| `agree` | `ok` means ENV and RIM bracket the same value; `DIFF` means do not trust that row |
| `figure/data` | ratio; `median figure/data` is the whole-lens scale agreement |
| `shape mismatch` | each ratio ÷ the median — 1.00 means correct shape whatever the overall scale |

Stop and fix your crop if you see:

- `!! WARNING: the glass span touches the crop edge` — the axial scale is wrong, so **every number is wrong**.
  Widen the crop and re-run.
- Many rows reading the same value — the crop is clipping element tops vertically. Widen `y0`/`y1`.
- Ratios spread wider than about 0.5–2.0 — the mapping is off, or the figure is too contaminated to measure.

## Step 4 — Confirm by eye before believing any number

The tool is a screening device. Group brackets, focus-travel arrows, leader lines and entering ray bundles all
produce mirrored ink outside the glass, and it over-reads more often than it under-reads.

For any element you intend to change, render a zoom and measure it yourself:

```bash
pdftoppm -png -r 300 -f <page> -l <page> -x <left> -y <top> -W <width> -H <height> patents/<PATENT>.pdf /tmp/zoom
```

Find the axis (the dash-dot line), read the element's top and bottom in pixels, halve the difference, and multiply by
the µm/px scale the Step 3 output printed. If your reading and the tool's disagree, **your reading wins**.

While you are looking, check for the flange: patent figures routinely draw a flat rim stepping out past where the
curved surfaces end. That step is the mechanical blank, not glass. `sd` follows the **optical** extent — where the
curve ends — not the outer rectangle.

## Step 5 — Choose the new values

- Scale every surface of an element by the same factor, so the author's front/rear relationship survives.
- Round to 0.1 mm.
- Do not change `STO` — the stop semi-diameter derives the entrance pupil and therefore the f-number.
- Where the figure and the floor disagree, take the larger, and say why in the log.
- If the figure is unusable, set the value from the floor plus ~0.5 mm clearance and record that you did not use the
  drawing.

## Step 6 — Check the value is allowed

```bash
npm run audit:surface -- ./src/lens-data/<maker>/<Lens>.data.ts --scan <label> <maxHeight>
npm run audit:surface -- ./src/lens-data/<maker>/<Lens>.data.ts --sd <label>=<mm> <label>=<mm>
```

`--scan` prints sag, departure and rim slope against height for one surface. **Aspheric polynomials are only valid
over the aperture the designer fitted them on and diverge outside it.** The scan marks where the slope changes sign
(`<-- TURNS OVER`); the surface is not physical past that height, no matter what the drawing shows. Cap the `sd`
short of it — losing a millimetre here is correct, not a compromise.

`--sd` runs the real validator with your values substituted, without editing the file. Common rejections:

| Error | What it means | What to do |
|---|---|---|
| negative edge thickness | the two surfaces of the element cross at that height | the drawn outline is a flange; the glass really is smaller — back off |
| rim slope exceeds threshold | the surface is near-vertical at that height | back off, or check you are not past a conic/aspheric limit |
| combined surface sag exceeds allowed gap intrusion | neighbouring elements would overlap in the render | back off, **but first check the gap actually narrows outward** — a flat surface facing a convex-to-image one opens up, and that check reports a negative intrusion |
| SD ratio | front and rear differ by more than 3× | you scaled one surface and not the other |

## Step 7 — Apply the edit

Edit the `sd` values in the `*.data.ts` surface table, and update the file's `NOTE ON SEMI-DIAMETERS` header block to
say what changed and why.

**If any surface you changed is aspheric and its rim departure is quoted anywhere, three files move together:**

1. `*.data.ts` — the `sd`.
2. `*.analysis.md` — every "at the data-file semi-diameters … µm" sentence. Recompute with
   `npm run audit:surface -- <file> --scan <label> <newSd>` and read the departure at the last row, or compute it at
   exactly the new height.
3. `__tests__/src/lens-data/oddAsphereBackfill.test.ts` — the height and expected value in the assertion.

Missing any one of these leaves the repo self-inconsistent; the test will catch #3 but nothing catches #2.

## Step 8 — Verify

```bash
npm run audit:image-circle -- ./src/lens-data/<maker>/<Lens>.data.ts
npm run typecheck && npm run format:check && npm run lint && npm run test
```

Then look at the rendered cross-section and compare it with the figure — this is the actual deliverable, and a
number can be right while the picture is wrong:

```bash
npm run dev
```

Open `/lens/<key>` (the `key` field in the data file) and check the element proportions against the patent drawing.

## Step 9 — Log it

Append a dated section to the sibling `*.audit.md` (create it if absent — see
[lens-patent-audit.md](lens-patent-audit.md) for the format). Record:

- a before/after table with the justification for each surface,
- which evidence drove it (floor, figure, both),
- anything you could not do and why,
- the verification commands you ran.

Then update the lens's row in [sd-audit-queue.md](sd-audit-queue.md).

## Pitfalls, with symptoms

| Symptom | Cause | Fix |
|---|---|---|
| Every element reads ~1.5× too big | axial span truncated against the crop edge | widen the crop; check for the `!!` warning |
| Several elements read the same value | crop clips element tops | widen `y0`/`y1` |
| Front elements read far too big on a figure with rays | entering bundle straddles the axis outside the glass | trust RIM, confirm by zoom |
| Figure value impossible (bigger than \|R\|) | you are reading a bracket or a neighbouring element | re-crop, or measure that element by hand |
| Validator rejects a value the figure clearly shows | the drawing includes a mounting flange | use the optical extent |
| Aspheric departure sanity-checks stop making sense after the edit | quoted departures still reference the old heights | Step 7, all three files |

## When to stop and just write it down

Record as a blocker and change nothing when:

- the patent PDF is missing from `patents/`;
- the figure is a thumbnail (fewer than ~20 px per element edge even at 600 dpi);
- the sheet is a scan with ray overlays that will not measure after two honest crop attempts;
- the lens is flagged `wide — verify by trace`;
- the only way to reach the figure's value is past an aspheric turnover or through a validator rejection.

A blocker recorded precisely is worth more than a guessed number.
