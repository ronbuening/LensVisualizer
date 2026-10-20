import type { PreparationFailureReason } from "../types.js";

/** Error raised when normalized lens data cannot produce a valid prepared state. */
export class Optics2PreparationError extends Error {
  readonly reason: PreparationFailureReason;

  constructor(reason: PreparationFailureReason, message: string) {
    super(message);
    this.name = "Optics2PreparationError";
    this.reason = reason;
  }
}
