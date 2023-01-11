/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const first = list.data;
    const second = list.next.data;
    list.next.data = first;
    list.data = second;
  } return list;
}
