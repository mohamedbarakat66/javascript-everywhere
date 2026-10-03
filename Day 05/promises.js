function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
});

}

function delayValue(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
});
}

function failAfter(ms, error) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(error), ms);
});   
}

const p1 = delay(1000);
console.log(p1);
p1.then(() => console.log("p1 resolved",p1));


const p = new Promise((resolve) => {
    resolve("First Value");
    resolve("Second Value");
});
p.then(val => console.log(val));


// callback bug: callbacks could be invoked multiple times, making single-settlement impossible.

delayValue(300, { name: "Mohamed", score: 95 })
    .then(({ name, score }) => {
        console.log(`Student: ${name}, Score: ${score}`);
        return score * 2;
    })
    .then(newScore => {
        console.log("Doubled Score:", newScore);
        return delayValue(200, newScore + 10);
    })
    .then(finalValue => {
        console.log("Final Result:", finalValue);
    });

Promise.resolve(1)
    .then(value => {
        console.log("Step 1:", value);
        throw new Error("Test Error");
    })
    .then(value => {
        console.log("Step 2:", value);
    })
    .catch(error => {
        console.log("Error caught:", error.message);
    });

failAfter(300, new Error("Test Error"))
    .catch(error => console.log("Error:", error.message))
    .finally(() => console.log("Cleanup: Operations finished"));

