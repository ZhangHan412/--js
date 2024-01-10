/****
 * 
 * 队列 先进先出
 * 是一种遵循先入先出规则的线性数据结构 只允许在一端插入 在另一端删除
 * 队列模拟了排队现象 先来排队的人就先走
 * 
 * 在数组内的形式  （队首）[1,2,3](队尾)
 * 
 * 回顾 JS 的 任务队列 来结合解释下 栈 和 队列 在JS程序执行过程中的作用与操作
 * 
 * 在JS程序执行的过程中会将主线程上的任务都押入到 执行栈 内存中 该内存中有同步任务也有异步任务
 * 栈内存遵循后进先出的元素 依次执行同步异步任务 当遇到异步任务的时候 将这些函数转移到 异步处理模块当中 同步任务则执行完毕后再出栈 然后继续其他任务进栈出栈操作
 * 当异步任务在异步处理模块内达到触发条件的时候 会将该任务转移到 任务队列 当中 根据 宏任务 微任务 进行对应的先进先出的原则 再次押入到执行栈中进行执行
 * 
 */
class Queue {
    #arr = []

    // 访问私有属性
    getArr() {
        return this.#arr
    }

    // 出队列
    pop() {
        return this.#arr.shift(1)
    }
    // 进队列
    push(item) {
        this.#arr.push(item)
    }
    // 访问队头元素
    peek() {
        return this.#arr[0]
    }

    // 队列的长度
    queueLength() {
        return this.#arr.length
    }

    // 队列是否为空
    is_empty() {
        return this.#arr.length === 0
    }
    // 清空队列
    clear() {
        this.#arr.length = 0
    }
}
const queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
console.log(queue.getArr());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.queueLength());
console.log(queue.is_empty());