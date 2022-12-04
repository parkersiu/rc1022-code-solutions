/* exported intersection */
function intersection(first, second) {
  var array1 = [];
  var array2 = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      array1.push(first[i]);
    }
  } return array1.concat(array2);
}
