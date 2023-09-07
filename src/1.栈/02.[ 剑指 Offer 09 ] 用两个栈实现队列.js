/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 */
/*
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )


示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
输出：[null,null,3,-1,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
 */


// * 思路：实现队列，先明白什么是队列，先进先出此题要求：初始化时无输出null;输入时无输出null;删除头部时有输出，空-1，值为值;
/*
解法：一个输入一个输出栈；
    append时进输入栈，delete时输出栈非空则压入输入栈；

 */



//相当于构造函数，不返回值
var CQueue = function () {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
//添加值不返回，不是函数
CQueue.prototype.appendTail = function (value) {
    this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (!this.outStack.length) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop())
        }
        if (!this.outStack.length) return -1
        else return this.outStack.pop()
    }
    return this.outStack.pop();
};






// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');