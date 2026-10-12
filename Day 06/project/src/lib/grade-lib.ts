import type { LetterGrade, Student } from "../types.js";

export function calculateGrade(score: number): LetterGrade {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

export function isStudent(value: unknown): value is Student {
    if (typeof value !== "object" || value === null) return false;

    const student = value as Partial<Student>;

    return (
        typeof student.id === "number" &&
        typeof student.name === "string" &&
        typeof student.score === "number" &&
        student.score >= 0 &&
        student.score <= 100
    );
}