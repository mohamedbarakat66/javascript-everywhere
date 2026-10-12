import { isStudent } from "./lib/grade-lib.js";
import type { GradedStudent } from "./types.js";

const loadBtn = document.querySelector<HTMLButtonElement>("#load-btn");
const statusMsg = document.querySelector<HTMLSpanElement>("#status-msg");
const addForm = document.querySelector<HTMLFormElement>("#add-form");
const nameInput = document.querySelector<HTMLInputElement>("#name-input");
const scoreInput = document.querySelector<HTMLInputElement>("#score-input");
const studentsList = document.querySelector<HTMLUListElement>("#students-list");

if (loadBtn && statusMsg && studentsList) {
    loadBtn.addEventListener("click", async () => {
        loadBtn.disabled = true;
        statusMsg.textContent = "Loading students...";

        try {
            const response = await fetch("students.json");
            const parsed: unknown = await response.json();
            const rawStudents: unknown[] = Array.isArray(parsed) ? parsed : [];
            let skippedCount = 0;

            const validStudents: GradedStudent[] = [];

            for (const item of rawStudents) {
                if (isStudent(item)) {
                    validStudents.push({ ...item, grade: "A" });
                } else {
                    skippedCount++;
                }
            }

            statusMsg.textContent = `Loaded successfully. Skipped: ${skippedCount}`;
            studentsList.innerHTML = "";

            validStudents.forEach((student) => {
                const li = document.createElement("li");
                li.textContent = `ID: ${student.id} | Name: ${student.name} | Score: ${student.score}`;
                studentsList.appendChild(li);
            });
        } catch {
            statusMsg.textContent = "Failed to load students data.";
        } finally {
            loadBtn.disabled = false;
        }
    });
}

if (addForm && nameInput && scoreInput) {
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const score = scoreInput.valueAsNumber;

        if (!name || Number.isNaN(score) || score < 0 || score > 100) {
            alert("Please enter a valid name and score between 0 and 100.");
            return;
        }

        console.log(`Adding student: ${name}, Score: ${score}`);
        addForm.reset();
    });
}
