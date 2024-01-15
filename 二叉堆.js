/****
 * 
 * 二叉堆
 * 二叉堆是一种特殊的二叉树
 * 特性如下：
 * 1.他是一棵完整的二叉树 表示树的每一层都有左侧和右侧子节点 除了最后一层的叶节点 
 * 并且最后一层的叶节点尽可能左侧有叶节点 右侧有则不合法
 * 2.二叉堆不是最小堆就是最大堆 
 * 最小堆允许你快速导出最小值 最大堆允许你快速导出树的最大值
 * 所有的节点都大于等于最大堆或者小于等于最小堆每个他的子节点
 * 
 * 
 * 
 */
// 设置比较值的枚举常量
const Compare = {
    less: -1, // 小于
    bigger: 1, // 大于
    equ: 0 // 等于
}
// 最小堆
class MinHeap {
    heap = []

    // 左节点的索引
    getLeftIndex(index) {
        return 2 * index + 1
    }

    // 右节点的索引
    getRightIndex(index) {
        return 2 * index + 2
    }

    // 获取父节点
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    // 比较节点
    compare(a, b) {
        if (a === b) {
            return Compare.equ
        }
        return a < b ? Compare.less : Compare.bigger
    }

    /***
     * 
     * 假如结构为：
     *              2
     *      3               4
     * 
     */
    // 插入
    insert(value) {
        if (value != null) {
            this.heap.push(value) // value=5 this.heap=[2,3,4,5]
            // 与父结点对比 比父节点小 则交换位置 逐级对比
            this.shiftUp(this.heap.length - 1)
            return true
        }
        return false
    }

    shiftUp(index) {
        let parent = this.getParentIndex(index)
        while (index > 0 && this.compare(this.heap[parent], this.heap[index]) === Compare.bigger) {
            this.swap(this.heap, parent, index)
            index = parent
            parent = this.getParentIndex(index)
        }
    }
    // 交换函数
    swap(array, a, b,) {
        const temp = array[a]
        array[a] = array[b]
        array[b] = temp
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.size() === 0
    }

    findTarget() {
        return this.heap[0]
    }
    // 删除
    extract() {
        if (this.isEmpty()) {
            return
        }
        if (this.size() === 1) {
            return this.heap.shift()
        }
        const remove = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
        return remove
    }
    shiftDown(index) {
        let current = index
        let left = this.getLeftIndex(index)
        let right = this.getRightIndex(index)
        let size = this.size()
        if (left < size && this.compare(this.heap[current], this.heap[left]) === Compare.bigger) {
            current = left
        }
        if (right < size && this.compare(this.heap[current], this.heap[right]) === Compare.bigger) {
            current = right
        }
        if (index !== current) {
            this.swap(this.heap, index, current)
            this.shiftDown(current)
        }
    }
}
// 最大堆
class MaxHeap extends MinHeap {
    constructor() {
        super()
    }
    compare(a, b) {
        if (a === b) {
            return Compare.equ
        }
        return a > b ? Compare.less : Compare.bigger
    }
}
const minHeap = new MinHeap()
minHeap.insert(2)
minHeap.insert(1)
minHeap.insert(3)
minHeap.insert(8)
minHeap.insert(6)
minHeap.insert(9)
console.log(minHeap.heap);