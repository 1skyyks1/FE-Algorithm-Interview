/**
 * 3634. 使数组平衡的最少移除数目
 * https://leetcode.cn/problems/minimum-removals-to-balance-array/
 */

function minRemoval(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let left = 0;
    let res = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        while (nums[i] > k * nums[left]) {
            left++;
        }
        res = Math.max(res, i - left + 1);
    }
    return len - res;
}