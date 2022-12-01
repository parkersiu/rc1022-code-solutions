/* exported union */
function union(first, second) {
  var array1 = [];
  for (var i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      array1.push(second[i]);
    }
  } return first.concat(array1);
}
