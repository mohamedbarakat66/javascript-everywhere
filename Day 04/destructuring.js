const student ={ name: "Sara", score: 92, city: "Cairo" };

const {name,score}=student;

console.log(name,score);

const{city:hometown}=student;

console.log(hometown);

const{attendance=0}=student;

console.log(attendance);

const{level:tier="Beginner"}=student;

console.log(tier);

const user={
    id:1,
    profile:{
        email:"sara@gmail.com",
        github:"sara-dev",

}
};

const {profile:{email}}=user;
console.log("Email:",email);

// It is only used as a path in destructuring
// console.log(profile); // ReferenceError: profile is not defined

const {profile,
    profile:{email:userEmail}}=user;
    console.log("User Email:",userEmail);
    console.log("Profile:",profile);

const numbers=[10,20,30,40,50];
const[
    firstNumber,
    secondNumber,

]=numbers;

console.log("First Number:",firstNumber);
console.log("Second Number:",secondNumber);

const[
    ,
    ,
    ,
    fourthNumber,
]=numbers;
console.log("Fourth Number:",fourthNumber);

const [
    ,
    ,
    ,
    ,
    ,
    sixthNumber=60,
]=numbers;
console.log("SixthNumber:",sixthNumber);

let a=5;
let b=10;
[a,b]=[b,a];
console.log(a,b)

const colors=["red","green","blue"];
const[head,...tail]=colors;
console.log("Head:",head);
console.log("Tail:",tail);

function describe({ name, score, city=Unknown }) {
    return`Name: ${name}, Score: ${score}, City: ${city}`;
}
console.log(describe({name:"Sara",score:92,city:"Cairo"}));

function summarise({ name, score = 0, passMark = 60 } = {}) {
const status = score >= passMark ? "Passed" : "Failed";
const studentName = name || "Unknown";
return ` ${studentName},  ${score},  ${status}`;
}

    console.log(summarise({name:"Sara",score:92,passMark:80}));
    console.log(summarise({name:"Sara"}));  
    console.log(summarise());

    // Removed = {} and called summarise() with no arguments.
// This caused a TypeError because destructuring cannot be applied to undefined.


const studentList=[
    {name:"Sara",score:92},
    {name:"Mohamed",score:80},
    {name:"Ali",score:70},
    {name:"Ahmed",score:90},
];

for(const {name,score} of studentList){
console.log(`Name: ${name}, Score: ${score}`);
}

const ScoreOnly=studentList.map(({score})=>score);

const tally = ScoreOnly.reduce((acc, score) => {
  acc[score] = (acc[score] || 0) + 1;
  return acc;
}, {});


for (const [score, count] of Object.entries(tally)) {
  console.log(`Score ${score}: appeared ${count} time(s)`);
}