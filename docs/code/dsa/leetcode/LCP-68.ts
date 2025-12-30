/**
 * LCP 68. 美观的花束
 * https://leetcode.cn/problems/1GxJYY/
 */

function beautifulBouquet(flowers: number[], cnt: number): number {
    let left = 0;
    let res = 0;
    const map = new Map<number, number>();
    for (let i = 0; i < flowers.length; i++) {
        map.set(flowers[i], (map.get(flowers[i]) || 0) + 1);
        while (map.get(flowers[i])! > cnt) {
            const fl = map.get(flowers[left])!;
            if (fl === 1) {
                map.delete(flowers[left]);
            }
            else {
                map.set(flowers[left], fl - 1);
            }
            left++;
        }
        res += i - left + 1;
    }
    return res;
}