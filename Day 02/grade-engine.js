 function getGrade(score){

    if(score <0 || score>100){
        console.log("Invalid score");
    }
    else if(score>=90){ 
        console.log("A");
    }
    else if(score>=80){ 
        console.log("B");
    }
    else if(score>=70){ 
        console.log("C");
    }
    else if(score>=60){ 
        console.log("D");
    }
    else{
        console.log("F");
    }   


 }

 getGrade(97);
 getGrade(85);
 getGrade(70);
 getGrade(64);
 getGrade(105);
 getGrade(0);
 console.log("-----------------------");


 const score=85;
 const grade=score>=60?"pass":"fail";
 console.log(grade);
 console.log("-----------------------");


 const grades="B"

 switch(grades){
     case "A":
         console.log("Excellent");
         break;
     case "B":
         console.log("Good");
         break;
     case "C":
         console.log("Average");
         break;
     case "D":
         console.log("Poor");
         break;
     case "F":
         console.log("Fail");
         break;
     default:
         console.log("Invalid grade");
 }
 console.log("-----------------------");


 const scoreNew=85;
 const value=75;

 if(scoreNew>=70 && value>=60){
console.log("Excellent");

 };
 if (scoreNew<=70 || value>=60){

     console.log("Fail");
 }

