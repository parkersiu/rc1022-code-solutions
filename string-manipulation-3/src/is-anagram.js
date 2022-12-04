/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var result = false;
  if (firstString.length !== secondString.length) {
    result = false;
  }
  var first = firstString.replaceAll(' ', '').split('').sort().join('');
  var second = secondString.replaceAll(' ', '').split('').sort().join('');
  if (first === second) {
    result = true;
  } return result;
}
