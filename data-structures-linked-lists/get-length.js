/* exported getLength */

function getLength(list) {
  let count = 1;
  let nextNode = list.next;
  while (nextNode !== null) {
    count++;
    nextNode = nextNode.next;
  } return count;
}
