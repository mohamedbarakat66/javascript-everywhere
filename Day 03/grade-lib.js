function isValidScore(score){
return typeof score === "number" && !isNaN(score) && score>=0 && score<=100;

}

function letterGrade(score){
    if(!isValidScore(score)) return "invalid";
    if(score>=90){
        return "A";
    }
    else if(score>=80){
        return "B";
    }
    else if(score>=70){
        return "C";
    }
    else if(score>=60){
        return "D";
    }
    else{
        return "F";
    }

}

function isPassing(score, passMark = 60){
    return score>=passMark;
}

function isAtRisk(student){
    return student.score<60 || student.attendance<70;
}

function average(numbers){
    if(numbers.length===0) return 0;
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum/numbers.length;
}

function highest(students){
    if(students.length===0) return 0;
    let highest=students[0];
    for(let i=0; i<students.length; i++){
        if(students[i].score>highest.score){
            highest=students[i];
        }
    }
    return highest;
}
function lowest(students){
    if(students.length===0) return 0;
    let lowest=students[0];
    for(let i=0; i<students.length; i++){
        if(students[i].score<lowest.score){
            lowest=students[i];
        }
    }
    return lowest;
}

function countByGrade(students){
    let counts={A:0,B:0,C:0,D:0,F:0};
    for(let i=0; i<students.length; i++){
        counts[letterGrade(students[i].score)]++;
    }
    return counts;
}

function formatRow(student){
    return student.name.padEnd(12)  + "  |  " + String(student.score).padStart(5) + "  |  " + String(student.attendance).padStart(8)+"  |  "
    + letterGrade(student.score).padStart(5)+ "  |  " + (isPassing(student.score)?"Good":"At risk");
}

module.exports={
    isValidScore,
    letterGrade,
    isPassing,
    isAtRisk,
    average,
    highest,
    lowest,
    countByGrade,
    formatRow
}