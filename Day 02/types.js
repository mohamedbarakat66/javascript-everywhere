const name = "Mohamed";
const age = 20;
const isStudent = true;
const Name = null;
let score;


console.log("name:", name, " ", typeof name);
console.log("age:", age, " ", typeof age);
console.log("isStudent:", isStudent, " ", typeof isStudent);
console.log("Name:", Name, " ", typeof Name);
console.log("score:", score, " ", typeof score);
console.log("-----------------------");

// typeof null returns "object" due to an old JavaScript bug
console.log(typeof null);

// typeof [] returns "object" because arrays are a specialized type of object in JS
console.log(typeof []);

// The correct way to check if something is an array:
console.log(Array.isArray([]));
console.log("-----------------------");


const num=Number("42");
console.log(num, " ", typeof num);

const str=String(42);
console.log(str, " ", typeof str);

const result=Number("Hello");
console.log(result," ", typeof result); // NaN, "number"

console.log(parseInt("42px")); // 42
console.log(Number("42px")); // NaN
console.log("-----------------------");

const falseValue=[false, 0, "", null, undefined, NaN , -0,];
for(let value of falseValue){
    console.log(value, " ", Boolean(value));

}
console.log("-----------------------");

const count=0;
const fellback=10;
console.log(count || fellback); // 10
console.log(count ?? fellback); // 0

