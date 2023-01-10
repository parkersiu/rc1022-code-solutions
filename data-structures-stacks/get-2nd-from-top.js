/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() !== undefined) {
    const first = stack.pop();
    const second = stack.pop();
    if (second !== undefined) {
      stack.push(second);
      stack.push(first);
      return second;
    } else {
      stack.push(first);
      return undefined;
    }
  }
}
