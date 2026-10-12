"use strict";
// p01
{
    let score = 92;
    score = "92";
    console.log(score);
}
// p02
{
    const grade = "A";
    let other = "A";
    const g1 = grade;
    const g2 = other;
    console.log(g1, g2);
}
// p03
{
    function add(a, b) {
        return a + b;
    }
    console.log(add(2, "3"));
}
// p04
{
    const scores = [90, 80];
    const top = scores[5];
    console.log(top.toFixed(1));
}
// p05
{
    const found = [90, 80].find((n) => n > 95);
    console.log(found.toFixed(1));
}
// p06
{
    function greet(name) {
        return `Hi ${name.toUpperCase()}`;
    }
    console.log(greet());
}
// p07
{
    const pair = ["Sara", 92, true];
    console.log(pair);
}
// p08
{
    const s = { name: "Sara", score: 92, age: 20 };
    console.log(s);
}
// p09
{
    const data = { name: "Sara", score: 92, age: 20 };
    const s = data;
    console.log(s);
}
// p10
{
    const s = { id: 1, tags: [] };
    s.tags.push("ts");
    console.log(s);
}
// p11
{
    const raw = JSON.parse('{"name":"Sara"}');
    console.log(raw.name);
}
// p12
{
    const raw = JSON.parse('{"name":"Sara"}');
    console.log(raw.nmae.toUpperCase());
}
// p13
{
    function label(x) {
        if (typeof x === "string")
            return x.toUpperCase();
        return x.toFixed(1);
    }
    console.log(label("a"), label(2));
}
// p14
{
    function first(items) {
        return items[0];
    }
    const n = first([1, 2, 3]);
    const s = first(["a"]);
    console.log(n + 1, s + 1);
}
// p15
{
    function longest(a, b) {
        return a.length >= b.length ? a : b;
    }
    console.log(longest("abc", "de"), longest([1], [1, 2]));
    console.log(longest(10, 20));
}
// p16
{
    async function getScore() {
        return 92;
    }
    const score = getScore();
    console.log(score);
}
// p17
{
    async function getScore() {
        return 92;
    }
    async function main() {
        const score = await getScore();
        console.log(score.toFixed(1));
    }
    main();
}
// p18
{
    try {
        throw new Error("boom");
    }
    catch (err) {
        console.log(err.message);
    }
}
// p19
{
    const s = { name: "Sara", score: 92 };
    const t = { name: "Omar" };
    console.log(s.score, t.score);
}
// p20
{
    let Grade;
    (function (Grade) {
        Grade[Grade["A"] = 0] = "A";
        Grade[Grade["B"] = 1] = "B";
    })(Grade || (Grade = {}));
    console.log(Grade.A);
}
// p21
{
    const update = { score: 80 };
    const full = {
        name: "Sara",
        score: 80,
    };
    console.log(update, full);
}
// p22
{
    const sizes = { S: 1, M: 2 };
    const a = "M";
    const b = "L";
    console.log(a, b);
}
// p23
{
    console.log(typeof null, typeof [], typeof NaN, typeof 10n);
}
// p24
{
    const list = [];
    list.push(1);
    list.push("two");
    console.log(list);
}
// p25
{
    let big = 10n;
    big = big + 5n;
    console.log(big);
}
// p26
{
    const pair = ["Sara", 92];
    pair.push(100);
    console.log(pair.length, pair);
}
// p27
{
    const settings = { theme: "dark" };
    // settings.theme = "light";
    console.log(settings.theme);
}
// p28
{
    const score = Number("12px");
    console.log(score, typeof score, Number.isNaN(score));
}
