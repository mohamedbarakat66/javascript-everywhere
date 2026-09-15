// const name="Mohamed Barakat";
// const city="Qina";
// const reason="learning Full-stack Web Development to become a professional web developer";

// function myProfile(userName, userCity, userReason) {
// return `my name is ${userName} and i live in ${userCity} and I joined because I want to${userReason}`;
// }
// console.log(myProfile(name, city, reason));

// console.log(`node version: ${process.version}`);
const btn = document.getElementById("btn-change");
btn.addEventListener("click", function () {
document.getElementById("title").textContent = "Welcome to JavaScript Everywhere";

});


const log = document.getElementById("btn-log");
log.addEventListener("click", function () {
console.log("Button clicked");

});