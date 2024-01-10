/****
 * 
 * 双向链表 
 * 双向链表是一种链表数据结构，它的每个节点都有两个指针
 * 一个指向前一个节点(prev)，一个指向后一个节点(next)
 * 
 */
// 初始化创建一个节点
class Node {
    constructor(element) {
        this.element = element
        // 前指针节点
        this.prev = null
        // 后指针节点
        this.next = null
    }
}
// 定义双向链表
class DoublyLinkList {
    constructor() {
        // 链表长度
        this.count = 0
        // 链头
        this.head = null
        // 链尾
        this.tail = null
    }

    push(data) {
        const node = new Node(data)
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            // prev<- 1 -> next ==> prev <- 2 -> next ==> null
            // 这里是 当有数据插入进来时 先将链表尾部的节点指向新节点
            // 然后将新节点的 前指针 指向之前的尾节点
            // 然后将尾节点赋值给新节点
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.count++
    }
    // 任意位置插入元素
    insert(data, index) {
        if (index >= 0 && index < this.count) {
            const node = new Node(data)
            // 记录头节点
            const current = this.head
            // 解释: 当插入的元素位置为 0 的时候 需要判断头结点是否为空
            if (index === 0) {
                // 如果头结点为空 则直接将头结点和尾节点都设置为该元素即可
                if (this.head === null) {
                    this.head = node
                    this.tail = node
                } else {
                    // 如果头结点不为空 则将元素插入到头结点之前
                    // 需要先把该元素的后指针指向头结点 然后将头结点的前指针指向该元素
                    // 最后将头结点设定为这个元素
                    node.next = current
                    current.prev = node
                    this.head = node
                }
            } else if (index === this.count) {
                // 这里表示插入的位置是在链尾位置
                let current = this.tail
                current.next = node
                node.prev = current
                this.tail = node

            } else {
                // 1 2 3
                // 获取上一个节点
                const provious = this.getNodeAt(index - 1)
                // 获取插入位置节点
                const current = this.getNodeAt(index)
                provious.next = node
                current.prev = node

                node.next = provious.next
                node.prev = provious

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
                // 1 2 3
                this.head = current.next
                if (this.count === 0) {
                    this.tail = null
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) {
                const current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                // 1 2 3 
                let provious = this.getNodeAt(index - 1)
                current = provious.next
                provious.next = current.next
                current.next.prev = provious
            }
            this.count--
        }
    }

    getHead() {
        return this.head
    }

    getTail() {
        return this.tail
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
}

const doublyList = new DoublyLinkList()
doublyList.push(1)
doublyList.push(2)
doublyList.push(3)
doublyList.insert(4, 4)
console.log(doublyList);