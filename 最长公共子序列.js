/****
 * 
 * 动态规划 ———— 最长公共子序列
 * 根据提供的两个字符串找出最长子序列的长度
 * 最长子序列指的是 两个字符串序列中以相同顺序出现 但不要求连续的字符串序列
 * 
 * 例如：
 * 字符串1 a c b a e d
 * 字符串2 a b c a d f 
 * 这俩字符串的最长公共子序列就是 acad
 * 
 * 用矩阵的形式表示
 * Y轴表示字符串1 X轴表示字符串2
 *   *     a  b  c  a  d  f
 *      0  0  0  0  0  0  0
 *   a  0  1  1  1  1  1  1
 *   c  0  1  1  2  2  2  2
 *   b  0  1  2  2  2  2  2
 *   a  0  1  2  2  3  3  3
 *   e  0  1  2  2  3  3  3
 *   d  0  1  2  2  3  4  4
 * 
 * 通过该矩阵 可以得知每个 Y轴 上的字符串与 X轴 上的字符串连接起来在字符串中出现的次数
 * 例如 
 * Y轴上的 a 字符 与 X轴的 a 字符 出现 1 次
 * Y轴上的 a 字符 与 X轴的 ab 字符 出现 1 次
 * Y轴上的 a 字符 与 X轴的 abc 字符 出现 1 次
 * ...
 * Y轴 ac 字符 与 X轴的 a 字符 出现 1 次
 */
function LCS(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    // 构建新数组 长度 + 1 也就是边界值 第一行都是 0 
    const dp = [new Array(n + 1).fill(0)]

    for (let i = 1; i <= m; i++) {
        dp[i] = [0]
        for (let j = 1; j <= n; j++) {
            // TODO 
            if (str1[i - 1] === str2[j - 1]) {
                // 矩阵左上角 + 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let index = dp[m][n];
    const lcs = new Array(index + 1);
    lcs[index] = "";

    let i = m;
    let j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs[index - 1] = str1[i - 1];
            i--;
            j--;
            index--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs.join("");
}
const str1 = "abcdefg";
const str2 = "aceg";

console.log(LCS(str1, str2));