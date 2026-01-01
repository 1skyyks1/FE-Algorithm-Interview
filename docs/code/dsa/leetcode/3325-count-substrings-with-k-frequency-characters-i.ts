/**
 * 3325. 字符至少出现 K 次的子字符串 I
 * https://leetcode.cn/problems/count-substrings-with-k-frequency-characters-i/
 */

function numberOfSubstrings(s: string, k: number): number {
    let left = 0;
    let res = 0;
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        while (map.get(s[i])! >= k) {
            if (map.get(s[left]) === 1) {
                map.delete(s[left]);
            } else {
                map.set(s[left], map.get(s[left])! - 1);
            }
            left++;
        }
        res += left;
    }
    return res;
}