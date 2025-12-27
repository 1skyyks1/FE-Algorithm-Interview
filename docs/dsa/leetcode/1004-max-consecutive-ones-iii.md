# 1004. 最大连续1的个数 III

> 题目链接：<https://leetcode.cn/problems/max-consecutive-ones-iii/>

## 代码

<<< @/code/dsa/leetcode/1004-max-consecutive-ones-iii.ts

## 思路

使用**滑动窗口**：

- 用 `cnt` 记录当前窗口内 `0` 的个数；
- 右指针向右移动，遇到 `0` 时 `cnt++`；
- 当 `cnt > k` 时，移动左指针缩小窗口，直到窗口内 `0` 的个数不超过 `k`；
- 每次更新窗口长度的最大值。

时间复杂度 $O(n)$，空间复杂度 $O(1)$，其中 $n$ 为数组长度。

