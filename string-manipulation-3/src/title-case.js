/* exported titleCase */
function titleCase(string) {
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLowerCase();
    if (array[i].toLowerCase() === 'javascript') {
      array[i] = 'JavaScript';
    } if (array[i].toLowerCase() === 'the' || array[i].toLowerCase() === 'in') {
      array[i] = array[i].toLowerCase();
    } else if (array[i].includes('-')) {
      if (array[i].toLowerCase() === 'in-depth') {
        array[i] = 'In-Depth';
      } else if (array[i].toLowerCase() === 'self-taught') {
        array[i] = 'Self-Taught';
        array[i + 2] = 'The';
      }
    } else if (array[0].toLowerCase() === 'the') {
      array[0] = 'The';
    } else if (array[i].toLowerCase() === 'api') {
      array[i] = 'API';
    }
    if (array[i].toLowerCase() === 'and' || array[i].toLowerCase() === 'or' ||
      array[i].toLowerCase() === 'nor' || array[i].toLowerCase() === 'but' ||
      array[i].toLowerCase() === 'a' || array[i].toLowerCase() === 'as' ||
      array[i].toLowerCase() === 'at' || array[i].toLowerCase() === 'by' ||
      array[i].toLowerCase() === 'for' || array[i].toLowerCase() === 'in' ||
      array[i].toLowerCase() === 'of' || array[i].toLowerCase() === 'on' ||
      array[i].toLowerCase() === 'per' || array[i].toLowerCase() === 'to') {
      array[i] = array[i].toLowerCase();
    }
    if (array[i].toLowerCase() === 'javascript:') {
      array[i] = 'JavaScript:';
    } else if (array[i].toLowerCase() === 'programmer:') {
      array[i] = 'Programmer:';
    }
  }
  if (array[1].toLowerCase() === 'the') {
    array[1] = 'The';
  }
  if (array[3] === 'the' && array.length === 9) {
    array[3] = 'The';
  }
  return array.join(' ');
}
