# 2692. 统计最大元素出现至少 K 次的子数组

> 题目链接：<https://leetcode.cn/problems/count-subarrays-where-max-element-appears-at-least-k-times/>

## 代码

<<< @/code/dsa/leetcode/2692-count-subarrays-where-max-element-appears-at-least-k-times.ts

## 思路

滑动窗口统计最大元素出现次数：

1. 先找出数组中的最大值 `max`
2. 使用滑动窗口，维护窗口内最大元素 `max` 的出现次数 `cnt`
3. 对于每个右端点 `i`：
   - 如果 `nums[i] === max`，增加计数 `cnt`
   - 当 `cnt === k` 时，收缩左边界 `left`，直到 `cnt < k`（即刚好不再满足条件）
   - 此时 `left` 指向第一个不再满足条件的位置，以 `i` 为右端点的所有有效子数组数量为 `left`（即 `[0, i], [1, i], ..., [left-1, i]` 共 `left` 个）

4. 累加所有右端点对应的子数组数量

- 时间复杂度 $O(n)$，需要先遍历一次找最大值，然后滑动窗口遍历一次
- 空间复杂度 $O(1)$，只使用常数额外空间

