const fs = require("fs");

const {
  isValidScore,
  formatRow,
  minMaxStudent,
  average,
  countByGrade,
  withBonus
} = require("./grade-lib");

// Simulate getting attendance
function getAttendance(id, callback) {
  const delay = Math.floor(Math.random() * 1000) + 500;

  setTimeout(() => {
    const attendance = Math.floor(Math.random() * 41) + 60;
    callback(null, attendance);
  }, delay);
}

console.log("Loading...");
const startTime = Date.now();

// Read students.json
fs.readFile("students.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  let students;

  try {
    students = JSON.parse(data);
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
    return;
  }

  let completedCount = 0;
  const results = new Array(students.length);

  // Get attendance in parallel
  students.forEach((student, index) => {
    const id = student.id ?? index + 1;

    getAttendance(id, (err, attendance) => {
      if (err) attendance = 0;

      results[index] = {
        ...student,
        score: isValidScore(student.score) ? student.score : 0,
        attendance: student.attendance ?? attendance
      };

      completedCount++;

      if (completedCount === students.length) {
        console.log("\n================ FINAL REPORT ================");

        let invalidCount = 0;
        const validStudents = [];

        // Skip invalid students
        for (const student of results) {
          if (!isValidScore(student.score)) {
            invalidCount++;
            continue;
          }

          validStudents.push(student);
          console.log(formatRow(student));
        }

        // Summary
        const [lowest, highest] = minMaxStudent(validStudents);
        const avg = average(validStudents.map(s => s.score));

        console.log("----------------------------------------------");
        console.log(`Valid Students: ${validStudents.length}`);
        console.log(`Invalid Records: ${invalidCount}`);
        console.log(`Average Score: ${avg.toFixed(1)}`);

        if (lowest && highest) {
          console.log(
            `Lowest: ${lowest.name} (${lowest.score}) | ` +
            `Highest: ${highest.name} (${highest.score})`
          );
        }

        // Grade tally
        console.log("\n--- Grade Tally ---");

        const tally = countByGrade(validStudents);

        for (const [grade, count] of Object.entries(tally)) {
          console.log(`Grade ${grade}: ${count}`);
        }

        // Immutability proof
        console.log("\n--- Bonus Test ---");

        if (validStudents.length > 0) {
          const student = validStudents[0];
          const boosted = withBonus(student, 5);

          console.log(`Original: ${student.score}`);
          console.log(`With Bonus: ${boosted.score}`);
        }

        const duration = Date.now() - startTime;

        console.log("----------------------------------------------");
        console.log(`Execution Time: ${duration} ms`);
        console.log("==============================================");
      }
    });
  });
});