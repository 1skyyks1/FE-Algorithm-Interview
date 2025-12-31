/**
 * 2962. 统计最大元素出现至少 K 次的子数组
 * https://leetcode.cn/problems/count-subarrays-where-max-element-appears-at-least-k-times/
 */

function countSubarrays(nums: number[], k: number): number {
    const max = Math.max(...nums);
    let left = 0;
    let cnt = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === max){
            cnt++;
        }
        while(cnt === k){
            if(nums[left] === max){
                cnt--;
            }
            left++;
        }
        res += left;
    }
    return res;
}