

const {
  getStudent,
  getCourse,
  getRoom,
  getTeacher
} = require("./fake-db.js");


getStudent(1, (err, student) => {

  if (err) {
    console.log("Error:", err.message);
    return;
  }

  getCourse(student.courseId, (err, course) => {

    if (err) {
      console.log("Error:", err.message);
      return;
    }

    getRoom(course.roomId, (err, room) => {

      if (err) {
        console.log("Error:", err.message);
        return;
      }

      getTeacher(room.teacherId, (err, teacher) => {

        if (err) {
          console.log("Error:", err.message);
          return;
        }

        console.log(
          `${student.name} → ${course.title} → ${room.roomName} → ${teacher.teacherName}`
        );
      });

    });

  });

});