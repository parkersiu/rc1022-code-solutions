/* exported reverseWords */
function reverseWords(string) {
  var array = string.split(/(\s+)/);
  var reversed = '';
  for (var i = 0; i < array.length; i++) {
    reversed += array[i].split('').reverse().join('');
  }
  return reversed;
}
