/* exported dropRight */
// define a new function: dropRight with 2 parameters: array and count
// assign an empty array to a new variable: result
// use a for loop to loop through the array until the length of the array minus count
// in the code block, use an if statement with the condition that the length of the array does not equal 0
// if true, push the item at index i of the array into the result array
// if false, return the original array
function dropRight(array, count) {
  var result = [];
  for (var i = 0; i < array.length - count; i++) {
    if (array.length !== 0) {
      result.push(array[i]);
    } else return array;
  } return result;
}// define a new function: dropRight with 2 parameters: array and count
// assign an empty array to a new variable: result
// use a for loop to loop through the array until the length of the array minus count
// in the code block, use an if statement with the condition that the lenght of the array
// is strictly inequal to 0
// if true, push the item at index i of the array into the result array
// if false, return the original array
// return the result array
