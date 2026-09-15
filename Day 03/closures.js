function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }

}

    const counterA = makeCounter();
    console.log(counterA());
    console.log(counterA());

    const counterB = makeCounter();
    console.log(counterB());


function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(10));
console.log(triple(10));

function makeGrader(passmarks) {
return function(score) {
    return score >= passmarks? "pass" : "fail";
    }
    }

    const graderA = makeGrader(85);
    const graderB = makeGrader(60);

    const testscore=75;
    console.log(graderA(testscore));
    console.log(graderB(testscore));


    function myForEach(array, callback){
        for(let i=0; i<array.length; i++){
            callback(array[i], i);
        }
    }

    const topic=["web", "mobile", "desktop"];
    myForEach(topic, function(item, index){
        console.log(`${index+1}. ${item}`);
    });
 
function mymap(array, callback){
    let result=[];    
    for(let i=0; i<array.length; i++){
        result.push(callback(array[i], i));
    }
    return result;

}
function myFilter(array, test){
    let result=[];
    for(let i=0; i<array.length; i++){
        if(test(array[i], i)){
            result.push(array[i]);
        }
    
    }
    return result;
}

const numbers=[1,2,3,4,5,6,7,8,9,10];
const passingNumbers=myFilter(numbers, function(numbers){return numbers>=5});
 console.log(numbers);
console.log(passingNumbers);

function sayHi(){
    console.log("Hi");
}
function runTwice(fn){
    fn();
    fn();
}
runTwice(sayHi);
// runTwice(sayHi());//Passing an executed function sends its result instead of the function, causing an error.

