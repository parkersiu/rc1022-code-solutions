/* exported takeRight */
function takeRight(array, count) {
  var result = [];
  if (count < array.length) {
    for (var i = array.length - count; i < array.length; i++) {
      result.push(array[i]);
    } return result;
  } return array;
}
