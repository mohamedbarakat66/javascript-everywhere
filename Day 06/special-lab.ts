
try {
    let riskyValue: any = "Hello";
    riskyValue.nonExistentMethod();
} catch (error) {
    console.log("Caught runtime error with any");
}

// unknown requires type checking.
let safeValue: unknown = "TypeScript";

if (typeof safeValue === "string") {
    console.log(safeValue.toUpperCase());
}

// void means no useful return value.
function logInfo(msg: string): void {
    console.log(msg);
}

// never means the function never returns normally.
function throwFatal(err: string): never {
    throw new Error(err);
}

try {
    throwFatal("Critical failure");
} catch (e) {
    console.log("Handled never function exception");
}

// Error: Parameter implicitly has an any type.
// function badParam(param) { return param; }


 
type StatusType = "success" | "pending" | "failed";
type CodeType = 200 | 400 | 500;

const currentStatus: StatusType = "success";
const statusCode: CodeType = 200;

// Error: Invalid literal.
// const badStatus: StatusType = "loading";


type IDInput = number | string;

function printID(id: IDInput) {
    console.log(`ID is: ${id}`);
}

printID(101);
printID("USER-99");

type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;

const myStaff: Staff = {
    name: "Mohamed",
    employeeId: 45
};

// Error: employeeId is missing.
// const incompleteStaff: Staff = { name: "Ali" };



// as const creates readonly literal values.
const UserRoles = {
    ADMIN: "admin",
    USER: "user",
    GUEST: "guest"
} as const;

type RoleUnion = typeof UserRoles[keyof typeof UserRoles];

function authorize(role: RoleUnion) {
    console.log(`Authorized as: ${role}`);
}

authorize(UserRoles.ADMIN);
authorize("user");

// Error: Invalid role.
// authorize("superadmin");

// RoleUnion = "admin" | "user" | "guest"


type UserData = {
    username: string;
    age: number;
};

const rawData = '{"username": "mohamed"}';
const parsedUser = JSON.parse(rawData) as UserData;

console.log(parsedUser.age);

// as const makes properties readonly.
const config = {
    endpoint: "/api/v1",
    timeout: 5000
} as const;

// Error: Cannot change a readonly property.
// config.timeout = 3000;

// const maybeElement = document.getElementById("non-existent");

// Non-null assertion may crash if the value is null.
// const badLen = maybeElement!.id.length;

// Check before accessing the element.
const maybeElement = null;
const safeLen = maybeElement ? maybeElement : "default";

// Use as only when the type is known.
// Validate external data at runtime.