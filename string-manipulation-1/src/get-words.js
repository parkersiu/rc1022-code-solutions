/* exported getWords */
function getWords(string) {
  var result;
  if (string.length !== 0) {
    result = string.split(' ');
    return result;
  } else return [];
}
