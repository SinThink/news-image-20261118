// Entry builder for make.fun competition news-image-20261118.
//
// The front page is designed in index.html and rendered to entry.png with
// headless Chrome. This program's job is simply to place that pre-rendered
// image at <MAKEFUN_OUTPUT_DIR>/entry.png, byte for byte, so every run is
// deterministic. Node 22, standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

const png = readFileSync(source);
if (png.length === 0 || png.readUInt32BE(0) !== 0x89504e47) {
  throw new Error(`not a PNG: ${source}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, png);
console.log(`wrote ${target} (${png.length} bytes)`);
