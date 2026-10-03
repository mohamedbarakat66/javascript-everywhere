export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export default function calculate(type, a, b) {
    if (type === 'add') return add(a, b);
    return subtract(a, b);
}