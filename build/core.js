"use strict";
import "./deno.js"
import * as __module__ from "./core.cjs"
const {
  $,
  Fail,
  ProcessOutput,
  ProcessPromise,
  cd,
  chalk,
  defaults,
  kill,
  log,
  os,
  path,
  ps,
  quote,
  quotePowerShell,
  resolveDefaults,
  syncProcessCwd,
  useBash,
  usePowerShell,
  usePwsh,
  which,
  within
} = globalThis.Deno ? globalThis.require("./core.cjs") : __module__
export {
  $,
  Fail,
  ProcessOutput,
  ProcessPromise,
  cd,
  chalk,
  defaults,
  kill,
  log,
  os,
  path,
  ps,
  quote,
  quotePowerShell,
  resolveDefaults,
  syncProcessCwd,
  useBash,
  usePowerShell,
  usePwsh,
  which,
  within
}

