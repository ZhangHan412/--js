/***
 * 
 * 散列表
 * 也称哈希表、哈希映射或字典等，是一种用于存储键值对的数据结构
 * 它通过将键映射到索引来实现高效的查找和插入操作，具有很快的访问速度
 * 散列表的核心思想是使用哈希函数，将键映射到一个固定大小的数组索引位置上
 * 并在该位置存储对应的值 当需要查找某个键时
 * 只需使用相同的哈希函数计算出对应的索引，然后直接访问该位置即可
 * 
 * 
 */
class HashTable {
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
    // 转换hash值
    hashCode(key) {
        /****
         * 1.对象 ===> 字符串
         * 2.charAtCode + 
         * 3.取 余数 %
         */
        if (typeof key === 'number') {
            return key
        }
        const tableKey = this.toString(key)
        let hash = 0
        for (let i = 0; i < tableKey.length; i++) {
            // 获取字符串的 ASCII 编码
            hash += tableKey.charCodeAt(i)

        }
        return hash % 37
    }

    set(key, value) {
        if (key != null && value != null) {
            // 防止 Key过于复杂 可以转换成 ASCII 来存储
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)
            return true
        }
        return false
    }

    get(key) {
        return this.table[this.hashCode(key)] == null ? undefined : this.table[this.hashCode(key)]
    }

    remove(key) {
        const hash = this.hashCode(key)
        const valuepari = this.table[hash]
        if (valuepari != null) {
            delete this.table[hash]
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
const table = new HashTable()
table.set("name", "zzz")
console.log(table.table);