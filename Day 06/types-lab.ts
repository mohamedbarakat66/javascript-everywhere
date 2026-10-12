let infString = "Hello";       
let infNumber = 42;            
let infBoolean = true;      
let infArray = [1, 2, 3];      
let infObject = { id: 1 };     

let courseName: string = "JavaScript Everywhere";
// TypeScript can infer string automatically.

let testNum: number = 10;
 // Error: string is not assignable to number.

let x = "A";       // string
const y = "A";     // Literal type: "A"




const userName = "Mohamed";
const greeting = `Welcome, ${userName}!`;

console.log(greeting.toUpperCase());
console.log(greeting.includes("Welcome"));
console.log(greeting.slice(0, 7));

const num1 = 10;
const num2 = 20;
const num3 = 30;

console.log(0.1 + 0.2);  // 0.30000000000000004
console.log(10 / 0);     // Infinity
console.log(Number("abc")); // NaN

const isAdult = 20 > 18;  // true

const bigNum = 9007199254740993n;
console.log(bigNum + 5n);
// bigNum + 5; // Error: Cannot mix bigint and number.

const sym1: symbol = Symbol("id");
const sym2: symbol = Symbol("id");

console.log(sym1 === sym2); // false




let middleName: string | null = null;
let userNick: string | undefined = undefined;


const numbers = [1, 2, 3, 4, 5];

const mapped = numbers.map(n => n * 2);       
const filtered = numbers.filter(n => n > 2);  
const reduced = numbers.reduce((a, b) => a + b, 0);

const emptyArray: string[] = [];
const mixedArr: (string | number)[] = [1, "two", 3];

// mixedArr.push(true); // Error

const readOnlyArr: readonly number[] = [1, 2, 3];
// readOnlyArr.push(4); // Error

type UserTuple = [name: string, age: number, role?: string];

const myTuple: UserTuple = ["Mohamed", 21];

function getCoordinates(): [number, number] {
    return [30.5, 31.2];
}

const [lat, lng] = getCoordinates();

type Profile = {
    username: string;
    bio?: string;
    settings: {
        theme: string;
        notifications: boolean;
    };
    posts: { id: number; title: string }[];
};

const myProfile: Profile = {
    username: "mohamedbarakat",
    settings: {
        theme: "dark",
        notifications: true
    },
    posts: [{ id: 1, title: "TypeScript Lab" }]
};

// myProfile.invalidProp = "test"; // Error




console.log(Number("68px"));    
console.log(parseInt("68px"));  
console.log(+"68px");         

console.log(String(123));       

console.log(Boolean(0));         
console.log(Boolean(""));        
console.log(Boolean(null));      
console.log(Boolean(undefined)); 
console.log(Boolean(NaN));       

console.log(typeof "hello");    
console.log(typeof 10);          
console.log(typeof true);        
console.log(typeof 10n);        
console.log(typeof Symbol());   
console.log(typeof undefined);  
console.log(typeof null);      

const forcedValue = "5" as unknown as number;
console.log(typeof forcedValue); 
// Type assertions do not convert values at runtime.
