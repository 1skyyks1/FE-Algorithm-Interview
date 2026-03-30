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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    function deepSum(node, sum) {
        const newSum = sum + node.val;
        if (!node.left && !node.right && newSum === targetSum) return true;
        let left = false, right = false;
        if (node.left) {
            left = deepSum(node.left, newSum);
        }
        if (node.right) {
            right = deepSum(node.right, newSum);
        }
        return left || right;
    }
    return deepSum(root, 0);
};

var hasPathSum2 = function (root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right && root.val === targetSum) return true;
    return hasPathSum2(root.left, targetSum - root.val) || hasPathSum2(root.right, targetSum - root.val)
};