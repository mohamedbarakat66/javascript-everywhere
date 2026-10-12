export type UserRole = "admin" | "customer" | "guest";
export type OrderStatus = "pending" | "completed" | "cancelled";

export interface BaseRecord {
    readonly id: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface User extends BaseRecord {
    name: string;
    email: string;
    role: UserRole;
}

export interface Product extends BaseRecord {
    title: string;
    price: number;
    stock: number;
}

export interface Order extends BaseRecord {
    userId: number;
    totalAmount: number;
    status: OrderStatus;
}

export interface Category extends BaseRecord {
    name: string;
    description?: string;
}

export type UserWithProfile = User & {
    bio: string;
    website: string;
};