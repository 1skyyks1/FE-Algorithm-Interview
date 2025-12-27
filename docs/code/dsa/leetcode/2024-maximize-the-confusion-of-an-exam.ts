/**
 * 2024. 考试的最大困扰度
 * https://leetcode.cn/problems/maximize-the-confusion-of-an-exam/
 */

function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let left = 0;
    let res = 0;
    let cnt = 0;
    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === 'T') {
            cnt++;
        }
        // 窗口合法条件 = 少数派 ≤ k
        while (Math.min(cnt, i - left + 1 - cnt) > k) {
            if (answerKey[left] === 'T') {
                cnt--;
            }
            left++;
        }
        res = Math.max(res, i - left + 1);
    }
    return res;
}