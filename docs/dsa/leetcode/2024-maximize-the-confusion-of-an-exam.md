# 2024. 考试的最大困扰度

> 题目链接：<https://leetcode.cn/problems/maximize-the-confusion-of-an-exam/>

## 代码

<<< @/code/dsa/leetcode/2024-maximize-the-confusion-of-an-exam.ts

## 思路

使用**滑动窗口**：

- 用 `cnt` 记录当前窗口内 `T` 的个数；
- 窗口内 `F` 的个数 = `i - left + 1 - cnt`；
- 窗口合法条件：少数派（`T` 和 `F` 中较少的那个）的数量 ≤ `k`，即 `Math.min(cnt, i - left + 1 - cnt) ≤ k`；
- 当窗口不合法时（少数派 > `k`），移动左指针缩小窗口，直到窗口合法；
- 每次更新窗口长度的最大值。

时间复杂度 $O(n)$，空间复杂度 $O(1)$，其中 $n$ 为字符串长度。

