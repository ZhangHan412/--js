/****
 * 
 * 链表 ListNode 
 * 链表是一种常见的数据结构，它由一系列节点组成 对比数组来说并非顺序 连续存储
 * 数据元素的逻辑顺序是通过链表中节点的指针链接次序实现的
 * 每个节点包含两部分：数据和指向下一个节点的指针
 * 
 * 使用链表结构存储数据 可以克服数组链表需要预先知道数据大小的缺点
 * 链表结构是利用计算机的内存 实现内存的灵活管理 但是链表不能像数组一样随机读取数据
 * 对比在内存中数组存储数据的开销 链表还需要定义给每个数据开辟一个空间存储数据的指针
 * 
 * 链表插入删除数据 是通过移动指针指向即可 随机访问的话需要从链头到链尾遍历
 * 
 * 节点对象 ===> 数据+指针（指向下一个数据）
 * 
 */
// 单链表 
// 定义节点
class Node {
    constructor(element) {
        // 节点值
        this.element = element
        // 定义指针
        this.next = null
    }
}
// 链表
class ListNode {
    constructor() {
        // 链表长度
        this.count = 0
        // 链头
        this.head = null
    }
    // 插入节点
    push(data) {
        const node = new Node(data)
        if (this.head === null) {
            // 如果链表是空的 将插入过来的数据设置为链头
            // 这里为什么不定义指针 是因为最后一个节点的指向为空 头结点的指针自然为空
            this.head = node
        } else {
            // 如果链表有数据 先找到链表的头节点 然后从这个头结点开始遍历链表 直到链表节点为空
            let current = this.head
            // 1->next ==> 2->next ==> 3->next ==> null
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.count++

    }
    // 删除指定位置的数据 索引方式
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head // 当前节点
            if (index === 0) {
                this.head = this.head.next
            } else {
                // 如果删除索引是 2 的节点 只需要将 索引是 1 的节点指针 指向是 3 的即可
                let provious // 上一个节点

                // 这里会报错 let 具有块级作用域的特性 在这else打括号内定义的数据 括号外访问不到
                // let current = this.head // 当前节点

                // 根据删除的索引值来遍历
                for (let i = 0; i < index; i++) {
                    // 1 2 3 
                    provious = current
                    current = current.next
                }
                provious.next = current.next
            }
            this.count--
            return current.element
        }
        return
    }
    // 根据索引值返回对应节点
    getNodeAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head
            for (let i = 0; i < index; i++) {
                node = node.next
            }
            return node
        }
        return
    }
    // 优化
    removeAt2(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head // 当前节点
            if (index === 0) {
                this.head = this.head.next
            } else {
                // 如果删除索引是 2 的节点 只需要将 索引是 1 的节点指针 指向是 3 的即可
                let provious = this.getNodeAt(index - 1) // 上一个节点
                current = this.getNodeAt(index)
                provious.next = current.next
            }
            this.count--
            return current.element
        }
        return
    }

    // 根据值去删除链表中指定位置的数据 从头到尾遍历
    // 我们可以先根据数据获取索引值
    removeVal(data) {
        const index = this.indexOf(data)
        return this.removeAt2(index)
    }
    // 根据值获取节点索引
    indexOf(data) {
        let current = this.head
        for (let i = 0; i < this.count; i++) {
            if (current.element === data) {
                console.log(i);
                return i
            } else {
                current = current.next
            }
        }
        return -1
    }
    // 插入数据 任意位置插入
    insert(data, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(data)
            if (index === 0) {
                // data -> next ==> head -> next ===> null
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const provious = this.getNodeAt(index - 1)
                const current = provious.next
                node.next = current
                provious.next = node
            }
            this.count++
        }
        return false
    }
}
const list = new ListNode()
list.push(0)
list.push(1)
list.push(2)
console.log(list);

// list.removeAt(3)
// console.log(list);
// console.log(list.removeAt(0));

list.removeVal(0)
console.log(list);
console.log(list.removeVal(0));

// const node = new Node(0)
// console.log(node);
// console.log(typeof node == "object");