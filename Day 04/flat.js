
const {
  getStudent,
  getCourse,
  getRoom,
  getTeacher
} = require("./fake-db.js");


function buildReport(id, done) {

  getStudent(id, (err, student) => {
    if (err) return done(err);

    getCourse(student.courseId, (err, course) => {
      if (err) return done(err);

      getRoom(course.roomId, (err, room) => {
        if (err) return done(err);

        getTeacher(room.teacherId, (err, teacher) => {
          if (err) return done(err);

          const report = {
            ...student,
            courseTitle: course.title,
            roomName: room.roomName,
            teacherName: teacher.teacherName
          };

          done(null, report);
        });
      });
    });
  });
}


buildReport(1, (err, result) => {

  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log("Success:", result);
});


buildReport(99, (err, result) => {

  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log("Success:", result);
});


/*
Async operations may finish at different times.
*/