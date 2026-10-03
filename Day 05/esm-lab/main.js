import { add, subtract as sub } from "./math.js";
import myCalculator from "./math.js";
import * as MathModule from "./math.js";

console.log("Module keys:", Object.keys(MathModule));

import fs from "node:fs/promises";

const data = await fs.readFile("./esm-lab/package.json", "utf-8");
console.log("Package type:", JSON.parse(data).type);

const currentFile = new URL(import.meta.url).pathname;
console.log("Current file:", currentFile);

console.log("Directory:", import.meta.dirname);
console.log("Filename:", import.meta.filename);

const loadDynamic = true;

if (loadDynamic) {
    const module = await import("./math.js");
    console.log("Dynamic import:", module.add(10, 20));
}

