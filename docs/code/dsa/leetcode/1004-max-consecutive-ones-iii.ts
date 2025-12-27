/**
 * 1004. 最大连续1的个数 III
 * https://leetcode.cn/problems/max-consecutive-ones-iii/
 */

function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let res = 0;
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            cnt++;
        }
        while (cnt > k) {
            if (nums[left] === 0) {
                cnt--;
            }
            left++;
        }
        res = Math.max(res, i - left + 1);
    }
    return res;
}