/****
 * 
 * Map
 * ES6 中的 Map 是一种数据结构，用于存储键值对
 * 与普通对象不同 Map 的键可以是任意数据类型，包括基本类型和对象引用
 * 
 */

const map = new Map()
map.set('name', 'zh')
console.log(map);
console.log(map.keys());
console.log(...map.keys());
console.log(map.values());