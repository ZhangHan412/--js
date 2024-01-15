// 贪心算法： 不考虑整体 只考虑当前看来最好的选择
/**
 * 背包问题
 * @param {背包容量} capcaity 
 * @param {物品重量} weights 
 * @param {物品价值} values 
 * 
 * 解题思路：
 * 根据每个物品的重量以及价格计算出性价比
 * 通过性价比来确定放入背包的物品 因为性价比最高物品更值得存放
 * 然后计算最高性价比总量以及每个性价比的重量
 * 
 * 
 * 
 */
function knapSack(capacity, weights, values) {
    const n = weights.length;
    const ratioList = [];// 性价比数组
    for (let i = 0; i < n; i++) {
        ratioList.push({
            weight: weights[i],
            value: values[i],
            // 性价比
            ratio: values[i] / weights[i]
        });
    }
    // 从大到小排序性价比数据 sort((a,b)=> a - b) 从小到大 sort((a,b)=> b - a) 从大到小
    ratioList.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;// 总价格
    let currentWeight = 0;// 总重量

    for (let i = 0; i < n; i++) {
        if (currentWeight + ratioList[i].weight <= capacity) {
            currentWeight += ratioList[i].weight;
            totalValue += ratioList[i].value;
        } else {
            const remainingCapacity = capacity - currentWeight;
            totalValue += ratioList[i].ratio * remainingCapacity;
            break;
        }
    }

    return totalValue;
}

const capacity = 10;
const weights = [2, 2, 6, 5, 4];
const values = [6, 3, 5, 4, 6];
console.log(knapSack(capacity, weights, values)); // 输出 15
