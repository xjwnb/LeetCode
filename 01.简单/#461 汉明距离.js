/*
 * @Author: your name
 * @Date: 2020-09-06 21:35:49
 * @LastEditTime: 2020-09-06 21:38:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#461 汉明距离.js
 */
/**
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 注意：
 * 0 ≤ x, y < 231.
 * 
 * 示例:
 *  输入: x = 1, y = 4
 *  输出: 2
 *  解释:
 *  1   (0 0 0 1)
 *  4   (0 1 0 0)
 *         ↑   ↑
 *  上面的箭头指出了对应二进制位不同的位置。
 */

var hammingDistance = function(x, y) {
  var a = x ^ y
  var newA = a.toString(2)
  var arr = newA.split("")
  var num = 0
  arr.map(item => {
      return item == 1 ? num++ : ''
  })

  return num
};

/**
 * 149 / 149 个通过测试用例
 * 执行用时: 84 ms
 * 内存消耗: 37.4 MB
 * 超过42%
 */