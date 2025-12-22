# 2379. 得到 K 个黑块的最少涂色次数

> 题目链接：<https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks>

## 代码

<<< @/code/dsa/leetcode/2379-minimum-recolors-to-get-k-consecutive-black-blocks.ts

## 思路

- 固定长度为 `k` 的滑动窗口，统计窗口内白块数量 `cnt`。
- 右指针进入窗口时，若是白块则 `cnt++`；左侧滑出窗口且为白块时 `cnt--`，保持窗口长度恰为 `k`。
- 窗口形成后用 `res` 记录最小白块数，即最少涂色次数。
- 时间复杂度 $O(n)$，空间复杂度 $O(1)$。

