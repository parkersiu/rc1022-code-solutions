/* exported flatten */
// define a new function: flatten with 1 argument: array
// assign an empty array to a variable: result
// loop through the array until the length of the array
// in the code block, assign the array at index i to a new variable: subArray
// nest another for loop that loops through the subArray until the lenght of the subArray
// push each item into the result array
// return the result array

function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var subArray = array[i];
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else {
      for (var j = 0; j < subArray.length; j++) {
        result.push(subArray[j]);
      }
    }
  } return result;
}
// define a new function: flatten with 1 parameter: array
// assign an empty array to a new variable: result
// use a for loop to loop through the array until the length of the array
// in the code block, assign the array at index i to a new variagle: subArray
// use an if statement with the condition that the array at index i is not an array
// if true, push the item and index i of the array to the result array
// if false, use a second loop to loop through the subArray until the length of the subArray
// in the code block, push the item at index j of the subArray to the result array
