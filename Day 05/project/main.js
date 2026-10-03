import getAttendance from "./lib/db.js";
import { letterGrade, average } from "./lib/grade-lib.js";
import { withTimeout } from "./lib/async-utils.js";



const loadBtn = document.getElementById("loadBtn");
const statusDiv = document.getElementById("status");
const resultsList = document.getElementById("results");

loadBtn.addEventListener("click", async () => {
    try {
        loadBtn.disabled = true;
        statusDiv.textContent = "Loading...";
        resultsList.innerHTML = "";

//    const fetchPromise = fetch("./students.json").then(res => res.json());
//         const students = await withTimeout(fetchPromise, 1);

//         if (!students) {
//             throw new Error("Failed to load students.json");
//         }

        const res = await fetch("./students.json");

        if (!res.ok) {
            throw new Error("Failed to load students.json");
        }

        const students = await res.json();

        const attendancePromises = students.map(student =>
            getAttendance(student.id)
        );

        const attendanceResults = await Promise.allSettled(attendancePromises);

        let failedCount = 0;

        students.forEach((student, index) => {
            const result = attendanceResults[index];
            let status = "Present";

            if (result.status === "fulfilled") {
                status = result.value.status;
            } else {
                failedCount++;
                status = "Failed";
            }

            const grade = letterGrade(student.score);
            const li = document.createElement("li");

            li.textContent =
                `${student.name}: ${student.score} (${grade}) - Status: ${status}`;

            resultsList.appendChild(li);
        });

        const avg = average(students.map(student => student.score));
        const avgLi = document.createElement("li");

        avgLi.textContent = `Average Score: ${avg.toFixed(2)}`;
        resultsList.appendChild(avgLi);

        statusDiv.textContent = failedCount
            ? `Done with ${failedCount} attendance lookup failures.`
            : "Done successfully!";

    } catch (error) {
        statusDiv.textContent = `Error: ${error.message}`;
    } finally {
        loadBtn.disabled = false;
    }
});


