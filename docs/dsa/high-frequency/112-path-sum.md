# 112. 路径总和

> 题目链接：<https://leetcode.cn/problems/path-sum/>

## 代码

<<< @/code/dsa/high-frequency/112-path-sum.ts

## 思路

使用 **DFS + 递归** 从根节点向下遍历。

当走到叶子节点（没有 `left` 和 `right`）时，判断从根到当前节点的路径和是否等于 `targetSum`。

### 写法一：累加路径和

递归时把当前路径和 `sum` 往下传，每到一个节点就更新成 `sum + node.val`，到叶子时比较是否等于 `targetSum`。

### 写法二：目标值递减

递归时把 `targetSum` 减去当前节点值，向下传 `targetSum - node.val`，到叶子时只要当前节点值等于剩余目标值即可。

### 关键点

- 只在**叶子节点**判断是否命中
- 任意一条路径满足就返回 `true`
- 时间复杂度 $O(n)$，空间复杂度为递归深度 $O(h)$
