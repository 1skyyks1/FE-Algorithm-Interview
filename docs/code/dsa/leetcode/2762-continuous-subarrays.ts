/**
 * 2762. 不间断子数组
 * https://leetcode.cn/problems/continuous-subarrays/
 */

function continuousSubarrays(nums: number[]): number {
    let left = 0;
    let res = 0;
    const maxQ: number[] = [];
    const minQ: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        while (maxQ.length && maxQ[maxQ.length - 1] < x) {
            maxQ.pop();
        }
        maxQ.push(x);
        while (minQ.length && minQ[minQ.length - 1] > x) {
            minQ.pop();
        }
        minQ.push(x);
        while (maxQ[0] - minQ[0] > 2) {
            if (nums[left] === maxQ[0]) maxQ.shift();
            if (nums[left] === minQ[0]) minQ.shift();
            left++;
        }
        res += i - left + 1;
    }
    return res;
}