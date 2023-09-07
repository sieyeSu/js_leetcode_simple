/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 */
/**
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

 

示例 1：

输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
 */
// * 思路：
//解法1：队列  176ms 50.3mb
//     把请求时间压入栈，每次取最外即最近的数字-3000，左右均闭合，则shift出>=最小值的，返回队列长度
// 解法2：数组  284ms 49.02mb
//       压入栈，数组从尾遍历
// 解法3：双指针 380ms 49.05mb
//      左记录最小符合条件位置，右本次记录，返回右-左长度



var RecentCounter = function () {
    this.request = []
    // this.min = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    //1.
    // this.request.push(t)
    // while (this.request[0] <= t - 3000) {
    //     this.request.shift()
    // }
    // return this.request.length

    //2.
    // this.request.push(t)
    // this.min = t - 3000
    // var count = 0
    // for (var index = this.request.length - 1; index >= 0; index--) {
    //     if (this.request[index] >= this.min) {
    //         count++
    //     }
    //     else break;
    // }
    // return count

    //3.
    this.request.push(t)
    var left = 0, right = this.request.length;
    while (this.request[left] < t - 3000) {
        left++
    }
    return right - left;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

