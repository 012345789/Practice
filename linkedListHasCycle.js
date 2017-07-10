class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

function hasCycle(head) {
  let s = head;
  let f = head;
  while (true) {
    if (f.next === null || f.next.next === null) {
      return null;
    }
    s = s.next;
    f = f.next.next;
    if (s === f) {
      return findCycleStart(head);
    }
  }
}

function findCycleStart(head) {
  let set = new Set();
  while (!set.has(head)) {
    set.add(head);
    head = head.next;
  }
  return head;
}

let l1 = new Node(2, new Node(4, new Node(6, new Node(8))));
let l2 = new Node(1);
let l2b = new Node(3);
let l2c = new Node(5);
let l2d = new Node(7);

l2.next = l2b;
l2b.next = l2c;
l2c.next = l2d;
l2d.next = l2c;

console.log('l1 cycle: ', hasCycle(l1));
console.log('l2 cycle: ', hasCycle(l2));
