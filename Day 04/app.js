

let students = [];

function describe({ name, score, city = "Unknown" }) {
  const student = { name, score: Number(score) };

  if (city.trim()) {
    student.city = city.trim();
  }

  return student;
}

function addStudent(list, data) {
  return [...list, describe(data)];
}

function calculateSummary(list) {
  if (list.length === 0) {
    return { count: 0, average: 0 };
  }

  const total = list.reduce((sum, s) => sum + s.score, 0);
  return {
    count: list.length,
    average: (total / list.length).toFixed(1)
  };
}

function fetchStudents(callback) {
  setTimeout(() => {
    console.log("Server request sent...");

    if (Math.random() < 0.25) {
      return callback(new Error("Server failed"));
    }

    const data = [
      { name: "Youssef", score: 92, city: "Cairo" },
      { name: "Mona", score: 85 }
    ];

    callback(null, data);
  }, 1000);
}

function blockFor(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}



const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const cityInput = document.getElementById("cityInput");

const addBtn = document.getElementById("addBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const freezeBtn = document.getElementById("freezeBtn");
const chunkBtn = document.getElementById("chunkBtn");

const studentList = document.getElementById("studentList");
const errorMsg = document.getElementById("errorMsg");
const summaryDiv = document.getElementById("summaryDiv");


function render() {
  studentList.innerHTML = "";

  students.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.name} - Score: ${s.score}${s.city ? ` | City: ${s.city}` : ""}`;
    studentList.appendChild(li);
  });

  const { count, average } = calculateSummary(students);
  summaryDiv.textContent = `Total Students: ${count} | Average Score: ${average}`;
}


function handleAddClick() {
  errorMsg.textContent = "";

  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);
  const city = cityInput.value;

  if (!name) {
    errorMsg.textContent = "Name cannot be empty!";
    return;
  }

  if (isNaN(score) || score < 0 || score > 100) {
    errorMsg.textContent = "Score must be 0-100!";
    return;
  }

  students = addStudent(students, { name, score, city });

  nameInput.value = "";
  scoreInput.value = "";
  cityInput.value = "";

  render();
}


function handleLoadClick() {
  errorMsg.textContent = "";
  loadBtn.disabled = true;
  loadBtn.textContent = "Loading...";

  fetchStudents((err, data) => {
    loadBtn.disabled = false;
    loadBtn.textContent = "Load from Server";

    if (err) {
      errorMsg.textContent = err.message;
      return;
    }

    students = [...students, ...data];
    render();
  });
}


function handleClearClick() {
  students = [];
  errorMsg.textContent = "";
  render();
}


function handleFreezeClick() {
  console.log("Freezing main thread...");
  blockFor(3000);
  console.log("Unfrozen!");
}


function handleChunkClick() {
  console.log("Starting chunked work...");

  let step = 0;

  function processChunk() {
    if (step < 3) {
      console.log(`Processing chunk ${step + 1}`);
      step++;
      setTimeout(processChunk, 0);
    } else {
      console.log("Chunked work finished!");
    }
  }

  processChunk();
}


// Events
addBtn.addEventListener("click", handleAddClick);
loadBtn.addEventListener("click", handleLoadClick);
clearBtn.addEventListener("click", handleClearClick);
freezeBtn.addEventListener("click", handleFreezeClick);
chunkBtn.addEventListener("click", handleChunkClick);

render();