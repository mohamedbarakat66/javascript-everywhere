import type { User, Product, Order, Category } from "./db-types";

const usersTable: Record<number, User> = {
    1: { id: 1, name: "Mohamed", email: "mohamed@example.com", role: "admin", createdAt: "2026-10-01" },
    2: { id: 2, name: "Ali", email: "ali@example.com", role: "customer" }
};

const productsTable: Record<number, Product> = {
    101: { id: 101, title: "TypeScript Guide", price: 29.99, stock: 50 },
    102: { id: 102, title: "JavaScript Handbook", price: 19.99, stock: 100 }
};

const ordersTable: Record<number, Order> = {
    1001: { id: 1001, userId: 1, totalAmount: 49.98, status: "completed" }
};

const categoriesTable: Record<number, Category> = {
    10: { id: 10, name: "Programming", description: "Books and courses" }
};


// Generic lookup function.
function lookup<T>(table: Record<number, T>, id: number): Promise<T> {
    return new Promise((resolve, reject) => {
        const item = table[id];

        if (item) {
            resolve(item);
        } else {
            reject(new Error(`Item with id ${id} not found.`));
        }
    });
}


async function getUser(id: number): Promise<User> {
    return lookup(usersTable, id);
}

async function getProduct(id: number): Promise<Product> {
    return lookup(productsTable, id);
}


interface ReportResult {
    reportId: number;
    userName: string;
    productTitle: string;
    generatedAt: string;
}

async function buildReport(id: number): Promise<ReportResult> {
    const order = await lookup(ordersTable, id);
    const user = await getUser(order.userId);
    const product = await getProduct(101);

    return {
        reportId: order.id,
        userName: user.name,
        productTitle: product.title,
        generatedAt: new Date().toISOString()
    };
}


function errorMessage(err: unknown): string {
    return err instanceof Error ? err.message : String(err);
}


async function main() {
    try {
        const report = await buildReport(1001);
        console.log("Report generated:", report);

        await getUser(999);
    } catch (err: unknown) {
        console.error("Caught expected error:", errorMessage(err));
    }
}

main();




// import type { User } from "./db-types";

// Error: Unknown property 'nam'.
// const badUser: User = {
//     id: 3,
//     nam: "Typo",
//     email: "typo@example.com",
//     role: "customer"
// };

// Error: Missing required property 'email'.
// const incompleteUser: User = {
//     id: 4,
//     name: "Ali",
//     role: "customer"
// };

// Error: Cannot change readonly id.
// const testUser = usersTable[1];
// testUser.id = 99;

// Use import type for types only.

// TypeScript catches type errors before runtime.
