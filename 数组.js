/****
 * 
 * 数组的方法
 * 
 * push() 往数组后面插入数据
 * 
 * pop() 从后面删除
 * 
 * shift() 从前面删除
 * 
 * unshift() 从前面插入
 * 
 * splice(起始下标,结束下标,替换的元素) 
 * 
 * sort((第一项数据,第二项数据)=>) 排序 a - b 升序 b-a 降序
 * 
 * concat(数组1,数组2) 数组连接
 * 
 * 迭代方法 遍历方法
 * every() 检测数组所有元素是否满足条件 有返回值
 * 
 * some() 只要有一个满足条件则返回true 有返回值
 * 
 * filter
 * 
 * map() 映射 用于对数组中的每个元素执行指定操作，并返回新的数组 
 * 
 * reduce((total, currentValue, currentIndex, arr)=>{
 *  return 
 * }, initialValue) 
 * 用于对数组中的所有元素执行指定操作，将操作结果累加起来，并返回最终的结果
 * total 必需。初始值或上一次循环的结果
 * currentValue 必需。当前元素的值
 * currentIndex 可选。当前元素的索引
 * arr 可选。当前元素所属的数组对象
 * initialValue：可选。作为第一次调用回调函数时的第一个参数 total 的值
 * 
 * arr.from() 将伪数组转换成真正的数组结构
 * 
 * 搜索类方法
 * 
 * indexOf() 从数组开头查找 也可以通过第二个可选参数指定起始位置 
 * 返回数组中指定元素第一次出现的下标位置，如果找不到该元素，则返回 -1
 * 
 * lastIndexOf() 从数组开头查找 也可以通过第二个可选参数指定起始位置
 * 返回数组中指定元素最后一次出现的下标位置，如果找不到该元素，则返回 -1
 * 
 * find()  从数组的开头开始查找元素，一旦找到第一个满足条件的元素，就会立即返回
 * 返回数组中第一个满足条件的元素，如果找不到，则返回 undefined。它接受一个回调函数作为参数，该回调函数用于测试每个元素
 * 
 * findIndex() 从数组的开头开始查找元素，一旦找到第一个满足条件的元素，就会立即返回
 * 返回数组中第一个满足条件的元素的下标位置，如果找不到，则返回 -1
 * 
 * findLast() 从数组的结尾开始查找元素，一旦找到最后一个满足条件的元素，就会立即返回
 * 返回数组中最后一个满足条件的元素，如果找不到，则返回 undefined
 * 
 * findLastIndex() 从数组的结尾开始查找元素，一旦找到最后一个满足条件的元素，就会立即返回
 * 返回数组中最后一个满足条件的元素的下标位置，如果找不到，则返回 -1
 * 
 * includes() 默认从数组的开头开始查找元素，但也可以通过第二个可选参数指定起始位置
 * 回一个布尔值，表示数组中是否包含指定元素。该方法接受两个参数：要查找的元素和起始位置（可选）
 * 
 */

// let arr = [1, 2, 3, 4]
// arr.push(5)
// arr.pop(1)
// arr.shift(1)
// arr.unshift(5)
//arr.splice(0, 1, 6)

// arr.sort((a, b) => a - b)
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr);

// let arr1 = [
//     {
//         name: 'zh',
//         age: 25
//     },
//     {
//         name: 'zh',
//         age: 26
//     }
// ]
// arr1.sort((a, b) => b.age - a.age)
// console.log(arr1);

// console.log(arr.concat(arr1, 1, 2, 3));

// let arr2 = [2, 3, 4, 5, 6]
// let value = arr2.every(item => item > 0)
// console.log(value);

// let value = arr2.some(item => item > 4)
// console.log(value);

// let value = arr2.filter(item => { return item > 2 })
// console.log(value);

// let value = arr2.map(item => item)
// console.log(value);

// arr2.forEach((item, index) => {
//     item + 1;
//     console.log(index);
// })
// console.log(arr2);

// let value = arr2.reduce((total, currentValue) => {
//     return total + currentValue
// })
// console.log(value);

// Array.from()
// function ArrayFun() {
//     console.log(arguments);
//     console.log(Array.from(arguments));
// }
// ArrayFun(1, 2, 3, 4)

let arr = [1, 2, 3, 4, 3]

// console.log(arr.indexOf(7));
// console.log(arr.indexOf(3));

// console.log(arr.lastIndexOf(7));
// console.log(arr.lastIndexOf(3));

// console.log(arr.find(item => item > 1));
// console.log(arr.findIndex(item => item > 1));

console.log(arr.findLast(item => item > 2));
console.log(arr.findLastIndex(item => item > 2));