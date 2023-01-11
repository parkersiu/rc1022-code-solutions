/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let nextNode = list;
  let tail = list.data;
  const newNode = new LinkedList(value);
  while (nextNode !== null) {
    tail = nextNode;
    nextNode = nextNode.next;
  } tail.next = newNode;
}
