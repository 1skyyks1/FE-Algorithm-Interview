/**
 * 2799. 统计完全子数组的数目
 * https://leetcode.cn/problems/count-complete-subarrays-in-an-array/
 */

function countCompleteSubarrays(nums: number[]): number {
    let left = 0;
    let res = 0;
    const map = new Map<number, number>();
    const size = new Set(nums).size;
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) +1);
        while(map.size === size){
            const c = nums[left];
            map.get(c) === 1 ? map.delete(c):map.set(c, map.get(c)! - 1);
            left++;
        }
        res += left;
    }
    return res;
}