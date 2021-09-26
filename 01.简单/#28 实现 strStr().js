/*
 * @Author: your name
 * @Date: 2021-09-26 16:26:22
 * @LastEditTime: 2021-09-26 16:27:25
 * @LastEditors: Please set LastEditors
 * @Description: 	#28 实现 strStr()
 * @FilePath: \LeetCode\01.简单\#28 实现 strStr().js
 */

/*
实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

 

说明：

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

 

示例 1：

输入：haystack = "hello", needle = "ll"
输出：2
示例 2：

输入：haystack = "aaaaa", needle = "bba"
输出：-1
示例 3：

输入：haystack = "", needle = ""
输出：0

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) return 0;
  if (haystack.length === 0 && needle.length !== 0) return -1;
  if (haystack.length !== 0 && needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;
  if (needle.length === haystack.length && needle === haystack) return 0;
  let result = -1;
  let index = 0;
  while (index < haystack.length) {
    if (haystack[index] === needle[0]) {
      if (haystack.substr(index, needle.length) === needle) {
        return index;
      }
      index++;
      continue;
    }
    index++;
  }
  return result;
};


/*
80 / 80 个通过测试用例
状态：通过
执行用时: 76 ms
内存消耗: 39.3 MB
*/