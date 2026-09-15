for(let i=0;i<20;i++){
    if(i%3===0){
        console.log("Fizz");
        continue;
    }else{
        console.log(i);
    }
};
console.log("-----------------------");

const tracks=[ "web", "mobile", "desktop", "data science", "cloud", "devops"];
for([index,track]of tracks.entries()){
console.log(`${index+1} ${track}`);

}
console.log("-----------------------");
const student={
    
    name: "Mohamed",
    age:20,
    courseName:"JavaScript Everywhere",
    city:"Qena",
    major:"Computer Science",
    
};

for(const key in student){
    console.log(`${key}: ${student[key]}`);
}
console.log("-----------------------");

let number=100;
while(number>=1){
    console.log(number);
    number=number/2;
}
console.log("-----------------------");

let runOnse=false;
do{
    console.log('The loop is running');
}
while(runOnse);

console.log("-----------------------");
const scores=[90,80,70,60,50,40,30,20,10,0];
for(score of scores){
    if(score<50){
        continue;}
     if(score>95){
        break;
    } 
    console.log(score);      
}
console.log("-----------------------");   

const myNumbers=[1,2,3,4,5,6,7,8,9,10];

let sum=0;
let highest=myNumbers[0];
let lowest=myNumbers[0];

for(let i=0;i<myNumbers.length;i++){
    sum+=myNumbers[i];
    if(myNumbers[i]>highest){
        highest=myNumbers[i];
    }
    if(myNumbers[i]<lowest){
        lowest=myNumbers[i];
    }
}
let average=sum/myNumbers.length;
console.log(`Average: ${average}`);
console.log(`Sum: ${sum}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);