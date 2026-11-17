# Richter / Zeiss US2170428: scoped-qualified patent-only build

One new configuration, one US publication group; 4 air-spaced singlets, source f/1.9, 1939 grant, 1937 German priority. Not the previously delivered Richter US2031792. Hidden by default. No production-lens identity or commercial name is claimed. The sole example is expressly a projection objective; this is an infinity-only reciprocal interpretation, not a documented finite projection conjugate.

## Primary source and transcription
https://patents.google.com/patent/US2170428A/en
https://patentimages.storage.googleapis.com/b5/fd/21/227031b7e7459a/US2170428.pdf
Both source pages visually checked (plate.png and text-page.png). Signed R sequence +85.4,-500,+44.5,+70,-135,+34.3,+146,-46.8 mm, thickness/gaps 7.7,0.5,19,4.5,2,19,8 mm. Glass nd/V: 1.6138/56.3, 1.6138/56.3, 1.7174/29.5, 1.6138/56.3. The lowercase d reference is retained as d (587.5618 nm), not sodium D. Literal values are not rescaled, fitted or silently repaired. Printed focal length is100 mm; independently computed EFL99.7754943025 mm differs−0.22451%, consistent with limited printed precision but not proof of any production match. Computed paraxial BFD63.2101558294 mm; source does not give BFD.

## Explicit estimated quantities
No iris location or clear semi-diameters are printed. Iris is estimated midway through the19 mm final air gap, 9.5 mm after R6. Optical clear semi-diameters28,28,28,19,19,19,22,22 mm are conservative estimates, not traced mechanical rims. An initial25 mm radius at R4/R5 failed the physical air-gap sag test; reducing those estimated rims to19 avoids intersection without changing primary optics. No gap-sag override. Full-stroke iris clearances minimum5.20915 mm upstream and9.5 mm downstream. Source claims approximately40° full angular field; tests at0°,10°,20° do not validate image quality over that field.

## Fresh verification and limits
Native canonical schema/geometry checks pass; render trims below0.25 mm; strict scoped TypeScript and ESLint pass. Native201 axial samples show central±96% pass, ±97–100% clip at the estimated iris due to nonparaxial pupil behavior. Off-axis pupil samples at10° and20° clip as recorded. Central±90% is the acceptance gate, not a claim of a completely clear f/1.9 aperture. Nominal f/1.9 denotes source and paraxial entrance pupil only. Independent reduced-angle matrix agrees in EFL/BFD and exact spherical intersection/vector-Snell traces agree with native sampled central±90% image intercepts to4.1e−14 mm. No MTF quality validation: recorded MTF support/plane check is only a compatibility sanity check. nd/V dispersion is normal-line approximation, not catalog glass or measured C/d/F.

Engine/authoring compatibility is inherited from the prior verified isolated engine snapshot at main3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2. Parent freshly confirmed main unchanged; this worker freshly ran optical and scoped code checks. Full application regression, compiled browser/viewer QA, visual integration and final current-main acceptance remain deferred under qualified handoff.

## Dedup scope
Fresh search of3400 retained lens source bodies found neither patent-number nor multi-number prescription fingerprint. Delivered historical28-configuration inventory and known holds have no match. Parent screening found Google family US-only. No foreign counterpart was independently established; global alias dedup remains provisional, and no alias is counted as another family. This is a new US-source candidate, not a claim that every world patent index has been exhaustively searched.

## Reproduce
Python3 with numpy: run preflight.py then generate.py from this folder's parent; generated data goes to engine/src/lens-data/zeiss. Supply the stated compatible source checkout as engine, with dependencies and TS-js hook. Copy validate.mjs into engine, then from engine run `node --import ./scripts/ts-js-specifier-hook-register.mjs validate.mjs`; run independent.py afterward. The ZIP includes scripts, source, literal JSON, native/independent results, code logs and deliverable triad; omits shared source/toolchain dependencies. No publication, commit, PR or deployment performed. No backup/upload claim is made by this packet.
