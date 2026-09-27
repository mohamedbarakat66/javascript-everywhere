const originalArray =[1,2,3];
const aliasArray = originalArray;
aliasArray.push(4);
console.log(originalArray);
console.log("---------------------------");

const cleanlArray =[1,2,3];
const copiedArray = [...cleanlArray];
copiedArray.push(4);
console.log(cleanlArray);
console.log(copiedArray);
//Difference: Alias shares the same reference, while Spread creates a new copy.
console.log("---------------------------");
const Array1 = [1,2,3];
const Array2 = [4,5,6];
const Array3 = [...Array1, ...Array2];
console.log(Array3);


const addToFront=[0,...Array1];
const addToEnd=[...Array1,5];
console.log(addToFront);
console.log(addToEnd);

console.log(Array1.length);

const items =["a","b","c","d","e"];

const indexremove = 1;

items.splice(indexremove,1);
console.log(items);
console.log("---------------------------");

const baseStudents = {name:"John", score:90,attendance:80};

const updatedStudents = {...baseStudents, score:95};
console.log(baseStudents.score);
console.log(updatedStudents.score);

const studentWithid={...baseStudents,id:100};
console.log(studentWithid.id);

const {attendance,...baseStudentsWithoutAttendance} = baseStudents;
console.log("original attendance",attendance);
console.log( "Without Attendance",baseStudentsWithoutAttendance);

const defaults={theme:"light",timeout:1000,admin:false};
const custom={theme:"dark",timeout:2000};
const merged={...defaults,...custom};
console.log("merged",merged);

const mergedWrong={...custom,...defaults};
console.log("merged wrong",mergedWrong);
// 4. Use { ...defaults, ...custom } so custom values override the defaults.

console.log("---------------------------");
const originalObj={
    name:"mohamed",
    address:{
        city:"Qena",
    }
}

const shallowCopy={
    ...originalObj,
    address:{
        ...originalObj.address,
}
}
shallowCopy.address.city="Cairo";
console.log(originalObj.address.city);
console.log(shallowCopy.address.city);

console.log("---------------------------");

function total(...numbers){
return numbers.reduce((a,b)=>a+b,0);
}
console.log(total(10,20,30,40));

function logAll(label, ...items) {
  items.forEach(item => console.log(item));
}
logAll("Shopping List", "Milk", "Eggs", "Bread");

function moveFirstToLast(first, ...others) {
  return [...others, first];
}
console.log("Moved first to end:", moveFirstToLast("apple", "banana", "cherry"));

const scoresArray = [45, 89, 23, 99, 67];
 const maxWithoutSpread = Math.max(scoresArray);
console.log("Max without spread :", maxWithoutSpread); // NaN

// 2. Used it with spread
const maxWithSpread = Math.max(...scoresArray);
console.log("Max with spread:", maxWithSpread);
// Math.max can't handle an array directly, but Spread (...) unpacks the array into separate values, so Math.max can calculate them.