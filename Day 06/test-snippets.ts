// p16
async function getScore(): Promise<number> { return 92; }
const score: number = getScore() as any; // أو أي تجربة سريعة
console.log(score);

// p26
const pair: [string, number] = ["Sara", 92];
pair.push(100);
console.log(pair.length, pair);