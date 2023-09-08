/**
 * * 题目名称：棒球比赛
 * * 题目地址：https://leetcode-cn.com/problems/baseball-game
 */
/**
 * 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。
比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：

整数 x - 表示本回合新获得分数 x
"+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
"D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
"C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
请你返回记录中所有得分的总和。

示例 1：
输入：ops = ["5","2","C","D","+"]
输出：30
解释：
"5" - 记录加 5 ，记录现在是 [5]
"2" - 记录加 2 ，记录现在是 [5, 2]
"C" - 使前一次得分的记录无效并将其移除，记录现在是 [5].
"D" - 记录加 2 * 5 = 10 ，记录现在是 [5, 10].
"+" - 记录加 5 + 10 = 15 ，记录现在是 [5, 10, 15].
所有得分的总和 5 + 10 + 15 = 30
示例 2：
输入：ops = ["5","-2","4","C","D","9","+","+"]
输出：27
解释：
"5" - 记录加 5 ，记录现在是 [5]
"-2" - 记录加 -2 ，记录现在是 [5, -2]
"4" - 记录加 4 ，记录现在是 [5, -2, 4]
"C" - 使前一次得分的记录无效并将其移除，记录现在是 [5, -2]
"D" - 记录加 2 * -2 = -4 ，记录现在是 [5, -2, -4]
"9" - 记录加 9 ，记录现在是 [5, -2, -4, 9]
"+" - 记录加 -4 + 9 = 5 ，记录现在是 [5, -2, -4, 9, 5]
"+" - 记录加 9 + 5 = 14 ，记录现在是 [5, -2, -4, 9, 5, 14]
所有得分的总和 5 + -2 + -4 + 9 + 5 + 14 = 27
示例 3：
输入：ops = ["1"]
输出：1
 */
// * 思路：1.出入栈判断符号与前两个数关系 300ms 48.87mb
// *       2.变长数组，官方解法 for of 用于遍历很方便；新用变量记录新栈长度n，每次switch还能更新 44ms 44.82mb

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    //1.
    // var index = 0, result = 0
    // var temp = []
    // while (index < operations.length) {
    //     switch (operations[index]) {
    //         case 'C':
    //             result = result - parseInt(temp[temp.length - 1])
    //             temp.pop()
    //             break;
    //         case 'D':
    //             let re1 = parseInt(temp[temp.length - 1]) * 2
    //             temp.push(re1);
    //             result = result + re1;
    //             break;
    //         case "+":
    //             let re2 = parseInt(temp[temp.length - 1]) + parseInt(temp[temp.length - 2]);
    //             temp.push(re2);
    //             result = result + re2;
    //             break;
    //         default :
    //             result = result + parseInt(operations[index])
    //             temp.push(operations[index])
    //             break;
    //     }
    //     index++   
    // }
    // return result;
    //2.

    let ret = 0;
    const points = [];
    for (const op of ops) {
        const n = points.length;
        switch (op[0]) {
            case '+':
                ret += points[n - 1] + points[n - 2];
                points.push(points[n - 1] + points[n - 2]);
                break;
            case 'D':
                ret += 2 * points[n - 1];
                points.push(2 * points[n - 1]);
                break;
            case 'C':
                ret -= points[n - 1];
                points.pop();
                break;
            default:
                ret += parseInt(op);
                points.push(parseInt(op));
                break;
        }
    }
    return ret;


};