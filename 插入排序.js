/****
 * 
 * 排序算法 ———— 插入排序
 * 
 * 该算法排序的思想是 将数组分为两部分 已排序 未排序
 * 每次对有序序列的数组进行未排序序列数据的逐个插入 直到整个序列有序位置
 * 
 * 过程：
 * 1.从第一个元素开始 该元素可以认为已经排过序了
 * 2.取出下一个元素 在已经排序的元素序列上从后向前扫描
 * 3.如果序列中已排序的元素大于新元素 则已排序的元素移到下一位 
 * 4.重复步骤 3 直到找到小于新元素或者等于新元素的位置
 * 5.将新元素插入到该元素后面
 * 6.重复2-5步骤 直到排序完毕
 * 
 */
// [5, 2, 4, 1, 6, 8, 3, 9, 7]
function insertSort(arr) {
    const { length } = arr
    // 存储当前这一轮对应的索引元素值
    let temp;
    // 为什么从索引 1 开始 因为第一个元素默认是已经排序过的
    // 假如数组是[5, 2, 4, 1]
    for (let i = 1; i < length; i++) {
        temp = arr[i] // 2
        let j = i // 1
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1] // arr[1] = 5
            j-- // j = 0
        }
        arr[j] = temp // arr[0]=2
    }
    console.log(arr);
}
insertSort([5, 2, 4, 1, 6, 8, 3, 9, 7])