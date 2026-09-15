// const students = [
//   {
//     name: "sara",
//     score: 92,
//   },
//   {
//     name: "Omar",
//     score: 68,
//   },
//   {
//     name: "lina",
//     score: 79,
//   },
  
// ];

// let passed = 0;

// students.forEach((student) => {
//     const status = student.score >= 70 ? "PASS" : "FAIL";
//     if (status === "PASS") {
//         passed++;
//     }
//     console.log(`${student.name} : ${student.score} -> ${status}`);
        
// });
// console.log(`${passed} of ${students.length} students passed.`);

const students = [
  {
    name: "Ahmed",
    score: 95,
  },
  {
    name: "Sara",
    score: 80,
  },
  {
    name: "Omar",
    score: 45,
  },
  {
    name: "Mona",
    score: 70,
  },
  {
    name: "Mohamed",
    score: 60,
  },
];

let  excellentStudents = 0;
let  goodStudents = 0;
let needworkStudents = 0;

for (const student of students) {
    if (student.score >= 90) {
        excellentStudents++;
    }   else if (student.score >= 70) {
        goodStudents++;
    } else {
        needworkStudents++;
    }
            
}
console.log(`Excellent Students: ${excellentStudents} Good Students: ${goodStudents} Need Work Students: ${needworkStudents}`);