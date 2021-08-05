/*
 * @Author: your name
 * @Date: 2021-08-05 13:41:16
 * @LastEditTime: 2021-08-05 13:41:55
 * @LastEditors: Please set LastEditors
 * @Description: 10- I 斐波那契数列
 * @FilePath: \LeetCode\剑指 Offer\10- I 斐波那契数列.js
 */

/*

写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。


示例 1：

输入：n = 2
输出：1
示例 2：

输入：n = 5
输出：5
*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  let a = 1,
    b = 0;
  for (let i = 1; i < n; i++) {
    a = a + b;
    b = a - b;
    a %= 1000000007;
  }
  return a;
};
