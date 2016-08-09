/*
 * Complete the function below.
 */
function treeNode(data, left, right) {
    var node = this;
    node.data = data;
    node.left = left;
    node.right = right;
}

var counter = 0;
var tree;

function createBST(keys) {
    counter = 0;
    for (var i=0; i < keys.length; i++) {
        if (!tree) {
            tree = new treeNode(keys[i]);
        } else {
            insert(tree, keys[i]);
        }
        console.log(counter);
    }
}

function insert(root, key) {
    counter++;
    if (key < root.data) {
        if (!root.left) {
            root.left = new treeNode(key);
        } else {
            insert(root.left, key);
        }
    } else {
        if (!root.right) {
            root.right = new treeNode(key);
        } else {
            insert(root.right, key);
        }
    }
}
