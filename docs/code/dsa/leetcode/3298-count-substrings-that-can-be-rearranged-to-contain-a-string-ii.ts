/**
 * 3298. 统计重新排列后包含另一个字符串的子字符串数目 II
 * https://leetcode.cn/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/
 */

function validSubstringCount(word1: string, word2: string): number {
    const arr1 = new Array(26).fill(0), arr2 = new Array(26).fill(0);
    let cnt = 0;
    let res = 0;
    let left = 0;
    for (const word of word2) {
        const index = word.charCodeAt(0) - 'a'.charCodeAt(0);
        arr2[index]++;
        if (arr2[index] === 1) {
            cnt++;
        }
    }
    for (let i = 0; i < word1.length; i++) {
        const index = word1[i].charCodeAt(0) - 'a'.charCodeAt(0);
        arr1[index]++;
        if (arr1[index] === arr2[index]) {
            cnt--;
        }
        while (cnt === 0) {
            const leftIndex = word1[left].charCodeAt(0) - 'a'.charCodeAt(0);
            if (arr1[leftIndex] === arr2[leftIndex]) {
                cnt++;
            }
            arr1[leftIndex]--;
            left++;
        }
        res += left;
    }
    return res;
}