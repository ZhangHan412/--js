/****
 * new Set()
 * 
 * 我们可以利用ES6的集合进行数据处理 
 * 除了常见的 插入 删除 清空 还可以用来做去重操作
 * 也可以用来做多条数据的 并集 交集 差集
 * 
 */

const set = new Set()
set.add(1)
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4, 5])
// 并集
console.log(new Set([...set1, ...set2]), '并集');
// 交集
console.log(new Set([...set1].filter(item => set2.has(item))), '交集');
// 差集
console.log(new Set([...set2].filter(item => !set1.has(item))), '差集');