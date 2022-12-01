/* exported difference */
function difference(first, second) {
  var array1 = [];
  var array2 = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      array1.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      array2.push(second[j]);
    }
  } return array1.concat(array2);
}
