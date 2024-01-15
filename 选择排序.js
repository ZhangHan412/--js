/****
 * 
 * 排序算法 ———— 选择排序
 * 
 * 选择排序算法是一种原址比较排序算法
 * 思想是找到数据结构中的最小值并将其放置在第一位 
 * 接着找到第二小的值并将其放置到第二位
 * 
 * 实现思路：
 * 将一组数组中第一个数据设置为最小值并记录索引 然后开始和后面的数据比较
 * 让遇到比这个数据小的则将索引转换到这个数据上 然后接着比较剩余数据
 * 当数据比较完毕后将第一个没有排过序的进行位置交换 然后开始从第二个开始上面操作
 * 
 */
// [5,2,4,1,6,8,3,9,7]
// 第一轮 [1,2,4,5,6,8,3,9,7]
// 第二轮 [1,2,4,5,6,8,3,9,7]
// 第三轮 [1,2,3,5,6,8,4,9,7]
// 第四轮 [1,2,3,4,6,8,5,9,7]
// 第五轮 [1,2,3,4,5,8,6,9,7]
// 第六轮 [1,2,3,4,5,6,8,9,7]
// 第七轮 [1,2,3,4,5,6,7,9,8]
// 第八轮 [1,2,3,4,5,6,7,8,9]
function selectionSort(array) {
    const { length } = array
    // 设置最小值的索引
    let indexMin;
    // 这里之所以要循环 lenght - 1 是因为每一轮结束后只会循环当前未排序部分的
    // 例如 [2,1,4,6] 第一轮将第一个数据 2 的下标标记为最小值的下标 然后跟后面比较 
    // 比较结束后 数组变为 [1,2,4,6] 第二轮从第二个数据 2 的下标标记为最小值的下标 然后比较
    // 比较结束后 数组变为 [1,2,4,6] 这个时候其实已经将数组排序完毕了 用了三次 最后一个数据肯定是最大的 所以需要 length-1次
    for (let i = 0; i < length - 1; i++) {
        // 最小值的索引 == 外层遍历
        indexMin = i
        // 这里 i = 1
        for (let j = i; j < length; j++) {
            if (array[indexMin] > array[j]) {
                // 如果后面的数据小于当前最小索引的值 则将这个数据的索引设置为最小索引
                indexMin = j
            }
        }
        // 当有比最小索引值小的数据
        if (i !== indexMin) {
            swap(array, i, indexMin)
        }
    }
    console.log(array);
}
function swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}
selectionSort([5, 2, 4, 1, 6, 8, 3, 9, 7])

// function text(array) {
//     const { length } = array
//     let index;
//     for (let i = 0; i < length - 1; i++) {
//         index = i
//         for (let j = i; j < length; j++) {
//             if (array[index] > array[j]) {
//                 index = j
//             }
//         }
//         if (i != index) {
//             const swap = array[index]
//             array[index] = array[j]
//             array[j] = swap
//         }
//     }
// }
