/* exported reverseWord */
// define a new function: reverseWord with 1 parameter: word
// convert word to an array
// loop through the array backwards
// convert the array back to a string
function reverseWord(word) {
  var result = '';
  for (var i = word.length - 1; i >= 0; i--) {
    result += word[i];
  } return result;
}
// define a new function: reverseWord with 1 parameter: word
// assign and empty string to a new variable: result
// use a for loop to loop backwards through word
// in the code block, add word at index i to result and assign the result of this expression to result
// return the result variable
