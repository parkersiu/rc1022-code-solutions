/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const peek = queue.peek();
    const first = queue.dequeue();
    const second = queue.dequeue();
    if (first < second || first === second) {
      queue.enqueue(second);
      return first;
    }
    if (first > second) {
      queue.enqueue(first);
      return second;
    }
    return peek;
  }
  return queue.dequeue();
}
