/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    for (var key in students[i]) {
      names.push(students[i][key]);
    }
  } return names;
}
