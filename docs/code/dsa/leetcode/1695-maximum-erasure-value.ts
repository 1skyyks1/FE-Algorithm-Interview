/**
 * 1695. 删除子数组的最大得分
 * https://leetcode.cn/problems/maximum-erasure-value/
 */

function maximumUniqueSubarray(nums: number[]): number {
    let res = 0;
    let left = 0;
    let sum = 0;
    const set = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        while (set.has(num)) {
            set.delete(nums[left]);
            sum -= nums[left];
            left++;
        }
        set.add(num);
        sum += num;
        res = Math.max(res, sum)
    }
    return res;
}