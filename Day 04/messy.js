
const students = [
  { name: "Ahmed", address: { city: "Cairo" }, scores: [85, 90], attendance: 10 },
  { name: "Sara" },
  { name: "Ali" },
  { name: "Mona", address: {}, scores: [], attendance: 5 },
  { name: "Khaled", address: { city: "Alex" }, scores: [70], attendance: 0 }
];


console.log("--- Printing Cities ---");

students.forEach(student => {
const city = student.address?.city ?? "Unknown";
console.log(`${student.name} city: ${city}`);
});


console.log("\n--- Printing First Score ---");

students.forEach(student => {
  const firstScore = student.scores?.[0] ?? "No scores yet";
  console.log(`${student.name} first score: ${firstScore}`);
});


console.log("\n--- Attendance using ?? ---");

students.forEach(student => {
  const attendance = student.attendance ?? "Not recorded";
  console.log(`${student.name} attendance: ${attendance}`);
});


console.log("\n--- Attendance using || ---");

students.forEach(student => {
  const attendance = student.attendance || "Not recorded";
  console.log(`${student.name} attendance: ${attendance}`);
});

/*
Difference between ?? and ||:

|| replaces falsy values like 0 with the default value.
?? only replaces null or undefined.

So, ?? keeps attendance = 0,
while || changes 0 to "Not recorded".
*/

console.log( "-------------------------");

function getCity(student) {
  return student.address?.city ?? "Unknown";
}


function safeFirstScore(student) {
  return student.scores?.[0] ?? null;
}


students.forEach(student => {
  const result = student.getGrade?.() ?? "Method not available";
  console.log(`${student.name}: ${result}`);
});


console.log("\n--- Testing functions ---");

console.log("Ahmed's city:", getCity(students[0]));
console.log("Sara's city:", getCity(students[1]));

console.log("Ahmed's first score:", safeFirstScore(students[0]));