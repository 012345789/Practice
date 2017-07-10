function ListNode(val) {
   this.val = val;
   this.next = null;
}

function mergeSortedLinkedLists(l1, l2) {
  let dummy = new ListNode('');
  let p1 = l1;
  let p2 = l2;
  let curr = dummy;

  while (p1 && p2) {
    if (p1.val <= p2.val) {
      curr.next = p1;
      p1 = p1.next;
    } else {
      curr.next = p2
      p2 = p2.next;
    }
    curr = curr.next;
  }

  if (p1) {
    curr.next = p1;
  }
  if (p2) {
    curr.next = p2;
  }

  return dummy.next;
}
