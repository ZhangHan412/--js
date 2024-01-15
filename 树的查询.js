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
 * 二叉树的遍历分为 中序遍历 先序遍历 后序遍历
 * 
 * 中序遍历
 * 是一种以上行顺序访问 BST 所有节点的遍历方式 也就是以从最小到最大的顺序访问所有节点
 * 按照左子树、根节点、右子树的顺序进行遍历
 * 
 * 先序遍历
 * 先序遍历是一种优先于后代节点的顺序访问每个节点 
 * 按照根节点、左子树、右子树的顺序进行遍历
 * 
 * 后序遍历
 * 先访问节点的后代节点 在访问节点本身
 * 按照左子树、右子树、根节点的顺序进行遍历
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

    // 中序遍历
    inOrderMap(callback) {
        this.inOrderMapNode(this.root, callback)
    }
    inOrderMapNode(node, callback) {
        if (node != null) {
            this.inOrderMapNode(node.left, callback)
            callback(node.key)
            this.inOrderMapNode(node.right, callback)
        }
    }
    // 先序遍历
    preOrderMap(callback) {
        this.preOrderMapNode(this.root, callback)
    }
    preOrderMapNode(node, callback) {
        if (node != null) {
            callback(node.key)
            this.preOrderMapNode(node.left, callback)
            this.preOrderMapNode(node.right, callback)
        }
    }
    // 后序遍历
    postOrderMap(callback) {
        this.postOrderMapNode(this.root, callback)
    }
    postOrderMapNode(node, callback) {
        if (node != null) {
            this.postOrderMapNode(node.left, callback)
            this.postOrderMapNode(node.right, callback)
            callback(node.key)
        }
    }

    // 查询
    min() {
        return this.minNode(this.root)
    }
    // 获取最小节点的值
    minNode(node) {
        let current = node
        while (current != null && current.left != null) {
            current = current.left
        }
        return current
    }
    max() {
        return this.maxNode(this.root)
    }
    // 获取最大节点的值
    maxNode(node) {
        let current = node
        while (current != null && current.right != null) {
            current = current.right
        }
        return current
    }
    // 查询任意节点
    search(key) {
        return this.searchNode(this.root, key)
    }
    searchNode(node, key) {
        if (node === null) {
            return false
        }
        if (this.compare(key, node.key) === Compare.less) {
            return this.searchNode(node.left, key)
        } else if (this.compare(key, node.key) === Compare.bigger) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }
    }
}
const myTree = new BST()
myTree.insert(3)
myTree.insert(1)
myTree.insert(2)
myTree.insert(4)
/***
 *              3
 *       1              4   
 *  null     2      null  null
 *  
 */
console.log(myTree);
console.log('中序遍历');
myTree.inOrderMap(value => console.log(value))
console.log('先序遍历');
myTree.preOrderMap(value => console.log(value))
console.log('后序遍历');
myTree.postOrderMap(value => console.log(value))
console.log(myTree.search(3), '查询');