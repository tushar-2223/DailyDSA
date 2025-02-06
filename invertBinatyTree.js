function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

var invertTree = function(root) {
    if (root == null) return null;
    
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    
    root.left = right;
    root.right = left;
    
    return root;
};

let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);

console.log(invertTree(tree));