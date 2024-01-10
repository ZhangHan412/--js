/****
 * 
 * 栈 后进先出 先入后出
 * 栈 又名 堆栈 是一种运算受限的线性表
 * 仅限在栈顶进行插入删除操作
 * 栈内最上面的元素是栈顶元素 最底部的是栈底元素
 * 
 * 一个栈内插入一条新元素又称 入栈 压栈 进栈
 * 
 */
class Stack {
    // 提醒： 
    // arr的定义位置 在构造函数内的话 每个实例化的类都有一个独立的arr
    // 写在构造函数外 属于静态属性 当实例化多个类的时候 他们都共享一个arr
    // constructor() {
    //     // 定义一个空栈
    //     this.arr = []
    // }

    // 私有属性 只能在类的内部进行访问和修改 要想在类的外部访问 需要定义一个公有方法 将这个之返回出来
    // _xxx 可以认为是私有属性 ES6 用 # 来代替
    _arr = []
    #arr = []

    // 访问私有属性
    getArr() {
        return this.#arr
    }

    // 出栈
    pop() {
        return this.#arr.pop(1)
    }
    // 压栈
    push(item) {
        this.#arr.push(item)
    }
    // 访问栈顶元素
    peek() {
        return this.#arr[this.#arr.length - 1]
    }

    // 栈的长度
    stackLength() {
        return this.#arr.length
    }

    // 栈是否为空
    is_empty() {
        return this.#arr.length === 0
    }
    // 清空栈
    clear() {
        this.#arr.length = 0
    }
}
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.getArr());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.stackLength());
console.log(stack.is_empty());

