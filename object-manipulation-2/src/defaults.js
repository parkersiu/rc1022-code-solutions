/* exported defaults */
// define a new function: default with 2 parameters: target and source
// in the code block, use a for in loop to loop through the keys in the source object
// nest an if statement in the loop, to check if the property in source exists in target
// if the key does not exist in target, add it
function defaults(target, source) {
  for (var key in source) {
    if (key in target === false) {
      target[key] = source[key];
    }
  }
}
// define a new function: default with 2 parameters: target and source
// in the code block, use a for in loop to loop through the keys in source object
// nest an if statement in the loop with the condition: if the target object does not
// have the key property, add the key value pair to target
