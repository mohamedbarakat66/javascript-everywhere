import * as fs from "node:fs/promises";
import type { Student } from "./types.js";
import { isStudent, calculateGrade } from "./lib/grade-lib.js";
import { withTimeout, retry, errorMessage } from "./lib/async-utils.js";
import { getAttendance } from "./lib/db.js";

async function generateReport(): Promise<void> {
    try {
        const rawData = await withTimeout(fs.readFile("students.json", "utf-8"), 3000);
        const parsed: unknown = JSON.parse(String(rawData));

        const validStudents: Student[] = Array.isArray(parsed)
            ? parsed.filter(isStudent)
            : [];

        console.log(`Processed valid students: ${validStudents.length}`);

        for (const student of validStudents) {
            try {
                const attendance = await retry(() => getAttendance(student.id), 2);
                const grade = calculateGrade(student.score);
                console.log(
    `Student Report:\n` +
    `  ID: ${student.id}\n` +
    `  Name: ${student.name}\n` +
    `  Score: ${student.score}\n` +
    `  Grade: ${grade}\n` +
    `  Attendance: ${attendance}%\n` +
    `----------------------------------------`
);
            } catch (err: unknown) {
                console.error(`Error for student ${student.id}:`, errorMessage(err));
            }
        }
    } catch (err: unknown) {
        console.error("Failed to generate report:", errorMessage(err));
    }
}

generateReport();