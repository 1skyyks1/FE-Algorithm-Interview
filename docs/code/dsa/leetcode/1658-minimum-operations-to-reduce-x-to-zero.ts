/**
 * 1658. 将 x 减到 0 的最小操作数
 * https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/
 */

function minOperations(nums: number[], x: number): number {
    let left = 0;
    let res = -1;
    let sum = 0;
    const total = nums.reduce((a, b) => a + b, 0);
    const target = total - x;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        while (sum > target) {
            sum -= nums[left];
            left++;
        }
        if (sum === target) {
            res = Math.max(res, i - left + 1);
        }
    }
    return res === -1 ? -1 : len - res;
}