function isValidScore(score) {
    return score >= 0 && score <= 100;
}

function letterGrade(score) {
    if (score >= 85) return "A";
    if (score >= 75) return "B";
    if (score >= 65) return "C";
    if (score >= 50) return "D";
    return "F";
}

function average(numbers) {
    if (numbers.length === 0) return 0;

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return (sum / numbers.length).toFixed(2);
}


let students = [];

const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const studentsList = document.getElementById("studentsList");
const summaryDiv = document.getElementById("summaryDiv");
const errorMsg = document.getElementById("errorMsg");


function render() {
    studentsList.innerHTML = "";

    let scores = [];

    for (let student of students) {
        let li = document.createElement("li");

        li.textContent =
            student.name + " - " +
            student.score + " - " +
            letterGrade(student.score);

        studentsList.appendChild(li);

        scores.push(student.score);
    }

    summaryDiv.textContent =
        "Students: " + students.length +
        " | Average: " + average(scores);
}


function addStudent() {
    let name = nameInput.value;
    let score = Number(scoreInput.value);

    if (name === "") {
        errorMsg.textContent = "Enter a name";
        return;
    }

    if (scoreInput.value === "") {
        errorMsg.textContent = "Enter a score";
        return;
    }

    if (!isValidScore(score)) {
        errorMsg.textContent = "Score must be 0 - 100";
        return;
    }

    errorMsg.textContent = "";

    students.push({
        name: name,
        score: score
    });

    render();

    nameInput.value = "";
    scoreInput.value = "";
}


addButton.addEventListener("click", addStudent);


clearButton.addEventListener("click", function() {
    students = [];
    render();
});