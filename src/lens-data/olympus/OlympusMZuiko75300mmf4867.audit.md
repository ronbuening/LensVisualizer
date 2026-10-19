# Audit Log — OLYMPUS M.Zuiko Digital ED 75–300mm f/4.8–6.7

Patent: JP 2011-186095 A (Sigma Corporation), Example 2 (tables pp. 11–12), Figure 8.

## 2026-10-19 — Deployment validation and G2-fixed zoom cam

Source re-read from page images: all 32 lens surfaces plus the stop and LPF (R, d, nd, νd) and the five variable gaps
plus Bf at all three printed stations match the data file. All surfaces are spherical; the stop is surface 16;
cemented pairs 1–3, 19–21, 22–24, 27–29, 30–32.

Patent vs model: EFL 76.91 / 140.00 / 290.98 vs 76.906 / 139.989 / 290.942; Bf 1.0; F4.95 / 5.57 / 6.92 per station;
conditions (1) 0.0339, (2) 0.0328, (3) 6.4662, (5) 3.2453 (printed 3.2458).

Product: Olympus lists 18 elements / 13 groups with one Super ED, two ED and three HR elements, no aspheres, 0.9 m (75 mm)
/ 1.5 m, Micro Four Thirds, on sale December 2010. Example 2 has νd 90.19 (Super ED), 81.61 and 68.62 (ED) and three
nd 1.91082 elements (HR). The II version (2013) lists the same construction and its drawing matches. No public source
states that Sigma designed or made the lens, so the attribution is circumstantial but strong. Example 3 (also 18/13,
three HR, F4.95–6.90) fits the catalog drawing equally well.

Zoom cam: the package's intermediate stations interpolated D5/D9/D15/D26 linearly and solved D32 for focus. That moved
G2 by up to +11.41 mm relative to the image (about 251 mm), against paragraph 0069 ("the second lens group does not
move during zooming"), let the overall length overshoot the tele value (186.2 vs 182.3 mm near 280 mm) and clipped
the on-axis beam at S10/S11 between about 210 and 278 mm (8.41 needed vs sd 8.1). The 78 intermediate stations were
re-derived: G2 fixed (the variable gaps behind G2 sum to 70.012 mm at every station), G1, G3 and G5 on monotone
(PCHIP) splines through the printed positions in log focal length, G4 solved paraxially for the fixed image plane;
stations geometric in focal length, 40 per printed interval; F-number linear in log focal length; G5a focus keyframes
re-solved to 1.5 m with the package's method (maximum travel 8.30 mm). The published stations, including their focus
states, are unchanged. After the change, G1, G4, G5 and the overall length move monotonically; S10/S11 need 7.15 / 7.11
mm (sd 8.1); `audit:aperture` reports 81/81 stations within 3 % of the stated f-number with no rim-limited station;
`audit:surface` OK, image circle OK, field coverage 81/81 at 100 %. Rims were not changed.

Open: the 0.9 m wide-end close focus is not modelled. Wording items reported by the validation pass and not changed
here: missing spaces between numbers and words in the analysis, the "EXAMPLE 2" / "DERIVED CONTINUOUS CAM" spec chips,
and the subtitle's "probable original Olympus production association" phrasing.
