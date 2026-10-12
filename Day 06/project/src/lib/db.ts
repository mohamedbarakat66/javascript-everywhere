export async function getAttendance(id: number): Promise<number> {
    if (id === 999) {
        throw new Error(`Attendance record failed for student ID ${id}`);
    }

    return Math.floor(Math.random() * 20) + 80;
}