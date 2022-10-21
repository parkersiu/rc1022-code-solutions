/* exported tail */
// define a function named tail with 1 parameter: array
// create a new variable, result and assign it an empty array
// using a for loop, start at index 1 and loop through the array
// during each loop, use the push method of the array to assign the value at index i to the result variable
// return the result variable
function tail(array) {
  var result = [];
  for (var i = 1; i < array.length; i++) {
    result.push(array[i]);
  } return result;
}
// define a function named tail with 1 parameter: array
// assign an empty array to a new variable: result
// use a for loop that: assigns 1 to a new variable named i in its initialization expression,
// checks that i is less than the length of the array, and increments i in its final expression
// in the code block, push the value of index i from the array into the result array
// return the result array
