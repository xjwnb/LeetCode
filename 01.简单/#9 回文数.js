/*
 * @Author: your name
 * @Date: 2021-07-09 18:08:52
 * @LastEditTime: 2021-07-09 18:12:22
 * @LastEditors: Please set LastEditors
 * @Description: #9 回文数
 * @FilePath: \Leetcode\01.简单\#9 回文数.js
 */

/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 *
 * 示例 1：
 *  输入：x = 121
 *  输出：true
 *
 * 示例 2：
 *  输入：x = -121
 *  输出：false
 *
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 * 示例 3：
 *  输入：x = 10
 *  输出：false
 *
 * 解释：从右向左读, 为 01 。因此它不是一个回文数。
 *
 * 示例 4：
 *  输入：x = -101
 *  输出：false
 *
 * 提示：
 *  -231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let strX = String(x);
  let xLen = strX.length;
  if (xLen === 1) return true;
  let len = Math.floor(strX.length / 2);
  let flag = false;
  for (let i = 0; i < len; i++) {
    if (strX[i] !== strX[xLen - i - 1]) {
      flag = false;
      break;
    }
    flag = true;
  }
  return flag;
};

/**
 * 11510 / 11510 个通过测试用例
 * 状态：通过
 * 执行用时: 156 ms
 * 内存消耗: 47.2 MB
 */