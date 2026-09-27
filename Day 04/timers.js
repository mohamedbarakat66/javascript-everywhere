function blockFor(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}


setTimeout(() => console.log("Message at 300ms"), 300);
setTimeout(() => console.log("Message at 100ms"), 100);
setTimeout(() => console.log("Message at 200ms"), 200);


setTimeout((name, role) => {
  console.log(`Hello ${name}, you are a ${role}!`);
}, 400, "Mohamed", "Developer");


const timeoutId = setTimeout(() => {
  console.log("This should NOT print!");
}, 500);

clearTimeout(timeoutId);


function sayHi() {
  console.log("Hello!");
}

// Correct:
// setTimeout(sayHi, 1000);

// Wrong:
// setTimeout(sayHi(), 1000);




let count = 5;

const countdownInterval = setInterval(() => {
  if (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
  } else {
    console.log("Lift off 🚀");
    clearInterval(countdownInterval);
  }
}, 1000);






const start = Date.now();

setTimeout(() => {
  const time = Date.now() - start;
  console.log(`Requested 100ms, actual time: ${time}ms`);
}, 100);

blockFor(1000);

/*
setTimeout gives a minimum delay,
but it can run later if the main thread is busy.
*/




function repeat(times, callback) {
  for (let i = 1; i <= times; i++) {
    callback(i);
  }

  console.log("done (Sync)");
}

repeat(3, num => {
  console.log(`Sync: ${num}`);
});


function repeatLater(times, callback) {
  for (let i = 1; i <= times; i++) {
    setTimeout(() => {
      callback(i);
    }, i * 1000);
  }

  console.log("done (Async)");
}

repeatLater(3, num => {
  console.log(`Async: ${num}`);
});

/*
Sync runs immediately.
Async runs later.
*/



function getScoreWrong() {
  setTimeout(() => {
    return 95;
  }, 1000);
}

const result = getScoreWrong();
console.log(result); 


function getScore(callback) {
  setTimeout(() => {
    const score = 88;
    callback(score);
  }, 1000);
}

getScore(score => {
  console.log(`Score: ${score}`);
});



const databaseStudents = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Sara" }
];

function findStudent(id, callback) {
  setTimeout(() => {
    const student = databaseStudents.find(s => s.id === id);
    if (!student) {
      return callback(new Error(`Student with id ${id} not found!`));
    }
    return callback(null, student);
  }, 500);
}

findStudent(1, (err, student) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("Found student with destructuring:", student.name);
});

findStudent(99, (err, student) => {
  if (err) {
    console.log("Error handled safely:", err.message);
    return;
  }
  console.log("Found student:", student.name);
});


try {
  setTimeout(() => {
    throw new Error("Async bomb exploding!");
  }, 100);
} catch (error) {
  console.log("Caught:", error.message); 
}



function safeAsyncOperation(callback) {
  setTimeout(() => {
    try {
      throw new Error("Something went wrong inside!");
    } catch (err) {
      callback(err); 
    }
  }, 100);
}

safeAsyncOperation((err) => {
  if (err) {
    console.log("Safely caught via callback error-first:", err.message);
  }
});