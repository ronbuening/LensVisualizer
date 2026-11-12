# Separate E1 source/static audit

The first section below is the historical static-only record, not current v2 status. Fresh v2 strict TypeScript, native construction and bounded rays have now run; see FINAL_FOCUSED_RECEIPT.json and FIELD_DIAGNOSIS.json. No full integration or acceptance is claimed.

Exact isolated baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Whole E1 table visually rechecked against the original scan. Source addendum manifest verified locally; original verified Drive ID 1rxPeLgyjmAaFxkArjfETe4KioxrYuI0E, SHA256 458f1ed12e7ab5b95f18a2a92139fd5acfd2c5be0f0a0b575a143ce97194d972. Original custody unchanged.

Independent source reconstruction and static geometry pass. Declared 40× scale, assumed-d, unmatched materials, midpoint stop and inferred caps remain qualifications. Printed-BF plane 65.48 mm retained; source L rounding distinguished from independent BF residual. No source retuning, row mixing, E2 Seidel data or finite motion law.

Native and integration work NOT RUN (historical restriction; closed by the deployment validation below). Paraxial cap clearance is not exact full-aperture validation. SHA256 before/after verification confirms completed XA2 archive and held E2 authored triad unchanged. This candidate contributes zero ready lenses until required native/integration checks are released and passed (historical readiness restriction; closed by deployment validation).


## Additive v2 review (2026-11-11)
Original audit above retained as historical static record. Current v2 changes only explicit rectilinear56deg field, maker maximum aperture16 and explanatory metadata. Source R/d/nV, assumed helium-d, inherited caps, midpointstop and printed-BF plane65.48 remain unchanged. See RIM_REVIEW.json and current focused receipts. No full acceptance; E2hold unchanged.

## Deployment validation (2026-11-12)

- Source: US 4,396,255 A (Google Patents PDF, `patents/US4396255A.pdf`), Embodiment 1. 12 R, 11 d, BF and 6 nd/νd
  match pages 6–8; every length is the normalized value × 40. EFL 40.001, BF 36.652 vs printed 36.72; the stored
  65.48 mm plane is 40 × (0.719 + 0.918). Helium d confirmed (S-TIH14 1.761821 at d vs 1.761572 at D).
- Product: the maker's handbook section (`https://esif.world-traveller.org/om-sif/lensgroup/images/40mmf2_diagram.jpg`)
  shows six separate elements with a central stop and L4/L5 almost touching, as in the patent's Fig. 1 (Embodiments
  1 and 2). Both embodiments fit; neither is established as the factory one.
- Integration fixes:
  - Rims raised to pass the f/2 axial bundle (`audit:aperture --raise`): surfaces 7/8 8.1 → 9.0, 9/10 9.4 → 9.7.
    Before, rims clipped the beam to about f/2.16.
  - `checks.gapSagFrac` 0.95: at 9.0 mm the L4 rear and L5 front faces of the 0.32 mm gap come within 0.02 mm, as the
    patent figure and the maker section both draw them.
  - Static focus sentinel 1e9 → 1e15 (house form).
- Closed: name and subtitle wording ("E1 hypothesis") resolved in the cleanup pass below. Field coverage stops at the maker's 56°
  (96 % of the corner), which is the declared angle of view, not clipping.

## 2026-11-12 — Cleanup and wording pass

Fields changed: the header now describes the scaling, assumed helium-d reference, inferred midpoint stop and rims,
printed versus calculated image plane, and uncertain production correlation in plain language. The subtitle changed
from "US 4,396,255 A EMBODIMENT 1 — REPRESENTATIVE SOURCE DESIGN" to
"US 4,396,255 A, Embodiment 1 — probable production match". Specs retain "6 ELEMENTS / 6 GROUPS" and replace
the four process/limitation lines with "DESIGN f = 40 mm", "ALL SPHERICAL", "f/2–16" and "0.3 m CLOSE FOCUS".
The catalog design focal length changes from the traced 40.00067387129505 mm to the scaled printed 40 mm, following
the sibling Auto-S 50mm f/1.8's stated-design convention. This does not change the traced focal length.

The focus description now states infinity-only scope and the production straight helicoid and 0.3 m minimum;
`focus.closeFocusM` remains 1e15 and `catalog.closeFocusM.marketing` remains 0.3. The handbook mirror explicitly
confirms f/2–16, 6/6, 56°, 0.30 m and straight helicoid:
https://esif.world-traveller.org/om-sif/lensgroup/40mmf2.htm. Mount, format, element/group counts and aperture stops
were already populated and remain unchanged. Six short element roles were added; labels and shape types were already
correct. No `apd` tags were added because no maker special-dispersion positions are established. All six elements are
air-separated: no `cemented` flags or `doublets` are appropriate, including the closely spaced L4/L5 pair.

Glass relabels below use catalog-row minus printed-pair deltas (Δnd / Δνd). Each former label was
"Unmatched (literal source n/v; no named catalog glass)". All five new names resolve with `trylabel.mjs`:

- L1 → LAC10 (HOYA catalog equivalent): 0 / +0.10.
- L2 → BAF5 (HOYA catalog equivalent): +0.000002 / +0.046899.
- L3 → BAF22 (HOYA catalog equivalent): −0.000004 / +0.021672.
- L4 → FD140 (HOYA catalog equivalent): 0 / +0.06.
- L6 → S-LAM54 (OHARA catalog equivalent): −0.000002 / −0.046830.
- L5 → "Unmatched (nd = 1.726, νd = 53.56)"; no catalog row meets the limits.

The older HOYA names are preferred where available; S-LAM54 supplies a present catalog spectral equivalent for L6.
None establishes the historical supplier or melt. No catalog-copied nC/nF/ng fields were present to remove; all
printed nd/νd values remain unchanged.

The analysis retains the patent identification, prescription differences, calculated element powers and image-plane
rounding explanation. It removes hidden-model/E1-hypothesis/held-E2 wording, hashes, package receipts, historical pupil
grid counts and acceptance prose. It now cites the handbook and MIR, states that both Embodiments 1 and 2 fit the
maker's section, describes the integration rim widening, and separates the 56° declared field from the 57.8° full-frame
corner. The earlier deployment-validation section is retained; its stale wording item is closed in place.

Before → after engine values are identical: EFL 40.00067387129505 → 40.00067387129505 mm; FOPEN 2 → 2;
halfField 28 → 28°; stop radius 8.090841230494291 → 8.090841230494291 mm; BFD 36.6520614099 → 36.6520614099 mm;
stored track 65.48 → 65.48 mm. Both focus keyframes remain unchanged: last gap 36.7200 / 36.6521 mm and
total track 65.4800 / 65.4121 mm at t = 0 / 1. No surface, rim, stop placement, gap, nd/νd or asphere value changed.
The surface audit reports OK. The aperture audit reports one station within 3% of the stated f-number, with zero
rim/trace/iris limits or failures. The field audit remains in the 90–99% coverage band, with no unsolved station.

Open: the maker/patent 56° field reaches about 96.4% of the format corner; the approximately 57.8° full-frame corner
remains beyond the declared field. Embodiment 1 versus 2 production identity remains unresolved. Stop position and
clear rims remain inferred; L5 glass, historical glass suppliers/melts, and finite-focus motion remain unknown.
Off-axis throughput has not been established as a percentage. The requested rendered-page review could not be
completed: the screenshot helper produced no PNG, and localhost:5173 did not accept a connection. No server was
started. No command was refused by the sandbox or approval policy. Prettier was skipped as directed by the addendum.
