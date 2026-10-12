type LetterGrade = "A" | "B" | "C" | "F";

function getLetterGrade(score: number): LetterGrade {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "F";
}

function evaluateGrade(grade: LetterGrade): string {
    switch (grade) {
        case "A": return "Excellent";
        case "B": return "Good";
        case "C": return "Fair";
        case "F": return "Fail";
    }
}


function parseScore(
    input: number | string | null | undefined
): number | null {
    if (input == null) return null;
    if (typeof input === "number") return input;

    return parseInt(input, 10) || 0;
}


function processItems(items: string | string[]): string[] {
    if (Array.isArray(items)) {
        return items.map(i => i.trim());
    }

    return [items.trim()];
}


function handleError(err: Error | string): string {
    if (err instanceof Error) {
        return err.message;
    }

    return err;
}


type Named = { name: string };
type Titled = { title: string };

function printEntity(entity: Named | Titled): string {
    if ("name" in entity) {
        return entity.name;
    }

    return entity.title;
}




const users = [
    { id: 1, name: "Mohamed" },
    { id: 2, name: "Ali" }
];

const foundUser = users.find(u => u.id === 1);

if (foundUser) {
    console.log(foundUser.name);
}

const userNameOptional = users.find(u => u.id === 99)?.name;

const foundUserFallback = users.find(u => u.id === 99)
    ?? { id: 0, name: "Guest" };

const firstUser = users[0];
const safeUserName = firstUser ? firstUser.name : "Unknown";
