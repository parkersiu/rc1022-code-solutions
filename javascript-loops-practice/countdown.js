/* exported countdown */
function countdown(number) {
  var array = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    array.push(currentNumber);
    currentNumber--;
  } return array;
}
