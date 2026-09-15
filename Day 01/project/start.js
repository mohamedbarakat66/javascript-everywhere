console.log("start");
console.log(process.platform);
console.log(process.version);



const courseName = "JavaScript Everywhere";
const instructor = "Mostafa Saqly";
const duration = 6;

console.log(`Course Name: ${courseName}, Instructor: ${instructor}, Duration: ${duration} months`);

function greet(name) 
    {
return `Hello ${name}`;
    }
    console.log(greet("Mohamed"));
    console.log(greet("Mostafa"));

    function add(a, b) {
        return a + b;
    }
    console.log(add(1, 2));

    console.log(process.cwd());
