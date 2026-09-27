

const studentsDB = [
  { id: 1, name: "Ahmed", courseId: 101 },
  { id: 2, name: "Sara", courseId: 102 }
];

const coursesDB = [
  { id: 101, title: "JavaScript Everywhere", roomId: 201 },
  { id: 102, title: "Node.js Advanced", roomId: 202 }
];

const roomsDB = [
  { id: 201, roomName: "Lab 1", teacherId: 301 },
  { id: 202, roomName: "Lab 2", teacherId: 302 }
];

const teachersDB = [
  { id: 301, teacherName: "Mostafa Saqly" },
  { id: 302, teacherName: "Dr. Ahmed" }
];


function getStudent(id, callback) {
  setTimeout(() => {
    const student = studentsDB.find(s => s.id === id);

    if (!student) {
      return callback(new Error("Student not found"));
    }

    callback(null, student);
  }, 300);
}


function getCourse(id, callback) {
  setTimeout(() => {
    const course = coursesDB.find(c => c.id === id);

    if (!course) {
      return callback(new Error("Course not found"));
    }

    callback(null, course);
  }, 500);
}


function getRoom(id, callback) {
  setTimeout(() => {
    const room = roomsDB.find(r => r.id === id);

    if (!room) {
      return callback(new Error("Room not found"));
    }

    callback(null, room);
  }, 200);
}


function getTeacher(id, callback) {
  setTimeout(() => {
    const teacher = teachersDB.find(t => t.id === id);

    if (!teacher) {
      return callback(new Error("Teacher not found"));
    }

    callback(null, teacher);
  }, 400);
}


module.exports = {
  getStudent,
  getCourse,
  getRoom,
  getTeacher
};