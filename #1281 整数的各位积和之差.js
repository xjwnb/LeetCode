/*
 * @Author: your name
 * @Date: 2020-09-06 16:18:40
 * @LastEditTime: 2020-09-06 16:21:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#1281 整数的各位积和之差.js
 */
/**
 * 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
 * 
 * 示例 1：
 *  输入：n = 234
 *  输出：15 
 *  解释：
 *  各位数之积 = 2 * 3 * 4 = 24 
 *  各位数之和 = 2 + 3 + 4 = 9 
 *  结果 = 24 - 9 = 15
 * 
 * 示例 2：
 *  输入：n = 4421
 *  输出：21
 *  解释： 
 *  各位数之积 = 4 * 4 * 2 * 1 = 32 
 *  各位数之和 = 4 + 4 + 2 + 1 = 11 
 *  结果 = 32 - 11 = 21
 * 
 * 提示：
 *  1 <= n <= 10^5
 */

var subtractProductAndSum = function(n) {
  let str = String(n)
  let arrStr = str.split('')
  let numStr = arrStr.map(item => {
      return Number(item)
  })
  let x = numStr.reduce((a,b) => {
      return a *= b 
  })
  let a = numStr.reduce((a, b) => {
      return a += b
  })
  return x - a
};

/**
 * 123 / 123 个通过测试用例
 * 执行用时: 64 ms
 * 内存消耗: 33.6 MB
 * 超过90%
 */