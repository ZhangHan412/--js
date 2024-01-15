/****
 * 
 * 搜索算法 ———— 顺序搜索
 * 顺序或者线性搜索的机制：
 * 将每一个数据结构中的元素和我们要找的元素作比较
 * 
 */
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return i
        }
    }

    // 提示这里为什么不行  
    // foreach 方法无法中断循环 即使找到了目标值 也无法直接在回调函数中返回结果
    // arr.forEach((item, index) => {
    //     if (item === value) {
    //         return index
    //     }
    // });
    return -1
}
console.log(search([2, 4, 7, 1, 3, 9], 3));