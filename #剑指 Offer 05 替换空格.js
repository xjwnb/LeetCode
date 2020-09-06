/*
 * @Author: your name
 * @Date: 2020-09-06 21:55:29
 * @LastEditTime: 2020-09-06 21:57:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#剑指 Offer 05 替换空格.js
 */
/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1：
 *  输入：s = "We are happy."
 *  输出："We%20are%20happy."
 * 
 * 限制：
 *  0 <= s 的长度 <= 10000
 * 
 */

var replaceSpace = function(s) {
  var arr = s.split("")
  var newA = arr.map(item => {
      return item === " " ? "%20" : item
  })
  return newA.join("")
};

/**
 * 27 / 27 个通过测试用例
 * 执行用时: 68 ms
 * 内存消耗: 37.7 MB
 * 超过79%
 */