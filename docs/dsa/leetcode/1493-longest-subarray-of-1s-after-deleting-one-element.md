# 1493. 删掉一个元素以后全为 1 的最长子数组

> 题目链接：<https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/>

## 代码

<<< @/code/dsa/leetcode/1493-longest-subarray-of-1s-after-deleting-one-element.ts

## 思路

- 使用滑动窗口，允许窗口内最多包含一个 `0`，表示可以删掉的那个元素。
- 右指针向右移动，当窗口内 `0` 的数量大于 1 时，就移动左指针缩小窗口，直到窗口内最多只剩一个 `0`。
- 在整个过程中维护窗口长度的最大值，最后答案是最大窗口长度减 1（因为必须删除一个元素）。
- 时间复杂度 $O(n)$，空间复杂度 $O(1)$。