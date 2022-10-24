/* exported truncate */
function truncate(length, string) {
  if (string.length > length) {
    var result = string.substring(0, length);
    return result + '...';
  } else {
    return string + '...';
  }
}
