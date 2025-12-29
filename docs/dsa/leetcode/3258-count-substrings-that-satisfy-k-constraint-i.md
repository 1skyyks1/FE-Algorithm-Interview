## 3258. 统计满足 K 约束的子字符串数量 I

> 题目链接：<https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-i/>

## 代码

<<< @/code/dsa/leetcode/3258-count-substrings-that-satisfy-k-constraint-i.ts

## 思路

字符串只包含 `'0'` 和 `'1'`。题目要求子字符串里 `0` 和 `1` 的个数都不能超过 `k`，也就是：

- 设窗口内 `1` 的个数为 `cnt1`，长度为 `len`，则 `cnt0 = len - cnt1`
- 约束：`cnt1 <= k` 且 `cnt0 <= k`，等价于 `cnt1 <= k` 且 `len - cnt1 <= k`

可以用滑动窗口 + 双指针统计：

- 用 `left` 作为窗口左端点，`cnt1` 记录窗口内 `1` 的个数。
- 枚举右端点 `i`：
  - 把 `s[i]` 加入窗口，如果是 `'1'` 就让 `cnt1++`。
  - 当窗口不满足约束（`cnt1 > k` 且 `len - cnt1 > k`）时，不断右移 `left` 收缩窗口，并在移出 `'1'` 时同步减少 `cnt1`。
  - 当当前窗口 `[left, i]` 满足约束时，以 `i` 为右端点的所有合法子字符串个数就是 `i - left + 1`，累加进答案。

- 因为 `left` 和 `i` 都只从左到右各走一遍，每个字符进出窗口次数有限。
- **复杂度**：
  - 时间复杂度：\(O(n)\)
  - 空间复杂度：\(O(1)\)


