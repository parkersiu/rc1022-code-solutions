/* exported isPalindromic */
function isPalindromic(string) {
  var convertedString = string.replaceAll(' ', '');
  var reverse = convertedString.split('').reverse().join('');
  return reverse === convertedString;
}
