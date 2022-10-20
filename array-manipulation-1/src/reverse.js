/* exported reverse */
// define a new function named reverse with 1 parameter: array
// assign an empty array to a new variable: result
// use a for loop that: assigns the length of the array to the variable i,
// checks that i is greater than 0, decrements i in the final expression, and
// pushes the item at index i of the array into the result array
// return the result array
function reverse(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  } return result;
}
// define a new function named reverse with 1 parameter: array
// assign an empty array to a new variable: result
// use a for loop that: assigns the length of the array - 1 to the variable i,
// checks that i is greater than or equal to 0, decrements i in the final expression,
// and pushes the item at index i of the array into the result array
// return the result array
