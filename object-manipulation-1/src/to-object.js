/* exported toObject */
// define a new function: toObject with 1 parameter: keyValuePair
// push index 0 of the array into the object as a property
// push index 1 of the array into the object as a property
// return the object
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
// define a new function: toObject with 1 parameter: keyValuePair
// assign an empty object to a new variable
// using bracket notation, assign the item at index 0 of keyValuePair to a property in object
// assign the value of the property to the item at index 1 of keyValuePair
// return the object
