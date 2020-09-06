/*
 * @Author: your name
 * @Date: 2020-09-06 16:23:04
 * @LastEditTime: 2020-09-06 16:25:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#剑指 Offer 58 - II 左旋转字符串.js
 */
/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作
 * 的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * 
 * 示例 1：
 *  输入: s = "abcdefg", k = 2
 *  输出: "cdefgab"
 * 
 * 示例 2：
 *  输入: s = "lrloseumgh", k = 6
 *  输出: "umghlrlose"
 * 
 * 限制：
 *  1 <= k < s.length <= 10000
 */

var reverseLeftWords = function(s, n) {

  return s.slice(n) + s.slice(0, n);
};

/**
 * 34 / 34 个通过测试用例
 * 执行用时: 64 ms
 * 内存消耗: 34.1 MB
 * 超过90%
 */