function multiply(a: number, b: number): number {
    return a * b;
}

const divide = (a: number, b: number): number => a / b;

function createUser(name: string, role: string = "User", bio?: string): string {
    const userBio = bio ?? "No bio provided";
    return `Name: ${name}, Role: ${role}, Bio: ${userBio}`;
}

function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
sumAll();               
sumAll(10);            
sumAll(1, 2, 3, 4, 5);  

type ConfigOptions = { endpoint: string; timeout: number };
function setupServer({ endpoint, timeout }: ConfigOptions) {
    console.log(`Connecting to ${endpoint} with timeout ${timeout}ms`);
}

type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

function calculate(x: number, y: number, op: MathOperation): number {
    return op(x, y);
}
calculate(5, 3, (a, b) => a * b); 

async function fetchData(): Promise<string> {
    return "Data loaded successfully";
}
fetchData().catch(err => console.log(err)); 

function processInput(val: string): string;
function processInput(val: number): number;
function processInput(val: string | number): string | number {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val * 2;
}

// multiply(5); // Error: Expected 2 arguments, but got 1.
// multiply("5", 10); // Error: Argument of type 'string' is not assignable to type 'number'.
multiply(5, 10); 