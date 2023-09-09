/**
 * * 题目名称：用栈操作构建数组
 * * 题目地址：https://leetcode-cn.com/problems/build-an-array-with-stack-operations
 */
/**
 * 给你一个数组 target 和一个整数 n。每次迭代，需要从  list = { 1 , 2 , 3 ..., n } 中依次读取一个数字。
请使用下述操作来构建目标数组 target ：
"Push"：从 list 中读取一个新元素， 并将其推入数组中。
"Pop"：删除数组中的最后一个元素。
如果目标数组构建完成，就停止读取更多元素。
题目数据保证目标数组严格递增，并且只包含 1 到 n 之间的数字。
请返回构建目标数组所用的操作序列。如果存在多个可行方案，返回任一即可。
示例 1：
输入：target = [1,3], n = 3
输出：["Push","Push","Pop","Push"]
解释： 
读取 1 并自动推入数组 -> [1]
读取 2 并自动推入数组，然后删除它 -> [1]
读取 3 并自动推入数组 -> [1,3]
示例 2：
输入：target = [1,2,3], n = 3
输出：["Push","Push","Push"]
示例 3：
输入：target = [1,2], n = 4
输出：["Push","Push"]
解释：只需要读取前 2 个数字就可以停止。
 */

// * 思路：初始值和该位置比较+push/pop;后续只看相邻是否连续来判断 官方56ms 40.21mb

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    /**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
    var buildArray = function (target, n) {
        const res = [];
        let prev = 0;//记录前一个
        for (const number of target) {
            for (let i = 0; i < number - prev - 1; i++) { //相邻有插值;包含了初始值情况：第一个prev表示初始值
                res.push("Push");
                res.push("Pop");
            }
            res.push("Push");
            prev = number;//下一个数值时转换为相邻差值比较
        }
        return res;

    };
};


