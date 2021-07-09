/*
 * @Author: your name
 * @Date: 2020-09-06 23:14:15
 * @LastEditTime: 2020-09-06 23:16:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#1323 6 和 9 组成的最大数字.js
 */
/**
 * 给你一个仅由数字 6 和 9 组成的正整数 num。
 * 你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。
 * 请返回你可以得到的最大数字。
 * 
 * 示例 1：
 *  输入：num = 9669
 *  输出：9969
 *  解释：
 *  改变第一位数字可以得到 6669 。
 *  改变第二位数字可以得到 9969 。
 *  改变第三位数字可以得到 9699 。
 *  改变第四位数字可以得到 9666 。
 *  其中最大的数字是 9969 。
 * 
 * 示例 2：
 *  输入：num = 9996
 *  输出：9999
 *  解释：将最后一位从 6 变到 9，其结果 9999 是最大的数。
 * 
 * 示例 3：
 *  输入：num = 9999
 *  输出：9999
 *  解释：无需改变就已经是最大的数字了。
 */

var maximum69Number = function (num) {
  var arr = num.toString().split("")
  var n = 0
  arr.map((item, index) => {
      if (item === '9') {
          n++
      }
  })
  if (n === arr.length) {
      return num
  }
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === '6') {
          arr[i] = '9'
          var result = arr.join().replace(/,/g,'')
          
          return Number(result)
      }
  }

};

/**
 * 153 / 153 个通过测试用例
 * 执行用时: 92 ms
 * 内存消耗: 38.2 MB
 * 超过13%
 */