/**
 * 2841. 几乎唯一子数组的最大和
 * https://leetcode.cn/problems/maximum-sum-of-almost-unique-subarray/
 */

function maxSum(nums: number[], m: number, k: number): number {
    let res = 0;
    let sum = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const right = nums[i];
        map.set(right, (map.get(right) || 0) + 1);
        sum += right;
        if (i - k >= 0) {
            const left = nums[i - k];
            const count = map.get(left);
            if (count) {
                map.set(left, count - 1);
                if (count === 1) {
                    map.delete(left);
                }
            }
            sum -= left;
        }
        if (i - k + 1 >= 0 && map.size >= m) {
            res = Math.max(res, sum);
        }
    }
    return res;
}