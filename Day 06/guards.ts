interface Student {
    name: string;
    score: number;
}

function isStudent(value: unknown): value is Student {
    return (
        typeof value === "object" &&
        value !== null &&
        "name" in value &&
        typeof value.name === "string" &&
        "score" in value &&
        typeof value.score === "number" &&
        value.score >= 0 &&
        value.score <= 100
    );
}


const rawJsonString = JSON.stringify([
    { name: "Mohamed", score: 95 },
    { name: "Ali", score: 85 },
    { name: "InvalidScore", score: 150 },
    { name: "MissingScore" },
    "NotAnObject",
    { name: "Sara", score: 90 }
]);

const parsedUnknown: unknown = JSON.parse(rawJsonString);

const validStudents: Student[] = Array.isArray(parsedUnknown)
    ? parsedUnknown.filter(isStudent)
    : [];

console.log("Valid count:", validStudents.length);
console.log("Names:", validStudents.map(s => s.name).join(", "));


interface ProductItem {
    id: number;
    title: string;
}

function isProductItem(value: unknown): value is ProductItem {
    return (
        typeof value === "object" &&
        value !== null &&
        "id" in value &&
        typeof value.id === "number" &&
        "title" in value &&
        typeof value.title === "string"
    );
}


// 'as Student' trusts the type.
// isStudent() checks the data at runtime.