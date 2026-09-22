# Patent and glass audit

## 2026-09-22

Source: local `patents/DE_401630_C.pdf`, p. 4, Abb. 3 / Example III. Figure inspected at high resolution; its labels and hatching contaminate automated rim extraction. Published full physical diameters are stronger evidence, so existing optical SDs 0.25 mm inside those rims are retained.

The source provides historical D/G′ coordinates, not modern d-line Abbe numbers. The supplied two-point conversion does not independently identify a dispersion curve; all six glasses remain unresolved rather than assigning a vendor from one index. The runtime-required closeFocusM is restored as an explicitly labeled 1 m placeholder; var remains empty and focus is not modeled. Exact production mount and format remain unverified, so the format-dependent image-circle heuristic is unavailable.

## Local viewer follow-up

Live localhost review against Abb. 3 confirms the six-element silhouette and source element order; published diameters support retaining all SDs. Focus is disabled and there is no zoom. No APD tags are inferred from the unavailable Abbe numbers. Rechecking candidate curves against the source sodium D and G-prime lines does not establish all required modern d-line coordinates: the historical glasses remain unresolved rather than assigning a supplier or fabricating dispersion.

Three sampled static states report zero hidden surface trimming. Numerical finite-focus prescriptions remain unavailable.
