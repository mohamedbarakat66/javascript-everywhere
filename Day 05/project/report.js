import fs from "node:fs/promises";
import {
    formatRow,
    average,
    letterGrade,
    getAttendance,
    withTimeout,
    retry
} from "./lib/index.js";

const startTime = performance.now();
console.log("Loading...");

try {
    const filePath = new URL("./students.json", import.meta.url);
    const data = await fs.readFile(filePath, "utf-8");

    let students;

    try {
        students = JSON.parse(data);
    } catch {
        throw new Error("Broken or invalid JSON input");
    }

    const processedStudents = await withTimeout(
        Promise.resolve(students),
        2000
    );

    const attendancePromises = processedStudents.map(student =>
        retry(() => getAttendance(student.id), 2, 300)
            .catch(error => ({
                error: error.message,
                id: student.id
            }))
    );

    const attendanceResults = await Promise.allSettled(attendancePromises);

    console.log("--- Async Grade Report ---");

    processedStudents.forEach((student, index) => {
        const result = attendanceResults[index];
        const status =
            result.status === "fulfilled" && !result.value.error
                ? "Present"
                : "Recovered/Failed";

        const grade = letterGrade(student.score);

        console.log(
            formatRow(student.name, student.score, grade),
            `- Status: ${status}`
        );
    });

    const scores = processedStudents.map(student => student.score);
    console.log(`Average Score: ${average(scores).toFixed(2)}`);

} catch (error) {
    console.error("Error generating report:", error.message);
} finally {
    const endTime = performance.now();
    console.log(`finally: Total execution time: ${(endTime - startTime).toFixed(2)}ms`);
}
