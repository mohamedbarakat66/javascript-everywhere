const delay = (ms, value) =>
    new Promise(resolve => setTimeout(() => resolve(value), ms));

const db = {
    getStudent(id) {
        if (id === 1)
            return delay(200, {
                id: 1,
                name: "Mohamed Barakat",
                courseId: 101
            });

        if (id === 2)
            return delay(200, {
                id: 2,
                name: "Ali",
                courseId: 102
            });

        if (id === 3)
            return delay(200, {
                id: 3,
                name: "Omar",
                courseId: 103
            });

        return Promise.reject(
            new Error(`Student with id ${id} not found`)
        );
    },

    getCourse(courseId) {
        return delay(200, {
            id: courseId,
            title: "JavaScript Everywhere",
            teacherId: 5
        });
    },

    getTeacher(teacherId) {
        return delay(200, {
            id: teacherId,
            name: "Mostafa Saqly"
        });
    },

    getScore(studentId) {
        return delay(200, {
            studentId,
            score: 98
        });
    }
};

async function buildReport(studentId) {
    const student = await db.getStudent(studentId);
    const course = await db.getCourse(student.courseId);
    const teacher = await db.getTeacher(course.teacherId);
    const scoreObj = await db.getScore(student.id);

    console.log(
        ` ${student.name} studies "${course.title}" with ${teacher.name}, Score: ${scoreObj.score}`
        
    );

    return {
        student,
        course,
        teacher,
        score: scoreObj.score
    };
}

console.log("--- Testing buildReport ---");

const pendingReport = buildReport(1);
console.log(pendingReport);

async function main() {
    console.log("\n--- Good ID ---");
    await buildReport(1);

    console.log("\n--- Bad ID ---");
    await buildReport(99);
}

main().catch(err => {
    console.log("Caught:", err.message);
});

async function runTimings() {
    console.log("\n--- Sequential vs Parallel ---");

    const ids = [1, 2, 3];

    const startSeq = Date.now();

    // Sequential: wait for each request
    for (const id of ids) {
        await db.getStudent(id);
    }

    console.log(`Sequential time: ${Date.now() - startSeq}ms`);

    const startPar = Date.now();

    // Parallel: run all requests together
    await Promise.all(ids.map(id => db.getStudent(id)));

    console.log(`Parallel time: ${Date.now() - startPar}ms`);
}

setTimeout(runTimings, 1000);

//  forEach does not wait for async operations
setTimeout(async () => {
    console.log("\n--- The forEach Trap ---");

    const ids = [1, 2, 3];

    ids.forEach(async id => {
        await db.getStudent(id);
    });

    console.log("done");

    console.log("Fix with for...of:");

    for (const id of ids) {
        await db.getStudent(id);
    }

    console.log("done");

    await Promise.all(
        ids.map(async id => {
            await db.getStudent(id);
        })
    );

    console.log("done");
}, 2000);

async function risky() {
    throw new Error("Risky failure!");
}

async function testReturnWithoutAwait() {
    try {
        return risky();
    } catch (err) {
        console.log("This will NOT run:", err.message);
    }
}

async function testReturnWithAwait() {
    try {
        return await risky();
    } catch (err) {
        console.log("Caught locally:", err.message);
    }
}

setTimeout(async () => {
    console.log("\n--- Return vs Return Await ---");
    await testReturnWithAwait();
}, 3000);

// Use Sequential when each step depends on the previous result.