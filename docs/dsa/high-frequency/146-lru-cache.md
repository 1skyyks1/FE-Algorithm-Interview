# 146. LRU 缓存

> 题目链接：<https://leetcode.cn/problems/lru-cache/>

## 代码

<<< @/code/dsa/high-frequency/146-lru-cache.ts

## 思路

使用 **Map** 实现 LRU（Least Recently Used）缓存：

### 核心思想

利用 JavaScript 的 `Map` 数据结构的特性：
- Map 会按照插入顺序维护键值对
- 最早插入的键值对在最前面，最新插入的在最后面

### get 操作

1. 检查 key 是否存在
2. 如果存在：
   - 删除旧的键值对
   - 重新插入（移到最后，表示最近使用）
   - 返回值
3. 如果不存在，返回 -1

### put 操作

1. 如果 key 已存在：
   - 删除旧的键值对（为了更新位置）
2. 如果 key 不存在且缓存已满：
   - 删除最早插入的键值对（`map.keys().next().value` 获取第一个 key）
3. 插入新的键值对（自动放在最后）

### 关键点

- 利用 Map 的插入顺序特性实现 LRU
- `map.keys().next().value` 获取第一个（最久未使用的）key
- 通过删除再插入来更新访问顺序

- 时间复杂度：get 和 put 操作都是 $O(1)$
- 空间复杂度 $O(capacity)$
