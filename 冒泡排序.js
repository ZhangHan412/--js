/****
 * 
 * 排序算法 ———— 冒泡排序
 * 
 * 冒泡排序是通过比较相邻的两个项 如果第一个比第二个大 则交换他们 最终将最小的转移到数据顶端 最大的数据在底部
 * 元素项向上移动至正确的顺序 就类似气泡一样
 * 
 */
// [5,2,4,1,6,8,3,9,7]
// 第一轮 [2,4,1,5,6,3,8,7,9]
// 第二轮 [2,1,4,5,3,6,7,8,9]
// 第三轮 [1,2,4,3,5,6,7,8,9]
// 第四轮 [1,2,3,4,5,6,7,8,9]
function bubbleStort(array) {
    const { length } = array
    // 9
    for (let i = 0; i < length; i++) {
        // 8
        // 这里解释一下为什么要将循环条件设置为 length - 1
        // 因为每次冒泡结束后最大的元素都会被冒到数组的末尾 已经确定了下一次比较的时候不需要对这个最大元素进行比较 
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
    console.log(array);
}

function swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}
bubbleStort([5, 2, 4, 1, 6, 8, 3, 9, 7])