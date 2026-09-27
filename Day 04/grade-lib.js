function isValidScore(score) {
  return (
    typeof score === "number" &&
    !isNaN(score) &&
    score >= 0 &&
    score <= 100
  );
}

function letterGrade(score) {
  if (!isValidScore(score)) return "invalid";

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";

  return "F";
}

function isPassing({ score, passMark = 60 }) {
  return score >= passMark;
}

function isAtRisk({ score = 0, attendance = 0 }) {
  return score < 60 || attendance < 70;
}

function average(numbers) {
  if (!numbers || numbers.length === 0) return 0;

  const total = numbers.reduce((sum, number) => sum + number, 0);
  return total / numbers.length;
}

function minMaxStudent(students) {
  if (!students || students.length === 0) {
    return [null, null];
  }

  let lowest = students[0];
  let highest = students[0];

  for (const student of students) {
    if (student.score < lowest.score) {
      lowest = student;
    }

    if (student.score > highest.score) {
      highest = student;
    }
  }

  return [lowest, highest];
}

function countByGrade(students) {
  const counts = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
  };

  for (const student of students) {
    const grade = letterGrade(student.score);
    counts[grade] = (counts[grade] ?? 0) + 1;
  }

  return counts;
}

function formatRow({
  name = "Unknown",
  score = 0,
  attendance = 0
} = {}) {
  const formattedName = String(name).padEnd(12);
  const formattedScore = String(score).padStart(5);
  const formattedAttendance = String(attendance).padStart(8);
  const grade = String(letterGrade(score)).padStart(5);

  const status = isPassing({ score }) ? "Good" : "At risk";

  return `${formattedName} | ${formattedScore} | ${formattedAttendance} | ${grade} | ${status}`;
}

function withBonus(student, bonus = 5) {
  return {
    ...student,
    score: Math.min(100, student.score + bonus)
  };
}

function withoutField(student, field) {
  const copy = { ...student };

  delete copy[field];

  return copy;
}

module.exports = {
  isValidScore,
  letterGrade,
  isPassing,
  isAtRisk,
  average,
  minMaxStudent,
  countByGrade,
  formatRow,
  withBonus,
  withoutField
};