export type LetterGrade = "A"  |  "B"  |  "C"  | "D"  | "F";

export interface Student {
    readonly id: number;
    name: string;
    score: number;
    notes?: string;
}

export interface GradedStudent extends Student {
    grade: LetterGrade;
}
