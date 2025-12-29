/**
 * 3258. 统计满足 K 约束的子字符串数量 I
 * https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-i/
 */

function countKConstraintSubstrings(s: string, k: number): number {
    let left = 0;
    let res = 0;
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            cnt++;
        }
        while (cnt > k && i - left + 1 - cnt > k) {
            if (s[left] === '1') {
                cnt--;
            }
            left++;
        }
        if (cnt <= k || i - left + 1 - cnt <= k) {
            res += i - left + 1;
        }
    }
    return res;
}