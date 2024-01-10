/****
 * 
 * 循环链表
 * 循环链表是一种特殊的链表，其中链表中的最后一个节点指向链表的头部节点，形成一个闭环
 * 
 * 循环链表的每个节点包含两部分：数据节点和指向下一个节点的指针节点
 * 
 */
// 初始化创建一个节点
class Node {
    constructor(element) {
        this.element = element
        // 后指针节点
        this.next = null
    }
}
class CircularLinkedList {
    constructor() {
        // 链表长度
        this.count = 0
        // 链头
        this.head = null
    }
    push(data) {
        const node = new Node(data)
        if (this.count === 0) {
            this.head = node
        } else {
            // 1 2 3
            let current = this.head
            for (let i = 0; i < this.count; i++) {
                current = current.next
            }
            current.next = node
        }
        node.next = this.head
        this.count++
    }

    insert(data, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(data)
            let current = this.head
            if (index === 0) {
                if (this.head === null) {
                    this.head = node
                    node.next = this.head
                } else {
                    //  node 1 2 3
                    node.next = current
                    // 让最后一个节点指向头结点
                    for (let i = 0; i < this.count - 1; i++) {
                        current = current.next
                    }
                    this.head = node
                    current.next = this.head
                }
            } else if (index === this.count) {
                // 在结尾插上 
                // 1 2 3 node
                for (let i = 0; i < this.count - 1; i++) {
                    current = current.next
                }
                current.next = node
                node.next = this.head
            } else {

            }
            this.count++
            return true
        }
        return false
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            const current = this.head
            if (index === 0) {
                if (this.count === 1) {
                    this.head = null
                } else {
                    // node 1 2 3 
                    for (let i = 0; i < this.count - 1; i++) {
                        current = current.next
                    }
                    this.head = this.head.next
                    current.next = this.head
                }
            } else {
                // 1 2 node 3 ---- 1 2 3 node
                // 2
                const provious = this.getNodeAt(index - 1)
                current = provious.next
                provious.next = current.next
            }
            this.count--
            return current.element
        }
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
}
const list = new CircularLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.insert(1, 66)
list.removeAt(1)
console.log(list);
