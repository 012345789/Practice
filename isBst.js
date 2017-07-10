function isBst(root, min, max) {
	if (root == null)
		return true;

	if (min == null) {
		min = Number.MIN_VALUE;
	}

	if (max == null) {
		max = Number.MAX_VALUE;
	}

	if (root.data < min || root.data > max)
		return false;

	// if looking left, keep track of max (all elements must be less than this)
	// if looking rigt, keep track of min (all elements must be greater than this)
	if (isBst(root.left, min, root.data) && isBst(root.right, root.data, max))
		return true;
	else {
		return false;
	}
}

function Node(data, left, right) {
  var node = this;
  node.data = data;
  node.left = left;
  node.right = right;
}

var root = new Node(6, new Node(4, new Node(2, new Node(1)), new Node(5)), new Node(9, new Node(8, new Node(7)), new Node(11)));
/*				6
			4		9
		2	  3   8    11
	   1 		 7  		*/

console.log("isBst: ", isBst(root));

// 6-28-17
function isBST2(root) {
  return isBSTRec(root, Number.MIN_VALUE, Number.MAX_VALUE);

  function isBSTRec(root, lb, ub) {
    if (root == null) {
      return true;
    }
    return root.data >= lb && root.data <= ub
      && isBSTRec(root.left, lb, root.data)
      && isBSTRec(root.right, root.data, ub);
  }
}

var root2 = new Node(6, new Node(4, new Node(2, new Node(1)), new Node(5)), new Node(9, new Node(8, new Node(7)), new Node(11)));
console.log(isBST2(root2))
