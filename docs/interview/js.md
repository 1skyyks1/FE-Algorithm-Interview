# JavaScript

## async / await

async / await 是 Promise 的语法糖，用于简化异步代码（优化 then 链）。

- **async 函数**
  - 使用 `async` 声明异步函数
  - 返回值会被自动包一层 `Promise`
  - 正常 `return` → `Promise` resolved；抛出错误 → `Promise` rejected

- **await 关键字**
  - 只能在 `async` 函数内部使用
  - 会“暂停”当前 `async` 函数，等待 `Promise` 完成后再继续向下执行

- **错误处理**
  - 推荐搭配 `try...catch` 捕获异步错误，替代繁杂的 `.then().catch()` 链

## cookie、localStorage、sessionStorage、session

- **cookie**
  - 存在浏览器中，每次请求默认会携带到同源服务器
  - 常用于身份认证、存储用户偏好
  - 可设置过期时间（`Expires` / `Max-Age`）、作用域、`HttpOnly`、`Secure` 等

- **localStorage**
  - 持久化存储在浏览器，除非主动清理，一直存在
  - 同源下所有标签页共享
  - 不会自动随请求发送到服务器

- **sessionStorage**
  - 会话级别存储：同一标签页生命周期内有效
  - 标签页关闭后清空，不同标签页之间不共享
  - 同样不会自动随请求发送到服务器

- **session（服务端会话）**
  - 存在服务器端，一般结合 cookie（如 `sessionId`）使用
  - 浏览器关闭或会话过期后失效
  - 更适合存放敏感信息（如登录状态），安全性高于直接将敏感信息存到浏览器

## 深拷贝 vs 浅拷贝

### 浅拷贝

**概念**：创建了一个新的对象 / 数组，但**只拷贝第一层属性**：

- 如果属性是**基本类型**，拷贝的是值本身
- 如果属性是**引用类型**，拷贝的是**内存地址**（引用），指向同一块堆内存

因此：**修改嵌套对象 / 数组的内部属性，会互相影响**。

**常见的浅拷贝方式：**

- `Object.assign(target, source)`
- `Array.prototype.slice()` / `Array.prototype.concat()`
- 使用展开运算符：`{ ...obj }`、`[ ...arr ]`

```js
const obj = { a: 1, b: { x: 10 } };
const shallow = { ...obj };

shallow.b.x = 20;
console.log(obj.b.x); // 20，同一引用
```

### 深拷贝

**概念**：开辟一块新的堆内存，**完全复制一份结构相同但地址不同的数据**：

- 两个对象的属性“长得一样”，但内部引用指向不同的地址
- 修改其中一个对象的属性，**不会影响**另一个

**常见的深拷贝方式：**

- 第三方库：`_.cloneDeep()`（Lodash）、`$.extend(true, ...)`（jQuery）
- 基于 JSON：
  - `JSON.stringify(obj)` + `JSON.parse(str)`
  - 局限：会丢失函数、`Symbol`、`undefined`、`Date`、原型链等
- 手写递归：
  - 判断类型（对象 / 数组）
  - 创建对应的空对象 / 空数组
  - 遍历键，递归拷贝子属性

```js
function deepClone(value) {
  if (value === null || typeof value !== 'object') return value;

  const result = Array.isArray(value) ? [] : {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      result[key] = deepClone(value[key]);
    }
  }
  return result;
}

const obj = { a: 1, b: { x: 10 } };
const deep = deepClone(obj);

deep.b.x = 20;
console.log(obj.b.x); // 10，互不影响
```

## 闭包

在一个函数的环境中，闭包 = 函数 + 词法环境。

函数使用了词法环境，比如函数使用了外层函数作用域里的变量，闭包导致这个函数如果不销毁，外层变量也无法被销毁。

如果后续不再使用这个函数，又没有销毁这个函数，就造成了内存泄漏。

## 数组常用方法

- `join()`：数组转字符串  
  `let str = arr.join(',');`

- `push()` / `pop()`：数组尾部添加 / 删除一项  
  `arr.push()` / `arr.pop()`

- `shift()` / `unshift()`：数组头部删除 / 添加一项  
  `arr.shift()` / `arr.unshift()`

- `reverse()`：数组翻转（会改变原数组）  
  `arr.reverse()`

- `sort()`：字符串排序（会改变原数组），对数值排序要提供比较函数  
  `arr.sort((a, b) => a - b)`

- `slice()`：返回截取数组（不改变原数组）  
  `let newArr = arr.slice(start, end)` 从 `arr[start]` 到 `arr[end - 1]`

- `splice()`：删除数组元素并添加（会改变原数组）  
  `arr.splice(start, num, val1, val2, ...)` 从 `arr[start]` 开始后面 `num` 项被 `val` 替换

- `toString()`：转为字符串（不会改变原数组），类似于没有参数的 `join()`  
  `let str = arr.toString()`

- `indexOf()`：从左到右查询数据获取索引，若不存在则返回 `-1`

- `forEach()`：遍历数组，无返回值  
  `arr.forEach((value, index, self) => { /* ... */ })`  
  `value` 遍历的数据，`index` 对应索引，`self` 数组本身

- `map()`：与 `forEach()` 类似，但是返回新数组  
  `let newArr = arr.map(value => { return value })`

- `filter()`：过滤，遍历数据返回布尔值为 `true` 则放入新数组返回  
  `let newArr = arr.filter(item => { return item > 3 })`

- `find()`：查找符合条件的值  
  `let val = arr.find(item => item > 3)`

- `findIndex()`：查找符合条件的索引  
  `let index = arr.findIndex(item => item > 3)`

