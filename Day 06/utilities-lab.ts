import type { User } from "./db-types";


type NewUser = Omit<User, "id">;

let nextId = 1;

function addUser(input: NewUser): User {
    return {
        id: nextId++,
        ...input,
        createdAt: new Date().toISOString()
    };
}

// Partial
type UserUpdate = Partial<Omit<User, "id">>;

function updateUser(existingUser: User, updates: UserUpdate): User {
    return {
        ...existingUser,
        ...updates
    };
}

type PublicUserCard = Pick<User, "id" | "name" | "role">;

function makePublicCard(user: User): PublicUserCard {
    return {
        id: user.id,
        name: user.name,
        role: user.role
    };
}

const readonlyUser: Readonly<User> = {
    id: 1,
    name: "Mohamed",
    email: "mohamed@example.com",
    role: "admin"
};

type LetterGrade = "A" | "B" | "C" | "D" | "F";

const gradeCounts: Record<LetterGrade, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
};

async function fetchUserData() {
    return { id: 10, username: "dev_mohamed" };
}

type FetchedUser = Awaited<ReturnType<typeof fetchUserData>>;

// As const
const ROLES = ["admin", "customer", "guest"] as const;
type DerivedRole = (typeof ROLES)[number];



async function main() {
    const user = addUser({
        name: "Ali",
        email: "ali@example.com",
        role: "customer"
    });

    console.log("Created user:", user);
    console.log("Public card:", makePublicCard(user));
    console.log("Grade counts initialized:", gradeCounts);
}

main();
