/**
 * 1493. 删掉一个元素以后全为 1 的最长子数组
 * https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/
 */

function longestSubarray(nums: number[]): number {
    let z = -1; // 最近0位置
    let left = 0; // 左指针
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (z >= left && z !== -1) {
                left = z + 1;
            }
            z = i;
        }
        res = Math.max(res, i - left + 1);
    }
    return res - 1;
}