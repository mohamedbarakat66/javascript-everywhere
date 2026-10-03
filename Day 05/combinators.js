const delay = (ms, value, success = true) =>
    new Promise((resolve, reject) =>
        setTimeout(
            () => success ? resolve(value) : reject(new Error(value)),
            ms
        )
    );


const p1 = delay(300, "First");
const p2 = delay(100, "Second");
const p3 = delay(200, "Third");

const startTime = Date.now();

Promise.all([p1, p2, p3])
    .then(results => {
        console.log("Results:", results);
        console.log(`Time: ${Date.now() - startTime}ms`);
    })
    .catch(err => console.log(err));

const failingAll = Promise.all([
    delay(100, "Success 1"),
    delay(200, "Failed", false),
    delay(300, "Success 2")
]);

failingAll.catch(err =>
    console.log("Promise.all failed:", err.message)
);

setTimeout(() => {

    const mixedPromises = [
        delay(100, "Success 1"),
        delay(200, "Error", false),
        delay(150, "Success 2")
    ];

    Promise.allSettled(mixedPromises)
        .then(results => {
            results.forEach((res, index) => {
                if (res.status === "fulfilled") {
                    console.log(`Result ${index + 1}:`, res.value);
                } else {
                    console.log(`Error ${index + 1}:`, res.reason.message);
                }
            });

            const failuresCount =
                results.filter(res => res.status === "rejected").length;

            console.log(`Total failures: ${failuresCount}`);
        });
}, 500);

setTimeout(() => {

    const slowSuccessFastFailure = [
        delay(300, "Late Success"),
        delay(50, "Fast Failure", false)
    ];

    Promise.race(slowSuccessFastFailure)
        .catch(err =>
            console.log("Promise.race failed:", err.message)
        );

    Promise.any(slowSuccessFastFailure)
        .then(value =>
            console.log("Promise.any success:", value)
        );

    const allFailed = [
        delay(100, "First Error", false),
        delay(200, "Second Error", false)
    ];

    Promise.any(allFailed)
        .catch(err => {
            console.log("AggregateError name:", err.name);
            console.log("Errors length:", err.errors.length);
        });

}, 1000);

// Promise.all: Waits for all promises to succeed.
// Promise.allSettled: Returns the result of every promise.
// Promise.race: Returns the first promise to settle.
// Promise.any: Returns the first successful promise.
