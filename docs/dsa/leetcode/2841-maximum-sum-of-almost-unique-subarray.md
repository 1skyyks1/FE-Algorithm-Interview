# 2841. 几乎唯一子数组的最大和

> 题目链接：<https://leetcode.cn/problems/maximum-sum-of-almost-unique-subarray/>

## 代码

<<< @/code/dsa/leetcode/2841-maximum-sum-of-almost-unique-subarray.ts

## 思路

- 维护长度为 `k` 的滑动窗口，`sum` 记录窗口和，`map` 记录元素频次以计算窗口内不同数字数量。
- 右端进入窗口时更新频次与和；窗口超过 `k` 时弹出左端元素并维护频次与和。
- 当窗口长度达到 `k` 且 `map.size >= m` 时，用当前 `sum` 更新答案。
- 时间复杂度 $O(n)$，哈希表存储窗口内元素，空间复杂度 $O(k)$。

