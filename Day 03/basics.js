function celsiusTOF(c){
    return (c * 9/5) + 32;
}

const clesiusTOFExp=function(c){
    return (c * 9/5) + 32;
}

const celsiusTOFArrow=c=>(c * 9/5) + 32;

console.log(celsiusTOF(25));
console.log(clesiusTOFExp(25));    
console.log(celsiusTOFArrow(25));


function addlog(a,b){
    console.log(a+b);
}

function addreturn(a,b){
    return a+b;
}


const doubleReturn=addreturn(5,5)*2;
const doubleLog=addlog(5,5)*2;

console.log(doubleReturn);
console.log(doubleLog);//Nan beacuse it uses console.log instead of return so multiplying by 2 is not possible


function greet(name = "guest", greeting = "Hello"){
    return `${greeting} ${name}!`;
}

console.log(greet());
console.log(greet("mohamed"));
console.log(greet("mohamed", "Hi"));
// cosile.log(greet(undefined, "Hi"));//Default parameter only works for undefined not for null because null is an object


function sumAll(...numbers){
return numbers.reduce((a,b)=>a+b,0);

}
console.log(sumAll());
console.log(sumAll(10));
console.log(sumAll(1,2,3,4,5));

 function describe(label, ...values){
   return `${label}: ${values.join(", ")}`;
}
console.log(describe("scores",90,85,95));

function safeDivide(a, b){
    if(typeof a!=="number" || typeof b!=="number"){
        return "Invalid input";
    }
    if(b===0){
        return "Division by zero";
    }

        return a/b;
}
console.log(safeDivide(10,2));
console.log(safeDivide(10,0));
console.log(safeDivide(10,"2"));



