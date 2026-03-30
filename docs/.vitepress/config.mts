import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Frontend Interview",
  description: "前端算法 · 手撕 · 八股文",
  base: '/frontend-interview/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  markdown: {
    math: true
  },
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '算法', link: '/dsa/', activeMatch: '/dsa/' },
      { text: '手撕', link: '/impls/', activeMatch: '/impls/' },
      { text: '八股文', link: '/interview/', activeMatch: '/interview/' }
    ],

    sidebar: {
      '/dsa/': [
        {
          text: '开始',
          items: [
            { text: '总览', link: '/dsa/' }
          ]
        },
        {
          text: 'LeetCode',
          collapsed: true,
          items: [
            { text: '34. 在排序数组中查找元素的第一个和最后一个位置', link: '/dsa/leetcode/34-find-first-and-last-position-of-element-in-sorted-array' },
            { text: '35. 搜索插入位置', link: '/dsa/leetcode/35-search-insert-position' },
            { text: '41. 缺失的第一个正数', link: '/dsa/leetcode/41-first-missing-positive' },
            { text: '56. 合并区间', link: '/dsa/leetcode/56-merge-intervals' },
            { text: '73. 矩阵置零', link: '/dsa/leetcode/73-set-matrix-zeroes' },
            { text: '76. 最小覆盖子串', link: '/dsa/leetcode/76-minimum-window-substring' },
            { text: '189. 轮转数组', link: '/dsa/leetcode/189-rotate-array' },
            { text: '238. 除自身以外数组的乘积', link: '/dsa/leetcode/238-product-of-array-except-self' },
            { text: '239. 滑动窗口最大值', link: '/dsa/leetcode/239-sliding-window-maximum' },
            { text: '242. 有效的字母异位词', link: '/dsa/leetcode/242-valid-anagram' },
            { text: '643. 子数组最大平均数 I', link: '/dsa/leetcode/643-maximum-average-subarray-i' },
            { text: '704. 二分查找', link: '/dsa/leetcode/704-binary-search' },
            { text: '713. 乘积小于 K 的子数组', link: '/dsa/leetcode/713-subarray-product-less-than-k' },
            { text: '744. 寻找比目标字母大的最小字母', link: '/dsa/leetcode/744-find-smallest-letter-greater-than-target' },
            { text: '876. 链表的中间结点', link: '/dsa/leetcode/876-middle-of-the-linked-list' },
            { text: '904. 水果成篮', link: '/dsa/leetcode/904-fruit-into-baskets' },
            { text: '930. 和相同的二元子数组', link: '/dsa/leetcode/930-binary-subarrays-with-sum' },
            { text: '1004. 最大连续1的个数 III', link: '/dsa/leetcode/1004-max-consecutive-ones-iii' },
            { text: '1170. 比较字符串最小字母出现频次', link: '/dsa/leetcode/1170-compare-strings-by-frequency-of-the-smallest-character' },
            { text: '1208. 尽可能使字符串相等', link: '/dsa/leetcode/1208-get-equal-substrings-within-budget' },
            { text: '1248. 统计「优美子数组」', link: '/dsa/leetcode/1248-count-number-of-nice-subarrays' },
            { text: '1343. 大小为 K 且平均值大于等于阈值的子数组数目', link: '/dsa/leetcode/1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold' },
            { text: '1358. 包含所有三种字符的子字符串数目', link: '/dsa/leetcode/1358-number-of-substrings-containing-all-three-characters' },
            { text: '1385. 两个数组间的距离值', link: '/dsa/leetcode/1385-find-the-distance-value-between-two-arrays' },
            { text: '1423. 可获得的最大点数', link: '/dsa/leetcode/1423-maximum-points-you-can-obtain-from-cards' },
            { text: '1456. 定长子串中元音的最大数目', link: '/dsa/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length' },
            { text: '1493. 删掉一个元素以后全为 1 的最长子数组', link: '/dsa/leetcode/1493-longest-subarray-of-1s-after-deleting-one-element' },
            { text: '1658. 将 x 减到 0 的最小操作数', link: '/dsa/leetcode/1658-minimum-operations-to-reduce-x-to-zero' },
            { text: '2024. 考试的最大困扰度', link: '/dsa/leetcode/2024-maximize-the-confusion-of-an-exam' },
            { text: '2090. 半径为 k 的子数组平均值', link: '/dsa/leetcode/2090-k-radius-subarray-averages' },
            { text: '2302. 统计得分小于 K 的子数组数目', link: '/dsa/leetcode/2302-count-subarrays-with-score-less-than-k' },
            { text: '2379. 得到 K 个黑块的最少涂色次数', link: '/dsa/leetcode/2379-minimum-recolors-to-get-k-consecutive-black-blocks' },
            { text: '2389. 和有限的最长子序列', link: '/dsa/leetcode/2389-longest-subsequence-with-limited-sum' },
            { text: '2529. 正整数和负整数的最大计数', link: '/dsa/leetcode/2529-maximum-count-of-positive-integer-and-negative-integer' },
            { text: '2537. 统计好子数组的数目', link: '/dsa/leetcode/2537-count-the-number-of-good-subarrays' },
            { text: '2762. 不间断子数组', link: '/dsa/leetcode/2762-continuous-subarrays' },
            { text: '2799. 统计完全子数组的数目', link: '/dsa/leetcode/2799-count-complete-subarrays-in-an-array' },
            { text: '2841. 几乎唯一子数组的最大和', link: '/dsa/leetcode/2841-maximum-sum-of-almost-unique-subarray' },
            { text: '2962. 统计最大元素出现至少 K 次的子数组', link: '/dsa/leetcode/2962-count-subarrays-where-max-element-appears-at-least-k-times' },
            { text: '3090. 每个字符最多出现两次的最长子字符串', link: '/dsa/leetcode/3090-maximum-length-substring-with-two-occurrences' },
            { text: '3258. 统计满足 K 约束的子字符串数量 I', link: '/dsa/leetcode/3258-count-substrings-that-satisfy-k-constraint-i' },
            { text: '3298. 统计重新排列后包含另一个字符串的子字符串数目 II', link: '/dsa/leetcode/3298-count-substrings-that-can-be-rearranged-to-contain-a-string-ii' },
            { text: '3325. 字符至少出现 K 次的子字符串 I', link: '/dsa/leetcode/3325-count-substrings-with-k-frequency-characters-i' },
            { text: '3634. 使数组平衡的最少移除数目', link: '/dsa/leetcode/3634-minimum-removals-to-balance-array' }
          ]
        },
        {
          text: 'LCP',
          collapsed: true,
          items: [
            { text: 'LCP 68. 美观的花束', link: '/dsa/leetcode/LCP-68' }
          ]
        },
        {
          text: 'HOT 100',
          collapsed: true,
          items: [
            { text: '2. 两数相加', link: '/dsa/hot/2-add-two-numbers' },
            { text: '19. 删除链表的倒数第 N 个结点', link: '/dsa/hot/19-remove-nth-node-from-end-of-list' },
            { text: '21. 合并两个有序链表', link: '/dsa/hot/21-merge-two-sorted-lists' },
            { text: '23. 合并 K 个升序链表', link: '/dsa/hot/23-merge-k-sorted-lists' },
            { text: '24. 两两交换链表中的节点', link: '/dsa/hot/24-swap-nodes-in-pairs' },
            { text: '25. K 个一组翻转链表', link: '/dsa/hot/25-reverse-nodes-in-k-group' },
            { text: '78. 子集', link: '/dsa/hot/78-subsets' },
            { text: '94. 二叉树的中序遍历', link: '/dsa/hot/94-binary-tree-inorder-traversal' },
            { text: '98. 验证二叉搜索树', link: '/dsa/hot/98-validate-binary-search-tree' },
            { text: '101. 对称二叉树', link: '/dsa/hot/101-symmetric-tree' },
            { text: '104. 二叉树的最大深度', link: '/dsa/hot/104-maximum-depth-of-binary-tree' },
            { text: '105. 从前序与中序遍历序列构造二叉树', link: '/dsa/hot/105-construct-binary-tree-from-preorder-and-inorder-traversal' },
            { text: '108. 将有序数组转换为二叉搜索树', link: '/dsa/hot/108-convert-sorted-array-to-binary-search-tree' },
            { text: '124. 二叉树中的最大路径和', link: '/dsa/hot/124-binary-tree-maximum-path-sum' },
            { text: '138. 随机链表的复制', link: '/dsa/hot/138-copy-list-with-random-pointer' },
            { text: '142. 环形链表 II', link: '/dsa/hot/142-linked-list-cycle-ii' },
            { text: '148. 排序链表', link: '/dsa/hot/148-sort-list' },
            { text: '160. 相交链表', link: '/dsa/hot/160-intersection-of-two-linked-lists' },
            { text: '199. 二叉树的右视图', link: '/dsa/hot/199-binary-tree-right-side-view' },
            { text: '226. 翻转二叉树', link: '/dsa/hot/226-invert-binary-tree' },
            { text: '230. 二叉搜索树中第 K 小的元素', link: '/dsa/hot/230-kth-smallest-element-in-a-bst' },
            { text: '234. 回文链表', link: '/dsa/hot/234-palindrome-linked-list' },
            { text: '236. 二叉树的最近公共祖先', link: '/dsa/hot/236-lowest-common-ancestor-of-a-binary-tree' },
            { text: '240. 搜索二维矩阵 II', link: '/dsa/hot/240-search-a-2d-matrix-ii' },
            { text: '437. 路径总和 III', link: '/dsa/hot/437-path-sum-iii' },
            { text: '543. 二叉树的直径', link: '/dsa/hot/543-diameter-of-binary-tree' }
          ]
        },
        {
          text: '高频',
          collapsed: true,
          items: [
            { text: '3. 无重复字符的最长子串', link: '/dsa/high-frequency/3-longest-substring-without-repeating-characters' },
            { text: '88. 合并两个有序数组', link: '/dsa/high-frequency/88-merge-sorted-array' },
            { text: '165. 比较版本号', link: '/dsa/high-frequency/165-compare-version-numbers' },
            { text: '20. 有效的括号', link: '/dsa/high-frequency/20-valid-parentheses' },
            { text: '415. 字符串相加', link: '/dsa/high-frequency/415-add-strings' },
            { text: '1. 两数之和', link: '/dsa/high-frequency/1-two-sum' },
            { text: '46. 全排列', link: '/dsa/high-frequency/46-permutations' },
            { text: '112. 路径总和', link: '/dsa/high-frequency/112-path-sum' },
            { text: '141. 环形链表', link: '/dsa/high-frequency/141-linked-list-cycle' },
            { text: '146. LRU 缓存', link: '/dsa/high-frequency/146-lru-cache' },
            { text: '206. 反转链表', link: '/dsa/high-frequency/206-reverse-linked-list' },
            { text: '102. 二叉树的层序遍历', link: '/dsa/high-frequency/102-binary-tree-level-order-traversal' },
            { text: '53. 最大子数组和', link: '/dsa/high-frequency/53-maximum-subarray' }
          ]
        },
        {
          text: '面经',
          collapsed: true,
          items: [
            { text: '1. 数组分组 groupBy', link: '/dsa/interview/1-group-by' },
            { text: '2. 对象扁平化', link: '/dsa/interview/2-flatten' },
            { text: '3. 数组去重', link: '/dsa/interview/3-unique' },
            { text: '4. 实现最小栈', link: '/dsa/interview/4-stack' },
            { text: '5. 数组三等分', link: '/dsa/interview/5-split-three' },
            { text: '6. 树中查找节点', link: '/dsa/interview/6-find-tree-node' },
            { text: '7. 控制并发请求', link: '/dsa/interview/7-request-limit' },
            { text: '8. 手写深拷贝', link: '/dsa/interview/8-deep-clone' },
            { text: '9. URL 反转', link: '/dsa/interview/9-reverse-url' }
          ]
        }
      ],

      '/impls/': [
        {
          text: '手撕实现',
          items: [
            { text: '总览', link: '/impls/' },
            { text: 'JSON.stringify', link: '/impls/json-stringify' },
            { text: 'Promise.all', link: '/impls/promise-all' },
            { text: 'Throttle 节流', link: '/impls/throttle' }
          ]
        },
        {
          text: '排序算法',
          items: [
            { text: '冒泡排序', link: '/impls/bubble-sort' },
            { text: '选择排序', link: '/impls/selection-sort' },
            { text: '插入排序', link: '/impls/insertion-sort' },
            { text: '快速排序', link: '/impls/quick-sort' },
            { text: '归并排序', link: '/impls/merge-sort' }
          ]
        }
      ],

      '/interview/': [
        {
          text: '八股文',
          items: [
            { text: '总览', link: '/interview/' },
            { text: 'JavaScript', link: '/interview/js' },
            { text: 'ES6', link: '/interview/es6' },
            { text: 'CSS', link: '/interview/css' },
            { text: 'Vue', link: '/interview/vue' },
            { text: '计网', link: '/interview/network' },
            { text: 'Webpack', link: '/interview/webpack' },
            { text: '场景题', link: '/interview/scenario' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1skyyks1/FE-Algorithm-Interview' }
    ],

    search: {
      provider: 'local'
    }
  }
})
