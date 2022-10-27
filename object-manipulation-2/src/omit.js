/* exported omit */
// define a new function: omit with 2 parameters: source and keys
// in the code block, assign an empty object to a new variable: result
// use a for loop to loop through the keys array and, in the code block:
// use an if statement to check if the key at i exists in the source object
// if false, add the key and it's value into the result object
// return the result object
function omit(source, keys) {
  var result = {};
  Object.assign(result, source);
  for (var i = 0; i < keys.length; i++) {
    delete result[keys[i]];
  } return result;
}
// define a new function: omit with 2 parameters: source and keys
// in the code block, assign an empty object to a new variable: result
// call the assign method of the object with 2 arguments, result and source
// use a for loop to loop through the keys array
// during each loop, remove the key at index i from the result object
// return the result object
