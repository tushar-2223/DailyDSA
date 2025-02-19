
// //  * Definition for a binary tree node.
//   function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//  }

const heightOfBinaryTree = (root) => {
    if (!root) return 0;
    return Math.max(heightOfBinaryTree(root.left), heightOfBinaryTree(root.right)) + 1;   
}
