/*
 * @Author: your name
 * @Date: 2021-09-24 16:55:21
 * @LastEditTime: 2021-09-24 16:56:28
 * @LastEditors: Please set LastEditors
 * @Description: #14 最长公共前缀
 * @FilePath: \LeetCode\01.简单\#14 最长公共前缀.js
 */

/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs.length > 0 ? strs[0] : "";

  for (let i = 1; i < strs.length; i++) {
    // if (result)
    if (result[0] !== strs[i][0]) {
      result = "";
      break;
    }
    if (strs[i].length < result.length) {
      result = result.substr(0, strs[i].length);
    }

    for (let j = 1; j < result.length; j++) {
      if (result[j] !== strs[i][j]) {
        result = result.substring(0, j);
        break;
      }
    }
  }

  return result;
};


/*
123 / 123 个通过测试用例
状态：通过
执行用时: 88 ms
内存消耗: 40.2 MB
*/