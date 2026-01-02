# 3298. 统计重新排列后包含另一个字符串的子字符串数目 II

> 题目链接：<https://leetcode.cn/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/>

## 代码

<<< @/code/dsa/leetcode/3298-count-substrings-that-can-be-rearranged-to-contain-a-string-ii.ts

## 思路

滑动窗口 + 计数数组统计字符数量：

1. 使用两个计数数组 `arr1` 和 `arr2` 分别记录窗口内和 `word2` 中每种字符的数量
2. 先统计 `word2` 中每种字符的数量，并记录需要满足的字符种类数 `cnt`
3. 对于每个右端点 `i`：
   - 将 `word1[i]` 加入窗口，更新计数
   - 当窗口内某个字符的数量达到 `word2` 中该字符的数量时，`cnt` 减 1
   - 当 `cnt === 0` 时（窗口包含 `word2` 的所有字符），收缩左边界 `left`，直到 `cnt > 0`
   - 此时 `left` 指向第一个不再满足条件的位置，以 `i` 为右端点的所有有效子字符串数量为 `left`（即 `[0, i], [1, i], ..., [left-1, i]` 共 `left` 个）

4. 累加所有右端点对应的子字符串数量

- 时间复杂度 $O(n + m)$，其中 $n$ 是 `word1` 的长度，$m$ 是 `word2` 的长度
- 空间复杂度 $O(1)$，计数数组固定大小为 26

