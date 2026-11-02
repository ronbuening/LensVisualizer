/** Authored diffractive phase declarations, before profile compilation. */

export function validateDiffractivePhase(
  value: unknown,
  surfaceIndex: number,
  surfaceLabel: string,
  errors: string[],
): void {
  const prefix = `surfaces[${surfaceIndex}] ("${surfaceLabel}"): diffractive`;
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`${prefix} must be an object when provided`);
    return;
  }

  const phase = value as Record<string, unknown>;
  if (phase.kind !== "radial-polynomial") {
    errors.push(`${prefix}.kind must be "radial-polynomial"`);
  }
  if (
    typeof phase.referenceWavelengthNm !== "number" ||
    !isFinite(phase.referenceWavelengthNm) ||
    phase.referenceWavelengthNm < 100 ||
    phase.referenceWavelengthNm > 2000
  ) {
    errors.push(`${prefix}.referenceWavelengthNm must be finite and between 100 and 2000`);
  }
  if (
    typeof phase.diffractionOrder !== "number" ||
    !Number.isInteger(phase.diffractionOrder) ||
    phase.diffractionOrder === 0 ||
    Math.abs(phase.diffractionOrder) > 16
  ) {
    errors.push(`${prefix}.diffractionOrder must be a non-zero integer between -16 and 16`);
  }
  if (!Array.isArray(phase.terms) || phase.terms.length < 1 || phase.terms.length > 16) {
    errors.push(`${prefix}.terms must contain between 1 and 16 entries`);
    return;
  }

  let priorPower = 1;
  phase.terms.forEach((value, termIndex) => {
    const termPrefix = `${prefix}.terms[${termIndex}]`;
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      errors.push(`${termPrefix} must be an object`);
      return;
    }
    const term = value as Record<string, unknown>;
    if (
      typeof term.radialPower !== "number" ||
      !Number.isInteger(term.radialPower) ||
      term.radialPower < 2 ||
      term.radialPower > 32
    ) {
      errors.push(`${termPrefix}.radialPower must be an integer between 2 and 32`);
    } else {
      if (term.radialPower <= priorPower) {
        errors.push(`${prefix}.terms radialPower values must be unique and strictly increasing`);
      }
      priorPower = term.radialPower;
    }
    if (typeof term.coefficient !== "number" || !isFinite(term.coefficient) || term.coefficient === 0) {
      errors.push(`${termPrefix}.coefficient must be a finite non-zero number`);
    }
  });
}
