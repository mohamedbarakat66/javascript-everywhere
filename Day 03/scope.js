let globalvar="global";
function scope(){
    let functionvar="function";
    if(true){
        let blockvar="block";
        console.log(globalvar);
        console.log(functionvar);
        console.log(blockvar);
    }
    // console.log(blockvar);//ReferenceError: block is not defined
}
scope();

if(true){
    let letvar="let";
    var varvar="var";
}
// console.log(letvar);//let is block-scoped, so it cannot be accessed here
console.log(varvar);

const status="Global";
function statusFunction(){
    const status="Local";
    console.log(status);
}
statusFunction();
console.log(status);
//Terminal order follows code flow: Whatever runs first prints first.

console.log(sayHello());
function sayHello(){
    return "Hi Mohamed";
}

console.log(myvar);
var myvar="var";//undefined

// console.log(mylet);
let mylet="let";//ReferenceError

// console.log(Arrow());//ReferenceError
// const Arrow=()=>"Arrow";

//Hoisted functions and var allow unsafe usage before definition, while let/const and arrow functions enforce safety by throwing errors.

const fnsvar = [];
for (var i = 0; i < 3; i++) fnsvar.push(() => i);
fnsvar.forEach((f) => console.log(f()));

 const letvar = [];
for (let i = 0; i < 3; i++) letvar.push(() => i);
letvar.forEach((f) => console.log(f()));