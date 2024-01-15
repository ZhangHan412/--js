/****
 * 
 * 字典
 * 字典和集合很相似 集合是以 [值,值] 的形式存储元素 字典是以 [键,值] 存储数据
 * 字典也称映射 或者 关联数组
 * 
 * 
 */
class Dictionary {
    constructor() {
        this.table = {}
    }
    // 
    toString(item) {
        if (item === null) {
            return 'null'
        } else if (item === undefined) {
            return 'undefined'
        } else if (typeof item === 'string' || item instanceof String) {
            return item
        }
        return JSON.stringify(item)
    }

    hasKey(key) {
        return this.table[this.toString(key)] != null
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toString(key)
            this.table[tableKey] = new this.ValuePair(key, value)
            return true
        }
        return false
    }

    get(key) {
        const valuepair = this.table[this.toString(key)]
        return valuepair == null ? undefined : valuepair.value
    }
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toString(key)]
            return true
        }
        return false
    }
}
class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}
const dict = new Dictionary()
console.log(dict.toString({ a: 1 }));
console.log(dict.toString("name"));
console.log(dict.toString([12, 34]));
console.log(dict.hasKey('a'));