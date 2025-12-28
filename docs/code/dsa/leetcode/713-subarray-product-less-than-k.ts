/**
 * 713. 乘积小于 K 的子数组
 * https://leetcode.cn/problems/subarray-product-less-than-k/
 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let left = 0;
    let res = 0;
    let product = 1;
    if (k <= 1) return 0;
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
        while (product >= k) {
            product /= nums[left];
            left++;
        }
        if (product < k) {
            res += i - left + 1;
        }
    }
    return res;
}