/**
 * 242. 有效的字母异位词
 * https://leetcode.cn/problems/valid-anagram/
 */

function isAnagram(s: string, t: string): boolean {
    const map = new Map<string, number>();
    if(s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        if (map.get(s[i]) === 0) {
            map.delete(s[i]);
        }
        map.set(t[i], (map.get(t[i]) || 0) - 1);
        if (map.get(t[i]) === 0) {
            map.delete(t[i]);
        }
    }
    return map.size === 0;
}