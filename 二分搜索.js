/****
 * 
 * 搜索算法 ———— 二分搜索
 * 二分搜索是一种用于在有序数组或有序列表中查找特定元素的位置的搜算算法
 * 
 * 核心思想:
 * 
 * 
 */
function quickSort(arr) {
    const { length } = arr
    if (length < 2) {
        return arr
    }
    let index = arr[0]
    let minArr = arr.slice(1).filter(item => item <= index)
    let maxArr = arr.slice(1).filter(item => item > index)

    return quickSort(minArr).concat(index).concat(quickSort(maxArr))
}
function binarySearch(find, arr, start, end) {
    start = start || 0
    end = end || arr.length - 1
    // 排序数组 快排
    arr = quickSort(arr)
    // [3, 1, 6, 2, 8, 4, 5]
    if (start <= end && find >= arr[start] && find <= arr[end]) {
        if (arr[start] === find) {
            return start
        }
        if (arr[end] === find) {
            return end
        }
        // 获取数组中间位置索引 ===> （第一个索引 + 最后一个索引） / 2 
        let mid = Math.ceil((end + start) / 2)
        if (arr[mid] === find) {
            return mid
        } else if (arr[min] > find) {
            return binarySearch(find, arr, start, mid - 1)
        } else {
            return binarySearch(find, arr, min + 1, end)
        }
    }

    return -1
}
console.log(binarySearch(5, [3, 1, 6, 2, 8, 4, 5]));