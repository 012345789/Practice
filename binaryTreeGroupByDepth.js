function groupByDepth(tree) {
  let result = [];
  gbd(tree, 0);
  return result;

  function gbd(tree, depth) {
    if (tree == null) {
      return;
    }
    if (!result[depth]) {
      result[depth] = [tree.value];
    } else {
      result[depth].push(tree.value);
    }
    gbd(tree.left, depth + 1);
    gbd(tree.right, depth + 1);
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let t0 = new Node('0');
let t1a = new Node('1a');
let t1b = new Node('1b');
let t2a = new Node('2a');
let t2b = new Node('2b');
let t2c = new Node('2c');
let t2d = new Node('2d');
let t3c = new Node('3c');
let t3d = new Node('3d');
let t3g = new Node('3g');
let t4d = new Node('4d');

t3c.right = t4d;
t2d.left = t3g;
t2b.right = t3d;
t2b.left = t3c;
t1b.left = t2c;
t1b.right = t2d;
t1a.left = t2a;
t1a.right = t2b;
t0.left = t1a;
t0.right = t1b;

let res = groupByDepth(t0);
console.log(res);
