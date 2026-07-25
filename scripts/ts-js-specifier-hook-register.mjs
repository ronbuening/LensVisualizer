/** Registers ts-js-specifier-hook.mjs; use via `node --import ./scripts/ts-js-specifier-hook-register.mjs`. */
import { register } from "node:module";

register("./ts-js-specifier-hook.mjs", import.meta.url);
