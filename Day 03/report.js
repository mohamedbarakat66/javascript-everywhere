const{
    isValidScore,
    letterGrade,
    isPassing,
    isAtRisk,
    average,
    highest,
    lowest,
    countByGrade,
    formatRow
}=require("./grade-lib.js");
 
const students = [
    {name: "Mohamed", score: 90, attendance: 95},
    {name: "Nour", score: 80, attendance: 90},
    {name: "malak", score: 70, attendance: 80},
    {name: "Ahmed", score: 60, attendance: 70},
    {name: "Hamed", score: 50, attendance: 60},
    {name: "Mourad", score: 40, attendance: 50},
    {name: "Abdelrahman", score: 30, attendance: 40},
    {name: "omar", score: 20, attendance: 30},
    {name :"mai", score: 80, attendance: 80},
    {name :"nasser", score: 70, attendance: 70},
    {name: "BrokenData", score: -1, attendance: -1}
];

let totalScore = 0;
let validStudents = 0;
let skipcount = 0;
let riskcount = 0;  

let validStudentsList = []; 
let scoresList = [];   

console.log("Name          |  score  | attendance |   grade |  status");
console.log("--------------------------------------------------------");

for (const student of students) {    
    if (student.score < 0 || student.attendance < 0) {
        skipcount++;
        continue;
    }

    validStudentsList.push(student);
    scoresList.push(student.score);
    if (isAtRisk(student)) {
        riskcount++;
    }

    console.log(formatRow(student));
}

const avgScore = average(scoresList);
const topStudent = highest(validStudentsList);
const lowStudent = lowest(validStudentsList);
const gradesCounts = countByGrade(validStudentsList);

console.log("===============================================================");
console.log("CLASS SUMMARY");
console.log("===============================================================");
console.log(`Average score: ${avgScore}`);
console.log(`Grade: A:${gradesCounts.A} B:${gradesCounts.B} C:${gradesCounts.C} D:${gradesCounts.D} F:${gradesCounts.F}`);
console.log(`Highest score: ${topStudent ? topStudent.score : 0}`);
console.log(`Lowest score: ${lowStudent ? lowStudent.score : 0}`);
console.log(`Skipped: ${skipcount}`);
console.log(`At risk: ${riskcount}`);
console.log("----------------------------");

