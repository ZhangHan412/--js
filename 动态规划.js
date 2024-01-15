/****
 * 
 * 动态规划 ———— 背包问题
 * 背包问题是一个经典的组合优化问题，其中给定一个背包的容量和一组物品的重量和价值
 * 目标是选择这些物品放入背包中 使得总价值最大 同时总重量不能超过背包的容量
 * 
 * 以下代码可以结合该表格来梳理流程
 * 
 * 重量    价格    物品ID    0    1    2    3    4    5    6    7    8    9    10
 * 2        6       0       0    0    6    6    6    6    6    6    6    6    6
 * 2        3       1       0    0    6    6    9    9    9    9    9    9    9
 * 6        5       2       0    0    6    6    9    9    9    9    11   11   14
 * 5        5       3       0    0    6    6    9    9    9    10   11   13   14
 * 4        6       4       0    0    6    6    9    9    12   12   15   15   15
 * 
 */

/**
 * 
 * @param {物品重量} weight 
 * @param {价值} value 
 * @param {背包重量} W 
 * 
 */
function knapStork(weight, value, W) {
    var n = weight.length - 1
    var f = [[]] // 二维数组
    for (let i = 0; i <= W; i++) {
        if (i < weight[0]) {
            f[0][i] = 0
        } else {
            f[0][i] = value[0]
        }
    }
    for (let j = 0; j <= W; j++) {
        for (let i = 1; i <= n; i++) {
            if (!f[i]) {
                f[i] = []
            }
            if (j < weight[i]) {
                f[i][j] = f[i - 1][j]
            } else {
                f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weight[i]] + value[i])
            }

        }
    }
    return f[n][W]
}
console.log(knapStork([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10));


