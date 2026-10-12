// p01
{
  let score: number | string = 92;
  score = "92";
  console.log(score);
}

// p02
// {
//   const grade = "A";
//   let other = "A";
//   const g1: "A" | "B" = grade;
//   const g2: "A" | "B" = other;
//   console.log(g1, g2);
// }

// p03
{
  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(add(2, "3" as any));
}

// p04
{
  const scores: number[] = [90, 80];
  const top = scores[5];
  console.log(top.toFixed(1));
}

// p05
{
  const found = [90, 80].find((n) => n > 95);
//   console.log(found.toFixed(1));
}

// p06
// {
//   function greet(name?: string): string {
//     return `Hi ${name.toUpperCase()}`;
//   }

//   console.log(greet());
// }

// p07
// {
//   const pair: [string, number] = ["Sara", 92, true];
//   console.log(pair);
// }

// p08
// {
//   interface Student {
//     name: string;
//     score: number;
//   }

//   const s: Student = { name: "Sara", score: 92, age: 20 };
//   console.log(s);
// }

// p09
{
  interface Student {
    name: string;
    score: number;
  }

  const data = { name: "Sara", score: 92, age: 20 };
  const s: Student = data;
  console.log(s);
}

// p10
{
  interface Student {
    readonly id: number;
    tags: string[];
  }

  const s: Student = { id: 1, tags: [] };
  s.tags.push("ts");
  console.log(s);
}

// p11
{
  const raw: unknown = JSON.parse('{"name":"Sara"}');
  console.log((raw as { name: string }).name);
}

// p12
{
  const raw: any = JSON.parse('{"name":"Sara"}');
  console.log(raw.nmae.toUpperCase());
}

// p13
{
  function label(x: string | number): string {
    if (typeof x === "string") return x.toUpperCase();
    return x.toFixed(1);
  }

  console.log(label("a"), label(2));
}

// p14
{
  function first<T>(items: T[]): T {
    return items[0];
  }

  const n = first([1, 2, 3]);
  const s = first(["a"]);
  console.log(n + 1, s + 1);
}

// p15
// {
//   function longest<T extends { length: number }>(a: T, b: T): T {
//     return a.length >= b.length ? a : b;
//   }

//   console.log(longest("abc", "de"), longest([1], [1, 2]));
//   console.log(longest(10, 20));
// }

// p16
{
  async function getScore(): Promise<number> {
    return 92;
  }

  const score: number = getScore() as any;
  console.log(score);
}

// p17
{
  async function getScore(): Promise<number> {
    return 92;
  }

  async function main(): Promise<void> {
    const score = await getScore();
    console.log(score.toFixed(1));
  }

  main();
}

// p18
{
  try {
    throw new Error("boom");
  } catch (err) {
    console.log((err as Error).message);
  }
}

// p19
{
  interface Student {
    name: string;
    score: number;
  }

  const s = { name: "Sara", score: 92 } as Student;
  const t = { name: "Omar" } as Student;
  console.log(s.score, t.score);
}

// p20
{
  enum Grade {
    A,
    B,
  }

  console.log(Grade.A);
}

// p21
{
  type Student = {
    name: string;
    score: number;
  };

  const update: Partial<Student> = { score: 80 };
  const full: Required<Partial<Student>> = {
    name: "Sara",
    score: 80,
  };

  console.log(update, full);
}

// p22
{
  const sizes = { S: 1, M: 2 };
  type Size = keyof typeof sizes;

  const a: Size = "M";
  const b: Size = "L" as Size;
  console.log(a, b);
}

// p23
{
  console.log(typeof null, typeof [], typeof NaN, typeof 10n);
}

// p24
{
  const list: (number | string)[] = [];
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
  const pair: [string, number] = ["Sara", 92];
  pair.push(100);
  console.log(pair.length, pair);
}

// p27
{
  const settings = { theme: "dark" } as const;
  // settings.theme = "light";
  console.log(settings.theme);
}

// p28
{
  const score: number = Number("12px");
  console.log(score, typeof score, Number.isNaN(score));
}
