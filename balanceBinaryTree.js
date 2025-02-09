/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    const getHeight = (root) => {
        if (!root) return 0;
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    }

    if (!root) return true;
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    // compare the height of the left and right node is not greater than 1
    return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};