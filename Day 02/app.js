const scoreInput = document.getElementById("scoreInput");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");
const errorMessage = document.getElementById("errorMessage");
const scoreList = document.getElementById("scoreList");

const historyArray = [];

// Check button
checkBtn.addEventListener("click", function () {

    const score = Number(scoreInput.value);

    // Check input
    if (scoreInput.value === "" || isNaN(score) || score < 0 || score > 100) {
        errorMessage.textContent = "Please enter a number between 0 and 100";
        return;
    }

    errorMessage.textContent = "";

    // Calculate grade
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Add to history
    historyArray.push({
        score: score,
        grade: grade
    });

    // Show history
    scoreList.innerHTML = "";

    for (const item of historyArray) {
        const li = document.createElement("li");

        li.textContent = `Score: ${item.score} - Grade: ${item.grade}`;

        scoreList.appendChild(li);
    }

    console.log(historyArray);

    scoreInput.value = "";
});

// Clear button
clearBtn.addEventListener("click", function () {

    historyArray.length = 0;
    scoreList.innerHTML = "";
    errorMessage.textContent = "";

    console.log(historyArray);
});