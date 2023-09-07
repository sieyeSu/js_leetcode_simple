/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 * 有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。

例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

示例 1：
输入：s = "(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。

示例 2：
输入：s = "(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。

示例 3：
输入：s = "()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。

提示：
1 <= s.length <= 105
s[i] 为 '(' 或 ')'
s 是一个有效括号字符串
 */

// * 思路：从头到尾寻找有效括号组合，push 到结果集中
/**
 * @param {string} S
 * @return {string}
 */
/*解法1：计数器；
      左括号 + 1; 右括号 - 1; 发现一串计数规律，最后返回要求串
  解法2：栈；
      左进栈; 右出栈; 栈空时第一个进栈和最后出栈之间即有效;
*/
var removeOuterParentheses = function (S) {
  /*解法1：*/
  var count = 0, result = new Array(0);
  // 操作计数器
  for (var i = 0; i < S.length; i++) {
    if (S[i] == "(") {
      count += 1;
      if (count > 1) {
        result.push(S[i]);
      }
    }
    else if (S[i] == ")") {
      count -= 1;
      if (count > 0) {
        result.push(S[i]);
      }
    }
  }
  return result.join('');
  /*
*/

  // var stack = new Array(0);
  // var result = new Array(0);
  // var start = 0;
  // for (var i = 0; i < S.length; i++) {
  //   if (S[i] == "(") {
  //     stack.push(S[i]);
  //   }
  //   else {
  //     stack.pop;
  //   }
  //   if (!stack.length) {
  //     result.push(...S.slice(start + 1, i));
  //   }
  //   start = i + 1;
  // }
  // // console.log(result.join(''));
  // return result.join('');
}




//测试用例不用
// // 测试用例
// let test = "(()())(())(()(()))"
// console.time('执行用时');
// console.log(removeOuterParentheses(test));
// console.timeEnd('执行用时');
