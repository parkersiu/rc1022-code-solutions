/* exported capitalizeWords */
// define a new function: capitalizeWords with 1 parameter: string
// assign an empty string to a new variable: result
// convert the string to an array, with each word at a new index, and assign it to a new variable: array
// use a for loop to loop through the array until the length of the array
// in the code block, convert the first letter at each index i of the array to upper case
// and assign the result to the result variable
function capitalizeWords(string) {
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLowerCase();
  } return array.join(' ');
}
// define a new function: capitalizeWords with 1 parameter: string
// use the split method of the string to create an array with each index containing the next word in the string
// and assign it to a new variable: array
// use a for loop to loop through the array until the length of the array
// in the code block, at index i of the array and index 0 of the item, use the to upper case method to convert the letter
// concatenate this with the lower case method and substring 1 of the item at index i of the array
// assign the result of the expression back to the item at index i of the array
// return the array as a string using the join method
