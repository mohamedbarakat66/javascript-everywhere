

function once(fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      fn(...args);
    }
  };
}


const safeCallback = once((msg) => {
  console.log("Callback:", msg);
});

safeCallback("First call");
safeCallback("Second call");