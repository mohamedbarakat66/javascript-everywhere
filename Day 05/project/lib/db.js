import { delay } from "./async-utils.js";

export default async function getAttendance(id) {
    const randomDelay = Math.floor(Math.random() * 600) + 200;
    await delay(randomDelay);

    if (Math.random() < 0.2) {
        throw new Error(`Failed to fetch attendance for ID: ${id}`);
    }
    
    
    return { id, status: "Present" };

}