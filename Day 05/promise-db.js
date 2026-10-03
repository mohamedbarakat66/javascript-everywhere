const delay = (ms, value) =>
    new Promise(resolve => setTimeout(() => resolve(value), ms));

const db = {
    getStudent(id) {
        if (id === 1) {
            return delay(200, {
                id: 1,
                name: "Mohamed Barakat",
                courseId: 101
            });
        }

        return Promise.reject(
            new Error(`Student with id ${id} not found`)
        );
    },

    getCourse(courseId) {
        if (courseId === 101) {
            return delay(200, {
                id: 101,
                title: "JavaScript Everywhere",
                teacherId: 5
            });
        }

        return Promise.reject(
            new Error(`Course with id ${courseId} not found`)
        );
    },

    getTeacher(teacherId) {
        if (teacherId === 5) {
            return delay(200, {
                id: 5,
                name: "Mostafa Saqly"
            });
        }

        return Promise.reject(
            new Error(`Teacher with id ${teacherId} not found`)
        );
    },

    getScore(studentId) {
        if (studentId === 1) {
            return delay(200, {
                studentId: 1,
                score: 98
            });
        }

        return Promise.reject(
            new Error(`Score for student id ${studentId} not found`)
        );
    }
};

function buildReport(studentId) {
    const startTime = Date.now();

    return db.getStudent(studentId)
        .then(student => db.getCourse(student.courseId))
        .then(course => db.getTeacher(course.teacherId))
        .then(teacher => db.getScore(studentId))
        .then(score => {
            console.log(
                `Student: ${studentId}, Score: ${score.score}`
            );

            return score;
        })
        .catch(error => {
            console.log("Error:", error.message);
        })
        .finally(() => {
            console.log(`Time: ${Date.now() - startTime}ms`);
        });
}

console.log("--- Test 1 ---");

buildReport(1)
    .then(() => {
        console.log("\n--- Test 2 ---");
        return buildReport(99);
    })
    .then(() => {
        console.log("\n--- Comparison ---");
        console.log("if (err) checks: 4 vs 1");
    });
