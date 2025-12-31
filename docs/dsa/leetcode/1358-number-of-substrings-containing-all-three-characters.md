# 1358. 包含所有三种字符的子字符串数目

> 题目链接：<https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/>

## 代码

<<< @/code/dsa/leetcode/1358-number-of-substrings-containing-all-three-characters.ts

## 思路

滑动窗口 + 哈希表统计字符数量：

1. 使用哈希表 `map` 记录窗口内每种字符（a、b、c）的数量
2. 对于每个右端点 `i`：
   - 将 `s[i]` 加入窗口，更新计数
   - 当窗口包含所有三种字符（`map.size === 3`）时，收缩左边界 `left`，直到窗口不再包含所有三种字符
   - 此时 `left` 指向第一个不再满足条件的位置，以 `i` 为右端点的所有有效子字符串数量为 `left`（即 `[0, i], [1, i], ..., [left-1, i]` 共 `left` 个）

3. 累加所有右端点对应的子字符串数量

- 时间复杂度 $O(n)$，每个字符最多被访问两次（加入和移除窗口各一次）
- 空间复杂度 $O(1)$，哈希表最多存储 3 种字符

