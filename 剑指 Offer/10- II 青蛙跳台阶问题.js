/*
 * @Author: your name
 * @Date: 2021-08-05 13:35:13
 * @LastEditTime: 2021-08-05 13:36:11
 * @LastEditors: Please set LastEditors
 * @Description: 10- II 青蛙跳台阶问题
 * @FilePath: \LeetCode\剑指 Offer\10- II 青蛙跳台阶问题.js
 */

/*
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
示例 3：

输入：n = 0
输出：1

*/

/** 说白了就是斐波那契数列
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n < 2) return 1;
  let a = 1;
  let b = 1;
  for (let l = 2; l <= n; l++) {
    a = a + b;
    b = a - b;
    a = a > 1000000007 ? a % 1000000007 : a;
  }
  return a;
};
