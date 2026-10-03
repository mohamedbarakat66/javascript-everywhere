const { formatRow, average } = require("./lib/grade-lib");
const delay = require("./lib/delay");
const students = require("./students.json");

async function runCjsLab() {
    console.log("--- CJS Lab Output ---");
    console.log("Students:", students.length);

    const c1 = require("./lib/counter");
    const c2 = require("./lib/counter");

    console.log("Counter 1:", c1.increment());
    console.log("Counter 2:", c2.increment());

    console.log(formatRow("Mohamed Barakat", 95));
}

runCjsLab();
