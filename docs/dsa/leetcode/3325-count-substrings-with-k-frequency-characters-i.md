# 3325. 字符至少出现 K 次的子字符串 I

> 题目链接：<https://leetcode.cn/problems/count-substrings-with-k-frequency-characters-i/>

## 代码

<<< @/code/dsa/leetcode/3325-count-substrings-with-k-frequency-characters-i.ts

## 思路

滑动窗口 + 哈希表统计字符出现次数：

1. 使用哈希表 `map` 记录窗口内每种字符的数量
2. 对于每个右端点 `i`：
   - 将 `s[i]` 加入窗口，更新计数
   - 当当前字符 `s[i]` 的出现次数达到 `k` 次时，收缩左边界 `left`，直到 `s[i]` 的出现次数小于 `k`
   - 此时 `left` 指向第一个不再满足条件的位置，以 `i` 为右端点的所有有效子字符串数量为 `left`（即 `[0, i], [1, i], ..., [left-1, i]` 共 `left` 个）

3. 累加所有右端点对应的子字符串数量

- 时间复杂度 $O(n)$，每个字符最多被访问两次（加入和移除窗口各一次）
- 空间复杂度 $O(1)$，哈希表最多存储 26 种小写字母

