/* exported getTail */

function getTail(list) {
  let nextNode = list;
  let value = list.data;
  while (nextNode !== null) {
    value = nextNode.data;
    nextNode = nextNode.next;
  } return value;
}
