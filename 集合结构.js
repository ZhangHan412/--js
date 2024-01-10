/***
 * 
 * 集合 set
 * 集合是一组无序且唯一不能重复的项组成的
 * 是 ES6 中引入的一种新的数据结构，它类似于数组
 * 可以用来存储任何类型的唯一值，例如数字、字符串、对象等
 * 
 */
class MySet {
    constructor() {
        this.item = {}
    }
    add(data) {
        if (!this.has(data)) {
            this.item[data] = data
            return true
        }
        return false
    }
    delete(data) {
        if (this.has(data)) {
            delete this.item[data]
            return true
        }
        return false
    }
    has(value) {
        return value in this.item
    }
    clear() {
        this.item = {}
    }
    size() {
        // 通过 Objdect.keys(obj) 来获取对象中键名组成的数组
        return Object.keys(this.item).length
    }
    // 获取集合中所有属性值
    values() {
        // Object.values(obj) 获取对象中所有属性值的数组
        return Object.values(this.item)
    }
}
const mySet = new MySet()
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.delete(2)
console.log(mySet.item);
console.log(mySet.size());
console.log(mySet.values());