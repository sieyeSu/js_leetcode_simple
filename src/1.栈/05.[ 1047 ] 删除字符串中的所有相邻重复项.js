/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
 */
/**
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
在 S 上反复执行重复项删除操作，直到无法继续删除。
在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
示例：

输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。

 */
// * 思路：
// 解法1：栈 76ms 49.59mb
//      入栈后判断与上一个入栈是否相同，同则出
// 2.更简便栈写法

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    // 1.
    // var stack = []
    // if (s.length <= 1) {
    //     return s
    // }
    // else {
    //     stack.push(s[0])
    //     for (let i = 1; i < s.length; i++) {
    //         if (s[i] != stack[stack.length - 1]) {
    //             stack.push(s[i])
    //         }
    //         else {
    //             stack.pop()
    //         }
    //     }
    //     return stack.join('')
    // }
    // 2.
    const stack = []
    for (const ch of s) {
        if (stack.length && stack[stack.length - 1] === ch) {
            stack.pop()
        }
        else {
            stack.push(ch)
        }
    }
    return stack.join('')

};
