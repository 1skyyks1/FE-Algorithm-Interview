/**
 * 2379. 得到 K 个黑块的最少涂色次数
 * https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks
 */

function minimumRecolors(blocks: string, k: number): number {
    let res = k;
    let cnt = 0;
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i] === 'W') {
            cnt++;
        }
        if (i - k >= 0 && blocks[i - k] === 'W') {
            cnt--;
        }
        if (i - k + 1 >= 0) {
            res = Math.min(res, cnt)
        }
    }
    return res;
}