const students=[
    {name:"Mohamed",score:90,attendance:95},
    {name:"Nour",score:80,attendance:90},
    {name:"malak",score:70,attendance:80},
    {name:"Ahmed",score:60,attendance:70},
    {name:"Hamed",score:50,attendance:60},
    {name:"Mourad",score:40,attendance:50},
    {name:"Abdelrahman",score:30,attendance:40},
    {name:"omar",score:20,attendance:30},
    { name: "BrokenData", score: -1, attendance: -1 }
]

const counts={A:0,B:0,C:0,D:0,F:0};
let totalScore=0;
let validStudents=0;
let skipcount=0;
let riskcount=0;

let highestStudent=students[0];
let lowestStudent=students[0];

console.log("Name    |   score |    attendance |   grade | status");
console.log("-----------------------------");


for(const student of students){
    if(student.score<0 || student.attendance<0 ){
        skipcount++;
        continue;
    }

    let grade = "";
    if(student.score>=90){  
        grade="A";  
        counts.A++;
    }else if(student.score>=80){
        grade="B";
        counts.B++;
    }else if(student.score>=70){
        grade="C";
        counts.C++;
    }       
    else if(student.score>=60){
        grade="D";
        counts.D++;
    }
    else{
        grade="F";
        counts.F++;
    }
   
    const status=(student.score <60 || student.attendance<60)?"At risk":"Good";
    if (status === "At risk") {
        riskcount++;
    }
     
    totalScore+=student.score;
    validStudents++;

if(student.score>highestStudent.score){
        highestStudent=student;
    }
    if(student.score<lowestStudent.score){
        lowestStudent=student;
    }

    console.log(`${student.name}   |${student.score}   |${student.attendance}   |${grade}   |${status}`);
}
console.log("===============================================================");
console.log("CLASS  SUMMARY");
console.log("===============================================================");



const averageScore=totalScore/validStudents;
console.log(`Average score: ${averageScore}`);
console.log(`Grade:A:${counts.A} B:${counts.B} C:${counts.C} D:${counts.D} F:${counts.F}`);
console.log(`Highest score: ${highestStudent.score}`);
console.log(`Lowest score: ${lowestStudent.score}`);
console.log(`Skipped: ${skipcount}`);
console.log(`At risk: ${riskcount}`);

console.log("----------------------------");