/****
 * 
 * 排序算法 ———— 计数排序
 * 计数排序使用一个用来存储每个元素在原始数组中出现次数的临时数组
 * 在所有元素都计数完成后 临时数组也排好顺序并可迭代以构建排序后的结果数组
 * 
 * foreach() 方法就是一种常见的计数排序
 * 
 */
// let arr = []
// arr[1] = 9
// arr[3] = 5
// arr[6] = 2
// arr[2] = 3
// arr.forEach((item, index) => {
//     console.log(item, index);
// });

let arr = [5, 7, 4, 8, 1]
function countSort(arr) {
    if (arr.length < 2) {
        return
    }
    const maxValue = findMax(arr)
    // const maxValue = Math.max(...arr)
    const counts = new Array(maxValue + 1)
    // 统计数组中每个元素出现次数 以及索引位置
    arr.forEach(item => {
        if (!counts[item]) {
            counts[item] = 0
        }
        counts[item]++
    });
    console.log(counts);
    let newarr = []
    let sortIndex = 0
    // 解释这里代码 由于上面操作我们已经在counts辅助数组中记录了 arr 数组元素中元素出现的次数
    // 因此得到一个类似这样格式的数组 [1,null,1,null,1,1,null,null...]
    // 我们通过遍历这个数组 当item值大于 0 的时候 这个位置就是有值 对应的索引值 也就是当前的值
    counts.forEach((item, index) => {
        //console.log(item, index);
        while (item > 0) {
            newarr[sortIndex++] = index
            item--
        }
    })
    return newarr
}
// 获取数组最大值
function findMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(countSort(arr));