# 713. 乘积小于 K 的子数组

> 题目链接：<https://leetcode.cn/problems/subarray-product-less-than-k/>

## 代码

<<< @/code/dsa/leetcode/713-subarray-product-less-than-k.ts

## 思路

使用**滑动窗口**：

- 用 `product` 记录当前窗口内所有元素的乘积；
- 右指针向右移动，将当前元素乘入 `product`；
- 当 `product >= k` 时，移动左指针缩小窗口，从 `product` 中除以左端元素，直到 `product < k`；
- 当窗口内乘积小于 `k` 时，以右端点为结尾的子数组个数为 `i - left + 1`，累加到结果中。

注意：如果 `k <= 1`，直接返回 0（因为所有正整数的乘积都至少为 1）。

时间复杂度 $O(n)$，空间复杂度 $O(1)$，其中 $n$ 为数组长度。

