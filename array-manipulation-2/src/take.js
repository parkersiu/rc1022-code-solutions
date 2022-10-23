/* exported take */
// define a new function: take with 2 parameters: array and count
// assign an empty array to a new variable result
// use a for loop to loop through the array as many times equal to the count argument
// in the code block, push the item at index i of the array to the result array
// return the result array
function take(array, count) {
  var result = [];
  for (var i = 0; i < count; i++) {
    if (array.length !== 0) {
      result.push(array[i]);
    }
  } return result;
}
// define a new function: take with 2 parameters: array and count
// assign an empty array to a new variable: result
// use a for loop to loop through the array as many times equal to the count argument
// in the code block, use an if statement to determine if the array is empty
// if empty, do nothing
// if the array is not empty, push the item at index i of the array into the result array
// return the result array
