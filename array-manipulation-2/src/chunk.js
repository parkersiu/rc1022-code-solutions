/* exported chunk */
function chunk(array, size) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  } return result;
}
