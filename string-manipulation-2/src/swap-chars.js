/* exported swapChars */
// define a new function: swapChars with 3 parameters: firstIndex, secondIndex, and string
// return the replace method of the string with 2 arguments: firstIndex and secondIndex
function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  array[firstIndex] = string[secondIndex];
  array[secondIndex] = string[firstIndex];
  return array.join('');
}
// define a new function: swapChars with 3 parameters: firstIndex, secondIndex, and string
// use the split method to convert the string to an array and assign the result to a new variable: array
// assign the string at index secondIndex to the array at index firstIndex
// assign the string at index firstIndex to the array at index secondIndex
// return the array as a string by using the join method of the array
