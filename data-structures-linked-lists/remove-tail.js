/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return;
  }
  let nextNode = list;
  while (nextNode !== null) {
    if (nextNode.next.next === null) {
      nextNode.next = null;
      return;
    }
    nextNode = nextNode.next;
  }
}
