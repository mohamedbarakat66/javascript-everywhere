export function average(scores) {
    if (!scores.length) return 0;
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    return sum / scores.length;
}

export function formatRow(name, score, grade) {
    return `${name}: ${score} (${grade})`;
}

export function letterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

export function withBonus(students, bonus = 5) {
    return students.map(s => ({ ...s, score: Math.min(100, s.score + bonus) }));
}