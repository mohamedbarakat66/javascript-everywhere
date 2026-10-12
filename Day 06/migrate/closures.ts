function makeCounter(): () => number {
    let count: number = 0;
    return function(): number {
        count++;
        return count;
    };
}

const counterA = makeCounter();
console.log(counterA());
console.log(counterA());

const counterB = makeCounter();
console.log(counterB());


function makeMultiplier(factor: number): (number: number) => number {
    return function(number: number): number {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(10));
console.log(triple(10));


function makeGrader(passmarks: number): (score: number) => string {
    return function(score: number): string {
        return score >= passmarks ? "pass" : "fail";
    };
}

const graderA = makeGrader(85);
const graderB = makeGrader(60);

const testscore: number = 75;
console.log(graderA(testscore));
console.log(graderB(testscore));


function myForEach<T>(array: T[], callback: (item: T, index: number) => void): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const topic: string[] = ["web", "mobile", "desktop"];
myForEach(topic, function(item: string, index: number): void {
    console.log(`${index + 1}. ${item}`);
});


function mymap<T, U>(array: T[], callback: (item: T, index: number) => U): U[] {
    let result: U[] = [];        
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i));
    }
    return result;
}


function myFilter<T>(array: T[], test: (item: T, index: number) => boolean): T[] {
    let result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i], i)) {
            result.push(array[i]);
        }
    }
    return result;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const passingNumbers: number[] = myFilter(numbers, function(num: number): boolean {
    return num >= 5;
});

console.log(numbers);
console.log(passingNumbers);


function sayHi(): void {
    console.log("Hi");
}

function runTwice(fn: () => void): void {
    fn();
    fn();
}

runTwice(sayHi);