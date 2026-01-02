/**
 * 2537. 统计好子数组的数目
 * https://leetcode.cn/problems/count-the-number-of-good-subarrays/
 */

function countGood(nums: number[], k: number): number {
    let left = 0;
    let pairs = 0; // 当前窗口内的相等数对数
    let res = 0;
    const freq = new Map<number, number>();
    for (let right = 0; right < nums.length; right++) {
        const x = nums[right];
        const prev = freq.get(x) || 0;
        // 扩展右端新增 prev 个数对
        pairs += prev;
        freq.set(x, prev + 1);
        // 收缩左端直到不满足 pairs >= k
        while (pairs >= k) {
            const y = nums[left];
            const count = freq.get(y)!;
            // 移除y会减少count - 1个
            pairs -= (count - 1);
            if (count === 1) {
                freq.delete(y);
            } else {
                freq.set(y, count - 1);
            }
            left++;
        }
        res += left;
    }
    return res;
}