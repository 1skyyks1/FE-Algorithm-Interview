/**
 * 2302. 统计得分小于 K 的子数组数目
 * https://leetcode.cn/problems/count-subarrays-with-score-less-than-k/
 */

function countSubarrays(nums: number[], k: number): number {
    let left = 0;
    let res = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum * (i - left + 1) >= k) {
            sum -= nums[left];
            left++;
        }
        if (sum * (i - left + 1) < k) {
            res += i - left + 1;
        }
    }
    return res;
}