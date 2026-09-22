/** In-place radix-2 complex FFT with Float64 storage; inverse transforms include normalization. */
function fftLine(real: Float64Array, imaginary: Float64Array, inverse: boolean): void {
  const n = real.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      [real[i], real[j]] = [real[j], real[i]];
      [imaginary[i], imaginary[j]] = [imaginary[j], imaginary[i]];
    }
  }
  for (let length = 2; length <= n; length *= 2) {
    const angle = ((inverse ? 2 : -2) * Math.PI) / length;
    const stepRe = Math.cos(angle),
      stepIm = Math.sin(angle);
    for (let start = 0; start < n; start += length) {
      let wr = 1,
        wi = 0;
      for (let j = 0; j < length / 2; j++) {
        const a = start + j,
          b = a + length / 2;
        const vr = real[b] * wr - imaginary[b] * wi;
        const vi = real[b] * wi + imaginary[b] * wr;
        real[b] = real[a] - vr;
        imaginary[b] = imaginary[a] - vi;
        real[a] += vr;
        imaginary[a] += vi;
        [wr, wi] = [wr * stepRe - wi * stepIm, wr * stepIm + wi * stepRe];
      }
    }
  }
  if (inverse)
    for (let i = 0; i < n; i++) {
      real[i] /= n;
      imaginary[i] /= n;
    }
}

export function fft2d(real: Float64Array, imaginary: Float64Array, size: number, inverse = false): void {
  if (
    !Number.isInteger(size) ||
    size < 2 ||
    size & (size - 1) ||
    real.length !== size * size ||
    imaginary.length !== real.length
  ) {
    throw new Error("FFT requires equally sized, power-of-two square arrays.");
  }
  const re = new Float64Array(size),
    im = new Float64Array(size);
  for (const columns of [false, true])
    for (let line = 0; line < size; line++) {
      for (let i = 0; i < size; i++) {
        const k = columns ? i * size + line : line * size + i;
        re[i] = real[k];
        im[i] = imaginary[k];
      }
      fftLine(re, im, inverse);
      for (let i = 0; i < size; i++) {
        const k = columns ? i * size + line : line * size + i;
        real[k] = re[i];
        imaginary[k] = im[i];
      }
    }
}
