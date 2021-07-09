/*
 * @Author: your name
 * @Date: 2021-07-09 17:42:17
 * @LastEditTime: 2021-07-09 18:09:32
 * @LastEditors: Please set LastEditors
 * @Description: #7 整数反转
 * @FilePath: \Leetcode\01.简单\#7 整数反转.js
 */

/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 示例 1：
 *  输入：x = 123
 *  输出：321
 * 
 * 示例 2：
 *  输入：x = -123
 *  输出：-321
 * 
 * 示例 3：
 *  输入：x = 120
 *  输出：21
 * 
 * 示例 4：
 *  输入：x = 0
 *  输出：0
 * 
 * 提示：
 *  -231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let strX = String(x);
  let result = 0;
  if (x < 0) {
      result = -parseFloat(strX.slice(1).split("").reverse().join(""));
  } else if (x === 0) {
      return 0;
  } else {
      result = parseFloat(strX.split("").reverse().join(""));
  }
  if (result <= Math.pow(-2, 31) || result >= Math.pow(2, 31) - 1) {
      return 0;
  }
  return result;
};


/**
 * 1032 / 1032 个通过测试用例
 * 状态：通过
 * 执行用时: 92 ms
 * 内存消耗: 39.3 MB
 */