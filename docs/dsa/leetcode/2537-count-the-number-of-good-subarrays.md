# 2537. 统计好子数组的数目

> 题目链接：<https://leetcode.cn/problems/count-the-number-of-good-subarrays/>

## 代码

<<< @/code/dsa/leetcode/2537-count-the-number-of-good-subarrays.ts

## 思路

滑动窗口 + 哈希表统计相等数对：

1. 使用哈希表 `freq` 记录窗口内每种元素的数量
2. 维护变量 `pairs` 表示当前窗口内相等数对的数量（即相同元素可以组成的数对）
3. 对于每个右端点 `right`：
   - 将 `nums[right]` 加入窗口，如果该元素之前出现 `prev` 次，则新增 `prev` 个数对（新元素可以与之前的每个相同元素组成一对）
   - 当 `pairs >= k` 时，收缩左边界 `left`，直到 `pairs < k`
   - 此时 `left` 指向第一个不再满足条件的位置，以 `right` 为右端点的所有有效子数组数量为 `left`（即 `[0, right], [1, right], ..., [left-1, right]` 共 `left` 个）

4. 累加所有右端点对应的子数组数量

- 时间复杂度 $O(n)$，每个元素最多被访问两次（加入和移除窗口各一次）
- 空间复杂度 $O(n)$，哈希表最多存储 $n$ 种不同的元素

