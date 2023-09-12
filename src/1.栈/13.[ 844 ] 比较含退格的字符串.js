/**
 * * 题目名称：比较含退格的字符串
 * * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare
 */
/**
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
注意：如果对空文本输入退格字符，文本继续为空。
示例 1：
输入：s = "ab#c", t = "ad#c"
输出：true
解释：s 和 t 都会变成 "ac"。
示例 2：
输入：s = "ab##", t = "c#d#"
输出：true
解释：s 和 t 都会变成 ""。
示例 3：
输入：s = "a#c", t = "b"
输出：false
解释：s 会变成 "c"，但 t 仍然是 "b"。
 */
// * 思路：出入栈、大小比较范围是否小写字符 92ms 43.63mb
// * 解法2：从后往前遍历 进行跳过和逐字符判断 80ms 40.31mb


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    //1.
    // var Sstack = []
    // var Tstack = []
    // for (let ch of s) {
    //     if (ch === '#') {
    //         Sstack.pop()
    //     }
    //     else {
    //         Sstack.push(ch)
    //     }
    // }
    // for (let ch of t) {
    //     if (ch === '#') {
    //         Tstack.pop()
    //     }
    //     else {
    //         Tstack.push(ch)
    //     }
    // }
    // if (Sstack.join('') === Tstack.join('')) return true
    // else return false

    //2.
    var backspaceCompare = function (S, T) {
        let i = S.length - 1,
            j = T.length - 1,
            skipS = 0,
            skipT = 0;
        // 大循环
        while (i >= 0 || j >= 0) {
            // S 循环
            while (i >= 0) {
                if (S[i] === '#') {
                    skipS++;
                    i--;
                } else if (skipS > 0) {
                    skipS--;
                    i--;
                } else break;
            }
            // T 循环
            while (j >= 0) {
                if (T[j] === '#') {
                    skipT++;
                    j--;
                } else if (skipT > 0) {
                    skipT--;
                    j--;
                } else break;
            }
            if (S[i] !== T[j]) return false;
            i--;
            j--;
        }
        return true;
    };

};