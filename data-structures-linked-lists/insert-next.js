/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const insertNode = new LinkedList(value);
  insertNode.next = list.next;
  list.next = insertNode;
}
