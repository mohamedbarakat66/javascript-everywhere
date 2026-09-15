console.log("New Hello World");

const title = document.getElementById("title");
title.style.color = "blue";
title.textContent = "Hello World to JavaScript";


// const btn = document.getElementById("btn");
// btn.addEventListener("click",function(){
// title.style.color = "red";
// title.textContent = "You clicked the button!";
// console.log("button clicked");

// });

const btn = document.getElementById("btn");
let count = 0;
btn.addEventListener("click",function(){
   count++;
   title.textContent = `You clicked the button ${count} times`;

});

const reset = document.getElementById("reset");
reset.addEventListener("click",function(){
    count = 0;
    title.textContent = "Hello World to JavaScript";
});