- `every()`：判断是否每项都符合条件，都符合返回 `true`  
  `let bool = arr.every(item => item > 3)`

- `some()`：判断是否存在满足条件的项，只要有就返回 `true`  
  `let bool = arr.some(item => item > 3)`

- `reduce()`：遍历数组累积  
  `let sum = arr.reduce((prev, now, index, self) => { return prev + now }, initialValue)`

## 事件循环 Event Loop

JavaScript 是单线程的，但浏览器需要处理网络请求、定时器、UI事件等异步任务，所以引入了事件循环机制来实现非阻塞执行。

整个执行流程可以简单理解为：

1. 同步任务进入执行栈立即执行

2. 异步任务会交给宿主环境（如浏览器，Node.js）处理

3. 当异步任务完成后，其回调函数会进入任务队列

4. 当执行栈清空后，事件循环会从任务队列中取任务执行

为了更精细控制执行顺序，任务又分为宏任务和微任务

每次事件循环执行一个宏任务，常见宏任务有： `script（整体代码）`、`setTimeout / setInterval`、`I/O`、UI渲染

微任务会在当前宏任务结束后立即执行完，常见微任务： `Promise.then`、`MutationObserver`、`queueMicrotask`、`process.nextTick（Node）`

## 数据类型

一共有八种数据类型：Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt

分为原始数据类型和引用数据类型，Object为引用类型，数组函数等都属于对象。

原始类型存在栈中，空间小且固定；引用类型存在堆中，占据空间大且不固定，引用类型在栈中存储了指针，指向堆中该数据的起始地址

### 类型判断

- typeof

对象、数组、null都会被判断为object，其他都正确（function会被判断为function）`typeof function(){}`
- instanceof

可以正确判断引用类型，原理是在原型链中寻找该类型的原型`[] instanceof Array`
- constructor

constructor属性指向对象的构造函数，可以用来判断实例类型，但如果对象修改了原型，constructor可能不准确
`({}).constructor === Object`
- Object.prototype.toString.call()

使用Object对象的原型方法toString来判断数据类型，返回字符串格式：[object 类型]，类型是JS内部[[Class]]标记。

每个JS对象内部都有一个隐藏属性[[Class]]，用来标识对象的内在类型。
```javascript
Object.prototype.toString.call(123);        // [object Number]
Object.prototype.toString.call('hello');    // [object String]
Object.prototype.toString.call(true);       // [object Boolean]
Object.prototype.toString.call(null);       // [object Null]
Object.prototype.toString.call(undefined);  // [object Undefined]
Object.prototype.toString.call(Symbol());   // [object Symbol]
Object.prototype.toString.call([]);         // [object Array]
Object.prototype.toString.call({});         // [object Object]
Object.prototype.toString.call(()=>{});     // [object Function]
Object.prototype.toString.call(new Date()); // [object Date]
Object.prototype.toString.call(/abc/);      // [object RegExp]
```

## 类型转换

JS是一种动态类型语言，变量在声明时不会确定类型，只有在运行时根据赋值确定类型。

但是在很多运算场景中，运算符对操作数类型是有要求的，如果类型不符合，就会触发**类型转换**

显式转换
  - Number()
  - parseInt()，逐个解析字符，遇到不能转换的字符就停下来
  - String()
  - Boolean()

隐式转换常发生在算术运算、比较运算和逻辑判断中，例如 if、==、+ 等运算符。

## 作用域链
  
### 作用域

作用域，即变量和函数可以被访问的范围。作用域决定了代码中变量、函数等资源的可见性和访问权限。

- 全局作用域

在函数或代码块外声明的变量属于全局作用域。
在程序的任何地方都可以访问，生命周期与页面一致

```js
var a = 10;

function test() {
  console.log(a);
}
```

- 函数作用域

函数作用域也叫局部作用域，如果一个变量是在函数内部声明的它就在一个函数作用域下面。
这些变量只能在函数内部访问，不能在函数以外去访问

```js
function test() {
  var a = 10;
}

console.log(a); // ReferenceError
```

- 块级作用域

ES6引入了let和const，在{}中形成块级作用域，注意var没有块级作用域

```js
{
  let a = 10;
  var b = 20;
}

console.log(a); // ReferenceError
console.log(b); // 20
```

### 词法作用域

词法作用域，又叫静态作用域，作用域在代码编写阶段就已经确定，而不是在运行阶段确定。
也就是说，函数的作用域由它定义的位置决定，而不是调用的位置决定。

```js
var a = 1;

function foo() {
  console.log(a);
}

function bar() {
  var a = 2;
  foo();
}

bar(); // 1
```

### 作用域链
   
当JS查找变量的时候，会按照作用域链的方式寻找。

```
当前作用域
↓
父级作用域
↓
更上层作用域
↓
全局作用域
```

如果在全局作用域仍然找不到变量：

- 严格模式 → 报错

- 非严格模式 → 可能创建隐式全局变量

```js
var a = 1;

function foo() {
  var b = 2;

  function bar() {
    console.log(a, b);
  }

  bar();
}

foo();

// bar作用域 → foo作用域 → 全局作用域
```

## 原型链 与 类

### 原型链

ES6 之前，JS 没有类的概念，用原型链来实现继承

每个对象都有一个内部属性 `[[Prototype]]`（在浏览器中通常表现为 `__proto__`），指向它的原型对象。

当你访问一个对象的属性时，如果对象本身没有，就会顺着 `__proto__` 去原型对象里找，找不着再往上找，直到找到 `Object.prototype` 为止。