/* exported maxValue */

function maxValue(stack) {
  let largest = stack.peek();
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    if (stack.peek() > largest) {
      largest = stack.peek();
    }
    stack.pop();
  } return largest;
}
