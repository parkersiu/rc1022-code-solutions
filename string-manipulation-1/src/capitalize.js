/* exported capitalize */
function capitalize(word) {
  var array = word.split('');
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      result.push(array[i].toLowerCase());
    } else result.push(array[i].toUpperCase());
  } return result.join('');
}
