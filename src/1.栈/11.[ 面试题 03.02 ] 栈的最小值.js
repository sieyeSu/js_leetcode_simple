/**
 * * 题目名称：栈的最小值
 * * 题目地址：https://leetcode-cn.com/problems/min-stack-lcci
 */
/**
 * 请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。
示例：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */
// * 思路：含有栈的性质，只要当前值在栈中，最小值就一定在栈中，Pop出时也相应可以pop 官方88ms 47.72mb
// 测试用例
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.x_stack = [];
    this.min_stack = [Infinity];
};

MinStack.prototype.push = function (x) {
    this.x_stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));//直接用函数求最值
};

MinStack.prototype.pop = function () {
    this.x_stack.pop();
    this.min_stack.pop();
};

MinStack.prototype.top = function () {
    return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length - 1];
};


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
