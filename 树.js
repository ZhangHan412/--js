/****
 * 
 * 树 
 * 一种分层数据的抽象模型
 * 其组成结构：
 *                      根节点 
 *          第一层左侧子节点 第一层右侧子节点
 *    第二层左侧左子树 左侧右子树 第二层右侧左子树 右侧右子树
 *      左右叶节点    左右叶节点   左右叶节点     左右叶节点 
 * 
 * 二叉树
 * 二叉树中的节点最多只能有两个子节点 一个是左侧子节点 另一个是右侧子节点
 * 
 * 二叉搜索树 BST   
 * 二叉搜索树是二叉树的一种 只允许你在左侧节点存储比父节点小的值 右侧节点存储比父节点大的值
 * 类似这种结构
 *                          11
 * 
 *              7                       15
 * 
 *        5           9           13          20
 * 
 *     3     6     8    10     12    14    18   25
 * 
 *        
 */
// 设置比较值的枚举常量
const Compare = {
    less: -1, // 小于
    bigger: 1, // 大于
    equ: 0 // 等于
}
class Node {
    constructor(key) {
        this.key = key
        // 子树中的左侧节点
        this.left = null
        // 子树中的右侧节点
        this.right = null
    }
}
class BST {
    constructor() {
        // 根节点
        this.root = null
    }
    insert(data) {
        if (this.root == null) {
            this.root = new Node(data)
        } else {
            this.insertNode(this.root, data)
        }
    }
    // 比较节点
    compare(a, b) {
        if (a === b) {
            return Compare.equ
        }
        return a < b ? Compare.less : Compare.bigger
    }
    // 通过递归的方式逐层寻找左右某一侧子树的节点进行插入
    insertNode(node, data) {
        if (this.compare(data, node.key) === Compare.less) {
            if (node.left == null) {
                node.left = new Node(data)
            } else {
                this.insertNode(node.left, data)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(data)
            } else {
                this.insertNode(node.right, data)
            }
        }
    }
}
const myTree = new BST()
myTree.insert(3)
myTree.insert(1)
myTree.insert(2)
myTree.insert(4)
console.log(myTree);