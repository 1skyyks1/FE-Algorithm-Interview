/**
 * 1358. 包含所有三种字符的子字符串数目
 * https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/
 */

function numberOfSubstrings1(s: string): number {
    let left = 0;
    let res = 0;
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        // map.size === 3说明当前窗口[left, i]已经包含abc
        while (map.size === 3) {
            const c = s[left];
            if (map.get(c) === 1) {
                map.delete(c);
            } else {
                map.set(c, map.get(c)! - 1);
            }
            // left推到了刚好不再满足包含 3 个字符的位置
            left++;
        }
        // [0, i][1, i]...[left - 1, i]一共有left个合法子串
        res += left;
    }
    return res;
}