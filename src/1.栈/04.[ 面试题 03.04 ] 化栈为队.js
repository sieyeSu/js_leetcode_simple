/**
 * * ��Ŀ���ƣ���ջΪ��
 * * ��Ŀ��ַ��https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */
/**
 * ʵ��һ��MyQueue�࣬����������ջ��ʵ��һ�����С�
ʾ����
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // ���� 1
queue.pop();   // ���� 1
queue.empty(); // ���� false

˵����

��ֻ��ʹ�ñ�׼��ջ���� -- Ҳ����ֻ�� push to top, peek/pop from top, size �� is empty �����ǺϷ��ġ�
����ʹ�õ�����Ҳ��֧��ջ�������ʹ�� list ���� deque��˫�˶��У���ģ��һ��ջ��ֻҪ�Ǳ�׼��ջ�������ɡ�
�������в���������Ч�� �����磬һ���յĶ��в������ pop ���� peek ��������
 */
// * ˼·��˫ջʵ�ֶ��� 60ms  40.16mb



/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.inStack = []
    this.outStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.inStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.outStack.length) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop())
        }
    }
    return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.outStack.length) {
        return this.inStack[0]
    }
    else {
        return this.outStack[this.outStack.length - 1]
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.outStack.length || this.inStack.length) {
        return false
    }
    else return true
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */