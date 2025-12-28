# 1658. 将 x 减到 0 的最小操作数

> 题目链接：<https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/>

## 代码

<<< @/code/dsa/leetcode/1658-minimum-operations-to-reduce-x-to-zero.ts

## 思路

**问题转换**：从数组两端移除元素使总和为 `x`，等价于找中间连续子数组，使其和等于 `total - x`，且长度最大。

使用**滑动窗口**：

- 计算数组总和 `total`，目标子数组和 `target = total - x`；
- 用 `sum` 记录当前窗口内元素的和；
- 右指针向右移动，累加当前元素到 `sum`；
- 当 `sum > target` 时，移动左指针缩小窗口，从 `sum` 中减去左端元素，直到 `sum <= target`；
- 当 `sum === target` 时，更新最大窗口长度；
- 最终答案为 `len - maxWindowLength`（如果找不到则返回 -1）。

时间复杂度 $O(n)$，空间复杂度 $O(1)$，其中 $n$ 为数组长度。

