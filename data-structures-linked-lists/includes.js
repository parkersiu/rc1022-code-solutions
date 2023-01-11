/* exported includes */

function includes(list, value) {
  let nextNode = list;
  let result = false;
  while (nextNode !== null) {
    if (nextNode.data === value) {
      result = true;
    }
    nextNode = nextNode.next;
  } return result;
}
