/* exported drop */
function drop(array, count) {
  var result = [];
  for (var i = count; i < array.length; i++) {
    if (array.length !== 0) {
      result.push(array[i]);
    }
  } return result;
}
