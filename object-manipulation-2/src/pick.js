/* exported pick */
function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in source === true) {
      if (source[keys[i]] !== undefined) {
        result[keys[i]] = source[keys[i]];
      }
    }
  } return result;
}
