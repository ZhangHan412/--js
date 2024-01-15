/****
 *
 * 排序算法 ———— 快速排序
 * 快速排序是一种基于分治策略的排序算法，运行高效，应用广泛
 * 快速排序的核心操作是“哨兵划分” 
 * 
 * 其目标是：
 * 选择数组中的某个元素作为 “基准数”
 * 将所有小于基准数的元素移到其左侧，而大于基准数的元素移到其右侧
 * 
 * 基本思想:
 * 是通过选取一个基准元素，将数组分成两个子数组
 * 其中一个子数组的所有元素都小于等于基准元素
 * 另一个子数组的所有元素都大于基准元素
 * 然后，递归地对子数组进行排序，最终得到一个完全有序的数组
 * 
 */
// [3,4,5,2,1]
function quickSort(arr) {
    const { length } = arr
    if (length < 2) {
        return arr
    }
    // 基准
    let base = arr[0] // base 3
    let minArr = arr.slice(1).filter(item => item <= base) // [2,1]
    let maxArr = arr.slice(1).filter(item => item > base) // [4,5]
    /***
     * min = [2,1] 
     * 递归一  quickSort(minArr) ===> base=2 minarr=[1] max=[] quickSort(minArr) ===> [1,2].concat(quickSort(maxArr))
     * [1,2]
     * concat(base) 3
     * max = [4,5]
     * 递归二 quickSort(maxArr) ===> base=4 minarr=[] max=[5] quickSort(minArr) ===> [4].concat(quickSort(maxArr))
     * [4,5]
     * 
     */
    return quickSort(minArr).concat(base).concat(quickSort(maxArr))
}
console.log(quickSort([3, 4, 5, 2, 1]));