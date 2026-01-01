# 2799. 统计完全子数组的数目

> 题目链接：<https://leetcode.cn/problems/count-complete-subarrays-in-an-array/>

## 代码

<<< @/code/dsa/leetcode/2799-count-complete-subarrays-in-an-array.ts

## 思路

滑动窗口 + 哈希表统计不同元素数量：

1. 先统计整个数组中不同元素的数量 `size`（使用 `Set`）
2. 使用哈希表 `map` 记录窗口内每种元素的数量
3. 对于每个右端点 `i`：
   - 将 `nums[i]` 加入窗口，更新计数
   - 当窗口包含所有不同元素（`map.size === size`）时，收缩左边界 `left`，直到窗口不再包含所有不同元素
   - 此时 `left` 指向第一个不再满足条件的位置，以 `i` 为右端点的所有有效子数组数量为 `left`（即 `[0, i], [1, i], ..., [left-1, i]` 共 `left` 个）

4. 累加所有右端点对应的子数组数量

- 时间复杂度 $O(n)$，需要先遍历一次统计不同元素数量，然后滑动窗口遍历一次
- 空间复杂度 $O(n)$，哈希表和集合最多存储 $n$ 种不同的元素

