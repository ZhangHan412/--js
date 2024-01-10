/****
 * 
 * 双向队列
 * 双端队列是一种具有两个端点的队列，可以在队列的前端和后端进行插入和删除操作
 * 允许在一端插入元素，然后在该端删除这个元素
 * 
 */
class DeQueue {
    #arr = []

    // 访问私有属性
    getArr() {
        return this.#arr
    }

    // 在队头插入一个元素
    insertFront(item) {
        this.#arr.unshift(item);
    }

    // 在队尾插入一个元素
    insertLast(item) {
        this.#arr.push(item);
    }

    // 删除队头的元素
    deleteFront() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#arr.shift();
    }

    // 删除队尾的元素
    deleteLast() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#arr.pop();
    }

    // 获取队头的元素
    getFront() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#arr[0];
    }

    // 获取队尾的元素
    getLast() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#arr[this.#arr.length - 1];
    }

    // 判断队列是否为空
    isEmpty() {
        return this.#arr.length === 0;
    }

    // 获取队列中元素的数量
    size() {
        return this.#arr.length;
    }
}
const deQueue = new DeQueue()
deQueue.insertFront(1)
deQueue.insertFront(2)
deQueue.insertFront(3)
deQueue.insertFront(4)
console.log(deQueue.getArr());
console.log(deQueue.getFront());
console.log(deQueue.getLast());
console.log(deQueue.size());
console.log(deQueue.getFront());