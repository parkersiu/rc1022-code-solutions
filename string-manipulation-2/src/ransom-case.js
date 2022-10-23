/* exported ransomCase */
function ransomCase(string) {
  var result = '';
  var i = 0;
  while (i < string.length) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else result += string[i].toUpperCase();
    i++;
  } return result;
}
