/* exported isVowel */
// declare a new function named isVowel with 1 parameter: char
// compare the value of char to vowels
function isVowel(char) {
  var array = ['a', 'e', 'i', 'o', 'u', 'y'];
  for (var i = 0; i < array.length; i++) {
    if (char === array[i].toLowerCase() || char === array[i].toUpperCase()) {
      return true;
    }
  } return false;
}
// declare a new function named isVowel with 1 parameter: char
// assign an array of vowels to a new variable: array
// use a for loop to loop through array until it reaches the end
// in the code block, use an if statement to compare char to the toLowerCase method of the array
// at index i OR compare char to the toUpperCase method of the array at index i
// if the statement is true, return true and if false, return false
