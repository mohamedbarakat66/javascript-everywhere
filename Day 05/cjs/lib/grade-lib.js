function letterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    return "C";
}

function average(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}

function formatRow(name, score) {
    return `${name}: ${score} (${letterGrade(score)})`;
}

function privateHelper() {
    return "I am private!";
}

module.exports = {
    letterGrade,
    average,
    formatRow
};

console.log("grade-lib.js loaded and executed once!");
