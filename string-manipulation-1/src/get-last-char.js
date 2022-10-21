/* exported getLastChar */
// define a new function named getLastChar with 1 parameter: string
// use the split method of the string object to create an array from string and assign it to the variable result
// return the variable result at index result.length

function getLastChar(string) {
  var result = string.split('');
  return result[result.length - 1];
}

// define a new function named getLastChar with 1 parameter: string
// call the split method of the string object with 1 argument ('') and assign the result to the variable result
// return the result array at the index: length of the array - 1
